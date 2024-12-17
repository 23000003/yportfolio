import{d as _,g as h,o as c,c as d,b as e,_ as y,h as o,a as x,n as s,F as m,i as S,j,t as b,f as P,k as L,l as $,e as k}from"./chunks/framework.YhDK8pMX.js";import{_ as A}from"./chunks/theme.DWphAiKc.js";const q={class:"Load-Screen"},B=_({__name:"LandingAnim",setup(f){return h(()=>{document.body.style.overflowY="scroll",setTimeout(()=>{const t=document.querySelector(".Load-Screen");t.style.transition="transform 0.5s ease",t.style.transform="translateY(100%)"},1100)}),(t,v)=>(c(),d("div",q,v[0]||(v[0]=[e("div",{class:"loading-dots"},null,-1),e("div",{class:"loading-dots"},null,-1)])))}}),C=y(B,[["__scopeId","data-v-5561de7e"]]),I="/BgJapanese.png",M={class:"home-container"},R=_({__name:"Home",setup(f){const t=o(!1),v=o(!1),l=o(!1);return h(()=>{setTimeout(()=>{t.value=!0},900),setTimeout(()=>{v.value=!0},1e3),setTimeout(()=>{l.value=!0},2500),setTimeout(()=>{document.body.style.overflow="auto"},3e3)}),(p,i)=>(c(),d(m,null,[e("div",M,[i[1]||(i[1]=x('<div class="intro" data-v-a0e5fc86><div class="intro-label" data-v-a0e5fc86><div class="intro-main-text" data-v-a0e5fc86><span class="shadow-text" data-v-a0e5fc86>Hello There, my<br data-v-a0e5fc86>name is <b data-v-a0e5fc86>Kentward</b></span><span class="shadow-text" data-v-a0e5fc86>Hello There, my<br data-v-a0e5fc86>name is Kentward</span><span class="sub-text" data-v-a0e5fc86>A passionate full-stack developer.</span></div><div class="contact-info" data-v-a0e5fc86><button data-v-a0e5fc86>View Resume</button><img src="'+A+'" alt="Pipe" class="pipe" data-v-a0e5fc86><button data-v-a0e5fc86>Contact Me</button></div></div></div>',1)),e("div",{class:s(["logo",{active:v.value}])},[i[0]||(i[0]=e("div",{class:"logo-bg"},null,-1)),e("div",{class:s(["square",{active:l.value}])},null,2),e("div",{class:s(["square1",{active:l.value}])},null,2),e("div",{class:s(["shadow-square",{active:l.value}])},null,2),e("div",{class:s(["shadow-square1",{active:l.value}])},null,2)],2)]),i[3]||(i[3]=e("div",{class:"bg-japan"},[e("img",{src:I,alt:""})],-1)),e("div",{class:s(["vertical-container",{active:t.value}])},i[2]||(i[2]=[x('<div class="vertical-holder remove" data-v-a0e5fc86><span style="margin-top:70px;" data-v-a0e5fc86>SCROLL</span><div class="vertical" data-v-a0e5fc86></div></div><div class="vertical-holder" data-v-a0e5fc86><span data-v-a0e5fc86>SCROLL</span><div class="vertical1" data-v-a0e5fc86></div></div><div class="stripes-bg" data-v-a0e5fc86><div data-v-a0e5fc86></div></div>',3)]),2)],64))}}),V=y(R,[["__scopeId","data-v-a0e5fc86"]]),O="/Profile.png",T=[{name:"MySQL",icon:"/mysql.png"},{name:"PostgreSQL",icon:"/postgresql.png"},{name:"MongoDB",icon:"/mongodb.png"},{name:"React.js",icon:"/reactjs.png"},{name:"Next.js",icon:"/nextjs.png"},{name:"TypeScript",icon:"/typescript.png"},{name:"Node.js",icon:"/nodejs.png"},{name:"Express.js",icon:"/expressjs.png"},{name:"Docker",icon:"/docker.png"},{name:"Supabase",icon:"/supabase.png"},{name:"JavaScript",icon:"/javascript.png"},{name:"C#",icon:"/csharp.png"},{name:"Asp.Net",icon:"/aspnet.png"},{name:"Tailwind CSS",icon:"/tailwindcss.png"}],z={class:"About-Me"},F={class:"tech-wrapper"},H={class:"box"},N=["src","alt"],E={class:"icon-label"},D={class:"tech-wrapper"},J={class:"box"},G=["src","alt"],U={class:"icon-label"},K={class:"Profile-Image"},Q=_({__name:"AboutMe",setup(f){const t=o(null),v=o(!1),l=o(!1),p=o(!1),i=o(!1),g=o(!1),a=o(!1);return h(()=>{const r=new IntersectionObserver(([n],u)=>{n.isIntersecting&&(v.value=!0,console.log("Visible"),console.log(n.isIntersecting),setTimeout(()=>{l.value=!0},500),setTimeout(()=>{p.value=!0,i.value=!0},700),setTimeout(()=>{g.value=!0},1200),setTimeout(()=>{a.value=!0},3e3))},{threshold:.05});t.value&&r.observe(t.value)}),(r,n)=>(c(),d(m,null,[e("div",{ref_key:"aboutMeRef",ref:t,class:s(["About-me-container",{visible:v.value}])},[e("div",z,[e("div",{class:s(["label",{active:l.value}])},[e("span",{class:s(["about-label",{active:l.value}])},"About Me ",2),n[0]||(n[0]=e("span",{class:"horiz"},null,-1))],2),e("div",{class:s(["info",{active:p.value}])},n[1]||(n[1]=[e("span",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1)]),2),e("div",{class:s(["Tech-Stack",{active:p.value}])},[e("div",F,[(c(!0),d(m,null,S(j(T),(u,w)=>(c(),d("div",{key:w,class:"holder"},[n[2]||(n[2]=e("div",{class:"box-shadow"},null,-1)),e("div",H,[e("img",{src:u.icon,alt:u.name,class:"icon"},null,8,N)]),e("div",E,b(u.name),1)]))),128))]),e("div",D,[(c(!0),d(m,null,S(j(T),(u,w)=>(c(),d("div",{key:"second-"+w,class:"holder"},[n[3]||(n[3]=e("div",{class:"box-shadow"},null,-1)),e("div",J,[e("img",{src:u.icon,alt:u.name,class:"icon"},null,8,G)]),e("div",U,b(u.name),1)]))),128))])],2)]),e("div",K,[e("img",{src:O,alt:"Profile Picture",class:s(["Profile",{active:i.value}])},null,2),e("div",{class:s(["shadow-line",{active:i.value,done:a.value}])},null,2),e("div",{class:s(["shadow-line",{active:i.value,done:a.value}]),style:{"margin-left":"30px"}},null,2),e("div",{class:s(["shadow-line",{active:i.value,done:a.value}]),style:{"margin-left":"60px"}},null,2),e("div",{class:s(["shadow-line",{active:i.value,done:a.value}]),style:{"margin-left":"90px"}},null,2),e("div",{class:s(["shadow-line",{active:i.value,done:a.value}]),style:{"margin-left":"120px"}},null,2)])],2),e("div",{class:s(["vertical-container",{active:g.value}]),style:{"margin-top":"40px"}},n[4]||(n[4]=[x('<div class="vertical-holder" style="visibility:hidden;" data-v-adc65539><span style="margin-top:70px;" data-v-adc65539>SCROLL</span><div class="vertical" data-v-adc65539></div></div><div class="vertical-holder" data-v-adc65539><span data-v-adc65539>SCROLL</span><div class="vertical1" data-v-adc65539></div></div><div class="stripes-bg" data-v-adc65539><div data-v-adc65539></div></div>',3)]),2)],64))}}),Y=y(Q,[["__scopeId","data-v-adc65539"]]),W=[{name:"BookTrack",description:"An E-Commerce application specializing in books and e-books and also allows you to find the location of the book. This was my first project that I created at my IM2 class as my Final Project.",type:1,link:"https://github.com/23000003/BookTrack","image-main":"/BookTrack.png","image-sub":"/BookTrackSub.png","built-with":"ReactJS, ExpressJS, Supabase"},{name:"FPS-Game",description:"A First Person Shooter Game with a quest called 'Deliver The Crate' where you have to defend yourself from zombies, complete the objectives and deliver the crate to the destination. This serves as my final project in my OOP class, where OOP concepts are implemented.",type:1,link:"https://github.com/23000003/FPS-Game","image-main":"/FPSGame.png","image-sub":"/BookTrackSub.png","built-with":"Unity, C#"},{name:"BearEye",description:"A Demo Crypto Market Social Trading Platform where Web3 degenerates can; lookup new memecoin listings, buy/create memecoins on a chain, track their portfolio, see price trends and interact with fellow degenerates. Design was Inspired by Birdeye.so.",type:2,link:"https://github.com/23000003/BearEye","image-main":"/BearEye.png","image-sub":"/BookTrackSub.png","built-with":"Asp.Net, ReactTS, PostgreSql, Python"}],X={class:"Project-Holder"},Z={class:"Projects-Holder"},ee={class:"proj-image"},se=["src","alt"],ae={class:"proj-info"},te={class:"proj-name-horiz"},ie={class:"proj-name"},oe={class:"proj-desc"},le={class:"proj-link"},ne={class:"pl-sub"},ce=["href"],re={class:"built-with"},de=_({__name:"Projects",setup(f){const t=o(null),v=o(!1),l=o(!1),p=o(!1),i=o(!1);return h(()=>{const g=new IntersectionObserver(([a],r)=>{a.isIntersecting&&(v.value=!0,console.log("Visible 3"),setTimeout(()=>{l.value=!0},100),setTimeout(()=>{p.value=!0},1500),setTimeout(()=>{i.value=!0},500))},{threshold:.05});t.value&&g.observe(t.value)}),(g,a)=>(c(),d(m,null,[e("div",{ref_key:"projectRef",ref:t,class:s(["project-container",{visible:v.value}])},[e("div",X,[e("div",{class:s(["label",{active:l.value}])},[e("span",{class:s(["proj-type-label",{active:l.value}])},a[0]||(a[0]=[P("Projects "),e("p",null,".",-1),e("div",{class:"proj-color-type"},[e("div",{class:"experience-type"},[e("span"),e("span",null,"Experience")]),e("div",{class:"school-type"},[e("span"),e("span",null,"School Project")]),e("div",{class:"side-type"},[e("span"),e("span",null,"Side Project")])],-1)]),2)],2),e("div",{class:s(["horizontal",{active:l.value}])},null,2),(c(!0),d(m,null,S(j(W),(r,n)=>(c(),d("div",{class:s(["animation-proj",{active:i.value}]),key:n},[e("div",Z,[e("div",ee,[e("img",{src:r["image-main"],alt:r.name,class:"img-main"},null,8,se)]),e("div",ae,[e("span",{class:"proj-type proj-rem",style:L({backgroundColor:r.type===1?"#eefc72":r.type===2?"#c6f2ff":r.type===3?"#eefc72":"transparent"})},null,4),e("div",te,[e("span",ie,b(r.name),1),a[1]||(a[1]=e("div",{class:"view-image"},[e("img",{src:"https://img.icons8.com/?size=100&id=30M9wv1iFkcH&format=png&color=FF5708",alt:""}),e("span",null,"View Image")],-1)),a[2]||(a[2]=e("span",{class:"horiz"},null,-1))]),e("span",oe,b(r.description),1),e("div",le,[e("div",ne,[e("a",{href:r.link,class:"button",target:"_blank"},a[3]||(a[3]=[e("span",{class:"button-bg"},null,-1),e("span",{class:"button-label"},"Project Link",-1)]),8,ce),e("span",re,[a[4]||(a[4]=P("Built with: ")),e("p",null,b(r["built-with"]),1)])])])])]),a[5]||(a[5]=e("div",{class:s(["horizontal",{active:!0}])},null,-1))],2))),128))])],2),e("div",{class:s(["vertical-container",{active:p.value}]),style:{"margin-top":"40px"}},a[6]||(a[6]=[e("div",{class:"vertical-holder"},[e("span",{style:{"margin-top":"70px"}},"SCROLL"),e("div",{class:"vertical"})],-1),e("div",{class:"stripes-bg"},[e("div")],-1)]),2)],64))}}),ve=y(de,[["__scopeId","data-v-759d73cc"]]),ue={},pe={class:"Projects-container"};function me(f,t){return c(),d("div",pe,t[0]||(t[0]=[e("div",{class:"Project-label"},[e("div",{class:"label"},[e("span",null,[P("Contacts. "),e("p",null,"#")])])],-1),e("div",{class:"All-Projects"},null,-1)]))}const fe=y(ue,[["render",me],["__scopeId","data-v-7b9fdc3a"]]),ge={key:1},ye=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"index.md","filePath":"index.md"}'),be={name:"index.md"},ke=_({...be,setup(f){const t=o(!0);return h(()=>{setTimeout(()=>{t.value=!1},1500)}),(v,l)=>(c(),d("div",null,[t.value?(c(),$(C,{key:0})):(c(),d("div",ge,[k(V),k(Y),k(ve),k(fe)]))]))}});export{ye as __pageData,ke as default};
