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



let second=3
    
    let data=setInterval(()=>{
    document.getElementById("img").innerHTML=second
    console.log(second);

    second--
    if(second<0 ){           
            clearInterval(data) 
            document.getElementById("img").style.display='none'              
    }
    },1000); 