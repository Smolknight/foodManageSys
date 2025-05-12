
    const items=[
        {
            "id":1,
            "name":"apples",
            "SKU":"FR-APP-RED",
            "quantity":500,
            "group":"fruit",
            "parLvl":230
        },
        {
            "id":2,
            "name":"gallon of full milk",
            "SKU":"MLK-FULL-1G",
            "quantity":60,
            "group":"dairy",
            "parLvl":20
        },
        {
            "id":3,
            "name":"eggs",
            "SKU":"EGG-12-GA",
            "quantity":100,
            "group":"poultry",
            "parLvl":20
        }
    ]

    const displayBox=document.getElementById("display")
    const searchBar=document.getElementById('searchBar')

function displayItem(currentList){ //div assembly 
    currentList.forEach((item)=>{
        var box=document.createElement("div")
        box.className="itemBox" //creates the box that holds item info and assigns css class
        displayBox.appendChild(box)

        var name=document.createElement("div")
        name.className="name"
        box.appendChild(name) //creates the div that holds names aand appends it as a child of itemBox

        var productDiv=document.createElement('div')
        productDiv.className='infoTxt'
        name.appendChild(productDiv)

        var productTxt=document.createElement('p')
        productTxt.innerText=`Product Name: \n ${item.name}`
        productDiv.appendChild(productTxt)

        var SKUdiv=document.createElement('div')
        SKUdiv.className="infoTxt"
        name.appendChild(SKUdiv)


        var SKUtxt=document.createElement('p')
        SKUtxt.innerText=`SKU: ${item.SKU}`
        SKUdiv.appendChild(SKUtxt)  

        var countDiv=document.createElement('div')
        countDiv.className="infoTxt"
        name.appendChild(countDiv)

        var countTxt=document.createElement('p')
        countTxt.innerText=`quantity: ${item.quantity}`
        countDiv.appendChild(countTxt)

        var groupDiv=document.createElement('div')
        groupDiv.className='infoTxt'
        name.appendChild(groupDiv)

        var groupTxt=document.createElement('p')
        groupTxt.innerHTML=`Group: ${item.group}`
        groupDiv.appendChild(groupTxt)

        var parDiv=document.createElement('div')
        parDiv.className='infoTxt'
        name.appendChild(parDiv)

        var parTxt=document.createElement('p')
        parTxt.innerText=`Par Level: ${item.parLvl}`
        parDiv.appendChild(parTxt)
    })
}
search()
function search(){
    let searchTerm=searchBar.value.toLowerCase().trim()
    let filteredList=[]
    displayBox.innerHTML=``

    for(let i=0;i<items.length;i++){
        if(items[i].name.toLowerCase()==searchTerm || items[i].SKU.toLowerCase()==searchTerm){
            filteredList.push(items[i])
        }else if(items[i].name.toLowerCase().includes(searchTerm) || items[i].SKU.toLowerCase().includes(searchTerm)){
            filteredList.push(items[i])
        }
    }
    displayItem(filteredList)
}

searchBar.addEventListener('keyup',function(e){
    if(e.key==='Enter'){
        search()
    }
})