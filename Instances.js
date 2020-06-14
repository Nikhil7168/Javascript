function charCount(letter, str)
{
    var letter_Count = 0;
    for(var pos = 0; pos < str.length; pos++)
    {
        if(str[pos] == letter)
        {
            letter_Count += 1;
        }
    }
    console.log(letter_Count);
}

charCount("c","Chamber of secrects");