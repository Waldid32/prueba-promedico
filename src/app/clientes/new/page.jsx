"use client"
import { getCiudades } from "@/app/api/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"


export default function ClientPage() {

    const router = useRouter()

    const [ciudades, setCiudades] = useState('')
    const [ciudad, setCiudad] = useState('');
    const [mostrarSeleccionarCiudad, setMostrarSeleccionarCiudad] = useState(true);

    const [nombres, setNombres] = useState('')
    const [cedula, setCedula] = useState('')
    const [celular, setCelular] = useState('')
    const [direccion, setDireccion] = useState('')

    useEffect(() => {
        const getCiudad = async () => {
            try {
                const ciudades = await getCiudades()
                setCiudades(ciudades)
            } catch (error) {
                console.error('Error al obtener las ciudades', error)
            }
        }
        getCiudad()
    }, [])


    const onSubmit = async (e) => {
        e.preventDefault()

        const res = await fetch('http://localhost:3000/api/clients', {
            method: 'POST',
            body: JSON.stringify({ nombres, cedula, celular, direccion, ciudad }),
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
            <h1 className="text-4xl font-bold mb-10 text-center my-20">Registro nuevo cliente</h1>
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

                    <label htmlFor="celular" className="text-xl font-bold">Celular</label>
                    <input
                        type="tel"
                        id="celular"
                        className="mb-6 border rounded w-full py-2 text-gray-700"
                        onChange={(e) => setCelular(e.target.value)}
                    />

                    <label htmlFor="celular" className="text-xl font-bold">Dirección</label>
                    <input
                        type="text"
                        id="direccion"
                        className="mb-6 border rounded w-full py-2 text-gray-700"
                        onChange={(e) => setDireccion(e.target.value)}
                    />

                    <label htmlFor="ciudad" className="text-xl font-bold">Ciudad</label>
                    <select
                        id="ciudad"
                        className="border rounded w-full py-2 px-3 text-gray-700 mb-6"
                        onClick={() => setMostrarSeleccionarCiudad(false)}
                        onChange={(e) => setCiudad(e.target.value)}
                        value={ciudad}
                    >
                        {ciudades &&
                            ciudades.map((ciudad) => (
                                <option key={ciudad.id} value={ciudad.id}>
                                    {ciudad.ciudad}
                                </option>
                            ))}
                    </select>
                    <button type="submit" className="btn py-3 bg-slate-900 text-white font-bold w-52 rounded mt-3 mb-6">Enviar</button>
                </form>
            </div>
        </div>
    )
}
