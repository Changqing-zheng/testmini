const db = wx.cloud.database();
const proList= db.collection('projectList');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    pro: []
  },
  onLoad:function(options){
    proList.get().then(res => {
      this.setData({
        pro: res.data
      })
    })
  },
  search(event){
    proList.where({
      name: db.RegExp({
        regexp: event.detail,
        options: 'i',
      })
    }).get()
    .then(res => {
      this.setData({
        pro: res.data
      })
    })
    .catch(error => {
      console.log(error)
    })
  },
  toApplyInterview(event){
    wx.navigateTo({
      url: '../ApplyInterview/ApplyInterview',
    })
  },
  toGroupManagement(event){
    wx.navigateTo({
      url: '../GroupManagement/GroupManagement',
    })
  },
  toMyInterview(event){
    wx.navigateTo({
      url: '../MyInterview/MyInterview',
    })
  },
  toProDetails(event){
    wx.navigateTo({
      url: '../ProjectDetails/ProjectDetails?projectId=' + event.target.dataset.projectid,
    })
  },
  onChange(event) {

  }
})