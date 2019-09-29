function valueSet(){ 
  if(notationScientfic){ 
      document.getElementById("value").innerHTML = numberformat.format(value, {format: 'scientific'}) 
  } 
  else{ 
      document.getElementById("value").innerHTML = numberformat.format(value); 
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



