(this["webpackJsonprecommender-client-app"]=this["webpackJsonprecommender-client-app"]||[]).push([[0],{161:function(e,t,a){e.exports=a(321)},166:function(e,t,a){},321:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(7),i=a.n(o),s=(a(166),a(19)),c=a(20),l=a(23),p=a(21),d=a(24),m=(a(167),a(55)),u=a(31),h=a(325),g=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).elementStyle=function(){return{backgroundColor:a.props.algorithm.short===a.props.picked.short?"#add8e6":"#f4f4f4",padding:"10px",margin:"10px",cursor:"pointer"}},a.pickedAlgorithm=function(){a.props.pickedAlgorithm(a.props.algorithm)},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(h.a,{title:this.props.algorithm.name,style:this.elementStyle(),onClick:this.pickedAlgorithm,bordered:!1},n.a.createElement("p",null,"Short name: ",this.props.algorithm.short),n.a.createElement("p",null,"Description: ",this.props.algorithm.link))}}]),t}(n.a.Component),f=a(47),k=a.n(f),b=a(327),y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={algorithms:[]},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.a.get("https://recommender-server.herokuapp.com/algorithms/").then((function(t){e.setState({algorithms:t.data})}))}},{key:"render",value:function(){var e=this;return n.a.createElement(b.a,{grid:{gutter:16,xs:1,sm:2,md:2,lg:3,xl:4,xxl:4},dataSource:this.state.algorithms,renderItem:function(t){return n.a.createElement(b.a.Item,null,n.a.createElement(g,{key:t.short,picked:e.props.picked,algorithm:t,pickedAlgorithm:e.props.pickedAlgorithm}))}})}}]),t}(n.a.Component),S=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).elementStyle=function(){return{backgroundColor:a.props.dataSet.name===a.props.picked.name?"#add8e6":"#f4f4f4",padding:"10px",margin:"10px",cursor:"pointer"}},a.pickedDataSet=function(){a.props.pickedDataSet(a.props.dataSet)},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(h.a,{title:this.props.dataSet.name,style:this.elementStyle(),onClick:this.pickedDataSet,bordered:!1},n.a.createElement("p",null,"Number of users: ",this.props.dataSet.users_num),n.a.createElement("p",null,"Number of items: ",this.props.dataSet.items_num),n.a.createElement("p",null,"Density: ",this.props.dataSet.density,"%"),n.a.createElement("p",null,"Description: ",this.props.dataSet.description))}}]),t}(n.a.Component),E=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={dataSets:[]},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.a.get("https://recommender-server.herokuapp.com/data_sets/").then((function(t){e.setState({dataSets:t.data})}))}},{key:"render",value:function(){var e=this;return n.a.createElement(b.a,{grid:{gutter:16,xs:1,sm:2,md:2,lg:3,xl:4,xxl:4},dataSource:this.state.dataSets,renderItem:function(t){return n.a.createElement(b.a.Item,null,n.a.createElement(S,{key:t.name,picked:e.props.picked,dataSet:t,pickedDataSet:e.props.pickedDataSet}))}})}}]),t}(n.a.Component),O=a(63),j=O.a.Option,v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).pickedTopK=function(e){a.props.pickedTopK(e)},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(O.a,{defaultValue:this.props.topK,style:{width:120},onChange:this.pickedTopK},n.a.createElement(j,{value:"10"},"Top10"),n.a.createElement(j,{value:"20"},"Top20"),n.a.createElement(j,{value:"50"},"Top50"))}}]),t}(n.a.Component),x=a(326),A=a(85),I=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={userIdInput:"1"},a.handleChange=function(e){a.setState({userIdInput:e})},a.userIdSubmit=function(e){e.preventDefault(),a.props.userIdSubmit(a.state.userIdInput)},a.getUsersIdSample=function(){return 0===Object.getOwnPropertyNames(a.props.pickedDataSet).length?n.a.createElement("p",null," Pick a dataset to see users ids examples "):n.a.createElement("p",null," Example ids: ",JSON.parse(a.props.pickedDataSet.users_id_sample).join(", ")," ")},a.isAlgorithmAndDataSetPicked=function(){return 0===Object.getOwnPropertyNames(a.props.pickedDataSet).length||0===Object.getOwnPropertyNames(a.props.pickedAlgorithm).length},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement(m.a,{gutter:[24,0]},n.a.createElement(u.a,{xs:{span:24},lg:{span:12}},n.a.createElement("div",{style:_}," User id "),n.a.createElement("div",{style:{padding:"5px",paddingBottom:"10px",textAlign:"center"}},this.getUsersIdSample(),n.a.createElement(x.a,{size:"medium",min:1,defaultValue:1,onChange:this.handleChange}))),n.a.createElement(u.a,{xs:{span:24},lg:{span:12}},n.a.createElement("div",{style:_}," Number of recommendations "),n.a.createElement("div",{style:{padding:"5px",textAlign:"center"}},n.a.createElement("p",null," Will be presented ",this.props.topK," most relevant items "),n.a.createElement(v,{topK:this.props.topK,pickedTopK:this.props.pickedTopK})))),n.a.createElement("div",{style:{padding:"30px"}},n.a.createElement(A.a,{style:{fontSize:"150%",justifyContent:"center",display:"flex",margin:"0 auto",height:"70px",width:"320px"},type:"default",onClick:this.userIdSubmit,disabled:this.isAlgorithmAndDataSetPicked()},"Click to get recommendations!")))}}]),t}(n.a.Component),w=a(324),C=[{title:"Rank",dataIndex:"rank"},{title:"Name",dataIndex:"name",render:function(e,t){return n.a.createElement("a",{href:"https://www.8a.nu/scorecard/Search.aspx?SearchType=ASCENTS&CragName="+t.crag+"&AscentName="+t.name,target:"_blank",rel:"noopener noreferrer"},e)}},{title:"Crag",dataIndex:"crag",render:function(e,t){return n.a.createElement("a",{href:"https://www.8a.nu/scorecard/Search.aspx?Mode=SIMPLE&CragName="+t.crag,target:"_blank",rel:"noopener noreferrer"},e)}},{title:"Sector",dataIndex:"sector"},{title:"Grade",dataIndex:"grade"},{title:"Country code",dataIndex:"country"}],D=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(w.a,{columns:C,dataSource:this.props.elements,size:"middle",rowKey:"name"})}}]),t}(n.a.Component),N=[{title:"Name",dataIndex:"name",render:function(e,t){return n.a.createElement("a",{href:"https://www.8a.nu/scorecard/Search.aspx?SearchType=ASCENTS&CragName="+t.crag+"&AscentName="+t.name,target:"_blank",rel:"noopener noreferrer"},e)}},{title:"Crag",dataIndex:"crag",render:function(e,t){return n.a.createElement("a",{href:"https://www.8a.nu/scorecard/Search.aspx?Mode=SIMPLE&CragName="+t.crag,target:"_blank",rel:"noopener noreferrer"},e)}},{title:"Sector",dataIndex:"sector"},{title:"Grade",dataIndex:"grade"},{title:"Country code",dataIndex:"country"},{title:"Date",dataIndex:"date"}],K=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(w.a,{columns:N,dataSource:this.props.elements,size:"middle",rowKey:"name"})}}]),t}(n.a.Component),T=a(328),M=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{style:{padding:"20px"}},n.a.createElement(T.a,{message:this.props.message,type:"error",style:{textAlign:"center",height:"50px",lineHeight:"30px",fontSize:"120%"}}))}}]),t}(n.a.Component),_={padding:"10px",fontSize:"150%",fontWeight:"bold",textAlign:"center",background:"#bee9e6"},P=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={pickedAlgorithm:{},pickedDataSet:{},pickedUserId:"",topK:"10",recommendations:[],userHistory:[],errorMessage:""},a.pickedAlgorithm=function(e){a.setState({pickedAlgorithm:e,errorMessage:""})},a.pickedDataSet=function(e){a.setState({pickedDataSet:e,errorMessage:""})},a.pickedTopK=function(e){a.setState({topK:e})},a.userIdSubmit=function(e){0!==Object.getOwnPropertyNames(a.state.pickedAlgorithm).length&&0!==Object.getOwnPropertyNames(a.state.pickedDataSet).length&&(a.setState({recommendations:[],userHistory:[],errorMessage:""}),k.a.get("https://recommender-server.herokuapp.com/results?alg=".concat(a.state.pickedAlgorithm.short,"&data=").concat(a.state.pickedDataSet.name,"&user_id=").concat(e,"&topK=").concat(a.state.topK)).then((function(e){a.setState({recommendations:e.data})})).catch((function(e){"NO_MODEL"===e.response.data.message?a.setState({errorMessage:"There is no model for selected elements! Please choose other"}):"INVALID_ID"===e.response.data.message?a.setState({errorMessage:"User id not exists in selected data set! Consider using example ids"}):console.log(e)})),k.a.get("https://recommender-server.herokuapp.com/histories?data=".concat(a.state.pickedDataSet.name,"&user_id=").concat(e)).then((function(e){a.setState({userHistory:e.data})})).catch((function(e){return console.log(e)})))},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App",style:{padding:"20px",background:"#ECECEC"}},n.a.createElement("div",{style:_}," Algorithms "),n.a.createElement(y,{picked:this.state.pickedAlgorithm,pickedAlgorithm:this.pickedAlgorithm}),n.a.createElement("div",{style:_}," Data sets "),n.a.createElement(E,{picked:this.state.pickedDataSet,pickedDataSet:this.pickedDataSet}),n.a.createElement(I,{pickedDataSet:this.state.pickedDataSet,pickedAlgorithm:this.state.pickedAlgorithm,userIdSubmit:this.userIdSubmit,topK:this.state.topK,pickedTopK:this.pickedTopK}),this.state.errorMessage?n.a.createElement(M,{message:this.state.errorMessage}):null,n.a.createElement("div",{style:{paddingTop:"20px",paddingBottom:"20px"}},n.a.createElement(m.a,{gutter:[24,16]},n.a.createElement(u.a,{xs:{span:24},lg:{span:12}},n.a.createElement("div",{style:_}," Recommendations list "),n.a.createElement(D,{elements:this.state.recommendations})),n.a.createElement(u.a,{xs:{span:24},lg:{span:12}},n.a.createElement("div",{style:_}," User history "),n.a.createElement(K,{elements:this.state.userHistory})))))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[161,1,2]]]);
//# sourceMappingURL=main.f4602a21.chunk.js.map