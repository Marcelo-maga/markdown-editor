import { contextBridge, ipcRenderer } from 'electron'

export const api = {

  close: (func: string) => {
    ipcRenderer.send(func, () => [
      close()
    ])
  },

  on: (channel: string, callback: Function) => {
    ipcRenderer.on(channel, (_, data) => callback(data))
  }

}

contextBridge.exposeInMainWorld('Main', api)
