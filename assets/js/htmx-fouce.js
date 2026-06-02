(function() {
    // Aggiungi la classe all'inizio
    document.documentElement.classList.add('reduce-fouce');
    
    // Elementi che devono essere caricati da HTMX
    var elementsToWait = [
        '#header-placeholder',
        '#footer-placeholder'
        // Aggiungi altri selettori se necessario
    ];
    
    // Promises per attendere il caricamento degli elementi HTMX
    var htmxPromises = elementsToWait.map(function(selector) {
        return new Promise(function(resolve) {
            var element = document.querySelector(selector);
            
            if (!element || element.innerHTML.trim() !== '') {
                // Elemento già caricato o non presente
                resolve();
                return;
            }
            
            // Ascolta l'evento htmx:afterSwap
            function onSwap(event) {
                if (event.target === element || element.contains(event.target)) {
                    document.removeEventListener('htmx:afterSwap', onSwap);
                    resolve();
                }
            }
            
            document.addEventListener('htmx:afterSwap', onSwap);
            
            // Timeout di sicurezza (2 secondi)
            setTimeout(resolve, 2000);
        });
    });
    
    // Attendi tutto e poi mostra la pagina
    Promise.race([
        Promise.all(htmxPromises),
        new Promise(function(resolve) { setTimeout(resolve, 2500); })
    ]).then(function() {
        document.documentElement.classList.remove('reduce-fouce');
    });
})();