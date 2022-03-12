import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'


export class JsonPlaceholderClient extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('', context, options)
  }
  
  public async orders(id: string): Promise<string> {
    return this.http.get(`/orders/${id}`, {
      metric: 'orders-get',
    })
  }
  
}