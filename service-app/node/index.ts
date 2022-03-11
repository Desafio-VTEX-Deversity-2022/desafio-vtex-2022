import { method, ParamsContext, RecorderState, ServiceContext } from '@vtex/api'
import { Service } from '@vtex/api'

import { Clients } from './clients'
import { jsonplaceHolder } from './middlewares/jsonplaceholder'
import { changeMeMiddleware } from './middlewares/changeMeMiddleware'
import { changeMeResolver } from './resolvers/changeMeResolver'

const MEDIUM_TIMEOUT_MS = 2 * 1000

declare global {
  type Context = ServiceContext<Clients>
}

export default new Service<Clients, RecorderState, ParamsContext>({
  clients: {
    implementation: Clients,
    options: {
      default: {
        timeout: MEDIUM_TIMEOUT_MS,
      },
    },
  },
  routes: {
    changeMe: method({
      GET: [changeMeMiddleware]
    }),
    jsonplaceholder: method({
      POST: [jsonplaceHolder]
    })
  },
  graphql: {
    // Field resolvers usually go here
    resolvers: {
      Query: {
        // Change the names
        queryOne: changeMeResolver
      },
      Mutation: {
        // Do you have mutation resolvers?
      },
    },
  },
})