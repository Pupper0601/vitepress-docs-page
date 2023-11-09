import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.1b72a0e7.js";const C=JSON.parse('{"title":"六、Python 操作 Excel 文件库 - openpyxl","description":"","frontmatter":{},"headers":[],"relativePath":"scattered/6-Python操作Excel 文件.md","lastUpdated":1699515980000}'),p={name:"scattered/6-Python操作Excel 文件.md"},e=l(`<h1 id="六、python-操作-excel-文件库-openpyxl" tabindex="-1">六、Python 操作 Excel 文件库 - openpyxl <a class="header-anchor" href="#六、python-操作-excel-文件库-openpyxl" aria-label="Permalink to &quot;六、Python 操作 Excel 文件库 - openpyxl&quot;">​</a></h1><p><a href="https://openpyxl.readthedocs.io/en/stable/tutorial.html" target="_blank" rel="noreferrer">Python 操作 Excel 文件库 - openpyxl</a></p><h2 id="一-安装" tabindex="-1">一. 安装 <a class="header-anchor" href="#一-安装" aria-label="Permalink to &quot;一. 安装&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pip</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">openpyxl</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="二-基本操作" tabindex="-1">二. 基本操作 <a class="header-anchor" href="#二-基本操作" aria-label="Permalink to &quot;二. 基本操作&quot;">​</a></h2><h3 id="_2-1-创建工作簿" tabindex="-1">2.1 创建工作簿 <a class="header-anchor" href="#_2-1-创建工作簿" aria-label="Permalink to &quot;2.1 创建工作簿&quot;">​</a></h3><p>创建工作簿时, 会自动产生一个 sheet, 可以通过 <code>active</code> 获取</p><div class="language-Python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> openpyxl</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 创建工作簿</span></span>
<span class="line"><span style="color:#A6ACCD;">wx </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> openpyxl</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Workbook</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 获取默认 工作表</span></span>
<span class="line"><span style="color:#A6ACCD;">sheet </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> wx</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">active</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_2-2-创建工作表" tabindex="-1">2.2 创建工作表 <a class="header-anchor" href="#_2-2-创建工作表" aria-label="Permalink to &quot;2.2 创建工作表&quot;">​</a></h3><div class="language-Python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sh1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> wb</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create_sheet</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">工作表 1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 在最后插入工作表</span></span>
<span class="line"><span style="color:#A6ACCD;">sh2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> wb</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create_sheet</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">工作表 2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;"># 在首位插入工作表</span></span>
<span class="line"><span style="color:#A6ACCD;">sh3 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> wb</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create_sheet</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">工作表 3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 在倒数第二个位置插入工作表</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="_2-2-1-修改工作表名" tabindex="-1">2.2.1 修改工作表名 <a class="header-anchor" href="#_2-2-1-修改工作表名" aria-label="Permalink to &quot;2.2.1 修改工作表名&quot;">​</a></h4><div class="language-Python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sh3 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> wb</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create_sheet</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">工作表 3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 在倒数第二个位置插入工作表</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">sh3</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">title</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">表 3</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="_2-2-2-查看工作表名" tabindex="-1">2.2.2 查看工作表名 <a class="header-anchor" href="#_2-2-2-查看工作表名" aria-label="Permalink to &quot;2.2.2 查看工作表名&quot;">​</a></h4><div class="language-Python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">wb</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">sheetnames</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">[&#39;工作表 2&#39;, &#39;Sheet&#39;, &#39;表 3&#39;, &#39;工作表 1&#39;]</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-Python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> sheet </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> wb</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">sheet</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">工作表 2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">Sheet</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">表 3</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">工作表 1</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="_2-2-3-复制工作表" tabindex="-1">2.2.3 复制工作表 <a class="header-anchor" href="#_2-2-3-复制工作表" aria-label="Permalink to &quot;2.2.3 复制工作表&quot;">​</a></h4><ul><li>仅复制单元格（包括值、样式、超链接和注释）和某些工作表属性(包括维度、格式和属性)</li><li>不会复制所有其他工作簿/工作表属性 - 例如图像、图表。</li></ul><div class="language-Python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">target </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> wb</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">copy_worksheet</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">sh1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">wb</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">sheetnames</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">[&#39;工作表 2&#39;, &#39;Sheet&#39;, &#39;表 3&#39;, &#39;工作表 1&#39;, &#39;工作表 1 Copy&#39;]</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_2-3-修改单元格" tabindex="-1">2.3 修改单元格 <a class="header-anchor" href="#_2-3-修改单元格" aria-label="Permalink to &quot;2.3 修改单元格&quot;">​</a></h3><h4 id="_2-3-1-修改单个单元格" tabindex="-1">2.3.1 修改单个单元格 <a class="header-anchor" href="#_2-3-1-修改单个单元格" aria-label="Permalink to &quot;2.3.1 修改单个单元格&quot;">​</a></h4><div class="language-Python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 方式一、直接赋值</span></span>
<span class="line"><span style="color:#A6ACCD;">sheet</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">A3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Python</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">sheet</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">A3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">].</span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 方式二、sheet.cell(行, 列, 值)</span></span>
<span class="line"><span style="color:#A6ACCD;">d </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">  sheet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cell</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">sheet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cell</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">).</span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="_2-3-2-修改多个单元格" tabindex="-1">2.3.2 修改多个单元格 <a class="header-anchor" href="#_2-3-2-修改多个单元格" aria-label="Permalink to &quot;2.3.2 修改多个单元格&quot;">​</a></h4><h5 id="获取指定区域的单元格-sh-xx-xx" tabindex="-1">获取指定区域的单元格 <code>sh[&#39;xx&#39;:&#39;xx&#39;]</code> <a class="header-anchor" href="#获取指定区域的单元格-sh-xx-xx" aria-label="Permalink to &quot;获取指定区域的单元格 \`sh[&#39;xx&#39;:&#39;xx&#39;]\`&quot;">​</a></h5><div class="language-Python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cell_range </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> sh</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">A1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">C2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> cell_range</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">i</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">(&lt;Cell &#39;Sheet&#39;.A1&gt;, &lt;Cell &#39;Sheet&#39;.B1&gt;, &lt;Cell &#39;Sheet&#39;.C1&gt;)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">(&lt;Cell &#39;Sheet&#39;.A2&gt;, &lt;Cell &#39;Sheet&#39;.B2&gt;, &lt;Cell &#39;Sheet&#39;.C2&gt;)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h5 id="获取指定列的单元格-sh-xx" tabindex="-1">获取指定列的单元格 <code>sh[&#39;xx&#39;]</code> <a class="header-anchor" href="#获取指定列的单元格-sh-xx" aria-label="Permalink to &quot;获取指定列的单元格 \`sh[&#39;xx&#39;]\`&quot;">​</a></h5><div class="language-Python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">colC </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> sh</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">C</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> colC</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">i</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;Cell &#39;Sheet&#39;.C1&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;Cell &#39;Sheet&#39;.C2&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_2-4-插入行、列" tabindex="-1">2.4 插入行、列 <a class="header-anchor" href="#_2-4-插入行、列" aria-label="Permalink to &quot;2.4 插入行、列&quot;">​</a></h3><p>sheet 对象的 <code>insert_rows</code> 和 <code>insert_cols</code> 方法，分别用来插入 <code>行</code> 和 <code>列</code></p><div class="language-Python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> openpyxl</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">wb </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> openpyxl</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">load_workbook</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">income.xlsx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">sheet </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> wb</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2018</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">sheet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">insert_rows</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 在第2行的位置插入1行</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">sheet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">insert_rows</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 在第3行的位置插入3行</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">sheet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">insert_cols</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 在第2列的位置插入1列</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">sheet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">insert_cols</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 在第2列的位置插入3列</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">wb</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">save</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">income-1.xlsx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 指定不同的文件名，可以另存为别的文件</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="_2-5-删除行、列" tabindex="-1">2.5 删除行、列 <a class="header-anchor" href="#_2-5-删除行、列" aria-label="Permalink to &quot;2.5 删除行、列&quot;">​</a></h3><p>sheet 对象的 <code>delete_rows</code> 和 <code>delete_cols</code> 方法，分别用来删除 <code>行</code> 和 <code>列</code></p><div class="language-Python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> openpyxl</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">wb </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> openpyxl</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">load_workbook</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">income.xlsx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">sheet </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> wb</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2018</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">sheet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">delete_rows</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 在第2行的位置删除1行</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">sheet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">delete_rows</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 在第3行的位置删除3行</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">sheet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">delete_cols</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 在第2列的位置删除1列</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">sheet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">delete_cols</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 在第3列的位置删除3列</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">wb</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">save</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">income-1.xlsx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 指定不同的文件名，可以另存为别的文件</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,32),o=[e];function t(c,r,i,y,F,D){return n(),a("div",null,o)}const u=s(p,[["render",t]]);export{C as __pageData,u as default};
