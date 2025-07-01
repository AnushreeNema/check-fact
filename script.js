function checkClaim() {
  const claim = document.getElementById("claimInput").value;
  const resultBox = document.getElementById("result");

  resultBox.innerHTML = "checking...";
  resultBox.className = "checking";
}
fetch("http://localhost:8000/fact-check", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ claim }),
});
