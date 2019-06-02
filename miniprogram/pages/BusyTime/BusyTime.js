const db = wx.cloud.database();
const busyTimeTable = db.collection("busyTimeTable")

Page({
  data: {
    input0: "",
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
    input7: "",
    input8: "",
    input9: "",
    input10: "",
    input11: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    busyTimeTable.where({
      user: options.teacher
    }).get().then(res => {
      console.log(res)
      this.setData({
        input0: res.data[0].busy.input0,
        input1: res.data[0].busy.input1,
        input2: res.data[0].busy.input2,
        input3: res.data[0].busy.input3,
        input4: res.data[0].busy.input4,
        input5: res.data[0].busy.input5,
        input6: res.data[0].busy.input6,
        input7: res.data[0].busy.input7,
        input8: res.data[0].busy.input8,
        input9: res.data[0].busy.input9,
        input10: res.data[0].busy.input10,
        input11: res.data[0].busy.input11,
      })
    }).catch(err => {
      console.log(err)
    })
  },
  makeSure(event){
    wx.navigateBack({
      delta: 1
    })
    wx.showToast({
      title: '确认成功',
      icon: "success",
      duration: 1000
    })
  }
})