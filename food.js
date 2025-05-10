
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

    class invItem{
        constructor(name,SKU,quantity,group,parLvl){
            this.id=items.length+1
            this.name=name
            this.SKU=SKU
            this.quantity=quantity
            this.group=group
            this.parLvl=parLvl
        }
    }

    const displayBox=document.getElementById("display")

    displayItem(items)

function displayItem(currentList){
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

