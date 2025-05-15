const themeToggle=document.getElementById('themeBtn')


if(localStorage.getItem('theme')=='dark'){
    document.body.classList.toggle('dark')
}

themeToggle.addEventListener('click',function(){

        document.body.classList.toggle('dark')
        if(document.body.classList.contains('dark')){
            localStorage.setItem('theme','dark')
        }else{
            localStorage.setItem('theme','light')
        }
    
})

document.addEventListener('keyup',function(e){
    if(e.shiftKey && e.key==='D'){
        themeToggle.click()
    }
}
)