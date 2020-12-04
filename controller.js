const nodemailer = require('nodemailer');

module.exports = {
    email: async(req, res) => {
        try {
            let transporter = nodemailer.createTransport({
                host: 'stmp.gmail.com',
                port: 587,
                service: 'gmail',
                secure: false,
                requireTLS: true,
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.PASSWORD
                }
            })

            let info = await transporter.sendMail({
                from: `Matt Bodily`,
                to: process.env.EMAIL,
                subject: 'Hello There',
                text: 'You are a bold one',
                html: `<div>You are a bold one</div>`
            }, (err, res) => {
                if(err){
                    console.log(err)
                } else {
                    res.status(200).send(info);
                }
            })
        } catch(err){
            res.status(500).send(err);
        }

        res.sendStatus(200);
    }
}