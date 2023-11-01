async function cargarProductos() {
    const api = "https://653276fad80bd20280f59481.mockapi.io/api/productos"
    try {
        const response = await fetch(api);
        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error:', error);
    }
}

export default cargarProductos