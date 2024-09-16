function loadHTML(url, elementId, isHead) {
            fetch(url)
                .then(response => response.text())
                .then(data => {
                    if (isHead) {
                        // Insert head content into <head> tag
                        document.head.innerHTML += data;
                    } else {
                        // Insert content into the specified element
                        console.log(data)
                        document.getElementById(elementId).innerHTML = data;
                    }
                })
                .catch(error => console.error('Error loading HTML:', error));
        }

// Load head, header, and footer
document.addEventListener('DOMContentLoaded', () => {
    loadHTML('/partials/head.html', null, true);
    loadHTML('/partials/header.html', 'header', false);
    loadHTML('/partials/footer.html', 'footer', false);
});