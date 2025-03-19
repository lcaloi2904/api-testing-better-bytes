let package = student;

function getPackage(package) {
    switch (package) {
    case "free":
        console.log("Bạn có thể nghe nhạc nhưng có quảng cáo.");
        break;
    case "basic":
        console.log("Không quảng cáo, nghe nhạc offline!");
        break;
    case "premium":
        console.log("Gói dùng cho nhiều thành viên!");
        break;
    case "student":
        console.log("Ưu đãi dành riêng cho sinh viên!");
    default:
        console.log("You are not on a paid plan");
}
}

getPackage(package);