(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){},108:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),c=a.n(l),o=(a(42),a(13)),s=a(14),i=a(16),u=a(15),m=a(17),d=a(110),h=a(111),E=a(112),p=a(2),f=function(){return r.a.createElement("header",null,r.a.createElement(p.Navbar,{id:"main-nav",brand:"NYT React",right:!0},r.a.createElement(p.NavItem,{href:"/"},"Home"),r.a.createElement(p.NavItem,{href:"/search"},"Search"),r.a.createElement(p.NavItem,{href:"/saved"},"View Saved")))},g=a(109),v=function(){return r.a.createElement(p.Container,{className:"center-align"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(p.Row,null,r.a.createElement(p.Col,{s:12},r.a.createElement("h1",null,"NYT Article Searcher!"),r.a.createElement("h5",null,"Search the New York Times Article Database for specific topics and save articles you'd like to keep for later."))),r.a.createElement("br",null),r.a.createElement(p.Row,{className:"bottom-row"},r.a.createElement(p.Col,{s:12,l:6},r.a.createElement(p.Card,{className:"z-depth-5"},r.a.createElement(g.a,{to:"/search"},r.a.createElement(p.Icon,{center:!0,large:!0},"search"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(p.Button,{waves:"light",className:"btn-large"},"Search For Articles")))),r.a.createElement(p.Col,{s:12,l:6},r.a.createElement(p.Card,{className:"z-depth-5"},r.a.createElement(g.a,{to:"/saved"},r.a.createElement(p.Icon,{center:!0,large:!0},"save"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(p.Button,{waves:"light",className:"btn-large"},"View Saved Articles"))))))},b=a(25),C=a(10),A=a.n(C),w=a(9),N=a.n(w),y={getArticles:function(e,t,a,n){return N.a.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=".concat("112da6dc944c46e38175cc791005d94e","&q=").concat(e,"&limit=").concat(t,"&begin_date=").concat(a,"&end_date=").concat(n,"&sort=newest"))},getArticle:function(e){return N.a.get("/api/articles/"+e)},deleteArticle:function(e){return N.a.delete("/api/articles/"+e)},saveArticle:function(e){return N.a.post("/api/articles",e)}},Y={getSavedArticles:function(){return N.a.get("/api/articles")},getSavedArticle:function(e){return N.a.get("/api/articles/"+e)},deleteArticle:function(e){return N.a.delete("/api/articles/"+e)},saveArticle:function(e){return N.a.post("/api/articles",e)}},S=function(e){return r.a.createElement(O.Consumer,null,function(t){return r.a.createElement(p.Col,{s:12},r.a.createElement(p.Card,{className:"article-card"},r.a.createElement("h5",null,e.title),e.author?r.a.createElement("p",null,e.author," - ",A()(e.date).format("MM/DD/YYYY")):r.a.createElement("p",null,A()(e.date).format("MM/DD/YYYY")),r.a.createElement("br",null),r.a.createElement("p",null,e.snippet),r.a.createElement("br",null),r.a.createElement(p.Row,null,r.a.createElement(p.Col,{s:4,offset:"s1"},r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:e.url},r.a.createElement(p.Button,{className:"btn-large"},"View Article"))),r.a.createElement(p.Col,{s:4,offset:"s2"},r.a.createElement(p.Button,{onClick:t.saveArticle,"data-headline":e.title,"data-author":e.author,"data-date":e.date,"data-snippet":e.snippet,"data-url":e.url,className:"btn-large"},"Save Article")))))})},O=r.a.createContext(),I=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={query:"",limit:"",start:"",end:"",results:"",errorMsg:"Enter a search query above to find New York Times articles!"},a.searchArticles=function(){y.getArticles(a.state.query,a.state.limit,a.state.start,a.state.end).then(function(e){e.data.response.docs&&(console.log(e.data.response.docs),a.setState({results:e.data.response.docs}))}).catch(function(e){e&&a.setState({errorMsg:"Your request did not return any results! Please try again."})})},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;"start"===n||"end"===n?a.setState(Object(b.a)({},n,A()(r).format("YYYYMMDD"))):a.setState(Object(b.a)({},n,r))},a.onSubmit=function(e){e.preventDefault(),a.searchArticles()},a.saveArticle=function(e){var t=e.target.dataset,a=t.headline,n=t.author,r=t.date,l=t.snippet,c=t.url;Y.saveArticle({headline:a,author:n,date:r,snippet:l,url:c}).then(function(e){console.log(e)})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(O.Provider,{value:{state:this.state,saveArticle:this.saveArticle}},r.a.createElement(p.Container,{className:"center-align"},r.a.createElement(p.Row,null,r.a.createElement(p.Col,{s:12},r.a.createElement("h1",null,"NYT Article Search"))),r.a.createElement(p.Card,{className:"z-depth-5"},r.a.createElement(p.Row,null,r.a.createElement(p.Col,{s:12},r.a.createElement("form",null,r.a.createElement(p.Input,{onChange:this.handleInputChange,placeholder:"Enter a Search Term",s:3,label:"Search Term",name:"query"}),r.a.createElement(p.Input,{onChange:this.handleInputChange,s:3,type:"number",label:"Number of Records",defaultValue:"5",name:"limit"}),r.a.createElement(p.Input,{onChange:this.handleInputChange,type:"date",label:"Start Date",s:3,name:"start"}),r.a.createElement(p.Input,{onChange:this.handleInputChange,type:"date",label:"End Date",s:3,name:"end"}),r.a.createElement(p.Input,{onClick:this.onSubmit,className:"btn",type:"submit",s:12}))))),r.a.createElement(p.Card,{className:"bottom-row z-depth-5"},r.a.createElement(p.Row,null,r.a.createElement(p.Col,{s:12},r.a.createElement("h3",null,"Search Results ",this.state.query?"for ".concat(this.state.query):"")),""!==this.state.results?this.state.results.map(function(e,t){return r.a.createElement(S,{key:t,title:e.headline.main,author:e.byline.original,date:e.pub_date,snippet:e.snippet,url:e.web_url})}):r.a.createElement("div",null,this.state.errorMsg)))))}}]),t}(r.a.Component),j=function(e){return r.a.createElement(k.Consumer,null,function(t){return r.a.createElement(p.Col,{s:6},r.a.createElement(p.Card,null,r.a.createElement("h5",null,e.title),e.author?r.a.createElement("p",null,e.author," - ",A()(e.date).format("MM/DD/YYYY")):r.a.createElement("p",null,A()(e.date).format("MM/DD/YYYY")),r.a.createElement("br",null),r.a.createElement("p",null,e.snippet),r.a.createElement("br",null),r.a.createElement(p.Row,null,r.a.createElement(p.Col,{s:4,offset:"s1"},r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:e.url},r.a.createElement(p.Button,{className:"btn-large"},"View Article"))),r.a.createElement(p.Col,{s:4,offset:"s2"},r.a.createElement(p.Button,{onClick:t.deleteArticle,"data-id":e.id,"data-headline":e.title,"data-author":e.author,"data-date":e.date,"data-snippet":e.snippet,"data-url":e.url,className:"btn-large"},"Remove Article")))))})},k=r.a.createContext(),D=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={results:"",errorMsg:"NO SAVED ARTICLES!"},a.getSaved=function(){Y.getSavedArticles().then(function(e){console.log(e.data),a.setState({results:e.data})})},a.componentDidMount=function(){a.getSaved()},a.deleteArticle=function(e){var t=e.target.dataset.id;Y.deleteArticle(t).then(function(e){a.getSaved()})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(k.Provider,{value:{state:this.state,deleteArticle:this.deleteArticle}},r.a.createElement(p.Container,{className:"center-align"},r.a.createElement(p.Row,null,r.a.createElement(p.Col,{s:12},r.a.createElement("h1",null,"Your Saved Articles"))),r.a.createElement(p.Card,{className:"bottom-row z-depth-5"},this.state.results.length>0?this.state.results.map(function(e,t){return r.a.createElement(j,{key:t,id:e._id,title:e.headline,author:e.author,date:e.date,snippet:e.snippet,url:e.url})}):r.a.createElement("div",null,r.a.createElement("h2",null,this.state.errorMsg)))))}}]),t}(r.a.Component),R=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Article Detail Page"))},M=function(){return r.a.createElement(p.Container,{className:"center-align"},r.a.createElement(p.Row,null,r.a.createElement(p.Col,{s:12},r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44")))))},T=(a(104),r.a.createContext()),B=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(T.Provider,{value:{state:this.state}},r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement("main",null,r.a.createElement(h.a,null,r.a.createElement(E.a,{exact:!0,path:"/",component:v}),r.a.createElement(E.a,{exact:!0,path:"/search",component:I}),r.a.createElement(E.a,{exact:!0,path:"/saved",component:D}),r.a.createElement(E.a,{exact:!0,path:"/saved/:id",component:R}),r.a.createElement(E.a,{component:M}))),r.a.createElement("footer",{className:"page-footer"},r.a.createElement("div",{class:"container"}),r.a.createElement("div",{class:"footer-copyright"},r.a.createElement("div",{class:"container hide-on-med-and-down center-align"},r.a.createElement("span",null,"COPYRIGHT 2018 \xa9 BRYAN LEE | UNIVERSITY OF UTAH CODING BOOTCAMP")))))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},36:function(e,t,a){e.exports=a(108)},42:function(e,t,a){}},[[36,2,1]]]);
//# sourceMappingURL=main.a24d4b08.chunk.js.map