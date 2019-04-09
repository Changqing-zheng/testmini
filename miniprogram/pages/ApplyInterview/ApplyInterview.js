// pages/ApplyInterview/ApplyInterview.js

import Toast from 'vant-weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:"请选择时间",
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
  bindPickerChange:function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  radioChange:function(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  onClickLeft:function(e){
    wx.showModal({
      title: '',
      content: '左上角的按钮和取消按钮的功能本质应该是一样的',
      success(res){
        if(res.confirm){
          console.log("用户点击确定")
        }
        else if(res.cancel){
          console.log("用户点击取消")
        }
      }
    })
  },
  upDateApply:function(e){
    const toast = Toast.loading({
      // type:loading,
      duration:0,
      loadingType:'spinner',
      mask:true
    });

    let second = 2;
    const timer = setInterval(() => {
        second--;
        if(!second){
          clearInterval(timer);
          toast.setData({
            type:"success"
          })
          setTimeout(()=>{},500);
          Toast.clear();
        }
    },1000)
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