const cloud = require('wx-server-sdk')
cloud.init()

exports.main = async (event) => {
  const db = cloud.database()
  return await db.collection('orders').add({
    data: {
      userId: cloud.getWXContext().OPENID,
      serviceId: event.serviceId,
      status: '待支付'
    }
  })
}