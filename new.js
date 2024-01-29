const Fundive= [
  {day: "2024-02-25",id: "0️⃣2️⃣", total: 1, name: fun02.name,loca: '📍未知',time: '',arri: '',image: fun02.link},
  {day: "2024-02-24",id: "0️⃣2️⃣", total: 1, name: fun02.name,loca: '📍未知',time: '',arri: '',image: fun02.link},
  {day: "2024-02-17",id: "0️⃣2️⃣", total: 1, name: fun02.name,loca: '📍未知',time: '',arri: '',image: fun02.link},
  {day: "2024-02-12",id: "0️⃣5️⃣", total: 2, name: fun05.name+"-Boat A",loca: '📍威士忌灣',time: '',arri: '',image: fun05.link},
  {day: "2024-02-12",id: "0️⃣5️⃣", total: 2, name: fun05.name+"-Boat B",loca: '📍龍蝦灣/\n     小棕林',time: '',arri: '',image: fun05.link},
  {day: "2024-02-11",id: "0️⃣5️⃣", total: 3, name: fun05.name+"-Boat A",loca: '📍橋咀',time: '',arri: '',image: fun05.link},
  {day: "2024-02-11",id: "0️⃣5️⃣", total: 3, name: fun05.name+"-Boat B",loca: '📍癩痢',time: '',arri: '',image: fun05.link},
  {day: "2024-02-11",id: "0️⃣5️⃣", total: 3, name: fun05.name+"-Boat C",loca: '📍青洲',time: '',arri: '',image: fun05.link},
  {day: "2024-02-04",id: "0️⃣2️⃣", total: 1, name: fun02.name,loca: '📍未知',time: '',arri: '',image: fun02.link},
  {day: "2024-01-29",id: "0️⃣3️⃣", total: 1, name: fun03.name,loca: '📍癩痢',time: '',arri: '',image: fun03.link},
  {day: "2024-01-14",id: "0️⃣3️⃣", total: 1, name: fun03.name,loca: '📍火石',time: '',arri: '',image: fun03.link},
  ]


const [Fundive,setData] = useState([]);
const getAPIData=async ()=>{
    const url = "https://chlaw0.github.io";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
}

useEffect(()=>{
    getAPIData()
},[])



export default function App(){ 
  const [Fundive,setData] = useState([]);
  const url = "https://chlaw0.github.io";
  
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));
  }, []);
  
  }

  const [Fundive,setData] = useState([]);
  const [loding,setloading] = useState(true);
  const url = "https://chlaw0.github.io";

  useEffect(()=>{
      fetch(url)
      .then((response)=>response.json())
      .then((json)=>setData(json))
      .catch((error)=>console.error(error))
      .finally(()=>setloading(false));
  },[])


  [
    {"day": "2024-02-26", "total": "1", "name": `DiveMate${"\n"}潛·伴`,"loca": '📍testing',"time": '',"arri": '',"image": "require('./image/image020.jpeg')"},
    {"day": "2024-02-25", "total": "1", "name": `DiveMate${"\n"}潛·伴`,"loca": '📍未知',"time": '',"arri": '',"image": "require('./image/image020.jpeg')"},
    {"day": "2024-02-24", "total": "1", "name": `DiveMate${"\n"}潛·伴`,"loca": '📍未知',"time": '',"arri": '',"image": "require('./image/image020.jpeg')"},
    {"day": "2024-02-17", "total": "1", "name": `DiveMate${"\n"}潛·伴`,"loca": '📍未知',"time": '',"arri": '',"image": "require('./image/image020.jpeg')"},
    {"day": "2024-02-12", "total": "2", "name": `Diving Express${"\n"}潛水快線-Boat A`,"loca": '📍威士忌灣',"time": '',"arri": '',"image": "require('./image/image050.jpeg')"},
    {"day": "2024-02-12", "total": "2", "name": `Diving Express${"\n"}潛水快線-Boat B`,"loca": '📍龍蝦灣/\n     小棕林',"time": '',"arri": '',"image": "require('./image/image050.jpeg')"},
    {"day": "2024-02-11", "total": "3", "name": `Diving Express${"\n"}潛水快線-Boat A`,"loca": '📍橋咀',"time": '',"arri": '',"image": "require('./image/image050.jpeg')"},
    {"day": "2024-02-11", "total": "3", "name": `Diving Express${"\n"}潛水快線-Boat B`,"loca": '📍癩痢',"time": '',"arri": '',"image": "require('./image/image050.jpeg')"},
    {"day": "2024-02-11", "total": "3", "name": `Diving Express${"\n"}潛水快線-Boat C`,"loca": '📍青洲',"time": '',"arri": '',"image": "require('./image/image050.jpeg')"},
    {"day": "2024-02-04", "total": "1", "name": `DiveMate${"\n"}潛·伴`,"loca": '📍未知',"time": '',"arri": '',"image": "require('./image/image020.jpeg')"},
    {"day": "2024-01-29", "total": "1", "name": `EX Diving${"\n"}潛水專門店`,"loca": '📍癩痢',"time": '',"arri": '',"image": "require('./image/image030.jpeg')"},
    {"day": "2024-01-14", "total": "1", "name": `EX Diving${"\n"}潛水專門店`,"loca": '📍火石',"time": '',"arri": '',"image": "require('./image/image030.jpeg')"}
    ]


