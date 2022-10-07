const aplicarDesc = new Promise((resolve, reject) => {
    const descuento = true

    if (descuento) {
        resolve('Descuento Aplicado')
    } else
        reject('No se pudo aplicar el descuento')

})
aplicarDesc
    .then(resultado => {
        console.log(resultado)
    }).catch(error => {
        console.log(error)
    })

//console.log(aplicarDesc)

//hay tres posibles valores sen las promise
//resuelto-true
//rechazado-false
//pending, que aun no se ah cumplido pero tampoco a sido ejecutada
//then (entonces) la accion que se realiza en el promise 
//siempre que el promise falle entonces tenemos acceso al .catch

const paises = []
const nuevoPais = pais => new Promise(resolve => {
    setTimeout(() => {
        paises.push(pais)
        resolve(` Agregado ${pais}`)
    }, 3000)
})

nuevoPais('Alemania').then(resultado => {
        console.log(resultado)
        console.log(paises)
        return nuevoPais('Francia')
    })
    .then(resultado => {
        console.log(resultado)
        console.log(paises)
        return nuevoPais('Inglaterra')

    })
    .then(resultado => {
        console.log(resultado)
        console.log(paises)
    })

//prueba