(this["webpackJsonprecommender-client-app"]=this["webpackJsonprecommender-client-app"]||[]).push([[0],{160:function(e,t,a){e.exports=a(320)},165:function(e,t,a){},320:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),i=a.n(s),o=(a(165),a(21)),c=a(22),l=a(24),p=a(23),d=a(25),m=(a(166),a(55)),u=a(31),h=a(324),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).elementStyle=function(){return{backgroundColor:a.props.algorithm.short===a.props.picked.short?"#add8e6":"#f4f4f4",padding:"10px",margin:"10px",cursor:"pointer"}},a.pickedAlgorithm=function(){a.props.pickedAlgorithm(a.props.algorithm)},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{title:this.props.algorithm.name,style:this.elementStyle(),onClick:this.pickedAlgorithm,bordered:!1},r.a.createElement("p",null,"Short name: ",this.props.algorithm.short),r.a.createElement("p",null,"Description: ",this.props.algorithm.link))}}]),t}(r.a.Component),k=a(47),f=a.n(k),b=a(326),S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={algorithms:[]},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://recommender-server.herokuapp.com/algorithms/").then((function(t){e.setState({algorithms:t.data})}))}},{key:"render",value:function(){var e=this;return r.a.createElement(b.a,{grid:{gutter:16,xs:1,sm:2,md:2,lg:3,xl:4,xxl:4},dataSource:this.state.algorithms,renderItem:function(t){return r.a.createElement(b.a.Item,null,r.a.createElement(g,{key:t.short,picked:e.props.picked,algorithm:t,pickedAlgorithm:e.props.pickedAlgorithm}))}})}}]),t}(r.a.Component),y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).elementStyle=function(){return{backgroundColor:a.props.dataSet.name===a.props.picked.name?"#add8e6":"#f4f4f4",padding:"10px",margin:"10px",cursor:"pointer"}},a.pickedDataSet=function(){a.props.pickedDataSet(a.props.dataSet)},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{title:this.props.dataSet.name,style:this.elementStyle(),onClick:this.pickedDataSet,bordered:!1},r.a.createElement("p",null,"Number of users: ",this.props.dataSet.users_num),r.a.createElement("p",null,"Number of items: ",this.props.dataSet.items_num),r.a.createElement("p",null,"Density: ",this.props.dataSet.density,"%"),r.a.createElement("p",null,"Description: ",this.props.dataSet.description))}}]),t}(r.a.Component),O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={dataSets:[]},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://recommender-server.herokuapp.com/data_sets/").then((function(t){e.setState({dataSets:t.data})}))}},{key:"render",value:function(){var e=this;return r.a.createElement(b.a,{grid:{gutter:16,xs:1,sm:2,md:2,lg:3,xl:4,xxl:4},dataSource:this.state.dataSets,renderItem:function(t){return r.a.createElement(b.a.Item,null,r.a.createElement(y,{key:t.name,picked:e.props.picked,dataSet:t,pickedDataSet:e.props.pickedDataSet}))}})}}]),t}(r.a.Component),j=a(325),v=a(84),E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).state={userIdInput:"1"},a.handleChange=function(e){a.setState({userIdInput:e})},a.userIdSubmit=function(e){e.preventDefault(),a.props.userIdSubmit(a.state.userIdInput)},a.getUsersIdSample=function(){return 0===Object.getOwnPropertyNames(a.props.pickedDataSet).length?r.a.createElement("p",null," Pick a dataset to see users ids examples "):r.a.createElement("p",null," Example ids: ",JSON.parse(a.props.pickedDataSet.users_id_sample).toString()," ")},a.isAlgorithmAndDataSetPicked=function(){return 0===Object.getOwnPropertyNames(a.props.pickedDataSet).length||0===Object.getOwnPropertyNames(a.props.pickedAlgorithm).length},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{padding:"5px",textAlign:"center"}},this.getUsersIdSample(),r.a.createElement(j.a,{size:"large",min:1,defaultValue:1,onChange:this.handleChange}),r.a.createElement("div",{style:{padding:"30px"}},r.a.createElement(v.a,{style:{fontSize:"150%",justifyContent:"center",display:"flex",margin:"0 auto",height:"70px",width:"400px"},type:"default",onClick:this.userIdSubmit,disabled:this.isAlgorithmAndDataSetPicked()},"Click to get recommendations!")))}}]),t}(r.a.Component),x=a(323),A=[{title:"Name",dataIndex:"name"},{title:"Crag",dataIndex:"crag"},{title:"Sector",dataIndex:"sector"}],D=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(x.a,{columns:A,dataSource:this.props.elements,size:"middle",rowKey:"name"})}}]),t}(r.a.Component),I=a(327),C=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{padding:"20px"}},r.a.createElement(I.a,{message:this.props.message,type:"error",style:{textAlign:"center",height:"50px",lineHeight:"30px",fontSize:"120%"}}))}}]),t}(r.a.Component),w={padding:"10px",fontSize:"150%",fontWeight:"bold",textAlign:"center",background:"#bee9e6"},N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={pickedAlgorithm:{},pickedDataSet:{},pickedUserId:"",recommendations:[],userHistory:[],errorMessage:""},a.pickedAlgorithm=function(e){a.setState({pickedAlgorithm:e,errorMessage:""})},a.pickedDataSet=function(e){a.setState({pickedDataSet:e,errorMessage:""})},a.userIdSubmit=function(e){0!==Object.getOwnPropertyNames(a.state.pickedAlgorithm).length&&0!==Object.getOwnPropertyNames(a.state.pickedDataSet).length&&(a.setState({recommendations:[],userHistory:[],errorMessage:""}),f.a.get("https://recommender-server.herokuapp.com/results?alg=".concat(a.state.pickedAlgorithm.short,"&data=").concat(a.state.pickedDataSet.name,"&user_id=").concat(e)).then((function(e){a.setState({recommendations:e.data})})).catch((function(e){"NO_MODEL"===e.response.data.message?a.setState({errorMessage:"There is no model for selected elements! Please choose other"}):"INVALID_ID"===e.response.data.message?a.setState({errorMessage:"User id not exists in selected data set! Consider using example ids"}):console.log(e)})),f.a.get("https://recommender-server.herokuapp.com/?data=".concat(a.state.pickedDataSet.name,"&user_id=").concat(e)).then((function(e){a.setState({userHistory:e.data})})).catch((function(e){return console.log(e)})))},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App",style:{padding:"20px",background:"#ECECEC"}},r.a.createElement("div",{style:w}," Algorithms "),r.a.createElement(S,{picked:this.state.pickedAlgorithm,pickedAlgorithm:this.pickedAlgorithm}),r.a.createElement("div",{style:w}," Data sets "),r.a.createElement(O,{picked:this.state.pickedDataSet,pickedDataSet:this.pickedDataSet}),r.a.createElement("div",{style:w}," User id "),r.a.createElement(E,{pickedDataSet:this.state.pickedDataSet,pickedAlgorithm:this.state.pickedAlgorithm,userIdSubmit:this.userIdSubmit}),this.state.errorMessage?r.a.createElement(C,{message:this.state.errorMessage}):null,r.a.createElement("div",{style:{paddingTop:"20px",paddingBottom:"20px"}},r.a.createElement(m.a,{gutter:[24,16]},r.a.createElement(u.a,{xs:{span:24},lg:{span:12}},r.a.createElement("div",{style:w}," Recommendations list "),r.a.createElement(D,{elements:this.state.recommendations})),r.a.createElement(u.a,{xs:{span:24},lg:{span:12}},r.a.createElement("div",{style:w}," User history "),r.a.createElement(D,{elements:this.state.userHistory})))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[160,1,2]]]);
//# sourceMappingURL=main.bc7f73bd.chunk.js.map