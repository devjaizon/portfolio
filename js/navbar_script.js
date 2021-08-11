const navLinks = document.querySelector('.block_right')
const navLink = document.querySelectorAll('.block_right a')
const navToggle = document.querySelector('.nav_toggle')

let navOpen = false

const changeNav = () => {
    navLinks.style.maxHeight = navOpen ? '400px' : '0px'
}

navToggle.addEventListener('click', () => {
    navOpen = !navOpen
    changeNav()
})

navLink.forEach((item) => {
    item.addEventListener('click', () => {
        navOpen = false
        changeNav()
    })
})
