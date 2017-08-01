// mypages/list/list2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  text:'帅不帅?',
  object:{subObject:{objectText:'object data'}},
  array:[{arrayText:'array data'}]
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

  changeText:function(){
    this.setData({
      /*普通索引*/
      text:'new normal data'
    });
  },
  changeObjectText:function(){
    this.setData({
      /*按路径索引*/
      'object.subObject.objectText':'new object data'
    });
  },
  changeArrayText:function(){
    this.setData({
      /*按路径索引*/
      'array[0].arrayText':'new array data'
    });
  },
  addNewData:function(){
    this.setData({
      /*修改一个已绑定，但未在data中定义的数据*/
      'newField.newFieldText':'add new data'
    });
  }
});