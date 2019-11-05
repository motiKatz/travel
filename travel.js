num = 0
ordersArr = []

let listsArr = [{Travelcode:11,Traveldestination:'NewYork',Travelprice:1500},
    {Travelcode:16,Traveldestination:'Prague',Travelprice:399},
    {Travelcode:23,Traveldestination:'Vienna',Travelprice:650},
    {Travelcode:27,Traveldestination:'Mumbai',Travelprice:1329},
    {Travelcode:54,Traveldestination:'London',Travelprice:1450},
    {Travelcode:15,Traveldestination:'Amsterdam',Travelprice:789},
    {Travelcode:41,Traveldestination:'Ukraine',Travelprice:699},
    {Travelcode:06,Traveldestination:'Barcelona',Travelprice:1289},
    {Travelcode:33,Traveldestination:'Cyprus',Travelprice:299}];

     

function makeAnOrder(){
    
    console.log("makeAnOrder started")
    
let orderNumber = num +1 
num = orderNumber
   console.log(num)
let trCode = document.getElementById("tc").value
   console.log(trCode)
let myCustomer = listsArr.find(travel=>{return travel.Travelcode==trCode});
   console.log(myCustomer)
let CustomerName = document.getElementById("cn").value

let TravelDestination = myCustomer.Traveldestination

let NumberOfTickets = document.getElementById("not").value

let parsonalID = document.getElementById("pi").value

let TotalPrice = NumberOfTickets*myCustomer.Travelprice

  console.log("makeAnOrder Ended")
 

document.getElementById("tc").value = ''
document.getElementById("cn").value = ''
document.getElementById("not").value = ''
document.getElementById("pi").value = ''


OrderRegistration(orderNumber,CustomerName,TravelDestination,NumberOfTickets,parsonalID,TotalPrice)
}

function OrderRegistration(orderNumber,CustomerName,TravelDestination,NumberOfTickets,parsonalID,TotalPrice){

    ordersArr.push({number:orderNumber,name:CustomerName,destination:TravelDestination,tickets:NumberOfTickets,id:parsonalID,price:TotalPrice})
    let myTable = document.getElementById("ord")
    let str = "<tr><th>"+orderNumber+"</th><th>"+CustomerName+"</th><th>"+TravelDestination+"</th><th>"+NumberOfTickets+"</th><th>"+parsonalID+"</th><th>"+TotalPrice+"</th></tr>"
    myTable.innerHTML += str
}

function Search(){
  let LookFor = document.getElementById("name").value
  
  let thisName = ordersArr.filter(travels=>{return travels.name==LookFor});
  let totalPayment = 0;
    let thisStr = ''
    thisName.forEach(element => {
      searchingTable = document.getElementById("search")
      thisStr =  "<tr><th>"+element.number +"</th><th>"+ element.name +"</th><th>"+element.destination+"</th><th>"+element.price+"</th>"
      searchingTable.innerHTML += thisStr
      totalPayment += element.price;
      console.log("search hnded")
      });
       searchingTable.innerHTML += "<tr>total payment :" + totalPayment +"</tr>"
    }
  
