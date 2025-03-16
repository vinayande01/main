const quote = document.getElementById("quote");

let quotess = [];
let i = 0;

const reset = () => {
  if (i == q.length) {
    i = 0;
  }
};

async function generateQuote() {
  try {
    const data = await fetch("https://dummyjson.com/quotes");
    const res = await data.json();
    const q = res.quotes;
    quote.innerText = `${q[i].id} .${q[i].quote}`;
    i++;

    reset();
  } catch (error) {
    console.log(error);
  }

  //   fetch("https://dummyjson.com/quotes")
  //     .then((response) => response.json())
  //     .then((response1) => {
  //       const q = response1.quotes;
  //       console.log(q.length);
  //       quote.innerText = `${q[i].quote}`;
  //       i++;

  //   Reset the count
  //       if (i == q.length) {
  //         i = 0;
  //       }
  //   const num = Math.floor(Math.random() * q.length);
  //   quote.innerText = `${q[num].quote}`;
  //     })
  //     .catch((error) => console.error("Error in fetching the data"));
}
