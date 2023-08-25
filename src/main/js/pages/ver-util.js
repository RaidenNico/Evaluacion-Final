const React = require('react');
const { Link, useParams } = require('react-router-dom');
const {useState, useEffect} = require('react');
const client = require('../client');

const VerUtilPage = () => {

    let { id } = useParams();
    const [util, setUtil] = useState({});

    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/utiles/' + id
        }).done(response=>setUtil(response.entity))
    }, [])



    return (
        <>
            <h1>Ver Instrumento</h1>

            <table>
                <tr>
                    <th>Nombre</th>
                    <td>{util.nombre}</td>
                </tr>
                <tr>
                    <th>Categoría</th>
                    <td>{util.categoria}</td>
                </tr>
                <tr>
                    <th>Descripción</th>
                    <td>{util.descripcion}</td>
                </tr>
            </table>

            <Link to="/">Regresar</Link>
        </>
    )

}

module.exports = VerUtilPage;