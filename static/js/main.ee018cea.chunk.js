(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,n,t){},123:function(e,n,t){"use strict";t.r(n);t(77);var r=t(0),a=t.n(r),i=t(30),o=t.n(i),c=t(3),u=t(4),l=t(6),m=t(5),s=t(7),d=t(1),f=t(2),p=(t(116),function(e){window.scrollTo({top:e.current.offsetTop+1,left:0,behavior:"smooth"})});function b(){var e=Object(d.a)(["\n\n"]);return b=function(){return e},e}function g(){var e=Object(d.a)(["\n    z-index: 50;\n"]);return g=function(){return e},e}var h=f.b.div(g()),v=f.b.a(b()),j=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement(h,null,a.a.createElement("nav",{role:"navigation"},a.a.createElement("div",{id:"menuToggle"},a.a.createElement("input",{type:"checkbox"}),a.a.createElement("span",null),a.a.createElement("span",null),a.a.createElement("span",null),a.a.createElement("ul",{id:"menu"},a.a.createElement(v,{onClick:function(){return p(e.props.getRef.homeComp)}},a.a.createElement("li",null,"Home")),a.a.createElement(v,{onClick:function(){return p(e.props.getRef.specComp)}},a.a.createElement("li",null,"Speciality")),a.a.createElement(v,{onClick:function(){return p(e.props.getRef.menuComp)}},a.a.createElement("li",null,"Menu")),a.a.createElement(v,null,a.a.createElement("li",null,"Career")),a.a.createElement(v,null,a.a.createElement("li",null,"Location"))))))}}]),n}(r.Component);function O(){var e=Object(d.a)(["\n    color: white;\n"]);return O=function(){return e},e}function x(){var e=Object(d.a)(["\n    width: 4em;\n"]);return x=function(){return e},e}function w(){var e=Object(d.a)(["\n    margin: 1.5em;\n    text-decoration: none;\n    text-align: center;\n\n    &:hover {\n        opacity: 0.7;\n    }\n"]);return w=function(){return e},e}function E(){var e=Object(d.a)(["\n    display: flex;\n    flex-direction: row;\n    grid-area: Nav;\n    z-index: 1;\n    height: 10em;\n    justify-content: center;\n    align-items: center;\n    font: normal 600 1em monospace;\n    z-index: 10;\n"]);return E=function(){return e},e}var k=f.b.div(E()),y=f.b.a(w()),C=f.b.img(x()),R=f.b.p(O()),T=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement(k,null,a.a.createElement(y,{onClick:function(){return p(e.props.getRef.specComp)}},a.a.createElement(C,{src:"./Images/specialities.svg",alt:"specialities"}),a.a.createElement(R,null,"Speciality")),a.a.createElement(y,{onClick:function(){return p(e.props.getRef.menuComp)}},a.a.createElement(C,{src:"./Images/menu.svg",alt:"menu"}),a.a.createElement(R,null,"Menu")),a.a.createElement(y,{onClick:function(){return p(e.props.getRef.resComp)}},a.a.createElement(C,{src:"./Images/career.svg",alt:"reservation"}),a.a.createElement(R,null,"Reservation")),a.a.createElement(y,{onClick:function(){return p(e.props.getRef.locComp)}},a.a.createElement(C,{src:"./Images/location.svg",alt:"location"}),a.a.createElement(R,null,"Location")))}}]),n}(r.Component);function z(){var e=Object(d.a)(["\n  text-decoration: none;\n  grid-area: Button;\n  margin: 0.5em;\n  height: 2.7em;\n  width: 7em;\n  border: 0;\n  border-radius: 2px;\n  background-color: #fff;\n  font: normal 600 1.2em sans-serif;\n  color: #480400;\n  text-align: center;\n  padding: 0.7em;\n  z-index: 10;\n\n  &:hover {\n    background-color: #ffffffba;\n  }\n  @media (max-width: 390px) {\n    font: normal 600 2em sans-serif;\n    width: 8em;\n  }\n"]);return z=function(){return e},e}function I(){var e=Object(d.a)(["\n  font: italic 400 1.5em Merriweather;\n  grid-area: LowerTitle;\n  margin: 0;\n  z-index: 10;\n\n  @media (max-width: 390px) {\n    width: 15em;\n    text-align: center;\n    line-height: 1.5em;\n    margin: -30px 0;\n  }\n"]);return I=function(){return e},e}function M(){var e=Object(d.a)(["\n  font: italic 600 2em Merriweather;\n  grid-area: MiddleTitle;\n  border-bottom: 2px solid white;\n  z-index: 10;\n"]);return M=function(){return e},e}function S(){var e=Object(d.a)(['\n  font-family: "Oleo Script";\n  font-size: 7em;\n  margin: 0;\n  grid-area: MainTitle;\n  -webkit-font-smoothing: antialiased !important;\n\n  @media (max-width: 390px) {\n    font-size: 5em;\n  }\n']);return S=function(){return e},e}function P(){var e=Object(d.a)(["\n  grid-area: Logo;\n  height: 6.25em;\n  margin-top: 1.875em;\n"]);return P=function(){return e},e}function B(){var e=Object(d.a)(["\n  background-image: url('./Images/layer2.png');\n  background-size: cover;\n  background-position: bottom;\n  height: 100%;\n  position: absolute;\n  z-index: 5;\n  width: 100%;\n  bottom: 0;\n"]);return B=function(){return e},e}function D(){var e=Object(d.a)(['\n  scroll-snap-align: center;\n  background-image: url(\'./Images/bg-img.jpg\');\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-attachment: fixed;\n  background-size: cover;\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 9.375em auto auto auto auto auto;\n  grid-template-columns: auto;\n  grid-template-areas:\n    "Logo"\n    "MainTitle"\n    "MiddleTitle"\n    "LowerTitle"\n    "Button"\n    "Nav";\n  justify-items: center;\n  color: white;\n\n  @media (max-width: 390px) {\n    grid-template-rows: none;\n    align-content: space-evenly;\n  }\n']);return D=function(){return e},e}var F=f.b.div(D()),L=f.b.div(B()),W=f.b.img(P()),H=f.b.h1(S()),A=f.b.h2(M()),J=f.b.h3(I()),N=f.b.a(z()),q=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement(F,null,a.a.createElement(W,{src:"./Images/dante.svg"}),a.a.createElement(H,null,"Dante's Taco Bar"),a.a.createElement(A,null,"the best tacos in Bradford"),a.a.createElement(J,null,"Enjoy the most delicious flavors of Mexico!"),a.a.createElement(N,{target:"_blank",href:"https://www.ubereats.com/restaurant/signup/dante-taco-bar/"},"Order"),a.a.createElement(T,{getRef:this.props.getRef}),a.a.createElement(L,null))}}]),n}(r.Component);function G(){var e=Object(d.a)(["\n  grid-area: Pic;\n  height: 70%;\n  align-self: center;\n  border: 2px solid white;\n  border-radius: 50%;\n\n  @media (max-width: 400px) {\n    display: none;\n  }\n"]);return G=function(){return e},e}function $(){var e=Object(d.a)(["\n  grid-area: Text;\n  align-self: flex-start;\n  line-height: 2em;\n  text-align: center;\n  font: normal 400 1.2em Merriweather;\n  margin-top: 0;\n  padding: 0 1em;\n  padding-top: 1.3em;\n\n  @media (max-width: 400px) {\n    font-size: 1.6em;\n    padding-top: 0;\n    width: 80%;\n    align-self: center;\n    margin: 0;\n  }\n"]);return $=function(){return e},e}function _(){var e=Object(d.a)(["\n  grid-area: Header;\n  font: italic 600 1.5em Merriweather;\n  border-bottom: 2px solid white;\n  text-align: center;\n  margin: 0;\n  padding-bottom: 1em;\n\n  @media (max-width: 400px) {\n    width: 70%;\n  }\n"]);return _=function(){return e},e}function K(){var e=Object(d.a)(["\n  grid-area: Title;\n  font: normal 600 2.3em Merriweather;\n"]);return K=function(){return e},e}function Q(){var e=Object(d.a)(["\n  grid-area: Icon2;\n  height: 4.55em;\n"]);return Q=function(){return e},e}function U(){var e=Object(d.a)(["\n  grid-area: Icon;\n  height: 5em;\n  align-self: center;\n  margin-right: 1.3em;\n"]);return U=function(){return e},e}function V(){var e=Object(d.a)(['\n  background-color: #894040bf;\n  border-radius: 3.5px;\n  height: 85%;\n  width: 80%;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 0.5fr 0.8fr 0.6fr 2.2fr 0.8fr 1fr;\n  grid-template-areas: "Title Title" "Icon Pic" "Header Pic" "Text Pic" "Icon2 Pic" "Icon2 Pic";\n  justify-items: center;\n  z-index: 10;\n\n  @media (max-width: 400px) {\n    width: 95%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n  }\n']);return V=function(){return e},e}function X(){var e=Object(d.a)(["\n  background-image: url('./Images/specBG4.jpg');\n  background-repeat: repeat;\n  background-position: center center;\n  background-size: cover;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: #ececec;\n"]);return X=function(){return e},e}var Y=f.b.div(X()),Z=f.b.div(V()),ee=f.b.img(U()),ne=f.b.img(Q()),te=f.b.h1(K()),re=f.b.h2(_()),ae=f.b.p($()),ie=f.b.img(G()),oe=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement(Y,{ref:this.props.innerRef},a.a.createElement(Z,null,a.a.createElement(te,null,"This Month's Special"),a.a.createElement(ee,{src:"./Images/avocado.svg"}),a.a.createElement(re,null,"Open-faced Avocado & Sweet Potato Tacos"),a.a.createElement(ae,null,"Fresh chunks of avocado and caramelized sweet potatoes on a whole wheat tortilla, featuring crisp red onions, with just a hint of tangy feta cheese. We've balanced the sweet and salty softness with our fresh and crunchy red onion for a whole new taste experience!"),a.a.createElement(ne,{src:"./Images/onion.svg"}),a.a.createElement(ie,{src:"./Images/spec.jpg"})))}}]),n}(r.Component),ce=a.a.forwardRef(function(e,n){return a.a.createElement(oe,Object.assign({innerRef:n},e))}),ue=t(74);function le(){var e=Object(d.a)(["\n  margin: 0;\n  padding 0.5em;\n\n"]);return le=function(){return e},e}function me(){var e=Object(d.a)(["\n  margin: 0;\n  padding 0.5em;\n\n"]);return me=function(){return e},e}function se(){var e=Object(d.a)(["\n  font: italic 600 1.15em Merriweather;\n  display: flex;\n  flex-direction: row;\n  width: auto;\n  justify-content: space-between;\n  border-bottom: 3.5px dotted white;\n\n  @media (max-width: 390px) {\n    border-bottom: 0;\n  }\n"]);return se=function(){return e},e}function de(){var e=Object(d.a)(["\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  font: normal 600 1.8em 'Oleo Script';\n\n  @media (max-width: 390px) {\n    padding: 0;\n  }\n"]);return de=function(){return e},e}function fe(){var e=Object(d.a)(["\n  background-color: #4f0808c7;\n  border-radius: 4px;\n  padding: 0px 10px 10px;\n"]);return fe=function(){return e},e}function pe(){var e=Object(d.a)(["\n  width: 85%;\n  background-color: #131313;\n  border-radius: 3px;\n  color: #f6f6f6;\n  padding: 2em;\n  margin: 1em;\n\n  @media (max-width: 390px) {\n    margin: 0.2em;\n    padding-top: 1.5em;\n  }\n\n  @media (min-width: 1400px) {\n    padding: 3em;\n  }\n"]);return pe=function(){return e},e}function be(){var e=Object(d.a)(["\n  display: grid;\n  justify-items: center;\n  grid-template-columns: auto auto;\n  grid-template-rows: auto auto;\n\n  @media (max-width: 390px) {\n    grid-template-columns: none;\n  }\n"]);return be=function(){return e},e}function ge(){var e=Object(d.a)(["\n  text-align: center;\n  margin: 10px;\n  color: #4f0808\n  font: normal 600 2em Merriweather;\n"]);return ge=function(){return e},e}function he(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  background-color: white;\n"]);return he=function(){return e},e}var ve=f.b.div(he()),je=f.b.h1(ge()),Oe=f.b.div(be()),xe=f.b.div(pe()),we=f.b.div(fe()),Ee=f.b.p(de()),ke=f.b.div(se()),ye=f.b.p(me()),Ce=f.b.p(le()),Re=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=new Map(Object.entries(ue)),n=[];return e.forEach(function(e,t){var r,i=[];switch(e.forEach(function(e){var n=a.a.createElement(ke,{key:e.name},a.a.createElement(ye,null,e.name),a.a.createElement(Ce,null,e.price));i.push(n)}),t){case"tacos":r={background:"#6DB3F2 url('./Images/tacos2.jpg')",backgroundPosition:"center",backgroundSize:"cover"};break;case"sides":r={background:"#6DB3F2 url('./Images/sides2.jpg')",backgroundPosition:"center",backgroundSize:"cover"};break;case"drinks":r={background:"#6DB3F2 url('./Images/drinks2.jpg')",backgroundPosition:"center",backgroundSize:"cover"};break;case"desserts":r={background:"#6DB3F2 url('./Images/desserts2.jpg')",backgroundPosition:"center",backgroundSize:"cover"}}var o=a.a.createElement(xe,{style:r,key:t},a.a.createElement(we,null,a.a.createElement(Ee,null,t),i));n.push(o)}),a.a.createElement(ve,{ref:this.props.innerRef},a.a.createElement(je,null,"Menu"),a.a.createElement(Oe,null,n))}}]),n}(r.Component),Te=a.a.forwardRef(function(e,n){return a.a.createElement(Re,Object.assign({innerRef:n},e))}),ze=t(10);function Ie(){var e=Object(d.a)(['\n    border: none;\n    background-color: gray;\n    border-radius: 3px;\n    padding: 5px;\n    font: normal bold 1em Arial;\n    color: white;\n\n    &[type="submit"] {\n        background-color: #515151;\n        width: 10.5em;\n        margin-top: 10%;\n        height: 2.3em;\n\n        &:hover {\n            background-color: gray;\n          }\n      }\n']);return Ie=function(){return e},e}function Me(){var e=Object(d.a)(["\n    width: 2.6em;\n    margin-right: 1em;\n"]);return Me=function(){return e},e}function Se(){var e=Object(d.a)(["\n"]);return Se=function(){return e},e}function Pe(){var e=Object(d.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    justify-content: space-evenly;\n    height: 50%;\n"]);return Pe=function(){return e},e}function Be(){var e=Object(d.a)(["\n    text-align: center;\n    font: italic 600 1.2em Merriweather;\n    color: #9d1e00;\n    margin-bottom: 2.2em;\n"]);return Be=function(){return e},e}function De(){var e=Object(d.a)(["\n    text-align: center;\n    margin: 0.75em;\n    font: normal 600 2em Merriweather;\n"]);return De=function(){return e},e}function Fe(){var e=Object(d.a)(["\n    display: flex;\n    flex-direction: column;\n    height: 90%;\n    width: 50%;\n    background-color: #ffffffcf;\n    border-radius: 5px;\n    padding: 0.5em 7.5em;\n"]);return Fe=function(){return e},e}function Le(){var e=Object(d.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 100vh;\n    background-image: url('./Images/reservation.jpg');\n    background-repeat: repeat;\n    background-position: center center;\n    background-size: cover;\n    color: #000;\n"]);return Le=function(){return e},e}var We=f.b.div(Le()),He=f.b.div(Fe()),Ae=f.b.h1(De()),Je=f.b.h2(Be()),Ne=f.b.form(Pe()),qe=f.b.label(Se()),Ge=f.b.img(Me()),$e=f.b.input(Ie()),_e=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(l.a)(this,Object(m.a)(n).call(this,e))).state={date:"",time:"",persons:""},t.handleDate=t.handleDate.bind(Object(ze.a)(Object(ze.a)(t))),t.handleTime=t.handleTime.bind(Object(ze.a)(Object(ze.a)(t))),t.handlePersons=t.handlePersons.bind(Object(ze.a)(Object(ze.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(ze.a)(Object(ze.a)(t))),t}return Object(s.a)(n,e),Object(u.a)(n,[{key:"handleDate",value:function(e){this.setState({date:e.target.value})}},{key:"handleTime",value:function(e){this.setState({time:e.target.value})}},{key:"handlePersons",value:function(e){this.setState({persons:e.target.value})}},{key:"handleSubmit",value:function(e){alert("Tables are reserved for ".concat(this.state.persons," people on ").concat(this.state.date," ").concat(this.state.time)),e.preventDefault()}},{key:"render",value:function(){var e={date:{width:"10.5em"},time:{width:"8em"},persons:{width:"4em"}};return a.a.createElement(We,{ref:this.props.innerRef},a.a.createElement(He,null,a.a.createElement(Ae,null,"Reservation"),a.a.createElement(Je,null,"We look forward to seeing you either for the first time or back to enjoy our great food and amazing cocktails!"),a.a.createElement(Ne,{onSubmit:this.handleSubmit},a.a.createElement(qe,null,a.a.createElement(Ge,{src:"./Images/calendar.svg"}),a.a.createElement($e,{style:e.date,type:"date",name:"date",value:this.state.date,onChange:this.handleDate})),a.a.createElement(qe,null,a.a.createElement(Ge,{src:"./Images/clock.svg"}),a.a.createElement($e,{style:e.time,type:"time",value:this.state.time,onChange:this.handleTime})),a.a.createElement(qe,null,a.a.createElement(Ge,{src:"./Images/group.svg"}),a.a.createElement($e,{style:e.persons,type:"number",name:"persons",min:"1",max:"20",value:this.state.persons,onChange:this.handlePersons})),a.a.createElement($e,{style:e.submit,type:"submit",value:"Submit"}))))}}]),n}(r.Component),Ke=a.a.forwardRef(function(e,n){return a.a.createElement(_e,Object.assign({innerRef:n},e))});function Qe(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  background-color: white;\n"]);return Qe=function(){return e},e}var Ue=f.b.div(Qe()),Ve=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement(Ue,{ref:this.props.innerRef})}}]),n}(r.Component),Xe=a.a.forwardRef(function(e,n){return a.a.createElement(Ve,Object.assign({innerRef:n},e))});function Ye(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 16px;\n\n  @media (max-width: 390px) {\n    font-size: 10px;\n  }\n"]);return Ye=function(){return e},e}function Ze(){var e=Object(d.a)(["\n@import url('https://fonts.googleapis.com/css?family=Merriweather|Oleo+Script');\n"]);return Ze=function(){return e},e}var en=Object(f.a)(Ze()),nn=f.b.div(Ye()),tn=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(l.a)(this,Object(m.a)(n).call(this,e))).state={homeComp:a.a.createRef(),menuComp:a.a.createRef(),specComp:a.a.createRef(),resComp:a.a.createRef(),locComp:a.a.createRef()},t}return Object(s.a)(n,e),Object(u.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return a.a.createElement(nn,null,a.a.createElement(en,null),a.a.createElement(j,{getRef:this.state}),a.a.createElement(q,{ref:this.state.homeComp,getRef:this.state}),a.a.createElement(ce,{ref:this.state.specComp}),a.a.createElement(Te,{ref:this.state.menuComp}),a.a.createElement(Ke,{ref:this.state.resComp}),a.a.createElement(Xe,{ref:this.state.locComp}))}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(tn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},74:function(e){e.exports={tacos:[{name:"Beef Taco",price:"\xa3 7.50"},{name:"Chicken Taco",price:"\xa3 7.00"},{name:"Fish Taco",price:"\xa3 8.50"}],sides:[{name:"Salsa Roja",price:"\xa3 3.00"},{name:"Rice & Beans",price:"\xa3 4.00"},{name:"Tortilla Chips",price:"\xa3 3.50"}],desserts:[{name:"Churros",price:"\xa3 4.50"},{name:"Sopaipilla",price:"\xa3 4.00"},{name:"Pastelitos De Boda",price:"\xa3 5.00"}],drinks:[{name:"Mexican Coke 12 oz",price:"\xa3 3.00"},{name:"Tequila 1.50 oz",price:"\xa3 4.00"},{name:"Corona 12 oz",price:"\xa3 3.50"}]}},76:function(e,n,t){e.exports=t(123)}},[[76,2,1]]]);
//# sourceMappingURL=main.ee018cea.chunk.js.map