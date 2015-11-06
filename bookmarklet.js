(function(){

    var v = '1.11.3',               // to support IE6+.
        myElement = 'body',         // element which will be changed.
        myClass = 'bookmarkletWorks';  // class which will be added to myElement.
      
  // check if jQuery is embedded on the website, if not, embed it and execute javascript code.
    if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
        var done = false;
        var script = document.createElement("script");
        script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
        
        script.onload = script.onreadystatechange = function(){
            if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
                done = true;
                initMyBookmarklet();  // execute javascript code, since jQuery is now embedded.
            }
        };
        
        document.getElementsByTagName("head")[0].appendChild(script);
    } else {
        // jQuery already embedded, execute javascript code.
        initMyBookmarklet();
  }
  
  // javascript which will be executed.
  function initMyBookmarklet() {
    (window.myBookmarklet = function() {
        $(myElement).addClass(myClass);
    })();
  }

})();
