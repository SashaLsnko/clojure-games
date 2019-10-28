// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28380 = arguments.length;
switch (G__28380) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28381 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28381 = (function (f,blockable,meta28382){
this.f = f;
this.blockable = blockable;
this.meta28382 = meta28382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28383,meta28382__$1){
var self__ = this;
var _28383__$1 = this;
return (new cljs.core.async.t_cljs$core$async28381(self__.f,self__.blockable,meta28382__$1));
});

cljs.core.async.t_cljs$core$async28381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28383){
var self__ = this;
var _28383__$1 = this;
return self__.meta28382;
});

cljs.core.async.t_cljs$core$async28381.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28381.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28381.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28381.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28381.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28382","meta28382",1002029291,null)], null);
});

cljs.core.async.t_cljs$core$async28381.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28381.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28381";

cljs.core.async.t_cljs$core$async28381.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async28381");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28381.
 */
cljs.core.async.__GT_t_cljs$core$async28381 = (function cljs$core$async$__GT_t_cljs$core$async28381(f__$1,blockable__$1,meta28382){
return (new cljs.core.async.t_cljs$core$async28381(f__$1,blockable__$1,meta28382));
});

}

return (new cljs.core.async.t_cljs$core$async28381(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__28387 = arguments.length;
switch (G__28387) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__28390 = arguments.length;
switch (G__28390) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__28393 = arguments.length;
switch (G__28393) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28395 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28395);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28395,ret){
return (function (){
return fn1.call(null,val_28395);
});})(val_28395,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__28397 = arguments.length;
switch (G__28397) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___28399 = n;
var x_28400 = (0);
while(true){
if((x_28400 < n__4607__auto___28399)){
(a[x_28400] = (0));

var G__28401 = (x_28400 + (1));
x_28400 = G__28401;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28402 = (i + (1));
i = G__28402;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28403 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28403 = (function (flag,meta28404){
this.flag = flag;
this.meta28404 = meta28404;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28405,meta28404__$1){
var self__ = this;
var _28405__$1 = this;
return (new cljs.core.async.t_cljs$core$async28403(self__.flag,meta28404__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28403.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28405){
var self__ = this;
var _28405__$1 = this;
return self__.meta28404;
});})(flag))
;

cljs.core.async.t_cljs$core$async28403.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28403.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28403.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28403.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28403.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28404","meta28404",-1097637651,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28403.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28403.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28403";

cljs.core.async.t_cljs$core$async28403.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async28403");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28403.
 */
cljs.core.async.__GT_t_cljs$core$async28403 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28403(flag__$1,meta28404){
return (new cljs.core.async.t_cljs$core$async28403(flag__$1,meta28404));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28403(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28406 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28406 = (function (flag,cb,meta28407){
this.flag = flag;
this.cb = cb;
this.meta28407 = meta28407;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28408,meta28407__$1){
var self__ = this;
var _28408__$1 = this;
return (new cljs.core.async.t_cljs$core$async28406(self__.flag,self__.cb,meta28407__$1));
});

cljs.core.async.t_cljs$core$async28406.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28408){
var self__ = this;
var _28408__$1 = this;
return self__.meta28407;
});

cljs.core.async.t_cljs$core$async28406.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28406.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28406.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28406.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28406.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28407","meta28407",-339451069,null)], null);
});

cljs.core.async.t_cljs$core$async28406.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28406.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28406";

cljs.core.async.t_cljs$core$async28406.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async28406");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28406.
 */
cljs.core.async.__GT_t_cljs$core$async28406 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28406(flag__$1,cb__$1,meta28407){
return (new cljs.core.async.t_cljs$core$async28406(flag__$1,cb__$1,meta28407));
});

}

