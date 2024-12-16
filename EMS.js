data=[{id:'1',name:'Manu',age:22,positon:'CEO',salary:100000,experience:5}]

function Display(){
    let tbody=document.querySelector("tbody")
    tbody.innerHTML=''

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

        let positon_td=document.createElement("td")
        positon_td.innerHTML=user.positon
        tr.appendChild(positon_td)

        let salary_td=document.createElement("td")
        salary_td.innerHTML=user.salary
        tr.appendChild(salary_td)

        let experience_td=document.createElement("td")
        experience_td.innerHTML=user.experience
        tr.appendChild(experience_td)

        let edit_td=document.createElement("td")
        let edit_btn=document.createElement("button")
        edit_btn.innerHTML='edit'

        edit_btn.onclick=function(){
            edit_form(user.id)
        }
        edit_td.appendChild(edit_btn)
        tr.appendChild(edit_td)


        let delete_td=document.createElement("td")
        let delete_btn=document.createElement("button")
        delete_btn.innerHTML='delete'

        delete_btn.onclick=function(){
            delete_data(user.id)
        }
        delete_td.appendChild(delete_btn)
        tr.append(delete_td)


        tbody.appendChild(tr)
    });
    

}

function delete_data(id){
    data=data.filter((user)=>user.id!=id)
    Display()
}

let edit_data
function edit_form(id){
    document.getElementById("edit_form").style.display='block'
    document.getElementById("add_form").style.display='none'
    let edit=data.find((user)=>user.id==id)

    document.getElementById("e_id").value=edit.id
    document.getElementById("e_name").value=edit.name
    document.getElementById("e_age").value=edit.age
    document.getElementById("e_position").value=edit.positon
    document.getElementById("e_salary").value=edit.salary
    document.getElementById("e_experience").value=edit.experience


    edit_data=id

}

document.getElementById("edit_form").addEventListener("submit",function(event){
    event.preventDefault()
    let id=document.getElementById("e_id").value
    let name=document.getElementById("e_name").value
    let age=document.getElementById("e_age").value
    let positon=document.getElementById("e_position").value
    let salary=document.getElementById("e_salary").value
    let experience=document.getElementById("e_experience").value

    data=data.map((user)=>{
        if(user.id==edit_data){
            return{...user,id:id,name:name,age:age,positon:positon,salary:salary,experience:experience}
        }
        return user
    })
    document.getElementById("edit_form").style.display='none'
    document.getElementById("add_form").style.display='block'
    Display()
    
})

document.getElementById("add_form").addEventListener('submit',function(event){
    event.preventDefault()
    let id=document.getElementById("id").value
    let name=document.getElementById("name").value
    let age=document.getElementById("age").value
    let positon=document.getElementById("position").value
    let salary=document.getElementById("salary").value
    let experience=document.getElementById("experience").value
    data.push({id:id,name:name,age:age,positon:positon,salary:salary,experience:experience})

    document.getElementById("id").value=''
    document.getElementById("name").value=''
    document.getElementById("age").value=''
    document.getElementById("position").value=''
    document.getElementById("salary").value=''
    document.getElementById("experience").value=''

    Display()
})



Display()