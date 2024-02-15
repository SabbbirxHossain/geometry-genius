
function calculateTriangleArea(){
  const triangleBaseInput = document.getElementById('triangle-base');
  const triangleBaseText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseText);
  console.log(base);

  const triangleHeightInput = document.getElementById('triangle-height');
  const triangleHeightText = triangleHeightInput.value;
  const height = parseFloat(triangleHeightText);
  console.log(height);

  const area = .5 * base * height;

  // display triangle area
  const triangleAreaSpan = document.getElementById('triangle-area');
  triangleAreaSpan.innerText = area;
}


