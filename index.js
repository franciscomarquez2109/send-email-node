var email = require('./config/config-correo'); // autenticacion de correo
var remitente  = require('./config/list-remitentes'); // lista de remitentes 

//definicion de envio de correo
function enviarCorreo(correo,asunto,mensaje){ 
    console.log('Enviando mensaje a : ',correo);
    var mailOptions = {
        from: remitente.notificaciones.correoPersonal.user,
        to: correo,
        subject: asunto,
        text: mensaje
    };
    return email.sendEmail(mailOptions);
}

//enviamos correo electronico
enviarCorreo(
    'CORREO@gmail.com',
    'Prueba',
    'Prueba de envio'
).then((res)=>{
    console.log('mensaje Enviado con Exito');
}).catch((error)=>{
    console.error('Error de envio');
});


