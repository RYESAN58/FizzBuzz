
var array = [];
var x =0;
for(var i = 1; i< 101; i++){
    if(i % 3 == 0 && i % 5 == 0){
        x="fizzbuzz" 
        array.push(x);
    }else if(i % 5 == 0){
        x="buzz";
        array.push(x);
    }else if(i % 3 == 0){
        x ="fizz";
        array.push(x);
    }
    else{
        array.push(i);
    }
}

console.log(array);