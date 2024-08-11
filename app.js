let isStatus = document.querySelector('h5');
let add = document.querySelector('#Add');
let check = 0

add.addEventListener('click',function(){
    if(check ==0){
        isStatus.innerHTML = "Friends"
        isStatus.style.color = "Green"
        add.innerHTML = 'Remove friends'
        check = 1
        
    }
    else{
        isStatus.innerHTML = "Stanger"
        isStatus.style.color = "Red"
        add.innerHTML = 'Add friends'
        check = 0
    }

})

