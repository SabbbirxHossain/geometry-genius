function calculateEllipseArea(){
  const majorRadious = getelementById('ellipse-major-radious');
  const minorRadious = getelementById('ellipse-minor-radious');

  const areaOfEllipse = 3.14 * majorRadious *minorRadious;
  
  setInnertextbyid('areaOfEllipseshow',areaOfEllipse);
}