/* eslint-disable react/prop-types */

import { MoveUpRight } from "lucide-react"

const PreviewCard = ({ data }) => {
  return (
    <div className="bg-zinc-900 flex flex-col gap-5 py-5 px-5 rounded-xl w-[400px]">
        <div className="flex justify-center mb-5">
            <img className="h-[300px] rounded-lg" src={data?.images[0]} alt="preview" />
        </div>
        <div className="flex justify-between">
            <h1 className="text-red-500 text-xl font-bold">{data?.title}</h1>
            <button
                className="bg-red-500 text-white h-10 rounded-xl px-2.5"
            >
                <a href={data?.url} target="_blank" rel="noreferrer">
                    <MoveUpRight />
                </a>
            </button>
        </div>
        <h1 className="text-zinc-500 text-sm font-bold italic">{data?.description}</h1>
    </div>
  )
}

export default PreviewCard