const React = require('react');
const client = require('../client');
const {Link} = require('react-router-dom');

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { utiles: [], musicos: [], bandas: [] };
	}
	componentDidMount() {

		client({ method: 'GET', path: '/api/utiles' }).done(response => {
			this.setState({ utiles: response.entity._embedded.utiles });
		});

		client({ method: 'GET', path: '/api/musicos' }).done(response => {
			this.setState({ musicos: response.entity._embedded.musicos });
		});

		client({ method: 'GET', path: '/api/bandas' }).done(response => {
			this.setState({ bandas: response.entity._embedded.bandas });
		});

	}
	render() {
		return (
			<>
				<h1>Evaluacion Final</h1>
				<h2>Badajos Rojas Nicolas</h2>

				<div style={  {"width": "100%", "display": "flex"}   }>
					<div style={{"width": "calc(100% / 3)"}}>
						<Titulo entidad="Utiles Escolares" emoji="✏️" />
						<UtilesList utiles={this.state.utiles} />
						<Link to="/nuevo-util">Ingresar un nuevo Util Escolar</Link>
					</div>
				</div>

			</>
		)
	}
}

const Titulo = (props) => {
	return (
		<>
			<hr />
			<h2>{props.emoji} - {props.entidad}</h2>
			<hr />
			Lista completa de {props.entidad.toLowerCase()}
		</>
	)
}


class UtilesList extends React.Component {
	render() {
		const utiles = this.props.utiles.map(util =>
			<Util key={util._links.self.href} util={util} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Categoría</th>
						<th>Acciones</th>
					</tr>
					{utiles}
				</tbody>
			</table>
		)
	}
}



class Util extends React.Component {
	render() {
		const id = this.props.util._links.self.href.split("/").slice(-1)
		return (
			<tr>
				<td>{this.props.util.nombre}</td>
				<td>{this.props.util.categoria}</td>
				<td>
					<Link to={"/ver-util/" + id}>Ver</Link> |
					<Link to={"/editar-util/" + id}>Editar</Link>
				</td>
			</tr>
		)
	}
}



module.exports = HomePage;