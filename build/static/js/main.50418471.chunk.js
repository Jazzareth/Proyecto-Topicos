(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),i=n.n(l),c=(n(13),n(7)),o=n(1),s=n(2),u=n(4),h=n(3),p=(n(14),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"handleForm",value:function(e){e.preventDefault(),this.props.player(e.target.player.value)}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{onSubmit:function(t){return e.handleForm(t)}},r.a.createElement("label",null,"Player X",r.a.createElement("input",{type:"radio",name:"player",value:"X"})),r.a.createElement("label",null,"Player O",r.a.createElement("input",{type:"radio",name:"player",value:"O"})),r.a.createElement("input",{type:"submit",value:"Start"}))}}]),n}(a.Component)),y=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"handleSetPlayer",value:function(e){this.props.setPlayer(e)}},{key:"renderWinner",value:function(){var e=this;return this.props.winner?r.a.createElement("h2",null," WINNER IS ",this.props.winner):this.props.player?r.a.createElement("h2",null," Next Player is",this.props.player):r.a.createElement(p,{player:function(t){return e.handleSetPlayer(t)}})}},{key:"render",value:function(){return r.a.createElement("span",null,this.renderWinner())}}]),n}(a.Component),m=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={board:Array(9).fill(null),player:null,winner:null},a}return Object(s.a)(n,[{key:"checkWinner",value:function(){this.checkMatch([["0","1","2"],["3","4","5"],["6","7","8"],["0","3","6"],["1","4","7"],["2","5","8"],["0","4","8"],["2","4","6"]])}},{key:"checkMatch",value:function(e){for(var t=0;t<e.length;t++){var n=Object(c.a)(e[t],3),a=n[0],r=n[1],l=n[2],i=this.state.board;i[a]&&i[a]===i[r]&&i[a]===i[l]&&(alert("you won"),this.setState({winner:this.state.player}))}}},{key:"handleClick",value:function(e){if(this.state.player&&!this.state.winner){var t=this.state.board;null===this.state.board[e]&&(t[e]=this.state.player,this.setState({board:t,player:"X"===this.state.player?"O":"X"}),this.checkWinner())}}},{key:"setPlayer",value:function(e){this.setState({player:e})}},{key:"renderBoxes",value:function(){var e=this;return this.state.board.map((function(t,n){return r.a.createElement("div",{className:"box",key:n,onClick:function(){return e.handleClick(n)}},t)}))}},{key:"reset",value:function(){this.setState({board:Array(9).fill(null),player:null,winner:null})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Tic Tac App"),r.a.createElement(y,{player:this.state.player,setPlayer:function(t){e.setPlayer(t)},winner:this.state.winner}),r.a.createElement("div",{className:"board"},this.renderBoxes()),r.a.createElement("button",{disabled:!this.state.winner,onClick:function(){return e.reset()}},"Reset"))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.50418471.chunk.js.map