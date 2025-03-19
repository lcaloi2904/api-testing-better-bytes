let result = win;

function getResult(result) {
switch (result) {
    case "win":
        console.log("Chúc mừng! Đội của bạn đã chiến thắng!");
        break;
    case "lose":
        console.log("Trận đấu hòa, thật đáng tiếc!");
        break;
    case "draw":
        console.log("Thua rồi, nhưng đừng bỏ cuộc!");
    default:
        console.log("Giá trị không lớp lệ");
}
}

getResult(result);
