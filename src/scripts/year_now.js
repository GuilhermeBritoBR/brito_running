function year(){
    const anoAtual = new Date().getFullYear();
    var caixa = document.getElementById('data_id');
    
    caixa.innerHTML ='BRITO.RUNNING | ' + anoAtual;
    }
    
     window.onload = year;