////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let cartArrayXbox = {
    "array": [{
            "id": 11,
            "name": "Prestige Blue",
            "img": "xboxonecontroller.png",
            "infos": "Manette de XboxOne compétitive modifiée bleu avec palettes intégrées!",
            "price": 262,
        },
        {
            "id": 12,
            "name": "Prestige Nébuleuse",
            "img": "NébuleuseOne.png",
            "infos": "Manette de XboxOne compétitive modifiée couleur Nébuleuse avec palettes intégrées!",
            "price": 250,
        },
        {
            "id": 13,
            "name": "Prestige Dragon",
            "img": "Green Dragon.png",
            "infos": "Manette de XboxOne compétitive modifiée écailles de Dragon verte et orange avec palettes intégrées!",
            "price": 299,
        },
        {
            "id": 14,
            "name": "Prestige Carnage",
            "img": "Carnage.png",
            "infos":"Manette de XboxOne compétitive modifiée couleur Carnage rouge avec palettes intégrées!",
            "price": 310,
        },
        {
            "id": 15,
            "name": "Prestige Pinata",
            "img": "Pinata.png",
            "infos": "Manette de XboxOne compétitive modifiée Rose et bleu Pinata avec palettes intégrées!",
            "price": 199,
        },
        {
            "id": 16,
            "name": "Prestige Rebel",
            "img": "Rebel.png",
            "infos": "Manette de XboxOne compétitive modifiée couleur Orange Rebel avec palettes intégrées!",
            "price": 199,
        },
    ]
}

function displayItems() {
    let products = cartArrayXbox.array

    for (i = 0; i < products.length; i++) {
        $('.test').append(
            '<div class="col">' +
            '        <h4>' + products[i].name + '</h4>' +
            '            <img id="itemeshopTest" class="img-fluid w-50"  src="assets/img/XboxOne/' + products[i].img + '" alt="">' +
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
    let products = cartArrayXbox.array
    let storage = Object.keys(sessionStorage)
    for (i = 0; i < storage.length; i++) {
        for (j = 0; j < products.length; j++) {
            if (storage[i] == products[j].id) {
                $('.testCart').append(
                    '<div class="col">' +
                    '        <h4>' + products[j].name + '</h4>' +
                    '            <img id="itemeshopTest'+ j +'" class="img-fluid "  src="assets/img/XboxOne/' + products[j].img + '" alt="">' +
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
