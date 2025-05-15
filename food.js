
const itemList=JSON.parse(itemData) //retrieves JSON data
let historyList=[] //array used to store search history

    const displayBox=document.getElementById("display") //grabs the div where search results are displayed
    const searchBar=document.getElementById('searchBar') //grabs the search bar
    const displayHistory=document.getElementById('displayHistory') //grabs the area where search history is displayed

function displayItem(currentList){ //div assembly function, displays items from passed argument
    currentList.forEach((item)=>{ //forEach loop goes through every item in array
        var box=document.createElement("div") //creates the primary div
        box.className="itemBox" //assigns the primary div its class
        displayBox.appendChild(box) //appends the item box to display area

        var name=document.createElement("div") // creates div that controls how info is displayed
        name.className="name"
        box.appendChild(name) //appends name info as a child of itemBox

        var productDiv=document.createElement('div') //creates a div to contain product name
        productDiv.className='infoTxt' //assigns a class dedicated to info display
        name.appendChild(productDiv)   //appends this div to itemBox

        var productTxt=document.createElement('p') //creates the <p> that displays product name
        productTxt.innerText=`Product Name: \n ${item.name}` //sets the text to product name
        productDiv.appendChild(productTxt) //inserts the product's name into the previous div

        var SKUdiv=document.createElement('div')
        SKUdiv.className="infoTxt"
        name.appendChild(SKUdiv)

        //this cycle repeats for every other category

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
search() //search function called to display all items when page is loaded

function search(){ //takes user input and displays products who's info matches user's search
    let searchTerm = searchBar.value.toLowerCase().trim() //grabs the search term, removing extra spaces and setting letters to lowerCase
    saveSearch(searchTerm)//calls the search history and passes word as an argument
    let filteredList = [] //stores items that matches search parameter
    displayBox.innerHTML = `` //erases previously displayed items. Only displaying current results

    for(let i=0; i<items.length; i++){ //loops through the array of items
        if(items[i].name.toLowerCase().includes(searchTerm) || items[i].SKU.toLowerCase().includes(searchTerm)){ //checks if the search term matches any substring of item names or SKU code. user's search doesn't need to exactly match item names or SKU, ex. searching app will return any term that has app
            filteredList.push(items[i]) //pushes items that match
        }else if(items[i].group.toLowerCase().includes(searchTerm)){ //allows user to search by group. If they search dairy, it'll display every item under dairy
            filteredList.push(items[i]) 
        }
    }

    displayItem(filteredList) //passes array of filtered items as an argument for rendering
}

searchBar.addEventListener('keyup',function(e){ //listens when user types in search bar
    if(e.key==='Enter'){  //only submits when user presses the enter key
        search() //triggers the search function
    }
})


function saveSearch(term){ //used to save words to search history
    if(!historyList.includes(term) && term!=""){ //checks if the word is already in list and not blank before saving
        historyList.push(term) //inserts the word to the search history array
        if(historyList.length==5){ //checks if the array has five elements
            historyList.splice(0,1) //removes the first element from the array once the list reaches five elements
        }
    }
    renderHistory(historyList) //calls the function in charge of displaying search history
}

function renderHistory(list){  //function in charge of rendering search history
    displayHistory.innerHTML=[] //clears list before updating
    historyList.forEach((word)=>{ //goes through the entire lsit
        let wordDisplay=document.createElement('p') //creates a <p> for the words
        wordDisplay.className='historyWord' //assigns css class dedicated for search history
        wordDisplay.innerText=word
        displayHistory.appendChild(wordDisplay) //adds it to the display area
        wordDisplay.addEventListener('click',function(e){ //attaches event listener for every word
        searchBar.value=e.currentTarget.innerText //inserts the clicked word into search bar
        search() //runs the search
        })
    })
}