function getMovie(platform) {
    switch (platform) {
        case "netflix":
            console.log("Bạn có thể xem 'Stranger Things'!");
            break;
        case "disney+":
            console.log("Thử ngay 'Loki' trên Disney+!");
            break;
        case "hbo":
            console.log("Xem 'Game of Thrones' ngay nào!");
            break;
        case "prime":
            console.log("Bạn có thể xem 'The Boys'!");
            break;
        default:
            console.log("Nền tảng không hợp lệ!");
    }
}

getMovie("netflix");
getMovie("disney+");
getMovie("hbo");
getMovie("prime");
