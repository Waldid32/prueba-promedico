import { pool } from '@/config/db'
import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
    try {
        const result = await pool.query("SELECT * FROM `clients` WHERE id = ?", [
            params.id
        ])
        return NextResponse.json(result[0])
    } catch (error) {
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        )
    }
}

export async function PUT(request) {
    const { clienteSelect, agenteSelect } = await request.json()

    try {
        await pool.query("UPDATE clients SET id_agent = ? WHERE id = ?", [
            agenteSelect,
            clienteSelect
        ])
        return NextResponse.json({ message: 'Cliente Actualizado' })
    } catch (error) {
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        )
    }
}

export async function DELETE(request, { params }) {
    try {
        await pool.query("DELETE FROM `clients` WHERE id = ?", [params.id])
        return NextResponse.json(
            { message: "Cliente Eliminado" },
        )
    } catch (error) {
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        )
    }
}