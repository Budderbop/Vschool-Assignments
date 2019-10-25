const list = document.getElementById("list")

axios.get("https://api.vschool.io/ethanmendez/todo").then((response) => {
    const todos = response.data
    for (i = 0; i < todos.length; i++){
        makeTodo(todos[i])
    }
})

const makeTodo = (todo) => {
    const container = document.createElement("div")
    const h1 = document.createElement("h1")
    const p = document.createElement("p")
    const img = document.createElement("img")
    const checkBox = document.createElement("input")
    const addForm = document.todoForm
    const deleteButton = document.createElement("button")
    checkBox.type = "checkbox"
    checkBox.checked = todo.completed

    checkBox.addEventListener("change", function(e) {
        axios.put("https://api.vschool.io/ethanmendez/todo/" + todo._id, {completed: e.target.checked}).then(response => {
            h1.style.textDecoration = response.data.completed ? "line-through" : "none"
        })
        
    })    

    deleteButton.addEventListener("click", function(e){
        axios.delete("https://api.vschool.io/ethanmendez/todo/" + todo._id).then(response => {
            console.log(response.data)
        })
    })

    addForm.addEventListener("submit", function(e){
        e.preventDefault()
        const formValue = {
            title: addForm.inputTitle.value,
            description: addForm.inputDescription.value,
            imgUrl: addForm.inputImage.value
        }
        axios.post("https://api.vschoo.io/ethanmendez/todo", formValue).then(response => {
            console.log(response.data)
        })
    })
    

    h1.textContent = todo.title
    p.textContent = todo.description
    img.src = todo.imgUrl

    img.className = "betterImages"
    
    

    if(todo.completed){
        h1.style.textDecoration = "line-through"
    }
    
    document.body.appendChild(container)
    container.appendChild(h1)
    container.appendChild(p)
    container.appendChild(img)
    container.appendChild(checkBox)
    container.appendChild(deleteButton)
}
