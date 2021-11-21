import {todos} from './index.js'
const dom=()=>{
    const overlay=document.createElement('div')
    overlay.id='overlay'
    const content=document.querySelector("#content")
    const modal=document.createElement('div')
    const where=document.createElement('ul')
    where.id="where"
    const whereFunction=()=>where
    modal.setAttribute('id','modal')
    const closeButton=document.createElement('button')
    closeButton.innerHTML='&times;'
    closeButton.id="close"
    const title=()=>{
        let Title=document.createElement('h1')
        Title.textContent="Todo List"
        content.appendChild(Title)
    };
    const sidebar=()=>{
        const side=document.createElement('div')
        side.setAttribute('id','side')
        content.appendChild(side)
        const createTask=document.createElement('button')
        const projects=document.createElement('button')
        createTask.setAttribute('class','btn')
        projects.setAttribute('class','btn')
        projects.textContent="Projects"
        createTask.textContent='Create a Task'
        side.appendChild(projects)
        side.appendChild(createTask)
        createTask.addEventListener('click',()=>{
            overlay.setAttribute("style","opacity:1;pointer-events:all;")
            modal.setAttribute("style","display:flex;")
            // sub.classList.add("active")
            document.querySelector('#field1').value=""
            document.querySelector('#field2').value=""
            document.querySelector('#field3').value=""
        })
        projects.addEventListener('click',()=>{
        })
    };
    const createModal=()=>{
        modal.appendChild(closeButton)
        const priorityRating=document.createElement('select')
        priorityRating.id="radios"
        for(let i=0;i<6;i++){
            if(i>2){
                const field=document.createElement('option')
                field.setAttribute('id','field'+(i+1))
                switch(i){
                    case 3:
                        let label=document.createElement('label')
                        modal.appendChild(label)
                        label.innerHTML="Priority Rating"
                        field.innerHTML="Low"
                        break;
                    case 4:
                        field.innerHTML="Medium"
                        break;
                    case 5:
                        field.innerHTML="High"
                        break;
                }
                field.type='radio'
                field.name='rating'
                field.value=`${i-2}`
                field.setAttribute('class','radio')
                priorityRating.appendChild(field)
            }
            else{
                let field
                const label=document.createElement('label')
                modal.appendChild(label)
                switch (i){
                    case 0:
                        field=document.createElement('input')
                        field.setAttribute('id','field'+(i+1))
                        field.type='text'
                        label.innerHTML="Title"
                        break;
                    case 1:
                        field=document.createElement('textarea')
                        field.rows="4"
                        field.cols="10"
                        field.setAttribute('id','field'+(i+1))
                        label.innerHTML="Description"
                        break;
                    case 2:
                        field=document.createElement('input')
                        field.setAttribute('id','field'+(i+1))
                        field.type='date'
                        label.innerHTML="Due Date"
                        break;
                }
                field.setAttribute('class','text')
                modal.appendChild(field)
            }
        }
        modal.appendChild(priorityRating)
        const sub=document.createElement('input')
        modal.appendChild(sub)
        sub.type="submit"
        sub.setAttribute('class','text')
        sub.addEventListener('click',()=>{
                modal.setAttribute("style","display:none;")
                overlay.setAttribute("style","opacity:0;")
                todos(document.querySelector('#field1').value,document.querySelector('#field2').value,document.querySelector('#field3').value,document.querySelector('#radios').value).publish()
                document.querySelector('#field1').value=""
                document.querySelector('#field2').value=""
                document.querySelector('#field3').value=""
        })
        closeButton.addEventListener('click',()=>{
            modal.setAttribute("style","display:none;")
            overlay.setAttribute("style","opacity:0;")
        })
        overlay.addEventListener('click',()=>{
            modal.setAttribute("style","display:none;")
            overlay.setAttribute("style","opacity:0;")
    })
    content.appendChild(where)
    content.appendChild(overlay)
    content.appendChild(modal)
}
    const giveMeModal=()=>modal
    console.log('really?"')
    return {title,sidebar,createModal,whereFunction,giveMeModal}
}
export{dom}