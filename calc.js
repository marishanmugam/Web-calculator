const display = (val) =>{
     document.querySelector('#result').value += val;
}
const calc = () =>{
    let p = document.querySelector('#result').value
    console.log(p);
    let q = eval(p);
    document.querySelector('#result').value = q;

}

const clr = () => {
    document.querySelector('#result').value ='';
}