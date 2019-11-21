package fr.gtm.cinema.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.gtm.cinema.entities.Acteur;

@Repository
public interface ActeurRepository extends JpaRepository<Acteur, Long>{

}
