import GameClient from './classes/GameClient'
import HeadlessGameClient from './classes/HeadlessGameClient';
import ClientManager from './classes/ClientManager'

const clientManager = new ClientManager()
clientManager.setupGuiClient('Client')

setTimeout(() => {

  clientManager.spawnHeadlessClient('Headless #1')

}, 1500)


setTimeout(() => {

  clientManager.spawnHeadlessClient('Headless #2')

}, 2500)