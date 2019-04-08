// pages/GroupManagement/GroupManagement.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    _url: "https://imgsa.baidu.com/forum/w%3D580/sign=9f5c3fb4382ac65c6705667bcbf0b21d/b24a7af81a4c510f7c2201ce6d59252dd52aa50b.jpg",
    startX:0,
    startY:0,
    isleft:false,
    nowX:0,
    nowY:0,
    secContent_width:"80%",
    secDel_width:"20%",
    secIsLeft:false
  },
  touchstart:function(e){
    this.setData({
      startX:e.changedTouches[0].clientX,
      starty:e.changedTouches[0].clientY
    })
  },
  touchmove:function(e){
      var that = this;
      var startX = this.data.startX;
      var startY = this.data.startY;
      var moveX = e.changedTouches[0].clientX;
      var moveY = e.changedTouches[0].clientY;
      if(moveX<startX)
      {
        that.setData({
          isleft:true
          })
      }
      else
      {
        that.setData({
          isleft:false
        })
      }
  },
  sTouch:function(e){
    var CanLeft = false;
    if (this.data.nowX == 0) {
        CanLeft = true;
    }
    else if (this.data.nowX != 0) {
        CanLeft = false;
    }
    this.setData({
      startX:e.changedTouches[0].clientX,
      startY:e.changedTouches[0].clientY,
      secCanLeft:CanLeft
    })
  },
  mTouch:function(e){
    var startX = this.data.startX;
    var startY = this.data.startY;

    var moveX = e.changedTouches[0].clientX;
    var moveY = e.changedTouches[0].clientY;

    var pageWidth = wx.getSystemInfoSync().windowWidth;
    var nowX = parseInt(this.data.nowX);
    var XMoveDiec = moveX - startX + nowX;
    var delWidth = pageWidth * parseInt(this.data.secDel_width) / 100;
    
    console.log(XMoveDiec);
    console.log("!!!!!"+nowX);
    if( (moveX - startX) < 0){
      this.setData({
        secIsLeft:true
      })
    }
    else{
      this.setData({
        secIsLeft: false
      })
    }
    if(XMoveDiec > -delWidth && XMoveDiec < 0){
      this.setData({
        nowX:XMoveDiec + "px"
      })
    }
  },
  eTouch:function(e){

      var pageWidth = wx.getSystemInfoSync().windowWidth;
      var delWidth = pageWidth * parseInt(this.data.secDel_width) / 100;
      
      var secIsLeft = this.data.secIsLeft;
      if(secIsLeft){
        this.setData({
          nowX:-delWidth+"px",
        })
      }
      else{
        this.setData({
          nowX:0
        })
      }
  },
  delTap:function(e){
    wx.showModal({
      title: '',
      content: '你确定要删除吗？',
      success(res){
        if(res.confirm){
          console.log("用户点击确定");
        }
        else if(res.cancel){
          console.log("用户点击取消");
        }
      }
    })
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