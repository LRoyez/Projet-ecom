let cartArray = {
    "array": [{
            "id": 0,
            "name": "Green Pro",
            "img": "GreenPS4.png",
            "infos": "Manette de PS4 compétitive modifiée Verte avec palettes intégrées!",
            "price": 262,
        },
        {
            "id": 1,
            "name": "Rubis Pro",
            "img": "Rubis.png",
            "infos": "Manette de PS4 compétitive modifiée couleur Rubis avec palettes intégrées!",
            "price": 250,
        },
        {
            "id": 2,
            "name": "Blindslide Pro",
            "img": "blindslide.png",
            "infos":  "Manette PS4 compétitive modifiée blanche et noir avec palettes intégrées!",
            "price": 299,
        },
        {
            "id": 3,
            "name": "Pixel Pro",
            "img": "pixel.png",
            "infos":  "Manette PS4 compétitive modifiée Pixel violette avec palettes intégrées!",
            "price": 310,
        },
        {
            "id": 4,
            "name": "Pink camo Pro",
            "img": "pinkcamo.png",
            "infos": "Manette PS4 compétitive modifiée camouflage rose avec palettes intégrées!",
            "price": 199,
        },
        {
            "id": 5,
            "name": "DarkWood Pro",
            "img": "darkwood.png",
            "infos": "Manette PS4 compétitive modifiée bois noir avec palettes intégrées!",
            "price": 199,
        },
        {
            "id": 6,
            "name": "Blue Dragon Pro",
            "img": "bluedragon.png",
            "infos": "Manette de PS4 compétitive modifiée blue dragon avec palettes intégrées!",
            "price": 300,
        },
        {
            "id": 7,
            "name": "Adrenaline Pro",
            "img": "adrenaline.png",
            "infos": "Manette PS4 compétitive modifiée rouge adrenaline avec palettes intégrées!",
            "price": 300,
        },
        {
            "id": 8,
            "name": "Cyberskull",
            "img": "cyberskull.png",
            "infos": "Manette PS4 compétitive modifiée squelette avec palettes intégrées!",
            "price": 300,
        },
        {
            "id": 10,
            "name": "Starstorm Pro",
            "img": "StarStorm.png",
            "infos": "Manette PS4 compétitive modifiée couleur Galaxie avec palettes intégrées!",
            "price": 300,
        },
    ]
}

function displayItems() {
    let products = cartArray.array

    for (i = 0; i < products.length; i++) {
        $('.test').append(
            '<div class="col">' +
            '        <h4>' + products[i].name + '</h4>' +
            '            <img id="itemeshopTest" class="img-fluid w-50"  src="assets/img/PS4/' + products[i].img + '" alt="">' +
            '            <p>' + products[i].price + '</p>' +
            '            <p>' + products[i].infos + '</p>' +
            '            <input id="boutonprixTest' + products[i].id + '" onclick="store(' + products[i].id + ')"id="0" type="button" value="Ajouter au Panier">' +
            '    </div>'
        )
    }
}

function store(id) {
    sessionStorage.setItem(id, id)
    displayCart()
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function displayCart() {
    let products = cartArray.array
    let storage = Object.keys(sessionStorage)
    for (i = 0; i < storage.length; i++) {
        for (j = 0; j < products.length; j++) {
            if (storage[i] == products[j].id) {
                $('.testCart').append(
                    '<div class="col">' +
                    '        <h4>' + products[j].name + '</h4>' +
                    '            <img id="itemeshopTest'+ j +'" class="img-fluid"  src="assets/img/PS4/' + products[j].img + '" alt="">' +
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
///////////////////////
////Faut prendre/////
////ça aussi bg/////
displayItems()////
/////////////////

displayCart()