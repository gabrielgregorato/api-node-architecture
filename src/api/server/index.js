import config from '../../config/config.js'
import server from './server.js'
import { logger } from './logger.js'
import process from 'node:process'

server.listen(config.port)
	.on('listening', () => logger.info(`server running port:${config.port}`))

process.on('uncaughtException', (error) => logger.error(`unhandledRejection happened: ${error.stack || error }`))
process.on('unhandledRejection', (error) => logger.error(`unhandledRejection happened: ${error.stack || error }`))