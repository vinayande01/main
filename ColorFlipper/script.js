const setColor = (color) => {
  document.body.style.backgroundColor = `${color}`;
};

const randomColor = () => {
  //   const color = Math.trunc(Math.random() * 0xffffff)
  //     .toString(16)
  //     .padStart(6, "0");
  //   document.body.style.backgroundColor = "#" + `${color}`;
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  document.body.style.backgroundColor = `rgb(${red} ,${green},${blue})`;
};
