import { createServer } from 'http'
import { handler } from '../../routes/routes.js'

export default createServer(handler)