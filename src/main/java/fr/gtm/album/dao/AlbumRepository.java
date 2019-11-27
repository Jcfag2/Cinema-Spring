package fr.gtm.album.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.gtm.album.entities.Album;

public interface AlbumRepository extends JpaRepository<Album, Long>{

}
