const menuNav = document.querySelectorAll("nav ul li a[href^='#']")

function scrolltoSection (event) {
    event.preventDefault()
    const link = event.target
    const navTarget = link.getAttribute("href")
    const section = document.querySelector(navTarget)
    window.scroll(0, section.offsetTop)
}

menuNav.forEach((link) => {
    link.addEventListener("click", scrolltoSection)
})

