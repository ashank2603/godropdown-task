import { useState } from "react"
import Loader from "./components/Loader"
import axios from "axios"
import PreviewCard from "./components/PreviewCard"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [url, setUrl] = useState("")
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const API_URL = import.meta.env.VITE_API_URL

  const getLinkInfo = async () => {
    try {
      setLoading(true)
      const res = await axios.post(API_URL, {
        link: url
      })
      setData(res.data?.data)
      setUrl("")
    } catch (error) {
      console.log(error)
      toast("Unable to fetch info", {
        theme: "dark",
        position: "bottom-right"
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center py-10">
      <ToastContainer />
      <h1 className="text-red-500 text-3xl font-semibold">Link Previewer</h1>
      <div className="flex flex-col mt-10 gap-1">
        <label htmlFor="url" className="text-red-500 text-sm ml-1">URL</label>
        <div className="flex gap-2">
          <input 
            id="url"
            placeholder="Enter URL"
            className="w-[300px] h-12 rounded-lg px-2 bg-zinc-900 text-white"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button 
            className="bg-red-500 text-white w-12 rounded-lg h-11 disabled:cursor-not-allowed disabled:bg-red-200"
            disabled={url === "" ? true : false}
            onClick={() => getLinkInfo()}
          >
            Go
          </button>
        </div>
      </div>
      {
        loading ? (
          <div className="mt-28">
            <Loader />
          </div>
        ) : data && (
          <div className="mt-10">
            <PreviewCard data={data} />
          </div>
        )
      }
    </div>
  )
}

export default App
