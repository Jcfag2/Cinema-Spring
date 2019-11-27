package fr.gtm.cinema.rest;

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


import fr.gtm.cinema.dao.AlbumRepository;


import fr.gtm.cinema.entities.Album;


@RestController
public class CinemaRestController {

	@Autowired
	AlbumRepository repo3;
	

	
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

	

}
