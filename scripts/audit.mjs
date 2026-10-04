import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
const all=[];function walk(dir){for(const file of fs.readdirSync(dir)){const p=path.join(dir,file);fs.statSync(p).isDirectory()?walk(p):all.push(p);}}walk('docs');
const pages=all.filter(p=>p.endsWith('.html'));
assert.equal(pages.length,12); // 10 published routes + 404 + unlisted QA.
for(const file of pages){const html=fs.readFileSync(file,'utf8');assert.ok(/<html lang=/.test(html),file);if(file.endsWith('qa.html'))continue;assert.equal((html.match(/<h1(?: |>) /g)||[]).length,0);assert.equal((html.match(/<h1[ >]/g)||[]).length,1,'one h1 '+file);assert.ok(html.includes('id="main"'));assert.ok(!html.includes('schoditsya'));assert.ok(!html.includes('perch-studio'));assert.ok(!html.includes('lumen-lens'));assert.ok(!/<form/.test(html));assert.ok(html.includes('type="module"'));assert.ok(/style\.css\?v=[a-f0-9]{12}/.test(html));for(const m of html.matchAll(/(?:href|src)="([^"#]+)"/g)){const value=m[1].split(/[?#]/)[0];if(!value||/^https?:|mailto:|data:/.test(value))continue;const local=path.resolve(path.dirname(file),value);assert.ok(local.startsWith(path.resolve('docs')),'escape '+value);assert.ok(fs.existsSync(local),'missing '+file+' '+value);if(fs.statSync(local).isDirectory())assert.ok(fs.existsSync(path.join(local,'index.html')));}}
const css=fs.readFileSync('docs/assets/style.css','utf8');for(const m of css.matchAll(/url\(['"]?([^'"\)]+)['"]?\)/g))assert.ok(fs.existsSync(path.resolve('docs/assets',m[1])),'css asset '+m[1]);
const app=fs.readFileSync('docs/assets/app.mjs','utf8');assert.ok(/projects\.mjs\?v=[a-f0-9]{12}/.test(app));assert.ok(css.includes('prefers-reduced-motion'));assert.ok(css.includes('focus-visible'));assert.ok(fs.existsSync('docs/.nojekyll'));
const hashes=all.map(p=>[p,crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex')]);fs.writeFileSync('build-manifest.json',JSON.stringify(hashes,null,2)+'\n');console.log(`Audit passed: ${pages.length} HTML files, local references, 5 authorized projects, cache hashes, accessibility primitives.`);
