const digits = document.querySelector('ul.digit-btn');
const screen = document.querySelector('div.screen');
const del = document.querySelector('ul.misc-button');
const operations = document.querySelector('ul.operation-btn');
// load all event listeners
loadEventListeners();

function loadEventListeners(){
    digits.addEventListener('click', addDigit);

    del.addEventListener('click', deleteClr);

    operations.addEventListener('click', doOperation);
}

function addDigit(e){
    if(e.target.textContent<=9 && e.target.textContent>=0 && screen.textContent.length <=13){
    if(screen.textContent == 0 && screen.textContent.indexOf('.')=== -1){
        screen.textContent = e.target.textContent
    }
    else{
        screen.textContent += e.target.textContent;
    }
}

// Add decimal
if(e.target.textContent =='.' && screen.textContent.indexOf('.')=== -1){
    screen.textContent += e.target.textContent
}

}

// initialise storage
let a = 0

// operation variable
b = 0
function deleteClr(e){
    if(e.target.textContent.toLowerCase().trim() == 'ac'){
        console.log(e.target)
        screen.textContent = 0
    }

    if(e.target.textContent == 'C'){
        screen.textContent = 0
        a = 0
        b = 0
    }


    if(e.target.textContent == 'DEL'){
        screen.textContent = screen.textContent.slice(0,-1)
        if(screen.textContent==''){
            screen.textContent = 0
        }
    }
}


function doOperation(e){
    // if(e.target.tagName == 'LI'){
    //     a = parseFloat(screen.textContent);
    //     console.log(a);
    //     return a;
    // }

    // multiply
    if(e.target.className=='times'){
        if(a==0 || b == 0){
            a = parseFloat(screen.textContent);
            console.log(a);
            screen.textContent = 0
        }
        else{
            a *= parseFloat(screen.textContent)
            screen.textContent = '0'
            console.log(a)
        }
        b =1;
        return a, b;
    }

    // divide
    if(e.target.className=='divide'){
        if(a==0 || b == 0){
            a = parseFloat(screen.textContent);
            console.log(a);
            screen.textContent = 0
        }
        else{
            a /= parseFloat(screen.textContent)
            screen.textContent = '0'
            console.log(a)
        }
        b =2;
        return a, b;
    }


    // plus
    if(e.target.className=='plus'){
        if(a==0 || b == 0){
            a = parseFloat(screen.textContent);
            console.log(a);
            screen.textContent = 0
        }
        else{
            a += parseFloat(screen.textContent)
            screen.textContent = '0'
            console.log(a)
        }
        b = 3;
        return a, b;
    }

    // minus
    if(e.target.className=='minus'){
        if(a==0 || b == 0){
            a = parseFloat(screen.textContent);
            console.log(a);
            screen.textContent = 0
        }
        else{
            a -= parseFloat(screen.textContent)
            screen.textContent = '0'
            console.log(a)
        }
        b =4;
        return a, b;
    }

    // equals
    if(e.target.className=='equals'){
    if(b == 0){
        screen.textContent = a;
    }
    // multiply
    else if (b==1){
        screen.textContent= a*parseFloat(screen.textContent);
        a = parseFloat(screen.textContent);
        b=0
    }
    // divide
    else if (b==2){
        screen.textContent= a/parseFloat(screen.textContent);
        a = parseFloat(screen.textContent);
        b=0
    }
    // plus
    else if (b==3){
        screen.textContent= a+parseFloat(screen.textContent);
        a = parseFloat(screen.textContent);
        b=0
    }
    // minus
    else if (b==4){
        screen.textContent= a-parseFloat(screen.textContent);
        a = parseFloat(screen.textContent);
        b=0
    }

    }

}