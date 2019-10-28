// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.18";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e32312){if((e32312 instanceof Error)){
var e = e32312;
return "Error: Unable to stringify";
} else {
throw e32312;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__32315 = arguments.length;
switch (G__32315) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__32313_SHARP_){
if(typeof p1__32313_SHARP_ === 'string'){
return p1__32313_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__32313_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___32318 = arguments.length;
var i__4731__auto___32319 = (0);
while(true){
if((i__4731__auto___32319 < len__4730__auto___32318)){
args__4736__auto__.push((arguments[i__4731__auto___32319]));

var G__32320 = (i__4731__auto___32319 + (1));
i__4731__auto___32319 = G__32320;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq32317){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32317));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___32322 = arguments.length;
var i__4731__auto___32323 = (0);
while(true){
if((i__4731__auto___32323 < len__4730__auto___32322)){
args__4736__auto__.push((arguments[i__4731__auto___32323]));

var G__32324 = (i__4731__auto___32323 + (1));
i__4731__auto___32323 = G__32324;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq32321){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32321));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__32325){
var map__32326 = p__32325;
var map__32326__$1 = (((((!((map__32326 == null))))?(((((map__32326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32326):map__32326);
var message = cljs.core.get.call(null,map__32326__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__32326__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28320__auto___32405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28320__auto___32405,ch){
return (function (){
var f__28321__auto__ = (function (){var switch__28225__auto__ = ((function (c__28320__auto___32405,ch){
return (function (state_32377){
var state_val_32378 = (state_32377[(1)]);
if((state_val_32378 === (7))){
var inst_32373 = (state_32377[(2)]);
var state_32377__$1 = state_32377;
var statearr_32379_32406 = state_32377__$1;
(statearr_32379_32406[(2)] = inst_32373);

(statearr_32379_32406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32378 === (1))){
var state_32377__$1 = state_32377;
var statearr_32380_32407 = state_32377__$1;
(statearr_32380_32407[(2)] = null);

(statearr_32380_32407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32378 === (4))){
var inst_32330 = (state_32377[(7)]);
var inst_32330__$1 = (state_32377[(2)]);
var state_32377__$1 = (function (){var statearr_32381 = state_32377;
(statearr_32381[(7)] = inst_32330__$1);

return statearr_32381;
})();
if(cljs.core.truth_(inst_32330__$1)){
var statearr_32382_32408 = state_32377__$1;
(statearr_32382_32408[(1)] = (5));

} else {
var statearr_32383_32409 = state_32377__$1;
(statearr_32383_32409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32378 === (15))){
var inst_32337 = (state_32377[(8)]);
var inst_32352 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32337);
var inst_32353 = cljs.core.first.call(null,inst_32352);
var inst_32354 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_32353);
var inst_32355 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32354)].join('');
var inst_32356 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_32355);
var state_32377__$1 = state_32377;
var statearr_32384_32410 = state_32377__$1;
(statearr_32384_32410[(2)] = inst_32356);

(statearr_32384_32410[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32378 === (13))){
var inst_32361 = (state_32377[(2)]);
var state_32377__$1 = state_32377;
var statearr_32385_32411 = state_32377__$1;
(statearr_32385_32411[(2)] = inst_32361);

(statearr_32385_32411[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32378 === (6))){
var state_32377__$1 = state_32377;
var statearr_32386_32412 = state_32377__$1;
(statearr_32386_32412[(2)] = null);

(statearr_32386_32412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32378 === (17))){
var inst_32359 = (state_32377[(2)]);
var state_32377__$1 = state_32377;
var statearr_32387_32413 = state_32377__$1;
(statearr_32387_32413[(2)] = inst_32359);

(statearr_32387_32413[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32378 === (3))){
var inst_32375 = (state_32377[(2)]);
var state_32377__$1 = state_32377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32377__$1,inst_32375);
} else {
if((state_val_32378 === (12))){
var inst_32336 = (state_32377[(9)]);
var inst_32350 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_32336,opts);
var state_32377__$1 = state_32377;
if(inst_32350){
var statearr_32388_32414 = state_32377__$1;
(statearr_32388_32414[(1)] = (15));

} else {
var statearr_32389_32415 = state_32377__$1;
(statearr_32389_32415[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32378 === (2))){
var state_32377__$1 = state_32377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32377__$1,(4),ch);
} else {
if((state_val_32378 === (11))){
var inst_32337 = (state_32377[(8)]);
var inst_32342 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32343 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_32337);
var inst_32344 = cljs.core.async.timeout.call(null,(1000));
var inst_32345 = [inst_32343,inst_32344];
var inst_32346 = (new cljs.core.PersistentVector(null,2,(5),inst_32342,inst_32345,null));
var state_32377__$1 = state_32377;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32377__$1,(14),inst_32346);
} else {
if((state_val_32378 === (9))){
var inst_32337 = (state_32377[(8)]);
var inst_32363 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_32364 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32337);
var inst_32365 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32364);
var inst_32366 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32365)].join('');
var inst_32367 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_32366);
var state_32377__$1 = (function (){var statearr_32390 = state_32377;
(statearr_32390[(10)] = inst_32363);

return statearr_32390;
})();
var statearr_32391_32416 = state_32377__$1;
(statearr_32391_32416[(2)] = inst_32367);

(statearr_32391_32416[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32378 === (5))){
var inst_32330 = (state_32377[(7)]);
var inst_32332 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_32333 = (new cljs.core.PersistentArrayMap(null,2,inst_32332,null));
var inst_32334 = (new cljs.core.PersistentHashSet(null,inst_32333,null));
var inst_32335 = figwheel.client.focus_msgs.call(null,inst_32334,inst_32330);
var inst_32336 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_32335);
var inst_32337 = cljs.core.first.call(null,inst_32335);
var inst_32338 = figwheel.client.autoload_QMARK_.call(null);
var state_32377__$1 = (function (){var statearr_32392 = state_32377;
(statearr_32392[(8)] = inst_32337);

(statearr_32392[(9)] = inst_32336);

return statearr_32392;
})();
if(cljs.core.truth_(inst_32338)){
var statearr_32393_32417 = state_32377__$1;
(statearr_32393_32417[(1)] = (8));

} else {
var statearr_32394_32418 = state_32377__$1;
(statearr_32394_32418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32378 === (14))){
var inst_32348 = (state_32377[(2)]);
var state_32377__$1 = state_32377;
var statearr_32395_32419 = state_32377__$1;
(statearr_32395_32419[(2)] = inst_32348);

(statearr_32395_32419[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32378 === (16))){
var state_32377__$1 = state_32377;
var statearr_32396_32420 = state_32377__$1;
(statearr_32396_32420[(2)] = null);

(statearr_32396_32420[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32378 === (10))){
var inst_32369 = (state_32377[(2)]);
var state_32377__$1 = (function (){var statearr_32397 = state_32377;
(statearr_32397[(11)] = inst_32369);

return statearr_32397;
})();
var statearr_32398_32421 = state_32377__$1;
(statearr_32398_32421[(2)] = null);

(statearr_32398_32421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32378 === (8))){
var inst_32336 = (state_32377[(9)]);
var inst_32340 = figwheel.client.reload_file_state_QMARK_.call(null,inst_32336,opts);
var state_32377__$1 = state_32377;
if(cljs.core.truth_(inst_32340)){
var statearr_32399_32422 = state_32377__$1;
(statearr_32399_32422[(1)] = (11));

} else {
var statearr_32400_32423 = state_32377__$1;
(statearr_32400_32423[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28320__auto___32405,ch))
;
return ((function (switch__28225__auto__,c__28320__auto___32405,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28226__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28226__auto____0 = (function (){
var statearr_32401 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32401[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28226__auto__);

(statearr_32401[(1)] = (1));

return statearr_32401;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28226__auto____1 = (function (state_32377){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_32377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e32402){if((e32402 instanceof Object)){
var ex__28229__auto__ = e32402;
var statearr_32403_32424 = state_32377;
(statearr_32403_32424[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32425 = state_32377;
state_32377 = G__32425;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28226__auto__ = function(state_32377){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28226__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28226__auto____1.call(this,state_32377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28226__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28226__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28320__auto___32405,ch))
})();
var state__28322__auto__ = (function (){var statearr_32404 = f__28321__auto__.call(null);
(statearr_32404[(6)] = c__28320__auto___32405);

return statearr_32404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28322__auto__);
});})(c__28320__auto___32405,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__32426_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__32426_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_32432 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_32432){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32428 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32429 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32430 = true;
var _STAR_print_fn_STAR__temp_val__32431 = ((function (_STAR_print_newline_STAR__orig_val__32428,_STAR_print_fn_STAR__orig_val__32429,_STAR_print_newline_STAR__temp_val__32430,sb,base_path_32432){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__32428,_STAR_print_fn_STAR__orig_val__32429,_STAR_print_newline_STAR__temp_val__32430,sb,base_path_32432))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32430;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32431;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32429;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32428;
}}catch (e32427){if((e32427 instanceof Error)){
var e = e32427;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_32432], null));
} else {
var e = e32427;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_32432))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__32433){
var map__32434 = p__32433;
var map__32434__$1 = (((((!((map__32434 == null))))?(((((map__32434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32434):map__32434);
var opts = map__32434__$1;
var build_id = cljs.core.get.call(null,map__32434__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__32434,map__32434__$1,opts,build_id){
return (function (p__32436){
var vec__32437 = p__32436;
var seq__32438 = cljs.core.seq.call(null,vec__32437);
var first__32439 = cljs.core.first.call(null,seq__32438);
var seq__32438__$1 = cljs.core.next.call(null,seq__32438);
var map__32440 = first__32439;
var map__32440__$1 = (((((!((map__32440 == null))))?(((((map__32440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32440):map__32440);
var msg = map__32440__$1;
var msg_name = cljs.core.get.call(null,map__32440__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32438__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__32437,seq__32438,first__32439,seq__32438__$1,map__32440,map__32440__$1,msg,msg_name,_,map__32434,map__32434__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__32437,seq__32438,first__32439,seq__32438__$1,map__32440,map__32440__$1,msg,msg_name,_,map__32434,map__32434__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__32434,map__32434__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__32442){
var vec__32443 = p__32442;
var seq__32444 = cljs.core.seq.call(null,vec__32443);
var first__32445 = cljs.core.first.call(null,seq__32444);
var seq__32444__$1 = cljs.core.next.call(null,seq__32444);
var map__32446 = first__32445;
var map__32446__$1 = (((((!((map__32446 == null))))?(((((map__32446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32446):map__32446);
var msg = map__32446__$1;
var msg_name = cljs.core.get.call(null,map__32446__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32444__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__32448){
var map__32449 = p__32448;
var map__32449__$1 = (((((!((map__32449 == null))))?(((((map__32449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32449):map__32449);
var on_compile_warning = cljs.core.get.call(null,map__32449__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__32449__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__32449,map__32449__$1,on_compile_warning,on_compile_fail){
return (function (p__32451){
var vec__32452 = p__32451;
var seq__32453 = cljs.core.seq.call(null,vec__32452);
var first__32454 = cljs.core.first.call(null,seq__32453);
var seq__32453__$1 = cljs.core.next.call(null,seq__32453);
var map__32455 = first__32454;
var map__32455__$1 = (((((!((map__32455 == null))))?(((((map__32455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32455):map__32455);
var msg = map__32455__$1;
var msg_name = cljs.core.get.call(null,map__32455__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32453__$1;
var pred__32457 = cljs.core._EQ_;
var expr__32458 = msg_name;
if(cljs.core.truth_(pred__32457.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__32458))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__32457.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__32458))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__32449,map__32449__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28320__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28320__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28321__auto__ = (function (){var switch__28225__auto__ = ((function (c__28320__auto__,msg_hist,msg_names,msg){
return (function (state_32547){
var state_val_32548 = (state_32547[(1)]);
if((state_val_32548 === (7))){
var inst_32467 = (state_32547[(2)]);
var state_32547__$1 = state_32547;
if(cljs.core.truth_(inst_32467)){
var statearr_32549_32596 = state_32547__$1;
(statearr_32549_32596[(1)] = (8));

} else {
var statearr_32550_32597 = state_32547__$1;
(statearr_32550_32597[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (20))){
var inst_32541 = (state_32547[(2)]);
var state_32547__$1 = state_32547;
var statearr_32551_32598 = state_32547__$1;
(statearr_32551_32598[(2)] = inst_32541);

(statearr_32551_32598[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (27))){
var inst_32537 = (state_32547[(2)]);
var state_32547__$1 = state_32547;
var statearr_32552_32599 = state_32547__$1;
(statearr_32552_32599[(2)] = inst_32537);

(statearr_32552_32599[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (1))){
var inst_32460 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_32547__$1 = state_32547;
if(cljs.core.truth_(inst_32460)){
var statearr_32553_32600 = state_32547__$1;
(statearr_32553_32600[(1)] = (2));

} else {
var statearr_32554_32601 = state_32547__$1;
(statearr_32554_32601[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (24))){
var inst_32539 = (state_32547[(2)]);
var state_32547__$1 = state_32547;
var statearr_32555_32602 = state_32547__$1;
(statearr_32555_32602[(2)] = inst_32539);

(statearr_32555_32602[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (4))){
var inst_32545 = (state_32547[(2)]);
var state_32547__$1 = state_32547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32547__$1,inst_32545);
} else {
if((state_val_32548 === (15))){
var inst_32543 = (state_32547[(2)]);
var state_32547__$1 = state_32547;
var statearr_32556_32603 = state_32547__$1;
(statearr_32556_32603[(2)] = inst_32543);

(statearr_32556_32603[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (21))){
var inst_32496 = (state_32547[(2)]);
var inst_32497 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32498 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32497);
var state_32547__$1 = (function (){var statearr_32557 = state_32547;
(statearr_32557[(7)] = inst_32496);

return statearr_32557;
})();
var statearr_32558_32604 = state_32547__$1;
(statearr_32558_32604[(2)] = inst_32498);

(statearr_32558_32604[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (31))){
var inst_32526 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_32547__$1 = state_32547;
if(inst_32526){
var statearr_32559_32605 = state_32547__$1;
(statearr_32559_32605[(1)] = (34));

} else {
var statearr_32560_32606 = state_32547__$1;
(statearr_32560_32606[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (32))){
var inst_32535 = (state_32547[(2)]);
var state_32547__$1 = state_32547;
var statearr_32561_32607 = state_32547__$1;
(statearr_32561_32607[(2)] = inst_32535);

(statearr_32561_32607[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (33))){
var inst_32522 = (state_32547[(2)]);
var inst_32523 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32524 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32523);
var state_32547__$1 = (function (){var statearr_32562 = state_32547;
(statearr_32562[(8)] = inst_32522);

return statearr_32562;
})();
var statearr_32563_32608 = state_32547__$1;
(statearr_32563_32608[(2)] = inst_32524);

(statearr_32563_32608[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (13))){
var inst_32481 = figwheel.client.heads_up.clear.call(null);
var state_32547__$1 = state_32547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32547__$1,(16),inst_32481);
} else {
if((state_val_32548 === (22))){
var inst_32502 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32503 = figwheel.client.heads_up.append_warning_message.call(null,inst_32502);
var state_32547__$1 = state_32547;
var statearr_32564_32609 = state_32547__$1;
(statearr_32564_32609[(2)] = inst_32503);

(statearr_32564_32609[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (36))){
var inst_32533 = (state_32547[(2)]);
var state_32547__$1 = state_32547;
var statearr_32565_32610 = state_32547__$1;
(statearr_32565_32610[(2)] = inst_32533);

(statearr_32565_32610[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (29))){
var inst_32513 = (state_32547[(2)]);
var inst_32514 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32515 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32514);
var state_32547__$1 = (function (){var statearr_32566 = state_32547;
(statearr_32566[(9)] = inst_32513);

return statearr_32566;
})();
var statearr_32567_32611 = state_32547__$1;
(statearr_32567_32611[(2)] = inst_32515);

(statearr_32567_32611[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (6))){
var inst_32462 = (state_32547[(10)]);
var state_32547__$1 = state_32547;
var statearr_32568_32612 = state_32547__$1;
(statearr_32568_32612[(2)] = inst_32462);

(statearr_32568_32612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (28))){
var inst_32509 = (state_32547[(2)]);
var inst_32510 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32511 = figwheel.client.heads_up.display_warning.call(null,inst_32510);
var state_32547__$1 = (function (){var statearr_32569 = state_32547;
(statearr_32569[(11)] = inst_32509);

return statearr_32569;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32547__$1,(29),inst_32511);
} else {
if((state_val_32548 === (25))){
var inst_32507 = figwheel.client.heads_up.clear.call(null);
var state_32547__$1 = state_32547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32547__$1,(28),inst_32507);
} else {
if((state_val_32548 === (34))){
var inst_32528 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32547__$1 = state_32547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32547__$1,(37),inst_32528);
} else {
if((state_val_32548 === (17))){
var inst_32487 = (state_32547[(2)]);
var inst_32488 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32489 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32488);
var state_32547__$1 = (function (){var statearr_32570 = state_32547;
(statearr_32570[(12)] = inst_32487);

return statearr_32570;
})();
var statearr_32571_32613 = state_32547__$1;
(statearr_32571_32613[(2)] = inst_32489);

(statearr_32571_32613[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (3))){
var inst_32479 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_32547__$1 = state_32547;
if(inst_32479){
var statearr_32572_32614 = state_32547__$1;
(statearr_32572_32614[(1)] = (13));

} else {
var statearr_32573_32615 = state_32547__$1;
(statearr_32573_32615[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (12))){
var inst_32475 = (state_32547[(2)]);
var state_32547__$1 = state_32547;
var statearr_32574_32616 = state_32547__$1;
(statearr_32574_32616[(2)] = inst_32475);

(statearr_32574_32616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (2))){
var inst_32462 = (state_32547[(10)]);
var inst_32462__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_32547__$1 = (function (){var statearr_32575 = state_32547;
(statearr_32575[(10)] = inst_32462__$1);

return statearr_32575;
})();
if(cljs.core.truth_(inst_32462__$1)){
var statearr_32576_32617 = state_32547__$1;
(statearr_32576_32617[(1)] = (5));

} else {
var statearr_32577_32618 = state_32547__$1;
(statearr_32577_32618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (23))){
var inst_32505 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_32547__$1 = state_32547;
if(inst_32505){
var statearr_32578_32619 = state_32547__$1;
(statearr_32578_32619[(1)] = (25));

} else {
var statearr_32579_32620 = state_32547__$1;
(statearr_32579_32620[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (35))){
var state_32547__$1 = state_32547;
var statearr_32580_32621 = state_32547__$1;
(statearr_32580_32621[(2)] = null);

(statearr_32580_32621[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (19))){
var inst_32500 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_32547__$1 = state_32547;
if(inst_32500){
var statearr_32581_32622 = state_32547__$1;
(statearr_32581_32622[(1)] = (22));

} else {
var statearr_32582_32623 = state_32547__$1;
(statearr_32582_32623[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (11))){
var inst_32471 = (state_32547[(2)]);
var state_32547__$1 = state_32547;
var statearr_32583_32624 = state_32547__$1;
(statearr_32583_32624[(2)] = inst_32471);

(statearr_32583_32624[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (9))){
var inst_32473 = figwheel.client.heads_up.clear.call(null);
var state_32547__$1 = state_32547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32547__$1,(12),inst_32473);
} else {
if((state_val_32548 === (5))){
var inst_32464 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_32547__$1 = state_32547;
var statearr_32584_32625 = state_32547__$1;
(statearr_32584_32625[(2)] = inst_32464);

(statearr_32584_32625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (14))){
var inst_32491 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_32547__$1 = state_32547;
if(inst_32491){
var statearr_32585_32626 = state_32547__$1;
(statearr_32585_32626[(1)] = (18));

} else {
var statearr_32586_32627 = state_32547__$1;
(statearr_32586_32627[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (26))){
var inst_32517 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_32547__$1 = state_32547;
if(inst_32517){
var statearr_32587_32628 = state_32547__$1;
(statearr_32587_32628[(1)] = (30));

} else {
var statearr_32588_32629 = state_32547__$1;
(statearr_32588_32629[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (16))){
var inst_32483 = (state_32547[(2)]);
var inst_32484 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32485 = figwheel.client.heads_up.display_exception.call(null,inst_32484);
var state_32547__$1 = (function (){var statearr_32589 = state_32547;
(statearr_32589[(13)] = inst_32483);

return statearr_32589;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32547__$1,(17),inst_32485);
} else {
if((state_val_32548 === (30))){
var inst_32519 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32520 = figwheel.client.heads_up.display_warning.call(null,inst_32519);
var state_32547__$1 = state_32547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32547__$1,(33),inst_32520);
} else {
if((state_val_32548 === (10))){
var inst_32477 = (state_32547[(2)]);
var state_32547__$1 = state_32547;
var statearr_32590_32630 = state_32547__$1;
(statearr_32590_32630[(2)] = inst_32477);

(statearr_32590_32630[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (18))){
var inst_32493 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32494 = figwheel.client.heads_up.display_exception.call(null,inst_32493);
var state_32547__$1 = state_32547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32547__$1,(21),inst_32494);
} else {
if((state_val_32548 === (37))){
var inst_32530 = (state_32547[(2)]);
var state_32547__$1 = state_32547;
var statearr_32591_32631 = state_32547__$1;
(statearr_32591_32631[(2)] = inst_32530);

(statearr_32591_32631[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (8))){
var inst_32469 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32547__$1 = state_32547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32547__$1,(11),inst_32469);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28320__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28225__auto__,c__28320__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28226__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28226__auto____0 = (function (){
var statearr_32592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32592[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28226__auto__);

(statearr_32592[(1)] = (1));

return statearr_32592;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28226__auto____1 = (function (state_32547){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_32547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e32593){if((e32593 instanceof Object)){
var ex__28229__auto__ = e32593;
var statearr_32594_32632 = state_32547;
(statearr_32594_32632[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32633 = state_32547;
state_32547 = G__32633;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28226__auto__ = function(state_32547){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28226__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28226__auto____1.call(this,state_32547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28226__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28226__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28320__auto__,msg_hist,msg_names,msg))
})();
var state__28322__auto__ = (function (){var statearr_32595 = f__28321__auto__.call(null);
(statearr_32595[(6)] = c__28320__auto__);

return statearr_32595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28322__auto__);
});})(c__28320__auto__,msg_hist,msg_names,msg))
);

return c__28320__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28320__auto___32662 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28320__auto___32662,ch){
return (function (){
var f__28321__auto__ = (function (){var switch__28225__auto__ = ((function (c__28320__auto___32662,ch){
return (function (state_32648){
var state_val_32649 = (state_32648[(1)]);
if((state_val_32649 === (1))){
var state_32648__$1 = state_32648;
var statearr_32650_32663 = state_32648__$1;
(statearr_32650_32663[(2)] = null);

(statearr_32650_32663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32649 === (2))){
var state_32648__$1 = state_32648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32648__$1,(4),ch);
} else {
if((state_val_32649 === (3))){
var inst_32646 = (state_32648[(2)]);
var state_32648__$1 = state_32648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32648__$1,inst_32646);
} else {
if((state_val_32649 === (4))){
var inst_32636 = (state_32648[(7)]);
var inst_32636__$1 = (state_32648[(2)]);
var state_32648__$1 = (function (){var statearr_32651 = state_32648;
(statearr_32651[(7)] = inst_32636__$1);

return statearr_32651;
})();
if(cljs.core.truth_(inst_32636__$1)){
var statearr_32652_32664 = state_32648__$1;
(statearr_32652_32664[(1)] = (5));

} else {
var statearr_32653_32665 = state_32648__$1;
(statearr_32653_32665[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32649 === (5))){
var inst_32636 = (state_32648[(7)]);
var inst_32638 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32636);
var state_32648__$1 = state_32648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32648__$1,(8),inst_32638);
} else {
if((state_val_32649 === (6))){
var state_32648__$1 = state_32648;
var statearr_32654_32666 = state_32648__$1;
(statearr_32654_32666[(2)] = null);

(statearr_32654_32666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32649 === (7))){
var inst_32644 = (state_32648[(2)]);
var state_32648__$1 = state_32648;
var statearr_32655_32667 = state_32648__$1;
(statearr_32655_32667[(2)] = inst_32644);

(statearr_32655_32667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32649 === (8))){
var inst_32640 = (state_32648[(2)]);
var state_32648__$1 = (function (){var statearr_32656 = state_32648;
(statearr_32656[(8)] = inst_32640);

return statearr_32656;
})();
var statearr_32657_32668 = state_32648__$1;
(statearr_32657_32668[(2)] = null);

(statearr_32657_32668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__28320__auto___32662,ch))
;
return ((function (switch__28225__auto__,c__28320__auto___32662,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28226__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28226__auto____0 = (function (){
var statearr_32658 = [null,null,null,null,null,null,null,null,null];
(statearr_32658[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28226__auto__);

(statearr_32658[(1)] = (1));

return statearr_32658;
});
var figwheel$client$heads_up_plugin_$_state_machine__28226__auto____1 = (function (state_32648){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_32648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e32659){if((e32659 instanceof Object)){
var ex__28229__auto__ = e32659;
var statearr_32660_32669 = state_32648;
(statearr_32660_32669[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32670 = state_32648;
state_32648 = G__32670;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28226__auto__ = function(state_32648){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28226__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28226__auto____1.call(this,state_32648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28226__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28226__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28320__auto___32662,ch))
})();
var state__28322__auto__ = (function (){var statearr_32661 = f__28321__auto__.call(null);
(statearr_32661[(6)] = c__28320__auto___32662);

return statearr_32661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28322__auto__);
});})(c__28320__auto___32662,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28320__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28320__auto__){
return (function (){
var f__28321__auto__ = (function (){var switch__28225__auto__ = ((function (c__28320__auto__){
return (function (state_32676){
var state_val_32677 = (state_32676[(1)]);
if((state_val_32677 === (1))){
var inst_32671 = cljs.core.async.timeout.call(null,(3000));
var state_32676__$1 = state_32676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32676__$1,(2),inst_32671);
} else {
if((state_val_32677 === (2))){
var inst_32673 = (state_32676[(2)]);
var inst_32674 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32676__$1 = (function (){var statearr_32678 = state_32676;
(statearr_32678[(7)] = inst_32673);

return statearr_32678;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32676__$1,inst_32674);
} else {
return null;
}
}
});})(c__28320__auto__))
;
return ((function (switch__28225__auto__,c__28320__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28226__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28226__auto____0 = (function (){
var statearr_32679 = [null,null,null,null,null,null,null,null];
(statearr_32679[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28226__auto__);

(statearr_32679[(1)] = (1));

return statearr_32679;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28226__auto____1 = (function (state_32676){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_32676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e32680){if((e32680 instanceof Object)){
var ex__28229__auto__ = e32680;
var statearr_32681_32683 = state_32676;
(statearr_32681_32683[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32684 = state_32676;
state_32676 = G__32684;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28226__auto__ = function(state_32676){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28226__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28226__auto____1.call(this,state_32676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28226__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28226__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28320__auto__))
})();
var state__28322__auto__ = (function (){var statearr_32682 = f__28321__auto__.call(null);
(statearr_32682[(6)] = c__28320__auto__);

return statearr_32682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28322__auto__);
});})(c__28320__auto__))
);

return c__28320__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28320__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28320__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__28321__auto__ = (function (){var switch__28225__auto__ = ((function (c__28320__auto__,figwheel_version,temp__5720__auto__){
return (function (state_32691){
var state_val_32692 = (state_32691[(1)]);
if((state_val_32692 === (1))){
var inst_32685 = cljs.core.async.timeout.call(null,(2000));
var state_32691__$1 = state_32691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32691__$1,(2),inst_32685);
} else {
if((state_val_32692 === (2))){
var inst_32687 = (state_32691[(2)]);
var inst_32688 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_32689 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_32688);
var state_32691__$1 = (function (){var statearr_32693 = state_32691;
(statearr_32693[(7)] = inst_32687);

return statearr_32693;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32691__$1,inst_32689);
} else {
return null;
}
}
});})(c__28320__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__28225__auto__,c__28320__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28226__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28226__auto____0 = (function (){
var statearr_32694 = [null,null,null,null,null,null,null,null];
(statearr_32694[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28226__auto__);

(statearr_32694[(1)] = (1));

return statearr_32694;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28226__auto____1 = (function (state_32691){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_32691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e32695){if((e32695 instanceof Object)){
var ex__28229__auto__ = e32695;
var statearr_32696_32698 = state_32691;
(statearr_32696_32698[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32699 = state_32691;
state_32691 = G__32699;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28226__auto__ = function(state_32691){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28226__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28226__auto____1.call(this,state_32691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28226__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28226__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28320__auto__,figwheel_version,temp__5720__auto__))
})();
var state__28322__auto__ = (function (){var statearr_32697 = f__28321__auto__.call(null);
(statearr_32697[(6)] = c__28320__auto__);

return statearr_32697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28322__auto__);
});})(c__28320__auto__,figwheel_version,temp__5720__auto__))
);

return c__28320__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__32700){
var map__32701 = p__32700;
var map__32701__$1 = (((((!((map__32701 == null))))?(((((map__32701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32701):map__32701);
var file = cljs.core.get.call(null,map__32701__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__32701__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__32701__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__32703 = "";
var G__32703__$1 = (cljs.core.truth_(file)?[G__32703,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__32703);
var G__32703__$2 = (cljs.core.truth_(line)?[G__32703__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__32703__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__32703__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__32703__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32704){
var map__32705 = p__32704;
var map__32705__$1 = (((((!((map__32705 == null))))?(((((map__32705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32705):map__32705);
var ed = map__32705__$1;
var exception_data = cljs.core.get.call(null,map__32705__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32705__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_32708 = (function (){var G__32707 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32707)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__32707;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_32708);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32709){
var map__32710 = p__32709;
var map__32710__$1 = (((((!((map__32710 == null))))?(((((map__32710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32710):map__32710);
var w = map__32710__$1;
var message = cljs.core.get.call(null,map__32710__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"public/js/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"public/js/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__32712 = cljs.core.seq.call(null,plugins);
var chunk__32713 = null;
var count__32714 = (0);
var i__32715 = (0);
while(true){
if((i__32715 < count__32714)){
var vec__32722 = cljs.core._nth.call(null,chunk__32713,i__32715);
var k = cljs.core.nth.call(null,vec__32722,(0),null);
var plugin = cljs.core.nth.call(null,vec__32722,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32728 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32712,chunk__32713,count__32714,i__32715,pl_32728,vec__32722,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32728.call(null,msg_hist);
});})(seq__32712,chunk__32713,count__32714,i__32715,pl_32728,vec__32722,k,plugin))
);
} else {
}


var G__32729 = seq__32712;
var G__32730 = chunk__32713;
var G__32731 = count__32714;
var G__32732 = (i__32715 + (1));
seq__32712 = G__32729;
chunk__32713 = G__32730;
count__32714 = G__32731;
i__32715 = G__32732;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__32712);
if(temp__5720__auto__){
var seq__32712__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32712__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__32712__$1);
var G__32733 = cljs.core.chunk_rest.call(null,seq__32712__$1);
var G__32734 = c__4550__auto__;
var G__32735 = cljs.core.count.call(null,c__4550__auto__);
var G__32736 = (0);
seq__32712 = G__32733;
chunk__32713 = G__32734;
count__32714 = G__32735;
i__32715 = G__32736;
continue;
} else {
var vec__32725 = cljs.core.first.call(null,seq__32712__$1);
var k = cljs.core.nth.call(null,vec__32725,(0),null);
var plugin = cljs.core.nth.call(null,vec__32725,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32737 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32712,chunk__32713,count__32714,i__32715,pl_32737,vec__32725,k,plugin,seq__32712__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32737.call(null,msg_hist);
});})(seq__32712,chunk__32713,count__32714,i__32715,pl_32737,vec__32725,k,plugin,seq__32712__$1,temp__5720__auto__))
);
} else {
}


var G__32738 = cljs.core.next.call(null,seq__32712__$1);
var G__32739 = null;
var G__32740 = (0);
var G__32741 = (0);
seq__32712 = G__32738;
chunk__32713 = G__32739;
count__32714 = G__32740;
i__32715 = G__32741;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__32743 = arguments.length;
switch (G__32743) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__32744_32749 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__32745_32750 = null;
var count__32746_32751 = (0);
var i__32747_32752 = (0);
while(true){
if((i__32747_32752 < count__32746_32751)){
var msg_32753 = cljs.core._nth.call(null,chunk__32745_32750,i__32747_32752);
figwheel.client.socket.handle_incoming_message.call(null,msg_32753);


var G__32754 = seq__32744_32749;
var G__32755 = chunk__32745_32750;
var G__32756 = count__32746_32751;
var G__32757 = (i__32747_32752 + (1));
seq__32744_32749 = G__32754;
chunk__32745_32750 = G__32755;
count__32746_32751 = G__32756;
i__32747_32752 = G__32757;
continue;
} else {
var temp__5720__auto___32758 = cljs.core.seq.call(null,seq__32744_32749);
if(temp__5720__auto___32758){
var seq__32744_32759__$1 = temp__5720__auto___32758;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32744_32759__$1)){
var c__4550__auto___32760 = cljs.core.chunk_first.call(null,seq__32744_32759__$1);
var G__32761 = cljs.core.chunk_rest.call(null,seq__32744_32759__$1);
var G__32762 = c__4550__auto___32760;
var G__32763 = cljs.core.count.call(null,c__4550__auto___32760);
var G__32764 = (0);
seq__32744_32749 = G__32761;
chunk__32745_32750 = G__32762;
count__32746_32751 = G__32763;
i__32747_32752 = G__32764;
continue;
} else {
var msg_32765 = cljs.core.first.call(null,seq__32744_32759__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_32765);


var G__32766 = cljs.core.next.call(null,seq__32744_32759__$1);
var G__32767 = null;
var G__32768 = (0);
var G__32769 = (0);
seq__32744_32749 = G__32766;
chunk__32745_32750 = G__32767;
count__32746_32751 = G__32768;
i__32747_32752 = G__32769;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___32774 = arguments.length;
var i__4731__auto___32775 = (0);
while(true){
if((i__4731__auto___32775 < len__4730__auto___32774)){
args__4736__auto__.push((arguments[i__4731__auto___32775]));

var G__32776 = (i__4731__auto___32775 + (1));
i__4731__auto___32775 = G__32776;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32771){
var map__32772 = p__32771;
var map__32772__$1 = (((((!((map__32772 == null))))?(((((map__32772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32772):map__32772);
var opts = map__32772__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32770){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32770));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e32777){if((e32777 instanceof Error)){
var e = e32777;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e32777;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__32778){
var map__32779 = p__32778;
var map__32779__$1 = (((((!((map__32779 == null))))?(((((map__32779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32779):map__32779);
var msg_name = cljs.core.get.call(null,map__32779__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1572229113075
