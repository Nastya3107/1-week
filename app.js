// Homework
// Дан объект car.
// Написать условие если поле lastService больше 5 месяцев (из строки нужно достать число) то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.
let car = { 
  name: 'Lexus', 
  age: 10, 
  lastService: '7 month',
  create: 2008, 
  needRepair: false 
}
    let a = parseFloat(car.lastService);
 if( a>5 ){
   console.log('Need Repair')
   car.needRepair=true;
      } else(car.needRepair=false )

 console.log(car)

//  Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товар не найден.
  let product = {
  name: 'Яблоко',
  price: '10$'
};
let min = 10; // минимальная цена
let max = 20; // максимальная цена
let price = parseFloat(product.price)
if( price>= min && price<= max){
 console.log(product.name)
}else{ console.log('товаров нет')
}; console.log(product);

// 3. На основе строки *“JavaScript is a pretty good language”*
// Cделать новую строку, где каждое слово начинается с большой буквы, а пробелы удалены. Использовать цикл **for.**

let str = 'JavaScript is a pretty good language';
let str1='';
for( i=0; i<=length.str;i++){
 if (str[i-1]===' '|| i===0){
 str1+=str[i].toUpperCase();
 }   else if ( str[i] !==' '){
    str1 +=str[i];
 }
} 
console.log(str1);
//  4. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива:
// *doubleArray([1,2,3]) // [1,2,3,1,2,3]*
function Arr( arr){
 
 return arr.concat(arr)
}
console.log(Arr([1,2,3]))
//  5. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений:
// *changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ],* 
// *changeCollection([1,2,3]) → [ [2,3] ]* и т.д*.*
function changeCollection(arr){
let arr1=[];
for (i=0; i<arguments.length;i++){
 if( Array.isArray(arguments[i])){
    let a= arguments[i].slice()
    a.shift(0);
    arr1.push(a);
  
}
} return arr1
} console.log(changeCollection([1,2,3], ['a', 'b', 'c']))
// Создать функцию которая принимает первым аргументом массив пользователей,
//  вторым аргументом название поля из объекта по которому будем фильтровать и 
//  третьим аргументом идёт значение этого поля. Возвращать новый массив с пользователями,
//   соответствующим указанным параметрам.
//  Пример результата: ```jsx
// funcGetUsers(users, "gender", "male"); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]


let arr = [
{
  _id: "5d1c3860aa841704d3245513",
  isActive: false,
  balance: 2764.35,
  age: 33,
 name: "Allie Blair",
  gender: "female",
  company: "PHOTOBIN",
  email: "allieblair@photobin.com",
  phone: "+1 (951) 566-2987",
  registered: "2018-11-30T02:29:00 -02:00"
},
{
  _id: "5d1c386095ffb689687f2db9",
  isActive: false,
  balance: 3276.25,
  age: 22,
  name: "Yesenia Leblanc",
  gender: "female",
  company: "SKINSERVE",
  email: "yesenialeblanc@skinserve.com",
  phone: "+1 (947) 446-2840",
  registered: "2015-10-31T01:10:31 -02:00"
},
{
  _id: "5d1c3860e73ff2a338722e81",
  isActive: true,
  balance: 1868.65,
  age: 38,
  name: "Mamie Kramer",
  gender: "female",
  company: "EARBANG",
  email: "mamiekramer@earbang.com",
  phone: "+1 (885) 564-3305",
  registered: "2014-06-03T09:36:40 -03:00"
},
{
  _id: "5d1c386000e4f2fc62be1b1e",
  isActive: true,
  balance: 1003.15,
  age: 32,
  name: "Crawford Bryant",
  gender: "male",
  company: "DIGIRANG",
  email: "crawfordbryant@digirang.com",
  phone: "+1 (889) 408-2141",
  registered: "2015-01-15T05:20:21 -02:00"
},
{
  _id: "5d1c386008ff236a315d638b",
  isActive: false,
  balance: 3045.41,
  age: 36,
  name: "Helene Holland",
 gender: "female",
  company: "HYDROCOM",
  email: "heleneholland@hydrocom.com",
  phone: "+1 (937) 554-2040",
  registered: "2014-09-15T08:22:59 -03:00"
},
{
  _id: "5d1c3860b4c27c4d5fdb6c1f",
  isActive: true,
  balance: 1693.51,
  age: 23,
  name: "Hernandez Osborn",
  gender: "male",
  company: "TERRASYS",
  email: "hernandezosborn@terrasys.com",
  phone: "+1 (965) 595-3942",
  registered: "2016-08-06T12:19:01 -03:00"
}
]
function GetUsers(arr,key,value){
 let arr1=[];
 for( i=0;i<arr.length;i++){
if(arr[i][key]===value){
 arr1.push(arr[i])
}
 }
 return arr1;
} console.length(GetUsers(arr,gender,'male'));
//   Создать объект, у которого будет цена товара и его скидка, а также два метода: для получения цены и для расчета цены с учетом скидки:

function getPrice(){
    console.log(this.price);
  }
  function getDiscount(){
    product1.discount=parseFloat(product1.discount)/100;
    console.log((this.price-(this.price*this.discount)))
     }
    let product1= {
     price : 10,
   discount: "15%",
     getPrice,
     getDiscount
   }
    product1.getPrice();
  product1.getDiscount()
// Не изменяя функцию или объект, получить результат функции *getSquare* для объекта sizes
 let sizes = {
 width: 5,
 height: 10 },
getSquare = function () {
 return this.width * this.height
 };
 let getSquare =sizes.getSquare;
 sizes.getSquare.bind(sizes);
 getSquare();