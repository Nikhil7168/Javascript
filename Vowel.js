function replaceVowel(string){
    for(let i=0 ; i < string.length ; i++ ){
        if( string[i] == 'a'){ string = string.replace('a' , 1);}
        else if( string[i] == 'e'){ string =string.replace('e',2);}
        else if( string[i] == 'i'){ string =string.replace('i',3);}
        else if( string[i] == 'o'){ string =string.replace('o',4);}
        else if( string[i] == 'u'){ string =string.replace('u',5);}
        // console.log(i);
    }
    console.log(string);
}
replaceVowel('chembur');
