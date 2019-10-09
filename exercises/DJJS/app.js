const box = document.getElementById('box')
const textBox = document.getElementById('textBox')
const boxes = document.getElementsByClassName('boxes')
const html = document.getElementsByTagName('html')
const div = document.getElementsByTagName('div')

box.addEventListener('mouseover', function(){
    this.style.backgroundColor = 'blue'
})
box.addEventListener('mouseout', function(){
    this.style.backgroundColor = 'white'
})
box.addEventListener('mousedown', function(){
    this.style.backgroundColor = 'red'
})
box.addEventListener('mouseup', function(){
    this.style.backgroundColor = 'yellow'
})
box.addEventListener('mouseenter', function(){
    this.style.backgroundColor = 'pink'
})
// relatedTarget.addEventListener('mouseover', function(){
//     // if(relatedTarget === div){
//     event.div.style.backgroundColor = 'blue'}
// // }
// )



box.addEventListener('dblclick', function(){
    this.style.backgroundColor = 'green'
})
window.addEventListener('scroll', function(){
    box.style.backgroundColor = 'orange'
})
textBox.addEventListener('keypress', function(){
    this.style.backgroundColor = 'purple'
})
textBox.addEventListener('change', function(){
    this.style.backgroundColor = 'white'
})
document.addEventListener('keypress', function(){
    console.log(event.key)
    for (i = 0; i < boxes.length; i++){
    if(event.key === "g"){
        boxes[i].style.backgroundColor = 'green'
    } else if(event.key === 'p'){
        boxes[i].style.backgroundColor = 'pink'
    } else if (event.key === 't'){
        boxes[i].style.backgroundColor = 'turquoise'
    } else if (event.key === 'b'){
        boxes[i].style.backgroundColor = 'blue'
    } else if (event.key === 'r'){
        boxes[i].style.backgroundColor = 'rosybrown'
    } else if (event.key === 'y'){
        boxes[i].style.backgroundColor = 'yellow'
    } else if (event.key === 'o'){
        boxes[i].style.backgroundColor = 'orange'
    } else if (event.key === ' '){
        boxes[i].style.backgroundColor = 'white'
    } 
    }})
    
  
    document.querySelectorAll('*').forEach(function(item){
        document.addEventListener('keypress', function(){
            if (event.key === 'z'){
                item.style.backgroundColor = 'white'
            }
        })
    })
    
    
    box.addEventListener('dragstart', function(){
    this.style.backgroundColor = 'black'
})
for (let i = 0; i < boxes.length; i++){
boxes[i].addEventListener('dragenter', function(){
    boxes[i].style.backgroundColor = 'black'
})
}