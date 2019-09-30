// function readValue(){
    
//     var a=parseInt(prompt("Enter the first value :"));
//     var b=parseInt(prompt("Enter the Second value :"));
//     var result = addValue(a,b);
//     console.log("The Sum of A and B is:"+ result);
// }
// function addValue(p1,p2){
//     return p1+p2;
// }
// readValue();
//===========================================================
// function abc(){
//     var x=2,y=1;
//     function xyz(){
//         return sum = x + y;
//     }
//     return xyz();
// }
// console.log(abc());

function abc(){
    var x=2,y=1, sum;
    function xyz(){
        sum = x + y;
    }
     xyz();
     return sum;
}
console.log(abc());