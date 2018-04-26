const express = require('express');
const router = express.Router();

router.get('/:token', async function (req, res) {
    // const PasswordProvider = new PasswordProviderClass();

    try {
        const token = req.params.token;

        // res.status(200).send(`${token} ... ${password}`);
        res.status(200).send("router.get działa; " + token)
    }
    catch (ex) {
        res.sendStatus(500);
        throw ex;
    }
});

module.exports = router;