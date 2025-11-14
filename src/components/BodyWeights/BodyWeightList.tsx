import { getWeights } from "../../app/api/auth/actions"
import BodyWeight from "@/components/BodyWeights/BodyWeight"

export default async function BodyWeightList() {
  const data = await getWeights()

  if (data.length === 0) return <div></div>

  return (
  <div className="max-h-full overflow-x-hidden justify-around">
    <div className="w-full text-white bg-transparent">

      <div className="flex justify-around bg-gray-900 rounded-t-lg border-b border-gray-800">
        <div className="px-6 py-3 text-xs uppercase font-semibold text-gray-300 border-gray-800 whitespace-nowrap">
          Date
        </div>

        <div className="px-6 py-3 text-xs uppercase font-semibold text-gray-300 border-gray-800 whitespace-nowrap">
          Your Weight
        </div>

        <div className="px-6 py-3 text-xs uppercase font-semibold text-gray-300 border-gray-800 whitespace-nowrap">
        </div>
      </div>

      <div className="divide-y divide-gray-800 bg-gray-800 rounded-b-lg">
        {data
          .reverse()
          .map((bodyWeight: { id: string; createdAt: Date; weight: number }) => (
            <BodyWeight
              key={bodyWeight.id}
              id={bodyWeight.id}
              date={bodyWeight.createdAt.toLocaleDateString("es-MX")}
              weight={bodyWeight.weight}
            />
          ))}
      </div>
    </div>
  </div>
)
} 


{/* <div className="max-h-full overflow-scroll overflow-x-hidden justify-around">
      <div className="items-center bg-transparent w-full border-collapse text-white justify-around">
        <div>
          <div className="flex justify-around bg-blueGray-50">
            <div className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Date
                        </div>
          <div className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Your Weight
                        </div>
          <div className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                           
          </div>
          </div>
        </div>

        <div>
          data.reverse().map((bodyWeight: {id:string, createdAt: Date, weight:number}) => (
            <BodyWeight key={bodyWeight.id} id={bodyWeight.id} date={bodyWeight.createdAt.toLocaleDateString('es-MX')} weight={bodyWeight.weight}></BodyWeight>
          ))}
        </div>
      </div>
    </div> */}
