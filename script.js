document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.getElementById("wrapper");
    const actionBtn = document.getElementById("action-btn");
    const resetBtn = document.getElementById("reset-btn");
    const doors = document.getElementById("main-doors");
    const music = document.getElementById("bg-music");

    actionBtn.addEventListener("click", () => {
        if (wrapper.classList.contains("paso-1")) {
            if (music) {
                music.currentTime = 0; // Reinicia la canción desde el principio solo al abrir
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

    // LÓGICA REFORZADA: Regresar al Paso 2 (Centro) manteniendo la música
    if (resetBtn) {
        resetBtn.addEventListener("click", (e) => {
            e.preventDefault(); // Evita conflictos en el evento del clic
            
            wrapper.className = "wrapper paso-2"; // Cambia el estado al paso 2
            actionBtn.textContent = "Ver detalles e información"; // Devuelve el texto correspondiente al botón verde
            
            // Forzamos que las puertas frontales permanezcan ocultas al volver atrás
            if (doors) doors.style.display = "none"; 
        });
    }
});
