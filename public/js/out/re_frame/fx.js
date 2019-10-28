// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__23116 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23117 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23117;

try{try{var seq__23118 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23119 = null;
var count__23120 = (0);
var i__23121 = (0);
while(true){
if((i__23121 < count__23120)){
var vec__23128 = cljs.core._nth.call(null,chunk__23119,i__23121);
var effect_key = cljs.core.nth.call(null,vec__23128,(0),null);
var effect_value = cljs.core.nth.call(null,vec__23128,(1),null);
var temp__5718__auto___23150 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___23150)){
var effect_fn_23151 = temp__5718__auto___23150;
effect_fn_23151.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__23152 = seq__23118;
var G__23153 = chunk__23119;
var G__23154 = count__23120;
var G__23155 = (i__23121 + (1));
seq__23118 = G__23152;
chunk__23119 = G__23153;
count__23120 = G__23154;
i__23121 = G__23155;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__23118);
if(temp__5720__auto__){
var seq__23118__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23118__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__23118__$1);
var G__23156 = cljs.core.chunk_rest.call(null,seq__23118__$1);
var G__23157 = c__4550__auto__;
var G__23158 = cljs.core.count.call(null,c__4550__auto__);
var G__23159 = (0);
seq__23118 = G__23156;
chunk__23119 = G__23157;
count__23120 = G__23158;
i__23121 = G__23159;
continue;
} else {
var vec__23131 = cljs.core.first.call(null,seq__23118__$1);
var effect_key = cljs.core.nth.call(null,vec__23131,(0),null);
var effect_value = cljs.core.nth.call(null,vec__23131,(1),null);
var temp__5718__auto___23160 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___23160)){
var effect_fn_23161 = temp__5718__auto___23160;
effect_fn_23161.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__23162 = cljs.core.next.call(null,seq__23118__$1);
var G__23163 = null;
var G__23164 = (0);
var G__23165 = (0);
seq__23118 = G__23162;
chunk__23119 = G__23163;
count__23120 = G__23164;
i__23121 = G__23165;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__22945__auto___23166 = re_frame.interop.now.call(null);
var duration__22946__auto___23167 = (end__22945__auto___23166 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22946__auto___23167,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__22945__auto___23166);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23116;
}} else {
var seq__23134 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23135 = null;
var count__23136 = (0);
var i__23137 = (0);
while(true){
if((i__23137 < count__23136)){
var vec__23144 = cljs.core._nth.call(null,chunk__23135,i__23137);
var effect_key = cljs.core.nth.call(null,vec__23144,(0),null);
var effect_value = cljs.core.nth.call(null,vec__23144,(1),null);
var temp__5718__auto___23168 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___23168)){
var effect_fn_23169 = temp__5718__auto___23168;
effect_fn_23169.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__23170 = seq__23134;
var G__23171 = chunk__23135;
var G__23172 = count__23136;
var G__23173 = (i__23137 + (1));
seq__23134 = G__23170;
chunk__23135 = G__23171;
count__23136 = G__23172;
i__23137 = G__23173;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__23134);
if(temp__5720__auto__){
var seq__23134__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23134__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__23134__$1);
var G__23174 = cljs.core.chunk_rest.call(null,seq__23134__$1);
var G__23175 = c__4550__auto__;
var G__23176 = cljs.core.count.call(null,c__4550__auto__);
var G__23177 = (0);
seq__23134 = G__23174;
chunk__23135 = G__23175;
count__23136 = G__23176;
i__23137 = G__23177;
continue;
} else {
var vec__23147 = cljs.core.first.call(null,seq__23134__$1);
var effect_key = cljs.core.nth.call(null,vec__23147,(0),null);
var effect_value = cljs.core.nth.call(null,vec__23147,(1),null);
var temp__5718__auto___23178 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___23178)){
var effect_fn_23179 = temp__5718__auto___23178;
effect_fn_23179.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__23180 = cljs.core.next.call(null,seq__23134__$1);
var G__23181 = null;
var G__23182 = (0);
var G__23183 = (0);
seq__23134 = G__23180;
chunk__23135 = G__23181;
count__23136 = G__23182;
i__23137 = G__23183;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__23184 = cljs.core.seq.call(null,value);
var chunk__23185 = null;
var count__23186 = (0);
var i__23187 = (0);
while(true){
if((i__23187 < count__23186)){
var map__23192 = cljs.core._nth.call(null,chunk__23185,i__23187);
var map__23192__$1 = (((((!((map__23192 == null))))?(((((map__23192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23192):map__23192);
var effect = map__23192__$1;
var ms = cljs.core.get.call(null,map__23192__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__23192__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__23184,chunk__23185,count__23186,i__23187,map__23192,map__23192__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__23184,chunk__23185,count__23186,i__23187,map__23192,map__23192__$1,effect,ms,dispatch))
,ms);
}


var G__23196 = seq__23184;
var G__23197 = chunk__23185;
var G__23198 = count__23186;
var G__23199 = (i__23187 + (1));
seq__23184 = G__23196;
chunk__23185 = G__23197;
count__23186 = G__23198;
i__23187 = G__23199;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__23184);
if(temp__5720__auto__){
var seq__23184__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23184__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__23184__$1);
var G__23200 = cljs.core.chunk_rest.call(null,seq__23184__$1);
var G__23201 = c__4550__auto__;
var G__23202 = cljs.core.count.call(null,c__4550__auto__);
var G__23203 = (0);
seq__23184 = G__23200;
chunk__23185 = G__23201;
count__23186 = G__23202;
i__23187 = G__23203;
continue;
} else {
var map__23194 = cljs.core.first.call(null,seq__23184__$1);
var map__23194__$1 = (((((!((map__23194 == null))))?(((((map__23194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23194):map__23194);
var effect = map__23194__$1;
var ms = cljs.core.get.call(null,map__23194__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__23194__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__23184,chunk__23185,count__23186,i__23187,map__23194,map__23194__$1,effect,ms,dispatch,seq__23184__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__23184,chunk__23185,count__23186,i__23187,map__23194,map__23194__$1,effect,ms,dispatch,seq__23184__$1,temp__5720__auto__))
,ms);
}


var G__23204 = cljs.core.next.call(null,seq__23184__$1);
var G__23205 = null;
var G__23206 = (0);
var G__23207 = (0);
seq__23184 = G__23204;
chunk__23185 = G__23205;
count__23186 = G__23206;
i__23187 = G__23207;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__23208 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__23209 = null;
var count__23210 = (0);
var i__23211 = (0);
while(true){
if((i__23211 < count__23210)){
var event = cljs.core._nth.call(null,chunk__23209,i__23211);
re_frame.router.dispatch.call(null,event);


var G__23212 = seq__23208;
var G__23213 = chunk__23209;
var G__23214 = count__23210;
var G__23215 = (i__23211 + (1));
seq__23208 = G__23212;
chunk__23209 = G__23213;
count__23210 = G__23214;
i__23211 = G__23215;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__23208);
if(temp__5720__auto__){
var seq__23208__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23208__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__23208__$1);
var G__23216 = cljs.core.chunk_rest.call(null,seq__23208__$1);
var G__23217 = c__4550__auto__;
var G__23218 = cljs.core.count.call(null,c__4550__auto__);
var G__23219 = (0);
seq__23208 = G__23216;
chunk__23209 = G__23217;
count__23210 = G__23218;
i__23211 = G__23219;
continue;
} else {
var event = cljs.core.first.call(null,seq__23208__$1);
re_frame.router.dispatch.call(null,event);


var G__23220 = cljs.core.next.call(null,seq__23208__$1);
var G__23221 = null;
var G__23222 = (0);
var G__23223 = (0);
seq__23208 = G__23220;
chunk__23209 = G__23221;
count__23210 = G__23222;
i__23211 = G__23223;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__23224 = cljs.core.seq.call(null,value);
var chunk__23225 = null;
var count__23226 = (0);
var i__23227 = (0);
while(true){
if((i__23227 < count__23226)){
var event = cljs.core._nth.call(null,chunk__23225,i__23227);
clear_event.call(null,event);


var G__23228 = seq__23224;
var G__23229 = chunk__23225;
var G__23230 = count__23226;
var G__23231 = (i__23227 + (1));
seq__23224 = G__23228;
chunk__23225 = G__23229;
count__23226 = G__23230;
i__23227 = G__23231;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__23224);
if(temp__5720__auto__){
var seq__23224__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23224__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__23224__$1);
var G__23232 = cljs.core.chunk_rest.call(null,seq__23224__$1);
var G__23233 = c__4550__auto__;
var G__23234 = cljs.core.count.call(null,c__4550__auto__);
var G__23235 = (0);
seq__23224 = G__23232;
chunk__23225 = G__23233;
count__23226 = G__23234;
i__23227 = G__23235;
continue;
} else {
var event = cljs.core.first.call(null,seq__23224__$1);
clear_event.call(null,event);


var G__23236 = cljs.core.next.call(null,seq__23224__$1);
var G__23237 = null;
var G__23238 = (0);
var G__23239 = (0);
seq__23224 = G__23236;
chunk__23225 = G__23237;
count__23226 = G__23238;
i__23227 = G__23239;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1572229099391
