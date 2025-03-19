function getDiscount(event) {
    switch (event) {
        case "blackfriday":
            console.log("Giảm 50% toàn bộ sản phẩm!");
            break;
        case "cybermonday":
            console.log("Giảm 40% cho sản phẩm công nghệ!");
            break;
        case "christmas":
            console.log("Ưu đãi đặc biệt mùa Noel - giảm 30%!");
            break;
        default:
            console.log("Sự kiện không hợp lệ!");
    }
}

getDiscount("blackfriday");
getDiscount("cybermonday");
getDiscount("christmas");
