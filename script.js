// Math.floor will gives you a lowest integer value if the output is in float value.
/*
let sum1 = 1.2 +2.2;
console.log(sum1);
*/
/*
let sum = 2.8+3.6;
console.log(Math.floor(sum));
*/
//___________________________________________________________________________________________________________________________________________________________________________
// Math.ceil will gives you a highest integer value if the output is in float value.
/*
let a1 = 1.3 + 7.1;
console.log(a1);//8.4
let a2 = 1.3+7.1;
console.log(Math.ceil(a2));//9
let a = 10.123456789;
let b = 3.14159;
let c = b | 0;
console.log(c); // short cut to neglet decimal points.
console.log(a.toFixed(3));
console.log(b.toFixed(2));
*/
// OUTPUT : 10.123 . If we have a float value N number of integer after a decimal we can decide how many decimal should be there.
//___________________________________________________________________________________________________________________________________________________________________________
// Nath.abs(i.e) Math.absolute = gives us a absolute value.
/*
let a3 = 5 / 2;
console.log(a3); // 2.5 .
let a4 = 5 / 2;
console.log(Math.abs(a3)); // 2.5 as it is.
*/
//___________________________________________________________________________________________________________________________________________________________________________
//  Bit wise operators.
/*
let n5 = 3;
let n6 = 2;
console.log(n5<<n6); // (i.e) 2*2^3 = 16.
console.log(n5>>n6);// (i.e) (a/b^a) = 2/3^2 = 0 .
*/
//___________________________________________________________________________________________________________________________________________________________________________
/*
// Random functions.
let random = Math.random();
console.log(Random ); // Output : Single Random value between 0 to 1.0 .

// To print 10 random value between 0 to 1.0 .
for(let i = 0; i<10; i++){
    console.log(random);
}
*/
//___________________________________________________________________________________________________________________________________________________________________________
// Increment and Decriment operators.
/*
let a = 3; 
console.log(a++); //output=3 (i.e) Post decrement first prints the values and increases.
console.log(++a);// output=4 (i.e) Pre-increment first increases the values and print the value.
console.log(a--); // output = 3 (i.e) post-Decrement first print the values and decrements.
console.log(--a);// output = 2 (i.e) pre-decriment first decreses the values and it prints.
*/
/*
let aa =  5;
let bb = 6;
//console.log(aa-- + --bb);// there is no value after a--, so it dosen't get decremented.--b got decrement since its pre-increment. 
//console.log(aa-- + bb--);// Here there is no increment takes place because both are also have post decrement also they don't have any value after a decrement .
//console.log(aa);// output:4
//console.log(bb);// output:5
*/
//___________________________________________________________________________________________________________________________________________________________________________
// Conversion Method.
/*
let num =  "11";
console.log(typeof num);// To know the type of number. 
num = parseInt (num); // To convert string to number. 
console.log(typeof num);// output : number
let num1 = "25";
console.log(typeof num1);// String.
let numAlter = Number(num1);// String converted to number.
console.log(typeof numAlter);// Number.

console.log(10+"20");// Here concatnation take place, Because string + int = concatination.
*/
//___________________________________________________________________________________________________________________________________________________________________________
// Using for loop Increamenting a variable by itself.
/*
var s= 0;
for(let i=0; i<10; i++){
    s = s+i
//console.log(s);// It defines the increment value.
}
console.log(s);// Defines a sum values.
*/
//___________________________________________________________________________________________________________________________________________________________________________
// while loop.
/*
let i = 5;
let f = 1;
while(i>1){
    f = f*i;
    i--;
}
console.log(f);//Output : 120

// Do while
i=1;
do{
    console.log("It will print for 1 time, Even if the condition is false");
    i++;
}while(i<5)
//It will print for 1 time, Even if the condition is false, Because here the condition is over the {} statement block.
*/
//ARRAYS
/*
var arr = [10, 20, 30, 40, 50];
arr.push(60);// To add the new element within array
console.log(arr);// Output : [ 10, 20, 30, 40, 50, 60 ].
//If the array is empty it returns or prints an empty array in console.
console.log(arr.length);//prints the number of elements in the array.

console.log(Math.min(...arr));// Prints a Mininum value of array. // ...Its a spread operator => It expands our values and merge/concat.
console.log(Math.max(...arr));// Prints the maximum value of array.

let arr1 = [40, 50, 60,...arr];
console.log(arr1);// Here we are joining two arrays.This can be done either starting, middle and end of an array.
*/
/*
async function getData (){

var data = await fetch("https://restcountries.com/v3.1/all")

var data1 = await data.json()

console.log(data1);


/*                                                                                   // USING FOR LOOP
 for(i=0; i<data1.length; i++){

console.log(data1[i]);

 }
*/

// USING FORIN LOOPS

// The for in loop iterates over a person object                                                                                   
// Each iteration returns only a key (x)
// to get values of it variable[x]
/*                                                                               // The key is used to access the value of the key
for (x in data1){

console.log(data1[x]);
}                                                                                  

/*                                                                               // USING FOROF LOOPS
for(x of data1){

console.log(X);

}
}
getData()
*/
/*
// VAR can be re declared & reassignable (ES-5)

var b = "john";

var b = "doe"

//console.log(b);

// Let cannot be re-declarable but we can reassigned it. (ES-6)

let a = "kumar"

 a = "gowtham"

//console.log(a);

/*
// It cannot be re-declared & reassigned (ES-6)
const  c = "tamil";

const c = "selvan"

//console.log(c);*/
//__________________________________________________________________________________________________________________________________________________________________________
/*
// spread operators
//This method used to merge the
var arr = [1,2,3,4,5];

//console.log(...arr);

var arr1 = [6,7,8,9,10];

//arr =[...arr,...arr1]

//console.log(arr); 
// It merges or concat an two array.
// Commonly when we reassign the value of referance data type it will shallow copy.
// The spread operator helps to deep copy the element of array.

//REST paarameters
// This method let a single parameters to contain multiple values in a function.  

//console.log(add());
*/
/*
let a = 0;
let b = a;//DEEP COPY
console.log(b);// output:0 (i.e) deep copy
let a1 =[1,2,3,4,5];
let a2 = [...a1];// DEEP COPY
a2[0] = 100; // Changing value on 1st element of a2 as a 100
console.log(a2);// output:[ 100, 2, 3, 4, 5 ]
console.log(a1);// output:[ 100, 2, 3, 4, 5 ] because its shallow copied
console.log(...a1);*/

