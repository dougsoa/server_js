const http = require('http')

const server = http.createServer((req, res) => {
    const resp = []
    resp['/'] = '<h1>voce esta na home</h1>'
    resp['/contato'] = '<h1>voce esta na contato</h1>'
    resp['semURL'] = '<h1>URL sem resposta definida!</h1>'
 
    console.log(resp[req.url])

    res.end(resp[req.url] || resp['semURL'])
})

server.listen(3001, 'localhost', () => {
    console.log('Servidor de pé em: http://localhost:3001')
console.log('Para derrubar o servidor: ctrk + c')
})