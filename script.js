document.addEventListener("DOMContentLoaded", () => {
  const partSelects = document.querySelectorAll(".part-select");
  const resultBox = document.getElementById("result");

  let chosenParts = {};

  function populateParts() {
    for (let category in parts) {
      const select = document.getElementById(category);
      if (!select) continue;

      select.innerHTML = `<option value="">Choose ${category.toUpperCase()}</option>`;
      parts[category].forEach((item, index) => {
        let option = document.createElement("option");
        option.value = index;
        option.textContent = `${item.name} - $${item.price}`;
        select.appendChild(option);
      });
    }
  }

  function calculateBuild() {
    let totalPrice = 0;
    let baseFPS = 0;
    let cpuBoost = 1;

    if (chosenParts.cpu) {
      cpuBoost = chosenParts.cpu.fpsBoost;
      totalPrice += chosenParts.cpu.price;
    }
    if (chosenParts.gpu) {
      baseFPS = chosenParts.gpu.fps;
      totalPrice += chosenParts.gpu.price;
    }

    // add prices of other parts
    ["ram", "storage", "psu", "case", "motherboard", "cooler"].forEach((cat) => {
      if (chosenParts[cat]) totalPrice += chosenParts[cat].price;
    });

    let fpsTable = "";
    if (baseFPS > 0) {
      fpsTable = `<h3>Estimated FPS Per Game</h3><table><tr><th>Game</th><th>FPS</th></tr>`;
      for (let game in games) {
        let fps = Math.round(baseFPS * cpuBoost * games[game]);
        fpsTable += `<tr><td>${game}</td><td>${fps}</td></tr>`;
      }
      fpsTable += "</table>";
    }

    resultBox.innerHTML = `
      <h3>Your Build:</h3>
      <p><strong>Total Price:</strong> $${totalPrice}</p>
      ${fpsTable || "<p>Select CPU + GPU to see FPS</p>"}
    `;
  }

  partSelects.forEach((select) => {
    select.addEventListener("change", (e) => {
      const category = e.target.id;
      const index = e.target.value;
      chosenParts[category] = index !== "" ? parts[category][index] : null;
      calculateBuild();
    });
  });

  populateParts();
});