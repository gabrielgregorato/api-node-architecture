
import path from 'path'
import dotenv from 'dotenv'
import process from 'node:process'

if (process.NODE_ENV === 'development') {
	dotenv.config({ path: (path.dirname, '.env') })
} else {
	dotenv.config({ path: (path.dirname, '.env.test') })
}

export default {
	port: process.env.PORT || 1234,
	LOG_DISABLED: process.env.LOG_DISABLED,
}

