const h2El = document.getElementById('time');
import laikasDabar from './time.js';

export const printToh2 = () => {
  const laikas = laikasDabar();

  h2El.textContent = laikas;
};
