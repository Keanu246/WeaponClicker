function changeNotation(){ 
  if(notationScientfic){ 
    notationScientfic = false; 
    document.getElementById("scientific").innerHTML = "Change Notation to Scientific"; 
  } 
  else{ 
    notationScientfic = true; 
    document.getElementById("scientific").innerHTML = "Change Notation to Normal"; 
  } 
}

function numberFormat(){
  if(notationScientfic){ 
        document.getElementById("bullets").innerHTML = numberformat.format(Math.floor(click.bullets*Math.pow(click.clickStr,click.level)),{format: 'scientific'}); 
    } 
    else{ 
        document.getElementById("bulletspersec").innerHTML = numberformat.format(Math.floor(click.bullets*Math.pow(click.clickStr,click.level))); 
    } 
    document.getElementById("bullets").innerHTML = click.level; 
  } 
} 
