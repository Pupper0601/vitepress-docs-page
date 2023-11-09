import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.1b72a0e7.js";const u=JSON.parse('{"title":"五、环境初始化","description":"","frontmatter":{},"headers":[],"relativePath":"test/40-接口自动化/5-环境初始化.md","lastUpdated":1699515980000}'),p={name:"test/40-接口自动化/5-环境初始化.md"},o=l(`<h1 id="五、环境初始化" tabindex="-1">五、环境初始化 <a class="header-anchor" href="#五、环境初始化" aria-label="Permalink to &quot;五、环境初始化&quot;">​</a></h1><h2 id="一、-fixture" tabindex="-1">一、 fixture <a class="header-anchor" href="#一、-fixture" aria-label="Permalink to &quot;一、 fixture&quot;">​</a></h2><h3 id="_1-fixture-详解" tabindex="-1">1. fixture 详解 <a class="header-anchor" href="#_1-fixture-详解" aria-label="Permalink to &quot;1. fixture 详解&quot;">​</a></h3><p><code>fixture（scope=&#39;function&#39;，params=None，autouse=False，ids=None，name=None）</code></p><ul><li><code>scope</code>：有四个级别参数&quot;function&quot;（默认），&quot;class&quot;，&quot;module&quot;，&quot;session&quot;</li><li><code>params</code>：一个可选的参数列表，它将导致多个参数调用 fixture 功能和所有测试使用它。</li><li><code>autouse</code>：如果 True，则为所有测试激活 fixture func 可以看到它。如果为 False 则显示需要参考来激活 fixture</li><li><code>ids</code>：每个字符串 id 的列表，每个字符串对应于 params 这样他们就是测试 ID 的一部分。如果没有提供 ID 它们将从 params 自动生成</li><li><code>name</code>：fixture 的名称。这默认为装饰函数的名称。如果 fixture 在定义它的统一模块中使用，夹具的功能名称将被请求夹具的功能 arg 遮蔽，解决这个问题的一种方法时将装饰函数命</li></ul><h3 id="_2-fixture-作用范围" tabindex="-1">2. fixture 作用范围 <a class="header-anchor" href="#_2-fixture-作用范围" aria-label="Permalink to &quot;2. fixture 作用范围&quot;">​</a></h3><p><code>scope</code> 参数可以控制 fixture 的作用范围：</p><p><strong>session &gt; module &gt; class &gt; function</strong></p><ul><li><code>function</code>：每一个函数或方法都会调用</li><li><code>class</code>：每一个类调用一次，一个类中可以有多个方法</li><li><code>module</code>：每一个.py 文件调用一次，该文件内又有多个 function 和 class</li><li><code>session</code>：是多个文件调用一次，可以跨 .py 文件调用，每个 .py 文件就是 module</li></ul><h3 id="_3-调用-fixture-的三种方法" tabindex="-1">3. 调用 fixture 的三种方法 <a class="header-anchor" href="#_3-调用-fixture-的三种方法" aria-label="Permalink to &quot;3. 调用 fixture 的三种方法&quot;">​</a></h3><h4 id="_1-函数或类里面方法直接传-fixture-的函数参数名称" tabindex="-1">1. 函数或类里面方法直接传 fixture 的函数参数名称 <a class="header-anchor" href="#_1-函数或类里面方法直接传-fixture-的函数参数名称" aria-label="Permalink to &quot;1. 函数或类里面方法直接传 fixture 的函数参数名称&quot;">​</a></h4><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">pytest</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fixture</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test1</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;">开始执行function</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test_a</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">test1</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">---用例a执行---</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="_2-使用-装饰器-pytest-mark-usefixtures-修饰-需要运行的用例" tabindex="-1">2. 使用 装饰器 @pytest.mark.usefixtures() 修饰 需要运行的用例 <a class="header-anchor" href="#_2-使用-装饰器-pytest-mark-usefixtures-修饰-需要运行的用例" aria-label="Permalink to &quot;2. 使用 装饰器 @pytest.mark.usefixtures() 修饰 需要运行的用例&quot;">​</a></h4><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> pytest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">pytest</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fixture</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test1</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;">开始执行function</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">pytest</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mark</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">usefixtures</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test_a</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">---用例a执行---</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="_3-叠加-usefixtures" tabindex="-1">3. 叠加 usefixtures <a class="header-anchor" href="#_3-叠加-usefixtures" aria-label="Permalink to &quot;3. 叠加 usefixtures&quot;">​</a></h4><p>如果一个方法或者一个 class 用例想要勇士调用多个 fixture</p><p>可以使用 <code>@pytest.mark.usefixture()</code> 进行叠加</p><p>注意叠加顺序：<strong>先执行的放底层，后执行的放上层</strong></p><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">pytest</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fixture</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test1</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;">开始执行function1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">pytest</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fixture</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test2</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;">开始执行function2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">pytest</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mark</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">usefixtures</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">pytest</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mark</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">usefixtures</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test_a</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">---用例a执行---</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="_4-usefixtures-和-fixture-区别" tabindex="-1">4. usefixtures 和 fixture 区别 <a class="header-anchor" href="#_4-usefixtures-和-fixture-区别" aria-label="Permalink to &quot;4. usefixtures 和 fixture 区别&quot;">​</a></h3><p>装饰器 usefixture 与用例直接传 fixture 参数的区别 ：如果 fixture 有返回值，那么 usefixture 无法获取到返回 值</p><p>fixture 需要用到 return 出来的参数时，只能将参数名称直接当参数传入，</p><p>不需要用到 return 出来的参数时，两种方式都可以。</p><p>**autouse 设置为 True，自动调用 fixture 功能 **</p><h2 id="二、fixture-的使用" tabindex="-1">二、fixture 的使用 <a class="header-anchor" href="#二、fixture-的使用" aria-label="Permalink to &quot;二、fixture 的使用&quot;">​</a></h2><p>创建 <code>conftest.py</code> 文件，所有初始化内容写在里边。</p><h3 id="_1-直接使用" tabindex="-1">1. 直接使用 <a class="header-anchor" href="#_1-直接使用" aria-label="Permalink to &quot;1. 直接使用&quot;">​</a></h3><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">pytest</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fixture</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">scope</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">session</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">autouse</span><span style="color:#89DDFF;">=True)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 整一个包都会执行，</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">start_demo</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">request</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 这个一个运行该包下，任何一个test文件，都会一开始就执行的操作</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">---开始执行自动化测试---</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 数据清除操作:删除测试生成的垃圾数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fin</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">---自动化测试---结束</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    request</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addfinalizer</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">fin</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="_2-手动调用-无-return-传参" tabindex="-1">2. 手动调用 --- 无 return 传参 <a class="header-anchor" href="#_2-手动调用-无-return-传参" aria-label="Permalink to &quot;2. 手动调用 --- 无 return 传参&quot;">​</a></h3><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># conftest.py</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">pytest</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fixture</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">scope</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">function</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">update_shop_init</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 更新商铺的环境初始化</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 1- 登录---setup_class---已经在类初始化做了--这边不需要做</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">---我的作用是商铺更新的初始化操作---</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># test_myShop.py</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">pytest</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mark</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">usefixtures</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">update_shop_init</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 使用初始化---不能使用返回值</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">pytest</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mark</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parametrize</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">inData,respData</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> get_excelData2</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">我的商铺</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">updateshopping</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test_shop_update</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">inData</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">respData</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">update_shop_init</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 列出商铺</span></span>
<span class="line"><span style="color:#A6ACCD;">    res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MyShop</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">token</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">shop_update</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">inData</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> update_shop_init</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">],</span><span style="color:#82AAFF;"> update_shop_init</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">])</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 商铺列出方法</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># shopId,imageInfo---对应的---update_shop_init[0],update_shop_init[1]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">update_shop_init：---&gt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> update_shop_init</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">],</span><span style="color:#82AAFF;"> update_shop_init</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">])</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">assert</span><span style="color:#A6ACCD;"> res</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">code</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> respData</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">code</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="_3-手动调用-有-return-传参" tabindex="-1">3. 手动调用 --- 有 return 传参 <a class="header-anchor" href="#_3-手动调用-有-return-传参" aria-label="Permalink to &quot;3. 手动调用 --- 有 return 传参&quot;">​</a></h3><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># conftest.py</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">pytest</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fixture</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">scope</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">function</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">update_shop_init</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 更新商铺的环境初始化</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 1- 登录---setup_class---已经在类初始化做了--这边不需要做</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">---我的作用是商铺更新的初始化操作---</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 1- 登录成功</span></span>
<span class="line"><span style="color:#A6ACCD;">    token </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Login</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">login</span><span style="color:#89DDFF;">({</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">username</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sq0001</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">password</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">123456</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">},</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">getToken</span><span style="color:#89DDFF;">=True)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 2- 列出商铺--id</span></span>
<span class="line"><span style="color:#A6ACCD;">    shopId </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MyShop</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">token</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">shop_list</span><span style="color:#89DDFF;">({</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">page</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">limit</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">})[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">data</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">][</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">records</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">][</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">][</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 3-文件上传</span></span>
<span class="line"><span style="color:#A6ACCD;">    imageInfo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MyShop</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">token</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">file_upload</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">123.png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../data/123.png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> shopId</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> imageInfo  </span><span style="color:#676E95;font-style:italic;"># 元组类型</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># test_myShop.py</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 2- 测试类--接口方法</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">pytest</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mark</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parametrize</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">inData,respData</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> get_excelData2</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">我的商铺</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">updateshopping</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test_shop_update</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">inData</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">respData</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">update_shop_init</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 列出商铺</span></span>
<span class="line"><span style="color:#A6ACCD;">    res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MyShop</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">token</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">shop_update</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">inData</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> update_shop_init</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">],</span><span style="color:#82AAFF;"> update_shop_init</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">])</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 商铺列出方法</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># shopId,imageInfo---对应的---update_shop_init[0],update_shop_init[1]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">update_shop_init：---&gt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> update_shop_init</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">],</span><span style="color:#82AAFF;"> update_shop_init</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">])</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">assert</span><span style="color:#A6ACCD;"> res</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">code</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> respData</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">code</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,34),e=[o];function t(r,c,F,D,y,i){return n(),a("div",null,e)}const C=s(p,[["render",t]]);export{u as __pageData,C as default};
