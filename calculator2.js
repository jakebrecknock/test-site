
function calculateBathroom() {
  let labor = parseFloat(document.getElementById("bathroomType").value);
  let total = labor +
    (parseFloat(document.getElementById("bathHerringbone").value) || 0) * 18 +
    (parseFloat(document.getElementById("bathGlazed").value) || 0) * 6 +
    (parseFloat(document.getElementById("bathFloorTile").value) || 0) * 4 +
    (parseFloat(document.getElementById("bathSingleVanity").value) || 0) * 300 +
    (parseFloat(document.getElementById("bathDoubleVanity").value) || 0) * 2000 +
    (parseFloat(document.getElementById("bathFaucets").value) || 0) * 100 +
    (parseFloat(document.getElementById("bathGFCI").value) || 0) * 75 +
    (parseFloat(document.getElementById("bathHeated").value) || 0) * 9.5;
  document.getElementById("bathroomTotal").textContent = total.toFixed(2);
}

function calculateKitchen() {
  let labor = parseFloat(document.getElementById("kitchenType").value);
  let total = labor +
    (parseFloat(document.getElementById("kitchenQuartz").value) || 0) * 120 +
    (parseFloat(document.getElementById("kitchenGranite").value) || 0) * 110 +
    (parseFloat(document.getElementById("kitchenStockCabinet").value) || 0) * 300 +
    (parseFloat(document.getElementById("kitchenCustomCabinet").value) || 0) * 900 +
    (parseFloat(document.getElementById("kitchenDishwasher").value) || 0) * 800 +
    (parseFloat(document.getElementById("kitchenHood").value) || 0) * 300;
  document.getElementById("kitchenTotal").textContent = total.toFixed(2);
}

function calculateFlooring() {
  let labor = parseFloat(document.getElementById("flooringType").value);
  let total = labor +
    (parseFloat(document.getElementById("flooringHardwood").value) || 0) * 10 +
    (parseFloat(document.getElementById("flooringLaminate").value) || 0) * 4.5 +
    (parseFloat(document.getElementById("flooringLVP").value) || 0) * 6;
  document.getElementById("flooringTotal").textContent = total.toFixed(2);
}
