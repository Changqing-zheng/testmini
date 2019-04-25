const db = wx.cloud.database();
const proList= db.collection('projectList');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    pro:[]
  },
  onLoad:function(options){
    proList.get().then(res => {
      this.setData({
        pro: res.data
      })
    })
  },
  onChange(event){

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
  }
})