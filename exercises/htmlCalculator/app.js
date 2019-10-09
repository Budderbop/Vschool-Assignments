const form1 = document.form1
const form2 = document.form2
const form3 = document.form3

form1.addEventListener('submit', function(){
    event.preventDefault()
    const add1 = form1.add1.value
    const add2 = form1.add2.value
    
    document.getElementById('answer1')
    .textContent = +add1 + +add2
})
form2.addEventListener('submit', function(){
    event.preventDefault()
    const subtract1 = form2.subtract1.value
    const subtract2 = form2.subtract2.value
    document.getElementById('answer2')
    .textContent = +subtract1 - +subtract2
})
form3.addEventListener('submit', function(){
    event.preventDefault()
    const multiply1 = form3.multiply1.value
    const multiply2 = form3.multiply2.value
    document.getElementById('answer3')
    .textContent = +multiply1 * +multiply2
})
