let form=document.createElement("form")
document.body.appendChild(form)
console.log(form)
let input1=document.createElement("input")
input1.setAttribute("type","text")
input1.setAttribute("id","email")
input1.setAttribute("name","email")
input1.setAttribute("placeholder","email")
form.appendChild(input1)

let input2=document.createElement("input")
input2.setAttribute("type","password")
input2.setAttribute("id","password")
input2.setAttribute("name","password")
input2.setAttribute("placeholder","password")
form.appendChild(input2)

let button=document.createElement("button")
button.setAttribute("type","submit")
button.innerText="submit"
form.appendChild(button)

let frm=document.getElementsByTagName("form")[0]
frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log("submited")
})

let names=document.getElementsByName("email")[0]
let pass=document.getElementsByName("password")[0]
button.addEventListener("click",()=>{
    let nm=names.value
    let ps=pass.value
    // console.log(nm)

    // let num=nm.value??"User"
    
    let p1=document.createElement("p")
    document.body.appendChild(p1)
    p1.innerText=`username:-${nm}`
    names.value=''
    console.log(nm)

    let p2=document.createElement("p")
    document.body.appendChild(p2)
    p2.innerText=`password:- ${ps}`
    pass.value=''
    console.log(ps)

})

let bt=document.getElementsByTagName("button")[0]
bt.addEventListener("click",(e)=>{
    e.stopPropagation()
    console.log("hii first user")
})
bt.addEventListener("click",(e)=>{
    e.stopImmediatePropagation()
    console.log("hii 2nd user")
})
bt.addEventListener("click",(e)=>{
    e.stopPropagation()
    console.log("hii 3rd user")
})


// let a
// let num=a??"user"
// console.log(num)

//event bubbling:-

// let gdp=document.getElementById("gp")
// gdp.addEventListener("click",()=>{
//     console.log("hello gp")
// })
// let pt=document.getElementById("parent")
// pt.addEventListener("click",()=>{
//     console.log("hello parent")
// })
// let ch=document.getElementById("child")
// ch.addEventListener("click",()=>{
//     console.log("hello child")
// })

/// event handling:-

// let gdp=document.getElementById("gp")
// gdp.addEventListener("click",()=>{
//     console.log("hello gp")
// },true)
// let pt=document.getElementById("parent")
// pt.addEventListener("click",()=>{
//     console.log("hello parent")
// },true)
// let ch=document.getElementById("child")
// ch.addEventListener("click",()=>{
//     console.log("hello child")
// },true)

// stop propagation and immediate propagation


let gdp=document.getElementById("gp")
gdp.addEventListener("click",(eg)=>{
    eg.stopPropagation()
    console.log("hello gp")
})
let pt=document.getElementById("parent")
pt.addEventListener("click",(ev)=>{
    ev.stopPropagation()
    console.log("hello parent")
})
let ch=document.getElementById("child")
ch.addEventListener("click",(e)=>{
    e.stopPropagation()
    console.log("hello child")
})
ch.addEventListener("click",(e)=>{
    e.stopImmediatePropagation()
    console.log("hello 2nd child")
})
ch.addEventListener("click",(e)=>{
    e.stopPropagation()
    console.log("hello 3rd child")
})


