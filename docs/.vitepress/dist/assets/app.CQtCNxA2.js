import{R as i}from"./chunks/theme.7rBfMmsS.js";import{l as o,m as u,R as l,p as c,q as f,C as d,s as m,t as h,v as A,w as g,x as v,d as w,u as y,f as C,y as P,z as R,A as b,B as E,D as S}from"./chunks/framework.AuJPwZ3o.js";function p(e){if(e.extends){const t=p(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const s=p(i),T=w({name:"VitePressApp",setup(){const{site:e,lang:t,dir:a}=y();return C(()=>{P(()=>{document.documentElement.lang=t.value,document.documentElement.dir=a.value})}),e.value.router.prefetchLinks&&R(),b(),E(),s.setup&&s.setup(),()=>S(s.Layout)}});async function D(){globalThis.__VITEPRESS__=!0;const e=_(),t=x();t.provide(l,e);const a=c(e.route);return t.provide(f,a),t.component("Content",d),t.component("ClientOnly",m),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:t,router:e,siteData:h}),{app:t,router:e,data:a}}function x(){return A(T)}function _(){let e=o,t;return g(a=>{let n=v(a),r=null;return n&&(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&D().then(({app:e,router:t,data:a})=>{t.go().then(()=>{u(t.route,a.site),e.mount("#app")})});export{D as createApp};