# enlarge
Dead simple string padding module with a funny name.

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
