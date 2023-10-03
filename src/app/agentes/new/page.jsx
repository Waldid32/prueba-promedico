"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"


export default function AgentPage() {

    const router = useRouter()
    const [nombres, setNombres] = useState('')
    const [cedula, setCedula] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()

        const res = await fetch('http://localhost:3001/api/agents', {
            method: 'POST',
            body: JSON.stringify({ nombres, cedula }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        router.refresh()
        router.push('/')
    }

    return (
        <div>
            <h1 className="text-4xl font-bold mb-10 text-center my-20">Registro nuevo agente</h1>
            <div className="flex justify-center items-center">
                <form
                    className="w-1/2"
                    onSubmit={onSubmit}
                >
                    <label htmlFor="nombres" className="text-xl font-bold">Nombre Completo</label>
                    <input
                        type="text"
                        id="nombres"
                        className="mb-6 border rounded w-full py-2 text-gray-700"
                        onChange={(e) => setNombres(e.target.value)}
                    />

                    <label htmlFor="cedula" className="text-xl font-bold">Cedula</label>
                    <input
                        type="number"
                        id="cedula"
                        className="mb-6 border rounded w-full py-2 text-gray-700"
                        onChange={(e) => setCedula(e.target.value)}
                    />
                    <button type="submit" className="btn py-3 bg-slate-900 text-white font-bold w-52 rounded mt-3 mb-6">Enviar</button>
                </form>
            </div>
        </div>
    )
}
