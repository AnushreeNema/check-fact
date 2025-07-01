function checkClaim() {
  const claim = document.getElementById("claimInput").value;
  const resultBox = document.getElementById("result");

  resultBox.innerHTML = "checking...";
  resultBox.className = "checking";
}
