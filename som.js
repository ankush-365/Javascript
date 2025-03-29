function som(views) {
    let views2;
    let x;
    if (views > 1000 && views < 1000000) {
        x = views / 1000;
        views2 = x.toFixed(1) + "K";
        return views2
    }
    else if(views > 1000000){
        x = views / 1000000;
        views2 = x.toFixed(1) + "M";
        return views2
    }
}

console.log(som(20050303));
