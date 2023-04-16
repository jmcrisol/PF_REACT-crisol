const products = [
    {nombre: "Portalibretas Amarillos", precio: 900, id: 1, img: "./img/porta-amarillos.jpg", categoria: "Celestes", descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", stock: 10},
    {nombre: "Portalibretas Celestes", precio: 900, id: 2, img: "./img/porta-celeste.jpg", categoria: "Otros", descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", stock: 20},
    {nombre: "Portalibretas Nordicos", precio: 900, id: 3, img: "./img/porta-nordicos.jpg", categoria: "Otros", descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", stock: 22},
    {nombre: "Portalibretas Rosa", precio: 900, id: 4, img: "./img/porta-rosa.jpg", categoria: "Rosas", descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", stock: 9},
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout ( () => {
            resolve(products);
        }, 2000)
    })
}

export const getProductsById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout ( () => {
            resolve(products.find(prod=>prod.id===productId));
        }, 2000)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise ((resolve) => {
        setTimeout ( () => {
            resolve(products.find(prod=>prod.categoria===productCategory));
        }, 2000)
    })
}