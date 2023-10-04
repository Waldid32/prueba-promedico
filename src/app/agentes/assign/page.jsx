"use client"
import { getAgentes, getClientes } from "@/app/api/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function AssingAgent({ params }) {
    const router = useRouter()

    const [clientes, setClientes] = useState([])
    const [agentes, setAgentes] = useState([])
    const [err, setErr] = useState('')

    const [clienteSelect, setClientSelect] = useState('')
    const [showClient, setShowClient] = useState(true)

    const [agenteSelect, setAgenteSelect] = useState('')
    const [showAgente, setShowAgente] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const clientes = await getClientes()
                setClientes(clientes)

                const agentes = await getAgentes()
                setAgentes(agentes)

            } catch (error) {
                console.error("Error al cargar los datos", error)
            }
        }
        fetchData()
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault()
        if (clienteSelect && agenteSelect) {
            try {
                const res = await fetch(`/api/clients/${clienteSelect}`, {
                    method: 'PUT',
                    body: JSON.stringify({ clienteSelect, agenteSelect }),
                    headers: {
                        "Content-Type": 'application/json'
                    }
                })
                const data = await res.json()
            } catch (error) {
                console.error(error)
            }
        } else {
            // Muestra un mensaje de error o realiza alguna acción para indicar que los campos son obligatorios
            setErr('Por favor, selecciona un cliente o un agente.')
        }
        // router.push('/')
    }

    return (
        <div>
            <h1 className="text-4xl font-bold mb-10 text-center my-20">Asignando agente al cliente</h1>
            <div className="flex justify-center items-center">
                <form
                    className="w-1/2"
                    onSubmit={onSubmit}
                >
                    <label htmlFor="client" className="text-xl font-bold">Cliente</label>
                    <select
                        id="client"
                        className="border rounded w-full py-2 px-3 text-gray-700 mb-6"
                        onFocus={() => setShowClient(true)}
                        onChange={(e) => setClientSelect(e.target.value)}
                        value={clienteSelect}
                    >
                        <option value="" disabled hidden>Seleccionar cliente</option>
                        {clientes &&
                            clientes.map((cliente) => (
                                <option key={cliente.id} value={cliente.id}>
                                    {cliente.nombres}
                                </option>
                            ))}
                    </select>

                    <label htmlFor="agente" className="text-xl font-bold">Agente</label>
                    <select
                        id="client"
                        className="border rounded w-full py-2 px-3 text-gray-700 mb-6"
                        onFocus={() => setShowAgente(true)}
                        onChange={(e) => setAgenteSelect(e.target.value)}
                        value={agenteSelect}
                    >
                        <option value="" disabled hidden>Seleccionar agente</option>
                        {agentes &&
                            agentes.map((agente) => (
                                <option key={agente.id} value={agente.id}>
                                    {agente.nombres}
                                </option>
                            ))}
                    </select>
                    <div className="flex flex-col">
                        <button type="submit" className="btn py-3 bg-slate-900 text-white font-bold w-52 rounded mt-3 mb-6">Asignar</button>
                        <span className="text-red-700 text-base">{err}</span>
                    </div>
                </form>

            </div>
        </div>
    )
}
