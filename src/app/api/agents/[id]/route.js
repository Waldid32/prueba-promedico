import { pool } from '@/config/db'
import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
    try {
        const result = await pool.query("SELECT * FROM `agentes` WHERE id = ?", [
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

export async function PUT(request, { params }) {
    const data = await request.json()
    try {
        await pool.query("UPDATE `agentes` SET ? WHERE id = ?", [
            data,
            params.id
        ])

        return NextResponse.json({
            ...data,
            id: params.id
        })

    } catch (error) {
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        )
    }
}

export async function DELETE(request, { params }) {
    try {
        await pool.query("DELETE FROM `agentes` WHERE id = ?", [params.id])

        return NextResponse.json(
            { message: "Agente Eliminado" },
        )

    } catch (error) {
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        )
    }
}


