(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[1],{10:function(t,e,n){"use strict";e.a={home:"/",movies:"/movies",movieDetails:"/movies/:movieId"}},12:function(t,e,n){t.exports={Nav:"NavBar_Nav__2tII7",NavList:"NavBar_NavList__3rwLO",NavLink:"NavBar_NavLink__1n63L",NavLinkActive:"NavBar_NavLinkActive__3uKqz"}},15:function(t,e,n){t.exports={title:"MoviesList_title__3anpT",movieList:"MoviesList_movieList__3qOPj",movieItem:"MoviesList_movieItem__2yGkU",movieCard:"MoviesList_movieCard__MLFHP"}},20:function(t,e,n){"use strict";var a=n(1),c=(n(0),n(26)),i=n.n(c);n(69);i.a.propTypes={},e.a=function(t){return Object(a.jsx)(i.a,{style:{textAlign:"center"},type:"TailSpin",color:"#3f51b5",height:300,width:300})}},27:function(t,e,n){"use strict";n.d(e,"f",(function(){return r})),n.d(e,"d",(function(){return s})),n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return l})),n.d(e,"c",(function(){return v})),n.d(e,"e",(function(){return j}));var a=n(13),c=n.n(a),i="baba47ca8377e85152497efe5912a75b",o="https://api.themoviedb.org/3";function r(){return c.a.get("".concat(o,"/").concat("trending/movie/day","?api_key=").concat(i)).then((function(t){return t.data.results}))}function s(t){return c.a.get("".concat(o,"/").concat("search/movie","?api_key=").concat(i,"&query=").concat(t))}function u(t){return c.a.get("".concat(o,"/").concat("movie","/").concat(t,"?api_key=").concat(i))}function l(t){return c.a.get("".concat(o,"/").concat("movie","/").concat(t,"/credits?api_key=").concat(i))}function v(t){return c.a.get("".concat(o,"/").concat("movie","/").concat(t,"/reviews?api_key=").concat(i))}function j(){return c.a.get("".concat(o,"/").concat("movie/top_rated","?api_key=").concat(i))}},38:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(9),i=n(3),o=n(15),r=n.n(o);e.default=Object(i.f)((function(t){var e=t.movies,n=t.location,i=t.title;return Object(a.jsxs)(a.Fragment,{children:[i&&Object(a.jsx)("h1",{className:r.a.title,children:i}),Object(a.jsx)("ul",{className:r.a.movieList,children:e.map((function(t){var e=t.id,i=t.poster_path,o=t.original_title,s=t.title;return Object(a.jsx)("li",{className:r.a.movieItem,children:Object(a.jsx)(c.b,{to:{pathname:"/movies/".concat(e),state:{from:n}},children:Object(a.jsxs)("div",{className:r.a.movieCard,children:[Object(a.jsx)("img",{src:"".concat("https://www.themoviedb.org/t/p/w342").concat(i),alt:o}),Object(a.jsx)("h2",{children:s})]})})},e)}))})]})}))},44:function(t,e,n){},88:function(t,e,n){},89:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(0),i=n.n(c),o=n(21),r=n.n(o),s=(n(44),n(16)),u=n(17),l=n(19),v=n(18),j=n(3),m=n(9),h=n(10),d=n(12),b=n.n(d),f=function(){return Object(a.jsx)("nav",{className:b.a.Nav,children:Object(a.jsxs)("ul",{className:b.a.NavList,children:[Object(a.jsx)("li",{children:Object(a.jsx)(m.c,{className:b.a.NavLink,activeClassName:b.a.NavLinkActive,exact:!0,to:h.a.home,children:"Home"})}),Object(a.jsx)("li",{children:Object(a.jsx)(m.c,{className:b.a.NavLink,activeClassName:b.a.NavLinkActive,exact:!0,to:h.a.movies,children:"Search"})})]})})},O=n(14),p=n(20),x=n(38),_=n(27),g=function(t){Object(l.a)(n,t);var e=Object(v.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={movies:null,loader:!1},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.setState({loader:!0}),Object(_.f)().then((function(e){return t.setState({movies:e})})).catch((function(t){return O.c.error(t)})).finally(this.setState({loader:!1}))}},{key:"render",value:function(){var t=this.state,e=t.movies,n=t.loader;return Object(a.jsxs)(a.Fragment,{children:[n&&Object(a.jsx)(p.a,{}),e&&Object(a.jsx)(x.default,{movies:e,title:"Today trending movies"})]})}}]),n}(c.Component),N=(n(88),Object(c.lazy)((function(){return n.e(3).then(n.bind(null,113))}))),y=Object(c.lazy)((function(){return n.e(2).then(n.bind(null,114))})),L=function(t){Object(l.a)(n,t);var e=Object(v.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(f,{}),Object(a.jsx)(O.b,{transition:O.a,autoClose:2e3,hideProgressBar:!0,pauseOnFocusLoss:!1,draggable:!1,pauseOnHover:!1}),Object(a.jsx)(c.Suspense,{fallback:Object(a.jsx)(p.a,{}),children:Object(a.jsxs)(j.c,{children:[Object(a.jsx)(j.a,{path:h.a.home,exact:!0,component:g}),Object(a.jsx)(j.a,{path:h.a.movies,exact:!0,component:N}),Object(a.jsx)(j.a,{path:h.a.movieDetails,component:y})]})})]})}}]),n}(c.Component),k=function(t){t&&t instanceof Function&&n.e(7).then(n.bind(null,111)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),i(t),o(t)}))};r.a.render(Object(a.jsx)(m.a,{children:Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(L,{})})}),document.getElementById("root")),k()}},[[89,5,6]]]);
//# sourceMappingURL=main.3830f047.chunk.js.map