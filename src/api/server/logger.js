import pino from 'pino'
import config from '../../config/config.js'
const log = pino({
	enabled: !(config.LOG_DISABLED),
	transport: {
		target: 'pino-pretty',
		options: {
			colorize: true
		}
	}
})

export const logger = log   