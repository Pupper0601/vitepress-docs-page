import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.1b72a0e7.js";const A=JSON.parse('{"title":"十、文件读写","description":"","frontmatter":{},"headers":[],"relativePath":"code_language/10-Python基础/10-文件读写.md","lastUpdated":1699515980000}'),e={name:"code_language/10-Python基础/10-文件读写.md"},p=l(`<h1 id="十、文件读写" tabindex="-1">十、文件读写 <a class="header-anchor" href="#十、文件读写" aria-label="Permalink to &quot;十、文件读写&quot;">​</a></h1><p>文本文件的打开分为两种模式：**文本模式 ** 、<strong>二进制模式</strong></p><p>通常，对 <strong>文本文件</strong> 都是以 <strong>文本模式</strong> 打开。程序读取 和 写入 的都是 <strong>字符串</strong> 对象。</p><h2 id="一、-open-函数" tabindex="-1">一、 open 函数 <a class="header-anchor" href="#一、-open-函数" aria-label="Permalink to &quot;一、 open 函数&quot;">​</a></h2><h3 id="_1-open-函数的参数" tabindex="-1">1. open 函数的参数 <a class="header-anchor" href="#_1-open-函数的参数" aria-label="Permalink to &quot;1. open 函数的参数&quot;">​</a></h3><p><code>open</code> 函数的参数：</p><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">open</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#A6ACCD;font-style:italic;">mode</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">r</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#A6ACCD;font-style:italic;">buffering</span><span style="color:#89DDFF;">=-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#A6ACCD;font-style:italic;">encoding</span><span style="color:#89DDFF;">=None,</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#A6ACCD;font-style:italic;">errors</span><span style="color:#89DDFF;">=None,</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#A6ACCD;font-style:italic;">newline</span><span style="color:#89DDFF;">=None,</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#A6ACCD;font-style:italic;">closefd</span><span style="color:#89DDFF;">=True,</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>参数 <code>file</code><ul><li>指定需要打开文件的 <strong>路径</strong></li><li>可以是 <strong>相对路径</strong></li><li>也可以是 <strong>绝对路径</strong></li></ul></li><li>参数 <code>mode</code><ul><li>指定文件打开的 <strong>模式</strong><ul><li><code>r</code> ：只读文本模式打开，<strong>默认模式</strong></li><li><code>w</code> ：只写文本模式打开</li><li><code>a</code> ： 追加文本模式打开</li></ul></li><li>默认值为 <code>r</code></li></ul></li><li>参数 <code>encoding</code><ul><li>指定读写文本文件时，使用的 <strong>字符编解码</strong> 方式</li><li>未指定参数值时，会使用系统缺省字符编码方式（中文 windows 系统上使用的是 <code>cp936</code>，也就是 <strong>GPK 编码</strong></li></ul></li></ul><h3 id="_2-文件读写模式" tabindex="-1">2. 文件读写模式 <a class="header-anchor" href="#_2-文件读写模式" aria-label="Permalink to &quot;2. 文件读写模式&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">模式</th><th style="text-align:center;">可做操作</th><th style="text-align:center;">文件不存在时</th><th style="text-align:center;">光标位置</th><th style="text-align:center;">是否覆盖</th></tr></thead><tbody><tr><td style="text-align:center;">r</td><td style="text-align:center;">只读</td><td style="text-align:center;">报错</td><td style="text-align:center;">起始</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">r+</td><td style="text-align:center;">可读可写</td><td style="text-align:center;">报错</td><td style="text-align:center;">起始</td><td style="text-align:center;">是</td></tr><tr><td style="text-align:center;">w</td><td style="text-align:center;">只写</td><td style="text-align:center;">创建</td><td style="text-align:center;">起始</td><td style="text-align:center;">是</td></tr><tr><td style="text-align:center;">w+</td><td style="text-align:center;">可读可写</td><td style="text-align:center;">创建</td><td style="text-align:center;">起始</td><td style="text-align:center;">是</td></tr><tr><td style="text-align:center;">a</td><td style="text-align:center;">只写</td><td style="text-align:center;">创建</td><td style="text-align:center;">末尾</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">a+</td><td style="text-align:center;">可读可写</td><td style="text-align:center;">创建</td><td style="text-align:center;">末尾</td><td style="text-align:center;">-</td></tr></tbody></table><ul><li><code>r+</code> ：可读可写 <ul><li>读取、写入 文件时，需要 <strong>文件存在</strong></li><li>文件写入内容后，立即读取时需要 <strong>调整光标位置</strong>，否则读取信息为空。</li></ul></li><li><code>w+</code> ：可读可写 <ul><li>在文件读取时，默认是 <strong>先写后读</strong> ，直接读取文件时系统会默认写入一个 <strong>空值</strong> ，覆盖原有的内容，所以读取内容为 <strong>空</strong> 。</li><li>文件写入内容后，立即读取时需要 <strong>调整光标位置</strong>，否则读取信息为空。</li></ul></li><li><code>a+</code> ：可读可写 <ul><li>读取文件时，需要 <strong>调整光标的位置</strong> ，否则读取信息为空。</li></ul></li></ul><h3 id="_3-文件写入" tabindex="-1">3. 文件写入 <a class="header-anchor" href="#_3-文件写入" aria-label="Permalink to &quot;3. 文件写入&quot;">​</a></h3><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 指定编码方式为 utf8</span></span>
<span class="line"><span style="color:#A6ACCD;">f </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">open</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tmp.txt</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">w</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">encoding</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">utf8</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># write方法会将字符串编码为utf8字节串写入文件</span></span>
<span class="line"><span style="color:#A6ACCD;">f</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">write</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">祝大家好运气</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 文件操作完毕后， 使用close 方法关闭该文件对象</span></span>
<span class="line"><span style="color:#A6ACCD;">f</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">close</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>使用 <code>w</code> 或者 <code>w+</code> 模式时，会将文件原有内容 <strong>删除</strong> 。</p></div><h3 id="_4-读取文件" tabindex="-1">4. 读取文件 <a class="header-anchor" href="#_4-读取文件" aria-label="Permalink to &quot;4. 读取文件&quot;">​</a></h3><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 指定编码方式为 gbk，gbk编码兼容gb2312</span></span>
<span class="line"><span style="color:#A6ACCD;">f </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">open</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tmp.txt</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">r</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">encoding</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">gbk</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># read 方法会在读取文件中的原始字节串后， 根据上面指定的gbk解码为字符串对象返回</span></span>
<span class="line"><span style="color:#A6ACCD;">content </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> f</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">read</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 文件操作完毕后， 使用close 方法关闭该文件对象</span></span>
<span class="line"><span style="color:#A6ACCD;">f</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">close</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 通过字符串的split方法获取其中用户名部分</span></span>
<span class="line"><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> content</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">：</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">name</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="_5-read、readline、readlines-的区别" tabindex="-1">5. read、readline、readlines 的区别 <a class="header-anchor" href="#_5-read、readline、readlines-的区别" aria-label="Permalink to &quot;5. read、readline、readlines 的区别&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">函数</th><th style="text-align:center;">默认读取范围</th><th style="text-align:center;">换行符</th><th style="text-align:center;">返回结果</th></tr></thead><tbody><tr><td style="text-align:center;">read</td><td style="text-align:center;">一次性读取所有内容</td><td style="text-align:center;">不读取文章末尾的换行符</td><td style="text-align:center;">返回的是整个内容的字符串</td></tr><tr><td style="text-align:center;">readline</td><td style="text-align:center;">一行一行的读取文件内容</td><td style="text-align:center;">会读取文章末尾的换行符</td><td style="text-align:center;">返回每一行，也是字符串</td></tr><tr><td style="text-align:center;">readlines</td><td style="text-align:center;">一次性读取所有内容</td><td style="text-align:center;">会读取文章末尾的换行符</td><td style="text-align:center;">返整个内容列表（一行一个元素）</td></tr></tbody></table><ul><li><p><code>read（）</code> 方法</p><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">f </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">open</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">r</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">G:</span><span style="color:#F07178;">\\6</span><span style="color:#C3E88D;">Tipdm</span><span style="color:#A6ACCD;">\\f</span><span style="color:#C3E88D;">ile_read_write</span><span style="color:#A6ACCD;">\\t</span><span style="color:#C3E88D;">est.txt</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">r</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">encoding</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">utf-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">data </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> f</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">read</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">type</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">f</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">close</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li><p><code>readline（）</code> 方法</p><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">f </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">open</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">r</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">G:</span><span style="color:#F07178;">\\6</span><span style="color:#C3E88D;">Tipdm</span><span style="color:#A6ACCD;">\\f</span><span style="color:#C3E88D;">ile_read_write</span><span style="color:#A6ACCD;">\\t</span><span style="color:#C3E88D;">est.txt</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">r</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">encoding</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">utf-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">range</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    data </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> f</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">readline</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">strip</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">f</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">close</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><img src="https://img.pupper.cn/img/20210628102735.png" alt="image-20210415170154997"></p></li><li><p><code>readlines（）</code> 方法</p><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">f </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">open</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">r</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">G:</span><span style="color:#F07178;">\\6</span><span style="color:#C3E88D;">Tipdm</span><span style="color:#A6ACCD;">\\f</span><span style="color:#C3E88D;">ile_read_write</span><span style="color:#A6ACCD;">\\t</span><span style="color:#C3E88D;">est.txt</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">r</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">encoding</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">utf-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">data </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> f</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">readlines</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">type</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">f</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">close</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><img src="https://img.pupper.cn/img/20210628102740.png" alt="image-20210415170323361"></p></li></ul><h3 id="_6-光标移动-seek-函数" tabindex="-1">6. 光标移动（ seek（）函数） <a class="header-anchor" href="#_6-光标移动-seek-函数" aria-label="Permalink to &quot;6. 光标移动（ seek（）函数）&quot;">​</a></h3><ul><li><code>seek（m, n）</code> 函数 <ul><li><code>m</code> ：开始的偏移量，也就是代表需要移动偏移的字节数，如果是负数表示从倒数第几位开始。 <ul><li><strong>0</strong> ：光标移动到文件 <strong>开始位置</strong></li><li><strong>-1</strong> ：光标移动到文件 <strong>末尾位置</strong></li></ul></li><li><code>n</code> ：默认为 0 ，不需要写，当写 1 或者 2 时 ，需要在 <strong>rb 模式</strong> （二进制模式）下才能生效 <ul><li><strong>0</strong> ：代表从文件开头开始算起</li><li><strong>1</strong> ：代表从当前位置开始算起</li><li><strong>2</strong> ：代表从文件末尾算起。</li></ul></li></ul></li></ul><h2 id="二、-with-语句" tabindex="-1">二、 with 语句 <a class="header-anchor" href="#二、-with-语句" aria-label="Permalink to &quot;二、 with 语句&quot;">​</a></h2><p><code>with 语句</code> ：打开文件时，不需要我们调用 <strong>close 方法</strong> 关闭文件</p><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># open返回的对象 赋值为 变量 f</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">with</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">open</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tmp.txt</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> f</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    linelist </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> f</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">readlines</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> line </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> linelist</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">line</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><code>with open</code> 可以同时打开多个文件</p><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">with</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">open</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">d:/200906.txt</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> file1</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">open</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">d:/200906_1.txt</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> file2</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">file1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">read</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">file2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">read</span><span style="color:#89DDFF;">())</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="三、-写入缓冲" tabindex="-1">三、 写入缓冲 <a class="header-anchor" href="#三、-写入缓冲" aria-label="Permalink to &quot;三、 写入缓冲&quot;">​</a></h2><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">f </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">open</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tmp.txt</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">w</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">encoding</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">utf8</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">f</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">write</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">祝大家好运气</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 等待 30秒，再close文件</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> time</span></span>
<span class="line"><span style="color:#A6ACCD;">time</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sleep</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">f</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">close</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>代码在未执行 <code>f.close()</code> 语句之前，写入内容是存放在 **缓冲区，在 缓冲区 未堆满或者 未执行 关闭文件 语句之前，写入内容不会写入文件。</p><p>如果需要立即写入文件，则需要使用 <code>flush</code> 方法</p><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">f </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">open</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tmp.txt</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">w</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">encoding</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">utf8</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">f</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">write</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">祝大家好运气</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 立即把内容写到文件里面</span></span>
<span class="line"><span style="color:#A6ACCD;">f</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">flush</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 等待 30秒，再close文件</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> time</span></span>
<span class="line"><span style="color:#A6ACCD;">time</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sleep</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">f</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">close</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,31),t=[p];function o(r,c,i,F,y,D){return n(),a("div",null,t)}const C=s(e,[["render",o]]);export{A as __pageData,C as default};
