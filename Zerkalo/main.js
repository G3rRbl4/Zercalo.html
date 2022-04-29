

/*
var el = document.getElementsById()
var code = el.innerHTML
alert(code)
*/

/*for(var i = 0; i <= 10; i++){
  output = i;
  console.log(output);
}*/


/*function random(){
  var rand= Math.floor(Math.random() * 10)
  alert(rand)
}
random()*/

/*var name = prompt("Введите name ");
var age = +prompt("Введите  значение age ");
function checkStud(name, age){
  if (age>=17){
    console.log(name + " уже окончил школу")
  }else{
    console.log(name + " еще учится в школе")
  }
}
checkStud(name, age)*/

/*var name = prompt("имя пользователя")
if(name =="Учитель"){
  alert('hello ' + name)
}
else if (name == "Студент"){
  alert('hello ' + name)
}
else{
  alert('???')
}*/
/*var a = +prompt("Введите 1 значение");
var a = parseInt(a);
var b = +prompt("Введите 2 значение");
var x = prompt("Выберите оператор  + - * / :");
switch(x){
  case "+":alert("Сумма = " + (a + b) );
   break;
   case "-":alert("Вычитание = " + (a - b) );
   break;
   case "*":alert("Умножение = " + (a * b) );
   break;
   case "/":alert("Деление = " + (a / b) );
   break;
   default: alert("ERROR");
}*/
/*var a = +prompt("Введите a")
while(a>0){
  alert("a больше 0 " + a)
  a= a - 1
}
alert("a <= 0 " + a)*/

/*document.body.style.background = "#E6E6FA"
 const btn = document.getElementById("btn");
const colors = ["#4169E1","#7B68EE", "#D2B48C", "#2E8B57", "#DB7093", "#008080", "#DC143C", "rgb(32, 29, 29)" , "#E6E6FA"]
let count = 0 
btn.addEventListener("click", ()=>{

  if (count === 9){
    debugger
    count = 0
  }
  document.body.style.background = colors[count]  
  count++
 })*/