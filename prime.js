function primeNumber (){

    var n = prompt("Enter valid integer number to find number is prime or not-prime:");
    var count = 0; 

    if (n === 1 && n<1){
        return false;
        }
    else if(n === 2){
        return true;
        }
    else{
                for(var x = 2; x < n; x++)
                {
                    if(n % x === 0)
                    {
                        count = 1;
                    }
                }  
        }
    if(count == 0){
        console.log("Given number is Prime");
    }
    else{
        console.log("Given number is not Prime");
    }

}