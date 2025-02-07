Page({
  data: {
    services: [
      { id: 1, name: '古法艾灸', price: 198 },
      { id: 2, name: '中医诊脉', price: 80 }
    ]
  },
  
  // 跳转到预约详情
  bookService(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/service/detail?id=${id}`
    })
  }
})