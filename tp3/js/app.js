let form = document.querySelector('form');
let inputNumber = document.getElementById('inputNumber');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    for (let i = 0; i < inputNumber.value; i++) {
        let li = document.createElement('li');
        li.innerHTML = '<iframe width="560" height="315" class="mb-4" src="https://www.youtube.com/embed/6Jfk8ic3KVk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        document.querySelector('ul').appendChild(li);
    }

})

