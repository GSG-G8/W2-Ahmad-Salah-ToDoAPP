
const list=document.querySelector("#myul")
const title=document.getElementById("title")
const add_btn=document.getElementById("add")
creat_list(todo_lest);


title.addEventListener('keypress', function (e) {
    if (13 == e.keyCode) {
        add_function();
    }
});

add_btn.addEventListener("click",function(){
    add_function();
  })



function  add_function(){
  if(!isNaN(title.value)){
    alert("Insert description First !!!")
    }
    else{
        const obj={ id:generateId(todo_lest),
                    description:title.value,
                    done:false }    
            todo_lest=add_todo(todo_lest,obj)
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
        span.onclick = removeThis;
        span.className = "close";
        span.appendChild(txt);
        const list_des=document.createElement("li");
        list_des.textContent=i +"- " +element['description']
        list.appendChild(list_des);
       list_des.appendChild(span);
       i++;
    });
}


function removeThis() {
if (confirm("are you sure")){
    todo_lest = delete_todo(todo_lest, this.id);
    saveLocal(todo_lest, "todo_lest");
    creat_list(todo_lest);
}
}







