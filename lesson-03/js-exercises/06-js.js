function getPrice(food) {
    switch (food) {
        case "burger":
            console.log("Giá: 5$");
            break;
        case "pizza":
            console.log("Giá: 8$");
            break;
        case "sushi":
            console.log("Giá: 12$");
            break;
        case "taco":
            console.log("Giá: 6$");
            break;
        default:
            console.log("Món ăn không hợp lệ!");
    }
}


getPrice("burger");
getPrice("pizza");
getPrice("sushi");
getPrice("taco");
