import { useHandlePhones } from "./hooks/useHandlePhones"

const App = () => {

  const { phones } = useHandlePhones();
  return (
    <div>
      {
        phones.map((item) => (

          <div key={item.id}>
           <p>{item.name}</p>
           <p>{item.model}</p>
           <p>{item.ram}</p>
           <p>{item.storage}</p>
           <p>{item.price}</p>
           <img src={item.imgUrl} /> 

          </div>
        ))
      }
    </div>
  )
}

export default App
