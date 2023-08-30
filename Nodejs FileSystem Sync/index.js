const fs =require('fs')


//Creating The folder
fs.mkdirSync('New-Folder')


//Creating New File inside newly created folder
fs.writeFileSync('New-Folder/bio.txt',"Creating New file using Nodejs FileSystem Operations! ")


//Adding more Data to bio.txt without overwriting
fs.appendFileSync('New-Folder/bio.txt',"\nMore Data Added");


//Reading The Data from file
console.log(fs.readFileSync('New-Folder/bio.txt','utf-8'))
//Or 
console.log(fs.readFileSync('New-Folder/bio.txt').toString())
//Both Have Same Functionality


//Renaming The file
fs.renameSync('New-Folder/bio.txt','New-Folder/mybio.txt');


//Deleting the file
fs.unlinkSync('New-Folder/mybio.txt')


//Deleting the folder
fs.rmdirSync('New-Folder')