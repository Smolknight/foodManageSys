# ForestWell food management system 

## Table of contents
- [HTML](#html)
- [CSS](#css)
- [Javascript](#javascript)

## HTML

### proper DOCTYPE declaration

```
<!DOCTYPE html>
```

### proper nested HTML tags
```
 <div class="search">    
        <div>
            <label for="searchBar">Search</label>
            <input type="text" id="searchBar">
            <button onclick="search()">search</button>
        </div>
    </div>
```

### Lang attribute
```
<html lang="en">
```

### Meta tags
#### charset meta tag
```
<meta charset="UTF-8">
```

#### Meta viewport
```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

#### Meta description 
```
<meta name="description" content="ForestWell food management system">
```

### Semantic elements
```
<header>
    <h1 id="greeting">Hello,<span id="user"></span></h1>
    <h3 style="text-align: center; font-size: 1.3em; padding-top: 10px;">ForestWell food inventory management system</h6>
    <div class="search">    
        <div>
            <label for="searchBar">Search</label>
            <input type="text" id="searchBar">
            <button onclick="search()">search</button>
        </div>
    </div>
    <div class="recentSearch">
        <p id="searchHistory">recent searches:</p>
        <div id="displayHistory"></div>
    </div>
</header>
```

### Heading structure
```
<header>
    <h1 id="greeting">Hello,<span id="user"></span></h1>
    <h3 style="text-align: center; font-size: 1.3em; padding-top: 10px;">ForestWell food inventory management system</h6>
    <div class="search">   
``` 

### button and imput elements
```
  <input type="text" id="searchBar">
  <button onclick="search()">search</button>
```

### indentation and formatting
```
 <div class="timer">
    <h2 id="timer">time spent on system: 0 second(s)</h2>
 </div>
```

## CSS

### global reset and box model
```
 *,::before,::after{
            box-sizing: border-box;
            margin: 0 auto;
            padding: 0;
        }
```

### css variable
```
:root{
            --bgBoardTxt-color: white;
}
```
This variable is used to set the background color, border color, and text color of all the elements in dark mode

### organized css structure
```
        /*style for greeting message*/
        #greeting{
            padding: 10px;
            font-size: 2.3em;
            width: fit-content; 
            margin: 0 auto;
        }
```

### flexbox usage
```
        /*style for search bar*/
        .search{
            display: flex;
            width: 90%;
            height: 10vh;
            align-items: center;
        }
```

### button styling
```
  button{
                color: var(--bgBoardTxt-color);
                background-color: grey;
            }
```

### Theme customization
```
 /*style that controls what dark mode is*/
        .dark{ 
            color: var(--bgBoardTxt-color);
            background-color: black;

            .itemBox{ 
                border: var(--bgBoardTxt-color) solid 2px;
            }

            .display{
                border: var(--bgBoardTxt-color) solid 2px;
            }

            button{
                color: var(--bgBoardTxt-color);
                background-color: grey;
            }

            .historyWord{
            width: fit-content;
            color: white;
        }
        }
```

## JavaScript

### usage of camelCase
```
 const displayBox=document.getElementById("display") //grabs the div where search results are displayed
    const searchBar=document.getElementById('searchBar') //grabs the search bar
    const displayHistory=document.getElementById('displayHistory') //grabs the area where search history is displayed
```

### consistent indentation
``` let wordDisplay = document.createElement('p') //creates a <p> for the words
        wordDisplay.className = 'historyWord' //assigns css class dedicated for search history
        wordDisplay.innerText = word
```

### clear function names and focused one single task
```
function saveSearch(term){ //used to save words to search history
    if(!historyList.includes(term) && term!=""){ //checks if the word is already in list and not blank before saving
        historyList.push(term) //inserts the word to the search history array
        if(historyList.length==5){ //checks if the array has five elements
            historyList.splice(0,1) //removes the first element from the array once the list reaches five elements
        }
    }
    renderHistory(historyList) //calls the function in charge of displaying search history
}
```
This function's task is to save words that the user searches for

### arrays and object usage
```
let historyList = [] 
```
Array above is used to store words as search history
```
const items = [
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
```
Above is an array of objects, objects store info on items in inventory

### array method
```
    historyList.forEach((word)=>{ //goes through the entire lsit
        let wordDisplay = document.createElement('p') //creates a <p> for the words
        wordDisplay.className = 'historyWord' //assigns css class dedicated for search history
        wordDisplay.innerText = word
        displayHistory.appendChild(wordDisplay) //adds it to the display area
        wordDisplay.addEventListener('click',function(e){ //attaches event listener for every word
        searchBar.value = e.currentTarget.innerText //inserts the clicked word into search bar
        search() //runs the search
        })
    })
```
forEach method goes through every word in the search history and displays it on the webpage

### looping
```
   for(let i=0; i<items.length; i++){ //loops through the array of items
        if(items[i].name.toLowerCase().includes(searchTerm) || items[i].SKU.toLowerCase().includes(searchTerm)){ //checks if the search term matches any substring of item names or SKU code. user's search doesn't need to exactly match item names or SKU, ex. searching app will return any term that has app
            filteredList.push(items[i]) //pushes items that match
        }else if(items[i].group.toLowerCase().includes(searchTerm)){ //allows user to search by group. If they search dairy, it'll display every item under dairy
            filteredList.push(items[i]) 
        }
    }
```
Loop above is part of search functions, this for loop goes through every object in array looking for any matching terms



