const fs = require('fs');
var colors = require('colors/safe');

let listarTabla = (base, limite = 10) =>{
    console.log('========================='.green);
    console.log(`Tabla de ${ base }`.green);
    console.log('========================='.green);
    
    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} =  ${base * i} \n`);
    }
}

let crearArchivo = async (base, limite = 10) => {
    return await new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero');
            return;
        }

        let data = '';
        
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} =  ${base * i} \n`;
        }

        // const data = new Uint8Array(Buffer.from('Hello Node.js'));

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}`)

        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}

