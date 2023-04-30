'use strict';
let CountOfStr=(str,substr)=>{
return str.split(substr).length-1;
}

/*------------------1----------------------------------- */
console.log('К-ть пробілів='+CountOfStr(prompt("Введіть стрічку з пробілами")," "));
/*------------------2----------------------------------- */
let email=prompt('Введіть email');
if (email.indexOf("@")==-1||email.indexOf("@")==0||email.indexOf("@")==email.length-1||email.indexOf(".")==-1)
console.log("Помилковий email")
else console.log("email прийнято");
/*-------------------3-------------------------------- */
console.log('К-ть слів html='+CountOfStr(prompt("Введіть стрічку з html"),"html"));
/*-------------------4-------------------------------- */
let url=prompt('Введіть адресу (url)');
if (url.indexOf('http://')!=-1) console.log(url.substring(7))
else if (url.indexOf('https://')!=-1) console.log(url.substring(8))
else console.log("Невірна адреса");