function testJackpot(arr){
    let j = 0 ;
    let flag = 0; 
    for(let i=1 ; i < arr.length ; i++){
        if( arr[j] != arr[i]){ 
            console.log(false);
            flag = 1;
            break;
        }
    }
    if(flag == 0){ console.log(true);}
}
testJackpot(['SS','SS','S','Ss']);











// Another approach
// const  testJackpot = arr => arr.every(val => val === arr[0]);

// console.log(testJackpot(["@","@","@","@"]));