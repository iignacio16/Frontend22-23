const changeModalState = () => {
    const modal = document.getElementById("modal")
    if(modal.style.display === "block"){
        modal.style.display = "none"
    }else{
        modal.style.display = "block"
    }
}


const addContact = () => {
    const contactosContainer = document.getElementById("contactosContainer")
    const modalInput = document.getElementById("nuevoContacto")
    if(modalInput.value.length > 0){
        let exists = undefined;
        contactosContainer.childNodes.forEach((elem) => {
            if(modalInput.value.toUpperCase() === elem.textContent.toUpperCase()){
                exists = true
            }
        })
        if(!exists){
            const newContact = document.createElement("div")
            newContact.id = `singleContact${contactosContainer.childNodes.length + 1}`
            newContact.className = "singleContact"
            newContact.setAttribute("onclick", "openChat(this.id)")
            newContact.innerText = modalInput.value
            modalInput.value = ""
            contactosContainer.appendChild(newContact)
            changeModalState()
        }else{
            alert("Use another name")
        }
    }else{
        alert("Add a name")
    }
}

const openChat = (id) => {
    const contact = document.getElementById(id)
    const infoDiv = document.getElementById("infoContacto")
    const mensajes = document.getElementById("mensajes")
    const mensajeInput = document.getElementById("mensajeInput")
    mensajeInput.value = ""
    infoDiv.innerText = contact.innerText
    mensajes.innerHTML = ""
}

const enviarMensaje = () => {
    const mensajes = document.getElementById("mensajes")
    const mensajeInput = document.getElementById("mensajeInput")
    const userInfo = document.getElementById("infoContacto")
    if(userInfo.innerText.length > 0){
        const newMessage = document.createElement("div")
        newMessage.innerText = mensajeInput.value
        newMessage.id = `message${mensajes.childNodes.length+1}`
        newMessage.className = "messages"
        const newMessageStyle = newMessage.style
        if(Math.round(Math.random()) === 1){
            newMessageStyle.background = "red"
            newMessageStyle.justifySelf = "flex-start"
            newMessageStyle.alignSelf = "flex-start"
            newMessageStyle.marginLeft = "10px"
        }else{
            newMessageStyle.background = "green"
            newMessageStyle.justifySelf = "flex-end"
            newMessageStyle.alignSelf = "flex-end"
            newMessageStyle.marginRight = "10px"
        }
        mensajeInput.value = ""
        mensajes.appendChild(newMessage)
        const pos = document.getElementById(newMessage.id).getBoundingClientRect() //Da la posición exacta dentro del documento
        mensajes.scrollTo(0, pos.top)
    }else{
        alert("Select User to talk to")
    }
}

document.addEventListener('keypress', (e)=>{
    if(e.key === "Enter"){
        if(document.getElementById("modal").style.display === "block"){
            addContact()
        }else{
            enviarMensaje()
        }
    }
})