export default function Table({ columnas, data, thead }) {

    // Validación para que el json que no es un array
    if (!(data instanceof Array)) {
        return null;
    }

    return (
        <div className="py-20">
            <table className="table-auto border border-separate border-slate-900 w-full">
                <thead className="bg-slate-900">
                    <tr className="font-bold text-xl text-white">
                        {thead.map((theadData, index) => (
                            <th key={index} className="border border-slate-900">{theadData}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {
                        //Se recorre cada item (DATA), y se debe iterar las columnas para extraer los nombres de las columnas del json
                        // item[columna] seria como item["nombres"] etc..
                        data.map((item, index) => (
                            <tr key={`tr${index}`} className="text-xl">
                                {columnas.map((columna, index) => (
                                    <td key={`tc${index}`} className="border border-slate-950">
                                        {item[columna]}
                                    </td>
                                ))}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}