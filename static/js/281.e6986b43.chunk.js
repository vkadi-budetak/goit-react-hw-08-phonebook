"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[281],{7281:function(e,n,r){r.r(n),r.d(n,{default:function(){return y}});var t=r(1413),i=r(9434),a=r(5168),c=r(6916),u=function(e){return e.contactStore},o=(0,c.P1)(u,(function(e){return e.contacts})),s=(0,c.P1)(u,(function(e){return e.isLoading})),l=(0,c.P1)(u,(function(e){return e.error})),m=(0,c.P1)(u,(function(e){return e.filter})),d=r(411),f=r(9195),v=r(3874),x=r(9869),h=r(3329),j=function(){var e=(0,f.cI)(),n=e.register,r=e.handleSubmit,c=e.reset,u=e.formState.errors,s=(0,i.I0)(),l=(0,i.v9)(o);return(0,h.jsxs)("form",{onSubmit:r((function(e){l.some((function(n){return n.name===e.name}))?window.alert("".concat(e.name," is already in contacts.")):(s((0,a.uK)(e)),s((0,d.T)("")),c())})),children:[(0,h.jsxs)("div",{children:[(0,h.jsx)(v.Z,(0,t.Z)({margin:"normal",required:!0,name:"name",label:"Name",type:"text",id:"name"},n("name",{required:!0}))),u.name&&(0,h.jsx)("span",{children:"This field is required"})]}),(0,h.jsx)("div",{children:(0,h.jsx)(v.Z,(0,t.Z)({margin:"normal",required:!0,name:"number",label:"Number",type:"text",id:"number"},n("number",{required:!0})))}),(0,h.jsx)(x.Z,{type:"submit",variant:"contained",sx:{mt:3,mb:2},children:"Add contact"})]})},b=r(2791);function p(e){var n=e.contact,r=(0,i.I0)();return(0,h.jsxs)("li",{children:[n.name,": ",n.number," ",(0,h.jsx)(x.Z,{onClick:function(){return e=n.id,void r((0,a.GK)(e));var e},variant:"outlined",color:"error",size:"small",children:"Delete"})]})}var g=r(3089),k=function(e){var n=e.message;return(0,h.jsx)("p",{className:"error",children:n})};function w(){var e=(0,i.v9)(o),n=(0,i.v9)(m),r=(0,i.v9)(s),t=(0,i.v9)(l),a=null!==e&&e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return(0,h.jsx)("div",{children:(0,h.jsxs)("ul",{children:[r&&(0,h.jsx)(g.Z,{}),t&&(0,h.jsx)(k,{message:t}),a.map((function(e){return(0,h.jsx)(p,{contact:e},e.id)}))]})})}function Z(){var e=(0,i.v9)(m),n=(0,i.I0)();return(0,h.jsx)(v.Z,{value:e,onChange:function(e){var r=e.target.value;n((0,d.T)(r))},margin:"normal",name:"filter",label:"Find contacts by name",type:"text",id:"filter"})}var y=function(){var e=(0,i.I0)();return(0,b.useEffect)((function(){e((0,a.yF)())}),[e]),(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:"Phonebook"}),(0,h.jsx)(j,{}),(0,h.jsx)("h2",{children:"Contacts"}),(0,h.jsx)(Z,{}),(0,h.jsx)(w,{})]})}}}]);
//# sourceMappingURL=281.e6986b43.chunk.js.map