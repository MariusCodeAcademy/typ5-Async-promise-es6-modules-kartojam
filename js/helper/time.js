const printTime = function () {
  const now = new Date();
  const time = now.toLocaleTimeString('lt');
  console.log(time);
  return time;
};

export const sayHi = () => {
  console.log('Hi');
};

// numatytatis exportas importuojasi be {}
export default printTime;
