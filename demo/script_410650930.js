function showdemo(week) {

    const p = document.querySelector('.show-classdemo');
    console.log('show-classdemo', p);
    switch(week) {
        case 1:
            p.innerHTML = `<iframe src='./w01_410650930_introduction/' width="100%" height="100%" />`;
            
        break;

        case 3:
            p.innerHTML = `<iframe src='./w03_410650930_card_demo/' width="100%" height="100%" />`;

        break;

        case 4:
            p.innerHTML = `<iframe src='./w04_410650930_card_demo/' width="100%" height="100%" />`;

        break;

        case 6:
            p.innerHTML = `<iframe src='./w06_410650930_blog/' width="100%" height="100%" />`;

        break;

        case 7:
            p.innerHTML = `<iframe src='./index.html' width="100%" height="100%" />`;

        break;

        

    }

    


}