import React, { Fragment } from "react";

const Memo = () => {
  /*
    Memoization is the programmatic practice of making long recursive/iterative functions run much faster. 
    When we input the same value into our memoized function,
    it returns the value stored in the cache instead of running the function again, 
    thus boosting performance. No longer does your program have to recalculate every number to get a result.
    */

    // const fib  = (n) => {
    //     console.log(n,'n')
        
    // }
 
// function memo(func){
//     var cache = {};
//       return function(){
//         var key = JSON.stringify(arguments);
//         console.log(arguments,'first')
//         console.log(key,'key')
//         console.log(cache,'cache')
//         if (cache[key]){
//           console.log(cache,'cache1')
//           return cache[key];
//         }
//         else{
//           var val = func.apply(null, arguments);
//           console.log(arguments,'argu')
//           console.log(val,'val')
//           cache[key] = val;
//           return val; 
//         }
//     }
//   }
//   var fib = memo(function(n) {
//       console.log(n,'callle')
//     if (n < 2){
//       return 1;
//     }else{
//      //We'll console.log a loader every time we have to recurse
//       console.log("loading...");
//       return fib(n-2) + fib(n-1);
//     }
//  });
//  console.log( fib(5),'hi')
//  console.log( fib(10),'bye')
//  console.log( fib(25),'demo')


  //main return
  return (
    <Fragment>
      <h1>Java Script Memo..........</h1>
    </Fragment>
  );
};

export default Memo;
