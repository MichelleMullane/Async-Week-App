import React, { useState, useRef, useEffect } from 'react';
// Anime js:
import anime from 'animejs/lib/anime.es.js';

const Home = () => {
  const animation = useRef(null);
  const ref = useRef(null);

  useEffect(() => {
    const textWrapper = ref.current;
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );
    console.log(textWrapper);

    animation.current = anime
      .timeline({ loop: true })
      .add({
        targets: '.ml2 .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: 'easeOutExpo',
        duration: 950,
        delay: (el, i) => 70 * i,
      })
      .add({
        targets: '.ml2',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000,
      });
  }, []);

  return (
    <div>
      <h1>Com Pear Home Page</h1>
      <img src="https://images.unsplash.com/photo-1615484477778-ca3b77940c25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" />
      <div id="container">
        <h2 ref={ref} className="ml2">
          Welcome to Com Pear
        </h2>
      </div>
    </div>
  );
};

export default Home;
