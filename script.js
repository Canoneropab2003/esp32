// ✅ Change this to match your ESP32's IP
const ESP32_IP = "http://192.168.100.176";

// Function to toggle LED ON/OFF
async function toggleLED(state) {
  try {
    const res = await fetch(`${ESP32_IP}/${state}`);
    if (res.ok) {
      document.getElementById("status").textContent = `LED Status: ${state.toUpperCase()}`;
    } else {
      document.getElementById("status").textContent = "ESP32 did not respond!";
    }
  } catch (err) {
    document.getElementById("status").textContent = "⚠️ Error connecting to ESP32!";
  }
}
