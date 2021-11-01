//Hard coded needs to be linked to a db. 

const data = {
  '10/30/2021':[{title: 'Workshop1',text:'This is workshopaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', time:'2:00am-4:00am'},{title: 'Workshop2',time:'2:00am-5:00pm',text:'hello world'},{title: 'Workshop1',text:'This is workshop', time:'2:00am-4:00am'},{title: 'Workshop1',text:'This is workshop', time:'2:00am-4:00am'},{title: 'Workshop1',text:'This is workshop', time:'2:00am-4:00am'},{title: 'Workshop1',text:'This is workshop', time:'2:00am-4:00am'},{title: 'Workshop1',text:'This is workshop', time:'2:00am-4:00am'},{title: 'Workshop1',text:'This is workshop', time:'2:00am-4:00am'},{title: 'Workshop1',text:'This is workshop', time:'2:00am-4:00am'}],
  '10/31/2021':[{title: 'Workshop123',text:'This is workshop', time:'2:00am-4:00am'},{title: 'Workshop2',time:'2:00am-5:00pm'},]
}

export default function getData(value){
  return data[value] ? data[value] : []
}
