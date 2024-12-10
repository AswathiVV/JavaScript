// alert("WELCOME")

// a="HELLO"
// console.log("WELCOME",a)

// a="HELLO"
// alert(a)


// var a="hello"
// var a=20
// alert(a)

// const a='hello'
// console.log(a);

// let a='hiii'
// a=10
// alert(a)

// let a
// console.log(typeof a);               // undefined
// console.log(a);

// let a
// a=10
// console.log(typeof a);               // number
// console.log(a);

// let a
// a="str"
// console.log(typeof a);               // string
// console.log(a);

// let a
// a=false
// console.log(typeof a);               // boolean
// console.log(a);

// let a={name:'anu',age:20}
// console.log(typeof a);
// console.log(a);


// console.log(10+5);
// let a=5                          //   -,*,/,%,**,++,--
// ++a
// console.log(a);

// let a=5
// a++
// console.log(a);


// let a=10
// a*=10                            // **==,*=,%=,**=,/=,+=,-=
// console.log(a);

// let a=20
// let b=10
// console.log(a!==b)          // ===,!==,==,<,>,!=
// console.log(a!=b)
// console.log(a===b)

// let a=20
// let b=10
// console.log(a!=b && a==10);     // and  
// console.log(a!=b || a==10);     // not


// function sample(){
    // let result=document.getElementById("name")
    // console.log(result.value);
    // document.getElementById("display").innerHTML=result.value

    // let result=document.getElementById("name").value
    // console.log(result);
    // let h2=document.getElementById("display")
    // h2.innerHTML=result

// }


// function sample1(){
//     let no1=parseInt(document.getElementById("no1").value)
//     let no2=parseInt(document.getElementById("no2").value)
//     let h2=document.getElementById("display")
//     h2.innerHTML=no1+no2
// }
// function sample2(){
//     let no1=parseInt(document.getElementById("no1").value)
//     let no2=parseInt(document.getElementById("no2").value)
//     let h2=document.getElementById("display")
//     h2.innerHTML=no1-no2
// }
// function sample3(){
//     let no1=parseInt(document.getElementById("no1").value)
//     let no2=parseInt(document.getElementById("no2").value)
//     let h2=document.getElementById("display")
//     h2.innerHTML=no1*no2
// }
// function sample4(){
//     let no1=parseInt(document.getElementById("no1").value)
//     let no2=parseInt(document.getElementById("no2").value)
//     let h2=document.getElementById("display")
//     h2.innerHTML=no1/no2  
// }

// function sample(){
//     let no1=parseInt(document.getElementById("no1").value)
//     let no2=parseInt(document.getElementById("no2").value)
//     let h2=document.getElementById("display")

//     if (no1==no2){
//         h2.innerHTML='eql'
//     }
//     else if(no1!=no2){
//         h2.innerHTML='not eql'
//     }
    // else{
    //     h2.innerHTML='not eql'
    // }
// }

// function service(){
//     let salary=parseInt(document.getElementById("salary").value)
//     let experience=parseInt(document.getElementById("experience").value)
//     let h2=document.getElementById("display")

//     if (experience>5){
//             bonus=0.05*experience
//             h2.innerHTML=('Eligible for bonus of 5%',bonus)
//             }
//     else {
//         h2.innerHTML='Not eligible'
//     }           
// }

// function city(){
//     let city=document.getElementById("city").value
//     let h2=document.getElementById("display")
    
//     if (city=='delhi'){
//         h2.innerHTML='Red Fort'
   
//     }
//     else if (city=='agra'){
//         h2.innerHTML='Taj Mahal'
//     }
//     else if (city=='jaipur'){
//         h2.innerHTML='Jal Mahal'
//     }

// }

// function day(){
//     let day=document.getElementById("day").value
//     let h2=document.getElementById("display")
    
//     if (day==1){
//         h2.innerHTML='Sunday'
   
//     }
//     else if (day==2){
//         h2.innerHTML='Monday'
//     }
//     else if (day==3){
//         h2.innerHTML='Tuesday'
//     }
//     else if (day==4){
//         h2.innerHTML='Wednessday'
//     }
//     else if (day==5){
//         h2.innerHTML='Thursday'
//     }
//     else if (day==6){
//         h2.innerHTML='Friday'
//     }
//     else if (day==7){
//         h2.innerHTML='Saturday'
//     }
//     else{
//         h2.innerHTML='invalid'
 
//     }
   

// }

// function fun2(){

//     let n1=parseInt(document.getElementById("n1").value)
//     let h1=document.getElementById("dis")
//     if (n1>=100000){
//         h1.innerHTML=n1*.15
//     }
//     else if(n1>=50000 && n1<=100000){
//         h1.innerHTML=n1*.10
//     }
//     else{
//         h1.innerHTML=n1*.05
//     }
// }

// function fun2(){
//     let n1=parseInt(document.getElementById("n1").value)
//     let h1=document.getElementById("dis")
//     if (n1%3==0){
//         h1.innerHTML="is divisible"  
//     }
//     else{
//         h1.innerHTML="is not divisible"  
//     }
// }

function fun2(){
    let n1=parseInt(document.getElementById("n1").value)
    let h1=document.getElementById("dis")
    if (n1<=100){
        h1.innerHTML="no charge"  
    }
    else if(n1<=200 && n1>=100){
        h1.innerHTML=5*n1(n1-100)  
    }
    else{
        h1.innerHTML=(n1-200)*10+500
    }
}