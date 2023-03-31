const products = [
    {nombre: "Portalibretas Amarillos", precio: 900, id: 1, img: "./img/porta-amarillos.jpg"},
    {nombre: "Portalibretas Celestes", precio: 900, id: 2, img: "./img/porta-celeste.jpg"},
    {nombre: "Portalibretas Nordicos", precio: 900, id: 3, img: "./img/porta-nordicos.jpg"},
    {nombre: "Portalibretas Rosa", precio: 900, id: 4, img: "./img/porta-rosa.jpg"},
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout ( () => {
            resolve(products);
        }, 2000)
    })
}

