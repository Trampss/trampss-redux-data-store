var n=function(n){return"@@krf/"+n.toUpperCase()},t=function(n){return function(t){return(n?">":"")+n+">"+t}},r=function(r){return function(e){return n("SET"+t(r)(e))}},e=function(n){return function(t){return function(e){return{type:r(n)(t),payload:e}}}},u=function(r){return function(e){return n("RESET"+t(r)(e))}},i=function(n){return function(t){return function(){return{type:u(n)(t)}}}},o=function(r){return function(e){return n("ADD"+t(r)(e))}},a=function(r){return function(e){return n("UPDATE"+t(r)(e))}},c=function(n){return function(t){return function(r){return{type:a(n)(t),payload:r}}}},f=function(r){return function(e){return n("REMOVE"+t(r)(e))}},s=function(r){return function(e){return n("ADD_OR_UPDATE"+t(r)(e))}},p={data:[],initialized:!1},d=function(n){return Array.isArray(n)?n:[n]},l=function(n,t){return t.map(function(t){return[t[n],t]})},y=function(n){return function(t){return Object.assign({},n,{data:t,initialized:!0})}},v=function(n,t,r){return y(t)(l(n,d(r)))},m=function(n){return function(t,r,e){var u=new Map(r.data);return d(e).forEach(function(r){var e=u.get(r[t]);(n||r)&&u.set(r[t],Object.assign({},e,r))}),0===u.size?r:y(r)(Array.from(u.entries()))}},g=function(n,t){return void 0!==t?v(n,p,t):p},b=function(n){return function(t){return function(e){return function(i){return function(c,p){void 0===c&&(c=g(n,i)),void 0===p&&(p={});var b=p.payload;switch(p.type){case r(t)(e):return v(n,c,b);case o(t)(e):return function(n,t,r){return y(t)(Array.from(new Map(t.data.concat(l(n,d(r))))))}(n,c,b);case s(t)(e):return m(!0)(n,c,b);case f(t)(e):return function(n,t,r){var e=new Map(t.data);return d(r).forEach(function(t){e.delete("object"==typeof t?t[n]:t)}),y(t)(Array.from(e.entries()))}(n,c,b);case u(t)(e):return g(n,i);case a(t)(e):return m(!1)(n,c,b);default:return c}}}}}};var j=function(n,t){return t.split(".").reduce(function(n,t){return n&&n[t]},n)},O=function(n){var t={data:void 0,result:void 0};return function(r){return t.data!==r&&(t.data=r,t.result=n(r)),t.result}};var E={},A=function(n){return void 0!==n?n:E},h=function(){return function(n){return function(t){return function(e){return function(i,o){void 0===i&&(i=A(e)),void 0===o&&(o={});var c=o.payload;switch(o.type){case r(n)(t):return c;case a(n)(t):return Object.assign({},i,c);case u(n)(t):return A(e);default:return i}}}}}};var D=function(n,t){return t.split(".").reduce(function(n,t){return n&&n[t]},n)};var w={middlewares:[function(n){return function(t){return function(r){return function(e){return function(u){return void 0===u&&(u={}),Object.assign({},u,{state:h(n)(t)(r)(e)(u.state,u.action)})}}}}}],actions:{set:e,SET:r,reset:i,RESET:u,update:c,UPDATE:a},selectors:function(n){var t=function(t){var r=n.path,e=n.name,u=t;return void 0!==r&&r.length>0&&(u=D(t,r)),u[e]},r=function(){return function(n){return t(n)}};return{get:r,isInitialized:function(e){return void 0!==n.defaultData?t(e)!==n.defaultData:r()(e)!==E}}}},T={keyValue:{middlewares:[function(n){return function(t){return function(r){return function(e){return function(u){return void 0===u&&(u={}),Object.assign({},u,{state:b(n)(t)(r)(e)(u.state,u.action)})}}}}}],actions:{set:e,SET:r,add:function(n){return function(t){return function(r){return{type:o(n)(t),payload:r}}}},ADD:o,reset:i,RESET:u,remove:function(n){return function(t){return function(r){return{type:f(n)(t),payload:r}}}},REMOVE:f,update:c,UPDATE:a,addOrUpdate:function(n){return function(t){return function(r){return{type:s(n)(t),payload:r}}}},ADD_OR_UPDATE:s},selectors:function(n){var t=function(t){var r=n.path,e=n.name,u=t;return void 0!==r&&r.length>0&&(u=j(t,r)),u[e]},r=function(n){return t(n).data},e=O(function(n){return new Map(n)}),u=O(function(n){return Array.from(e(n).keys())}),i=O(function(n){return Array.from(e(n).values())}),o=O(function(n){var t={};return n.forEach(function(n){t[n[0]]=n[1]}),t});return{getState:t,get:function(n){return function(t){var u=r(t);if(void 0===n||null===n)return o(u);var i=e(u);return Array.isArray(n)?n.map(function(n){return i.get(n)}):i.get(n)}},getKeys:function(n){return u(r(n))},getBy:function(n,t){return function(u){var o=i(e(r(u)));return Array.isArray(t)?o.filter(function(r){return t.includes(j(r,n))}):o.filter(function(r){return t===j(r,n)})}},getAsArray:function(n){return i(r(n))},getLength:function(n){return r(n).length},hasKey:function(n){return function(t){return e(r(t)).has(n)}},isInitialized:function(n){return t(n).initialized}}}},simple:w,simpleObject:w};var k={key:"id",type:"keyValue",prefix:""},U={bool:!1,string:"",array:[],object:{},number:0},x=function(n){return void 0===n&&(n={}),function(t){void 0===t&&(t={});var r=Object.assign({},k,t),e=r.key,u=r.type,i=r.prefix,o=r.name,a=r.defaultData;"simpleObject"===u&&console.warn('/k-redux-factory/ You are using a deprecated "simpleObject" type. We recommend using one of these types: simple.object, simple.array, simple.bool or simple.string.');var c,f=u.split("."),s=f[0],p=f[1],d=T[s];return"simple"!==s&&"simpleObject"!==u||void 0===(c=a)&&p&&(c=U[p]),Object.assign.apply(Object,[function(n){return function(t){return function(r){return function(e){return function(u){return function(i,o){void 0===o&&(o={});var a=o.type;void 0===a&&(a="UNKNOWN");var c={state:i,action:{type:a,payload:o.payload}};return(n.pre||[].concat(n.engine||[],n.post||[])).map(function(n){return n(t)(r)(e)(u)}).forEach(function(n){c=n(c)}),c.state}}}}}}(Object.assign({},n,{engine:d.middlewares}))(e)(i)(o)(c),{krfType:u}].concat(Object.keys(d.actions).map(function(n){var t;return(t={})[n]=d.actions[n](i)(o),t}),[d.selectors(r)]))}},R=function(){throw Error("parameter is not a middleware configuration, nor a factory option object.")},S=function(n){return void 0===n&&(n={}),function(t){return null===t||void 0===t?R():function(n){return n.engine||n.pre||n.post}(t)?function(r){return x(t)(Object.assign({},r,n))}:function(n){return!!n.name||"string"==typeof n}(t)?"string"==typeof t?x()(Object.assign({},{name:t},n)):x()(Object.assign({},t,n)):R()}},z=S({type:"keyValue"}),M=S({type:"simple"});Object.assign(M,{object:S({type:"simple.object"}),bool:S({type:"simple.bool"}),string:S({type:"simple.string"}),array:S({type:"simple.array"}),number:S({type:"simple.number"})});var V=M,P=S();exports.factory=P,exports.simple=M,exports.keyValue=z,exports.simpleObject=V;
