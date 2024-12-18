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




let eml=document.getElementById("eml")
let len=document.getElementById("len")
let sml=document.getElementById("sml")
let no=document.getElementById("no")
let spl=document.getElementById("spl")

eml.addEventListener('input',function(){
        let email=eml.value
        len.style.color=email.length>=8 ? 'green' : 'red'
        sml.style.color=/[a-z]/.test(email) ? 'green' : 'red'
        no.style.color=/\d/.test(email)  ? 'green' : 'red'
        spl.style.color=/[!@#$%&*]/.test(email)  ? 'green' : 'red'

})

document.getElementById("form").addEventListener('submit',function(event){
        event.preventDefault()
        let email=document.getElementById("eml").value
        console.log(email.length);

        if(email.length>=8 && /[a-z]/.test(email) && /\d/.test(email) && /[!@#$%&*]/.test(email)){
                alert('Valid')
        }
        else{
                alert('Invalid')
        }

})