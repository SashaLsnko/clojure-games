// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30435_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30435_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__30436 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30437 = null;
var count__30438 = (0);
var i__30439 = (0);
while(true){
if((i__30439 < count__30438)){
var n = cljs.core._nth.call(null,chunk__30437,i__30439);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__30440 = seq__30436;
var G__30441 = chunk__30437;
var G__30442 = count__30438;
var G__30443 = (i__30439 + (1));
seq__30436 = G__30440;
chunk__30437 = G__30441;
count__30438 = G__30442;
i__30439 = G__30443;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30436);
if(temp__5720__auto__){
var seq__30436__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30436__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30436__$1);
var G__30444 = cljs.core.chunk_rest.call(null,seq__30436__$1);
var G__30445 = c__4550__auto__;
var G__30446 = cljs.core.count.call(null,c__4550__auto__);
var G__30447 = (0);
seq__30436 = G__30444;
chunk__30437 = G__30445;
count__30438 = G__30446;
i__30439 = G__30447;
continue;
} else {
var n = cljs.core.first.call(null,seq__30436__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__30448 = cljs.core.next.call(null,seq__30436__$1);
var G__30449 = null;
var G__30450 = (0);
var G__30451 = (0);
seq__30436 = G__30448;
chunk__30437 = G__30449;
count__30438 = G__30450;
i__30439 = G__30451;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__30452){
var vec__30453 = p__30452;
var _ = cljs.core.nth.call(null,vec__30453,(0),null);
var v = cljs.core.nth.call(null,vec__30453,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__30456){
var vec__30457 = p__30456;
var k = cljs.core.nth.call(null,vec__30457,(0),null);
var v = cljs.core.nth.call(null,vec__30457,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__30469_30477 = cljs.core.seq.call(null,deps);
var chunk__30470_30478 = null;
var count__30471_30479 = (0);
var i__30472_30480 = (0);
while(true){
if((i__30472_30480 < count__30471_30479)){
var dep_30481 = cljs.core._nth.call(null,chunk__30470_30478,i__30472_30480);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_30481;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_30481));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_30481,(depth + (1)),state);
} else {
}


var G__30482 = seq__30469_30477;
var G__30483 = chunk__30470_30478;
var G__30484 = count__30471_30479;
var G__30485 = (i__30472_30480 + (1));
seq__30469_30477 = G__30482;
chunk__30470_30478 = G__30483;
count__30471_30479 = G__30484;
i__30472_30480 = G__30485;
continue;
} else {
var temp__5720__auto___30486 = cljs.core.seq.call(null,seq__30469_30477);
if(temp__5720__auto___30486){
var seq__30469_30487__$1 = temp__5720__auto___30486;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30469_30487__$1)){
var c__4550__auto___30488 = cljs.core.chunk_first.call(null,seq__30469_30487__$1);
var G__30489 = cljs.core.chunk_rest.call(null,seq__30469_30487__$1);
var G__30490 = c__4550__auto___30488;
var G__30491 = cljs.core.count.call(null,c__4550__auto___30488);
var G__30492 = (0);
seq__30469_30477 = G__30489;
chunk__30470_30478 = G__30490;
count__30471_30479 = G__30491;
i__30472_30480 = G__30492;
continue;
} else {
var dep_30493 = cljs.core.first.call(null,seq__30469_30487__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_30493;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_30493));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_30493,(depth + (1)),state);
} else {
}


var G__30494 = cljs.core.next.call(null,seq__30469_30487__$1);
var G__30495 = null;
var G__30496 = (0);
var G__30497 = (0);
seq__30469_30477 = G__30494;
chunk__30470_30478 = G__30495;
count__30471_30479 = G__30496;
i__30472_30480 = G__30497;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30473){
var vec__30474 = p__30473;
var seq__30475 = cljs.core.seq.call(null,vec__30474);
var first__30476 = cljs.core.first.call(null,seq__30475);
var seq__30475__$1 = cljs.core.next.call(null,seq__30475);
var x = first__30476;
var xs = seq__30475__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30474,seq__30475,first__30476,seq__30475__$1,x,xs,get_deps__$1){
return (function (p1__30460_SHARP_){
return clojure.set.difference.call(null,p1__30460_SHARP_,x);
});})(vec__30474,seq__30475,first__30476,seq__30475__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30498 = cljs.core.seq.call(null,provides);
var chunk__30499 = null;
var count__30500 = (0);
var i__30501 = (0);
while(true){
if((i__30501 < count__30500)){
var prov = cljs.core._nth.call(null,chunk__30499,i__30501);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30510_30518 = cljs.core.seq.call(null,requires);
var chunk__30511_30519 = null;
var count__30512_30520 = (0);
var i__30513_30521 = (0);
while(true){
if((i__30513_30521 < count__30512_30520)){
var req_30522 = cljs.core._nth.call(null,chunk__30511_30519,i__30513_30521);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30522,prov);


var G__30523 = seq__30510_30518;
var G__30524 = chunk__30511_30519;
var G__30525 = count__30512_30520;
var G__30526 = (i__30513_30521 + (1));
seq__30510_30518 = G__30523;
chunk__30511_30519 = G__30524;
count__30512_30520 = G__30525;
i__30513_30521 = G__30526;
continue;
} else {
var temp__5720__auto___30527 = cljs.core.seq.call(null,seq__30510_30518);
if(temp__5720__auto___30527){
var seq__30510_30528__$1 = temp__5720__auto___30527;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30510_30528__$1)){
var c__4550__auto___30529 = cljs.core.chunk_first.call(null,seq__30510_30528__$1);
var G__30530 = cljs.core.chunk_rest.call(null,seq__30510_30528__$1);
var G__30531 = c__4550__auto___30529;
var G__30532 = cljs.core.count.call(null,c__4550__auto___30529);
var G__30533 = (0);
seq__30510_30518 = G__30530;
chunk__30511_30519 = G__30531;
count__30512_30520 = G__30532;
i__30513_30521 = G__30533;
continue;
} else {
var req_30534 = cljs.core.first.call(null,seq__30510_30528__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30534,prov);


var G__30535 = cljs.core.next.call(null,seq__30510_30528__$1);
var G__30536 = null;
var G__30537 = (0);
var G__30538 = (0);
seq__30510_30518 = G__30535;
chunk__30511_30519 = G__30536;
count__30512_30520 = G__30537;
i__30513_30521 = G__30538;
continue;
}
} else {
}
}
break;
}


