const LogIn = 'admin';
const Password = 123456789;
let UserLogin = prompt("Enter Login");
let UserPass;

if(UserLogin === null || UserPass === null) alert("You canceled the Entrance");
else{
if(UserLogin != LogIn && Password != UserPass) alert("Access Denied") 
else UserPass = prompt("Enter Password");
if (Password == UserPass) alert ("Welcome");
else alert("Come back later");
}