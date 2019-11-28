package fr.gtm.album.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.gtm.album.entities.Album;

@Repository
public interface AlbumRepository extends JpaRepository<Album, Long>{

}
