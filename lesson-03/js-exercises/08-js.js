function getTravelTime(vehicle) {
    switch (vehicle) {
        case "bike":
            console.log("Mất khoảng 15 phút");
            break;
        case "car":
            console.log("Mất khoảng 10 phút");
            break;
        case "bus":
            console.log("Mất khoảng 30 phút");
            break;
        case "train":
            console.log("Mất khoảng 45 phút");
            break;
        default:
            console.log("Phương tiện không hợp lệ!");
    }
}

getTravelTime("bike");
getTravelTime("car");
getTravelTime("bus");
getTravelTime("train");
