function rysujChoinke(a) {
    for (var i = 1; i <= a; i++) {
        var star = '';
        
        for (var n = 1; n <= a-i; n++) {
            star += (' ');
        }
        
        for (var n = 1; n <= (i * 2) - 1; n++) {
            star += '*';       
        }
        console.log(star);
    }
}
rysujChoinke(5);