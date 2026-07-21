function reply(text) {
  const box = document.getElementById("messages");
  box.innerHTML += `<p class="msg">You: ${text}</p>`;

  setTimeout(() => {
    box.innerHTML += `<p class="msg">Unknown: You should not have answered...</p>`;
    box.scrollTop = box.scrollHeight;
  }, 800);
}
