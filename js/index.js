// Your code goes here
const paragraphs = document.querySelectorAll('p')
// const navigation = document.querySelectorAll('nav')

console.log(paragraphs)

addGlobalEventListener('click', "p", e => {
    e.target.style.fontSize = "40px"
    console.log(e.target)
})

addGlobalEventListener('mouseover', "img", e => {
    e.target.style.width = "200%"
    // e.target.style.height = "200%"
})

addGlobalEventListener('mouseout', "img", e => {
    e.target.style.width = "50%"
    // e.target.style.height = "100%"
})

addEventListener('keydown', e => {
    console.log(e.key)
})

addEventListener('keydown', e => {
    if(e.key === "a") {
        paragraphs.forEach(element => {
            element.style.color = "blue"
        })
    }
})

addEventListener('keydown', e => {
    if(e.key === "a") {
        paragraphs.forEach(element => {
            element.style.color = "blue"
        })
    }
})

addEventListener('keydown', e => {
    if(e.key === "s") {
        paragraphs.forEach(element => {
            element.style.color = "red"
        })
    }
})

addEventListener('keydown', e => {
    if(e.key === "d") {
        paragraphs.forEach(element => {
            element.style.color = "green"
        })
    }
})

addEventListener('scroll', function() {
    paragraphs.forEach(element => {
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        element.style.color = "#"+randomColor
    })
})

function reportWindowSize() {
    console.log(`X: ${window.innerHeight}, Y: ${window.innerWidth}`)
    console.log()
  }

addEventListener('resize', reportWindowSize())

function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) callback(e)
    })
}

