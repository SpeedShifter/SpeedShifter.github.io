"use strict";(self.webpackChunkmap_observer=self.webpackChunkmap_observer||[]).push([[700],{6700:(we,w,d)=>{d.r(w),d.d(w,{AddDataModule:()=>Je});var m=d(9808),F=d(3477),Y=d(3125),B=d(5782),e=d(5e3),u=d(7319),f=d(1135),r=d(2382),S=d(457),A=(()=>{return(t=A||(A={})).Technic="technic",t.Combat="combat",t.Soldiers="soldiers",A;var t})(),v=d(9889);function z(t,n){if(1&t&&(e.TgZ(0,"option",14),e._uU(1),e.qZA()),2&t){const o=n.$implicit;e.Q6J("value",o),e.xp6(1),e.hij(" ",o," ")}}let Q=(()=>{class t{constructor(o,i){this.formBuilder=o,this.activeModal=i,this.form=this.formBuilder.group({}),this.assetTypeOptions=[A.Combat,A.Technic,A.Soldiers]}ngOnInit(){this.buildForm()}buildForm(){this.form=this.formBuilder.group({description:["",r.kI.required],count:[1,r.kI.required],type:[A.Technic,r.kI.required]})}onCancel(){this.activeModal.dismiss()}onSubmit(){var o,i,s,a,l,c,p;if(null===(o=this.form)||void 0===o?void 0:o.valid){const h={description:null===(s=null===(i=this.form)||void 0===i?void 0:i.value)||void 0===s?void 0:s.description,count:null===(l=null===(a=this.form)||void 0===a?void 0:a.value)||void 0===l?void 0:l.count,type:null===(p=null===(c=this.form)||void 0===c?void 0:c.value)||void 0===p?void 0:p.type};this.activeModal.close(h)}}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(r.qu),e.Y36(v.Kz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-asset-form"]],decls:27,vars:3,consts:[[1,"modal-header"],[1,"modal-title"],[1,"modal-body"],["novalidate","",3,"formGroup"],["for","asset-description"],["id","asset-description","formControlName","description",1,"form-control","ml-1"],["for","asset-type"],["formControlName","type","id","asset-type",1,"form-control","ml-1"],[3,"value",4,"ngFor","ngForOf"],["for","asset-count"],["type","number","id","asset-count","formControlName","count",1,"form-control","ml-1"],[1,"modal-footer"],["type","button",1,"btn","btn-link",3,"click"],["type","button",1,"btn","btn-primary",3,"disabled","click"],[3,"value"]],template:function(o,i){1&o&&(e.TgZ(0,"div",0),e.TgZ(1,"h4",1),e.TgZ(2,"span"),e._uU(3," Add/Change Asset "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(4,"div",2),e.TgZ(5,"form",3),e.TgZ(6,"div"),e.TgZ(7,"h3"),e.TgZ(8,"label",4),e._uU(9,"Description"),e.qZA(),e.qZA(),e._UZ(10,"textarea",5),e.qZA(),e.TgZ(11,"div"),e.TgZ(12,"h3"),e.TgZ(13,"label",6),e._uU(14,"Type"),e.qZA(),e.qZA(),e.TgZ(15,"select",7),e.YNc(16,z,2,2,"option",8),e.qZA(),e.qZA(),e.TgZ(17,"div"),e.TgZ(18,"h3"),e.TgZ(19,"label",9),e._uU(20,"Count"),e.qZA(),e.qZA(),e._UZ(21,"input",10),e.qZA(),e.qZA(),e.qZA(),e.TgZ(22,"div",11),e.TgZ(23,"button",12),e.NdJ("click",function(){return i.onCancel()}),e._uU(24," Cancel "),e.qZA(),e.TgZ(25,"button",13),e.NdJ("click",function(){return i.onSubmit()}),e._uU(26," Submit "),e.qZA(),e.qZA()),2&o&&(e.xp6(5),e.Q6J("formGroup",i.form),e.xp6(11),e.Q6J("ngForOf",i.assetTypeOptions),e.xp6(9),e.Q6J("disabled",!i.form.valid))},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,r.EJ,m.sg,r.wV,r.YN,r.Kr],styles:[""],changeDetection:0}),t})();var q=d(561),C=d(4004),I=d(9841),X=d(5698),g=(()=>{return(t=g||(g={}))[t.None=0]="None",t[t.Entities=1]="Entities",g;var t})();function T(t){return function(o,i){const s={entities:Object.assign({},i.entities)};return t(o,s)===g.Entities?Object.assign(Object.assign({},i),{entities:s.entities}):i}}function K(t,n){return!(!n||!n.entities[t])}var D=d(1829);function W(t,n){if(1&t){const o=e.EpF();e.TgZ(0,"div",8),e.NdJ("click",function(){const a=e.CHM(o).$implicit,l=e.oxw().ngIf;return e.oxw().select(a.id,!!l[a.id])}),e._UZ(1,"app-asset-view",9),e.qZA()}if(2&t){const o=n.$implicit,i=e.oxw().ngIf;e.ekj("selected",i[o.id]),e.xp6(1),e.Q6J("asset",o)}}function ee(t,n){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,W,2,3,"div",7),e.ALo(2,"async"),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,o.assets$))}}let te=(()=>{class t{constructor(o,i){this.activeModal=o,this.store=i,this.selectedAdapter=function R(t){const n=function G(){return{getInitialState:function t(n={}){return Object.assign({entities:{}},n)}}}(),o=function P(){return{getSelectors:function t(n){const o=a=>a.entities,i=(0,u.P1)(o,a=>Object.keys(a)),s=(0,u.P1)(i,a=>a.length);return n?{selectIds:(0,u.P1)(n,i),selectEntities:(0,u.P1)(n,o),selectTotal:(0,u.P1)(n,s)}:{selectIds:i,selectEntities:o,selectTotal:s}}}}(),i=function H(){function t(l,c){return l in c.entities?g.None:(c.entities[l]=!0,g.Entities)}function s(l,c){let p=!1;for(const h of l)h in c.entities&&(delete c.entities[h],p=!0);return p?g.Entities:g.None}return{addOne:T(t),addMany:T(function n(l,c){let p=g.None;for(const h of l)p=t(h,c)||p;return p}),addAll:T(function o(l,c){return c.entities=l.reduce((p,h)=>(p[h]=!0,p),{}),g.Entities}),removeOne:T(function i(l,c){return s([l],c)}),removeMany:T(s),removeAll:function a(l){return Object.assign({},l,{entities:{}})}}}();return Object.assign(Object.assign(Object.assign(Object.assign({},n),o),i),{hasId:K})}(),this.selectedSelectors=this.selectedAdapter.getSelectors(),this.selectedState$=new f.X(this.selectedAdapter.getInitialState()),this.selected$=this.selectedState$.pipe((0,C.U)(this.selectedSelectors.selectEntities)),this.selectedIds$=this.selectedState$.pipe((0,C.U)(this.selectedSelectors.selectIds)),this.assets$=this.store.pipe((0,u.Ys)(q.q.selectAssetsAll))}ngOnInit(){}onCancel(){this.activeModal.dismiss()}onSubmit(){(0,I.a)([this.store.pipe((0,u.Ys)(q.q.selectAssetsEntities)),this.selectedIds$]).pipe((0,X.q)(1)).subscribe(([o,i])=>{this.activeModal.close(i.map(s=>o[s]))})}select(o,i){let s=this.selectedState$.value;s=i?this.selectedAdapter.removeOne(o,s):this.selectedAdapter.addOne(o,s),this.selectedState$.next(s)}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(v.Kz),e.Y36(u.yh))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-select-asset-modal"]],decls:13,vars:6,consts:[[1,"modal-header"],[1,"modal-title"],[1,"modal-body"],[4,"ngIf"],[1,"modal-footer"],["type","button",1,"btn","btn-link",3,"click"],["type","button",1,"btn","btn-primary",3,"disabled","click"],[3,"selected","click",4,"ngFor","ngForOf"],[3,"click"],[3,"asset"]],template:function(o,i){if(1&o&&(e.TgZ(0,"div",0),e.TgZ(1,"h4",1),e.TgZ(2,"span"),e._uU(3," Select Asset "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(4,"div",2),e.YNc(5,ee,3,3,"div",3),e.ALo(6,"async"),e.qZA(),e.TgZ(7,"div",4),e.TgZ(8,"button",5),e.NdJ("click",function(){return i.onCancel()}),e._uU(9," Cancel "),e.qZA(),e.TgZ(10,"button",6),e.NdJ("click",function(){return i.onSubmit()}),e.ALo(11,"async"),e._uU(12," Submit "),e.qZA(),e.qZA()),2&o){let s;e.xp6(5),e.Q6J("ngIf",e.lcZ(6,2,i.selected$)),e.xp6(5),e.Q6J("disabled",!(null!=(s=e.lcZ(11,4,i.selectedIds$))&&s.length))}},directives:[m.O5,m.sg,D.F],pipes:[m.Ov],styles:[".selected[_ngcontent-%COMP%]{background-color:#0d6efd}"],changeDetection:0}),t})(),E=(()=>{class t{constructor(o){this.modalService=o,this.openedModal=null}addAsset(){var o;return null===(o=this.openedModal)||void 0===o||o.close(),this.openedModal=this.modalService.open(Q,{keyboard:!1,backdrop:"static",size:"lg"}),(0,S.D)(this.openedModal.result)}selectAsset(){var o;return null===(o=this.openedModal)||void 0===o||o.close(),this.openedModal=this.modalService.open(te,{keyboard:!1,backdrop:"static",size:"lg"}),(0,S.D)(this.openedModal.result)}}return t.\u0275fac=function(o){return new(o||t)(e.LFG(v.FF))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var k=d(655),y=d(4987);function N(t,n){if(n.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+n.length+" present")}function O(t){N(1,arguments);var n=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===n?new Date(t.getTime()):"number"==typeof t||"[object Number]"===n?new Date(t):(("string"==typeof t||"[object String]"===n)&&"undefined"!=typeof console&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}var b=d(8407),x=d(2937),ne=d(3151),ie=d(1365),se=d(8372);let _=class{constructor(n){this.formBuilder=n,this.latlng=void 0,this.form=this.formBuilder.group({}),this.change=new e.vpe}ngOnInit(){this.buildForm(),this.form.valueChanges.pipe((0,se.b)(250),(0,y.t)(this)).subscribe(n=>{})}buildForm(){var n,o;this.form=this.formBuilder.group({lat:[null===(n=this.latlng)||void 0===n?void 0:n.lat,r.kI.required],lng:[null===(o=this.latlng)||void 0===o?void 0:o.lng,r.kI.required]})}onSubmit(){this.form.valid&&this.change.emit(this.form.value)}};_.\u0275fac=function(n){return new(n||_)(e.Y36(r.qu))},_.\u0275cmp=e.Xpm({type:_,selectors:[["app-lat-lng-edit"]],inputs:{latlng:"latlng"},outputs:{change:"change"},decls:5,vars:1,consts:[["novalidate","",1,"d-flex","flex-row",3,"formGroup","ngSubmit","keyup.enter"],["type","text","formControlName","lat",1,"form-control","m-1","flex-grow-1",3,"blur"],["type","text","formControlName","lng",1,"form-control","m-1","flex-grow-1",3,"blur"],[1,"btn","btn-link",3,"click"]],template:function(n,o){1&n&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return o.onSubmit()})("keyup.enter",function(){return o.onSubmit()}),e.TgZ(1,"input",1),e.NdJ("blur",function(){return o.onSubmit()}),e.qZA(),e.TgZ(2,"input",2),e.NdJ("blur",function(){return o.onSubmit()}),e.qZA(),e.TgZ(3,"button",3),e.NdJ("click",function(){return o.onSubmit()}),e._uU(4,"set"),e.qZA(),e.qZA()),2&n&&e.Q6J("formGroup",o.form)},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u],styles:[""]}),_=(0,k.gn)([(0,y.c)()],_);const re=["map"];function ae(t,n){if(1&t&&(e.TgZ(0,"option",8),e._uU(1),e.qZA()),2&t){const o=n.$implicit;e.Q6J("value",o.type),e.xp6(1),e.hij(" ",o.label," ")}}function le(t,n){if(1&t){const o=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"app-lat-lng-edit",9),e.NdJ("change",function(s){const l=e.CHM(o).$implicit;return e.oxw().changeMarker(l.marker,s)}),e.qZA(),e.qZA()}if(2&t){const o=n.$implicit;e.xp6(1),e.Q6J("latlng",o.coordinates)}}const de={radius:3,fillColor:"#ff7800",color:"#000",weight:1,opacity:1,fillOpacity:.8};let M=class{constructor(){this.geoDataChanged=new e.vpe,this._geoType$=new f.X("MultiPoint"),this.map$=new f.X(null),this.geoJsonLayer$=new f.X(null),this.markers$=new f.X([]),this.geoJson$=(0,I.a)([this._geoType$,this.markers$]).pipe((0,C.U)(([n,o])=>{switch(n){case"LineString":return{type:"Feature",geometry:{type:"LineString",coordinates:o.map(J)},properties:{}};case"Polygon":return{type:"Feature",geometry:{type:"Polygon",coordinates:[o.map(J)]},properties:{}};default:return{type:"Feature",geometry:{type:"MultiPoint",coordinates:o.map(J)},properties:{}}}return null}),(0,ne.d)({bufferSize:1,refCount:!0})),this.geoTypeOptions=[{type:"MultiPoint",label:"points"},{type:"LineString",label:"line"},{type:"Polygon",label:"polygon"}],this.markersView$=this.markers$.pipe((0,C.U)(n=>n.map(o=>{const i=o.getLatLng();return{marker:o,coordinates:{lat:i.lat,lng:i.lng}}})))}set geoType(n){this._geoType$.next(n)}get geoType(){return this._geoType$.value}ngOnInit(){this.geoJson$.pipe((0,ie.M)(this.geoJsonLayer$),(0,y.t)(this)).subscribe(([n,o])=>{null==o||o.clearLayers(),n&&(null==o||o.addData(n),this.geoDataChanged.next(n))})}ngAfterViewInit(){var n;const o=b.map(null===(n=this.mapElement)||void 0===n?void 0:n.nativeElement).setView(x.E,x.T);b.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:18,minZoom:3,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(o);const s=b.geoJSON(void 0,{pointToLayer:(a,l)=>b.circleMarker(l,de)});s.setStyle(a=>({color:(null==a?void 0:a.properties.color)||"#ffffff"})),this.geoJsonLayer$.next(s),s.addTo(o),this.map$.next(o),this.recreateMarkers()}addMarker(){const n=this.map$.value;n&&this.markers$.next([...this.markers$.value,this.createMarker(n)])}recreateMarkers(){this.markers$.value.forEach(n=>{n.remove()}),this.map$.value&&this.markers$.next([this.createMarker(this.map$.value)])}changeMarker(n,o){n.setLatLng(o),this.reloadMarkers()}createMarker(n){const o=b.marker(n.getCenter(),{draggable:!0,autoPan:!0}).addTo(n);return o.on("dragend",i=>{this.reloadMarkers()}),o}reloadMarkers(){this.markers$.next(this.markers$.value)}};function J(t){const n=t.getLatLng();return n.alt||0===n.alt?[n.lng,n.lat,n.alt]:[n.lng,n.lat]}M.\u0275fac=function(n){return new(n||M)},M.\u0275cmp=e.Xpm({type:M,selectors:[["app-map-selection-view"]],viewQuery:function(n,o){if(1&n&&e.Gf(re,5),2&n){let i;e.iGM(i=e.CRH())&&(o.mapElement=i.first)}},outputs:{geoDataChanged:"geoDataChanged"},decls:12,vars:5,consts:[[1,"form-control","ml-1",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[3,"click"],[4,"ngFor","ngForOf"],[1,"map-container"],[1,"map-frame"],[1,"map"],["map",""],[3,"value"],[3,"latlng","change"]],template:function(n,o){1&n&&(e.TgZ(0,"select",0),e.NdJ("ngModelChange",function(s){return o.geoType=s}),e.YNc(1,ae,2,2,"option",1),e.qZA(),e.TgZ(2,"button",2),e.NdJ("click",function(){return o.addMarker()}),e._uU(3,"Add marker"),e.qZA(),e.TgZ(4,"button",2),e.NdJ("click",function(){return o.recreateMarkers()}),e._uU(5,"clean markers"),e.qZA(),e.YNc(6,le,2,1,"div",3),e.ALo(7,"async"),e.TgZ(8,"div",4),e.TgZ(9,"div",5),e._UZ(10,"div",6,7),e.qZA(),e.qZA()),2&n&&(e.Q6J("ngModel",o.geoType),e.xp6(1),e.Q6J("ngForOf",o.geoTypeOptions),e.xp6(5),e.Q6J("ngForOf",e.lcZ(7,3,o.markersView$)))},directives:[r.EJ,r.JJ,r.On,m.sg,r.YN,r.Kr,_],pipes:[m.Ov],styles:[".map[_ngcontent-%COMP%]{width:100%;height:500px}"]}),M=(0,k.gn)([(0,y.c)()],M);const ce=["startDate"],me=["endDate"];let Z=class{constructor(n){this.formBuilder=n,this.form=this.formBuilder.group({}),this.onChange=new e.vpe}ngOnInit(){this.buildForm(),this.form.valueChanges.pipe((0,y.t)(this)).subscribe(n=>{var o;const i=$(n.startDate,n.startTime)||new Date;let s=$(n.endDate,n.endDate)||null;s&&function oe(t,n){N(2,arguments);var o=O(t),i=O(n);return o.getTime()<i.getTime()}(s,i)&&(s=i);const a={id:null===(o=this.movement)||void 0===o?void 0:o.id,description:n.description,start:i.getTime(),end:s?s.getTime():Number.MAX_SAFE_INTEGER,geo:n.geo};this.onChange.next(a)})}onGeoDataChanged(n){this.form.controls.geo.setValue(n)}buildForm(){this.form=this.formBuilder.group({description:["",null],startDate:[null,r.kI.required],startTime:[null,r.kI.required],endDate:[null],endTime:[null],geo:[void 0,r.kI.required]})}};function $(t,n){return t&&n?new Date(`${t.year}-${t.month}-${t.day} ${n}:00+03:00`):null}Z.\u0275fac=function(n){return new(n||Z)(e.Y36(r.qu))},Z.\u0275cmp=e.Xpm({type:Z,selectors:[["app-add-edit-movement"]],viewQuery:function(n,o){if(1&n&&(e.Gf(ce,5),e.Gf(me,5)),2&n){let i;e.iGM(i=e.CRH())&&(o.startDate=i.first),e.iGM(i=e.CRH())&&(o.endDate=i.first)}},inputs:{movement:"movement"},outputs:{onChange:"onChange"},decls:27,vars:1,consts:[["novalidate","",3,"formGroup"],["for","asset-description"],["id","asset-description","formControlName","description",1,"form-control","ml-1"],[1,"d-flex","flex-row"],[1,"flex-grow-0"],["placeholder","yyyy-mm-dd","formControlName","startDate","type","text","ngbDatepicker","",3,"click"],["startDate","ngbDatepicker"],["placeholder","HH:mm","formControlName","startTime","type","text"],["placeholder","yyyy-mm-dd","formControlName","endDate","type","text","ngbDatepicker","",3,"click"],["endDate","ngbDatepicker"],["placeholder","HH:mm","formControlName","endTime","type","text"],[3,"geoDataChanged"]],template:function(n,o){if(1&n){const i=e.EpF();e.TgZ(0,"form",0),e.TgZ(1,"div"),e.TgZ(2,"h3"),e.TgZ(3,"label",1),e._uU(4,"Description"),e.qZA(),e.qZA(),e._UZ(5,"textarea",2),e.qZA(),e.TgZ(6,"div"),e.TgZ(7,"div"),e.TgZ(8,"h3"),e._uU(9,"Start time"),e.qZA(),e.TgZ(10,"div",3),e.TgZ(11,"div",4),e.TgZ(12,"input",5,6),e.NdJ("click",function(){return e.CHM(i),e.MAs(13).toggle()}),e.qZA(),e.qZA(),e.TgZ(14,"div",4),e._UZ(15,"input",7),e.qZA(),e.qZA(),e.qZA(),e.TgZ(16,"div"),e.TgZ(17,"h3"),e._uU(18,"End time"),e.qZA(),e.TgZ(19,"div",3),e.TgZ(20,"div",4),e.TgZ(21,"input",8,9),e.NdJ("click",function(){return e.CHM(i),e.MAs(22).toggle()}),e.qZA(),e.qZA(),e.TgZ(23,"div",4),e._UZ(24,"input",10),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(25,"div"),e.TgZ(26,"app-map-selection-view",11),e.NdJ("geoDataChanged",function(a){return o.onGeoDataChanged(a)}),e.qZA(),e.qZA(),e.qZA()}2&n&&e.Q6J("formGroup",o.form)},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,v.J4,M],styles:[""],changeDetection:0}),Z=(0,k.gn)([(0,y.c)()],Z);let pe=(()=>{class t{constructor(o,i){this.activeModal=o,this.store=i,this.movement=new f.X(null)}ngOnInit(){}onCancel(){this.activeModal.dismiss()}onSubmit(){console.error(this.movement.value),this.activeModal.close(this.movement.value)}onChange(o){this.movement.next(o)}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(v.Kz),e.Y36(u.yh))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-movement-form-modal"]],decls:11,vars:0,consts:[[1,"modal-header"],[1,"modal-title"],[1,"modal-body"],[3,"onChange"],[1,"modal-footer"],["type","button",1,"btn","btn-link",3,"click"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(o,i){1&o&&(e.TgZ(0,"div",0),e.TgZ(1,"h4",1),e.TgZ(2,"span"),e._uU(3," Add/edit movement "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(4,"div",2),e.TgZ(5,"app-add-edit-movement",3),e.NdJ("onChange",function(a){return i.onChange(a)}),e.qZA(),e.qZA(),e.TgZ(6,"div",4),e.TgZ(7,"button",5),e.NdJ("click",function(){return i.onCancel()}),e._uU(8," Cancel "),e.qZA(),e.TgZ(9,"button",6),e.NdJ("click",function(){return i.onSubmit()}),e._uU(10," Submit "),e.qZA(),e.qZA())},directives:[Z],styles:[""]}),t})(),ue=(()=>{class t{constructor(o){this.modalService=o,this.openedModal=null}addMovement(){var o;return null===(o=this.openedModal)||void 0===o||o.close(),this.openedModal=this.modalService.open(pe,{keyboard:!1,backdrop:"static",size:"lg"}),(0,S.D)(this.openedModal.result)}}return t.\u0275fac=function(o){return new(o||t)(e.LFG(v.FF))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var ge=d(8626);function fe(t,n){if(1&t){const o=e.EpF();e.TgZ(0,"div",7),e._UZ(1,"app-asset-view",8),e.TgZ(2,"button",9),e.NdJ("click",function(){const s=e.CHM(o),a=s.$implicit,l=s.index;return e.oxw().removeAsset(a.id,l)}),e._uU(3,"Remove"),e.qZA(),e.qZA()}if(2&t){const o=n.$implicit;e.xp6(1),e.Q6J("asset",o)}}function ve(t,n){if(1&t){const o=e.EpF();e.TgZ(0,"div",7),e._UZ(1,"app-asset-movement",10),e.TgZ(2,"button",9),e.NdJ("click",function(){const s=e.CHM(o),a=s.$implicit,l=s.index;return e.oxw().removeMovement(a.id,l)}),e._uU(3,"Remove"),e.qZA(),e.qZA()}if(2&t){const o=n.$implicit;e.xp6(1),e.Q6J("movement",o)}}let he=(()=>{class t{constructor(o,i,s){this.formBuilder=o,this.assetFormModalService=i,this.movementFormModalService=s,this.form=this.formBuilder.group({}),this.assets=new f.X([]),this.movements=new f.X([]),this.onAdd=new e.vpe}ngOnInit(){this.buildForm()}buildForm(){this.form=this.formBuilder.group({description:["",null]})}submit(){var o,i,s;if(null===(o=this.form)||void 0===o?void 0:o.valid){const c={description:null===(s=null===(i=this.form)||void 0===i?void 0:i.value)||void 0===s?void 0:s.description};this.onAdd.emit({assets:this.assets.value,movements:this.movements.value,item:c})}}onAddAsset(){this.assetFormModalService.addAsset().subscribe(o=>{this.addAssets([o])})}selectAsset(){this.assetFormModalService.selectAsset().subscribe(o=>{this.addAssets(o)})}addAssets(o){let i=[...this.assets.value];o.forEach(s=>{(!s.id||!i.some(a=>a.id===s.id))&&i.push(s)}),this.assets.next(i)}removeAsset(o,i){let s=[...this.assets.value];o&&(i=s.findIndex(a=>a.id===o)),i>-1&&s.splice(i,1),this.assets.next(s)}onAddMovement(){this.movementFormModalService.addMovement().subscribe(o=>{this.addMovements([o])})}addMovements(o){let i=[...this.movements.value];o.forEach(s=>{(!s.id||!i.some(a=>a.id===s.id))&&i.push(s)}),this.movements.next(i)}removeMovement(o,i){let s=[...this.movements.value];o&&(i=s.findIndex(a=>a.id===o)),i>-1&&s.splice(i,1),this.movements.next(s)}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(r.qu),e.Y36(E),e.Y36(ue))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-add-mapping-item-form"]],outputs:{onAdd:"onAdd"},decls:21,vars:7,consts:[["novalidate","",1,"border","p-3",3,"formGroup"],["for","item-description"],["id","item-description","formControlName","description",1,"form-control","ml-1"],[1,"border","p-2"],["class","d-flex flex-row",4,"ngFor","ngForOf"],[3,"click"],["type","submit",3,"click"],[1,"d-flex","flex-row"],[1,"flex-grow-1",3,"asset"],[1,"btn","btn-link","flex-grow-0",3,"click"],[1,"flex-grow-1",3,"movement"]],template:function(o,i){1&o&&(e.TgZ(0,"form",0),e.TgZ(1,"div"),e.TgZ(2,"h3"),e.TgZ(3,"label",1),e._uU(4,"Description"),e.qZA(),e.qZA(),e._UZ(5,"textarea",2),e.qZA(),e.TgZ(6,"div",3),e.YNc(7,fe,4,1,"div",4),e.ALo(8,"async"),e.TgZ(9,"button",5),e.NdJ("click",function(){return i.selectAsset()}),e._uU(10,"select Asset"),e.qZA(),e.TgZ(11,"button",5),e.NdJ("click",function(){return i.onAddAsset()}),e._uU(12,"Add Asset"),e.qZA(),e.qZA(),e.TgZ(13,"div",3),e.YNc(14,ve,4,1,"div",4),e.ALo(15,"async"),e.TgZ(16,"button",5),e.NdJ("click",function(){return i.onAddMovement()}),e._uU(17,"Add Movement"),e.qZA(),e.qZA(),e.TgZ(18,"div"),e.TgZ(19,"button",6),e.NdJ("click",function(){return i.submit()}),e._uU(20,"Add"),e.qZA(),e.qZA(),e.qZA()),2&o&&(e.Q6J("formGroup",i.form),e.xp6(7),e.Q6J("ngForOf",e.lcZ(8,3,i.assets)),e.xp6(7),e.Q6J("ngForOf",e.lcZ(15,5,i.movements)))},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,m.sg,D.F,ge.W],pipes:[m.Ov],styles:[""],changeDetection:0}),t})();const Ae=[{path:"",component:(()=>{class t{constructor(o,i){this.store=o,this.router=i}ngOnInit(){}add(o){this.store.dispatch((0,Y.Mz)(o)),this.router.navigate([B.E.main])}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(u.yh),e.Y36(F.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["add-data"]],decls:3,vars:0,consts:[[3,"onAdd"]],template:function(o,i){1&o&&(e.TgZ(0,"h2"),e._uU(1,"add data"),e.qZA(),e.TgZ(2,"app-add-mapping-item-form",0),e.NdJ("onAdd",function(a){return i.add(a)}),e.qZA())},directives:[he],styles:[""],changeDetection:0}),t})()}];let _e=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[F.Bz.forChild(Ae)],F.Bz]}),t})(),Me=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[m.ez,r.u5,r.UX]]}),t})();var L=d(8796);let Ze=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[m.ez,r.u5,r.UX,L.o]]}),t})(),ye=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[E],imports:[[m.ez,v.IJ,Me,Ze]]}),t})(),Te=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[m.ez,r.UX,r.u5]]}),t})(),U=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[m.ez,r.u5,r.UX,Te]]}),t})(),be=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[m.ez,U]]}),t})(),j=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[m.ez,r.u5,r.UX,U,v.IJ]]}),t})(),Ce=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[m.ez,j]]}),t})(),Fe=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[m.ez,Ce,j]]}),t})();var Se=d(8972);let ke=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[m.ez,r.u5,r.UX,ye,L.o,be,Fe,Se.Y]]}),t})(),Je=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[m.ez,_e,ke]]}),t})()}}]);