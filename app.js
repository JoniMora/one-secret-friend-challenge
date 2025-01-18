let friends = [];

function addFriend() {
    let friend = document.getElementById('friend').value.trim(); 

    if (!friend) {
        alert('Por favor, ingresar un nombre');
    } else {
        friends.push(friend); 
        document.getElementById('friend').value = '';
        renderFriendList();
    }
}

function renderFriendList(){
    const list = document.getElementById('friendList');
    list.innerHTML = '';

    for(let i = 0; i < friends.length; i++){
        const li = document.createElement('li');
        li.textContent = friends[i];
        list.appendChild(li);
    }
}

function drawFriend() {
    if (friends.length === 0) {
        alert('No hay amigos para sortear.');
        return;
    }
    const randomFriend = friends[Math.floor(Math.random() * friends.length)];

    const resultList = document.getElementById('resultado');
    resultList.innerHTML = `<li>¡El amigo secreto es: ${randomFriend}!</li>`;
}

document.getElementById('friend').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') addFriend();
});