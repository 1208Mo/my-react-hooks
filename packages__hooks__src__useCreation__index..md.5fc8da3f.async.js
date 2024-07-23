(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"9gRD":function(e,t,n){"use strict";n.r(t);var a=n("ahKI"),l=n.n(a),r=n("b3GN"),c=n("ljIF"),o=n("+tLl"),u=n("qUYY"),i=l.a.memo((e=>{var t=e.demos,n=t["usecreation-demo1"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"usecreation"},l.a.createElement(r["AnchorLink"],{to:"#usecreation","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"useCreation"),l.a.createElement("p",null,l.a.createElement("code",null,"useCreation")," \u662f ",l.a.createElement("code",null,"useMemo")," \u6216 ",l.a.createElement("code",null,"useRef")," \u7684\u66ff\u4ee3\u54c1\u3002"),l.a.createElement("p",null,"\u56e0\u4e3a ",l.a.createElement("code",null,"useMemo")," \u4e0d\u80fd\u4fdd\u8bc1\u88ab memo \u7684\u503c\u4e00\u5b9a\u4e0d\u4f1a\u88ab\u91cd\u8ba1\u7b97\uff0c\u800c ",l.a.createElement("code",null,"useCreation")," \u53ef\u4ee5\u4fdd\u8bc1\u8fd9\u4e00\u70b9\u3002\u4ee5\u4e0b\u4e3a React \u5b98\u65b9\u6587\u6863\u4e2d\u7684\u4ecb\u7ecd\uff1a"),l.a.createElement("p",null,"\u800c\u76f8\u6bd4\u4e8e ",l.a.createElement("code",null,"useRef"),"\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",l.a.createElement("code",null,"useCreation")," \u521b\u5efa\u4e00\u4e9b\u5e38\u91cf\uff0c\u8fd9\u4e9b\u5e38\u91cf\u548c ",l.a.createElement("code",null,"useRef")," \u521b\u5efa\u51fa\u6765\u7684 ref \u6709\u5f88\u591a\u4f7f\u7528\u573a\u666f\u4e0a\u7684\u76f8\u4f3c\uff0c\u4f46\u5bf9\u4e8e\u590d\u6742\u5e38\u91cf\u7684\u521b\u5efa\uff0c",l.a.createElement("code",null,"useRef")," \u5374\u5bb9\u6613\u51fa\u73b0\u6f5c\u5728\u7684\u6027\u80fd\u9690\u60a3\u3002"),l.a.createElement(o["a"],{code:"const a = useRef(new Subject()); // \u6bcf\u6b21\u91cd\u6e32\u67d3\uff0c\u90fd\u4f1a\u6267\u884c\u5b9e\u4f8b\u5316 Subject \u7684\u8fc7\u7a0b\uff0c\u5373\u4fbf\u8fd9\u4e2a\u5b9e\u4f8b\u7acb\u523b\u5c31\u88ab\u6254\u6389\u4e86\nconst b = useCreation(() => new Subject(), []); // \u901a\u8fc7 factory \u51fd\u6570\uff0c\u53ef\u4ee5\u907f\u514d\u6027\u80fd\u9690\u60a3",lang:"javascript"}),l.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},l.a.createElement(r["AnchorLink"],{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),l.a.createElement("h3",{id:"\u57fa\u7840\u7528\u6cd5"},l.a.createElement(r["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5")),l.a.createElement(c["default"],t["usecreation-demo1"].previewerProps,l.a.createElement(n,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement(o["a"],{code:"function useCreation<T>(factory: () => T, deps: any[]): T;",lang:"typescript"}),l.a.createElement("h3",{id:"params"},l.a.createElement(r["AnchorLink"],{to:"#params","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Params"),l.a.createElement(u["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"factory"),l.a.createElement("td",null,"\u7528\u6765\u521b\u5efa\u6240\u9700\u5bf9\u8c61\u7684\u51fd\u6570"),l.a.createElement("td",null,l.a.createElement("code",null,"() => any")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"deps"),l.a.createElement("td",null,"\u4f20\u5165\u4f9d\u8d56\u53d8\u5316\u7684\u5bf9\u8c61"),l.a.createElement("td",null,l.a.createElement("code",null,"any[]")),l.a.createElement("td",null,"-")))))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),n=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(i,{demos:n})}},"I9/l":function(e,t,n){},MZF8:function(e,t,n){"use strict";var a=n("ogwx");n.d(t,"a",(function(){return a["b"]}));n("VCU9")},qUYY:function(e,t,n){"use strict";var a=n("ahKI"),l=n.n(a),r=n("bIC1"),c=n.n(r);n("I9/l");function o(e,t){return d(e)||s(e,t)||i(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function s(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,r=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(a=n.next()).done);c=!0)if(r.push(a.value),t&&r.length===t)break}catch(u){o=!0,l=u}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw l}}return r}}function d(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,n=Object(a["useRef"])(),r=Object(a["useState"])(!1),u=o(r,2),i=u[0],m=u[1],s=Object(a["useState"])(!1),d=o(s,2),E=d[0],f=d[1];return Object(a["useEffect"])((function(){var e=n.current,t=c()((function(){m(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":i||void 0,"data-right-folded":E||void 0},l.a.createElement("table",null,t)))};t["a"]=E}}]);