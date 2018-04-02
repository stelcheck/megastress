# Megastress

Megastress makes use of the [Megadata](https://github.com/Wizcorp/megadata) library to manage the communication between server and clients via WebSockets.

The project consists of a client and a server. The client runs in a browser and uses the canvas to visualize the connected clients. Clients generate traffic and the server delegates it.  

Goal of Megastress is to showcase the features of Megadata and also to provide a basic stress test environment.

## Screenshot


## Installation

```shell
git clone https://github.com/supaiku0/megastress.git
npm install
```

## Usage

### Server
```shell
tsc -p src/server/tsconfig.json
npm run server
```
### Client
```shell
npm run client
$BROWSER http://localhost:8000/
```


## TODOs

## Issues

## License

MIT License. Copyright (c) Wizcorp Inc.
