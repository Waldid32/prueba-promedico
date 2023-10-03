"use client"
import Link from "next/link"
import { useEffect, useState } from "react"


export default function Clientes() {

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
        <section className="container mx-auto py-20">
            <div>
                <Link href="/clientes/new">
                    <button className="btn bg-slate-800 font-bold text-white text-2xl rounded p-3 hover:bg-slate-900 cursor-pointer" type="button">
                        Nuevo Cliente
                    </button>
                </Link>
            </div>
            <div className="py-20">
                <table className="table-auto border border-separate border-slate-900 w-full md:table-fixed">
                    <thead className="bg-slate-900">
                        <tr className="font-bold text-xl text-white">
                            <th className="border border-slate-900">Nombre Completo</th>
                            <th className="border border-slate-900">Cedula</th>
                            <th className="border border-slate-900">Celular</th>
                            <th className="border border-slate-900">Dirección</th>
                            <th className="border border-slate-900">Ciudad</th>
                            <th className="border border-slate-900">Departamento</th>
                        </tr>
                    </thead>
                    {client && (
                        client?.map((data) => (
                            <tbody key={data.id}>
                                <tr className="text-xl">
                                    <td className="border border-slate-950">{data.nombres} </td>
                                    <td className="border border-slate-950">{data.cedula} </td>
                                    <td className="border border-slate-950">{data.celular} </td>
                                    <td className="border border-slate-950">{data.direccion} </td>
                                    <td className="border border-slate-950">{data.ciudad} </td>
                                    <td className="border border-slate-950">{data.departamento} </td>
                                </tr>
                            </tbody>
                        ))
                    )}
                </table>
            </div>
        </section>
    )
}
