import ip from 'ip'
import app from '../config/app'

app.listen(3333, () => (
  console.log(`Servidor rodando em: http://${ip.address()}:3333`)
))
