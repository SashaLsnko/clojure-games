// Compiled by ClojureScript 1.10.520 {}
goog.provide('clojure_games.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"move-water","move-water",870224874),(function (db,p__23461){
var vec__23462 = p__23461;
var _ = cljs.core.nth.call(null,vec__23462,(0),null);
var from_id = cljs.core.nth.call(null,vec__23462,(1),null);
var to_id = cljs.core.nth.call(null,vec__23462,(2),null);
if(cljs.core._EQ_.call(null,from_id,to_id)){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"from-id","from-id",-106962526),null),new cljs.core.Keyword(null,"to-id","to-id",1021626465),null);
} else {
var from_water = cljs.core.get.call(null,new cljs.core.Keyword(null,"water","water",-824098213).cljs$core$IFn$_invoke$arity$1(db),from_id);
var to_water = cljs.core.get.call(null,new cljs.core.Keyword(null,"water","water",-824098213).cljs$core$IFn$_invoke$arity$1(db),to_id);
var space_in_to = (to_id - to_water);
var moving = (((from_water > space_in_to))?space_in_to:from_water);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"water","water",-824098213),from_id], null),(from_water - moving)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"water","water",-824098213),to_id], null),(to_water + moving)),new cljs.core.Keyword(null,"from-id","from-id",-106962526),null),new cljs.core.Keyword(null,"to-id","to-id",1021626465),null);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"init-water","init-water",-1298597811),(function (db,_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"water","water",-824098213),(3)], null),(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"water","water",-824098213),(5)], null),(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"water","water",-824098213),(8)], null),(8));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"get-water-at-id","get-water-at-id",-1232973012),(function (db,p__23465){
var vec__23466 = p__23465;
var _ = cljs.core.nth.call(null,vec__23466,(0),null);
var id = cljs.core.nth.call(null,vec__23466,(1),null);
return cljs.core.get.call(null,new cljs.core.Keyword(null,"water","water",-824098213).cljs$core$IFn$_invoke$arity$1(db),id);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"select-from","select-from",1622484194),(function (db,p__23469){
var vec__23470 = p__23469;
var _ = cljs.core.nth.call(null,vec__23470,(0),null);
var from_id = cljs.core.nth.call(null,vec__23470,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"from-id","from-id",-106962526),from_id);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"get-from","get-from",600988759),(function (db,_){
return new cljs.core.Keyword(null,"from-id","from-id",-106962526).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"select-to","select-to",1495983678),(function (db,p__23473){
var vec__23474 = p__23473;
var _ = cljs.core.nth.call(null,vec__23474,(0),null);
var to_id = cljs.core.nth.call(null,vec__23474,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"to-id","to-id",1021626465),to_id);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"get-to","get-to",-1534725411),(function (db,_){
return new cljs.core.Keyword(null,"to-id","to-id",1021626465).cljs$core$IFn$_invoke$arity$1(db);
}));
clojure_games.core.select_jar = (function clojure_games$core$select_jar(event,id){
event.stopPropagation();

var from = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-from","get-from",600988759)], null)));
if(cljs.core.truth_(from)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-water","move-water",870224874),from,id], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-from","select-from",1622484194),id], null));
}
});
clojure_games.core.get_style = (function clojure_games$core$get_style(id){
var from = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-from","get-from",600988759)], null)));
if(cljs.core._EQ_.call(null,id,from)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"3px solid pink",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"50%"], null);
} else {
return null;
}
});
clojure_games.core.litre_of_water = (function clojure_games$core$litre_of_water(id,water){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.water","div.water",-2134674241),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"style","style",-496642736),(((id < water))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"lightblue"], null):null)], null)], null);
});
clojure_games.core.jug = (function clojure_games$core$jug(id){
var water = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-water-at-id","get-water-at-id",-1232973012),id], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jug","div.jug",-1332443762),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (water){
return (function (e){
return clojure_games.core.select_jar.call(null,e,id);
});})(water))
], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jug-info","div.jug-info",-1603049368),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),clojure_games.core.get_style.call(null,id)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(water),"/",id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.waters","div.waters",1908433845),(function (){var iter__4523__auto__ = ((function (water){
return (function clojure_games$core$jug_$_iter__23477(s__23478){
return (new cljs.core.LazySeq(null,((function (water){
return (function (){
var s__23478__$1 = s__23478;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__23478__$1);
if(temp__5720__auto__){
var s__23478__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23478__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__23478__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__23480 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__23479 = (0);
while(true){
if((i__23479 < size__4522__auto__)){
var w = cljs.core._nth.call(null,c__4521__auto__,i__23479);
cljs.core.chunk_append.call(null,b__23480,clojure_games.core.litre_of_water.call(null,w,water));

var G__23481 = (i__23479 + (1));
i__23479 = G__23481;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23480),clojure_games$core$jug_$_iter__23477.call(null,cljs.core.chunk_rest.call(null,s__23478__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23480),null);
}
} else {
var w = cljs.core.first.call(null,s__23478__$2);
return cljs.core.cons.call(null,clojure_games.core.litre_of_water.call(null,w,water),clojure_games$core$jug_$_iter__23477.call(null,cljs.core.rest.call(null,s__23478__$2)));
}
} else {
return null;
}
break;
}
});})(water))
,null,null));
});})(water))
;
return iter__4523__auto__.call(null,cljs.core.reverse.call(null,cljs.core.range.call(null,id)));
})()], null)], null);
});
clojure_games.core.reset_clicks = (function clojure_games$core$reset_clicks(){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-to","select-to",1495983678),null], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-from","select-from",1622484194),null], null));
});
clojure_games.core.home_page = (function clojure_games$core$home_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return clojure_games.core.reset_clicks.call(null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"3 Jugs puzzle"], null),(function (){var water_at_5 = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-water-at-id","get-water-at-id",-1232973012),(5)], null)));
var water_at_8 = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-water-at-id","get-water-at-id",-1232973012),(8)], null)));
if(((cljs.core._EQ_.call(null,(4),water_at_5)) || (cljs.core._EQ_.call(null,(4),water_at_8)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.win-screen","div.win-screen",-1377895884),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.blinking","span.blinking",-1847049162),"Congratulations! You won!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"https://media.giphy.com/media/yz76Da5VvYK4w/giphy.gif"], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.game-intro","p.game-intro",533760975),"There are three glasses on the table - 3, 5, and 8 oz. The first two are empty,\n        the last contains 8 oz of water. By pouring water from one glass to another make at\n        least one of them contain exactly 4 oz of water"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#jugs-container","div#jugs-container",647360026),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_games.core.jug,(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_games.core.jug,(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_games.core.jug,(8)], null)], null)], null);
}
})()], null);
});
clojure_games.core.mount_root = (function clojure_games$core$mount_root(){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-water","init-water",-1298597811)], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_games.core.home_page], null),document.getElementById("app"));
});
clojure_games.core.init_BANG_ = (function clojure_games$core$init_BANG_(){
return clojure_games.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1572229099909
