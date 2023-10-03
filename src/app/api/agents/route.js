import { NextResponse } from "next/server"
import { pool } from '@/config/db'

export async function GET() {
    try {
        const result = await pool.query("SELECT * FROM agentes")
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
        const { nombres, cedula } = await request.json()
        console.log(nombres)
        console.log(cedula)

        const result = await pool.query("INSERT INTO agentes SET?", {
            nombres,
            cedula
        })
        return NextResponse.json({ id: result.insetId, nombres, cedula })
    } catch (error) {
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        )
    }
}