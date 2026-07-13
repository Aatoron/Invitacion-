document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.getElementById("wrapper");
    const actionBtn = document.getElementById("action-btn");
    const resetBtn = document.getElementById("reset-btn");
    const doors = document.getElementById("main-doors");
    const music = document.getElementById("bg-music");

    actionBtn.addEventListener("click", () => {
        if (wrapper.classList.contains("paso-1")) {
            if (music) {
                music.currentTime = 0;
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

    // REGRESAR A CENTRO_2 AL INSTANTE
    if (resetBtn) {
        resetBtn.addEventListener("click", (e) => {
            e.preventDefault();
            
            // Activamos una clase temporal para saltarnos la animación de las portadas/cortinas
            wrapper.classList.add("sin-animacion");
            
            // Cambiamos al paso 2 directo
            wrapper.className = "wrapper paso-2 sin-animacion"; 
            actionBtn.textContent = "Ver detalles e información";
            
            if (doors) doors.style.display = "none"; 

            // Quitamos la clase temporal un milisegundo después para que el resto de la web funcione normal
            setTimeout(() => {
                wrapper.classList.remove("sin-animacion");
            }, 50);
        });
    }
});