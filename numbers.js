var scientificNotation = false;

function numberformat(){
  if(scientificNotation){
    scientificNotation = false;
    document.getElementById("notation").innerHTML = "Change Notation to Scientific"; 
  } 
  else{ 
    scientificNotation = true; 
    document.getElementById("notation").innerHTML = "Change Notation to Standard"; 
  } 
}
