const randomGenerator = () => {
    const dice = {
        1 : '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/U%2B2680.svg/800px-U%2B2680.svg.png">',
        2 : '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/U%2B2681.svg/800px-U%2B2681.svg.png">',
        3 : '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/U%2B2682.svg/800px-U%2B2682.svg.png">',
        4 : '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/U%2B2683.svg/800px-U%2B2683.svg.png">',
        5 : '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/U%2B2684.svg/800px-U%2B2684.svg.png">',
        6 : '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/U%2B2685.svg/800px-U%2B2685.svg.png">'
    }
    let a = 1+Math.floor(Math.random()*6)
    let b = 1+Math.floor(Math.random()*6)
    document.getElementById('dice').innerHTML = dice[a] + dice[b];
}