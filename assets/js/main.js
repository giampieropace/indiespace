document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.share-btn');
    
    if (!btn) return;  // ✅ Ora return è dentro la funzione
    
    const shareOrCopy = async () => {
        if (navigator.share) {
            try {
                await navigator.share({ 
                    title: document.title, 
                    url: location.href 
                });
            } catch (err) {
                if (err.name !== 'AbortError') console.error(err);
            }
        } else {
            try {
                await navigator.clipboard.writeText(location.href);
                const original = btn.textContent;
                btn.textContent = 'Link copied!';
                setTimeout(() => btn.textContent = original, 2000);
            } catch (err) {
                console.error('Copy failed:', err);
            }
        }
    };
    
    btn.addEventListener('click', shareOrCopy);
});