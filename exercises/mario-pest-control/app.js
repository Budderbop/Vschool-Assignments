const form = document.mario
console.log(form)
form.addEventListener("submit", function(e){
    e.preventDefault()
    const goombas = Number(form.goombas.value)*5
    const bobOmbs = Number(form.bobOmbs.value)*7
    const cheepCheeps = Number(form.cheepCheeps.value)*11

    const h3 = document.getElementById("total")
    console.log(h3)
    h3.textContent = "= " + (goombas + bobOmbs + cheepCheeps)

})


