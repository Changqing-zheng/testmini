// pages/ApplyInterview/ApplyInterview.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:"请选择时间",
    columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
    array: [1, 2, 3, 4,5],
    index:0,
    items: [
      { name: 'TEL', value: '电话' },
      { name: 'VIDEO', value: '视频', checked: 'true' }
    ]
  },
  DateChange:function(e) {
    console.log("picker时间值改变，值变为："+e.detail.value);
    this.setData({
      date:e.detail.value
    })
  }, 
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})