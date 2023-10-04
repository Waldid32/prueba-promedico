import { NextResponse } from "next/server"
import { pool } from '@/config/db'

export async function GET() {
    try {
        const result = await pool.query(`
            SELECT clients.id, clients.nombres, clients.cedula, clients.celular, clients.direccion, ciudad.ciudad, dep.departamento, agentes.nombres AS "agente"
            FROM clients
            INNER JOIN ciudad ON clients.ciudad = ciudad.id
            INNER JOIN departamento dep ON dep.id = ciudad.id_departamento
            LEFT JOIN agentes ON agentes.id = clients.id_agent    
            ORDER BY clients.id_agent ASC      
        `)
        return NextResponse.json(result[0])
    } catch (error) {
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        )
    }
}

export async function POST(request) {
    try {
        const { nombres, cedula, celular, direccion, ciudad } = await request.json()

        const result = await pool.query("INSERT INTO clients SET ?", {
            nombres, cedula, celular, direccion, ciudad
        })
        return NextResponse.json({ id: result.insetId, nombres, cedula, celular, direccion, ciudad })
    } catch (error) {
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        )
    }
}