// type literals
var req = { url: 'http://localhost:8080', method: 'POST' };
// try to call req with 'POST' parameter type is a type, but constant above method property is inferred as string
// Argument of type 'string' is not assignable to parameter of type '"POST"'.
// handleReq(req.url, req.method); // type error
handleReq(req.url, req.method); // add ... as const to line 1 fixes this
// consider type literals
// let i: 'is a literal' = 'is a literal';
// i = 'Is a literal'; // uncomment for type literal error
var f = function () { return function (x, y) { return x + y; }; };
var foobar = f();
var logIt = foobar(8, 7);
console.log(logIt);
