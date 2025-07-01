function checkClaim() {
  const claim = document.getElementById("claimInput").value;
  const resultBox = document.getElementById("result");

  console.log(claim);

  if (!claim.trim()) {
    resultBox.className = "error";
    resultBox.style.display = "block";
    resultBox.innerHTML = "Please enter a claim first.";
    return;
  }

  resultBox.innerHTML = "Checking...";
  resultBox.className = "checking";
  resultBox.style.display = "block";

  fetch("http://localhost:8000/fact-check", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ claim }),
  })
    .then((res) => res.json())
    .then((data) => {
      resultBox.className = "result-box";
      resultBox.innerHTML = `
          <div class="verdict"><strong>Verdict:</strong> ${data.verdict}</div>
          <div class="reason"><strong>Reason:</strong> ${data.reason}</div>
          <div class="source"><strong>Source:</strong> ${data.source}</div>
        `;
      resultBox.scrollIntoView({ behavior: "smooth" });
    })
    .catch((err) => {
      resultBox.className = "error";
      resultBox.innerHTML =
        "Sorry, there was an error verifying the fact. Please try again later.";
      console.error(err);
    });
}

document.getElementById("claimInput").addEventListener("input", () => {
  document.getElementById("result").style.display = "none";
});
