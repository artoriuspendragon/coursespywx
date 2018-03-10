// writeonmyown.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
       myowndata:"",

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  datainput(event){
    this.setData({myowndata:event.detail.value});
  },
  startwrite(){
    var tools = require('../../tools.js');
    var info=new Object();
    var data=this.data.myowndata;
    data=data.replace(/'/g,'"');
    console.log(data);
    info = JSON.parse(data);
    tools.writeowncourseinfo(info,this);
  },
    cancelbutton() {
    wx.navigateBack({
      delta: 2
    })
  },
    syncinfo(loadinfo) {
      if (loadinfo) {
        var App = getApp()
        App.setcourseinfo(loadinfo)
        this.setData({ warning: '' })
        wx.reLaunch({
          url: '../courselist/courselist',
        })
      }
      else {
        this.setData({
          buttondisable: false,
          warning: "获取信息失败"
        })
      }
    }
})