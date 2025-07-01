function checkClaim() {
    const claim = document.getElementById("claimInput").value;
    const resultBox = document.getElementById("result");
  
    resultBox.innerHTML = "Checking...";
    resultBox.className = "checking";
  
    fetch("http://localhost:8000/fact-check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ claim }),
    })
      .then(res => res.json())
      .then(data => {
        resultBox.className = "result-box";
        resultBox.innerHTML = `
          <div class="verdict"><strong>Conclusion:</strong> ${data.verdict}</div>
          <div class="reason"><strong>Reason:</strong> ${data.reason}</div>
          <div class="source"><strong>Source:</strong> ${data.source}</div>
        `;
      })