export const moveNumbers = () =>{
    const arr = [1,2,3,4,0,0,5,16]
    for (var i = arr.length-1; i>=0; i--) {
        if(arr[i]===0){
            arr.splice(i,1)
            arr.push(0)
        }
    }
    return arr
}
