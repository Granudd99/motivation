document.addEventListener("DOMContentLoaded", () => {
  const resDiv = document.getElementById("result");
  const resBtn = document.getElementById("getData");
  const counterP = document.getElementById("counterP");

  resBtn.addEventListener("click", () => {
    getQute();
  });

  window.onload = () => {
    getQute();
  };

  function getQute() {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => {
        return response.json();
      })
      .then((adviceData) => {
        const adviceObj = adviceData.slip;
        console.log(adviceObj);
        resDiv.innerHTML = `<p>${adviceObj.advice}</p>`;
        counterP.innerHTML = `<span style="color: #a638f6" > Advice #${adviceObj.id}</span>`;
      })
      .catch((error) => {
        console.log(error);
      });
  }
});
