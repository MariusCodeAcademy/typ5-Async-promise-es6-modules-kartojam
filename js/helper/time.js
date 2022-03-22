const printTime = function () {
  const now = new Date();
  const time = now.toLocaleTimeString('lt');
  console.log(time);
};

// numatytatis exportas importuojasi be {}
export default printTime;
