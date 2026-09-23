const zone = document.getElementById("zone");
const day = document.getElementById("day");
const hour = document.getElementById("hour");
const current = document.getElementById("current");
const hourText = document.getElementById("hourText");
const occText = document.getElementById("occText");

hour.addEventListener("input", () => hourText.textContent = String(hour.value).padStart(2,"0")+":00");
current.addEventListener("input", () => occText.textContent = current.value+"%");

function predict() {
  let value = Number(current.value);
  const h = Number(hour.value);

  // Demo ML-style scoring logic.
  if (h >= 8 && h <= 10) value += 12;
  if (h >= 17 && h <= 20) value += 20;
  if (day.value === "Saturday" || day.value === "Sunday") value -= 10;
  if (zone.value === "Zone B") value -= 5;
  if (zone.value === "Zone C") value += 4;

  value = Math.max(5, Math.min(95, Math.round(value)));
  const free = 100 - value;

  let recommended = "Zone A";
  if (value > 75) recommended = "Zone B";
  if (value > 88) recommended = "Zone C";

  document.getElementById("predicted").textContent = value + "%";
  document.getElementById("free").textContent = free + "%";
  document.getElementById("zoneResult").textContent = recommended;
  document.getElementById("meterFill").style.width = value + "%";
  document.getElementById("message").textContent =
    value >= 85 ? "High demand predicted. Try the recommended zone." :
    value >= 65 ? "Moderate demand predicted. Some spaces should be available." :
    "Good availability predicted for the selected time.";

  renderSlots(value);
}

function renderSlots(occupancy) {
  const slots = document.getElementById("slots");
  slots.innerHTML = "";
  const busyCount = Math.round(occupancy / 100 * 18);
  for (let i=1;i<=18;i++) {
    const div = document.createElement("div");
    div.className = "slot " + (i <= busyCount ? "busy" : "free");
    div.textContent = "P" + String(i).padStart(2,"0");
    slots.appendChild(div);
  }
}

document.getElementById("predict").addEventListener("click", predict);
predict();
