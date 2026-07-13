document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.getElementById("wrapper");
    const actionBtn = document.getElementById("action-btn");
    const doors = document.getElementById("main-doors");
    // 1. Detectamos el elemento de audio
    const music = document.getElementById("bg-music");

    actionBtn.addEventListener("click", () => {
        if (wrapper.classList.contains("paso-1")) {
            // 2. Intentamos reproducir la música en el primer clic
            if (music) {
                music.play().catch(error => console.log("El navegador bloqueó el audio momentáneamente:", error));
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
});
