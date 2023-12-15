const mailer = require("nodemailer");

module.exports = (email, subject, mensagem) => {
    const smtpTransport = mailer.createTransport({
        host: 'smtp.umbler.com',
        port: 587,
        secure: false, //SSL/TLS
        auth: {
            user: 'specretojasesbe@gmail.com',
            pass: 'wnwp raeh gnlg pewt'
        }
    })
    
    const mail = {
        from: email,
        to: 'specretojasesbe@gmail.com',
        subject: `${subject}`,
        text: mensagem,
    }
    
    return new Promise((resolve, reject) => {
        smtpTransport.sendMail(mail)
            .then(response => {
                smtpTransport.close();
                return resolve(response);
            })
            .catch(error => {
                smtpTransport.close();
                return reject(error);
            });
    })
}