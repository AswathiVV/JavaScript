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

// function fun2(){
//     let n1=parseInt(document.getElementById("n1").value)
//     let h1=document.getElementById("dis")
//     if (n1<=100){
//         h1.innerHTML="no charge"  
//     }
//     else if(n1<=200 && n1>=100){
//         h1.innerHTML=5*n1(n1-100)  
//     }
//     else{
//         h1.innerHTML=(n1-200)*10+500
//     }
// }


// function For(){
//     for(let i=1;i<=10;i++){
//         console.log(i)
//     }

// }

// function While(){
//     let i=1
// while (i<=10){
//     console.log(i);
//     i++
 
// }
// }


// function Do(){
//     let i=1
//     do{
//         console.log(i);
//         i++
//     }
//     while(i<=10)
// }

// function no(){
//     let start=parseInt(document.getElementById("start").value)
//     let end=parseInt(document.getElementById("end").value)
//     let h1=document.getElementById("display")
//     for(let i=start;i<=end;i++){
//         if(i%2!=0){
//            console.log(i)
//         }
//     }

// }

// function add(){
//     let start=parseInt(document.getElementById("start").value)
//     let h1=document.getElementById("display")
//     a=1
//     for(let i=a;i<=start+1;i++){
//            console.log(a,'+',start,'=',a+start)
        
//     }
// }

// function add(){
//     let start=parseInt(document.getElementById("start").value)
//     let end=parseInt(document.getElementById("end").value)
//     let h1=document.getElementById("display")
//     a=1
//     for(let i=a;i<=start+1;i++){
//            console.log(start,'+',end,'=',start+end)
        
//     }
// }

// function multi(){
//     let start=parseInt(document.getElementById("start").value)
//     let end=parseInt(document.getElementById("end").value)
//     let h1=document.getElementById("display")
//     a=1
//     for(let i=a;i<=start+1;i++){
//            console.log(start,'*',end,'=',start*end)
        
//     }
// }




// let a='welcome'
// console.log(a);
// console.log(a.length);
// console.log(a[0]);
// console.log(a.charAt(1));
// console.log((a.concat(' ','to all')));
// console.log(a.startsWith('w'));
// console.log(a.endsWith('w'));
// console.log(a.toUpperCase());
// console.log(a.toLowerCase());

// let a='  welcome  '
// console.log(a.trim());
// console.log(a.trimEnd());
// console.log(a.trimStart());


// Array

// let a=['apple','orange','kiwi']
// console.log(a.length);
// console.log(a[0]);

// a[0]='APPLE'
// console.log(a)

// a.push(['banana','mango']);
// console.log(a)

// a.pop()
// console.log(a)

// a.shift()
// console.log(a)

// a.unshift('banana')
// console.log(a);


// function fun(a){
//     console.log('fun',a);
// }
// fun('hello')

// const data=function(a){
//     console.log('data',a);
// }
// data('hello')

// const data= (a)=>console.log('arrow fun',a);
// data('hello')



data=[{id:'1',name:'Manu',age:22},{id:'2',name:'Anu',age:22},{id:'3',name:'Sanu',age:22},{id:'4',name:'Banu',age:22}]

function Display(){
    let tbody=document.querySelector("tbody")

    data.forEach((user) => {
        let tr=document.createElement("tr")

        let id_td=document.createElement("td")
        id_td.innerHTML=user.id
        tr.appendChild(id_td)

        let name_td=document.createElement("td")
        name_td.innerHTML=user.name
        tr.appendChild(name_td)

        let age_td=document.createElement("td")
        age_td.innerHTML=user.age
        tr.appendChild(age_td)

        

        tbody.appendChild(tr)
    });
    

}
Display()