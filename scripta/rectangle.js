function calculateRectangleArea(){
  // get width
  const rectangleWidthInput = document.getElementById('rectangle-width');
  const rectangleWidth = rectangleWidthInput.value;
  const width = parseFloat(rectangleWidth);

  // get length
  const rectangleLengthInput = document.getElementById('rectangle-length');
  const rectangleLength = rectangleLengthInput.value;
  const length = parseFloat(rectangleLength);

  // apply formula
  const areaOfRectangle = width * length;

  // display rectangle area
  // 1.first get the area input 
  const rectangleAreaSpan = document.getElementById('rectangle-area');
  rectangleAreaSpan.innerText = areaOfRectangle;




}