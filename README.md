> create a simple login interface ..
___
- The addEventListener() Method - **js**

The JavaScript **addEventListener()** method allows you to set up functions to be called when a specified event happens

such as when a user clicks a button .
- **addEventListener()** Syntax :
```js
target.addEventListener(event, function, useCapture)
```

Code Example ..
```js
let button = document.querySelector('#button');
let msg = document.querySelector('#message');

button.addEventListener('click', ()=>{
  msg.classList.toggle('reveal');
})
```
When a user clicks the button, a message is displayed. Another button click hides the message
___

 [ for source code ](https://www.freecodecamp.org/news/javascript-addeventlistener-example-code/)