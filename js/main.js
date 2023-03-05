const container = document.getElementById("container-profile")
const fotoperfil = document.getElementById("profile")

    fotoperfil.addEventListener("mouseover", () => {

    const saludo = document.createElement("label")
    saludo.className = "saludo"
    saludo.innerText = "Hola me llamo Luis"


    container.append(saludo)

    fotoperfil.addEventListener("mouseout", () => {
        saludo.remove()
    })

})