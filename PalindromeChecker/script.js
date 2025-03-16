function palindrom(input) {
  const res = input === [...input].reverse().join("");
  alert(res);
}
const check = () => {
  const input = document.querySelector("#input").value;
  console.log(input);

  palindrom(input);
};
