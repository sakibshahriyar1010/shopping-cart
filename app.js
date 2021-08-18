function updateProdactNumber(prodact,price,Isincresing) {
    const prodactInput = document.getElementById(prodact + '-number');
    let prodactNumber = prodactInput.value;
    if (Isincresing == true) {
        prodactNumber = parseInt(prodactNumber) + 1;
    } 
    else if (prodactNumber > 0) {
        prodactNumber = parseInt(prodactNumber) - 1;
    };
    prodactInput.value = prodactNumber;

    const prodactTotal = document.getElementById(prodact + '-total');
    prodactTotal.innerText =  prodactNumber * price;
    calculateTotal()
    
    
};

function getInputValue(prodact){
    const prodactInput = document.getElementById(prodact + '-number');
    const prodactNumber = parseInt( prodactInput.value);
    return prodactNumber;
    
}

function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tex = subTotal / 10;
    const totalprice = subTotal + tex;
    
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('text-amount').innerText = tex;
    document.getElementById('total-price').innerText = totalprice;
   

}

function colseButton(prodact){
    document.getElementById(prodact +'-number').value = 0;
    document.getElementById(prodact +'-total').innerText = 0;

}



document.getElementById('phone-plus').addEventListener('click', function(){
   updateProdactNumber('phone', 1219, true)
})
document.getElementById('phone-minus').addEventListener('click', function(){
   updateProdactNumber('phone', 1219, false)
})


document.getElementById('case-plus').addEventListener('click', function () {
    updateProdactNumber('case', 59,true)

});

document.getElementById('case-minus').addEventListener('click', function () {
    updateProdactNumber('case',59, false)

});

document.getElementById('phone-close').addEventListener('click',function(){
    colseButton('phone');
});
document.getElementById('case-close').addEventListener('click',function(){
    colseButton('case');
});
