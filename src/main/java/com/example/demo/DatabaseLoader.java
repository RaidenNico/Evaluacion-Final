package com.example.demo;


import com.example.demo.Repositorys.UtilesRepository;



import com.example.demo.Class.Utiles;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final UtilesRepository repositoryI;


	@Autowired
	public DatabaseLoader(
		UtilesRepository repositoryI
		) {
		this.repositoryI = repositoryI;
		
	}

	@Override
	public void run(String... strings) throws Exception {

		this.repositoryI.save(new Utiles("Lapiz", "Escritura", "lapiz 2b marca Tecnico"));
		this.repositoryI.save(new Utiles("Lapicero","Escritura","lapicero color rojo marca Faber Castell"));
		this.repositoryI.save(new Utiles("Borrador","Limpieza","borrador de color blanco"));
		Utiles iColores = new Utiles("Colores","Arte","caja de colores de 12 marca Faber Castell");
		this.repositoryI.save(iColores);
		Utiles iVinifan = new Utiles("Vinifan","Presentacion", "vinifan doble grosor marca Navarrete");
		this.repositoryI.save(iVinifan);
		this.repositoryI.save(new Utiles("Regla","Medicion","regla de 30 cm marca Artesco"));

		




	}
}