Defercall
=========
You know one thing I love about javascript? It is synchronous. Like wise I also hate that it is synchronous. Recently I had been looking through the jQuery docs about the new jQuery deferrends and I was thinking this is awesome. If only it could applied to javascript functions and callbacks. Well it can, sorta. This plugin will let you put in a callback function and use jquery deferends on the return to trigger other functions.

## Usage

```js
var myCoolFunction = function(deferrend) {
	if(true) deferrend.resolve();
	else deferrend.reject();
}

var deferred_call = $.defercall(myCoolFunction);

deferred_call.done(function() {
	alert('the deferrend was resolved!');
});

deferred_call.fail(function() {
	alert('the deferrend failed!');
});

deferred_call.then(function() {
	alert('the deferrend resolved!');
}, function() {
	alert('the deferrend failed!');
});
```

You can also pass multiple functions into the `$.defercall()` method up to unlimited number. But! If one fails they all fail. Just like jQuery deferrends. Note by default the deferend will succeed UNLESS you return false.

## License
Copyright (c) 2012 Kelly Becker

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.