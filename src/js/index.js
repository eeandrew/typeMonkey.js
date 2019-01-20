!(function(){
  var tm = new TypeMoneky({
    debug : false,
    box : demo,
    list : [
      {
        type : 'text',
        value : '开始了。。。'
      },
      {
        type : 'text',
        value : '《水手》 郑智化',
        color : '#fe131a'
      },
      {
        type : 'text',
        value : '寻寻觅觅'
      },
      {
        type : 'text',
        value : '寻不到',
        color : '#fe131a'
      },
      {
        type : 'text',
        value : '活着的证据'
      },
      {
        type : 'text',
        value : '都市的泊油路太硬'
      },
      {
        type : 'text',
        value : '踩不出足迹',
        color : '#fe131a'
      },
      {
        type : 'text',
        value : '骄傲无知的现代人'
      },
      {
        type : 'text',
        value : '不知道珍惜'
      },
      {
        type : 'text',
        value : '那一片'
      },
      {
        type : 'text',
        value : '被文明践踏过滴'
      },
      {
        type : 'text',
        value : '海洋和天地',
        color : '#fe131a'
      },
      {
        type : 'rotate',
        value : 'lb'
      },
      {
        type : 'text',
        value : '只有远离人群'
      },
      {
        type : 'text',
        value : '才能找回'
      },
      {
        type : 'text',
        value : '我自己',
        color : '#fe131a'
      },
      {
        type : 'text',
        value : '在带着咸味的空气中'
      },
      {
        type : 'text',
        value : '自由滴呼吸'
      },
      {
        type : 'text',
        value : '耳畔又传来汽笛声'
      },
      {
        type : 'text',
        value : '和水手的笑语'
      },
      {
        type : 'text',
        value : '永远在内心的'
      },
      {
        type : 'text',
        value : '最深处',
        color : '#fe131a'
      },
      {
        type : 'text',
        value : '听见水手说。。。'
      },
      {
        type : 'text',
        value : '好了。结束了。。。',
        color : '#fe131a'
      },
    ],
    lineHeight:1.17,
    beforeCreate(next,nextIndex){
      //console.log(nextIndex)
      next()
    }
  })
  tm.init()
  let going = setInterval(()=>{
    if ( tm.isEnd ){
      clearInterval(going)
      return;
    }
    tm.next()
  },1000)
}())