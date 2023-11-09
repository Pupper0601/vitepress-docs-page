import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.1b72a0e7.js";const C=JSON.parse('{"title":"十七、零散的知识","description":"","frontmatter":{},"headers":[],"relativePath":"code_language/10-Python基础/17-零散的知识.md","lastUpdated":1699515980000}'),o={name:"code_language/10-Python基础/17-零散的知识.md"},p=l(`<h1 id="十七、零散的知识" tabindex="-1">十七、零散的知识 <a class="header-anchor" href="#十七、零散的知识" aria-label="Permalink to &quot;十七、零散的知识&quot;">​</a></h1><h2 id="_1-1-数字时钟样式" tabindex="-1">1.1 数字时钟样式 <a class="header-anchor" href="#_1-1-数字时钟样式" aria-label="Permalink to &quot;1.1 数字时钟样式&quot;">​</a></h2><p>使用 <code>\\r</code> + <code>end=&quot;&quot;</code> 可以实现数字时钟.</p><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;</span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">_hour</span><span style="color:#C792EA;">:-02d</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">:</span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">_minute</span><span style="color:#C792EA;">:-02d</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">:</span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">_second</span><span style="color:#C792EA;">:-02d</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">end</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">time</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sleep</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">\\r</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">end</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="https://img.pupper.cn/img/202304241124676.gif" alt=""></p><h2 id="_1-2-加载进度条样式" tabindex="-1">1.2 加载进度条样式 <a class="header-anchor" href="#_1-2-加载进度条样式" aria-label="Permalink to &quot;1.2 加载进度条样式&quot;">​</a></h2><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">🟥</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">end</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">time</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sleep</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="https://img.pupper.cn/img/202304241132623.gif" alt="Kapture 2023-04-24 at 11.31.29"></p>`,8),e=[p];function t(r,c,F,i,y,D){return a(),n("div",null,e)}const u=s(o,[["render",t]]);export{C as __pageData,u as default};
