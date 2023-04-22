var container = document.querySelector("#container")
var clone = container.cloneNode(true)

clone.id = 'menu';
document.body.appendChild(clone)
