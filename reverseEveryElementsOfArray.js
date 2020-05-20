var arr = ["bipin", "roshan", "prashant", "silwal"];
console.log(arr)
var str = arr.toString();
var newArr = str.split("")
var reversedStr = newArr.reverse();
var joined = reversedStr.join("");
var newArr = joined.split(",")
newArr = newArr.reverse();
console.log(newArr)