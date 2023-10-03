import { NextResponse } from "next/server"
import { pool } from '@/config/db'

export async function GET() {
    try {
        const result = await pool.query("SELECT * FROM ciudad")

        return NextResponse.json(result[0])
    } catch (error) {
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        )
    }
}