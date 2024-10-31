const { createBot, createProvider, createFlow, addKeyword, EVENTS } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')


const flowBienvenida = addKeyword(EVENTS.WELCOME).addAnswer('¡Hola! 😊 Gracias por comunicarte conmigo. Estoy aquí para ayudarte en lo que necesites. ¡Vamos a empezar! 🚀')
const flowVoz = addKeyword(EVENTS.VOICE_NOTE).addAnswer('¡Gracias por tu nota de voz! 🎙️ Voy a revisarla y te respondo en breve 😊')
const flowUbicacion = addKeyword(EVENTS.LOCATION).addAnswer('¡Gracias por compartir tu ubicación! 📍 Esto nos ayudará a brindarte la mejor asistencia. 😊')
const flowImagenVideo = addKeyword(EVENTS.MEDIA).addAnswer('¡Gracias por compartir tu archivo! 📸🎥 Voy a revisarlo y en un momento te doy una respuesta. 😊')

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowBienvenida,flowVoz,flowUbicacion,flowImagenVideo])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
