function calculatePentagonArea(){
  // console.log('pentagon gon gon');
  const perimeter =getelementById('pentagon-perimeter');
  const apotheme =getelementById('pentagon-apo');

  // console.log(perimeter,apotheme);
  const areaOfPantagon = .5 * perimeter * apotheme;

  setInnertextbyid('pentagon-area',areaOfPantagon);

}

function getelementById(inputOfinputs){
  const inputfield = document.getElementById(inputOfinputs);
  const inputtext = inputfield.value;
  const values = parseFloat(inputtext);
  return values;
}

function setInnertextbyid(element1,area){
  const elementt = document.getElementById(element1);
  elementt.innerText = area;
}

