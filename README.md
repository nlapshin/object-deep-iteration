# object-deep-iteration

Iterates over a object of elements, yielding each in turn to an iteratee function. Iterates is a deep dive into object.

The iteratee is bound to the context object, if one is passed. Each invocation of iteratee is called with three arguments: (element, path, obj).

```js
Example:

let obj = {
	name: "test",
	flags: {
		checked: true
	}
};

let output = [];

let iteration = function(value, path) {
	output.push({ path: path, value: value });	
};

objectDeepIteration(obj, iteration);

console.log(output);

Result:
[
	{ path: "name", value: "test" },
	{ path: "flags", value: { checked: true } },
	{ path: "flags.checked", value: true }
]
```