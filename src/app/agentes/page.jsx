"use client"
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Agentes() {
    const [agent, setAgent] = useState('')

    useEffect(() => {
        const getAgent = async () => {
            try {
                const res = await fetch('http://localhost:3001/api/agents')
                const data = await res.json()
                setAgent(data)
            } catch (error) {
                console.error('Error al obtener los datos de los clientes', error)
            }
        }
        getAgent()
    }, [])

    return (
        <section className="container mx-auto py-20">
            <div>
                <Link href="/agentes/new">
                    <button className="btn bg-slate-800 font-bold text-white text-2xl rounded p-3 hover:bg-slate-900 cursor-pointer" type="button">
                        Nuevo Agente
                    </button>
                </Link>
            </div>
            <div className="py-20">
                <table className="table-auto border border-separate border-slate-900 w-full">
                    <thead className="bg-slate-900">
                        <tr className="font-bold text-xl text-white">
                            <th className="border border-slate-900">Nombre Completo</th>
                            <th className="border border-slate-900">Cedula</th>
                        </tr>
                    </thead>
                    {agent && (
                        agent.map((data) => (
                            <tbody key={data.id}>
                                <tr className="text-xl">
                                    <td className="border border-slate-950">{data.nombres} </td>
                                    <td className="border border-slate-950">{data.cedula} </td>
                                </tr>
                            </tbody>
                        ))
                    )}
                </table>
            </div>
        </section>
    )
}
