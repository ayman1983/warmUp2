/*
Say you have an array for which the i element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

var maxProfit = function(prices) {
       var k=1;
     for ( var i = 1; i<prices.length ; i++){
         if ( prices[0]>prices[i]){
         k=k+1;
     
        }
      }

         if (k===prices.length){
           max=prices[1]
              for ( var j= 1 ;j<prices.length ; j++){
                 if (prices[j]>=max){
                 max=prices[j]
                 }
              } 
         
           min = prices[1]
            for ( var l=1 ; l<prices.length; l++){
               if ( prices[j]<=min){
               min=prices[j]
              }
      
            } 
     maxProfit= max-min

   } else {
        mintwo=prices[0]
      for ( var n= 0 ; n<prices.length; n++){
        if (minTwo<prices[n]){
         minTwo=prices[i]
         }


   }
        maxTwo=prices[0]

      for ( var d=0 ; d<prices.length;d++){
          if (prices[d]>maxTwo){
           maxTwo=prices[d]
          }
      }
    
     maxProfit=max-min
}

return maxProfit;

}
