1) Using for loop with JSON objects

var json = [{
    "id" : "Abishek", 
    "topic"   : "JSON iteration over all for loops",
    "task" : "zen portal task",
    "mail": "abc@gmail.com"
},
{
    "id" : "Cibi", 
    "topic"   : "JSON iterate over all for loops",
    "task" : "zen portal task",
    "mail": "def@gmail.com"
},
{
    "id" : "Abdul", 
    "topic"   : "JSON iteration over all for loops",
    "task" : "zen portal task",
    "mail": "ghi@gmail.com"
}];

//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];
    console.log(obj.id);
    console.log(obj.topic);
    console.log(obj.task);
    console.log(obj.mail);
}

//for Each
json.forEach(function(obj) { console.log(obj.topic); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].id);
  //console.log(json[key].topic);
}
}

//for Of
let text = "";
for (let x of json[key].id) {
 text += x; 
}
 console.log(text);
}

/////////////////////////
Output:

Abishek
JSON iteration over all for loops
zen portal task
abc@gmail.com
Cibi
JSON iterate over all for loops
zen portal task
def@gmail.com
Abdul
JSON iteration over all for loops
zen portal task
ghi@gmail.com
JSON iteration over all for loops
JSON iterate over all for loops
JSON iteration over all for loops
Abishek
Cibi
Abdul
Abdul

///////////////////////////





