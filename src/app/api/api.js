export const getClientes = async () => {

    try {
        const res = await fetch('/api/clients');
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error al obtener los clientes', error);
        throw error;
    }
};

export const getAgentes = async () => {
    try {
        const res = await fetch('/api/agents');
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error al obtener los agentes', error);
        throw error;
    }
};


export const getCiudades = async () => {
    try {
        const res = await fetch('/api/ciudades');
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error al obtener las ciudades', error);
        throw error;
    }
};




