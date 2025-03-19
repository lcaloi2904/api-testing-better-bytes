function getRank(score) {
    if (score < 40) {
        console.log("Xếp hạng: Newbie");
    } else if (score >= 40 && score < 70) {
        console.log("Xếp hạng: Intermediate");
    } else if (score >= 70 && score < 90) {
        console.log("Xếp hạng: Pro");
    } else {
        console.log("Xếp hạng: Legend");
    }
}


getRank(35); 
getRank(50); 
getRank(75); 
getRank(95); 
