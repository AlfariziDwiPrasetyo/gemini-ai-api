const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const userMessage = input.value.trim();
  if (!userMessage) return;

  appendMessage("user", userMessage);
  input.value = "";

  // Tambahkan pesan loading dari bot
  const loadingMsg = appendMessage("bot", "Gemini is thinking...");

  try {
    const response = await fetch("http://localhost:3000/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userMessage }),
    });

    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();

    // Ubah pesan loading menjadi balasan dari bot
    updateMessage(loadingMsg, data.reply || "No reply received.");
  } catch (error) {
    updateMessage(loadingMsg, "Oops, something went wrong!");
    console.error("Error fetching bot reply:", error);
  }
});

function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
  return msg;
}

function updateMessage(element, newText) {
  if (element) {
    element.textContent = newText;
  }
}
