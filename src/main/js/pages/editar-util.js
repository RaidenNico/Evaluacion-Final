const React = require('react');
const {useState, useEffect} = require('react');
const { Link, useParams } = require('react-router-dom');
const client = require('../client');

const EditarUtilesPage = ()=>{

    const [util, setUtil] = useState({})
    let { id } = useParams();

    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/utiles/'+id
        }).done((response)=>setUtil(response.entity))
    },[])

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/utiles/'+id,
            entity: util,
            headers: {'Content-Type': 'application/json'}
        }).done(()=>window.location = '/')
    }

    return(
        <>
            <h1>Editar Util Escolar</h1>

            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input type="text" id="nombre" name="nombre" value={util.nombre} onChange={(e)=>setUtil({...util, nombre: e.target.value})} /> <br/>
                <label>Categoria</label>
                <input type="text" id="categoria" name="categoria" value={util.categoria} onChange={(e)=>setUtil({...util, categoria: e.target.value})}  /> <br/>
                <label>Descripcion</label>
                <input type="text" id="descripcion" name="descripcion" value={util.descripcion} onChange={(e)=>setUtil({...util, descripcion: e.target.value})}  /> <br/>
                
                <input type="submit" value="Editar Util Escolar" />
            </form>

        </>
    )
}

module.exports = EditarUtilesPage