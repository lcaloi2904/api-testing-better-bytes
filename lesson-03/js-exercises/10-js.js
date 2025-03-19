function playSong(idol) {
    const songs = {
        bts: "Nghe ngay 'Dynamite'!",
        blackpink: "Thử 'How You Like That' nào!",
        exo: "Đừng bỏ lỡ 'Love Shot'!",
        twice: "Bật ngay 'The Feels' nào!"
    };

    if (songs[idol]) {
        console.log(songs[idol]);
    } else {
        console.log("Không tìm thấy nhóm nhạc này!");
    }
}


playSong("bts"); 
playSong("blackpink");
playSong("exo");      
playSong("twice");    
