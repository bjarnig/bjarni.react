import { StreamLanguage } from '@codemirror/language';

const KEYWORDS = /^(arg|var|classvar|const|this|super|thisProcess|thisThread|currentEnvironment|nil|true|false|inf)\b/;

function token(stream, state) {
  // Block comments nest in sclang, hence a depth counter rather than a flag.
  if (state.inComment) {
    while (!stream.eol()) {
      if (stream.match('/*')) state.inComment++;
      else if (stream.match('*/')) { if (--state.inComment === 0) break; }
      else stream.next();
    }
    return 'comment';
  }
  if (stream.eatSpace()) return null;
  if (stream.match('//')) { stream.skipToEnd(); return 'comment'; }
  if (stream.match('/*')) { state.inComment = 1; return token(stream, state); }
  if (stream.match(/^"(?:[^"\\]|\\.)*"?/)) return 'string';
  if (stream.match(/^'(?:[^'\\]|\\.)*'?/)) return 'atom';
  if (stream.match(/^\\\w+/)) return 'atom';
  if (stream.match(/^\w+:/)) return 'propertyName';
  if (stream.match(/^~\w+/)) return 'variableName.special';
  if (stream.match(/^\$\\?./)) return 'string';
  if (stream.match(/^-?\d+(\.\d+)?(e-?\d+)?(pi)?\b/) || stream.match(/^pi\b/)) return 'number';
  if (stream.match(KEYWORDS)) return 'keyword';
  if (stream.match(/^[A-Z]\w*/)) return 'className';
  if (stream.match(/^\w+/)) return 'variableName';
  stream.next();
  return null;
}

export const supercollider = StreamLanguage.define({
  startState: () => ({ inComment: 0 }),
  token,
  languageData: { commentTokens: { line: '//', block: { open: '/*', close: '*/' } } },
});
