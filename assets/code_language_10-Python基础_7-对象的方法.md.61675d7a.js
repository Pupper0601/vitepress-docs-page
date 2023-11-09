import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.1b72a0e7.js";const C=JSON.parse('{"title":"七、对象的方法","description":"","frontmatter":{},"headers":[],"relativePath":"code_language/10-Python基础/7-对象的方法.md","lastUpdated":1699515980000}'),p={name:"code_language/10-Python基础/7-对象的方法.md"},o=l(`<h1 id="七、对象的方法" tabindex="-1">七、对象的方法 <a class="header-anchor" href="#七、对象的方法" aria-label="Permalink to &quot;七、对象的方法&quot;">​</a></h1><p>所谓 <strong>对象方法</strong> 就是只属于 <strong>某个对象</strong> 的函数。</p><p>调用对象的方法和调用函数一样，只要在前面加上 <strong>所属对象</strong> 和 <strong>.</strong></p><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># var1 是一个列表对象</span></span>
<span class="line"><span style="color:#A6ACCD;">var1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 列表对象都有 reverse方法</span></span>
<span class="line"><span style="color:#A6ACCD;">var1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reverse</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">var1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">		</span><span style="color:#676E95;font-style:italic;"># [7, 6, 5, 4, 3, 2, 1]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="一、字符串的方法" tabindex="-1">一、字符串的方法 <a class="header-anchor" href="#一、字符串的方法" aria-label="Permalink to &quot;一、字符串的方法&quot;">​</a></h2><h3 id="count" tabindex="-1">count <a class="header-anchor" href="#count" aria-label="Permalink to &quot;count&quot;">​</a></h3><p><code>count</code> 方法：可以返回字符串对象包含了多少个 <strong>参数指定的</strong> 字符串。</p><p>第二个参数为开始位置，第三个参数为结束位置。</p><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">str1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">我们今天不去上学，我们去踢足球</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">str1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">count</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">我们</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">		</span><span style="color:#676E95;font-style:italic;"># 2</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="find" tabindex="-1">find <a class="header-anchor" href="#find" aria-label="Permalink to &quot;find&quot;">​</a></h3><p><code>find</code> 方法：会在字符串中查找 参数 字符串，并返回该 参数字符串 在其中 <code>第一个</code> 出现的位置索引。</p><p>如果字符串对象中 <code>没有</code> 要查找的参数字符串，就会返回 <code>-1</code>。</p><p>第二个参数为开始位置，第三个参数为结束位置。</p><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">str1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">我们今天不去上学，我们去踢足球</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">str1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">find</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">我们</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">		</span><span style="color:#676E95;font-style:italic;"># 0</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="split、splitlines" tabindex="-1">split、splitlines <a class="header-anchor" href="#split、splitlines" aria-label="Permalink to &quot;split、splitlines&quot;">​</a></h3><ul><li><code>split</code> 方法：以参数字符串为 <strong>分隔符</strong>，将字符串 切割为多个 字符串，作为元素存入一个 <strong>列表</strong> 并返回这个列表，分隔符本身会被丢弃掉。</li></ul><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">str1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">小张：79 | 小李：88 | 小赵：83</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">str1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">|</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">		</span><span style="color:#676E95;font-style:italic;"># [&#39;小张：79 &#39;, &#39; 小李：88 &#39;, &#39; 小赵：83&#39;]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li><code>splitlines</code> 方法：将字符串按 <strong>换行符</strong> 进行切割，为元素存入一个 <strong>列表</strong> 并返回这个列表。</li></ul><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">str1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#C3E88D;">小王  10000元</span></span>
<span class="line"><span style="color:#C3E88D;">小李  20000元</span></span>
<span class="line"><span style="color:#C3E88D;">小徐  15000元</span></span>
<span class="line"><span style="color:#89DDFF;">&#39;&#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">str1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">splitlines</span><span style="color:#89DDFF;">())</span><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;"># [&#39;&#39;, &#39;小王  10000元&#39;, &#39;小李  20000元&#39;, &#39;小徐  15000元&#39;]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>1.<code>splitlines</code> 方法经常用在文件处理中，读出文件内容存入字符串，然后把每行内容依次存入列表。</p></div><h3 id="join" tabindex="-1">join <a class="header-anchor" href="#join" aria-label="Permalink to &quot;join&quot;">​</a></h3><p><code>join</code> 方法和 <code>split</code> 方法正好相反</p><p><code>json</code> 方法：将列表中的字符串元素 以某个字符串为连接符，<strong>连接</strong> 为一个新的字符串</p><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">list1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">小张：79 </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> 小李：88 </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> 小赵：83</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">|</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">list1</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">		</span><span style="color:#676E95;font-style:italic;"># 小张：79 | 小李：88 | 小赵：83</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="strip、lstrip、rstrip" tabindex="-1">strip、lstrip、rstrip <a class="header-anchor" href="#strip、lstrip、rstrip" aria-label="Permalink to &quot;strip、lstrip、rstrip&quot;">​</a></h3><ul><li><code>strip</code> 方法：将字符串 <strong>前后</strong> 的空格删除，但是不会删除字符串中间的空格。</li></ul><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">str1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">      你好   ！   </span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">str1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">strip</span><span style="color:#89DDFF;">())</span><span style="color:#A6ACCD;">		</span><span style="color:#676E95;font-style:italic;"># 你好   ！</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li><code>lstrip</code> 方法：将字符串 **前面（左边）**的空格删除。</li></ul><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">str1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">      你好   ！   </span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">str1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">lstrip</span><span style="color:#89DDFF;">())</span><span style="color:#A6ACCD;">		</span><span style="color:#676E95;font-style:italic;"># 你好   ！   .</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li><code>rstrip</code> 方法：将字符串 **后面（右边）**的空格删除。</li></ul><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">str1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">      你好   ！   </span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">str1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">rstrip</span><span style="color:#89DDFF;">())</span><span style="color:#A6ACCD;">		</span><span style="color:#676E95;font-style:italic;">#       你好   ！</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="replace" tabindex="-1">replace <a class="header-anchor" href="#replace" aria-label="Permalink to &quot;replace&quot;">​</a></h3><p><code>replace</code> 方法：用来 <strong>替换</strong> 字符串中 所有 <strong>指定的</strong> 字符。</p><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">str1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">      你好   ！   </span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">str1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replace</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">		</span><span style="color:#676E95;font-style:italic;"># 你好！</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="startswith、endswith" tabindex="-1">startswith、endswith <a class="header-anchor" href="#startswith、endswith" aria-label="Permalink to &quot;startswith、endswith&quot;">​</a></h3><ul><li><p><code>startswith</code> 方法：检查字符串是否以指定的字符串 <strong>开头</strong>，如果是，则返回 <strong>True</strong>， 否则返回 <strong>False</strong>。</p></li><li><p><code>endswith</code> 方法：检查字符串是否以指定的字符串 <strong>结尾</strong>， 如果是，则返回 <strong>True</strong>，否则返回 <strong>False</strong>。</p><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">str1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">我们今天不去上学，我们去踢足球</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">str1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">startswith</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">我们</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 返回 True</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">str1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">endswith</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">我们</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;"># 返回 False</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li></ul><h3 id="isdigit、isalpha" tabindex="-1">isdigit、isalpha <a class="header-anchor" href="#isdigit、isalpha" aria-label="Permalink to &quot;isdigit、isalpha&quot;">​</a></h3><ul><li><code>isdigit</code> 方法：检查字符串是否全部由 <strong>数字</strong> 构成，如果是，返回 <strong>True</strong>，否则返回 <strong>False</strong>。</li></ul><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">320104190109090879</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">id</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isdigit</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">是纯数字</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">不是纯数字</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li><code>isalpha</code> 方法：检查字符串是否全部由 <strong>字母</strong> 构成，如果是，返回 <strong>True</strong>，否则返回 <strong>False</strong>。</li></ul><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">id2</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ABCDEFG</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> id2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isalpha</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">是纯字母</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">不是纯字母</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="字符串倒序" tabindex="-1">字符串倒序 <a class="header-anchor" href="#字符串倒序" aria-label="Permalink to &quot;字符串倒序&quot;">​</a></h3><p>通过 <strong>切片</strong> <code>[::-1]</code> 操作可以将字符串 <strong>倒序</strong> 排列。</p><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">str1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">字符串的倒序</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">reverse </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> str1</span><span style="color:#89DDFF;">[::-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">reverse</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">		</span><span style="color:#676E95;font-style:italic;"># 序倒的串符字</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="列表的方法" tabindex="-1">列表的方法 <a class="header-anchor" href="#列表的方法" aria-label="Permalink to &quot;列表的方法&quot;">​</a></h2><h3 id="append" tabindex="-1">append <a class="header-anchor" href="#append" aria-label="Permalink to &quot;append&quot;">​</a></h3><p><code>append</code> 方法：可以在列表的 <strong>末尾</strong> 添加一个元素。</p><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">list1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3.14</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">list1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">你好</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">list1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">		</span><span style="color:#676E95;font-style:italic;"># [1, 2, 3.14, &#39;hello&#39;， &#39;你好&#39;]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p><code>appdend</code> 方法的返回值是 <strong>None</strong> ，而不是一个新列表。</p></div><h3 id="insert" tabindex="-1">insert <a class="header-anchor" href="#insert" aria-label="Permalink to &quot;insert&quot;">​</a></h3><p><code>insert</code> 方法：在列表 <strong>指定</strong> 的位置添加一个元素。</p><p>第一个参数为 需要插入列表位置的 <strong>下标</strong> ，第二个参数为 需要插入的 <strong>元素</strong>。</p><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3.14</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">python3.vip</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">insert</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">你好</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">a</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;"># [&#39;你好&#39;, 1, 2, 3.14, &#39;python3.vip&#39;]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="pop" tabindex="-1">pop <a class="header-anchor" href="#pop" aria-label="Permalink to &quot;pop&quot;">​</a></h3><p><code>pop</code> 方法：通过 <strong>下标</strong> 删除列表中指定的元素。当 <strong>参数为空</strong> 时，则默认删除列表最后一个元素。</p><p><code>pop</code> 方法可以返回 <strong>被删除</strong> 的元素。</p><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3.14</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">python3.vip</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pop</span><span style="color:#89DDFF;">())</span><span style="color:#A6ACCD;">		</span><span style="color:#676E95;font-style:italic;"># [1, 2, 3.14]</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pop</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">		</span><span style="color:#676E95;font-style:italic;"># [1, 3.14]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="remove" tabindex="-1">remove <a class="header-anchor" href="#remove" aria-label="Permalink to &quot;remove&quot;">​</a></h3><p><code>remove</code> 方法：根据 <strong>具体的值</strong> 删除列表中找到的 <strong>第一个</strong> 的元素。</p><p><code>remove</code> 方法的返回值为 <strong>None</strong></p><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">c</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">var1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">var1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">		</span><span style="color:#676E95;font-style:italic;"># [&#39;b&#39;, &#39;c&#39;, &#39;a&#39;]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="reverse" tabindex="-1">reverse <a class="header-anchor" href="#reverse" aria-label="Permalink to &quot;reverse&quot;">​</a></h3><p><code>reverse</code> 方法：可以将列表进行 <strong>倒序</strong> 排列。</p><p><code>reverse</code> 方法的返回值为 <strong>None</strong></p><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">var1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reverse</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">var1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">		</span><span style="color:#676E95;font-style:italic;"># [7, 6, 5, 4, 3, 2, 1]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="index" tabindex="-1">index <a class="header-anchor" href="#index" aria-label="Permalink to &quot;index&quot;">​</a></h3><p><code>index</code> 方法：可以根据 <strong>参数对象</strong> 返回在列表中的下标。</p><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">idx </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> var1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">index</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">idx</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">		</span><span style="color:#676E95;font-style:italic;"># 4</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="sort" tabindex="-1">sort <a class="header-anchor" href="#sort" aria-label="Permalink to &quot;sort&quot;">​</a></h3><p><code>sort</code> 方法：将列表中的元素进行 <strong>排序</strong> 。</p><p><code>sort</code> 方法的返回值为 <strong>None</strong></p><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">numbers </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">numbers</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sort</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">numbers</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">		</span><span style="color:#676E95;font-style:italic;"># [2, 3, 7, 8, 9]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,72),e=[o];function t(r,c,i,F,D,y){return n(),a("div",null,e)}const A=s(p,[["render",t]]);export{C as __pageData,A as default};
