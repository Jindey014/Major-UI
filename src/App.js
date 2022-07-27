import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import './App.css';
const App = () => {
  const slides = [
    {
      image: 'https://picsum.photos/200/200',
      title: 'This is a title',
      description: 'This is the description',

    },
    {
      image: 'https://picsum.photos/300/500',
      title: 'This is second  title',
      description: 'This is second description',
    },
    {
      image: 'https://picsum.photos/400/300',
      title: 'This is third title',
      description: 'This is third description',
    },
    {
      image: 'https://picsum.photos/200/300',
      title: 'This is fourth title',
      description: 'This is fourth description',
    },
    {
      image: 'https://picsum.photos/500/500',
      title: 'This is fifth title',
      description: 'This is fifth description',
    },
    {
      image: 'https://picsum.photos/500/800',
      title: 'This is sixth title',
      description: 'This is sixth description',
    },
    {
      image: 'https://picsum.photos/100/100',
      title: 'This is seventh title',
      description: 'This is seventh description',
    },
  ]
  return (
    <div>
      <Navbar />
      <Header />
      <Slider slides={slides} />
    </div>
  );
}

export default App;
