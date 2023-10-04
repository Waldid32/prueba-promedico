"use client"
import Table from "@/components/Table"
import Link from "next/link"
import { useEffect, useState } from "react"
import { getClientes } from "./api/api"

const thead = ['Clientes', 'Agente']

export default function Home() {

  const [client, setClient] = useState([])

  useEffect(() => {
    const getClient = async () => {
      try {
        const clientes = await getClientes()
        setClient(clientes)
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
          {/* se pasan las COLUMNAS para realizar un filtro de los registro que se quieren mostrar */}
          <Table data={client} thead={thead} columnas={['nombres', 'agente']} />
        </div>
      </div>
    </section>
  )
}
