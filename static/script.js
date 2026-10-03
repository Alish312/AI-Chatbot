const messageInput = document.getElementById("message");
const sendButton = document.getElementById("send-btn");
const chatBox = document.getElementById("chat-box");

sendButton.addEventListener("click", function () {
  const message = messageInput.value;

  if (message.trim() === "") {
    return;
  }

  chatBox.innerHTML += `<p class="user-message">You: ${message}</p>`;
  chatBox.innerHTML += `<p class="bot-message" id="loading">Bot: Thinking...</p>`;

  fetch("/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: message }),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("loading").remove();

      chatBox.innerHTML += `<div class="bot-message">${marked.parse(data.response)}</div>`;
      chatBox.scrollTop = chatBox.scrollHeight;
      // console.log(data.response);
    })
    .catch((error) => {
      document.getElementById("loading").remove();

      chatBox.innerHTML += `<p class="bot-message">Bot: Sorry, something went wrong.</p>`;

      // console.error(error);
    });

  messageInput.value = "";
});

messageInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    sendButton.click();
  }
});
