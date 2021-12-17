const jwt = require('jsonwebtoken')


const auth = (req, res, next) => {
    try {
        const token = req.header("CustomerAuthorization")
        if(!token) return res.status(400).json({msg: "Invalid Customer Authentication."})

        jwt.verify(token, process.env.CUSTOMER_TOKEN_SECRET, (err, user) => {
            if(err) return res.status(400).json({msg: "Invalid Customer Authentication."})

            req.user = user
            next()
        })
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

module.exports = auth