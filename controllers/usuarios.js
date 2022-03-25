const { Usuario } = require("../models/usuarios")
const readXlsxFile = require("read-excel-file/node");
const { validarExtension } = require("../helpers/validarExtension");

const getUsuario = async (req, res) => {
    const usuarios = await Usuario.findAll()
    res.status(200).json({
        ok: true,
        msg: 'Get usuarios',
        usuarios
    })
}

const postUsuario = async (req, res) => {
    // const { body } = req
    // const usuario = new Usuario(body)
    // await usuario.save()
    try {
        let path = validarExtension(req.files)
        readXlsxFile(path).then((rows) => {
            rows.shift()
            let usuarios = [];
            rows.forEach((row) => {
                let usuario = {
                    id_trim: row[0],
                    marca: row[1],
                    modelo: row[2],
                    generacion: row[3],
                    año_generacion: row[4],
                };
                usuarios.push(usuario);
            })
            Usuario.bulkCreate(usuarios)
                .then(resp => {
                    res.status(200).json({
                        ok: true,
                        message: "Uploade the file successfully",
                        user: resp
                    });
                })
                .catch((error) => {
                    res.status(500).json({
                        message: "Fail to import data into database!",
                        error: error.message,
                    });
                });
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Comuniquese con el administrado',
        })
    }
}

module.exports = {
    getUsuario,
    postUsuario
}