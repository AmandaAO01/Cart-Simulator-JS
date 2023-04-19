export const auth = (req, res, next) => {
    if (!req.params.token || !req.params) {
        return res.status(400).json({message:'Token necesario'})
    }
    const {token} = req.params.token
    console.log(req.params.token)
    console.log('El token está')
    next()
}