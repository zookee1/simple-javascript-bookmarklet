# simple-javascript-bookmarklet

This is a simple javascript bookmarklet. 

It'll embedd jQuery (if not already on page) and then adds a class to the body.

Used for my [SkyGo-Bookmarklet](http://niklasmeyer.de/tools/skygo-bookmarklet).


How to embed a button, which can be dragged into the bookmarks:
```html
<a href="javascript:(function(){if(window.myBookmarklet!==undefined){myBookmarklet();}else{document.body.appendChild(document.createElement('script')).src='LINKTOYOURJSFILE';}})();">
  Button to drag into bookmarks
</a>
```
