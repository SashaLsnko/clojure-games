// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__21974__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21974 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21975__i = 0, G__21975__a = new Array(arguments.length -  0);
while (G__21975__i < G__21975__a.length) {G__21975__a[G__21975__i] = arguments[G__21975__i + 0]; ++G__21975__i;}
  args = new cljs.core.IndexedSeq(G__21975__a,0,null);
} 
return G__21974__delegate.call(this,args);};
G__21974.cljs$lang$maxFixedArity = 0;
G__21974.cljs$lang$applyTo = (function (arglist__21976){
var args = cljs.core.seq(arglist__21976);
return G__21974__delegate(args);
});
G__21974.cljs$core$IFn$_invoke$arity$variadic = G__21974__delegate;
return G__21974;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__21977__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21977 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21978__i = 0, G__21978__a = new Array(arguments.length -  0);
while (G__21978__i < G__21978__a.length) {G__21978__a[G__21978__i] = arguments[G__21978__i + 0]; ++G__21978__i;}
  args = new cljs.core.IndexedSeq(G__21978__a,0,null);
} 
return G__21977__delegate.call(this,args);};
G__21977.cljs$lang$maxFixedArity = 0;
G__21977.cljs$lang$applyTo = (function (arglist__21979){
var args = cljs.core.seq(arglist__21979);
return G__21977__delegate(args);
});
G__21977.cljs$core$IFn$_invoke$arity$variadic = G__21977__delegate;
return G__21977;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1572229096353
