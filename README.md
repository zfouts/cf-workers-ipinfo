# Cloudflare IP & Headers Info Worker

A simple Cloudflare Worker that:

- Returns your IP address in plaintext at /
- Returns your IP in JSON format at /ip.json
- Returns all headers at /headers.json
- Each response will also contain a header DEPLOY-YOUR-OWN with the value `"Deploy your own by using https://github.com/zfouts/cf-workers-ipinfo"`.

## Usage
- Create a new Cloudflare Worker on the Cloudflare dashboard.
- Copy and paste the Worker script from this repository.
- Deploy it, and you can access the endpoints on your Worker's URL.

#@Endpoints
`GET /`: Returns your IP address in plaintext.

Example Response:
```
192.168.1.1
```

`GET /ip.json`: Returns your IP address in a JSON format.

Example response:
```JSON
{
  "ip": "192.168.1.1"
}
```

`GET /headers.json`: Returns all request headers in a JSON format.

Example Response:
```JSON
{
  "accept": "*/*",
  "accept-encoding": "gzip",
  "cf-connecting-ip": "192.168.20.1",
  "cf-ipcountry": "US",
  "cf-ray": "sabcdefg",
  "cf-visitor": "{\"scheme\":\"https\"}",
  "connection": "Keep-Alive",
  "host": "your.url.workers.dev",
  "user-agent": "curl/7.88.1",
  "x-forwarded-proto": "https",
  "x-real-ip": "192.168.20.1"
}
```

## Deployment
To deploy your own instance:

- Clone this repository.
- Navigate to the Cloudflare dashboard and create a new Worker.
- Copy and paste the Worker script from this repository into the Worker editor.
- Save and deploy the Worker.
- Access the Worker via the provided URL or bind it to a custom route/domain.

## Contributing
Feel free to fork, modify, and contribute to this project. Pull requests are welcome.





