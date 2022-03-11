import { IOClients } from '@vtex/api'
import { JsonPlaceholderClient } from './jsonPlaceholder/index'
import { ExternalMasterdata } from './externalMasterdata/index'

export class Clients extends IOClients {
  public get jsonPlaceholder() {
    return this.getOrSet('jsonPlaceholder', JsonPlaceholderClient)
  }

  public get externalMasterdata() {
    return this.getOrSet('externalMasterdata', ExternalMasterdata)
  }
}
