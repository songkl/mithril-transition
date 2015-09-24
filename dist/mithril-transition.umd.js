(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.mithrilTransition=f()}})(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=transition;function persistHistory(persistHistoryAs,history){sessionStorage.setItem(persistHistoryAs,JSON.stringify(history))}function createHistory(){var persistHistoryAs=arguments.length<=0||arguments[0]===undefined?false:arguments[0];var history=[];if(persistHistoryAs){if(sessionStorage.getItem(persistHistoryAs)){history=JSON.parse(sessionStorage.getItem(persistHistoryAs))}}return{persistHistoryAs:persistHistoryAs,history:history,push:function push(key){this.history.push(key);persistHistory(this.persistHistoryAs,this.history)},pop:function pop(){this.history.pop();persistHistory(this.persistHistoryAs,this.history)},last:function last(){return this.history[this.history.length-1]?this.history[this.history.length-1]:undefined}}}function appendStyles(element,styles){for(var attr in styles){if({}.hasOwnProperty.call(styles,attr)){element.style[attr]=styles[attr]}}}function removeStyles(element,styles){for(var attr in styles){if({}.hasOwnProperty.call(styles,attr)){element.style[attr]=null}}}function loadStyles(lastElem,elem){if(this.styleParent){appendStyles(elem.parentNode,this.styleParent)}if(this.styleLastElement){appendStyles(lastElem,this.styleLastElement)}if(this.styleNewElement){appendStyles(elem,this.styleNewElement)}}function unloadStyles(barrier,parentNode,elem){var newBarrier=barrier-1;if(newBarrier>0){return newBarrier}if(this.styleParent){removeStyles(parentNode,this.styleParent)}if(this.styleNewElement){removeStyles(elem,this.styleNewElement)}return newBarrier}function config(key,elem,isInit,ctx){var _this=this;if(this.useHistory&&!key){throw new Error("Error in mithril-transition: "+"is required specified a key for the v-node.")}if(!isInit){(function(){var parentNode=elem.parentNode;var direction="next";if(_this.useHistory){if(_this.history.last()===key){direction="prev";_this.history.pop()}else{if(_this.last){_this.history.push(_this.last.key)}}}elem.classList.add("m-transition-"+direction);if(_this.last){(function(){var lastElem=_this.last.elem;_this.loadStyles(lastElem,elem);parentNode.insertAdjacentElement("beforeend",lastElem);var barrier=2;_this.anim(lastElem,elem,direction,function(){lastElem.remove();barrier=_this.unloadStyles(barrier,parentNode,elem)},function(){elem.classList.remove("m-transition-"+direction);barrier=_this.unloadStyles(barrier,parentNode,elem)})})()}var userOnUnload=ctx.onunload;ctx.onunload=function(){elem.classList.remove("m-transition-"+direction);elem.classList.add("m-transition-last");_this.last={key:key,elem:elem};if(userOnUnload){userOnUnload()}}})()}}var defaultStyleElements={position:"absolute",top:0,left:0,width:"100%",height:"100%"};function transition(){var _ref=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];var _ref$anim=_ref.anim;var anim=_ref$anim===undefined?null:_ref$anim;var _ref$useHistory=_ref.useHistory;var useHistory=_ref$useHistory===undefined?true:_ref$useHistory;var _ref$persistHistoryAs=_ref.persistHistoryAs;var persistHistoryAs=_ref$persistHistoryAs===undefined?false:_ref$persistHistoryAs;var _ref$styleParent=_ref.styleParent;var styleParent=_ref$styleParent===undefined?{width:"100%",height:"100%",overflow:"hidden"}:_ref$styleParent;var _ref$styleLastElement=_ref.styleLastElement;var styleLastElement=_ref$styleLastElement===undefined?defaultStyleElements:_ref$styleLastElement;var _ref$styleNewElement=_ref.styleNewElement;var styleNewElement=_ref$styleNewElement===undefined?defaultStyleElements:_ref$styleNewElement;if(!anim){throw new Error("Error in mithril-transition: "+"option `anim` is required.")}var that={useHistory:useHistory,anim:anim,config:config,styleParent:styleParent,styleLastElement:styleLastElement,styleNewElement:styleNewElement,loadStyles:loadStyles,unloadStyles:unloadStyles};if(that.useHistory){that.history=createHistory(persistHistoryAs)}return function animate(elem,isInit,ctx){that.config(this.attrs.key,elem,isInit,ctx)}}module.exports=exports["default"]},{}]},{},[1])(1)});
