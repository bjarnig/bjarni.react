import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { EditorView, basicSetup } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';
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

// A ?key= in the URL is stored once and then removed, so it never lingers on a projected screen.
function takeKey() {
  const params = new URLSearchParams(window.location.search);
  const fromUrl = params.get('key');
  if (fromUrl) {
    localStorage.setItem('share-key', fromUrl);
    window.history.replaceState(null, '', window.location.pathname);
  }
  return localStorage.getItem('share-key');
}

function Share() {
  const { room } = useParams();
  const host = useRef(null);
  const view = useRef(null);
  const [writeKey, setWriteKey] = useState(() => takeKey());
  const [status, setStatus] = useState('loading');
  const [copied, setCopied] = useState(false);
  const url = `${API}?room=${encodeURIComponent(room)}`;

  useEffect(() => {
    let lastUpdated = -1;
    let saveTimer;
    let stopped = false;

    const save = async (text) => {
      setStatus('saving');
      try {
        const res = await fetch(url, {
          method: 'PUT',
          headers: { 'content-type': 'application/json', 'x-key': writeKey },
          body: JSON.stringify({ text }),
        });
        if (res.status === 403) {
          localStorage.removeItem('share-key');
          setWriteKey(null);
          return;
        }
        setStatus(res.ok ? 'saved' : 'error');
      } catch {
        setStatus('error');
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
          EditorState.readOnly.of(!writeKey),
          EditorView.updateListener.of((u) => {
            if (!writeKey || !u.docChanged || u.transactions.some((tr) => tr.isUserEvent('load'))) return;
            clearTimeout(saveTimer);
            setStatus('typing');
            saveTimer = setTimeout(() => save(u.state.doc.toString()), SAVE_DELAY_MS);
          }),
        ],
      }),
    });

    const load = async () => {
      try {
        const res = await fetch(url, { cache: 'no-store' });
        const doc = await res.json();
        if (!stopped && doc.updated !== lastUpdated) {
          lastUpdated = doc.updated;
          const v = view.current;
          v.dispatch({ changes: { from: 0, to: v.state.doc.length, insert: doc.text }, userEvent: 'load' });
        }
        setStatus(writeKey ? 'saved' : 'live');
      } catch {
        setStatus('offline');
      }
    };

    load();
    // Only readers poll; the writer's copy is the source of truth.
    const poll = writeKey ? null : setInterval(() => !document.hidden && load(), POLL_MS);

    return () => {
      stopped = true;
      clearInterval(poll);
      clearTimeout(saveTimer);
      view.current.destroy();
    };
  }, [url, writeKey]);

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
          {writeKey ? `editing, ${status}` : status}
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
