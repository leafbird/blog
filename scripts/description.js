'use strict';

const { stripHTML } = require('hexo-util');

const MAX_LENGTH = 150;
const MIN_SENTENCE_LENGTH = 40;
const rBlockEnd = /<(br|\/p|\/h[1-6]|\/li|\/div|\/blockquote)[^>]*>/gi;

function summarize(html) {
  const text = stripHTML(html.replace(rBlockEnd, ' ')).replace(/\s+/g, ' ').trim();
  if (text.length <= MAX_LENGTH) return text;

  const head = text.substring(0, MAX_LENGTH + 1);
  let cut = -1;
  const rSentenceEnd = /[.!?…](?=\s)/g;
  let match;
  while ((match = rSentenceEnd.exec(head)) !== null) cut = match.index + 1;
  if (cut >= MIN_SENTENCE_LENGTH) return text.substring(0, cut);

  const space = head.lastIndexOf(' ');
  return text.substring(0, space > 0 ? space : MAX_LENGTH) + '…';
}

// Hexo's open_graph cuts a missing description at 200 chars mid-word; run after the excerpt filter (priority 10).
hexo.extend.filter.register('after_post_render', data => {
  if (data.description) return data;
  const summary = summarize(data.excerpt || '') || summarize(data.content || '');
  if (summary) data.description = summary;
  return data;
}, 20);
