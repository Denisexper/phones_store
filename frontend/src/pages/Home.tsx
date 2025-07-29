import { useHandlePhones } from "../hooks/useHandlePhones"
import Buttoms  from "../componentes/buttomComponents";


const Home = () => {

  const { phones, deletePhone } = useHandlePhones();

  const deletePho = (id: string) => {

    deletePhone(id)
  }


  return (
    <>
    <div className="mt-1 grid grid-cols-4 gap-2">
      {
        phones.map((item) => (

          <div className="card card-body bg-amber-50 text-black" key={item._id}>
           <p className="font-medium text-2xl">{item.name}</p>
           <p> <span className="font-semibold">Modelo: </span>{item.model}</p>
           <p> <span className="font-semibold">Precio: </span> {item.price}</p>
           <img className="w-50 h-50 rounded-2xl shadow" src={item.imgUrl} alt={item.imgUrl}/>

            <div className="flex justify-items-normal gap-8">
              <button
              type="button"
              className="btn btn-ghost"
              >
                Actualizar
              </button>

              <Buttoms
              onClick={() => deletePho(item._id)}
              >
                Eliminar
              </Buttoms>
            </div>

          </div>
        ))
      }
    </div>
  </>
  )
}

export default Home
