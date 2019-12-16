//require('yargs) -> importacion del paquete

const argv = require('./config/yargs.js').argv;
var colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)) )
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}


// let base = 'text';

// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(argv.base);
// console.log('limite', argv.l);
// console.log(argv2);
