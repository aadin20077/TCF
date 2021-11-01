  function isSelected(day,value){
    return value.isSame(day,'day');
  }
  function beforeToday(day){
    return day.isBefore(new Date(),'day');
  }
  function beforeOrAfterMonth(day,startDay,endDay){
    return day.isAfter(endDay,'day') || day.isBefore(startDay,'day');
  }

  function isToday(day){
    return day.isSame(new Date(),'day');
  }

  export default function dayStyles(day,value){
    /*if (beforeToday(day)) return "before"*/
    const startDay = value.clone().startOf('month');
    const endDay = value.clone().endOf('month');
    console.log(endDay.format('l'))
    if(beforeOrAfterMonth(day,startDay,endDay)) return 'outside'
    if(isSelected(day,value)) return "selected"
    if(isToday(day)) return "today"
    return ""
  }