import{e as s}from"./app.5fea58dc.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=s(`<h1 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h1><p>This library is fully using TypeScript and it exports types for everything. So your project can take advantage of the library if you&#39;re using TypeScript as well.</p><h2 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> Setup</h2><p>The setup changes a little bit, add this on top of your application (<strong>your main file</strong>):</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token constant">POST_PICTURE_EVENT</span> <span class="token operator">=</span> <span class="token string">&#39;picture.post.event&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">PostPicturePayload</span> <span class="token punctuation">{</span>
  image<span class="token operator">:</span> <span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token builtin">string</span>
    description<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token punctuation">}</span>
  user_id<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;vue3-emitter&#39;</span> <span class="token punctuation">{</span>
  <span class="token keyword">interface</span> <span class="token class-name">Events</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token constant">POST_PICTURE_EVENT</span><span class="token punctuation">]</span><span class="token operator">:</span> PostPicturePayload
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,5);function p(t,r){return e}var l=n(a,[["render",p]]);export{l as default};
