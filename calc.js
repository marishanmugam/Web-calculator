const display = (val) =>{
     document.querySelector('#result').value += val;
}
const calc = () =>{
    let p = document.querySelector('#result').value
    
    // this eval() methos process the expressoon and return result 
    let q = eval(p);
    document.querySelector('#result').value = q;

}

const clr = () => {
    document.querySelector('#result').value ='';
}