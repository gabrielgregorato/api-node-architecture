import { logger } from '../api/server/logger.js'

async function routes(request, response) {

	const { method, url } = request
  
	if (method === 'GET' && url === '/') {
    
		response.write('GET HOME')
  
		return response.end()
	}
  
	if (method === 'POST' && url === '/') {
      
		response.write('POST HOME')
  
		return response.end()
	}
}
function handleError(error, response) {
	if (error.message.includes('ENOENT')) {
		logger.warn(`asset not found ${error.stack}`)
		response.writeHead(404)
		return response.end()
	}
  
	logger.error(`caught error on API ${error.stack}`)
	response.writeHead(500)
	return response.end()
}
  
export function handler(request, response) {
  
	return routes(request, response)
		.catch(error => handleError(error, response))
}