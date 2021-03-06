# mithril-transition
[![Build Status](https://travis-ci.org/geut/mithril-transition.svg?branch=master)](https://travis-ci.org/geut/mithril-transition)
> A lightweight library for MithrilJS to create your own custom transitions based on the lifecycle of your components.

![mithril-transition](https://cloud.githubusercontent.com/assets/819446/24215837/d6593170-0f18-11e7-8458-ccffbb1ce18b.gif)

**NOTE:** This package was updated for the rewrite of Mithril, if you are looking
for the old and unmaintained package can be found it
[here](https://github.com/geut/mithril-transition/tree/v0.2)

## Install

With [npm](https://npmjs.com/package/mithril-transition) and [browserify](https://www.npmjs.com/package/browserify)/[webpack](https://www.npmjs.com/package/webpack) do:

```
npm install --save mithril-transition
```

Or you can use the UMD bundle

```html
<script src="/lib/mithril-transition/dist/mithril-transition.min.js" type="text/javascript"></script>
```

## How to use it

**mithril-transition** is a function factory that returns an `object` with an `oncreate` and `onremove` hooks to add in the vnode lifecycle (where you want animate it) of mithril.

Check our live **[example](https://geut.github.io/mithril-transition/example)**

## Functions

#### createTransition(options = {}) -> {transition}
Factory function to create a new transition. The options are defined below.

#### transition.oncreate(vnode)
Function that you need hook up to the lifecycle of the vnode

#### transition.onremove(vnode)
Function that you need hook up to the lifecycle of the vnode

#### transition.enable()
Method to enable the animation. **By default is enabled.**

#### transition.disable()
Method to disable the animation.

## Options

#### animation (required)
Callback function where you define the animation for the next/prev component.

The callback has an object argument {} with the next properties:

**lastElm**: The last DOM element that is removing.

**nextElm**: The new DOM element that is inserting.

**direction**: This option allow to you define differents animations based of next/prev direction of the lifecycle components. Is required have at least ```useHistory``` in true.

**cbLast**: Callback to complete the remove of the lastElm. (is required call it)

**cbNext**: Callback to complete the insert of the nextElm. (is required call it)

#### useHistory (default = true)
When is enabled the library keep the history of your components, to know if the next element in the transition is really the next element or a prev element.

#### persistHistoryAs ({string} default = null)
Save the history in the sessionStorage identified by a key.

#### classList ({object})
Before that the transition begin, the library set a list of classes for each parent|element and remove it when the transition is finished.
```javascript
default = {
    parent: 'm-transition-parent',
    lastElem: 'm-transition-last-element',
    newElem: 'm-transition-next-element',
    direction: 'm-transition-<direction>'
}
```

## On roadmap

- Add unit tests

## Credits

* Thanks to @dpaez to work with me the last year in a mobile project using [Mithril](http://mithril.js.org/) and exploring how to make transitions and animations with this excellent "MVC" framework.

## License

MIT
