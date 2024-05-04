const nodemailer = require('nodemailer');

class EmailSender {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'alejandrovo900@gmail.com',
                pass: 'sromuroyxqkfjknj'
            }
        });
    }

    sendEmail(recipient, subject, body) {
        const mailOptions = {
            from: 'alejandrovo900@gmail.com',
            to: recipient,
            subject: subject,
            text: body
        };

        this.transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error);
            } else {
                console.log('Email enviado: ' + info.response);
            }
        });
    }
}

const emailSender = new EmailSender();
emailSender.sendEmail('alejandrovo900@gmail.com', 'Pude Ing.', 'Ya tengo mi tarea lista para subir');


