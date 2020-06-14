function numInStr(arr){
    var newarr = [];
    for(let i=0 ; i<arr.length ; i++){
        if(arr[i].includes('1') || arr[i].includes('2')|| arr[i].includes('3')|| arr[i].includes('4')|| arr[i].includes('5')|| arr[i].includes('6')|| arr[i].includes('7')|| arr[i].includes('8')|| arr[i].includes('9')|| arr[i].includes('0')){
            newarr.push(arr[i]);
        }
        else{
            continue;
        }
    }
    console.log(newarr);
}
numInStr(['this is a test','test1']);
