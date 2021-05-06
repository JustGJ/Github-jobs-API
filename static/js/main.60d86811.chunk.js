(this["webpackJsonpgithub-jobs-api"]=this["webpackJsonpgithub-jobs-api"]||[]).push([[0],{60:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var o=c(1),a=c.n(o),n=c(30),s=c.n(n),i=c(4),r=c(14),l=c(2),j=c.p+"static/media/icon-sun.9422c153.svg",d=c.p+"static/media/icon-moon.038e80ca.svg",b=c(0),h=function(e){var t=e.darkMode,c=e.setDarkMode,a=document.body.parentElement;Object(o.useEffect)((function(){localStorage.getItem("theme")?a.setAttribute("data-theme",localStorage.getItem("theme")):(c(!0),localStorage.setItem("theme","light"),a.setAttribute("data-theme","light"))}),[]);return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("p",{className:"header__title",children:"devjobs"}),Object(b.jsxs)("div",{className:"header__toggle",children:[Object(b.jsx)("img",{src:j,alt:"Sun"}),Object(b.jsx)("button",{className:"header__toggle__btn ".concat(t?"":"active"),onClick:function(){t?(localStorage.setItem("theme","dark"),a.setAttribute("data-theme",localStorage.getItem("theme")),c(!1)):(localStorage.setItem("theme","light"),a.setAttribute("data-theme",localStorage.getItem("theme")),c(!0))},children:Object(b.jsx)("span",{className:"slider"})}),Object(b.jsx)("span",{children:Object(b.jsx)("img",{src:d,alt:"Moon"})})]})]})})},x=c(20),p=c.p+"static/media/icon-search.09900c2e.svg",O=c.p+"static/media/icon-location.325ff3d9.svg",u=c.p+"static/media/icon-filter.2471816d.svg",m=function(e){var t=e.children,c=e.clic,o=e.typeBtn,a="button ".concat(o);return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("button",{type:"submit",className:a,onClick:c,children:t})})},y=c(17),g=function(e){var t=e.description,c=e.location,a=e.fullTime,n=e.finalSearch,s=e.setDescription,r=e.setLocation,l=e.setFullTime,j=Object(y.useMediaQuery)({query:"(max-width: 1110px)"}),d=Object(y.useMediaQuery)({query:"(max-width: 689px)"}),h=Object(o.useState)(!1),x=Object(i.a)(h,2),g=x[0],f=x[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"searchBar",children:[Object(b.jsxs)("div",{className:"searchBar__description",children:[d?null:Object(b.jsx)("img",{src:p,onClick:n,alt:"icon Search"}),Object(b.jsx)("input",{type:"text",placeholder:j?"Filter by title ...":"Filter by title, companies, expertise ...",value:t,onChange:function(e){return s(e.target.value)}})]}),Object(b.jsxs)("div",{className:"searchBar__location",children:[Object(b.jsx)("img",{src:O,alt:"icon Location"}),Object(b.jsx)("input",{type:"text",placeholder:"Filter by location ...",value:c,onChange:function(e){return r(e.target.value)}})]}),Object(b.jsxs)("div",{className:"searchBar__fullTime",children:[Object(b.jsxs)("label",{htmlFor:"fullTime",name:"fullTime",children:[Object(b.jsx)("input",{type:"checkbox",id:"fullTime",checked:a,onChange:function(e){return l(e.target.checked)},hidden:!0}),Object(b.jsx)("div",{}),Object(b.jsx)("span",{children:j?"Full Time":"Full Time Only"})]}),d?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("img",{id:"img__modal",src:u,alt:"icon filter",onClick:function(){f(!0),document.querySelector("html").style.overflow="hidden"}}),Object(b.jsx)("img",{src:p,style:{marginLeft:"1.5rem"},onClick:n,alt:"icon Search"})]}):Object(b.jsx)(m,{clic:n,typeBtn:"search",children:"Search"})]})]}),g&&d&&Object(b.jsx)("div",{className:"show__filter",children:Object(b.jsxs)("div",{className:"filter__content",children:[Object(b.jsxs)("div",{className:"filter__location",children:[Object(b.jsx)("img",{src:O,alt:"icon Location"}),Object(b.jsx)("input",{type:"text",placeholder:"Filter by location ...",value:c,onChange:function(e){return r(e.target.value)}})]}),Object(b.jsx)("div",{className:"filter__fullTime",children:Object(b.jsxs)("label",{htmlFor:"fullTime",name:"fullTime",children:[Object(b.jsx)("input",{type:"checkbox",id:"fullTime",checked:a,onChange:function(e){return l(e.target.checked)},hidden:!0}),Object(b.jsx)("div",{}),Object(b.jsx)("span",{children:"Full Time Only"})]})}),Object(b.jsx)(m,{clic:function(e){n(e),f(!1),document.querySelector("html").style.overflow="initial"},typeBtn:"searchMobil",children:"Search"})]})})]})},f=function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"job__board__card",children:[Object(b.jsx)("div",{className:"card__image__container",children:e.logo?Object(b.jsx)("img",{src:e.logo,alt:e.logo}):Object(b.jsx)("div",{className:"no-logo",children:"N / A"})}),Object(b.jsxs)("p",{className:"card__time-type",children:[Object(b.jsx)("span",{className:"card__time",children:e.created}),Object(b.jsx)("span",{style:{margin:"0 10px"},children:"\u2022"}),Object(b.jsx)("span",{className:"card__type",children:e.type})]}),Object(b.jsx)(r.b,{to:"/job/".concat(e.id),onClick:function(){return window.scroll(0,0)},props:e,children:Object(b.jsx)("h3",{className:"card__title",children:e.title})}),Object(b.jsx)("span",{className:"card__company",children:e.company}),Object(b.jsx)("h4",{className:"card__location",children:e.location})]})})},v=c(12),M=c.n(v),_=function(e,t){var c=6e4,o=36e5,a=864e5,n=2592e6,s=31536e6,i=e-t;return i<c?Math.round(i/1e3)+" seconds ago":i<o?1!==Math.round(i/c)?Math.round(i/c)+" minutes ago":Math.round(i/c)+" minute ago":i<a?1!==Math.round(i/o)?Math.round(i/o)+" hours ago":Math.round(i/o)+" hour ago":i<n?1!==Math.round(i/a)?Math.round(i/a)+" days ago":Math.round(i/a)+" day ago":i<s?1!==Math.round(i/n)?Math.round(i/n)+" months ago":Math.round(i/n)+" month ago":1!==Math.round(i/s)?Math.round(i/s)+" years ago":Math.round(i/s)+" year ago"},N=function(e){var t=e.type,c=e.typeLoader,o="skeleton__".concat(c,"__").concat(t);return Object(b.jsx)("div",{className:o})},k=function(){return Object(b.jsx)("div",{className:"skeleton",children:Object(b.jsxs)("div",{className:"skeleton__home",children:[Object(b.jsx)(N,{typeLoader:"home",type:"logo"}),Object(b.jsx)(N,{typeLoader:"home",type:"text1"}),Object(b.jsx)(N,{typeLoader:"home",type:"title"}),Object(b.jsx)(N,{typeLoader:"home",type:"text2"}),Object(b.jsx)(N,{typeLoader:"home",type:"text3"})]})})},A=function(e){var t=e.darkMode,c=e.setDarkMode,a=e.openModal,n=e.setOpenModal,s=Object(o.useState)([]),r=Object(i.a)(s,2),l=r[0],j=r[1],d=Object(o.useState)(!1),h=Object(i.a)(d,2),p=h[0],O=h[1],u=Object(o.useState)(1),y=Object(i.a)(u,2),v=y[0],N=y[1],A=Object(o.useState)(""),L=Object(i.a)(A,2),w=L[0],I=L[1],D=Object(o.useState)(""),T=Object(i.a)(D,2),S=T[0],J=T[1],E=Object(o.useState)(!1),F=Object(i.a)(E,2),U=F[0],q=F[1],C=Object(o.useState)({description:"",location:"",fullTime:""}),G=Object(i.a)(C,2),z=G[0],V=G[1],P="https://cors.bridged.cc/https://jobs.github.com/positions.json",Y="".concat(P,"?description=").concat(z.description,"&location=").concat(z.location,"&full_time=").concat(z.fullTime,"&page=").concat(v);Object(o.useEffect)((function(){O(!0);var e=Object(x.a)(l);z.description&&z.location&&z.fullTime?M.a.get("".concat(P,"?page=").concat(v)).then((function(t){t.data.forEach((function(t){-1===e.findIndex((function(e){return e.id===t.id}))&&e.push(t)})),j(e),O(!1)})):M.a.get("".concat(Y)).then((function(t){e=1===v?[]:Object(x.a)(l),O(!0),t.data.forEach((function(t){e.push(t),console.log("test")})),j(e),O(!1)}))}),[v,z]);var H=function(e,t,c){V({description:e,location:t,fullTime:c}),N(1)};return console.log(l),Object(b.jsxs)("div",{className:"home__page",children:[Object(b.jsx)(g,{darkMode:t,setDarkMode:c,description:w,location:S,fullTime:U,setDescription:I,setLocation:J,setFullTime:q,openModal:a,setOpenModal:n,finalSearch:function(e){e.preventDefault(),V({description:w,location:S,fullTime:U?"on":"off"}),I(""),J(""),q("")}}),Object(b.jsxs)("div",{className:"page__filter",children:[z.description&&Object(b.jsx)("span",{onClick:function(){return H("",z.location,z.fullTime)},children:z.description+" x"}),z.location&&Object(b.jsx)("span",{onClick:function(){return H(z.description,"",z.fullTime)},children:z.location+" x"}),"on"===z.fullTime&&Object(b.jsx)("span",{onClick:function(){return H(z.description,z.location,"off")},children:"Only Full Time x"})]}),Object(b.jsxs)("div",{className:"page__jobBoard",children:[p&&[1,2,3,4,5,6].map((function(e){return Object(b.jsx)(k,{},e)})),l.map((function(e){return Object(b.jsx)(f,{id:e.id,logo:e.company_logo,created:_(Date.now(),Date.parse(e.created_at)),type:e.type,title:e.title,company:e.company,location:e.location,openModal:a},e.id)})),p&&[1,2,3,4,5,6].map((function(e){return Object(b.jsx)(k,{},e)}))]}),!p&&Object(b.jsx)(m,{typeBtn:"loadMore",clic:function(){N(v+1),O(!0)},children:"Load More"})]})},L=function(){return Object(b.jsxs)("div",{className:"skeleton__job",children:[Object(b.jsxs)("div",{className:"skeleton__job__header",children:[Object(b.jsx)(N,{typeLoader:"job",type:"logo"}),Object(b.jsx)(N,{typeLoader:"job",type:"text1"}),Object(b.jsx)(N,{typeLoader:"job",type:"button1"})]}),Object(b.jsxs)("div",{className:"skeleton__job__body",children:[Object(b.jsxs)("div",{className:"skeleton__job__body__header",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)(N,{typeLoader:"job",type:"text2"}),Object(b.jsx)(N,{typeLoader:"job",type:"text3"}),Object(b.jsx)(N,{typeLoader:"job",type:"text4"})]}),Object(b.jsx)(N,{typeLoader:"job",type:"button2"})]}),Object(b.jsxs)("div",{className:"skeleton__job__body__content",children:[Object(b.jsx)(N,{typeLoader:"job",type:"text5"}),Object(b.jsx)(N,{typeLoader:"job",type:"text6"}),Object(b.jsx)(N,{typeLoader:"job",type:"text5"}),Object(b.jsx)(N,{typeLoader:"job",type:"text6"}),Object(b.jsx)(N,{typeLoader:"job",type:"text5"}),Object(b.jsx)(N,{typeLoader:"job",type:"text5"}),Object(b.jsx)(N,{typeLoader:"job",type:"text6"}),Object(b.jsx)(N,{typeLoader:"job",type:"text5"}),Object(b.jsx)(N,{typeLoader:"job",type:"text6"}),Object(b.jsx)(N,{typeLoader:"job",type:"text6"}),Object(b.jsx)(N,{typeLoader:"job",type:"text6"}),Object(b.jsx)(N,{typeLoader:"job",type:"text5"}),Object(b.jsx)(N,{typeLoader:"job",type:"text6"}),Object(b.jsx)(N,{typeLoader:"job",type:"text5"}),Object(b.jsx)(N,{typeLoader:"job",type:"text5"}),Object(b.jsx)(N,{typeLoader:"job",type:"text6"}),Object(b.jsx)(N,{typeLoader:"job",type:"text5"}),Object(b.jsx)(N,{typeLoader:"job",type:"text6"}),Object(b.jsx)(N,{typeLoader:"job",type:"text5"}),Object(b.jsx)(N,{typeLoader:"job",type:"text6"}),Object(b.jsx)(N,{typeLoader:"job",type:"text5"}),Object(b.jsx)(N,{typeLoader:"job",type:"text5"})]})]}),Object(b.jsxs)("div",{className:"skeleton__job__footer",children:[Object(b.jsx)(N,{typeLoader:"job",type:"text2"}),Object(b.jsx)(N,{typeLoader:"job",type:"text5"}),Object(b.jsx)(N,{typeLoader:"job",type:"text6"}),Object(b.jsx)(N,{typeLoader:"job",type:"text5"}),Object(b.jsx)(N,{typeLoader:"job",type:"text5"})]})]})},w=function(e){var t=Object(o.useState)(!1),c=Object(i.a)(t,2),a=c[0],n=c[1],s=Object(o.useState)(""),r=Object(i.a)(s,2),l=r[0],j=r[1],d=e.match.params;return Object(o.useEffect)((function(){n(!0),M.a.get("https://cors.bridged.cc/https://jobs.github.com/positions/".concat(d.id,".json?")).then((function(e){j(e.data),n(!1)}))}),[d.id]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"job__details",children:[a?Object(b.jsx)(L,{}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"job__details__header",children:[Object(b.jsxs)("div",{className:"header__image__container",children:[l.company_logo&&Object(b.jsx)("img",{src:l.company_logo,alt:"logo company"}),!l.company_logo&&Object(b.jsx)("div",{className:"no-logo",children:"N / A"})]}),Object(b.jsxs)("div",{className:"header__textbox",children:[Object(b.jsxs)("div",{className:"header__textbox__inner",children:[Object(b.jsx)("h2",{className:"header__textbox__heading",children:l.company}),Object(b.jsx)("p",{className:"header__textbox__site",children:l.company_url})]}),Object(b.jsx)("a",{href:l.company_url,target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)(m,{typeBtn:"companySite",children:"Company Site"})})]})]}),Object(b.jsxs)("div",{className:"job__details__body",children:[Object(b.jsxs)("div",{className:"body__heading__content",children:[Object(b.jsxs)("div",{className:"body__heading__time__content",children:[Object(b.jsxs)("p",{children:[Object(b.jsx)("span",{className:"body__heading__time",children:_(Date.now(),Date.parse(l.created_at))}),Object(b.jsx)("span",{style:{margin:"0 10px"},children:"\u2022"}),Object(b.jsx)("span",{className:"body__heading__type",children:l.type})]}),Object(b.jsx)("h2",{className:"body__heading__title",children:l.title}),Object(b.jsx)("p",{className:"body__heading__location",children:l.location})]}),Object(b.jsx)("a",{href:"#5",className:"body__heading__redirect btn",target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)(m,{typeBtn:"applyNow",children:"Apply Now"})})]}),Object(b.jsx)("div",{className:"body__main",dangerouslySetInnerHTML:{__html:l.description}})]}),Object(b.jsxs)("div",{className:"job__details__apply",children:[Object(b.jsx)("h3",{children:"How to apply"}),Object(b.jsx)("div",{dangerouslySetInnerHTML:{__html:l.how_to_apply}})]})]}),Object(b.jsxs)("div",{className:"made",children:[Object(b.jsx)("div",{children:Object(b.jsxs)("p",{children:["\xa9 2021 Challenge ",Object(b.jsx)("a",{href:"https://www.frontendmentor.io/challenges",target:"_blank",rel:"noopener noreferrer",children:"FrondEnd Mentor"})," by ",Object(b.jsx)("a",{href:"https://www.frontendmentor.io/profile/JustGJ",target:"_blank",rel:"noopener noreferrer",children:"Jeff"}),"\u2002"]})}),Object(b.jsx)("a",{href:"https://github.com/JustGJ",target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)("img",{src:"data:image/png;base64,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",alt:"github Jeff"})})]})]})})},I=function(){var e=Object(o.useState)("light"===localStorage.getItem("theme")),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(b.jsxs)(r.a,{basename:"/FEM-Github-jobs-API",children:[Object(b.jsx)(h,{darkMode:c,setDarkMode:a}),Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{exact:!0,path:"/",children:Object(b.jsx)(A,{darkMode:c,setDarkMode:a})}),Object(b.jsx)(l.a,{path:"/job/:id",component:w})]})]})};c(60);s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(I,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.60d86811.chunk.js.map