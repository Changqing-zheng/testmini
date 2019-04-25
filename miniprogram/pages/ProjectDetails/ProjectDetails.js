const db = wx.cloud.database();
const proList = db.collection('projectList');
const teamList = db.collection('teamList');

Page({
  
  data: {
    detail: [],
    team: [],
    teamId: ""
  },
  createTeam(event){
    wx.navigateTo({
      url: '../CreateGroup/CreateGroup?teamId=' + this.data.teamId,
    })
  },
  onLoad: function(options){
    proList.where({
      _id: options.projectId
    }).get().then(res => {
      this.setData({
        detail: res.data,
        teamId: options.projectId
      })
    })
    teamList.where({
      teamid: options.projectId
    }).get().then(res => {
      this.setData({
        team: res.data
      })
    })
  }
})