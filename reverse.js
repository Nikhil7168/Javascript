function specialReverse(str,n){
    
    var newstr = [];
    for(let i=0; i < str.length ; i++)
    {
        if(str[i-1] == ' ' || str[0] == n){     
            if(str[i] == n)
            {
                var start = i;
                for( let j=start ; str[j] != ' ' && j <= str.length-1  ; j++ )
                {
                    var end = j;   
                }
                for( j=end ; j>=start ; j--)
                {
                    i++;
                    newstr = newstr + str[j] ;
                }
                newstr = newstr + ' ';
            }
            else{
                newstr = newstr + ' ' + str[i] ;
            }          
        }
        else{
            newstr = newstr + str[i] ;
        }
    }
    console.log(newstr);
}
specialReverse("first man to walk on the moon",'m');
