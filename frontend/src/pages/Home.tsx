import { useHandlePhones } from "../hooks/useHandlePhones"
import Buttoms from "../componentes/buttomComponents";
import { useState } from "react";
import CreateModal from "../modals/CreateModal";


const Home = () => {

  const { phones, deletePhone, createPhones } = useHandlePhones();
  const [open, setOpen] = useState<boolean>(false)

  //Estados de inputs para crear
  const [name, setName] = useState("")
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const deletePho = (id: string) => {

    deletePhone(id)
  }

  const createPhone = () => {

     createPhones({
      name,
      model,
      price: Number(price),
      imgUrl: imageUrl
    });

    //limpiar inputs
    setName("");
    setModel("");
    setPrice("");
    setImageUrl("");
  }


  return (
    <>

      <nav className="bg-blue-100 gap-5 w-full justify-between flex p-5">
        <h1 className="text-black text-3xl font-bold"> Phones Store</h1>
        <div>
          <button
            onClick={() => setOpen(true)}
            className="btn btn-primary"
          >
            Post!
          </button>

          <CreateModal open={open} onClose={() => { setOpen(false) }}
          >
            <h2 className="gap-5 p-4 font-bold">CREATE PHONE</h2>
            <div className="grid grid-cols-2 gap-4">

              <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="border p-2 rounded placeholder-gray-400"
              />

              <input type="text"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="Model"
                className="border p-2 placeholder-gray-400"
              />

              <input type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
                className="border p-2 placeholder-gray-400"
              />

              <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Image URL"
                className="border p-2 rounded"
              />

              <button
                className="btn btn-primary text-2xl justify-center"
                onClick={createPhone}
              >
                Create
              </button>

            </div>
          </CreateModal>
        </div>

      </nav>
      <div className="mt-1 grid grid-cols-4 gap-2">

        {
          phones.map((item) => (

            <div className="card card-body bg-amber-50 text-black" key={item._id}>
              <p className="font-medium text-2xl">{item.name}</p>
              <p> <span className="font-semibold">Modelo: </span>{item.model}</p>
              <p> <span className="font-semibold">Precio: </span> {item.price}</p>
              <img className="w-50 h-50 rounded-2xl shadow" src={item.imgUrl} alt={item.imgUrl} />

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
