import{e}from"./app.5fea58dc.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const r={},s=e(`<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Don&#39;t forget to run <code>yarn add vue3-emitter</code> to upgrade the package after you follow this guide.</p></div><h1 id="upgrading" tabindex="-1"><a class="header-anchor" href="#upgrading" aria-hidden="true">#</a> Upgrading</h1><p>This guide will help you upgrade from older versions (if there&#39;s any possible problems).</p><h2 id="from-v1" tabindex="-1"><a class="header-anchor" href="#from-v1" aria-hidden="true">#</a> From v1</h2><h3 id="default-exports-changed" tabindex="-1"><a class="header-anchor" href="#default-exports-changed" aria-hidden="true">#</a> Default exports changed</h3><p>Now there is no default export, please check README installation part.</p><h4 id="before" tabindex="-1"><a class="header-anchor" href="#before" aria-hidden="true">#</a> Before</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> emitter <span class="token keyword">from</span> <span class="token string">&#39;vue3-emitter&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="after" tabindex="-1"><a class="header-anchor" href="#after" aria-hidden="true">#</a> After</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> emitter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue3-emitter&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,10);function n(t,i){return s}var c=a(r,[["render",n]]);export{c as default};
