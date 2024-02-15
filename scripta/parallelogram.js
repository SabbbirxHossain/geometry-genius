function calculateParallelogramArea(){
  // get base
  const parallelogramBaseInput = document.getElementById('parallelogram-base');
  const parallelogramBase = parallelogramBaseInput.value;
  const paraBase = parseFloat(parallelogramBase);

  // get height
  const parallelogramHeightInput = document.getElementById('parallelogram-height');
  const parallelogramHeight = parallelogramHeightInput.value;
  const paraHeight = parseFloat(parallelogramHeight);

  const areaOfParallelogram = paraBase * paraHeight;


  // display the area

  const parallelogramSpan =document.getElementById('parallelogram-area');
  parallelogramSpan.innerText = areaOfParallelogram;
}