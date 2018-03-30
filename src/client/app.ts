import GameClient from './classes/GameClient'
import HeadlessGameClient from './classes/HeadlessGameClient';

const clientWs = new WebSocket('ws://localhost:8001/')
clientWs.binaryType = 'arraybuffer'
new GameClient('Client', clientWs)

setTimeout(() => {

  const headlessWs = new WebSocket('ws://localhost:8001/')
  headlessWs.binaryType = 'arraybuffer'
  new HeadlessGameClient(`Headless #1`, headlessWs)

}, 1500)


setTimeout(() => {

  const headlessWs = new WebSocket('ws://localhost:8001/')
  headlessWs.binaryType = 'arraybuffer'
  new HeadlessGameClient(`Headless #2`, headlessWs)

}, 2500)