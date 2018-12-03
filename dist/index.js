var n=function(n){return"@@krf/"+n.toUpperCase()},t=function(n){return function(t){return(n?">":"")+n+">"+t}},r=function(r){return function(e){return n("SET"+t(r)(e))}},e=function(n){return function(t){return function(e){return{type:r(n)(t),payload:e}}}},u=function(r){return function(e){return n("RESET"+t(r)(e))}},i=function(n){return function(t){return function(){return{type:u(n)(t)}}}},o=function(r){return function(e){return n("ADD"+t(r)(e))}},c=function(r){return function(e){return n("UPDATE"+t(r)(e))}},a=function(n){return function(t){return function(r){return{type:c(n)(t),payload:r}}}},f=function(r){return function(e){return n("REMOVE"+t(r)(e))}},s=function(r){return function(e){return n("ADD_OR_UPDATE"+t(r)(e))}},p={data:[],initialized:!1},l=function(n){return Array.isArray(n)?n:[n]},d=function(n,t){return t.map(function(t){return[t[n],t]})},y=function(n){return function(t){return Object.assign({},n,{data:t,initialized:!0})}},m=function(n,t,r){return y(t)(d(n,l(r)))},v=function(n){return function(t,r,e){var u=new Map(r.data);return l(e).forEach(function(r){var e=u.get(r[t]);(n||r)&&u.set(r[t],Object.assign({},e,r))}),0===u.size?r:y(r)(Array.from(u.entries()))}},g=function(n,t){return void 0!==t?m(n,p,t):p},b=function(n){return function(t){return function(e){return function(i){return function(a,p){void 0===a&&(a=g(n,i)),void 0===p&&(p={});var b=p.payload;switch(p.type){case r(t)(e):return m(n,a,b);case o(t)(e):return function(n,t,r){return y(t)(Array.from(new Map(t.data.concat(d(n,l(r))))))}(n,a,b);case s(t)(e):return v(!0)(n,a,b);case f(t)(e):return function(n,t,r){var e=new Map(t.data);return l(r).forEach(function(t){e.delete("object"==typeof t?t[n]:t)}),y(t)(Array.from(e.entries()))}(n,a,b);case u(t)(e):return g(n,i);case c(t)(e):return v(!1)(n,a,b);default:return a}}}}}},j=function(n,t){return t.split(".").reduce(function(n,t){return n&&n[t]},n)},O=function(n){var t={data:void 0,result:void 0};return function(r){return t.data!==r&&(t.data=r,t.result=n(r)),t.result}},E=function(n){return function(t){var r=n.path,e=n.name,u=t;return void 0!==r&&r.length>0&&(u=j(t,r)),u[e]}},A={},D=function(n){return void 0!==n?n:A},h={middlewares:[function(n){return function(n){return function(t){return function(e){return function(i){return void 0===i&&(i={}),Object.assign({},i,{state:function(n){return function(t){return function(e){return function(i,o){void 0===i&&(i=D(e)),void 0===o&&(o={});var a=o.payload;switch(o.type){case r(n)(t):return a;case c(n)(t):return Object.assign({},i,a);case u(n)(t):return D(e);default:return i}}}}}(n)(t)(e)(i.state,i.action)})}}}}}],actions:{set:e,SET:r,reset:i,RESET:u,update:a,UPDATE:c},selectors:function(n){var t=E(n),r=function(){return function(n){return t(n)}};return{get:r,isInitialized:function(e){return void 0!==n.defaultData?t(e)!==n.defaultData:r()(e)!==A}}}},w={keyValue:{middlewares:[function(n){return function(t){return function(r){return function(e){return function(u){return void 0===u&&(u={}),Object.assign({},u,{state:b(n)(t)(r)(e)(u.state,u.action)})}}}}}],actions:{set:e,SET:r,add:function(n){return function(t){return function(r){return{type:o(n)(t),payload:r}}}},ADD:o,reset:i,RESET:u,remove:function(n){return function(t){return function(r){return{type:f(n)(t),payload:r}}}},REMOVE:f,update:a,UPDATE:c,addOrUpdate:function(n){return function(t){return function(r){return{type:s(n)(t),payload:r}}}},ADD_OR_UPDATE:s},selectors:function(n){var t=E(n),r=function(n){return t(n).data},e=O(function(n){return new Map(n)}),u=O(function(n){return Array.from(e(n).keys())}),i=O(function(n){return Array.from(e(n).values())}),o=O(function(n){var t={};return n.forEach(function(n){t[n[0]]=n[1]}),t});return{get:function(n){return function(t){var u=r(t);if(null==n)return o(u);var i=e(u);return Array.isArray(n)?n.map(function(n){return i.get(n)}):i.get(n)}},getKeys:function(n){return u(r(n))},getBy:function(n,t){return function(u){var o=i(e(r(u)));return Array.isArray(t)?o.filter(function(r){return t.includes(j(r,n))}):o.filter(function(r){return t===j(r,n)})}},getState:t,getAsArray:function(n){return i(r(n))},getLength:function(n){return r(n).length},hasKey:function(n){return function(t){return e(r(t)).has(n)}},isInitialized:function(n){return t(n).initialized}}}},simple:h,simpleObject:h},T=function(n){return function(t){return function(r){return function(e){return function(u){return function(i,o){void 0===o&&(o={});var c=o.type;void 0===c&&(c="UNKNOWN");var a={state:i,action:{type:c,payload:o.payload}};return(n.pre||[]).concat(n.engine||[],n.post||[]).map(function(n){return n(t)(r)(e)(u)}).forEach(function(n){a=n(a)}),a.state}}}}}},k={key:"id",type:"keyValue",prefix:""},U={bool:!1,string:"",array:[],object:{},number:0},x=function(n){return void 0===n&&(n={}),function(t){void 0===t&&(t={});var r=Object.assign({},k,t),e=r.key,u=r.type,i=r.prefix,o=r.name,c=r.defaultData;"simpleObject"===u&&console.warn('/k-redux-factory/ You are using a deprecated "simpleObject" type. We recommend using one of these types: simple.object, simple.array, simple.bool or simple.string.');var a,f=u.split("."),s=f[0],p=f[1],l=w[s];return"simple"!==s&&"simpleObject"!==u||void 0===(a=c)&&p&&(a=U[p]),Object.assign.apply(Object,[T(Object.assign({},n,{engine:l.middlewares}))(e)(i)(o)(a),{krfType:u}].concat(Object.keys(l.actions).map(function(n){var t;return(t={})[n]=l.actions[n](i)(o),t}),[l.selectors(r)]))}},R=function(){throw Error("parameter is not a middleware configuration, nor a factory option object.")},S=function(n){return void 0===n&&(n={}),function(t){return null==t?R():function(n){return n.engine||n.pre||n.post}(t)?function(r){return x(t)(Object.assign({},r,n))}:function(n){return!!n.name||"string"==typeof n}(t)?"string"==typeof t?x()(Object.assign({},{name:t},n)):x()(Object.assign({},t,n)):R()}},z=S({type:"keyValue"}),M=S({type:"simple"});Object.assign(M,{object:S({type:"simple.object"}),bool:S({type:"simple.bool"}),string:S({type:"simple.string"}),array:S({type:"simple.array"}),number:S({type:"simple.number"})});var V=M,P=S();exports.factory=P,exports.simple=M,exports.keyValue=z,exports.simpleObject=V;
