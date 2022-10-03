const express = require('express');
const router = express.Router();
const get = require('../../db/modules/doc/get');

router.get('/', async (req, res) => {
    try {
        const data = {
            data: await get.all()
        };

        return res.json(data);
    } catch (e) {
        return res.status(500).json({
            errors: {
                status: 500,
                source: "/doc/",
                title: "Error",
                detail: e.message
            }
        });
    }
});

module.exports = router;