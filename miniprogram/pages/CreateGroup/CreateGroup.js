const db = wx.cloud.database();
const teamList = db.collection('teamList')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    teamId: "",
    teamname: "",
    teamleader: "",
    player: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      teamId: options.teamId
    })
  },
  addGroup(event){
    teamList.add({
      data: {
        teamid: this.data.teamId,
        name: this.data.teamname,
        teamleader: this.data.teamleader,
        player: this.data.player
      }
    })
    .then(res => {
      wx.showToast({
        title: '创建队伍成功',
        icon: 'success',
        duration: 1000
      })
      this.setData({
        teamname: "",
        teamleader: "",
        player: ""
      })
    })
  },
  iptTName(event){
    this.setData({
      teamname: event.detail
    })
  },
  iptLeaderName(event){
    this.setData({
      teamleader: event.detail
    })
  },
  iptPlayer(event){
    this.setData({
      player: event.detail
    })
  }
})