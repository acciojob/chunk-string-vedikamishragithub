function stringChop(str, size) {
    var element = [];
    var temp = '';
    
    for(let i = 0; i < str.length; i++){
        temp += str[i];
        if(temp.length == size){
            element.push(temp);
            temp = '';
        }
    }
    
    if(temp !== '') element.push(temp);
    
    return element;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));

