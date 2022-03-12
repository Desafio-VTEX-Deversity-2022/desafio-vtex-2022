// import { json } from 'co-body'

export async function jsonplaceHolder(ctx: Context, next: () => Promise<any>) {
  const { 
    OMSProxy: {orderId}
  } = ctx

  ctx.clients.catalog.getSkuById(orderId)

  // const data = await catalog.getSkuById(id: string)
  // ctx.body = data

  await next()
}