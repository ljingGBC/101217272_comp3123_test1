var fs = require('fs');



fs.mkdir('Logs',function(){
    fs.writeFileSync('./Logs/log01.txt',"Hello World!");
});
//create Log directory
fs.mkdir('Logs');

//create log files
for(i=0; i<10; i++)
{
    fs.writeFileSync(".log"+i+".txt", "The log "+i+" is created")
    console.log('log'+i+"txt") 
}




    

