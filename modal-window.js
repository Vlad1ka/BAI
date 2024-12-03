var modal = document.getElementById('modal-window');
var btn = document.getElementById('myBtn');
var img = document.getElementsById('modal-window__close') [0]
btn.onclick = function () {
    modal.style.display="block";
}
img.onClick = function () {
    modal.style.display="none";
}