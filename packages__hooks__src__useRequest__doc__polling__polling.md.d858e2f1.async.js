(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[40],{"I9/l":function(e,t,n){},MZF8:function(e,t,n){"use strict";var l=n("ogwx");n.d(t,"a",(function(){return l["b"]}));n("VCU9")},jqZt:function(e,t,n){"use strict";n.r(t);var l=n("ahKI"),a=n.n(l),r=n("b3GN"),c=n("ljIF"),o=n("+tLl"),u=n("qUYY"),m=a.a.memo((e=>{var t=e.demos,n=t["polling-polling"].component,l=t["polling-pollingerror"].component;return a.a.createElement(a.a.Fragment,null,a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"\u8f6e\u8be2"},a.a.createElement(r["AnchorLink"],{to:"#\u8f6e\u8be2","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u8f6e\u8be2"),a.a.createElement("p",null,"\u901a\u8fc7\u8bbe\u7f6e ",a.a.createElement("code",null,"options.pollingInterval"),"\uff0c\u8fdb\u5165\u8f6e\u8be2\u6a21\u5f0f\uff0c",a.a.createElement("code",null,"useRequest")," \u4f1a\u5b9a\u65f6\u89e6\u53d1 service \u6267\u884c\u3002"),a.a.createElement(o["a"],{code:"const { data, run, cancel } = useRequest(getUsername, {\n  pollingInterval: 3000,\n});",lang:"tsx"}),a.a.createElement("p",null,"\u4f8b\u5982\u4e0a\u9762\u7684\u573a\u666f\uff0c\u4f1a\u6bcf\u9694 3000ms \u8bf7\u6c42\u4e00\u6b21 ",a.a.createElement("code",null,"getUsername"),"\u3002\u540c\u65f6\u4f60\u53ef\u4ee5\u901a\u8fc7 ",a.a.createElement("code",null,"cancel")," \u6765\u505c\u6b62\u8f6e\u8be2\uff0c\u901a\u8fc7 ",a.a.createElement("code",null,"run/runAsync")," \u6765\u542f\u52a8\u8f6e\u8be2\u3002"),a.a.createElement("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u7684\u793a\u4f8b\u6765\u4f53\u9a8c\u6548\u679c")),a.a.createElement(c["default"],t["polling-polling"].previewerProps,a.a.createElement(n,null)),a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"\u8f6e\u8be2\u9519\u8bef\u91cd\u8bd5"},a.a.createElement(r["AnchorLink"],{to:"#\u8f6e\u8be2\u9519\u8bef\u91cd\u8bd5","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u8f6e\u8be2\u9519\u8bef\u91cd\u8bd5"),a.a.createElement("p",null,"\u901a\u8fc7 ",a.a.createElement("code",null,"options.pollingErrorRetryCount")," \u8f6e\u8be2\u9519\u8bef\u91cd\u8bd5\u6b21\u6570\u3002"),a.a.createElement(o["a"],{code:"const { data, run, cancel } = useRequest(getUsername, {\n  pollingInterval: 3000,\n  pollingErrorRetryCount: 3,\n});",lang:"tsx"}),a.a.createElement("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u7684\u793a\u4f8b\u6765\u4f53\u9a8c\u6548\u679c\u3002")),a.a.createElement(c["default"],t["polling-pollingerror"].previewerProps,a.a.createElement(l,null)),a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"api"},a.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"API"),a.a.createElement("h3",{id:"return"},a.a.createElement(r["AnchorLink"],{to:"#return","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Return"),a.a.createElement(u["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u53c2\u6570"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"run"),a.a.createElement("td",null,"\u542f\u52a8\u8f6e\u8be2"),a.a.createElement("td",null,a.a.createElement("code",null,"(...params: TParams) => void"))),a.a.createElement("tr",null,a.a.createElement("td",null,"runAsync"),a.a.createElement("td",null,"\u542f\u52a8\u8f6e\u8be2"),a.a.createElement("td",null,a.a.createElement("code",null,"(...params: TParams) => Promise<TData>"))),a.a.createElement("tr",null,a.a.createElement("td",null,"cancel"),a.a.createElement("td",null,"\u505c\u6b62\u8f6e\u8be2"),a.a.createElement("td",null,a.a.createElement("code",null,"() => void"))))),a.a.createElement("h3",{id:"options"},a.a.createElement(r["AnchorLink"],{to:"#options","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Options"),a.a.createElement(u["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u53c2\u6570"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"pollingInterval"),a.a.createElement("td",null,"\u8f6e\u8be2\u95f4\u9694\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2\u3002\u5982\u679c\u503c\u5927\u4e8e 0\uff0c\u5219\u542f\u52a8\u8f6e\u8be2\u6a21\u5f0f\u3002"),a.a.createElement("td",null,a.a.createElement("code",null,"number")),a.a.createElement("td",null,a.a.createElement("code",null,"0"))),a.a.createElement("tr",null,a.a.createElement("td",null,"pollingWhenHidden"),a.a.createElement("td",null,"\u5728\u9875\u9762\u9690\u85cf\u65f6\uff0c\u662f\u5426\u7ee7\u7eed\u8f6e\u8be2\u3002\u5982\u679c\u8bbe\u7f6e\u4e3a false\uff0c\u5728\u9875\u9762\u9690\u85cf\u65f6\u4f1a\u6682\u65f6\u505c\u6b62\u8f6e\u8be2\uff0c\u9875\u9762\u91cd\u65b0\u663e\u793a\u65f6\u7ee7\u7eed\u4e0a\u6b21\u8f6e\u8be2\u3002"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"true"))),a.a.createElement("tr",null,a.a.createElement("td",null,"pollingErrorRetryCount"),a.a.createElement("td",null,"\u8f6e\u8be2\u9519\u8bef\u91cd\u8bd5\u6b21\u6570\u3002\u5982\u679c\u8bbe\u7f6e\u4e3a -1\uff0c\u5219\u65e0\u9650\u6b21"),a.a.createElement("td",null,a.a.createElement("code",null,"number")),a.a.createElement("td",null,a.a.createElement("code",null,"-1"))))),a.a.createElement("h2",{id:"\u5907\u6ce8"},a.a.createElement(r["AnchorLink"],{to:"#\u5907\u6ce8","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u5907\u6ce8"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("code",null,"options.pollingInterval"),"\u3001",a.a.createElement("code",null,"options.pollingWhenHidden")," \u652f\u6301\u52a8\u6001\u53d8\u5316\u3002"),a.a.createElement("li",null,"\u5982\u679c\u8bbe\u7f6e ",a.a.createElement("code",null,"options.manual = true"),"\uff0c\u5219\u521d\u59cb\u5316\u4e0d\u4f1a\u542f\u52a8\u8f6e\u8be2\uff0c\u9700\u8981\u901a\u8fc7 ",a.a.createElement("code",null,"run/runAsync")," \u89e6\u53d1\u5f00\u59cb\u3002"),a.a.createElement("li",null,"\u8f6e\u8be2\u539f\u7406\u662f\u5728\u6bcf\u6b21\u8bf7\u6c42\u5b8c\u6210\u540e\uff0c\u7b49\u5f85 ",a.a.createElement("code",null,"pollingInterval")," \u65f6\u95f4\uff0c\u53d1\u8d77\u4e0b\u4e00\u6b21\u8bf7\u6c42\u3002")))))}));t["default"]=e=>{var t=a.a.useContext(r["context"]),n=t.demos;return a.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(m,{demos:n})}},qUYY:function(e,t,n){"use strict";var l=n("ahKI"),a=n.n(l),r=n("bIC1"),c=n.n(r);n("I9/l");function o(e,t){return E(e)||d(e,t)||m(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function d(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,a,r=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(l=n.next()).done);c=!0)if(r.push(l.value),t&&r.length===t)break}catch(u){o=!0,a=u}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw a}}return r}}function E(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,n=Object(l["useRef"])(),r=Object(l["useState"])(!1),u=o(r,2),m=u[0],i=u[1],d=Object(l["useState"])(!1),E=o(d,2),s=E[0],p=E[1];return Object(l["useEffect"])((function(){var e=n.current,t=c()((function(){i(e.scrollLeft>0),p(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),a.a.createElement("div",{className:"__dumi-default-table"},a.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":m||void 0,"data-right-folded":s||void 0},a.a.createElement("table",null,t)))};t["a"]=s}}]);