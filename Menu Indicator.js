var marker = document.getElementById('marker');
var items = document.querySelectorAll('nav a');

function indicator(e) {
    marker.style.left = e.offsetLeft + 'px';
    marker.style.width = e.offsetWidth + 'px';
}
items.forEach(link => {
    link.addEventListener('click', function (e) {
        indicator(e.target);
    })
});