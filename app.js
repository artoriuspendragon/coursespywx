//app.js
App({
  onLaunch: function () {

  //  var tools = require("tools.js")
  //  this.globalData.getinfo=tools.getlocalcourseinfo()
 //   console.log("global.info:"+JSON.stringify(this.globalData.getinfo))
  },
  setcourseinfo(info)
  {
   this.globalData.getinfo=info
  },
  globalData:{
    userInfo:null,
    getinfo:[],
  }
})