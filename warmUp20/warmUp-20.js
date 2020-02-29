// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .

function reverse ( string ){
var array=[]
 arr= string.split(" ");  // we use split to put all the words of the string into a new array
word=""
for ( var i= arr.length-1 ; i>=0 ;i--) {

    array.push(arr[i])
}

for ( var j=0 ; j< array.length; j++){

    word= word+" "+array[j]
}
  return word
}