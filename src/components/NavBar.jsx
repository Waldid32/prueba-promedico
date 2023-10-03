import Link from 'next/link'

export default function NavBar() {
    return (
        <nav className='bg-slate-900 px-5 w-full md:w-screen'>
            <div className='container mx-auto flex justify-between items-center py-3'>
                <Link href="/">
                    <h3 className='font-bold text-3xl text-white'>Promedico</h3>
                </Link>
                <ul className='flex gap-x-10 text-lg font-bold'>
                    <li>
                        <Link href="/agentes" className='text-slate-300 hover:text-slate-200'>
                            Agentes
                        </Link>
                    </li>
                    <li>
                        <Link href="/clientes" className='text-slate-300 hover:text-slate-200'>
                            Clientes
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
