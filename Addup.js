function addUp(n){
    if(n == 1){
        return 1;
    }
    else{
        return n + addUp(n - 1);
    }
}

console.log(addUp(600));