function foo(y, z) {
    return function() {
        return y + z;
    };
}

var x = foo(3,4);

console.log(x());	// 7
console.log(x());	// 7
