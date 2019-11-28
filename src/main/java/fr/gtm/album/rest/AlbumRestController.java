package fr.gtm.album.rest;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailMessage;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import fr.gtm.album.dao.AlbumRepository;
import fr.gtm.album.dao.UtilisateurRepository;
import fr.gtm.album.entities.Album;
import fr.gtm.album.entities.Utilisateur;


@RestController
public class AlbumRestController {

	@Autowired
	AlbumRepository repo3;
	@Autowired
	UtilisateurRepository repo4;
	

	
	@GetMapping("/albums/all")
	public List<Album> getAllAlbums() {
	List<Album> albums = repo3.findAll();
	
		return albums;
	}
	
	@GetMapping("/albums/{id}")
	public Album getAlbumById(@PathVariable("id")long id) {
	Album album = repo3.findById(id).get();
	
		return album;
	}
	
	@PostMapping("/albums/new")
	public Album createActeur(@RequestBody Album album) {
		repo3.save(album);
		return album;
	}

	@PostMapping("/albums/log")
	public boolean login(@RequestBody Utilisateur u) {
		System.out.println(u.getNom() +" " +u.getPassword());
		String nom = u.getNom();
		String pw = u.getPassword();

		
		Utilisateur u2 = repo4.getUtilisateurByNom(nom);
		if (pw.equals(u2.getPassword())) {
			System.out.println("c'est valide");
			return true;
		}else {
		System.out.println("c'est pas valide");
		return false;
		}

	}
	

}
