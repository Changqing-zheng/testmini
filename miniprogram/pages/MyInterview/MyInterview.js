const db = wx.cloud.database();
const myInterview = db.collection("applyInterview");

Page({
  /**
   * 页面的初始数据
   */
  data: {
    active: 2,
    interviewList: []
  },
  onLoad: function(options){
    myInterview.orderBy("date", "desc").get().then(res => {
      this.setData({
        interviewList: res.data
      })
    })
    .catch(error => {
      console.log(error);
    })
  },
  onChange(event) {

  },
  toProjectManagement(event){
    wx.navigateTo({
      url: '../ProjectManagement/ProjectManagement',
    })
  },
  toGroupManagement(event){
    wx.navigateTo({
      url: '../GroupManagement/GroupManagement',
    })
  }
})