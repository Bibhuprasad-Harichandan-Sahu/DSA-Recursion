
function fibonacci(n){
    if(n < 2) return n
    return fibonacci(n-1) + fibonacci(n-2)
   }
   
   const num = 8;
   
   for(let i = 0; i<num;  ++i){
    console.log(fibonacci(i))
   }
//output->
// 0
// 1
// 1
// 2
// 3
// 5
// 8
// 13

   