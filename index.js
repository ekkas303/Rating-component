const one = document.querySelector("#one")
const two = document.querySelector ("#two")
const three = document.querySelector("#three")
const four= document.querySelector ("#four")
const five = document.querySelector ("#five")
const image_one = document.querySelector(".background_image_one")
const image_two = document.querySelector(".background_image_two")
const image_three= document.querySelector(".background_image_three")
const image_four= document.querySelector(".background_image_four")


two.addEventListener("mouseover",()=>{
    image_one.style.display = "initial"
    one.style.color = 'hsl(0, 0%, 100%)'
    two.style.color = 'hsl(0, 0%, 100%)'
})

two.addEventListener("mouseleave",()=>{
   image_one.style.display = "none"
   one.style.color = "hsl(217, 12%, 63%)"
   two.style.color = "hsl(217, 12%, 63%)"
})


three.addEventListener("mouseover",()=>{
    image_two.style.display = "initial"
    two.style.color = 'hsl(0, 0%, 100%)'
    three.style.color = 'hsl(0, 0%, 100%)'
})

three.addEventListener("mouseleave",()=>{
    image_two.style.display = "none"
    two.style.color = "hsl(217, 12%, 63%)"
    three.style.color = "hsl(217, 12%, 63%)"
})

four.addEventListener("mouseover",()=>{
    image_three.style.display = "initial"
    three.style.color = 'hsl(0, 0%, 100%)'
    four.style.color = 'hsl(0, 0%, 100%)'
})

four.addEventListener("mouseleave",()=>{
    image_three.style.display = "none"
    three.style.color = "hsl(217, 12%, 63%)"
    four.style.color = "hsl(217, 12%, 63%)"
},true)

five.addEventListener("mouseover",()=>{
    image_four.style.display = "initial"
    four.style.color = 'hsl(0, 0%, 100%)'
})

five.addEventListener("mouseleave",()=>{
    image_four.style.display = "none"
    four.style.color = "hsl(217, 12%, 63%)"
})