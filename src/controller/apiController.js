const testApi = (req, res) => {
    return res.status(200).json({
        date: 'ok',
        message: 'testapi'
    })
}

const handleRegister = (req, res) => {
    console.log("call me", req.body)
}

module.exports = {
    testApi, handleRegister
}