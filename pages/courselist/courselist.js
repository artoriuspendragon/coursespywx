// courselist.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
  weeks:['周一','周二','周三','周四','周五','周六','周日'],
  courseinfo:null,
  singleweekinfo:[],
  nullobject:{},
  thisweek:1,
  forward:">",
  backward:"<",
  modalhidden:true,
  currentweekday:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var tools=require("../../tools.js")
    var getinfo = tools.getlocalcourseinfo()
    console.log('page.onload:'+JSON.stringify(getinfo)+'type:'+typeof(getinfo)+'\r\n'+JSON.stringify(getinfo[0])+'length:'+getinfo.length)
    if(getinfo){
      var starttime=new Date(getinfo[25].starttime)
      var currenttime=new Date(Date.now())
      var currentweek = parseInt((currenttime - starttime) / (24 * 60 * 60 * 1000*7))+1
      if(currentweek>25)
      {currentweek=25}
      else if(currentweek<1)
      {currentweek=1}
      var getcourseinfo=getinfo.splice(0,24)
      this.setData({courseinfo : getcourseinfo,
                    singleweekinfo :getcourseinfo[currentweek-1],
                    thisweek:currentweek,
                    currentweekday:currenttime.getDay()})
                    }
  else{
    this.setData({courseinfo : false})
    }
  },
  changeweek: function (event){
    var currentweek=this.data.thisweek
    if(event.target.id=='backward'&&currentweek>1)
     {
       this.setData({
         singleweekinfo : this.data.courseinfo[currentweek-2],
         thisweek :parseInt(currentweek)-1
       })
     }
     else if(event.target.id=='forward'&&currentweek<25)
     {
      this.setData({
        singleweekinfo: this.data.courseinfo[currentweek],
        thisweek: parseInt(currentweek) + 1
      })
     } 
  },
  gotooptions:function(){
    wx.navigateTo({
      url: '../options/options',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  gotowriteonmyown: function () {
    wx.navigateTo({
      url: '../writeonmyown/writeonmyown',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  clearstorge:function(){
    this.setData({modalhidden:false})
  },
  modalcancel:function(){
    this.setData({modalhidden:true})
  },
  modalconfirm:function(){
    wx.clearStorage()
    this.setData({modalhidden:true})
    wx.reLaunch({
      url:'/pages/courselist/courselist'
    })
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
  onclick: function(event){
     wx.navigateTo({
       url: 'pages/logs/logs',
     })
  }
})