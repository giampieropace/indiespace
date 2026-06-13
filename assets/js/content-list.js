// content-list.js - with category filter and pagination
(function() {
    var container = document.getElementById('content-list');
    var paginationContainer = document.getElementById('content-pagination');
    
    if (!container) return;
    
    // Configuration
    var itemsPerPage = 5;
    var currentPage = 1;
    var allItems = [];
    var activeCategory = '';  // Active category (empty = all)
    
    // Get category from container's data-category attribute
    if (container.getAttribute('data-category')) {
        activeCategory = container.getAttribute('data-category');
    }
    
    // Get category from URL (e.g. ?category=Blog)
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('category')) {
        activeCategory = urlParams.get('category');
    }
    
    function getFilteredItems() {
        if (!activeCategory) {
            return allItems;
        }
        var filtered = [];
        for (var i = 0; i < allItems.length; i++) {
            if (allItems[i].Category === activeCategory) {
                filtered.push(allItems[i]);
            }
        }
        return filtered;
    }
    
    function renderItems() {
        var filteredItems = getFilteredItems();
        var start = (currentPage - 1) * itemsPerPage;
        var end = start + itemsPerPage;
        var pageItems = filteredItems.slice(start, end);
        var html = '';
        
        // Show active category info
        /* if (activeCategory) {
            html += '<div class="content-filter-info">';
            html += '📁 Categoria: <strong>' + escapeHtml(activeCategory) + '</strong>';
            html += ' <a href="?" class="clear-filter">(rimuovi filtro)</a>';
            html += '</div>';
        } */
        
        html += '<table class="content-table">';
        html += '<thead><tr>';
        html += '<th class="table__head-meta">Title</th>';
        html += '<th class="table__head-summary">Summary</th>';
        html += '<th class="table__head-taxonomies">Category / Tags</th>';
        html += '</tr></thead>';
        html += '<tbody>';
        
        for (var i = 0; i < pageItems.length; i++) {
            var item = pageItems[i];
            var date = new Date(item.date_published);
            var formattedDate = date.toLocaleDateString('en-EN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            // Tags
            var tagsHtml = '';
            if (item.Tags && item.Tags.length) {
                for (var t = 0; t < item.Tags.length; t++) {
                    tagsHtml += '<span class="content-tag">#' + escapeHtml(item.Tags[t]) + '</span> ';
                }
            }
            
            html += '<tr class="list__row">';
            html += '<td class="list__data-meta"><span class="list__data-title"><a href="' + escapeHtml(item.url) + '">' + escapeHtml(item.title) + '</a></span> <span class="list__data-date">' + formattedDate + '</span></td>';
            html += '<td class="list__data-summary">' + (item.summary ? escapeHtml(item.summary) : '—') + '</td>';
            html += '<td class="list__data-taxonomies"><div class="list__data-category">In: ' + (item.Category ? escapeHtml(item.Category) : '—') + '</div><div class="list__data-tags">' + (tagsHtml || '—') + '</div></td>';
            html += '</tr>';
        }
        
        html += '</tbody></table>';
        
        if (pageItems.length === 0) {
            if (activeCategory) {
                container.innerHTML = '<div class="content-empty">📭 Nessun post nella categoria "' + escapeHtml(activeCategory) + '"</div>';
            } else {
                container.innerHTML = '<div class="content-empty">📭 Nessun contenuto trovato</div>';
            }
            if (paginationContainer) paginationContainer.innerHTML = '';
            return;
        }
        
        container.innerHTML = html;
        renderPagination(filteredItems.length);
        
        // Attach event to remove filter
        var clearLink = container.querySelector('.clear-filter');
        if (clearLink) {
            clearLink.onclick = function(e) {
                e.preventDefault();
                activeCategory = '';
                currentPage = 1;
                renderItems();
                // Update URL without category
                var newUrl = window.location.pathname;
                window.history.pushState({}, '', newUrl);
            };
        }
    }
    
    function renderPagination(totalItems) {
        if (!paginationContainer) return;
        
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        
        if (totalPages <= 1) {
            paginationContainer.innerHTML = '';
            return;
        }
        
        var html = '<div class="content-pagination">';
        
        // Previous button
        if (currentPage > 1) {
            html += '<button data-page="' + (currentPage - 1) + '" class="secondary">« Previuos</button>';
        } else {
            html += '<button disabled class="secondary">« Previuos</button>';
        }
        
        // Page numbers
        for (var i = 1; i <= totalPages; i++) {
            if (i === currentPage) {
                html += '<button class="active">' + i + '</button>';
            } else if (Math.abs(i - currentPage) <= 1 || i === 1 || i === totalPages) {
                html += '<button data-page="' + i + '" class="secondary">' + i + '</button>';
            } else if (Math.abs(i - currentPage) === 2) {
                html += '<span> - </span>';
            }
        }
        
        // Next button
        if (currentPage < totalPages) {
            html += '<button data-page="' + (currentPage + 1) + '" class="secondary">Next »</button>';
        } else {
            html += '<button disabled class="secondary">Next »</button>';
        }
        
        html += '</div>';
        paginationContainer.innerHTML = html;
        
        // Attach event listeners
        var buttons = paginationContainer.getElementsByTagName('button');
        for (var i = 0; i < buttons.length; i++) {
            (function(btn) {
                var page = btn.getAttribute('data-page');
                if (page) {
                    btn.onclick = function(e) {
                        currentPage = parseInt(page);
                        renderItems();
                        var target = document.getElementById('list-title');
                        if (target) {
                            target.scrollIntoView({ behavior: 'smooth' });
                        }
                    };
                }
            })(buttons[i]);
        }
    }
    
    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/&/g, '&amp;')
                   .replace(/</g, '&lt;')
                   .replace(/>/g, '&gt;')
                   .replace(/"/g, '&quot;')
                   .replace(/'/g, '&#39;');
    }
    
    // Load data
    fetch('/feed.json')
        .then(function(response) {
            if (!response.ok) throw new Error('Feed not found');
            return response.json();
        })
        .then(function(feed) {
            allItems = feed.items;
            renderItems();
        })
        .catch(function(error) {
            console.error('Error loading content:', error);
            container.innerHTML = '<div class="content-error">❌ Errore nel caricamento dei contenuti</div>';
        });
})();