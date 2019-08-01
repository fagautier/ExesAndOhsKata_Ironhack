function XO(str) {
    let x = 0;
    let o = 0;
    for (let i = 0; str.length > i; i++) {
        let chart = str[i].toUpperCase();
        switch (chart) {
            case "X":
                x++;
                break;
            case "O":
                o++;
                break;
            default:
                break;
        }
    }
    if (x === o) {
        return true;
    }
    return false;
}
