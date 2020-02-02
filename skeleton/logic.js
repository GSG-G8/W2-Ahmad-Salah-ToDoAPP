
// const todo_lest = [{
//     id: 0, // this is a unique number, it will be needed to find a to-do in a to-do list
//     description: "make tea", // this is a string that describes what you need to do
//     done: false, // This is true or false, it tells us whether a todo is done or not
//   }];
  
  let generateId =function(arr){
    return Object.keys(arr).length || 0;
  }
  // alert (generateId)
  function add_todo(arr,obj){
     return [...arr,obj];
  }
  
  function delete_todo(arr,id){
    return arr.filter(el => el.id!=id);
  }
  
  function find_todo(arr, id) {
    return arr.find(el => el.id==id);
  }

  function change_done(arr, id) {
    let obj=find_todo(arr, id);
    obj['done']=true;
    return arr.map(el => el.id==obj.id ? obj : el);
  }
  
 
if (typeof module!=="undefined") module.exports = {
    add_todo,
    todo_lest,
    generateId,
    delete_todo,
    find_todo,
    change_done
  }