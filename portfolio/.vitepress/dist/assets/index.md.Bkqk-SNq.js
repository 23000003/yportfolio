import{d as g,g as _,o as c,c as d,b as e,_ as h,h as o,a as k,n as s,F as p,i as x,j as P,f as T,k as L,t as S,l as A,e as y}from"./chunks/framework.YhDK8pMX.js";import{_ as z}from"./chunks/theme.DWphAiKc.js";const q={class:"Load-Screen"},B=g({__name:"LandingAnim",setup(f){return _(()=>{document.body.style.overflowY="scroll",setTimeout(()=>{const t=document.querySelector(".Load-Screen");t.style.transition="transform 0.5s ease",t.style.transform="translateY(100%)"},1100)}),(t,v)=>(c(),d("div",q,v[0]||(v[0]=[e("div",{class:"loading-dots"},null,-1),e("div",{class:"loading-dots"},null,-1)])))}}),$=h(B,[["__scopeId","data-v-5561de7e"]]),C="/BgJapanese.png",I={class:"home-container"},O=g({__name:"Home",setup(f){const t=o(!1),v=o(!1),l=o(!1);return _(()=>{setTimeout(()=>{t.value=!0},900),setTimeout(()=>{v.value=!0},1e3),setTimeout(()=>{l.value=!0},2500),setTimeout(()=>{document.body.style.overflow="auto"},3e3)}),(u,i)=>(c(),d(p,null,[e("div",I,[i[1]||(i[1]=k('<div class="intro" data-v-a0e5fc86><div class="intro-label" data-v-a0e5fc86><div class="intro-main-text" data-v-a0e5fc86><span class="shadow-text" data-v-a0e5fc86>Hello There, my<br data-v-a0e5fc86>name is <b data-v-a0e5fc86>Kentward</b></span><span class="shadow-text" data-v-a0e5fc86>Hello There, my<br data-v-a0e5fc86>name is Kentward</span><span class="sub-text" data-v-a0e5fc86>A passionate full-stack developer.</span></div><div class="contact-info" data-v-a0e5fc86><button data-v-a0e5fc86>View Resume</button><img src="'+z+'" alt="Pipe" class="pipe" data-v-a0e5fc86><button data-v-a0e5fc86>Contact Me</button></div></div></div>',1)),e("div",{class:s(["logo",{active:v.value}])},[i[0]||(i[0]=e("div",{class:"logo-bg"},null,-1)),e("div",{class:s(["square",{active:l.value}])},null,2),e("div",{class:s(["square1",{active:l.value}])},null,2),e("div",{class:s(["shadow-square",{active:l.value}])},null,2),e("div",{class:s(["shadow-square1",{active:l.value}])},null,2)],2)]),i[3]||(i[3]=e("div",{class:"bg-japan"},[e("img",{src:C,alt:""})],-1)),e("div",{class:s(["vertical-container",{active:t.value}])},i[2]||(i[2]=[k('<div class="vertical-holder remove" data-v-a0e5fc86><span style="margin-top:70px;" data-v-a0e5fc86>SCROLL</span><div class="vertical" data-v-a0e5fc86></div></div><div class="vertical-holder" data-v-a0e5fc86><span data-v-a0e5fc86>SCROLL</span><div class="vertical1" data-v-a0e5fc86></div></div><div class="stripes-bg" data-v-a0e5fc86><div data-v-a0e5fc86></div></div>',3)]),2)],64))}}),R=h(O,[["__scopeId","data-v-a0e5fc86"]]),V="/Profile.png",j=[{name:"SQL",icon:"sql.png"},{name:"PostgreSQL",icon:"postgresql.png"},{name:"MongoDB",icon:"https://im.icons8.com/?size=100&id=o6OvAxG0nzTH&format=png&color=000000"},{name:"React",icon:"https://im.icons8.com/?size=100&id=t4YbEbA834uH&format=png&color=000000"},{name:"Next.js",icon:"https://im.icons8.com/?size=100&id=AU6Wc7r56Fxz&format=png&color=000000"},{name:"Node.js",icon:"https://im.icons8.com/?size=100&id=ouWtcsgDBiwO&format=png&color=000000"},{name:"Express",icon:"https://im.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000"},{name:"Docker",icon:"https://im.icons8.com/?size=100&id=GOHWqwnSE8Sv&format=png&color=000000"},{name:"Supabase",icon:"supabase.png"},{name:"TypeScript",icon:"typescript.png"},{name:"JavaScript",icon:"https://im.icons8.com/?size=100&id=V6HShIzw21x7&format=png&color=000000"},{name:"C#",icon:"https://im.icons8.com/?size=100&id=Fycm8TUhWmFU&format=png&color=000000"},{name:"Asp.Net",icon:"https://im.icons8.com/?size=100&id=59890&format=png&color=000000"},{name:"Tailwind CSS",icon:"https://im.icons8.com/?size=100&id=FnnFuAIw4e8j&format=png&color=000000"}],F={class:"About-Me"},H={class:"tech-wrapper"},M={class:"box"},E=["src","alt"],D={class:"tech-wrapper"},N={class:"box"},G=["src","alt"],U={class:"Profile-Image"},J=g({__name:"AboutMe",setup(f){const t=o(null),v=o(!1),l=o(!1),u=o(!1),i=o(!1),b=o(!1),a=o(!1);return _(()=>{const r=new IntersectionObserver(([n],m)=>{n.isIntersecting&&(v.value=!0,console.log("Visible"),console.log(n.isIntersecting),setTimeout(()=>{l.value=!0},500),setTimeout(()=>{u.value=!0,i.value=!0},700),setTimeout(()=>{b.value=!0},1200),setTimeout(()=>{a.value=!0},3e3))},{threshold:.05});t.value&&r.observe(t.value)}),(r,n)=>(c(),d(p,null,[e("div",{ref_key:"aboutMeRef",ref:t,class:s(["About-me-container",{visible:v.value}])},[e("div",F,[e("div",{class:s(["label",{active:l.value}])},[e("span",{class:s(["about-label",{active:l.value}])},"About Me ",2),n[0]||(n[0]=e("span",{class:"horiz"},null,-1))],2),e("div",{class:s(["info",{active:u.value}])},n[1]||(n[1]=[e("span",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1)]),2),e("div",{class:s(["Tech-Stack",{active:u.value}])},[e("div",H,[(c(!0),d(p,null,x(P(j),(m,w)=>(c(),d("div",{key:w,class:"holder"},[n[2]||(n[2]=e("div",{class:"box-shadow"},null,-1)),e("div",M,[e("img",{src:m.icon,alt:m.name,class:"icon"},null,8,E)])]))),128))]),e("div",D,[(c(!0),d(p,null,x(P(j),(m,w)=>(c(),d("div",{key:"second-"+w,class:"holder"},[n[3]||(n[3]=e("div",{class:"box-shadow"},null,-1)),e("div",N,[e("img",{src:m.icon,alt:m.name,class:"icon"},null,8,G)])]))),128))])],2)]),e("div",U,[e("img",{src:V,alt:"Profile Picture",class:s(["Profile",{active:i.value}])},null,2),e("div",{class:s(["shadow-line",{active:i.value,done:a.value}])},null,2),e("div",{class:s(["shadow-line",{active:i.value,done:a.value}]),style:{"margin-left":"30px"}},null,2),e("div",{class:s(["shadow-line",{active:i.value,done:a.value}]),style:{"margin-left":"60px"}},null,2),e("div",{class:s(["shadow-line",{active:i.value,done:a.value}]),style:{"margin-left":"90px"}},null,2),e("div",{class:s(["shadow-line",{active:i.value,done:a.value}]),style:{"margin-left":"120px"}},null,2)])],2),e("div",{class:s(["vertical-container",{active:b.value}]),style:{"margin-top":"40px"}},n[4]||(n[4]=[k('<div class="vertical-holder" style="visibility:hidden;" data-v-8c13123b><span style="margin-top:70px;" data-v-8c13123b>SCROLL</span><div class="vertical" data-v-8c13123b></div></div><div class="vertical-holder" data-v-8c13123b><span data-v-8c13123b>SCROLL</span><div class="vertical1" data-v-8c13123b></div></div><div class="stripes-bg" data-v-8c13123b><div data-v-8c13123b></div></div>',3)]),2)],64))}}),W=h(J,[["__scopeId","data-v-8c13123b"]]),Y=[{name:"BookTrack",description:"An E-Commerce application specializing in books and e-books and also allows you to find the location of the book. This was my first project that I created at my IM2 class as my Final Project.",type:1,link:"https://github.com/23000003/BookTrack","image-main":"/BookTrack.png","image-sub":"/BookTrackSub.png","built-with":"ReactJS, ExpressJS, Supabase"},{name:"FPS-Game",description:"A First Person Shooter Game with a quest called 'Deliver The Crate' where you have to defend yourself from zombies, complete the objectives and deliver the crate to the destination. This serves as my final project in my OOP class, where OOP concepts are implemented.",type:1,link:"https://github.com/23000003/FPS-Game","image-main":"/FPSGame.png","image-sub":"/BookTrackSub.png","built-with":"Unity, C#"},{name:"BearEye",description:"A Demo Crypto Market Social Trading Platform where Web3 degenerates can; lookup new memecoin listings, buy/create memecoins on a chain, track their portfolio, see price trends and interact with fellow degenerates. Design was Inspired by Birdeye.so.",type:2,link:"https://github.com/23000003/BearEye","image-main":"/BearEye.png","image-sub":"/BookTrackSub.png","built-with":"Asp.Net, ReactTS, PostgreSql, Python"}],K={class:"Project-Holder"},Q={class:"Projects-Holder"},Z={class:"proj-image"},X=["src","alt"],ee={class:"proj-info"},se={class:"proj-name-horiz"},ae={class:"proj-name"},te={class:"proj-desc"},ie={class:"proj-link"},oe={class:"pl-sub"},le=["href"],ne={class:"built-with"},ce=g({__name:"Projects",setup(f){const t=o(null),v=o(!1),l=o(!1),u=o(!1),i=o(!1);return _(()=>{const b=new IntersectionObserver(([a],r)=>{a.isIntersecting&&(v.value=!0,console.log("Visible 3"),setTimeout(()=>{l.value=!0},100),setTimeout(()=>{u.value=!0},1500),setTimeout(()=>{i.value=!0},500))},{threshold:.05});t.value&&b.observe(t.value)}),(b,a)=>(c(),d(p,null,[e("div",{ref_key:"projectRef",ref:t,class:s(["project-container",{visible:v.value}])},[e("div",K,[e("div",{class:s(["label",{active:l.value}])},[e("span",{class:s(["proj-type-label",{active:l.value}])},a[0]||(a[0]=[T("Projects "),e("p",null,".",-1),e("div",{class:"proj-color-type"},[e("div",{class:"experience-type"},[e("span"),e("span",null,"Experience")]),e("div",{class:"school-type"},[e("span"),e("span",null,"School Project")]),e("div",{class:"side-type"},[e("span"),e("span",null,"Side Project")])],-1)]),2)],2),e("div",{class:s(["horizontal",{active:l.value}])},null,2),(c(!0),d(p,null,x(P(Y),(r,n)=>(c(),d("div",{class:s(["animation-proj",{active:i.value}]),key:n},[e("div",Q,[e("div",Z,[e("img",{src:r["image-main"],alt:r.name,class:"img-main"},null,8,X)]),e("div",ee,[e("span",{class:"proj-type",style:L({backgroundColor:r.type===1?"#eefc72":r.type===2?"#c6f2ff":r.type===3?"#eefc72":"transparent"})},null,4),e("div",se,[e("span",ae,S(r.name),1),a[1]||(a[1]=e("span",{class:"horiz"},null,-1))]),e("span",te,S(r.description),1),e("div",ie,[e("div",oe,[e("a",{href:r.link,class:"button",target:"_blank"},a[2]||(a[2]=[e("span",{class:"button-bg"},null,-1),e("span",{class:"button-label"},"Project Link",-1)]),8,le),e("span",ne,[a[3]||(a[3]=T("Built with: ")),e("p",null,S(r["built-with"]),1)])])])])]),a[4]||(a[4]=e("div",{class:s(["horizontal",{active:!0}])},null,-1))],2))),128))])],2),e("div",{class:s(["vertical-container",{active:u.value}]),style:{"margin-top":"40px"}},a[5]||(a[5]=[e("div",{class:"vertical-holder"},[e("span",{style:{"margin-top":"70px"}},"SCROLL"),e("div",{class:"vertical"})],-1),e("div",{class:"stripes-bg"},[e("div")],-1)]),2)],64))}}),re=h(ce,[["__scopeId","data-v-939ed6ab"]]),de={},ve={class:"Projects-container"};function ue(f,t){return c(),d("div",ve,t[0]||(t[0]=[e("div",{class:"Project-label"},[e("div",{class:"label"},[e("span",null,[T("Contacts. "),e("p",null,"#")])])],-1),e("div",{class:"All-Projects"},null,-1)]))}const me=h(de,[["render",ue],["__scopeId","data-v-7b9fdc3a"]]),pe={key:1},_e=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"index.md","filePath":"index.md"}'),fe={name:"index.md"},he=g({...fe,setup(f){const t=o(!0);return _(()=>{setTimeout(()=>{t.value=!1},1500)}),(v,l)=>(c(),d("div",null,[t.value?(c(),A($,{key:0})):(c(),d("div",pe,[y(R),y(W),y(re),y(me)]))]))}});export{_e as __pageData,he as default};