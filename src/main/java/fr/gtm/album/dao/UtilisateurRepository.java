package fr.gtm.album.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import fr.gtm.album.entities.Utilisateur;

public interface UtilisateurRepository extends JpaRepository<Utilisateur, Long>{
@Query("SELECT u from Utilisateur WHERE u.nom = :nom")
Utilisateur findByNom(String nom);
}
