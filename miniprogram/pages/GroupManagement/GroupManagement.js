const db = wx.cloud.database();
const teamList = db.collection('teamList')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 1,
    group: [],
    groupId: ''
  },
  onLoad: function(options){
    teamList.get().then(res => {
      this.setData({
        group: res.data
      })
    })
  },
  value(event){
    this.setData({
      groupId: event.target.dataset.groupid
    })
    console.log(this.data.groupId)
  },
  toProjectManagement(event){
    wx.navigateTo({
      url: '../ProjectManagement/ProjectManagement',
    })
  },
  toMyInterview(event){
    wx.navigateTo({
      url: '../MyInterview/MyInterview',
    })
  },
  onChange(event){

  },
  delete(event){
    teamList.doc(this.data.groupId).remove()
    .then(res => {
      wx.showToast({
        title: '删除成功',
        icon: 'success',
        duration: 1000,
      })
    })
    .catch(error => {
      console.log(error)
    })
  }
})