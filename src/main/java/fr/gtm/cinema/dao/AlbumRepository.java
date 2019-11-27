package fr.gtm.cinema.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.gtm.cinema.entities.Album;

public interface AlbumRepository extends JpaRepository<Album, Long>{

}
