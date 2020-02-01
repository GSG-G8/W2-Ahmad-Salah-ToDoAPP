function saveLocal(arr, name) {
    localStorage.setItem(name, JSON.stringify(arr));
}

function loadLocal(name) {
    return JSON.parse(localStorage.getItem(name));
}

function removeLocal(name) {
    localStorage.removeItem(name);
}

let todo_lest = loadLocal("todo_lest") || [];



