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
}