[
    {"day": "2024-02-25","id": "0️⃣2️⃣", "total": 1, "name": `DiveMate${"\n"}潛·伴`,"loca": '📍未知',"time": '',"arri": '',"image": "require('./image/image020.jpeg')"},
    {"day": "2024-02-24","id": "0️⃣2️⃣", "total": 1, "name": `DiveMate${"\n"}潛·伴`,"loca": '📍未知',"time": '',"arri": '',"image": "require('./image/image020.jpeg')"},
    {"day": "2024-02-17","id": "0️⃣2️⃣", "total": 1, "name": `DiveMate${"\n"}潛·伴`,"loca": '📍未知',"time": '',"arri": '',"image": "require('./image/image020.jpeg')"},
    {"day": "2024-02-12","id": "0️⃣5️⃣", "total": 2, "name": `Diving Express${"\n"}潛水快線-Boat A`,"loca": '📍威士忌灣',"time": '',"arri": '',"image": "require('./image/image050.jpeg')"},
    {"day": "2024-02-12","id": "0️⃣5️⃣", "total": 2, "name": `Diving Express${"\n"}潛水快線-Boat B`,"loca": '📍龍蝦灣/\n     小棕林',"time": '',"arri": '',"image": "require('./image/image050.jpeg')"},
    {"day": "2024-02-11","id": "0️⃣5️⃣", "total": 3, "name": `Diving Express${"\n"}潛水快線-Boat A`,"loca": '📍橋咀',"time": '',"arri": '',"image": "require('./image/image050.jpeg')"},
    {"day": "2024-02-11","id": "0️⃣5️⃣", "total": 3, "name": `Diving Express${"\n"}潛水快線-Boat B`,"loca": '📍癩痢',"time": '',"arri": '',"image": "require('./image/image050.jpeg')"},
    {"day": "2024-02-11","id": "0️⃣5️⃣", "total": 3, "name": `Diving Express${"\n"}潛水快線-Boat C`,"loca": '📍青洲',"time": '',"arri": '',"image": "require('./image/image050.jpeg')"},
    {"day": "2024-02-04","id": "0️⃣2️⃣", "total": 1, "name": `DiveMate${"\n"}潛·伴`,"loca": '📍未知',"time": '',"arri": '',"image": "require('./image/image020.jpeg')"},
    {"day": "2024-01-29","id": "0️⃣3️⃣", "total": 1, "name": `EX Diving${"\n"}潛水專門店`,"loca": '📍癩痢',"time": '',"arri": '',"image": "require('./image/image030.jpeg')"},
    {"day": "2024-01-14","id": "0️⃣3️⃣", "total": 1, "name": `EX Diving${"\n"}潛水專門店`,"loca": '📍火石',"time": '',"arri": '',"image": "require('./image/image030.jpeg')"}]