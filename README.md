> create a simple interface with **html** **css** **js**


- The design is based on the idea of scrolling ..
- so whenever you scroll from the y axis
The more elements move
```js
window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        document.getElementById("myImg").className = "slideUp";
        }
        }
```
When you have scrolled 350px from the top, an image will slide in

[source code for this example](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/tryit.asp-filename=tryjsref_onscroll3.html)
___
