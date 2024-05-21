"use strict";(self.webpackChunkkdm_reference=self.webpackChunkkdm_reference||[]).push([[536],{256:(e,t,l)=>{l.d(t,{A:()=>s});var o=l(260);class s extends o.lD{constructor(){super(...arguments),this._stateKey=this.constructor.name}getComponentGlobalStateMany(e){for(const[t,l]of Object.entries(e))e[t]=this.getComponentGlobalState(t,l);return e}getComponentGlobalState(e,t){const l=this.$store.state[this._stateKey];return l&&e&&e in l?l[e]:t}setComponentGlobalState(e,t){this.$store.commit("update",{[this._stateKey]:{[e]:t}})}}},950:(e,t,l)=>{var o;l.d(t,{A:()=>s}),function(e){e.Head="head",e.Body="body",e.Arms="arms",e.Waist="waist",e.Legs="legs"}(o||(o={}));const s=o},575:(e,t,l)=>{function o(e){return e.replace(/^ +/gm,"").replace(/ +$/gm,"").split(/\n{2,}/).map((e=>e.replace(/\n/gm," ").trim())).filter(Boolean).join("\n")}l.d(t,{B:()=>o})},671:(e,t,l)=>{l.d(t,{A:()=>T});var o=l(365);const s={class:"component"},n={key:0,class:"container-fluid"},a={class:"custom-switch"},i=(0,o.Lk)("span",{class:"custom-control-label"},"Show Small Cards",-1),r={key:0,class:"custom-switch"},c=(0,o.Lk)("span",{class:"custom-control-label"},"Show Roll Result",-1),p={key:1,class:"custom-switch"},d=(0,o.Lk)("span",{class:"custom-control-label"},"Sort by Roll Result",-1),u={class:"list-inline card-list"},m=["src","alt","title"],g={key:1,class:"roll"},h=["innerHTML"],v=["innerHTML"],y={key:2,class:"location"},C=["src","alt","title"],k=["innerHTML"],b=["innerHTML"],S=(0,o.Lk)("div",{class:"record-archive"},[(0,o.Lk)("p",null,[(0,o.Lk)("i",null,"📝"),(0,o.eW)(),(0,o.Lk)("span",{class:"keyword"},"Record"),(0,o.eW)(" and archive.")])],-1);var R=l(635),L=l(260),w=l(256);let f=class extends w.A{constructor(){super(...arguments),this.showRoll=!1,this.sortRoll=!1,this.small="userAgentData"in navigator&&navigator.userAgentData.mobile}created(){this.stateKey&&(this._stateKey=this.stateKey,Object.assign(this,this.getComponentGlobalStateMany(Object.assign(Object.assign({},this.hasRollResult?{showRoll:this.showRoll,sortRoll:this.sortRoll}:void 0),{small:this.small}))))}get cardClass(){return this.small?"card-sm":"card-md"}get cards(){return Object.values(this.items).map((e=>{var t,l,o,s,n;const a={},i=e.name.replace(/\[([^\]]+)\]/g,"$1");e.crest&&i.length>16&&(a.paddingLeft="3rem");i!==e.name&&(null===(t=e.crest)||void 0===t?void 0:t.color)&&(a.color=e.crest.color);const r=null!==(o=null===(l=e.crest)||void 0===l?void 0:l.image)&&void 0!==o?o:"";return{crestText:(null===(s=e.crest)||void 0===s?void 0:s.name)?`${e.crest.name} Expansion`:void 0,crest:e.crest,location:e.location[0].toUpperCase()+e.location.slice(1),nameStyle:a,name:i,image:e.image,caption:null===(n=e.caption)||void 0===n?void 0:n.replace(/\[([^\]]+)\]/g,"<b>$1</b>").replace(/\n/gm,"</p><p>"),description:e.description.replace(/\[activation\]/g,'<i title="activation">⚡</i>').replace(/\[endeavor\]/g,'<i title="endeavor">✪</i>').replace(/\[monster:([^\]]+)\]/g,`<span class="text-nowrap"><img class="crest" src="${r}" alt="monster action" title="monster action" /> <b>$1</b></span>`).replace(/\[movement\]/g,'<i title="movement">♘</i>').replace(/\[story:([^\]]+)\]/g,'<i class="text-nowrap" title="story event">📖<b> $1</b></i>').replace(/\[([^\]]+)\]/g,"<b>$1</b>").replace(/\n/gm,"</p><p>"),roll:e.roll}})).sort(((e,t)=>this.sortRoll?0:e.name.localeCompare(t.name)))}onSmallChanged(e){this.setComponentGlobalState("small",e)}onShowRollChanged(e){this.setComponentGlobalState("showRoll",e)}onSortRollChanged(e){this.setComponentGlobalState("sortRoll",e)}};(0,R.Cg)([(0,L.kv)({type:String}),(0,R.Sn)("design:type",String)],f.prototype,"stateKey",void 0),(0,R.Cg)([(0,L.kv)({type:Array,required:!0}),(0,R.Sn)("design:type",Array)],f.prototype,"items",void 0),(0,R.Cg)([(0,L.kv)({type:String}),(0,R.Sn)("design:type",String)],f.prototype,"listItemClass",void 0),(0,R.Cg)([(0,L.kv)({type:Boolean,default:!1}),(0,R.Sn)("design:type",Boolean)],f.prototype,"hasRollResult",void 0),(0,R.Cg)([(0,L.ox)("small"),(0,R.Sn)("design:type",Function),(0,R.Sn)("design:paramtypes",[Boolean]),(0,R.Sn)("design:returntype",void 0)],f.prototype,"onSmallChanged",null),(0,R.Cg)([(0,L.ox)("showRoll"),(0,R.Sn)("design:type",Function),(0,R.Sn)("design:paramtypes",[Boolean]),(0,R.Sn)("design:returntype",void 0)],f.prototype,"onShowRollChanged",null),(0,R.Cg)([(0,L.ox)("sortRoll"),(0,R.Sn)("design:type",Function),(0,R.Sn)("design:paramtypes",[Boolean]),(0,R.Sn)("design:returntype",void 0)],f.prototype,"onSortRollChanged",null),f=(0,R.Cg)([L.uA],f);const x=f;const T=(0,l(262).A)(x,[["render",function(e,t,l,R,L,w){return(0,o.uX)(),(0,o.CE)("div",s,[e.stateKey?((0,o.uX)(),(0,o.CE)("div",n,[(0,o.Lk)("div",a,[(0,o.Lk)("label",null,[(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.small=t),class:"custom-control-input",type:"checkbox"},null,512),[[o.lH,e.small]]),i])]),e.hasRollResult?((0,o.uX)(),(0,o.CE)("div",r,[(0,o.Lk)("label",null,[(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[1]||(t[1]=t=>e.showRoll=t),class:"custom-control-input",type:"checkbox"},null,512),[[o.lH,e.showRoll]]),c])])):(0,o.Q3)("v-if",!0),e.hasRollResult?((0,o.uX)(),(0,o.CE)("div",p,[(0,o.Lk)("label",null,[(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[2]||(t[2]=t=>e.sortRoll=t),class:"custom-control-input",type:"checkbox"},null,512),[[o.lH,e.sortRoll]]),d])])):(0,o.Q3)("v-if",!0)])):(0,o.Q3)("v-if",!0),(0,o.Lk)("ul",u,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.cards,(t=>{var l;return(0,o.uX)(),(0,o.CE)("li",{class:(0,o.C4)(["list-inline-item",[e.listItemClass,e.cardClass]])},[(null===(l=t.crest)||void 0===l?void 0:l.image)?((0,o.uX)(),(0,o.CE)("div",{key:0,class:(0,o.C4)(["expansion",[...t.crest.color?[]:["nobg"],...t.crest.hidden?["hidden"]:[]]]),style:(0,o.Tr)({"background-color":t.crest.color})},[(0,o.Lk)("img",{src:t.crest.image,alt:t.crestText,title:t.crestText},null,8,m)],6)):(0,o.Q3)("v-if",!0),e.showRoll&&t.roll?((0,o.uX)(),(0,o.CE)("p",g,[(0,o.Lk)("span",{innerHTML:t.roll},null,8,h)])):(0,o.Q3)("v-if",!0),(0,o.Lk)("p",{class:"name",style:(0,o.Tr)(t.nameStyle),innerHTML:t.name},null,12,v),t.image?((0,o.uX)(),(0,o.CE)("div",y,[(0,o.Lk)("img",{src:t.image,alt:t.location,title:t.location},null,8,C)])):(0,o.Q3)("v-if",!0),t.caption?((0,o.uX)(),(0,o.CE)("p",{key:3,class:"caption",innerHTML:t.caption},null,8,k)):(0,o.Q3)("v-if",!0),(0,o.Lk)("p",{class:"description",innerHTML:t.description},null,8,b),S],2)})),256))])])}]])}}]);
//# sourceMappingURL=536.dc043ea.js.map