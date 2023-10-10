function toggleFollow(button) {
    if (button.textContent === "Follow") {
        button.textContent = "Unfollow";
        button.style.border = "1px solid #010617";
        button.style.background = "#FFF";
        button.style.color = "#010617";
        button.style.fontFamily = "'Montserrat Alternates', sans-serif";
        button.style.fontSize = "16px";
        button.style.fontStyle = "normal";
        button.style.fontWeight = "400";
        button.style.lineHeight = "normal";
    } else {
        button.textContent = "Follow";
        // Установите стили обратно на начальные значения, если нужно
        button.style.border = "";
        button.style.background = "";
        button.style.color = "";
        button.style.fontFamily = "";
        button.style.fontSize = "";
        button.style.fontStyle = "";
        button.style.fontWeight = "";
        button.style.lineHeight = "";
    }
}