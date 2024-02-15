

function calculateRhombos(){

  const Base = getInputsValueById('rhambos-d1');
  console.log(Base);

  const Rheight = getInputsValueById('rombos-height');
  console.log(Rheight);

  const areaOfRhombos = .5 * Base * Rheight;
  console.log(areaOfRhombos);

  setInnerTextById('rombos-area',areaOfRhombos);

}


function getInputsValueById(inputFieldId){
  const inputField = document.getElementById(inputFieldId);
  const inputValueText = inputField.value;
  const inputText = parseFloat(inputValueText);
  // console.log(inputText);
  return inputText;
}

function setInnerTextById(elementId ,area){
  const element =document.getElementById(elementId);
  element.innerText = area;

}