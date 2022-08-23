// let text = document.createElement("p")
// let label1 = document.getElementById("label1")
// let label = document.getElementById("label")
// document.forms[0].addEventListener("submit", function(event) {
//     event.preventDefault()
//     if (this.quest.value === "2") {
//         document.body.appendChild(text)
//         text.innerText = "Ura pobeda"
//         label1.style.display = "block"
//         label.style.display = "none"
//         if (this.quest.value === "2") {}
//     } else if (parseInt(this.quest.value)) {
//         document.body.appendChild(text)
//         text.innerText = "Неправильно"
//     } else {
//         document.body.appendChild(text)
//         text.innerText = "Введи число"
//     }
// })

{/* <form name="genius">
    <label for="quest" id="label">Сколько сейчас времени если сейчас два часа дня?</label>
    <label for="quest" id="label1">2 + 2 =</label>
    <input name="quest" type="text" class="input1" placeholder="ответ подавай">
</form> */}

//==========================================================================

import './styles/styles.css'
import './styles/icons.css'

window.addEventListener('scroll', function(e) {
    let header = this.document.getElementById("header")
    let nav = this.document.getElementById("nav")
    if (this.scrollY > 70) {
        header.style.width = "100%"
        header.style.backgroundColor = "rgb(50, 53, 50)"
        header.style.height = "50px"
        nav.style.paddingLeft = "30px"
    } else {
        header.style.width = "85%"
        header.style.backgroundColor = "transparent"
        header.style.height = "70px"
    }
});

