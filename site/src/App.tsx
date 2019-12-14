import React from 'react';
import Navbar from './components/navbar/navbar.view';
import Slideshow from './components/slideshow/slideshow.view';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar/>
      <Slideshow/>
    </div>
  );
}

export default App;
