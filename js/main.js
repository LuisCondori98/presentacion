const container = document.getElementById("container-profile")
const containerItems = document.getElementById("container-items")
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

const html = document.getElementById("html")

html.addEventListener("mouseover", () => {

    const htmlText = document.createElement("label")
    htmlText.className = "html"
    htmlText.innerText = "Html"

    containerItems.append(htmlText)

    html.addEventListener("mouseout", () => {
        htmlText.remove()
    })

})

const css = document.getElementById("css")

css.addEventListener("mouseover", () => {

    const cssText = document.createElement("label")
    cssText.className = "Css"
    cssText.innerText = "Css"

    containerItems.append(cssText)

    css.addEventListener("mouseout", () => {
        cssText.remove()
    })

})

const boostrap = document.getElementById("boostrap")

boostrap.addEventListener("mouseover", () => {

    const boostrapText = document.createElement("label")
    boostrapText.className = "Boostrap"
    boostrapText.innerText = "Boostrap"

    containerItems.append(boostrapText)

    boostrap.addEventListener("mouseout", () => {
        boostrapText.remove()
    })

})

const github = document.getElementById("github")

github.addEventListener("mouseover", () => {

    const githubText = document.createElement("label")
    githubText.className = "Github"
    githubText.innerText = "Github"

    containerItems.append(githubText)

    github.addEventListener("mouseout", () => {
        githubText.remove()
    })

})

const js = document.getElementById("js")

js.addEventListener("mouseover", () => {

    const jsText = document.createElement("label")
    jsText.className = "Javascript"
    jsText.innerText = "Javascript"

    containerItems.append(jsText)

    js.addEventListener("mouseout", () => {
        jsText.remove()
    })

})