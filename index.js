superbowlWin = (record) => {
    let win = record.find(game => game.result === "W")
    if (win === undefined){
        return undefined;
    }
    else {
        return win.year;
    } 
}