//validamos si hay un archivo
const validarFiles = async (req, res, next) => {
    if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo) {
        res.status(400).json({ msg: 'no hay archivo.' });
        return;
    }
    next()

}
module.exports = {
    validarFiles
}