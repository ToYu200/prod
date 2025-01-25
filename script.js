// const myButton = document.getElementById('myButton');
// function hide(){myButton.style.visibility = 'hidden';};

// myButton.onclick = hide;

// function newTask(){

// }
let result = []
function reader(){
    var input = document.querySelector('input').value
    let  = result.push(input)
    console.log(result)
}

function cleanSearch(){
    document.querySelector('input').value = ''
}

function createTask(){

}
let li = document.createElement('li');
li.innerHTML += '<div>Hi</div>';

// чтобы сниппент что-нибудь отобразил
document.body.appendChild(li);

document.addEventListener( 'keyup', event => {
    if( event.code === 'Enter' ){
        reader();
        cleanSearch();  
    };
  });
