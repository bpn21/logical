var string = "my name is bipin gaire"
console.log(string);
var length = string.length - 1;
var newString = new Array;
var newString1 = new Array;

var j = 0;
for (let i = length; i >= 0; i--) {
    newString[i] = string[j]
    j++;
}
var joined = newString.join('')
var array = joined.split(' ');
var k = 0;
for (let i = array.length - 1; i >= 0; i--) {
    newString1[k] = array[i];
    k++;
}
var joined = newString1.join(' ')
console.log(joined);



















