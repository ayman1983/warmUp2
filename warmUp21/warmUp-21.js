// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.


function ball (string) {

    var kb =0
    var ka=0;
    var kl=0;
    var ko=0;
    var kn=0;
    for ( var i= 0; i<string.length; i++) {
     if (string[i]==="b"){
         kb=kb+1
     } else if( string[i]==="a"){
         ka=ka+1
       }else if ( string[i]==="l"){
           kl=kl+1
          }else if (string[i]==="o"){
              ko=ko+1
          }else if (string[i]==="n"){
              kn=kn+1
          }

    }
    if ((kl>=2*(Math.min(ka,kn,kb)))&&(ko>=2*(Math.min(ka,kn,kb)))&&(ka>=1)&&(kb>=1)&&(kn>=1)){
        return Math.min(ka,kn,kb);
    } else return 0;
}