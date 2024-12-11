document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log("Nama: " + name);
    console.log("Email: " + email);
    console.log("Pesan: " + message);

    alert("Pesan berhasil dikirim!");

    document.getElementById("contact-form").reset();
  });
