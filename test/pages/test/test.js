Page({
  // data:{
  //   text:'init data',
  //   num: 0,
  //   array:[{text:'init data'}],
  //   object:{
  //     text:'init data'
  //   }
  // },
  // changeText:function(){
  //   this.setData({
  //     text:"change text"
  //   })
  // },
  // changeNum:function(){
  //   this.data.num = 9
  //   this.setData({
  //     num: this.data.num
  //   })
  // },
  // changeArrayData:function(){
  //   this.setData({
  //     'array[0].text' : 'changed text'
  //   })
  // },
  // changeObjectData:function(){
  //   this.setData({
  //     'object.text' : 'change data'
  //   })
  // },
  // addNewField: function () {
  //   this.setData({
  //     'newField.text': 'new data'
  //   })
  // }

// data:{
//   staffA:{firstName:'Huk', lastName:'heheh'},
//   staffB:{firstName:'yankun', lastName:'zhang'},
//   staffC:{firstName:'ming', lastName:'li'}
// }

// data:{
//   count:1
// },
// add: function(e){
//   this.setData({
//     count:this.data.count + 1
//   })
// }

// data:{
//   objectArray:[
//     { id: 5, unique: 'unique_5' },
//     { id: 4, unique: 'unique_4' },
//     { id: 3, unique: 'unique_3' },
//     { id: 2, unique: 'unique_2' },
//     { id: 1, unique: 'unique_1' },
//     { id: 0, unique: 'unique_0' },
//   ],
//   numArray:[1,2,3,4]
// },
// switch:function(e){
//   const length = this.data.objectArray.length
//   for (let i = 0; i < length; ++i){
//     const x = Math.floor(Math.random() * length)
//     const y = Math.floor(Math.random() * length)
//     const temp = this.data.objectArray[x]
//     this.data.objectArray[x] = this.data.objectArray[y]
//     this.data.objectArray[y] = temp
//   }
//   this.setData({
//     objectArray:this.data.objectArray
//   })
// },
// addToFrond:function(e){
//   const length = this.data.objectArray.length
//   this.data.objectArray = [{id: length, unique: 'unique'+length}].concat(this.data.objectArray)
//   this.setData({
//     objectArray : this.data.objectArray
//   })
// },
//   addNumToFrond:function(e){
//     this.data.numArray = [this.data.numArray.legth + 1].concat(this.data.numArray)
//     this.setData({
//       numArray: this.data.numArray
//     })
// }

// 模板 
data:{
  item:{
    index: 9,
    msg:"this is a template",
    time:'20180404'
  }
}














})