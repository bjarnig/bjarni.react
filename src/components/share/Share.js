import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { EditorView, basicSetup } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';
import DiffMatchPatch from 'diff-match-patch';
import { supercollider } from './supercollider';
import './share.css';

const API = import.meta.env.VITE_SHARE_API || 'https://gsuogahoimnehlfzjf3uco72za0vyqsk.lambda-url.eu-central-1.on.aws/';
const POLL_MS = 2000;
const SAVE_DELAY_MS = 400;

const scHighlight = HighlightStyle.define([
  { tag: t.comment, color: '#7f8c8d', fontStyle: 'italic' },
  { tag: t.string, color: '#98c379' },
  { tag: t.atom, color: '#56b6c2' },
  { tag: t.number, color: '#d19a66' },
  { tag: t.keyword, color: '#c678dd' },
  { tag: t.className, color: '#61afef' },
  { tag: t.propertyName, color: '#e5c07b' },
  { tag: t.special(t.variableName), color: '#e06c75' },
]);

const darkTheme = EditorView.theme({
  '&': { backgroundColor: '#1e2127', color: '#d7dae0', height: '100%' },
  '.cm-content': { caretColor: '#fff' },
  '.cm-gutters': { backgroundColor: '#1e2127', color: '#5c6370', border: 'none' },
  '.cm-activeLine, .cm-activeLineGutter': { backgroundColor: '#2a2e36' },
  '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, ::selection': { backgroundColor: '#3e4451' },
}, { dark: true });

const dmp = new DiffMatchPatch();

function Share() {
  const { room } = useParams();
  const host = useRef(null);
  const view = useRef(null);
  const [status, setStatus] = useState('loading');
  const [copied, setCopied] = useState(false);
  const url = `${API}?room=${encodeURIComponent(room)}`;

  useEffect(() => {
    let baseText = '';
    let baseUpdated = null;
    let saveTimer;
    let busy = false;
    let stopped = false;

    // Replace only the differing middle so the reader's cursor and scroll stay put.
    const setText = (text) => {
      const v = view.current;
      const old = v.state.doc.toString();
      if (old === text) return;
      let from = 0;
      while (from < old.length && from < text.length && old[from] === text[from]) from++;
      let toOld = old.length;
      let toNew = text.length;
      while (toOld > from && toNew > from && old[toOld - 1] === text[toNew - 1]) { toOld--; toNew--; }
      v.dispatch({ changes: { from, to: toOld, insert: text.slice(from, toNew) }, userEvent: 'remote' });
    };

    // Re-apply local edits made since the last sync on top of the server's newer text.
    const absorb = (doc) => {
      const mine = view.current.state.doc.toString();
      const merged = mine === baseText ? doc.text : dmp.patch_apply(dmp.patch_make(baseText, mine), doc.text)[0];
      baseText = doc.text;
      baseUpdated = doc.updated;
      setText(merged);
    };

    const sync = async () => {
      if (busy || stopped) return;
      busy = true;
      try {
        const mine = view.current.state.doc.toString();
        if (baseUpdated !== null && mine !== baseText) {
          setStatus('saving');
          const res = await fetch(url, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ text: mine, base: baseUpdated }),
          });
          const body = await res.json();
          if (res.ok) { baseText = mine; baseUpdated = body.updated; }
          else if (res.status === 409) absorb(body);
          else throw new Error(body.error);
        } else {
          const doc = await (await fetch(url, { cache: 'no-store' })).json();
          if (doc.updated !== baseUpdated) absorb(doc);
        }
        setStatus('saved');
      } catch {
        setStatus('offline');
      } finally {
        busy = false;
      }
      if (!stopped && view.current.state.doc.toString() !== baseText) {
        clearTimeout(saveTimer);
        saveTimer = setTimeout(sync, SAVE_DELAY_MS);
      }
    };

    view.current = new EditorView({
      parent: host.current,
      state: EditorState.create({
        extensions: [
          basicSetup,
          supercollider,
          syntaxHighlighting(scHighlight),
          darkTheme,
          EditorView.updateListener.of((u) => {
            if (!u.docChanged || u.transactions.every((tr) => tr.isUserEvent('remote'))) return;
            clearTimeout(saveTimer);
            setStatus('saving');
            saveTimer = setTimeout(sync, SAVE_DELAY_MS);
          }),
        ],
      }),
    });

    sync();
    const poll = setInterval(() => !document.hidden && sync(), POLL_MS);

    return () => {
      stopped = true;
      clearInterval(poll);
      clearTimeout(saveTimer);
      view.current.destroy();
    };
  }, [url]);

  const copy = async () => {
    await navigator.clipboard.writeText(view.current.state.doc.toString());
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="share-page">
      <Helmet>
        <title>{`${room} code`}</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="share-bar">
        <Link className="share-home" to="/">bjarni gunnarsson</Link>
        <span className="share-room">{room}</span>
        <span className={`share-status share-status-${status}`}>
          {status}
        </span>
        <button type="button" className="share-copy" onClick={copy}>
          {copied ? 'copied' : 'copy all'}
        </button>
      </div>
      <div className="share-editor" ref={host} />
    </div>
  );
}

export default Share;
