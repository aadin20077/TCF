export default function buildCalendar(value){
  const startDay = value.clone().startOf('month').startOf('week');
  const endDay = value.clone().endOf('month').endOf('week');

  const day = startDay.clone().subtract(1,'day')
  const calendar = []
  while(day.isBefore(endDay,'day')){
    calendar.push(
      Array(7).fill(0).map(() => day.add(1,'day').clone())
    );
  }
  if(calendar.length < 6){
    const lastDay = value.clone().add(1,'month').startOf('month').add(1,'week').endOf('week');
    calendar.push(
      Array(7).fill(0).map(()=> day.add(1,'day').clone())
    )
  }
  return calendar;
}