'use strict'
import { data } from "./constants"

const {
    newBtn, modal, overlay
} = data()


newBtn.addEventListener('click', function(){
    modal.classList.toggle('hidden')
    overlay.classList.toggle('hidden')
})