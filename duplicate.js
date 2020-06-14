function removeDups(arr){
    var newarr = [];
    newarr.push(arr[0]);
    for(let i=0; i < arr.length ; i++){
        let flags = 0;
        let flagd = 0;
        let dindex = 0;
        // console.log(arr[i]);
        for(let ni=0; ni < newarr.length ; ni++){
            if(arr[i] == newarr[ni]){
                flags = 1;
            }
            else{
                flagd = 1;
                dindex = i;
            }
        }
        if(flagd == 1 && flags == 0){
            newarr.push(arr[dindex]);
        }
    }
    console.log(newarr);
}
removeDups(['John','Taylor','John']);
