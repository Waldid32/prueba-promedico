"use client"
import Table from '@/components/Table'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const thead = ['Nombre Completo', 'Cedula']

export default function Agentes() {
    const [agent, setAgent] = useState('')

    // Función para traer los agentes de la API
    useEffect(() => {
        const getAgent = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/agents')
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
            {/* se pasan las columnas para realizar un filtro de los registro que se quieren mostrar */}
            <Table columnas={['nombres', 'cedula']} data={agent} thead={thead} />
        </section>
    )
}
