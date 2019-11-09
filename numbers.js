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

function bulletSet(){ 
  if(scientificNotation){ 
      document.getElementById("bullets").innerHTML = numberformat.format(bullets, {format: 'scientific'}) 
  } 
  else{ 
      document.getElementById("bullets").innerHTML = numberformat.format(bullets); 
  } 
}  
