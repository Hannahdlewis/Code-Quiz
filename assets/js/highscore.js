var backBtn = document.querySelector('.go-back');
var clearBtn = document.querySelector('.clear');
var score_list = document.querySelector('#highscores');

var list = [];

backBtn.addEventListener('click', function() {

    location.href = 'https://hannahdlewis.github.io/Code-Quiz/'
});

function init(){
    var user_info =JSON.parse(localStorage.getItem('user-cred'));
// not sure if this works, double check may need to change to my stuff
    list = user_info;
    console.log(user_info);
    renderList();
}


