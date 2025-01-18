let friends = [];

function addFriend() {
    let friend = document.getElementById('friend').value.trim(); 

    if (!friend) {
        alert('Por favor, ingresar un nombre');
    } else {
        friends.push(friend); 
        document.getElementById('friend').value = '';
        console.log(friend);  
        renderFriendList();
    }

    console.log(friends);
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

document.getElementById('friend').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') addFriend();
});