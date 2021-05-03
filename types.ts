// type literals
const req = { url: 'http://localhost:8080', method: 'POST' } as const;

declare function handleReq(location: string, action: 'POST'): void;
// try to call req with 'POST' parameter type is a type, but constant above method property is inferred as string
// Argument of type 'string' is not assignable to parameter of type '"POST"'.
// handleReq(req.url, req.method); // type error
// handleReq(req.url, req.method); // add  `..as const` to line 1 to fix type error

type Why<U, I> = U & I;

type foo = <U, I, V, B, M, R, O>(x: Why<U, I> extends V ? B : M) => R | O;

// consider type literals
// let i: 'is a literal' = 'is a literal';
// i = 'Is a literal'; // uncomment for type literal error

const f = <X extends number>() => <Y extends number>(x: X, y: Y) => x + y;
const foobar = f<8>();
const logIt = foobar(8, 7);
// console.log(logIt);

// functions can return generic functions with types
type Foou<T> = <U extends number>(x: T, y: U) => number;
const foou: Foou<5> = (x, y) => x + y; // resolves to concrete type (LHS)

foou(5, 7); // fine
foou(5, 8); // fine
foou(6, 7); // illegal!, type 6 does not extend type T=5
