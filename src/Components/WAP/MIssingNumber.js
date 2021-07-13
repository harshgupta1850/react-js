const arr = [2,3,7,4,6,9]
arr.sort()
var missingValue =  []
for(var  i = 0 ; i<arr.length ; i++){
const subtractValue = arr[i+1]-arr[i]
	if(subtractValue!==1){
  		missingValue.push(arr[i]+1)
  }
}
console.log(missingValue)