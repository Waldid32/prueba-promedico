"use client"
import Table from "@/components/Table"
import Link from "next/link"
import { useEffect, useState } from "react"

const thead = ['Nombre Completo', 'Cedula', 'Celular', 'Dirección', 'Ciudad', 'Departamento']

export default function Clientes() {
    const [client, setClient] = useState('')

    // Función para traer a los clientes de la API
    useEffect(() => {
        const getClient = async () => {
            try {
                const res = await fetch('/api/clients')
                const data = await res.json()
                setClient(data)
            } catch (error) {
                console.error('Error al obtener los datos de los clientes', error)
            }
        }
        getClient()
    }, [])

    return (
        <section className="container pt-20 mx-auto">
            <div>
                <Link href="/clientes/new">
                    <button className="btn bg-slate-800 font-bold text-white text-2xl rounded p-3 hover:bg-slate-900 cursor-pointer" type="button">
                        Nuevo Cliente
                    </button>
                </Link>
            </div>
            {/* se pasan las COLUMNAS para realizar un filtro de los registro que se quieren mostrar */}
            <Table columnas={['nombres', 'cedula', 'celular', 'direccion', 'ciudad', 'departamento']} data={client} thead={thead} />
        </section>
    )
}
