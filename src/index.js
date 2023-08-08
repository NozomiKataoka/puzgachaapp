import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const GACHA_ITEMS = [
  { name: "Normal Dragon", rarity: "Normal", probability: 0.6 },
  { name: "Rare Dragon", rarity: "Rare", probability: 0.3 },
  { name: "Super Rare Dragon", rarity: "Super Rare", probability: 0.09 },
  { name: "Ultra Rare Dragon", rarity: "Ultra Rare", probability: 0.01 },
];

function drawGacha() {
  const rand = Math.random();
  let sum = 0;

  for (const item of GACHA_ITEMS) {
    sum += item.probability;
    if (rand < sum) return item;
  }
}
