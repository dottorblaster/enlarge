# enlarge [![npm version](https://badge.fury.io/js/enlarge.svg)](https://badge.fury.io/js/enlarge)

Dead simple string padding module with a funny name.

Most important feature: I'm not taking this down from npm (except for a DMCA takedown from PornHub :-D)

## Installation

```
npm install enlarge
```

## Examples

```
var enlarge = require('enlarge');
var test = 'stuff';

enlarge(test, 7); // gives back '  stuff'
enlarge(test, 7, '@') // gives back '@@stuff'
```

## A bit of history
Read [this](http://blog.npmjs.org/post/141577284765/kik-left-pad-and-npm).

I just wanted to write my own implementation of a string padding module for NodeJS.