var G__30539 = seq__30498;
var G__30540 = chunk__30499;
var G__30541 = count__30500;
var G__30542 = (i__30501 + (1));
seq__30498 = G__30539;
chunk__30499 = G__30540;
count__30500 = G__30541;
i__30501 = G__30542;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30498);
if(temp__5720__auto__){
var seq__30498__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30498__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30498__$1);
var G__30543 = cljs.core.chunk_rest.call(null,seq__30498__$1);
var G__30544 = c__4550__auto__;
var G__30545 = cljs.core.count.call(null,c__4550__auto__);
var G__30546 = (0);
seq__30498 = G__30543;
chunk__30499 = G__30544;
count__30500 = G__30545;
i__30501 = G__30546;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30498__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30514_30547 = cljs.core.seq.call(null,requires);
var chunk__30515_30548 = null;
var count__30516_30549 = (0);
var i__30517_30550 = (0);
while(true){
if((i__30517_30550 < count__30516_30549)){
var req_30551 = cljs.core._nth.call(null,chunk__30515_30548,i__30517_30550);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30551,prov);


var G__30552 = seq__30514_30547;
var G__30553 = chunk__30515_30548;
var G__30554 = count__30516_30549;
var G__30555 = (i__30517_30550 + (1));
seq__30514_30547 = G__30552;
chunk__30515_30548 = G__30553;
count__30516_30549 = G__30554;
i__30517_30550 = G__30555;
continue;
} else {
var temp__5720__auto___30556__$1 = cljs.core.seq.call(null,seq__30514_30547);
if(temp__5720__auto___30556__$1){
var seq__30514_30557__$1 = temp__5720__auto___30556__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30514_30557__$1)){
var c__4550__auto___30558 = cljs.core.chunk_first.call(null,seq__30514_30557__$1);
var G__30559 = cljs.core.chunk_rest.call(null,seq__30514_30557__$1);
var G__30560 = c__4550__auto___30558;
var G__30561 = cljs.core.count.call(null,c__4550__auto___30558);
var G__30562 = (0);
seq__30514_30547 = G__30559;
chunk__30515_30548 = G__30560;
count__30516_30549 = G__30561;
i__30517_30550 = G__30562;
continue;
} else {
var req_30563 = cljs.core.first.call(null,seq__30514_30557__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30563,prov);


var G__30564 = cljs.core.next.call(null,seq__30514_30557__$1);
var G__30565 = null;
var G__30566 = (0);
var G__30567 = (0);
seq__30514_30547 = G__30564;
chunk__30515_30548 = G__30565;
count__30516_30549 = G__30566;
i__30517_30550 = G__30567;
continue;
}
} else {
}
}
break;
}


