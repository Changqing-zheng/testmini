const db = wx.cloud.database();
const applyList = db.collection('applyInterview');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:'',
    date:"请选择时间",
    array: [1, 2, 3, 4, 5],
    teacherList: ["谢老师", "小吴老师", "董老师", "小冯老师"],
    timeIndex:0,
    teacherIndex: 0,
    items: [
      { name: 'TEL', value: '电话', checked: 'true'},
      { name: 'VIDEO', value: '视频'}
    ],
    company: "",
    teacherName: "",
    interviewWay: 'TEL',
    personName: ''
  },
  DateChange:function(e) {
    this.setData({
      date:e.detail.value
    })
  }, 
  bindPickerChange:function(e) {
    this.setData({
      timeIndex: Number(e.detail.value)
    })
  },
  radioChange(event) {
    this.setData({
      interviewWay: event.detail.value
    })
  },
  upDateApply(event){
    applyList.add({
      data: {
        company: this.data.company,
        date: this.data.date,
        teacher: this.data.teacherList[this.data.teacherIndex],
        way: this.data.interviewWay,
        time: this.data.timeIndex + 1,
        person: this.data.personName,
        state: "进行中..."
      }
    })
    .then(res => {
      wx.showToast({
        title: '添加成功',
        icon: "success",
        duration: 1000
      })
    })
    .catch(error => {
      console.log(error)
    })
    wx.navigateTo({
      url: '../ProjectManagement/ProjectManagement',
    })
  },
  onChange(event){
    this.setData({
      company: event.detail
    })
  },
  selectTeacher(event){
    this.setData({
      teacherIndex: event.detail.value
    })
  },
  getName(event){
    this.setData({
      personName: event.detail
    })
  }
})