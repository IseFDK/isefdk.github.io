import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import {projects} from '../src/projects.mjs';
const all=[];function walk(dir){for(const file of fs.readdirSync(dir)){const p=path.join(dir,file);fs.statSync(p).isDirectory()?walk(p):all.push(p);}}walk('docs');
const pages=all.filter(p=>p.endsWith('.html'));
assert.equal(pages.length,projects.length+7); // 5 general routes + cases + 404 + unlisted QA.
for(const file of pages){const html=fs.readFileSync(file,'utf8');assert.ok(/<html lang=/.test(html),file);if(file.endsWith('qa.html'))continue;assert.equal((html.match(/<h1(?: |>) /g)||[]).length,0);assert.equal((html.match(/<h1[ >]/g)||[]).length,1,'one h1 '+file);assert.ok(html.includes('id="main"'));assert.ok(!html.includes('schoditsya'));assert.ok(!html.includes('perch-studio'));assert.ok(!html.includes('lumen-lens'));assert.ok(!/<form/.test(html));assert.ok(html.includes('type="module"'));assert.ok(/style\.css\?v=[a-f0-9]{12}/.test(html));for(const m of html.matchAll(/(?:href|src)="([^"#]+)"/g)){const value=m[1].split(/[?#]/)[0];if(!value||/^https?:|mailto:|data:/.test(value))continue;const local=path.resolve(path.dirname(file),value);assert.ok(local.startsWith(path.resolve('docs')),'escape '+value);assert.ok(fs.existsSync(local),'missing '+file+' '+value);if(fs.statSync(local).isDirectory())assert.ok(fs.existsSync(path.join(local,'index.html')));}}
// Every published route exposes the same pseudonymous author identity.
for (const file of pages.filter(p=>!p.endsWith('qa.html'))) {
 const html=fs.readFileSync(file,'utf8');
 assert.match(html, /<title>[^<]+ — IseFDK<\/title>/, 'author title '+file);
 assert.ok(html.includes('aria-label="IseFDK — главная"'), 'author navigation '+file);
 assert.ok(html.includes('<span class="brand-mark" aria-hidden="true">i.</span>'), 'author monogram '+file);
 assert.match(html, /<div class="footer-bottom"><a [^>]+>IseFDK<\/a>/, 'author footer '+file);
}
assert.equal(JSON.parse(fs.readFileSync('package.json','utf8')).name,'isefdk-portfolio');
const css=fs.readFileSync('docs/assets/style.css','utf8');for(const m of css.matchAll(/url\(['"]?([^'"\)]+)['"]?\)/g))assert.ok(fs.existsSync(path.resolve('docs/assets',m[1])),'css asset '+m[1]);
const app=fs.readFileSync('docs/assets/app.mjs','utf8');assert.ok(/projects\.mjs\?v=[a-f0-9]{12}/.test(app));assert.ok(css.includes('prefers-reduced-motion'));assert.ok(css.includes('focus-visible'));assert.ok(fs.existsSync('docs/.nojekyll'));
const home=fs.readFileSync('docs/index.html','utf8');
assert.match(home,/<h3 data-stage-name>LAST SIGNAL<\/h3>/);
assert.match(home,/<a class="button dark" data-stage-link href="work\/last-signal\/">/);
assert.match(home,/<div class="stage-slide" data-stage-slide="last-signal" >/, 'featured slide initially visible');
assert.equal((home.match(/data-stage-select=/g)||[]).length,projects.length);
assert.match(home,/data-stage-select="last-signal" aria-pressed="true"/);
for(const p of projects){assert.ok(home.includes(`href="work/${p.id}/"`));assert.ok(fs.existsSync(`docs/work/${p.id}/index.html`));}
const last=fs.readFileSync('docs/work/last-signal/index.html','utf8');
assert.match(last,/<link rel="canonical" href="https:\/\/isefdk.github.io\/work\/last-signal\/">/);
assert.ok(last.includes('story-art-grid'));assert.ok(last.includes('last-signal-portrait.webp'));
assert.ok(last.includes('https://isefdk.github.io/last-signal/notes.html'));assert.ok(last.includes('https://isefdk.github.io/last-signal/read.html'));
const sitemap=fs.readFileSync('docs/sitemap.xml','utf8');assert.equal((sitemap.match(/<loc>/g)||[]).length,projects.length+5);assert.ok(sitemap.includes('work/last-signal/'));
const hashes=all.map(p=>[p,crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex')]);fs.writeFileSync('build-manifest.json',JSON.stringify(hashes,null,2)+'\n');console.log(`Audit passed: ${pages.length} HTML files, local references, ${projects.length} authorized projects, cache hashes, accessibility primitives and Last Signal integration.`);
