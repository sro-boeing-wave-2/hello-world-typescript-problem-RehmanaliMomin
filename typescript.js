console.log('qwe');
var clicked = document.getElementById('sayHelloBtn');
clicked.addEventListener('click', func1);
function func1() {
    document.getElementById('helloWorldBlock').innerHTML = "<b> Hello World </b>";
}
