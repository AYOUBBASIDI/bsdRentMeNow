function berguerMenu(menu) {
    menu.classList.toggle('open');
    }
    
let prix;
    
    function getStarted() {
        document.getElementById("steps").style.display = "none";
        document.getElementById("hed").style.display = "none";
        document.getElementById("hed1").style.display = "block";
        document.getElementById("demo").style.display = "none";
        document.getElementById("demo1").style.display = "block";
        document.getElementById("demo2").style.display = "block";
        document.getElementById("demo3").style.display = "block";
        document.getElementById("demo4").style.display = "block";
        document.getElementById("demo5").style.display = "block";
        document.getElementById("demo6").style.display = "block";
        document.getElementById("demo7").style.display = "block";
      }
      function moto(){
        document.getElementById("hed1").style.display = "none";
        document.getElementById("hed2").style.display = "block";
        document.getElementById("demo8").style.display = "block";
        document.getElementById("demo9").style.display = "block";
        document.getElementById("demo1").style.display = "none";
        document.getElementById("demo2").style.display = "none";
        document.getElementById("demo3").style.display = "none";
        document.getElementById("demo4").style.display = "none";
        document.getElementById("demo5").style.display = "none";
        document.getElementById("demo6").style.display = "none";
        document.getElementById("demo7").style.display = "none";
      }
      function citadine(){
        document.getElementById("hed1").style.display = "none";
        document.getElementById("hed2").style.display = "block";
        document.getElementById("demo10").style.display = "block";
        document.getElementById("demo11").style.display = "block";
        document.getElementById("demo12").style.display = "block";
        document.getElementById("demo13").style.display = "block";
        document.getElementById("demo1").style.display = "none";
        document.getElementById("demo2").style.display = "none";
        document.getElementById("demo3").style.display = "none";
        document.getElementById("demo4").style.display = "none";
        document.getElementById("demo5").style.display = "none";
        document.getElementById("demo6").style.display = "none";
        document.getElementById("demo7").style.display = "none";
      }
      function compact(){
        document.getElementById("hed1").style.display = "none";
        document.getElementById("hed2").style.display = "block";
        document.getElementById("demo14").style.display = "block";
        document.getElementById("demo15").style.display = "block";
        document.getElementById("demo16").style.display = "block";
        document.getElementById("demo1").style.display = "none";
        document.getElementById("demo2").style.display = "none";
        document.getElementById("demo3").style.display = "none";
        document.getElementById("demo4").style.display = "none";
        document.getElementById("demo5").style.display = "none";
        document.getElementById("demo6").style.display = "none";
        document.getElementById("demo7").style.display = "none";
      }
      function berline(){
        document.getElementById("hed1").style.display = "none";
        document.getElementById("hed2").style.display = "block";
        document.getElementById("demo17").style.display = "block";
        document.getElementById("demo18").style.display = "block";
        document.getElementById("demo19").style.display = "block";
        document.getElementById("demo1").style.display = "none";
        document.getElementById("demo2").style.display = "none";
        document.getElementById("demo3").style.display = "none";
        document.getElementById("demo4").style.display = "none";
        document.getElementById("demo5").style.display = "none";
        document.getElementById("demo6").style.display = "none";
        document.getElementById("demo7").style.display = "none";
      }
      function enginChantier(){
        document.getElementById("hed1").style.display = "none";
        document.getElementById("hed2").style.display = "block";
        document.getElementById("demo20").style.display = "block";
        document.getElementById("demo21").style.display = "block";
        document.getElementById("demo1").style.display = "none";
        document.getElementById("demo2").style.display = "none";
        document.getElementById("demo3").style.display = "none";
        document.getElementById("demo4").style.display = "none";
        document.getElementById("demo5").style.display = "none";
        document.getElementById("demo6").style.display = "none";
        document.getElementById("demo7").style.display = "none";
      }
      // 1
      function essM(){
        document.getElementById("hed2").style.display = "none";
        document.getElementById("demo8").style.display = "none";
        document.getElementById("demo9").style.display = "none";
        document.getElementById("formuleF").style.display = "block";
        prix = 10;
        prix += prix*14/100;
        choice = "Moto >> Essance";
      }
      function elecM(){
        document.getElementById("hed2").style.display = "none";
        document.getElementById("demo8").style.display = "none";
        document.getElementById("demo9").style.display = "none";
        document.getElementById("formuleF").style.display = "block";
        prix = 10;
        prix += prix*5/100;
        choice = "Moto >> Electrique";
      }
    // 2
      function essCi(){
        document.getElementById("hed2").style.display = "none";
        document.getElementById("demo10").style.display = "none";
        document.getElementById("demo11").style.display = "none";
        document.getElementById("demo12").style.display = "none";
        document.getElementById("demo13").style.display = "none";
        document.getElementById("formuleF").style.display = "block";
        prix = 12;
        prix += prix*14/100;
        choice = "Citadine >> Manuelle >> Essance";
      }
      function elecCi(){
        document.getElementById("hed2").style.display = "none";
        document.getElementById("demo10").style.display = "none";
        document.getElementById("demo11").style.display = "none";
        document.getElementById("demo12").style.display = "none";
        document.getElementById("demo13").style.display = "none";
        document.getElementById("formuleF").style.display = "block";
        prix = 12;
        prix += prix*5/100;
        choice = "Citadine >> Manuelle >> Electrique";
      }
      function diesCi(){
        document.getElementById("hed2").style.display = "none";
        document.getElementById("demo10").style.display = "none";
        document.getElementById("demo11").style.display = "none";
        document.getElementById("demo12").style.display = "none";
        document.getElementById("demo13").style.display = "none";
        document.getElementById("formuleF").style.display = "block";
        prix = 12;
        prix += prix*21/100;
        choice = "Citadine >> Manuelle >> Diesel";
      }  
      function hybriCi(){
        document.getElementById("hed2").style.display = "none";
        document.getElementById("demo10").style.display = "none";
        document.getElementById("demo11").style.display = "none";
        document.getElementById("demo12").style.display = "none";
        document.getElementById("demo13").style.display = "none";
        document.getElementById("formuleF").style.display = "block";
        prix = 12;
        prix += prix*9/100;
        choice = "Citadine >> Manuelle >> Hybride";
      }
      // 3
      function essCo(){
        document.getElementById("hed2").style.display = "none";
        document.getElementById("demo14").style.display = "none";
        document.getElementById("demo15").style.display = "none";
        document.getElementById("demo16").style.display = "none";
        document.getElementById("formuleF").style.display = "block";
        prix = 14;
        prix += prix*14/100;
        choice = "Compact >> Manuelle >> Essance";
      }
      function hybriCo(){
        document.getElementById("hed2").style.display = "none";
        document.getElementById("demo14").style.display = "none";
        document.getElementById("demo15").style.display = "none";
        document.getElementById("demo16").style.display = "none";
        document.getElementById("formuleF").style.display = "block";
        prix = 14;
        prix += prix*9/100;
        choice = "Compact >> Manuelle >> Hebride";
      }
      function diesCo(){
        document.getElementById("hed2").style.display = "none";
        document.getElementById("demo14").style.display = "none";
        document.getElementById("demo15").style.display = "none";
        document.getElementById("demo16").style.display = "none";
        document.getElementById("formuleF").style.display = "block";
        prix = 14;
        prix += prix*21/100;
        choice = "Compact >> Manuelle >> Diesel";
      }
      // 4
      function essB(){
        document.getElementById("hed2").style.display = "none";
        document.getElementById("demo17").style.display = "none";
        document.getElementById("demo18").style.display = "none";
        document.getElementById("demo19").style.display = "none";
        document.getElementById("formuleF").style.display = "block";
        prix = 20;
        prix += prix*14/100;
        prix += prix*19/100;
        choice = "Berline >> Automatique >> Essence";
      }
        function diesB(){
          document.getElementById("hed2").style.display = "none";
          document.getElementById("demo17").style.display = "none";
          document.getElementById("demo18").style.display = "none";
          document.getElementById("demo19").style.display = "none";
          document.getElementById("formuleF").style.display = "block";
          prix = 20;
          prix += prix*21/100;
          prix += prix*19/100;
          choice = "Berline >> Automatique >> Diesel";
      }
      function hybriB(){
        document.getElementById("hed2").style.display = "none";
        document.getElementById("demo17").style.display = "none";
        document.getElementById("demo18").style.display = "none";
        document.getElementById("demo19").style.display = "none";
        document.getElementById("formuleF").style.display = "block";
        prix = 20;
        prix += prix*9/100 ;
        prix += prix*19/100;
        choice = "Berline >> Automatique >> Hybride";
      }
      // 5
      function essE(){
        document.getElementById("hed2").style.display = "none";
        document.getElementById("demo20").style.display = "none";
        document.getElementById("demo21").style.display = "none";
        document.getElementById("formuleF").style.display = "block";
        prix = 900;
        prix += prix*14/100;
        choice = "Engin de chantier >> Manuelle >> Essence";
      }
      function diesE(){
        document.getElementById("hed2").style.display = "none";
        document.getElementById("demo20").style.display = "none";
        document.getElementById("demo21").style.display = "none";
        document.getElementById("formuleF").style.display = "block";
        prix = 900;
        prix += prix*21/100 ;
        choice = "Engin de chantier >> Manuelle >> Diesel";
      }
      // 6
      function utilitaire(){
        document.getElementById("hed1").style.display = "none";
        document.getElementById("formuleF").style.display = "block";
        document.getElementById("demo1").style.display = "none";
        document.getElementById("demo2").style.display = "none";
        document.getElementById("demo3").style.display = "none";
        document.getElementById("demo4").style.display = "none";
        document.getElementById("demo5").style.display = "none";
        document.getElementById("demo6").style.display = "none";
        document.getElementById("demo7").style.display = "none";
        prix = 16;
        prix += prix*21/100 ;
        choice = "Utilitaire >> Manuelle >> Diesel";
      }
      // 7
      function camion(){
        document.getElementById("hed1").style.display = "none";
        document.getElementById("formuleF").style.display = "block";
        document.getElementById("demo1").style.display = "none";
        document.getElementById("demo2").style.display = "none";
        document.getElementById("demo3").style.display = "none";
        document.getElementById("demo4").style.display = "none";
        document.getElementById("demo5").style.display = "none";
        document.getElementById("demo6").style.display = "none";
        document.getElementById("demo7").style.display = "none";
        prix = 250;
        prix += prix*21/100;
        prix += prix*19/100;
        choice = "Camion >> Automatique >> Diesel";
      }
var user = document.getElementById("name").value;
var form = document.getElementById("formuleF");
var jour = document.getElementById("jour").value;




function showInput() {
  document.getElementById("result").style.display="block";
  document.getElementById("formuleF").style.display="none";
          document.getElementById('display').innerHTML = 
          document.getElementById("name").value;
          document.getElementById('display2').innerHTML = 
          document.getElementById("email").value;
          document.getElementById('display3').innerHTML = 
          document.getElementById("phone").value;
          document.getElementById('display5').innerHTML = document.getElementById("jour").value;
          
          document.getElementById('display4').innerHTML = choice;
          
          document.getElementById('display6').innerHTML = document.getElementById("jour").value*prix +"€";
          
  }
  function handleForm(event) {
   event.preventDefault();
}
form.addEventListener('submit', handleForm);


function refreshPage(){
  window.location.reload();}
 