/* your task is to write a function that returns the smallest and largest integers in an unsorted string.
Input
    Your function will receive two arguments:

        A string comprised of integers in an unknown range; these numbers will be out of order
        An integer value representing the size of the range

Output
    Your function should return the starting (minimum) and ending (maximum) numbers of the range in the form of an array/list comprised of two integers.
    Test Example

    let inputString = '1568141291110137';

    mysteryRange(inputString,10) // [6,15]

        -The 10 numbers in this string are:
        -15 6 8 14 12 9 11 10 13 7
        -Therefore the range of numbers is from 6 to 15

Technical Details

    -The maximum size of a range will be 100 integers
    -The starting number of a range will be: 0 < n < 100
 */

 function mysteryRange ( string , number){
    var arr=[];
    var j=0

    if ( string.length===number){

        for ( i = 0 ; i<number ; i++){

            arr[i]=string[i]
        }
    }

      n=string.length%number;
      m=string.length - n ;
      for ( var i=0 ; i< string.length; i=i+2){

        
      }
      
      

    while( j<=number)
    for ( i =0 ; i<string.length; i++){
           
        if (str[i]==='1'){
           arr[j]=str[i]+str[i+1];
           j=j+1
        }

        else {
              arr[j]=str[i]
              j=j+1
    }

    }

    return arr




 }