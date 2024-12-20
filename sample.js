// console.log(('start'));
// for(i=0;i<100;i++){
//     console.log(i)                                 // synchronously
// }
// console.log('end')


// console.log(('start'));
// setTimeout(()=>{
//     console.log('inside');                         // unsynchronously
// },3000)
// console.log('end');



//  let minute=2
//  let second=59
    
//  let data=setInterval(()=>{
//     document.getElementById("time").innerHTML=minute+':'+second
//     console.log(minute,second);

//     second--
//     if(second<0 ){
//         minute--
//         second=59
//         if(minute<0){
//             clearInterval(data)
//         }
        
//     }
//  },1000);  



// let second=3
    
//     let data=setInterval(()=>{
//     document.getElementById("img").innerHTML=second
//     console.log(second);

//     second--
//     if(second<0 ){           
//             clearInterval(data) 
//             document.getElementById("img").style.display='none'              
//     }
//     },1000); 


// document.getElementById("form").addEventListener("submit",function(event){
//         event.preventDefault()
//         let no=document.getElementById('no').value
//         let a1=document.getElementById('a1')
//         if(no.length==10){
//                 if(/^[6-9]\d{9}/.test(no)){
//                         a1.innerHTML='Valid'
//                 }
//         }
        
//         else{
//                 a1.innerHTML='Invalid'
//         }

// })


// document.getElementById("form").addEventListener("submit",function(event){
//         event.preventDefault()
//         let no=document.getElementById('pswd').value
//         let a1=document.getElementById('a1')
//         if(no.length>=8){
//                 if(/^[a-z]\d{9}/.test(no)){
//                         a1.innerHTML='Valid'
//                 }
//         }
        
//         else{
//                 a1.innerHTML='Invalid'
//         }

// })



// let pswd=document.getElementById("pswd")
// let len=document.getElementById("len")
// let cap=document.getElementById("cap")
// let sml=document.getElementById("sml")
// let no=document.getElementById("no")
// let spl=document.getElementById("spl")

// pswd.addEventListener('input',function(){
//         let password=pswd.value
//         len.style.color=password.length>=8 ? 'green' : 'red'
//         cap.style.color=/[A-Z]/.test(password) ? 'green' : 'red'
//         sml.style.color=/[a-z]/.test(password) ? 'green' : 'red'
//         no.style.color=/\d/.test(password)  ? 'green' : 'red'
//         spl.style.color=/[!@#$%&*]/.test(password)  ? 'green' : 'red'

// })

// document.getElementById("form").addEventListener('submit',function(event){
//         event.preventDefault()
//         let password=document.getElementById("pswd").value
//         console.log(password.length);

//         if(password.length>=8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && /[!@#$%&*]/.test(password)){
//                 alert('Valid')
//         }
//         else{
//                 alert('Invalid')
//         }

// })




// let eml=document.getElementById("eml")
// let len=document.getElementById("len")
// let sml=document.getElementById("sml")
// let no=document.getElementById("no")
// let spl=document.getElementById("spl")

// eml.addEventListener('input',function(){
//         let email=eml.value
//         len.style.color=email.length>=8 ? 'green' : 'red'
//         sml.style.color=/^[a-z]/.test(email) ? 'green' : 'red'
//         no.style.color=/\d/.test(email)  ? 'green' : 'red'
//         spl.style.color=/[@]/.test(email)  ? 'green' : 'red'

// })

// document.getElementById("form").addEventListener('submit',function(event){
//         event.preventDefault()
//         let email=document.getElementById("eml").value
//         console.log(email.length);

//         if(email.length>=8 && /^[a-z]/.test(email) && /\d/.test(email) && /[@]/.test(email)){
//                 alert('Valid')
//         }
//         else{
//                 alert('Invalid')
//         }

// })



// try{
//    console.log('a')
// }
// catch(error){
//         console.log('error',error.message)
// }
// finally{
//         console.log('prg ends')
// }


// class std{
//         constructor(){
//                 console.log('demo data')
//         }

//         display(){
//                 console.log('display')
//         }
// }

// let std1= new std
// std1.display()


// class std{
//         constructor(name){
//                 this.name=name
//                 console.log('demo data');
//         }

//         display(age){
//                 console.log('display',this.name,age);
//         }
// }

// let std1=new std('Anu')
// std1.display(22)


// class schools{
//         constructor(){
//                 console.log('School class');
//         }
//         classroom(){
//                 console.log('class rooms')
//         }
// }

// class std extends schools {
//         constructor(name){
//                 super()
//                 this.name=name
//                 console.log('demo data')
//         }
//         display(age){
//                 console.log('display =',this.name,age)
//         }
// }

// let std1=new std('Anu')
// std1.display(21)
// std1.classroom


// function Demo(callback){
//         console.log('demo fun');
//         callback()
// }

// function Sample(){
//         console.log('sample fun');
// }

// Demo(Sample)



// function Demo(callback){
//         console.log('demo fun');
//         callback(Sample1)
        
// }

// function Sample(callback){
//         console.log('sample fun');
//         callback()
// }

// function Sample1(){
//         console.log('Sample1 fun')
// }
// Demo(Sample)



// const data=new Promise((resolve,reject)=>{
//         if (10==10){
//                 resolve('eql')
//         }
//         else{
//                 reject(error)
//         }
// })
// data.then(result=>console.log(result)).catch(error=>console.log(error)).finally(()=>console.log("prg ends"))


// async function demo() {
//         const data= new Promise((resolve,reject)=>{
//                 setTimeout(()=>resolve("data unavailable"),2000)
//         })
//         const result=await data
//         console.log(result);       
// }
// demo()


// const fetchdata = async() => {
//     try{
//         const response = await fetch("https://dummyjson.com/products")
//         const data=await response.json()
//         console.log(data.products);
//     }
//     catch(error){
//         console.log(error);

//     }
// }
// fetchdata()


const fetchdata = async() => {
    try{
        const response = await fetch("https://dummyjson.com/posts")
        const data=await response.json()
        console.log(data.posts);
    }
    catch(error){
        console.log(error);

    }
}
fetchdata()