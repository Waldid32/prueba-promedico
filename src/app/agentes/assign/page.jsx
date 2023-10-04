"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function AssingAgent({ params }) {
    const router = useRouter()

    const [clientes, setClientes] = useState('')
    const [clienteSelect, setClientSelect] = useState('');
    const [showClient, setShowClient] = useState(true);

    const [agentes, setAgentes] = useState('')
    const [agenteSelect, setAgenteSelect] = useState('');
    const [showAgente, setShowAgente] = useState(true);


    useEffect(() => {
        const getClientes = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/clients')
                const data = await res.json()
                setClientes(data)
            } catch (error) {
                console.error('Error al obtener las ciudades', error)
            }
        }
        getClientes()
        const getAgentes = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/agents')
                const data = await res.json()
                setAgentes(data)
            } catch (error) {
                console.error('Error al obtener las ciudades', error)
            }
        }
        getAgentes()
    }, [])


    const onSubmit = async (e) => {
        e.preventDefault()

        if (clienteSelect) {
            const res = await fetch(`/api/clients/${clienteSelect}`, {
                method: 'PUT',
                body: JSON.stringify({ clienteSelect, agenteSelect }),
                headers: {
                    "Content-Type": 'application/json'
                }
            })
            const data = await res.json()
        }
        router.refresh()
        // router.push('/')
    }

    return (
        <div>
            <h1 className="text-4xl font-bold mb-10 text-center my-20">Asignando agente a cliente</h1>
            <div className="flex justify-center items-center">
                <form
                    className="w-1/2"
                    onSubmit={onSubmit}
                >
                    <label htmlFor="client" className="text-xl font-bold">Cliente</label>
                    <select
                        id="client"
                        className="border rounded w-full py-2 px-3 text-gray-700 mb-6"
                        onClick={() => setShowClient(false)}
                        onChange={(e) => setClientSelect(e.target.value)}
                        value={clienteSelect}
                    >
                        {clientes &&
                            clientes.map((cliente) => (
                                <option key={cliente.id} value={cliente.id}>
                                    {cliente.nombres}
                                </option>
                            ))}
                    </select>

                    <label htmlFor="agente" className="text-xl font-bold">Agente</label>
                    <select
                        id="agente"
                        className="border rounded w-full py-2 px-3 text-gray-700 mb-6"
                        onClick={() => setShowAgente(false)}
                        onChange={(e) => setAgenteSelect(e.target.value)}
                        value={agenteSelect}
                    >
                        {agentes &&
                            agentes.map((agente) => (
                                <option key={agente.id} value={agente.id}>
                                    {agente.nombres}
                                </option>
                            ))}
                    </select>
                    <button type="submit" className="btn py-3 bg-slate-900 text-white font-bold w-52 rounded mt-3 mb-6">Asignar</button>
                </form>
            </div>
        </div>
    )
}
