var i;
Object.prototype.array = new Array(3);
var o = new Object();
o.array[0] = "2";
o.array[1] = "4";
o.array[2] = "6";

console.log(o.array["1"])
console.log(o.array(1))
