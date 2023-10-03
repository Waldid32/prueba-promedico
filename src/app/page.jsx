"use client"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Home() {

  const [client, setClient] = useState([])

  useEffect(() => {
    const getClient = async () => {
      try {
        const res = await fetch('http://localhost:3001/api/clients')
        const data = await res.json()
        setClient(data)
      } catch (error) {
        console.error('Error al obtener los datos de los clientes', error)
      }
    }
    getClient()
  }, [])

  return (
    <section className="container my-10 mx-auto">
      <div>
        <h1 className="font-bold text-3xl text-center">Clientes Asignado</h1>
        <div className="py-20">
          <div>
            <Link href="/agentes/assign">
              <button className="btn bg-slate-800 font-bold text-white text-2xl rounded p-3 hover:bg-slate-900 cursor-pointer mb-6" type="button">
                Asignar Agente
              </button>
            </Link>
          </div>
          <table className="table-auto border border-separate border-slate-900 w-full">
            <thead className="bg-slate-900">
              <tr className="font-bold text-xl text-white">
                <th className="border border-slate-900">Cliente</th>
                <th className="border border-slate-900">Agente</th>
              </tr>
            </thead>
            {client && (
              client?.map((data) => (
                <tbody key={data.id}>
                  <tr className="text-xl">
                    <td className="border border-slate-950">{data.nombres} </td>
                    <td className="border border-slate-950">{data.agente} </td>
                  </tr>
                </tbody>
              ))
            )}
          </table>
        </div>
      </div>
    </section>
  )
}
