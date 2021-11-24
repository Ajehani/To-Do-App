import './style.css';
import {dom} from './dom.js'
let init=dom()
const todos=(title,crip,date,rating)=>{
    console.log('dont work pls')
    let cloneModal=init.giveMeModal().cloneNode(true)
    cloneModal.setAttribute('class',"plsWork")
    cloneModal.lastChild.remove()
    cloneModal.firstChild.addEventListener('click',()=>{
        cloneModal.setAttribute("style","display:none;")
        overlay.setAttribute("style","opacity:0;")
    })
    document.querySelector('#content').appendChild(cloneModal)
    let sub=document.createElement('input')
    sub.setAttribute('class','text')
    sub.type="submit"
    sub.value="Edit"
    cloneModal.appendChild(sub)
    // const giveClone=()=>cloneModal 
    sub.addEventListener('click',()=>{
        //I'm really lost on this one, basically i created a clone of the modal elemnet in order to redefine the submit button to an edit button. ATM 
        console.log('hallejah')
        cloneModal.setAttribute("style","display:none;")
        overlay.setAttribute("style","opacity:0;")
        // todos(document.querySelector('#field1').value,document.querySelector('#field2').value,document.querySelector('#field3').value,document.querySelector('#radios').value).publish()
        // document.querySelector('#field1').value=
        // document.querySelector('#field2').value=
        // document.querySelector('#field3').value=
    })
    const publish=()=>{
        const tex=document.createElement('li')
        tex.setAttribute('id',"tex")
        init.whereFunction().appendChild(tex)
        const left=document.createElement('div')
        const right=document.createElement('div')
        left.id="left"
        right.id="right"
        tex.appendChild(left)
        tex.appendChild(right)
        left.textContent=`Title: ${title}`
        right.textContent=`Due Date: ${date}`
        const closeButton=document.createElement('button')
        closeButton.id="texClose"
        tex.appendChild(closeButton)
        closeButton.innerHTML='&times;'
        switch(rating){
            case "1":
                tex.setAttribute('style',"color:green;")
                break
            case "2":
                tex.setAttribute('style',"color:orange;")
                break
            case "3":
                tex.setAttribute('style',"color:red;")
                break
        }
        tex.addEventListener('click',()=>{
            cloneModal.style.display="flex"
            overlay.setAttribute("style","opacity:1;pointer-events:all;")        
        })
        closeButton.addEventListener('click',()=>{
            tex.remove()
        })
        console.log(`Title: ${title} - Description: ${crip} - DueDate: ${date} - Rating: ${rating}`)
    }
    const persistence=()=>{}
    return {publish,cloneModal}
}
export {todos}
init.title()
init.sidebar()
init.createModal()

