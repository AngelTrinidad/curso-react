import React from 'react';

function App() {

  const handleClick = type => {
    let elementToHide;
    let elementToShow;
    if(type === 'boy'){
      elementToHide = document.getElementById('container-girls');
      elementToShow = document.getElementById('container-boys');
    }else{
      elementToHide = document.getElementById('container-boys');
      elementToShow = document.getElementById('container-girls');
    }
    
    hideElement(elementToHide);
    fullWidth(elementToShow);
    
  }

  const hideElement = e => {
    e.classList.add('width-zero');
  }

  const fullWidth = e => {
    e.classList.add('animate-full-width');
  }

  return (
    <div className="full-container">
      <div 
        id="container-boys" 
        className="container-boys bg-boys"
        onClick={() => handleClick('boy')}
      >
        <div className="text-white text-center pointer">
          Hombres
        </div>
      </div>
      <div 
        id="container-girls" 
        className="container-girls bg-girls"
        onClick={() => handleClick('girl')}
      >
        <div href="#" className="text-white text-center pointer">
          Mujeres
        </div>
      </div>
    </div>
  );
}

export default App;
