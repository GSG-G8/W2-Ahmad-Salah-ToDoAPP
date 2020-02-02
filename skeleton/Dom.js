
const list=document.querySelector("#myul")
const title=document.getElementById("title")
const add_btn=document.getElementById("add")
creat_list(todo_lest);

/// click enter will add to do
title.addEventListener('keypress', function (e) {
    if (13 == e.keyCode) {
        add_function();
    }
});
// click add button
add_btn.addEventListener("click",function(){
    add_function();
  })



//function to add to do to the array.
function  add_function(){
  if(!isNaN(title.value)){
    alert("Insert description First !!!")
    }
    else{
        const obj={ id:generateId(todo_lest),
                    description:title.value,
                    done:false }    
            todo_lest=add_todo(todo_lest,obj)
            //reassign array to local storge
            saveLocal(todo_lest, "todo_lest");
            creat_list(todo_lest);
   }}



function creat_list(arr){
    let i=1;
    list.innerHTML="";
    arr.forEach((element,index) => {
        const span = document.createElement("SPAN");
        const txt = document.createTextNode("\u00D7");
        span.id=element['id']
        span.onclick = remove_todo;
        span.className = "close";
        span.appendChild(txt);
        const list_des=document.createElement("li");
        list_des.textContent=i +"- " +element['description']
        if(element['done']==true){
            list_des.classList.add("checked")   
        }
        list_des.id=element['id']
        list_des.onclick=change_to_done;
        list.appendChild(list_des);
        list_des.appendChild(span);
       i++;
    });
}


function remove_todo() {
if (confirm("are you sure")){
    todo_lest = delete_todo(todo_lest, this.id);
    saveLocal(todo_lest, "todo_lest");
    creat_list(todo_lest);
}
}

function change_to_done(){
    todo_lest = change_done(todo_lest, this.id);
    saveLocal(todo_lest, "todo_lest");
    creat_list(todo_lest);
}







