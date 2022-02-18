
// typeOf a=[] a={}
// console.log(NaN == NaN); //false
// console.log(NaN === NaN); //false
// console.log(null == undefined); //true
// console.log(null === undefined); //false
// console.log(typeof NaN); //number
// console.log(typeof null); //object
// console.log(typeof undefined); //undefined
// console.log(typeof Array); //function
// console.log(typeof Object); //function
// console.log(typeof {}); //Object
// console.log({} == {}); //false
// console.log({} === {}); //false
// console.log([] == []); //false
// console.log([] === []); //false
// console.log(typeof function) // give error


// function parent() {    
//     var hoisted = "I'm a variable";    
//      function hoisted() {        
//        return "I'm a function";    
//       }    
//      return hoisted(); 
//   }
//   console.log(parent());

//   console.log(3 * "3")

//   const inputArray = ["-5","-6", '-10' ]

// function secondHighestNumber(arr){
//   let sLarg = -Infinity, fLarg = -Infinity, fIdx,sIdx

//   arr.map((d, i) => {
//     const intNum = +d
//       if(intNum > fLarg){
//       sLarg = fLarg
//       fLarg = intNum
//       sIdx = fIdx
//       fIdx = i
//     } else if(intNum < fLarg && intNum > sLarg){
//       sLarg = intNum
//       sIdx = i
//     }   
// //     console.log('sLarg', sLarg)
// //     console.log('fLarg', fLarg)
//   })
//   return arr[sIdx] || -1
// }


// console.log(secondHighestNumber(inputArray))