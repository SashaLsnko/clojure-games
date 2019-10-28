// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__22967){
var map__22968 = p__22967;
var map__22968__$1 = (((((!((map__22968 == null))))?(((((map__22968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22968):map__22968);
var operation = cljs.core.get.call(null,map__22968__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__22968__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__22968__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__22968__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__22970_22990 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__22971_22991 = null;
var count__22972_22992 = (0);
var i__22973_22993 = (0);
while(true){
if((i__22973_22993 < count__22972_22992)){
var vec__22982_22994 = cljs.core._nth.call(null,chunk__22971_22991,i__22973_22993);
var k_22995 = cljs.core.nth.call(null,vec__22982_22994,(0),null);
var cb_22996 = cljs.core.nth.call(null,vec__22982_22994,(1),null);
try{cb_22996.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e22985){var e_22997 = e22985;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_22995,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_22997);
}

var G__22998 = seq__22970_22990;
var G__22999 = chunk__22971_22991;
var G__23000 = count__22972_22992;
var G__23001 = (i__22973_22993 + (1));
seq__22970_22990 = G__22998;
chunk__22971_22991 = G__22999;
count__22972_22992 = G__23000;
i__22973_22993 = G__23001;
continue;
} else {
var temp__5720__auto___23002 = cljs.core.seq.call(null,seq__22970_22990);
if(temp__5720__auto___23002){
var seq__22970_23003__$1 = temp__5720__auto___23002;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22970_23003__$1)){
var c__4550__auto___23004 = cljs.core.chunk_first.call(null,seq__22970_23003__$1);
var G__23005 = cljs.core.chunk_rest.call(null,seq__22970_23003__$1);
var G__23006 = c__4550__auto___23004;
var G__23007 = cljs.core.count.call(null,c__4550__auto___23004);
var G__23008 = (0);
seq__22970_22990 = G__23005;
chunk__22971_22991 = G__23006;
count__22972_22992 = G__23007;
i__22973_22993 = G__23008;
continue;
} else {
var vec__22986_23009 = cljs.core.first.call(null,seq__22970_23003__$1);
var k_23010 = cljs.core.nth.call(null,vec__22986_23009,(0),null);
var cb_23011 = cljs.core.nth.call(null,vec__22986_23009,(1),null);
try{cb_23011.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e22989){var e_23012 = e22989;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_23010,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_23012);
}

var G__23013 = cljs.core.next.call(null,seq__22970_23003__$1);
var G__23014 = null;
var G__23015 = (0);
var G__23016 = (0);
seq__22970_22990 = G__23013;
chunk__22971_22991 = G__23014;
count__22972_22992 = G__23015;
i__22973_22993 = G__23016;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (10)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map?rel=1572229098907
