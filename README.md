### Introduction

The jcookies package is a small javascript 'class' that allows you to save persistent data in form of cookies.


### Features
The class contains 3 methods/functions:
* set - to create a cookie
* get - to retrieve a cookie
* erase- to clear out a cookie


### Example

The example below demonstrates how the features work. Please note that this class will only work if you are running with 
http or https protocol and will not work with the file protocol.


`index.html`
```
<html>
<title>My Cookie Test</title>
<script src="cookies.class.js"></script>
<script>
var food=new jcookies();

function savex() {
food.set("meal",cook.value);
alert("Swallowed "+cook.value);
}

function loadx() {
cook.value=food.get("meal");
}

function erasex() {
cook.value="";
food.erase("meal");
alert("Vomited meal");
}

</script>


<input type="text" id="cook">
<input type="button" value="Save" onclick="savex()">
<input type="button" value="Load" onclick="loadx()">
<input type="button" value="Vomit" onclick="erasex()">

</body>
</html>
```

