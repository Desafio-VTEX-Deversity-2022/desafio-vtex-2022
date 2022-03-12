import { IOClients } from '@vtex/api'
import { JsonPlaceholderClient } from './jsonPlaceholder/index'
import { ExternalMasterdata } from './externalMasterdata/index'

import { Catalog, OMSProxy } from '@vtex/clients'

export class Clients extends IOClients {
  public get jsonPlaceholder() {
    return this.getOrSet('jsonPlaceholder', JsonPlaceholderClient)
  }

  public get externalMasterdata() {
    return this.getOrSet('externalMasterdata', ExternalMasterdata)
  }

  public get catalog() {
    return this.getOrSet('catalog', Catalog)
  }
  
  public get OMSProxy(){
    return this.getOrSet('omsProxy', OMSProxy)
  }
}
