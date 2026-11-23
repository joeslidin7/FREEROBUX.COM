const button = document.getElementById("reauthenticate");

const links = ["https://www.youtube.com/watch?v=NmjrfXO0mdk&t=8s", "https://www.youtube.com/watch?v=xMHJGd3wwZk"];

button.addEventListener('click', function(){
    window.open(links[0]);
});