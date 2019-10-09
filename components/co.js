var co = document.getElementById('co');

co.addEventListener('click', function(){
    if(co.innerText == 'se connecter'){
        co.innerText = 'se deconnecter';
    }
    if(co.innerText =='se deconnecter'){
        co.innerText ='se connecter';
    }
})