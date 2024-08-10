let stor = document.getElementById("stor");

function changColor() {
    // document.body.style.backgroundColor = 
    //     'rgb(' + Math.random() * 255 + 
    //     ',' + Math.random() * 255 + ',' 
    //     + Math.random() * 255 + ')';

    stor.innerHTML = document.body.style.backgroundColor = 
    'rgb(' + parseInt(Math.random() * 255) + 
    ' ' + parseInt(Math.random() * 255) + ' ' 
    + parseInt(Math.random() * 255) + ')';
}