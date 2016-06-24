// code here! :)

function foo() {
    return 1337;
}

function bar() {
    return 42;
}

function add(x, y) {
    return x + y;
}

console.log('add()', add(foo(), bar()) );

function add2(fn1, fn2) {
    return add(fn1(), fn2());
}

console.log('add2()', add2(foo, bar) );

function curry(x) {
    return function() {
        return x;
    }
}

function addn(...args) {
    return args.slice(1).reduce(function(prev, current) {
        return function() {
            return add2(prev, current);
        }
    }, args[0])();
}

console.log('addn()', addn(foo, bar) );

