
document.addEventListener("DOMContentLoaded", function () {

    const pele1 = document.getElementById('pele1');
    const pele2 = document.getElementById('pele2');
    const pele3 = document.getElementById('pele3');
    
    
    const imgBase = document.getElementById('imgbase');

  
    function changeBodyImage(imgnova) {
        imgBase.src = imgnova;

    }

    
  
    pele1.addEventListener('click', function () {
        changeBodyImage('img/pele1.png');
       
    });

    
    pele2.addEventListener('click', function () {
        changeBodyImage('img/pele2.png'); 
        
    });

    
    pele3.addEventListener('click', function () {
        changeBodyImage('img/pele3.png');
        
    
    });
});
