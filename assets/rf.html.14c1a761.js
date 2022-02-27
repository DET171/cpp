import{r as l,o as p,c as e,a as n,b as o,F as r,d as c,e as s}from"./app.d7bb333f.js";import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";const i={},y=c(`<h1 id="recursive-functions" tabindex="-1"><a class="header-anchor" href="#recursive-functions" aria-hidden="true">#</a> Recursive functions</h1><p>Recursive functions are when the function is called from within the same function.</p><p>Pseudocode:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#002B36;"><code><span class="line"><span style="color:#93A1A1;font-weight:bold;">function</span><span style="color:#839496;"> </span><span style="color:#268BD2;">fn</span><span style="color:#839496;">(a, b) {</span></span>
<span class="line"><span style="color:#839496;">  </span><span style="color:#859900;">if</span><span style="color:#839496;"> (</span><span style="color:#268BD2;">a</span><span style="color:#839496;"> </span><span style="color:#859900;">&lt;=</span><span style="color:#839496;"> </span><span style="color:#268BD2;">b</span><span style="color:#839496;">) {</span></span>
<span class="line"><span style="color:#839496;">    </span><span style="color:#268BD2;">console</span><span style="color:#839496;">.</span><span style="color:#268BD2;">log</span><span style="color:#839496;">(</span><span style="color:#268BD2;">a</span><span style="color:#839496;">);</span></span>
<span class="line"><span style="color:#839496;">    </span><span style="color:#859900;">return</span><span style="color:#839496;"> </span><span style="color:#268BD2;">fn</span><span style="color:#839496;">(</span><span style="color:#268BD2;">a</span><span style="color:#839496;"> </span><span style="color:#859900;">+</span><span style="color:#839496;"> </span><span style="color:#D33682;">1</span><span style="color:#839496;">, </span><span style="color:#268BD2;">b</span><span style="color:#839496;">);</span></span>
<span class="line"><span style="color:#839496;">  }</span></span>
<span class="line"><span style="color:#839496;">}</span></span>
<span class="line"><span style="color:#268BD2;">fn</span><span style="color:#839496;">(</span><span style="color:#D33682;">1</span><span style="color:#839496;">, </span><span style="color:#D33682;">10</span><span style="color:#839496;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Output:</p><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#002B36;"><code><span class="line"><span style="color:#839496;">1</span></span>
<span class="line"><span style="color:#839496;">2</span></span>
<span class="line"><span style="color:#839496;">3</span></span>
<span class="line"><span style="color:#839496;">4</span></span>
<span class="line"><span style="color:#839496;">5</span></span>
<span class="line"><span style="color:#839496;">6</span></span>
<span class="line"><span style="color:#839496;">7</span></span>
<span class="line"><span style="color:#839496;">8</span></span>
<span class="line"><span style="color:#839496;">9</span></span>
<span class="line"><span style="color:#839496;">10</span></span>
<span class="line"><span style="color:#839496;"></span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="uses-in-cp" tabindex="-1"><a class="header-anchor" href="#uses-in-cp" aria-hidden="true">#</a> Uses in CP</h2><p>Well...not a lot, to be honest. It TLEs when the there are too many recursions, but usually works for smaller inputs.</p><p>Example of a recursive function in CP (calculates the Fibonacci sequence):</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="shiki" style="background-color:#002B36;"><code><span class="line"><span style="color:#859900;">#include</span><span style="color:#B58900;"> </span><span style="color:#2AA198;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#859900;">#define</span><span style="color:#B58900;"> </span><span style="color:#268BD2;">endl</span><span style="color:#B58900;"> &quot;\\n&quot;</span></span>
<span class="line"><span style="color:#859900;">#define</span><span style="color:#B58900;"> </span><span style="color:#268BD2;">ll</span><span style="color:#B58900;"> long long</span></span>
<span class="line"></span>
<span class="line"><span style="color:#859900;">using</span><span style="color:#839496;"> </span><span style="color:#93A1A1;font-weight:bold;">namespace</span><span style="color:#839496;"> </span><span style="color:#CB4B16;">std</span><span style="color:#839496;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB4B16;">ll</span><span style="color:#839496;"> </span><span style="color:#268BD2;">sum</span><span style="color:#839496;">(</span><span style="color:#CB4B16;">ll</span><span style="color:#839496;"> n) {</span></span>
<span class="line"><span style="color:#839496;">  </span><span style="color:#859900;">if</span><span style="color:#839496;"> (n </span><span style="color:#859900;">&lt;=</span><span style="color:#839496;"> </span><span style="color:#D33682;">1</span><span style="color:#839496;">) </span><span style="color:#859900;">return</span><span style="color:#839496;"> n;</span></span>
<span class="line"><span style="color:#839496;">  </span><span style="color:#859900;">return</span><span style="color:#839496;"> </span><span style="color:#268BD2;">sum</span><span style="color:#839496;">(n </span><span style="color:#859900;">-</span><span style="color:#839496;"> </span><span style="color:#D33682;">1</span><span style="color:#839496;">) </span><span style="color:#859900;">+</span><span style="color:#839496;"> </span><span style="color:#268BD2;">sum</span><span style="color:#839496;">(n </span><span style="color:#859900;">-</span><span style="color:#839496;"> </span><span style="color:#D33682;">2</span><span style="color:#839496;">);</span></span>
<span class="line"><span style="color:#839496;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">int</span><span style="color:#839496;"> </span><span style="color:#268BD2;">main</span><span style="color:#839496;">() {</span></span>
<span class="line"><span style="color:#839496;">  ll n;</span></span>
<span class="line"><span style="color:#839496;">  cin </span><span style="color:#859900;">&gt;&gt;</span><span style="color:#839496;"> n;</span></span>
<span class="line"><span style="color:#839496;">  </span><span style="color:#859900;">for</span><span style="color:#839496;"> (</span><span style="color:#93A1A1;font-weight:bold;">int</span><span style="color:#839496;"> i </span><span style="color:#859900;">=</span><span style="color:#839496;"> </span><span style="color:#D33682;">0</span><span style="color:#839496;">; i </span><span style="color:#859900;">&lt;</span><span style="color:#839496;"> n </span><span style="color:#859900;">+</span><span style="color:#839496;"> </span><span style="color:#D33682;">1</span><span style="color:#839496;">; i</span><span style="color:#859900;">++</span><span style="color:#839496;">) cout </span><span style="color:#859900;">&lt;&lt;</span><span style="color:#839496;"> </span><span style="color:#268BD2;">sum</span><span style="color:#839496;">(i) </span><span style="color:#859900;">&lt;&lt;</span><span style="color:#839496;"> endl;</span></span>
<span class="line"><span style="color:#839496;">}</span></span>
<span class="line"></span></code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><em>The highlighted part is the recursive function.</em></p>`,11),b=s("The above solution was written for "),u={href:"https://codebreaker.xyz/problem/fibo",target:"_blank",rel:"noopener noreferrer"},d=s("this problem"),m=s(", but TLE'd on one of the last test cases.");function h(f,g){const a=l("ExternalLinkIcon");return p(),e(r,null,[y,n("p",null,[b,n("a",u,[d,o(a)]),m])],64)}var D=t(i,[["render",h]]);export{D as default};
