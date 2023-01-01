function t(t,e,s,i){var o,r=arguments.length,n=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,i);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(n=(r<3?o(n):r>3?o(e,s,n):o(e,s))||n);return r>3&&n&&Object.defineProperty(e,s,n),n}const e=window,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),o=new WeakMap;class r{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&o.set(e,t))}return t}toString(){return this.cssText}}const n=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new r(s,t,i)},l=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t;var a;const c=window,h=c.trustedTypes,d=h?h.emptyScript:"",u=c.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},v=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:v};class $ extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this._$Ep(s,e);void 0!==i&&(this._$Ev.set(i,s),t.push(i))})),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const o=this[t];this[e]=i,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Ep(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{s?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((s=>{const i=document.createElement("style"),o=e.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=s.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=f){var i;const o=this.constructor._$Ep(t,s);if(void 0!==o&&!0===s.reflect){const r=(void 0!==(null===(i=s.converter)||void 0===i?void 0:i.toAttribute)?s.converter:p).toAttribute(e,s.type);this._$El=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var s;const i=this.constructor,o=i._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=i.getPropertyOptions(o),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:p;this._$El=o,this[o]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var m;$.finalized=!0,$.elementProperties=new Map,$.elementStyles=[],$.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:$}),(null!==(a=c.reactiveElementVersions)&&void 0!==a?a:c.reactiveElementVersions=[]).push("1.5.0");const g=window,_=g.trustedTypes,y=_?_.createPolicy("lit-html",{createHTML:t=>t}):void 0,b=`lit$${(Math.random()+"").slice(9)}$`,A="?"+b,x=`<${A}>`,w=document,E=(t="")=>w.createComment(t),S=t=>null===t||"object"!=typeof t&&"function"!=typeof t,k=Array.isArray,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,P=/>/g,U=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),H=/'/g,O=/"/g,N=/^(?:script|style|textarea|title)$/i,T=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),j=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),M=new WeakMap,L=w.createTreeWalker(w,129,null,!1),B=(t,e)=>{const s=t.length-1,i=[];let o,r=2===e?"<svg>":"",n=C;for(let e=0;e<s;e++){const s=t[e];let l,a,c=-1,h=0;for(;h<s.length&&(n.lastIndex=h,a=n.exec(s),null!==a);)h=n.lastIndex,n===C?"!--"===a[1]?n=z:void 0!==a[1]?n=P:void 0!==a[2]?(N.test(a[2])&&(o=RegExp("</"+a[2],"g")),n=U):void 0!==a[3]&&(n=U):n===U?">"===a[0]?(n=null!=o?o:C,c=-1):void 0===a[1]?c=-2:(c=n.lastIndex-a[2].length,l=a[1],n=void 0===a[3]?U:'"'===a[3]?O:H):n===O||n===H?n=U:n===z||n===P?n=C:(n=U,o=void 0);const d=n===U&&t[e+1].startsWith("/>")?" ":"";r+=n===C?s+x:c>=0?(i.push(l),s.slice(0,c)+"$lit$"+s.slice(c)+b+d):s+b+(-2===c?(i.push(void 0),e):d)}const l=r+(t[s]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==y?y.createHTML(l):l,i]};class D{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,r=0;const n=t.length-1,l=this.parts,[a,c]=B(t,e);if(this.el=D.createElement(a,s),L.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=L.nextNode())&&l.length<n;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(b)){const s=c[r++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+"$lit$").split(b),e=/([.?@])?(.*)/.exec(s);l.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?J:"?"===e[1]?Z:"@"===e[1]?F:q})}else l.push({type:6,index:o})}for(const e of t)i.removeAttribute(e)}if(N.test(i.tagName)){const t=i.textContent.split(b),e=t.length-1;if(e>0){i.textContent=_?_.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],E()),L.nextNode(),l.push({type:2,index:++o});i.append(t[e],E())}}}else if(8===i.nodeType)if(i.data===A)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(b,t+1));)l.push({type:7,index:o}),t+=b.length-1}o++}}static createElement(t,e){const s=w.createElement("template");return s.innerHTML=t,s}}function I(t,e,s=t,i){var o,r,n,l;if(e===j)return e;let a=void 0!==i?null===(o=s._$Co)||void 0===o?void 0:o[i]:s._$Cl;const c=S(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==c&&(null===(r=null==a?void 0:a._$AO)||void 0===r||r.call(a,!1),void 0===c?a=void 0:(a=new c(t),a._$AT(t,s,i)),void 0!==i?(null!==(n=(l=s)._$Co)&&void 0!==n?n:l._$Co=[])[i]=a:s._$Cl=a),void 0!==a&&(e=I(t,a._$AS(t,e.values),a,i)),e}class V{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:s},parts:i}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:w).importNode(s,!0);L.currentNode=o;let r=L.nextNode(),n=0,l=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new W(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new G(r,this,t)),this.u.push(e),a=i[++l]}n!==(null==a?void 0:a.index)&&(r=L.nextNode(),n++)}return o}p(t){let e=0;for(const s of this.u)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class W{constructor(t,e,s,i){var o;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cm=null===(o=null==i?void 0:i.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=I(this,t,e),S(t)?t===R||null==t||""===t?(this._$AH!==R&&this._$AR(),this._$AH=R):t!==this._$AH&&t!==j&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>k(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==R&&S(this._$AH)?this._$AA.nextSibling.data=t:this.T(w.createTextNode(t)),this._$AH=t}$(t){var e;const{values:s,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=D.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.p(s);else{const t=new V(o,this),e=t.v(this.options);t.p(s),this.T(e),this._$AH=t}}_$AC(t){let e=M.get(t.strings);return void 0===e&&M.set(t.strings,e=new D(t)),e}k(t){k(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new W(this.O(E()),this.O(E()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class q{constructor(t,e,s,i,o){this.type=1,this._$AH=R,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const o=this.strings;let r=!1;if(void 0===o)t=I(this,t,e,0),r=!S(t)||t!==this._$AH&&t!==j,r&&(this._$AH=t);else{const i=t;let n,l;for(t=o[0],n=0;n<o.length-1;n++)l=I(this,i[s+n],e,n),l===j&&(l=this._$AH[n]),r||(r=!S(l)||l!==this._$AH[n]),l===R?t=R:t!==R&&(t+=(null!=l?l:"")+o[n+1]),this._$AH[n]=l}r&&!i&&this.j(t)}j(t){t===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class J extends q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===R?void 0:t}}const K=_?_.emptyScript:"";class Z extends q{constructor(){super(...arguments),this.type=4}j(t){t&&t!==R?this.element.setAttribute(this.name,K):this.element.removeAttribute(this.name)}}class F extends q{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=I(this,t,e,0))&&void 0!==s?s:R)===j)return;const i=this._$AH,o=t===R&&i!==R||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==R&&(i===R||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class G{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){I(this,t)}}const Q=g.litHtmlPolyfillSupport;null==Q||Q(D,W),(null!==(m=g.litHtmlVersions)&&void 0!==m?m:g.litHtmlVersions=[]).push("2.5.0");var X,Y;class tt extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{var i,o;const r=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let n=r._$litPart$;if(void 0===n){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;r._$litPart$=n=new W(e.insertBefore(E(),t),t,void 0,null!=s?s:{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return j}}tt.finalized=!0,tt._$litElement$=!0,null===(X=globalThis.litElementHydrateSupport)||void 0===X||X.call(globalThis,{LitElement:tt});const et=globalThis.litElementPolyfillSupport;null==et||et({LitElement:tt}),(null!==(Y=globalThis.litElementVersions)&&void 0!==Y?Y:globalThis.litElementVersions=[]).push("3.2.2");const st=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:s,elements:i}=e;return{kind:s,elements:i,finisher(e){customElements.define(t,e)}}})(t,e);var it;null===(it=window.HTMLSlotElement)||void 0===it||it.prototype.assignedElements;let ot=class extends tt{render(){return T`<header class="flex">
        <div class="container">
        <div id="links">
        <a href="tel:343281343">/34/ 328 13 43</a>
        <a class="mail" href=mailto:colins.duet@op.pl">colins.duet@op.pl</a>
        </div>
        </div>
      </header>
      <nav class="flex">
        <div class="container">
          <ul>
            <li>Home</li>
          </ul>
        </div>
      </nav>`}};ot.styles=n`
    .container {
      margin: 0 auto;
    }

    @media (min-width: 1200px) {
      .container {
        width: 1170px;
      }
    }

    .flex {
      display: flex;
    }

    header {
      background-color: #f5f5f5;
      color: #999999;
    }

    nav {
      height: 90px;
      box-shadow: 0 3px 3px rgb(0 0 0 / 5%);
    }

    ul {
      list-style: none;
      margin: 34px 0;
      padding: 0;
    }

    a {
      color: #3d449a;
      text-decoration: none;
    }

    #links {
      padding: 8px 0;
      display: flex;
      justify-content: space-between;
    }
  `,ot=t([st("fk-header")],ot);let rt=class extends tt{render(){return T`<div class="carousel">
      <div class="carousel-inner">
        <input
          class="carousel-open"
          type="radio"
          id="carousel-1"
          name="carousel"
          aria-hidden="true"
          hidden=""
          checked="checked"
        />
        <div class="carousel-item">
          <img loading="lazy" src="src/assets/1.png" />
        </div>
        <input
          class="carousel-open"
          type="radio"
          id="carousel-2"
          name="carousel"
          aria-hidden="true"
          hidden=""
        />
        <div class="carousel-item">
          <img loading="lazy" src="src/assets/2.png" />
        </div>
        <input
          class="carousel-open"
          type="radio"
          id="carousel-3"
          name="carousel"
          aria-hidden="true"
          hidden=""
        />
        <div class="carousel-item">
          <img loading="lazy" src="src/assets/3.png" />
        </div>
        <label for="carousel-3" class="carousel-control prev control-1"
          >‹</label
        >
        <label for="carousel-2" class="carousel-control next control-1"
          >›</label
        >
        <label for="carousel-1" class="carousel-control prev control-2"
          >‹</label
        >
        <label for="carousel-3" class="carousel-control next control-2"
          >›</label
        >
        <label for="carousel-2" class="carousel-control prev control-3"
          >‹</label
        >
        <label for="carousel-1" class="carousel-control next control-3"
          >›</label
        >
        <ol class="carousel-indicators">
          <li>
            <label for="carousel-1" class="carousel-bullet">•</label>
          </li>
          <li>
            <label for="carousel-2" class="carousel-bullet">•</label>
          </li>
          <li>
            <label for="carousel-3" class="carousel-bullet">•</label>
          </li>
        </ol>
      </div>
    </div>`}};rt.styles=n`
    .carousel {
      position: relative;
    }

    .carousel-inner {
      position: relative;
      overflow: hidden;
      width: 100%;
    }

    .carousel-open:checked + .carousel-item {
      position: static;
      opacity: 100;
    }

    .carousel-item {
      position: absolute;
      opacity: 0;
      -webkit-transition: opacity 0.6s ease-out;
      transition: opacity 0.6s ease-out;
    }

    .carousel-item img {
      display: block;
      height: auto;
      max-width: 100%;
    }

    .carousel-control {
      background: rgba(0, 0, 0, 0.28);
      border-radius: 50%;
      color: #fff;
      cursor: pointer;
      display: none;
      font-size: 40px;
      height: 40px;
      line-height: 35px;
      position: absolute;
      top: 50%;
      -webkit-transform: translate(0, -50%);
      cursor: pointer;
      -ms-transform: translate(0, -50%);
      transform: translate(0, -50%);
      text-align: center;
      width: 40px;
      z-index: 10;
    }

    .carousel-control.prev {
      left: 2%;
    }

    .carousel-control.next {
      right: 2%;
    }

    .carousel-control:hover {
      background: rgba(0, 0, 0, 0.8);
      color: #aaaaaa;
    }

    #carousel-1:checked ~ .control-1,
    #carousel-2:checked ~ .control-2,
    #carousel-3:checked ~ .control-3 {
      display: block;
    }

    .carousel-indicators {
      list-style: none;
      margin: 0;
      padding: 0;
      position: absolute;
      bottom: 2%;
      left: 0;
      right: 0;
      text-align: center;
      z-index: 10;
    }

    .carousel-indicators li {
      display: inline-block;
      margin: 0 5px;
    }

    .carousel-bullet {
      color: #fff;
      cursor: pointer;
      display: block;
      font-size: 35px;
    }

    .carousel-bullet:hover {
      color: #aaaaaa;
    }

    #carousel-1:checked
      ~ .control-1
      ~ .carousel-indicators
      li:nth-child(1)
      .carousel-bullet,
    #carousel-2:checked
      ~ .control-2
      ~ .carousel-indicators
      li:nth-child(2)
      .carousel-bullet,
    #carousel-3:checked
      ~ .control-3
      ~ .carousel-indicators
      li:nth-child(3)
      .carousel-bullet {
      color: #428bca;
    }

    #title {
      width: 100%;
      position: absolute;
      padding: 0px;
      margin: 0px auto;
      text-align: center;
      font-size: 27px;
      color: rgba(255, 255, 255, 1);
      font-family: "Open Sans", sans-serif;
      z-index: 9999;
      text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.33),
        -1px 0px 2px rgba(255, 255, 255, 0);
    }
  `,rt=t([st("fk-carousel")],rt);let nt=class extends tt{render(){return T`<main>
      <div class="container">
        <div class="flex">
          <div>
            <h1>Witaj!</h1>
            <h2>
              Nasza firma zajmuje się produkcją wyrobów gipsowych.
              Specjalizujemy się w produkcji figur dewocjonalnych, których w
              swojej ofercie mamy duży asortyment.
            </h2>
            <h4>
              Nasze wyroby zaliczamy do "rękodzieła" gdyż cała produkcja odbywa
              się wyłącznie z materiałów przyjaznych środowisku (z gipsu
              naturalnego) i jest pracą ludzkich rąk, począwszy od zrobienia
              form, poprzez odlew, malowanie aż do momentu wystawienia figury na
              sprzedaż.
            </h4>
          </div>
          <fk-carousel></fk-carousel>
        </div>
      </div>
    </main>`}};nt.styles=n`
    :host {
      display: flex;
      background-image: url(./src/assets/bg.jpg);
      background-repeat: repeat;
      background-size: inherit;
      background-attachment: fixed;
      background-position: 0 0;
      flex: 1;
    }

    main {
      display: flex;
      flex: 1;
    }

    .flex {
      display: flex;
      flex-direction: row;
    }

    .flex > * {
      flex: 1;
    }

    h1 {
      margin-bottom: 40px;
      font-size: 100px;
      line-height: 100px;
      font-weight: 300;
    }

    h4 {
      font-weight: 400;
    }

    .container {
      margin: 0 auto;
    }

    @media (min-width: 1200px) {
      .container {
        width: 1170px;
      }
    }
  `,nt=t([st("fk-home")],nt);let lt=class extends tt{render(){return T`<fk-header></fk-header><fk-home></fk-home>`}};lt.styles=n`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
  `,lt=t([st("fk-app")],lt);
