(function() {
    // Add the class at the start
    document.documentElement.classList.add('reduce-fouce');
    
    // Elements that must be loaded by HTMX
    var elementsToWait = [
        '#header-placeholder',
        '#footer-placeholder'
        // Add other selectors if needed
    ];
    
    // Promises to wait for HTMX elements to load
    var htmxPromises = elementsToWait.map(function(selector) {
        return new Promise(function(resolve) {
            var element = document.querySelector(selector);
            
            if (!element || element.innerHTML.trim() !== '') {
                // Element already loaded or not present
                resolve();
                return;
            }
            
            // Listen for the htmx:afterSwap event
            function onSwap(event) {
                if (event.target === element || element.contains(event.target)) {
                    document.removeEventListener('htmx:afterSwap', onSwap);
                    resolve();
                }
            }
            
            document.addEventListener('htmx:afterSwap', onSwap);
            
            // Safety timeout (2 seconds)
            setTimeout(resolve, 2000);
        });
    });
    
    // Wait for everything, then show the page
    Promise.race([
        Promise.all(htmxPromises),
        new Promise(function(resolve) { setTimeout(resolve, 2500); })
    ]).then(function() {
        document.documentElement.classList.remove('reduce-fouce');
    });
})();