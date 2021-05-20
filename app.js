//  homework;
// Сделать первую и последнюю буквы строки в верхнем регистре. При помощи конкатенации и через шаблонные строки;
let string ='some test string';
let value1;
let value2;
let value3;
let value4;
value1= string[0].toUpperCase();
value2= string.slice(1,-1);
value3=  string[ (string.length-1)].toUpperCase();
value4=value1+value2+value3;
value4=`${value1}${value2}${value3}`;
// console.log(value4);
// Найти положение слова 'string' в строке.;
let value5;
value5=string.indexOf('string');
// console.log(value5);
// Найти положение второго пробела в строке (“вручную” ничего не считать);
let value6;
value6= string.lastIndexOf(' ');
// console.log(value6);
// Получить строку с 5-го по 9-й символы;
let value7;
value7= string.slice(5,9);
// console.log(value7);
// 5. Получить число pi из Math и округлить его до 2-х знаков после точки;
let value8;
value8=Math.PI;
value8=value8.toFixed(2);
// console.log(value8);
// 6. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51;
let value9;
value9= Math.max(15, 11, 16, 12, 51, 12, 13, 51);
value9= Math.min(15, 11, 16, 12, 51, 12, 13, 51);
// console.log(value9);
// 7. Получить случайное число и округлить его до двух цифр после запятой.;
let value10;
value10= Math.random();
value10=value10.toFixed(2);
// console.log(value10);
// 8. Получить случайное целое число от 0 до X. X - любое произвольное число;
let value11;
value11=Math.floor(Math.random()*20+1);
// console.log(value11);
// 9. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?;
let valume12= 0.6+0.7;
valume12= valume12.toFixed(1);
// console.log(valume12);
// 10. Создать объект с полем **product**, равным 'iPhone'.;
let obj={
  product:'iPhone'
};
console.log(obj);
// 11. Добавить в объект поле **price**, равное 1000 и поле **currency**, равное 'dollar'.
obj.price=1000;
obj.currency='dollar';
// 12. Добавить поле **details**, которое будет содержать объект с полями **model** и **color**;
let obj1={
model:'M',
color:'green'
};
obj.details=obj1;