document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.getElementById("wrapper");
    const actionBtn = document.getElementById("action-btn");

    actionBtn.addEventListener("click", () => {
        if (wrapper.classList.contains("paso-1")) {
            wrapper.classList.remove("paso-1");
            wrapper.classList.add("paso-2");
            actionBtn.textContent = "Ver detalles e información";
            
        } else if (wrapper.classList.contains("paso-2")) {
            wrapper.classList.remove("paso-2");
            wrapper.classList.add("paso-3");
            actionBtn.textContent = "Finalizar";
            
        } else if (wrapper.classList.contains("paso-3")) {
            wrapper.classList.remove("paso-3");
            wrapper.classList.add("paso-4");
        }
    });
});