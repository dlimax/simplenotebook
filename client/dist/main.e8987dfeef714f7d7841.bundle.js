webpackJsonp([1],{"+h1B":function(l,n,t){"use strict";var e=t("/oeL"),u=t("aR8+"),i=t("8bWr"),o=t("Uk5h"),r=t("qbdv"),c=t("fc+i"),d=t("CPp0"),a=t("bm2B"),s=t("DmCJ"),p=t("Q2l4"),f=t("WMCC"),g=(t.n(f),t("x/Up")),v=t("G8gw");t.d(n,"a",function(){return m});var m=e["ɵcmf"](u.a,[i.a],function(l){return e["ɵmod"]([e["ɵmpd"](512,e.ComponentFactoryResolver,e["ɵCodegenComponentFactoryResolver"],[[8,[o.a]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["ɵmpd"](5120,e.LOCALE_ID,e["ɵm"],[[3,e.LOCALE_ID]]),e["ɵmpd"](4608,r.a,r.b,[e.LOCALE_ID]),e["ɵmpd"](4608,e.Compiler,e.Compiler,[]),e["ɵmpd"](5120,e.APP_ID,e["ɵf"],[]),e["ɵmpd"](5120,e.IterableDiffers,e["ɵk"],[]),e["ɵmpd"](5120,e.KeyValueDiffers,e["ɵl"],[]),e["ɵmpd"](4608,c.b,c.c,[r.c]),e["ɵmpd"](6144,e.Sanitizer,null,[c.b]),e["ɵmpd"](4608,c.d,c.e,[]),e["ɵmpd"](5120,c.f,function(l,n,t,e){return[new c.g(l),new c.h(n),new c.i(t,e)]},[r.c,r.c,r.c,c.d]),e["ɵmpd"](4608,c.j,c.j,[c.f,e.NgZone]),e["ɵmpd"](135680,c.k,c.k,[r.c]),e["ɵmpd"](4608,c.l,c.l,[c.j,c.k]),e["ɵmpd"](6144,e.RendererFactory2,null,[c.l]),e["ɵmpd"](6144,c.m,null,[c.k]),e["ɵmpd"](4608,e.Testability,e.Testability,[e.NgZone]),e["ɵmpd"](4608,c.n,c.n,[r.c]),e["ɵmpd"](4608,c.o,c.o,[r.c]),e["ɵmpd"](4608,d.a,d.a,[]),e["ɵmpd"](4608,d.b,d.c,[]),e["ɵmpd"](5120,d.d,d.e,[]),e["ɵmpd"](4608,d.f,d.f,[d.a,d.b,d.d]),e["ɵmpd"](4608,d.g,d.h,[]),e["ɵmpd"](5120,d.i,d.j,[d.f,d.g]),e["ɵmpd"](4608,a["ɵi"],a["ɵi"],[]),e["ɵmpd"](4608,s.a,s.a,[]),e["ɵmpd"](4608,p.a,p.a,[d.i]),e["ɵmpd"](512,r.d,r.d,[]),e["ɵmpd"](1024,e.ErrorHandler,c.p,[]),e["ɵmpd"](1024,e.APP_INITIALIZER,function(l,n){return[c.q(l,n)]},[[2,c.r],[2,e.NgProbeToken]]),e["ɵmpd"](512,e.ApplicationInitStatus,e.ApplicationInitStatus,[[2,e.APP_INITIALIZER]]),e["ɵmpd"](131584,e["ɵe"],e["ɵe"],[e.NgZone,e["ɵConsole"],e.Injector,e.ErrorHandler,e.ComponentFactoryResolver,e.ApplicationInitStatus]),e["ɵmpd"](2048,e.ApplicationRef,null,[e["ɵe"]]),e["ɵmpd"](512,e.ApplicationModule,e.ApplicationModule,[e.ApplicationRef]),e["ɵmpd"](512,c.s,c.s,[[3,c.s]]),e["ɵmpd"](512,d.k,d.k,[]),e["ɵmpd"](512,f.ElasticModule,f.ElasticModule,[]),e["ɵmpd"](512,g.a,g.a,[]),e["ɵmpd"](512,v.a,v.a,[]),e["ɵmpd"](512,a["ɵba"],a["ɵba"],[]),e["ɵmpd"](512,a.FormsModule,a.FormsModule,[]),e["ɵmpd"](512,u.a,u.a,[])])})},0:function(l,n,t){l.exports=t("cDNt")},"13wf":function(l,n,t){"use strict";var e=t("/oeL"),u=t("Q2l4"),i=t("Tkq+"),o=t("sN+D");t.d(n,"a",function(){return r}),t.d(n,"b",function(){return c});var r=function(){function l(l){this.type=l,this.query={text:"",output:"",datetime:null}}return l.prototype.cmp=function(l){return this.type==l.type&&this.text==l.text&&this.query.text==l.query.text&&this.query.output==l.query.output},l.prototype.copy=function(l){this.type=l.type,this.text=l.text,this.query.text=l.query.text,this.query.output=l.query.output},l}(),c=function(){function l(l){this.fsservice=l,this.onModified=new e.EventEmitter,this.CellType=i.a,this.editingText=!1,this.editingQuery=!1}return l.prototype.setDirty=function(l){this.onModified.emit(l)},l.prototype.execute=function(){var l=this;this.cell.query&&this.fsservice.executeQuery(this.cell.query.text).subscribe(function(n){"SUCCESS"==n.status?(l.cell.query.output=t.i(o.a)(JSON.parse(n.payload)),l.cell.query.datetime=new Date):l.cell.query.output=n.message},function(n){console.error("Error on query execution."),l.cell.query.output="Query execution failure. TODO: capture error details."},function(){return console.log("Query executing complete.")})},l.prototype.ngOnChanges=function(l){for(var n in l){var t=l[n];t.isFirstChange()?(this.lastCheckedCell=new r(t.currentValue.type),this.lastCheckedCell.copy(t.currentValue)):this.setDirty(!0)}},l.prototype.ngDoCheck=function(){this.lastCheckedCell.cmp(this.cell)||(this.setDirty(!0),this.lastCheckedCell.copy(this.cell))},l.ctorParameters=function(){return[{type:u.a}]},l}()},"8bWr":function(l,n,t){"use strict";var e=t("h9xS"),u=t("Q2l4");t.d(n,"a",function(){return i});var i=function(){function l(l){this.fsservice=l,this.topics=[],this.listTopics(),this.creatingTopic=!1,this.loadingTopicsList=!0,this.activeTopic=null}return l.prototype.clicked=function(l){var n=this;this.activeTopic=l,this.activeTopic.loaded||(this.activeTopic.loaded=!0,this.fsservice.readTopicFile(this.activeTopic.filename).subscribe(function(l){return n.activeTopic.copyObjProperties(l)},function(l){return console.error("Error on reading topic.")},function(){return console.log("Topic reading complete.")}))},l.prototype.listTopics=function(){var l=this;this.topics=[],this.fsservice.listFiles().subscribe(function(n){n.forEach(function(n){l.topics.push(new e.b(n.title,n.filename))}),l.loadingTopicsList=!1},function(l){return console.error("Topics listing error")},function(){return console.log("Topics listing complete.")})},l.prototype.newTopic=function(){this.fsservice.newTopicFile(this.newTopicTitle).subscribe(function(l){console.log(l)},function(l){return console.error("Topics creating error")},function(){return console.log("Topics creating complete.")}),this.newTopicTitle="",this.creatingTopic=!1,this.listTopics()},l.ctorParameters=function(){return[{type:u.a}]},l}()},Q2l4:function(l,n,t){"use strict";var e=t("CPp0"),u=t("5v8a");t.n(u);t.d(n,"a",function(){return i});var i=function(){function l(l){this.dataservice=l}return l.prototype.listFiles=function(){return this.dataservice.get("http://localhost:5000/list_files").map(function(l){return l.json()})},l.prototype.readTopicFile=function(l){return this.dataservice.get("http://localhost:5000/get/"+l).map(function(l){return l.json()})},l.prototype.saveTopicFile=function(l,n){return this.dataservice.post("http://localhost:5000/save/"+l,n).map(function(l){return l.json()})},l.prototype.newTopicFile=function(l){return this.dataservice.post("http://localhost:5000/create/"+l,"").map(function(l){return l.json()})},l.prototype.executeQuery=function(l){return this.dataservice.post("http://localhost:5000/execute",l).map(function(l){return l.json()})},l.ctorParameters=function(){return[{type:e.i}]},l}()},"Tkq+":function(l,n,t){"use strict";t.d(n,"a",function(){return e});var e;!function(l){l[l.Text=0]="Text",l[l.Query=1]="Query"}(e||(e={}))},Uk5h:function(l,n,t){"use strict";function e(l){return a["ɵvid"](0,[(l()(),a["ɵeld"](0,null,null,1,"button",[["class","btn btn-sm"]],null,[[null,"click"]],function(l,n,t){var e=!0,u=l.component;if("click"===n){e=!1!=(u.creatingTopic=!1)&&e}return e},null,null)),(l()(),a["ɵted"](null,["Cancel"]))],null,null)}function u(l){return a["ɵvid"](0,[(l()(),a["ɵeld"](0,null,null,17,"div",[],null,null,null,null,null)),(l()(),a["ɵted"](null,["\n          "])),(l()(),a["ɵeld"](0,null,null,1,"span",[],null,null,null,null,null)),(l()(),a["ɵted"](null,["Title: "])),(l()(),a["ɵted"](null,["\n          "])),(l()(),a["ɵeld"](0,null,null,5,"input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,t){var e=!0,u=l.component;if("input"===n){e=!1!==a["ɵnov"](l,6)._handleInput(t.target.value)&&e}if("blur"===n){e=!1!==a["ɵnov"](l,6).onTouched()&&e}if("compositionstart"===n){e=!1!==a["ɵnov"](l,6)._compositionStart()&&e}if("compositionend"===n){e=!1!==a["ɵnov"](l,6)._compositionEnd(t.target.value)&&e}if("ngModelChange"===n){e=!1!==(u.newTopicTitle=t)&&e}return e},null,null)),a["ɵdid"](16384,null,0,s.DefaultValueAccessor,[a.Renderer2,a.ElementRef,[2,s.COMPOSITION_BUFFER_MODE]],null,null),a["ɵprd"](1024,null,s.NG_VALUE_ACCESSOR,function(l){return[l]},[s.DefaultValueAccessor]),a["ɵdid"](671744,null,0,s.NgModel,[[8,null],[8,null],[8,null],[2,s.NG_VALUE_ACCESSOR]],{model:[0,"model"]},{update:"ngModelChange"}),a["ɵprd"](2048,null,s.NgControl,null,[s.NgModel]),a["ɵdid"](16384,null,0,s.NgControlStatus,[s.NgControl],null,null),(l()(),a["ɵted"](null,["\n          "])),(l()(),a["ɵeld"](0,null,null,1,"button",[["class","btn btn-sm btn-success"]],null,[[null,"click"]],function(l,n,t){var e=!0,u=l.component;if("click"===n){e=!1!==u.newTopic()&&e}return e},null,null)),(l()(),a["ɵted"](null,["Create Topic"])),(l()(),a["ɵted"](null,["\n          "])),(l()(),a["ɵand"](16777216,null,null,1,null,e)),a["ɵdid"](16384,null,0,p.h,[a.ViewContainerRef,a.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),a["ɵted"](null,["\n        "]))],function(l,n){var t=n.component;l(n,8,0,t.newTopicTitle),l(n,16,0,t.creatingTopic)},function(l,n){l(n,5,0,a["ɵnov"](n,10).ngClassUntouched,a["ɵnov"](n,10).ngClassTouched,a["ɵnov"](n,10).ngClassPristine,a["ɵnov"](n,10).ngClassDirty,a["ɵnov"](n,10).ngClassValid,a["ɵnov"](n,10).ngClassInvalid,a["ɵnov"](n,10).ngClassPending)})}function i(l){return a["ɵvid"](0,[(l()(),a["ɵeld"](0,null,null,1,"button",[["class","btn btn-sm btn-primary"]],null,[[null,"click"]],function(l,n,t){var e=!0,u=l.component;if("click"===n){e=!1!=(u.creatingTopic=!0)&&e}return e},null,null)),(l()(),a["ɵted"](null,["Add Topic"]))],null,null)}function o(l){return a["ɵvid"](0,[(l()(),a["ɵeld"](0,null,null,1,"div",[],null,null,null,null,null)),(l()(),a["ɵted"](null,["\n        Loading topics... please wait.\n      "]))],null,null)}function r(l){return a["ɵvid"](0,[(l()(),a["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),a["ɵted"](null,["\n          "])),(l()(),a["ɵeld"](0,null,null,1,"h5",[["style","background-color:#ddd;border:1px grey dashed; padding: 3px"]],[[2,"modified",null]],[[null,"click"]],function(l,n,t){var e=!0,u=l.component;if("click"===n){e=!1!==u.clicked(l.context.$implicit)&&e}return e},null,null)),(l()(),a["ɵted"](null,["",""])),(l()(),a["ɵted"](null,["\n        "]))],null,function(l,n){l(n,2,0,n.context.$implicit.dirty),l(n,3,0,n.context.$implicit.title)})}function c(l){return a["ɵvid"](0,[(l()(),a["ɵted"](null,["\n  "])),(l()(),a["ɵeld"](0,null,null,13,"div",[["class","row"]],null,null,null,null,null)),(l()(),a["ɵted"](null,["\n    "])),(l()(),a["ɵeld"](0,null,null,10,"div",[["class","col-lg-12"],["style","background-color:#bbb"]],null,null,null,null,null)),(l()(),a["ɵted"](null,["\n      "])),(l()(),a["ɵeld"](0,null,null,7,"div",[["style","text-align:right"]],null,null,null,null,null)),(l()(),a["ɵted"](null,["\n        "])),(l()(),a["ɵand"](16777216,null,null,1,null,u)),a["ɵdid"](16384,null,0,p.h,[a.ViewContainerRef,a.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),a["ɵted"](null,["\n        "])),(l()(),a["ɵand"](16777216,null,null,1,null,i)),a["ɵdid"](16384,null,0,p.h,[a.ViewContainerRef,a.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),a["ɵted"](null,["\n      "])),(l()(),a["ɵted"](null,["\n    "])),(l()(),a["ɵted"](null,["\n  "])),(l()(),a["ɵted"](null,["\n  "])),(l()(),a["ɵeld"](0,null,null,20,"div",[["class","row"]],null,null,null,null,null)),(l()(),a["ɵted"](null,["\n    "])),(l()(),a["ɵeld"](0,null,null,10,"div",[["class","col-lg-3"]],null,null,null,null,null)),(l()(),a["ɵted"](null,["\n      "])),(l()(),a["ɵand"](16777216,null,null,1,null,o)),a["ɵdid"](16384,null,0,p.h,[a.ViewContainerRef,a.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),a["ɵted"](null,["\n      "])),(l()(),a["ɵeld"](0,null,null,4,"div",[["class","topics"]],null,null,null,null,null)),(l()(),a["ɵted"](null,["\n        "])),(l()(),a["ɵand"](16777216,null,null,1,null,r)),a["ɵdid"](802816,null,0,p.i,[a.ViewContainerRef,a.TemplateRef,a.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),a["ɵted"](null,["\n      "])),(l()(),a["ɵted"](null,["\n    "])),(l()(),a["ɵted"](null,["\n    "])),(l()(),a["ɵeld"](0,null,null,5,"div",[["class","col-lg-9"],["id","topic-body"]],null,null,null,null,null)),(l()(),a["ɵted"](null,["\n      "])),(l()(),a["ɵeld"](0,null,null,2,"topic",[],null,null,null,f.a,f.b)),a["ɵdid"](49152,null,0,g.a,[v.a],{topic:[0,"topic"]},null),(l()(),a["ɵted"](null,["\n      "])),(l()(),a["ɵted"](null,["\n    "])),(l()(),a["ɵted"](null,["\n  "])),(l()(),a["ɵted"](null,["\n  "]))],function(l,n){var t=n.component;l(n,8,0,t.creatingTopic),l(n,11,0,!t.creatingTopic),l(n,21,0,t.loadingTopicsList),l(n,26,0,t.topics),l(n,33,0,t.activeTopic)},null)}function d(l){return a["ɵvid"](0,[(l()(),a["ɵeld"](0,null,null,2,"my-app",[],null,null,null,c,C)),a["ɵprd"](512,null,v.a,v.a,[h.i]),a["ɵdid"](49152,null,0,m.a,[v.a],null,null)],null,null)}var a=t("/oeL"),s=t("bm2B"),p=t("qbdv"),f=t("laKy"),g=t("h9xS"),v=t("Q2l4"),m=t("8bWr"),h=t("CPp0");t.d(n,"a",function(){return b});var y=[],C=a["ɵcrt"]({encapsulation:2,styles:y,data:{}}),b=a["ɵccf"]("my-app",m.a,d,{},{},[])},"aR8+":function(l,n,t){"use strict";t.d(n,"a",function(){return e});var e=function(){function l(){}return l}()},cDNt:function(l,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=t("/oeL"),u=t("+h1B"),i=t("fc+i");t.i(e.enableProdMode)(),t.i(i.a)().bootstrapModuleFactory(u.a)},h9xS:function(l,n,t){"use strict";var e=t("13wf"),u=t("Q2l4"),i=t("Tkq+");t.d(n,"b",function(){return o}),t.d(n,"a",function(){return r});var o=function(){function l(l,n){this.loaded=!1,this.title=l,this.filename=n,this.cells=[]}return l.prototype.cleanCells=function(){this.cells=[]},l.prototype.copyObjProperties=function(l){this.title=l.title,this.filename=l.filename,this.cells=l.cells,this.created=l.created,this.modified=l.modified},l.prototype.stringify=function(){return JSON.stringify({title:this.title,filename:this.filename,cells:this.cells,created:this.created,modified:this.modified})},l}(),r=function(){function l(l){this.fsservice=l,this.topic.dirty=!1}return l.prototype.onModified=function(l){this.topic.dirty=!0},l.prototype.addTextCell=function(){this.topic.cells.push(new e.a(i.a.Text))},l.prototype.addQueryCell=function(){this.topic.cells.push(new e.a(i.a.Query))},l.prototype.save=function(l){var n=this;this.topic.modified=new Date,this.fsservice.saveTopicFile(this.topic.filename,this.topic.stringify()).subscribe(function(l){console.log(l)},function(l){return console.error("Error on reading topic.")},function(){n.topic.dirty=!1;var t=l.target||l.srcElement||l.currentTarget;t.innerText="Salvou!",setTimeout(function(){t.innerText="Salvar"},3e3)})},l.ctorParameters=function(){return[{type:u.a}]},l}()},laKy:function(l,n,t){"use strict";function e(l){return r["ɵvid"](0,[(l()(),r["ɵeld"](0,null,null,2,"cell",[],null,[[null,"onModified"]],function(l,n,t){var e=!0,u=l.component;if("onModified"===n){e=!1!==u.onModified(t)&&e}return e},c.a,c.b)),r["ɵdid"](835584,null,0,d.b,[a.a],{cell:[0,"cell"]},{onModified:"onModified"}),(l()(),r["ɵted"](null,["\n          "]))],function(l,n){l(n,1,0,n.context.$implicit)},null)}function u(l){return r["ɵvid"](0,[(l()(),r["ɵeld"](0,null,null,31,"div",[],[[2,"modified",null]],null,null,null,null)),(l()(),r["ɵted"](null,["\n      "])),(l()(),r["ɵeld"](0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),r["ɵted"](null,["",""])),(l()(),r["ɵted"](null,["\n      "])),(l()(),r["ɵeld"](0,null,null,25,"div",[["class","topic-pane container"]],null,null,null,null,null)),(l()(),r["ɵted"](null,["\n        "])),(l()(),r["ɵeld"](0,null,null,4,"div",[["class","cells"]],null,null,null,null,null)),(l()(),r["ɵted"](null,["\n          "])),(l()(),r["ɵand"](16777216,null,null,1,null,e)),r["ɵdid"](802816,null,0,s.i,[r.ViewContainerRef,r.TemplateRef,r.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),r["ɵted"](null,["\n        "])),(l()(),r["ɵted"](null,["\n        "])),(l()(),r["ɵeld"](0,null,null,16,"div",[["class","row"]],null,null,null,null,null)),(l()(),r["ɵted"](null,["\n          "])),(l()(),r["ɵeld"](0,null,null,7,"div",[["class","col-11"]],null,null,null,null,null)),(l()(),r["ɵted"](null,["\n            "])),(l()(),r["ɵeld"](0,null,null,1,"button",[["class","btn btn-sm btn-outline-primary"]],null,[[null,"click"]],function(l,n,t){var e=!0,u=l.component;if("click"===n){e=!1!==u.addTextCell()&&e}return e},null,null)),(l()(),r["ɵted"](null,["Add Text"])),(l()(),r["ɵted"](null,["\n            "])),(l()(),r["ɵeld"](0,null,null,1,"button",[["class","btn btn-sm btn-outline-primary"]],null,[[null,"click"]],function(l,n,t){var e=!0,u=l.component;if("click"===n){e=!1!==u.addQueryCell()&&e}return e},null,null)),(l()(),r["ɵted"](null,["Add Query"])),(l()(),r["ɵted"](null,["\n          "])),(l()(),r["ɵted"](null,["\n          "])),(l()(),r["ɵeld"](0,null,null,4,"div",[["class","col-1"]],null,null,null,null,null)),(l()(),r["ɵted"](null,["\n            "])),(l()(),r["ɵeld"](0,null,null,1,"button",[["class","btn btn-sm btn-success"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,t){var e=!0,u=l.component;if("click"===n){e=!1!==u.save(t)&&e}return e},null,null)),(l()(),r["ɵted"](null,["Save"])),(l()(),r["ɵted"](null,["\n          "])),(l()(),r["ɵted"](null,["\n        "])),(l()(),r["ɵted"](null,["\n      "])),(l()(),r["ɵted"](null,["\n    "]))],function(l,n){l(n,10,0,n.component.topic.cells)},function(l,n){var t=n.component;l(n,0,0,t.topic.dirty),l(n,3,0,t.topic.title),l(n,26,0,!t.topic.dirty)})}function i(l){return r["ɵvid"](0,[(l()(),r["ɵted"](null,["\n    "])),(l()(),r["ɵand"](16777216,null,null,1,null,u)),r["ɵdid"](16384,null,0,s.h,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),r["ɵted"](null,["\n  "]))],function(l,n){l(n,2,0,n.component.topic)},null)}function o(l){return r["ɵvid"](0,[(l()(),r["ɵeld"](0,null,null,1,"topic",[],null,null,null,i,g)),r["ɵdid"](49152,null,0,p.a,[a.a],null,null)],null,null)}var r=t("/oeL"),c=t("rQ/J"),d=t("13wf"),a=t("Q2l4"),s=t("qbdv"),p=t("h9xS");t.d(n,"b",function(){return g}),n.a=i;var f=[],g=r["ɵcrt"]({encapsulation:2,styles:f,data:{}});r["ɵccf"]("topic",p.a,o,{topic:"topic"},{},[])},qtrl:function(l,n){function t(l){throw new Error("Cannot find module '"+l+"'.")}t.keys=function(){return[]},t.resolve=t,l.exports=t,t.id="qtrl"},"rQ/J":function(l,n,t){"use strict";function e(l){return p["ɵvid"](0,[(l()(),p["ɵeld"](0,null,null,1,"pre",[["class","editable"],["placeholder",""]],null,null,null,null,null)),(l()(),p["ɵted"](null,["",""]))],null,function(l,n){l(n,1,0,n.component.cell.text||"Text")})}function u(l){return p["ɵvid"](0,[(l()(),p["ɵeld"](0,null,null,7,"textarea",[["NgControlDefault",""],["cols",""],["fz-elastic",""],["rows",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"blur"],[null,"ngModelChange"],[null,"input"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,t){var e=!0,u=l.component;if("input"===n){e=!1!==p["ɵnov"](l,1)._handleInput(t.target.value)&&e}if("blur"===n){e=!1!==p["ɵnov"](l,1).onTouched()&&e}if("compositionstart"===n){e=!1!==p["ɵnov"](l,1)._compositionStart()&&e}if("compositionend"===n){e=!1!==p["ɵnov"](l,1)._compositionEnd(t.target.value)&&e}if("input"===n){e=!1!==p["ɵnov"](l,4).onInput()&&e}if("blur"===n){e=!1!=(u.editingText=!1)&&e}if("ngModelChange"===n){e=!1!==(u.cell.text=t)&&e}return e},null,null)),p["ɵdid"](16384,null,0,f.DefaultValueAccessor,[p.Renderer2,p.ElementRef,[2,f.COMPOSITION_BUFFER_MODE]],null,null),p["ɵprd"](1024,null,f.NG_VALUE_ACCESSOR,function(l){return[l]},[f.DefaultValueAccessor]),p["ɵdid"](671744,null,0,f.NgModel,[[8,null],[8,null],[8,null],[2,f.NG_VALUE_ACCESSOR]],{model:[0,"model"]},{update:"ngModelChange"}),p["ɵdid"](4210688,null,0,g.ElasticDirective,[p.ElementRef,p.NgZone,[2,f.NgModel]],null,null),p["ɵprd"](2048,null,f.NgControl,null,[f.NgModel]),p["ɵdid"](16384,null,0,f.NgControlStatus,[f.NgControl],null,null),(l()(),p["ɵted"](null,["",""]))],function(l,n){l(n,3,0,n.component.cell.text)},function(l,n){var t=n.component;l(n,0,0,p["ɵnov"](n,6).ngClassUntouched,p["ɵnov"](n,6).ngClassTouched,p["ɵnov"](n,6).ngClassPristine,p["ɵnov"](n,6).ngClassDirty,p["ɵnov"](n,6).ngClassValid,p["ɵnov"](n,6).ngClassInvalid,p["ɵnov"](n,6).ngClassPending),l(n,7,0,t.cell.text)})}function i(l){return p["ɵvid"](0,[(l()(),p["ɵeld"](0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(l()(),p["ɵted"](null,["\n      "])),(l()(),p["ɵeld"](0,null,null,7,"div",[["class","col-12"]],null,[[null,"dblclick"]],function(l,n,t){var e=!0,u=l.component;if("dblclick"===n){e=!1!=(u.editingText=!0)&&e}return e},null,null)),(l()(),p["ɵted"](null,["\n        "])),(l()(),p["ɵand"](16777216,null,null,1,null,e)),p["ɵdid"](16384,null,0,v.h,[p.ViewContainerRef,p.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),p["ɵted"](null,["\n        "])),(l()(),p["ɵand"](16777216,null,null,1,null,u)),p["ɵdid"](16384,null,0,v.h,[p.ViewContainerRef,p.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),p["ɵted"](null,["\n      "])),(l()(),p["ɵted"](null,["\n    "]))],function(l,n){var t=n.component;l(n,5,0,!t.editingText),l(n,8,0,t.editingText)},null)}function o(l){return p["ɵvid"](0,[(l()(),p["ɵeld"](0,null,null,1,"pre",[["class","query"],["placeholder",""]],null,null,null,null,null)),(l()(),p["ɵted"](null,["",""]))],null,function(l,n){l(n,1,0,n.component.cell.query.text||"Query")})}function r(l){return p["ɵvid"](0,[(l()(),p["ɵeld"](0,null,null,7,"textarea",[["NgControlDefault",""],["class","txt-query"],["cols",""],["fz-elastic",""],["rows",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"blur"],[null,"ngModelChange"],[null,"input"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,t){var e=!0,u=l.component;if("input"===n){e=!1!==p["ɵnov"](l,1)._handleInput(t.target.value)&&e}if("blur"===n){e=!1!==p["ɵnov"](l,1).onTouched()&&e}if("compositionstart"===n){e=!1!==p["ɵnov"](l,1)._compositionStart()&&e}if("compositionend"===n){e=!1!==p["ɵnov"](l,1)._compositionEnd(t.target.value)&&e}if("input"===n){e=!1!==p["ɵnov"](l,4).onInput()&&e}if("blur"===n){e=!1!=(u.editingQuery=!1)&&e}if("ngModelChange"===n){e=!1!==(u.cell.query.text=t)&&e}return e},null,null)),p["ɵdid"](16384,null,0,f.DefaultValueAccessor,[p.Renderer2,p.ElementRef,[2,f.COMPOSITION_BUFFER_MODE]],null,null),p["ɵprd"](1024,null,f.NG_VALUE_ACCESSOR,function(l){return[l]},[f.DefaultValueAccessor]),p["ɵdid"](671744,null,0,f.NgModel,[[8,null],[8,null],[8,null],[2,f.NG_VALUE_ACCESSOR]],{model:[0,"model"]},{update:"ngModelChange"}),p["ɵdid"](4210688,null,0,g.ElasticDirective,[p.ElementRef,p.NgZone,[2,f.NgModel]],null,null),p["ɵprd"](2048,null,f.NgControl,null,[f.NgModel]),p["ɵdid"](16384,null,0,f.NgControlStatus,[f.NgControl],null,null),(l()(),p["ɵted"](null,["",""]))],function(l,n){l(n,3,0,n.component.cell.query.text)},function(l,n){var t=n.component;l(n,0,0,p["ɵnov"](n,6).ngClassUntouched,p["ɵnov"](n,6).ngClassTouched,p["ɵnov"](n,6).ngClassPristine,p["ɵnov"](n,6).ngClassDirty,p["ɵnov"](n,6).ngClassValid,p["ɵnov"](n,6).ngClassInvalid,p["ɵnov"](n,6).ngClassPending),l(n,7,0,t.cell.query.text)})}function c(l){return p["ɵvid"](0,[(l()(),p["ɵeld"](0,null,null,0,"div",[["class","cell-output"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){l(n,0,0,n.component.cell.query.output)})}function d(l){return p["ɵvid"](0,[(l()(),p["ɵeld"](0,null,null,19,"div",[["class","row cell-query"]],null,null,null,null,null)),(l()(),p["ɵted"](null,["\n      "])),(l()(),p["ɵeld"](0,null,null,10,"div",[["class","col-11"]],null,[[null,"dblclick"]],function(l,n,t){var e=!0,u=l.component;if("dblclick"===n){e=!1!=(u.editingQuery=!0)&&e}return e},null,null)),(l()(),p["ɵted"](null,["\n        "])),(l()(),p["ɵand"](16777216,null,null,1,null,o)),p["ɵdid"](16384,null,0,v.h,[p.ViewContainerRef,p.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),p["ɵted"](null,["\n        "])),(l()(),p["ɵand"](16777216,null,null,1,null,r)),p["ɵdid"](16384,null,0,v.h,[p.ViewContainerRef,p.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),p["ɵted"](null,["\n        "])),(l()(),p["ɵand"](16777216,null,null,1,null,c)),p["ɵdid"](16384,null,0,v.h,[p.ViewContainerRef,p.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),p["ɵted"](null,["\n      "])),(l()(),p["ɵted"](null,["\n      "])),(l()(),p["ɵeld"](0,null,null,4,"div",[["class","col-1"]],null,null,null,null,null)),(l()(),p["ɵted"](null,["\n        "])),(l()(),p["ɵeld"](0,null,null,1,"button",[["class","btn-execute btn btn-sm btn-secundary"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,t){var e=!0,u=l.component;if("click"===n){e=!1!==u.execute()&&e}return e},null,null)),(l()(),p["ɵted"](null,["Go!"])),(l()(),p["ɵted"](null,["\n      "])),(l()(),p["ɵted"](null,["\n    "]))],function(l,n){var t=n.component;l(n,5,0,!t.editingQuery),l(n,8,0,t.editingQuery),l(n,11,0,t.cell.query.output)},function(l,n){l(n,16,0,!n.component.cell.query.text)})}function a(l){return p["ɵvid"](0,[(l()(),p["ɵted"](null,["\n    "])),(l()(),p["ɵand"](16777216,null,null,1,null,i)),p["ɵdid"](16384,null,0,v.h,[p.ViewContainerRef,p.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),p["ɵted"](null,["\n    "])),(l()(),p["ɵand"](16777216,null,null,1,null,d)),p["ɵdid"](16384,null,0,v.h,[p.ViewContainerRef,p.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),p["ɵted"](null,["\n  "]))],function(l,n){var t=n.component;l(n,2,0,t.cell.type==t.CellType.Text),l(n,5,0,t.cell.type==t.CellType.Query)},null)}function s(l){return p["ɵvid"](0,[(l()(),p["ɵeld"](0,null,null,1,"cell",[],null,null,null,a,C)),p["ɵdid"](835584,null,0,m.b,[h.a],null,null)],function(l,n){l(n,1,0)},null)}var p=t("/oeL"),f=t("bm2B"),g=t("qDku"),v=(t.n(g),t("qbdv")),m=t("13wf"),h=t("Q2l4");t.d(n,"b",function(){return C}),n.a=a;var y=[],C=p["ɵcrt"]({encapsulation:2,styles:y,data:{}});p["ɵccf"]("cell",m.b,s,{cell:"cell"},{onModified:"onModified"},[])},"sN+D":function(l,n,t){"use strict";function e(l){var n;n=[];for(var t='<table class="table">',e="",u=0;u<l.length;u++){var i=l[u];for(var o in i)n.some(function(l){return l==o})||(n.push(o),e+="<th>"+o+"</th>")}t+="<tr>"+e+"</tr>";for(var u=0;u<l.length;u++){for(var r="",c=0;c<n.length;c++){var d=l[u][n[c]];null==d&&(d=""),r+="<td>"+d+"</td>"}t+="<tr>"+r+"</tr>"}return t+="</table>"}n.a=e}},[0]);