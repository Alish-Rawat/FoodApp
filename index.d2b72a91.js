function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n,r,o,a,i,l,u,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},c={},f={},d=s.parcelRequire40f1;null==d&&((d=function(e){if(e in c)return c[e].exports;if(e in f){var t=f[e];delete f[e];var n={id:e,exports:{}};return c[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){f[e]=t},s.parcelRequire40f1=d);var p=d.register;p("5aRSq",function(e,t){e.exports=d("hi5z5")}),p("hi5z5",function(t,n){e(t.exports,"Fragment",function(){return r},function(e){return r=e}),e(t.exports,"jsx",function(){return o},function(e){return o=e}),e(t.exports,"jsxs",function(){return a},function(e){return a=e});var r,o,a,i=d("4Iuzv"),l=Symbol.for("react.element"),u=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,n){var r,o={},a=null,i=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(i=t.ref),t)s.call(t,r)&&!f.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:l,type:e,key:a,ref:i,props:o,_owner:c.current}}r=u,o=p,a=p}),p("4Iuzv",function(e,t){e.exports=d("ip19S")}),p("ip19S",function(t,n){e(t.exports,"Children",function(){return r},function(e){return r=e}),e(t.exports,"Component",function(){return o},function(e){return o=e}),e(t.exports,"Fragment",function(){return a},function(e){return a=e}),e(t.exports,"Profiler",function(){return i},function(e){return i=e}),e(t.exports,"PureComponent",function(){return l},function(e){return l=e}),e(t.exports,"StrictMode",function(){return u},function(e){return u=e}),e(t.exports,"Suspense",function(){return s},function(e){return s=e}),e(t.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",function(){return c},function(e){return c=e}),e(t.exports,"cloneElement",function(){return f},function(e){return f=e}),e(t.exports,"createContext",function(){return d},function(e){return d=e}),e(t.exports,"createElement",function(){return p},function(e){return p=e}),e(t.exports,"createFactory",function(){return h},function(e){return h=e}),e(t.exports,"createRef",function(){return m},function(e){return m=e}),e(t.exports,"forwardRef",function(){return v},function(e){return v=e}),e(t.exports,"isValidElement",function(){return y},function(e){return y=e}),e(t.exports,"lazy",function(){return g},function(e){return g=e}),e(t.exports,"memo",function(){return b},function(e){return b=e}),e(t.exports,"startTransition",function(){return w},function(e){return w=e}),e(t.exports,"unstable_act",function(){return S},function(e){return S=e}),e(t.exports,"useCallback",function(){return x},function(e){return x=e}),e(t.exports,"useContext",function(){return k},function(e){return k=e}),e(t.exports,"useDebugValue",function(){return E},function(e){return E=e}),e(t.exports,"useDeferredValue",function(){return _},function(e){return _=e}),e(t.exports,"useEffect",function(){return C},function(e){return C=e}),e(t.exports,"useId",function(){return j},function(e){return j=e}),e(t.exports,"useImperativeHandle",function(){return P},function(e){return P=e}),e(t.exports,"useInsertionEffect",function(){return R},function(e){return R=e}),e(t.exports,"useLayoutEffect",function(){return O},function(e){return O=e}),e(t.exports,"useMemo",function(){return T},function(e){return T=e}),e(t.exports,"useReducer",function(){return N},function(e){return N=e}),e(t.exports,"useRef",function(){return L},function(e){return L=e}),e(t.exports,"useState",function(){return A},function(e){return A=e}),e(t.exports,"useSyncExternalStore",function(){return M},function(e){return M=e}),e(t.exports,"useTransition",function(){return D},function(e){return D=e}),e(t.exports,"version",function(){return I},function(e){return I=e});var r,o,a,i,l,u,s,c,f,d,p,h,m,v,y,g,b,w,S,x,k,E,_,C,j,P,R,O,T,N,L,A,M,D,I,z=Symbol.for("react.element"),F=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),W=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),Q=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),Y=Symbol.iterator,X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,J={};function Z(e,t,n){this.props=e,this.context=t,this.refs=J,this.updater=n||X}function ee(){}function et(e,t,n){this.props=e,this.context=t,this.refs=J,this.updater=n||X}Z.prototype.isReactComponent={},Z.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},Z.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},ee.prototype=Z.prototype;var en=et.prototype=new ee;en.constructor=et,G(en,Z.prototype),en.isPureReactComponent=!0;var er=Array.isArray,eo=Object.prototype.hasOwnProperty,ea={current:null},ei={key:!0,ref:!0,__self:!0,__source:!0};function el(e,t,n){var r,o={},a=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)eo.call(t,r)&&!ei.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var u=Array(l),s=0;s<l;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:z,type:e,key:a,ref:i,props:o,_owner:ea.current}}function eu(e){return"object"==typeof e&&null!==e&&e.$$typeof===z}var es=/\/+/g;function ec(e,t){var n,r;return"object"==typeof e&&null!==e&&null!=e.key?(n=""+e.key,r={"=":"=0",":":"=2"},"$"+n.replace(/[=:]/g,function(e){return r[e]})):t.toString(36)}function ef(e,t,n){if(null==e)return e;var r=[],o=0;return function e(t,n,r,o,a){var i,l,u,s=typeof t;("undefined"===s||"boolean"===s)&&(t=null);var c=!1;if(null===t)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case z:case F:c=!0}}if(c)return a=a(c=t),t=""===o?"."+ec(c,0):o,er(a)?(r="",null!=t&&(r=t.replace(es,"$&/")+"/"),e(a,n,r,"",function(e){return e})):null!=a&&(eu(a)&&(i=a,l=r+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(es,"$&/")+"/")+t,a={$$typeof:z,type:i.type,key:l,ref:i.ref,props:i.props,_owner:i._owner}),n.push(a)),1;if(c=0,o=""===o?".":o+":",er(t))for(var f=0;f<t.length;f++){var d=o+ec(s=t[f],f);c+=e(s,n,r,d,a)}else if("function"==typeof(d=null===(u=t)||"object"!=typeof u?null:"function"==typeof(u=Y&&u[Y]||u["@@iterator"])?u:null))for(t=d.call(t),f=0;!(s=t.next()).done;)d=o+ec(s=s.value,f++),c+=e(s,n,r,d,a);else if("object"===s)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(n=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return c}(e,r,"","",function(e){return t.call(n,e,o++)}),r}function ed(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var ep={current:null},eh={transition:null};r={map:ef,forEach:function(e,t,n){ef(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ef(e,function(){t++}),t},toArray:function(e){return ef(e,function(e){return e})||[]},only:function(e){if(!eu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},o=Z,a=U,i=$,l=et,u=B,s=q,c={ReactCurrentDispatcher:ep,ReactCurrentBatchConfig:eh,ReactCurrentOwner:ea},f=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=G({},e.props),o=e.key,a=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,i=ea.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)eo.call(t,u)&&!ei.hasOwnProperty(u)&&(r[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)r.children=n;else if(1<u){l=Array(u);for(var s=0;s<u;s++)l[s]=arguments[s+2];r.children=l}return{$$typeof:z,type:e.type,key:o,ref:a,props:r,_owner:i}},d=function(e){return(e={$$typeof:W,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:V,_context:e},e.Consumer=e},p=el,h=function(e){var t=el.bind(null,e);return t.type=e,t},m=function(){return{current:null}},v=function(e){return{$$typeof:H,render:e}},y=eu,g=function(e){return{$$typeof:K,_payload:{_status:-1,_result:e},_init:ed}},b=function(e,t){return{$$typeof:Q,type:e,compare:void 0===t?null:t}},w=function(e){var t=eh.transition;eh.transition={};try{e()}finally{eh.transition=t}},S=function(){throw Error("act(...) is not supported in production builds of React.")},x=function(e,t){return ep.current.useCallback(e,t)},k=function(e){return ep.current.useContext(e)},E=function(){},_=function(e){return ep.current.useDeferredValue(e)},C=function(e,t){return ep.current.useEffect(e,t)},j=function(){return ep.current.useId()},P=function(e,t,n){return ep.current.useImperativeHandle(e,t,n)},R=function(e,t){return ep.current.useInsertionEffect(e,t)},O=function(e,t){return ep.current.useLayoutEffect(e,t)},T=function(e,t){return ep.current.useMemo(e,t)},N=function(e,t,n){return ep.current.useReducer(e,t,n)},L=function(e){return ep.current.useRef(e)},A=function(e){return ep.current.useState(e)},M=function(e,t,n){return ep.current.useSyncExternalStore(e,t,n)},D=function(){return ep.current.useTransition()},I="18.2.0"}),p("68oCn",function(t,n){e(t.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",function(){return V},function(e){return V=e}),e(t.exports,"createPortal",function(){return W},function(e){return W=e}),e(t.exports,"createRoot",function(){return H},function(e){return H=e}),e(t.exports,"findDOMNode",function(){return q},function(e){return q=e}),e(t.exports,"flushSync",function(){return Q},function(e){return Q=e}),e(t.exports,"hydrate",function(){return K},function(e){return K=e}),e(t.exports,"hydrateRoot",function(){return Y},function(e){return Y=e}),e(t.exports,"render",function(){return X},function(e){return X=e}),e(t.exports,"unmountComponentAtNode",function(){return G},function(e){return G=e}),e(t.exports,"unstable_batchedUpdates",function(){return J},function(e){return J=e}),e(t.exports,"unstable_renderSubtreeIntoContainer",function(){return Z},function(e){return Z=e}),e(t.exports,"version",function(){return ee},function(e){return ee=e});var r,o,a,i,l,u,s=d("4Iuzv"),c=d("1c3ne");function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=new Set,h={};function m(e,t){v(e,t),v(e+"Capture",t)}function v(e,t){for(h[e]=t,e=0;e<t.length;e++)p.add(t[e])}var y=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),g=Object.prototype.hasOwnProperty,b=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},S={};function x(e,t,n,r,o,a,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var k={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){k[e]=new x(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];k[t]=new x(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){k[e]=new x(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){k[e]=new x(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){k[e]=new x(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){k[e]=new x(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){k[e]=new x(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){k[e]=new x(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){k[e]=new x(e,5,!1,e.toLowerCase(),null,!1,!1)});var E=/[\-:]([a-z])/g;function _(e){return e[1].toUpperCase()}function C(e,t,n,r){var o,a=k.hasOwnProperty(t)?k[t]:null;(null!==a?0!==a.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":if(r)return!1;if(null!==n)return!n.acceptsBooleans;return"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e;default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?(o=t,(!!g.call(S,o)||!g.call(w,o)&&(b.test(o)?S[o]=!0:(w[o]=!0,!1)))&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n))):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(E,_);k[t]=new x(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(E,_);k[t]=new x(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(E,_);k[t]=new x(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){k[e]=new x(e,1,!1,e.toLowerCase(),null,!1,!1)}),k.xlinkHref=new x("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){k[e]=new x(e,1,!1,e.toLowerCase(),null,!0,!0)});var j=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,P=Symbol.for("react.element"),R=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),L=Symbol.for("react.provider"),A=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),F=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var U=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var B=Symbol.iterator;function $(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=B&&e[B]||e["@@iterator"])?e:null}var V,W,H,q,Q,K,Y,X,G,J,Z,ee,et,en=Object.assign;function er(e){if(void 0===et)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);et=t&&t[1]||""}return"\n"+et+e}var eo=!1;function ea(e,t){if(!e||eo)return"";eo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t){if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var o=t.stack.split("\n"),a=r.stack.split("\n"),i=o.length-1,l=a.length-1;1<=i&&0<=l&&o[i]!==a[l];)l--;for(;1<=i&&0<=l;i--,l--)if(o[i]!==a[l]){if(1!==i||1!==l)do if(i--,0>--l||o[i]!==a[l]){var u="\n"+o[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=l)break}}}finally{eo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?er(e):""}function ei(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function el(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function eu(e){e._valueTracker||(e._valueTracker=function(e){var t=el(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function es(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=el(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function ec(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function ef(e,t){var n=t.checked;return en({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function ed(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=ei(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function ep(e,t){null!=(t=t.checked)&&C(e,"checked",t,!1)}function eh(e,t){ep(e,t);var n=ei(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r){e.removeAttribute("value");return}t.hasOwnProperty("value")?ev(e,t.type,n):t.hasOwnProperty("defaultValue")&&ev(e,t.type,ei(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function em(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ev(e,t,n){("number"!==t||ec(e.ownerDocument)!==e)&&(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ey=Array.isArray;function eg(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(o=0,n=""+ei(n),t=null;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function eb(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(f(91));return en({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ew(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(f(92));if(ey(n)){if(1<n.length)throw Error(f(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:ei(n)}}function eS(e,t){var n=ei(t.value),r=ei(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ex(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function ek(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function eE(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?ek(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var e_,eC,ej=(e_=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((eC=eC||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=eC.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return e_(e,t,n,r)})}:e_);function eP(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType){n.nodeValue=t;return}}e.textContent=t}var eR={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eO=["Webkit","ms","Moz","O"];function eT(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||eR.hasOwnProperty(e)&&eR[e]?(""+t).trim():t+"px"}function eN(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),o=eT(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}Object.keys(eR).forEach(function(e){eO.forEach(function(t){eR[t=t+e.charAt(0).toUpperCase()+e.substring(1)]=eR[e]})});var eL=en({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function eA(e,t){if(t){if(eL[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(f(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(f(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(f(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(f(62))}}function eM(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eD=null;function eI(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ez=null,eF=null,eU=null;function eB(e){if(e=rY(e)){if("function"!=typeof ez)throw Error(f(280));var t=e.stateNode;t&&(t=rG(t),ez(e.stateNode,e.type,t))}}function e$(e){eF?eU?eU.push(e):eU=[e]:eF=e}function eV(){if(eF){var e=eF,t=eU;if(eU=eF=null,eB(e),t)for(e=0;e<t.length;e++)eB(t[e])}}function eW(e,t){return e(t)}function eH(){}var eq=!1;function eQ(e,t,n){if(eq)return e(t,n);eq=!0;try{return eW(e,t,n)}finally{eq=!1,(null!==eF||null!==eU)&&(eH(),eV())}}function eK(e,t){var n=e.stateNode;if(null===n)return null;var r=rG(n);if(null===r)return null;switch(n=r[t],t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(f(231,t,typeof n));return n}var eY=!1;if(y)try{var eX={};Object.defineProperty(eX,"passive",{get:function(){eY=!0}}),window.addEventListener("test",eX,eX),window.removeEventListener("test",eX,eX)}catch(e){eY=!1}function eG(e,t,n,r,o,a,i,l,u){var s=Array.prototype.slice.call(arguments,3);try{t.apply(n,s)}catch(e){this.onError(e)}}var eJ=!1,eZ=null,e0=!1,e1=null,e2={onError:function(e){eJ=!0,eZ=e}};function e3(e,t,n,r,o,a,i,l,u){eJ=!1,eZ=null,eG.apply(e2,arguments)}function e4(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do 0!=(4098&(t=e).flags)&&(n=t.return),e=t.return;while(e)}return 3===t.tag?n:null}function e5(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&null!==(e=e.alternate)&&(t=e.memoizedState),null!==t)return t.dehydrated}return null}function e6(e){if(e4(e)!==e)throw Error(f(188))}function e8(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=e4(e)))throw Error(f(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(null===o)break;var a=o.alternate;if(null===a){if(null!==(r=o.return)){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return e6(o),e;if(a===r)return e6(o),t;a=a.sibling}throw Error(f(188))}if(n.return!==r.return)n=o,r=a;else{for(var i=!1,l=o.child;l;){if(l===n){i=!0,n=o,r=a;break}if(l===r){i=!0,r=o,n=a;break}l=l.sibling}if(!i){for(l=a.child;l;){if(l===n){i=!0,n=a,r=o;break}if(l===r){i=!0,r=a,n=o;break}l=l.sibling}if(!i)throw Error(f(189))}}if(n.alternate!==r)throw Error(f(190))}if(3!==n.tag)throw Error(f(188));return n.stateNode.current===n?e:t}(e))?function e(t){if(5===t.tag||6===t.tag)return t;for(t=t.child;null!==t;){var n=e(t);if(null!==n)return n;t=t.sibling}return null}(e):null}var e9=c.unstable_scheduleCallback,e7=c.unstable_cancelCallback,te=c.unstable_shouldYield,tt=c.unstable_requestPaint,tn=c.unstable_now,tr=c.unstable_getCurrentPriorityLevel,to=c.unstable_ImmediatePriority,ta=c.unstable_UserBlockingPriority,ti=c.unstable_NormalPriority,tl=c.unstable_LowPriority,tu=c.unstable_IdlePriority,ts=null,tc=null,tf=Math.clz32?Math.clz32:function(e){return 0==(e>>>=0)?32:31-(td(e)/tp|0)|0},td=Math.log,tp=Math.LN2,th=64,tm=4194304;function tv(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ty(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,i=268435455&n;if(0!==i){var l=i&~o;0!==l?r=tv(l):0!=(a&=i)&&(r=tv(a))}else 0!=(i=n&~o)?r=tv(i):0!==a&&(r=tv(a));if(0===r)return 0;if(0!==t&&t!==r&&0==(t&o)&&((o=r&-r)>=(a=t&-t)||16===o&&0!=(4194240&a)))return t;if(0!=(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)o=1<<(n=31-tf(t)),r|=e[n],t&=~o;return r}function tg(e){return 0!=(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function tb(){var e=th;return 0==(4194240&(th<<=1))&&(th=64),e}function tw(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tS(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-tf(t)]=n}function tx(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tf(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var tk=0;function tE(e){return 1<(e&=-e)?4<e?0!=(268435455&e)?16:536870912:4:1}var t_,tC,tj,tP,tR,tO=!1,tT=[],tN=null,tL=null,tA=null,tM=new Map,tD=new Map,tI=[],tz="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tF(e,t){switch(e){case"focusin":case"focusout":tN=null;break;case"dragenter":case"dragleave":tL=null;break;case"mouseover":case"mouseout":tA=null;break;case"pointerover":case"pointerout":tM.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":tD.delete(t.pointerId)}}function tU(e,t,n,r,o,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},null!==t&&null!==(t=rY(t))&&tC(t)):(e.eventSystemFlags|=r,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o)),e}function tB(e){var t=rK(e.target);if(null!==t){var n=e4(t);if(null!==n){if(13===(t=n.tag)){if(null!==(t=e5(n))){e.blockedOn=t,tR(e.priority,function(){tj(n)});return}}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=3===n.tag?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function t$(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=tZ(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=rY(n))&&tC(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);eD=r,n.target.dispatchEvent(r),eD=null,t.shift()}return!0}function tV(e,t,n){t$(e)&&n.delete(t)}function tW(){tO=!1,null!==tN&&t$(tN)&&(tN=null),null!==tL&&t$(tL)&&(tL=null),null!==tA&&t$(tA)&&(tA=null),tM.forEach(tV),tD.forEach(tV)}function tH(e,t){e.blockedOn===t&&(e.blockedOn=null,tO||(tO=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,tW)))}function tq(e){function t(t){return tH(t,e)}if(0<tT.length){tH(tT[0],e);for(var n=1;n<tT.length;n++){var r=tT[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==tN&&tH(tN,e),null!==tL&&tH(tL,e),null!==tA&&tH(tA,e),tM.forEach(t),tD.forEach(t),n=0;n<tI.length;n++)(r=tI[n]).blockedOn===e&&(r.blockedOn=null);for(;0<tI.length&&null===(n=tI[0]).blockedOn;)tB(n),null===n.blockedOn&&tI.shift()}var tQ=j.ReactCurrentBatchConfig,tK=!0;function tY(e,t,n,r){var o=tk,a=tQ.transition;tQ.transition=null;try{tk=1,tG(e,t,n,r)}finally{tk=o,tQ.transition=a}}function tX(e,t,n,r){var o=tk,a=tQ.transition;tQ.transition=null;try{tk=4,tG(e,t,n,r)}finally{tk=o,tQ.transition=a}}function tG(e,t,n,r){if(tK){var o=tZ(e,t,n,r);if(null===o)rw(e,t,r,tJ,n),tF(e,r);else if(function(e,t,n,r,o){switch(t){case"focusin":return tN=tU(tN,e,t,n,r,o),!0;case"dragenter":return tL=tU(tL,e,t,n,r,o),!0;case"mouseover":return tA=tU(tA,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return tM.set(a,tU(tM.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,tD.set(a,tU(tD.get(a)||null,e,t,n,r,o)),!0}return!1}(o,e,t,n,r))r.stopPropagation();else if(tF(e,r),4&t&&-1<tz.indexOf(e)){for(;null!==o;){var a=rY(o);if(null!==a&&t_(a),null===(a=tZ(e,t,n,r))&&rw(e,t,r,tJ,n),a===o)break;o=a}null!==o&&r.stopPropagation()}else rw(e,t,r,null,n)}}var tJ=null;function tZ(e,t,n,r){if(tJ=null,null!==(e=rK(e=eI(r)))){if(null===(t=e4(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=e5(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}return tJ=e,null}function t0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tr()){case to:return 1;case ta:return 4;case ti:case tl:return 16;case tu:return 536870912;default:return 16}default:return 16}}var t1=null,t2=null,t3=null;function t4(){if(t3)return t3;var e,t,n=t2,r=n.length,o="value"in t1?t1.value:t1.textContent,a=o.length;for(e=0;e<r&&n[e]===o[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===o[a-t];t++);return t3=o.slice(e,1<t?1-t:void 0)}function t5(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function t6(){return!0}function t8(){return!1}function t9(e){function t(t,n,r,o,a){for(var i in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(o):o[i]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?t6:t8,this.isPropagationStopped=t8,this}return en(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=t6)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=t6)},persist:function(){},isPersistent:t6}),t}var t7,ne,nt,nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nr=t9(nn),no=en({},nn,{view:0,detail:0}),na=t9(no),ni=en({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ny,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nt&&(nt&&"mousemove"===e.type?(t7=e.screenX-nt.screenX,ne=e.screenY-nt.screenY):ne=t7=0,nt=e),t7)},movementY:function(e){return"movementY"in e?e.movementY:ne}}),nl=t9(ni),nu=t9(en({},ni,{dataTransfer:0})),ns=t9(en({},no,{relatedTarget:0})),nc=t9(en({},nn,{animationName:0,elapsedTime:0,pseudoElement:0})),nf=t9(en({},nn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),nd=t9(en({},nn,{data:0})),np={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=nm[e])&&!!t[e]}function ny(){return nv}var ng=t9(en({},no,{key:function(e){if(e.key){var t=np[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=t5(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?nh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ny,charCode:function(e){return"keypress"===e.type?t5(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?t5(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),nb=t9(en({},ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),nw=t9(en({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ny})),nS=t9(en({},nn,{propertyName:0,elapsedTime:0,pseudoElement:0})),nx=t9(en({},ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),nk=[9,13,27,32],nE=y&&"CompositionEvent"in window,n_=null;y&&"documentMode"in document&&(n_=document.documentMode);var nC=y&&"TextEvent"in window&&!n_,nj=y&&(!nE||n_&&8<n_&&11>=n_),nP=!1;function nR(e,t){switch(e){case"keyup":return -1!==nk.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nO(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var nT=!1,nN={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nL(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!nN[e.type]:"textarea"===t}function nA(e,t,n,r){e$(r),0<(t=rx(t,"onChange")).length&&(n=new nr("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var nM=null,nD=null;function nI(e){rh(e,0)}function nz(e){if(es(rX(e)))return e}function nF(e,t){if("change"===e)return t}var nU=!1;if(y){if(y){var nB="oninput"in document;if(!nB){var n$=document.createElement("div");n$.setAttribute("oninput","return;"),nB="function"==typeof n$.oninput}r=nB}else r=!1;nU=r&&(!document.documentMode||9<document.documentMode)}function nV(){nM&&(nM.detachEvent("onpropertychange",nW),nD=nM=null)}function nW(e){if("value"===e.propertyName&&nz(nD)){var t=[];nA(t,nD,e,eI(e)),eQ(nI,t)}}function nH(e,t,n){"focusin"===e?(nV(),nM=t,nD=n,nM.attachEvent("onpropertychange",nW)):"focusout"===e&&nV()}function nq(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return nz(nD)}function nQ(e,t){if("click"===e)return nz(t)}function nK(e,t){if("input"===e||"change"===e)return nz(t)}var nY="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function nX(e,t){if(nY(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!g.call(t,o)||!nY(e[o],t[o]))return!1}return!0}function nG(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nJ(e,t){var n,r=nG(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=nG(r)}}function nZ(){for(var e=window,t=ec();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(n)e=t.contentWindow;else break;t=ec(e.document)}return t}function n0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var n1=y&&"documentMode"in document&&11>=document.documentMode,n2=null,n3=null,n4=null,n5=!1;function n6(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;n5||null==n2||n2!==ec(r)||(r="selectionStart"in(r=n2)&&n0(r)?{start:r.selectionStart,end:r.selectionEnd}:{anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},n4&&nX(n4,r)||(n4=r,0<(r=rx(n3,"onSelect")).length&&(t=new nr("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=n2)))}function n8(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var n9={animationend:n8("Animation","AnimationEnd"),animationiteration:n8("Animation","AnimationIteration"),animationstart:n8("Animation","AnimationStart"),transitionend:n8("Transition","TransitionEnd")},n7={},re={};function rt(e){if(n7[e])return n7[e];if(!n9[e])return e;var t,n=n9[e];for(t in n)if(n.hasOwnProperty(t)&&t in re)return n7[e]=n[t];return e}y&&(re=document.createElement("div").style,"AnimationEvent"in window||(delete n9.animationend.animation,delete n9.animationiteration.animation,delete n9.animationstart.animation),"TransitionEvent"in window||delete n9.transitionend.transition);var rn=rt("animationend"),rr=rt("animationiteration"),ro=rt("animationstart"),ra=rt("transitionend"),ri=new Map,rl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ru(e,t){ri.set(e,t),m(t,[e])}for(var rs=0;rs<rl.length;rs++){var rc=rl[rs];ru(rc.toLowerCase(),"on"+(rc[0].toUpperCase()+rc.slice(1)))}ru(rn,"onAnimationEnd"),ru(rr,"onAnimationIteration"),ru(ro,"onAnimationStart"),ru("dblclick","onDoubleClick"),ru("focusin","onFocus"),ru("focusout","onBlur"),ru(ra,"onTransitionEnd"),v("onMouseEnter",["mouseout","mouseover"]),v("onMouseLeave",["mouseout","mouseover"]),v("onPointerEnter",["pointerout","pointerover"]),v("onPointerLeave",["pointerout","pointerover"]),m("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),m("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),m("onBeforeInput",["compositionend","keypress","textInput","paste"]),m("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rd=new Set("cancel close invalid load scroll toggle".split(" ").concat(rf));function rp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,o,a,i,l,u){if(e3.apply(this,arguments),eJ){if(eJ){var s=eZ;eJ=!1,eZ=null}else throw Error(f(198));e0||(e0=!0,e1=s)}}(r,t,void 0,e),e.currentTarget=null}function rh(e,t){t=0!=(4&t);for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],u=l.instance,s=l.currentTarget;if(l=l.listener,u!==a&&o.isPropagationStopped())break e;rp(o,l,s),a=u}else for(i=0;i<r.length;i++){if(u=(l=r[i]).instance,s=l.currentTarget,l=l.listener,u!==a&&o.isPropagationStopped())break e;rp(o,l,s),a=u}}}if(e0)throw e=e1,e0=!1,e1=null,e}function rm(e,t){var n=t[rH];void 0===n&&(n=t[rH]=new Set);var r=e+"__bubble";n.has(r)||(rb(t,e,2,!1),n.add(r))}function rv(e,t,n){var r=0;t&&(r|=4),rb(n,e,r,t)}var ry="_reactListening"+Math.random().toString(36).slice(2);function rg(e){if(!e[ry]){e[ry]=!0,p.forEach(function(t){"selectionchange"!==t&&(rd.has(t)||rv(t,!1,e),rv(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[ry]||(t[ry]=!0,rv("selectionchange",!1,t))}}function rb(e,t,n,r){switch(t0(t)){case 1:var o=tY;break;case 4:o=tX;break;default:o=tG}n=o.bind(null,t,n,e),o=void 0,eY&&("touchstart"===t||"touchmove"===t||"wheel"===t)&&(o=!0),r?void 0!==o?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):void 0!==o?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function rw(e,t,n,r,o){var a=r;if(0==(1&t)&&0==(2&t)&&null!==r)e:for(;;){if(null===r)return;var i=r.tag;if(3===i||4===i){var l=r.stateNode.containerInfo;if(l===o||8===l.nodeType&&l.parentNode===o)break;if(4===i)for(i=r.return;null!==i;){var u=i.tag;if((3===u||4===u)&&((u=i.stateNode.containerInfo)===o||8===u.nodeType&&u.parentNode===o))return;i=i.return}for(;null!==l;){if(null===(i=rK(l)))return;if(5===(u=i.tag)||6===u){r=a=i;continue e}l=l.parentNode}}r=r.return}eQ(function(){var r=a,o=eI(n),i=[];e:{var l=ri.get(e);if(void 0!==l){var u=nr,s=e;switch(e){case"keypress":if(0===t5(n))break e;case"keydown":case"keyup":u=ng;break;case"focusin":s="focus",u=ns;break;case"focusout":s="blur",u=ns;break;case"beforeblur":case"afterblur":u=ns;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":u=nl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":u=nu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":u=nw;break;case rn:case rr:case ro:u=nc;break;case ra:u=nS;break;case"scroll":u=na;break;case"wheel":u=nx;break;case"copy":case"cut":case"paste":u=nf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":u=nb}var c=0!=(4&t),f=!c&&"scroll"===e,d=c?null!==l?l+"Capture":null:l;c=[];for(var p,h=r;null!==h;){var m=(p=h).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==d&&null!=(m=eK(h,d))&&c.push(rS(h,m,p))),f)break;h=h.return}0<c.length&&(l=new u(l,s,null,n,o),i.push({event:l,listeners:c}))}}if(0==(7&t)){if(l="mouseover"===e||"pointerover"===e,u="mouseout"===e||"pointerout"===e,!(l&&n!==eD&&(s=n.relatedTarget||n.fromElement)&&(rK(s)||s[rW]))&&(u||l)&&(l=o.window===o?o:(l=o.ownerDocument)?l.defaultView||l.parentWindow:window,u?(s=n.relatedTarget||n.toElement,u=r,null!==(s=s?rK(s):null)&&(f=e4(s),s!==f||5!==s.tag&&6!==s.tag)&&(s=null)):(u=null,s=r),u!==s)){if(c=nl,m="onMouseLeave",d="onMouseEnter",h="mouse",("pointerout"===e||"pointerover"===e)&&(c=nb,m="onPointerLeave",d="onPointerEnter",h="pointer"),f=null==u?l:rX(u),p=null==s?l:rX(s),(l=new c(m,h+"leave",u,n,o)).target=f,l.relatedTarget=p,m=null,rK(o)===r&&((c=new c(d,h+"enter",s,n,o)).target=p,c.relatedTarget=f,m=c),f=m,u&&s)t:{for(c=u,d=s,h=0,p=c;p;p=rk(p))h++;for(p=0,m=d;m;m=rk(m))p++;for(;0<h-p;)c=rk(c),h--;for(;0<p-h;)d=rk(d),p--;for(;h--;){if(c===d||null!==d&&c===d.alternate)break t;c=rk(c),d=rk(d)}c=null}else c=null;null!==u&&rE(i,l,u,c,!1),null!==s&&null!==f&&rE(i,f,s,c,!0)}e:{if("select"===(u=(l=r?rX(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===u&&"file"===l.type)var v,y=nF;else if(nL(l)){if(nU)y=nK;else{y=nq;var g=nH}}else(u=l.nodeName)&&"input"===u.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(y=nQ);if(y&&(y=y(e,r))){nA(i,y,n,o);break e}g&&g(e,l,r),"focusout"===e&&(g=l._wrapperState)&&g.controlled&&"number"===l.type&&ev(l,"number",l.value)}switch(g=r?rX(r):window,e){case"focusin":(nL(g)||"true"===g.contentEditable)&&(n2=g,n3=r,n4=null);break;case"focusout":n4=n3=n2=null;break;case"mousedown":n5=!0;break;case"contextmenu":case"mouseup":case"dragend":n5=!1,n6(i,n,o);break;case"selectionchange":if(n1)break;case"keydown":case"keyup":n6(i,n,o)}if(nE)t:{switch(e){case"compositionstart":var b="onCompositionStart";break t;case"compositionend":b="onCompositionEnd";break t;case"compositionupdate":b="onCompositionUpdate";break t}b=void 0}else nT?nR(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(nj&&"ko"!==n.locale&&(nT||"onCompositionStart"!==b?"onCompositionEnd"===b&&nT&&(v=t4()):(t2="value"in(t1=o)?t1.value:t1.textContent,nT=!0)),0<(g=rx(r,b)).length&&(b=new nd(b,e,null,n,o),i.push({event:b,listeners:g}),v?b.data=v:null!==(v=nO(n))&&(b.data=v))),(v=nC?function(e,t){switch(e){case"compositionend":return nO(t);case"keypress":if(32!==t.which)return null;return nP=!0," ";case"textInput":return" "===(e=t.data)&&nP?null:e;default:return null}}(e,n):function(e,t){if(nT)return"compositionend"===e||!nE&&nR(e,t)?(e=t4(),t3=t2=t1=null,nT=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nj&&"ko"!==t.locale?null:t.data}}(e,n))&&0<(r=rx(r,"onBeforeInput")).length&&(o=new nd("onBeforeInput","beforeinput",null,n,o),i.push({event:o,listeners:r}),o.data=v)}rh(i,t)})}function rS(e,t,n){return{instance:e,listener:t,currentTarget:n}}function rx(e,t){for(var n=t+"Capture",r=[];null!==e;){var o=e,a=o.stateNode;5===o.tag&&null!==a&&(o=a,null!=(a=eK(e,n))&&r.unshift(rS(e,a,o)),null!=(a=eK(e,t))&&r.push(rS(e,a,o))),e=e.return}return r}function rk(e){if(null===e)return null;do e=e.return;while(e&&5!==e.tag)return e||null}function rE(e,t,n,r,o){for(var a=t._reactName,i=[];null!==n&&n!==r;){var l=n,u=l.alternate,s=l.stateNode;if(null!==u&&u===r)break;5===l.tag&&null!==s&&(l=s,o?null!=(u=eK(n,a))&&i.unshift(rS(n,u,l)):o||null!=(u=eK(n,a))&&i.push(rS(n,u,l))),n=n.return}0!==i.length&&e.push({event:t,listeners:i})}var r_=/\r\n?/g,rC=/\u0000|\uFFFD/g;function rj(e){return("string"==typeof e?e:""+e).replace(r_,"\n").replace(rC,"")}function rP(e,t,n){if(t=rj(t),rj(e)!==t&&n)throw Error(f(425))}function rR(){}var rO=null,rT=null;function rN(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var rL="function"==typeof setTimeout?setTimeout:void 0,rA="function"==typeof clearTimeout?clearTimeout:void 0,rM="function"==typeof Promise?Promise:void 0,rD="function"==typeof queueMicrotask?queueMicrotask:void 0!==rM?function(e){return rM.resolve(null).then(e).catch(rI)}:rL;function rI(e){setTimeout(function(){throw e})}function rz(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&8===o.nodeType){if("/$"===(n=o.data)){if(0===r){e.removeChild(o),tq(t);return}r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++}n=o}while(n)tq(t)}function rF(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function rU(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var rB=Math.random().toString(36).slice(2),r$="__reactFiber$"+rB,rV="__reactProps$"+rB,rW="__reactContainer$"+rB,rH="__reactEvents$"+rB,rq="__reactListeners$"+rB,rQ="__reactHandles$"+rB;function rK(e){var t=e[r$];if(t)return t;for(var n=e.parentNode;n;){if(t=n[rW]||n[r$]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=rU(e);null!==e;){if(n=e[r$])return n;e=rU(e)}return t}n=(e=n).parentNode}return null}function rY(e){return(e=e[r$]||e[rW])&&(5===e.tag||6===e.tag||13===e.tag||3===e.tag)?e:null}function rX(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(f(33))}function rG(e){return e[rV]||null}var rJ=[],rZ=-1;function r0(e){return{current:e}}function r1(e){0>rZ||(e.current=rJ[rZ],rJ[rZ]=null,rZ--)}function r2(e,t){rJ[++rZ]=e.current,e.current=t}var r3={},r4=r0(r3),r5=r0(!1),r6=r3;function r8(e,t){var n=e.type.contextTypes;if(!n)return r3;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o,a={};for(o in n)a[o]=t[o];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function r9(e){return null!=(e=e.childContextTypes)}function r7(){r1(r5),r1(r4)}function oe(e,t,n){if(r4.current!==r3)throw Error(f(168));r2(r4,t),r2(r5,n)}function ot(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var o in r=r.getChildContext())if(!(o in t))throw Error(f(108,function(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return function e(t){if(null==t)return null;if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t;switch(t){case O:return"Fragment";case R:return"Portal";case N:return"Profiler";case T:return"StrictMode";case D:return"Suspense";case I:return"SuspenseList"}if("object"==typeof t)switch(t.$$typeof){case A:return(t.displayName||"Context")+".Consumer";case L:return(t._context.displayName||"Context")+".Provider";case M:var n=t.render;return(t=t.displayName)||(t=""!==(t=n.displayName||n.name||"")?"ForwardRef("+t+")":"ForwardRef"),t;case z:return null!==(n=t.displayName||null)?n:e(t.type)||"Memo";case F:n=t._payload,t=t._init;try{return e(t(n))}catch(e){}}return null}(t);case 8:return t===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}(e)||"Unknown",o));return en({},n,r)}function on(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||r3,r6=r4.current,r2(r4,e),r2(r5,r5.current),!0}function or(e,t,n){var r=e.stateNode;if(!r)throw Error(f(169));n?(e=ot(e,t,r6),r.__reactInternalMemoizedMergedChildContext=e,r1(r5),r1(r4),r2(r4,e)):r1(r5),r2(r5,n)}var oo=null,oa=!1,oi=!1;function ol(e){null===oo?oo=[e]:oo.push(e)}function ou(){if(!oi&&null!==oo){oi=!0;var e=0,t=tk;try{var n=oo;for(tk=1;e<n.length;e++){var r=n[e];do r=r(!0);while(null!==r)}oo=null,oa=!1}catch(t){throw null!==oo&&(oo=oo.slice(e+1)),e9(to,ou),t}finally{tk=t,oi=!1}}return null}var os=[],oc=0,of=null,od=0,op=[],oh=0,om=null,ov=1,oy="";function og(e,t){os[oc++]=od,os[oc++]=of,of=e,od=t}function ob(e,t,n){op[oh++]=ov,op[oh++]=oy,op[oh++]=om,om=e;var r=ov;e=oy;var o=32-tf(r)-1;r&=~(1<<o),n+=1;var a=32-tf(t)+o;if(30<a){var i=o-o%5;a=(r&(1<<i)-1).toString(32),r>>=i,o-=i,ov=1<<32-tf(t)+o|n<<o|r,oy=a+e}else ov=1<<a|n<<o|r,oy=e}function ow(e){null!==e.return&&(og(e,1),ob(e,1,0))}function oS(e){for(;e===of;)of=os[--oc],os[oc]=null,od=os[--oc],os[oc]=null;for(;e===om;)om=op[--oh],op[oh]=null,oy=op[--oh],op[oh]=null,ov=op[--oh],op[oh]=null}var ox=null,ok=null,oE=!1,o_=null;function oC(e,t){var n=l9(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function oj(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ox=e,ok=rF(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ox=e,ok=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==om?{id:ov,overflow:oy}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=l9(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ox=e,ok=null,!0);default:return!1}}function oP(e){return 0!=(1&e.mode)&&0==(128&e.flags)}function oR(e){if(oE){var t=ok;if(t){var n=t;if(!oj(e,t)){if(oP(e))throw Error(f(418));t=rF(n.nextSibling);var r=ox;t&&oj(e,t)?oC(r,n):(e.flags=-4097&e.flags|2,oE=!1,ox=e)}}else{if(oP(e))throw Error(f(418));e.flags=-4097&e.flags|2,oE=!1,ox=e}}}function oO(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ox=e}function oT(e){if(e!==ox)return!1;if(!oE)return oO(e),oE=!0,!1;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!rN(e.type,e.memoizedProps)),t&&(t=ok)){if(oP(e))throw oN(),Error(f(418));for(;t;)oC(e,t),t=rF(t.nextSibling)}if(oO(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(f(317));e:{for(t=0,e=e.nextSibling;e;){if(8===e.nodeType){var t,n=e.data;if("/$"===n){if(0===t){ok=rF(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ok=null}}else ok=ox?rF(e.stateNode.nextSibling):null;return!0}function oN(){for(var e=ok;e;)e=rF(e.nextSibling)}function oL(){ok=ox=null,oE=!1}function oA(e){null===o_?o_=[e]:o_.push(e)}var oM=j.ReactCurrentBatchConfig;function oD(e,t){if(e&&e.defaultProps)for(var n in t=en({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}var oI=r0(null),oz=null,oF=null,oU=null;function oB(){oU=oF=oz=null}function o$(e){var t=oI.current;r1(oI),e._currentValue=t}function oV(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function oW(e,t){oz=e,oU=oF=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(iS=!0),e.firstContext=null)}function oH(e){var t=e._currentValue;if(oU!==e){if(e={context:e,memoizedValue:t,next:null},null===oF){if(null===oz)throw Error(f(308));oF=e,oz.dependencies={lanes:0,firstContext:e}}else oF=oF.next=e}return t}var oq=null;function oQ(e){null===oq?oq=[e]:oq.push(e)}function oK(e,t,n,r){var o=t.interleaved;return null===o?(n.next=n,oQ(t)):(n.next=o.next,o.next=n),t.interleaved=n,oY(e,r)}function oY(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var oX=!1;function oG(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function oJ(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function oZ(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function o0(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!=(2&lu)){var o=r.pending;return null===o?t.next=t:(t.next=o.next,o.next=t),r.pending=t,oY(e,n)}return null===(o=r.interleaved)?(t.next=t,oQ(r)):(t.next=o.next,o.next=t),r.interleaved=t,oY(e,n)}function o1(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!=(4194240&n))){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tx(e,n)}}function o2(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var o=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===a?o=a=i:a=a.next=i,n=n.next}while(null!==n)null===a?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function o3(e,t,n,r){var o=e.updateQueue;oX=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,l=o.shared.pending;if(null!==l){o.shared.pending=null;var u=l,s=u.next;u.next=null,null===i?a=s:i.next=s,i=u;var c=e.alternate;null!==c&&(l=(c=c.updateQueue).lastBaseUpdate)!==i&&(null===l?c.firstBaseUpdate=s:l.next=s,c.lastBaseUpdate=u)}if(null!==a){var f=o.baseState;for(i=0,c=s=u=null,l=a;;){var d=l.lane,p=l.eventTime;if((r&d)===d){null!==c&&(c=c.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,m=l;switch(d=t,p=n,m.tag){case 1:if("function"==typeof(h=m.payload)){f=h.call(p,f,d);break e}f=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null==(d="function"==typeof(h=m.payload)?h.call(p,f,d):h))break e;f=en({},f,d);break e;case 2:oX=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(d=o.effects)?o.effects=[l]:d.push(l))}else p={eventTime:p,lane:d,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(s=c=p,u=f):c=c.next=p,i|=d;if(null===(l=l.next)){if(null===(l=o.shared.pending))break;l=(d=l).next,d.next=null,o.lastBaseUpdate=d,o.shared.pending=null}}if(null===c&&(u=f),o.baseState=u,o.firstBaseUpdate=s,o.lastBaseUpdate=c,null!==(t=o.shared.interleaved)){o=t;do i|=o.lane,o=o.next;while(o!==t)}else null===a&&(o.shared.lanes=0);lv|=i,e.lanes=i,e.memoizedState=f}}function o4(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(null!==o){if(r.callback=null,r=n,"function"!=typeof o)throw Error(f(191,o));o.call(r)}}}var o5=(new s.Component).refs;function o6(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:en({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var o8={isMounted:function(e){return!!(e=e._reactInternals)&&e4(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=lA(),o=lM(e),a=oZ(r,o);a.payload=t,null!=n&&(a.callback=n),null!==(t=o0(e,a,o))&&(lD(t,e,o,r),o1(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=lA(),o=lM(e),a=oZ(r,o);a.tag=1,a.payload=t,null!=n&&(a.callback=n),null!==(t=o0(e,a,o))&&(lD(t,e,o,r),o1(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=lA(),r=lM(e),o=oZ(n,r);o.tag=2,null!=t&&(o.callback=t),null!==(t=o0(e,o,r))&&(lD(t,e,r,n),o1(t,e,r))}};function o9(e,t,n,r,o,a,i){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,i):!t.prototype||!t.prototype.isPureReactComponent||!nX(n,r)||!nX(o,a)}function o7(e,t,n){var r=!1,o=r3,a=t.contextType;return"object"==typeof a&&null!==a?a=oH(a):(o=r9(t)?r6:r4.current,a=(r=null!=(r=t.contextTypes))?r8(e,o):r3),t=new t(n,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=o8,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function ae(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&o8.enqueueReplaceState(t,t.state,null)}function at(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=o5,oG(e);var a=t.contextType;"object"==typeof a&&null!==a?o.context=oH(a):(a=r9(t)?r6:r4.current,o.context=r8(e,a)),o.state=e.memoizedState,"function"==typeof(a=t.getDerivedStateFromProps)&&(o6(e,t,a,n),o.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof o.getSnapshotBeforeUpdate||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||(t=o.state,"function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),t!==o.state&&o8.enqueueReplaceState(o,o.state,null),o3(e,n,o,r),o.state=e.memoizedState),"function"==typeof o.componentDidMount&&(e.flags|=4194308)}function an(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(f(309));var r=n.stateNode}if(!r)throw Error(f(147,e));var o=r,a=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===a?t.ref:((t=function(e){var t=o.refs;t===o5&&(t=o.refs={}),null===e?delete t[a]:t[a]=e})._stringRef=a,t)}if("string"!=typeof e)throw Error(f(284));if(!n._owner)throw Error(f(290,e))}return e}function ar(e,t){throw Error(f(31,"[object Object]"===(e=Object.prototype.toString.call(t))?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ao(e){return(0,e._init)(e._payload)}function aa(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function o(e,t){return(e=ue(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return(t.index=r,e)?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function i(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,r){return null===t||6!==t.tag?(t=uo(n,e.mode,r)).return=e:(t=o(t,n)).return=e,t}function u(e,t,n,r){var a=n.type;return a===O?c(e,t,n.props.children,r,n.key):(null!==t&&(t.elementType===a||"object"==typeof a&&null!==a&&a.$$typeof===F&&ao(a)===t.type)?(r=o(t,n.props)).ref=an(e,t,n):(r=ut(n.type,n.key,n.props,null,e.mode,r)).ref=an(e,t,n),r.return=e,r)}function s(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=ua(n,e.mode,r)).return=e:(t=o(t,n.children||[])).return=e,t}function c(e,t,n,r,a){return null===t||7!==t.tag?(t=un(n,e.mode,r,a)).return=e:(t=o(t,n)).return=e,t}function d(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=uo(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case P:return(n=ut(t.type,t.key,t.props,null,e.mode,n)).ref=an(e,null,t),n.return=e,n;case R:return(t=ua(t,e.mode,n)).return=e,t;case F:return d(e,(0,t._init)(t._payload),n)}if(ey(t)||$(t))return(t=un(t,e.mode,n,null)).return=e,t;ar(e,t)}return null}function p(e,t,n,r){var o=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==o?null:l(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case P:return n.key===o?u(e,t,n,r):null;case R:return n.key===o?s(e,t,n,r):null;case F:return p(e,t,(o=n._init)(n._payload),r)}if(ey(n)||$(n))return null!==o?null:c(e,t,n,r,null);ar(e,n)}return null}function h(e,t,n,r,o){if("string"==typeof r&&""!==r||"number"==typeof r)return l(t,e=e.get(n)||null,""+r,o);if("object"==typeof r&&null!==r){switch(r.$$typeof){case P:return u(t,e=e.get(null===r.key?n:r.key)||null,r,o);case R:return s(t,e=e.get(null===r.key?n:r.key)||null,r,o);case F:return h(e,t,n,(0,r._init)(r._payload),o)}if(ey(r)||$(r))return c(t,e=e.get(n)||null,r,o,null);ar(t,r)}return null}return function l(u,s,c,m){if("object"==typeof c&&null!==c&&c.type===O&&null===c.key&&(c=c.props.children),"object"==typeof c&&null!==c){switch(c.$$typeof){case P:e:{for(var v=c.key,y=s;null!==y;){if(y.key===v){if((v=c.type)===O){if(7===y.tag){n(u,y.sibling),(s=o(y,c.props.children)).return=u,u=s;break e}}else if(y.elementType===v||"object"==typeof v&&null!==v&&v.$$typeof===F&&ao(v)===y.type){n(u,y.sibling),(s=o(y,c.props)).ref=an(u,y,c),s.return=u,u=s;break e}n(u,y);break}t(u,y),y=y.sibling}c.type===O?((s=un(c.props.children,u.mode,m,c.key)).return=u,u=s):((m=ut(c.type,c.key,c.props,null,u.mode,m)).ref=an(u,s,c),m.return=u,u=m)}return i(u);case R:e:{for(y=c.key;null!==s;){if(s.key===y){if(4===s.tag&&s.stateNode.containerInfo===c.containerInfo&&s.stateNode.implementation===c.implementation){n(u,s.sibling),(s=o(s,c.children||[])).return=u,u=s;break e}n(u,s);break}t(u,s),s=s.sibling}(s=ua(c,u.mode,m)).return=u,u=s}return i(u);case F:return l(u,s,(y=c._init)(c._payload),m)}if(ey(c))return function(o,i,l,u){for(var s=null,c=null,f=i,m=i=0,v=null;null!==f&&m<l.length;m++){f.index>m?(v=f,f=null):v=f.sibling;var y=p(o,f,l[m],u);if(null===y){null===f&&(f=v);break}e&&f&&null===y.alternate&&t(o,f),i=a(y,i,m),null===c?s=y:c.sibling=y,c=y,f=v}if(m===l.length)return n(o,f),oE&&og(o,m),s;if(null===f){for(;m<l.length;m++)null!==(f=d(o,l[m],u))&&(i=a(f,i,m),null===c?s=f:c.sibling=f,c=f);return oE&&og(o,m),s}for(f=r(o,f);m<l.length;m++)null!==(v=h(f,o,m,l[m],u))&&(e&&null!==v.alternate&&f.delete(null===v.key?m:v.key),i=a(v,i,m),null===c?s=v:c.sibling=v,c=v);return e&&f.forEach(function(e){return t(o,e)}),oE&&og(o,m),s}(u,s,c,m);if($(c))return function(o,i,l,u){var s=$(l);if("function"!=typeof s)throw Error(f(150));if(null==(l=s.call(l)))throw Error(f(151));for(var c=s=null,m=i,v=i=0,y=null,g=l.next();null!==m&&!g.done;v++,g=l.next()){m.index>v?(y=m,m=null):y=m.sibling;var b=p(o,m,g.value,u);if(null===b){null===m&&(m=y);break}e&&m&&null===b.alternate&&t(o,m),i=a(b,i,v),null===c?s=b:c.sibling=b,c=b,m=y}if(g.done)return n(o,m),oE&&og(o,v),s;if(null===m){for(;!g.done;v++,g=l.next())null!==(g=d(o,g.value,u))&&(i=a(g,i,v),null===c?s=g:c.sibling=g,c=g);return oE&&og(o,v),s}for(m=r(o,m);!g.done;v++,g=l.next())null!==(g=h(m,o,v,g.value,u))&&(e&&null!==g.alternate&&m.delete(null===g.key?v:g.key),i=a(g,i,v),null===c?s=g:c.sibling=g,c=g);return e&&m.forEach(function(e){return t(o,e)}),oE&&og(o,v),s}(u,s,c,m);ar(u,c)}return"string"==typeof c&&""!==c||"number"==typeof c?(c=""+c,null!==s&&6===s.tag?(n(u,s.sibling),(s=o(s,c)).return=u):(n(u,s),(s=uo(c,u.mode,m)).return=u),i(u=s)):n(u,s)}}var ai=aa(!0),al=aa(!1),au={},as=r0(au),ac=r0(au),af=r0(au);function ad(e){if(e===au)throw Error(f(174));return e}function ap(e,t){switch(r2(af,t),r2(ac,e),r2(as,au),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:eE(null,"");break;default:t=eE(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}r1(as),r2(as,t)}function ah(){r1(as),r1(ac),r1(af)}function am(e){ad(af.current);var t=ad(as.current),n=eE(t,e.type);t!==n&&(r2(ac,e),r2(as,n))}function av(e){ac.current===e&&(r1(as),r1(ac))}var ay=r0(0);function ag(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ab=[];function aw(){for(var e=0;e<ab.length;e++)ab[e]._workInProgressVersionPrimary=null;ab.length=0}var aS=j.ReactCurrentDispatcher,ax=j.ReactCurrentBatchConfig,ak=0,aE=null,a_=null,aC=null,aj=!1,aP=!1,aR=0,aO=0;function aT(){throw Error(f(321))}function aN(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nY(e[n],t[n]))return!1;return!0}function aL(e,t,n,r,o,a){if(ak=a,aE=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,aS.current=null===e||null===e.memoizedState?il:iu,e=n(r,o),aP){a=0;do{if(aP=!1,aR=0,25<=a)throw Error(f(301));a+=1,aC=a_=null,t.updateQueue=null,aS.current=is,e=n(r,o)}while(aP)}if(aS.current=ii,t=null!==a_&&null!==a_.next,ak=0,aC=a_=aE=null,aj=!1,t)throw Error(f(300));return e}function aA(){var e=0!==aR;return aR=0,e}function aM(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===aC?aE.memoizedState=aC=e:aC=aC.next=e,aC}function aD(){if(null===a_){var e=aE.alternate;e=null!==e?e.memoizedState:null}else e=a_.next;var t=null===aC?aE.memoizedState:aC.next;if(null!==t)aC=t,a_=e;else{if(null===e)throw Error(f(310));e={memoizedState:(a_=e).memoizedState,baseState:a_.baseState,baseQueue:a_.baseQueue,queue:a_.queue,next:null},null===aC?aE.memoizedState=aC=e:aC=aC.next=e}return aC}function aI(e,t){return"function"==typeof t?t(e):t}function az(e){var t=aD(),n=t.queue;if(null===n)throw Error(f(311));n.lastRenderedReducer=e;var r=a_,o=r.baseQueue,a=n.pending;if(null!==a){if(null!==o){var i=o.next;o.next=a.next,a.next=i}r.baseQueue=o=a,n.pending=null}if(null!==o){a=o.next,r=r.baseState;var l=i=null,u=null,s=a;do{var c=s.lane;if((ak&c)===c)null!==u&&(u=u.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var d={lane:c,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};null===u?(l=u=d,i=r):u=u.next=d,aE.lanes|=c,lv|=c}s=s.next}while(null!==s&&s!==a)null===u?i=r:u.next=l,nY(r,t.memoizedState)||(iS=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){o=e;do a=o.lane,aE.lanes|=a,lv|=a,o=o.next;while(o!==e)}else null===o&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function aF(e){var t=aD(),n=t.queue;if(null===n)throw Error(f(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(null!==o){n.pending=null;var i=o=o.next;do a=e(a,i.action),i=i.next;while(i!==o)nY(a,t.memoizedState)||(iS=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function aU(){}function aB(e,t){var n=aE,r=aD(),o=t(),a=!nY(r.memoizedState,o);if(a&&(r.memoizedState=o,iS=!0),r=r.queue,aZ(aW.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||null!==aC&&1&aC.memoizedState.tag){if(n.flags|=2048,aK(9,aV.bind(null,n,r,o,t),void 0,null),null===ls)throw Error(f(349));0!=(30&ak)||a$(n,t,o)}return o}function a$(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=aE.updateQueue)?(t={lastEffect:null,stores:null},aE.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function aV(e,t,n,r){t.value=n,t.getSnapshot=r,aH(t)&&aq(e)}function aW(e,t,n){return n(function(){aH(t)&&aq(e)})}function aH(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nY(e,n)}catch(e){return!0}}function aq(e){var t=oY(e,1);null!==t&&lD(t,e,1,-1)}function aQ(e){var t=aM();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:aI,lastRenderedState:e},t.queue=e,e=e.dispatch=it.bind(null,aE,e),[t.memoizedState,e]}function aK(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=aE.updateQueue)?(t={lastEffect:null,stores:null},aE.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function aY(){return aD().memoizedState}function aX(e,t,n,r){var o=aM();aE.flags|=e,o.memoizedState=aK(1|t,n,void 0,void 0===r?null:r)}function aG(e,t,n,r){var o=aD();r=void 0===r?null:r;var a=void 0;if(null!==a_){var i=a_.memoizedState;if(a=i.destroy,null!==r&&aN(r,i.deps)){o.memoizedState=aK(t,n,a,r);return}}aE.flags|=e,o.memoizedState=aK(1|t,n,a,r)}function aJ(e,t){return aX(8390656,8,e,t)}function aZ(e,t){return aG(2048,8,e,t)}function a0(e,t){return aG(4,2,e,t)}function a1(e,t){return aG(4,4,e,t)}function a2(e,t){return"function"==typeof t?(t(e=e()),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function a3(e,t,n){return n=null!=n?n.concat([e]):null,aG(4,4,a2.bind(null,t,e),n)}function a4(){}function a5(e,t){var n=aD();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&aN(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function a6(e,t){var n=aD();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&aN(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function a8(e,t,n){return 0==(21&ak)?(e.baseState&&(e.baseState=!1,iS=!0),e.memoizedState=n):(nY(n,t)||(n=tb(),aE.lanes|=n,lv|=n,e.baseState=!0),t)}function a9(e,t){var n=tk;tk=0!==n&&4>n?n:4,e(!0);var r=ax.transition;ax.transition={};try{e(!1),t()}finally{tk=n,ax.transition=r}}function a7(){return aD().memoizedState}function ie(e,t,n){var r=lM(e);n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ir(e)?io(t,n):null!==(n=oK(e,t,n,r))&&(lD(n,e,r,lA()),ia(n,t,r))}function it(e,t,n){var r=lM(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ir(e))io(t,o);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var i=t.lastRenderedState,l=a(i,n);if(o.hasEagerState=!0,o.eagerState=l,nY(l,i)){var u=t.interleaved;null===u?(o.next=o,oQ(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch(e){}finally{}null!==(n=oK(e,t,o,r))&&(lD(n,e,r,o=lA()),ia(n,t,r))}}function ir(e){var t=e.alternate;return e===aE||null!==t&&t===aE}function io(e,t){aP=aj=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ia(e,t,n){if(0!=(4194240&n)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tx(e,n)}}var ii={readContext:oH,useCallback:aT,useContext:aT,useEffect:aT,useImperativeHandle:aT,useInsertionEffect:aT,useLayoutEffect:aT,useMemo:aT,useReducer:aT,useRef:aT,useState:aT,useDebugValue:aT,useDeferredValue:aT,useTransition:aT,useMutableSource:aT,useSyncExternalStore:aT,useId:aT,unstable_isNewReconciler:!1},il={readContext:oH,useCallback:function(e,t){return aM().memoizedState=[e,void 0===t?null:t],e},useContext:oH,useEffect:aJ,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,aX(4194308,4,a2.bind(null,t,e),n)},useLayoutEffect:function(e,t){return aX(4194308,4,e,t)},useInsertionEffect:function(e,t){return aX(4,2,e,t)},useMemo:function(e,t){var n=aM();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=aM();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ie.bind(null,aE,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},aM().memoizedState=e},useState:aQ,useDebugValue:a4,useDeferredValue:function(e){return aM().memoizedState=e},useTransition:function(){var e=aQ(!1),t=e[0];return e=a9.bind(null,e[1]),aM().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=aE,o=aM();if(oE){if(void 0===n)throw Error(f(407));n=n()}else{if(n=t(),null===ls)throw Error(f(349));0!=(30&ak)||a$(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,aJ(aW.bind(null,r,a,e),[e]),r.flags|=2048,aK(9,aV.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=aM(),t=ls.identifierPrefix;if(oE){var n=oy,r=ov;t=":"+t+"R"+(n=(r&~(1<<32-tf(r)-1)).toString(32)+n),0<(n=aR++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=aO++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},iu={readContext:oH,useCallback:a5,useContext:oH,useEffect:aZ,useImperativeHandle:a3,useInsertionEffect:a0,useLayoutEffect:a1,useMemo:a6,useReducer:az,useRef:aY,useState:function(){return az(aI)},useDebugValue:a4,useDeferredValue:function(e){return a8(aD(),a_.memoizedState,e)},useTransition:function(){return[az(aI)[0],aD().memoizedState]},useMutableSource:aU,useSyncExternalStore:aB,useId:a7,unstable_isNewReconciler:!1},is={readContext:oH,useCallback:a5,useContext:oH,useEffect:aZ,useImperativeHandle:a3,useInsertionEffect:a0,useLayoutEffect:a1,useMemo:a6,useReducer:aF,useRef:aY,useState:function(){return aF(aI)},useDebugValue:a4,useDeferredValue:function(e){var t=aD();return null===a_?t.memoizedState=e:a8(t,a_.memoizedState,e)},useTransition:function(){return[aF(aI)[0],aD().memoizedState]},useMutableSource:aU,useSyncExternalStore:aB,useId:a7,unstable_isNewReconciler:!1};function ic(e,t){try{var n="",r=t;do n+=function(e){switch(e.tag){case 5:return er(e.type);case 16:return er("Lazy");case 13:return er("Suspense");case 19:return er("SuspenseList");case 0:case 2:case 15:return e=ea(e.type,!1);case 11:return e=ea(e.type.render,!1);case 1:return e=ea(e.type,!0);default:return""}}(r),r=r.return;while(r)var o=n}catch(e){o="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:o,digest:null}}function id(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function ip(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var ih="function"==typeof WeakMap?WeakMap:Map;function im(e,t,n){(n=oZ(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){lE||(lE=!0,l_=r),ip(e,t)},n}function iv(e,t,n){(n=oZ(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ip(e,t)}}var a=e.stateNode;return null!==a&&"function"==typeof a.componentDidCatch&&(n.callback=function(){ip(e,t),"function"!=typeof r&&(null===lC?lC=new Set([this]):lC.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:null!==n?n:""})}),n}function iy(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new ih;var o=new Set;r.set(t,o)}else void 0===(o=r.get(t))&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=l3.bind(null,e,t,n),t.then(e,e))}function ig(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e)return null}function ib(e,t,n,r,o){return 0==(1&e.mode)?e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=oZ(-1,1)).tag=2,o0(n,t,1))),n.lanes|=1):(e.flags|=65536,e.lanes=o),e}var iw=j.ReactCurrentOwner,iS=!1;function ix(e,t,n,r){t.child=null===e?al(t,null,n,r):ai(t,e.child,n,r)}function ik(e,t,n,r,o){n=n.render;var a=t.ref;return(oW(t,o),r=aL(e,t,n,r,a,o),n=aA(),null===e||iS)?(oE&&n&&ow(t),t.flags|=1,ix(e,t,r,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,i$(e,t,o))}function iE(e,t,n,r,o){if(null===e){var a=n.type;return"function"!=typeof a||l7(a)||void 0!==a.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=ut(n.type,null,r,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,i_(e,t,a,r,o))}if(a=e.child,0==(e.lanes&o)){var i=a.memoizedProps;if((n=null!==(n=n.compare)?n:nX)(i,r)&&e.ref===t.ref)return i$(e,t,o)}return t.flags|=1,(e=ue(a,r)).ref=t.ref,e.return=t,t.child=e}function i_(e,t,n,r,o){if(null!==e){var a=e.memoizedProps;if(nX(a,r)&&e.ref===t.ref){if(iS=!1,t.pendingProps=r=a,0==(e.lanes&o))return t.lanes=e.lanes,i$(e,t,o);0!=(131072&e.flags)&&(iS=!0)}}return iP(e,t,n,r,o)}function iC(e,t,n){var r=t.pendingProps,o=r.children,a=null!==e?e.memoizedState:null;if("hidden"===r.mode){if(0==(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r2(lp,ld),ld|=n;else{if(0==(1073741824&n))return e=null!==a?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,r2(lp,ld),ld|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==a?a.baseLanes:n,r2(lp,ld),ld|=r}}else null!==a?(r=a.baseLanes|n,t.memoizedState=null):r=n,r2(lp,ld),ld|=r;return ix(e,t,o,n),t.child}function ij(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function iP(e,t,n,r,o){var a=r9(n)?r6:r4.current;return(a=r8(t,a),oW(t,o),n=aL(e,t,n,r,a,o),r=aA(),null===e||iS)?(oE&&r&&ow(t),t.flags|=1,ix(e,t,n,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,i$(e,t,o))}function iR(e,t,n,r,o){if(r9(n)){var a=!0;on(t)}else a=!1;if(oW(t,o),null===t.stateNode)iB(e,t),o7(t,n,r),at(t,n,r,o),r=!0;else if(null===e){var i=t.stateNode,l=t.memoizedProps;i.props=l;var u=i.context,s=n.contextType;s="object"==typeof s&&null!==s?oH(s):r8(t,s=r9(n)?r6:r4.current);var c=n.getDerivedStateFromProps,f="function"==typeof c||"function"==typeof i.getSnapshotBeforeUpdate;f||"function"!=typeof i.UNSAFE_componentWillReceiveProps&&"function"!=typeof i.componentWillReceiveProps||(l!==r||u!==s)&&ae(t,i,r,s),oX=!1;var d=t.memoizedState;i.state=d,o3(t,r,i,o),u=t.memoizedState,l!==r||d!==u||r5.current||oX?("function"==typeof c&&(o6(t,n,c,r),u=t.memoizedState),(l=oX||o9(t,n,l,r,d,u,s))?(f||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||("function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"==typeof i.componentDidMount&&(t.flags|=4194308)):("function"==typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=s,r=l):("function"==typeof i.componentDidMount&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,oJ(e,t),l=t.memoizedProps,s=t.type===t.elementType?l:oD(t.type,l),i.props=s,f=t.pendingProps,d=i.context,u="object"==typeof(u=n.contextType)&&null!==u?oH(u):r8(t,u=r9(n)?r6:r4.current);var p=n.getDerivedStateFromProps;(c="function"==typeof p||"function"==typeof i.getSnapshotBeforeUpdate)||"function"!=typeof i.UNSAFE_componentWillReceiveProps&&"function"!=typeof i.componentWillReceiveProps||(l!==f||d!==u)&&ae(t,i,r,u),oX=!1,d=t.memoizedState,i.state=d,o3(t,r,i,o);var h=t.memoizedState;l!==f||d!==h||r5.current||oX?("function"==typeof p&&(o6(t,n,p,r),h=t.memoizedState),(s=oX||o9(t,n,s,r,d,h,u)||!1)?(c||"function"!=typeof i.UNSAFE_componentWillUpdate&&"function"!=typeof i.componentWillUpdate||("function"==typeof i.componentWillUpdate&&i.componentWillUpdate(r,h,u),"function"==typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,h,u)),"function"==typeof i.componentDidUpdate&&(t.flags|=4),"function"==typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof i.componentDidUpdate||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),i.props=r,i.state=h,i.context=u,r=s):("function"!=typeof i.componentDidUpdate||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return iO(e,t,n,r,a,o)}function iO(e,t,n,r,o,a){ij(e,t);var i=0!=(128&t.flags);if(!r&&!i)return o&&or(t,n,!1),i$(e,t,a);r=t.stateNode,iw.current=t;var l=i&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&i?(t.child=ai(t,e.child,null,a),t.child=ai(t,null,l,a)):ix(e,t,l,a),t.memoizedState=r.state,o&&or(t,n,!0),t.child}function iT(e){var t=e.stateNode;t.pendingContext?oe(e,t.pendingContext,t.pendingContext!==t.context):t.context&&oe(e,t.context,!1),ap(e,t.containerInfo)}function iN(e,t,n,r,o){return oL(),oA(o),t.flags|=256,ix(e,t,n,r),t.child}var iL={dehydrated:null,treeContext:null,retryLane:0};function iA(e){return{baseLanes:e,cachePool:null,transitions:null}}function iM(e,t,n){var r,o=t.pendingProps,a=ay.current,i=!1,l=0!=(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!=(2&a)),r?(i=!0,t.flags&=-129):(null===e||null!==e.memoizedState)&&(a|=1),r2(ay,1&a),null===e)return(oR(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated))?(0==(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(l=o.children,e=o.fallback,i?(o=t.mode,i=t.child,l={mode:"hidden",children:l},0==(1&o)&&null!==i?(i.childLanes=0,i.pendingProps=l):i=ur(l,o,0,null),e=un(e,o,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=iA(n),t.memoizedState=iL,e):iD(t,l));if(null!==(a=e.memoizedState)&&null!==(r=a.dehydrated))return function(e,t,n,r,o,a,i){if(n)return 256&t.flags?(t.flags&=-257,iI(e,t,i,r=id(Error(f(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=ur({mode:"visible",children:r.children},o,0,null),a=un(a,o,i,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,0!=(1&t.mode)&&ai(t,e.child,null,i),t.child.memoizedState=iA(i),t.memoizedState=iL,a);if(0==(1&t.mode))return iI(e,t,i,null);if("$!"===o.data){if(r=o.nextSibling&&o.nextSibling.dataset)var l=r.dgst;return r=l,iI(e,t,i,r=id(a=Error(f(419)),r,void 0))}if(l=0!=(i&e.childLanes),iS||l){if(null!==(r=ls)){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}0!==(o=0!=(o&(r.suspendedLanes|i))?0:o)&&o!==a.retryLane&&(a.retryLane=o,oY(e,o),lD(r,e,o,-1))}return lY(),iI(e,t,i,r=id(Error(f(421))))}return"$?"===o.data?(t.flags|=128,t.child=e.child,t=l5.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,ok=rF(o.nextSibling),ox=t,oE=!0,o_=null,null!==e&&(op[oh++]=ov,op[oh++]=oy,op[oh++]=om,ov=e.id,oy=e.overflow,om=t),t=iD(t,r.children),t.flags|=4096,t)}(e,t,l,o,r,a,n);if(i){i=o.fallback,l=t.mode,r=(a=e.child).sibling;var u={mode:"hidden",children:o.children};return 0==(1&l)&&t.child!==a?((o=t.child).childLanes=0,o.pendingProps=u,t.deletions=null):(o=ue(a,u)).subtreeFlags=14680064&a.subtreeFlags,null!==r?i=ue(r,i):(i=un(i,l,n,null),i.flags|=2),i.return=t,o.return=t,o.sibling=i,t.child=o,o=i,i=t.child,l=null===(l=e.child.memoizedState)?iA(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=iL,o}return e=(i=e.child).sibling,o=ue(i,{mode:"visible",children:o.children}),0==(1&t.mode)&&(o.lanes=n),o.return=t,o.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function iD(e,t){return(t=ur({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function iI(e,t,n,r){return null!==r&&oA(r),ai(t,e.child,null,n),e=iD(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function iz(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),oV(e.return,t,n)}function iF(e,t,n,r,o){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function iU(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(ix(e,t,r.children,n),0!=(2&(r=ay.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!=(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&iz(e,n,t);else if(19===e.tag)iz(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(r2(ay,r),0==(1&t.mode))t.memoizedState=null;else switch(o){case"forwards":for(o=null,n=t.child;null!==n;)null!==(e=n.alternate)&&null===ag(e)&&(o=n),n=n.sibling;null===(n=o)?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),iF(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===ag(e)){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}iF(t,!0,n,null,a);break;case"together":iF(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function iB(e,t){0==(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function i$(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),lv|=t.lanes,0==(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(f(153));if(null!==t.child){for(n=ue(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=ue(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function iV(e,t){if(!oE)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function iW(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=14680064&o.subtreeFlags,r|=14680064&o.flags,o.return=e,o=o.sibling;else for(o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}o=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},a=function(){},i=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,ad(as.current);var a,i=null;switch(n){case"input":o=ef(e,o),r=ef(e,r),i=[];break;case"select":o=en({},o,{value:void 0}),r=en({},r,{value:void 0}),i=[];break;case"textarea":o=eb(e,o),r=eb(e,r),i=[];break;default:"function"!=typeof o.onClick&&"function"==typeof r.onClick&&(e.onclick=rR)}for(s in eA(n,r),n=null,o)if(!r.hasOwnProperty(s)&&o.hasOwnProperty(s)&&null!=o[s]){if("style"===s){var l=o[s];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else"dangerouslySetInnerHTML"!==s&&"children"!==s&&"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&"autoFocus"!==s&&(h.hasOwnProperty(s)?i||(i=[]):(i=i||[]).push(s,null))}for(s in r){var u=r[s];if(l=null!=o?o[s]:void 0,r.hasOwnProperty(s)&&u!==l&&(null!=u||null!=l)){if("style"===s){if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(i||(i=[]),i.push(s,n)),n=u}else"dangerouslySetInnerHTML"===s?(u=u?u.__html:void 0,l=l?l.__html:void 0,null!=u&&l!==u&&(i=i||[]).push(s,u)):"children"===s?"string"!=typeof u&&"number"!=typeof u||(i=i||[]).push(s,""+u):"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&(h.hasOwnProperty(s)?(null!=u&&"onScroll"===s&&rm("scroll",e),i||l===u||(i=[])):(i=i||[]).push(s,u))}}n&&(i=i||[]).push("style",n);var s=i;(t.updateQueue=s)&&(t.flags|=4)}},l=function(e,t,n,r){n!==r&&(t.flags|=4)};var iH=!1,iq=!1,iQ="function"==typeof WeakSet?WeakSet:Set,iK=null;function iY(e,t){var n=e.ref;if(null!==n){if("function"==typeof n)try{n(null)}catch(n){l2(e,t,n)}else n.current=null}}function iX(e,t,n){try{n()}catch(n){l2(e,t,n)}}var iG=!1;function iJ(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,void 0!==a&&iX(t,n,a)}o=o.next}while(o!==r)}}function iZ(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function i0(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function i1(e){return 5===e.tag||3===e.tag||4===e.tag}function i2(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||i1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags||null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}var i3=null,i4=!1;function i5(e,t,n){for(n=n.child;null!==n;)i6(e,t,n),n=n.sibling}function i6(e,t,n){if(tc&&"function"==typeof tc.onCommitFiberUnmount)try{tc.onCommitFiberUnmount(ts,n)}catch(e){}switch(n.tag){case 5:iq||iY(n,t);case 6:var r=i3,o=i4;i3=null,i5(e,t,n),i3=r,i4=o,null!==i3&&(i4?(e=i3,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):i3.removeChild(n.stateNode));break;case 18:null!==i3&&(i4?(e=i3,n=n.stateNode,8===e.nodeType?rz(e.parentNode,n):1===e.nodeType&&rz(e,n),tq(e)):rz(i3,n.stateNode));break;case 4:r=i3,o=i4,i3=n.stateNode.containerInfo,i4=!0,i5(e,t,n),i3=r,i4=o;break;case 0:case 11:case 14:case 15:if(!iq&&null!==(r=n.updateQueue)&&null!==(r=r.lastEffect)){o=r=r.next;do{var a=o,i=a.destroy;a=a.tag,void 0!==i&&(0!=(2&a)?iX(n,t,i):0!=(4&a)&&iX(n,t,i)),o=o.next}while(o!==r)}i5(e,t,n);break;case 1:if(!iq&&(iY(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){l2(n,t,e)}i5(e,t,n);break;case 21:default:i5(e,t,n);break;case 22:1&n.mode?(iq=(r=iq)||null!==n.memoizedState,i5(e,t,n),iq=r):i5(e,t,n)}}function i8(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new iQ),t.forEach(function(t){var r=l6.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function i9(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var o=n[r];try{var a=t,i=a;e:for(;null!==i;){switch(i.tag){case 5:i3=i.stateNode,i4=!1;break e;case 3:case 4:i3=i.stateNode.containerInfo,i4=!0;break e}i=i.return}if(null===i3)throw Error(f(160));i6(e,a,o),i3=null,i4=!1;var l=o.alternate;null!==l&&(l.return=null),o.return=null}catch(e){l2(o,t,e)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)i7(t,e),t=t.sibling}function i7(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(i9(t,e),le(e),4&r){try{iJ(3,e,e.return),iZ(3,e)}catch(t){l2(e,e.return,t)}try{iJ(5,e,e.return)}catch(t){l2(e,e.return,t)}}break;case 1:i9(t,e),le(e),512&r&&null!==n&&iY(n,n.return);break;case 5:if(i9(t,e),le(e),512&r&&null!==n&&iY(n,n.return),32&e.flags){var o=e.stateNode;try{eP(o,"")}catch(t){l2(e,e.return,t)}}if(4&r&&null!=(o=e.stateNode)){var a=e.memoizedProps,i=null!==n?n.memoizedProps:a,l=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===l&&"radio"===a.type&&null!=a.name&&ep(o,a),eM(l,i);var s=eM(l,a);for(i=0;i<u.length;i+=2){var c=u[i],d=u[i+1];"style"===c?eN(o,d):"dangerouslySetInnerHTML"===c?ej(o,d):"children"===c?eP(o,d):C(o,c,d,s)}switch(l){case"input":eh(o,a);break;case"textarea":eS(o,a);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var h=a.value;null!=h?eg(o,!!a.multiple,h,!1):!!a.multiple!==p&&(null!=a.defaultValue?eg(o,!!a.multiple,a.defaultValue,!0):eg(o,!!a.multiple,a.multiple?[]:"",!1))}o[rV]=a}catch(t){l2(e,e.return,t)}}break;case 6:if(i9(t,e),le(e),4&r){if(null===e.stateNode)throw Error(f(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(t){l2(e,e.return,t)}}break;case 3:if(i9(t,e),le(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{tq(t.containerInfo)}catch(t){l2(e,e.return,t)}break;case 4:default:i9(t,e),le(e);break;case 13:i9(t,e),le(e),8192&(o=e.child).flags&&(a=null!==o.memoizedState,o.stateNode.isHidden=a,a&&(null===o.alternate||null===o.alternate.memoizedState)&&(lS=tn())),4&r&&i8(e);break;case 22:if(c=null!==n&&null!==n.memoizedState,1&e.mode?(iq=(s=iq)||c,i9(t,e),iq=s):i9(t,e),le(e),8192&r){if(s=null!==e.memoizedState,(e.stateNode.isHidden=s)&&!c&&0!=(1&e.mode))for(iK=e,c=e.child;null!==c;){for(d=iK=c;null!==iK;){switch(h=(p=iK).child,p.tag){case 0:case 11:case 14:case 15:iJ(4,p,p.return);break;case 1:iY(p,p.return);var m=p.stateNode;if("function"==typeof m.componentWillUnmount){r=p,n=p.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(e){l2(r,n,e)}}break;case 5:iY(p,p.return);break;case 22:if(null!==p.memoizedState){ln(d);continue}}null!==h?(h.return=p,iK=h):ln(d)}c=c.sibling}e:for(c=null,d=e;;){if(5===d.tag){if(null===c){c=d;try{o=d.stateNode,s?(a=o.style,"function"==typeof a.setProperty?a.setProperty("display","none","important"):a.display="none"):(l=d.stateNode,i=null!=(u=d.memoizedProps.style)&&u.hasOwnProperty("display")?u.display:null,l.style.display=eT("display",i))}catch(t){l2(e,e.return,t)}}}else if(6===d.tag){if(null===c)try{d.stateNode.nodeValue=s?"":d.memoizedProps}catch(t){l2(e,e.return,t)}}else if((22!==d.tag&&23!==d.tag||null===d.memoizedState||d===e)&&null!==d.child){d.child.return=d,d=d.child;continue}if(d===e)break;for(;null===d.sibling;){if(null===d.return||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:i9(t,e),le(e),4&r&&i8(e);case 21:}}function le(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(i1(n)){var r=n;break e}n=n.return}throw Error(f(160))}switch(r.tag){case 5:var o=r.stateNode;32&r.flags&&(eP(o,""),r.flags&=-33);var a=i2(e);!function e(t,n,r){var o=t.tag;if(5===o||6===o)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(4!==o&&null!==(t=t.child))for(e(t,n,r),t=t.sibling;null!==t;)e(t,n,r),t=t.sibling}(e,a,o);break;case 3:case 4:var i=r.stateNode.containerInfo,l=i2(e);!function e(t,n,r){var o=t.tag;if(5===o||6===o)t=t.stateNode,n?8===r.nodeType?r.parentNode.insertBefore(t,n):r.insertBefore(t,n):(8===r.nodeType?(n=r.parentNode).insertBefore(t,r):(n=r).appendChild(t),null!=(r=r._reactRootContainer)||null!==n.onclick||(n.onclick=rR));else if(4!==o&&null!==(t=t.child))for(e(t,n,r),t=t.sibling;null!==t;)e(t,n,r),t=t.sibling}(e,l,i);break;default:throw Error(f(161))}}catch(t){l2(e,e.return,t)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function lt(e){for(;null!==iK;){var t=iK;if(0!=(8772&t.flags)){var n=t.alternate;try{if(0!=(8772&t.flags))switch(t.tag){case 0:case 11:case 15:iq||iZ(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!iq){if(null===n)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:oD(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}}var a=t.updateQueue;null!==a&&o4(t,a,r);break;case 3:var i=t.updateQueue;if(null!==i){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}o4(t,i,n)}break;case 5:var l=t.stateNode;if(null===n&&4&t.flags){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var s=t.alternate;if(null!==s){var c=s.memoizedState;if(null!==c){var d=c.dehydrated;null!==d&&tq(d)}}}break;default:throw Error(f(163))}iq||512&t.flags&&i0(t)}catch(e){l2(t,t.return,e)}}if(t===e){iK=null;break}if(null!==(n=t.sibling)){n.return=t.return,iK=n;break}iK=t.return}}function ln(e){for(;null!==iK;){var t=iK;if(t===e){iK=null;break}var n=t.sibling;if(null!==n){n.return=t.return,iK=n;break}iK=t.return}}function lr(e){for(;null!==iK;){var t=iK;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{iZ(4,t)}catch(e){l2(t,n,e)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var o=t.return;try{r.componentDidMount()}catch(e){l2(t,o,e)}}var a=t.return;try{i0(t)}catch(e){l2(t,a,e)}break;case 5:var i=t.return;try{i0(t)}catch(e){l2(t,i,e)}}}catch(e){l2(t,t.return,e)}if(t===e){iK=null;break}var l=t.sibling;if(null!==l){l.return=t.return,iK=l;break}iK=t.return}}var lo=Math.ceil,la=j.ReactCurrentDispatcher,li=j.ReactCurrentOwner,ll=j.ReactCurrentBatchConfig,lu=0,ls=null,lc=null,lf=0,ld=0,lp=r0(0),lh=0,lm=null,lv=0,ly=0,lg=0,lb=null,lw=null,lS=0,lx=1/0,lk=null,lE=!1,l_=null,lC=null,lj=!1,lP=null,lR=0,lO=0,lT=null,lN=-1,lL=0;function lA(){return 0!=(6&lu)?tn():-1!==lN?lN:lN=tn()}function lM(e){return 0==(1&e.mode)?1:0!=(2&lu)&&0!==lf?lf&-lf:null!==oM.transition?(0===lL&&(lL=tb()),lL):0!==(e=tk)?e:e=void 0===(e=window.event)?16:t0(e.type)}function lD(e,t,n,r){if(50<lO)throw lO=0,lT=null,Error(f(185));tS(e,n,r),(0==(2&lu)||e!==ls)&&(e===ls&&(0==(2&lu)&&(ly|=n),4===lh&&lB(e,lf)),lI(e,r),1===n&&0===lu&&0==(1&t.mode)&&(lx=tn()+500,oa&&ou()))}function lI(e,t){var n,r,o,a=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-tf(a),l=1<<i,u=o[i];-1===u?(0==(l&n)||0!=(l&r))&&(o[i]=function(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return -1}}(l,t)):u<=t&&(e.expiredLanes|=l),a&=~l}}(e,t);var i=ty(e,e===ls?lf:0);if(0===i)null!==a&&e7(a),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(null!=a&&e7(a),1===t)0===e.tag?(o=l$.bind(null,e),oa=!0,ol(o)):ol(l$.bind(null,e)),rD(function(){0==(6&lu)&&ou()}),a=null;else{switch(tE(i)){case 1:a=to;break;case 4:a=ta;break;case 16:default:a=ti;break;case 536870912:a=tu}a=e9(a,lz.bind(null,e))}e.callbackPriority=t,e.callbackNode=a}}function lz(e,t){if(lN=-1,lL=0,0!=(6&lu))throw Error(f(327));var n=e.callbackNode;if(l0()&&e.callbackNode!==n)return null;var r=ty(e,e===ls?lf:0);if(0===r)return null;if(0!=(30&r)||0!=(r&e.expiredLanes)||t)t=lX(e,r);else{t=r;var o=lu;lu|=2;var a=lK();for((ls!==e||lf!==t)&&(lk=null,lx=tn()+500,lq(e,t));;)try{(function(){for(;null!==lc&&!te();)lG(lc)})();break}catch(t){lQ(e,t)}oB(),la.current=a,lu=o,null!==lc?t=0:(ls=null,lf=0,t=lh)}if(0!==t){if(2===t&&0!==(o=tg(e))&&(r=o,t=lF(e,o)),1===t)throw n=lm,lq(e,0),lB(e,r),lI(e,tn()),n;if(6===t)lB(e,r);else{if(o=e.current.alternate,0==(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!nY(a(),o))return!1}catch(e){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(o)&&(2===(t=lX(e,r))&&0!==(a=tg(e))&&(r=a,t=lF(e,a)),1===t))throw n=lm,lq(e,0),lB(e,r),lI(e,tn()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(f(345));case 2:case 5:lZ(e,lw,lk);break;case 3:if(lB(e,r),(130023424&r)===r&&10<(t=lS+500-tn())){if(0!==ty(e,0))break;if(((o=e.suspendedLanes)&r)!==r){lA(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=rL(lZ.bind(null,e,lw,lk),t);break}lZ(e,lw,lk);break;case 4:if(lB(e,r),(4194240&r)===r)break;for(o=-1,t=e.eventTimes;0<r;){var i=31-tf(r);a=1<<i,(i=t[i])>o&&(o=i),r&=~a}if(r=o,10<(r=(120>(r=tn()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*lo(r/1960))-r)){e.timeoutHandle=rL(lZ.bind(null,e,lw,lk),r);break}lZ(e,lw,lk);break;default:throw Error(f(329))}}}return lI(e,tn()),e.callbackNode===n?lz.bind(null,e):null}function lF(e,t){var n=lb;return e.current.memoizedState.isDehydrated&&(lq(e,t).flags|=256),2!==(e=lX(e,t))&&(t=lw,lw=n,null!==t&&lU(t)),e}function lU(e){null===lw?lw=e:lw.push.apply(lw,e)}function lB(e,t){for(t&=~lg,t&=~ly,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tf(t),r=1<<n;e[n]=-1,t&=~r}}function l$(e){if(0!=(6&lu))throw Error(f(327));l0();var t=ty(e,0);if(0==(1&t))return lI(e,tn()),null;var n=lX(e,t);if(0!==e.tag&&2===n){var r=tg(e);0!==r&&(t=r,n=lF(e,r))}if(1===n)throw n=lm,lq(e,0),lB(e,t),lI(e,tn()),n;if(6===n)throw Error(f(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,lZ(e,lw,lk),lI(e,tn()),null}function lV(e,t){var n=lu;lu|=1;try{return e(t)}finally{0===(lu=n)&&(lx=tn()+500,oa&&ou())}}function lW(e){null!==lP&&0===lP.tag&&0==(6&lu)&&l0();var t=lu;lu|=1;var n=ll.transition,r=tk;try{if(ll.transition=null,tk=1,e)return e()}finally{tk=r,ll.transition=n,0==(6&(lu=t))&&ou()}}function lH(){ld=lp.current,r1(lp)}function lq(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,rA(n)),null!==lc)for(n=lc.return;null!==n;){var r=n;switch(oS(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&r7();break;case 3:ah(),r1(r5),r1(r4),aw();break;case 5:av(r);break;case 4:ah();break;case 13:case 19:r1(ay);break;case 10:o$(r.type._context);break;case 22:case 23:lH()}n=n.return}if(ls=e,lc=e=ue(e.current,null),lf=ld=t,lh=0,lm=null,lg=ly=lv=0,lw=lb=null,null!==oq){for(t=0;t<oq.length;t++)if(null!==(r=(n=oq[t]).interleaved)){n.interleaved=null;var o=r.next,a=n.pending;if(null!==a){var i=a.next;a.next=o,r.next=i}n.pending=r}oq=null}return e}function lQ(e,t){for(;;){var n=lc;try{if(oB(),aS.current=ii,aj){for(var r=aE.memoizedState;null!==r;){var o=r.queue;null!==o&&(o.pending=null),r=r.next}aj=!1}if(ak=0,aC=a_=aE=null,aP=!1,aR=0,li.current=null,null===n||null===n.return){lh=1,lm=t,lc=null;break}e:{var a=e,i=n.return,l=n,u=t;if(t=lf,l.flags|=32768,null!==u&&"object"==typeof u&&"function"==typeof u.then){var s=u,c=l,d=c.tag;if(0==(1&c.mode)&&(0===d||11===d||15===d)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=ig(i);if(null!==h){h.flags&=-257,ib(h,i,l,a,t),1&h.mode&&iy(a,s,t),t=h,u=s;var m=t.updateQueue;if(null===m){var v=new Set;v.add(u),t.updateQueue=v}else m.add(u);break e}if(0==(1&t)){iy(a,s,t),lY();break e}u=Error(f(426))}else if(oE&&1&l.mode){var y=ig(i);if(null!==y){0==(65536&y.flags)&&(y.flags|=256),ib(y,i,l,a,t),oA(ic(u,l));break e}}a=u=ic(u,l),4!==lh&&(lh=2),null===lb?lb=[a]:lb.push(a),a=i;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var g=im(a,u,t);o2(a,g);break e;case 1:l=u;var b=a.type,w=a.stateNode;if(0==(128&a.flags)&&("function"==typeof b.getDerivedStateFromError||null!==w&&"function"==typeof w.componentDidCatch&&(null===lC||!lC.has(w)))){a.flags|=65536,t&=-t,a.lanes|=t;var S=iv(a,l,t);o2(a,S);break e}}a=a.return}while(null!==a)}lJ(n)}catch(e){t=e,lc===n&&null!==n&&(lc=n=n.return);continue}break}}function lK(){var e=la.current;return la.current=ii,null===e?ii:e}function lY(){(0===lh||3===lh||2===lh)&&(lh=4),null===ls||0==(268435455&lv)&&0==(268435455&ly)||lB(ls,lf)}function lX(e,t){var n=lu;lu|=2;var r=lK();for((ls!==e||lf!==t)&&(lk=null,lq(e,t));;)try{(function(){for(;null!==lc;)lG(lc)})();break}catch(t){lQ(e,t)}if(oB(),lu=n,la.current=r,null!==lc)throw Error(f(261));return ls=null,lf=0,lh}function lG(e){var t=u(e.alternate,e,ld);e.memoizedProps=e.pendingProps,null===t?lJ(e):lc=t,li.current=null}function lJ(e){var t=e;do{var n=t.alternate;if(e=t.return,0==(32768&t.flags)){if(null!==(n=function(e,t,n){var r=t.pendingProps;switch(oS(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return iW(t),null;case 1:case 17:return r9(t.type)&&r7(),iW(t),null;case 3:return r=t.stateNode,ah(),r1(r5),r1(r4),aw(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(null===e||null===e.child)&&(oT(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0==(256&t.flags)||(t.flags|=1024,null!==o_&&(lU(o_),o_=null))),a(e,t),iW(t),null;case 5:av(t);var u=ad(af.current);if(n=t.type,null!==e&&null!=t.stateNode)i(e,t,n,r,u),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(f(166));return iW(t),null}if(e=ad(as.current),oT(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[r$]=t,r[rV]=s,e=0!=(1&t.mode),n){case"dialog":rm("cancel",r),rm("close",r);break;case"iframe":case"object":case"embed":rm("load",r);break;case"video":case"audio":for(u=0;u<rf.length;u++)rm(rf[u],r);break;case"source":rm("error",r);break;case"img":case"image":case"link":rm("error",r),rm("load",r);break;case"details":rm("toggle",r);break;case"input":ed(r,s),rm("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},rm("invalid",r);break;case"textarea":ew(r,s),rm("invalid",r)}for(var c in eA(n,s),u=null,s)if(s.hasOwnProperty(c)){var d=s[c];"children"===c?"string"==typeof d?r.textContent!==d&&(!0!==s.suppressHydrationWarning&&rP(r.textContent,d,e),u=["children",d]):"number"==typeof d&&r.textContent!==""+d&&(!0!==s.suppressHydrationWarning&&rP(r.textContent,d,e),u=["children",""+d]):h.hasOwnProperty(c)&&null!=d&&"onScroll"===c&&rm("scroll",r)}switch(n){case"input":eu(r),em(r,s,!0);break;case"textarea":eu(r),ex(r);break;case"select":case"option":break;default:"function"==typeof s.onClick&&(r.onclick=rR)}r=u,t.updateQueue=r,null!==r&&(t.flags|=4)}else{c=9===u.nodeType?u:u.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=ek(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=c.createElement("div")).innerHTML="<script></script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=c.createElement(n,{is:r.is}):(e=c.createElement(n),"select"===n&&(c=e,r.multiple?c.multiple=!0:r.size&&(c.size=r.size))):e=c.createElementNS(e,n),e[r$]=t,e[rV]=r,o(e,t,!1,!1),t.stateNode=e;e:{switch(c=eM(n,r),n){case"dialog":rm("cancel",e),rm("close",e),u=r;break;case"iframe":case"object":case"embed":rm("load",e),u=r;break;case"video":case"audio":for(u=0;u<rf.length;u++)rm(rf[u],e);u=r;break;case"source":rm("error",e),u=r;break;case"img":case"image":case"link":rm("error",e),rm("load",e),u=r;break;case"details":rm("toggle",e),u=r;break;case"input":ed(e,r),u=ef(e,r),rm("invalid",e);break;case"option":default:u=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},u=en({},r,{value:void 0}),rm("invalid",e);break;case"textarea":ew(e,r),u=eb(e,r),rm("invalid",e)}for(s in eA(n,u),d=u)if(d.hasOwnProperty(s)){var p=d[s];"style"===s?eN(e,p):"dangerouslySetInnerHTML"===s?null!=(p=p?p.__html:void 0)&&ej(e,p):"children"===s?"string"==typeof p?("textarea"!==n||""!==p)&&eP(e,p):"number"==typeof p&&eP(e,""+p):"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&"autoFocus"!==s&&(h.hasOwnProperty(s)?null!=p&&"onScroll"===s&&rm("scroll",e):null!=p&&C(e,s,p,c))}switch(n){case"input":eu(e),em(e,r,!1);break;case"textarea":eu(e),ex(e);break;case"option":null!=r.value&&e.setAttribute("value",""+ei(r.value));break;case"select":e.multiple=!!r.multiple,null!=(s=r.value)?eg(e,!!r.multiple,s,!1):null!=r.defaultValue&&eg(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof u.onClick&&(e.onclick=rR)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return iW(t),null;case 6:if(e&&null!=t.stateNode)l(e,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(f(166));if(n=ad(af.current),ad(as.current),oT(t)){if(r=t.stateNode,n=t.memoizedProps,r[r$]=t,(s=r.nodeValue!==n)&&null!==(e=ox))switch(e.tag){case 3:rP(r.nodeValue,n,0!=(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&rP(r.nodeValue,n,0!=(1&e.mode))}s&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[r$]=t,t.stateNode=r}return iW(t),null;case 13:if(r1(ay),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(oE&&null!==ok&&0!=(1&t.mode)&&0==(128&t.flags))oN(),oL(),t.flags|=98560,s=!1;else if(s=oT(t),null!==r&&null!==r.dehydrated){if(null===e){if(!s)throw Error(f(318));if(!(s=null!==(s=t.memoizedState)?s.dehydrated:null))throw Error(f(317));s[r$]=t}else oL(),0==(128&t.flags)&&(t.memoizedState=null),t.flags|=4;iW(t),s=!1}else null!==o_&&(lU(o_),o_=null),s=!0;if(!s)return 65536&t.flags?t:null}if(0!=(128&t.flags))return t.lanes=n,t;return(r=null!==r)!=(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!=(1&t.mode)&&(null===e||0!=(1&ay.current)?0===lh&&(lh=3):lY())),null!==t.updateQueue&&(t.flags|=4),iW(t),null;case 4:return ah(),a(e,t),null===e&&rg(t.stateNode.containerInfo),iW(t),null;case 10:return o$(t.type._context),iW(t),null;case 19:if(r1(ay),null===(s=t.memoizedState))return iW(t),null;if(r=0!=(128&t.flags),null===(c=s.rendering)){if(r)iV(s,!1);else{if(0!==lh||null!==e&&0!=(128&e.flags))for(e=t.child;null!==e;){if(null!==(c=ag(e))){for(t.flags|=128,iV(s,!1),null!==(r=c.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)s=n,e=r,s.flags&=14680066,null===(c=s.alternate)?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=c.childLanes,s.lanes=c.lanes,s.child=c.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=c.memoizedProps,s.memoizedState=c.memoizedState,s.updateQueue=c.updateQueue,s.type=c.type,e=c.dependencies,s.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return r2(ay,1&ay.current|2),t.child}e=e.sibling}null!==s.tail&&tn()>lx&&(t.flags|=128,r=!0,iV(s,!1),t.lanes=4194304)}}else{if(!r){if(null!==(e=ag(c))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),iV(s,!0),null===s.tail&&"hidden"===s.tailMode&&!c.alternate&&!oE)return iW(t),null}else 2*tn()-s.renderingStartTime>lx&&1073741824!==n&&(t.flags|=128,r=!0,iV(s,!1),t.lanes=4194304)}s.isBackwards?(c.sibling=t.child,t.child=c):(null!==(n=s.last)?n.sibling=c:t.child=c,s.last=c)}if(null!==s.tail)return t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=tn(),t.sibling=null,n=ay.current,r2(ay,r?1&n|2:1&n),t;return iW(t),null;case 22:case 23:return lH(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!=(1&t.mode)?0!=(1073741824&ld)&&(iW(t),6&t.subtreeFlags&&(t.flags|=8192)):iW(t),null;case 24:case 25:return null}throw Error(f(156,t.tag))}(n,t,ld))){lc=n;return}}else{if(null!==(n=function(e,t){switch(oS(t),t.tag){case 1:return r9(t.type)&&r7(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return ah(),r1(r5),r1(r4),aw(),0!=(65536&(e=t.flags))&&0==(128&e)?(t.flags=-65537&e|128,t):null;case 5:return av(t),null;case 13:if(r1(ay),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(f(340));oL()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return r1(ay),null;case 4:return ah(),null;case 10:return o$(t.type._context),null;case 22:case 23:return lH(),null;default:return null}}(n,t))){n.flags&=32767,lc=n;return}if(null!==e)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{lh=6,lc=null;return}}if(null!==(t=t.sibling)){lc=t;return}lc=t=e}while(null!==t)0===lh&&(lh=5)}function lZ(e,t,n){var r=tk,o=ll.transition;try{ll.transition=null,tk=1,function(e,t,n,r){do l0();while(null!==lP)if(0!=(6&lu))throw Error(f(327));n=e.finishedWork;var o=e.finishedLanes;if(null!==n){if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(f(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-tf(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}(e,a),e===ls&&(lc=ls=null,lf=0),0==(2064&n.subtreeFlags)&&0==(2064&n.flags)||lj||(lj=!0,i=ti,l=function(){return l0(),null},e9(i,l)),a=0!=(15990&n.flags),0!=(15990&n.subtreeFlags)||a){a=ll.transition,ll.transition=null;var i,l,u,s,c,d=tk;tk=1;var p=lu;lu|=4,li.current=null,function(e,t){if(rO=tK,n0(e=nZ())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var o,a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(e){n=null;break e}var l=0,u=-1,s=-1,c=0,d=0,p=e,h=null;t:for(;;){for(;p!==n||0!==a&&3!==p.nodeType||(u=l+a),p!==i||0!==r&&3!==p.nodeType||(s=l+r),3===p.nodeType&&(l+=p.nodeValue.length),null!==(o=p.firstChild);)h=p,p=o;for(;;){if(p===e)break t;if(h===n&&++c===a&&(u=l),h===i&&++d===r&&(s=l),null!==(o=p.nextSibling))break;h=(p=h).parentNode}p=o}n=-1===u||-1===s?null:{start:u,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(rT={focusedElem:e,selectionRange:n},tK=!1,iK=t;null!==iK;)if(e=(t=iK).child,0!=(1028&t.subtreeFlags)&&null!==e)e.return=t,iK=e;else for(;null!==iK;){t=iK;try{var m=t.alternate;if(0!=(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var v=m.memoizedProps,y=m.memoizedState,g=t.stateNode,b=g.getSnapshotBeforeUpdate(t.elementType===t.type?v:oD(t.type,v),y);g.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var w=t.stateNode.containerInfo;1===w.nodeType?w.textContent="":9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement);break;default:throw Error(f(163))}}catch(e){l2(t,t.return,e)}if(null!==(e=t.sibling)){e.return=t.return,iK=e;break}iK=t.return}m=iG,iG=!1}(e,n),i7(n,e),function(e){var t=nZ(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&function e(t,n){return!!t&&!!n&&(t===n||(!t||3!==t.nodeType)&&(n&&3===n.nodeType?e(t,n.parentNode):"contains"in t?t.contains(n):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(n))))}(n.ownerDocument.documentElement,n)){if(null!==r&&n0(n)){if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=void 0===r.end?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=nJ(n,a);var i=nJ(n,r);o&&i&&(1!==e.rangeCount||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&((t=t.createRange()).setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}(rT),tK=!!rO,rT=rO=null,e.current=n,u=n,s=e,c=o,iK=u,function e(t,n,r){for(var o=0!=(1&t.mode);null!==iK;){var a=iK,i=a.child;if(22===a.tag&&o){var l=null!==a.memoizedState||iH;if(!l){var u=a.alternate,s=null!==u&&null!==u.memoizedState||iq;u=iH;var c=iq;if(iH=l,(iq=s)&&!c)for(iK=a;null!==iK;)s=(l=iK).child,22===l.tag&&null!==l.memoizedState?lr(a):null!==s?(s.return=l,iK=s):lr(a);for(;null!==i;)iK=i,e(i,n,r),i=i.sibling;iK=a,iH=u,iq=c}lt(t,n,r)}else 0!=(8772&a.subtreeFlags)&&null!==i?(i.return=a,iK=i):lt(t,n,r)}}(u,s,c),tt(),lu=p,tk=d,ll.transition=a}else e.current=n;if(lj&&(lj=!1,lP=e,lR=o),0===(a=e.pendingLanes)&&(lC=null),function(e){if(tc&&"function"==typeof tc.onCommitFiberRoot)try{tc.onCommitFiberRoot(ts,e,void 0,128==(128&e.current.flags))}catch(e){}}(n.stateNode,r),lI(e,tn()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)r((o=t[n]).value,{componentStack:o.stack,digest:o.digest});if(lE)throw lE=!1,e=l_,l_=null,e;0!=(1&lR)&&0!==e.tag&&l0(),0!=(1&(a=e.pendingLanes))?e===lT?lO++:(lO=0,lT=e):lO=0,ou()}}(e,t,n,r)}finally{ll.transition=o,tk=r}return null}function l0(){if(null!==lP){var e=tE(lR),t=ll.transition,n=tk;try{if(ll.transition=null,tk=16>e?16:e,null===lP)var r=!1;else{if(e=lP,lP=null,lR=0,0!=(6&lu))throw Error(f(331));var o=lu;for(lu|=4,iK=e.current;null!==iK;){var a=iK,i=a.child;if(0!=(16&iK.flags)){var l=a.deletions;if(null!==l){for(var u=0;u<l.length;u++){var s=l[u];for(iK=s;null!==iK;){var c=iK;switch(c.tag){case 0:case 11:case 15:iJ(8,c,a)}var d=c.child;if(null!==d)d.return=c,iK=d;else for(;null!==iK;){var p=(c=iK).sibling,h=c.return;if(function e(t){var n=t.alternate;null!==n&&(t.alternate=null,e(n)),t.child=null,t.deletions=null,t.sibling=null,5===t.tag&&null!==(n=t.stateNode)&&(delete n[r$],delete n[rV],delete n[rH],delete n[rq],delete n[rQ]),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}(c),c===s){iK=null;break}if(null!==p){p.return=h,iK=p;break}iK=h}}}var m=a.alternate;if(null!==m){var v=m.child;if(null!==v){m.child=null;do{var y=v.sibling;v.sibling=null,v=y}while(null!==v)}}iK=a}}if(0!=(2064&a.subtreeFlags)&&null!==i)i.return=a,iK=i;else for(;null!==iK;){if(a=iK,0!=(2048&a.flags))switch(a.tag){case 0:case 11:case 15:iJ(9,a,a.return)}var g=a.sibling;if(null!==g){g.return=a.return,iK=g;break}iK=a.return}}var b=e.current;for(iK=b;null!==iK;){var w=(i=iK).child;if(0!=(2064&i.subtreeFlags)&&null!==w)w.return=i,iK=w;else for(i=b;null!==iK;){if(l=iK,0!=(2048&l.flags))try{switch(l.tag){case 0:case 11:case 15:iZ(9,l)}}catch(e){l2(l,l.return,e)}if(l===i){iK=null;break}var S=l.sibling;if(null!==S){S.return=l.return,iK=S;break}iK=l.return}}if(lu=o,ou(),tc&&"function"==typeof tc.onPostCommitFiberRoot)try{tc.onPostCommitFiberRoot(ts,e)}catch(e){}r=!0}return r}finally{tk=n,ll.transition=t}}return!1}function l1(e,t,n){t=im(e,t=ic(n,t),1),e=o0(e,t,1),t=lA(),null!==e&&(tS(e,1,t),lI(e,t))}function l2(e,t,n){if(3===e.tag)l1(e,e,n);else for(;null!==t;){if(3===t.tag){l1(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===lC||!lC.has(r))){e=iv(t,e=ic(n,e),1),t=o0(t,e,1),e=lA(),null!==t&&(tS(t,1,e),lI(t,e));break}}t=t.return}}function l3(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=lA(),e.pingedLanes|=e.suspendedLanes&n,ls===e&&(lf&n)===n&&(4===lh||3===lh&&(130023424&lf)===lf&&500>tn()-lS?lq(e,0):lg|=n),lI(e,t)}function l4(e,t){0===t&&(0==(1&e.mode)?t=1:(t=tm,0==(130023424&(tm<<=1))&&(tm=4194304)));var n=lA();null!==(e=oY(e,t))&&(tS(e,t,n),lI(e,n))}function l5(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),l4(e,n)}function l6(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;null!==o&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(f(314))}null!==r&&r.delete(t),l4(e,n)}function l8(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function l9(e,t,n,r){return new l8(e,t,n,r)}function l7(e){return!(!(e=e.prototype)||!e.isReactComponent)}function ue(e,t){var n=e.alternate;return null===n?((n=l9(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ut(e,t,n,r,o,a){var i=2;if(r=e,"function"==typeof e)l7(e)&&(i=1);else if("string"==typeof e)i=5;else e:switch(e){case O:return un(n.children,o,a,t);case T:i=8,o|=8;break;case N:return(e=l9(12,n,t,2|o)).elementType=N,e.lanes=a,e;case D:return(e=l9(13,n,t,o)).elementType=D,e.lanes=a,e;case I:return(e=l9(19,n,t,o)).elementType=I,e.lanes=a,e;case U:return ur(n,o,a,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case L:i=10;break e;case A:i=9;break e;case M:i=11;break e;case z:i=14;break e;case F:i=16,r=null;break e}throw Error(f(130,null==e?e:typeof e,""))}return(t=l9(i,n,t,o)).elementType=e,t.type=r,t.lanes=a,t}function un(e,t,n,r){return(e=l9(7,e,r,t)).lanes=n,e}function ur(e,t,n,r){return(e=l9(22,e,r,t)).elementType=U,e.lanes=n,e.stateNode={isHidden:!1},e}function uo(e,t,n){return(e=l9(6,e,null,t)).lanes=n,e}function ua(e,t,n){return(t=l9(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ui(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tw(0),this.expirationTimes=tw(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tw(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ul(e,t,n,r,o,a,i,l,u){return e=new ui(e,t,n,l,u),1===t?(t=1,!0===a&&(t|=8)):t=0,a=l9(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},oG(a),e}function uu(e){if(!e)return r3;e=e._reactInternals;e:{if(e4(e)!==e||1!==e.tag)throw Error(f(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(r9(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t)throw Error(f(171))}if(1===e.tag){var n=e.type;if(r9(n))return ot(e,n,t)}return t}function us(e,t,n,r,o,a,i,l,u){return(e=ul(n,r,!0,e,o,a,i,l,u)).context=uu(null),n=e.current,(a=oZ(r=lA(),o=lM(n))).callback=null!=t?t:null,o0(n,a,o),e.current.lanes=o,tS(e,o,r),lI(e,r),e}function uc(e,t,n,r){var o=t.current,a=lA(),i=lM(o);return n=uu(n),null===t.context?t.context=n:t.pendingContext=n,(t=oZ(a,i)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=o0(o,t,i))&&(lD(e,o,i,a),o1(e,o,i)),i}function uf(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function ud(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function up(e,t){ud(e,t),(e=e.alternate)&&ud(e,t)}u=function(e,t,n){if(null!==e){if(e.memoizedProps!==t.pendingProps||r5.current)iS=!0;else{if(0==(e.lanes&n)&&0==(128&t.flags))return iS=!1,function(e,t,n){switch(t.tag){case 3:iT(t),oL();break;case 5:am(t);break;case 1:r9(t.type)&&on(t);break;case 4:ap(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;r2(oI,r._currentValue),r._currentValue=o;break;case 13:if(null!==(r=t.memoizedState)){if(null!==r.dehydrated)return r2(ay,1&ay.current),t.flags|=128,null;if(0!=(n&t.child.childLanes))return iM(e,t,n);return r2(ay,1&ay.current),null!==(e=i$(e,t,n))?e.sibling:null}r2(ay,1&ay.current);break;case 19:if(r=0!=(n&t.childLanes),0!=(128&e.flags)){if(r)return iU(e,t,n);t.flags|=128}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),r2(ay,ay.current),!r)return null;break;case 22:case 23:return t.lanes=0,iC(e,t,n)}return i$(e,t,n)}(e,t,n);iS=0!=(131072&e.flags)}}else iS=!1,oE&&0!=(1048576&t.flags)&&ob(t,od,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;iB(e,t),e=t.pendingProps;var o=r8(t,r4.current);oW(t,n),o=aL(null,t,r,e,o,n);var a=aA();return t.flags|=1,"object"==typeof o&&null!==o&&"function"==typeof o.render&&void 0===o.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,r9(r)?(a=!0,on(t)):a=!1,t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,oG(t),o.updater=o8,t.stateNode=o,o._reactInternals=t,at(t,r,e,n),t=iO(null,t,r,!0,a,n)):(t.tag=0,oE&&a&&ow(t),ix(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(iB(e,t),e=t.pendingProps,r=(o=r._init)(r._payload),t.type=r,o=t.tag=function(e){if("function"==typeof e)return l7(e)?1:0;if(null!=e){if((e=e.$$typeof)===M)return 11;if(e===z)return 14}return 2}(r),e=oD(r,e),o){case 0:t=iP(null,t,r,e,n);break e;case 1:t=iR(null,t,r,e,n);break e;case 11:t=ik(null,t,r,e,n);break e;case 14:t=iE(null,t,r,oD(r.type,e),n);break e}throw Error(f(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:oD(r,o),iP(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:oD(r,o),iR(e,t,r,o,n);case 3:e:{if(iT(t),null===e)throw Error(f(387));r=t.pendingProps,o=(a=t.memoizedState).element,oJ(e,t),o3(t,r,null,n);var i=t.memoizedState;if(r=i.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){o=ic(Error(f(423)),t),t=iN(e,t,r,n,o);break e}if(r!==o){o=ic(Error(f(424)),t),t=iN(e,t,r,n,o);break e}for(ok=rF(t.stateNode.containerInfo.firstChild),ox=t,oE=!0,o_=null,n=al(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(oL(),r===o){t=i$(e,t,n);break e}ix(e,t,r,n)}t=t.child}return t;case 5:return am(t),null===e&&oR(t),r=t.type,o=t.pendingProps,a=null!==e?e.memoizedProps:null,i=o.children,rN(r,o)?i=null:null!==a&&rN(r,a)&&(t.flags|=32),ij(e,t),ix(e,t,i,n),t.child;case 6:return null===e&&oR(t),null;case 13:return iM(e,t,n);case 4:return ap(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=ai(t,null,r,n):ix(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:oD(r,o),ik(e,t,r,o,n);case 7:return ix(e,t,t.pendingProps,n),t.child;case 8:case 12:return ix(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,i=o.value,r2(oI,r._currentValue),r._currentValue=i,null!==a){if(nY(a.value,i)){if(a.children===o.children&&!r5.current){t=i$(e,t,n);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var l=a.dependencies;if(null!==l){i=a.child;for(var u=l.firstContext;null!==u;){if(u.context===r){if(1===a.tag){(u=oZ(-1,n&-n)).tag=2;var s=a.updateQueue;if(null!==s){var c=(s=s.shared).pending;null===c?u.next=u:(u.next=c.next,c.next=u),s.pending=u}}a.lanes|=n,null!==(u=a.alternate)&&(u.lanes|=n),oV(a.return,n,t),l.lanes|=n;break}u=u.next}}else if(10===a.tag)i=a.type===t.type?null:a.child;else if(18===a.tag){if(null===(i=a.return))throw Error(f(341));i.lanes|=n,null!==(l=i.alternate)&&(l.lanes|=n),oV(i,n,t),i=a.sibling}else i=a.child;if(null!==i)i.return=a;else for(i=a;null!==i;){if(i===t){i=null;break}if(null!==(a=i.sibling)){a.return=i.return,i=a;break}i=i.return}a=i}}ix(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,oW(t,n),r=r(o=oH(o)),t.flags|=1,ix(e,t,r,n),t.child;case 14:return o=oD(r=t.type,t.pendingProps),o=oD(r.type,o),iE(e,t,r,o,n);case 15:return i_(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:oD(r,o),iB(e,t),t.tag=1,r9(r)?(e=!0,on(t)):e=!1,oW(t,n),o7(t,r,o),at(t,r,o,n),iO(null,t,r,!0,e,n);case 19:return iU(e,t,n);case 22:return iC(e,t,n)}throw Error(f(156,t.tag))};var uh="function"==typeof reportError?reportError:function(e){console.error(e)};function um(e){this._internalRoot=e}function uv(e){this._internalRoot=e}function uy(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function ug(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function ub(){}function uw(e,t,n,r,o){var a=n._reactRootContainer;if(a){var i=a;if("function"==typeof o){var l=o;o=function(){var e=uf(i);l.call(e)}}uc(t,i,e,o)}else i=function(e,t,n,r,o){if(o){if("function"==typeof r){var a=r;r=function(){var e=uf(i);a.call(e)}}var i=us(t,r,e,0,null,!1,!1,"",ub);return e._reactRootContainer=i,e[rW]=i.current,rg(8===e.nodeType?e.parentNode:e),lW(),i}for(;o=e.lastChild;)e.removeChild(o);if("function"==typeof r){var l=r;r=function(){var e=uf(u);l.call(e)}}var u=ul(e,0,!1,null,null,!1,!1,"",ub);return e._reactRootContainer=u,e[rW]=u.current,rg(8===e.nodeType?e.parentNode:e),lW(function(){uc(t,u,n,r)}),u}(n,t,e,o,r);return uf(i)}uv.prototype.render=um.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(f(409));uc(e,t,null,null)},uv.prototype.unmount=um.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;lW(function(){uc(null,e,null,null)}),t[rW]=null}},uv.prototype.unstable_scheduleHydration=function(e){if(e){var t=tP();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tI.length&&0!==t&&t<tI[n].priority;n++);tI.splice(n,0,e),0===n&&tB(e)}},t_=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=tv(t.pendingLanes);0!==n&&(tx(t,1|n),lI(t,tn()),0==(6&lu)&&(lx=tn()+500,ou()))}break;case 13:lW(function(){var t=oY(e,1);null!==t&&lD(t,e,1,lA())}),up(e,1)}},tC=function(e){if(13===e.tag){var t=oY(e,134217728);null!==t&&lD(t,e,134217728,lA()),up(e,134217728)}},tj=function(e){if(13===e.tag){var t=lM(e),n=oY(e,t);null!==n&&lD(n,e,t,lA()),up(e,t)}},tP=function(){return tk},tR=function(e,t){var n=tk;try{return tk=e,t()}finally{tk=n}},ez=function(e,t,n){switch(t){case"input":if(eh(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=rG(r);if(!o)throw Error(f(90));es(r),eh(r,o)}}}break;case"textarea":eS(e,n);break;case"select":null!=(t=n.value)&&eg(e,!!n.multiple,t,!1)}},eW=lV,eH=lW;var uS={findFiberByHostInstance:rK,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ux={bundleType:uS.bundleType,version:uS.version,rendererPackageName:uS.rendererPackageName,rendererConfig:uS.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:j.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=e8(e))?null:e.stateNode},findFiberByHostInstance:uS.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var uk=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uk.isDisabled&&uk.supportsFiber)try{ts=uk.inject(ux),tc=uk}catch(e){}}V={usingClientEntryPoint:!1,Events:[rY,rX,rG,e$,eV,lV]},W=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!uy(t))throw Error(f(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:R,key:null==r?null:""+r,children:e,containerInfo:t,implementation:null}}(e,t,null,n)},H=function(e,t){if(!uy(e))throw Error(f(299));var n=!1,r="",o=uh;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(o=t.onRecoverableError)),t=ul(e,1,!1,null,null,n,!1,r,o),e[rW]=t.current,rg(8===e.nodeType?e.parentNode:e),new um(t)},q=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(f(188));throw Error(f(268,e=Object.keys(e).join(",")))}return e=null===(e=e8(t))?null:e.stateNode},Q=function(e){return lW(e)},K=function(e,t,n){if(!ug(t))throw Error(f(200));return uw(null,e,t,!0,n)},Y=function(e,t,n){if(!uy(e))throw Error(f(405));var r=null!=n&&n.hydratedSources||null,o=!1,a="",i=uh;if(null!=n&&(!0===n.unstable_strictMode&&(o=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onRecoverableError&&(i=n.onRecoverableError)),t=us(t,null,e,1,null!=n?n:null,o,!1,a,i),e[rW]=t.current,rg(e),r)for(e=0;e<r.length;e++)o=(o=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new uv(t)},X=function(e,t,n){if(!ug(t))throw Error(f(200));return uw(null,e,t,!1,n)},G=function(e){if(!ug(e))throw Error(f(40));return!!e._reactRootContainer&&(lW(function(){uw(null,null,e,!1,function(){e._reactRootContainer=null,e[rW]=null})}),!0)},J=lV,Z=function(e,t,n,r){if(!ug(n))throw Error(f(200));if(null==e||void 0===e._reactInternals)throw Error(f(38));return uw(e,t,n,!1,r)},ee="18.2.0-next-9e3b772b8-20220608"}),p("1c3ne",function(e,t){e.exports=d("ecVue")}),p("ecVue",function(t,n){function r(e,t){var n=e.length;for(e.push(t);0<n;){var r=n-1>>>1,o=e[r];if(0<i(o,t))e[r]=t,e[n]=o,n=r;else break}}function o(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;for(var r=0,o=e.length,a=o>>>1;r<a;){var l=2*(r+1)-1,u=e[l],s=l+1,c=e[s];if(0>i(u,n))s<o&&0>i(c,u)?(e[r]=c,e[s]=n,r=s):(e[r]=u,e[l]=n,r=l);else if(s<o&&0>i(c,n))e[r]=c,e[s]=n,r=s;else break}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(e(t.exports,"unstable_now",function(){return l},function(e){return l=e}),e(t.exports,"unstable_IdlePriority",function(){return u},function(e){return u=e}),e(t.exports,"unstable_ImmediatePriority",function(){return s},function(e){return s=e}),e(t.exports,"unstable_LowPriority",function(){return c},function(e){return c=e}),e(t.exports,"unstable_NormalPriority",function(){return f},function(e){return f=e}),e(t.exports,"unstable_Profiling",function(){return d},function(e){return d=e}),e(t.exports,"unstable_UserBlockingPriority",function(){return p},function(e){return p=e}),e(t.exports,"unstable_cancelCallback",function(){return h},function(e){return h=e}),e(t.exports,"unstable_continueExecution",function(){return m},function(e){return m=e}),e(t.exports,"unstable_forceFrameRate",function(){return v},function(e){return v=e}),e(t.exports,"unstable_getCurrentPriorityLevel",function(){return y},function(e){return y=e}),e(t.exports,"unstable_getFirstCallbackNode",function(){return g},function(e){return g=e}),e(t.exports,"unstable_next",function(){return b},function(e){return b=e}),e(t.exports,"unstable_pauseExecution",function(){return w},function(e){return w=e}),e(t.exports,"unstable_requestPaint",function(){return S},function(e){return S=e}),e(t.exports,"unstable_runWithPriority",function(){return x},function(e){return x=e}),e(t.exports,"unstable_scheduleCallback",function(){return k},function(e){return k=e}),e(t.exports,"unstable_shouldYield",function(){return E},function(e){return E=e}),e(t.exports,"unstable_wrapCallback",function(){return _},function(e){return _=e}),"object"==typeof performance&&"function"==typeof performance.now){var l,u,s,c,f,d,p,h,m,v,y,g,b,w,S,x,k,E,_,C,j=performance;l=function(){return j.now()}}else{var P=Date,R=P.now();l=function(){return P.now()-R}}var O=[],T=[],N=1,L=null,A=3,M=!1,D=!1,I=!1,z="function"==typeof setTimeout?setTimeout:null,F="function"==typeof clearTimeout?clearTimeout:null,U="undefined"!=typeof setImmediate?setImmediate:null;function B(e){for(var t=o(T);null!==t;){if(null===t.callback)a(T);else if(t.startTime<=e)a(T),t.sortIndex=t.expirationTime,r(O,t);else break;t=o(T)}}function $(e){if(I=!1,B(e),!D){if(null!==o(O))D=!0,Z(V);else{var t=o(T);null!==t&&ee($,t.startTime-e)}}}function V(e,t){D=!1,I&&(I=!1,F(q),q=-1),M=!0;var n=A;try{for(B(t),L=o(O);null!==L&&(!(L.expirationTime>t)||e&&!Y());){var r=L.callback;if("function"==typeof r){L.callback=null,A=L.priorityLevel;var i=r(L.expirationTime<=t);t=l(),"function"==typeof i?L.callback=i:L===o(O)&&a(O),B(t)}else a(O);L=o(O)}if(null!==L)var u=!0;else{var s=o(T);null!==s&&ee($,s.startTime-t),u=!1}return u}finally{L=null,A=n,M=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var W=!1,H=null,q=-1,Q=5,K=-1;function Y(){return!(l()-K<Q)}function X(){if(null!==H){var e=l();K=e;var t=!0;try{t=H(!0,e)}finally{t?C():(W=!1,H=null)}}else W=!1}if("function"==typeof U)C=function(){U(X)};else if("undefined"!=typeof MessageChannel){var G=new MessageChannel,J=G.port2;G.port1.onmessage=X,C=function(){J.postMessage(null)}}else C=function(){z(X,0)};function Z(e){H=e,W||(W=!0,C())}function ee(e,t){q=z(function(){e(l())},t)}u=5,s=1,c=4,f=3,d=null,p=2,h=function(e){e.callback=null},m=function(){D||M||(D=!0,Z(V))},v=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<e?Math.floor(1e3/e):5},y=function(){return A},g=function(){return o(O)},b=function(e){switch(A){case 1:case 2:case 3:var t=3;break;default:t=A}var n=A;A=t;try{return e()}finally{A=n}},w=function(){},S=function(){},x=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=A;A=e;try{return t()}finally{A=n}},k=function(e,t,n){var a=l();switch(n="object"==typeof n&&null!==n&&"number"==typeof(n=n.delay)&&0<n?a+n:a,e){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=n+i,e={id:N++,callback:t,priorityLevel:e,startTime:n,expirationTime:i,sortIndex:-1},n>a?(e.sortIndex=n,r(T,e),null===o(O)&&e===o(T)&&(I?(F(q),q=-1):I=!0,ee($,n-a))):(e.sortIndex=i,r(O,e),D||M||(D=!0,Z(V))),e},E=Y,_=function(e){var t=A;return function(){var n=A;A=t;try{return e.apply(this,arguments)}finally{A=n}}}}),p("gLC8N",function(t,n){e(t.exports,"createBrowserRouter",function(){return m}),e(t.exports,"RouterProvider",function(){return b}),e(t.exports,"Link",function(){return k});/**
 * React Router DOM v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var r,o,a,i,l=d("4Iuzv"),u=d("20iM3"),s=(d("kPnuz"),d("kPnuz"));function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}let p=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],h=["reloadDocument","replace","state","method","action","onSubmit","submit","relative","preventScrollReset","unstable_viewTransition"];function m(e,t){var n;let r;return(0,s.createRouter)({basename:null==t?void 0:t.basename,future:c({},null==t?void 0:t.future,{v7_prependBasename:!0}),history:(0,s.createBrowserHistory)({window:null==t?void 0:t.window}),hydrationData:(null==t?void 0:t.hydrationData)||((r=null==(n=window)?void 0:n.__staticRouterHydrationData)&&r.errors&&(r=c({},r,{errors:function(e){if(!e)return null;let t=Object.entries(e),n={};for(let[e,r]of t)// Hey you!  If you change this, please change the corresponding logic in
// serializeErrors in react-router-dom/server.tsx :)
if(r&&"RouteErrorResponse"===r.__type)n[e]=new s.UNSAFE_ErrorResponseImpl(r.status,r.statusText,r.data,!0===r.internal);else if(r&&"Error"===r.__type){// Attempt to reconstruct the right type of Error (i.e., ReferenceError)
if(r.__subType){let t=window[r.__subType];if("function"==typeof t)try{// @ts-expect-error
let o=new t(r.message);// Wipe away the client-side stack trace.  Nothing to fill it in with
// because we don't serialize SSR stack traces for security reasons
o.stack="",n[e]=o}catch(e){// no-op - fall through and create a normal Error
}}if(null==n[e]){let t=Error(r.message);// Wipe away the client-side stack trace.  Nothing to fill it in with
// because we don't serialize SSR stack traces for security reasons
t.stack="",n[e]=t}}else n[e]=r;return n}(r.errors)})),r),routes:e,mapRouteProperties:u.UNSAFE_mapRouteProperties,window:null==t?void 0:t.window}).initialize()}let v=/*#__PURE__*/l.createContext({isTransitioning:!1}),y=l.startTransition;class g{constructor(){this.status="pending",this.promise=new Promise((e,t)=>{this.resolve=t=>{"pending"===this.status&&(this.status="resolved",e(t))},this.reject=e=>{"pending"===this.status&&(this.status="rejected",t(e))}})}}/**
 * Given a Remix Router instance, render the appropriate UI
 */function b(e){let{fallbackElement:t,router:n,future:r}=e,[o,a]=l.useState(n.state),[i,s]=l.useState(),[c,f]=l.useState({isTransitioning:!1}),[d,p]=l.useState(),[h,m]=l.useState(),[b,S]=l.useState(),{v7_startTransition:x}=r||{},k=l.useCallback(e=>{x&&y?y(e):e()},[x]),E=l.useCallback((e,t)=>{let{unstable_viewTransitionOpts:r}=t;r&&null!=n.window&&"function"==typeof n.window.document.startViewTransition?h&&d?(// Interrupting an in-progress transition, cancel and let everything flush
// out, and then kick off a new transition from the interruption state
d.resolve(),h.skipTransition(),S({state:e,currentLocation:r.currentLocation,nextLocation:r.nextLocation})):(// Completed navigation update with opted-in view transitions, let 'er rip
s(e),f({isTransitioning:!0,currentLocation:r.currentLocation,nextLocation:r.nextLocation})):k(()=>a(e))},[k,h,d,n.window]);// Need to use a layout effect here so we are subscribed early enough to
// pick up on any render-driven redirects/navigations (useEffect/<Navigate>)
l.useLayoutEffect(()=>n.subscribe(E),[n,E]),// When we start a view transition, create a Deferred we can use for the
// eventual "completed" render
l.useEffect(()=>{c.isTransitioning&&p(new g)},[c.isTransitioning]),// Once the deferred is created, kick off startViewTransition() to update the
// DOM and then wait on the Deferred to resolve (indicating the DOM update has
// happened)
l.useEffect(()=>{if(d&&i&&n.window){let e=d.promise,t=n.window.document.startViewTransition(async()=>{k(()=>a(i)),await e});t.finished.finally(()=>{p(void 0),m(void 0),s(void 0),f({isTransitioning:!1})}),m(t)}},[k,i,d,n.window]),// When the new location finally renders and is committed to the DOM, this
// effect will run to resolve the transition
l.useEffect(()=>{d&&i&&o.location.key===i.location.key&&d.resolve()},[d,h,o.location,i]),// If we get interrupted with a new navigation during a transition, we skip
// the active transition, let it cleanup, then kick it off again here
l.useEffect(()=>{!c.isTransitioning&&b&&(s(b.state),f({isTransitioning:!0,currentLocation:b.currentLocation,nextLocation:b.nextLocation}),S(void 0))},[c.isTransitioning,b]);let _=l.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:e=>n.navigate(e),push:(e,t,r)=>n.navigate(e,{state:t,preventScrollReset:null==r?void 0:r.preventScrollReset}),replace:(e,t,r)=>n.navigate(e,{replace:!0,state:t,preventScrollReset:null==r?void 0:r.preventScrollReset})}),[n]),C=n.basename||"/",j=l.useMemo(()=>({router:n,navigator:_,static:!1,basename:C}),[n,_,C]);// The fragment and {null} here are important!  We need them to keep React 18's
// useId happy when we are server-rendering since we may have a <script> here
// containing the hydrated server-side staticContext (from StaticRouterProvider).
// useId relies on the component tree structure to generate deterministic id's
// so we need to ensure it remains the same on the client even though
// we don't need the <script> tag
return /*#__PURE__*/l.createElement(l.Fragment,null,/*#__PURE__*/l.createElement(u.UNSAFE_DataRouterContext.Provider,{value:j},/*#__PURE__*/l.createElement(u.UNSAFE_DataRouterStateContext.Provider,{value:o},/*#__PURE__*/l.createElement(v.Provider,{value:c},/*#__PURE__*/l.createElement(u.Router,{basename:C,location:o.location,navigationType:o.historyAction,navigator:_},o.initialized?/*#__PURE__*/l.createElement(w,{routes:n.routes,state:o}):t)))),null)}function w(e){let{routes:t,state:n}=e;return(0,u.UNSAFE_useRoutesImpl)(t,void 0,n)}let S="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,x=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,k=/*#__PURE__*/l.forwardRef(function(e,t){let n,{onClick:r,relative:o,reloadDocument:a,replace:i,state:d,target:h,to:m,preventScrollReset:v,unstable_viewTransition:y}=e,g=f(e,p),{basename:b}=l.useContext(u.UNSAFE_NavigationContext),w=!1;if("string"==typeof m&&x.test(m)&&(// Render the absolute href server- and client-side
n=m,S))try{let e=new URL(window.location.href),t=new URL(m.startsWith("//")?e.protocol+m:m),n=(0,s.stripBasename)(t.pathname,b);t.origin===e.origin&&null!=n?m=n+t.search+t.hash:w=!0}catch(e){}// Rendered into <a href> for relative URLs
let k=(0,u.useHref)(m,{relative:o}),E=/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */function(e,t){let{target:n,replace:r,state:o,preventScrollReset:a,relative:i,unstable_viewTransition:c}=void 0===t?{}:t,f=(0,u.useNavigate)(),d=(0,u.useLocation)(),p=(0,u.useResolvedPath)(e,{relative:i});return l.useCallback(t=>{0!==t.button||// Ignore everything but left clicks
n&&"_self"!==n||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),f(e,{replace:void 0!==r?r:(0,s.createPath)(d)===(0,s.createPath)(p),state:o,preventScrollReset:a,relative:i,unstable_viewTransition:c}))},[d,f,p,r,o,n,e,a,i,c])}(m,{replace:i,state:d,target:h,preventScrollReset:v,relative:o,unstable_viewTransition:y});return /*#__PURE__*/l.createElement("a",c({},g,{href:n||k,onClick:w||a?r:function(e){r&&r(e),e.defaultPrevented||E(e)},ref:t,target:h}))});(r=a||(a={})).UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState",(o=i||(i={})).UseFetchers="useFetchers",o.UseScrollRestoration="useScrollRestoration"}),p("20iM3",function(t,n){e(t.exports,"UNSAFE_DataRouterContext",function(){return s}),e(t.exports,"UNSAFE_DataRouterStateContext",function(){return c}),e(t.exports,"UNSAFE_NavigationContext",function(){return f}),e(t.exports,"UNSAFE_RouteContext",function(){return h}),e(t.exports,"useHref",function(){return v}),e(t.exports,"useResolvedPath",function(){return k}),e(t.exports,"useLocation",function(){return g}),e(t.exports,"useNavigate",function(){return w}),e(t.exports,"useParams",function(){return x}),e(t.exports,"UNSAFE_useRoutesImpl",function(){return E}),e(t.exports,"useRouteError",function(){return D}),e(t.exports,"UNSAFE_useRouteId",function(){return L}),e(t.exports,"useNavigation",function(){return A}),e(t.exports,"useMatches",function(){return M}),e(t.exports,"unstable_useBlocker",function(){return z}),e(t.exports,"Router",function(){return U}),e(t.exports,"Outlet",function(){return F}),e(t.exports,"UNSAFE_mapRouteProperties",function(){return $});/**
 * React Router v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var r,o,a,i=d("4Iuzv"),l=d("kPnuz");function u(){return(u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}// Create react-specific types from the agnostic types in @remix-run/router to
// export from react-router
let s=/*#__PURE__*/i.createContext(null),c=/*#__PURE__*/i.createContext(null),f=/*#__PURE__*/i.createContext(null),p=/*#__PURE__*/i.createContext(null),h=/*#__PURE__*/i.createContext({outlet:null,matches:[],isDataRoute:!1}),m=/*#__PURE__*/i.createContext(null);/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/hooks/use-href
 */function v(e,t){let{relative:n}=void 0===t?{}:t;y()||(0,l.UNSAFE_invariant)(!1);let{basename:r,navigator:o}=i.useContext(f),{hash:a,pathname:u,search:s}=k(e,{relative:n}),c=u;return"/"!==r&&(c="/"===u?r:(0,l.joinPaths)([r,u])),o.createHref({pathname:c,search:s,hash:a})}/**
 * Returns true if this component is a descendant of a `<Router>`.
 *
 * @see https://reactrouter.com/hooks/use-in-router-context
 */function y(){return null!=i.useContext(p)}/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/hooks/use-location
 */function g(){return y()||(0,l.UNSAFE_invariant)(!1),i.useContext(p).location}// Mute warnings for calls to useNavigate in SSR environments
function b(e){i.useContext(f).static||// See: https://github.com/facebook/react/pull/26395
// eslint-disable-next-line react-hooks/rules-of-hooks
i.useLayoutEffect(e)}/**
 * Returns an imperative method for changing the location. Used by `<Link>`s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/hooks/use-navigate
 */function w(){let{isDataRoute:e}=i.useContext(h);// Conditional usage is OK here because the usage of a data router is static
// eslint-disable-next-line react-hooks/rules-of-hooks
return e?/**
 * Stable version of useNavigate that is used when we are in the context of
 * a RouterProvider.
 */function(){let{router:e}=O(P.UseNavigateStable),t=N(R.UseNavigateStable),n=i.useRef(!1);return b(()=>{n.current=!0}),i.useCallback(function(r,o){void 0===o&&(o={}),n.current&&("number"==typeof r?e.navigate(r):e.navigate(r,u({fromRouteId:t},o)))},[e,t])}():function(){y()||(0,l.UNSAFE_invariant)(!1);let e=i.useContext(s),{basename:t,navigator:n}=i.useContext(f),{matches:r}=i.useContext(h),{pathname:o}=g(),a=JSON.stringify((0,l.UNSAFE_getPathContributingMatches)(r).map(e=>e.pathnameBase)),u=i.useRef(!1);return b(()=>{u.current=!0}),i.useCallback(function(r,i){// Short circuit here since if this happens on first render the navigate
// is useless because we haven't wired up our history listener yet
if(void 0===i&&(i={}),!u.current)return;if("number"==typeof r){n.go(r);return}let s=(0,l.resolveTo)(r,JSON.parse(a),o,"path"===i.relative);null==e&&"/"!==t&&(s.pathname="/"===s.pathname?t:(0,l.joinPaths)([t,s.pathname])),(i.replace?n.replace:n.push)(s,i.state,i)},[t,n,a,o,e])}()}let S=/*#__PURE__*/i.createContext(null);/**
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/hooks/use-params
 */function x(){let{matches:e}=i.useContext(h),t=e[e.length-1];return t?t.params:{}}/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/hooks/use-resolved-path
 */function k(e,t){let{relative:n}=void 0===t?{}:t,{matches:r}=i.useContext(h),{pathname:o}=g(),a=JSON.stringify((0,l.UNSAFE_getPathContributingMatches)(r).map(e=>e.pathnameBase));return i.useMemo(()=>(0,l.resolveTo)(e,JSON.parse(a),o,"path"===n),[e,a,o,n])}// Internal implementation with accept optional param for RouterProvider usage
function E(e,t,n){let r;y()||(0,l.UNSAFE_invariant)(!1);let{navigator:o}=i.useContext(f),{matches:a}=i.useContext(h),s=a[a.length-1],c=s?s.params:{};s&&s.pathname;let d=s?s.pathnameBase:"/";s&&s.route;let m=g();if(t){var v;let e="string"==typeof t?(0,l.parsePath)(t):t;"/"===d||(null==(v=e.pathname)?void 0:v.startsWith(d))||(0,l.UNSAFE_invariant)(!1),r=e}else r=m;let b=r.pathname||"/",w="/"===d?b:b.slice(d.length)||"/",S=(0,l.matchRoutes)(e,{pathname:w}),x=function(e,t,n){var r,o;if(void 0===t&&(t=[]),void 0===n&&(n=null),null==e){if(null==(o=n)||!o.errors)return null;// boundary.  Use the pre-matched (or shimmed) matches
e=n.matches}let a=e,u=null==(r=n)?void 0:r.errors;if(null!=u){let e=a.findIndex(e=>e.route.id&&(null==u?void 0:u[e.route.id]));e>=0||(0,l.UNSAFE_invariant)(!1),a=a.slice(0,Math.min(a.length,e+1))}return a.reduceRight((e,r,o)=>{let l=r.route.id?null==u?void 0:u[r.route.id]:null,s=null;n&&(s=r.route.errorElement||_);let c=t.concat(a.slice(0,o+1)),f=()=>{let t;return t=l?s:r.route.Component?/*#__PURE__*/i.createElement(r.route.Component,null):r.route.element?r.route.element:e,/*#__PURE__*/i.createElement(j,{match:r,routeContext:{outlet:e,matches:c,isDataRoute:null!=n},children:t})};// Only wrap in an error boundary within data router usages when we have an
// ErrorBoundary/errorElement on this route.  Otherwise let it bubble up to
// an ancestor ErrorBoundary/errorElement
return n&&(r.route.ErrorBoundary||r.route.errorElement||0===o)?/*#__PURE__*/i.createElement(C,{location:n.location,revalidation:n.revalidation,component:s,error:l,children:f(),routeContext:{outlet:null,matches:c,isDataRoute:!0}}):f()},null)}(S&&S.map(e=>Object.assign({},e,{params:Object.assign({},c,e.params),pathname:(0,l.joinPaths)([d,// Re-encode pathnames that were decoded inside matchRoutes
    o.encodeLocation?o.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:(0,l.joinPaths)([d,// Re-encode pathnames that were decoded inside matchRoutes
    o.encodeLocation?o.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),a,n);return(// When a user passes in a `locationArg`, the associated routes need to
// be wrapped in a new `LocationContext.Provider` in order for `useLocation`
// to use the scoped location instead of the global location.
t&&x?/*#__PURE__*/i.createElement(p.Provider,{value:{location:u({pathname:"/",search:"",hash:"",state:null,key:"default"},r),navigationType:l.Action.Pop}},x):x)}let _=/*#__PURE__*/i.createElement(function(){let e=D(),t=(0,l.isRouteErrorResponse)(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null;return /*#__PURE__*/i.createElement(i.Fragment,null,/*#__PURE__*/i.createElement("h2",null,"Unexpected Application Error!"),/*#__PURE__*/i.createElement("h3",{style:{fontStyle:"italic"}},t),n?/*#__PURE__*/i.createElement("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"}},n):null,null)},null);class C extends i.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return(// When we get into an error state, the user will likely click "back" to the
// previous page that didn't have an error. Because this wraps the entire
// application, that will have no effect--the error page continues to display.
// This gives us a mechanism to recover from the error when the location changes.
//
// Whether we're in an error state or not, we update the location in state
// so that when we are in an error state, it gets reset when a new location
// comes in and the user recovers from the error.
t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||t.error,location:t.location,revalidation:e.revalidation||t.revalidation})}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?/*#__PURE__*/i.createElement(h.Provider,{value:this.props.routeContext},/*#__PURE__*/i.createElement(m.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function j(e){let{routeContext:t,match:n,children:r}=e,o=i.useContext(s);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),/*#__PURE__*/i.createElement(h.Provider,{value:t},r)}var P=((r=P||{}).UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r),R=((o=R||{}).UseBlocker="useBlocker",o.UseLoaderData="useLoaderData",o.UseActionData="useActionData",o.UseRouteError="useRouteError",o.UseNavigation="useNavigation",o.UseRouteLoaderData="useRouteLoaderData",o.UseMatches="useMatches",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o.UseRouteId="useRouteId",o);function O(e){let t=i.useContext(s);return t||(0,l.UNSAFE_invariant)(!1),t}function T(e){let t=i.useContext(c);return t||(0,l.UNSAFE_invariant)(!1),t}// Internal version with hookName-aware debugging
function N(e){let t;let n=((t=i.useContext(h))||(0,l.UNSAFE_invariant)(!1),t),r=n.matches[n.matches.length-1];return r.route.id||(0,l.UNSAFE_invariant)(!1),r.route.id}/**
 * Returns the ID for the nearest contextual route
 */function L(){return N(R.UseRouteId)}/**
 * Returns the current navigation, defaulting to an "idle" navigation when
 * no navigation is in progress
 */function A(){return T(R.UseNavigation).navigation}/**
 * Returns the active route matches, useful for accessing loaderData for
 * parent/child routes or the route "handle" property
 */function M(){let{matches:e,loaderData:t}=T(R.UseMatches);return i.useMemo(()=>e.map(e=>(0,l.UNSAFE_convertRouteMatchToUiMatch)(e,t)),[e,t])}/**
 * Returns the nearest ancestor Route error, which could be a loader/action
 * error or a render error.  This is intended to be called from your
 * ErrorBoundary/errorElement to display a proper error message.
 */function D(){var e;let t=i.useContext(m),n=T(R.UseRouteError),r=N(R.UseRouteError);return(// If this was a render error, we put it in a RouteError context inside
// of RenderErrorBoundary
t||(null==(e=n.errors)?void 0:e[r]))}let I=0;/**
 * Allow the application to block navigations within the SPA and present the
 * user a confirmation dialog to confirm the navigation.  Mostly used to avoid
 * using half-filled form data.  This does not handle hard-reloads or
 * cross-origin navigations.
 */function z(e){let{router:t,basename:n}=O(P.UseBlocker),r=T(R.UseBlocker),[o,a]=i.useState(""),s=i.useCallback(t=>{if("function"!=typeof e)return!!e;if("/"===n)return e(t);// If they provided us a function and we've got an active basename, strip
// it from the locations we expose to the user to match the behavior of
// useLocation
let{currentLocation:r,nextLocation:o,historyAction:a}=t;return e({currentLocation:u({},r,{pathname:(0,l.stripBasename)(r.pathname,n)||r.pathname}),nextLocation:u({},o,{pathname:(0,l.stripBasename)(o.pathname,n)||o.pathname}),historyAction:a})},[n,e]);// Prefer the blocker from `state` not `router.state` since DataRouterContext
// is memoized so this ensures we update on blocker state updates
return(// This effect is in charge of blocker key assignment and deletion (which is
// tightly coupled to the key)
i.useEffect(()=>{let e=String(++I);return a(e),()=>t.deleteBlocker(e)},[t]),// This effect handles assigning the blockerFunction.  This is to handle
// unstable blocker function identities, and happens only after the prior
// effect so we don't get an orphaned blockerFunction in the router with a
// key of "".  Until then we just have the IDLE_BLOCKER.
i.useEffect(()=>{""!==o&&t.getBlocker(o,s)},[t,o,s]),o&&r.blockers.has(o)?r.blockers.get(o):l.IDLE_BLOCKER)}/**
 * Renders the child route's element, if there is one.
 *
 * @see https://reactrouter.com/components/outlet
 */function F(e){var t;let n;return t=e.context,(n=i.useContext(h).outlet)?/*#__PURE__*/i.createElement(S.Provider,{value:t},n):n}/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a `<Router>` directly. Instead, you'll render a
 * router that is more specific to your environment such as a `<BrowserRouter>`
 * in web browsers or a `<StaticRouter>` for server rendering.
 *
 * @see https://reactrouter.com/router-components/router
 */function U(e){let{basename:t="/",children:n=null,location:r,navigationType:o=l.Action.Pop,navigator:a,static:u=!1}=e;y()&&(0,l.UNSAFE_invariant)(!1);// Preserve trailing slashes on basename, so we can let the user control
// the enforcement of trailing slashes throughout the app
let s=t.replace(/^\/*/,"/"),c=i.useMemo(()=>({basename:s,navigator:a,static:u}),[s,a,u]);"string"==typeof r&&(r=(0,l.parsePath)(r));let{pathname:d="/",search:h="",hash:m="",state:v=null,key:g="default"}=r,b=i.useMemo(()=>{let e=(0,l.stripBasename)(d,s);return null==e?null:{location:{pathname:e,search:h,hash:m,state:v,key:g},navigationType:o}},[s,d,h,m,v,g,o]);return null==b?null:/*#__PURE__*/i.createElement(f.Provider,{value:c},/*#__PURE__*/i.createElement(p.Provider,{children:n,value:b}))}i.startTransition;var B=((a=B||{})[a.pending=0]="pending",a[a.success=1]="success",a[a.error=2]="error",a);function $(e){let t={// Note: this check also occurs in createRoutesFromChildren so update
// there if you change this -- please and thank you!
hasErrorBoundary:null!=e.ErrorBoundary||null!=e.errorElement};return e.Component&&Object.assign(t,{element:/*#__PURE__*/i.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:/*#__PURE__*/i.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}new Promise(()=>{})}),p("kPnuz",function(t,n){var r,o,a,i;/**
 * @remix-run/router v1.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}e(t.exports,"Action",function(){return r}),e(t.exports,"createMemoryHistory",function(){return s}),e(t.exports,"createPath",function(){return v}),e(t.exports,"parsePath",function(){return y}),e(t.exports,"createBrowserHistory",function(){return c}),e(t.exports,"createHashHistory",function(){return f}),e(t.exports,"UNSAFE_invariant",function(){return d}),e(t.exports,"matchRoutes",function(){return S}),e(t.exports,"stripBasename",function(){return C}),e(t.exports,"UNSAFE_convertRouteMatchToUiMatch",function(){return x}),e(t.exports,"joinPaths",function(){return O}),e(t.exports,"matchPath",function(){return _}),e(t.exports,"UNSAFE_getPathContributingMatches",function(){return P}),e(t.exports,"resolveTo",function(){return R}),e(t.exports,"AbortedDeferredError",function(){return A}),e(t.exports,"UNSAFE_ErrorResponseImpl",function(){return M}),e(t.exports,"isRouteErrorResponse",function(){return D}),e(t.exports,"IDLE_BLOCKER",function(){return H}),e(t.exports,"createRouter",function(){return Y}),/**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */(a=r||(r={})).Pop="POP",/**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */a.Push="PUSH",/**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */a.Replace="REPLACE";let u="popstate";/**
 * Memory history stores the current location in memory. It is designed for use
 * in stateful non-browser environments like tests and React Native.
 */function s(e){let t;void 0===e&&(e={});let{initialEntries:n=["/"],initialIndex:o,v5Compat:a=!1}=e;t=n.map((e,t)=>c(e,"string"==typeof e?null:e.state,0===t?"default":void 0));let i=s(null==o?t.length-1:o),l=r.Pop,u=null;function s(e){return Math.min(Math.max(e,0),t.length-1)}function c(e,n,r){void 0===n&&(n=null);let o=m(t?t[i].pathname:"/",e,n,r);return p("/"===o.pathname.charAt(0),"relative pathnames are not supported in memory history: "+JSON.stringify(e)),o}function f(e){return"string"==typeof e?e:v(e)}return{get index(){return i},get action(){return l},get location(){return t[i]},createHref:f,createURL:e=>new URL(f(e),"http://localhost"),encodeLocation(e){let t="string"==typeof e?y(e):e;return{pathname:t.pathname||"",search:t.search||"",hash:t.hash||""}},push(e,n){l=r.Push;let o=c(e,n);i+=1,t.splice(i,t.length,o),a&&u&&u({action:l,location:o,delta:1})},replace(e,n){l=r.Replace;let o=c(e,n);t[i]=o,a&&u&&u({action:l,location:o,delta:0})},go(e){l=r.Pop;let n=s(i+e),o=t[n];i=n,u&&u({action:l,location:o,delta:e})},listen:e=>(u=e,()=>{u=null})}}/**
 * Browser history stores the location in regular URLs. This is the standard for
 * most web apps, but it requires some configuration on the server to ensure you
 * serve the same app at multiple URLs.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
 */function c(e){return void 0===e&&(e={}),g(function(e,t){let{pathname:n,search:r,hash:o}=e.location;return m("",{pathname:n,search:r,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"==typeof t?t:v(t)},null,e)}/**
 * Hash history stores the location in window.location.hash. This makes it ideal
 * for situations where you don't want to send the location to the server for
 * some reason, either because you do cannot configure it or the URL space is
 * reserved for something else.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory
 */function f(e){return void 0===e&&(e={}),g(function(e,t){let{pathname:n="/",search:r="",hash:o=""}=y(e.location.hash.substr(1));return n.startsWith("/")||n.startsWith(".")||(n="/"+n),m("",{pathname:n,search:r,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){let n=e.document.querySelector("base"),r="";if(n&&n.getAttribute("href")){let t=e.location.href,n=t.indexOf("#");r=-1===n?t:t.slice(0,n)}return r+"#"+("string"==typeof t?t:v(t))},function(e,t){p("/"===e.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")")},e)}function d(e,t){if(!1===e||null==e)throw Error(t)}function p(e,t){if(!e){// eslint-disable-next-line no-console
"undefined"!=typeof console&&console.warn(t);try{// Welcome to debugging history!
//
// This error is thrown as a convenience, so you can more easily
// find the source for a warning that appears in the console by
// enabling "pause on exceptions" in your JavaScript debugger.
throw Error(t);// eslint-disable-next-line no-empty
}catch(e){}}}/**
 * For browser-based histories, we combine the state and key into an object
 */function h(e,t){return{usr:e.state,key:e.key,idx:t}}/**
 * Creates a Location object with a unique key from the given Path
 */function m(e,t,n,r){return void 0===n&&(n=null),l({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?y(t):t,{state:n,// TODO: This could be cleaned up.  push/replace should probably just take
// full Locations now and avoid the need to run through this flow at all
// But that's a pretty big refactor to the current test suite so going to
// keep as is for the time being and just let any incoming keys take precedence
key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}/**
 * Creates a string URL path from the given pathname, search, and hash components.
 */function v(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 */function y(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function g(e,t,n,o){void 0===o&&(o={});let{window:a=document.defaultView,v5Compat:i=!1}=o,s=a.history,c=r.Pop,f=null,p=y();function y(){return(s.state||{idx:null}).idx}function g(){c=r.Pop;let e=y(),t=null==e?null:e-p;p=e,f&&f({action:c,location:w.location,delta:t})}function b(e){// window.location.origin is "null" (the literal string value) in Firefox
// under certain conditions, notably when serving from a local HTML file
// See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
let t="null"!==a.location.origin?a.location.origin:a.location.href,n="string"==typeof e?e:v(e);return d(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==p&&(p=0,s.replaceState(l({},s.state,{idx:p}),""));let w={get action(){return c},get location(){return e(a,s)},listen(e){if(f)throw Error("A history only accepts one active listener");return a.addEventListener(u,g),f=e,()=>{a.removeEventListener(u,g),f=null}},createHref:e=>t(a,e),createURL:b,encodeLocation(e){// Encode a Location the same way window.location would
let t=b(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){c=r.Push;let o=m(w.location,e,t);n&&n(o,e);let l=h(o,p=y()+1),u=w.createHref(o);// try...catch because iOS limits us to 100 pushState calls :/
try{s.pushState(l,"",u)}catch(e){// If the exception is because `state` can't be serialized, let that throw
// outwards just like a replace call would so the dev knows the cause
// https://html.spec.whatwg.org/multipage/nav-history-apis.html#shared-history-push/replace-state-steps
// https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializeinternal
if(e instanceof DOMException&&"DataCloneError"===e.name)throw e;// They are going to lose state here, but there is no real
// way to warn them about it since the page will refresh...
a.location.assign(u)}i&&f&&f({action:c,location:w.location,delta:1})},replace:function(e,t){c=r.Replace;let o=m(w.location,e,t);n&&n(o,e);let a=h(o,p=y()),l=w.createHref(o);s.replaceState(a,"",l),i&&f&&f({action:c,location:w.location,delta:0})},go:e=>s.go(e)};return w}(i=o||(o={})).data="data",i.deferred="deferred",i.redirect="redirect",i.error="error";let b=new Set(["lazy","caseSensitive","path","id","index","children"]);// Walk the route tree generating unique IDs where necessary, so we are working
// solely with AgnosticDataRouteObject's within the Router
function w(e,t,n,r){return void 0===n&&(n=[]),void 0===r&&(r={}),e.map((e,o)=>{let a=[...n,o],i="string"==typeof e.id?e.id:a.join("-");if(d(!0!==e.index||!e.children,"Cannot specify children on an index route"),d(!r[i],'Found a route id collision on id "'+i+"\".  Route id's must be globally unique within Data Router usages"),!0===e.index){let n=l({},e,t(e),{id:i});return r[i]=n,n}{let n=l({},e,t(e),{id:i,children:void 0});return r[i]=n,e.children&&(n.children=w(e.children,t,a,r)),n}})}/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/utils/match-routes
 */function S(e,t,n){void 0===n&&(n="/");let r=C(("string"==typeof t?y(t):t).pathname||"/",n);if(null==r)return null;let o=function e(t,n,r,o){void 0===n&&(n=[]),void 0===r&&(r=[]),void 0===o&&(o="");let a=(t,a,i)=>{var l;let u,s,c={relativePath:void 0===i?t.path||"":i,caseSensitive:!0===t.caseSensitive,childrenIndex:a,route:t};c.relativePath.startsWith("/")&&(d(c.relativePath.startsWith(o),'Absolute route path "'+c.relativePath+'" nested under path "'+o+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),c.relativePath=c.relativePath.slice(o.length));let f=O([o,c.relativePath]),p=r.concat(c);t.children&&t.children.length>0&&(d(// @ts-expect-error
!0!==t.index,'Index routes must not have child routes. Please remove all child routes from route path "'+f+'".'),e(t.children,n,p,f)),(null!=t.path||t.index)&&n.push({path:f,score:(l=t.index,s=(u=f.split("/")).length,u.some(E)&&(s+=-2),l&&(s+=2),u.filter(e=>!E(e)).reduce((e,t)=>e+(k.test(t)?3:""===t?1:10),s)),routesMeta:p})};return t.forEach((e,t)=>{var n;// coarse-grain check for optional params
if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let n of /**
 * Computes all combinations of optional path segments for a given path,
 * excluding combinations that are ambiguous and of lower priority.
 *
 * For example, `/one/:two?/three/:four?/:five?` explodes to:
 * - `/one/three`
 * - `/one/:two/three`
 * - `/one/three/:four`
 * - `/one/three/:five`
 * - `/one/:two/three/:four`
 * - `/one/:two/three/:five`
 * - `/one/three/:four/:five`
 * - `/one/:two/three/:four/:five`
 */function e(t){let n=t.split("/");if(0===n.length)return[];let[r,...o]=n,a=r.endsWith("?"),i=r.replace(/\?$/,"");if(0===o.length)// `["one", "", "three"]` corresponds to omitting `:two` from `/one/:two?/three` -> `/one/three`
return a?[i,""]:[i];let l=e(o.join("/")),u=[];// for absolute paths, ensure `/` instead of empty segment
return(// All child paths with the prefix.  Do this for all children before the
// optional version for all children, so we get consistent ordering where the
// parent optional aspect is preferred as required.  Otherwise, we can get
// child sections interspersed where deeper optional segments are higher than
// parent optional segments, where for example, /:two would explode _earlier_
// then /:one.  By always including the parent as required _for all children_
// first, we avoid this issue
u.push(...l.map(e=>""===e?i:[i,e].join("/"))),a&&u.push(...l),u.map(e=>t.startsWith("/")&&""===e?"/":e))}(e.path))a(e,t,n);else a(e,t)}),n}(e);(function(e){e.sort((e,t)=>{var n,r;return e.score!==t.score?t.score-e.score// Higher score first
:(n=e.routesMeta.map(e=>e.childrenIndex),r=t.routesMeta.map(e=>e.childrenIndex),n.length===r.length&&n.slice(0,-1).every((e,t)=>e===r[t])?// first. This allows people to have fine-grained control over the matching
// behavior by simply putting routes with identical paths in the order they
// want them tried.
n[n.length-1]-r[r.length-1]:// so they sort equally.
0)})})(o);let a=null;for(let e=0;null==a&&e<o.length;++e)a=function(e,t){let{routesMeta:n}=e,r={},o="/",a=[];for(let e=0;e<n.length;++e){let i=n[e],l=e===n.length-1,u="/"===o?t:t.slice(o.length)||"/",s=_({path:i.relativePath,caseSensitive:i.caseSensitive,end:l},u);if(!s)return null;Object.assign(r,s.params);let c=i.route;a.push({// TODO: Can this as be avoided?
params:r,pathname:O([o,s.pathname]),pathnameBase:T(O([o,s.pathnameBase])),route:c}),"/"!==s.pathnameBase&&(o=O([o,s.pathnameBase]))}return a}(o[e],// or from router.navigate, but we want to match against the unencoded
// paths in the route definitions.  Memory router locations won't be
// encoded here but there also shouldn't be anything to decode so this
// should be a safe operation.  This avoids needing matchRoutes to be
// history-aware.
function(e){try{return decodeURI(e)}catch(t){return p(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}(r));return a}function x(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],handle:n.handle}}let k=/^:\w+$/,E=e=>"*"===e;/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/utils/match-path
 */function _(e,t){var n,r,o;let a,i;"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[l,u]=(n=e.path,r=e.caseSensitive,o=e.end,void 0===r&&(r=!1),void 0===o&&(o=!0),p("*"===n||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were "'+n.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+n.replace(/\*$/,"/*")+'".'),a=[],i="^"+n.replace(/\/*\*?$/,"")// Ignore trailing / and /*, we'll handle it below
.replace(/^\/*/,"/")// Make sure it has a leading /
.replace(/[\\.*+^$?{}|()[\]]/g,"\\$&")// Escape special regex chars
.replace(/\/:(\w+)/g,(e,t)=>(a.push(t),"/([^\\/]+)")),n.endsWith("*")?(a.push("*"),i+="*"===n||"/*"===n?"(.*)$"// Already matched the initial /, just match the rest
:"(?:\\/(.+)|\\/*)$"):o?i+="\\/*$":""!==n&&"/"!==n&&// then we have _some_ form of path in our regex, so we should expect to
// match only if we find the end of this path segment.  Look for an optional
// non-captured trailing slash (to match a portion of the URL) or the end
// of the path (if we've matched to the end).  We used to do this with a
// word boundary but that gives false positives on routes like
// /user-preferences since `-` counts as a word boundary.
(i+="(?:(?=\\/|$))"),[new RegExp(i,r?void 0:"i"),a]),s=t.match(l);if(!s)return null;let c=s[0],f=c.replace(/(.)\/+$/,"$1"),d=s.slice(1);return{params:u.reduce((e,t,n)=>{// We need to compute the pathnameBase here using the raw splat value
// instead of using params["*"] later because it will be decoded then
if("*"===t){let e=d[n]||"";f=c.slice(0,c.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(n){return p(!1,'The value for the URL param "'+t+'" will not be decoded because the string "'+e+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+n+")."),e}}(d[n]||"",t),e},{}),pathname:c,pathnameBase:f,pattern:e}}/**
 * @private
 */function C(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;// We want to leave trailing slash behavior in the user's control, so if they
// specify a basename with a trailing slash, we should support it
let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function j(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t)+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}/**
 * @private
 *
 * When processing relative navigation we want to ignore ancestor routes that
 * do not contribute to the path, such that index/pathless layout routes don't
 * interfere.
 *
 * For example, when moving a route element into an index route and/or a
 * pathless layout route, relative link behavior contained within should stay
 * the same.  Both of the following examples should link back to the root:
 *
 *   <Route path="/">
 *     <Route path="accounts" element={<Link to=".."}>
 *   </Route>
 *
 *   <Route path="/">
 *     <Route path="accounts">
 *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
 *         <Route index element={<Link to=".."} />  // <-- Does not contribute
 *       </Route
 *     </Route>
 *   </Route>
 */function P(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}/**
 * @private
 */function R(e,t,n,r){let o,a;void 0===r&&(r=!1),"string"==typeof e?o=y(e):(d(!(o=l({},e)).pathname||!o.pathname.includes("?"),j("?","pathname","search",o)),d(!o.pathname||!o.pathname.includes("#"),j("#","pathname","hash",o)),d(!o.search||!o.search.includes("#"),j("#","search","hash",o)));let i=""===e||""===o.pathname,u=i?"/":o.pathname;// Routing is relative to the current pathname if explicitly requested.
//
// If a pathname is explicitly provided in `to`, it should be relative to the
// route context. This is explained in `Note on `<Link to>` values` in our
// migration guide from v5 as a means of disambiguation between `to` values
// that begin with `/` and those that do not. However, this is problematic for
// `to` values that do not provide a pathname. `to` can simply be a search or
// hash string, in which case we should assume that the navigation is relative
// to the current location's pathname and *not* the route pathname.
if(r||null==u)a=n;else{let e=t.length-1;if(u.startsWith("..")){let t=u.split("/");// Each leading .. segment means "go up one route" instead of "go up one
// URL segment".  This is a key difference from how <a href> works and a
// major reason we call this a "to" value instead of a "href".
for(;".."===t[0];)t.shift(),e-=1;o.pathname=t.join("/")}// If there are more ".." segments than parent routes, resolve relative to
// the root / URL.
a=e>=0?t[e]:"/"}let s=/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/utils/resolve-path
 */function(e,t){let n;void 0===t&&(t="/");let{pathname:r,search:o="",hash:a=""}="string"==typeof e?y(e):e;return{pathname:r?r.startsWith("/")?r:(n=t.replace(/\/+$/,"").split("/"),r.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"):t,search:N(o),hash:L(a)}}(o,a),c=u&&"/"!==u&&u.endsWith("/"),f=(i||"."===u)&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||f)&&(s.pathname+="/"),s}/**
 * @private
 */let O=e=>e.join("/").replace(/\/\/+/g,"/"),T=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),N=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",L=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";class A extends Error{}/**
 * @private
 * Utility class we use to hold auto-unwrapped 4xx/5xx Response bodies
 *
 * We don't export the class for public use since it's an implementation
 * detail, but we export the interface above so folks can build their own
 * abstractions around instances via isRouteErrorResponse()
 */class M{constructor(e,t,n,r){void 0===r&&(r=!1),this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}}/**
 * Check if the given error is an ErrorResponse generated from a 4xx/5xx
 * Response thrown from an action/loader
 */function D(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}let I=["post","put","patch","delete"],z=new Set(I),F=["get",...I],U=new Set(F),B=new Set([301,302,303,307,308]),$=new Set([307,308]),V={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},W={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},H={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},q=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Q=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),K="remix-router-transitions";//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createRouter
////////////////////////////////////////////////////////////////////////////////
/**
 * Create a router and listen to history POP navigations
 */function Y(e){let t,n,a,i;let u=e.window?e.window:"undefined"!=typeof window?window:void 0,s=void 0!==u&&void 0!==u.document&&void 0!==u.document.createElement,c=!s;if(d(e.routes.length>0,"You must provide a non-empty routes array to createRouter"),e.mapRouteProperties)t=e.mapRouteProperties;else if(e.detectErrorBoundary){// If they are still using the deprecated version, wrap it with the new API
let n=e.detectErrorBoundary;t=e=>({hasErrorBoundary:n(e)})}else t=Q;// Routes keyed by ID
let f={},h=w(e.routes,t,void 0,f),v=e.basename||"/",y=l({v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),g=null,b=new Set,k=null,E=null,_=null,j=null!=e.hydrationData,P=S(h,e.history.location,v),R=null;if(null==P){// If we do not match a user-provided-route, fall back to the root
// to allow the error boundary to take over
let t=ec(404,{pathname:e.history.location.pathname}),{matches:n,route:r}=es(h);P=n,R={[r.id]:t}}let O=// functions around still then we'll need to run them in initialize()
!P.some(e=>e.route.lazy)&&// And we have to either have no loaders or have been provided hydrationData
(!P.some(e=>e.route.loader)||null!=e.hydrationData),T={historyAction:e.history.action,location:e.history.location,matches:P,initialized:O,navigation:V,// Don't restore on initial updateState() if we were SSR'd
restoreScrollPosition:null==e.hydrationData&&null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||R,fetchers:new Map,blockers:new Map},N=r.Pop,L=!1,A=!1,M=new Map,D=null,I=!1,z=!1,F=[],U=[],B=new Map,Y=0,Z=-1,ee=new Map,et=new Set,eo=new Map,ea=new Map,ed=new Map,eb=!1;// Update our state and notify the calling context of the change
function e_(e,t){T=l({},T,e),b.forEach(e=>e(T,{unstable_viewTransitionOpts:t}))}// Complete a navigation returning the state.navigation back to the IDLE_NAVIGATION
// and setting state.[historyAction/location/matches] to the new route.
// - Location is a required param
// - Navigation will always be set to IDLE_NAVIGATION
// - Can pass any other state in newState
function eC(t,o){var a,i;let u,s;// Deduce if we're in a loading/actionReload state:
// - We have committed actionData in the store
// - The current navigation was a mutation submission
// - We're past the submitting state and into the loading state
// - The location being loaded is not the result of a redirect
let c=null!=T.actionData&&null!=T.navigation.formMethod&&ev(T.navigation.formMethod)&&"loading"===T.navigation.state&&(null==(a=t.state)?void 0:a._isRedirect)!==!0;u=o.actionData?Object.keys(o.actionData).length>0?o.actionData:null:c?T.actionData:null;// Always preserve any existing loaderData from re-used routes
let f=o.loaderData?el(T.loaderData,o.loaderData,o.matches||[],o.errors):T.loaderData,d=T.blockers;d.size>0&&(d=new Map(d)).forEach((e,t)=>d.set(t,H));// Always respect the user flag.  Otherwise don't reset on mutation
// submission navigations unless they redirect
let p=!0===L||null!=T.navigation.formMethod&&ev(T.navigation.formMethod)&&(null==(i=t.state)?void 0:i._isRedirect)!==!0;// On POP, enable transitions if they were enabled on the original navigation
if(n&&(h=n,n=void 0),I||N===r.Pop||(N===r.Push?e.history.push(t,t.state):N===r.Replace&&e.history.replace(t,t.state)),N===r.Pop){// Forward takes precedence so they behave like the original navigation
let e=M.get(T.location.pathname);e&&e.has(t.pathname)?s={currentLocation:T.location,nextLocation:t}:M.has(t.pathname)&&// the new location and enable if that location previously enabled
(s={currentLocation:t,nextLocation:T.location})}else if(A){// Store the applied transition on PUSH/REPLACE
let e=M.get(T.location.pathname);e?e.add(t.pathname):(e=new Set([t.pathname]),M.set(T.location.pathname,e)),s={currentLocation:T.location,nextLocation:t}}e_(l({},o,{actionData:u,loaderData:f,historyAction:N,location:t,initialized:!0,navigation:V,revalidation:"idle",restoreScrollPosition:eK(t,o.matches||T.matches),preventScrollReset:p,blockers:d}),s),// Reset stateful navigation vars
N=r.Pop,L=!1,A=!1,I=!1,z=!1,F=[],U=[]}// Trigger a navigation event, which can either be a numerical POP or a PUSH
// replace with an optional submission
async function ej(t,n){if("number"==typeof t){e.history.go(t);return}let o=X(T.location,T.matches,v,y.v7_prependBasename,t,null==n?void 0:n.fromRouteId,null==n?void 0:n.relative),{path:a,submission:i,error:u}=G(y.v7_normalizeFormMethod,!1,o,n),s=T.location,c=m(T.location,a,n&&n.state);// When using navigate as a PUSH/REPLACE we aren't reading an already-encoded
// URL from window.location, so we need to encode it here so the behavior
// remains the same as POP and non-data-router usages.  new URL() does all
// the same encoding we'd get from a history.pushState/window.location read
// without having to touch history
c=l({},c,e.history.encodeLocation(c));let f=n&&null!=n.replace?n.replace:void 0,d=r.Push;!0===f?d=r.Replace:!1===f||null!=i&&ev(i.formMethod)&&i.formAction===T.location.pathname+T.location.search&&// users don't have to double-click the back button to get to the prior
// location.  If the user redirects to a different location from the
// action/loader this will be ignored and the redirect will be a PUSH
(d=r.Replace);let p=n&&"preventScrollReset"in n?!0===n.preventScrollReset:void 0,h=eH({currentLocation:s,nextLocation:c,historyAction:d});if(h){// Put the blocker into a blocked state
eW(h,{state:"blocked",location:c,proceed(){eW(h,{state:"proceeding",proceed:void 0,reset:void 0,location:c}),// Send the same navigation through
ej(t,n)},reset(){let e=new Map(T.blockers);e.set(h,H),e_({blockers:e})}});return}return await eP(d,c,{submission:i,// Send through the formData serialization error if we have one so we can
// render at the right error boundary after we match routes
pendingError:u,preventScrollReset:p,replace:n&&n.replace,enableViewTransition:n&&n.unstable_viewTransition})}// Start a navigation to the given action/location.  Can optionally provide a
// overrideNavigation which will override the normalLoad in the case of a redirect
// navigation
async function eP(t,r,o){var a,u,s;let c,f;// Abort any in-progress navigations and start a new one. Unset any ongoing
// uninterrupted revalidations unless told otherwise, since we want this
// new navigation to update history normally
i&&i.abort(),i=null,N=t,I=!0===(o&&o.startUninterruptedRevalidation),a=T.location,u=T.matches,k&&_&&(k[eQ(a,u)]=_()),L=!0===(o&&o.preventScrollReset),A=!0===(o&&o.enableViewTransition);let d=n||h,p=o&&o.overrideNavigation,m=S(d,r,v);// Short circuit with a 404 on the root error boundary if we match nothing
if(!m){let e=ec(404,{pathname:r.pathname}),{matches:t,route:n}=es(d);// Cancel all pending deferred on 404s since we don't keep any routes
eq(),eC(r,{matches:t,loaderData:{},errors:{[n.id]:e}});return}// Short circuit if it's only a hash change and not a revalidation or
// mutation submission.
//
// Ignore on initial page loads because since the initial load will always
// be "same hash".  For example, on /page#hash and submit a <Form method="post">
// which will default to a navigation to /page
if(T.initialized&&!z&&(s=T.location).pathname===r.pathname&&s.search===r.search&&(""===s.hash?""!==r.hash:s.hash===r.hash||""!==r.hash)&&!(o&&o.submission&&ev(o.submission.formMethod))){eC(r,{matches:m});return}// Create a controller/Request for this navigation
i=new AbortController;let y=er(e.history,r,i.signal,o&&o.submission);if(o&&o.pendingError)// with binary FormData so assign here and skip to handleLoaders.  That
// way we handle calling loaders above the boundary etc.  It's not really
// different from an actionError in that sense.
f={[eu(m).route.id]:o.pendingError};else if(o&&o.submission&&ev(o.submission.formMethod)){// Call action if we received an action submission
let e=await eR(y,r,o.submission,m,{replace:o.replace});if(e.shortCircuited)return;c=e.pendingActionData,f=e.pendingActionError,p=ex(r,o.submission),// Create a GET request for the loaders
y=new Request(y.url,{signal:y.signal})}// Call loaders
let{shortCircuited:g,loaderData:b,errors:w}=await eO(y,r,m,p,o&&o.submission,o&&o.fetcherSubmission,o&&o.replace,c,f);g||(// Clean up now that the action/loaders have completed.  Don't clean up if
// we short circuited because pendingNavigationController will have already
// been assigned to a new controller for the next navigation
i=null,eC(r,l({matches:m},c?{actionData:c}:{},{loaderData:b,errors:w})))}// Call the action matched by the leaf route for this navigation and handle
// redirects/errors
async function eR(e,n,a,i,l){let u;void 0===l&&(l={}),eD(),e_({navigation:{state:"submitting",location:n,formMethod:a.formMethod,formAction:a.formAction,formEncType:a.formEncType,formData:a.formData,json:a.json,text:a.text}});let s=ew(i,n);if(s.route.action||s.route.lazy){if(u=await en("action",e,s,i,f,t,v),e.signal.aborted)return{shortCircuited:!0}}else u={type:o.error,error:ec(405,{method:e.method,pathname:n.pathname,routeId:s.route.id})};if(em(u)){let e;return e=l&&null!=l.replace?l.replace:u.location===T.location.pathname+T.location.search,await eA(T,u,{submission:a,replace:e}),{shortCircuited:!0}}if(eh(u)){// Store off the pending error - we use it to determine which loaders
// to call and will commit it when we complete the navigation
let e=eu(i,s.route.id);return!0!==(l&&l.replace)&&(N=r.Push),{// Send back an empty object we can use to clear out any prior actionData
pendingActionData:{},pendingActionError:{[e.route.id]:u.error}}}if(ep(u))throw ec(400,{type:"defer-action"});return{pendingActionData:{[s.route.id]:u.data}}}// Call all applicable loaders for the given matches, handling redirects,
// errors, etc.
async function eO(t,r,o,a,u,s,c,f,d){// Figure out the right navigation we want to use for data loading
let p=a||ex(r,u),m=u||s||eS(p),y=n||h,[g,b]=J(e.history,T,o,m,r,z,F,U,eo,et,y,v,f,d);// Short circuit if we have no loaders to run
if(// Cancel pending deferreds for no-longer-matched routes or routes we're
// about to reload.  Note that if this is an action reload we would have
// already cancelled all pending deferreds so this would be a no-op
eq(e=>!(o&&o.some(t=>t.route.id===e))||g&&g.some(t=>t.route.id===e)),Z=++Y,0===g.length&&0===b.length){let e=eB();return eC(r,l({matches:o,loaderData:{},// Commit pending error if we're short circuiting
errors:d||null},f?{actionData:f}:{},e?{fetchers:new Map(T.fetchers)}:{})),{shortCircuited:!0}}// If this is an uninterrupted revalidation, we remain in our current idle
// state.  If not, we need to switch to our loading state and load data,
// preserving any new action data or existing action data (in the case of
// a revalidation interrupting an actionReload)
if(!I){b.forEach(e=>{let t=T.fetchers.get(e.key),n=ek(void 0,t?t.data:void 0);T.fetchers.set(e.key,n)});let e=f||T.actionData;e_(l({navigation:p},e?0===Object.keys(e).length?{actionData:null}:{actionData:e}:{},b.length>0?{fetchers:new Map(T.fetchers)}:{}))}b.forEach(e=>{B.has(e.key)&&eF(e.key),e.controller&&// (via deleteFetcher) does not abort the triggering navigation that
// triggered the revalidation
B.set(e.key,e.controller)});// Proxy navigation abort through to revalidation fetchers
let w=()=>b.forEach(e=>eF(e.key));i&&i.signal.addEventListener("abort",w);let{results:S,loaderResults:x,fetcherResults:k}=await eM(T.matches,o,g,b,t);if(t.signal.aborted)return{shortCircuited:!0};i&&i.signal.removeEventListener("abort",w),b.forEach(e=>B.delete(e.key));// If any loaders returned a redirect Response, start a new REPLACE navigation
let E=ef(S);if(E){if(E.idx>=g.length){// If this redirect came from a fetcher make sure we mark it in
// fetchRedirectIds so it doesn't get revalidated on the next set of
// loader executions
let e=b[E.idx-g.length].key;et.add(e)}return await eA(T,E.result,{replace:c}),{shortCircuited:!0}}// Process and commit output from loaders
let{loaderData:_,errors:C}=ei(T,o,g,x,d,b,k,ea);// Wire up subscribers to update loaderData as promises settle
ea.forEach((e,t)=>{e.subscribe(n=>{// Note: No need to updateState here since the TrackedPromise on
// loaderData is stable across resolve/reject
// Remove this instance if we were aborted or if promises have settled
(n||e.done)&&ea.delete(t)})});let j=eB(),P=e$(Z),R=j||P||b.length>0;return l({loaderData:_,errors:C},R?{fetchers:new Map(T.fetchers)}:{})}function eT(e){return T.fetchers.get(e)||W}// Call the action for the matched fetcher.submit(), and then handle redirects,
// errors, and revalidation
async function eN(r,o,a,u,s,c){var p;if(eD(),eo.delete(r),!u.route.action&&!u.route.lazy){let e=ec(405,{method:c.formMethod,pathname:a,routeId:o});eI(r,o,e);return}let m=(p=T.fetchers.get(r),{state:"submitting",formMethod:c.formMethod,formAction:c.formAction,formEncType:c.formEncType,formData:c.formData,json:c.json,text:c.text,data:p?p.data:void 0});T.fetchers.set(r,m),e_({fetchers:new Map(T.fetchers)});// Call the action for the fetcher
let y=new AbortController,g=er(e.history,a,y.signal,c);B.set(r,y);let b=Y,w=await en("action",g,u,s,f,t,v);if(g.signal.aborted){// We can delete this so long as we weren't aborted by ou our own fetcher
// re-submit which would have put _new_ controller is in fetchControllers
B.get(r)===y&&B.delete(r);return}if(em(w)){if(B.delete(r),Z>b){// A new navigation was kicked off after our action started, so that
// should take precedence over this redirect navigation.  We already
// set isRevalidationRequired so all loaders for the new route should
// fire unless opted out via shouldRevalidate
let e=eE(void 0);T.fetchers.set(r,e),e_({fetchers:new Map(T.fetchers)});return}{et.add(r);let e=ek(c);return T.fetchers.set(r,e),e_({fetchers:new Map(T.fetchers)}),eA(T,w,{fetcherSubmission:c})}}// Process any non-redirect errors thrown
if(eh(w)){eI(r,o,w.error);return}if(ep(w))throw ec(400,{type:"defer-action"});// Start the data load for current matches, or the next location if we're
// in the middle of a navigation
let x=T.navigation.location||T.location,k=er(e.history,x,y.signal),E=n||h,_="idle"!==T.navigation.state?S(E,T.navigation.location,v):T.matches;d(_,"Didn't find any matches after fetcher action");let C=++Y;ee.set(r,C);let j=ek(c,w.data);T.fetchers.set(r,j);let[P,R]=J(e.history,T,_,c,x,z,F,U,eo,et,E,v,{[u.route.id]:w.data},void 0// No need to send through errors since we short circuit above
);// Put all revalidating fetchers into the loading state, except for the
// current fetcher which we want to keep in it's current loading state which
// contains it's action submission info + action data
R.filter(e=>e.key!==r).forEach(e=>{let t=e.key,n=T.fetchers.get(t),r=ek(void 0,n?n.data:void 0);T.fetchers.set(t,r),B.has(t)&&eF(t),e.controller&&B.set(t,e.controller)}),e_({fetchers:new Map(T.fetchers)});let O=()=>R.forEach(e=>eF(e.key));y.signal.addEventListener("abort",O);let{results:L,loaderResults:A,fetcherResults:M}=await eM(T.matches,_,P,R,k);if(y.signal.aborted)return;y.signal.removeEventListener("abort",O),ee.delete(r),B.delete(r),R.forEach(e=>B.delete(e.key));let D=ef(L);if(D){if(D.idx>=P.length){// If this redirect came from a fetcher make sure we mark it in
// fetchRedirectIds so it doesn't get revalidated on the next set of
// loader executions
let e=R[D.idx-P.length].key;et.add(e)}return eA(T,D.result)}// Process and commit output from loaders
let{loaderData:I,errors:$}=ei(T,T.matches,P,A,void 0,R,M,ea);// Since we let revalidations complete even if the submitting fetcher was
// deleted, only put it back to idle if it hasn't been deleted
if(T.fetchers.has(r)){let e=eE(w.data);T.fetchers.set(r,e)}let V=e$(C);"loading"===T.navigation.state&&C>Z?(d(N,"Expected pending action"),i&&i.abort(),eC(T.navigation.location,{matches:_,loaderData:I,errors:$,fetchers:new Map(T.fetchers)})):(// otherwise just update with the fetcher data, preserving any existing
// loaderData for loaders that did not need to reload.  We have to
// manually merge here since we aren't going through completeNavigation
e_(l({errors:$,loaderData:el(T.loaderData,I,_,$)},V||R.length>0?{fetchers:new Map(T.fetchers)}:{})),z=!1)}// Call the matched loader for fetcher.load(), handling redirects, errors, etc.
async function eL(n,r,o,a,i,l){let u=T.fetchers.get(n),s=ek(l,u?u.data:void 0);T.fetchers.set(n,s),e_({fetchers:new Map(T.fetchers)});// Call the loader for this fetcher route match
let c=new AbortController,p=er(e.history,o,c.signal);B.set(n,c);let h=Y,m=await en("loader",p,a,i,f,t,v);if(ep(m)&&(m=await eg(m,p.signal,!0)||m),B.get(n)===c&&B.delete(n),p.signal.aborted)return;// If the loader threw a redirect Response, start a new REPLACE navigation
if(em(m)){if(Z>h){// A new navigation was kicked off after our loader started, so that
// should take precedence over this redirect navigation
let e=eE(void 0);T.fetchers.set(n,e),e_({fetchers:new Map(T.fetchers)});return}et.add(n),await eA(T,m);return}// Process any non-redirect errors thrown
if(eh(m)){let e=eu(T.matches,r);T.fetchers.delete(n),// TODO: In remix, this would reset to IDLE_NAVIGATION if it was a catch -
// do we need to behave any differently with our non-redirect errors?
// What if it was a non-redirect Response?
e_({fetchers:new Map(T.fetchers),errors:{[e.route.id]:m.error}});return}d(!ep(m),"Unhandled fetcher deferred data");// Put the fetcher back into an idle state
let y=eE(m.data);T.fetchers.set(n,y),e_({fetchers:new Map(T.fetchers)})}/**
   * Utility function to handle redirects returned from an action or loader.
   * Normally, a redirect "replaces" the navigation that triggered it.  So, for
   * example:
   *
   *  - user is on /a
   *  - user clicks a link to /b
   *  - loader for /b redirects to /c
   *
   * In a non-JS app the browser would track the in-flight navigation to /b and
   * then replace it with /c when it encountered the redirect response.  In
   * the end it would only ever update the URL bar with /c.
   *
   * In client-side routing using pushState/replaceState, we aim to emulate
   * this behavior and we also do not update history until the end of the
   * navigation (including processed redirects).  This means that we never
   * actually touch history until we've processed redirects, so we just use
   * the history action from the original navigation (PUSH or REPLACE).
   */async function eA(t,n,o){let{submission:a,fetcherSubmission:c,replace:f}=void 0===o?{}:o;n.revalidate&&(z=!0);let p=m(t.location,n.location,{_isRedirect:!0});if(d(p,"Expected a location on the redirect navigation"),s){let t=!1;if(n.reloadDocument)t=!0;else if(q.test(n.location)){let r=e.history.createURL(n.location);t=r.origin!==u.location.origin||// Hard reload if it's an absolute URL that does not match our basename
null==C(r.pathname,v)}if(t){f?u.location.replace(n.location):u.location.assign(n.location);return}}// There's no need to abort on redirects, since we don't detect the
// redirect until the action/loaders have settled
i=null;let h=!0===f?r.Replace:r.Push,{formMethod:y,formAction:g,formEncType:b}=t.navigation;!a&&!c&&y&&g&&b&&(a=eS(t.navigation));// If this was a 307/308 submission we want to preserve the HTTP method and
// re-submit the GET/POST/PUT/PATCH/DELETE as a submission navigation to the
// redirected location
let w=a||c;if($.has(n.status)&&w&&ev(w.formMethod))await eP(h,p,{submission:l({},w,{formAction:n.location}),// Preserve this flag across redirects
preventScrollReset:L});else{// If we have a navigation submission, we will preserve it through the
// redirect navigation
let e=ex(p,a);await eP(h,p,{overrideNavigation:e,fetcherSubmission:c,// Preserve this flag across redirects
preventScrollReset:L})}}async function eM(n,r,a,i,l){// Call all navigation loaders and revalidating fetcher loaders in parallel,
// then slice off the results into separate arrays so we can handle them
// accordingly
let u=await Promise.all([...a.map(e=>en("loader",l,e,r,f,t,v)),...i.map(n=>n.matches&&n.match&&n.controller?en("loader",er(e.history,n.path,n.controller.signal),n.match,n.matches,f,t,v):{type:o.error,error:ec(404,{pathname:n.path})})]),s=u.slice(0,a.length),c=u.slice(a.length);return await Promise.all([ey(n,a,s,s.map(()=>l.signal),!1,T.loaderData),ey(n,i.map(e=>e.match),c,i.map(e=>e.controller?e.controller.signal:null),!0)]),{results:u,loaderResults:s,fetcherResults:c}}function eD(){// Every interruption triggers a revalidation
z=!0,// Cancel pending route-level deferreds and mark cancelled routes for
// revalidation
F.push(...eq()),// Abort in-flight fetcher loads
eo.forEach((e,t)=>{B.has(t)&&(U.push(t),eF(t))})}function eI(e,t,n){let r=eu(T.matches,t);ez(e),e_({errors:{[r.route.id]:n},fetchers:new Map(T.fetchers)})}function ez(e){let t=T.fetchers.get(e);B.has(e)&&!(t&&"loading"===t.state&&ee.has(e))&&eF(e),eo.delete(e),ee.delete(e),et.delete(e),T.fetchers.delete(e)}function eF(e){let t=B.get(e);d(t,"Expected fetch controller: "+e),t.abort(),B.delete(e)}function eU(e){for(let t of e){let e=eE(eT(t).data);T.fetchers.set(t,e)}}function eB(){let e=[],t=!1;for(let n of et){let r=T.fetchers.get(n);d(r,"Expected fetcher: "+n),"loading"===r.state&&(et.delete(n),e.push(n),t=!0)}return eU(e),t}function e$(e){let t=[];for(let[n,r]of ee)if(r<e){let e=T.fetchers.get(n);d(e,"Expected fetcher: "+n),"loading"===e.state&&(eF(n),ee.delete(n),t.push(n))}return eU(t),t.length>0}function eV(e){T.blockers.delete(e),ed.delete(e)}// Utility function to update blockers, ensuring valid state transitions
function eW(e,t){let n=T.blockers.get(e)||H;// Poor mans state machine :)
// https://mermaid.live/edit#pako:eNqVkc9OwzAMxl8l8nnjAYrEtDIOHEBIgwvKJTReGy3_lDpIqO27k6awMG0XcrLlnz87nwdonESogKXXBuE79rq75XZO3-yHds0RJVuv70YrPlUrCEe2HfrORS3rubqZfuhtpg5C9wk5tZ4VKcRUq88q9Z8RS0-48cE1iHJkL0ugbHuFLus9L6spZy8nX9MP2CNdomVaposqu3fGayT8T8-jJQwhepo_UtpgBQaDEUom04dZhAN1aJBDlUKJBxE1ceB2Smj0Mln-IBW5AFU2dwUiktt_2Qaq2dBfaKdEup85UV7Yd-dKjlnkabl2Pvr0DTkTreM
d("unblocked"===n.state&&"blocked"===t.state||"blocked"===n.state&&"blocked"===t.state||"blocked"===n.state&&"proceeding"===t.state||"blocked"===n.state&&"unblocked"===t.state||"proceeding"===n.state&&"unblocked"===t.state,"Invalid blocker state transition: "+n.state+" -> "+t.state);let r=new Map(T.blockers);r.set(e,t),e_({blockers:r})}function eH(e){let{currentLocation:t,nextLocation:n,historyAction:r}=e;if(0===ed.size)return;// We ony support a single active blocker at the moment since we don't have
// any compelling use cases for multi-blocker yet
ed.size>1&&p(!1,"A router only supports one blocker at a time");let o=Array.from(ed.entries()),[a,i]=o[o.length-1],l=T.blockers.get(a);if((!l||"proceeding"!==l.state)&&i({currentLocation:t,nextLocation:n,historyAction:r}))return a}function eq(e){let t=[];return ea.forEach((n,r)=>{(!e||e(r))&&(// Cancel the deferred - but do not remove from activeDeferreds here -
// we rely on the subscribers to do that so our tests can assert proper
// cleanup via _internalActiveDeferreds
n.cancel(),t.push(r),ea.delete(r))}),t}function eQ(e,t){return E&&E(e,t.map(e=>x(e,T.loaderData)))||e.key}function eK(e,t){if(k){let n=k[eQ(e,t)];if("number"==typeof n)return n}return null}return a={get basename(){return v},get state(){return T},get routes(){return h},get window(){return u},initialize:// Initialize the router, all side effects should be kicked off from here.
// Implemented as a Fluent API for ease of:
//   let router = createRouter(init).initialize();
function(){if(// If history informs us of a POP navigation, start the navigation but do not update
// state.  We'll update our own state once the navigation completes
g=e.history.listen(t=>{let{action:n,location:r,delta:o}=t;// Ignore this event if it was just us resetting the URL from a
// blocked POP navigation
if(eb){eb=!1;return}p(0===ed.size||null!=o,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let a=eH({currentLocation:T.location,nextLocation:r,historyAction:n});if(a&&null!=o){// Restore the URL to match the current UI, but don't update router state
eb=!0,e.history.go(-1*o),// Put the blocker into a blocked state
eW(a,{state:"blocked",location:r,proceed(){eW(a,{state:"proceeding",proceed:void 0,reset:void 0,location:r}),// Re-do the same POP navigation we just blocked
e.history.go(o)},reset(){let e=new Map(T.blockers);e.set(a,H),e_({blockers:e})}});return}return eP(n,r)}),s){// FIXME: This feels gross.  How can we cleanup the lines between
// scrollRestoration/appliedTransitions persistance?
(function(e,t){try{let n=e.sessionStorage.getItem(K);if(n){let e=JSON.parse(n);for(let[n,r]of Object.entries(e||{}))r&&Array.isArray(r)&&t.set(n,new Set(r||[]))}}catch(e){// no-op, use default empty object
}})(u,M);let e=()=>(function(e,t){if(t.size>0){let n={};for(let[e,r]of t)n[e]=[...r];try{e.sessionStorage.setItem(K,JSON.stringify(n))}catch(e){p(!1,"Failed to save applied view transitions in sessionStorage ("+e+").")}}})(u,M);u.addEventListener("pagehide",e),D=()=>u.removeEventListener("pagehide",e)}return T.initialized||eP(r.Pop,T.location),a},subscribe:// Subscribe to state updates for the router
function(e){return b.add(e),()=>b.delete(e)},enableScrollRestoration:// Opt in to capturing and reporting scroll positions during navigations,
// used by the <ScrollRestoration> component
function(e,t,n){// Perform initial hydration scroll restoration, since we miss the boat on
// the initial updateState() because we've not yet rendered <ScrollRestoration/>
// and therefore have no savedScrollPositions available
if(k=e,_=t,E=n||null,!j&&T.navigation===V){j=!0;let e=eK(T.location,T.matches);null!=e&&e_({restoreScrollPosition:e})}return()=>{k=null,_=null,E=null}},navigate:ej,fetch:// Trigger a fetcher load/submit for the given fetcher key
function(e,t,r,o){if(c)throw Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");B.has(e)&&eF(e);let a=n||h,i=X(T.location,T.matches,v,y.v7_prependBasename,r,t,null==o?void 0:o.relative),l=S(a,i,v);if(!l){eI(e,t,ec(404,{pathname:i}));return}let{path:u,submission:s,error:f}=G(y.v7_normalizeFormMethod,!0,i,o);if(f){eI(e,t,f);return}let d=ew(l,u);if(L=!0===(o&&o.preventScrollReset),s&&ev(s.formMethod)){eN(e,t,u,d,l,s);return}// Store off the match so we can call it's shouldRevalidate on subsequent
// revalidations
eo.set(e,{routeId:t,path:u}),eL(e,t,u,d,l,s)},revalidate:// Revalidate all current loaders.  If a navigation is in progress or if this
// is interrupted by a navigation, allow this to "succeed" by calling all
// loaders during the next loader round
function(){// If we're currently submitting an action, we don't need to start a new
// navigation, we'll just let the follow up loader execution call all loaders
if(eD(),e_({revalidation:"loading"}),"submitting"!==T.navigation.state){// If we're currently in an idle state, start a new navigation for the current
// action/location and mark it as uninterrupted, which will skip the history
// update in completeNavigation
if("idle"===T.navigation.state){eP(T.historyAction,T.location,{startUninterruptedRevalidation:!0});return}// Otherwise, if we're currently in a loading state, just start a new
// navigation to the navigation.location but do not trigger an uninterrupted
// revalidation so that history correctly updates once the navigation completes
eP(N||T.historyAction,T.navigation.location,{overrideNavigation:T.navigation})}},// Passthrough to history-aware createHref used by useHref so we get proper
// hash-aware URLs in DOM paths
createHref:t=>e.history.createHref(t),encodeLocation:t=>e.history.encodeLocation(t),getFetcher:eT,deleteFetcher:ez,dispose:// Clean up a router and it's side effects
function(){g&&g(),D&&D(),b.clear(),i&&i.abort(),T.fetchers.forEach((e,t)=>ez(t)),T.blockers.forEach((e,t)=>eV(t))},getBlocker:function(e,t){let n=T.blockers.get(e)||H;return ed.get(e)!==t&&ed.set(e,t),n},deleteBlocker:eV,_internalFetchControllers:B,_internalActiveDeferreds:ea,_internalSetRoutes:function(e){n=w(e,t,void 0,f={})}}}function X(e,t,n,r,o,a,i){let l,u;if(null!=a&&"path"!==i){for(let e of(// Grab matches up to the calling route so our route-relative logic is
// relative to the correct source route.  When using relative:path,
// fromRouteId is ignored since that is always relative to the current
// location path
l=[],t))if(l.push(e),e.route.id===a){u=e;break}}else l=t,u=t[t.length-1];// Resolve the relative path
let s=R(o||".",P(l).map(e=>e.pathnameBase),C(e.pathname,n)||e.pathname,"path"===i);return null==o&&(s.search=e.search,s.hash=e.hash),(null==o||""===o||"."===o)&&u&&u.route.index&&!eb(s.search)&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),r&&"/"!==n&&(s.pathname="/"===s.pathname?n:O([n,s.pathname])),v(s)}// Normalize navigation options by converting formMethod=GET formData objects to
// URLSearchParams so they behave identically to links with query params
function G(e,t,n,r){var o;let a,i;// Return location verbatim on non-submission navigations
if(!r||!(null!=r&&("formData"in r&&null!=r.formData||"body"in r&&void 0!==r.body)))return{path:n};if(r.formMethod&&(o=r.formMethod,!U.has(o.toLowerCase())))return{path:n,error:ec(405,{method:r.formMethod})};let l=()=>({path:n,error:ec(400,{type:"invalid-body"})}),u=r.formMethod||"get",s=e?u.toUpperCase():u.toLowerCase(),c=ed(n);if(void 0!==r.body){if("text/plain"===r.formEncType){// text only support POST/PUT/PATCH/DELETE submissions
if(!ev(s))return l();let e="string"==typeof r.body?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((e,t)=>{let[n,r]=t;return""+e+n+"="+r+"\n"},""):String(r.body);return{path:n,submission:{formMethod:s,formAction:c,formEncType:r.formEncType,formData:void 0,json:void 0,text:e}}}if("application/json"===r.formEncType){// json only supports POST/PUT/PATCH/DELETE submissions
if(!ev(s))return l();try{let e="string"==typeof r.body?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:s,formAction:c,formEncType:r.formEncType,formData:void 0,json:e,text:void 0}}}catch(e){return l()}}}if(d("function"==typeof FormData,"FormData is not available in this environment"),r.formData)a=eo(r.formData),i=r.formData;else if(r.body instanceof FormData)a=eo(r.body),i=r.body;else if(r.body instanceof URLSearchParams)i=ea(a=r.body);else if(null==r.body)a=new URLSearchParams,i=new FormData;else try{a=new URLSearchParams(r.body),i=ea(a)}catch(e){return l()}let f={formMethod:s,formAction:c,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:i,json:void 0,text:void 0};if(ev(f.formMethod))return{path:n,submission:f};// Flatten submission onto URLSearchParams for GET submissions
let p=y(n);return t&&p.search&&eb(p.search)&&a.append("index",""),p.search="?"+a,{path:v(p),submission:f}}function J(e,t,n,r,o,a,i,u,s,c,f,d,p,h){let m=h?Object.values(h)[0]:p?Object.values(p)[0]:void 0,v=e.createURL(t.location),y=e.createURL(o),g=// Filter out all routes below any caught error as they aren't going to
// render so we don't need to load them
(function(e,t){let n=e;if(t){let r=e.findIndex(e=>e.route.id===t);r>=0&&(n=e.slice(0,r))}return n})(n,h?Object.keys(h)[0]:void 0).filter((e,n)=>{var o,u;let s,c;if(e.route.lazy)return!0;if(null==e.route.loader)return!1;// Always call the loader on new route instances and pending defer cancellations
if(o=t.loaderData,s=!(u=t.matches[n])||// [a, b] -> [a, c]
e.route.id!==u.route.id,c=void 0===o[e.route.id],s||c||i.some(t=>t===e.route.id))return!0;// This is the default implementation for when we revalidate.  If the route
// provides it's own implementation, then we give them full control but
// provide this value so they can leverage it if needed after they check
// their own specific use cases
let f=t.matches[n];return ee(e,l({currentUrl:v,currentParams:f.params,nextUrl:y,nextParams:e.params},r,{actionResult:m,defaultShouldRevalidate:a||// Clicked the same link, resubmitted a GET form
v.pathname+v.search===y.pathname+y.search||// Search params affect all loaders
v.search!==y.search||Z(f,e)}))}),b=[];return s.forEach((e,o)=>{// Don't revalidate if fetcher won't be present in the subsequent render
if(!n.some(t=>t.route.id===e.routeId))return;let i=S(f,e.path,d);// If the fetcher path no longer matches, push it in with null matches so
// we can trigger a 404 in callLoadersAndMaybeResolveData.  Note this is
// currently only a use-case for Remix HMR where the route tree can change
// at runtime and remove a route previously loaded via a fetcher
if(!i){b.push({key:o,routeId:e.routeId,path:e.path,matches:null,match:null,controller:null});return}// Revalidating fetchers are decoupled from the route matches since they
// load from a static href.  They revalidate based on explicit revalidation
// (submission, useRevalidator, or X-Remix-Revalidate)
let s=t.fetchers.get(o),p=ew(i,e.path);!c.has(o)&&(u.includes(o)||(s&&"idle"!==s.state&&void 0===s.data?a:ee(p,l({currentUrl:v,currentParams:t.matches[t.matches.length-1].params,nextUrl:y,nextParams:n[n.length-1].params},r,{actionResult:m,defaultShouldRevalidate:a}))))&&b.push({key:o,routeId:e.routeId,path:e.path,matches:i,match:p,controller:new AbortController})}),[g,b]}function Z(e,t){let n=e.route.path;return e.pathname!==t.pathname||// splat param changed, which is not present in match.path
// e.g. /files/images/avatar.jpg -> files/finances.xls
null!=n&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function ee(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if("boolean"==typeof n)return n}return t.defaultShouldRevalidate}/**
 * Execute route.lazy() methods to lazily load route modules (loader, action,
 * shouldRevalidate) and update the routeManifest in place which shares objects
 * with dataRoutes so those get updated as well.
 */async function et(e,t,n){if(!e.lazy)return;let r=await e.lazy();// If the lazy route function was executed and removed by another parallel
// call then we can return - first lazy() to finish wins because the return
// value of lazy is expected to be static
if(!e.lazy)return;let o=n[e.id];d(o,"No route found in manifest");// Update the route in place.  This should be safe because there's no way
// we could yet be sitting on this route as we can't get there without
// resolving lazy() first.
//
// This is different than the HMR "update" use-case where we may actively be
// on the route being updated.  The main concern boils down to "does this
// mutation affect any ongoing navigations or any current state.matches
// values?".  If not, it should be safe to update in place.
let a={};for(let e in r){let t=void 0!==o[e]&&// This property isn't static since it should always be updated based
// on the route updates
"hasErrorBoundary"!==e;p(!t,'Route "'+o.id+'" has a static property "'+e+'" defined but its lazy function is also returning a value for this property. The lazy route property "'+e+'" will be ignored.'),t||b.has(e)||(a[e]=r[e])}// Mutate the route with the provided updates.  Do this first so we pass
// the updated version to mapRouteProperties
Object.assign(o,a),// Mutate the `hasErrorBoundary` property on the route based on the route
// updates and remove the `lazy` function so we don't resolve the lazy
// route again.
Object.assign(o,l({},t(o),{lazy:void 0}))}async function en(e,t,n,r,a,i,l,u){var s,c,f,p;let h,m,v;void 0===u&&(u={});let y=e=>{let r;let o=new Promise((e,t)=>r=t);return v=()=>r(),t.signal.addEventListener("abort",v),Promise.race([e({request:t,params:n.params,context:u.requestContext}),o])};try{let r=n.route[e];if(n.route.lazy){if(r){let e;let t=await Promise.all([// If the handler throws, don't let it immediately bubble out,
// since we need to let the lazy() execution finish so we know if this
// route has a boundary that can handle the error
y(r).catch(t=>{e=t}),et(n.route,i,a)]);if(e)throw e;m=t[0]}else if(// Load lazy route module, then run any returned handler
await et(n.route,i,a),r=n.route[e])// with un-abortable behavior of handler execution on non-lazy or
// previously-lazy-loaded routes
m=await y(r);else{if("action"!==e)// hit the invariant below that errors on returning undefined.
return{type:o.data,data:void 0};let r=new URL(t.url),a=r.pathname+r.search;throw ec(405,{method:t.method,pathname:a,routeId:n.route.id})}}else if(r)m=await y(r);else{let e=new URL(t.url),n=e.pathname+e.search;throw ec(404,{pathname:n})}d(void 0!==m,"You defined "+("action"===e?"an action":"a loader")+" for route "+('"'+n.route.id)+"\" but didn't return anything from your `"+e+"` function. Please return a value or `null`.")}catch(e){h=o.error,m=e}finally{v&&t.signal.removeEventListener("abort",v)}if(null!=(s=m)&&"number"==typeof s.status&&"string"==typeof s.statusText&&"object"==typeof s.headers&&void 0!==s.body){let e,a=m.status;// Process redirects
if(B.has(a)){let e=m.headers.get("Location");// Support relative routing in internal redirects
if(d(e,"Redirects returned/thrown from loaders/actions must have a Location header"),q.test(e)){if(!u.isStaticRequest){// Strip off the protocol+origin for same-origin + same-basename absolute
// redirects. If this is a static request, we can let it go back to the
// browser as-is
let n=new URL(t.url),r=new URL(e.startsWith("//")?n.protocol+e:e),o=null!=C(r.pathname,l);r.origin===n.origin&&o&&(e=r.pathname+r.search+r.hash)}}else e=X(new URL(t.url),r.slice(0,r.indexOf(n)+1),l,!0,e);// Don't process redirects in the router during static requests requests.
// Instead, throw the Response and let the server handle it with an HTTP
// redirect.  We also update the Location header in place in this flow so
// basename and relative routing is taken into account
if(u.isStaticRequest)throw m.headers.set("Location",e),m;return{type:o.redirect,status:a,location:e,revalidate:null!==m.headers.get("X-Remix-Revalidate"),reloadDocument:null!==m.headers.get("X-Remix-Reload-Document")}}// For SSR single-route requests, we want to hand Responses back directly
// without unwrapping.  We do this with the QueryRouteResponse wrapper
// interface so we can know whether it was returned or thrown
if(u.isRouteRequest)throw{type:h===o.error?o.error:o.data,response:m};let i=m.headers.get("Content-Type");return(e=i&&/\bapplication\/json\b/.test(i)?await m.json():await m.text(),h===o.error)?{type:h,error:new M(a,m.statusText,e),headers:m.headers}:{type:o.data,data:e,statusCode:m.status,headers:m.headers}}return h===o.error?{type:h,error:m}:(c=m)&&"object"==typeof c&&"object"==typeof c.data&&"function"==typeof c.subscribe&&"function"==typeof c.cancel&&"function"==typeof c.resolveData?{type:o.deferred,deferredData:m,statusCode:null==(f=m.init)?void 0:f.status,headers:(null==(p=m.init)?void 0:p.headers)&&new Headers(m.init.headers)}:{type:o.data,data:m}}// Utility method for creating the Request instances for loaders/actions during
// client-side navigations and fetches.  During SSR we will always have a
// Request instance from the static handler (query/queryRoute)
function er(e,t,n,r){let o=e.createURL(ed(t)).toString(),a={signal:n};if(r&&ev(r.formMethod)){let{formMethod:e,formEncType:t}=r;// Didn't think we needed this but it turns out unlike other methods, patch
// won't be properly normalized to uppercase and results in a 405 error.
// See: https://fetch.spec.whatwg.org/#concept-method
a.method=e.toUpperCase(),"application/json"===t?(a.headers=new Headers({"Content-Type":t}),a.body=JSON.stringify(r.json)):"text/plain"===t?a.body=r.text:"application/x-www-form-urlencoded"===t&&r.formData?a.body=eo(r.formData):a.body=r.formData}return new Request(o,a)}function eo(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,"string"==typeof r?r:r.name);return t}function ea(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function ei(e,t,n,r,o,a,i,u){var s;let c,f,p,h,m;let{loaderData:v,errors:y}=(s=o,f={},p=null,h=!1,m={},// Process loader results into state.loaderData/state.errors
r.forEach((e,r)=>{let o=n[r].route.id;if(d(!em(e),"Cannot handle redirect results in processLoaderData"),eh(e)){// Look upwards from the matched route for the closest ancestor
// error boundary, defaulting to the root match
let n=eu(t,o),r=e.error;s&&(r=Object.values(s)[0],s=void 0),null==(p=p||{})[n.route.id]&&(p[n.route.id]=r),// Clear our any prior loaderData for the throwing route
f[o]=void 0,h||(h=!0,c=D(e.error)?e.error.status:500),e.headers&&(m[o]=e.headers)}else ep(e)?(u.set(o,e.deferredData),f[o]=e.deferredData.data):f[o]=e.data,null==e.statusCode||200===e.statusCode||h||(c=e.statusCode),e.headers&&(m[o]=e.headers)}),s&&(p=s,f[Object.keys(s)[0]]=void 0),{loaderData:f,errors:p,statusCode:c||200,loaderHeaders:m});// Process results from our revalidating fetchers
for(let t=0;t<a.length;t++){let{key:n,match:r,controller:o}=a[t];d(void 0!==i&&void 0!==i[t],"Did not find corresponding fetcher result");let u=i[t];// Process fetcher non-redirect errors
if(!o||!o.signal.aborted){if(eh(u)){let t=eu(e.matches,null==r?void 0:r.route.id);y&&y[t.route.id]||(y=l({},y,{[t.route.id]:u.error})),e.fetchers.delete(n)}else if(em(u))// keep this to type narrow to a success result in the else
d(!1,"Unhandled fetcher revalidation redirect");else if(ep(u))// in resolveDeferredResults
d(!1,"Unhandled fetcher deferred data");else{let t=eE(u.data);e.fetchers.set(n,t)}}}return{loaderData:v,errors:y}}function el(e,t,n,r){let o=l({},t);for(let a of n){let n=a.route.id;if(t.hasOwnProperty(n)?void 0!==t[n]&&(o[n]=t[n]):void 0!==e[n]&&a.route.loader&&// wasn't removed by HMR
(o[n]=e[n]),r&&r.hasOwnProperty(n))break}return o}// Find the nearest error boundary, looking upwards from the leaf route (or the
// route specified by routeId) for the closest ancestor error boundary,
// defaulting to the root match
function eu(e,t){return(t?e.slice(0,e.findIndex(e=>e.route.id===t)+1):[...e]).reverse().find(e=>!0===e.route.hasErrorBoundary)||e[0]}function es(e){// Prefer a root layout route if present, otherwise shim in a route object
let t=1===e.length?e[0]:e.find(e=>e.index||!e.path||"/"===e.path)||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function ec(e,t){let{pathname:n,routeId:r,method:o,type:a}=void 0===t?{}:t,i="Unknown Server Error",l="Unknown @remix-run/router error";return 400===e?(i="Bad Request",o&&n&&r?l="You made a "+o+' request to "'+n+'" but did not provide a `loader` for route "'+r+'", so there is no way to handle the request.':"defer-action"===a?l="defer() is not supported in actions":"invalid-body"===a&&(l="Unable to encode submission body")):403===e?(i="Forbidden",l='Route "'+r+'" does not match URL "'+n+'"'):404===e?(i="Not Found",l='No route matches URL "'+n+'"'):405===e&&(i="Method Not Allowed",o&&n&&r?l="You made a "+o.toUpperCase()+' request to "'+n+'" but did not provide an `action` for route "'+r+'", so there is no way to handle the request.':o&&(l='Invalid request method "'+o.toUpperCase()+'"')),new M(e||500,i,Error(l),!0)}// Find any returned redirect errors, starting from the lowest match
function ef(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(em(n))return{result:n,idx:t}}}function ed(e){let t="string"==typeof e?y(e):e;return v(l({},t,{hash:""}))}function ep(e){return e.type===o.deferred}function eh(e){return e.type===o.error}function em(e){return(e&&e.type)===o.redirect}function ev(e){return z.has(e.toLowerCase())}async function ey(e,t,n,r,o,a){for(let i=0;i<n.length;i++){let l=n[i],u=t[i];// If we don't have a match, then we can have a deferred result to do
// anything with.  This is for revalidating fetchers where the route was
// removed during HMR
if(!u)continue;let s=e.find(e=>e.route.id===u.route.id),c=null!=s&&!Z(s,u)&&(a&&a[u.route.id])!==void 0;if(ep(l)&&(o||c)){// Note: we do not have to touch activeDeferreds here since we race them
// against the signal in resolveDeferredData and they'll get aborted
// there if needed
let e=r[i];d(e,"Expected an AbortSignal for revalidating fetcher deferred result"),await eg(l,e,o).then(e=>{e&&(n[i]=e||n[i])})}}}async function eg(e,t,n){if(void 0===n&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:o.data,data:e.deferredData.unwrappedData}}catch(e){// Handle any TrackedPromise._error values encountered while unwrapping
return{type:o.error,error:e}}return{type:o.data,data:e.deferredData.data}}}function eb(e){return new URLSearchParams(e).getAll("index").some(e=>""===e)}function ew(e,t){let n="string"==typeof t?y(t).search:t.search;if(e[e.length-1].route.index&&eb(n||""))return e[e.length-1];// Otherwise grab the deepest "path contributing" match (ignoring index and
// pathless layout routes)
let r=P(e);return r[r.length-1]}function eS(e){let{formMethod:t,formAction:n,formEncType:r,text:o,formData:a,json:i}=e;if(t&&n&&r){if(null!=o)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:o};if(null!=a)return{formMethod:t,formAction:n,formEncType:r,formData:a,json:void 0,text:void 0};if(void 0!==i)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:i,text:void 0}}}function ex(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function ek(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function eE(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}Symbol("deferred")}),p("fmRNI",function(t,n){e(t.exports,"default",function(){return a});var r=d("4Iuzv");let o=/*#__PURE__*/(0,r.createContext)({user:{name:"Dummy Name",email:"dummy@gmail.com"}});o.displayName="UserContext";var a=o}),p("bU61Z",function(t,n){e(t.exports,"useSyncExternalStore",function(){return r},function(e){return r=e});var r,o=d("4Iuzv"),a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=o.useState,l=o.useEffect,u=o.useLayoutEffect,s=o.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!a(e,n)}catch(e){return!0}}var f="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=i({inst:{value:n,getSnapshot:t}}),o=r[0].inst,a=r[1];return u(function(){o.value=n,o.getSnapshot=t,c(o)&&a({inst:o})},[e,n,t]),l(function(){return c(o)&&a({inst:o}),e(function(){c(o)&&a({inst:o})})},[e]),s(n),n};r=void 0!==o.useSyncExternalStore?o.useSyncExternalStore:f}),p("lCXfb",function(t,n){e(t.exports,"useSyncExternalStoreWithSelector",function(){return r},function(e){return r=e});var r,o=d("4Iuzv"),a=d("lhInO"),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},l=a.useSyncExternalStore,u=o.useRef,s=o.useEffect,c=o.useMemo,f=o.useDebugValue;r=function(e,t,n,r,o){var a=u(null);if(null===a.current){var d={hasValue:!1,value:null};a.current=d}else d=a.current;var p=l(e,(a=c(function(){function e(e){if(!u){if(u=!0,a=e,e=r(e),void 0!==o&&d.hasValue){var t=d.value;if(o(t,e))return l=t}return l=e}if(t=l,i(a,e))return t;var n=r(e);return void 0!==o&&o(t,n)?t:(a=e,l=n)}var a,l,u=!1,s=void 0===n?null:n;return[function(){return e(t())},null===s?void 0:function(){return e(s())}]},[t,n,r,o]))[0],a[1]);return s(function(){d.hasValue=!0,d.value=p},[p]),f(p),p}}),p("lhInO",function(e,t){e.exports=d("bU61Z")}),p("d21w1",function(t,n){e(t.exports,"AsyncMode",function(){return r},function(e){return r=e}),e(t.exports,"ConcurrentMode",function(){return o},function(e){return o=e}),e(t.exports,"ContextConsumer",function(){return a},function(e){return a=e}),e(t.exports,"ContextProvider",function(){return i},function(e){return i=e}),e(t.exports,"Element",function(){return l},function(e){return l=e}),e(t.exports,"ForwardRef",function(){return u},function(e){return u=e}),e(t.exports,"Fragment",function(){return s},function(e){return s=e}),e(t.exports,"Lazy",function(){return c},function(e){return c=e}),e(t.exports,"Memo",function(){return f},function(e){return f=e}),e(t.exports,"Portal",function(){return d},function(e){return d=e}),e(t.exports,"Profiler",function(){return p},function(e){return p=e}),e(t.exports,"StrictMode",function(){return h},function(e){return h=e}),e(t.exports,"Suspense",function(){return m},function(e){return m=e}),e(t.exports,"isAsyncMode",function(){return v},function(e){return v=e}),e(t.exports,"isConcurrentMode",function(){return y},function(e){return y=e}),e(t.exports,"isContextConsumer",function(){return g},function(e){return g=e}),e(t.exports,"isContextProvider",function(){return b},function(e){return b=e}),e(t.exports,"isElement",function(){return w},function(e){return w=e}),e(t.exports,"isForwardRef",function(){return S},function(e){return S=e}),e(t.exports,"isFragment",function(){return x},function(e){return x=e}),e(t.exports,"isLazy",function(){return k},function(e){return k=e}),e(t.exports,"isMemo",function(){return E},function(e){return E=e}),e(t.exports,"isPortal",function(){return _},function(e){return _=e}),e(t.exports,"isProfiler",function(){return C},function(e){return C=e}),e(t.exports,"isStrictMode",function(){return j},function(e){return j=e}),e(t.exports,"isSuspense",function(){return P},function(e){return P=e}),e(t.exports,"isValidElementType",function(){return R},function(e){return R=e}),e(t.exports,"typeOf",function(){return O},function(e){return O=e});var r,o,a,i,l,u,s,c,f,d,p,h,m,v,y,g,b,w,S,x,k,E,_,C,j,P,R,O,T="function"==typeof Symbol&&Symbol.for,N=T?Symbol.for("react.element"):60103,L=T?Symbol.for("react.portal"):60106,A=T?Symbol.for("react.fragment"):60107,M=T?Symbol.for("react.strict_mode"):60108,D=T?Symbol.for("react.profiler"):60114,I=T?Symbol.for("react.provider"):60109,z=T?Symbol.for("react.context"):60110,F=T?Symbol.for("react.async_mode"):60111,U=T?Symbol.for("react.concurrent_mode"):60111,B=T?Symbol.for("react.forward_ref"):60112,$=T?Symbol.for("react.suspense"):60113,V=T?Symbol.for("react.suspense_list"):60120,W=T?Symbol.for("react.memo"):60115,H=T?Symbol.for("react.lazy"):60116,q=T?Symbol.for("react.block"):60121,Q=T?Symbol.for("react.fundamental"):60117,K=T?Symbol.for("react.responder"):60118,Y=T?Symbol.for("react.scope"):60119;function X(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case N:switch(e=e.type){case F:case U:case A:case D:case M:case $:return e;default:switch(e=e&&e.$$typeof){case z:case B:case H:case W:case I:return e;default:return t}}case L:return t}}}function G(e){return X(e)===U}r=F,o=U,a=z,i=I,l=N,u=B,s=A,c=H,f=W,d=L,p=D,h=M,m=$,v=function(e){return G(e)||X(e)===F},y=G,g=function(e){return X(e)===z},b=function(e){return X(e)===I},w=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===N},S=function(e){return X(e)===B},x=function(e){return X(e)===A},k=function(e){return X(e)===H},E=function(e){return X(e)===W},_=function(e){return X(e)===L},C=function(e){return X(e)===D},j=function(e){return X(e)===M},P=function(e){return X(e)===$},R=function(e){return"string"==typeof e||"function"==typeof e||e===A||e===U||e===D||e===M||e===$||e===V||"object"==typeof e&&null!==e&&(e.$$typeof===H||e.$$typeof===W||e.$$typeof===I||e.$$typeof===z||e.$$typeof===B||e.$$typeof===Q||e.$$typeof===K||e.$$typeof===Y||e.$$typeof===q)},O=X}),p("i6nJM",function(t,n){e(t.exports,"ContextConsumer",function(){return r},function(e){return r=e}),e(t.exports,"ContextProvider",function(){return o},function(e){return o=e}),e(t.exports,"Element",function(){return a},function(e){return a=e}),e(t.exports,"ForwardRef",function(){return i},function(e){return i=e}),e(t.exports,"Fragment",function(){return l},function(e){return l=e}),e(t.exports,"Lazy",function(){return u},function(e){return u=e}),e(t.exports,"Memo",function(){return s},function(e){return s=e}),e(t.exports,"Portal",function(){return c},function(e){return c=e}),e(t.exports,"Profiler",function(){return f},function(e){return f=e}),e(t.exports,"StrictMode",function(){return d},function(e){return d=e}),e(t.exports,"Suspense",function(){return p},function(e){return p=e}),e(t.exports,"SuspenseList",function(){return h},function(e){return h=e}),e(t.exports,"isAsyncMode",function(){return m},function(e){return m=e}),e(t.exports,"isConcurrentMode",function(){return v},function(e){return v=e}),e(t.exports,"isContextConsumer",function(){return y},function(e){return y=e}),e(t.exports,"isContextProvider",function(){return g},function(e){return g=e}),e(t.exports,"isElement",function(){return b},function(e){return b=e}),e(t.exports,"isForwardRef",function(){return w},function(e){return w=e}),e(t.exports,"isFragment",function(){return S},function(e){return S=e}),e(t.exports,"isLazy",function(){return x},function(e){return x=e}),e(t.exports,"isMemo",function(){return k},function(e){return k=e}),e(t.exports,"isPortal",function(){return E},function(e){return E=e}),e(t.exports,"isProfiler",function(){return _},function(e){return _=e}),e(t.exports,"isStrictMode",function(){return C},function(e){return C=e}),e(t.exports,"isSuspense",function(){return j},function(e){return j=e}),e(t.exports,"isSuspenseList",function(){return P},function(e){return P=e}),e(t.exports,"isValidElementType",function(){return R},function(e){return R=e}),e(t.exports,"typeOf",function(){return O},function(e){return O=e});var r,o,a,i,l,u,s,c,f,d,p,h,m,v,y,g,b,w,S,x,k,E,_,C,j,P,R,O,T,N=Symbol.for("react.element"),L=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),I=Symbol.for("react.provider"),z=Symbol.for("react.context"),F=Symbol.for("react.server_context"),U=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),H=Symbol.for("react.offscreen");function q(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case N:switch(e=e.type){case A:case D:case M:case B:case $:return e;default:switch(e=e&&e.$$typeof){case F:case z:case U:case W:case V:case I:return e;default:return t}}case L:return t}}}T=Symbol.for("react.module.reference"),r=z,o=I,a=N,i=U,l=A,u=W,s=V,c=L,f=D,d=M,p=B,h=$,m=function(){return!1},v=function(){return!1},y=function(e){return q(e)===z},g=function(e){return q(e)===I},b=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===N},w=function(e){return q(e)===U},S=function(e){return q(e)===A},x=function(e){return q(e)===W},k=function(e){return q(e)===V},E=function(e){return q(e)===L},_=function(e){return q(e)===D},C=function(e){return q(e)===M},j=function(e){return q(e)===B},P=function(e){return q(e)===$},R=function(e){return"string"==typeof e||"function"==typeof e||e===A||e===D||e===M||e===B||e===$||e===H||"object"==typeof e&&null!==e&&(e.$$typeof===W||e.$$typeof===V||e.$$typeof===I||e.$$typeof===z||e.$$typeof===U||e.$$typeof===T||void 0!==e.getModuleId)},O=q}),p("2I9iM",function(t,n){e(t.exports,"default",function(){return a});var r=d("5aRSq"),o=d("4Iuzv"),a=e=>{let[t,n]=(0,o.useState)(2);return/*#__PURE__*/(0,r.jsxs)("div",{children:[/*#__PURE__*/(0,r.jsxs)("h3",{children:[e.name," Functional "]}),/*#__PURE__*/(0,r.jsx)("h2",{children:t}),/*#__PURE__*/(0,r.jsx)("button",{onClick:()=>{n(8)},children:"Btn"})]})}}),p("kKmmy",function(n,r){e(n.exports,"default",function(){return l});var o=d("5aRSq"),a=d("4Iuzv");class i extends /*@__PURE__*/t(a).Component{constructor(e){super(e),this.state={login:""}}async componentDidMount(){let e=await fetch("https://api.github.com/users/Alish-Rawat"),t=await e.json();this.setState(t)}render(){let{count:e}=this.state;return/*#__PURE__*/(0,o.jsxs)("div",{children:[/*#__PURE__*/(0,o.jsxs)("h2",{children:[" Name: ",this.state.login," Claas BAsed "]}),/*#__PURE__*/(0,o.jsxs)("h3",{children:[" ",this.state.id]}),/*#__PURE__*/(0,o.jsx)("img",{src:this.state.avatar_url}),/*#__PURE__*/(0,o.jsx)("button",{onClick:()=>{this.setState({count:2})},children:"bttn"})]})}}var l=i}),p("2wi20",function(t,n){e(t.exports,"default",function(){return u});var r=d("lY1i9"),o=d("ewFMK"),a=n&&!n.nodeType&&n,i=a&&t&&!t.nodeType&&t,l=i&&i.exports===a?r.default.Buffer:void 0,u=(l?l.isBuffer:void 0)||o.default}),p("lY1i9",function(t,n){e(t.exports,"default",function(){return a});var r=d("j6mI2"),o="object"==typeof self&&self&&self.Object===Object&&self,a=r.default||o||Function("return this")()}),p("j6mI2",function(t,n){e(t.exports,"default",function(){return r});var r="object"==typeof s&&s&&s.Object===Object&&s}),p("ewFMK",function(t,n){e(t.exports,"default",function(){return r});var r=/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */function(){return!1}}),p("fhYeL",function(t,n){e(t.exports,"default",function(){return l});var r=d("j6mI2"),o=n&&!n.nodeType&&n,a=o&&t&&!t.nodeType&&t,i=a&&a.exports===o&&r.default.process,l=function(){try{// Use `util.types` for Node.js 10+.
var e=a&&a.require&&a.require("util").types;if(e)return e;// Legacy `process.binding('util')` for Node.js < 10.
return i&&i.binding&&i.binding("util")}catch(e){}}()}),p("jfr5X",function(t,n){e(t.exports,"default",function(){return u});var r=d("lY1i9"),o=n&&!n.nodeType&&n,a=o&&t&&!t.nodeType&&t,i=a&&a.exports===o?r.default.Buffer:void 0,l=i?i.allocUnsafe:void 0,u=/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */function(e,t){if(t)return e.slice();var n=e.length,r=l?l(n):new e.constructor(n);return e.copy(r),r}}),p("an8Kr",function(e,t){var n=d("dIRJU");e.exports=n("02iY2").then(()=>d("7SCt9"))}),p("dIRJU",function(e,t){e.exports=function(e){// eslint-disable-next-line no-undef
return import(d("giU2u").resolve(e))}}),p("8RAaX",function(e,t){var n=d("dIRJU");e.exports=n("4jRZt").then(()=>d("3yXQA"))});/***
 * Created a Server
 * HMR = Hot module Replacement
 * Filer Watcher algorith - C++
 * Bundling
 * Minify
 * Cleaning our Code
 * Dev and PRoduction Build
 *  Super Fast build algorithm
 * image optimization
 * Caching while development
 * Compress
 * Compatble with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree Shaking - Removing un-wanted code
 *
 *//* import React from "react";
 import ReactDOM from "react-dom/client"; *//* const h1 = React.createElement(
  "h1",
  { id: "h1", style: { color: "blue" }, key: "h1" },
  "heading using parcel"
); */// console.log(h1);
// React.createElement => Object => HTML(DOM)
/* const h2 = React.createElement("h2", { id: "h2", key: "h2" }, "heading Twoo"); */// const container = React.createElement("div", { id: "container" }, [
//   React.createElement("h1", {}, "heading using parcel"),
//   React.createElement("ul", {}, [
//     React.createElement("li", {}, "1"),
//     React.createElement("li", {}, "2"),
//   ]),
// ]);  // Chaining Method which we will not use //
//
/*const heading = React.createElement(
  "h1",
  {
    id: "title",
    key: "h1",
  },
  "Namsate REact from using react"
); */// JSX = it is not HTML in Javascript, Its a HTML like syntax,
/* const heading2 = (
  <h1 id="title" key="h2" className="heading">
  Heading 2
  </h1>
  ); */// React Element
// const jsx = (
//   <div
//     style={{
//       backgroundColor: "red",
//       color: "white",
//     }}
//   >
//     <h1>sd</h1>
//     <h1>gggg</h1>
//   </div>
// );
// const jsx = (
//   <React.Fragment>
//     <h1>sd</h1>
//     <h1>gggg</h1>
//   </React.Fragment>
// );
/**
      Header
         -Logo
         -Nav Items(Right Side)
         -Cart
      Body
         -SearchBar
         -RestrauntList
           -RestaurantCard
             -image
             -name
             -rating
             -cuisnes
      Footer       
         - links
         - copyright
         *///   <h1 id="title" key="h3" className="heading">
//     Food Villa
//   </h1>
// );
//-- React Component --//
// Functional = Javascript function
//  - Name of Component starts with Capital letter
//  <Title></Title>  , <Title/> , {Title()}
/*const BurgerKing = {
  name: "Burger King",
  image:
    "https://insanelygoodrecipes.com/wp-content/uploads/2020/02/Burger-and-Fries.jpg",
  cusines: ["Burger", "American"],
  rating: "4.3",
}; */var h=d("5aRSq"),m=d("4Iuzv"),v={};e(v,"createRoot",function(){return eN},function(e){return eN=e}),e(v,"hydrateRoot",function(){return eL},function(e){return eL=e});var y={};!// DCE check should happen before ReactDOM bundle executes so that
// DevTools can report bad minification during injection.
function e(){/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{// Verify that the code above has been dead code eliminated (DCE'd).
__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){// DevTools shouldn't crash React, no matter what.
// We should still report in case we break this code.
console.error(e)}}(),eN=(y=d("68oCn")).createRoot,eL=y.hydrateRoot;var h=d("5aRSq"),m=d("4Iuzv"),g={};g=new URL("foodvilla.21cf004d.png",import.meta.url).toString();var b=d("gLC8N"),m=d("4Iuzv"),w=()=>{let[e,t]=(0,m.useState)(!0);return(0,m.useEffect)(()=>{let e=()=>{t(!0)},n=()=>{t(!1)};return window.addEventListener("online",e),window.addEventListener("offline",n),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",n)}},[]),e},S=d("fmRNI"),x=d("lhInO"),k={};k=d("lCXfb");let E=// Default to a dummy "batch" implementation that just runs the callback
function(e){e()};// Allow injecting another batching function later
const _=()=>E;var m=(d("4Iuzv"),d("4Iuzv"),d("4Iuzv"));const C=Symbol.for("react-redux-context"),j="undefined"!=typeof globalThis?globalThis:/* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */{},P=/*#__PURE__*/function(){var e;if(!m.createContext)return{};let t=null!=(e=j[C])?e:j[C]=new Map,n=t.get(m.createContext);return n||(n=m.createContext(null),t.set(m.createContext,n)),n}();function R(e=P){return function(){let t=(0,m.useContext)(e);return t}}const O=/*#__PURE__*/R();let T=()=>{throw Error("uSES not initialized!")};const N=(e,t)=>e===t,L=/*#__PURE__*/function(e=P){let t=e===P?O:R(e);return function(e,n={}){let{equalityFn:r=N,stabilityCheck:o,noopCheck:a}="function"==typeof n?{equalityFn:n}:n,{store:i,subscription:l,getServerState:u,stabilityCheck:s,noopCheck:c}=t();(0,m.useRef)(!0);let f=(0,m.useCallback)({[e.name](t){let n=e(t);return n}}[e.name],[e,s,o]),d=T(l.addNestedSub,i.getState,u||i.getState,f,r);return(0,m.useDebugValue)(d),d}}();var A={};A=d("d21w1");/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */var M={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},D={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},I={};I[A.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},I[A.Memo]=D;var m=d("4Iuzv");d("i6nJM");const z={notify(){},get:()=>[]};var m=d("4Iuzv");const F=!!("undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement),U=F?m.useLayoutEffect:m.useEffect;var m=d("4Iuzv"),B=function({store:e,context:t,children:n,serverState:r,stabilityCheck:o="once",noopCheck:a="once"}){let i=m.useMemo(()=>{let t=function(e,t){let n;let r=z,o=0,a=!1;// Reasons to keep the subscription active
function i(){s.onStateChange&&s.onStateChange()}function l(){o++,n||(n=t?t.addNestedSub(i):e.subscribe(i),r=// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants
function(){let e=_(),t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let e=t;for(;e;)e.callback(),e=e.next})},get(){let e=[],n=t;for(;n;)e.push(n),n=n.next;return e},subscribe(e){let r=!0,o=n={callback:e,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){r&&null!==t&&(r=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}())}function u(){o--,n&&0===o&&(n(),n=void 0,r.clear(),r=z)}let s={addNestedSub:function(e){l();let t=r.subscribe(e),n=!1;// cleanup nested sub
return()=>{n||(n=!0,t(),u())}},notifyNestedSubs:function(){r.notify()},handleChangeWrapper:i,isSubscribed:function(){return a},trySubscribe:function(){a||(a=!0,l())},tryUnsubscribe:function(){a&&(a=!1,u())},getListeners:()=>r};return s}(e);return{store:e,subscription:t,getServerState:r?()=>r:void 0,stabilityCheck:o,noopCheck:a}},[e,r,o,a]),l=m.useMemo(()=>e.getState(),[e]);return U(()=>{let{subscription:t}=i;return t.onStateChange=t.notifyNestedSubs,t.trySubscribe(),l!==e.getState()&&t.notifyNestedSubs(),()=>{t.tryUnsubscribe(),t.onStateChange=void 0}},[i,l]),/*#__PURE__*/m.createElement((t||P).Provider,{value:i},n)};function $(e=P){let t=e===P?O:R(e);return function(){let{store:e}=t();// @ts-ignore
return e}}const V=/*#__PURE__*/$(),W=/*#__PURE__*/function(e=P){let t=e===P?V:$(e);return function(){let e=t();// @ts-ignore
return e.dispatch}}();T=k.useSyncExternalStoreWithSelector,x.useSyncExternalStore,E=y.unstable_batchedUpdates;const H=()=>/* // <a href="/">
  //   <img
  //     className="logo"
  //     src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj"
  //     alt="logoo"
  //   />
  // </a> */// another way of writing , from internet
    /*#__PURE__*/(0,h.jsx)("a",{href:"/",children:/*#__PURE__*/(0,h.jsx)("img",{"data-testid":"logo",className:"h-28 p-2 ",alt:"logo",src:/*@__PURE__*/t(g)})})// this one from local
;var q=()=>{let[e,t]=(0,m.useState)(!1),n=w(),{user:r}=(0,m.useContext)(S.default),o=L(e=>e.cart.items);return console.log(o),/*#__PURE__*/(0,h.jsxs)("div",{className:" flex justify-between bg-pink-100 shadow-lg sm:bg-blue-400 md:bg-yellow-300",children:[/*#__PURE__*/(0,h.jsx)(H,{}),/*#__PURE__*/(0,h.jsx)("div",{className:"nav-items",children:/*#__PURE__*/(0,h.jsxs)("ul",{className:"flex py-12",children:[/*#__PURE__*/(0,h.jsx)(b.Link,{to:"/",children:/*#__PURE__*/(0,h.jsx)("li",{className:"px-2",children:"Home"})}),/*#__PURE__*/(0,h.jsx)(b.Link,{to:"/about",children:/*#__PURE__*/(0,h.jsx)("li",{className:"px-2",children:"About"})}),/*#__PURE__*/(0,h.jsx)(b.Link,{to:"/contact",children:/*#__PURE__*/(0,h.jsx)("li",{className:"px-2",children:"Contact"})}),/*#__PURE__*/(0,h.jsx)(b.Link,{to:"/instamart",children:/*#__PURE__*/(0,h.jsx)("li",{className:"px-2",children:"Instamart"})}),/*#__PURE__*/(0,h.jsx)(b.Link,{to:"/cart",children:/*#__PURE__*/(0,h.jsxs)("li",{"data-testid":"cart",className:"px-2",children:["Cart - ",o.length]})})]})}),/*#__PURE__*/(0,h.jsx)("h4",{"data-testid":"online-status",className:"py-12",children:n?"online":"offline"}),/*#__PURE__*/(0,h.jsx)("h2",{className:"p-12 font-bold text-red-900",children:r.name}),e?/*#__PURE__*/(0,h.jsx)(b.Link,{to:"/",children:/*#__PURE__*/(0,h.jsx)("button",{className:"py-12",onClick:()=>t(!1),children:"Logout"})}):/*#__PURE__*/(0,h.jsx)(b.Link,{to:"/login",children:/*#__PURE__*/(0,h.jsx)("button",{className:"py-12",onClick:()=>t(!0),children:"Login"})})]})},h=d("5aRSq"),m=d("4Iuzv");const Q="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";var h=d("5aRSq"),m=d("4Iuzv"),S=d("fmRNI"),K=({name:e,cuisines:t,avgRating:n,cloudinaryImageId:r})=>{let{user:o}=(0,m.useContext)(S.default);return/*#__PURE__*/(0,h.jsxs)("div",{className:"w-48 p-2 m-2 shadow-lg bg-pink-100 ",children:[/*#__PURE__*/(0,h.jsx)("img",{src:Q+r}),/*#__PURE__*/(0,h.jsx)("h2",{className:"font-bold text-xl",children:e}),/*#__PURE__*/(0,h.jsx)("h3",{className:"overflow-hidden text-ellipsis",children:t.join(",")}),/*#__PURE__*/(0,h.jsxs)("h4",{children:[n," stars"]}),/*#__PURE__*/(0,h.jsx)("h2",{className:"font-bold",children:o.name}),/*#__PURE__*/(0,h.jsx)("h2",{className:"text-md",children:o.email})]})},h=d("5aRSq"),Y=()=>/*#__PURE__*/(0,h.jsx)("div",{className:"flex flex-wrap","data-testid":"shimmer",children:Array(10).fill().map((e,t)=>/*#__PURE__*/(0,h.jsx)("div",{className:"bg-slate-200 w-44 h-56 m-5"},t))}),b=d("gLC8N"),S=d("fmRNI"),h=d("5aRSq"),m=d("4Iuzv"),S=d("fmRNI"),X=()=>{let{user:e}=(0,m.useContext)(S.default);return/*#__PURE__*/(0,h.jsxs)("h1",{className:"p-10 m-10",children:["This Website is made with Love by ",e.name," - ",e.email]})},h=d("5aRSq");d("2I9iM");var G=d("kKmmy"),h=d("5aRSq"),J=d("20iM3");d("4Iuzv");var m=d("4Iuzv"),Z=e=>{let[t,n]=(0,m.useState)(null),[r,o]=(0,m.useState)(null);async function a(){let t=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.537970195220126&lng=77.26460639387369&restaurantId="+e),r=await t.json();n(r.data.cards[0]?.card.card.info),o(r.data.cards[2].groupedCard.cardGroupMap.REGULAR?.cards[2]?.card?.card)}//   console.log(resinfo);
return(0,m.useEffect)(()=>{a()},[]),{resinfo:t,resmenu:r}},ee={};function et(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(e){return"'"+e+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function en(e){return!!e&&!!e[e$]}function er(e){var t;return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;var n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===eV}(e)||Array.isArray(e)||!!e[eB]||!!(null===(t=e.constructor)||void 0===t?void 0:t[eB])||es(e)||ec(e))}function eo(e,t,n){void 0===n&&(n=!1),0===ea(e)?(n?Object.keys:eW)(e).forEach(function(r){n&&"symbol"==typeof r||t(r,e[r],e)}):e.forEach(function(n,r){return t(r,n,e)})}function ea(e){var t=e[e$];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:es(e)?2:ec(e)?3:0}function ei(e,t){return 2===ea(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function el(e,t,n){var r=ea(e);2===r?e.set(t,n):3===r?e.add(n):e[t]=n}function eu(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function es(e){return eI&&e instanceof Map}function ec(e){return ez&&e instanceof Set}function ef(e){return e.o||e.t}function ed(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=eH(e);delete t[e$];for(var n=eW(t),r=0;r<n.length;r++){var o=n[r],a=t[o];!1===a.writable&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(t[o]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function ep(e,t){return void 0===t&&(t=!1),em(e)||en(e)||!er(e)||(ea(e)>1&&(e.set=e.add=e.clear=e.delete=eh),Object.freeze(e),t&&eo(e,function(e,t){return ep(t,!0)},!0)),e}function eh(){et(2)}function em(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function ev(e){var t=eq[e];return t||et(18,e),t}function ey(e,t){t&&(ev("Patches"),e.u=[],e.s=[],e.v=t)}function eg(e){eb(e),e.p.forEach(eS),e.p=null}function eb(e){e===eM&&(eM=e.l)}function ew(e){return eM={p:[],l:eM,h:e,m:!0,_:0}}function eS(e){var t=e[e$];0===t.i||1===t.i?t.j():t.g=!0}function ex(e,t){t._=t.p.length;var n=t.p[0],r=void 0!==e&&e!==n;return t.h.O||ev("ES5").S(t,e,r),r?(n[e$].P&&(eg(t),et(4)),er(e)&&(e=ek(t,e),t.l||e_(t,e)),t.u&&ev("Patches").M(n[e$].t,e,t.u,t.s)):e=ek(t,n,[]),eg(t),t.u&&t.v(t.u,t.s),e!==eU?e:void 0}function ek(e,t,n){if(em(t))return t;var r=t[e$];if(!r)return eo(t,function(o,a){return eE(e,r,t,o,a,n)},!0),t;if(r.A!==e)return t;if(!r.P)return e_(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var o=4===r.i||5===r.i?r.o=ed(r.k):r.o,a=o,i=!1;3===r.i&&(a=new Set(o),o.clear(),i=!0),eo(a,function(t,a){return eE(e,r,o,t,a,n,i)}),e_(e,o,!1),n&&e.u&&ev("Patches").N(r,n,e.u,e.s)}return r.o}function eE(e,t,n,r,o,a,i){if(en(o)){var l=ek(e,o,a&&t&&3!==t.i&&!ei(t.R,r)?a.concat(r):void 0);if(el(n,r,l),!en(l))return;e.m=!1}else i&&n.add(o);if(er(o)&&!em(o)){if(!e.h.D&&e._<1)return;ek(e,o),t&&t.A.l||e_(e,o)}}function e_(e,t,n){void 0===n&&(n=!1),!e.l&&e.h.D&&e.m&&ep(t,n)}function eC(e,t){var n=e[e$];return(n?ef(n):e)[t]}function ej(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function eP(e){e.P||(e.P=!0,e.l&&eP(e.l))}function eR(e){e.o||(e.o=ed(e.t))}function eO(e,t,n){var r,o,a,i,l,u,s,c=es(t)?ev("MapSet").F(t,n):ec(t)?ev("MapSet").T(t,n):e.O?(a=o={i:(r=Array.isArray(t))?1:0,A:n?n.A:eM,P:!1,I:!1,R:{},l:n,t:t,k:null,o:null,j:null,C:!1},i=eQ,r&&(a=[o],i=eK),u=(l=Proxy.revocable(a,i)).revoke,s=l.proxy,o.k=s,o.j=u,s):ev("ES5").J(t,n);return(n?n.A:eM).p.push(c),c}function eT(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return ed(e)}e(ee,"compose",function(){return e6},function(e){return e6=e}),e(ee,"combineReducers",function(){return e5},function(e){return e5=e}),e(ee,"applyMiddleware",function(){return e8},function(e){return e8=e}),e(ee,"createStore",function(){return e4},function(e){return e4=e}),e(ee,"configureStore",function(){return tP}),e(ee,"createSlice",function(){return tO});var eN,eL,eA,eM,eD="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),eI="undefined"!=typeof Map,ez="undefined"!=typeof Set,eF="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,eU=eD?Symbol.for("immer-nothing"):((eA={})["immer-nothing"]=!0,eA),eB=eD?Symbol.for("immer-draftable"):"__$immer_draftable",e$=eD?Symbol.for("immer-state"):"__$immer_state",eV=""+Object.prototype.constructor,eW="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,eH=Object.getOwnPropertyDescriptors||function(e){var t={};return eW(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},eq={},eQ={get:function(e,t){if(t===e$)return e;var n,r,o=ef(e);if(!ei(o,t))return(r=ej(o,t))?"value"in r?r.value:null===(n=r.get)||void 0===n?void 0:n.call(e.k):void 0;var a=o[t];return e.I||!er(a)?a:a===eC(e.t,t)?(eR(e),e.o[t]=eO(e.A.h,a,e)):a},has:function(e,t){return t in ef(e)},ownKeys:function(e){return Reflect.ownKeys(ef(e))},set:function(e,t,n){var r=ej(ef(e),t);if(null==r?void 0:r.set)return r.set.call(e.k,n),!0;if(!e.P){var o=eC(ef(e),t),a=null==o?void 0:o[e$];if(a&&a.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(eu(n,o)&&(void 0!==n||ei(e.t,t)))return!0;eR(e),eP(e)}return e.o[t]===n&&(void 0!==n||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return void 0!==eC(e.t,t)||t in e.t?(e.R[t]=!1,eR(e),eP(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=ef(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty:function(){et(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){et(12)}},eK={};eo(eQ,function(e,t){eK[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),eK.deleteProperty=function(e,t){return eK.set.call(this,e,t,void 0)},eK.set=function(e,t,n){return eQ.set.call(this,e[0],t,n,e[0])};var eY=new(function(){function e(e){var t=this;this.O=eF,this.D=!0,this.produce=function(e,n,r){if("function"==typeof e&&"function"!=typeof n){var o,a=n;return n=e,function(e){var r=this;void 0===e&&(e=a);for(var o=arguments.length,i=Array(o>1?o-1:0),l=1;l<o;l++)i[l-1]=arguments[l];return t.produce(e,function(e){var t;return(t=n).call.apply(t,[r,e].concat(i))})}}if("function"!=typeof n&&et(6),void 0!==r&&"function"!=typeof r&&et(7),er(e)){var i=ew(t),l=eO(t,e,void 0),u=!0;try{o=n(l),u=!1}finally{u?eg(i):eb(i)}return"undefined"!=typeof Promise&&o instanceof Promise?o.then(function(e){return ey(i,r),ex(e,i)},function(e){throw eg(i),e}):(ey(i,r),ex(o,i))}if(!e||"object"!=typeof e){if(void 0===(o=n(e))&&(o=e),o===eU&&(o=void 0),t.D&&ep(o,!0),r){var s=[],c=[];ev("Patches").M(e,o,s,c),r(s,c)}return o}et(21,e)},this.produceWithPatches=function(e,n){if("function"==typeof e)return function(n){for(var r=arguments.length,o=Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];return t.produceWithPatches(n,function(t){return e.apply(void 0,[t].concat(o))})};var r,o,a=t.produce(e,n,function(e,t){r=e,o=t});return"undefined"!=typeof Promise&&a instanceof Promise?a.then(function(e){return[e,r,o]}):[a,r,o]},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var t=e.prototype;return t.createDraft=function(e){er(e)||et(8),en(e)&&(en(t=e)||et(22,t),e=function e(t){if(!er(t))return t;var n,r=t[e$],o=ea(t);if(r){if(!r.P&&(r.i<4||!ev("ES5").K(r)))return r.t;r.I=!0,n=eT(t,o),r.I=!1}else n=eT(t,o);return eo(n,function(t,o){var a;r&&(2===ea(a=r.t)?a.get(t):a[t])===o||el(n,t,e(o))}),3===o?new Set(n):n}(t));var t,n=ew(this),r=eO(this,e,void 0);return r[e$].C=!0,eb(n),r},t.finishDraft=function(e,t){var n=(e&&e[e$]).A;return ey(n,t),ex(void 0,n)},t.setAutoFreeze=function(e){this.D=e},t.setUseProxies=function(e){e&&!eF&&et(20),this.O=e},t.applyPatches=function(e,t){for(n=t.length-1;n>=0;n--){var n,r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}n>-1&&(t=t.slice(n+1));var o=ev("Patches").$;return en(e)?o(e,t):this.produce(e,function(e){return o(e,t)})},e}()),eX=eY.produce;function eG(e){return(eG="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function eJ(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function eZ(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?eJ(Object(n),!0).forEach(function(t){!function(e,t,n){var r;r=function(e,t){if("object"!==eG(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==eG(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"===eG(r)?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):eJ(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */function e0(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}eY.produceWithPatches.bind(eY),eY.setAutoFreeze.bind(eY),eY.setUseProxies.bind(eY),eY.applyPatches.bind(eY),eY.createDraft.bind(eY),eY.finishDraft.bind(eY);// Inlined version of the `symbol-observable` polyfill
var e1="function"==typeof Symbol&&Symbol.observable||"@@observable",e2=function(){return Math.random().toString(36).substring(7).split("").join(".")},e3={INIT:"@@redux/INIT"+e2(),REPLACE:"@@redux/REPLACE"+e2(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+e2()}};/**
 * @deprecated
 *
 * **We recommend using the `configureStore` method
 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
 * simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * The `createStore` method from the core `redux` package will not be removed, but we encourage
 * all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning, use
 * the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 */function e4(e,t,n){if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw Error(e0(0));if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw Error(e0(1));return n(e4)(e,t)}if("function"!=typeof e)throw Error(e0(2));var r,o=e,a=t,i=[],l=i,u=!1;/**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */function s(){l===i&&(l=i.slice())}/**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */function c(){if(u)throw Error(e0(3));return a}/**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */function f(e){if("function"!=typeof e)throw Error(e0(4));if(u)throw Error(e0(5));var t=!0;return s(),l.push(e),function(){if(t){if(u)throw Error(e0(6));t=!1,s();var n=l.indexOf(e);l.splice(n,1),i=null}}}/**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */function d(e){if(!/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */function(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}(e))throw Error(e0(7));if(void 0===e.type)throw Error(e0(8));if(u)throw Error(e0(9));try{u=!0,a=o(a,e)}finally{u=!1}for(var t=i=l,n=0;n<t.length;n++)(0,t[n])();return e}return(// reducer returns their initial state. This effectively populates
// the initial state tree.
d({type:e3.INIT}),(r={dispatch:d,subscribe:f,getState:c,replaceReducer:/**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */function(e){if("function"!=typeof e)throw Error(e0(10));o=e,// Any reducers that existed in both the new and old rootReducer
// will receive the previous state. This effectively populates
// the new state tree with any relevant data from the old one.
d({type:e3.REPLACE})}})[e1]=/**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */function(){var e;return(e={/**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */subscribe:function(e){if("object"!=typeof e||null===e)throw Error(e0(11));function t(){e.next&&e.next(c())}return t(),{unsubscribe:f(t)}}})[e1]=function(){return this},e}// When a store is created, an "INIT" action is dispatched so that every
,r)}/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */function e5(e){for(var t,n=Object.keys(e),r={},o=0;o<n.length;o++){var a=n[o];"function"==typeof e[a]&&(r[a]=e[a])}var i=Object.keys(r);try{!function(e){Object.keys(e).forEach(function(t){var n=e[t];if(void 0===n(void 0,{type:e3.INIT}))throw Error(e0(12));if(void 0===n(void 0,{type:e3.PROBE_UNKNOWN_ACTION()}))throw Error(e0(13))})}(r)}catch(e){t=e}return function(e,n){if(void 0===e&&(e={}),t)throw t;for(var o=!1,a={},l=0;l<i.length;l++){var u=i[l],s=r[u],c=e[u],f=s(c,n);if(void 0===f)throw n&&n.type,Error(e0(14));a[u]=f,o=o||f!==c}return(o=o||i.length!==Object.keys(e).length)?a:e}}/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */function e6(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */function e8(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw Error(e0(15))},o={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},a=t.map(function(e){return e(o)});return r=e6.apply(void 0,a)(n.dispatch),eZ(eZ({},n),{},{dispatch:r})}}}/** A function that accepts a potential "extra argument" value to be injected later,
 * and returns an instance of the thunk middleware that uses that value
 */function e9(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(o){return(// The thunk middleware looks for any functions that were passed to `store.dispatch`.
// If this "action" is really a function, call it and return the result.
"function"==typeof o?o(n,r,e):t(o))}}}}var e7=e9();// Attach the factory function so users can create a customized version
// with whatever "extra arg" they want to inject into their thunks
e7.withExtraArgument=e9;var te={};function tt(){throw Error("setTimeout has not been defined")}function tn(){throw Error("clearTimeout has not been defined")}function tr(e){if(i===setTimeout)return setTimeout(e,0);// if setTimeout wasn't available but was latter defined
if((i===tt||!i)&&setTimeout)return i=setTimeout,setTimeout(e,0);try{// when when somebody has screwed with setTimeout but no I.E. maddness
return i(e,0)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return i.call(null,e,0)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return i.call(this,e,0)}}}!function(){try{i="function"==typeof setTimeout?setTimeout:tt}catch(e){i=tt}try{l="function"==typeof clearTimeout?clearTimeout:tn}catch(e){l=tn}}();var to=[],ta=!1,ti=-1;function tl(){ta&&u&&(ta=!1,u.length?to=u.concat(to):ti=-1,to.length&&tu())}function tu(){if(!ta){var e=tr(tl);ta=!0;for(var t=to.length;t;){for(u=to,to=[];++ti<t;)u&&u[ti].run();ti=-1,t=to.length}u=null,ta=!1,function(e){if(l===clearTimeout)return clearTimeout(e);// if clearTimeout wasn't available but was latter defined
if((l===tn||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{// when when somebody has screwed with setTimeout but no I.E. maddness
l(e)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return l.call(null,e)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return l.call(this,e)}}}(e)}}// v8 likes predictible objects
function ts(e,t){this.fun=e,this.array=t}function tc(){}te.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];to.push(new ts(e,t)),1!==to.length||ta||tr(tu)},ts.prototype.run=function(){this.fun.apply(null,this.array)},te.title="browser",te.browser=!0,te.env={},te.argv=[],te.version="",te.versions={},te.on=tc,te.addListener=tc,te.once=tc,te.off=tc,te.removeListener=tc,te.removeAllListeners=tc,te.emit=tc,te.prependListener=tc,te.prependOnceListener=tc,te.listeners=function(e){return[]},te.binding=function(e){throw Error("process.binding is not supported")},te.cwd=function(){return"/"},te.chdir=function(e){throw Error("process.chdir is not supported")},te.umask=function(){return 0};var tf=(n=function(e,t){return(n=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),td=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(n)throw TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}},tp=function(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e},th=Object.defineProperty,tm=Object.defineProperties,tv=Object.getOwnPropertyDescriptors,ty=Object.getOwnPropertySymbols,tg=Object.prototype.hasOwnProperty,tb=Object.prototype.propertyIsEnumerable,tw=function(e,t,n){return t in e?th(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},tS=function(e,t){for(var n in t||(t={}))tg.call(t,n)&&tw(e,n,t[n]);if(ty)for(var r=0,o=ty(t);r<o.length;r++){var n=o[r];tb.call(t,n)&&tw(e,n,t[n])}return e},tx=function(e,t){return tm(e,tv(t))},tk="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!=arguments.length)return"object"==typeof arguments[0]?e6:e6.apply(null,arguments)};// src/createAction.ts
function tE(e,t){function n(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];if(t){var o=t.apply(void 0,n);if(!o)throw Error("prepareAction did not return an object");return tS(tS({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:n[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(t){return t.type===e},n}"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;var t_=/** @class */function(e){function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return tf(t,e),Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.prototype.concat.apply(this,t)},t.prototype.prepend=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return 1===e.length&&Array.isArray(e[0])?new(t.bind.apply(t,tp([void 0],e[0].concat(this)))):new(t.bind.apply(t,tp([void 0],e.concat(this))))},t}(Array),tC=/** @class */function(e){function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return tf(t,e),Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.prototype.concat.apply(this,t)},t.prototype.prepend=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return 1===e.length&&Array.isArray(e[0])?new(t.bind.apply(t,tp([void 0],e[0].concat(this)))):new(t.bind.apply(t,tp([void 0],e.concat(this))))},t}(Array);function tj(e){return er(e)?eX(e,function(){}):e}function tP(e){var t,n=function(e){var t,n,r,o;return void 0===(t=e)&&(t={}),r=void 0===(n=t.thunk)||n,t.immutableCheck,t.serializableCheck,t.actionCreatorCheck,o=new t_,r&&("boolean"==typeof r?o.push(e7):o.push(e7.withExtraArgument(r.extraArgument))),o},r=e||{},o=r.reducer,a=void 0===o?void 0:o,i=r.middleware,l=void 0===i?n():i,u=r.devTools,s=void 0===u||u,c=r.preloadedState,f=void 0===c?void 0:c,d=r.enhancers,p=void 0===d?void 0:d;if("function"==typeof a)t=a;else if(// src/isPlainObject.ts
function(e){if("object"!=typeof e||null===e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;for(var n=t;null!==Object.getPrototypeOf(n);)n=Object.getPrototypeOf(n);return t===n}(a))t=e5(a);else throw Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var h=l;"function"==typeof h&&(h=h(n));var m=e8.apply(void 0,h),v=e6;s&&(v=tk(tS({trace:!1},"object"==typeof s&&s)));var y=new tC(m),g=y;Array.isArray(p)?g=tp([m],p):"function"==typeof p&&(g=p(y));var b=v.apply(void 0,g);return e4(t,f,b)}// src/mapBuilders.ts
function tR(e){var t,n={},r=[],o={addCase:function(e,t){var r="string"==typeof e?e:e.type;if(!r)throw Error("`builder.addCase` cannot be called with an empty action type");if(r in n)throw Error("`builder.addCase` cannot be called with two reducers for the same action type");return n[r]=t,o},addMatcher:function(e,t){return r.push({matcher:e,reducer:t}),o},addDefaultCase:function(e){return t=e,o}};return e(o),[n,r,t]}function tO(e){var t,n=e.name;if(!n)throw Error("`name` is a required option for createSlice");var r="function"==typeof e.initialState?e.initialState:tj(e.initialState),o=e.reducers||{},a=Object.keys(o),i={},l={},u={};function s(){var t="function"==typeof e.extraReducers?tR(e.extraReducers):[e.extraReducers],n=t[0],o=t[1],a=void 0===o?[]:o,i=t[2],u=void 0===i?void 0:i,s=tS(tS({},void 0===n?{}:n),l);return function(e,t,n,r){void 0===n&&(n=[]);var o,a="function"==typeof t?tR(t):[t,n,void 0],i=a[0],l=a[1],u=a[2];if("function"==typeof e)o=function(){return tj(e())};else{var s=tj(e);o=function(){return s}}function c(e,t){void 0===e&&(e=o());var n=tp([i[t.type]],l.filter(function(e){return(0,e.matcher)(t)}).map(function(e){return e.reducer}));return 0===n.filter(function(e){return!!e}).length&&(n=[u]),n.reduce(function(e,n){if(n){if(en(e)){var r=n(e,t);return void 0===r?e:r}if(er(e))return eX(e,function(e){return n(e,t)});var r=n(e,t);if(void 0===r){if(null===e)return e;throw Error("A case reducer on a non-draftable value must not return undefined")}return r}return e},e)}return c.getInitialState=o,c}(r,function(e){for(var t in s)e.addCase(t,s[t]);for(var n=0;n<a.length;n++){var r=a[n];e.addMatcher(r.matcher,r.reducer)}u&&e.addDefaultCase(u)})}return a.forEach(function(e){var t,r,a=o[e],s=n+"/"+e;"reducer"in a?(t=a.reducer,r=a.prepare):t=a,i[e]=t,l[s]=t,u[e]=r?tE(s,r):tE(s)}),{name:n,reducer:function(e,n){return t||(t=s()),t(e,n)},actions:u,caseReducers:i,getInitialState:function(){return t||(t=s()),t.getInitialState()}}}var tT=function(e){void 0===e&&(e=21);for(var t="",n=e;n--;)t+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return t},tN=["name","message","stack","code"],tL=function(e,t){this.payload=e,this.meta=t},tA=function(e,t){this.payload=e,this.meta=t},tM=function(e){if("object"==typeof e&&null!==e){for(var t={},n=0;n<tN.length;n++){var r=tN[n];"string"==typeof e[r]&&(t[r]=e[r])}return t}return{message:String(e)}};function tD(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}!function(){function e(e,t,n){var r=tE(e+"/fulfilled",function(e,t,n,r){return{payload:e,meta:tx(tS({},r||{}),{arg:n,requestId:t,requestStatus:"fulfilled"})}}),o=tE(e+"/pending",function(e,t,n){return{payload:void 0,meta:tx(tS({},n||{}),{arg:t,requestId:e,requestStatus:"pending"})}}),a=tE(e+"/rejected",function(e,t,r,o,a){return{payload:o,error:(n&&n.serializeError||tM)(e||"Rejected"),meta:tx(tS({},a||{}),{arg:r,requestId:t,rejectedWithValue:!!o,requestStatus:"rejected",aborted:(null==e?void 0:e.name)==="AbortError",condition:(null==e?void 0:e.name)==="ConditionError"})}}),i="undefined"!=typeof AbortController?AbortController:/** @class */function(){function e(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return e.prototype.abort=function(){},e}();return Object.assign(function(e){return function(l,u,s){var c,f=(null==n?void 0:n.idGenerator)?n.idGenerator(e):tT(),d=new i;function p(e){c=e,d.abort()}var h=function(){var i,h;return i=this,h=function(){var i,h,m,v,y,g;return td(this,function(b){switch(b.label){case 0:var w;if(b.trys.push([0,4,,5]),!(null!==(w=v=null==(i=null==n?void 0:n.condition)?void 0:i.call(n,e,{getState:u,extra:s}))&&"object"==typeof w&&"function"==typeof w.then))return[3/*break*/,2];return[4/*yield*/,v];case 1:v=b.sent(),b.label=2;case 2:if(!1===v||d.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return y=new Promise(function(e,t){return d.signal.addEventListener("abort",function(){return t({name:"AbortError",message:c||"Aborted"})})}),l(o(f,e,null==(h=null==n?void 0:n.getPendingMeta)?void 0:h.call(n,{requestId:f,arg:e},{getState:u,extra:s}))),[4/*yield*/,Promise.race([y,Promise.resolve(t(e,{dispatch:l,getState:u,extra:s,requestId:f,signal:d.signal,abort:p,rejectWithValue:function(e,t){return new tL(e,t)},fulfillWithValue:function(e,t){return new tA(e,t)}})).then(function(t){if(t instanceof tL)throw t;return t instanceof tA?r(t.payload,f,e,t.meta):r(t,f,e)})])];case 3:return m=b.sent(),[3/*break*/,5];case 4:return m=(g=b.sent())instanceof tL?a(null,f,e,g.payload,g.meta):a(g,f,e),[3/*break*/,5];case 5:return n&&!n.dispatchConditionRejection&&a.match(m)&&m.meta.condition||l(m),[2/*return*/,m]}})},new Promise(function(e,t){var n=function(e){try{o(h.next(e))}catch(e){t(e)}},r=function(e){try{o(h.throw(e))}catch(e){t(e)}},o=function(t){return t.done?e(t.value):Promise.resolve(t.value).then(n,r)};o((h=h.apply(i,null)).next())})}();return Object.assign(h,{abort:p,requestId:f,arg:e,unwrap:function(){return h.then(tD)}})}},{pending:o,rejected:a,fulfilled:r,typePrefix:e})}e.withTypes=function(){return e}}();var tI="listenerMiddleware";tE(tI+"/add"),tE(tI+"/removeAll"),tE(tI+"/remove"),"function"==typeof queueMicrotask&&queueMicrotask.bind("undefined"!=typeof window?window:void 0!==s?s:globalThis),"undefined"!=typeof window&&window.requestAnimationFrame&&window.requestAnimationFrame,function(){function e(e,t){var n=o[e];return n?n.enumerable=t:o[e]=n={configurable:!0,enumerable:t,get:function(){var t=this[e$];return eQ.get(t,e)},set:function(t){var n=this[e$];eQ.set(n,e,t)}},n}function t(e){for(var t=e.length-1;t>=0;t--){var o=e[t][e$];if(!o.P)switch(o.i){case 5:r(o)&&eP(o);break;case 4:n(o)&&eP(o)}}}function n(e){for(var t=e.t,n=e.k,r=eW(n),o=r.length-1;o>=0;o--){var a=r[o];if(a!==e$){var i=t[a];if(void 0===i&&!ei(t,a))return!0;var l=n[a],u=l&&l[e$];if(u?u.t!==i:!eu(l,i))return!0}}var s=!!t[e$];return r.length!==eW(t).length+(s?0:1)}function r(e){var t=e.k;if(t.length!==e.t.length)return!0;var n=Object.getOwnPropertyDescriptor(t,t.length-1);if(n&&!n.get)return!0;for(var r=0;r<t.length;r++)if(!t.hasOwnProperty(r))return!0;return!1}var o={};eq.ES5||(eq.ES5={J:function(t,n){var r=Array.isArray(t),o=function(t,n){if(t){for(var r=Array(n.length),o=0;o<n.length;o++)Object.defineProperty(r,""+o,e(o,!0));return r}var a=eH(n);delete a[e$];for(var i=eW(a),l=0;l<i.length;l++){var u=i[l];a[u]=e(u,t||!!a[u].enumerable)}return Object.create(Object.getPrototypeOf(n),a)}(r,t),a={i:r?5:4,A:n?n.A:eM,P:!1,I:!1,R:{},l:n,t:t,k:o,o:null,g:!1,C:!1};return Object.defineProperty(o,e$,{value:a,writable:!0}),o},S:function(e,n,o){o?en(n)&&n[e$].A===e&&t(e.p):(e.u&&function e(t){if(t&&"object"==typeof t){var n=t[e$];if(n){var o=n.t,a=n.k,i=n.R,l=n.i;if(4===l)eo(a,function(t){t!==e$&&(void 0!==o[t]||ei(o,t)?i[t]||e(a[t]):(i[t]=!0,eP(n)))}),eo(o,function(e){void 0!==a[e]||ei(a,e)||(i[e]=!1,eP(n))});else if(5===l){if(r(n)&&(eP(n),i.length=!0),a.length<o.length)for(var u=a.length;u<o.length;u++)i[u]=!1;else for(var s=o.length;s<a.length;s++)i[s]=!0;for(var c=Math.min(a.length,o.length),f=0;f<c;f++)a.hasOwnProperty(f)||(i[f]=!0),void 0===i[f]&&e(a[f])}}}}(e.p[0]),t(e.p))},K:function(e){return 4===e.i?n(e):r(e)}})}();const tz=(0,ee.createSlice)({name:"cart",initialState:{items:[]},reducers:{addItem:(e,t)=>{e.items.push(t.payload)},removeItem:(e,t)=>{e.items.pop()},clearCart:e=>{e.items=[]}}}),{addItem:tF,removeItem:tU,clearCart:tB}=tz.actions;var t$=tz.reducer,h=d("5aRSq"),J=(d("20iM3"),d("20iM3")),b=d("gLC8N"),h=d("5aRSq");d("4Iuzv");var tV=function(e){var t;return!!e&&"object"==typeof e&&"[object RegExp]"!==(t=Object.prototype.toString.call(e))&&"[object Date]"!==t&&e.$$typeof!==tW},tW="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function tH(e,t){return!1!==t.clone&&t.isMergeableObject(e)?tQ(Array.isArray(e)?[]:{},e,t):e}function tq(e,t,n){return e.concat(t).map(function(e){return tH(e,n)})}function tQ(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||tq,n.isMergeableObject=n.isMergeableObject||tV;var r,o,a=Array.isArray(t);return a!==Array.isArray(e)?tH(t,n):a?n.arrayMerge(e,t,n):(o={},(r=n).isMergeableObject(e)&&Object.keys(e).forEach(function(t){o[t]=tH(e[t],r)}),Object.keys(t).forEach(function(n){r.isMergeableObject(t[n])&&e[n]?o[n]=tQ(e[n],t[n],r):o[n]=tH(t[n],r)}),o)}tQ.all=function(e,t){if(!Array.isArray(e))throw Error("first argument should be an array");return e.reduce(function(e,n){return tQ(e,n,t)},{})};var tK=tQ,tY=d("lY1i9"),tX=tY.default.Symbol,tG=Object.prototype,tJ=tG.hasOwnProperty,tZ=tG.toString,t0=tX?tX.toStringTag:void 0,t1=/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function(e){var t=tJ.call(e,t0),n=e[t0];try{e[t0]=void 0;var r=!0}catch(e){}var o=tZ.call(e);return r&&(t?e[t0]=n:delete e[t0]),o},t2=Object.prototype.toString,t3=tX?tX.toStringTag:void 0,t4=/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":t3&&t3 in Object(e)?t1(e):t2.call(e)},t5=/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */function(e,t){return function(n){return e(t(n))}},t6=t5(Object.getPrototypeOf,Object),t8=/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */function(e){return null!=e&&"object"==typeof e},t9=Object.prototype,t7=Function.prototype.toString,ne=t9.hasOwnProperty,nt=t7.call(Object),nn=/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */function(e){if(!t8(e)||"[object Object]"!=t4(e))return!1;var t=t6(e);if(null===t)return!0;var n=ne.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&t7.call(n)==nt},m=d("4Iuzv"),nr={},no=Array.isArray,na=Object.keys,ni=Object.prototype.hasOwnProperty,nl="undefined"!=typeof Element;// end fast-deep-equal
nr=function(e,t){try{return function e(t,n){// fast-deep-equal index.js 2.0.1
if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var r,o,a,i=no(t),l=no(n);if(i&&l){if((o=t.length)!=n.length)return!1;for(r=o;0!=r--;)if(!e(t[r],n[r]))return!1;return!0}if(i!=l)return!1;var u=t instanceof Date,s=n instanceof Date;if(u!=s)return!1;if(u&&s)return t.getTime()==n.getTime();var c=t instanceof RegExp,f=n instanceof RegExp;if(c!=f)return!1;if(c&&f)return t.toString()==n.toString();var d=na(t);if((o=d.length)!==na(n).length)return!1;for(r=o;0!=r--;)if(!ni.call(n,d[r]))return!1;// end fast-deep-equal
// start react-fast-compare
// custom handling for DOM elements
if(nl&&t instanceof Element&&n instanceof Element)return t===n;// custom handling for React
for(r=o;0!=r--;)if(("_owner"!==(a=d[r])||!t.$$typeof)&&!e(t[a],n[a]))return!1;// end react-fast-compare
// fast-deep-equal index.js 2.0.1
return!0}return t!=t&&n!=n}(e,t)}catch(e){if(e.message&&e.message.match(/stack|recursion/i)||-2146828260===e.number)return(// warn on circular references, don't crash
// browsers give this different errors name and messages:
// chrome/safari: "RangeError", "Maximum call stack size exceeded"
// firefox: "InternalError", too much recursion"
// edge: "Error", "Out of stack space"
console.warn("Warning: react-fast-compare does not handle circular references.",e.name,e.message),!1);// some other error. we should definitely know about these
throw e}};var nu=function(e,t){},ns=/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */function(e,t){return e===t||e!=e&&t!=t},nc=/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function(e,t){for(var n=e.length;n--;)if(ns(e[n][0],t))return n;return -1},nf=Array.prototype.splice;/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function nd(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}// Add methods to `ListCache`.
nd.prototype.clear=/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */function(){this.__data__=[],this.size=0},nd.prototype.delete=/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function(e){var t=this.__data__,n=nc(t,e);return!(n<0)&&(n==t.length-1?t.pop():nf.call(t,n,1),--this.size,!0)},nd.prototype.get=/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function(e){var t=this.__data__,n=nc(t,e);return n<0?void 0:t[n][1]},nd.prototype.has=/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function(e){return nc(this.__data__,e)>-1},nd.prototype.set=/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */function(e,t){var n=this.__data__,r=nc(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};var np=/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},nh=/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */function(e){if(!np(e))return!1;// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed arrays and other constructors.
var t=t4(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},tY=d("lY1i9"),nm=tY.default["__core-js_shared__"],nv=(r=/[^.]+$/.exec(nm&&nm.keys&&nm.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"",ny=Function.prototype.toString,ng=/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */function(e){if(null!=e){try{return ny.call(e)}catch(e){}try{return e+""}catch(e){}}return""},nb=/^\[object .+?Constructor\]$/,nw=Object.prototype,nS=Function.prototype.toString,nx=nw.hasOwnProperty,nk=RegExp("^"+nS.call(nx).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),nE=/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */function(e,t){var n,r=null==e?void 0:e[t];return np(n=r)&&(!nv||!(nv in n))&&(nh(n)?nk:nb).test(ng(n))?r:void 0},tY=d("lY1i9"),n_=nE(tY.default,"Map"),nC=nE(Object,"create"),nj=Object.prototype.hasOwnProperty,nP=Object.prototype.hasOwnProperty;/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function nR(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}// Add methods to `Hash`.
nR.prototype.clear=/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */function(){this.__data__=nC?nC(null):{},this.size=0},nR.prototype.delete=/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},nR.prototype.get=/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function(e){var t=this.__data__;if(nC){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return nj.call(t,e)?t[e]:void 0},nR.prototype.has=/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function(e){var t=this.__data__;return nC?void 0!==t[e]:nP.call(t,e)},nR.prototype.set=/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=nC&&void 0===t?"__lodash_hash_undefined__":t,this};var nO=/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},nT=/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */function(e,t){var n=e.__data__;return nO(t)?n["string"==typeof t?"string":"hash"]:n.map};/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function nN(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function nL(e){var t=this.__data__=new nd(e);this.size=t.size}// Add methods to `MapCache`.
nN.prototype.clear=/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */function(){this.size=0,this.__data__={hash:new nR,map:new(n_||nd),string:new nR}},nN.prototype.delete=/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function(e){var t=nT(this,e).delete(e);return this.size-=t?1:0,t},nN.prototype.get=/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function(e){return nT(this,e).get(e)},nN.prototype.has=/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function(e){return nT(this,e).has(e)},nN.prototype.set=/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */function(e,t){var n=nT(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},// Add methods to `Stack`.
nL.prototype.clear=/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */function(){this.__data__=new nd,this.size=0},nL.prototype.delete=/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},nL.prototype.get=/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function(e){return this.__data__.get(e)},nL.prototype.has=/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function(e){return this.__data__.has(e)},nL.prototype.set=/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */function(e,t){var n=this.__data__;if(n instanceof nd){var r=n.__data__;if(!n_||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new nN(r)}return n.set(e,t),this.size=n.size,this};var nA=/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e},nM=function(){try{var e=nE(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),nD=/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function(e,t,n){"__proto__"==t&&nM?nM(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n},nI=Object.prototype.hasOwnProperty,nz=/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function(e,t,n){var r=e[t];nI.call(e,t)&&ns(r,n)&&(void 0!==n||t in e)||nD(e,t,n)},nF=/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */function(e,t,n,r){var o=!n;n||(n={});for(var a=-1,i=t.length;++a<i;){var l=t[a],u=r?r(n[l],e[l],l,n,e):void 0;void 0===u&&(u=e[l]),o?nD(n,l,u):nz(n,l,u)}return n},nU=/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},nB=/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */function(e){return t8(e)&&"[object Arguments]"==t4(e)},n$=Object.prototype,nV=n$.hasOwnProperty,nW=n$.propertyIsEnumerable,nH=nB(function(){return arguments}())?nB:function(e){return t8(e)&&nV.call(e,"callee")&&!nW.call(e,"callee")},nq=Array.isArray,nQ=d("2wi20"),nK=/^(?:0|[1-9]\d*)$/,nY=/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&nK.test(e))&&e>-1&&e%1==0&&e<t},nX=/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},nG={};nG["[object Float32Array]"]=nG["[object Float64Array]"]=nG["[object Int8Array]"]=nG["[object Int16Array]"]=nG["[object Int32Array]"]=nG["[object Uint8Array]"]=nG["[object Uint8ClampedArray]"]=nG["[object Uint16Array]"]=nG["[object Uint32Array]"]=!0,nG["[object Arguments]"]=nG["[object Array]"]=nG["[object ArrayBuffer]"]=nG["[object Boolean]"]=nG["[object DataView]"]=nG["[object Date]"]=nG["[object Error]"]=nG["[object Function]"]=nG["[object Map]"]=nG["[object Number]"]=nG["[object Object]"]=nG["[object RegExp]"]=nG["[object Set]"]=nG["[object String]"]=nG["[object WeakMap]"]=!1;var nJ=/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */function(e){return function(t){return e(t)}},nZ=d("fhYeL"),n0=nZ.default&&nZ.default.isTypedArray,n1=n0?nJ(n0):/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */function(e){return t8(e)&&nX(e.length)&&!!nG[t4(e)]},n2=Object.prototype.hasOwnProperty,n3=/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */function(e,t){var n=nq(e),r=!n&&nH(e),o=!n&&!r&&(0,nQ.default)(e),a=!n&&!r&&!o&&n1(e),i=n||r||o||a,l=i?nU(e.length,String):[],u=l.length;for(var s in e)(t||n2.call(e,s))&&!(i&&// Safari 9 has enumerable `arguments.length` in strict mode.
("length"==s||// Node.js 0.10 has enumerable non-index properties on buffers.
o&&("offset"==s||"parent"==s)||// PhantomJS 2 has enumerable non-index properties on typed arrays.
a&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||nY(s,u)))&&l.push(s);return l},n4=Object.prototype,n5=/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||n4)},n6=t5(Object.keys,Object),n8=Object.prototype.hasOwnProperty,n9=/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function(e){if(!n5(e))return n6(e);var t=[];for(var n in Object(e))n8.call(e,n)&&"constructor"!=n&&t.push(n);return t},n7=/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */function(e){return null!=e&&nX(e.length)&&!nh(e)},re=/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */function(e){return n7(e)?n3(e):n9(e)},rt=/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t},rn=Object.prototype.hasOwnProperty,rr=/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function(e){if(!np(e))return rt(e);var t=n5(e),n=[];for(var r in e)"constructor"==r&&(t||!rn.call(e,r))||n.push(r);return n},ro=/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */function(e){return n7(e)?n3(e,!0):rr(e)},ra=d("jfr5X"),ri=/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */function(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t},rl=/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */function(e,t){for(var n=-1,r=null==e?0:e.length,o=0,a=[];++n<r;){var i=e[n];t(i,n,e)&&(a[o++]=i)}return a},ru=/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */function(){return[]},rs=Object.prototype.propertyIsEnumerable,rc=Object.getOwnPropertySymbols,rf=rc?function(e){return null==e?[]:rl(rc(e=Object(e)),function(t){return rs.call(e,t)})}:ru,rd=/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e},rp=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)rd(t,rf(e)),e=t6(e);return t}:ru,rh=/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */function(e,t,n){var r=t(e);return nq(e)?r:rd(r,n(e))},rm=/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */function(e){return rh(e,re,rf)},rv=/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */function(e){return rh(e,ro,rp)},tY=d("lY1i9"),ry=nE(tY.default,"DataView"),tY=d("lY1i9"),rg=nE(tY.default,"Promise"),tY=d("lY1i9"),rb=nE(tY.default,"Set"),tY=d("lY1i9"),rw=nE(tY.default,"WeakMap"),rS="[object Map]",rx="[object Promise]",rk="[object Set]",rE="[object WeakMap]",r_="[object DataView]",rC=ng(ry),rj=ng(n_),rP=ng(rg),rR=ng(rb),rO=ng(rw),rT=t4;(ry&&rT(new ry(new ArrayBuffer(1)))!=r_||n_&&rT(new n_)!=rS||rg&&rT(rg.resolve())!=rx||rb&&rT(new rb)!=rk||rw&&rT(new rw)!=rE)&&(rT=function(e){var t=t4(e),n="[object Object]"==t?e.constructor:void 0,r=n?ng(n):"";if(r)switch(r){case rC:return r_;case rj:return rS;case rP:return rx;case rR:return rk;case rO:return rE}return t});var rN=rT,rL=Object.prototype.hasOwnProperty,rA=/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */function(e){var t=e.length,n=new e.constructor(t);return t&&"string"==typeof e[0]&&rL.call(e,"index")&&(n.index=e.index,n.input=e.input),n},tY=d("lY1i9"),rM=tY.default.Uint8Array,rD=/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */function(e){var t=new e.constructor(e.byteLength);return new rM(t).set(new rM(e)),t},rI=/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */function(e,t){var n=t?rD(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)},rz=/\w*$/,rF=/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */function(e){var t=new e.constructor(e.source,rz.exec(e));return t.lastIndex=e.lastIndex,t},rU=tX?tX.prototype:void 0,rB=rU?rU.valueOf:void 0,r$=/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */function(e,t){var n=t?rD(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)},rV=/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */function(e,t,n){var r=e.constructor;switch(t){case"[object ArrayBuffer]":return rD(e);case"[object Boolean]":case"[object Date]":return new r(+e);case"[object DataView]":return rI(e,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return r$(e,n);case"[object Map]":case"[object Set]":return new r;case"[object Number]":case"[object String]":return new r(e);case"[object RegExp]":return rF(e);case"[object Symbol]":return rB?Object(rB.call(e)):{}}},rW=Object.create,rH=function(){function e(){}return function(t){if(!np(t))return{};if(rW)return rW(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}(),nQ=d("2wi20"),nZ=d("fhYeL"),rq=nZ.default&&nZ.default.isMap,rQ=rq?nJ(rq):/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */function(e){return t8(e)&&"[object Map]"==rN(e)},nZ=d("fhYeL"),rK=nZ.default&&nZ.default.isSet,rY=rK?nJ(rK):/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */function(e){return t8(e)&&"[object Set]"==rN(e)},rX="[object Arguments]",rG="[object Function]",rJ="[object Object]",rZ={};rZ[rX]=rZ["[object Array]"]=rZ["[object ArrayBuffer]"]=rZ["[object DataView]"]=rZ["[object Boolean]"]=rZ["[object Date]"]=rZ["[object Float32Array]"]=rZ["[object Float64Array]"]=rZ["[object Int8Array]"]=rZ["[object Int16Array]"]=rZ["[object Int32Array]"]=rZ["[object Map]"]=rZ["[object Number]"]=rZ[rJ]=rZ["[object RegExp]"]=rZ["[object Set]"]=rZ["[object String]"]=rZ["[object Symbol]"]=rZ["[object Uint8Array]"]=rZ["[object Uint8ClampedArray]"]=rZ["[object Uint16Array]"]=rZ["[object Uint32Array]"]=!0,rZ["[object Error]"]=rZ[rG]=rZ["[object WeakMap]"]=!1;var r0=/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */function e(t,n,r,o,a,i){var l,u=1&n,s=2&n,c=4&n;if(r&&(l=a?r(t,o,a,i):r(t)),void 0!==l)return l;if(!np(t))return t;var f=nq(t);if(f){if(l=rA(t),!u)return ri(t,l)}else{var d,p,h,m,v=rN(t),y=v==rG||"[object GeneratorFunction]"==v;if((0,nQ.default)(t))return(0,ra.default)(t,u);if(v==rJ||v==rX||y&&!a){if(l=s||y?{}:"function"!=typeof t.constructor||n5(t)?{}:rH(t6(t)),!u)return s?(p=(d=l)&&nF(t,ro(t),d),nF(t,rp(t),p)):(m=(h=l)&&nF(t,re(t),h),nF(t,rf(t),m))}else{if(!rZ[v])return a?t:{};l=rV(t,v,u)}}// Check for circular references and return its corresponding clone.
i||(i=new nL);var g=i.get(t);if(g)return g;i.set(t,l),rY(t)?t.forEach(function(o){l.add(e(o,n,r,o,t,i))}):rQ(t)&&t.forEach(function(o,a){l.set(a,e(o,n,r,a,t,i))});var b=c?s?rv:rm:s?ro:re,w=f?void 0:b(t);return nA(w||t,function(o,a){w&&(o=t[a=o]),nz(l,a,e(o,n,r,a,t,i))}),l},r1=/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */function(e){return r0(e,4)},r2=/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},r3=/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */function(e){return"symbol"==typeof e||t8(e)&&"[object Symbol]"==t4(e)};/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */function r4(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var i=e.apply(this,r);return n.cache=a.set(o,i)||a,i};return n.cache=new(r4.Cache||nN),n}// Expose `MapCache`.
r4.Cache=nN;/** Used to match property names within property paths. */var r5=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,r6=/\\(\\)?/g,r8=(a=(o=r4(function(e){var t=[];return 46/* . */===e.charCodeAt(0)&&t.push(""),e.replace(r5,function(e,n,r,o){t.push(r?o.replace(r6,"$1"):n||e)}),t},function(e){return 500===a.size&&a.clear(),e})).cache,o),r9=1/0,r7=/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */function(e){if("string"==typeof e||r3(e))return e;var t=e+"";return"0"==t&&1/e==-r9?"-0":t},oe=1/0,ot=tX?tX.prototype:void 0,on=ot?ot.toString:void 0,or=/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */function e(t){// Exit early for strings to avoid a performance hit in some environments.
if("string"==typeof t)return t;if(nq(t))return r2(t,e)+"";if(r3(t))return on?on.call(t):"";var n=t+"";return"0"==n&&1/t==-oe?"-0":n},oo=/**
 * Converts `value` to a property path array.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Util
 * @param {*} value The value to convert.
 * @returns {Array} Returns the new property path array.
 * @example
 *
 * _.toPath('a.b.c');
 * // => ['a', 'b', 'c']
 *
 * _.toPath('a[0].b.c');
 * // => ['a', '0', 'b', 'c']
 */function(e){return nq(e)?r2(e,r7):r3(e)?[e]:ri(r8(null==e?"":or(e)))};function oa(){return(oa=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function oi(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function ol(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var ou=/*#__PURE__*/(0,m.createContext)(void 0);ou.displayName="FormikContext",ou.Provider,ou.Consumer;var os=function(e){return Array.isArray(e)&&0===e.length},oc=function(e){return"function"==typeof e},of=function(e){return null!==e&&"object"==typeof e},od=function(e){return"[object String]"===Object.prototype.toString.call(e)},op=function(e){return of(e)&&oc(e.then)};/**
 * Deeply get a value from an object via its path.
 */function oh(e,t,n,r){void 0===r&&(r=0);for(var o=oo(t);e&&r<o.length;)e=e[o[r++]];return(// check if path is not in the end
r===o.length||e?void 0===e?n:e:n)}/**
 * Deeply set a value from in object via it's path. If the value at `path`
 * has changed, return a shallow copy of obj with `value` set at `path`.
 * If `value` has not changed, return the original `obj`.
 *
 * Existing objects / arrays along `path` are also shallow copied. Sibling
 * objects along path retain the same internal js reference. Since new
 * objects / arrays are only created along `path`, we can test if anything
 * changed in a nested structure by comparing the object's reference in
 * the old and new object, similar to how russian doll cache invalidation
 * works.
 *
 * In earlier versions of this function, which used cloneDeep, there were
 * issues whereby settings a nested value would mutate the parent
 * instead of creating a new object. `clone` avoids that bug making a
 * shallow copy of the objects along the update path
 * so no object is mutated in place.
 *
 * Before changing this function, please read through the following
 * discussions.
 *
 * @see https://github.com/developit/linkstate
 * @see https://github.com/jaredpalmer/formik/pull/123
 */function om(e,t,n){for(var r=r1(e),o=r,a=0,i=oo(t);a<i.length-1;a++){var l=i[a],u=oh(e,i.slice(0,a+1));if(u&&(of(u)||Array.isArray(u)))o=o[l]=r1(u);else{var s=i[a+1];o=o[l]=String(Math.floor(Number(s)))===s&&Number(s)>=0?[]:{}}}// Return original object if new value is the same as current
return(0===a?e:o)[i[a]]===n?e:(void 0===n?delete o[i[a]]:o[i[a]]=n,0===a&&void 0===n&&delete r[i[a]],r)}var ov={},oy={};/**
 * deepmerge array merging algorithm
 * https://github.com/KyleAMathews/deepmerge#combine-array
 */function og(e,t,n){var r=e.slice();return t.forEach(function(t,o){if(void 0===r[o]){var a=!1!==n.clone&&n.isMergeableObject(t);r[o]=a?tK(Array.isArray(t)?[]:{},t,n):t}else n.isMergeableObject(t)?r[o]=tK(e[o],t,n):-1===e.indexOf(t)&&r.push(t)}),r}// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
// @see https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
var ob="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?m.useLayoutEffect:m.useEffect;function ow(e){var t=(0,m.useRef)(e);// we copy a ref to the callback scoped to the current state/props on each render
return ob(function(){t.current=e}),(0,m.useCallback)(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.current.apply(void 0,n)},[])}/*#__PURE__*/(0,m.forwardRef)(function(e,t){// iOS needs an "action" attribute for nice input: https://stackoverflow.com/a/39485162/406725
// We default the action to "#" in case the preventDefault fails (just updates the URL hash)
var n,r=e.action,o=oi(e,["action"]),a=((n=(0,m.useContext)(ou))||nu(!1),n),i=a.handleReset,l=a.handleSubmit;return(0,m.createElement)("form",oa({onSubmit:l,ref:t,onReset:i,action:null!=r?r:"#"},o))}).displayName="Form";/**
 * Some array helpers!
 */var oS=function(e,t,n){var r=o_(e),o=r[t];return r.splice(t,1),r.splice(n,0,o),r},ox=function(e,t,n){var r=o_(e),o=r[t];return r[t]=r[n],r[n]=o,r},ok=function(e,t,n){var r=o_(e);return r.splice(t,0,n),r},oE=function(e,t,n){var r=o_(e);return r[t]=n,r},o_=function(e){if(!e)return[];if(Array.isArray(e))return[].concat(e);var t=Object.keys(e).map(function(e){return parseInt(e)}).reduce(function(e,t){return t>e?t:e},0);return Array.from(oa({},e,{length:t+1}))},oC=function(e,t){var n="function"==typeof e?e:t;return function(e){return Array.isArray(e)||of(e)?n(o_(e)):e// This can be assumed to be a primitive, which
}};/*#__PURE__*/(function(e){function n(t){var n;return(// @todo Fix TS 3.2.1
(n=e.call(this,t)||this).updateArrayField=function(e,t,r){var o=n.props,a=o.name;(0,o.formik.setFormikState)(function(n){var o=oC(r,e),i=oC(t,e),l=om(n.values,a,e(oh(n.values,a))),u=r?o(oh(n.errors,a)):void 0,s=t?i(oh(n.touched,a)):void 0;return os(u)&&(u=void 0),os(s)&&(s=void 0),oa({},n,{values:l,errors:r?om(n.errors,a,u):n.errors,touched:t?om(n.touched,a,s):n.touched})})},n.push=function(e){return n.updateArrayField(function(t){return[].concat(o_(t),[r0(e,5)])},!1,!1)},n.handlePush=function(e){return function(){return n.push(e)}},n.swap=function(e,t){return n.updateArrayField(function(n){return ox(n,e,t)},!0,!0)},n.handleSwap=function(e,t){return function(){return n.swap(e,t)}},n.move=function(e,t){return n.updateArrayField(function(n){return oS(n,e,t)},!0,!0)},n.handleMove=function(e,t){return function(){return n.move(e,t)}},n.insert=function(e,t){return n.updateArrayField(function(n){return ok(n,e,t)},function(t){return ok(t,e,null)},function(t){return ok(t,e,null)})},n.handleInsert=function(e,t){return function(){return n.insert(e,t)}},n.replace=function(e,t){return n.updateArrayField(function(n){return oE(n,e,t)},!1,!1)},n.handleReplace=function(e,t){return function(){return n.replace(e,t)}},n.unshift=function(e){var t=-1;return n.updateArrayField(function(n){var r=n?[e].concat(n):[e];return t=r.length,r},function(e){return e?[null].concat(e):[null]},function(e){return e?[null].concat(e):[null]}),t},n.handleUnshift=function(e){return function(){return n.unshift(e)}},n.handleRemove=function(e){return function(){return n.remove(e)}},n.handlePop=function(){return function(){return n.pop()}},n.remove=n.remove.bind(ol(n)),n.pop=n.pop.bind(ol(n)),n)}n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e;var r=n.prototype;return r.componentDidUpdate=function(e){this.props.validateOnChange&&this.props.formik.validateOnChange&&!/*@__PURE__*/t(nr)(oh(e.formik.values,e.name),oh(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},r.remove=function(e){// We need to make sure we also remove relevant pieces of `touched` and `errors`
var t;return this.updateArrayField(function(n){var r=n?o_(n):[];// if the array only includes undefined values we have to return an empty array
return t||(t=r[e]),oc(r.splice)&&r.splice(e,1),oc(r.every)&&r.every(function(e){return void 0===e})?[]:r},!0,!0),t},r.pop=function(){// Remove relevant pieces of `touched` and `errors` too!
var e;return this.updateArrayField(function(t){var n=t.slice();return e||(e=n&&n.pop&&n.pop()),n},!0,!0),e},r.render=function(){var e={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},t=this.props,n=t.component,r=t.render,o=t.children,a=t.name,i=oi(t.formik,["validate","validationSchema"]),l=oa({},e,{form:i,name:a});return n?(0,m.createElement)(n,l):r?r(l):o// children come last, always called
?"function"==typeof o?o(l):0===(0,m.Children).count(o)?null:(0,m.Children).only(o):null},n})(m.Component).defaultProps={validateOnChange:!0},m.Component,m.Component;// Pass the useFormik() hook initial form values and a submit function that will
// be called when the form is submitted
// Note that we have to initialize ALL of fields with values. These
// could come from props, but since we don’t want to prefill this form,
// we just use an empty string. If we don’t do this, React will yell
// at us.
// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const oj=e=>{let t={};return e.firstName?e.firstName.length>15&&(t.firstName="Must be 15 characters or less"):t.firstName="Required",e.lastName?e.lastName.length>20&&(t.lastName="Must be 20 characters or less"):t.lastName="Required",e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t};var S=d("fmRNI");const oP=(0,ee.configureStore)({reducer:{cart:t$}});var h=(d("5aRSq"),d("5aRSq")),oR=({name:e,description:t,price:n,imageId:r})=>/*#__PURE__*/(0,h.jsxs)("div",{className:"w-48 p-2 m-4 shadow-lg bg-pink-100 ",children:[/*#__PURE__*/(0,h.jsx)("img",{src:Q+r}),/*#__PURE__*/(0,h.jsx)("h2",{className:"font-bold text-xl",children:e}),/*#__PURE__*/(0,h.jsx)("h3",{className:"overflow-hidden text-ellipsis",children:t}),/*#__PURE__*/(0,h.jsxs)("h4",{children:["Rs- ",n/100]})]});// import Instamart from "./components/instamart";
const oO=/*#__PURE__*/(0,m.lazy)(()=>d("an8Kr")),oT=/*#__PURE__*/(0,m.lazy)(()=>d("8RAaX")),oN=(0,b.createBrowserRouter)([{path:"/",element:/*#__PURE__*/(0,h.jsx)(()=>{let[e,t]=(0,m.useState)({name:"Alish Rawat",email:"supportalish@gmail.com"});return/*#__PURE__*/(0,h.jsx)(B,{store:oP,children:/*#__PURE__*/(0,h.jsxs)(S.default.Provider,{value:{user:e,setUser:t},children:[/*#__PURE__*/(0,h.jsx)(q,{}),/*#__PURE__*/(0,h.jsx)(J.Outlet,{}),/*#__PURE__*/(0,h.jsx)(X,{})]})})},{}),errorElement:/*#__PURE__*/(0,h.jsx)(()=>{let e=(0,J.useRouteError)();return console.log(e),/*#__PURE__*/(0,h.jsxs)("div",{children:[/*#__PURE__*/(0,h.jsx)("h1",{children:"Oops!"}),/*#__PURE__*/(0,h.jsx)("h2",{children:"Something went Wrong"}),/*#__PURE__*/(0,h.jsx)("h2",{children:e.status+":"+e.statusText})]})},{}),children:[{path:"/",element:/*#__PURE__*/(0,h.jsx)(()=>{let[e,n]=(0,m.useState)(""),[r,o]=(0,m.useState)([]),[a,i]=(0,m.useState)([]),{user:l,setUser:u}=(0,m.useContext)(S.default);async function s(){let e=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.537970195220126&lng=77.26460639387369"),t=await e.json();// console.log(
//   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
// );
o(t?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants),i(t?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)}(0,m.useEffect)(()=>{s()},[]);let c=w();return c?r?r?.length===0?/*#__PURE__*/(0,h.jsx)(Y,{}):/*#__PURE__*/(0,h.jsxs)(/*@__PURE__*/t(m).Fragment,{children:[/*#__PURE__*/(0,h.jsxs)("div",{className:"p-5 bg-pink-100 my-5",children:[/*#__PURE__*/(0,h.jsx)("input",{"data-testid":"inputt",type:"text",className:"focus:bg-sky-200 p-2 w-60 m-2",placeholder:"search",value:e,onChange:e=>{// e.target.value = whatver we write in input
n(e.target.value)}}),/*#__PURE__*/(0,h.jsx)("button",{className:"p-2 m-3 hover:bg-blue-500 bg-purple-900 text-white rounded-md","data-testid":"search-btn",onClick:()=>{let t=function(e,t){let n=t.filter(t=>t?.info?.name?.toLowerCase()?.includes(e.toLowerCase()));return n}(e,r);i(t)},children:"Search"}),/*#__PURE__*/(0,h.jsx)("input",{onChange:e=>u({...l,name:e.target.value})}),/*#__PURE__*/(0,h.jsx)("input",{onChange:e=>u({...l,email:e.target.value})})]}),/*#__PURE__*/(0,h.jsx)("div",{className:"flex flex-wrap","data-testid":"res-list",children:0===a.length?/*#__PURE__*/(0,h.jsxs)("div",{children:[/*#__PURE__*/(0,h.jsx)("h1",{children:"No Restaurant Match Your Filter sadasd"}),/*#__PURE__*/(0,h.jsx)("h2",{children:"Plese search relevant restaurants"})]}):a.map(e=>/*#__PURE__*/(0,h.jsx)(b.Link,{to:"/restaurant/"+e.info.id,children:/*#__PURE__*/(0,h.jsx)(K,{...e.info,user:l})},e.info.id))})]}):null:/*#__PURE__*/(0,h.jsx)("h1",{children:"Offline!! check your Internet Connection."})},{user:{name:"Alish",email:"rawtalish@gmail.com"}})},{path:"/about",element:/*#__PURE__*/(0,h.jsx)(m.Suspense,{fallback:/*#__PURE__*/(0,h.jsx)("h2",{children:"Loading....."}),children:/*#__PURE__*/(0,h.jsx)(oT,{})}),children:[{path:"profile",element:/*#__PURE__*/(0,h.jsx)(G.default,{})}]},{path:"/contact",element:/*#__PURE__*/(0,h.jsx)(()=>/*#__PURE__*/(0,h.jsx)("h1",{children:"Contact us Page"}),{})},{path:"/restaurant/:id",element:/*#__PURE__*/(0,h.jsx)(()=>{let e=(0,J.useParams)(),{id:t}=e,{resinfo:n,resmenu:r}=Z(t),o=W(),a=e=>{o(tF(e))};// console.log(id);
return n&&r?/*#__PURE__*/(0,h.jsxs)("div",{className:"flex",children:[/*#__PURE__*/(0,h.jsxs)("div",{children:[/*#__PURE__*/(0,h.jsx)("h1",{children:n?.name}),/*#__PURE__*/(0,h.jsx)("img",{className:"img",src:Q+n?.cloudinaryImageId}),/*#__PURE__*/(0,h.jsxs)("h2",{children:["Restaurant id: ",t]}),/*#__PURE__*/(0,h.jsx)("h3",{children:n?.areaName}),/*#__PURE__*/(0,h.jsx)("h3",{children:n?.city}),/*#__PURE__*/(0,h.jsx)("h3",{children:n?.avgRating}),/*#__PURE__*/(0,h.jsx)("h3",{children:n?.costForTwoMessage})]}),console.log(r),/*#__PURE__*/(0,h.jsxs)("div",{className:"p-5",children:[/*#__PURE__*/(0,h.jsx)("h1",{className:"font-bold text-2xl p-2",children:"Menu"}),/*#__PURE__*/(0,h.jsx)("ul",{"data-testid":"menu",className:"m-2",children:r?.itemCards?.map(e=>h.jsxs("li",{children:[e.card.info.name,h.jsx("button",{"data-testid":"addbtn",onClick:()=>a(e.card.info),className:"p-1 bg-green-100",children:"add"})]},e.card.info.id))})]})]}):/*#__PURE__*/(0,h.jsx)(Y,{})},{})},{path:"/instamart",element:/*#__PURE__*/(0,h.jsxs)(m.Suspense,{fallback:/*#__PURE__*/(0,h.jsx)(Y,{}),children:[/*#__PURE__*/(0,h.jsx)(oO,{}),","]})},{path:"/cart",element:/*#__PURE__*/(0,h.jsx)(()=>{let e=L(e=>e.cart.items),t=W(),n=()=>{t(tB())},r=()=>{t(tU())};return/*#__PURE__*/(0,h.jsxs)(h.Fragment,{children:[/*#__PURE__*/(0,h.jsxs)("h1",{className:"font-bold text-3xl p-2 m-2",children:["Cart Items - ",e.length]}),/*#__PURE__*/(0,h.jsx)("button",{className:"bg-green-300 rounded-md p-3 mx-12",onClick:()=>n(),children:"Clear"}),/*#__PURE__*/(0,h.jsx)("button",{className:"bg-red-400 rounded-md p-3 mx-12",onClick:()=>r(),children:"Remove"}),/*#__PURE__*/(0,h.jsx)("div",{className:"flex p-2 mx-5",children:e.map(e=>/*#__PURE__*/(0,h.jsx)(oR,{...e},e.id))})]})},{})},{path:"/login",element:/*#__PURE__*/(0,h.jsx)(()=>{var e,n,r,o,a,i,l,u,s,c,f,d,p,v,y,g,b,w,S,x,k,E,_,C,j,P,R,O,T,N,L,A,M,D,I,z,F,U,B,$,V,W,H,q,Q,K,Y,X,G,J,Z,ee,et,en,er,eo;// Pass the useFormik() hook initial form values, a validate function that will be called when
// form values change or fields are blurred, and a submit function that will
// be called when the form is submitted
let ea=(r=void 0===(n=(e={initialValues:{firstName:"",lastName:"",email:""},validate:oj,onSubmit:e=>{alert(JSON.stringify(e,null,2))}}).validateOnChange)||n,a=void 0===(o=e.validateOnBlur)||o,l=void 0!==(i=e.validateOnMount)&&i,u=e.isInitialValid,c=void 0!==(s=e.enableReinitialize)&&s,f=e.onSubmit,d=oi(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),p=oa({validateOnChange:r,validateOnBlur:a,validateOnMount:l,onSubmit:f},d),v=(0,m.useRef)(p.initialValues),y=(0,m.useRef)(p.initialErrors||ov),g=(0,m.useRef)(p.initialTouched||oy),b=(0,m.useRef)(p.initialStatus),w=(0,m.useRef)(!1),S=(0,m.useRef)({}),(0,m.useEffect)(function(){return w.current=!0,function(){w.current=!1}},[]),x=(0,m.useState)(0)[1],E=(k=(0,m.useRef)({values:p.initialValues,errors:p.initialErrors||ov,touched:p.initialTouched||oy,status:p.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0})).current,_=(0,m.useCallback)(function(e){var n=k.current;k.current=function(e,n){switch(n.type){case"SET_VALUES":return oa({},e,{values:n.payload});case"SET_TOUCHED":return oa({},e,{touched:n.payload});case"SET_ERRORS":if(/*@__PURE__*/t(nr)(e.errors,n.payload))return e;return oa({},e,{errors:n.payload});case"SET_STATUS":return oa({},e,{status:n.payload});case"SET_ISSUBMITTING":return oa({},e,{isSubmitting:n.payload});case"SET_ISVALIDATING":return oa({},e,{isValidating:n.payload});case"SET_FIELD_VALUE":return oa({},e,{values:om(e.values,n.payload.field,n.payload.value)});case"SET_FIELD_TOUCHED":return oa({},e,{touched:om(e.touched,n.payload.field,n.payload.value)});case"SET_FIELD_ERROR":return oa({},e,{errors:om(e.errors,n.payload.field,n.payload.value)});case"RESET_FORM":return oa({},e,n.payload);case"SET_FORMIK_STATE":return n.payload(e);case"SUBMIT_ATTEMPT":return oa({},e,{touched:/**
 * Recursively a set the same value for all keys and arrays nested object, cloning
 * @param object
 * @param value
 * @param visited
 * @param response
 */function e(t,n,r,o){void 0===r&&(r=new WeakMap),void 0===o&&(o={});for(var a=0,i=Object.keys(t);a<i.length;a++){var l=i[a],u=t[l];of(u)?r.get(u)||(r.set(u,!0),// bracket syntax, we need to check if this is an array so that
// this will output  { friends: [true] } and not { friends: { "0": true } }
o[l]=Array.isArray(u)?[]:{},e(u,n,r,o[l])):o[l]=n}return o}(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":case"SUBMIT_SUCCESS":return oa({},e,{isSubmitting:!1});default:return e}}// Initial empty states // objects
(n,e),n!==k.current&&x(function(e){return e+1})},[]),C=(0,m.useCallback)(function(e,t){return new Promise(function(n,r){var o=p.validate(e,t);null==o?n(ov):op(o)?o.then(function(e){n(e||ov)},function(e){r(e)}):n(o)})},[p.validate]),j=(0,m.useCallback)(function(e,t){var n,r,o=p.validationSchema,a=oc(o)?o(t):o,i=t&&a.validateAt?a.validateAt(t,e):(void 0===n&&(n=!1),r=/**
 * Recursively prepare values.
 */function e(t){var n=Array.isArray(t)?[]:{};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var o=String(r);!0===Array.isArray(t[o])?n[o]=t[o].map(function(t){return!0===Array.isArray(t)||nn(t)?e(t):""!==t?t:void 0}):nn(t[o])?n[o]=e(t[o]):n[o]=""!==t[o]?t[o]:void 0}return n}(e),a[n?"validateSync":"validate"](r,{abortEarly:!1,context:r}));return new Promise(function(e,t){i.then(function(){e(ov)},function(n){// Yup will throw a validation error if validation fails. We catch those and
// resolve them into Formik errors. We can sniff if something is a Yup error
// by checking error.name.
// @see https://github.com/jquense/yup#validationerrorerrors-string--arraystring-value-any-path-string
"ValidationError"===n.name?e(/**
 * Transform Yup ValidationError to a more usable object
 */function(e){var t={};if(e.inner){if(0===e.inner.length)return om(t,e.path,e.message);for(var n=e.inner,r=Array.isArray(n),o=0,n=r?n:n[Symbol.iterator]();;){if(r){if(o>=n.length)break;a=n[o++]}else{if((o=n.next()).done)break;a=o.value}var a,i=a;oh(t,i.path)||(t=om(t,i.path,i.message))}}return t}(n)):t(n)})})},[p.validationSchema]),P=(0,m.useCallback)(function(e,t){return new Promise(function(n){return n(S.current[e].validate(t))})},[]),R=(0,m.useCallback)(function(e){var t=Object.keys(S.current).filter(function(e){return oc(S.current[e].validate)});// Construct an array with all of the field validation functions
return Promise.all(t.length>0?t.map(function(t){return P(t,oh(e,t))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")]).then(function(e){return e.reduce(function(e,n,r){return"DO_NOT_DELETE_YOU_WILL_BE_FIRED"===n||n&&(e=om(e,t[r],n)),e},{})})},[P]),O=(0,m.useCallback)(function(e){return Promise.all([R(e),p.validationSchema?j(e):{},p.validate?C(e):{}]).then(function(e){var t=e[0],n=e[1],r=e[2];return tK.all([t,n,r],{arrayMerge:og})})},[p.validate,p.validationSchema,R,C,j]),T=ow(function(e){return void 0===e&&(e=E.values),_({type:"SET_ISVALIDATING",payload:!0}),O(e).then(function(e){return w.current&&(_({type:"SET_ISVALIDATING",payload:!1}),_({type:"SET_ERRORS",payload:e})),e})}),(0,m.useEffect)(function(){l&&!0===w.current&&/*@__PURE__*/t(nr)(v.current,p.initialValues)&&T(v.current)},[l,T]),N=(0,m.useCallback)(function(e){var t=e&&e.values?e.values:v.current,n=e&&e.errors?e.errors:y.current?y.current:p.initialErrors||{},r=e&&e.touched?e.touched:g.current?g.current:p.initialTouched||{},o=e&&e.status?e.status:b.current?b.current:p.initialStatus;v.current=t,y.current=n,g.current=r,b.current=o;var a=function(){_({type:"RESET_FORM",payload:{isSubmitting:!!e&&!!e.isSubmitting,errors:n,touched:r,status:o,values:t,isValidating:!!e&&!!e.isValidating,submitCount:e&&e.submitCount&&"number"==typeof e.submitCount?e.submitCount:0}})};if(p.onReset){var i=p.onReset(E.values,G);op(i)?i.then(a):a()}else a()},[p.initialErrors,p.initialStatus,p.initialTouched,p.onReset]),(0,m.useEffect)(function(){!0===w.current&&!/*@__PURE__*/t(nr)(v.current,p.initialValues)&&c&&(v.current=p.initialValues,N(),l&&T(v.current))},[c,p.initialValues,N,l,T]),(0,m.useEffect)(function(){c&&!0===w.current&&!/*@__PURE__*/t(nr)(y.current,p.initialErrors)&&(y.current=p.initialErrors||ov,_({type:"SET_ERRORS",payload:p.initialErrors||ov}))},[c,p.initialErrors]),(0,m.useEffect)(function(){c&&!0===w.current&&!/*@__PURE__*/t(nr)(g.current,p.initialTouched)&&(g.current=p.initialTouched||oy,_({type:"SET_TOUCHED",payload:p.initialTouched||oy}))},[c,p.initialTouched]),(0,m.useEffect)(function(){c&&!0===w.current&&!/*@__PURE__*/t(nr)(b.current,p.initialStatus)&&(b.current=p.initialStatus,_({type:"SET_STATUS",payload:p.initialStatus}))},[c,p.initialStatus,p.initialTouched]),L=ow(function(e){// This will efficiently validate a single field by avoiding state
// changes if the validation function is synchronous. It's different from
// what is called when using validateForm.
if(S.current[e]&&oc(S.current[e].validate)){var t=oh(E.values,e),n=S.current[e].validate(t);return op(n)?(// Only flip isValidating if the function is async.
_({type:"SET_ISVALIDATING",payload:!0}),n.then(function(e){return e}).then(function(t){_({type:"SET_FIELD_ERROR",payload:{field:e,value:t}}),_({type:"SET_ISVALIDATING",payload:!1})})):(_({type:"SET_FIELD_ERROR",payload:{field:e,value:n}}),Promise.resolve(n))}return p.validationSchema?(_({type:"SET_ISVALIDATING",payload:!0}),j(E.values,e).then(function(e){return e}).then(function(t){_({type:"SET_FIELD_ERROR",payload:{field:e,value:oh(t,e)}}),_({type:"SET_ISVALIDATING",payload:!1})})):Promise.resolve()}),A=(0,m.useCallback)(function(e,t){var n=t.validate;S.current[e]={validate:n}},[]),M=(0,m.useCallback)(function(e){delete S.current[e]},[]),D=ow(function(e,t){return _({type:"SET_TOUCHED",payload:e}),(void 0===t?a:t)?T(E.values):Promise.resolve()}),I=(0,m.useCallback)(function(e){_({type:"SET_ERRORS",payload:e})},[]),z=ow(function(e,t){var n=oc(e)?e(E.values):e;return _({type:"SET_VALUES",payload:n}),(void 0===t?r:t)?T(n):Promise.resolve()}),F=(0,m.useCallback)(function(e,t){_({type:"SET_FIELD_ERROR",payload:{field:e,value:t}})},[]),U=ow(function(e,t,n){return _({type:"SET_FIELD_VALUE",payload:{field:e,value:t}}),(void 0===n?r:n)?T(om(E.values,e,t)):Promise.resolve()}),B=(0,m.useCallback)(function(e,t){// By default, assume that the first argument is a string. This allows us to use
// handleChange with React Native and React Native Web's onChangeText prop which
// provides just the value of the input.
var n,r=t,o=e;// so we handle like we would a normal HTML change event.
if(!od(e)){e.persist&&e.persist();var a=e.target?e.target:e.currentTarget,i=a.type,l=a.name,u=a.id,s=a.value,c=a.checked,f=(a.outerHTML,a.options),d=a.multiple;r=t||l||u,o=/number|range/.test(i)?isNaN(n=parseFloat(s))?"":n:/checkbox/.test(i)// checkboxes
?/** Return the next value for a checkbox */function(e,t,n){// If the current value was a boolean, return a boolean
if("boolean"==typeof e)return!!t;// If the currentValue was not a boolean we want to return an array
var r=[],o=!1,a=-1;if(Array.isArray(e))// If the current value is already an array, use it
r=e,o=(a=e.indexOf(n))>=0;else // eslint-disable-next-line eqeqeq
if(!n||"true"==n||"false"==n)return!!t;// If the checkbox was checked and the value is not already present in the aray we want to add the new value to the array of values
return t&&n&&!o?r.concat(n):o?r.slice(0,a).concat(r.slice(a+1)):r}// React currently throws a warning when using useLayoutEffect on the server.
(oh(E.values,r),c,s):f&&d// <select multiple>
?Array.from(f).filter(function(e){return e.selected}).map(function(e){return e.value}):s}r&&U(r,o)},[U,E.values]),$=ow(function(e){if(od(e))return function(t){return B(t,e)};B(e)}),V=ow(function(e,t,n){return void 0===t&&(t=!0),_({type:"SET_FIELD_TOUCHED",payload:{field:e,value:t}}),(void 0===n?a:n)?T(E.values):Promise.resolve()}),W=(0,m.useCallback)(function(e,t){e.persist&&e.persist();var n=e.target,r=n.name,o=n.id;n.outerHTML,V(t||r||o,!0)},[V]),H=ow(function(e){if(od(e))return function(t){return W(t,e)};W(e)}),q=(0,m.useCallback)(function(e){oc(e)?_({type:"SET_FORMIK_STATE",payload:e}):_({type:"SET_FORMIK_STATE",payload:function(){return e}})},[]),Q=(0,m.useCallback)(function(e){_({type:"SET_STATUS",payload:e})},[]),K=(0,m.useCallback)(function(e){_({type:"SET_ISSUBMITTING",payload:e})},[]),Y=ow(function(){return _({type:"SUBMIT_ATTEMPT"}),T().then(function(e){// In case an error was thrown and passed to the resolved Promise,
// `combinedErrors` can be an instance of an Error. We need to check
// that and abort the submit.
// If we don't do that, calling `Object.keys(new Error())` yields an
// empty array, which causes the validation to pass and the form
// to be submitted.
var t,n=e instanceof Error;if(!n&&0===Object.keys(e).length){try{// via setSubmitting(false)
if(t=J(),void 0===t)return}catch(e){throw e}return Promise.resolve(t).then(function(e){return w.current&&_({type:"SUBMIT_SUCCESS"}),e}).catch(function(e){if(w.current)// so we don't want to break the promise chain
throw _({type:"SUBMIT_FAILURE"}),e})}if(w.current&&(// ^^^ Make sure Formik is still mounted before updating state
_({type:"SUBMIT_FAILURE"}),n))throw e})}),X=ow(function(e){e&&e.preventDefault&&oc(e.preventDefault)&&e.preventDefault(),e&&e.stopPropagation&&oc(e.stopPropagation)&&e.stopPropagation(),Y().catch(function(e){console.warn("Warning: An unhandled error was caught from submitForm()",e)})}),G={resetForm:N,validateForm:T,validateField:L,setErrors:I,setFieldError:F,setFieldTouched:V,setFieldValue:U,setStatus:Q,setSubmitting:K,setTouched:D,setValues:z,setFormikState:q,submitForm:Y},J=ow(function(){return f(E.values,G)}),Z=ow(function(e){e&&e.preventDefault&&oc(e.preventDefault)&&e.preventDefault(),e&&e.stopPropagation&&oc(e.stopPropagation)&&e.stopPropagation(),N()}),ee=(0,m.useCallback)(function(e){return{value:oh(E.values,e),error:oh(E.errors,e),touched:!!oh(E.touched,e),initialValue:oh(v.current,e),initialTouched:!!oh(g.current,e),initialError:oh(y.current,e)}},[E.errors,E.touched,E.values]),et=(0,m.useCallback)(function(e){return{setValue:function(t,n){return U(e,t,n)},setTouched:function(t,n){return V(e,t,n)},setError:function(t){return F(e,t)}}},[U,V,F]),en=(0,m.useCallback)(function(e){var t=of(e),n=t?e.name:e,r=oh(E.values,n),o={name:n,value:r,onChange:$,onBlur:H};if(t){var a=e.type,i=e.value,l=e.as,u=e.multiple;"checkbox"===a?void 0===i?o.checked=!!r:(o.checked=!!(Array.isArray(r)&&~r.indexOf(i)),o.value=i):"radio"===a?(o.checked=r===i,o.value=i):"select"===l&&u&&(o.value=o.value||[],o.multiple=!0)}return o},[H,$,E.values]),er=(0,m.useMemo)(function(){return!/*@__PURE__*/t(nr)(v.current,E.values)},[v.current,E.values]),eo=(0,m.useMemo)(function(){return void 0!==u?er?E.errors&&0===Object.keys(E.errors).length:!1!==u&&oc(u)?u(p):u:E.errors&&0===Object.keys(E.errors).length},[u,er,E.errors,p]),oa({},E,{initialValues:v.current,initialErrors:y.current,initialTouched:g.current,initialStatus:b.current,handleBlur:H,handleChange:$,handleReset:Z,handleSubmit:X,resetForm:N,setErrors:I,setFormikState:q,setFieldTouched:V,setFieldValue:U,setFieldError:F,setStatus:Q,setSubmitting:K,setTouched:D,setValues:z,submitForm:Y,validateForm:T,validateField:L,isValid:eo,dirty:er,unregisterField:M,registerField:A,getFieldProps:en,getFieldMeta:ee,getFieldHelpers:et,validateOnBlur:a,validateOnChange:r,validateOnMount:l}));return/*#__PURE__*/(0,h.jsxs)("form",{style:{margin:"30px"},onSubmit:ea.handleSubmit,children:[/*#__PURE__*/(0,h.jsxs)("div",{style:{display:"grid",width:"300px",padding:"5px"},children:[/*#__PURE__*/(0,h.jsx)("label",{style:{fontSize:"20px",margin:"1px"},htmlFor:"firstName",children:"First Name"}),/*#__PURE__*/(0,h.jsx)("input",{id:"firstName",name:"firstName",type:"text",onChange:ea.handleChange,value:ea.values.firstName}),ea.errors.firstName?/*#__PURE__*/(0,h.jsx)("div",{children:ea.errors.firstName}):null]}),/*#__PURE__*/(0,h.jsxs)("div",{style:{display:"grid",width:"300px",padding:"5px"},children:[/*#__PURE__*/(0,h.jsx)("label",{style:{fontSize:"20px",margin:"1px"},htmlFor:"lastName",children:"Last Name"}),/*#__PURE__*/(0,h.jsx)("input",{id:"lastName",name:"lastName",type:"text",onChange:ea.handleChange,value:ea.values.lastName}),ea.errors.lastName?/*#__PURE__*/(0,h.jsx)("div",{children:ea.errors.lastName}):null]}),/*#__PURE__*/(0,h.jsxs)("div",{style:{display:"grid",width:"300px",padding:"5px"},children:[/*#__PURE__*/(0,h.jsx)("label",{style:{fontSize:"20px",margin:"1px"},htmlFor:"email",children:"Email Address"}),/*#__PURE__*/(0,h.jsx)("input",{id:"email",name:"email",type:"email",onChange:ea.handleChange,value:ea.values.email}),ea.errors.email?/*#__PURE__*/(0,h.jsx)("div",{children:ea.errors.email}):null]}),/*#__PURE__*/(0,h.jsx)("button",{style:{width:"80px",height:"30px",backgroundColor:"royalBlue",color:"white",margin:"5px",fontSize:"15px",fontFamily:"sans-serif"},type:"submit",children:/*#__PURE__*/(0,h.jsx)("b",{children:"Submit"})})]})},{})}]}]),oL=/*@__PURE__*/t(v).createRoot(document.getElementById("root"));oL.render(/*#__PURE__*/(0,h.jsx)(b.RouterProvider,{router:oN}));//# sourceMappingURL=index.d2b72a91.js.map

//# sourceMappingURL=index.d2b72a91.js.map
