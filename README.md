# ForestWell food management system 

## Table of contents
- [HTML](#html)
- [CSS](#css)

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




