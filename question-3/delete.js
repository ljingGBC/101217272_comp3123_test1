var fs = require('fs');



for(i=0; i<10; i++)
{
    fs.unlink(".log"+i+".txt")
    console.log('log'+i+"txt is deleted")
}