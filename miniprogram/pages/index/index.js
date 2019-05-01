const db = wx.cloud.database();
const login = db.collection("login");

Page({
  data: {
    username: '',
    password: '',
    error: ''
  },
  navigateToProManage(event){
    login.where({
      username: this.data.username,
      password: this.data.password
    }).get()
    .then(res => {
      if(res.data.length == 0){
        this.setData({
          error: "用户名或密码不存在"
        })
      }else {
        this.setData({
          error: ""
        })
        wx.redirectTo({
          url: '../ProjectManagement/ProjectManagement',
        })
      }
    })
    .catch(error => {
      console.log(error)
    })
  },
  getUsername(event){
    this.setData({
      username: event.detail
    })
  },
  getPassword(event){
    this.setData({
      password: event.detail
    })
  }
})