return (new cljs.core.async.t_cljs$core$async28406(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28409_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28409_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28410_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28410_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28411 = (i + (1));
i = G__28411;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___28417 = arguments.length;
var i__4731__auto___28418 = (0);
while(true){
if((i__4731__auto___28418 < len__4730__auto___28417)){
args__4736__auto__.push((arguments[i__4731__auto___28418]));

var G__28419 = (i__4731__auto___28418 + (1));
i__4731__auto___28418 = G__28419;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28414){
var map__28415 = p__28414;
var map__28415__$1 = (((((!((map__28415 == null))))?(((((map__28415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28415):map__28415);
var opts = map__28415__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28412){
var G__28413 = cljs.core.first.call(null,seq28412);
var seq28412__$1 = cljs.core.next.call(null,seq28412);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28413,seq28412__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__28421 = arguments.length;
switch (G__28421) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28320__auto___28467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28320__auto___28467){
return (function (){
var f__28321__auto__ = (function (){var switch__28225__auto__ = ((function (c__28320__auto___28467){
return (function (state_28445){
var state_val_28446 = (state_28445[(1)]);
if((state_val_28446 === (7))){
var inst_28441 = (state_28445[(2)]);
var state_28445__$1 = state_28445;
var statearr_28447_28468 = state_28445__$1;
(statearr_28447_28468[(2)] = inst_28441);

(statearr_28447_28468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28446 === (1))){
var state_28445__$1 = state_28445;
var statearr_28448_28469 = state_28445__$1;
(statearr_28448_28469[(2)] = null);

(statearr_28448_28469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28446 === (4))){
var inst_28424 = (state_28445[(7)]);
var inst_28424__$1 = (state_28445[(2)]);
var inst_28425 = (inst_28424__$1 == null);
var state_28445__$1 = (function (){var statearr_28449 = state_28445;
(statearr_28449[(7)] = inst_28424__$1);

return statearr_28449;
})();
if(cljs.core.truth_(inst_28425)){
var statearr_28450_28470 = state_28445__$1;
(statearr_28450_28470[(1)] = (5));

} else {
var statearr_28451_28471 = state_28445__$1;
(statearr_28451_28471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28446 === (13))){
var state_28445__$1 = state_28445;
var statearr_28452_28472 = state_28445__$1;
(statearr_28452_28472[(2)] = null);

(statearr_28452_28472[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28446 === (6))){
var inst_28424 = (state_28445[(7)]);
var state_28445__$1 = state_28445;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28445__$1,(11),to,inst_28424);
} else {
if((state_val_28446 === (3))){
var inst_28443 = (state_28445[(2)]);
var state_28445__$1 = state_28445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28445__$1,inst_28443);
} else {
if((state_val_28446 === (12))){
var state_28445__$1 = state_28445;
var statearr_28453_28473 = state_28445__$1;
(statearr_28453_28473[(2)] = null);

(statearr_28453_28473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28446 === (2))){
var state_28445__$1 = state_28445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28445__$1,(4),from);
} else {
if((state_val_28446 === (11))){
var inst_28434 = (state_28445[(2)]);
var state_28445__$1 = state_28445;
if(cljs.core.truth_(inst_28434)){
var statearr_28454_28474 = state_28445__$1;
(statearr_28454_28474[(1)] = (12));

} else {
var statearr_28455_28475 = state_28445__$1;
(statearr_28455_28475[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28446 === (9))){
var state_28445__$1 = state_28445;
var statearr_28456_28476 = state_28445__$1;
(statearr_28456_28476[(2)] = null);

(statearr_28456_28476[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28446 === (5))){
var state_28445__$1 = state_28445;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28457_28477 = state_28445__$1;
(statearr_28457_28477[(1)] = (8));

} else {
var statearr_28458_28478 = state_28445__$1;
(statearr_28458_28478[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28446 === (14))){
var inst_28439 = (state_28445[(2)]);
var state_28445__$1 = state_28445;
var statearr_28459_28479 = state_28445__$1;
(statearr_28459_28479[(2)] = inst_28439);

(statearr_28459_28479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28446 === (10))){
var inst_28431 = (state_28445[(2)]);
var state_28445__$1 = state_28445;
var statearr_28460_28480 = state_28445__$1;
(statearr_28460_28480[(2)] = inst_28431);

(statearr_28460_28480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28446 === (8))){
var inst_28428 = cljs.core.async.close_BANG_.call(null,to);
var state_28445__$1 = state_28445;
var statearr_28461_28481 = state_28445__$1;
(statearr_28461_28481[(2)] = inst_28428);

(statearr_28461_28481[(1)] = (10));


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
});})(c__28320__auto___28467))
;
return ((function (switch__28225__auto__,c__28320__auto___28467){
return (function() {
var cljs$core$async$state_machine__28226__auto__ = null;
var cljs$core$async$state_machine__28226__auto____0 = (function (){
var statearr_28462 = [null,null,null,null,null,null,null,null];
(statearr_28462[(0)] = cljs$core$async$state_machine__28226__auto__);

(statearr_28462[(1)] = (1));

return statearr_28462;
});
var cljs$core$async$state_machine__28226__auto____1 = (function (state_28445){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_28445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e28463){if((e28463 instanceof Object)){
var ex__28229__auto__ = e28463;
var statearr_28464_28482 = state_28445;
(statearr_28464_28482[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28483 = state_28445;
state_28445 = G__28483;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$state_machine__28226__auto__ = function(state_28445){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28226__auto____1.call(this,state_28445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28226__auto____0;
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28226__auto____1;
return cljs$core$async$state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28320__auto___28467))
})();
var state__28322__auto__ = (function (){var statearr_28465 = f__28321__auto__.call(null);
(statearr_28465[(6)] = c__28320__auto___28467);

return statearr_28465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28322__auto__);
});})(c__28320__auto___28467))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28484){
var vec__28485 = p__28484;
var v = cljs.core.nth.call(null,vec__28485,(0),null);
var p = cljs.core.nth.call(null,vec__28485,(1),null);
var job = vec__28485;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28320__auto___28656 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28320__auto___28656,res,vec__28485,v,p,job,jobs,results){
return (function (){
var f__28321__auto__ = (function (){var switch__28225__auto__ = ((function (c__28320__auto___28656,res,vec__28485,v,p,job,jobs,results){
return (function (state_28492){
var state_val_28493 = (state_28492[(1)]);
if((state_val_28493 === (1))){
var state_28492__$1 = state_28492;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28492__$1,(2),res,v);
} else {
if((state_val_28493 === (2))){
var inst_28489 = (state_28492[(2)]);
var inst_28490 = cljs.core.async.close_BANG_.call(null,res);
var state_28492__$1 = (function (){var statearr_28494 = state_28492;
(statearr_28494[(7)] = inst_28489);

return statearr_28494;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28492__$1,inst_28490);
} else {
return null;
}
}
});})(c__28320__auto___28656,res,vec__28485,v,p,job,jobs,results))
;
return ((function (switch__28225__auto__,c__28320__auto___28656,res,vec__28485,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____0 = (function (){
var statearr_28495 = [null,null,null,null,null,null,null,null];
(statearr_28495[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__);

(statearr_28495[(1)] = (1));

return statearr_28495;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____1 = (function (state_28492){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_28492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e28496){if((e28496 instanceof Object)){
var ex__28229__auto__ = e28496;
var statearr_28497_28657 = state_28492;
(statearr_28497_28657[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28658 = state_28492;
state_28492 = G__28658;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__ = function(state_28492){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____1.call(this,state_28492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28320__auto___28656,res,vec__28485,v,p,job,jobs,results))
})();
var state__28322__auto__ = (function (){var statearr_28498 = f__28321__auto__.call(null);
(statearr_28498[(6)] = c__28320__auto___28656);

return statearr_28498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28322__auto__);
});})(c__28320__auto___28656,res,vec__28485,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28499){
var vec__28500 = p__28499;
var v = cljs.core.nth.call(null,vec__28500,(0),null);
var p = cljs.core.nth.call(null,vec__28500,(1),null);
var job = vec__28500;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___28659 = n;
var __28660 = (0);
while(true){
if((__28660 < n__4607__auto___28659)){
var G__28503_28661 = type;
var G__28503_28662__$1 = (((G__28503_28661 instanceof cljs.core.Keyword))?G__28503_28661.fqn:null);
switch (G__28503_28662__$1) {
case "compute":
var c__28320__auto___28664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28660,c__28320__auto___28664,G__28503_28661,G__28503_28662__$1,n__4607__auto___28659,jobs,results,process,async){
return (function (){
var f__28321__auto__ = (function (){var switch__28225__auto__ = ((function (__28660,c__28320__auto___28664,G__28503_28661,G__28503_28662__$1,n__4607__auto___28659,jobs,results,process,async){
return (function (state_28516){
var state_val_28517 = (state_28516[(1)]);
if((state_val_28517 === (1))){
var state_28516__$1 = state_28516;
var statearr_28518_28665 = state_28516__$1;
(statearr_28518_28665[(2)] = null);

(statearr_28518_28665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28517 === (2))){
var state_28516__$1 = state_28516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28516__$1,(4),jobs);
} else {
if((state_val_28517 === (3))){
var inst_28514 = (state_28516[(2)]);
var state_28516__$1 = state_28516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28516__$1,inst_28514);
} else {
if((state_val_28517 === (4))){
var inst_28506 = (state_28516[(2)]);
var inst_28507 = process.call(null,inst_28506);
var state_28516__$1 = state_28516;
if(cljs.core.truth_(inst_28507)){
var statearr_28519_28666 = state_28516__$1;
(statearr_28519_28666[(1)] = (5));

} else {
var statearr_28520_28667 = state_28516__$1;
(statearr_28520_28667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28517 === (5))){
var state_28516__$1 = state_28516;
var statearr_28521_28668 = state_28516__$1;
(statearr_28521_28668[(2)] = null);

(statearr_28521_28668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28517 === (6))){
var state_28516__$1 = state_28516;
var statearr_28522_28669 = state_28516__$1;
(statearr_28522_28669[(2)] = null);

(statearr_28522_28669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28517 === (7))){
var inst_28512 = (state_28516[(2)]);
var state_28516__$1 = state_28516;
var statearr_28523_28670 = state_28516__$1;
(statearr_28523_28670[(2)] = inst_28512);

(statearr_28523_28670[(1)] = (3));


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
});})(__28660,c__28320__auto___28664,G__28503_28661,G__28503_28662__$1,n__4607__auto___28659,jobs,results,process,async))
;
return ((function (__28660,switch__28225__auto__,c__28320__auto___28664,G__28503_28661,G__28503_28662__$1,n__4607__auto___28659,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____0 = (function (){
var statearr_28524 = [null,null,null,null,null,null,null];
(statearr_28524[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__);

(statearr_28524[(1)] = (1));

return statearr_28524;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____1 = (function (state_28516){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_28516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e28525){if((e28525 instanceof Object)){
var ex__28229__auto__ = e28525;
var statearr_28526_28671 = state_28516;
(statearr_28526_28671[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28672 = state_28516;
state_28516 = G__28672;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__ = function(state_28516){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____1.call(this,state_28516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__;
})()
;})(__28660,switch__28225__auto__,c__28320__auto___28664,G__28503_28661,G__28503_28662__$1,n__4607__auto___28659,jobs,results,process,async))
})();
var state__28322__auto__ = (function (){var statearr_28527 = f__28321__auto__.call(null);
(statearr_28527[(6)] = c__28320__auto___28664);

return statearr_28527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28322__auto__);
});})(__28660,c__28320__auto___28664,G__28503_28661,G__28503_28662__$1,n__4607__auto___28659,jobs,results,process,async))
);


break;
case "async":
var c__28320__auto___28673 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28660,c__28320__auto___28673,G__28503_28661,G__28503_28662__$1,n__4607__auto___28659,jobs,results,process,async){
return (function (){
var f__28321__auto__ = (function (){var switch__28225__auto__ = ((function (__28660,c__28320__auto___28673,G__28503_28661,G__28503_28662__$1,n__4607__auto___28659,jobs,results,process,async){
return (function (state_28540){
var state_val_28541 = (state_28540[(1)]);
if((state_val_28541 === (1))){
var state_28540__$1 = state_28540;
var statearr_28542_28674 = state_28540__$1;
(statearr_28542_28674[(2)] = null);

(statearr_28542_28674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28541 === (2))){
var state_28540__$1 = state_28540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28540__$1,(4),jobs);
} else {
if((state_val_28541 === (3))){
var inst_28538 = (state_28540[(2)]);
var state_28540__$1 = state_28540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28540__$1,inst_28538);
} else {
if((state_val_28541 === (4))){
var inst_28530 = (state_28540[(2)]);
var inst_28531 = async.call(null,inst_28530);
var state_28540__$1 = state_28540;
if(cljs.core.truth_(inst_28531)){
var statearr_28543_28675 = state_28540__$1;
(statearr_28543_28675[(1)] = (5));

} else {
var statearr_28544_28676 = state_28540__$1;
(statearr_28544_28676[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28541 === (5))){
var state_28540__$1 = state_28540;
var statearr_28545_28677 = state_28540__$1;
(statearr_28545_28677[(2)] = null);

(statearr_28545_28677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28541 === (6))){
var state_28540__$1 = state_28540;
var statearr_28546_28678 = state_28540__$1;
(statearr_28546_28678[(2)] = null);

(statearr_28546_28678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28541 === (7))){
var inst_28536 = (state_28540[(2)]);
var state_28540__$1 = state_28540;
var statearr_28547_28679 = state_28540__$1;
(statearr_28547_28679[(2)] = inst_28536);

(statearr_28547_28679[(1)] = (3));


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
});})(__28660,c__28320__auto___28673,G__28503_28661,G__28503_28662__$1,n__4607__auto___28659,jobs,results,process,async))
;
return ((function (__28660,switch__28225__auto__,c__28320__auto___28673,G__28503_28661,G__28503_28662__$1,n__4607__auto___28659,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____0 = (function (){
var statearr_28548 = [null,null,null,null,null,null,null];
(statearr_28548[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__);

(statearr_28548[(1)] = (1));

return statearr_28548;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____1 = (function (state_28540){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_28540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e28549){if((e28549 instanceof Object)){
var ex__28229__auto__ = e28549;
var statearr_28550_28680 = state_28540;
(statearr_28550_28680[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28681 = state_28540;
state_28540 = G__28681;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__ = function(state_28540){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____1.call(this,state_28540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__;
})()
;})(__28660,switch__28225__auto__,c__28320__auto___28673,G__28503_28661,G__28503_28662__$1,n__4607__auto___28659,jobs,results,process,async))
})();
var state__28322__auto__ = (function (){var statearr_28551 = f__28321__auto__.call(null);
(statearr_28551[(6)] = c__28320__auto___28673);

return statearr_28551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28322__auto__);
});})(__28660,c__28320__auto___28673,G__28503_28661,G__28503_28662__$1,n__4607__auto___28659,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28503_28662__$1)].join('')));

}

var G__28682 = (__28660 + (1));
__28660 = G__28682;
continue;
} else {
}
break;
}

var c__28320__auto___28683 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28320__auto___28683,jobs,results,process,async){
return (function (){
var f__28321__auto__ = (function (){var switch__28225__auto__ = ((function (c__28320__auto___28683,jobs,results,process,async){
return (function (state_28573){
var state_val_28574 = (state_28573[(1)]);
if((state_val_28574 === (7))){
var inst_28569 = (state_28573[(2)]);
var state_28573__$1 = state_28573;
var statearr_28575_28684 = state_28573__$1;
(statearr_28575_28684[(2)] = inst_28569);

(statearr_28575_28684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28574 === (1))){
var state_28573__$1 = state_28573;
var statearr_28576_28685 = state_28573__$1;
(statearr_28576_28685[(2)] = null);

(statearr_28576_28685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28574 === (4))){
var inst_28554 = (state_28573[(7)]);
var inst_28554__$1 = (state_28573[(2)]);
var inst_28555 = (inst_28554__$1 == null);
var state_28573__$1 = (function (){var statearr_28577 = state_28573;
(statearr_28577[(7)] = inst_28554__$1);

return statearr_28577;
})();
if(cljs.core.truth_(inst_28555)){
var statearr_28578_28686 = state_28573__$1;
(statearr_28578_28686[(1)] = (5));

} else {
var statearr_28579_28687 = state_28573__$1;
(statearr_28579_28687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28574 === (6))){
var inst_28554 = (state_28573[(7)]);
var inst_28559 = (state_28573[(8)]);
var inst_28559__$1 = cljs.core.async.chan.call(null,(1));
var inst_28560 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28561 = [inst_28554,inst_28559__$1];
var inst_28562 = (new cljs.core.PersistentVector(null,2,(5),inst_28560,inst_28561,null));
var state_28573__$1 = (function (){var statearr_28580 = state_28573;
(statearr_28580[(8)] = inst_28559__$1);

return statearr_28580;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28573__$1,(8),jobs,inst_28562);
} else {
if((state_val_28574 === (3))){
var inst_28571 = (state_28573[(2)]);
var state_28573__$1 = state_28573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28573__$1,inst_28571);
} else {
if((state_val_28574 === (2))){
var state_28573__$1 = state_28573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28573__$1,(4),from);
} else {
if((state_val_28574 === (9))){
var inst_28566 = (state_28573[(2)]);
var state_28573__$1 = (function (){var statearr_28581 = state_28573;
(statearr_28581[(9)] = inst_28566);

return statearr_28581;
})();
var statearr_28582_28688 = state_28573__$1;
(statearr_28582_28688[(2)] = null);

(statearr_28582_28688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28574 === (5))){
var inst_28557 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28573__$1 = state_28573;
var statearr_28583_28689 = state_28573__$1;
(statearr_28583_28689[(2)] = inst_28557);

(statearr_28583_28689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28574 === (8))){
var inst_28559 = (state_28573[(8)]);
var inst_28564 = (state_28573[(2)]);
var state_28573__$1 = (function (){var statearr_28584 = state_28573;
(statearr_28584[(10)] = inst_28564);

return statearr_28584;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28573__$1,(9),results,inst_28559);
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
});})(c__28320__auto___28683,jobs,results,process,async))
;
return ((function (switch__28225__auto__,c__28320__auto___28683,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____0 = (function (){
var statearr_28585 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28585[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__);

(statearr_28585[(1)] = (1));

return statearr_28585;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____1 = (function (state_28573){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_28573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e28586){if((e28586 instanceof Object)){
var ex__28229__auto__ = e28586;
var statearr_28587_28690 = state_28573;
(statearr_28587_28690[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28691 = state_28573;
state_28573 = G__28691;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__ = function(state_28573){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____1.call(this,state_28573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28320__auto___28683,jobs,results,process,async))
})();
var state__28322__auto__ = (function (){var statearr_28588 = f__28321__auto__.call(null);
(statearr_28588[(6)] = c__28320__auto___28683);

return statearr_28588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28322__auto__);
});})(c__28320__auto___28683,jobs,results,process,async))
);


var c__28320__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28320__auto__,jobs,results,process,async){
return (function (){
var f__28321__auto__ = (function (){var switch__28225__auto__ = ((function (c__28320__auto__,jobs,results,process,async){
return (function (state_28626){
var state_val_28627 = (state_28626[(1)]);
if((state_val_28627 === (7))){
var inst_28622 = (state_28626[(2)]);
var state_28626__$1 = state_28626;
var statearr_28628_28692 = state_28626__$1;
(statearr_28628_28692[(2)] = inst_28622);

(statearr_28628_28692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (20))){
var state_28626__$1 = state_28626;
var statearr_28629_28693 = state_28626__$1;
(statearr_28629_28693[(2)] = null);

(statearr_28629_28693[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (1))){
var state_28626__$1 = state_28626;
var statearr_28630_28694 = state_28626__$1;
(statearr_28630_28694[(2)] = null);

(statearr_28630_28694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (4))){
var inst_28591 = (state_28626[(7)]);
var inst_28591__$1 = (state_28626[(2)]);
var inst_28592 = (inst_28591__$1 == null);
var state_28626__$1 = (function (){var statearr_28631 = state_28626;
(statearr_28631[(7)] = inst_28591__$1);

return statearr_28631;
})();
if(cljs.core.truth_(inst_28592)){
var statearr_28632_28695 = state_28626__$1;
(statearr_28632_28695[(1)] = (5));

} else {
var statearr_28633_28696 = state_28626__$1;
(statearr_28633_28696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (15))){
var inst_28604 = (state_28626[(8)]);
var state_28626__$1 = state_28626;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28626__$1,(18),to,inst_28604);
} else {
if((state_val_28627 === (21))){
var inst_28617 = (state_28626[(2)]);
var state_28626__$1 = state_28626;
var statearr_28634_28697 = state_28626__$1;
(statearr_28634_28697[(2)] = inst_28617);

(statearr_28634_28697[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (13))){
var inst_28619 = (state_28626[(2)]);
var state_28626__$1 = (function (){var statearr_28635 = state_28626;
(statearr_28635[(9)] = inst_28619);

return statearr_28635;
})();
var statearr_28636_28698 = state_28626__$1;
(statearr_28636_28698[(2)] = null);

(statearr_28636_28698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (6))){
var inst_28591 = (state_28626[(7)]);
var state_28626__$1 = state_28626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28626__$1,(11),inst_28591);
} else {
if((state_val_28627 === (17))){
var inst_28612 = (state_28626[(2)]);
var state_28626__$1 = state_28626;
if(cljs.core.truth_(inst_28612)){
var statearr_28637_28699 = state_28626__$1;
(statearr_28637_28699[(1)] = (19));

} else {
var statearr_28638_28700 = state_28626__$1;
(statearr_28638_28700[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (3))){
var inst_28624 = (state_28626[(2)]);
var state_28626__$1 = state_28626;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28626__$1,inst_28624);
} else {
if((state_val_28627 === (12))){
var inst_28601 = (state_28626[(10)]);
var state_28626__$1 = state_28626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28626__$1,(14),inst_28601);
} else {
if((state_val_28627 === (2))){
var state_28626__$1 = state_28626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28626__$1,(4),results);
} else {
if((state_val_28627 === (19))){
var state_28626__$1 = state_28626;
var statearr_28639_28701 = state_28626__$1;
(statearr_28639_28701[(2)] = null);

(statearr_28639_28701[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (11))){
var inst_28601 = (state_28626[(2)]);
var state_28626__$1 = (function (){var statearr_28640 = state_28626;
(statearr_28640[(10)] = inst_28601);

return statearr_28640;
})();
var statearr_28641_28702 = state_28626__$1;
(statearr_28641_28702[(2)] = null);

(statearr_28641_28702[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (9))){
var state_28626__$1 = state_28626;
var statearr_28642_28703 = state_28626__$1;
(statearr_28642_28703[(2)] = null);

(statearr_28642_28703[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (5))){
var state_28626__$1 = state_28626;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28643_28704 = state_28626__$1;
(statearr_28643_28704[(1)] = (8));

} else {
var statearr_28644_28705 = state_28626__$1;
(statearr_28644_28705[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (14))){
var inst_28604 = (state_28626[(8)]);
var inst_28606 = (state_28626[(11)]);
var inst_28604__$1 = (state_28626[(2)]);
var inst_28605 = (inst_28604__$1 == null);
var inst_28606__$1 = cljs.core.not.call(null,inst_28605);
var state_28626__$1 = (function (){var statearr_28645 = state_28626;
(statearr_28645[(8)] = inst_28604__$1);

(statearr_28645[(11)] = inst_28606__$1);

return statearr_28645;
})();
if(inst_28606__$1){
var statearr_28646_28706 = state_28626__$1;
(statearr_28646_28706[(1)] = (15));

} else {
var statearr_28647_28707 = state_28626__$1;
(statearr_28647_28707[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (16))){
var inst_28606 = (state_28626[(11)]);
var state_28626__$1 = state_28626;
var statearr_28648_28708 = state_28626__$1;
(statearr_28648_28708[(2)] = inst_28606);

(statearr_28648_28708[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (10))){
var inst_28598 = (state_28626[(2)]);
var state_28626__$1 = state_28626;
var statearr_28649_28709 = state_28626__$1;
(statearr_28649_28709[(2)] = inst_28598);

(statearr_28649_28709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (18))){
var inst_28609 = (state_28626[(2)]);
var state_28626__$1 = state_28626;
var statearr_28650_28710 = state_28626__$1;
(statearr_28650_28710[(2)] = inst_28609);

(statearr_28650_28710[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (8))){
var inst_28595 = cljs.core.async.close_BANG_.call(null,to);
var state_28626__$1 = state_28626;
var statearr_28651_28711 = state_28626__$1;
(statearr_28651_28711[(2)] = inst_28595);

(statearr_28651_28711[(1)] = (10));


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
});})(c__28320__auto__,jobs,results,process,async))
;
return ((function (switch__28225__auto__,c__28320__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____0 = (function (){
var statearr_28652 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28652[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__);

(statearr_28652[(1)] = (1));

return statearr_28652;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____1 = (function (state_28626){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_28626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e28653){if((e28653 instanceof Object)){
var ex__28229__auto__ = e28653;
var statearr_28654_28712 = state_28626;
(statearr_28654_28712[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28713 = state_28626;
state_28626 = G__28713;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__ = function(state_28626){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____1.call(this,state_28626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28320__auto__,jobs,results,process,async))
})();
var state__28322__auto__ = (function (){var statearr_28655 = f__28321__auto__.call(null);
(statearr_28655[(6)] = c__28320__auto__);

return statearr_28655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28322__auto__);
});})(c__28320__auto__,jobs,results,process,async))
);

return c__28320__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__28715 = arguments.length;
switch (G__28715) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__28718 = arguments.length;
switch (G__28718) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__28721 = arguments.length;
switch (G__28721) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28320__auto___28770 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28320__auto___28770,tc,fc){
return (function (){
var f__28321__auto__ = (function (){var switch__28225__auto__ = ((function (c__28320__auto___28770,tc,fc){
return (function (state_28747){
var state_val_28748 = (state_28747[(1)]);
if((state_val_28748 === (7))){
var inst_28743 = (state_28747[(2)]);
var state_28747__$1 = state_28747;
var statearr_28749_28771 = state_28747__$1;
(statearr_28749_28771[(2)] = inst_28743);

(statearr_28749_28771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28748 === (1))){
var state_28747__$1 = state_28747;
var statearr_28750_28772 = state_28747__$1;
(statearr_28750_28772[(2)] = null);

(statearr_28750_28772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28748 === (4))){
var inst_28724 = (state_28747[(7)]);
var inst_28724__$1 = (state_28747[(2)]);
var inst_28725 = (inst_28724__$1 == null);
var state_28747__$1 = (function (){var statearr_28751 = state_28747;
(statearr_28751[(7)] = inst_28724__$1);

return statearr_28751;
})();
if(cljs.core.truth_(inst_28725)){
var statearr_28752_28773 = state_28747__$1;
(statearr_28752_28773[(1)] = (5));

} else {
var statearr_28753_28774 = state_28747__$1;
(statearr_28753_28774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28748 === (13))){
var state_28747__$1 = state_28747;
var statearr_28754_28775 = state_28747__$1;
(statearr_28754_28775[(2)] = null);

(statearr_28754_28775[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28748 === (6))){
var inst_28724 = (state_28747[(7)]);
var inst_28730 = p.call(null,inst_28724);
var state_28747__$1 = state_28747;
if(cljs.core.truth_(inst_28730)){
var statearr_28755_28776 = state_28747__$1;
(statearr_28755_28776[(1)] = (9));

} else {
var statearr_28756_28777 = state_28747__$1;
(statearr_28756_28777[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28748 === (3))){
var inst_28745 = (state_28747[(2)]);
var state_28747__$1 = state_28747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28747__$1,inst_28745);
} else {
if((state_val_28748 === (12))){
var state_28747__$1 = state_28747;
var statearr_28757_28778 = state_28747__$1;
(statearr_28757_28778[(2)] = null);

(statearr_28757_28778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28748 === (2))){
var state_28747__$1 = state_28747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28747__$1,(4),ch);
} else {
if((state_val_28748 === (11))){
var inst_28724 = (state_28747[(7)]);
var inst_28734 = (state_28747[(2)]);
var state_28747__$1 = state_28747;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28747__$1,(8),inst_28734,inst_28724);
} else {
if((state_val_28748 === (9))){
var state_28747__$1 = state_28747;
var statearr_28758_28779 = state_28747__$1;
(statearr_28758_28779[(2)] = tc);

(statearr_28758_28779[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28748 === (5))){
var inst_28727 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28728 = cljs.core.async.close_BANG_.call(null,fc);
var state_28747__$1 = (function (){var statearr_28759 = state_28747;
(statearr_28759[(8)] = inst_28727);

return statearr_28759;
})();
var statearr_28760_28780 = state_28747__$1;
(statearr_28760_28780[(2)] = inst_28728);

(statearr_28760_28780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28748 === (14))){
var inst_28741 = (state_28747[(2)]);
var state_28747__$1 = state_28747;
var statearr_28761_28781 = state_28747__$1;
(statearr_28761_28781[(2)] = inst_28741);

(statearr_28761_28781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28748 === (10))){
var state_28747__$1 = state_28747;
var statearr_28762_28782 = state_28747__$1;
(statearr_28762_28782[(2)] = fc);

(statearr_28762_28782[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28748 === (8))){
var inst_28736 = (state_28747[(2)]);
var state_28747__$1 = state_28747;
if(cljs.core.truth_(inst_28736)){
var statearr_28763_28783 = state_28747__$1;
(statearr_28763_28783[(1)] = (12));

} else {
var statearr_28764_28784 = state_28747__$1;
(statearr_28764_28784[(1)] = (13));

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
});})(c__28320__auto___28770,tc,fc))
;
return ((function (switch__28225__auto__,c__28320__auto___28770,tc,fc){
return (function() {
var cljs$core$async$state_machine__28226__auto__ = null;
var cljs$core$async$state_machine__28226__auto____0 = (function (){
var statearr_28765 = [null,null,null,null,null,null,null,null,null];
(statearr_28765[(0)] = cljs$core$async$state_machine__28226__auto__);

(statearr_28765[(1)] = (1));

return statearr_28765;
});
var cljs$core$async$state_machine__28226__auto____1 = (function (state_28747){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_28747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e28766){if((e28766 instanceof Object)){
var ex__28229__auto__ = e28766;
var statearr_28767_28785 = state_28747;
(statearr_28767_28785[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28786 = state_28747;
state_28747 = G__28786;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$state_machine__28226__auto__ = function(state_28747){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28226__auto____1.call(this,state_28747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28226__auto____0;
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28226__auto____1;
return cljs$core$async$state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28320__auto___28770,tc,fc))
})();
var state__28322__auto__ = (function (){var statearr_28768 = f__28321__auto__.call(null);
(statearr_28768[(6)] = c__28320__auto___28770);

return statearr_28768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28322__auto__);
});})(c__28320__auto___28770,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28320__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28320__auto__){
return (function (){
var f__28321__auto__ = (function (){var switch__28225__auto__ = ((function (c__28320__auto__){
return (function (state_28807){
var state_val_28808 = (state_28807[(1)]);
if((state_val_28808 === (7))){
var inst_28803 = (state_28807[(2)]);
var state_28807__$1 = state_28807;
var statearr_28809_28827 = state_28807__$1;
(statearr_28809_28827[(2)] = inst_28803);

(statearr_28809_28827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28808 === (1))){
var inst_28787 = init;
var state_28807__$1 = (function (){var statearr_28810 = state_28807;
(statearr_28810[(7)] = inst_28787);

return statearr_28810;
})();
var statearr_28811_28828 = state_28807__$1;
(statearr_28811_28828[(2)] = null);

(statearr_28811_28828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28808 === (4))){
var inst_28790 = (state_28807[(8)]);
var inst_28790__$1 = (state_28807[(2)]);
var inst_28791 = (inst_28790__$1 == null);
var state_28807__$1 = (function (){var statearr_28812 = state_28807;
(statearr_28812[(8)] = inst_28790__$1);

return statearr_28812;
})();
if(cljs.core.truth_(inst_28791)){
var statearr_28813_28829 = state_28807__$1;
(statearr_28813_28829[(1)] = (5));

} else {
var statearr_28814_28830 = state_28807__$1;
(statearr_28814_28830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28808 === (6))){
var inst_28790 = (state_28807[(8)]);
var inst_28787 = (state_28807[(7)]);
var inst_28794 = (state_28807[(9)]);
var inst_28794__$1 = f.call(null,inst_28787,inst_28790);
var inst_28795 = cljs.core.reduced_QMARK_.call(null,inst_28794__$1);
var state_28807__$1 = (function (){var statearr_28815 = state_28807;
(statearr_28815[(9)] = inst_28794__$1);

return statearr_28815;
})();
if(inst_28795){
var statearr_28816_28831 = state_28807__$1;
(statearr_28816_28831[(1)] = (8));

} else {
var statearr_28817_28832 = state_28807__$1;
(statearr_28817_28832[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28808 === (3))){
var inst_28805 = (state_28807[(2)]);
var state_28807__$1 = state_28807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28807__$1,inst_28805);
} else {
if((state_val_28808 === (2))){
var state_28807__$1 = state_28807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28807__$1,(4),ch);
} else {
if((state_val_28808 === (9))){
var inst_28794 = (state_28807[(9)]);
var inst_28787 = inst_28794;
var state_28807__$1 = (function (){var statearr_28818 = state_28807;
(statearr_28818[(7)] = inst_28787);

return statearr_28818;
})();
var statearr_28819_28833 = state_28807__$1;
(statearr_28819_28833[(2)] = null);

(statearr_28819_28833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28808 === (5))){
var inst_28787 = (state_28807[(7)]);
var state_28807__$1 = state_28807;
var statearr_28820_28834 = state_28807__$1;
(statearr_28820_28834[(2)] = inst_28787);

(statearr_28820_28834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28808 === (10))){
var inst_28801 = (state_28807[(2)]);
var state_28807__$1 = state_28807;
var statearr_28821_28835 = state_28807__$1;
(statearr_28821_28835[(2)] = inst_28801);

(statearr_28821_28835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28808 === (8))){
var inst_28794 = (state_28807[(9)]);
var inst_28797 = cljs.core.deref.call(null,inst_28794);
var state_28807__$1 = state_28807;
var statearr_28822_28836 = state_28807__$1;
(statearr_28822_28836[(2)] = inst_28797);

(statearr_28822_28836[(1)] = (10));


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
});})(c__28320__auto__))
;
return ((function (switch__28225__auto__,c__28320__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28226__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28226__auto____0 = (function (){
var statearr_28823 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28823[(0)] = cljs$core$async$reduce_$_state_machine__28226__auto__);

(statearr_28823[(1)] = (1));

return statearr_28823;
});
var cljs$core$async$reduce_$_state_machine__28226__auto____1 = (function (state_28807){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_28807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e28824){if((e28824 instanceof Object)){
var ex__28229__auto__ = e28824;
var statearr_28825_28837 = state_28807;
(statearr_28825_28837[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28838 = state_28807;
state_28807 = G__28838;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28226__auto__ = function(state_28807){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28226__auto____1.call(this,state_28807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28226__auto____0;
cljs$core$async$reduce_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28226__auto____1;
return cljs$core$async$reduce_$_state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28320__auto__))
})();
var state__28322__auto__ = (function (){var statearr_28826 = f__28321__auto__.call(null);
(statearr_28826[(6)] = c__28320__auto__);

return statearr_28826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28322__auto__);
});})(c__28320__auto__))
);

return c__28320__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__28320__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28320__auto__,f__$1){
return (function (){
var f__28321__auto__ = (function (){var switch__28225__auto__ = ((function (c__28320__auto__,f__$1){
return (function (state_28844){
var state_val_28845 = (state_28844[(1)]);
if((state_val_28845 === (1))){
var inst_28839 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_28844__$1 = state_28844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28844__$1,(2),inst_28839);
} else {
if((state_val_28845 === (2))){
var inst_28841 = (state_28844[(2)]);
var inst_28842 = f__$1.call(null,inst_28841);
var state_28844__$1 = state_28844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28844__$1,inst_28842);
} else {
return null;
}
}
});})(c__28320__auto__,f__$1))
;
return ((function (switch__28225__auto__,c__28320__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__28226__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28226__auto____0 = (function (){
var statearr_28846 = [null,null,null,null,null,null,null];
(statearr_28846[(0)] = cljs$core$async$transduce_$_state_machine__28226__auto__);

(statearr_28846[(1)] = (1));

return statearr_28846;
});
var cljs$core$async$transduce_$_state_machine__28226__auto____1 = (function (state_28844){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_28844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e28847){if((e28847 instanceof Object)){
var ex__28229__auto__ = e28847;
var statearr_28848_28850 = state_28844;
(statearr_28848_28850[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28851 = state_28844;
state_28844 = G__28851;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28226__auto__ = function(state_28844){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28226__auto____1.call(this,state_28844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28226__auto____0;
cljs$core$async$transduce_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28226__auto____1;
return cljs$core$async$transduce_$_state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28320__auto__,f__$1))
})();
var state__28322__auto__ = (function (){var statearr_28849 = f__28321__auto__.call(null);
(statearr_28849[(6)] = c__28320__auto__);

return statearr_28849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28322__auto__);
});})(c__28320__auto__,f__$1))
);

return c__28320__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__28853 = arguments.length;
switch (G__28853) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28320__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28320__auto__){
return (function (){
var f__28321__auto__ = (function (){var switch__28225__auto__ = ((function (c__28320__auto__){
return (function (state_28878){
var state_val_28879 = (state_28878[(1)]);
if((state_val_28879 === (7))){
var inst_28860 = (state_28878[(2)]);
var state_28878__$1 = state_28878;
var statearr_28880_28901 = state_28878__$1;
(statearr_28880_28901[(2)] = inst_28860);

(statearr_28880_28901[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (1))){
var inst_28854 = cljs.core.seq.call(null,coll);
var inst_28855 = inst_28854;
var state_28878__$1 = (function (){var statearr_28881 = state_28878;
(statearr_28881[(7)] = inst_28855);

return statearr_28881;
})();
var statearr_28882_28902 = state_28878__$1;
(statearr_28882_28902[(2)] = null);

(statearr_28882_28902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (4))){
var inst_28855 = (state_28878[(7)]);
var inst_28858 = cljs.core.first.call(null,inst_28855);
var state_28878__$1 = state_28878;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28878__$1,(7),ch,inst_28858);
} else {
if((state_val_28879 === (13))){
var inst_28872 = (state_28878[(2)]);
var state_28878__$1 = state_28878;
var statearr_28883_28903 = state_28878__$1;
(statearr_28883_28903[(2)] = inst_28872);

(statearr_28883_28903[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (6))){
var inst_28863 = (state_28878[(2)]);
var state_28878__$1 = state_28878;
if(cljs.core.truth_(inst_28863)){
var statearr_28884_28904 = state_28878__$1;
(statearr_28884_28904[(1)] = (8));

} else {
var statearr_28885_28905 = state_28878__$1;
(statearr_28885_28905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (3))){
var inst_28876 = (state_28878[(2)]);
var state_28878__$1 = state_28878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28878__$1,inst_28876);
} else {
if((state_val_28879 === (12))){
var state_28878__$1 = state_28878;
var statearr_28886_28906 = state_28878__$1;
(statearr_28886_28906[(2)] = null);

(statearr_28886_28906[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (2))){
var inst_28855 = (state_28878[(7)]);
var state_28878__$1 = state_28878;
if(cljs.core.truth_(inst_28855)){
var statearr_28887_28907 = state_28878__$1;
(statearr_28887_28907[(1)] = (4));

} else {
var statearr_28888_28908 = state_28878__$1;
(statearr_28888_28908[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (11))){
var inst_28869 = cljs.core.async.close_BANG_.call(null,ch);
var state_28878__$1 = state_28878;
var statearr_28889_28909 = state_28878__$1;
(statearr_28889_28909[(2)] = inst_28869);

(statearr_28889_28909[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (9))){
var state_28878__$1 = state_28878;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28890_28910 = state_28878__$1;
(statearr_28890_28910[(1)] = (11));

} else {
var statearr_28891_28911 = state_28878__$1;
(statearr_28891_28911[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (5))){
var inst_28855 = (state_28878[(7)]);
var state_28878__$1 = state_28878;
var statearr_28892_28912 = state_28878__$1;
(statearr_28892_28912[(2)] = inst_28855);

(statearr_28892_28912[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (10))){
var inst_28874 = (state_28878[(2)]);
var state_28878__$1 = state_28878;
var statearr_28893_28913 = state_28878__$1;
(statearr_28893_28913[(2)] = inst_28874);

(statearr_28893_28913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (8))){
var inst_28855 = (state_28878[(7)]);
var inst_28865 = cljs.core.next.call(null,inst_28855);
var inst_28855__$1 = inst_28865;
var state_28878__$1 = (function (){var statearr_28894 = state_28878;
(statearr_28894[(7)] = inst_28855__$1);

return statearr_28894;
})();
var statearr_28895_28914 = state_28878__$1;
(statearr_28895_28914[(2)] = null);

(statearr_28895_28914[(1)] = (2));


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
});})(c__28320__auto__))
;
return ((function (switch__28225__auto__,c__28320__auto__){
return (function() {
var cljs$core$async$state_machine__28226__auto__ = null;
var cljs$core$async$state_machine__28226__auto____0 = (function (){
var statearr_28896 = [null,null,null,null,null,null,null,null];
(statearr_28896[(0)] = cljs$core$async$state_machine__28226__auto__);

(statearr_28896[(1)] = (1));

return statearr_28896;
});
var cljs$core$async$state_machine__28226__auto____1 = (function (state_28878){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_28878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e28897){if((e28897 instanceof Object)){
var ex__28229__auto__ = e28897;
var statearr_28898_28915 = state_28878;
(statearr_28898_28915[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28916 = state_28878;
state_28878 = G__28916;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$state_machine__28226__auto__ = function(state_28878){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28226__auto____1.call(this,state_28878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28226__auto____0;
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28226__auto____1;
return cljs$core$async$state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28320__auto__))
})();
var state__28322__auto__ = (function (){var statearr_28899 = f__28321__auto__.call(null);
(statearr_28899[(6)] = c__28320__auto__);

return statearr_28899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28322__auto__);
});})(c__28320__auto__))
);

return c__28320__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28917 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28917 = (function (ch,cs,meta28918){
this.ch = ch;
this.cs = cs;
this.meta28918 = meta28918;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28919,meta28918__$1){
var self__ = this;
var _28919__$1 = this;
return (new cljs.core.async.t_cljs$core$async28917(self__.ch,self__.cs,meta28918__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28917.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28919){
var self__ = this;
var _28919__$1 = this;
return self__.meta28918;
});})(cs))
;

cljs.core.async.t_cljs$core$async28917.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28917.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28917.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28917.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28917.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28917.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28917.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28918","meta28918",-2114053168,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28917.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28917.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28917";

cljs.core.async.t_cljs$core$async28917.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async28917");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28917.
 */
cljs.core.async.__GT_t_cljs$core$async28917 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28917(ch__$1,cs__$1,meta28918){
return (new cljs.core.async.t_cljs$core$async28917(ch__$1,cs__$1,meta28918));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28917(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28320__auto___29139 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28320__auto___29139,cs,m,dchan,dctr,done){
return (function (){
var f__28321__auto__ = (function (){var switch__28225__auto__ = ((function (c__28320__auto___29139,cs,m,dchan,dctr,done){
return (function (state_29054){
var state_val_29055 = (state_29054[(1)]);
if((state_val_29055 === (7))){
var inst_29050 = (state_29054[(2)]);
var state_29054__$1 = state_29054;
var statearr_29056_29140 = state_29054__$1;
(statearr_29056_29140[(2)] = inst_29050);

(statearr_29056_29140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (20))){
var inst_28953 = (state_29054[(7)]);
var inst_28965 = cljs.core.first.call(null,inst_28953);
var inst_28966 = cljs.core.nth.call(null,inst_28965,(0),null);
var inst_28967 = cljs.core.nth.call(null,inst_28965,(1),null);
var state_29054__$1 = (function (){var statearr_29057 = state_29054;
(statearr_29057[(8)] = inst_28966);

return statearr_29057;
})();
if(cljs.core.truth_(inst_28967)){
var statearr_29058_29141 = state_29054__$1;
(statearr_29058_29141[(1)] = (22));

} else {
var statearr_29059_29142 = state_29054__$1;
(statearr_29059_29142[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (27))){
var inst_28997 = (state_29054[(9)]);
var inst_29002 = (state_29054[(10)]);
var inst_28995 = (state_29054[(11)]);
var inst_28922 = (state_29054[(12)]);
var inst_29002__$1 = cljs.core._nth.call(null,inst_28995,inst_28997);
var inst_29003 = cljs.core.async.put_BANG_.call(null,inst_29002__$1,inst_28922,done);
var state_29054__$1 = (function (){var statearr_29060 = state_29054;
(statearr_29060[(10)] = inst_29002__$1);

return statearr_29060;
})();
if(cljs.core.truth_(inst_29003)){
var statearr_29061_29143 = state_29054__$1;
(statearr_29061_29143[(1)] = (30));

} else {
var statearr_29062_29144 = state_29054__$1;
(statearr_29062_29144[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (1))){
var state_29054__$1 = state_29054;
var statearr_29063_29145 = state_29054__$1;
(statearr_29063_29145[(2)] = null);

(statearr_29063_29145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (24))){
var inst_28953 = (state_29054[(7)]);
var inst_28972 = (state_29054[(2)]);
var inst_28973 = cljs.core.next.call(null,inst_28953);
var inst_28931 = inst_28973;
var inst_28932 = null;
var inst_28933 = (0);
var inst_28934 = (0);
var state_29054__$1 = (function (){var statearr_29064 = state_29054;
(statearr_29064[(13)] = inst_28931);

(statearr_29064[(14)] = inst_28934);

(statearr_29064[(15)] = inst_28932);

(statearr_29064[(16)] = inst_28972);

(statearr_29064[(17)] = inst_28933);

return statearr_29064;
})();
var statearr_29065_29146 = state_29054__$1;
(statearr_29065_29146[(2)] = null);

(statearr_29065_29146[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (39))){
var state_29054__$1 = state_29054;
var statearr_29069_29147 = state_29054__$1;
(statearr_29069_29147[(2)] = null);

(statearr_29069_29147[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (4))){
var inst_28922 = (state_29054[(12)]);
var inst_28922__$1 = (state_29054[(2)]);
var inst_28923 = (inst_28922__$1 == null);
var state_29054__$1 = (function (){var statearr_29070 = state_29054;
(statearr_29070[(12)] = inst_28922__$1);

return statearr_29070;
})();
if(cljs.core.truth_(inst_28923)){
var statearr_29071_29148 = state_29054__$1;
(statearr_29071_29148[(1)] = (5));

} else {
var statearr_29072_29149 = state_29054__$1;
(statearr_29072_29149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (15))){
var inst_28931 = (state_29054[(13)]);
var inst_28934 = (state_29054[(14)]);
var inst_28932 = (state_29054[(15)]);
var inst_28933 = (state_29054[(17)]);
var inst_28949 = (state_29054[(2)]);
var inst_28950 = (inst_28934 + (1));
var tmp29066 = inst_28931;
var tmp29067 = inst_28932;
var tmp29068 = inst_28933;
var inst_28931__$1 = tmp29066;
var inst_28932__$1 = tmp29067;
var inst_28933__$1 = tmp29068;
var inst_28934__$1 = inst_28950;
var state_29054__$1 = (function (){var statearr_29073 = state_29054;
(statearr_29073[(13)] = inst_28931__$1);

(statearr_29073[(14)] = inst_28934__$1);

(statearr_29073[(18)] = inst_28949);

(statearr_29073[(15)] = inst_28932__$1);

(statearr_29073[(17)] = inst_28933__$1);

return statearr_29073;
})();
var statearr_29074_29150 = state_29054__$1;
(statearr_29074_29150[(2)] = null);

(statearr_29074_29150[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (21))){
var inst_28976 = (state_29054[(2)]);
var state_29054__$1 = state_29054;
var statearr_29078_29151 = state_29054__$1;
(statearr_29078_29151[(2)] = inst_28976);

(statearr_29078_29151[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (31))){
var inst_29002 = (state_29054[(10)]);
var inst_29006 = done.call(null,null);
var inst_29007 = cljs.core.async.untap_STAR_.call(null,m,inst_29002);
var state_29054__$1 = (function (){var statearr_29079 = state_29054;
(statearr_29079[(19)] = inst_29006);

return statearr_29079;
})();
var statearr_29080_29152 = state_29054__$1;
(statearr_29080_29152[(2)] = inst_29007);

(statearr_29080_29152[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (32))){
var inst_28996 = (state_29054[(20)]);
var inst_28994 = (state_29054[(21)]);
var inst_28997 = (state_29054[(9)]);
var inst_28995 = (state_29054[(11)]);
var inst_29009 = (state_29054[(2)]);
var inst_29010 = (inst_28997 + (1));
var tmp29075 = inst_28996;
var tmp29076 = inst_28994;
var tmp29077 = inst_28995;
var inst_28994__$1 = tmp29076;
var inst_28995__$1 = tmp29077;
var inst_28996__$1 = tmp29075;
var inst_28997__$1 = inst_29010;
var state_29054__$1 = (function (){var statearr_29081 = state_29054;
(statearr_29081[(20)] = inst_28996__$1);

(statearr_29081[(21)] = inst_28994__$1);

(statearr_29081[(22)] = inst_29009);

(statearr_29081[(9)] = inst_28997__$1);

(statearr_29081[(11)] = inst_28995__$1);

return statearr_29081;
})();
var statearr_29082_29153 = state_29054__$1;
(statearr_29082_29153[(2)] = null);

(statearr_29082_29153[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (40))){
var inst_29022 = (state_29054[(23)]);
var inst_29026 = done.call(null,null);
var inst_29027 = cljs.core.async.untap_STAR_.call(null,m,inst_29022);
var state_29054__$1 = (function (){var statearr_29083 = state_29054;
(statearr_29083[(24)] = inst_29026);

return statearr_29083;
})();
var statearr_29084_29154 = state_29054__$1;
(statearr_29084_29154[(2)] = inst_29027);

(statearr_29084_29154[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (33))){
var inst_29013 = (state_29054[(25)]);
var inst_29015 = cljs.core.chunked_seq_QMARK_.call(null,inst_29013);
var state_29054__$1 = state_29054;
if(inst_29015){
var statearr_29085_29155 = state_29054__$1;
(statearr_29085_29155[(1)] = (36));

} else {
var statearr_29086_29156 = state_29054__$1;
(statearr_29086_29156[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (13))){
var inst_28943 = (state_29054[(26)]);
var inst_28946 = cljs.core.async.close_BANG_.call(null,inst_28943);
var state_29054__$1 = state_29054;
var statearr_29087_29157 = state_29054__$1;
(statearr_29087_29157[(2)] = inst_28946);

(statearr_29087_29157[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (22))){
var inst_28966 = (state_29054[(8)]);
var inst_28969 = cljs.core.async.close_BANG_.call(null,inst_28966);
var state_29054__$1 = state_29054;
var statearr_29088_29158 = state_29054__$1;
(statearr_29088_29158[(2)] = inst_28969);

(statearr_29088_29158[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (36))){
var inst_29013 = (state_29054[(25)]);
var inst_29017 = cljs.core.chunk_first.call(null,inst_29013);
var inst_29018 = cljs.core.chunk_rest.call(null,inst_29013);
var inst_29019 = cljs.core.count.call(null,inst_29017);
var inst_28994 = inst_29018;
var inst_28995 = inst_29017;
var inst_28996 = inst_29019;
var inst_28997 = (0);
var state_29054__$1 = (function (){var statearr_29089 = state_29054;
(statearr_29089[(20)] = inst_28996);

(statearr_29089[(21)] = inst_28994);

(statearr_29089[(9)] = inst_28997);

(statearr_29089[(11)] = inst_28995);

return statearr_29089;
})();
var statearr_29090_29159 = state_29054__$1;
(statearr_29090_29159[(2)] = null);

(statearr_29090_29159[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (41))){
var inst_29013 = (state_29054[(25)]);
var inst_29029 = (state_29054[(2)]);
var inst_29030 = cljs.core.next.call(null,inst_29013);
var inst_28994 = inst_29030;
var inst_28995 = null;
var inst_28996 = (0);
var inst_28997 = (0);
var state_29054__$1 = (function (){var statearr_29091 = state_29054;
(statearr_29091[(27)] = inst_29029);

(statearr_29091[(20)] = inst_28996);

(statearr_29091[(21)] = inst_28994);

(statearr_29091[(9)] = inst_28997);

(statearr_29091[(11)] = inst_28995);

return statearr_29091;
})();
var statearr_29092_29160 = state_29054__$1;
(statearr_29092_29160[(2)] = null);

(statearr_29092_29160[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (43))){
var state_29054__$1 = state_29054;
var statearr_29093_29161 = state_29054__$1;
(statearr_29093_29161[(2)] = null);

(statearr_29093_29161[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (29))){
var inst_29038 = (state_29054[(2)]);
var state_29054__$1 = state_29054;
var statearr_29094_29162 = state_29054__$1;
(statearr_29094_29162[(2)] = inst_29038);

(statearr_29094_29162[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (44))){
var inst_29047 = (state_29054[(2)]);
var state_29054__$1 = (function (){var statearr_29095 = state_29054;
(statearr_29095[(28)] = inst_29047);

return statearr_29095;
})();
var statearr_29096_29163 = state_29054__$1;
(statearr_29096_29163[(2)] = null);

(statearr_29096_29163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (6))){
var inst_28986 = (state_29054[(29)]);
var inst_28985 = cljs.core.deref.call(null,cs);
var inst_28986__$1 = cljs.core.keys.call(null,inst_28985);
var inst_28987 = cljs.core.count.call(null,inst_28986__$1);
var inst_28988 = cljs.core.reset_BANG_.call(null,dctr,inst_28987);
var inst_28993 = cljs.core.seq.call(null,inst_28986__$1);
var inst_28994 = inst_28993;
var inst_28995 = null;
var inst_28996 = (0);
var inst_28997 = (0);
var state_29054__$1 = (function (){var statearr_29097 = state_29054;
(statearr_29097[(20)] = inst_28996);

(statearr_29097[(30)] = inst_28988);

(statearr_29097[(21)] = inst_28994);

(statearr_29097[(29)] = inst_28986__$1);

(statearr_29097[(9)] = inst_28997);

(statearr_29097[(11)] = inst_28995);

return statearr_29097;
})();
var statearr_29098_29164 = state_29054__$1;
(statearr_29098_29164[(2)] = null);

(statearr_29098_29164[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (28))){
var inst_28994 = (state_29054[(21)]);
var inst_29013 = (state_29054[(25)]);
var inst_29013__$1 = cljs.core.seq.call(null,inst_28994);
var state_29054__$1 = (function (){var statearr_29099 = state_29054;
(statearr_29099[(25)] = inst_29013__$1);

return statearr_29099;
})();
if(inst_29013__$1){
var statearr_29100_29165 = state_29054__$1;
(statearr_29100_29165[(1)] = (33));

} else {
var statearr_29101_29166 = state_29054__$1;
(statearr_29101_29166[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (25))){
var inst_28996 = (state_29054[(20)]);
var inst_28997 = (state_29054[(9)]);
var inst_28999 = (inst_28997 < inst_28996);
var inst_29000 = inst_28999;
var state_29054__$1 = state_29054;
if(cljs.core.truth_(inst_29000)){
var statearr_29102_29167 = state_29054__$1;
(statearr_29102_29167[(1)] = (27));

} else {
var statearr_29103_29168 = state_29054__$1;
(statearr_29103_29168[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (34))){
var state_29054__$1 = state_29054;
var statearr_29104_29169 = state_29054__$1;
(statearr_29104_29169[(2)] = null);

(statearr_29104_29169[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (17))){
var state_29054__$1 = state_29054;
var statearr_29105_29170 = state_29054__$1;
(statearr_29105_29170[(2)] = null);

(statearr_29105_29170[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (3))){
var inst_29052 = (state_29054[(2)]);
var state_29054__$1 = state_29054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29054__$1,inst_29052);
} else {
if((state_val_29055 === (12))){
var inst_28981 = (state_29054[(2)]);
var state_29054__$1 = state_29054;
var statearr_29106_29171 = state_29054__$1;
(statearr_29106_29171[(2)] = inst_28981);

(statearr_29106_29171[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (2))){
var state_29054__$1 = state_29054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29054__$1,(4),ch);
} else {
if((state_val_29055 === (23))){
var state_29054__$1 = state_29054;
var statearr_29107_29172 = state_29054__$1;
(statearr_29107_29172[(2)] = null);

(statearr_29107_29172[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (35))){
var inst_29036 = (state_29054[(2)]);
var state_29054__$1 = state_29054;
var statearr_29108_29173 = state_29054__$1;
(statearr_29108_29173[(2)] = inst_29036);

(statearr_29108_29173[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (19))){
var inst_28953 = (state_29054[(7)]);
var inst_28957 = cljs.core.chunk_first.call(null,inst_28953);
var inst_28958 = cljs.core.chunk_rest.call(null,inst_28953);
var inst_28959 = cljs.core.count.call(null,inst_28957);
var inst_28931 = inst_28958;
var inst_28932 = inst_28957;
var inst_28933 = inst_28959;
var inst_28934 = (0);
var state_29054__$1 = (function (){var statearr_29109 = state_29054;
(statearr_29109[(13)] = inst_28931);

(statearr_29109[(14)] = inst_28934);

(statearr_29109[(15)] = inst_28932);

(statearr_29109[(17)] = inst_28933);

return statearr_29109;
})();
var statearr_29110_29174 = state_29054__$1;
(statearr_29110_29174[(2)] = null);

(statearr_29110_29174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (11))){
var inst_28931 = (state_29054[(13)]);
var inst_28953 = (state_29054[(7)]);
var inst_28953__$1 = cljs.core.seq.call(null,inst_28931);
var state_29054__$1 = (function (){var statearr_29111 = state_29054;
(statearr_29111[(7)] = inst_28953__$1);

return statearr_29111;
})();
if(inst_28953__$1){
var statearr_29112_29175 = state_29054__$1;
(statearr_29112_29175[(1)] = (16));

} else {
var statearr_29113_29176 = state_29054__$1;
(statearr_29113_29176[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (9))){
var inst_28983 = (state_29054[(2)]);
var state_29054__$1 = state_29054;
var statearr_29114_29177 = state_29054__$1;
(statearr_29114_29177[(2)] = inst_28983);

(statearr_29114_29177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (5))){
var inst_28929 = cljs.core.deref.call(null,cs);
var inst_28930 = cljs.core.seq.call(null,inst_28929);
var inst_28931 = inst_28930;
var inst_28932 = null;
var inst_28933 = (0);
var inst_28934 = (0);
var state_29054__$1 = (function (){var statearr_29115 = state_29054;
(statearr_29115[(13)] = inst_28931);

(statearr_29115[(14)] = inst_28934);

(statearr_29115[(15)] = inst_28932);

(statearr_29115[(17)] = inst_28933);

return statearr_29115;
})();
var statearr_29116_29178 = state_29054__$1;
(statearr_29116_29178[(2)] = null);

(statearr_29116_29178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (14))){
var state_29054__$1 = state_29054;
var statearr_29117_29179 = state_29054__$1;
(statearr_29117_29179[(2)] = null);

(statearr_29117_29179[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (45))){
var inst_29044 = (state_29054[(2)]);
var state_29054__$1 = state_29054;
var statearr_29118_29180 = state_29054__$1;
(statearr_29118_29180[(2)] = inst_29044);

(statearr_29118_29180[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (26))){
var inst_28986 = (state_29054[(29)]);
var inst_29040 = (state_29054[(2)]);
var inst_29041 = cljs.core.seq.call(null,inst_28986);
var state_29054__$1 = (function (){var statearr_29119 = state_29054;
(statearr_29119[(31)] = inst_29040);

return statearr_29119;
})();
if(inst_29041){
var statearr_29120_29181 = state_29054__$1;
(statearr_29120_29181[(1)] = (42));

} else {
var statearr_29121_29182 = state_29054__$1;
(statearr_29121_29182[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (16))){
var inst_28953 = (state_29054[(7)]);
var inst_28955 = cljs.core.chunked_seq_QMARK_.call(null,inst_28953);
var state_29054__$1 = state_29054;
if(inst_28955){
var statearr_29122_29183 = state_29054__$1;
(statearr_29122_29183[(1)] = (19));

} else {
var statearr_29123_29184 = state_29054__$1;
(statearr_29123_29184[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (38))){
var inst_29033 = (state_29054[(2)]);
var state_29054__$1 = state_29054;
var statearr_29124_29185 = state_29054__$1;
(statearr_29124_29185[(2)] = inst_29033);

(statearr_29124_29185[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (30))){
var state_29054__$1 = state_29054;
var statearr_29125_29186 = state_29054__$1;
(statearr_29125_29186[(2)] = null);

(statearr_29125_29186[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (10))){
var inst_28934 = (state_29054[(14)]);
var inst_28932 = (state_29054[(15)]);
var inst_28942 = cljs.core._nth.call(null,inst_28932,inst_28934);
var inst_28943 = cljs.core.nth.call(null,inst_28942,(0),null);
var inst_28944 = cljs.core.nth.call(null,inst_28942,(1),null);
var state_29054__$1 = (function (){var statearr_29126 = state_29054;
(statearr_29126[(26)] = inst_28943);

return statearr_29126;
})();
if(cljs.core.truth_(inst_28944)){
var statearr_29127_29187 = state_29054__$1;
(statearr_29127_29187[(1)] = (13));

} else {
var statearr_29128_29188 = state_29054__$1;
(statearr_29128_29188[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (18))){
var inst_28979 = (state_29054[(2)]);
var state_29054__$1 = state_29054;
var statearr_29129_29189 = state_29054__$1;
(statearr_29129_29189[(2)] = inst_28979);

(statearr_29129_29189[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (42))){
var state_29054__$1 = state_29054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29054__$1,(45),dchan);
} else {
if((state_val_29055 === (37))){
var inst_29022 = (state_29054[(23)]);
var inst_28922 = (state_29054[(12)]);
var inst_29013 = (state_29054[(25)]);
var inst_29022__$1 = cljs.core.first.call(null,inst_29013);
var inst_29023 = cljs.core.async.put_BANG_.call(null,inst_29022__$1,inst_28922,done);
var state_29054__$1 = (function (){var statearr_29130 = state_29054;
(statearr_29130[(23)] = inst_29022__$1);

return statearr_29130;
})();
if(cljs.core.truth_(inst_29023)){
var statearr_29131_29190 = state_29054__$1;
(statearr_29131_29190[(1)] = (39));

} else {
var statearr_29132_29191 = state_29054__$1;
(statearr_29132_29191[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (8))){
var inst_28934 = (state_29054[(14)]);
var inst_28933 = (state_29054[(17)]);
var inst_28936 = (inst_28934 < inst_28933);
var inst_28937 = inst_28936;
var state_29054__$1 = state_29054;
if(cljs.core.truth_(inst_28937)){
var statearr_29133_29192 = state_29054__$1;
(statearr_29133_29192[(1)] = (10));

} else {
var statearr_29134_29193 = state_29054__$1;
(statearr_29134_29193[(1)] = (11));

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
});})(c__28320__auto___29139,cs,m,dchan,dctr,done))
;
return ((function (switch__28225__auto__,c__28320__auto___29139,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28226__auto__ = null;
var cljs$core$async$mult_$_state_machine__28226__auto____0 = (function (){
var statearr_29135 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29135[(0)] = cljs$core$async$mult_$_state_machine__28226__auto__);

(statearr_29135[(1)] = (1));

return statearr_29135;
});
var cljs$core$async$mult_$_state_machine__28226__auto____1 = (function (state_29054){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_29054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e29136){if((e29136 instanceof Object)){
var ex__28229__auto__ = e29136;
var statearr_29137_29194 = state_29054;
(statearr_29137_29194[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29195 = state_29054;
state_29054 = G__29195;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28226__auto__ = function(state_29054){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28226__auto____1.call(this,state_29054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28226__auto____0;
cljs$core$async$mult_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28226__auto____1;
return cljs$core$async$mult_$_state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28320__auto___29139,cs,m,dchan,dctr,done))
})();
var state__28322__auto__ = (function (){var statearr_29138 = f__28321__auto__.call(null);
(statearr_29138[(6)] = c__28320__auto___29139);

return statearr_29138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28322__auto__);
});})(c__28320__auto___29139,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__29197 = arguments.length;
switch (G__29197) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29209 = arguments.length;
var i__4731__auto___29210 = (0);
while(true){
if((i__4731__auto___29210 < len__4730__auto___29209)){
args__4736__auto__.push((arguments[i__4731__auto___29210]));

var G__29211 = (i__4731__auto___29210 + (1));
i__4731__auto___29210 = G__29211;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29203){
var map__29204 = p__29203;
var map__29204__$1 = (((((!((map__29204 == null))))?(((((map__29204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29204):map__29204);
var opts = map__29204__$1;
var statearr_29206_29212 = state;
(statearr_29206_29212[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__29204,map__29204__$1,opts){
return (function (val){
var statearr_29207_29213 = state;
(statearr_29207_29213[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29204,map__29204__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_29208_29214 = state;
(statearr_29208_29214[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29199){
var G__29200 = cljs.core.first.call(null,seq29199);
var seq29199__$1 = cljs.core.next.call(null,seq29199);
var G__29201 = cljs.core.first.call(null,seq29199__$1);
var seq29199__$2 = cljs.core.next.call(null,seq29199__$1);
var G__29202 = cljs.core.first.call(null,seq29199__$2);
var seq29199__$3 = cljs.core.next.call(null,seq29199__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29200,G__29201,G__29202,seq29199__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29215 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29215 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29216){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29216 = meta29216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29217,meta29216__$1){
var self__ = this;
var _29217__$1 = this;
return (new cljs.core.async.t_cljs$core$async29215(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29216__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29215.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29217){
var self__ = this;
var _29217__$1 = this;
return self__.meta29216;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29215.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29215.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29215.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29215.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29215.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29215.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29215.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29215.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29215.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29216","meta29216",1099030730,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29215.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29215.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29215";

cljs.core.async.t_cljs$core$async29215.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async29215");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29215.
 */
cljs.core.async.__GT_t_cljs$core$async29215 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29215(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29216){
return (new cljs.core.async.t_cljs$core$async29215(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29216));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29215(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28320__auto___29379 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28320__auto___29379,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28321__auto__ = (function (){var switch__28225__auto__ = ((function (c__28320__auto___29379,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29319){
var state_val_29320 = (state_29319[(1)]);
if((state_val_29320 === (7))){
var inst_29234 = (state_29319[(2)]);
var state_29319__$1 = state_29319;
var statearr_29321_29380 = state_29319__$1;
(statearr_29321_29380[(2)] = inst_29234);

(statearr_29321_29380[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (20))){
var inst_29246 = (state_29319[(7)]);
var state_29319__$1 = state_29319;
var statearr_29322_29381 = state_29319__$1;
(statearr_29322_29381[(2)] = inst_29246);

(statearr_29322_29381[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (27))){
var state_29319__$1 = state_29319;
var statearr_29323_29382 = state_29319__$1;
(statearr_29323_29382[(2)] = null);

(statearr_29323_29382[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (1))){
var inst_29221 = (state_29319[(8)]);
var inst_29221__$1 = calc_state.call(null);
var inst_29223 = (inst_29221__$1 == null);
var inst_29224 = cljs.core.not.call(null,inst_29223);
var state_29319__$1 = (function (){var statearr_29324 = state_29319;
(statearr_29324[(8)] = inst_29221__$1);

return statearr_29324;
})();
if(inst_29224){
var statearr_29325_29383 = state_29319__$1;
(statearr_29325_29383[(1)] = (2));

} else {
var statearr_29326_29384 = state_29319__$1;
(statearr_29326_29384[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (24))){
var inst_29279 = (state_29319[(9)]);
var inst_29293 = (state_29319[(10)]);
var inst_29270 = (state_29319[(11)]);
var inst_29293__$1 = inst_29270.call(null,inst_29279);
var state_29319__$1 = (function (){var statearr_29327 = state_29319;
(statearr_29327[(10)] = inst_29293__$1);

return statearr_29327;
})();
if(cljs.core.truth_(inst_29293__$1)){
var statearr_29328_29385 = state_29319__$1;
(statearr_29328_29385[(1)] = (29));

} else {
var statearr_29329_29386 = state_29319__$1;
(statearr_29329_29386[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (4))){
var inst_29237 = (state_29319[(2)]);
var state_29319__$1 = state_29319;
if(cljs.core.truth_(inst_29237)){
var statearr_29330_29387 = state_29319__$1;
(statearr_29330_29387[(1)] = (8));

} else {
var statearr_29331_29388 = state_29319__$1;
(statearr_29331_29388[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (15))){
var inst_29264 = (state_29319[(2)]);
var state_29319__$1 = state_29319;
if(cljs.core.truth_(inst_29264)){
var statearr_29332_29389 = state_29319__$1;
(statearr_29332_29389[(1)] = (19));

} else {
var statearr_29333_29390 = state_29319__$1;
(statearr_29333_29390[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (21))){
var inst_29269 = (state_29319[(12)]);
var inst_29269__$1 = (state_29319[(2)]);
var inst_29270 = cljs.core.get.call(null,inst_29269__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29271 = cljs.core.get.call(null,inst_29269__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29272 = cljs.core.get.call(null,inst_29269__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29319__$1 = (function (){var statearr_29334 = state_29319;
(statearr_29334[(13)] = inst_29271);

(statearr_29334[(11)] = inst_29270);

(statearr_29334[(12)] = inst_29269__$1);

return statearr_29334;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29319__$1,(22),inst_29272);
} else {
if((state_val_29320 === (31))){
var inst_29301 = (state_29319[(2)]);
var state_29319__$1 = state_29319;
if(cljs.core.truth_(inst_29301)){
var statearr_29335_29391 = state_29319__$1;
(statearr_29335_29391[(1)] = (32));

} else {
var statearr_29336_29392 = state_29319__$1;
(statearr_29336_29392[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (32))){
var inst_29278 = (state_29319[(14)]);
var state_29319__$1 = state_29319;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29319__$1,(35),out,inst_29278);
} else {
if((state_val_29320 === (33))){
var inst_29269 = (state_29319[(12)]);
var inst_29246 = inst_29269;
var state_29319__$1 = (function (){var statearr_29337 = state_29319;
(statearr_29337[(7)] = inst_29246);

return statearr_29337;
})();
var statearr_29338_29393 = state_29319__$1;
(statearr_29338_29393[(2)] = null);

(statearr_29338_29393[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (13))){
var inst_29246 = (state_29319[(7)]);
var inst_29253 = inst_29246.cljs$lang$protocol_mask$partition0$;
var inst_29254 = (inst_29253 & (64));
var inst_29255 = inst_29246.cljs$core$ISeq$;
var inst_29256 = (cljs.core.PROTOCOL_SENTINEL === inst_29255);
var inst_29257 = ((inst_29254) || (inst_29256));
var state_29319__$1 = state_29319;
if(cljs.core.truth_(inst_29257)){
var statearr_29339_29394 = state_29319__$1;
(statearr_29339_29394[(1)] = (16));

} else {
var statearr_29340_29395 = state_29319__$1;
(statearr_29340_29395[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (22))){
var inst_29279 = (state_29319[(9)]);
var inst_29278 = (state_29319[(14)]);
var inst_29277 = (state_29319[(2)]);
var inst_29278__$1 = cljs.core.nth.call(null,inst_29277,(0),null);
var inst_29279__$1 = cljs.core.nth.call(null,inst_29277,(1),null);
var inst_29280 = (inst_29278__$1 == null);
var inst_29281 = cljs.core._EQ_.call(null,inst_29279__$1,change);
var inst_29282 = ((inst_29280) || (inst_29281));
var state_29319__$1 = (function (){var statearr_29341 = state_29319;
(statearr_29341[(9)] = inst_29279__$1);

(statearr_29341[(14)] = inst_29278__$1);

return statearr_29341;
})();
if(cljs.core.truth_(inst_29282)){
var statearr_29342_29396 = state_29319__$1;
(statearr_29342_29396[(1)] = (23));

} else {
var statearr_29343_29397 = state_29319__$1;
(statearr_29343_29397[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (36))){
var inst_29269 = (state_29319[(12)]);
var inst_29246 = inst_29269;
var state_29319__$1 = (function (){var statearr_29344 = state_29319;
(statearr_29344[(7)] = inst_29246);

return statearr_29344;
})();
var statearr_29345_29398 = state_29319__$1;
(statearr_29345_29398[(2)] = null);

(statearr_29345_29398[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (29))){
var inst_29293 = (state_29319[(10)]);
var state_29319__$1 = state_29319;
var statearr_29346_29399 = state_29319__$1;
(statearr_29346_29399[(2)] = inst_29293);

(statearr_29346_29399[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (6))){
var state_29319__$1 = state_29319;
var statearr_29347_29400 = state_29319__$1;
(statearr_29347_29400[(2)] = false);

(statearr_29347_29400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (28))){
var inst_29289 = (state_29319[(2)]);
var inst_29290 = calc_state.call(null);
var inst_29246 = inst_29290;
var state_29319__$1 = (function (){var statearr_29348 = state_29319;
(statearr_29348[(7)] = inst_29246);

(statearr_29348[(15)] = inst_29289);

return statearr_29348;
})();
var statearr_29349_29401 = state_29319__$1;
(statearr_29349_29401[(2)] = null);

(statearr_29349_29401[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (25))){
var inst_29315 = (state_29319[(2)]);
var state_29319__$1 = state_29319;
var statearr_29350_29402 = state_29319__$1;
(statearr_29350_29402[(2)] = inst_29315);

(statearr_29350_29402[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (34))){
var inst_29313 = (state_29319[(2)]);
var state_29319__$1 = state_29319;
var statearr_29351_29403 = state_29319__$1;
(statearr_29351_29403[(2)] = inst_29313);

(statearr_29351_29403[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (17))){
var state_29319__$1 = state_29319;
var statearr_29352_29404 = state_29319__$1;
(statearr_29352_29404[(2)] = false);

(statearr_29352_29404[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (3))){
var state_29319__$1 = state_29319;
var statearr_29353_29405 = state_29319__$1;
(statearr_29353_29405[(2)] = false);

(statearr_29353_29405[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (12))){
var inst_29317 = (state_29319[(2)]);
var state_29319__$1 = state_29319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29319__$1,inst_29317);
} else {
if((state_val_29320 === (2))){
var inst_29221 = (state_29319[(8)]);
var inst_29226 = inst_29221.cljs$lang$protocol_mask$partition0$;
var inst_29227 = (inst_29226 & (64));
var inst_29228 = inst_29221.cljs$core$ISeq$;
var inst_29229 = (cljs.core.PROTOCOL_SENTINEL === inst_29228);
var inst_29230 = ((inst_29227) || (inst_29229));
var state_29319__$1 = state_29319;
if(cljs.core.truth_(inst_29230)){
var statearr_29354_29406 = state_29319__$1;
(statearr_29354_29406[(1)] = (5));

} else {
var statearr_29355_29407 = state_29319__$1;
(statearr_29355_29407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (23))){
var inst_29278 = (state_29319[(14)]);
var inst_29284 = (inst_29278 == null);
var state_29319__$1 = state_29319;
if(cljs.core.truth_(inst_29284)){
var statearr_29356_29408 = state_29319__$1;
(statearr_29356_29408[(1)] = (26));

} else {
var statearr_29357_29409 = state_29319__$1;
(statearr_29357_29409[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (35))){
var inst_29304 = (state_29319[(2)]);
var state_29319__$1 = state_29319;
if(cljs.core.truth_(inst_29304)){
var statearr_29358_29410 = state_29319__$1;
(statearr_29358_29410[(1)] = (36));

} else {
var statearr_29359_29411 = state_29319__$1;
(statearr_29359_29411[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (19))){
var inst_29246 = (state_29319[(7)]);
var inst_29266 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29246);
var state_29319__$1 = state_29319;
var statearr_29360_29412 = state_29319__$1;
(statearr_29360_29412[(2)] = inst_29266);

(statearr_29360_29412[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (11))){
var inst_29246 = (state_29319[(7)]);
var inst_29250 = (inst_29246 == null);
var inst_29251 = cljs.core.not.call(null,inst_29250);
var state_29319__$1 = state_29319;
if(inst_29251){
var statearr_29361_29413 = state_29319__$1;
(statearr_29361_29413[(1)] = (13));

} else {
var statearr_29362_29414 = state_29319__$1;
(statearr_29362_29414[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (9))){
var inst_29221 = (state_29319[(8)]);
var state_29319__$1 = state_29319;
var statearr_29363_29415 = state_29319__$1;
(statearr_29363_29415[(2)] = inst_29221);

(statearr_29363_29415[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (5))){
var state_29319__$1 = state_29319;
var statearr_29364_29416 = state_29319__$1;
(statearr_29364_29416[(2)] = true);

(statearr_29364_29416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (14))){
var state_29319__$1 = state_29319;
var statearr_29365_29417 = state_29319__$1;
(statearr_29365_29417[(2)] = false);

(statearr_29365_29417[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (26))){
var inst_29279 = (state_29319[(9)]);
var inst_29286 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29279);
var state_29319__$1 = state_29319;
var statearr_29366_29418 = state_29319__$1;
(statearr_29366_29418[(2)] = inst_29286);

(statearr_29366_29418[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (16))){
var state_29319__$1 = state_29319;
var statearr_29367_29419 = state_29319__$1;
(statearr_29367_29419[(2)] = true);

(statearr_29367_29419[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (38))){
var inst_29309 = (state_29319[(2)]);
var state_29319__$1 = state_29319;
var statearr_29368_29420 = state_29319__$1;
(statearr_29368_29420[(2)] = inst_29309);

(statearr_29368_29420[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (30))){
var inst_29279 = (state_29319[(9)]);
var inst_29271 = (state_29319[(13)]);
var inst_29270 = (state_29319[(11)]);
var inst_29296 = cljs.core.empty_QMARK_.call(null,inst_29270);
var inst_29297 = inst_29271.call(null,inst_29279);
var inst_29298 = cljs.core.not.call(null,inst_29297);
var inst_29299 = ((inst_29296) && (inst_29298));
var state_29319__$1 = state_29319;
var statearr_29369_29421 = state_29319__$1;
(statearr_29369_29421[(2)] = inst_29299);

(statearr_29369_29421[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (10))){
var inst_29221 = (state_29319[(8)]);
var inst_29242 = (state_29319[(2)]);
var inst_29243 = cljs.core.get.call(null,inst_29242,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29244 = cljs.core.get.call(null,inst_29242,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29245 = cljs.core.get.call(null,inst_29242,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29246 = inst_29221;
var state_29319__$1 = (function (){var statearr_29370 = state_29319;
(statearr_29370[(7)] = inst_29246);

(statearr_29370[(16)] = inst_29244);

(statearr_29370[(17)] = inst_29245);

(statearr_29370[(18)] = inst_29243);

return statearr_29370;
})();
var statearr_29371_29422 = state_29319__$1;
(statearr_29371_29422[(2)] = null);

(statearr_29371_29422[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (18))){
var inst_29261 = (state_29319[(2)]);
var state_29319__$1 = state_29319;
var statearr_29372_29423 = state_29319__$1;
(statearr_29372_29423[(2)] = inst_29261);

(statearr_29372_29423[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (37))){
var state_29319__$1 = state_29319;
var statearr_29373_29424 = state_29319__$1;
(statearr_29373_29424[(2)] = null);

(statearr_29373_29424[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (8))){
var inst_29221 = (state_29319[(8)]);
var inst_29239 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29221);
var state_29319__$1 = state_29319;
var statearr_29374_29425 = state_29319__$1;
(statearr_29374_29425[(2)] = inst_29239);

(statearr_29374_29425[(1)] = (10));


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
});})(c__28320__auto___29379,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28225__auto__,c__28320__auto___29379,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28226__auto__ = null;
var cljs$core$async$mix_$_state_machine__28226__auto____0 = (function (){
var statearr_29375 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29375[(0)] = cljs$core$async$mix_$_state_machine__28226__auto__);

(statearr_29375[(1)] = (1));

return statearr_29375;
});
var cljs$core$async$mix_$_state_machine__28226__auto____1 = (function (state_29319){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_29319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e29376){if((e29376 instanceof Object)){
var ex__28229__auto__ = e29376;
var statearr_29377_29426 = state_29319;
(statearr_29377_29426[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29427 = state_29319;
state_29319 = G__29427;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28226__auto__ = function(state_29319){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28226__auto____1.call(this,state_29319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28226__auto____0;
cljs$core$async$mix_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28226__auto____1;
return cljs$core$async$mix_$_state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28320__auto___29379,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28322__auto__ = (function (){var statearr_29378 = f__28321__auto__.call(null);
(statearr_29378[(6)] = c__28320__auto___29379);

return statearr_29378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28322__auto__);
});})(c__28320__auto___29379,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__29429 = arguments.length;
switch (G__29429) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__29433 = arguments.length;
switch (G__29433) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__29431_SHARP_){
if(cljs.core.truth_(p1__29431_SHARP_.call(null,topic))){
return p1__29431_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29431_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29434 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29434 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29435){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29435 = meta29435;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29436,meta29435__$1){
var self__ = this;
var _29436__$1 = this;
return (new cljs.core.async.t_cljs$core$async29434(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29435__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29434.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29436){
var self__ = this;
var _29436__$1 = this;
return self__.meta29435;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29434.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29434.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29434.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29434.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29434.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29434.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29434.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29434.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29435","meta29435",1651632017,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29434.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29434.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29434";

cljs.core.async.t_cljs$core$async29434.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async29434");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29434.
 */
cljs.core.async.__GT_t_cljs$core$async29434 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29434(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29435){
return (new cljs.core.async.t_cljs$core$async29434(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29435));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29434(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28320__auto___29554 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28320__auto___29554,mults,ensure_mult,p){
return (function (){
var f__28321__auto__ = (function (){var switch__28225__auto__ = ((function (c__28320__auto___29554,mults,ensure_mult,p){
return (function (state_29508){
var state_val_29509 = (state_29508[(1)]);
if((state_val_29509 === (7))){
var inst_29504 = (state_29508[(2)]);
var state_29508__$1 = state_29508;
var statearr_29510_29555 = state_29508__$1;
(statearr_29510_29555[(2)] = inst_29504);

(statearr_29510_29555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29509 === (20))){
var state_29508__$1 = state_29508;
var statearr_29511_29556 = state_29508__$1;
(statearr_29511_29556[(2)] = null);

(statearr_29511_29556[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29509 === (1))){
var state_29508__$1 = state_29508;
var statearr_29512_29557 = state_29508__$1;
(statearr_29512_29557[(2)] = null);

(statearr_29512_29557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29509 === (24))){
var inst_29487 = (state_29508[(7)]);
var inst_29496 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29487);
var state_29508__$1 = state_29508;
var statearr_29513_29558 = state_29508__$1;
(statearr_29513_29558[(2)] = inst_29496);

(statearr_29513_29558[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29509 === (4))){
var inst_29439 = (state_29508[(8)]);
var inst_29439__$1 = (state_29508[(2)]);
var inst_29440 = (inst_29439__$1 == null);
var state_29508__$1 = (function (){var statearr_29514 = state_29508;
(statearr_29514[(8)] = inst_29439__$1);

return statearr_29514;
})();
if(cljs.core.truth_(inst_29440)){
var statearr_29515_29559 = state_29508__$1;
(statearr_29515_29559[(1)] = (5));

} else {
var statearr_29516_29560 = state_29508__$1;
(statearr_29516_29560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29509 === (15))){
var inst_29481 = (state_29508[(2)]);
var state_29508__$1 = state_29508;
var statearr_29517_29561 = state_29508__$1;
(statearr_29517_29561[(2)] = inst_29481);

(statearr_29517_29561[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29509 === (21))){
var inst_29501 = (state_29508[(2)]);
var state_29508__$1 = (function (){var statearr_29518 = state_29508;
(statearr_29518[(9)] = inst_29501);

return statearr_29518;
})();
var statearr_29519_29562 = state_29508__$1;
(statearr_29519_29562[(2)] = null);

(statearr_29519_29562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29509 === (13))){
var inst_29463 = (state_29508[(10)]);
var inst_29465 = cljs.core.chunked_seq_QMARK_.call(null,inst_29463);
var state_29508__$1 = state_29508;
if(inst_29465){
var statearr_29520_29563 = state_29508__$1;
(statearr_29520_29563[(1)] = (16));

} else {
var statearr_29521_29564 = state_29508__$1;
(statearr_29521_29564[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29509 === (22))){
var inst_29493 = (state_29508[(2)]);
var state_29508__$1 = state_29508;
if(cljs.core.truth_(inst_29493)){
var statearr_29522_29565 = state_29508__$1;
(statearr_29522_29565[(1)] = (23));

} else {
var statearr_29523_29566 = state_29508__$1;
(statearr_29523_29566[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29509 === (6))){
var inst_29487 = (state_29508[(7)]);
var inst_29489 = (state_29508[(11)]);
var inst_29439 = (state_29508[(8)]);
var inst_29487__$1 = topic_fn.call(null,inst_29439);
var inst_29488 = cljs.core.deref.call(null,mults);
var inst_29489__$1 = cljs.core.get.call(null,inst_29488,inst_29487__$1);
var state_29508__$1 = (function (){var statearr_29524 = state_29508;
(statearr_29524[(7)] = inst_29487__$1);

(statearr_29524[(11)] = inst_29489__$1);

return statearr_29524;
})();
if(cljs.core.truth_(inst_29489__$1)){
var statearr_29525_29567 = state_29508__$1;
(statearr_29525_29567[(1)] = (19));

} else {
var statearr_29526_29568 = state_29508__$1;
(statearr_29526_29568[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29509 === (25))){
var inst_29498 = (state_29508[(2)]);
var state_29508__$1 = state_29508;
var statearr_29527_29569 = state_29508__$1;
(statearr_29527_29569[(2)] = inst_29498);

(statearr_29527_29569[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29509 === (17))){
var inst_29463 = (state_29508[(10)]);
var inst_29472 = cljs.core.first.call(null,inst_29463);
var inst_29473 = cljs.core.async.muxch_STAR_.call(null,inst_29472);
var inst_29474 = cljs.core.async.close_BANG_.call(null,inst_29473);
var inst_29475 = cljs.core.next.call(null,inst_29463);
var inst_29449 = inst_29475;
var inst_29450 = null;
var inst_29451 = (0);
var inst_29452 = (0);
var state_29508__$1 = (function (){var statearr_29528 = state_29508;
(statearr_29528[(12)] = inst_29449);

(statearr_29528[(13)] = inst_29474);

(statearr_29528[(14)] = inst_29450);

(statearr_29528[(15)] = inst_29451);

(statearr_29528[(16)] = inst_29452);

return statearr_29528;
})();
var statearr_29529_29570 = state_29508__$1;
(statearr_29529_29570[(2)] = null);

(statearr_29529_29570[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29509 === (3))){
var inst_29506 = (state_29508[(2)]);
var state_29508__$1 = state_29508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29508__$1,inst_29506);
} else {
if((state_val_29509 === (12))){
var inst_29483 = (state_29508[(2)]);
var state_29508__$1 = state_29508;
var statearr_29530_29571 = state_29508__$1;
(statearr_29530_29571[(2)] = inst_29483);

(statearr_29530_29571[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29509 === (2))){
var state_29508__$1 = state_29508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29508__$1,(4),ch);
} else {
if((state_val_29509 === (23))){
var state_29508__$1 = state_29508;
var statearr_29531_29572 = state_29508__$1;
(statearr_29531_29572[(2)] = null);

(statearr_29531_29572[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29509 === (19))){
var inst_29489 = (state_29508[(11)]);
var inst_29439 = (state_29508[(8)]);
var inst_29491 = cljs.core.async.muxch_STAR_.call(null,inst_29489);
var state_29508__$1 = state_29508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29508__$1,(22),inst_29491,inst_29439);
} else {
if((state_val_29509 === (11))){
var inst_29449 = (state_29508[(12)]);
var inst_29463 = (state_29508[(10)]);
var inst_29463__$1 = cljs.core.seq.call(null,inst_29449);
var state_29508__$1 = (function (){var statearr_29532 = state_29508;
(statearr_29532[(10)] = inst_29463__$1);

return statearr_29532;
})();
if(inst_29463__$1){
var statearr_29533_29573 = state_29508__$1;
(statearr_29533_29573[(1)] = (13));

} else {
var statearr_29534_29574 = state_29508__$1;
(statearr_29534_29574[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29509 === (9))){
var inst_29485 = (state_29508[(2)]);
var state_29508__$1 = state_29508;
var statearr_29535_29575 = state_29508__$1;
(statearr_29535_29575[(2)] = inst_29485);

(statearr_29535_29575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29509 === (5))){
var inst_29446 = cljs.core.deref.call(null,mults);
var inst_29447 = cljs.core.vals.call(null,inst_29446);
var inst_29448 = cljs.core.seq.call(null,inst_29447);
var inst_29449 = inst_29448;
var inst_29450 = null;
var inst_29451 = (0);
var inst_29452 = (0);
var state_29508__$1 = (function (){var statearr_29536 = state_29508;
(statearr_29536[(12)] = inst_29449);

(statearr_29536[(14)] = inst_29450);

(statearr_29536[(15)] = inst_29451);

(statearr_29536[(16)] = inst_29452);

return statearr_29536;
})();
var statearr_29537_29576 = state_29508__$1;
(statearr_29537_29576[(2)] = null);

(statearr_29537_29576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29509 === (14))){
var state_29508__$1 = state_29508;
var statearr_29541_29577 = state_29508__$1;
(statearr_29541_29577[(2)] = null);

(statearr_29541_29577[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29509 === (16))){
var inst_29463 = (state_29508[(10)]);
var inst_29467 = cljs.core.chunk_first.call(null,inst_29463);
var inst_29468 = cljs.core.chunk_rest.call(null,inst_29463);
var inst_29469 = cljs.core.count.call(null,inst_29467);
var inst_29449 = inst_29468;
var inst_29450 = inst_29467;
var inst_29451 = inst_29469;
var inst_29452 = (0);
var state_29508__$1 = (function (){var statearr_29542 = state_29508;
(statearr_29542[(12)] = inst_29449);

(statearr_29542[(14)] = inst_29450);

(statearr_29542[(15)] = inst_29451);

(statearr_29542[(16)] = inst_29452);

return statearr_29542;
})();
var statearr_29543_29578 = state_29508__$1;
(statearr_29543_29578[(2)] = null);

(statearr_29543_29578[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29509 === (10))){
var inst_29449 = (state_29508[(12)]);
var inst_29450 = (state_29508[(14)]);
var inst_29451 = (state_29508[(15)]);
var inst_29452 = (state_29508[(16)]);
var inst_29457 = cljs.core._nth.call(null,inst_29450,inst_29452);
var inst_29458 = cljs.core.async.muxch_STAR_.call(null,inst_29457);
var inst_29459 = cljs.core.async.close_BANG_.call(null,inst_29458);
var inst_29460 = (inst_29452 + (1));
var tmp29538 = inst_29449;
var tmp29539 = inst_29450;
var tmp29540 = inst_29451;
var inst_29449__$1 = tmp29538;
var inst_29450__$1 = tmp29539;
var inst_29451__$1 = tmp29540;
var inst_29452__$1 = inst_29460;
var state_29508__$1 = (function (){var statearr_29544 = state_29508;
(statearr_29544[(12)] = inst_29449__$1);

(statearr_29544[(17)] = inst_29459);

(statearr_29544[(14)] = inst_29450__$1);

(statearr_29544[(15)] = inst_29451__$1);

(statearr_29544[(16)] = inst_29452__$1);

return statearr_29544;
})();
var statearr_29545_29579 = state_29508__$1;
(statearr_29545_29579[(2)] = null);

(statearr_29545_29579[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29509 === (18))){
var inst_29478 = (state_29508[(2)]);
var state_29508__$1 = state_29508;
var statearr_29546_29580 = state_29508__$1;
(statearr_29546_29580[(2)] = inst_29478);

(statearr_29546_29580[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29509 === (8))){
var inst_29451 = (state_29508[(15)]);
var inst_29452 = (state_29508[(16)]);
var inst_29454 = (inst_29452 < inst_29451);
var inst_29455 = inst_29454;
var state_29508__$1 = state_29508;
if(cljs.core.truth_(inst_29455)){
var statearr_29547_29581 = state_29508__$1;
(statearr_29547_29581[(1)] = (10));

} else {
var statearr_29548_29582 = state_29508__$1;
(statearr_29548_29582[(1)] = (11));

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
});})(c__28320__auto___29554,mults,ensure_mult,p))
;
return ((function (switch__28225__auto__,c__28320__auto___29554,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28226__auto__ = null;
var cljs$core$async$state_machine__28226__auto____0 = (function (){
var statearr_29549 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29549[(0)] = cljs$core$async$state_machine__28226__auto__);

(statearr_29549[(1)] = (1));

return statearr_29549;
});
var cljs$core$async$state_machine__28226__auto____1 = (function (state_29508){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_29508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e29550){if((e29550 instanceof Object)){
var ex__28229__auto__ = e29550;
var statearr_29551_29583 = state_29508;
(statearr_29551_29583[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29550;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29584 = state_29508;
state_29508 = G__29584;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$state_machine__28226__auto__ = function(state_29508){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28226__auto____1.call(this,state_29508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28226__auto____0;
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28226__auto____1;
return cljs$core$async$state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28320__auto___29554,mults,ensure_mult,p))
})();
var state__28322__auto__ = (function (){var statearr_29552 = f__28321__auto__.call(null);
(statearr_29552[(6)] = c__28320__auto___29554);

return statearr_29552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28322__auto__);
});})(c__28320__auto___29554,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__29586 = arguments.length;
switch (G__29586) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__29589 = arguments.length;
switch (G__29589) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__29592 = arguments.length;
switch (G__29592) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28320__auto___29659 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28320__auto___29659,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28321__auto__ = (function (){var switch__28225__auto__ = ((function (c__28320__auto___29659,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29631){
var state_val_29632 = (state_29631[(1)]);
if((state_val_29632 === (7))){
var state_29631__$1 = state_29631;
var statearr_29633_29660 = state_29631__$1;
(statearr_29633_29660[(2)] = null);

(statearr_29633_29660[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29632 === (1))){
var state_29631__$1 = state_29631;
var statearr_29634_29661 = state_29631__$1;
(statearr_29634_29661[(2)] = null);

(statearr_29634_29661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29632 === (4))){
var inst_29595 = (state_29631[(7)]);
var inst_29597 = (inst_29595 < cnt);
var state_29631__$1 = state_29631;
if(cljs.core.truth_(inst_29597)){
var statearr_29635_29662 = state_29631__$1;
(statearr_29635_29662[(1)] = (6));

} else {
var statearr_29636_29663 = state_29631__$1;
(statearr_29636_29663[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29632 === (15))){
var inst_29627 = (state_29631[(2)]);
var state_29631__$1 = state_29631;
var statearr_29637_29664 = state_29631__$1;
(statearr_29637_29664[(2)] = inst_29627);

(statearr_29637_29664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29632 === (13))){
var inst_29620 = cljs.core.async.close_BANG_.call(null,out);
var state_29631__$1 = state_29631;
var statearr_29638_29665 = state_29631__$1;
(statearr_29638_29665[(2)] = inst_29620);

(statearr_29638_29665[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29632 === (6))){
var state_29631__$1 = state_29631;
var statearr_29639_29666 = state_29631__$1;
(statearr_29639_29666[(2)] = null);

(statearr_29639_29666[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29632 === (3))){
var inst_29629 = (state_29631[(2)]);
var state_29631__$1 = state_29631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29631__$1,inst_29629);
} else {
if((state_val_29632 === (12))){
var inst_29617 = (state_29631[(8)]);
var inst_29617__$1 = (state_29631[(2)]);
var inst_29618 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29617__$1);
var state_29631__$1 = (function (){var statearr_29640 = state_29631;
(statearr_29640[(8)] = inst_29617__$1);

return statearr_29640;
})();
if(cljs.core.truth_(inst_29618)){
var statearr_29641_29667 = state_29631__$1;
(statearr_29641_29667[(1)] = (13));

} else {
var statearr_29642_29668 = state_29631__$1;
(statearr_29642_29668[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29632 === (2))){
var inst_29594 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29595 = (0);
var state_29631__$1 = (function (){var statearr_29643 = state_29631;
(statearr_29643[(9)] = inst_29594);

(statearr_29643[(7)] = inst_29595);

return statearr_29643;
})();
var statearr_29644_29669 = state_29631__$1;
(statearr_29644_29669[(2)] = null);

(statearr_29644_29669[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29632 === (11))){
var inst_29595 = (state_29631[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29631,(10),Object,null,(9));
var inst_29604 = chs__$1.call(null,inst_29595);
var inst_29605 = done.call(null,inst_29595);
var inst_29606 = cljs.core.async.take_BANG_.call(null,inst_29604,inst_29605);
var state_29631__$1 = state_29631;
var statearr_29645_29670 = state_29631__$1;
(statearr_29645_29670[(2)] = inst_29606);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29631__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29632 === (9))){
var inst_29595 = (state_29631[(7)]);
var inst_29608 = (state_29631[(2)]);
var inst_29609 = (inst_29595 + (1));
var inst_29595__$1 = inst_29609;
var state_29631__$1 = (function (){var statearr_29646 = state_29631;
(statearr_29646[(10)] = inst_29608);

(statearr_29646[(7)] = inst_29595__$1);

return statearr_29646;
})();
var statearr_29647_29671 = state_29631__$1;
(statearr_29647_29671[(2)] = null);

(statearr_29647_29671[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29632 === (5))){
var inst_29615 = (state_29631[(2)]);
var state_29631__$1 = (function (){var statearr_29648 = state_29631;
(statearr_29648[(11)] = inst_29615);

return statearr_29648;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29631__$1,(12),dchan);
} else {
if((state_val_29632 === (14))){
var inst_29617 = (state_29631[(8)]);
var inst_29622 = cljs.core.apply.call(null,f,inst_29617);
var state_29631__$1 = state_29631;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29631__$1,(16),out,inst_29622);
} else {
if((state_val_29632 === (16))){
var inst_29624 = (state_29631[(2)]);
var state_29631__$1 = (function (){var statearr_29649 = state_29631;
(statearr_29649[(12)] = inst_29624);

return statearr_29649;
})();
var statearr_29650_29672 = state_29631__$1;
(statearr_29650_29672[(2)] = null);

(statearr_29650_29672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29632 === (10))){
var inst_29599 = (state_29631[(2)]);
var inst_29600 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29631__$1 = (function (){var statearr_29651 = state_29631;
(statearr_29651[(13)] = inst_29599);

return statearr_29651;
})();
var statearr_29652_29673 = state_29631__$1;
(statearr_29652_29673[(2)] = inst_29600);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29631__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29632 === (8))){
var inst_29613 = (state_29631[(2)]);
var state_29631__$1 = state_29631;
var statearr_29653_29674 = state_29631__$1;
(statearr_29653_29674[(2)] = inst_29613);

(statearr_29653_29674[(1)] = (5));


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
});})(c__28320__auto___29659,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28225__auto__,c__28320__auto___29659,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28226__auto__ = null;
var cljs$core$async$state_machine__28226__auto____0 = (function (){
var statearr_29654 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29654[(0)] = cljs$core$async$state_machine__28226__auto__);

(statearr_29654[(1)] = (1));

return statearr_29654;
});
var cljs$core$async$state_machine__28226__auto____1 = (function (state_29631){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_29631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e29655){if((e29655 instanceof Object)){
var ex__28229__auto__ = e29655;
var statearr_29656_29675 = state_29631;
(statearr_29656_29675[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29676 = state_29631;
state_29631 = G__29676;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$state_machine__28226__auto__ = function(state_29631){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28226__auto____1.call(this,state_29631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28226__auto____0;
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28226__auto____1;
return cljs$core$async$state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28320__auto___29659,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28322__auto__ = (function (){var statearr_29657 = f__28321__auto__.call(null);
(statearr_29657[(6)] = c__28320__auto___29659);

return statearr_29657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28322__auto__);
});})(c__28320__auto___29659,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__29679 = arguments.length;
switch (G__29679) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28320__auto___29733 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28320__auto___29733,out){
return (function (){
var f__28321__auto__ = (function (){var switch__28225__auto__ = ((function (c__28320__auto___29733,out){
return (function (state_29711){
var state_val_29712 = (state_29711[(1)]);
if((state_val_29712 === (7))){
var inst_29690 = (state_29711[(7)]);
var inst_29691 = (state_29711[(8)]);
var inst_29690__$1 = (state_29711[(2)]);
var inst_29691__$1 = cljs.core.nth.call(null,inst_29690__$1,(0),null);
var inst_29692 = cljs.core.nth.call(null,inst_29690__$1,(1),null);
var inst_29693 = (inst_29691__$1 == null);
var state_29711__$1 = (function (){var statearr_29713 = state_29711;
(statearr_29713[(9)] = inst_29692);

(statearr_29713[(7)] = inst_29690__$1);

(statearr_29713[(8)] = inst_29691__$1);

return statearr_29713;
})();
if(cljs.core.truth_(inst_29693)){
var statearr_29714_29734 = state_29711__$1;
(statearr_29714_29734[(1)] = (8));

} else {
var statearr_29715_29735 = state_29711__$1;
(statearr_29715_29735[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29712 === (1))){
var inst_29680 = cljs.core.vec.call(null,chs);
var inst_29681 = inst_29680;
var state_29711__$1 = (function (){var statearr_29716 = state_29711;
(statearr_29716[(10)] = inst_29681);

return statearr_29716;
})();
var statearr_29717_29736 = state_29711__$1;
(statearr_29717_29736[(2)] = null);

(statearr_29717_29736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29712 === (4))){
var inst_29681 = (state_29711[(10)]);
var state_29711__$1 = state_29711;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29711__$1,(7),inst_29681);
} else {
if((state_val_29712 === (6))){
var inst_29707 = (state_29711[(2)]);
var state_29711__$1 = state_29711;
var statearr_29718_29737 = state_29711__$1;
(statearr_29718_29737[(2)] = inst_29707);

(statearr_29718_29737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29712 === (3))){
var inst_29709 = (state_29711[(2)]);
var state_29711__$1 = state_29711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29711__$1,inst_29709);
} else {
if((state_val_29712 === (2))){
var inst_29681 = (state_29711[(10)]);
var inst_29683 = cljs.core.count.call(null,inst_29681);
var inst_29684 = (inst_29683 > (0));
var state_29711__$1 = state_29711;
if(cljs.core.truth_(inst_29684)){
var statearr_29720_29738 = state_29711__$1;
(statearr_29720_29738[(1)] = (4));

} else {
var statearr_29721_29739 = state_29711__$1;
(statearr_29721_29739[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29712 === (11))){
var inst_29681 = (state_29711[(10)]);
var inst_29700 = (state_29711[(2)]);
var tmp29719 = inst_29681;
var inst_29681__$1 = tmp29719;
var state_29711__$1 = (function (){var statearr_29722 = state_29711;
(statearr_29722[(10)] = inst_29681__$1);

(statearr_29722[(11)] = inst_29700);

return statearr_29722;
})();
var statearr_29723_29740 = state_29711__$1;
(statearr_29723_29740[(2)] = null);

(statearr_29723_29740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29712 === (9))){
var inst_29691 = (state_29711[(8)]);
var state_29711__$1 = state_29711;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29711__$1,(11),out,inst_29691);
} else {
if((state_val_29712 === (5))){
var inst_29705 = cljs.core.async.close_BANG_.call(null,out);
var state_29711__$1 = state_29711;
var statearr_29724_29741 = state_29711__$1;
(statearr_29724_29741[(2)] = inst_29705);

(statearr_29724_29741[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29712 === (10))){
var inst_29703 = (state_29711[(2)]);
var state_29711__$1 = state_29711;
var statearr_29725_29742 = state_29711__$1;
(statearr_29725_29742[(2)] = inst_29703);

(statearr_29725_29742[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29712 === (8))){
var inst_29692 = (state_29711[(9)]);
var inst_29681 = (state_29711[(10)]);
var inst_29690 = (state_29711[(7)]);
var inst_29691 = (state_29711[(8)]);
var inst_29695 = (function (){var cs = inst_29681;
var vec__29686 = inst_29690;
var v = inst_29691;
var c = inst_29692;
return ((function (cs,vec__29686,v,c,inst_29692,inst_29681,inst_29690,inst_29691,state_val_29712,c__28320__auto___29733,out){
return (function (p1__29677_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29677_SHARP_);
});
;})(cs,vec__29686,v,c,inst_29692,inst_29681,inst_29690,inst_29691,state_val_29712,c__28320__auto___29733,out))
})();
var inst_29696 = cljs.core.filterv.call(null,inst_29695,inst_29681);
var inst_29681__$1 = inst_29696;
var state_29711__$1 = (function (){var statearr_29726 = state_29711;
(statearr_29726[(10)] = inst_29681__$1);

return statearr_29726;
})();
var statearr_29727_29743 = state_29711__$1;
(statearr_29727_29743[(2)] = null);

(statearr_29727_29743[(1)] = (2));


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
});})(c__28320__auto___29733,out))
;
return ((function (switch__28225__auto__,c__28320__auto___29733,out){
return (function() {
var cljs$core$async$state_machine__28226__auto__ = null;
var cljs$core$async$state_machine__28226__auto____0 = (function (){
var statearr_29728 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29728[(0)] = cljs$core$async$state_machine__28226__auto__);

(statearr_29728[(1)] = (1));

return statearr_29728;
});
var cljs$core$async$state_machine__28226__auto____1 = (function (state_29711){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_29711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e29729){if((e29729 instanceof Object)){
var ex__28229__auto__ = e29729;
var statearr_29730_29744 = state_29711;
(statearr_29730_29744[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29745 = state_29711;
state_29711 = G__29745;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$state_machine__28226__auto__ = function(state_29711){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28226__auto____1.call(this,state_29711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28226__auto____0;
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28226__auto____1;
return cljs$core$async$state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28320__auto___29733,out))
})();
var state__28322__auto__ = (function (){var statearr_29731 = f__28321__auto__.call(null);
(statearr_29731[(6)] = c__28320__auto___29733);

return statearr_29731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28322__auto__);
});})(c__28320__auto___29733,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__29747 = arguments.length;
switch (G__29747) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28320__auto___29792 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28320__auto___29792,out){
return (function (){
var f__28321__auto__ = (function (){var switch__28225__auto__ = ((function (c__28320__auto___29792,out){
return (function (state_29771){
var state_val_29772 = (state_29771[(1)]);
if((state_val_29772 === (7))){
var inst_29753 = (state_29771[(7)]);
var inst_29753__$1 = (state_29771[(2)]);
var inst_29754 = (inst_29753__$1 == null);
var inst_29755 = cljs.core.not.call(null,inst_29754);
var state_29771__$1 = (function (){var statearr_29773 = state_29771;
(statearr_29773[(7)] = inst_29753__$1);

return statearr_29773;
})();
if(inst_29755){
var statearr_29774_29793 = state_29771__$1;
(statearr_29774_29793[(1)] = (8));

} else {
var statearr_29775_29794 = state_29771__$1;
(statearr_29775_29794[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (1))){
var inst_29748 = (0);
var state_29771__$1 = (function (){var statearr_29776 = state_29771;
(statearr_29776[(8)] = inst_29748);

return statearr_29776;
})();
var statearr_29777_29795 = state_29771__$1;
(statearr_29777_29795[(2)] = null);

(statearr_29777_29795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (4))){
var state_29771__$1 = state_29771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29771__$1,(7),ch);
} else {
if((state_val_29772 === (6))){
var inst_29766 = (state_29771[(2)]);
var state_29771__$1 = state_29771;
var statearr_29778_29796 = state_29771__$1;
(statearr_29778_29796[(2)] = inst_29766);

(statearr_29778_29796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (3))){
var inst_29768 = (state_29771[(2)]);
var inst_29769 = cljs.core.async.close_BANG_.call(null,out);
var state_29771__$1 = (function (){var statearr_29779 = state_29771;
(statearr_29779[(9)] = inst_29768);

return statearr_29779;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29771__$1,inst_29769);
} else {
if((state_val_29772 === (2))){
var inst_29748 = (state_29771[(8)]);
var inst_29750 = (inst_29748 < n);
var state_29771__$1 = state_29771;
if(cljs.core.truth_(inst_29750)){
var statearr_29780_29797 = state_29771__$1;
(statearr_29780_29797[(1)] = (4));

} else {
var statearr_29781_29798 = state_29771__$1;
(statearr_29781_29798[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (11))){
var inst_29748 = (state_29771[(8)]);
var inst_29758 = (state_29771[(2)]);
var inst_29759 = (inst_29748 + (1));
var inst_29748__$1 = inst_29759;
var state_29771__$1 = (function (){var statearr_29782 = state_29771;
(statearr_29782[(10)] = inst_29758);

(statearr_29782[(8)] = inst_29748__$1);

return statearr_29782;
})();
var statearr_29783_29799 = state_29771__$1;
(statearr_29783_29799[(2)] = null);

(statearr_29783_29799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (9))){
var state_29771__$1 = state_29771;
var statearr_29784_29800 = state_29771__$1;
(statearr_29784_29800[(2)] = null);

(statearr_29784_29800[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (5))){
var state_29771__$1 = state_29771;
var statearr_29785_29801 = state_29771__$1;
(statearr_29785_29801[(2)] = null);

(statearr_29785_29801[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (10))){
var inst_29763 = (state_29771[(2)]);
var state_29771__$1 = state_29771;
var statearr_29786_29802 = state_29771__$1;
(statearr_29786_29802[(2)] = inst_29763);

(statearr_29786_29802[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (8))){
var inst_29753 = (state_29771[(7)]);
var state_29771__$1 = state_29771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29771__$1,(11),out,inst_29753);
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
});})(c__28320__auto___29792,out))
;
return ((function (switch__28225__auto__,c__28320__auto___29792,out){
return (function() {
var cljs$core$async$state_machine__28226__auto__ = null;
var cljs$core$async$state_machine__28226__auto____0 = (function (){
var statearr_29787 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29787[(0)] = cljs$core$async$state_machine__28226__auto__);

(statearr_29787[(1)] = (1));

return statearr_29787;
});
var cljs$core$async$state_machine__28226__auto____1 = (function (state_29771){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_29771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e29788){if((e29788 instanceof Object)){
var ex__28229__auto__ = e29788;
var statearr_29789_29803 = state_29771;
(statearr_29789_29803[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29804 = state_29771;
state_29771 = G__29804;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$state_machine__28226__auto__ = function(state_29771){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28226__auto____1.call(this,state_29771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28226__auto____0;
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28226__auto____1;
return cljs$core$async$state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28320__auto___29792,out))
})();
var state__28322__auto__ = (function (){var statearr_29790 = f__28321__auto__.call(null);
(statearr_29790[(6)] = c__28320__auto___29792);

return statearr_29790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28322__auto__);
});})(c__28320__auto___29792,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29806 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29806 = (function (f,ch,meta29807){
this.f = f;
this.ch = ch;
this.meta29807 = meta29807;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29808,meta29807__$1){
var self__ = this;
var _29808__$1 = this;
return (new cljs.core.async.t_cljs$core$async29806(self__.f,self__.ch,meta29807__$1));
});

cljs.core.async.t_cljs$core$async29806.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29808){
var self__ = this;
var _29808__$1 = this;
return self__.meta29807;
});

cljs.core.async.t_cljs$core$async29806.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29806.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29806.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29806.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29806.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29809 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29809 = (function (f,ch,meta29807,_,fn1,meta29810){
this.f = f;
this.ch = ch;
this.meta29807 = meta29807;
this._ = _;
this.fn1 = fn1;
this.meta29810 = meta29810;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29811,meta29810__$1){
var self__ = this;
var _29811__$1 = this;
return (new cljs.core.async.t_cljs$core$async29809(self__.f,self__.ch,self__.meta29807,self__._,self__.fn1,meta29810__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29809.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29811){
var self__ = this;
var _29811__$1 = this;
return self__.meta29810;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29809.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29809.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29809.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29809.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29805_SHARP_){
return f1.call(null,(((p1__29805_SHARP_ == null))?null:self__.f.call(null,p1__29805_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29809.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29807","meta29807",2068052358,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29806","cljs.core.async/t_cljs$core$async29806",-1371007492,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29810","meta29810",-777469527,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29809.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29809.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29809";

cljs.core.async.t_cljs$core$async29809.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async29809");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29809.
 */
cljs.core.async.__GT_t_cljs$core$async29809 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29809(f__$1,ch__$1,meta29807__$1,___$2,fn1__$1,meta29810){
return (new cljs.core.async.t_cljs$core$async29809(f__$1,ch__$1,meta29807__$1,___$2,fn1__$1,meta29810));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29809(self__.f,self__.ch,self__.meta29807,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29806.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29806.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29806.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29807","meta29807",2068052358,null)], null);
});

cljs.core.async.t_cljs$core$async29806.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29806.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29806";

cljs.core.async.t_cljs$core$async29806.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async29806");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29806.
 */
cljs.core.async.__GT_t_cljs$core$async29806 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29806(f__$1,ch__$1,meta29807){
return (new cljs.core.async.t_cljs$core$async29806(f__$1,ch__$1,meta29807));
});

}

return (new cljs.core.async.t_cljs$core$async29806(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29812 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29812 = (function (f,ch,meta29813){
this.f = f;
this.ch = ch;
this.meta29813 = meta29813;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29814,meta29813__$1){
var self__ = this;
var _29814__$1 = this;
return (new cljs.core.async.t_cljs$core$async29812(self__.f,self__.ch,meta29813__$1));
});

cljs.core.async.t_cljs$core$async29812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29814){
var self__ = this;
var _29814__$1 = this;
return self__.meta29813;
});

cljs.core.async.t_cljs$core$async29812.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29812.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29812.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29812.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29812.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29812.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29812.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29813","meta29813",-1173617856,null)], null);
});

cljs.core.async.t_cljs$core$async29812.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29812.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29812";

cljs.core.async.t_cljs$core$async29812.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async29812");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29812.
 */
cljs.core.async.__GT_t_cljs$core$async29812 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29812(f__$1,ch__$1,meta29813){
return (new cljs.core.async.t_cljs$core$async29812(f__$1,ch__$1,meta29813));
});

}

return (new cljs.core.async.t_cljs$core$async29812(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29815 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29815 = (function (p,ch,meta29816){
this.p = p;
this.ch = ch;
this.meta29816 = meta29816;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29817,meta29816__$1){
var self__ = this;
var _29817__$1 = this;
return (new cljs.core.async.t_cljs$core$async29815(self__.p,self__.ch,meta29816__$1));
});

cljs.core.async.t_cljs$core$async29815.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29817){
var self__ = this;
var _29817__$1 = this;
return self__.meta29816;
});

cljs.core.async.t_cljs$core$async29815.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29815.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29815.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29815.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29815.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29815.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29815.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29815.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29816","meta29816",-2075727390,null)], null);
});

cljs.core.async.t_cljs$core$async29815.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29815.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29815";

cljs.core.async.t_cljs$core$async29815.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async29815");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29815.
 */
cljs.core.async.__GT_t_cljs$core$async29815 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29815(p__$1,ch__$1,meta29816){
return (new cljs.core.async.t_cljs$core$async29815(p__$1,ch__$1,meta29816));
});

}

return (new cljs.core.async.t_cljs$core$async29815(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__29819 = arguments.length;
switch (G__29819) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28320__auto___29859 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28320__auto___29859,out){
return (function (){
var f__28321__auto__ = (function (){var switch__28225__auto__ = ((function (c__28320__auto___29859,out){
return (function (state_29840){
var state_val_29841 = (state_29840[(1)]);
if((state_val_29841 === (7))){
var inst_29836 = (state_29840[(2)]);
var state_29840__$1 = state_29840;
var statearr_29842_29860 = state_29840__$1;
(statearr_29842_29860[(2)] = inst_29836);

(statearr_29842_29860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29841 === (1))){
var state_29840__$1 = state_29840;
var statearr_29843_29861 = state_29840__$1;
(statearr_29843_29861[(2)] = null);

(statearr_29843_29861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29841 === (4))){
var inst_29822 = (state_29840[(7)]);
var inst_29822__$1 = (state_29840[(2)]);
var inst_29823 = (inst_29822__$1 == null);
var state_29840__$1 = (function (){var statearr_29844 = state_29840;
(statearr_29844[(7)] = inst_29822__$1);

return statearr_29844;
})();
if(cljs.core.truth_(inst_29823)){
var statearr_29845_29862 = state_29840__$1;
(statearr_29845_29862[(1)] = (5));

} else {
var statearr_29846_29863 = state_29840__$1;
(statearr_29846_29863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29841 === (6))){
var inst_29822 = (state_29840[(7)]);
var inst_29827 = p.call(null,inst_29822);
var state_29840__$1 = state_29840;
if(cljs.core.truth_(inst_29827)){
var statearr_29847_29864 = state_29840__$1;
(statearr_29847_29864[(1)] = (8));

} else {
var statearr_29848_29865 = state_29840__$1;
(statearr_29848_29865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29841 === (3))){
var inst_29838 = (state_29840[(2)]);
var state_29840__$1 = state_29840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29840__$1,inst_29838);
} else {
if((state_val_29841 === (2))){
var state_29840__$1 = state_29840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29840__$1,(4),ch);
} else {
if((state_val_29841 === (11))){
var inst_29830 = (state_29840[(2)]);
var state_29840__$1 = state_29840;
var statearr_29849_29866 = state_29840__$1;
(statearr_29849_29866[(2)] = inst_29830);

(statearr_29849_29866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29841 === (9))){
var state_29840__$1 = state_29840;
var statearr_29850_29867 = state_29840__$1;
(statearr_29850_29867[(2)] = null);

(statearr_29850_29867[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29841 === (5))){
var inst_29825 = cljs.core.async.close_BANG_.call(null,out);
var state_29840__$1 = state_29840;
var statearr_29851_29868 = state_29840__$1;
(statearr_29851_29868[(2)] = inst_29825);

(statearr_29851_29868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29841 === (10))){
var inst_29833 = (state_29840[(2)]);
var state_29840__$1 = (function (){var statearr_29852 = state_29840;
(statearr_29852[(8)] = inst_29833);

return statearr_29852;
})();
var statearr_29853_29869 = state_29840__$1;
(statearr_29853_29869[(2)] = null);

(statearr_29853_29869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29841 === (8))){
var inst_29822 = (state_29840[(7)]);
var state_29840__$1 = state_29840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29840__$1,(11),out,inst_29822);
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
});})(c__28320__auto___29859,out))
;
return ((function (switch__28225__auto__,c__28320__auto___29859,out){
return (function() {
var cljs$core$async$state_machine__28226__auto__ = null;
var cljs$core$async$state_machine__28226__auto____0 = (function (){
var statearr_29854 = [null,null,null,null,null,null,null,null,null];
(statearr_29854[(0)] = cljs$core$async$state_machine__28226__auto__);

(statearr_29854[(1)] = (1));

return statearr_29854;
});
var cljs$core$async$state_machine__28226__auto____1 = (function (state_29840){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_29840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e29855){if((e29855 instanceof Object)){
var ex__28229__auto__ = e29855;
var statearr_29856_29870 = state_29840;
(statearr_29856_29870[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29871 = state_29840;
state_29840 = G__29871;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$state_machine__28226__auto__ = function(state_29840){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28226__auto____1.call(this,state_29840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28226__auto____0;
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28226__auto____1;
return cljs$core$async$state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28320__auto___29859,out))
})();
var state__28322__auto__ = (function (){var statearr_29857 = f__28321__auto__.call(null);
(statearr_29857[(6)] = c__28320__auto___29859);

return statearr_29857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28322__auto__);
});})(c__28320__auto___29859,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29873 = arguments.length;
switch (G__29873) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28320__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28320__auto__){
return (function (){
var f__28321__auto__ = (function (){var switch__28225__auto__ = ((function (c__28320__auto__){
return (function (state_29936){
var state_val_29937 = (state_29936[(1)]);
if((state_val_29937 === (7))){
var inst_29932 = (state_29936[(2)]);
var state_29936__$1 = state_29936;
var statearr_29938_29976 = state_29936__$1;
(statearr_29938_29976[(2)] = inst_29932);

(statearr_29938_29976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (20))){
var inst_29902 = (state_29936[(7)]);
var inst_29913 = (state_29936[(2)]);
var inst_29914 = cljs.core.next.call(null,inst_29902);
var inst_29888 = inst_29914;
var inst_29889 = null;
var inst_29890 = (0);
var inst_29891 = (0);
var state_29936__$1 = (function (){var statearr_29939 = state_29936;
(statearr_29939[(8)] = inst_29891);

(statearr_29939[(9)] = inst_29888);

(statearr_29939[(10)] = inst_29913);

(statearr_29939[(11)] = inst_29890);

(statearr_29939[(12)] = inst_29889);

return statearr_29939;
})();
var statearr_29940_29977 = state_29936__$1;
(statearr_29940_29977[(2)] = null);

(statearr_29940_29977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (1))){
var state_29936__$1 = state_29936;
var statearr_29941_29978 = state_29936__$1;
(statearr_29941_29978[(2)] = null);

(statearr_29941_29978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (4))){
var inst_29877 = (state_29936[(13)]);
var inst_29877__$1 = (state_29936[(2)]);
var inst_29878 = (inst_29877__$1 == null);
var state_29936__$1 = (function (){var statearr_29942 = state_29936;
(statearr_29942[(13)] = inst_29877__$1);

return statearr_29942;
})();
if(cljs.core.truth_(inst_29878)){
var statearr_29943_29979 = state_29936__$1;
(statearr_29943_29979[(1)] = (5));

} else {
var statearr_29944_29980 = state_29936__$1;
(statearr_29944_29980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (15))){
var state_29936__$1 = state_29936;
var statearr_29948_29981 = state_29936__$1;
(statearr_29948_29981[(2)] = null);

(statearr_29948_29981[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (21))){
var state_29936__$1 = state_29936;
var statearr_29949_29982 = state_29936__$1;
(statearr_29949_29982[(2)] = null);

(statearr_29949_29982[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (13))){
var inst_29891 = (state_29936[(8)]);
var inst_29888 = (state_29936[(9)]);
var inst_29890 = (state_29936[(11)]);
var inst_29889 = (state_29936[(12)]);
var inst_29898 = (state_29936[(2)]);
var inst_29899 = (inst_29891 + (1));
var tmp29945 = inst_29888;
var tmp29946 = inst_29890;
var tmp29947 = inst_29889;
var inst_29888__$1 = tmp29945;
var inst_29889__$1 = tmp29947;
var inst_29890__$1 = tmp29946;
var inst_29891__$1 = inst_29899;
var state_29936__$1 = (function (){var statearr_29950 = state_29936;
(statearr_29950[(8)] = inst_29891__$1);

(statearr_29950[(9)] = inst_29888__$1);

(statearr_29950[(11)] = inst_29890__$1);

(statearr_29950[(12)] = inst_29889__$1);

(statearr_29950[(14)] = inst_29898);

return statearr_29950;
})();
var statearr_29951_29983 = state_29936__$1;
(statearr_29951_29983[(2)] = null);

(statearr_29951_29983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (22))){
var state_29936__$1 = state_29936;
var statearr_29952_29984 = state_29936__$1;
(statearr_29952_29984[(2)] = null);

(statearr_29952_29984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (6))){
var inst_29877 = (state_29936[(13)]);
var inst_29886 = f.call(null,inst_29877);
var inst_29887 = cljs.core.seq.call(null,inst_29886);
var inst_29888 = inst_29887;
var inst_29889 = null;
var inst_29890 = (0);
var inst_29891 = (0);
var state_29936__$1 = (function (){var statearr_29953 = state_29936;
(statearr_29953[(8)] = inst_29891);

(statearr_29953[(9)] = inst_29888);

(statearr_29953[(11)] = inst_29890);

(statearr_29953[(12)] = inst_29889);

return statearr_29953;
})();
var statearr_29954_29985 = state_29936__$1;
(statearr_29954_29985[(2)] = null);

(statearr_29954_29985[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (17))){
var inst_29902 = (state_29936[(7)]);
var inst_29906 = cljs.core.chunk_first.call(null,inst_29902);
var inst_29907 = cljs.core.chunk_rest.call(null,inst_29902);
var inst_29908 = cljs.core.count.call(null,inst_29906);
var inst_29888 = inst_29907;
var inst_29889 = inst_29906;
var inst_29890 = inst_29908;
var inst_29891 = (0);
var state_29936__$1 = (function (){var statearr_29955 = state_29936;
(statearr_29955[(8)] = inst_29891);

(statearr_29955[(9)] = inst_29888);

(statearr_29955[(11)] = inst_29890);

(statearr_29955[(12)] = inst_29889);

return statearr_29955;
})();
var statearr_29956_29986 = state_29936__$1;
(statearr_29956_29986[(2)] = null);

(statearr_29956_29986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (3))){
var inst_29934 = (state_29936[(2)]);
var state_29936__$1 = state_29936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29936__$1,inst_29934);
} else {
if((state_val_29937 === (12))){
var inst_29922 = (state_29936[(2)]);
var state_29936__$1 = state_29936;
var statearr_29957_29987 = state_29936__$1;
(statearr_29957_29987[(2)] = inst_29922);

(statearr_29957_29987[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (2))){
var state_29936__$1 = state_29936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29936__$1,(4),in$);
} else {
if((state_val_29937 === (23))){
var inst_29930 = (state_29936[(2)]);
var state_29936__$1 = state_29936;
var statearr_29958_29988 = state_29936__$1;
(statearr_29958_29988[(2)] = inst_29930);

(statearr_29958_29988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (19))){
var inst_29917 = (state_29936[(2)]);
var state_29936__$1 = state_29936;
var statearr_29959_29989 = state_29936__$1;
(statearr_29959_29989[(2)] = inst_29917);

(statearr_29959_29989[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (11))){
var inst_29888 = (state_29936[(9)]);
var inst_29902 = (state_29936[(7)]);
var inst_29902__$1 = cljs.core.seq.call(null,inst_29888);
var state_29936__$1 = (function (){var statearr_29960 = state_29936;
(statearr_29960[(7)] = inst_29902__$1);

return statearr_29960;
})();
if(inst_29902__$1){
var statearr_29961_29990 = state_29936__$1;
(statearr_29961_29990[(1)] = (14));

} else {
var statearr_29962_29991 = state_29936__$1;
(statearr_29962_29991[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (9))){
var inst_29924 = (state_29936[(2)]);
var inst_29925 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29936__$1 = (function (){var statearr_29963 = state_29936;
(statearr_29963[(15)] = inst_29924);

return statearr_29963;
})();
if(cljs.core.truth_(inst_29925)){
var statearr_29964_29992 = state_29936__$1;
(statearr_29964_29992[(1)] = (21));

} else {
var statearr_29965_29993 = state_29936__$1;
(statearr_29965_29993[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (5))){
var inst_29880 = cljs.core.async.close_BANG_.call(null,out);
var state_29936__$1 = state_29936;
var statearr_29966_29994 = state_29936__$1;
(statearr_29966_29994[(2)] = inst_29880);

(statearr_29966_29994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (14))){
var inst_29902 = (state_29936[(7)]);
var inst_29904 = cljs.core.chunked_seq_QMARK_.call(null,inst_29902);
var state_29936__$1 = state_29936;
if(inst_29904){
var statearr_29967_29995 = state_29936__$1;
(statearr_29967_29995[(1)] = (17));

} else {
var statearr_29968_29996 = state_29936__$1;
(statearr_29968_29996[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (16))){
var inst_29920 = (state_29936[(2)]);
var state_29936__$1 = state_29936;
var statearr_29969_29997 = state_29936__$1;
(statearr_29969_29997[(2)] = inst_29920);

(statearr_29969_29997[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (10))){
var inst_29891 = (state_29936[(8)]);
var inst_29889 = (state_29936[(12)]);
var inst_29896 = cljs.core._nth.call(null,inst_29889,inst_29891);
var state_29936__$1 = state_29936;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29936__$1,(13),out,inst_29896);
} else {
if((state_val_29937 === (18))){
var inst_29902 = (state_29936[(7)]);
var inst_29911 = cljs.core.first.call(null,inst_29902);
var state_29936__$1 = state_29936;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29936__$1,(20),out,inst_29911);
} else {
if((state_val_29937 === (8))){
var inst_29891 = (state_29936[(8)]);
var inst_29890 = (state_29936[(11)]);
var inst_29893 = (inst_29891 < inst_29890);
var inst_29894 = inst_29893;
var state_29936__$1 = state_29936;
if(cljs.core.truth_(inst_29894)){
var statearr_29970_29998 = state_29936__$1;
(statearr_29970_29998[(1)] = (10));

} else {
var statearr_29971_29999 = state_29936__$1;
(statearr_29971_29999[(1)] = (11));

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
});})(c__28320__auto__))
;
return ((function (switch__28225__auto__,c__28320__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28226__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28226__auto____0 = (function (){
var statearr_29972 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29972[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28226__auto__);

(statearr_29972[(1)] = (1));

return statearr_29972;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28226__auto____1 = (function (state_29936){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_29936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e29973){if((e29973 instanceof Object)){
var ex__28229__auto__ = e29973;
var statearr_29974_30000 = state_29936;
(statearr_29974_30000[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30001 = state_29936;
state_29936 = G__30001;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28226__auto__ = function(state_29936){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28226__auto____1.call(this,state_29936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28226__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28226__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28320__auto__))
})();
var state__28322__auto__ = (function (){var statearr_29975 = f__28321__auto__.call(null);
(statearr_29975[(6)] = c__28320__auto__);

return statearr_29975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28322__auto__);
});})(c__28320__auto__))
);

return c__28320__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__30003 = arguments.length;
switch (G__30003) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__30006 = arguments.length;
switch (G__30006) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__30009 = arguments.length;
switch (G__30009) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28320__auto___30056 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28320__auto___30056,out){
return (function (){
var f__28321__auto__ = (function (){var switch__28225__auto__ = ((function (c__28320__auto___30056,out){
return (function (state_30033){
var state_val_30034 = (state_30033[(1)]);
if((state_val_30034 === (7))){
var inst_30028 = (state_30033[(2)]);
var state_30033__$1 = state_30033;
var statearr_30035_30057 = state_30033__$1;
(statearr_30035_30057[(2)] = inst_30028);

(statearr_30035_30057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30034 === (1))){
var inst_30010 = null;
var state_30033__$1 = (function (){var statearr_30036 = state_30033;
(statearr_30036[(7)] = inst_30010);

return statearr_30036;
})();
var statearr_30037_30058 = state_30033__$1;
(statearr_30037_30058[(2)] = null);

(statearr_30037_30058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30034 === (4))){
var inst_30013 = (state_30033[(8)]);
var inst_30013__$1 = (state_30033[(2)]);
var inst_30014 = (inst_30013__$1 == null);
var inst_30015 = cljs.core.not.call(null,inst_30014);
var state_30033__$1 = (function (){var statearr_30038 = state_30033;
(statearr_30038[(8)] = inst_30013__$1);

return statearr_30038;
})();
if(inst_30015){
var statearr_30039_30059 = state_30033__$1;
(statearr_30039_30059[(1)] = (5));

} else {
var statearr_30040_30060 = state_30033__$1;
(statearr_30040_30060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30034 === (6))){
var state_30033__$1 = state_30033;
var statearr_30041_30061 = state_30033__$1;
(statearr_30041_30061[(2)] = null);

(statearr_30041_30061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30034 === (3))){
var inst_30030 = (state_30033[(2)]);
var inst_30031 = cljs.core.async.close_BANG_.call(null,out);
var state_30033__$1 = (function (){var statearr_30042 = state_30033;
(statearr_30042[(9)] = inst_30030);

return statearr_30042;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30033__$1,inst_30031);
} else {
if((state_val_30034 === (2))){
var state_30033__$1 = state_30033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30033__$1,(4),ch);
} else {
if((state_val_30034 === (11))){
var inst_30013 = (state_30033[(8)]);
var inst_30022 = (state_30033[(2)]);
var inst_30010 = inst_30013;
var state_30033__$1 = (function (){var statearr_30043 = state_30033;
(statearr_30043[(10)] = inst_30022);

(statearr_30043[(7)] = inst_30010);

return statearr_30043;
})();
var statearr_30044_30062 = state_30033__$1;
(statearr_30044_30062[(2)] = null);

(statearr_30044_30062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30034 === (9))){
var inst_30013 = (state_30033[(8)]);
var state_30033__$1 = state_30033;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30033__$1,(11),out,inst_30013);
} else {
if((state_val_30034 === (5))){
var inst_30010 = (state_30033[(7)]);
var inst_30013 = (state_30033[(8)]);
var inst_30017 = cljs.core._EQ_.call(null,inst_30013,inst_30010);
var state_30033__$1 = state_30033;
if(inst_30017){
var statearr_30046_30063 = state_30033__$1;
(statearr_30046_30063[(1)] = (8));

} else {
var statearr_30047_30064 = state_30033__$1;
(statearr_30047_30064[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30034 === (10))){
var inst_30025 = (state_30033[(2)]);
var state_30033__$1 = state_30033;
var statearr_30048_30065 = state_30033__$1;
(statearr_30048_30065[(2)] = inst_30025);

(statearr_30048_30065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30034 === (8))){
var inst_30010 = (state_30033[(7)]);
var tmp30045 = inst_30010;
var inst_30010__$1 = tmp30045;
var state_30033__$1 = (function (){var statearr_30049 = state_30033;
(statearr_30049[(7)] = inst_30010__$1);

return statearr_30049;
})();
var statearr_30050_30066 = state_30033__$1;
(statearr_30050_30066[(2)] = null);

(statearr_30050_30066[(1)] = (2));


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
});})(c__28320__auto___30056,out))
;
return ((function (switch__28225__auto__,c__28320__auto___30056,out){
return (function() {
var cljs$core$async$state_machine__28226__auto__ = null;
var cljs$core$async$state_machine__28226__auto____0 = (function (){
var statearr_30051 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30051[(0)] = cljs$core$async$state_machine__28226__auto__);

(statearr_30051[(1)] = (1));

return statearr_30051;
});
var cljs$core$async$state_machine__28226__auto____1 = (function (state_30033){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_30033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e30052){if((e30052 instanceof Object)){
var ex__28229__auto__ = e30052;
var statearr_30053_30067 = state_30033;
(statearr_30053_30067[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30068 = state_30033;
state_30033 = G__30068;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$state_machine__28226__auto__ = function(state_30033){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28226__auto____1.call(this,state_30033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28226__auto____0;
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28226__auto____1;
return cljs$core$async$state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28320__auto___30056,out))
})();
var state__28322__auto__ = (function (){var statearr_30054 = f__28321__auto__.call(null);
(statearr_30054[(6)] = c__28320__auto___30056);

return statearr_30054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28322__auto__);
});})(c__28320__auto___30056,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__30070 = arguments.length;
switch (G__30070) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28320__auto___30136 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28320__auto___30136,out){
return (function (){
var f__28321__auto__ = (function (){var switch__28225__auto__ = ((function (c__28320__auto___30136,out){
return (function (state_30108){
var state_val_30109 = (state_30108[(1)]);
if((state_val_30109 === (7))){
var inst_30104 = (state_30108[(2)]);
var state_30108__$1 = state_30108;
var statearr_30110_30137 = state_30108__$1;
(statearr_30110_30137[(2)] = inst_30104);

(statearr_30110_30137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30109 === (1))){
var inst_30071 = (new Array(n));
var inst_30072 = inst_30071;
var inst_30073 = (0);
var state_30108__$1 = (function (){var statearr_30111 = state_30108;
(statearr_30111[(7)] = inst_30072);

(statearr_30111[(8)] = inst_30073);

return statearr_30111;
})();
var statearr_30112_30138 = state_30108__$1;
(statearr_30112_30138[(2)] = null);

(statearr_30112_30138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30109 === (4))){
var inst_30076 = (state_30108[(9)]);
var inst_30076__$1 = (state_30108[(2)]);
var inst_30077 = (inst_30076__$1 == null);
var inst_30078 = cljs.core.not.call(null,inst_30077);
var state_30108__$1 = (function (){var statearr_30113 = state_30108;
(statearr_30113[(9)] = inst_30076__$1);

return statearr_30113;
})();
if(inst_30078){
var statearr_30114_30139 = state_30108__$1;
(statearr_30114_30139[(1)] = (5));

} else {
var statearr_30115_30140 = state_30108__$1;
(statearr_30115_30140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30109 === (15))){
var inst_30098 = (state_30108[(2)]);
var state_30108__$1 = state_30108;
var statearr_30116_30141 = state_30108__$1;
(statearr_30116_30141[(2)] = inst_30098);

(statearr_30116_30141[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30109 === (13))){
var state_30108__$1 = state_30108;
var statearr_30117_30142 = state_30108__$1;
(statearr_30117_30142[(2)] = null);

(statearr_30117_30142[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30109 === (6))){
var inst_30073 = (state_30108[(8)]);
var inst_30094 = (inst_30073 > (0));
var state_30108__$1 = state_30108;
if(cljs.core.truth_(inst_30094)){
var statearr_30118_30143 = state_30108__$1;
(statearr_30118_30143[(1)] = (12));

} else {
var statearr_30119_30144 = state_30108__$1;
(statearr_30119_30144[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30109 === (3))){
var inst_30106 = (state_30108[(2)]);
var state_30108__$1 = state_30108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30108__$1,inst_30106);
} else {
if((state_val_30109 === (12))){
var inst_30072 = (state_30108[(7)]);
var inst_30096 = cljs.core.vec.call(null,inst_30072);
var state_30108__$1 = state_30108;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30108__$1,(15),out,inst_30096);
} else {
if((state_val_30109 === (2))){
var state_30108__$1 = state_30108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30108__$1,(4),ch);
} else {
if((state_val_30109 === (11))){
var inst_30088 = (state_30108[(2)]);
var inst_30089 = (new Array(n));
var inst_30072 = inst_30089;
var inst_30073 = (0);
var state_30108__$1 = (function (){var statearr_30120 = state_30108;
(statearr_30120[(7)] = inst_30072);

(statearr_30120[(8)] = inst_30073);

(statearr_30120[(10)] = inst_30088);

return statearr_30120;
})();
var statearr_30121_30145 = state_30108__$1;
(statearr_30121_30145[(2)] = null);

(statearr_30121_30145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30109 === (9))){
var inst_30072 = (state_30108[(7)]);
var inst_30086 = cljs.core.vec.call(null,inst_30072);
var state_30108__$1 = state_30108;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30108__$1,(11),out,inst_30086);
} else {
if((state_val_30109 === (5))){
var inst_30072 = (state_30108[(7)]);
var inst_30073 = (state_30108[(8)]);
var inst_30081 = (state_30108[(11)]);
var inst_30076 = (state_30108[(9)]);
var inst_30080 = (inst_30072[inst_30073] = inst_30076);
var inst_30081__$1 = (inst_30073 + (1));
var inst_30082 = (inst_30081__$1 < n);
var state_30108__$1 = (function (){var statearr_30122 = state_30108;
(statearr_30122[(11)] = inst_30081__$1);

(statearr_30122[(12)] = inst_30080);

return statearr_30122;
})();
if(cljs.core.truth_(inst_30082)){
var statearr_30123_30146 = state_30108__$1;
(statearr_30123_30146[(1)] = (8));

} else {
var statearr_30124_30147 = state_30108__$1;
(statearr_30124_30147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30109 === (14))){
var inst_30101 = (state_30108[(2)]);
var inst_30102 = cljs.core.async.close_BANG_.call(null,out);
var state_30108__$1 = (function (){var statearr_30126 = state_30108;
(statearr_30126[(13)] = inst_30101);

return statearr_30126;
})();
var statearr_30127_30148 = state_30108__$1;
(statearr_30127_30148[(2)] = inst_30102);

(statearr_30127_30148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30109 === (10))){
var inst_30092 = (state_30108[(2)]);
var state_30108__$1 = state_30108;
var statearr_30128_30149 = state_30108__$1;
(statearr_30128_30149[(2)] = inst_30092);

(statearr_30128_30149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30109 === (8))){
var inst_30072 = (state_30108[(7)]);
var inst_30081 = (state_30108[(11)]);
var tmp30125 = inst_30072;
var inst_30072__$1 = tmp30125;
var inst_30073 = inst_30081;
var state_30108__$1 = (function (){var statearr_30129 = state_30108;
(statearr_30129[(7)] = inst_30072__$1);

(statearr_30129[(8)] = inst_30073);

return statearr_30129;
})();
var statearr_30130_30150 = state_30108__$1;
(statearr_30130_30150[(2)] = null);

(statearr_30130_30150[(1)] = (2));


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
});})(c__28320__auto___30136,out))
;
return ((function (switch__28225__auto__,c__28320__auto___30136,out){
return (function() {
var cljs$core$async$state_machine__28226__auto__ = null;
var cljs$core$async$state_machine__28226__auto____0 = (function (){
var statearr_30131 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30131[(0)] = cljs$core$async$state_machine__28226__auto__);

(statearr_30131[(1)] = (1));

return statearr_30131;
});
var cljs$core$async$state_machine__28226__auto____1 = (function (state_30108){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_30108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e30132){if((e30132 instanceof Object)){
var ex__28229__auto__ = e30132;
var statearr_30133_30151 = state_30108;
(statearr_30133_30151[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30152 = state_30108;
state_30108 = G__30152;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$state_machine__28226__auto__ = function(state_30108){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28226__auto____1.call(this,state_30108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28226__auto____0;
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28226__auto____1;
return cljs$core$async$state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28320__auto___30136,out))
})();
var state__28322__auto__ = (function (){var statearr_30134 = f__28321__auto__.call(null);
(statearr_30134[(6)] = c__28320__auto___30136);

return statearr_30134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28322__auto__);
});})(c__28320__auto___30136,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__30154 = arguments.length;
switch (G__30154) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28320__auto___30224 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28320__auto___30224,out){
return (function (){
var f__28321__auto__ = (function (){var switch__28225__auto__ = ((function (c__28320__auto___30224,out){
return (function (state_30196){
var state_val_30197 = (state_30196[(1)]);
if((state_val_30197 === (7))){
var inst_30192 = (state_30196[(2)]);
var state_30196__$1 = state_30196;
var statearr_30198_30225 = state_30196__$1;
(statearr_30198_30225[(2)] = inst_30192);

(statearr_30198_30225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30197 === (1))){
var inst_30155 = [];
var inst_30156 = inst_30155;
var inst_30157 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30196__$1 = (function (){var statearr_30199 = state_30196;
(statearr_30199[(7)] = inst_30156);

(statearr_30199[(8)] = inst_30157);

return statearr_30199;
})();
var statearr_30200_30226 = state_30196__$1;
(statearr_30200_30226[(2)] = null);

(statearr_30200_30226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30197 === (4))){
var inst_30160 = (state_30196[(9)]);
var inst_30160__$1 = (state_30196[(2)]);
var inst_30161 = (inst_30160__$1 == null);
var inst_30162 = cljs.core.not.call(null,inst_30161);
var state_30196__$1 = (function (){var statearr_30201 = state_30196;
(statearr_30201[(9)] = inst_30160__$1);

return statearr_30201;
})();
if(inst_30162){
var statearr_30202_30227 = state_30196__$1;
(statearr_30202_30227[(1)] = (5));

} else {
var statearr_30203_30228 = state_30196__$1;
(statearr_30203_30228[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30197 === (15))){
var inst_30186 = (state_30196[(2)]);
var state_30196__$1 = state_30196;
var statearr_30204_30229 = state_30196__$1;
(statearr_30204_30229[(2)] = inst_30186);

(statearr_30204_30229[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30197 === (13))){
var state_30196__$1 = state_30196;
var statearr_30205_30230 = state_30196__$1;
(statearr_30205_30230[(2)] = null);

(statearr_30205_30230[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30197 === (6))){
var inst_30156 = (state_30196[(7)]);
var inst_30181 = inst_30156.length;
var inst_30182 = (inst_30181 > (0));
var state_30196__$1 = state_30196;
if(cljs.core.truth_(inst_30182)){
var statearr_30206_30231 = state_30196__$1;
(statearr_30206_30231[(1)] = (12));

} else {
var statearr_30207_30232 = state_30196__$1;
(statearr_30207_30232[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30197 === (3))){
var inst_30194 = (state_30196[(2)]);
var state_30196__$1 = state_30196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30196__$1,inst_30194);
} else {
if((state_val_30197 === (12))){
var inst_30156 = (state_30196[(7)]);
var inst_30184 = cljs.core.vec.call(null,inst_30156);
var state_30196__$1 = state_30196;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30196__$1,(15),out,inst_30184);
} else {
if((state_val_30197 === (2))){
var state_30196__$1 = state_30196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30196__$1,(4),ch);
} else {
if((state_val_30197 === (11))){
var inst_30164 = (state_30196[(10)]);
var inst_30160 = (state_30196[(9)]);
var inst_30174 = (state_30196[(2)]);
var inst_30175 = [];
var inst_30176 = inst_30175.push(inst_30160);
var inst_30156 = inst_30175;
var inst_30157 = inst_30164;
var state_30196__$1 = (function (){var statearr_30208 = state_30196;
(statearr_30208[(11)] = inst_30174);

(statearr_30208[(7)] = inst_30156);

(statearr_30208[(12)] = inst_30176);

(statearr_30208[(8)] = inst_30157);

return statearr_30208;
})();
var statearr_30209_30233 = state_30196__$1;
(statearr_30209_30233[(2)] = null);

(statearr_30209_30233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30197 === (9))){
var inst_30156 = (state_30196[(7)]);
var inst_30172 = cljs.core.vec.call(null,inst_30156);
var state_30196__$1 = state_30196;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30196__$1,(11),out,inst_30172);
} else {
if((state_val_30197 === (5))){
var inst_30164 = (state_30196[(10)]);
var inst_30157 = (state_30196[(8)]);
var inst_30160 = (state_30196[(9)]);
var inst_30164__$1 = f.call(null,inst_30160);
var inst_30165 = cljs.core._EQ_.call(null,inst_30164__$1,inst_30157);
var inst_30166 = cljs.core.keyword_identical_QMARK_.call(null,inst_30157,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30167 = ((inst_30165) || (inst_30166));
var state_30196__$1 = (function (){var statearr_30210 = state_30196;
(statearr_30210[(10)] = inst_30164__$1);

return statearr_30210;
})();
if(cljs.core.truth_(inst_30167)){
var statearr_30211_30234 = state_30196__$1;
(statearr_30211_30234[(1)] = (8));

} else {
var statearr_30212_30235 = state_30196__$1;
(statearr_30212_30235[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30197 === (14))){
var inst_30189 = (state_30196[(2)]);
var inst_30190 = cljs.core.async.close_BANG_.call(null,out);
var state_30196__$1 = (function (){var statearr_30214 = state_30196;
(statearr_30214[(13)] = inst_30189);

return statearr_30214;
})();
var statearr_30215_30236 = state_30196__$1;
(statearr_30215_30236[(2)] = inst_30190);

(statearr_30215_30236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30197 === (10))){
var inst_30179 = (state_30196[(2)]);
var state_30196__$1 = state_30196;
var statearr_30216_30237 = state_30196__$1;
(statearr_30216_30237[(2)] = inst_30179);

(statearr_30216_30237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30197 === (8))){
var inst_30156 = (state_30196[(7)]);
var inst_30164 = (state_30196[(10)]);
var inst_30160 = (state_30196[(9)]);
var inst_30169 = inst_30156.push(inst_30160);
var tmp30213 = inst_30156;
var inst_30156__$1 = tmp30213;
var inst_30157 = inst_30164;
var state_30196__$1 = (function (){var statearr_30217 = state_30196;
(statearr_30217[(14)] = inst_30169);

(statearr_30217[(7)] = inst_30156__$1);

(statearr_30217[(8)] = inst_30157);

return statearr_30217;
})();
var statearr_30218_30238 = state_30196__$1;
(statearr_30218_30238[(2)] = null);

(statearr_30218_30238[(1)] = (2));


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
});})(c__28320__auto___30224,out))
;
return ((function (switch__28225__auto__,c__28320__auto___30224,out){
return (function() {
var cljs$core$async$state_machine__28226__auto__ = null;
var cljs$core$async$state_machine__28226__auto____0 = (function (){
var statearr_30219 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30219[(0)] = cljs$core$async$state_machine__28226__auto__);

(statearr_30219[(1)] = (1));

return statearr_30219;
});
var cljs$core$async$state_machine__28226__auto____1 = (function (state_30196){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_30196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e30220){if((e30220 instanceof Object)){
var ex__28229__auto__ = e30220;
var statearr_30221_30239 = state_30196;
(statearr_30221_30239[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30240 = state_30196;
state_30196 = G__30240;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$state_machine__28226__auto__ = function(state_30196){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28226__auto____1.call(this,state_30196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28226__auto____0;
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28226__auto____1;
return cljs$core$async$state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28320__auto___30224,out))
})();
var state__28322__auto__ = (function (){var statearr_30222 = f__28321__auto__.call(null);
(statearr_30222[(6)] = c__28320__auto___30224);

return statearr_30222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28322__auto__);
});})(c__28320__auto___30224,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1572229109756
