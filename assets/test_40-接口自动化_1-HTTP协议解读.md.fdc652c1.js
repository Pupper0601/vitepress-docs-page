import{_ as e,o,c as a,Q as t}from"./chunks/framework.1b72a0e7.js";const T=JSON.parse('{"title":"HTTP 协议解读","description":"","frontmatter":{},"headers":[],"relativePath":"test/40-接口自动化/1-HTTP协议解读.md","lastUpdated":1699515980000}'),l={name:"test/40-接口自动化/1-HTTP协议解读.md"},i=t('<h1 id="http-协议解读" tabindex="-1">HTTP 协议解读 <a class="header-anchor" href="#http-协议解读" aria-label="Permalink to &quot;HTTP 协议解读&quot;">​</a></h1><h2 id="一、-http-协议" tabindex="-1">一、 HTTP 协议 <a class="header-anchor" href="#一、-http-协议" aria-label="Permalink to &quot;一、 HTTP 协议&quot;">​</a></h2><p>请求报文格式：四个部分</p><p><code>请求行</code>：独占一行的。由：请求方法、请求路径、请求协议/版本组成。</p><p><code>请求头</code> ：从第二行到第 N 行。由键值对 组成。可以有 1 对，也可以有 N 对。key:value</p><p><code>空行</code> ： 独占一行的。由回车换行组成。</p><p><code>请求正文</code> ：请求消息体</p><h2 id="二、常见请求头含义" tabindex="-1">二、常见请求头含义 <a class="header-anchor" href="#二、常见请求头含义" aria-label="Permalink to &quot;二、常见请求头含义&quot;">​</a></h2><ul><li><p><code>User-Agent</code>：告诉服务器客户端的相关信息（如果是浏览器会有版本，内核等信息）</p></li><li><p><code>referer</code>：告诉服务器，此请求是从哪个页面上发出来 (防盗链)</p></li><li><p><code>X-Requested-With</code>：告诉服务器这个是一个 ajax 请求</p></li><li><p><code>Cookie</code>：带给服务器的 cookie 信息</p></li><li><p><code>content-type</code>：告诉服务器消息体的数据类型</p><ul><li>application/x-www-form-urlencoded</li><li>multipart/form-data</li><li>application/json</li><li>text/xml</li></ul></li></ul><h2 id="三、-http-响应报文" tabindex="-1">三、 HTTP 响应报文 <a class="header-anchor" href="#三、-http-响应报文" aria-label="Permalink to &quot;三、 HTTP 响应报文&quot;">​</a></h2><p>响应报文格式：四个部分组成</p><ul><li><code>状态行</code>：独占一行。由协议/协议的版本、状态码、状态描述符组成</li><li><code>响应头</code>：从第二行到第 N 行。由键值对组成。</li><li><code>空行</code>：独占一行的。由回车换行组成。</li><li><code>响应的正文</code></li></ul><h2 id="四、常见响应头含义" tabindex="-1">四、常见响应头含义： <a class="header-anchor" href="#四、常见响应头含义" aria-label="Permalink to &quot;四、常见响应头含义：&quot;">​</a></h2><ul><li><code>location</code>：告诉浏览器跳到哪里</li><li><code>content-length</code>：告诉浏览器回送数据的长度</li><li><code>content-type</code>：告诉浏览器回送数据的类型</li></ul><h2 id="五、请求体的数据类型" tabindex="-1">五、请求体的数据类型 <a class="header-anchor" href="#五、请求体的数据类型" aria-label="Permalink to &quot;五、请求体的数据类型&quot;">​</a></h2><ul><li><code>data</code> ： 请求体是表单格式的时候，这个参数默认的格式就是表单格式 <ul><li><code>变量 = 值</code> ：’Content-Type‘ ： ’application/x-www-from-urlencoded‘</li></ul></li><li><code>json</code> ： 如果请求体的数据格式是 json ， 可以直接使用变量，模式就是 json 格式 <ul><li><code>变量 = 值</code> ： ’Content-Type‘： ’application/json‘</li></ul></li><li><code>files</code> ： 文件上传接口使用</li><li><code>params</code> ： 一般 get 请求使用</li></ul><h4 id="request-库帮助文档" tabindex="-1"><a href="http://cn.python-requests.org/zh_CN/latest/" target="_blank" rel="noreferrer">request 库帮助文档</a> <a class="header-anchor" href="#request-库帮助文档" aria-label="Permalink to &quot;[request 库帮助文档](http://cn.python-requests.org/zh_CN/latest/)&quot;">​</a></h4><h3 id="json-与-字典-的区别" tabindex="-1">json 与 字典 的区别 <a class="header-anchor" href="#json-与-字典-的区别" aria-label="Permalink to &quot;json 与 字典 的区别&quot;">​</a></h3><p><code>json</code> ： 是一个数据格式，本身就是 <code>字符串</code> 类型</p><p><code>dict</code> ： 数据类型， 可以存储， pycharm 控制台打印显示 一定是 <code>单引号</code></p>',20),c=[i];function d(r,n,s,p,h,u){return o(),a("div",null,c)}const m=e(l,[["render",d]]);export{T as __pageData,m as default};