var G__30568 = cljs.core.next.call(null,seq__30498__$1);
var G__30569 = null;
var G__30570 = (0);
var G__30571 = (0);
seq__30498 = G__30568;
chunk__30499 = G__30569;
count__30500 = G__30570;
i__30501 = G__30571;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30572_30576 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30573_30577 = null;
var count__30574_30578 = (0);
var i__30575_30579 = (0);
while(true){
if((i__30575_30579 < count__30574_30578)){
var ns_30580 = cljs.core._nth.call(null,chunk__30573_30577,i__30575_30579);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30580);


var G__30581 = seq__30572_30576;
var G__30582 = chunk__30573_30577;
var G__30583 = count__30574_30578;
var G__30584 = (i__30575_30579 + (1));
seq__30572_30576 = G__30581;
chunk__30573_30577 = G__30582;
count__30574_30578 = G__30583;
i__30575_30579 = G__30584;
continue;
} else {
var temp__5720__auto___30585 = cljs.core.seq.call(null,seq__30572_30576);
if(temp__5720__auto___30585){
var seq__30572_30586__$1 = temp__5720__auto___30585;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30572_30586__$1)){
var c__4550__auto___30587 = cljs.core.chunk_first.call(null,seq__30572_30586__$1);
var G__30588 = cljs.core.chunk_rest.call(null,seq__30572_30586__$1);
var G__30589 = c__4550__auto___30587;
var G__30590 = cljs.core.count.call(null,c__4550__auto___30587);
var G__30591 = (0);
seq__30572_30576 = G__30588;
chunk__30573_30577 = G__30589;
count__30574_30578 = G__30590;
i__30575_30579 = G__30591;
continue;
} else {
var ns_30592 = cljs.core.first.call(null,seq__30572_30586__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30592);


var G__30593 = cljs.core.next.call(null,seq__30572_30586__$1);
var G__30594 = null;
var G__30595 = (0);
var G__30596 = (0);
seq__30572_30576 = G__30593;
chunk__30573_30577 = G__30594;
count__30574_30578 = G__30595;
i__30575_30579 = G__30596;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__30597__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30597 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30598__i = 0, G__30598__a = new Array(arguments.length -  0);
while (G__30598__i < G__30598__a.length) {G__30598__a[G__30598__i] = arguments[G__30598__i + 0]; ++G__30598__i;}
  args = new cljs.core.IndexedSeq(G__30598__a,0,null);
} 
return G__30597__delegate.call(this,args);};
G__30597.cljs$lang$maxFixedArity = 0;
G__30597.cljs$lang$applyTo = (function (arglist__30599){
var args = cljs.core.seq(arglist__30599);
return G__30597__delegate(args);
});
G__30597.cljs$core$IFn$_invoke$arity$variadic = G__30597__delegate;
return G__30597;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__30600_SHARP_,p2__30601_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30600_SHARP_)),p2__30601_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__30602_SHARP_,p2__30603_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30602_SHARP_),p2__30603_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__30604 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__30604.addCallback(((function (G__30604){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__30604))
);

G__30604.addErrback(((function (G__30604){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__30604))
);

return G__30604;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e30605){if((e30605 instanceof Error)){
var e = e30605;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30605;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30606){if((e30606 instanceof Error)){
var e = e30606;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30606;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30607 = cljs.core._EQ_;
var expr__30608 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30607.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30608))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__30607.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30608))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__30607.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__30608))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__30607,expr__30608){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30607,expr__30608))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30610,callback){
var map__30611 = p__30610;
var map__30611__$1 = (((((!((map__30611 == null))))?(((((map__30611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30611):map__30611);
var file_msg = map__30611__$1;
var request_url = cljs.core.get.call(null,map__30611__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__30611,map__30611__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30611,map__30611__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28320__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28320__auto__){
return (function (){
var f__28321__auto__ = (function (){var switch__28225__auto__ = ((function (c__28320__auto__){
return (function (state_30649){
var state_val_30650 = (state_30649[(1)]);
if((state_val_30650 === (7))){
var inst_30645 = (state_30649[(2)]);
var state_30649__$1 = state_30649;
var statearr_30651_30677 = state_30649__$1;
(statearr_30651_30677[(2)] = inst_30645);

(statearr_30651_30677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30650 === (1))){
var state_30649__$1 = state_30649;
var statearr_30652_30678 = state_30649__$1;
(statearr_30652_30678[(2)] = null);

(statearr_30652_30678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30650 === (4))){
var inst_30615 = (state_30649[(7)]);
var inst_30615__$1 = (state_30649[(2)]);
var state_30649__$1 = (function (){var statearr_30653 = state_30649;
(statearr_30653[(7)] = inst_30615__$1);

return statearr_30653;
})();
if(cljs.core.truth_(inst_30615__$1)){
var statearr_30654_30679 = state_30649__$1;
(statearr_30654_30679[(1)] = (5));

} else {
var statearr_30655_30680 = state_30649__$1;
(statearr_30655_30680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30650 === (15))){
var inst_30630 = (state_30649[(8)]);
var inst_30628 = (state_30649[(9)]);
var inst_30632 = inst_30630.call(null,inst_30628);
var state_30649__$1 = state_30649;
var statearr_30656_30681 = state_30649__$1;
(statearr_30656_30681[(2)] = inst_30632);

(statearr_30656_30681[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30650 === (13))){
var inst_30639 = (state_30649[(2)]);
var state_30649__$1 = state_30649;
var statearr_30657_30682 = state_30649__$1;
(statearr_30657_30682[(2)] = inst_30639);

(statearr_30657_30682[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30650 === (6))){
var state_30649__$1 = state_30649;
var statearr_30658_30683 = state_30649__$1;
(statearr_30658_30683[(2)] = null);

(statearr_30658_30683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30650 === (17))){
var inst_30636 = (state_30649[(2)]);
var state_30649__$1 = state_30649;
var statearr_30659_30684 = state_30649__$1;
(statearr_30659_30684[(2)] = inst_30636);

(statearr_30659_30684[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30650 === (3))){
var inst_30647 = (state_30649[(2)]);
var state_30649__$1 = state_30649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30649__$1,inst_30647);
} else {
if((state_val_30650 === (12))){
var state_30649__$1 = state_30649;
var statearr_30660_30685 = state_30649__$1;
(statearr_30660_30685[(2)] = null);

(statearr_30660_30685[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30650 === (2))){
var state_30649__$1 = state_30649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30649__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30650 === (11))){
var inst_30620 = (state_30649[(10)]);
var inst_30626 = figwheel.client.file_reloading.blocking_load.call(null,inst_30620);
var state_30649__$1 = state_30649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30649__$1,(14),inst_30626);
} else {
if((state_val_30650 === (9))){
var inst_30620 = (state_30649[(10)]);
var state_30649__$1 = state_30649;
if(cljs.core.truth_(inst_30620)){
var statearr_30661_30686 = state_30649__$1;
(statearr_30661_30686[(1)] = (11));

} else {
var statearr_30662_30687 = state_30649__$1;
(statearr_30662_30687[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30650 === (5))){
var inst_30615 = (state_30649[(7)]);
var inst_30621 = (state_30649[(11)]);
var inst_30620 = cljs.core.nth.call(null,inst_30615,(0),null);
var inst_30621__$1 = cljs.core.nth.call(null,inst_30615,(1),null);
var state_30649__$1 = (function (){var statearr_30663 = state_30649;
(statearr_30663[(11)] = inst_30621__$1);

(statearr_30663[(10)] = inst_30620);

return statearr_30663;
})();
if(cljs.core.truth_(inst_30621__$1)){
var statearr_30664_30688 = state_30649__$1;
(statearr_30664_30688[(1)] = (8));

} else {
var statearr_30665_30689 = state_30649__$1;
(statearr_30665_30689[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30650 === (14))){
var inst_30630 = (state_30649[(8)]);
var inst_30620 = (state_30649[(10)]);
var inst_30628 = (state_30649[(2)]);
var inst_30629 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30630__$1 = cljs.core.get.call(null,inst_30629,inst_30620);
var state_30649__$1 = (function (){var statearr_30666 = state_30649;
(statearr_30666[(8)] = inst_30630__$1);

(statearr_30666[(9)] = inst_30628);

return statearr_30666;
})();
if(cljs.core.truth_(inst_30630__$1)){
var statearr_30667_30690 = state_30649__$1;
(statearr_30667_30690[(1)] = (15));

} else {
var statearr_30668_30691 = state_30649__$1;
(statearr_30668_30691[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30650 === (16))){
var inst_30628 = (state_30649[(9)]);
var inst_30634 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30628);
var state_30649__$1 = state_30649;
var statearr_30669_30692 = state_30649__$1;
(statearr_30669_30692[(2)] = inst_30634);

(statearr_30669_30692[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30650 === (10))){
var inst_30641 = (state_30649[(2)]);
var state_30649__$1 = (function (){var statearr_30670 = state_30649;
(statearr_30670[(12)] = inst_30641);

return statearr_30670;
})();
var statearr_30671_30693 = state_30649__$1;
(statearr_30671_30693[(2)] = null);

(statearr_30671_30693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30650 === (8))){
var inst_30621 = (state_30649[(11)]);
var inst_30623 = eval(inst_30621);
var state_30649__$1 = state_30649;
var statearr_30672_30694 = state_30649__$1;
(statearr_30672_30694[(2)] = inst_30623);

(statearr_30672_30694[(1)] = (10));


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
});})(c__28320__auto__))
;
return ((function (switch__28225__auto__,c__28320__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28226__auto__ = null;
var figwheel$client$file_reloading$state_machine__28226__auto____0 = (function (){
var statearr_30673 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30673[(0)] = figwheel$client$file_reloading$state_machine__28226__auto__);

(statearr_30673[(1)] = (1));

return statearr_30673;
});
var figwheel$client$file_reloading$state_machine__28226__auto____1 = (function (state_30649){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_30649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e30674){if((e30674 instanceof Object)){
var ex__28229__auto__ = e30674;
var statearr_30675_30695 = state_30649;
(statearr_30675_30695[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30696 = state_30649;
state_30649 = G__30696;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28226__auto__ = function(state_30649){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28226__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28226__auto____1.call(this,state_30649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28226__auto____0;
figwheel$client$file_reloading$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28226__auto____1;
return figwheel$client$file_reloading$state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28320__auto__))
})();
var state__28322__auto__ = (function (){var statearr_30676 = f__28321__auto__.call(null);
(statearr_30676[(6)] = c__28320__auto__);

return statearr_30676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28322__auto__);
});})(c__28320__auto__))
);

return c__28320__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__30698 = arguments.length;
switch (G__30698) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30700,callback){
var map__30701 = p__30700;
var map__30701__$1 = (((((!((map__30701 == null))))?(((((map__30701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30701):map__30701);
var file_msg = map__30701__$1;
var namespace = cljs.core.get.call(null,map__30701__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30701,map__30701__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30701,map__30701__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__30703){
var map__30704 = p__30703;
var map__30704__$1 = (((((!((map__30704 == null))))?(((((map__30704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30704):map__30704);
var file_msg = map__30704__$1;
var namespace = cljs.core.get.call(null,map__30704__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30706){
var map__30707 = p__30706;
var map__30707__$1 = (((((!((map__30707 == null))))?(((((map__30707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30707):map__30707);
var file_msg = map__30707__$1;
var namespace = cljs.core.get.call(null,map__30707__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30709,callback){
var map__30710 = p__30709;
var map__30710__$1 = (((((!((map__30710 == null))))?(((((map__30710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30710):map__30710);
var file_msg = map__30710__$1;
var request_url = cljs.core.get.call(null,map__30710__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30710__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28320__auto___30760 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28320__auto___30760,out){
return (function (){
var f__28321__auto__ = (function (){var switch__28225__auto__ = ((function (c__28320__auto___30760,out){
return (function (state_30745){
var state_val_30746 = (state_30745[(1)]);
if((state_val_30746 === (1))){
var inst_30719 = cljs.core.seq.call(null,files);
var inst_30720 = cljs.core.first.call(null,inst_30719);
var inst_30721 = cljs.core.next.call(null,inst_30719);
var inst_30722 = files;
var state_30745__$1 = (function (){var statearr_30747 = state_30745;
(statearr_30747[(7)] = inst_30722);

(statearr_30747[(8)] = inst_30721);

(statearr_30747[(9)] = inst_30720);

return statearr_30747;
})();
var statearr_30748_30761 = state_30745__$1;
(statearr_30748_30761[(2)] = null);

(statearr_30748_30761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (2))){
var inst_30728 = (state_30745[(10)]);
var inst_30722 = (state_30745[(7)]);
var inst_30727 = cljs.core.seq.call(null,inst_30722);
var inst_30728__$1 = cljs.core.first.call(null,inst_30727);
var inst_30729 = cljs.core.next.call(null,inst_30727);
var inst_30730 = (inst_30728__$1 == null);
var inst_30731 = cljs.core.not.call(null,inst_30730);
var state_30745__$1 = (function (){var statearr_30749 = state_30745;
(statearr_30749[(10)] = inst_30728__$1);

(statearr_30749[(11)] = inst_30729);

return statearr_30749;
})();
if(inst_30731){
var statearr_30750_30762 = state_30745__$1;
(statearr_30750_30762[(1)] = (4));

} else {
var statearr_30751_30763 = state_30745__$1;
(statearr_30751_30763[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (3))){
var inst_30743 = (state_30745[(2)]);
var state_30745__$1 = state_30745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30745__$1,inst_30743);
} else {
if((state_val_30746 === (4))){
var inst_30728 = (state_30745[(10)]);
var inst_30733 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30728);
var state_30745__$1 = state_30745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30745__$1,(7),inst_30733);
} else {
if((state_val_30746 === (5))){
var inst_30739 = cljs.core.async.close_BANG_.call(null,out);
var state_30745__$1 = state_30745;
var statearr_30752_30764 = state_30745__$1;
(statearr_30752_30764[(2)] = inst_30739);

(statearr_30752_30764[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (6))){
var inst_30741 = (state_30745[(2)]);
var state_30745__$1 = state_30745;
var statearr_30753_30765 = state_30745__$1;
(statearr_30753_30765[(2)] = inst_30741);

(statearr_30753_30765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (7))){
var inst_30729 = (state_30745[(11)]);
var inst_30735 = (state_30745[(2)]);
var inst_30736 = cljs.core.async.put_BANG_.call(null,out,inst_30735);
var inst_30722 = inst_30729;
var state_30745__$1 = (function (){var statearr_30754 = state_30745;
(statearr_30754[(7)] = inst_30722);

(statearr_30754[(12)] = inst_30736);

return statearr_30754;
})();
var statearr_30755_30766 = state_30745__$1;
(statearr_30755_30766[(2)] = null);

(statearr_30755_30766[(1)] = (2));


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
});})(c__28320__auto___30760,out))
;
return ((function (switch__28225__auto__,c__28320__auto___30760,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28226__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28226__auto____0 = (function (){
var statearr_30756 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30756[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28226__auto__);

(statearr_30756[(1)] = (1));

return statearr_30756;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28226__auto____1 = (function (state_30745){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_30745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e30757){if((e30757 instanceof Object)){
var ex__28229__auto__ = e30757;
var statearr_30758_30767 = state_30745;
(statearr_30758_30767[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30768 = state_30745;
state_30745 = G__30768;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28226__auto__ = function(state_30745){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28226__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28226__auto____1.call(this,state_30745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28226__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28226__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28320__auto___30760,out))
})();
var state__28322__auto__ = (function (){var statearr_30759 = f__28321__auto__.call(null);
(statearr_30759[(6)] = c__28320__auto___30760);

return statearr_30759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28322__auto__);
});})(c__28320__auto___30760,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30769,opts){
var map__30770 = p__30769;
var map__30770__$1 = (((((!((map__30770 == null))))?(((((map__30770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30770):map__30770);
var eval_body = cljs.core.get.call(null,map__30770__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30770__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30772){var e = e30772;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30773_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30773_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30774){
var vec__30775 = p__30774;
var k = cljs.core.nth.call(null,vec__30775,(0),null);
var v = cljs.core.nth.call(null,vec__30775,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30778){
var vec__30779 = p__30778;
var k = cljs.core.nth.call(null,vec__30779,(0),null);
var v = cljs.core.nth.call(null,vec__30779,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30785,p__30786){
var map__30787 = p__30785;
var map__30787__$1 = (((((!((map__30787 == null))))?(((((map__30787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30787):map__30787);
var opts = map__30787__$1;
var before_jsload = cljs.core.get.call(null,map__30787__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30787__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30787__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30788 = p__30786;
var map__30788__$1 = (((((!((map__30788 == null))))?(((((map__30788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30788):map__30788);
var msg = map__30788__$1;
var files = cljs.core.get.call(null,map__30788__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30788__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30788__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28320__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28320__auto__,map__30787,map__30787__$1,opts,before_jsload,on_jsload,reload_dependents,map__30788,map__30788__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28321__auto__ = (function (){var switch__28225__auto__ = ((function (c__28320__auto__,map__30787,map__30787__$1,opts,before_jsload,on_jsload,reload_dependents,map__30788,map__30788__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30942){
var state_val_30943 = (state_30942[(1)]);
if((state_val_30943 === (7))){
var inst_30803 = (state_30942[(7)]);
var inst_30802 = (state_30942[(8)]);
var inst_30804 = (state_30942[(9)]);
var inst_30805 = (state_30942[(10)]);
var inst_30810 = cljs.core._nth.call(null,inst_30803,inst_30805);
var inst_30811 = figwheel.client.file_reloading.eval_body.call(null,inst_30810,opts);
var inst_30812 = (inst_30805 + (1));
var tmp30944 = inst_30803;
var tmp30945 = inst_30802;
var tmp30946 = inst_30804;
var inst_30802__$1 = tmp30945;
var inst_30803__$1 = tmp30944;
var inst_30804__$1 = tmp30946;
var inst_30805__$1 = inst_30812;
var state_30942__$1 = (function (){var statearr_30947 = state_30942;
(statearr_30947[(7)] = inst_30803__$1);

(statearr_30947[(8)] = inst_30802__$1);

(statearr_30947[(9)] = inst_30804__$1);

(statearr_30947[(11)] = inst_30811);

(statearr_30947[(10)] = inst_30805__$1);

return statearr_30947;
})();
var statearr_30948_31031 = state_30942__$1;
(statearr_30948_31031[(2)] = null);

(statearr_30948_31031[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (20))){
var inst_30845 = (state_30942[(12)]);
var inst_30853 = figwheel.client.file_reloading.sort_files.call(null,inst_30845);
var state_30942__$1 = state_30942;
var statearr_30949_31032 = state_30942__$1;
(statearr_30949_31032[(2)] = inst_30853);

(statearr_30949_31032[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (27))){
var state_30942__$1 = state_30942;
var statearr_30950_31033 = state_30942__$1;
(statearr_30950_31033[(2)] = null);

(statearr_30950_31033[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (1))){
var inst_30794 = (state_30942[(13)]);
var inst_30791 = before_jsload.call(null,files);
var inst_30792 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30793 = (function (){return ((function (inst_30794,inst_30791,inst_30792,state_val_30943,c__28320__auto__,map__30787,map__30787__$1,opts,before_jsload,on_jsload,reload_dependents,map__30788,map__30788__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30782_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30782_SHARP_);
});
;})(inst_30794,inst_30791,inst_30792,state_val_30943,c__28320__auto__,map__30787,map__30787__$1,opts,before_jsload,on_jsload,reload_dependents,map__30788,map__30788__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30794__$1 = cljs.core.filter.call(null,inst_30793,files);
var inst_30795 = cljs.core.not_empty.call(null,inst_30794__$1);
var state_30942__$1 = (function (){var statearr_30951 = state_30942;
(statearr_30951[(13)] = inst_30794__$1);

(statearr_30951[(14)] = inst_30791);

(statearr_30951[(15)] = inst_30792);

return statearr_30951;
})();
if(cljs.core.truth_(inst_30795)){
var statearr_30952_31034 = state_30942__$1;
(statearr_30952_31034[(1)] = (2));

} else {
var statearr_30953_31035 = state_30942__$1;
(statearr_30953_31035[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (24))){
var state_30942__$1 = state_30942;
var statearr_30954_31036 = state_30942__$1;
(statearr_30954_31036[(2)] = null);

(statearr_30954_31036[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (39))){
var inst_30895 = (state_30942[(16)]);
var state_30942__$1 = state_30942;
var statearr_30955_31037 = state_30942__$1;
(statearr_30955_31037[(2)] = inst_30895);

(statearr_30955_31037[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (46))){
var inst_30937 = (state_30942[(2)]);
var state_30942__$1 = state_30942;
var statearr_30956_31038 = state_30942__$1;
(statearr_30956_31038[(2)] = inst_30937);

(statearr_30956_31038[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (4))){
var inst_30839 = (state_30942[(2)]);
var inst_30840 = cljs.core.List.EMPTY;
var inst_30841 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30840);
var inst_30842 = (function (){return ((function (inst_30839,inst_30840,inst_30841,state_val_30943,c__28320__auto__,map__30787,map__30787__$1,opts,before_jsload,on_jsload,reload_dependents,map__30788,map__30788__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30783_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30783_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30783_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__30783_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_30839,inst_30840,inst_30841,state_val_30943,c__28320__auto__,map__30787,map__30787__$1,opts,before_jsload,on_jsload,reload_dependents,map__30788,map__30788__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30843 = cljs.core.filter.call(null,inst_30842,files);
var inst_30844 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30845 = cljs.core.concat.call(null,inst_30843,inst_30844);
var state_30942__$1 = (function (){var statearr_30957 = state_30942;
(statearr_30957[(17)] = inst_30841);

(statearr_30957[(18)] = inst_30839);

(statearr_30957[(12)] = inst_30845);

return statearr_30957;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30958_31039 = state_30942__$1;
(statearr_30958_31039[(1)] = (16));

} else {
var statearr_30959_31040 = state_30942__$1;
(statearr_30959_31040[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (15))){
var inst_30829 = (state_30942[(2)]);
var state_30942__$1 = state_30942;
var statearr_30960_31041 = state_30942__$1;
(statearr_30960_31041[(2)] = inst_30829);

(statearr_30960_31041[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (21))){
var inst_30855 = (state_30942[(19)]);
var inst_30855__$1 = (state_30942[(2)]);
var inst_30856 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30855__$1);
var state_30942__$1 = (function (){var statearr_30961 = state_30942;
(statearr_30961[(19)] = inst_30855__$1);

return statearr_30961;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30942__$1,(22),inst_30856);
} else {
if((state_val_30943 === (31))){
var inst_30940 = (state_30942[(2)]);
var state_30942__$1 = state_30942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30942__$1,inst_30940);
} else {
if((state_val_30943 === (32))){
var inst_30895 = (state_30942[(16)]);
var inst_30900 = inst_30895.cljs$lang$protocol_mask$partition0$;
var inst_30901 = (inst_30900 & (64));
var inst_30902 = inst_30895.cljs$core$ISeq$;
var inst_30903 = (cljs.core.PROTOCOL_SENTINEL === inst_30902);
var inst_30904 = ((inst_30901) || (inst_30903));
var state_30942__$1 = state_30942;
if(cljs.core.truth_(inst_30904)){
var statearr_30962_31042 = state_30942__$1;
(statearr_30962_31042[(1)] = (35));

} else {
var statearr_30963_31043 = state_30942__$1;
(statearr_30963_31043[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (40))){
var inst_30917 = (state_30942[(20)]);
var inst_30916 = (state_30942[(2)]);
var inst_30917__$1 = cljs.core.get.call(null,inst_30916,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30918 = cljs.core.get.call(null,inst_30916,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30919 = cljs.core.not_empty.call(null,inst_30917__$1);
var state_30942__$1 = (function (){var statearr_30964 = state_30942;
(statearr_30964[(21)] = inst_30918);

(statearr_30964[(20)] = inst_30917__$1);

return statearr_30964;
})();
if(cljs.core.truth_(inst_30919)){
var statearr_30965_31044 = state_30942__$1;
(statearr_30965_31044[(1)] = (41));

} else {
var statearr_30966_31045 = state_30942__$1;
(statearr_30966_31045[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (33))){
var state_30942__$1 = state_30942;
var statearr_30967_31046 = state_30942__$1;
(statearr_30967_31046[(2)] = false);

(statearr_30967_31046[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (13))){
var inst_30815 = (state_30942[(22)]);
var inst_30819 = cljs.core.chunk_first.call(null,inst_30815);
var inst_30820 = cljs.core.chunk_rest.call(null,inst_30815);
var inst_30821 = cljs.core.count.call(null,inst_30819);
var inst_30802 = inst_30820;
var inst_30803 = inst_30819;
var inst_30804 = inst_30821;
var inst_30805 = (0);
var state_30942__$1 = (function (){var statearr_30968 = state_30942;
(statearr_30968[(7)] = inst_30803);

(statearr_30968[(8)] = inst_30802);

(statearr_30968[(9)] = inst_30804);

(statearr_30968[(10)] = inst_30805);

return statearr_30968;
})();
var statearr_30969_31047 = state_30942__$1;
(statearr_30969_31047[(2)] = null);

(statearr_30969_31047[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (22))){
var inst_30855 = (state_30942[(19)]);
var inst_30858 = (state_30942[(23)]);
var inst_30863 = (state_30942[(24)]);
var inst_30859 = (state_30942[(25)]);
var inst_30858__$1 = (state_30942[(2)]);
var inst_30859__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30858__$1);
var inst_30860 = (function (){var all_files = inst_30855;
var res_SINGLEQUOTE_ = inst_30858__$1;
var res = inst_30859__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30855,inst_30858,inst_30863,inst_30859,inst_30858__$1,inst_30859__$1,state_val_30943,c__28320__auto__,map__30787,map__30787__$1,opts,before_jsload,on_jsload,reload_dependents,map__30788,map__30788__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30784_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30784_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30855,inst_30858,inst_30863,inst_30859,inst_30858__$1,inst_30859__$1,state_val_30943,c__28320__auto__,map__30787,map__30787__$1,opts,before_jsload,on_jsload,reload_dependents,map__30788,map__30788__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30861 = cljs.core.filter.call(null,inst_30860,inst_30858__$1);
var inst_30862 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30863__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30862);
var inst_30864 = cljs.core.not_empty.call(null,inst_30863__$1);
var state_30942__$1 = (function (){var statearr_30970 = state_30942;
(statearr_30970[(23)] = inst_30858__$1);

(statearr_30970[(26)] = inst_30861);

(statearr_30970[(24)] = inst_30863__$1);

(statearr_30970[(25)] = inst_30859__$1);

return statearr_30970;
})();
if(cljs.core.truth_(inst_30864)){
var statearr_30971_31048 = state_30942__$1;
(statearr_30971_31048[(1)] = (23));

} else {
var statearr_30972_31049 = state_30942__$1;
(statearr_30972_31049[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (36))){
var state_30942__$1 = state_30942;
var statearr_30973_31050 = state_30942__$1;
(statearr_30973_31050[(2)] = false);

(statearr_30973_31050[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (41))){
var inst_30917 = (state_30942[(20)]);
var inst_30921 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30922 = cljs.core.map.call(null,inst_30921,inst_30917);
var inst_30923 = cljs.core.pr_str.call(null,inst_30922);
var inst_30924 = ["figwheel-no-load meta-data: ",inst_30923].join('');
var inst_30925 = figwheel.client.utils.log.call(null,inst_30924);
var state_30942__$1 = state_30942;
var statearr_30974_31051 = state_30942__$1;
(statearr_30974_31051[(2)] = inst_30925);

(statearr_30974_31051[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (43))){
var inst_30918 = (state_30942[(21)]);
var inst_30928 = (state_30942[(2)]);
var inst_30929 = cljs.core.not_empty.call(null,inst_30918);
var state_30942__$1 = (function (){var statearr_30975 = state_30942;
(statearr_30975[(27)] = inst_30928);

return statearr_30975;
})();
if(cljs.core.truth_(inst_30929)){
var statearr_30976_31052 = state_30942__$1;
(statearr_30976_31052[(1)] = (44));

} else {
var statearr_30977_31053 = state_30942__$1;
(statearr_30977_31053[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (29))){
var inst_30855 = (state_30942[(19)]);
var inst_30895 = (state_30942[(16)]);
var inst_30858 = (state_30942[(23)]);
var inst_30861 = (state_30942[(26)]);
var inst_30863 = (state_30942[(24)]);
var inst_30859 = (state_30942[(25)]);
var inst_30891 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30894 = (function (){var all_files = inst_30855;
var res_SINGLEQUOTE_ = inst_30858;
var res = inst_30859;
var files_not_loaded = inst_30861;
var dependencies_that_loaded = inst_30863;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30855,inst_30895,inst_30858,inst_30861,inst_30863,inst_30859,inst_30891,state_val_30943,c__28320__auto__,map__30787,map__30787__$1,opts,before_jsload,on_jsload,reload_dependents,map__30788,map__30788__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30893){
var map__30978 = p__30893;
var map__30978__$1 = (((((!((map__30978 == null))))?(((((map__30978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30978):map__30978);
var namespace = cljs.core.get.call(null,map__30978__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30855,inst_30895,inst_30858,inst_30861,inst_30863,inst_30859,inst_30891,state_val_30943,c__28320__auto__,map__30787,map__30787__$1,opts,before_jsload,on_jsload,reload_dependents,map__30788,map__30788__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30895__$1 = cljs.core.group_by.call(null,inst_30894,inst_30861);
var inst_30897 = (inst_30895__$1 == null);
var inst_30898 = cljs.core.not.call(null,inst_30897);
var state_30942__$1 = (function (){var statearr_30980 = state_30942;
(statearr_30980[(16)] = inst_30895__$1);

(statearr_30980[(28)] = inst_30891);

return statearr_30980;
})();
if(inst_30898){
var statearr_30981_31054 = state_30942__$1;
(statearr_30981_31054[(1)] = (32));

} else {
var statearr_30982_31055 = state_30942__$1;
(statearr_30982_31055[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (44))){
var inst_30918 = (state_30942[(21)]);
var inst_30931 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30918);
var inst_30932 = cljs.core.pr_str.call(null,inst_30931);
var inst_30933 = ["not required: ",inst_30932].join('');
var inst_30934 = figwheel.client.utils.log.call(null,inst_30933);
var state_30942__$1 = state_30942;
var statearr_30983_31056 = state_30942__$1;
(statearr_30983_31056[(2)] = inst_30934);

(statearr_30983_31056[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (6))){
var inst_30836 = (state_30942[(2)]);
var state_30942__$1 = state_30942;
var statearr_30984_31057 = state_30942__$1;
(statearr_30984_31057[(2)] = inst_30836);

(statearr_30984_31057[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (28))){
var inst_30861 = (state_30942[(26)]);
var inst_30888 = (state_30942[(2)]);
var inst_30889 = cljs.core.not_empty.call(null,inst_30861);
var state_30942__$1 = (function (){var statearr_30985 = state_30942;
(statearr_30985[(29)] = inst_30888);

return statearr_30985;
})();
if(cljs.core.truth_(inst_30889)){
var statearr_30986_31058 = state_30942__$1;
(statearr_30986_31058[(1)] = (29));

} else {
var statearr_30987_31059 = state_30942__$1;
(statearr_30987_31059[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (25))){
var inst_30859 = (state_30942[(25)]);
var inst_30875 = (state_30942[(2)]);
var inst_30876 = cljs.core.not_empty.call(null,inst_30859);
var state_30942__$1 = (function (){var statearr_30988 = state_30942;
(statearr_30988[(30)] = inst_30875);

return statearr_30988;
})();
if(cljs.core.truth_(inst_30876)){
var statearr_30989_31060 = state_30942__$1;
(statearr_30989_31060[(1)] = (26));

} else {
var statearr_30990_31061 = state_30942__$1;
(statearr_30990_31061[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (34))){
var inst_30911 = (state_30942[(2)]);
var state_30942__$1 = state_30942;
if(cljs.core.truth_(inst_30911)){
var statearr_30991_31062 = state_30942__$1;
(statearr_30991_31062[(1)] = (38));

} else {
var statearr_30992_31063 = state_30942__$1;
(statearr_30992_31063[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (17))){
var state_30942__$1 = state_30942;
var statearr_30993_31064 = state_30942__$1;
(statearr_30993_31064[(2)] = recompile_dependents);

(statearr_30993_31064[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (3))){
var state_30942__$1 = state_30942;
var statearr_30994_31065 = state_30942__$1;
(statearr_30994_31065[(2)] = null);

(statearr_30994_31065[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (12))){
var inst_30832 = (state_30942[(2)]);
var state_30942__$1 = state_30942;
var statearr_30995_31066 = state_30942__$1;
(statearr_30995_31066[(2)] = inst_30832);

(statearr_30995_31066[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (2))){
var inst_30794 = (state_30942[(13)]);
var inst_30801 = cljs.core.seq.call(null,inst_30794);
var inst_30802 = inst_30801;
var inst_30803 = null;
var inst_30804 = (0);
var inst_30805 = (0);
var state_30942__$1 = (function (){var statearr_30996 = state_30942;
(statearr_30996[(7)] = inst_30803);

(statearr_30996[(8)] = inst_30802);

(statearr_30996[(9)] = inst_30804);

(statearr_30996[(10)] = inst_30805);

return statearr_30996;
})();
var statearr_30997_31067 = state_30942__$1;
(statearr_30997_31067[(2)] = null);

(statearr_30997_31067[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (23))){
var inst_30855 = (state_30942[(19)]);
var inst_30858 = (state_30942[(23)]);
var inst_30861 = (state_30942[(26)]);
var inst_30863 = (state_30942[(24)]);
var inst_30859 = (state_30942[(25)]);
var inst_30866 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30868 = (function (){var all_files = inst_30855;
var res_SINGLEQUOTE_ = inst_30858;
var res = inst_30859;
var files_not_loaded = inst_30861;
var dependencies_that_loaded = inst_30863;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30855,inst_30858,inst_30861,inst_30863,inst_30859,inst_30866,state_val_30943,c__28320__auto__,map__30787,map__30787__$1,opts,before_jsload,on_jsload,reload_dependents,map__30788,map__30788__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30867){
var map__30998 = p__30867;
var map__30998__$1 = (((((!((map__30998 == null))))?(((((map__30998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30998):map__30998);
var request_url = cljs.core.get.call(null,map__30998__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30855,inst_30858,inst_30861,inst_30863,inst_30859,inst_30866,state_val_30943,c__28320__auto__,map__30787,map__30787__$1,opts,before_jsload,on_jsload,reload_dependents,map__30788,map__30788__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30869 = cljs.core.reverse.call(null,inst_30863);
var inst_30870 = cljs.core.map.call(null,inst_30868,inst_30869);
var inst_30871 = cljs.core.pr_str.call(null,inst_30870);
var inst_30872 = figwheel.client.utils.log.call(null,inst_30871);
var state_30942__$1 = (function (){var statearr_31000 = state_30942;
(statearr_31000[(31)] = inst_30866);

return statearr_31000;
})();
var statearr_31001_31068 = state_30942__$1;
(statearr_31001_31068[(2)] = inst_30872);

(statearr_31001_31068[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (35))){
var state_30942__$1 = state_30942;
var statearr_31002_31069 = state_30942__$1;
(statearr_31002_31069[(2)] = true);

(statearr_31002_31069[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (19))){
var inst_30845 = (state_30942[(12)]);
var inst_30851 = figwheel.client.file_reloading.expand_files.call(null,inst_30845);
var state_30942__$1 = state_30942;
var statearr_31003_31070 = state_30942__$1;
(statearr_31003_31070[(2)] = inst_30851);

(statearr_31003_31070[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (11))){
var state_30942__$1 = state_30942;
var statearr_31004_31071 = state_30942__$1;
(statearr_31004_31071[(2)] = null);

(statearr_31004_31071[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (9))){
var inst_30834 = (state_30942[(2)]);
var state_30942__$1 = state_30942;
var statearr_31005_31072 = state_30942__$1;
(statearr_31005_31072[(2)] = inst_30834);

(statearr_31005_31072[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (5))){
var inst_30804 = (state_30942[(9)]);
var inst_30805 = (state_30942[(10)]);
var inst_30807 = (inst_30805 < inst_30804);
var inst_30808 = inst_30807;
var state_30942__$1 = state_30942;
if(cljs.core.truth_(inst_30808)){
var statearr_31006_31073 = state_30942__$1;
(statearr_31006_31073[(1)] = (7));

} else {
var statearr_31007_31074 = state_30942__$1;
(statearr_31007_31074[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (14))){
var inst_30815 = (state_30942[(22)]);
var inst_30824 = cljs.core.first.call(null,inst_30815);
var inst_30825 = figwheel.client.file_reloading.eval_body.call(null,inst_30824,opts);
var inst_30826 = cljs.core.next.call(null,inst_30815);
var inst_30802 = inst_30826;
var inst_30803 = null;
var inst_30804 = (0);
var inst_30805 = (0);
var state_30942__$1 = (function (){var statearr_31008 = state_30942;
(statearr_31008[(7)] = inst_30803);

(statearr_31008[(32)] = inst_30825);

(statearr_31008[(8)] = inst_30802);

(statearr_31008[(9)] = inst_30804);

(statearr_31008[(10)] = inst_30805);

return statearr_31008;
})();
var statearr_31009_31075 = state_30942__$1;
(statearr_31009_31075[(2)] = null);

(statearr_31009_31075[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (45))){
var state_30942__$1 = state_30942;
var statearr_31010_31076 = state_30942__$1;
(statearr_31010_31076[(2)] = null);

(statearr_31010_31076[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (26))){
var inst_30855 = (state_30942[(19)]);
var inst_30858 = (state_30942[(23)]);
var inst_30861 = (state_30942[(26)]);
var inst_30863 = (state_30942[(24)]);
var inst_30859 = (state_30942[(25)]);
var inst_30878 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30880 = (function (){var all_files = inst_30855;
var res_SINGLEQUOTE_ = inst_30858;
var res = inst_30859;
var files_not_loaded = inst_30861;
var dependencies_that_loaded = inst_30863;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30855,inst_30858,inst_30861,inst_30863,inst_30859,inst_30878,state_val_30943,c__28320__auto__,map__30787,map__30787__$1,opts,before_jsload,on_jsload,reload_dependents,map__30788,map__30788__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30879){
var map__31011 = p__30879;
var map__31011__$1 = (((((!((map__31011 == null))))?(((((map__31011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31011):map__31011);
var namespace = cljs.core.get.call(null,map__31011__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31011__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30855,inst_30858,inst_30861,inst_30863,inst_30859,inst_30878,state_val_30943,c__28320__auto__,map__30787,map__30787__$1,opts,before_jsload,on_jsload,reload_dependents,map__30788,map__30788__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30881 = cljs.core.map.call(null,inst_30880,inst_30859);
var inst_30882 = cljs.core.pr_str.call(null,inst_30881);
var inst_30883 = figwheel.client.utils.log.call(null,inst_30882);
var inst_30884 = (function (){var all_files = inst_30855;
var res_SINGLEQUOTE_ = inst_30858;
var res = inst_30859;
var files_not_loaded = inst_30861;
var dependencies_that_loaded = inst_30863;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30855,inst_30858,inst_30861,inst_30863,inst_30859,inst_30878,inst_30880,inst_30881,inst_30882,inst_30883,state_val_30943,c__28320__auto__,map__30787,map__30787__$1,opts,before_jsload,on_jsload,reload_dependents,map__30788,map__30788__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30855,inst_30858,inst_30861,inst_30863,inst_30859,inst_30878,inst_30880,inst_30881,inst_30882,inst_30883,state_val_30943,c__28320__auto__,map__30787,map__30787__$1,opts,before_jsload,on_jsload,reload_dependents,map__30788,map__30788__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30885 = setTimeout(inst_30884,(10));
var state_30942__$1 = (function (){var statearr_31013 = state_30942;
(statearr_31013[(33)] = inst_30883);

(statearr_31013[(34)] = inst_30878);

return statearr_31013;
})();
var statearr_31014_31077 = state_30942__$1;
(statearr_31014_31077[(2)] = inst_30885);

(statearr_31014_31077[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (16))){
var state_30942__$1 = state_30942;
var statearr_31015_31078 = state_30942__$1;
(statearr_31015_31078[(2)] = reload_dependents);

(statearr_31015_31078[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (38))){
var inst_30895 = (state_30942[(16)]);
var inst_30913 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30895);
var state_30942__$1 = state_30942;
var statearr_31016_31079 = state_30942__$1;
(statearr_31016_31079[(2)] = inst_30913);

(statearr_31016_31079[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (30))){
var state_30942__$1 = state_30942;
var statearr_31017_31080 = state_30942__$1;
(statearr_31017_31080[(2)] = null);

(statearr_31017_31080[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (10))){
var inst_30815 = (state_30942[(22)]);
var inst_30817 = cljs.core.chunked_seq_QMARK_.call(null,inst_30815);
var state_30942__$1 = state_30942;
if(inst_30817){
var statearr_31018_31081 = state_30942__$1;
(statearr_31018_31081[(1)] = (13));

} else {
var statearr_31019_31082 = state_30942__$1;
(statearr_31019_31082[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (18))){
var inst_30849 = (state_30942[(2)]);
var state_30942__$1 = state_30942;
if(cljs.core.truth_(inst_30849)){
var statearr_31020_31083 = state_30942__$1;
(statearr_31020_31083[(1)] = (19));

} else {
var statearr_31021_31084 = state_30942__$1;
(statearr_31021_31084[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (42))){
var state_30942__$1 = state_30942;
var statearr_31022_31085 = state_30942__$1;
(statearr_31022_31085[(2)] = null);

(statearr_31022_31085[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (37))){
var inst_30908 = (state_30942[(2)]);
var state_30942__$1 = state_30942;
var statearr_31023_31086 = state_30942__$1;
(statearr_31023_31086[(2)] = inst_30908);

(statearr_31023_31086[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (8))){
var inst_30802 = (state_30942[(8)]);
var inst_30815 = (state_30942[(22)]);
var inst_30815__$1 = cljs.core.seq.call(null,inst_30802);
var state_30942__$1 = (function (){var statearr_31024 = state_30942;
(statearr_31024[(22)] = inst_30815__$1);

return statearr_31024;
})();
if(inst_30815__$1){
var statearr_31025_31087 = state_30942__$1;
(statearr_31025_31087[(1)] = (10));

} else {
var statearr_31026_31088 = state_30942__$1;
(statearr_31026_31088[(1)] = (11));

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
});})(c__28320__auto__,map__30787,map__30787__$1,opts,before_jsload,on_jsload,reload_dependents,map__30788,map__30788__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28225__auto__,c__28320__auto__,map__30787,map__30787__$1,opts,before_jsload,on_jsload,reload_dependents,map__30788,map__30788__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28226__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28226__auto____0 = (function (){
var statearr_31027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31027[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28226__auto__);

(statearr_31027[(1)] = (1));

return statearr_31027;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28226__auto____1 = (function (state_30942){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_30942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e31028){if((e31028 instanceof Object)){
var ex__28229__auto__ = e31028;
var statearr_31029_31089 = state_30942;
(statearr_31029_31089[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31090 = state_30942;
state_30942 = G__31090;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28226__auto__ = function(state_30942){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28226__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28226__auto____1.call(this,state_30942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28226__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28226__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28320__auto__,map__30787,map__30787__$1,opts,before_jsload,on_jsload,reload_dependents,map__30788,map__30788__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28322__auto__ = (function (){var statearr_31030 = f__28321__auto__.call(null);
(statearr_31030[(6)] = c__28320__auto__);

return statearr_31030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28322__auto__);
});})(c__28320__auto__,map__30787,map__30787__$1,opts,before_jsload,on_jsload,reload_dependents,map__30788,map__30788__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28320__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31093,link){
var map__31094 = p__31093;
var map__31094__$1 = (((((!((map__31094 == null))))?(((((map__31094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31094):map__31094);
var file = cljs.core.get.call(null,map__31094__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__31094,map__31094__$1,file){
return (function (p1__31091_SHARP_,p2__31092_SHARP_){
if(cljs.core._EQ_.call(null,p1__31091_SHARP_,p2__31092_SHARP_)){
return p1__31091_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__31094,map__31094__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31097){
var map__31098 = p__31097;
var map__31098__$1 = (((((!((map__31098 == null))))?(((((map__31098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31098):map__31098);
var match_length = cljs.core.get.call(null,map__31098__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31098__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31096_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31096_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31100_SHARP_,p2__31101_SHARP_){
return cljs.core.assoc.call(null,p1__31100_SHARP_,cljs.core.get.call(null,p2__31101_SHARP_,key),p2__31101_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_31102 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_31102);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_31102);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31103,p__31104){
var map__31105 = p__31103;
var map__31105__$1 = (((((!((map__31105 == null))))?(((((map__31105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31105):map__31105);
var on_cssload = cljs.core.get.call(null,map__31105__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__31106 = p__31104;
var map__31106__$1 = (((((!((map__31106 == null))))?(((((map__31106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31106):map__31106);
var files_msg = map__31106__$1;
var files = cljs.core.get.call(null,map__31106__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1572229110668
