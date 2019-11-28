package fr.gtm.album.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import fr.gtm.album.entities.Utilisateur;

public interface UtilisateurRepository extends JpaRepository<Utilisateur, Long>{
Utilisateur findByNom(String nom);
}
