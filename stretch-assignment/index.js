function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) callback(e)
    })
}

addGlobalEventListener('click', ".block", e => {
    console.log(e.target.getAttribute('class'))
    e.target.remove()
    document.querySelector(".blocks").prepend(e.target)
    console.log('yup')
})

