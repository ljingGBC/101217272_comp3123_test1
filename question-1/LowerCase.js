function lowerCaseWords(mixedArr){
    let output = []
    for (i in mixedArr)
    {
        if(typeof(mixedArr[i])=="string")
        {
            if(mixedArr[i]!=mixedArr[i].toLowerCase())
            output.push(mixedArr[i].toLowerCase())
        }
    }
    console.log(output);
}

const mixedArray=['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray);