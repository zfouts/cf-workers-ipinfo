addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const { pathname } = new URL(request.url)
  
  // Common headers for all responses
  const commonHeaders = {
    'DEPLOY-YOUR-OWN': 'Deploy your own by using https://github.com/zfouts/cf-workers-ipinfo'
  }

  switch (pathname) {
    case '/':
      return new Response(request.headers.get('cf-connecting-ip'), {
        status: 200,
        headers: {
          ...commonHeaders,
          'Content-Type': 'text/plain'
        }
      })

    case '/ip.json':
      return new Response(JSON.stringify({
        ip: request.headers.get('cf-connecting-ip')
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      })

    case '/headers.json':
      const headersObject = {}
      for (const [key, value] of request.headers) {
        headersObject[key] = value
      }
      return new Response(JSON.stringify(headersObject), {
        status: 200,
        headers: {
          ...commonHeaders,
          'Content-Type': 'application/json'
        }
      })

    default:
      return new Response('Not Found', {
        status: 404,
        headers: {
          ...commonHeaders,
          'Content-Type': 'text/plain'
        }
      })
  }
}
