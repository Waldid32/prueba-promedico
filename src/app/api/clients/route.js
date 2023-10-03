import { NextResponse } from "next/server"


export async function GET(req, res, next) {
    let clients = [
        {
            id: 1,
            nombre: 'Waldid Barrios',
            cedula: 1245521,
            celular: 3124587412,
            direccion: 'Cra 31A # 70 - 85',
            ciudad: 'CALI'
        },
        {
            id: 2,
            nombre: 'Gabriela Barrios',
            cedula: 36588874,
            celular: 3124587587,
            direccion: 'Cra 31A # 70 - 85',
            ciudad: 'CALI'
        }
    ]

    let data = JSON.stringify(clients)

    return new NextResponse(data, { status: 200 })
}