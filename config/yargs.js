//opciones que reciben los comandos
const opts = {
    base: {
        demand: true, // indicativo que es obligatorio
        alias: 'b' // se puede definir abreviaciones o formas en que pueden ser colocadas
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts
        // {
        //     base: {
        //         demand: true, // indicativo que es obligatorio
        //         alias: 'b' // se puede definir abreviaciones o formas en que pueden ser colocadas
        //     },
        //     limite: {
        //         alias: 'l',
        //         default: 10
        //     }
        // }
    )
    .command('crear', 'Genera un archivo de la tabla de multiplicar', opts
        // {
        //     base: {
        //         demand: true, // indicativo que es obligatorio
        //         alias: 'b' // se puede definir abreviaciones o formas en que pueden ser colocadas
        //     },
        //     limite: {
        //         alias: 'l',
        //         default: 10
        //     }
        // }
    )
    .help() //ayuda para el usuario
    .argv;

    //Exportaciones
    module.exports = {
        argv
    }