//SELECTORS IN JS.

// getElementById
// getElementByClassname
// getElementByTagname
// querySelector
// querySelectorAll
/*

// Identify the errors 
let a=0;
let b=false;
console.log ((a==b))
console.log((a==b))
*/
/*
let obj1={name:"test"}
 let obj2=obj1
obj2="test2"
Console.log(obj1)
Console.log(obj2)
*/
// BOOLEAN OPERATION
/*
function marks(credits){
    if(credits>=40){
        console.log("pass");
    }else{console.log("fail");}
}
marks(39)*/

// WHY OPERATORS ARE USED
// To perform specific logical computations on operations.

// CALL BACK
// To achive a asychronous programme.
//  A function simply accepts one more function as a parameters.

// MULTIPLE FUNCTIONS CAN BE CREATED ONE BY ONE.

/*
setTimeout(function (){
console.log("guvi");
},1000)*/
/*
var hi = function () {
    console.log("Show you after 3 seconds");
}

setTimeout(hi, 3000);



/*
const value=2;
const promise= new Promise((resolve,reject)=>{
const random =Math.floor(Math.random()*3);
console.log(random);
if(random===value){
    resolve("you have gussed") }
    else{
reject("try again");
}
});
console.log(promise);*/

// Promise 
// It is an object, It takes the function as a parameters
// RESOLVE AND REJECT IS A DEFAULT PARAMETERS.
// It has three states Pending, fullfill, and rejected.
// To ovrcome callback hell schenario we use promise.

// Promise.all
//It will wait untill all the promise get resolve

// .THEN : To acces the value or result of the promise in fullfill state.
// .Catch : To acces the value or result of the promise in rejected state.

// Callback hell
// multiple functions created one by one.

// Fetch : It is a application level of promise, It provides the better way rather then XMLHTTP REQUEST.

// Async and await
// It helps us to rewrite the promises easily, Without async keyword await is useless. 

// AWAIT
// Await function used only within the async function.
// To avoid the usage of .then & promise.all

// CRUD
//C - CREATE (HTTP METHOD-POST)
//R - READ (HTTP METHOD- GET)
//U - UPDATE (HTTP METHOD-POST)
//D - DELETE (HTTP METHOD-DELETE)

// MRF
/*
// Map : Apply an function on each and every element in an array & return an new array.

var arr = [1,2,3,4,5,6];
var arr1 = arr.map(x => x*2)
console.log(arr1);

// REDUCE : It executes a reducer function of each elements of an array.
const arr2= [1,2,3,4,5,6,7]

var reduces = arr2.reduce((accu, current)=>{
return accu + current
},0)

console.log(reduces);

// Filter : It creates a new array filled with elements that passes a tescase provided by a function:
const ages = [32,33,16,40];

const result = ages.filter(checkAdult)

function checkAdult (age){
  return age >= 18
}
console.log(result);
*/


//______________________________________________________________________________________________________________________________________________________________

// PADDING 
//the space between its content and its border. 
//Note: Padding creates extra space within an element. In contrast, margin creates extra space around an element.

// VISIBLITY HIDDEN
// visibility: hidden hides the element, but it still takes up space in the layout.
// DISPLAY NONE
// display: none removes the element completely from the document. It does not take up any space

// CSS SELECTORS
/*
* Simple selectors (select elements based on name, id, class)

* Combinator selectors (select elements based on a specific relationship between them)
(div p {
  background-color: yellow;
})

* Pseudo-class selectors (select elements based on a certain state)
a:hover {  your style here  } STATES: VISITED, LINK, HOVER, ACTIVE, FOCUS

* Pseudo-elements selectors (select and style a part of an element)
selector::pseudo-element {
  property: value;
}
*/

// SEMANTIC TAGS
// A semantic element clearly describes its meaning to both the browser and the developer.
//EXAMPLE : div & span are non semantic tags. table, form, article, header, footer, body.

// LOCAL & SESSION STORAGE
//HTML web storage provides two objects for storing data on the client.
// LOCAL STORAGE : stores data with no expiration date.The data will not be deleted when the browser is closed, and will be available the next day, week, or year. The localStorage property is read-only.
// SESSION STORAGE : stores data for one session (data is lost when the browser tab is closed).

//   MEDIA QUERY
// Media query is a CSS technique introduced in CSS3.
// It uses the @media rule to include a block of CSS properties only if a certain condition is true.

// HTML VS XHTML
//               HTML                                                                                          XHTML
// HTML stands for Hypertext Markup Language.                                        XHTML stands for Extensible Hypertext Markup Language.

// It was developed in 1991.                                                        It was developed in 2000.

// The format is a document file format.                                            The format is a markup language.

// It is not necessary to close the tags in the order they are opened.              It is necessary to close the tags in the order they are opened.

// BOX MODULE
// The CSS box model is a box that wraps around every HTML element.
// M-Margin B-Border P-Padding C-Content

// Closure :  In javascript clousure are created every time when a function is created at a function created time.
 