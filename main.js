let input = document.querySelector("input")
let add = document.querySelector("button")
let boxs = document.querySelectorAll(".box")
let drag = null
let boxColor = `default`


add.onclick = function() {
    if(input.value != "") {
        boxs[0].innerHTML += `<div class="outbut" draggable="true">${input.value}</div>`
        input.value = ""
    }

    dragItem()
}

function dragItem() {
    let items = document.querySelectorAll(".outbut")
    items.forEach(item => {
        item.addEventListener("dragstart", function() {
            drag = item
            item.style.opacity = `0.5`
        })
        
        item.addEventListener("dragend", function() {
            drag = null
            item.style.opacity = `1`
        })


        boxs.forEach(box => {
            box.addEventListener("dragover", function(e) {
                e.preventDefault()
                box.style.background = "#090"
                box.style.color = "#fff"
            })

            box.addEventListener("dragleave", function() {
                box.style.background = "#eee"
                box.style.color = "black"
            })

            box.addEventListener("drop", function() {
                box.append(drag)
                box.style.background = "#eee"
                box.style.color = "black"
            })
        })
    })
}