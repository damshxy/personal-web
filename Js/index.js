let responsiveOpen = false

function responsiveNavbar() {
    let responsiveNav = document.getElementById('responsive')

    if (!responsiveOpen) {
        console.log(responsiveOpen)
        responsiveNav.style.display = 'block'
        responsiveOpen = true
    } else {
        console.log(responsiveOpen)
            responsiveNav.style.display = 'none'
            responsiveOpen = false
    }
}