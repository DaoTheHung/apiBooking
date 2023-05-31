const express = require('express')
const router = express.Router()
const { dataB } = require('../database/dataSearch')

router.get('/', (req, res) => {

    res.json({
        success: true,
        message: "Successfully!!!",
        data: dataB
    })
})


module.exports = router