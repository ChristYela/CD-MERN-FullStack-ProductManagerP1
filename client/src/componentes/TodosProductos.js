import React, {useEffect, useState} from "react"
import axios from "axios";
import {Link} from "react-router-dom";

const TodosProductos = props =>{
    const [productos, setProductos] = useState([]);

    useEffect(() =>{
        axios.get("http://localhost:8000/api/productos")
            .then( res => {
                setProductos(res.data);
            })
            .catch(err => console.log(err))
    }, []); 
    return (
        <div>
            <h1 className="text-center">Todos los productos</h1>
            <Link to="/nuevo" className="btn btn-success">Nuevo Producto</Link>
            <table className="table table-hover thead-dark">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Descripción</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
{
                        productos.map((producto, index) => (
                            <tr key={index}>
                                <td>{producto.nombre}</td>
                                <td>{producto.precio}</td>
                                <td>{producto.descripcion}</td>
                                <td>
                                    <Link to={`/producto/${producto._id}`} className="btn btn-primary">Detalle</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )

    
}

export default TodosProductos