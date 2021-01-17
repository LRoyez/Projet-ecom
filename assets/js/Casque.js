let cartArrayHeadset = {
    "array": [{
            "id": 17,
            "name": "Logitech Pro",
            "img": "logitechpro.png",
            "infos": "Le casque gaming Logitech G PRO est le résultat d'une étroite collaboration avec de nombreux joueurs professionnels sur divers genres de jeux. Entendez tous les coups de feu, pouvoirs spéciaux et déplacements avec la perception spatiale dont les pros ont besoin. Gardez le contact avec votre équipe grâce à des communications vocales d'une clarté exceptionnelle. Le casque PRO est conçu avec des pros pour gagner.",
            "price": 262,
        },
        {
            "id": 18,
            "name": "Rubis Pro",
            "img": "steelseries.png",
            "infos": "Casque Steelseries. L’Arctis 7P, qui dispose des mêmes transducteurs de qualité supérieure que l’Arctis 7, met en valeur les sons discrets afin de vous offrir un avantage sonore dans vos jeux nouvelle génération préférés et est entièrement compatible avec la technologie Tempest 3D AudioTech de la PlayStation 5.",
            "price": 180,
        },
        {
            "id": 19,
            "name": "Razer Kraken ",
            "img": "rz04-01490100-r3g1-02.png",
            "infos": "Casque Razer Kraken. Profitez d’un avantage inégalé et arrachez la victoire avec le Razer Kraken Ultimate, un casque de jeu pour PC conçu pour offrir l’expérience de jeu compétitif ultime. Lorsque les menaces vous encerclent, il est temps de passer à l’attaque et de devenir le chasseur.",
            "price": 150,
        },
        {
            "id": 20,
            "name": "JBL Quantum 800",
            "img": "JBL.png",
            "infos": "Casque gaming circum-aural haute performance à réduction de bruit active et Bluetooth 5.0. ",
            "price": 200,
        },
        
    ]
}

function displayItems() {
    let products = cartArrayHeadset.array

    for (i = 0; i < products.length; i++) {
        $('.test').append(
            '<div class="col">' +
            '        <h4>' + products[i].name + '</h4>' +
            '            <img id="itemeshopTest" class="img-fluid w-50"  src="assets/img/casque/' + products[i].img + '" alt="">' +
            '            <p>' + products[i].price + '</p>' +
            '            <p>' + products[i].infos + '</p>' +
            '            <input id="boutonprix' + products[i].id + '" onclick="store(' + products[i].id + ')"id="0" type="button" value="Ajouter au Panier">' +
            '    </div>'
        )
    }
}

function store(id) {
    sessionStorage.setItem(id, id)
    displayCart()
}

function displayCart() {
    let products = cartArrayHeadset.array
    let storage = Object.keys(sessionStorage)
    for (i = 0; i < storage.length; i++) {
        for (j = 0; j < products.length; j++) {
            if (storage[i] == products[j].id) {
                $('.testCart').append(
                    '<div class="col">' +
                    '        <h4>' + products[j].name + '</h4>' +
                    '            <img id="itemeshopTest'+ j +'" class="img-fluid"  src="assets/img/casque/' + products[j].img + '" alt="">' +
                    '            <p>' + products[j].price + '</p>' +
                    '            <p>' + products[j].infos + '</p>' +
                    '<input id="boutonprixTest' + products[j].id + '" onclick="removeFromCart(' + products[j].id + ')" type="button" value="Retirer">' +
                    '    </div>'
                )
                $('#itemeshopTest'+ j +'').css({
                    'width' : '250px',
                    'height' : '170px',
                })
            }
        }
    }
}

function removeFromCart(id) {
    sessionStorage.removeItem('' + id + '')
    $('.testCart').empty()
    displayCart()
}

displayItems()

displayCart()