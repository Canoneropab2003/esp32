const esp32IP = "http://192.168.100.176"; // your ESP32 IP

async function toggleLED(state) {
  try {
    const res = await fetch(`${esp32IP}/${state}`);
    document.getElementById("status").textContent = `LED Status: ${state.toUpperCase()}`;
  } catch (err) {
    document.getElementById("status").textContent = "⚠️ Error connecting to ESP32!";
  }
}

// Auto update LED status every 2 seconds
async function updateStatus() {
  try {
    const res = await fetch(`${esp32IP}/status`);
    const text = await res.text();
    document.getElementById("status").textContent = `LED Status: ${text}`;
  } catch (err) {
    document.getElementById("status").textContent = "⚠️ ESP32 not reachable!";
  }
}

setInterval(updateStatus, 2000);
