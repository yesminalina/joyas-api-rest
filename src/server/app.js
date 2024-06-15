import express from 'express'
import joyasRoutes from '../server/routes/joyasRoutes.js'

const app = express()

const PORT = process.env.PORT || 3000

app.use('/', joyasRoutes)

app.listen(PORT, () => console.log(`SERVER ON http://localhost:${PORT} 🚀`))
