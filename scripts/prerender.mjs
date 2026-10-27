// Injects the server-rendered App into dist/index.html so crawlers that
// don't run JavaScript (most AI crawlers) still see the page content.
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { render } from '../dist-ssr/entry-server.js';

const file = 'dist/index.html';
const html = readFileSync(file, 'utf8');
const placeholder = '<div id="root"></div>';
if (!html.includes(placeholder)) {
  throw new Error(`prerender: ${placeholder} not found in ${file}`);
}
writeFileSync(file, html.replace(placeholder, `<div id="root">${render()}</div>`));
rmSync('dist-ssr', { recursive: true, force: true });
console.log('prerender: dist/index.html');
