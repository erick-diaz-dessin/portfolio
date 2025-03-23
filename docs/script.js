document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".toggle-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const group = this.getAttribute("data-group");
            const rows = document.querySelectorAll(`tr[data-group='${group}']`);

            rows.forEach(row => {
                if (row.classList.contains("hidden")) {
                    row.classList.remove("hidden");
                } else {
                    row.classList.add("hidden");
                }
            });
        });
    });
});

