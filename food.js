
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
            "name":'pears',
            "SKU":"FR-PEAR-GR",
            "quantity":300,
            "group":'fruit',
            "parLvl":100    
        },
        {
            "id":3,
            "name":"gallon of full milk",
            "SKU":"MLK-FULL-1G",
            "quantity":60,
            "group":"dairy",
            "parLvl":20
        },
        {
            "id":4,
            "name":'carton of soy milk',
            "SKU":'MLK-SOY-CART',
            "quantity":20,
            "group":'dairy',
            'parLvl':10
        },
        {
            "id":5,
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
        name.appendChild(productDiv)  //creates a div to contain product name

        var productTxt=document.createElement('p')
        productTxt.innerText=`Product Name: \n ${item.name}`
        productDiv.appendChild(productTxt) //inserts the product's name into the previous div

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
search() //displays all the items
function search(){ //takes user input and displays products who's info matches user's search
    let searchTerm=searchBar.value.toLowerCase().trim() //grabs the search term, removing extra spaces and setting it ot lowerCase
    let filteredList=[] //stores items that matches search parameter
    displayBox.innerHTML=`` //erases previously displayed items. Only displaying current results

    for(let i=0;i<items.length;i++){ //searches through the array of items
        if(items[i].name.toLowerCase().includes(searchTerm) || items[i].SKU.toLowerCase().includes(searchTerm)){ //checks if the search term matches any substring of item names or SKU code. user's search doesn't need to exactly match item names or SKU
            filteredList.push(items[i]) //pushes items that match
        }else if(items[i].group.toLowerCase().includes(searchTerm)){ //allows user to search by group. If they search dairy, it'll display every item under dairy
            filteredList.push(items[i])
        }
    }

    displayItem(filteredList) //displays end results
}

searchBar.addEventListener('keyup',function(e){ //listens when user types in search bar
    if(e.key==='Enter'){  //only submits when user presses the enter key
        search()
    }
})