(this["webpackJsonpgithub-jobs-api"]=this["webpackJsonpgithub-jobs-api"]||[]).push([[0],{80:function(e,t,c){},81:function(e,t,c){"use strict";c.r(t);var a=c(1),o=c.n(a),n=c(30),s=c.n(n),i=c(5),j=c(14),r=c(3),l=c.p+"static/media/icon-sun.9422c153.svg",d=c.p+"static/media/icon-moon.038e80ca.svg",b=c(0),p=function(e){var t=e.darkMode,c=e.setDarkMode,o=document.body.parentElement;Object(a.useEffect)((function(){localStorage.getItem("theme")?o.setAttribute("data-theme",localStorage.getItem("theme")):(c(!0),localStorage.setItem("theme","light"),o.setAttribute("data-theme","light"))}),[]);return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("p",{className:"header__title",children:"devjobs"}),Object(b.jsxs)("div",{className:"header__toggle",children:[Object(b.jsx)("img",{src:l,alt:"Sun"}),Object(b.jsx)("button",{className:"header__toggle__btn ".concat(t?"":"active"),onClick:function(){t?(localStorage.setItem("theme","dark"),o.setAttribute("data-theme",localStorage.getItem("theme")),c(!1)):(localStorage.setItem("theme","light"),o.setAttribute("data-theme",localStorage.getItem("theme")),c(!0))},children:Object(b.jsx)("span",{className:"slider"})}),Object(b.jsx)("span",{children:Object(b.jsx)("img",{src:d,alt:"Moon"})})]})]})})},h=c(20),x=c.p+"static/media/icon-search.09900c2e.svg",O=c.p+"static/media/icon-location.325ff3d9.svg",m=c.p+"static/media/icon-filter.2471816d.svg",u=function(e){var t=e.children,c=e.clic,a=e.typeBtn,o="button ".concat(a);return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("button",{type:"submit",className:o,onClick:c,children:t})})},_=c(17),y=function(e){var t=e.description,c=e.location,o=e.fullTime,n=e.finalSearch,s=e.setDescription,j=e.setLocation,r=e.setFullTime,l=Object(_.useMediaQuery)({query:"(max-width: 1110px)"}),d=Object(_.useMediaQuery)({query:"(max-width: 689px)"}),p=Object(a.useState)(!1),h=Object(i.a)(p,2),y=h[0],g=h[1],f=function(e){window.scrollTo(0,0),e.preventDefault(),e.stopPropagation()};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"searchBar",children:[Object(b.jsxs)("div",{className:"searchBar__description",children:[d?null:Object(b.jsx)("img",{src:x,onClick:n,alt:"icon Search"}),Object(b.jsx)("input",{type:"text",placeholder:l?"Filter by title ...":"Filter by title, companies, expertise ...",value:t,onChange:function(e){return s(e.target.value)}})]}),Object(b.jsxs)("div",{className:"searchBar__location",children:[Object(b.jsx)("img",{src:O,alt:"icon Location"}),Object(b.jsx)("input",{type:"text",placeholder:"Filter by location ...",value:c,onChange:function(e){return j(e.target.value)}})]}),Object(b.jsxs)("div",{className:"searchBar__fullTime",children:[Object(b.jsxs)("label",{htmlFor:"fullTime",name:"fullTime",children:[Object(b.jsx)("input",{type:"checkbox",id:"fullTime",checked:o,onChange:function(e){return r(e.target.checked)},hidden:!0}),Object(b.jsx)("div",{}),Object(b.jsx)("span",{children:l?"Full Time":"Full Time Only"})]}),d?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("img",{id:"img__modal",src:m,alt:"icon filter",onClick:function(){g(!0),document.body.style.overflowY="hidden",window.addEventListener("touchmove",f,!1)}}),Object(b.jsx)("img",{src:x,style:{marginLeft:"1.5rem"},onClick:n,alt:"icon Search"})]}):Object(b.jsx)(u,{clic:n,typeBtn:"search",children:"Search"})]})]}),y&&d&&Object(b.jsx)("div",{className:"show__filter",children:Object(b.jsxs)("div",{className:"filter__content",children:[Object(b.jsxs)("div",{className:"filter__location",children:[Object(b.jsx)("img",{src:O,alt:"icon Location"}),Object(b.jsx)("input",{type:"text",placeholder:"Filter by location ...",value:c,onChange:function(e){return j(e.target.value)}})]}),Object(b.jsx)("div",{className:"filter__fullTime",children:Object(b.jsxs)("label",{htmlFor:"fullTime",name:"fullTime",children:[Object(b.jsx)("input",{type:"checkbox",id:"fullTime",checked:o,onChange:function(e){return r(e.target.checked)},hidden:!0}),Object(b.jsx)("div",{}),Object(b.jsx)("span",{children:"Full Time Only"})]})}),Object(b.jsx)(u,{clic:function(e){n(e),g(!1),document.body.style.overflowY="initial"},typeBtn:"searchMobil",children:"Search"})]})})]})},g=(c(37),c(58),function(e){var t=Object(a.useState)([]),c=Object(i.a)(t,2);c[0],c[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{style:{zIndex:e.openModal?"-1":"0"},className:"job__board__card",children:[Object(b.jsx)("div",{className:"card__image__container",children:e.logo?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("img",{onLoad:function(){},src:e.logo,alt:e.logo})}):Object(b.jsx)("div",{className:"no-logo",children:"N / A"})}),Object(b.jsxs)("p",{className:"card__time-type",children:[Object(b.jsx)("span",{className:"card__time",children:e.created}),Object(b.jsx)("span",{style:{margin:"0 10px"},children:"\u2022"}),Object(b.jsx)("span",{className:"card__type",children:e.type})]}),Object(b.jsx)(j.b,{to:"/job/".concat(e.id),props:e,children:Object(b.jsx)("h3",{className:"card__title",children:e.title})}),Object(b.jsx)("span",{className:"card__company",children:e.company}),Object(b.jsx)("h4",{className:"card__location",children:e.location})]})})}),f=c(12),v=c.n(f),N=function(e,t){var c=6e4,a=36e5,o=864e5,n=2592e6,s=94608e7,i=e-t;return i<c?Math.round(i/1e3)+" seconds ago":i<a?1!==Math.round(i/a)?Math.round(i/c)+" minutes ago":Math.round(i/c)+" minute ago":i<o?1!==Math.round(i/a)?Math.round(i/a)+" hours ago":Math.round(i/a)+" hour ago":i<n?1!==Math.round(i/o)?Math.round(i/o)+" days ago":Math.round(i/o)+" day ago":1!==Math.round(i/s)?Math.round(i/s)+" years ago":Math.round(i/s)+" year ago"},L=function(e){var t=e.type,c=e.typeLoader,a="skeleton__".concat(c,"__").concat(t);return Object(b.jsx)("div",{className:a})},M=function(){return Object(b.jsx)("div",{className:"skeleton",children:Object(b.jsxs)("div",{className:"skeleton__home",children:[Object(b.jsx)(L,{typeLoader:"home",type:"logo"}),Object(b.jsx)(L,{typeLoader:"home",type:"text1"}),Object(b.jsx)(L,{typeLoader:"home",type:"title"}),Object(b.jsx)(L,{typeLoader:"home",type:"text2"}),Object(b.jsx)(L,{typeLoader:"home",type:"text3"})]})})},k=function(e){var t=e.darkMode,c=e.setDarkMode,o=e.openModal,n=e.setOpenModal,s=Object(a.useState)([]),j=Object(i.a)(s,2),r=j[0],l=j[1],d=Object(a.useState)(!1),p=Object(i.a)(d,2),x=p[0],O=p[1],m=Object(a.useState)(null),_=Object(i.a)(m,2),f=(_[0],_[1]),L=Object(a.useState)(1),k=Object(i.a)(L,2),S=k[0],T=k[1],F=Object(a.useState)(""),w=Object(i.a)(F,2),C=w[0],I=w[1],D=Object(a.useState)(""),B=Object(i.a)(D,2),E=B[0],A=B[1],H=Object(a.useState)(!1),q=Object(i.a)(H,2),J=q[0],P=q[1],Q=Object(a.useState)({description:"",location:"",fullTime:""}),Y=Object(i.a)(Q,2),z=Y[0],G=Y[1],K="https://cors.bridged.cc/https://jobs.github.com/positions.json",R="".concat(K,"?description=").concat(z.description,"&location=").concat(z.location,"&full_time=").concat(z.fullTime,"&page=").concat(S);Object(a.useEffect)((function(){O(!0);var e=Object(h.a)(r);z.description||z.location||""!==z.fullTime?v.a.get("".concat(R)).then((function(t){e=1===S?[]:Object(h.a)(r),t.data.forEach((function(t){e.push(t),console.log(e)})),l(e),O(!1)})).catch((function(e){f(e),O(!1)})):v.a.get("".concat(K,"?page=").concat(S)).then((function(t){t.data.forEach((function(t){-1===e.findIndex((function(e){return e.id===t.id}))&&e.push(t)})),l(e),O(!1)})).catch((function(e){f(e),O(!1)}))}),[S,z]);var U=function(e,t,c){G({description:e,location:t,fullTime:c}),T(1)};return Object(b.jsxs)("div",{className:"home__page",children:[Object(b.jsx)(y,{darkMode:t,setDarkMode:c,description:C,location:E,fullTime:J,setDescription:I,setLocation:A,setFullTime:P,openModal:o,setOpenModal:n,finalSearch:function(e){e.preventDefault(),G({description:C,location:E,fullTime:J?"on":"off"}),I(""),A(""),P("")}}),Object(b.jsxs)("div",{className:"page__filter",children:[z.description&&Object(b.jsx)("span",{onClick:function(){return U("",z.location,z.fullTime)},children:z.description+" x"}),z.location&&Object(b.jsx)("span",{onClick:function(){return U(z.description,"",z.fullTime)},children:z.location+" x"}),"on"===z.fullTime&&Object(b.jsx)("span",{onClick:function(){return U(z.description,z.location,"off")},children:"Only Full Time x"})]}),Object(b.jsxs)("div",{className:"page__jobBoard",children:[r.map((function(e){return Object(b.jsx)(g,{id:e.id,logo:e.company_logo,created:N(Date.now(),Date.parse(e.created_at)),type:e.type,title:e.title,company:e.company,location:e.location,openModal:o},e.id)})),x&&[1,2,3,4,5,6].map((function(e){return Object(b.jsx)(M,{},e)}))]}),!x&&Object(b.jsx)(u,{typeBtn:"loadMore",clic:function(){T(S+1),O(!0)},children:"Load More"})]})},S=function(){return Object(b.jsxs)("div",{className:"skeleton__job",children:[Object(b.jsxs)("div",{className:"skeleton__job__header",children:[Object(b.jsx)(L,{typeLoader:"job",type:"logo"}),Object(b.jsx)(L,{typeLoader:"job",type:"text1"}),Object(b.jsx)(L,{typeLoader:"job",type:"button1"})]}),Object(b.jsxs)("div",{className:"skeleton__job__body",children:[Object(b.jsxs)("div",{className:"skeleton__job__body__header",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)(L,{typeLoader:"job",type:"text2"}),Object(b.jsx)(L,{typeLoader:"job",type:"text3"}),Object(b.jsx)(L,{typeLoader:"job",type:"text4"})]}),Object(b.jsx)(L,{typeLoader:"job",type:"button2"})]}),Object(b.jsxs)("div",{className:"skeleton__job__body__content",children:[Object(b.jsx)(L,{typeLoader:"job",type:"text5"}),Object(b.jsx)(L,{typeLoader:"job",type:"text6"}),Object(b.jsx)(L,{typeLoader:"job",type:"text5"}),Object(b.jsx)(L,{typeLoader:"job",type:"text6"}),Object(b.jsx)(L,{typeLoader:"job",type:"text5"}),Object(b.jsx)(L,{typeLoader:"job",type:"text5"}),Object(b.jsx)(L,{typeLoader:"job",type:"text6"}),Object(b.jsx)(L,{typeLoader:"job",type:"text5"}),Object(b.jsx)(L,{typeLoader:"job",type:"text6"}),Object(b.jsx)(L,{typeLoader:"job",type:"text6"}),Object(b.jsx)(L,{typeLoader:"job",type:"text6"}),Object(b.jsx)(L,{typeLoader:"job",type:"text5"}),Object(b.jsx)(L,{typeLoader:"job",type:"text6"}),Object(b.jsx)(L,{typeLoader:"job",type:"text5"}),Object(b.jsx)(L,{typeLoader:"job",type:"text5"}),Object(b.jsx)(L,{typeLoader:"job",type:"text6"}),Object(b.jsx)(L,{typeLoader:"job",type:"text5"}),Object(b.jsx)(L,{typeLoader:"job",type:"text6"}),Object(b.jsx)(L,{typeLoader:"job",type:"text5"}),Object(b.jsx)(L,{typeLoader:"job",type:"text6"}),Object(b.jsx)(L,{typeLoader:"job",type:"text5"}),Object(b.jsx)(L,{typeLoader:"job",type:"text5"})]})]}),Object(b.jsxs)("div",{className:"skeleton__job__footer",children:[Object(b.jsx)(L,{typeLoader:"job",type:"text2"}),Object(b.jsx)(L,{typeLoader:"job",type:"text5"}),Object(b.jsx)(L,{typeLoader:"job",type:"text6"}),Object(b.jsx)(L,{typeLoader:"job",type:"text5"}),Object(b.jsx)(L,{typeLoader:"job",type:"text5"})]})]})},T=function(e){var t=Object(a.useState)(!1),c=Object(i.a)(t,2),o=c[0],n=c[1],s=Object(a.useState)(""),j=Object(i.a)(s,2),r=j[0],l=j[1],d=e.match.params;return Object(a.useEffect)((function(){n(!0),v.a.get("https://cors.bridged.cc/https://jobs.github.com/positions/".concat(d.id,".json?")).then((function(e){l(e.data),n(!1)}))}),[d.id]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"job__details",children:o?Object(b.jsx)(S,{}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"job__details__header",children:[Object(b.jsxs)("div",{className:"header__image__container",children:[r.company_logo&&Object(b.jsx)("img",{src:r.company_logo,alt:"logo company"}),!r.company_logo&&Object(b.jsx)("div",{className:"no-logo",children:"N / A"})]}),Object(b.jsxs)("div",{className:"header__textbox",children:[Object(b.jsxs)("div",{className:"header__textbox__inner",children:[Object(b.jsx)("h2",{className:"header__textbox__heading",children:r.company}),Object(b.jsx)("p",{className:"header__textbox__site",children:r.company_url})]}),Object(b.jsx)("a",{href:r.company_url,target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)(u,{typeBtn:"companySite",children:"Company Site"})})]})]}),Object(b.jsxs)("div",{className:"job__details__body",children:[Object(b.jsxs)("div",{className:"body__heading__content",children:[Object(b.jsxs)("div",{className:"body__heading__time__content",children:[Object(b.jsxs)("p",{children:[Object(b.jsx)("span",{className:"body__heading__time",children:N(Date.now(),Date.parse(r.created_at))}),Object(b.jsx)("span",{style:{margin:"0 10px"},children:"\u2022"}),Object(b.jsx)("span",{className:"body__heading__type",children:r.type})]}),Object(b.jsx)("h2",{className:"body__heading__title",children:r.title}),Object(b.jsx)("p",{className:"body__heading__location",children:r.location})]}),Object(b.jsx)("a",{href:"#5",className:"body__heading__redirect btn",target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)(u,{typeBtn:"applyNow",children:"Apply Now"})})]}),Object(b.jsx)("div",{className:"body__main",dangerouslySetInnerHTML:{__html:r.description}})]}),Object(b.jsxs)("div",{className:"job__details__apply",children:[Object(b.jsx)("h3",{children:"How to apply"}),Object(b.jsx)("div",{dangerouslySetInnerHTML:{__html:r.how_to_apply}})]})]})})})},F=function(){var e=Object(a.useState)("light"===localStorage.getItem("theme")),t=Object(i.a)(e,2),c=t[0],o=t[1];return console.log(c),console.log(localStorage),Object(b.jsxs)(j.a,{basename:"/FEM-Github-jobs-API",children:[Object(b.jsx)(p,{darkMode:c,setDarkMode:o}),Object(b.jsxs)(r.c,{children:[Object(b.jsx)(r.a,{exact:!0,path:"/",children:Object(b.jsx)(k,{darkMode:c,setDarkMode:o})}),Object(b.jsx)(r.a,{path:"/job/:id",component:T})]})]})};c(80);s.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(F,{})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.56fed4af.chunk.js.map