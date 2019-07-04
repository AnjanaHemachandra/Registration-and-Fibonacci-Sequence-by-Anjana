//variable to get the prompt value
var input = prompt("Enter the number");

//Turning string input in to int value
var num = parseInt(input);

//Function for fibonacci series
fib = function(max_num){
    for(var fiboArray = [1], i=0,j=1,k=0; k<max_num; i=j,j=x,k++ ){
        x=i+j;
        if (x < max_num) {
        	fiboArray.push(x);
        }  
    }
    document.write(fiboArray);
}

//Function call
fib(num)