(this.webpackJsonpsongs=this.webpackJsonpsongs||[]).push([[0],{25:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n(0),s=n(4),r=n.n(s),o=n(3),l=n(2),a=n(10),u=n(11),d=n(13),j=n(12),b=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"renderList",value:function(){var e=this;return this.props.songs.map((function(t){return Object(i.jsxs)("div",{className:"item",children:[Object(i.jsx)("div",{className:"right floated content",children:Object(i.jsx)("button",{onClick:function(){return e.props.selectSong(t)},className:"ui button primary",children:"Select"})}),Object(i.jsx)("div",{className:"content",children:t.title})]},t.title)}))}},{key:"render",value:function(){return Object(i.jsx)("div",{className:"ui divided list",children:this.renderList()})}}]),n}(c.Component),h=Object(o.b)((function(e){return{songs:e.songs}}),{selectSong:function(e){return{type:"SONG_SELECTED",payload:e}}})(b),O=Object(o.b)((function(e){return{song:e.selectedSong}}))((function(e){var t=e.song;return t?Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"Details for:"}),Object(i.jsxs)("p",{children:["Title: ",t.title]}),Object(i.jsxs)("p",{children:["Duration: ",t.duration]})]}):Object(i.jsx)("div",{children:"Select a song"})})),p=function(){return Object(i.jsx)("div",{className:"ui container grid",children:Object(i.jsxs)("div",{className:"ui row",children:[Object(i.jsx)("div",{className:"column eight wide",children:Object(i.jsx)(h,{})}),Object(i.jsx)("div",{className:"column eight wide",children:Object(i.jsx)(O,{})})]})})},v=Object(l.b)({songs:function(){return[{title:"My Sunshine",duration:"2:45"},{title:"All Star",duration:"3:56"},{title:"Chop Suey",duration:"4:14"},{title:"Bad",duration:"2:59"}]},selectedSong:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return"SONG_SELECTED"===t.type?t.payload:e}});r.a.render(Object(i.jsx)(o.a,{store:Object(l.c)(v),children:Object(i.jsx)(p,{})}),document.querySelector("#root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.bf065242.chunk.js.map