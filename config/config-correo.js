var nodemailer = require('nodemailer');
var remitente  = require('./list-remitentes');

module.exports = {
    sendEmail : function(mailOptions)
{
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: remitente.notificaciones.correoPersonal.user,
            pass: remitente.notificaciones.correoPersonal.pass
        }
    })
    return transporter.sendMail(mailOptions);
}
};

