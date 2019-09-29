function bulletSet(){ 
  if(notationScientfic){ 
      document.getElementById("bullets").innerHTML = numberformat.format(bullets, {format: 'scientific'}) 
  } 
  else{ 
      document.getElementById("bullets").innerHTML = numberformat.format(bullets); 
  } 
} 
function changeNotation(){ 
  if(notationScientfic){ 
    notationScientfic = false; 
    document.getElementById("notation").innerHTML = "Change Notation to Scientific"; 
  } 
  else{ 
    notationScientfic = true; 
    document.getElementById("notation").innerHTML = "Change Notation to Standard"; 
  } 
}

function 


