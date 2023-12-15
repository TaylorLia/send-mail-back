const express = require('express');
const app = express();
 
app.use(require("cors")()); 
app.use(express.json());
 
app.get('/', (req, res, next) => {
    res.json({message: "Tudo ok por aqui!"});
})

app.post('/send', upload.single('anexo'), (req, res, next) => { 
    const subject = req.body.subject;
    const email = req.body.email;
    const mensagem = req.body.mensagem;
    require("./nodeMail")(email, subject, mensagem)
        .then(response => res.json(response))
        .catch(error => res.json(error));
})
 
app.listen(3030, () => console.log("Servidor escutando na porta 3030..."));