let username = "";

document.getElementById("register-button").onclick = function() {
    username = document.getElementById("username").value.trim();

    if (username !== "") {
        document.getElementById("comment-area").style.display = "block";
        document.getElementById("username").disabled = true;
        document.getElementById("register-button").style.display = "none";
    } else {
        alert("Por favor, introduce un nombre de usuario.");
    }
};

document.getElementById("submit-comment").onclick = function() {
    const commentInput = document.getElementById("comment-input");
    const commentText = commentInput.value.trim();

    if (commentText !== "") {
        const commentElement = document.createElement("p");
        commentElement.textContent = username + ": " + commentText;

        // Asignar un color aleatorio al comentario
        const colors = ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#8E44AD"];
        commentElement.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        document.getElementById("comments-list").appendChild(commentElement);
        commentInput.value = "";
    } else {
        alert("Por favor, escribe un comentario.");
    }
};

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.classList.remove('hidden');
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});