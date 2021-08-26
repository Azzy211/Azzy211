//Codewars challenge
// Sum of all digits in the number
function digital_root(n) {
  //loops until a single digit number is returned
  while (n >= 10){
  var n = n + ''; //puts the number to a string to split
  var numArr = n.toString().split(''); //splits individual numbers out
  var numArr = numArr.map(Number); //convers array elements back to numbers
  var n = numArr.reduce((a, b) => a + b, 0); //adds each array element together
  }
  return n; //returns the value
}


//Optimum Solution
function digital_root(n) {
 return (n-1)%9 +1;
}
