!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("ajv")):"function"==typeof define&&define.amd?define(["exports","ajv"],t):t((e=e||self).vuexStoreValidator={},e.ajv)}(this,function(e,t){t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var o=(e,o)=>{const n=new t({jsonPointers:!0,$data:!0}).compile(e);n(o);const{errors:r}=n;return r&&(e=>e.map(e=>e.message).join(", "))(r)},n=(e,t)=>{const o=e||{validate:()=>({})},{error:n}=o.validate(t);return n&&n.message};class r extends Error{}var i=Object.freeze({JOI:"joi",AJV:"ajv"});class s{constructor({engine:e=i.JOI,strict:t=!1,extend:s={}}={}){return Object.assign(this,{engine:e,strict:t,extend:s}),(({extend:e,strict:t,engine:i})=>s=>{const{_modules:a,_modulesNamespaceMap:d}=s;s.subscribe(({type:c,payload:u})=>{const f=((e,t)=>{const r={ajv:o,joi:n,...t};if(Object.keys(r).includes(e))return r[e];throw new Error(`Validation Engine for "${e}" not found.`)})(i,e)(((e,o)=>{const n=e.split("/"),i=n.pop(),c=(e=>{let t=e;return t&&"/"!==e.charAt(e.length-1)&&(t+="/"),d[t]})(n.join("/")),{rules:u={}}=(c||a.root)._rawModule,f=u[i];if(t&&!f)throw new r("[Strict Mode] Rules are not defined for: "+e);return"function"==typeof f?f(s,o):f})(c,u),u);if(f)throw new r(`${f} for mutation: ${c}`)})})(this)}}window.Vue&&(window.VuexStoreValidator=s),e.ENGINE=i,e.default=s});
//# sourceMappingURL=index.umd.js.map
