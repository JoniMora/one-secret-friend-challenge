let friends = [];

function addFriend() {
    let friend = document.getElementById('friend').value.trim(); 

    if (!friend) {
        alert('Por favor, ingresar un nombre');
    } else {
        friends.push(friend); 
        document.getElementById('friend').value = '';
        console.log(friend);  
    }

    console.log(friends);
}

document.getElementById('friend').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') addFriend();
});