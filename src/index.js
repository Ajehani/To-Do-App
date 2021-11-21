import './style.css';
import {dom} from './dom.js'
let init=dom()
const todos=(title,crip,date,rating)=>{
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
            // let cloneModal=init.giveMeModal().cloneNode(true)
            // console.log(cloneModal)
            // document.querySelector('#content').appendChild(cloneModal)
            // cloneModal.setAttribute("style","display:flex;") 
            // cloneModal.querySelector('#field1').value=title
            // cloneModal.querySelector('#field2').value=crip
            // cloneModal.querySelector('#field3').value=date
            // overlay.setAttribute("style","opacity:1;pointer-events:all;")
            // cloneModal.firstChild.onclick=()=>{
            //     cloneModal.style.display="none"
            //     overlay.
            // }
            // cloneModal.lastChild.onclick=()=>{
            //     left.textContent=`Title: ${cloneModal.querySelector('#field1').value=title}`
            //     right.textContent=`Due Date: ${cloneModal.querySelector('#field3').value=date}`
            // }
            init.giveMeModal().lastChild.classList.add("tex")
            init.giveMeModal().style.display="flex"
            overlay.setAttribute("style","opacity:1;pointer-events:all;")
            document.querySelector('#field1').value=title
            document.querySelector('#field2').value=crip
            document.querySelector('#field3').value=date          

        })
        closeButton.addEventListener('click',()=>{
            tex.remove()
        })
        console.log(`Title: ${title} - Description: ${crip} - DueDate: ${date} - Rating: ${rating}`)
    }
    const persistence=()=>{}
    return {publish}
}
init.title()
init.sidebar()
init.createModal()
export {todos}

