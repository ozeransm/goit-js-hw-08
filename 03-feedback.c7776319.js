var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const t=document.querySelector(".feedback-form"),n=document.querySelector("button");var o={},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,s=u||c||Function("return this")(),m=Object.prototype.toString,d=Math.max,v=Math.min,g=function(){return s.Date.now()};function p(e,t,n){var o,i,r,a,f,l,u=0,c=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=o,r=i;return o=i=void 0,u=t,a=e.apply(r,n)}function S(e){return u=e,f=setTimeout(j,t),c?p(e):a}function h(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-u>=r}function j(){var e=g();if(h(e))return O(e);f=setTimeout(j,function(e){var n=t-(e-l);return s?v(n,r-(e-u)):n}(e))}function O(e){return f=void 0,m&&o?p(e):(o=i=void 0,a)}function w(){var e=g(),n=h(e);if(o=arguments,i=this,l=e,n){if(void 0===f)return S(l);if(s)return f=setTimeout(j,t),p(l)}return void 0===f&&(f=setTimeout(j,t)),a}return t=y(t)||0,b(n)&&(c=!!n.leading,r=(s="maxWait"in n)?d(y(n.maxWait)||0,t):r,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==f&&clearTimeout(f),u=0,o=l=i=f=void 0},w.flush=function(){return void 0===f?a:O(g())},w}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=a.test(e);return n||f.test(e)?l(e.slice(2),n?2:8):r.test(e)?NaN:+e}if(o=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})},t.addEventListener("input",o((function(){const{elements:{email:e,message:n}}=t,o={email:e.value,message:n.value};localStorage.setItem("feedback-form-state",JSON.stringify(o))}),500)),n.addEventListener("click",(function(e){e.preventDefault();let n=JSON.parse(localStorage.getItem("feedback-form-state"));t.elements.email.value.trim()&&t.elements.message.value.trim()?(console.log(n),localStorage.removeItem("feedback-form-state"),t.reset(),n={}):alert("fill in all fields of the form")})),localStorage.getItem("feedback-form-state")){const{email:e,message:n}=JSON.parse(localStorage.getItem("feedback-form-state"));t.elements.email.value=e,t.elements.message.value=n}
//# sourceMappingURL=03-feedback.c7776319.js.map
