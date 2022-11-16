import{_ as n,o as a,c as s,e}from"./app.c2df3201.js";const t={},p=e(`<h1 id="meet-in-the-middle" tabindex="-1"><a class="header-anchor" href="#meet-in-the-middle" aria-hidden="true">#</a> Meet in the middle</h1><h2 id="meet-in-the-middle-explanation" tabindex="-1"><a class="header-anchor" href="#meet-in-the-middle-explanation" aria-hidden="true">#</a> Meet in the middle explanation</h2><p>You want to check the sum of everything</p><p>O(N²) is too slow for you so you hire the man in the middle&#39;s help.</p><p>He tells you there is an epic thing called meet in the middle.</p><p>What this does is that it swaps N and 2 around, making it O(2ⁿ).</p><p>Ehh heres the code:</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>  <span class="token function">sort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>arr<span class="token operator">+</span>v1<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> ans<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">auto</span> it <span class="token operator">:</span> v<span class="token punctuation">)</span><span class="token punctuation">{</span>
    ans<span class="token operator">+=</span><span class="token function">upper_bound</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>arr<span class="token operator">+</span>v1<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>k<span class="token operator">-</span>it<span class="token punctuation">)</span><span class="token operator">-</span>arr<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[p];function i(c,l){return a(),s("div",null,o)}const r=n(t,[["render",i],["__file","mitm.html.vue"]]);export{r as default};
