!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("lodash/omit"),require("lodash/uniq"),require("lodash/without"),require("lodash/keyBy"),require("lodash/at")):"function"==typeof define&&define.amd?define(["exports","lodash/omit","lodash/uniq","lodash/without","lodash/keyBy","lodash/at"],n):n(t["trampss-redux-factory"]=t["trampss-redux-factory"]||{},t._omit,t._uniq,t._without,t._keyBy,t._at)}(this,function(t,n,e,r,a,u){"use strict";n=n&&"default"in n?n.default:n,e=e&&"default"in e?e.default:e,r=r&&"default"in r?r.default:r,a=a&&"default"in a?a.default:a,u=u&&"default"in u?u.default:u;var i=function(t){return"@trampss/"+t.toUpperCase()},o=function(t){return i("SET_"+t)},c=function(t){return function(n){return{type:o(t),payload:n}}},f=function(t){return i("RESET_"+t)},d=function(t){return function(){return{type:f(t)}}},s=function(t){return i("ADD_"+t)},l=function(t){return i("UPDATE_"+t)},y=function(t){return function(n){return{type:l(t),payload:n}}},p=function(t){return i("REMOVE_"+t)},h=function(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t},v=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},m=function(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return Array.from(t)},g={data:{},keys:[],array:[],initialized:!1},b=function(t){return function(n,e){return t.array.find(function(t){return t[n]===e})}},O=function(t){return function(u){return function(){return function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},d=c.type,y=c.payload;switch(d){case o(u):return{data:a(y,t),keys:e(y.map(function(n){return n[t]})),array:y,initialized:!0};case s(u):var O=void 0,j=y[t];return O=b(i)(t,j)?i.array.map(function(n){return n[t]===j?y:n}):[].concat(m(i.array),[y]),v({},i,{data:v({},i.data,h({},j,y)),keys:e([].concat(m(i.keys),[j])),array:O,initialized:!0});case l(u):var E=y[t];return b(i)(t,E)?v({},i,{data:v({},i.data,h({},E,v({},i.data[E],y))),array:i.array.map(function(n){return n[t]===E?v({},n,y):n})}):i;case p(u):return v({},i,{data:n(i.data,[y]),keys:r(i.keys,y),array:i.array?i.array.filter(function(n){return n[t]!==y}):[]});case f(u):return g;default:return i}}}}},j=Object.freeze({set:c,SET:o,add:function(t){return function(n){return{type:s(t),payload:n}}},ADD:s,reset:d,RESET:f,remove:function(t){return function(n){return{type:p(t),payload:n}}},REMOVE:p,update:y,UPDATE:l}),E=function(t){return function(n){var e=n;return void 0!==t.path&&(e=u(n,t.path)[0]),e[t.name]}},k=function(t){return function(n){return function(e){return E(n)(e)[t]}}},A=k("keys"),w=k("array"),z=k("initialized"),_=function(t){return k("data")(t)},D={middlewares:[function(t){return function(n){return function(e){return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({},r,{state:O(t)(n)(e)(r.state,r.action)})}}}}],actions:j,selectors:Object.freeze({getState:E,getKeys:A,getAsArray:w,getLength:function(t){var n=t.path,e=t.name;return function(t){return A({path:n,name:e})(t).length}},isInitialized:z,get:function(t){var n=t.path,e=t.name;return function(t){return function(r){var a=_({path:n,name:e})(r);return t?Array.isArray(t)?t.map(function(t){return a[t]}):a[t]:a}}},getBy:function(t){var n=t.path,e=t.name;return function(t,r){return function(a){var i=w({path:n,name:e})(a);return Array.isArray(r)?i.filter(function(n){return r.includes(u(n,t)[0])}):i.filter(function(n){return r===u(n,t)[0]})}}}})},T={},q=function(){return function(t){return function(n){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n||T,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=r.type,u=r.payload;switch(a){case o(t):return{data:u,initialized:!0};case l(t):return v({},e,{data:v({},e.data,u)});case f(t):return n||T;default:return e}}}}},S=function(t){return function(){return function(n){return E(t)(n)}}},x={middlewares:[function(t){return function(t){return function(n){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({},e,{state:q()(t)(n)(e.state,e.action)})}}}}],actions:Object.freeze({set:c,SET:o,reset:d,RESET:f,update:y,UPDATE:l}),selectors:Object.freeze({get:S,isInitialized:function(t){return function(n){return void 0!==t.defaultData?E(t)(n)!==t.defaultData:S(t)()(n)!==T}}})},P=Object.freeze({keyValue:D,simpleObject:x}),V=function(t){return function(n){return function(e){return function(r){return function(a){var u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=u.type,o={state:a,action:{type:void 0===i?"UNKNOWN":i,payload:u.payload}};return[].concat(m(t.pre||[]),m(t.engine||[]),m(t.post||[])).map(function(t){return t(n)(e)(r)}).forEach(function(t){o=t(o)}),o.state}}}}},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(n){var e=n.key,r=n.type,a=void 0===r?"keyValue":r,u=n.prefix,i=void 0===u?"":u,o=n.name,c=n.defaultData,f=P[a];return Object.assign.apply(Object,[V(v({},t,{engine:f.middlewares}))(e)(""+i+o)(c),{trampssType:a}].concat(m(Object.keys(f.actions).map(function(t){return h({},t,f.actions[t](""+i+o))})),m(Object.keys(f.selectors).map(function(t){return h({},t,f.selectors[t](n))}))))}},U=function(){throw Error("parameter is not a middleware configuration, nor a factory option object.")},B=function(t){return t.engine||t.pre||t.post},M=function(t){return!!t.name||"string"==typeof t},N=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(n){return null!==n&&void 0!==n||U(),B(n)?function(e){return R(n)(v({},e,t))}:M(n)?"string"==typeof n?R()(v({name:n},t)):R()(v({},n,t)):void U()}},I=N({type:"simpleObject"}),K=N({type:"keyValue"}),C=N();t.simpleObject=I,t.keyValue=K,t.default=C,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=index.js.map
