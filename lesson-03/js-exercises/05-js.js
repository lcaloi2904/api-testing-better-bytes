function toggleMode(mode) {
    switch (mode) {
        case "dark":
            console.log("Chế độ tối đã được bật!");
            break;
        case "light":
            console.log("Chế độ sáng đã được bật!");
            break;
        default:
            console.log("Chế độ không hợp lệ!");
    }
}

toggleMode("dark");
toggleMode("light");
