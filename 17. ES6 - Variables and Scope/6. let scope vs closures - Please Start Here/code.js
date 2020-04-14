var fm = function(x) {
    return function () {
        console.log(x);
    }
}

for(var i = 0; i < 3; i ++){
   document.getElementById(i).addEventListener('click', fm(i));
}

