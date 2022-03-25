const path = require('path')
const { v4: uuidv4 } = require('uuid');
const readXlsxFile = require("read-excel-file/node");
const { Usuario } = require('../models/usuarios');

const validarExtension = (files, extensionesValidas = ['xlsx', 'csv']) => {

    const { archivo } = files;
    let a = archivo.name.split('.')
    const extension = a[a.length - 1]

    //  validar las extensiones
    if (!extensionesValidas.includes(extension)) {

        throw new Error(`La extencion ${extension} no es valida - ${extensionesValidas}`)
    }
    const nameFile = uuidv4() + '.' + extension;
    const uploadPath = path.join(__dirname, '../uploads/', 'nameFolder', nameFile);

    

    archivo.mv(uploadPath, (err) => {
        if (err) {
            console.console.log(err)
            return err
        }
    });
    return uploadPath



}

module.exports = {
    validarExtension
}