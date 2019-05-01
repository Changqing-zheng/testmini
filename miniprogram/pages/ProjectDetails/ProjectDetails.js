const db = wx.cloud.database();
const proList = db.collection('projectList');
const teamList = db.collection('teamList');

Page({
  
  data: {
    detail: [],
    team: [],
    teamId: "",
    id: ''
  },
  createTeam(event){
    wx.navigateTo({
      url: '../CreateGroup/CreateGroup?teamId=' + this.data.teamId,
    })
  },
  getDetail(id){
    proList.where({
      _id: id
    }).get().then(res => {
      this.setData({
        detail: res.data,
        teamId: id
      })
    })
    teamList.where({
      teamid: id
    }).get().then(res => {
      this.setData({
        team: res.data
      })
    })
  },
  onLoad: function(options){
    this.getDetail(options.projectId)
  }
})