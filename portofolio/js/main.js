var user = [];
var user = localStorage.getItem('user');

if (user) {
    user = JSON.parse(user);
}

console.log(localStorage.getItem('user'));

var singInEmail = document.getElementById('signEmail');
var signInPassword = document.getElementById('signPassword');

document.getElementById('login').addEventListener('click', function () {
    if (singInEmail.value === '' || signInPassword.value === '') {
        document.getElementById('message').innerHTML = `<p class='text-center'>All inputs are required</p>`;
    } else {
        checkUser();
    }
});

function checkUser() {
    for (var i = 0; i < user.length; i++) {
        if (singInEmail.value === user[i].SIGNEMAIL && signInPassword.value === user[i].SIGNPASS) {
            var y = user[i].SIGNNAME;
            localStorage.setItem('userName', y);
            location.href =  "../home/index.html";
            break;
        }
    }
}