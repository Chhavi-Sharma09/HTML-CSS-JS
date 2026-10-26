
// //HOISTING (ONLY IN VAR: UNDEFINED)
// //GLOBAL SCOPE
// var a= 10;
// console.log(a);
// //LET
// //BLOCK SCOPE
// //console.log(b);
// //ref error-- lines after it wont run
// //TDZ(temporal dead zone)
// let b = 20;
// console.log(b);
// {
// var a= "hi";
// console.log(a);
// let b = "hello";
// console.log(b);

// }
// console.log(a);// hi
// console.log(b);//20

// // const c = 30;
// // console.log(c);
// // c =50;
// //  console.log(c);//TYPEerror
//  //VAR DECLARE 3 WAYS-- VAR,CONST, LET
//  //NOW FUNCTION DECLARING
//  //STATIC FUNCTIONS:-----(5) SAME VALUES EVERYTIME
//  //1. NAMED FUNCTIONS
//  //a();
//  function a(){ // phle b call kr skte no error
//   console.log("HELL WORLD 1");
//   console.log("HELL WORLD 2");
//   console.log("HELL WORLD 3");
//   console.log("HELL WORLD 4");
//  }
//  a();
//  //2 FUNCTION EXPRESSION// function ki prop to var,, baki ref error in let nd const
//  //b();//type error
//  var b=function(){
//   console.log("fn exp");
//  }
//  b();
//  //3 ARROW FUNCTION
//  //c();//ref error
//  let c =()=>{
//   console.log("ARROW FN")
//  }
//  c();
// //4. CALL BACK FN (ANONYMOUS FN)
// //5. IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION)// arguments , no identity , no reuseable for both,,call kre ki no requirement
// (function(){
//   console.log("IIFE AND CALLBACK")
// })();
// (()=>{//arrow fn can also be used
//   console.log("IIFE AND CALLBACK")
// })();
//dynamic fn
// function sumOfTwo(param1=2, param2=1){// parameters nd setting their default values 
//   console.log("value of parameter1", param1);
//   console.log("value of parameter2", param2);
//   console.log("SUM OF BOTH = ", param1+param2);
// }
// sumOfTwo(1,1);
// sumOfTwo(2,2);
// sumOfTwo();// undef nd NaN errors.
//CALCULATOR 
let cal = (par1="add",par2=2,par3=4)=> {
  if(par1==="add"){
    console.log(par2+par3);
  }else if(par1==="sub"){
    console.log(par2-par3);
  }else if(par1==="mul"){
    console.log(par2*par3);
  }else if(par1==="div"){
    if(par3!=0){
    console.log(par2/par3);}
    else{
      console.log("Division by 0 is not possible.");
      
    }
  }

}
cal("sub", 4,3);
cal("div" , 3, 0);
cal ("mul" , 9 , 10);
// const arr = [1,2,3,"chhavi"];
// console.log(arr);
// console.log(arr[3]);
// arr.push("abc");// to add value to array at the end -- push operation
// console.log(arr);
// arr.pop(); // pop operation -- to remove  value from end of array 
// console.log(arr);
// arr.unshift("firstword");// first arr ke value add krne ke liye
// console.log(arr);
// arr.shift();// first se value htane ke liye 
// console.log(arr);
// // 8 no , ca2 only one ca , mse only 1 ..mse 2 time , quiz 25 no. lab mid assessment , end sem, project..team...50 no.100 no. total whole sem
// //deployment thorugh github , aws... 
// console.log(arr.length);
// // object -- key and value pair// key -- index 
// const obj = {
//   name: "chhavi",
//   email: "chhavi@gmail.com",
//   contact: 9099090,
//   info: {
//     address : "hooligan city",
//     sports : ["archery", "football"],
//   },
// };
// console.log(obj);
// console.log(obj.email);
// console.log(obj.info.sports[1]);
// // console.log(obj.info);
// const arr = [1,2,3,4,5,6,7,8,9];
// //variable with a value ; condition ; inc/dec the variable
// for ( let i = 0 ; i < arr.length ; i++){
//   console.log("On index ", i , "Value is ", arr[i]);
// }
// for (let i = 1 ; i <= 10 ; i++){
//   console.log("2*",i,"=",(2*i)); 
// }
// const newarr = arr.map((currentValue, index)=>{// map returns new array wihtout changing the orginial one
//   console.log("On index" , index," value is " , currentValue );
//   return currentValue*index;
// });
// console.log(arr);
// console.log(newarr);
// //== only value ,  ==== dataype plus value
// //filter-- conditions 
// const evenNo = arr.filter((currentValue, index)=> {
//   return currentValue % 2 == 0;
// });
// console.log(evenNo);
// const primeno = arr.filter((currentValue , index)=> {
//   let count = 0;
//   for (let i = 0 ; i <= currentValue ; i++){
//     if(currentValue % i == 0){
//       count++;
// //     }
// //   }
// //   if(count == 2){
// //   return currentValue }
// // });
// // console.log(primeno);
// // //reduce - single element
// // const sumofAll = arr.reduce((accumulator , currentValue , index)=>{
// //   return accumulator + currentValue;
// // }, 0);
// // console.log(sumofAll);
// //TYPES OF SELECTOR 
// //1. TAG SELECTOR 
// //return an array 
// //htmlcollection type of array
// let h1 = document.getElementsByTagName("h1");
// console.log(h1[1]);
// //2. CLASS SELECTOR -- multiple types of elements
// //return an array 
// //htmlcollection type of array 
// let a = document.getElementsByClassName("a");
// console.log(a[1]);
// //3.ID SELECTOR 
// //returns a single and first value 
// let idSelector = document.getElementById("b");
// console.log(idSelector);
// //4.QUERY SELECTOR 
// //returns a single and first value..class..id..and tag can be used 
// let data = document.querySelector("#b");
// console.log(data);
// //5.QUERYSELECTORALL
// //returns an array of type NODELIST 
// let Mydata= document.querySelectorAll("#b");
// console.log(Mydata[1]);

// //Read and write opretions 
// console.log(Mydata[1].textContent);
// Mydata[1].textContent = "written by DOM";
// //STYLING
// Mydata[1].style.color="pink";
// Mydata[1].style.backgroundColor="purple";//applied as inline css automatically


//ADD/REMOVE/TOGGLE
// let heading = document.querySelectorAll("h1");
// heading[1].classList.add("c");
// heading[1].classList.remove("b");
//  heading[1].classList.remove("c");

//  let bt = document.querySelector("button");

//  bt.addEventListener("click" , ()=> {
//   console.log("btn clicked ");
//   heading[1].classList.toggle("c");
//   document.body.classList.toggle("e");
  
//  });

//  let input=document.querySelector("input");
//  let btn = document.querySelector(".g");
//  let ol = document.querySelector("ol");

//  btn.addEventListener("click", ()=>{
//   if(input.value!=""){
//     let li = document.createElement("li");
//     li.textContent = input.value;
//     ol.appendChild(li);
//     input.value="";
//   }
//  });
 
//  let inp = document.querySelector("input");
//  let btn = document.querySelector("addData");
//  let table = document.querySelector("table");

//  btn.addEventListener("click", ()=>{
//   if(inp.value!=""){
//     let td = document.createElement("td");
//     td.textContent = inp.value;
//     td.appendChild(td);
//     inp.value="";
//   }
//  })


 








