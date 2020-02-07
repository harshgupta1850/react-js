
var array = [
    {
        id:'1',
        src:'https://via.placeholder.com/150',
        alt:'images/colors-wallpaper.jpg'  
    },
    {
        id:'2',
        src:'https://via.placeholder.com/150',
        alt:''  
    },
    {
        id:'3',
        src:'images/colors-wallpaper.jpg',
        alt:'images/colors-wallpaper.jpg'  
    },
    {
        id:'4',
        src:'images/colors-wallpaper.jpg',
        alt:'images/colors-wallpaper.jpg'  
    },
    {
        id:'5',
        src:'images/colors-wallpaper.jpg',
        alt:'images/colors-wallpaper.jpg'  
    },
    {
        id:'6',
        src:'images/colors-wallpaper.jpg',
        alt:'6'  
    },
    {
        id:'7',
        src:'images/colors-wallpaper.jpg',
        alt:'7'  
    }

]


function displayAllImages() {
 for (i=0;i<array.length;i++) {
    document.write("<img src='" + array[i].src + "' alt='" + array[i].alt +  "' width=\"200\" height=\"200\"/>");
}
}

function shuffleArray(array) {
   var temp = [];
   var len=array.length;
   while(len){
      temp.push(array.splice(Math.floor(Math.random()*array.length),1)[0]);
      len--;
   }
   return temp;
}

