package com.example.demo.Repositorys;

import com.example.demo.Class.Utiles;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "utiles", path = "utiles")
public interface UtilesRepository extends CrudRepository<Utiles, Long> {
    
}
