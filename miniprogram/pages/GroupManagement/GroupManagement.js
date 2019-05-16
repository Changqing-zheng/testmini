const db = wx.cloud.database();
const teamList = db.collection('teamList')

Page({
  data: {
    active: 1,
    group: [],
    groupId: ''
  },
  getGroup(event){
    teamList.get().then(res => {
      this.setData({
        group: res.data
      })
    })
  },
  onLoad: function(options){
    this.getGroup();
  },
  getValue(event){
    this.setData({
      groupId: event.target.dataset.groupid
    })
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
  deleteGroup(event){
      this.setData({
      groupId: event.target.dataset.groupid
    })
    teamList.doc(this.data.groupId).remove()
    .then(res => {
      wx.showToast({
        title: '删除成功',
        icon: 'success',
        duration: 1000,
      })
      this.getGroup();
    })
    .catch(error => {
      console.log(error)
    })
  }
})