(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{110:function(e,t,r){e.exports={reviewContent:"Reviews_reviewContent__3PXKW",reviewsList:"Reviews_reviewsList__2JeEO"}},112:function(e,t,r){"use strict";r.r(t);var n=r(1),s=r(16),i=r(17),a=r(19),c=r(18),o=r(0),u=r(20),l=r(27),h=r(14),v=(r(90),r(110)),w=r.n(v),j=function(e){Object(a.a)(r,e);var t=Object(c.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={reviews:[],loader:!1},e}return Object(i.a)(r,[{key:"componentDidMount",value:function(){var e=this;this.setState({loader:!0}),Object(l.c)(this.props.match.params.movieId).then((function(t){var r=t.data;if(0===r.results.length)return h.c.warn("No reviews yet");e.setState({reviews:r.results})})).catch((function(e){return h.c.error(e)})).finally(this.setState({loader:!1}))}},{key:"render",value:function(){var e=this.state,t=e.reviews,r=e.loader;return Object(n.jsxs)(n.Fragment,{children:[r&&Object(n.jsx)(u.a,{}),t.length>0&&Object(n.jsx)("ul",{className:w.a.reviewsList,children:t.map((function(e){return Object(n.jsxs)("li",{children:[Object(n.jsxs)("p",{children:["Author: ",e.author]}),Object(n.jsx)("p",{className:w.a.reviewContent,children:e.content})]},e.id)}))})]})}}]),r}(o.Component);t.default=j},90:function(e,t,r){}}]);
//# sourceMappingURL=reviews-list.cbb4e91a.chunk.js.map