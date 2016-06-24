# ES6

## Arrow functions

* Con: has a lot of variations in syntax for different situations
```javascript
function foo(x) {
    return x * 2;
}

// + This has name inferencing
var foo = x => x * 2;

// - Has no name inferencing, annoying with debugging in stack trace
bar(x => x * 2);

// If multiple params:
bar((x, y) => x * y));
// Also
bar((...x) => 3 * 2));


// Headless arrow function, not in spec yet
bar( => 3 * 2);
// For now:
bar(() => 3 * 2)
// Or worse:
bar(_ => 3 * 2);
// Holy crap
bar(_ => 3 <= 2);

// Nope
bar(y => {x: y});
// Should be:
bar(y => ({x: y})); // yuck
// Or
bar(y => { return {x: y}}); // wut? don't forget the return

// Is this really worth it?
```

## Default arguments
```javascript
// ES5:
function foo (x) {
    x = x || 10;
}
// or
function foo (x) {
    x = x !== undefined ? x : 10;
}

// ES6:
function foo (x = 10) {
    // aw yeah!
}
```

* Default value doesnt have to be a primitive, can be any expression
    * This expression is lazily evaluated


## Arguments

```javascript
// ES5
function foo() {
    var args = [].slice.call( arguments );
    args.push(10);
    bar.apply( null, args );
}

// ES6
function foo(...args) {
    args.push(10);
    bar(...args);
}
```

## Destructuring
```javascript
// ES5
function foo() {
    return [1,2,3,4];
}

function bar() {
    return {
        a:1,
        b:2,
        c:3
    };
}

// Destructuring
var tmp = foo(),
    x = tmp[0],
    y = tmp[1],
    z = tmp[2];

var tmp2 = bar(),
    a = tmp2.a;

// ES6
function foo() {
    return [1,2,3,4];
}

function bar() {
    return {
        a:1,
        b:2,
        c:[
            {d: 2}
        ]
    };
}

// Destructuring pattern
var [x,y,z] = foo();
var [x,y,,z] = foo();
var [,x,y,z] = foo();

var [
    x,
    y = 10,
    z
] = foo(); // default assignments
// As soon as you're doing this, use indentation

var { a,b,c } = bar();

var {
    a,
    b = 10,
    c
} = bar();

var {
    a,
    b = 10,
    c: Z = []
} = bar();

var {
    a,
    b = 10,
    c: Z = [
        { d: W = 10 }
    ]
} = bar();

// Cool trick
var x = 2, y = 3;

var [x, y] = [y, x];


// Function arguments
function foo([a, b, c]) {
    console.log( a, b, c );
}

foo(4, 5, 6);
// a: 4
// b: 5
// c: 6

```

## Template strings

* Not actually templates, but "interpolated string literals"

```javascript
// ES5
var name = 'Jelle',
    title = 'JS Dev',
    company = 'CODEZILLA';

var msg = 'Hello, ' + name + ' from ' +
    company + ', how are you feeling as a ' +
    title + ' today?';

// ES6
var name = 'Jelle',
    title = 'JS Dev',
    company = 'CODEZILLA';

var msg = `Hello, ${ name } from ${ company }, \
           how are you feeling as a ${ title } today?`;

// Has actual multiple lines as an output
var msg2 = `Hello, ${ name } from ${ company },
           how are you feeling as a ${ title } today?`;

// tagged interpolated string literal
var msg3 = foo`Hello, ${ name } from ${ company },
           how are you feeling as a ${ title } today?`;

function foo(strings, ...values) {
    // return 'haha, i\'m evil';

    //var str = '';
    //for (var i=1; i<strings.length; i++) {
    //    if (i > 0)  str += values[i-1];
    //    str += strings[i];
    //}
    // return str;

    for (var i=1; i<strings.length; i++) {
        if (i > 0)  str += values[i-1].toUpperCase();
        str += strings[i];
    }

    return str;
}

```

## Assignments
```javascript
// ES5
var a = 2;

var x = {
    a: a
}

// ES6
var a = 2;

var x = {
    a
}
```




