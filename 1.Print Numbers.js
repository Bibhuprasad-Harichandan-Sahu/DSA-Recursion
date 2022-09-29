
// program to count down numbers to 1
function countDown(number) {  //4,3,2,1
    console.log(number); 
    // decrease the number value
    const newNumber = number - 1; //4-1 =3
    
    // base case
    if (newNumber > 0) {  //3<0
        countDown(newNumber);
        
    // display the number
    
    }
}

countDown(4);