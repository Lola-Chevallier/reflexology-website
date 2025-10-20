document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    const rejectBtn = document.getElementById("reject-cookies");

    // Vérifie si l’utilisateur a déjà fait un choix
    ''''if (localStorage.getItem("cookiesChoice")) {
       banner.style.display = "none";
    }

    // Clique sur "Accepter"
    acceptBtn.addEventListener("click", () => {
        localStorage.setItem("cookiesChoice", "accepted");
        banner.style.display = "none";
    });

    // Clique sur "Refuser"
    rejectBtn.addEventListener("click", () => {
        localStorage.setItem("cookiesChoice", "rejected");
        banner.style.display = "none";
    });
});