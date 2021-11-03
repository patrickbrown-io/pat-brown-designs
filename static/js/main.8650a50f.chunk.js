(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{46:function(e,n,t){},47:function(e,n,t){},62:function(e,n,t){"use strict";t.r(n);var i,a,o,r,c,s,d,l,p,x,j,b,h,g,f,m,u,O,y,w,v,k,S,T,D,z,A,B,C,F,P,M,L,E,R,N,G,W,I,H,Q,Y,_,J,U,V,q,K,Z,X,$,ee,ne,te,ie,ae,oe,re,ce,se,de,le,pe,xe,je,be,he,ge=t(2),fe=t.n(ge),me=t(20),ue=t.n(me),Oe=(t(46),t(47),t(12)),ye=t(5),we=t(8),ve=t(6),ke=t(3),Se=t(4),Te=t(15),De=t(13),ze=Se.a.aside(i||(i=Object(ke.a)(["\n    position: fixed;\n    z-index: 999;\n    width: 100%;\n    height:100%;\n    background: #0d0d0d;\n    display: grid;\n    align-items: center;\n    top: 0;\n    left: 0;\n    transition: 0.3s ease-in-out;\n    opacity: ",";\n    top: ",";\n"])),(function(e){return e.isOpen?"100%":"0"}),(function(e){return e.isOpen?"0":"-100%"})),Ae=Object(Se.a)(Te.b)(a||(a=Object(ke.a)(["\n    color: #fff\n"]))),Be=Se.a.div(o||(o=Object(ke.a)(["\n    position: absolute;\n    top: 1.2rem;\n    right: 1.5rem;\n    background: transparent;\n    font-size: 2rem;\n    cursor: pointer;\n    outline: none;\n"]))),Ce=Se.a.div(r||(r=Object(ke.a)(["\n    color: #fff;\n"]))),Fe=Se.a.ul(c||(c=Object(ke.a)(["\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(6,80px);\n    text-align: center;\n\n    @media screen and (max-width: 480px) {\n        grid-template-rows: repeat(6,60px)\n    }\n"]))),Pe=Object(Se.a)(De.Link)(s||(s=Object(ke.a)(["\n    display:flex;\n    align-items:center;\n    justify-content: center;\n    font-size: 1.5rem;\n    text-decoration: none;\n    list-style: none;\n    transition: 0.2 ease-in-out;\n    text-decoration: none;\n    color: #fff;\n    cursor: pointer;\n\n    &:hover {\n        color: #11DACD;\n        transition: 0.2s ease-in-out\n    }\n"]))),Me=Se.a.div(d||(d=Object(ke.a)(["\n    display:flex;\n    justify-content: center;\n"]))),Le=Object(Se.a)(Oe.b)(l||(l=Object(ke.a)(["\n    border-radius: 50px;\n    background: #11DACD;\n    white-space: nowrap;\n    padding: 16px 64px;\n    color: #010606;\n    outline: none;\n    border:none;\n    cursor: pointer;\n    transition: all 0.2s ease-in-out;\n    text-decoration: none;\n\n    &:hover{\n        transition: all 0.2s ease-in-out;\n        background: #fff;\n        color: #010606;\n    }\n"]))),Ee=t(1),Re=function(e){var n=e.isOpen,t=e.toggle,i=e.contactToggle;return Object(Ee.jsx)(Ee.Fragment,{children:Object(Ee.jsxs)(ze,{isOpen:n,onClick:t,children:[Object(Ee.jsx)(Be,{onClick:t,smooth:!0,duration:500,spy:!0,exact:!0,offset:-80,children:Object(Ee.jsx)(Ae,{})}),Object(Ee.jsxs)(Ce,{children:[Object(Ee.jsxs)(Fe,{children:[Object(Ee.jsx)(Pe,{to:"about",onClick:t,offset:-80,children:"About"}),Object(Ee.jsx)(Pe,{to:"projects",onClick:t,offset:80,children:"Projects"}),Object(Ee.jsx)(Pe,{to:"skills",onClick:t,offset:-80,children:"Skills"})]}),Object(Ee.jsx)(Me,{children:Object(Ee.jsx)(Le,{to:"/",onClick:i,offset:-80,children:"Contact"})})]})]})})},Ne=Se.a.nav(p||(p=Object(ke.a)(["\n  background: ",";\n  height: 80px;\n  margin-top: -80px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n\n  @media screen and (max-width: 960px) {\n    transition: 0.8s all ease;\n  }\n"])),(function(e){return e.scrollNav?"#000":"transparent"})),Ge=Se.a.div(x||(x=Object(ke.a)(["\n  display: flex;\n  justify-content: space-between;\n  height: 80px;\n  z-index: 1;\n  width: 100%;\n  padding: 0 24px;\n  max-width: 1100px;\n"]))),We=Object(Se.a)(Oe.b)(j||(j=Object(ke.a)(["\n  color: #fff;\n  justify-self: flex-start;\n  cursor: pointer;\n  font-size: 1.5rem;\n  display: flex;\n  align-items: center;\n  margin-left: 24px;\n  font-weight: bold;\n  text-decoration: none;\n"]))),Ie=Se.a.div(b||(b=Object(ke.a)(["\n  display: none;\n  @media screen and (max-width: 768px) {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(-100%, 60%);\n    font-size: 1.8rem;\n    cursor: pointer;\n    color: #fff;\n  }\n"]))),He=Se.a.ul(h||(h=Object(ke.a)(["\n  display: flex;\n  align-items: center;\n  list-style: none;\n  text-align: center;\n  margin-right: -22px;\n\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),Qe=Se.a.li(g||(g=Object(ke.a)(["\n  height: 80px;\n"]))),Ye=Object(Se.a)(De.Link)(f||(f=Object(ke.a)(["\n  color: #fff;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0rem 1rem;\n  height: 100%;\n  cursor: pointer;\n\n  &.active {\n    border-bottom: 3px solid #11dacd;\n  }\n"]))),_e=Se.a.nav(m||(m=Object(ke.a)(["\n  display: flex;\n  align-items: center;\n\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),Je=Object(Se.a)(Oe.b)(u||(u=Object(ke.a)(["\n  border-radius: 50px;\n  background: #11dacd;\n  white-space: nowrap;\n  padding: 10px 22px;\n  color: #010606;\n  cursor: pointer;\n  transition: all 0.2 ease-ease-in-out;\n  text-decoration: none;\n\n  &:hover {\n    transition: all 0.2 ease-in-out;\n    background: #fff;\n    color: #010606;\n  }\n"]))),Ue=function(e){var n=e.toggle,t=e.contactToggle,i=Object(ge.useState)(!1),a=Object(ve.a)(i,2),o=a[0],r=a[1],c=function(){window.scrollY>=80?r(!0):r(!1)};Object(ge.useEffect)((function(){window.addEventListener("scroll",c)}),[]);return Object(Ee.jsx)(Ee.Fragment,{children:Object(Ee.jsx)(Ne,{scrollNav:o,children:Object(Ee.jsxs)(Ge,{children:[Object(Ee.jsx)(We,{to:"/",smooth:!0,duration:500,spy:!0,exact:!0,offset:0,onClick:function(){De.animateScroll.scrollToTop()},children:"pbdesigns"}),Object(Ee.jsx)(Ie,{onClick:n,children:Object(Ee.jsx)(Te.a,{})}),Object(Ee.jsxs)(He,{children:[Object(Ee.jsx)(Qe,{children:Object(Ee.jsx)(Ye,{to:"about",smooth:!0,duration:500,spy:!0,exact:!0,offset:-80,children:"About"})}),Object(Ee.jsx)(Qe,{children:Object(Ee.jsx)(Ye,{to:"projects",smooth:!0,duration:500,spy:!0,exact:!0,offset:-80,children:"Projects"})}),Object(Ee.jsx)(Qe,{children:Object(Ee.jsx)(Ye,{to:"skills",smooth:!0,duration:500,spy:!0,exact:!0,offset:-80,children:"Tools"})}),Object(Ee.jsx)(Qe,{children:Object(Ee.jsx)(Ye,{to:"contact",smooth:!0,duration:500,spy:!0,exact:!0,offset:30,children:"Connect"})})]}),Object(Ee.jsx)(_e,{children:Object(Ee.jsx)(Je,{onClick:t,to:"/",children:"Contact"})})]})})})},Ve=t.p+"static/media/video.d28831bc.mp4",qe=Object(Se.a)(De.Link)(O||(O=Object(ke.a)(["\n  border-radius: 50px;\n  background: ",";\n  white-space: nowrap;\n  padding: ",";\n  color: ",";\n  font-size: ",";\n  outline: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2 ease-in-out;\n  text-decoration: none;\n\n  &:hover {\n    transition: all 0.2 ease-in-out;\n    background: ",";\n  }\n"])),(function(e){return e.primary?"#11DACD":"#010606"}),(function(e){return e.big?"14px 48px":"12px 30px"}),(function(e){return e.dark?"#010606":"#fff"}),(function(e){return e.fontBig?"20px":"16px"}),(function(e){return e.primary?"#fff":"#11DACD"})),Ke=Object(Se.a)(Oe.b)(y||(y=Object(ke.a)(["\n  border-radius: 50px;\n  background: ",";\n  white-space: nowrap;\n  padding: ",";\n  color: ",";\n  font-size: ",";\n  outline: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2 ease-in-out;\n  text-decoration: none;\n\n  &:hover {\n    transition: all 0.2 ease-in-out;\n    background: ",";\n  }\n"])),(function(e){return e.primary?"#11DACD":"#010606"}),(function(e){return e.big?"14px 48px":"12px 30px"}),(function(e){return e.dark?"#010606":"#fff"}),(function(e){return e.fontBig?"20px":"16px"}),(function(e){return e.primary?"#fff":"#11DACD"})),Ze=Se.a.a(w||(w=Object(ke.a)(["\n  border-radius: 50px;\n  background: ",";\n  white-space: nowrap;\n  padding: ",";\n  color: ",";\n  font-size: ",";\n  outline: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2 ease-in-out;\n  text-decoration: none;\n\n  &:hover {\n    transition: all 0.2 ease-in-out;\n    background: ",";\n  }\n"])),(function(e){return e.primary?"#11DACD":"#010606"}),(function(e){return e.big?"14px 48px":"12px 30px"}),(function(e){return e.dark?"#010606":"#fff"}),(function(e){return e.fontBig?"20px":"16px"}),(function(e){return e.primary?"#fff":"#11DACD"})),Xe=Se.a.button(v||(v=Object(ke.a)(["\n  border-radius: 50px;\n  background: ",";\n  white-space: nowrap;\n  padding: ",";\n  color: ",";\n  font-size: ",";\n  outline: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2 ease-in-out;\n  text-decoration: none;\n\n  &:hover {\n    transition: all 0.2 ease-in-out;\n    background: ",";\n  }\n"])),(function(e){return e.primary?"#11DACD":"#010606"}),(function(e){return e.big?"14px 48px":"12px 30px"}),(function(e){return e.dark?"#010606":"#fff"}),(function(e){return e.fontBig?"20px":"16px"}),(function(e){return e.primary?"#fff":"#11DACD"})),$e=t(17),en=Se.a.div(k||(k=Object(ke.a)(["\n    background: #0c0c0c;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0 30px;\n    height: 800px;\n    position: relative;\n    z-index: 1;\n\n    :before{\n        content:'';\n        position:absolute;\n        top:0;\n        left:0;\n        right:0;\n        bottom:0;\n        background:linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), \n        linear-gradient(180deg, rgba(0,0,0,0.2)0%, transparent 100%);\n        z-index: 2;\n    }\n"]))),nn=Se.a.div(S||(S=Object(ke.a)(["\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n"]))),tn=Se.a.video(T||(T=Object(ke.a)(["\n    width: 100%;\n    height: 100%;\n    --o-object-fit:cover;\n    object-fit: cover;\n    background: #232a34;\n"]))),an=Se.a.div(D||(D=Object(ke.a)(["\n    z-index:3;\n    max-width: 1200px;\n    position: absolute;\n    padding: 8px 24px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]))),on=Se.a.h1(z||(z=Object(ke.a)(["\n    color: #fff;\n    font-size: 48px;\n    text-align: center;\n    text-shadow: 1px 1px 5px #000000;\n\n    @media screen and (max-width: 768px){\n        font-size: 40px;\n    }\n\n    @media screen and (max-width: 480px){\n        font-size: 32px;\n    }\n"]))),rn=Se.a.p(A||(A=Object(ke.a)(["\n    margin-top: 24px;\n    color: #fff;\n    font-size: 24px;\n    text-align: center;\n    max-width: 600px;\n    text-shadow: 1px 1px 5px #000000;\n\n\n    @media screen and (max-width: 768px){\n        font-size: 24px;\n    }\n\n    @media screen and (max-width: 480px){\n        font-size: 18px;\n    }\n"]))),cn=Se.a.div(B||(B=Object(ke.a)(["\n    margin-top: 32px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]))),sn=Object(Se.a)($e.a)(C||(C=Object(ke.a)(["\n    margin-left: 8px;\n    font-size: 20px;\n"]))),dn=Object(Se.a)($e.b)(F||(F=Object(ke.a)(["\n    margin-left: 8px;\n    font-size: 20px;\n"]))),ln=function(){var e=Object(ge.useState)(!1),n=Object(ve.a)(e,2),t=n[0],i=n[1],a=function(){i(!t)};return Object(Ee.jsxs)(en,{id:"home",children:[Object(Ee.jsx)(nn,{children:Object(Ee.jsx)(tn,{autoPlay:!0,loop:!0,muted:!0,src:Ve,type:"video/mp4"})}),Object(Ee.jsxs)(an,{children:[Object(Ee.jsx)(on,{children:"pat brown designs"}),Object(Ee.jsx)(rn,{children:"Delivering modern user experiences"}),Object(Ee.jsx)(cn,{children:Object(Ee.jsxs)(qe,{to:"about",onMouseEnter:a,onMouseLeave:a,primary:"true",dark:"true",smooth:!0,duration:500,spy:!0,exact:!0,offset:-80,children:["Who is Pat? ",t?Object(Ee.jsx)(sn,{}):Object(Ee.jsx)(dn,{})]})})]})]})},pn=Se.a.div(P||(P=Object(ke.a)(["\n  color: #fff;\n  background: ",";\n\n  @media screen and (max-width: 768px) {\n    padding: 100px 0;\n  }\n"])),(function(e){return e.lightBg?"#022125":"#010606"})),xn=Se.a.div(M||(M=Object(ke.a)(["\n  display: grid;\n  z-index: 1;\n  height: 860px;\n  width: 100%;\n  max-width: 1100px;\n  margin-right: auto;\n  margin-left: auto;\n  padding: 0 24px;\n  justify-content: center;\n"]))),jn=Se.a.div(L||(L=Object(ke.a)(["\n  display: grid;\n  grid-auto-columns: minmax(auto, 1fr);\n  align-items: center;\n  grid-template-areas: ",";\n\n  @media screen and (max-width: 768px) {\n    grid-template-areas: ",";\n  }\n"])),(function(e){return e.imgStart?"'col2 col1'":"'col1 col2'"}),(function(e){return e.imgStart?"'col1' 'col2'":"'col1 col1' 'col2 col2'"})),bn=Se.a.div(E||(E=Object(ke.a)(["\n  margin-bottom: 15px;\n  padding: 0 15px;\n  grid-area: col1;\n"]))),hn=Se.a.div(R||(R=Object(ke.a)(["\n  margin-bottom: 15px;\n  padding: 0 15px;\n  grid-area: col2;\n"]))),gn=Se.a.div(N||(N=Object(ke.a)(["\n  max-width: 540px;\n  padding-top: 0;\n  padding-bottom: 60px;\n"]))),fn=Se.a.p(G||(G=Object(ke.a)(["\n  color: #11dacd;\n  font-size: 16px;\n  line-height: 16px;\n  font-weight: 700;\n  letter-spacing: 1.4px;\n  text-transform: uppercase;\n  margin-bottom: 16px;\n"]))),mn=Se.a.h1(W||(W=Object(ke.a)(["\n  margin-bottom: 24px;\n  font-size: 48px;\n  line-height: 1.1;\n  font-weight: 600;\n  color: ",";\n\n  @media screen and (max-width: 480px) {\n    font-size: 32px;\n  }\n"])),(function(e){return e.lightText?"#f7f8fa":"#010606"})),un=Se.a.p(I||(I=Object(ke.a)(["\n  max-width: 440px;\n  margin-bottom: 35px;\n  font-size: 18px;\n  line-height: 24px;\n  color: ",";\n"])),(function(e){return e.darkText?"#010606":"#fff"})),On=Se.a.div(H||(H=Object(ke.a)(["\n  display: flex;\n  justify-content: flex-start;\n"]))),yn=Se.a.div(Q||(Q=Object(ke.a)(["\n  max-width: 555px;\n  height: 100%;\n"]))),wn=Se.a.img(Y||(Y=Object(ke.a)(["\n  width: 100%;\n  margin: 0 0 10px 0;\n  padding-right: 0;\n"]))),vn=function(e){var n=e.lightBg,t=e.id,i=e.imgStart,a=e.topLine,o=e.lightText,r=e.headline,c=e.darkText,s=e.description,d=e.buttonLabel,l=e.imgSrc,p=e.alt,x=e.primary,j=e.dark,b=e.dark2,h=e.btnTo;return Object(Ee.jsx)(Ee.Fragment,{children:Object(Ee.jsx)(pn,{lightBg:n,id:t,children:Object(Ee.jsx)(xn,{children:Object(Ee.jsxs)(jn,{imgStart:i,children:[Object(Ee.jsx)(bn,{children:Object(Ee.jsxs)(gn,{children:[Object(Ee.jsx)(fn,{children:a}),Object(Ee.jsx)(mn,{lightText:o,children:r}),Object(Ee.jsx)(un,{darkText:c,children:s}),Object(Ee.jsx)(On,{children:Object(Ee.jsx)(qe,{to:h,smooth:!0,duration:500,spy:!0,exact:!0,offset:-80,primary:x?1:0,dark:j?1:0,dark2:b?1:0,children:d})})]})}),Object(Ee.jsx)(hn,{children:Object(Ee.jsx)(yn,{children:Object(Ee.jsx)(wn,{src:l,alt:p})})})]})})})})},kn=t.p+"static/media/svg-1.1a6bba3c.svg",Sn={id:"about",lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"Full-Stack Javascript Developer",headline:"Pat Brown",description:"Based in Denver, I leverage a seven-year career in content marketing strategy to deliver unified and refreshing user experiences. A graduate of the University of Denver's Full-Stack Development certificate, I hone my engineering skills in modern, scalable, and performant web applications utilizing the MERN+G stack as my preferred development architecture. ",buttonLabel:"Technical Skills",imgStart:!1,imgSrc:"https://media-exp1.licdn.com/dms/image/C4E03AQG3tQ4GX-RDgQ/profile-displayphoto-shrink_100_100/0/1592799089030?e=1640822400&v=beta&t=aRCGyOK0Y-B3eFRVY0Z9Cbju4ZUYkAOhGgUnTFEnSjI",alt:"A handsome young full-stack Javascript developer eaglerly awaiting your call",dark:!0,primary:!0,darkText:!1,btnTo:"skills"},Tn={id:"skills",lightBg:!1,lightText:!0,lightTextDesc:!1,topLine:"Languages & Applications",headline:"Developer Tools",description:"JavaScript, Express.js, Node.js, React.js, MongoDB, CSS3, HTML5, mySQL, GraphQL, postgreSQL, Github, RESTful API's, Progressive Web Applications, jQuery",buttonLabel:"Projects",imgStart:!0,imgSrc:"https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1760&q=80",alt:"A handsome young full-stack Javascript developer eaglerly awaiting your call",dark:!0,primary:!0,darkText:!1,btnTo:"projects"},Dn=t.p+"static/media/moovie.768c65b8.jpg",zn=t.p+"static/media/budget.9575a50d.jpg",An=t.p+"static/media/book.2418d999.jpg",Bn=Se.a.div(_||(_=Object(ke.a)(["\n  height: 1000px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #010606;\n\n  @media screen and (max-width: 768px) {\n    height: 2600px;\n  }\n\n  @media screen and (max-width: 480px) {\n    height: 3200px;\n  }\n"]))),Cn=Se.a.div(J||(J=Object(ke.a)(["\n  max-width: 1000px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  align-items: center;\n  grid-gap: 16px;\n  padding: 0 50px;\n\n  @media screen and (max-width: 1000px) {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  @media screen and (max-width: 768px) {\n    grid-template-columns: 1fr;\n    padding: 0 20px;\n  }\n"]))),Fn=Se.a.div(U||(U=Object(ke.a)(["\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  border-radius: 10px;\n  max-height: 340px;\n  padding: 30px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  transition: all 0.2s ease-in-out;\n\n  &:hover {\n    transform: scale(1.02);\n    transition: all 0.2s ease-in-out;\n    cursor: pointer;\n  }\n"]))),Pn=Se.a.img(V||(V=Object(ke.a)(["\n  height: 160px;\n  width: 160px;\n  margin-bottom: 10px;\n"]))),Mn=Se.a.h1(q||(q=Object(ke.a)(["\n  font-size: 2.5rem;\n  color: #fff;\n  margin-bottom: 64px;\n\n  @media screen and (max-width: 480px) {\n    font-size: 2rem;\n  }\n"]))),Ln=Se.a.h2(K||(K=Object(ke.a)(["\n  font-size: 1rem;\n  margin-bottom: 10px;\n"]))),En=Se.a.p(Z||(Z=Object(ke.a)(["\n  font-size: 1rem;\n  text-align: center;\n"]))),Rn=function(){return Object(Ee.jsx)(Ee.Fragment,{children:Object(Ee.jsxs)(Bn,{id:"projects",children:[Object(Ee.jsx)(Mn,{children:"Projects"}),Object(Ee.jsxs)(Cn,{children:[Object(Ee.jsxs)(Fn,{children:[Object(Ee.jsx)(Pn,{src:Dn}),Object(Ee.jsx)(Ln,{children:"moovie | Movie Reviews"}),Object(Ee.jsx)(En,{children:"React, MongoDB, Express.js, Node.js, GraphQl"}),Object(Ee.jsx)("br",{}),Object(Ee.jsx)(Ke,{to:"/moovie",children:"See More"})]}),Object(Ee.jsxs)(Fn,{children:[Object(Ee.jsx)(Pn,{src:"https://github.com/HavoxPrime/NFTy/raw/main/public/images/NFTylogo.png"}),Object(Ee.jsx)(Ln,{children:"NFTy | NFT eCommerce"}),Object(Ee.jsx)(En,{children:"mySQL, Handlebars.js, RESTful API"}),Object(Ee.jsx)("br",{}),Object(Ee.jsx)(Ke,{to:"/nfty",children:"See More"})]}),Object(Ee.jsxs)(Fn,{children:[Object(Ee.jsx)(Pn,{src:kn}),Object(Ee.jsx)(Ln,{children:"Redux eCommerce"}),Object(Ee.jsx)(En,{children:"Redux, React, MongoDB, Express.js, Node.js"}),Object(Ee.jsx)("br",{}),Object(Ee.jsx)(Ke,{to:"/redux",children:"See More"})]}),Object(Ee.jsxs)(Fn,{children:[Object(Ee.jsx)(Pn,{src:"https://images.unsplash.com/photo-1555580399-49e780f216b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3774&q=80"}),Object(Ee.jsx)(Ln,{children:"The vibeForecast"}),Object(Ee.jsx)(En,{children:"Weather-based Playlist Generator | jQuery"}),Object(Ee.jsx)("br",{}),Object(Ee.jsx)(Ke,{to:"/vibe",children:"See More"})]}),Object(Ee.jsxs)(Fn,{children:[Object(Ee.jsx)(Pn,{src:zn}),Object(Ee.jsx)(Ln,{children:"PWA Budget"}),Object(Ee.jsx)(En,{children:"Enter deposits & expenses offline | PWA"}),Object(Ee.jsx)("br",{}),Object(Ee.jsx)(Ke,{to:"/budget",children:"See More"})]}),Object(Ee.jsxs)(Fn,{children:[Object(Ee.jsx)(Pn,{src:An}),Object(Ee.jsx)(Ln,{children:"Book Search Engine"}),Object(Ee.jsx)(En,{children:"Find and save your favorite books | MERN+G "}),Object(Ee.jsx)("br",{}),Object(Ee.jsx)(Ke,{to:"/books",children:"See More"})]})]})]})})},Nn=Se.a.footer(X||(X=Object(ke.a)(["\n  background-color: #022125;\n"]))),Gn=Se.a.div($||($=Object(ke.a)(["\n  padding: 48px 24px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  max-width: 1100px;\n  margin: 0 auto;\n"]))),Wn=Se.a.div(ee||(ee=Object(ke.a)(["\n  display: flex;\n  justify-content: center;\n\n  @media screen and (max-width: 820px) {\n    padding-top: 32px;\n    flex-direction: column;\n  }\n"]))),In=Se.a.div(ne||(ne=Object(ke.a)(["\n  display: flex;\n\n  @media screen and (max-width: 820px) {\n    flex-direction: column;\n  }\n"]))),Hn=Se.a.div(te||(te=Object(ke.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin: 16px;\n  text-align: left;\n  width: 160px;\n  box-sizing: border-box;\n  color: #fff;\n\n  @media screen and (max-width: 420px) {\n    margin: 0;\n    padding: 10px;\n    width: 100%;\n  }\n"]))),Qn=Se.a.h1(ie||(ie=Object(ke.a)(["\n  font-size: 18px;\n  margin-bottom: 16px;\n"]))),Yn=Se.a.a(ae||(ae=Object(ke.a)(["\n  color: #fff;\n  text-decoration: none;\n  margin-bottom: 0.5rem;\n  font-size: 16px;\n  cursor: pointer;\n\n  &:hover {\n    color: #11dacd;\n    transition: 0.3s ease-out;\n  }\n"]))),_n=(Object(Se.a)($e.a)(oe||(oe=Object(ke.a)(["\n  margin-left: 8px;\n  font-size: 20px;\n"]))),Object(Se.a)($e.b)(re||(re=Object(ke.a)(["\n  margin-left: 8px;\n  font-size: 20px;\n"]))),t.p+"static/media/Patrick-Brown-Resume-2021.b662075d.pdf"),Jn=function(){return Object(Ee.jsx)(Nn,{id:"contact",children:Object(Ee.jsx)(Gn,{children:Object(Ee.jsxs)(Wn,{children:[Object(Ee.jsx)(In,{children:Object(Ee.jsxs)(Hn,{children:[Object(Ee.jsx)(Qn,{children:"Documents"}),Object(Ee.jsx)(Yn,{href:_n,target:"_blank",children:"// resume"})]})}),Object(Ee.jsx)(In,{children:Object(Ee.jsxs)(Hn,{children:[Object(Ee.jsx)(Qn,{children:"Social"}),Object(Ee.jsx)(Yn,{href:"https://www.linkedin.com/in/pat-r-brown/",target:"_blank",children:"// linkedin"}),Object(Ee.jsx)(Yn,{target:"_blank",href:"https://github.com/patrickbrown-io",children:"// github"})]})}),Object(Ee.jsx)(In,{children:Object(Ee.jsxs)(Hn,{children:[Object(Ee.jsx)(Qn,{children:"Connect"}),Object(Ee.jsx)(Yn,{href:"mailto:patbrowndesigns@gmail.com",target:"_blank",children:"// email"}),Object(Ee.jsx)(Yn,{href:"tel:8123229561",children:"// call"})]})})]})})})},Un=t(41),Vn=Se.a.aside(ce||(ce=Object(ke.a)(["\n  position: fixed;\n  z-index: 999;\n  min-width: 25%;\n  height: 100%;\n  background: #0d0d0d;\n  display: grid;\n  align-items: center;\n  top: 0;\n  left: 0;\n  transition: 0.3s ease-in-out;\n  padding: 0 25px;\n  opacity: ",";\n  left: ",";\n\n  @media screen and (max-width: 768px) {\n    min-width: 100%;\n  }\n\n  @media screen and (max-width: 480px) {\n    min-width: 100%;\n  }\n"])),(function(e){return e.contactOpen?"100%":"0"}),(function(e){return e.contactOpen?"0":"-100%"})),qn=Object(Se.a)(Te.b)(se||(se=Object(ke.a)(["\n  color: #fff;\n"]))),Kn=Se.a.div(de||(de=Object(ke.a)(["\n  position: absolute;\n  top: 1.2rem;\n  right: 1.5rem;\n  background: transparent;\n  font-size: 2rem;\n  cursor: pointer;\n  outline: none;\n"]))),Zn=Se.a.form(le||(le=Object(ke.a)(["\n  color: #fff;\n"]))),Xn=Se.a.h1(pe||(pe=Object(ke.a)(["\n  color: #fff;\n  font-size: 32px;\n  text-align: center;\n  text-shadow: 1px 1px 5px #000000;\n  margin: 20px 0;\n\n  @media screen and (max-width: 768px) {\n    font-size: 24px;\n  }\n\n  @media screen and (max-width: 480px) {\n    font-size: 16px;\n  }\n"]))),$n=Se.a.div(xe||(xe=Object(ke.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(6, 80px);\n  text-align: center;\n\n  @media screen and (max-width: 480px) {\n    grid-template-rows: repeat(6, 60px);\n  }\n"]))),et=Se.a.input(je||(je=Object(ke.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  text-decoration: none;\n  list-style: none;\n  transition: 0.2 ease-in-out;\n  text-decoration: none;\n  color: #fff;\n  cursor: pointer;\n  background: 000000;\n  margin: 5px 5px;\n\n  &:hover {\n    color: #11dacd;\n    transition: 0.2s ease-in-out;\n  }\n"]))),nt=Se.a.textarea(be||(be=Object(ke.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  text-decoration: none;\n  list-style: none;\n  transition: 0.2 ease-in-out;\n  text-decoration: none;\n  color: #fff;\n  cursor: pointer;\n  background: 000000;\n  margin: 5px 5px;\n  height: 10rem;\n\n  &:hover {\n    color: #11dacd;\n    transition: 0.2s ease-in-out;\n  }\n"]))),tt=Se.a.div(he||(he=Object(ke.a)(["\n  display: flex;\n  justify-content: center;\n"])));function it(){var e=Object(ye.f)().pathname;return Object(ge.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var at,ot,rt,ct,st,dt,lt,pt,xt,jt,bt,ht,gt,ft=function(e){var n=e.contactOpen,t=e.contactToggle,i=Object(ge.useRef)();return Object(Ee.jsxs)(Ee.Fragment,{children:[Object(Ee.jsx)(it,{}),Object(Ee.jsxs)(Vn,{contactOpen:n,children:[Object(Ee.jsx)(Kn,{smooth:!0,duration:500,spy:!0,exact:!0,offset:-80,children:Object(Ee.jsx)(qn,{onClick:t})}),Object(Ee.jsxs)(Zn,{ref:i,onSubmit:function(e){e.preventDefault(),Un.a.sendForm("service_1fk7jfc","template_y57t2gl",e.target,"user_WqtYSk3J7sWCl8zK6WLaJ").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()},children:[Object(Ee.jsx)(Xn,{children:"Contact Me"}),Object(Ee.jsxs)($n,{children:[Object(Ee.jsx)(et,{type:"text",name:"name",placeholder:"Name"}),Object(Ee.jsx)(et,{type:"text",name:"email",placeholder:"Email Address"}),Object(Ee.jsx)(nt,{type:"text",name:"message",placeholder:"Provide as much detail as possible in your request -- project guidelines, timeline, questions...anything at all! I will get back to you within 2 business days"})]}),Object(Ee.jsx)(tt,{children:Object(Ee.jsx)(Xe,{type:"submit",value:"Send",children:"Send"})})]})]})]})},mt=function(){var e=Object(ge.useState)(!1),n=Object(ve.a)(e,2),t=n[0],i=n[1],a=function(){i(!t)},o=Object(ge.useState)(!1),r=Object(ve.a)(o,2),c=r[0],s=r[1],d=function(){s(!c)};return Object(Ee.jsxs)(Ee.Fragment,{children:[Object(Ee.jsx)(it,{}),Object(Ee.jsx)(Re,{isOpen:t,toggle:a,contactToggle:d}),Object(Ee.jsx)(Ue,{toggle:a,contactToggle:d}),Object(Ee.jsx)(ft,{contactOpen:c,contactToggle:d}),Object(Ee.jsx)(ln,{}),Object(Ee.jsx)(vn,Object(we.a)({},Sn)),Object(Ee.jsx)(Rn,{}),Object(Ee.jsx)(vn,Object(we.a)({},Tn)),Object(Ee.jsx)(Jn,{})]})},ut=Se.a.div(at||(at=Object(ke.a)(["\n  color: #fff;\n  background: ",";\n\n  @media screen and (max-width: 768px) {\n    padding: 100px 0;\n  }\n"])),(function(e){return e.lightBg?"#022125":"#010606"})),Ot=Se.a.div(ot||(ot=Object(ke.a)(["\n  display: grid;\n  z-index: 1;\n  height: 1200px;\n  width: 100%;\n  max-width: 1100px;\n  margin-right: auto;\n  margin-left: auto;\n  padding: 0 24px;\n  justify-content: center;\n"]))),yt=Se.a.div(rt||(rt=Object(ke.a)(["\n  display: grid;\n  grid-auto-columns: minmax(auto, 1fr);\n  align-items: center;\n  grid-template-areas: ",";\n\n  @media screen and (max-width: 768px) {\n    grid-template-areas: ",";\n  }\n"])),(function(e){return e.imgStart?"'col2 col1'":"'col1 col2'"}),(function(e){return e.imgStart?"'col1' 'col2'":"'col1 col1' 'col2 col2'"})),wt=Se.a.div(ct||(ct=Object(ke.a)(["\n  margin-bottom: 15px;\n  padding: 0 15px;\n  grid-area: col1;\n"]))),vt=Se.a.div(st||(st=Object(ke.a)(["\n  margin-bottom: 15px;\n  padding: 0 15px;\n  grid-area: col2;\n"]))),kt=Se.a.div(dt||(dt=Object(ke.a)(["\n  max-width: 540px;\n  padding-top: 0;\n  padding-bottom: 60px;\n"]))),St=Se.a.p(lt||(lt=Object(ke.a)(["\n  color: #11dacd;\n  font-size: 16px;\n  line-height: 16px;\n  font-weight: 700;\n  letter-spacing: 1.4px;\n  text-transform: uppercase;\n  margin-bottom: 16px;\n"]))),Tt=Se.a.h1(pt||(pt=Object(ke.a)(["\n  margin-bottom: 24px;\n  font-size: 48px;\n  line-height: 1.1;\n  font-weight: 600;\n  color: ",";\n\n  @media screen and (max-width: 480px) {\n    font-size: 32px;\n  }\n"])),(function(e){return e.lightText?"#f7f8fa":"#010606"})),Dt=Se.a.p(xt||(xt=Object(ke.a)(["\n  max-width: 440px;\n  margin-bottom: 35px;\n  font-size: 18px;\n  line-height: 24px;\n  color: ",";\n"])),(function(e){return e.darkText?"#010606":"#fff"})),zt=Se.a.div(jt||(jt=Object(ke.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  padding: 5px;\n"]))),At=Se.a.div(bt||(bt=Object(ke.a)(["\n  max-width: 555px;\n  height: 100%;\n"]))),Bt=Se.a.img(ht||(ht=Object(ke.a)(["\n  width: 100%;\n  margin: 0 0 10px 0;\n  padding-right: 0;\n"]))),Ct=function(e){var n=e.lightBg,t=e.id,i=e.imgStart,a=e.topLine,o=e.lightText,r=e.headline,c=e.darkText,s=e.description,d=e.imgSrc,l=e.alt,p=e.primary,x=e.dark,j=e.dark2,b=e.liveSite,h=e.repoSite;return Object(Ee.jsx)(Ee.Fragment,{children:Object(Ee.jsx)(ut,{lightBg:n,id:t,children:Object(Ee.jsx)(Ot,{children:Object(Ee.jsxs)(yt,{imgStart:i,children:[Object(Ee.jsx)(wt,{children:Object(Ee.jsxs)(kt,{children:[Object(Ee.jsx)(St,{children:a}),Object(Ee.jsx)(Tt,{lightText:o,children:r}),Object(Ee.jsx)(Dt,{darkText:c,children:s}),Object(Ee.jsxs)(zt,{children:[Object(Ee.jsx)(Ze,{href:b,target:"_blank",primary:p?1:0,dark:x?1:0,dark2:j?1:0,children:"Demo"}),Object(Ee.jsx)(Ze,{href:h,target:"_blank",primary:p?1:0,dark:x?1:0,dark2:j?1:0,children:"Repo"})]})]})}),Object(Ee.jsx)(vt,{children:Object(Ee.jsx)(At,{children:Object(Ee.jsx)(Bt,{src:d,alt:l})})})]})})})})},Ft={id:"moovie",lightBg:!1,lightText:!0,lightTextDesc:!1,topLine:"A MERN+G Stack Movie Application",headline:"Moovie",description:"Working with a team of full-stack developers at DU's Full Stack Program, for a final project we developed a movie review platform where users can save lists of movies to their favorites and enter comments about each movie. For this project, I took the lead on front-end development and implementing JSON web tokens as user authentication",buttonLabel:"Projects",imgStart:!0,imgSrc:"https://raw.githubusercontent.com/bill-hennessey/Proj3/main/assets/images/Moovie-screenshot.png",alt:"A view of Pat Brown's moovie application homepage",dark:!0,primary:!0,darkText:!1,repoSite:"https://github.com/bill-hennessey/Proj3",liveSite:"https://blooming-anchorage-52775.herokuapp.com/"},Pt={id:"nfty",lightBg:!1,lightText:!0,lightTextDesc:!1,topLine:"Welcome to the world of NFTs",headline:"NFTy",description:"Working with a team of full-stack developers at DU's Full Stack Program, our second project is an NFT eCommerce platform developed with mySQL, Handlebars.js, Express.js, and Node.js. On this project, I was responsible for creating the RESTful API backend. Users can view and add NFTs to cart, and checkout.",buttonLabel:"Projects",imgStart:!1,imgSrc:"https://github.com/HavoxPrime/NFTy/raw/main/public/images/Mainpg.png",alt:"A view of Pat Brown's NFTy application homepage",dark:!0,primary:!0,darkText:!1,repoSite:"https://github.com/patrickbrown-io/NFTy",liveSite:"https://project2-nfty.herokuapp.com/"},Mt={id:"redux",lightBg:!1,lightText:!0,lightTextDesc:!1,topLine:"An excersize in Redux State Management",headline:"Redux eCommerce Refactor",description:"We have left the React ecosystem! This excersize is a Redux State refactor for an eCommerce website previously using the Context API. I have refactored the previously existing code base to use Redux to manage global state and dispatch actions.",buttonLabel:"Projects",imgStart:!0,imgSrc:"https://github.com/patrickbrown-io/redux-store-refactor/raw/main/assets/screenshot.jpg",alt:"A view of Pat Brown's NFTy application homepage",dark:!0,primary:!0,darkText:!1,repoSite:"https://github.com/patrickbrown-io/redux-store-refactor",liveSite:"https://damp-everglades-25933.herokuapp.com/"},Lt={id:"vibe",lightBg:!1,lightText:!0,lightTextDesc:!1,topLine:"Weather-based Playlist Generator",headline:"the VibeForecast",description:"This was the first project a few weeks into DU's Full Stack Developer program and holds a very special place in my heart. Developed with jQuery, this application takes OpenWeather API data in and returns music suggestions from YouTube's API of creative commons music. I was incredibly proud of myself and my team of beginning web engineers for getting this together with less than a month of coding under out belts. Just look how far we've all come!",imgStart:!1,imgSrc:"https://images.unsplash.com/photo-1555580399-49e780f216b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3774&q=80",alt:"A Redux refactored e-commerce site",dark:!0,primary:!0,darkText:!1,repoSite:"https://github.com/AdamKuemmel/theVibeForecast",liveSite:"https://adamkuemmel.github.io/theVibeForecast/"},Et={id:"budget",lightBg:!1,lightText:!0,lightTextDesc:!1,topLine:"Take your application offline",headline:"PWA Budget Tracker",description:"Giving users a fast and easy way to track their money is important, but allowing them to access that information anytime. Having offline functionality is paramount to a complete user experience and in this progressive web app budget, you can take your budgeting app on the go with a simple download",imgStart:!0,imgSrc:"https://github.com/patrickbrown-io/PWA-Budget-Tracker/raw/main/assets/screenshot.jpg",alt:"A view of the Budget Progressive Web Application",dark:!0,primary:!0,darkText:!1,repoSite:"https://github.com/patrickbrown-io/PWA-Budget-Tracker",liveSite:"https://infinite-citadel-61093.herokuapp.com/"},Rt={id:"budget",lightBg:!1,lightText:!0,lightTextDesc:!1,topLine:"A User-authenticated Book Search Application",headline:"Save Your Books!",description:"Using Apollo Server and the MERNG Stack (MongoDB, Express, React, Node, and GraphQL), this is a Google Books API search engine. Authentication middleware works in the context of a GraphQL API. Includes schema settings for resolvers and typeDefs. Create an account and get to reading your backlog!",imgStart:!1,imgSrc:"https://github.com/patrickbrown-io/Book-Search-Engine/raw/main/assets/screenshot.jpg",alt:"A view of a Book Search Engine",dark:!0,primary:!0,darkText:!1,repoSite:"https://github.com/patrickbrown-io/Book-Search-Engine",liveSite:"https://whispering-river-55779.herokuapp.com/"},Nt=Object(Se.a)(Oe.b)(gt||(gt=Object(ke.a)(["\n  color: #fff;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0rem 1rem;\n  height: 100%;\n  cursor: pointer;\n\n  &.active {\n    border-bottom: 3px solid #11dacd;\n  }\n"]))),Gt=function(e){var n=e.toggle,t=Object(ge.useState)(!1),i=Object(ve.a)(t,2),a=i[0],o=i[1],r=function(){window.scrollY>=80?o(!0):o(!1)};Object(ge.useEffect)((function(){window.addEventListener("scroll",r)}),[]);return Object(Ee.jsx)(Ee.Fragment,{children:Object(Ee.jsx)(Ne,{scrollNav:a,children:Object(Ee.jsxs)(Ge,{children:[Object(Ee.jsx)(We,{to:"/",smooth:!0,duration:500,spy:!0,exact:!0,offset:0,onClick:function(){De.animateScroll.scrollToTop()},children:"pbdesigns"}),Object(Ee.jsx)(Ie,{onClick:n,children:Object(Ee.jsx)(Te.a,{})}),Object(Ee.jsxs)(He,{children:[Object(Ee.jsx)(Qe,{children:Object(Ee.jsx)(Nt,{to:"/#about",smooth:!0,duration:500,spy:!0,exact:!0,offset:-80,children:"About"})}),Object(Ee.jsx)(Qe,{children:Object(Ee.jsx)(Nt,{to:"/#projects",smooth:!0,duration:500,spy:!0,exact:!0,offset:-80,children:"Projects"})}),Object(Ee.jsx)(Qe,{children:Object(Ee.jsx)(Nt,{to:"/#skills",smooth:!0,duration:500,spy:!0,exact:!0,offset:-80,children:"Tools"})}),Object(Ee.jsx)(Qe,{children:Object(Ee.jsx)(Nt,{to:"/#contact",smooth:!0,duration:500,spy:!0,exact:!0,offset:30,children:"Connect"})})]})]})})})},Wt=function(){var e=Object(ge.useState)(!1),n=Object(ve.a)(e,2),t=n[0],i=n[1],a=function(){i(!t)};return Object(Ee.jsxs)(Ee.Fragment,{children:[Object(Ee.jsx)(it,{}),Object(Ee.jsx)(Re,{isOpen:t,toggle:a}),Object(Ee.jsx)(Gt,{toggle:a}),Object(Ee.jsx)(Ct,Object(we.a)({},Ft)),Object(Ee.jsx)(Jn,{})]})},It=function(){var e=Object(ge.useState)(!1),n=Object(ve.a)(e,2),t=n[0],i=n[1],a=function(){i(!t)};return Object(Ee.jsxs)(Ee.Fragment,{children:[Object(Ee.jsx)(it,{}),Object(Ee.jsx)(Re,{isOpen:t,toggle:a}),Object(Ee.jsx)(Gt,{toggle:a}),Object(Ee.jsx)(Ct,Object(we.a)({},Pt)),Object(Ee.jsx)(Jn,{})]})},Ht=function(){var e=Object(ge.useState)(!1),n=Object(ve.a)(e,2),t=n[0],i=n[1],a=function(){i(!t)};return Object(Ee.jsxs)(Ee.Fragment,{children:[Object(Ee.jsx)(it,{}),Object(Ee.jsx)(Re,{isOpen:t,toggle:a}),Object(Ee.jsx)(Gt,{toggle:a}),Object(Ee.jsx)(Ct,Object(we.a)({},Mt)),Object(Ee.jsx)(Jn,{})]})},Qt=function(){var e=Object(ge.useState)(!1),n=Object(ve.a)(e,2),t=n[0],i=n[1],a=function(){i(!t)};return Object(Ee.jsxs)(Ee.Fragment,{children:[Object(Ee.jsx)(it,{}),Object(Ee.jsx)(Re,{isOpen:t,toggle:a}),Object(Ee.jsx)(Gt,{toggle:a}),Object(Ee.jsx)(Ct,Object(we.a)({},Lt)),Object(Ee.jsx)(Jn,{})]})},Yt=function(){var e=Object(ge.useState)(!1),n=Object(ve.a)(e,2),t=n[0],i=n[1],a=function(){i(!t)};return Object(Ee.jsxs)(Ee.Fragment,{children:[Object(Ee.jsx)(it,{}),Object(Ee.jsx)(Re,{isOpen:t,toggle:a}),Object(Ee.jsx)(Gt,{toggle:a}),Object(Ee.jsx)(Ct,Object(we.a)({},Et)),Object(Ee.jsx)(Jn,{})]})},_t=function(){var e=Object(ge.useState)(!1),n=Object(ve.a)(e,2),t=n[0],i=n[1],a=function(){i(!t)};return Object(Ee.jsxs)(Ee.Fragment,{children:[Object(Ee.jsx)(it,{}),Object(Ee.jsx)(Re,{isOpen:t,toggle:a}),Object(Ee.jsx)(Gt,{toggle:a}),Object(Ee.jsx)(Ct,Object(we.a)({},Rt)),Object(Ee.jsx)(Jn,{})]})};var Jt=function(){return Object(Ee.jsx)(Oe.a,{children:Object(Ee.jsxs)(ye.c,{children:[Object(Ee.jsx)(ye.a,{path:"/",component:mt,exact:!0}),Object(Ee.jsx)(ye.a,{path:"/moovie",component:Wt,exact:!0}),Object(Ee.jsx)(ye.a,{path:"/nfty",component:It,exact:!0}),Object(Ee.jsx)(ye.a,{path:"/redux",component:Ht,exact:!0}),Object(Ee.jsx)(ye.a,{path:"/vibe",component:Qt,exact:!0}),Object(Ee.jsx)(ye.a,{path:"/budget",component:Yt,exact:!0}),Object(Ee.jsx)(ye.a,{path:"/books",component:_t,exact:!0}),Object(Ee.jsx)(ye.a,{path:"*",component:mt})]})})};ue.a.render(Object(Ee.jsx)(fe.a.StrictMode,{children:Object(Ee.jsx)(Jt,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.8650a50f.chunk.js.map