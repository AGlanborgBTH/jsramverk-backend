const database = require('../../database')
const bcrypt = require('bcryptjs');
const saltRounds = 10;

const reg = {
    reg: async (body) => {
        const email = body.email
        const password = body.password

        bcrypt.hash(password, saltRounds, async function(err, hash) {
            if (err) {
                throw "Could not hash password"
            }

            const obj = {
                email: email,
                password: hash
            }

            const db = await database.getDb("users");
            const result = await db.collection.insertOne(obj);
            await db.client.close();
            return result;
        });
    }
}

module.exports = reg