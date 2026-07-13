document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.getElementById("wrapper");
    const actionBtn = document.getElementById("action-btn");
    const resetBtn = document.getElementById("reset-btn");
    const doors = document.getElementById("main-doors");
    const music = document.getElementById("bg-music");

    actionBtn.addEventListener("click", () => {
        if (wrapper.classList.contains("paso-1")) {
            if (music) {
                music.currentTime = 0; // Reinicia la canción desde el principio solo la primera vez
                music.play().catch(error => console.log("El navegador bloqueó el audio:", error));
            }

            wrapper.classList.remove("paso-1");
            wrapper.classList.add("paso-2");
            actionBtn.textContent = "Ver detalles e información";
            
            setTimeout(() => {
                if (doors && wrapper.classList.contains("paso-2")) {
                    doors.style.display = "none";
                }
            }, 2200);
            
        } else if (wrapper.classList.contains("paso-2")) {
            if (doors) doors.style.display = "none";
            
            wrapper.classList.remove("paso-2");
            wrapper.classList.add("paso-3");
            actionBtn.textContent = "Finalizar";
            
        } else if (wrapper.classList.contains("paso-3")) {
            if (doors) doors.style.display = "none";
            
            wrapper.classList.remove("paso-3");
            wrapper.classList.add("paso-4");
        }
    });

    // LÓGICA MODIFICADA: Regresar al Paso 2 (Centro) sin apagar la música
    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            wrapper.className = "wrapper paso-2"; // Te devuelve al estado del libro abierto
            actionBtn.textContent = "Ver detalles e información"; // El botón grande recupera su texto del paso 2
            
            // Forzamos que las portadas iniciales sigan ocultas si se regresa en caliente
            if (doors) doors.style.display = "none"; 
        });
    }
});
