package fr.gtm.cinema.rest;



import java.time.LocalDate;
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

import fr.gtm.cinema.dao.ActeurRepository;
import fr.gtm.cinema.dao.CinemaRepository;
import fr.gtm.cinema.dto.ActeurDTO;
import fr.gtm.cinema.dto.FilmDTO;
import fr.gtm.cinema.entities.Acteur;
import fr.gtm.cinema.entities.Film;
import fr.gtm.cinema.util.MailReceptor;

@RestController
public class CinemaRestController {
	@Autowired ActeurRepository repo;
	@Autowired CinemaRepository repo2;
	@Autowired private JavaMailSender mailSender;

	@GetMapping("/acteurs/{id}")
	public ActeurDTO findActeurById(@PathVariable("id") long id) {
		Optional<Acteur> acteur = repo.findById(id);
		if(acteur.isPresent()) {
			ActeurDTO aDTO = new ActeurDTO(acteur.get());
			return aDTO;
		}
		return null;
		}
	
	@PostMapping("/roles/new")
	public String createRole(@RequestBody ActeurDTO acteur, FilmDTO film, String role) {
	repo.save(acteur.toActeur());
	Film f = repo2.findById(film.getId()).get();
	f.addRole(role, acteur.toActeur());
	repo2.save(f);
	return "Le role "+role+" pour l'acteur "+ acteur.getPrenom()+" "+acteur.getNom() +" a bien été créé";		
	}
	
	@PostMapping("/acteurs/new")
	public String createActeur(@RequestBody ActeurDTO acteur) {
	repo.save(acteur.toActeur());
	return acteur.getPrenom()+" "+acteur.getNom()+" a bien été créé";		
	}
	
	@PostMapping("/films/new")
	public String CreateFilm(@RequestBody FilmDTO film) {
	repo2.save(film.toFilm());
	return "Le film "+film.getTitre()+" a été créé";
	}
	
	@PostMapping("/mail/send")
	@Async
	public void testMail(@RequestBody MailReceptor r) {
		SimpleMailMessage mail = new SimpleMailMessage();
		mail.setTo(r.getEmail());
		mail.setFrom("Emmanuel.Macron@Elysee.gouv.fr");
		mail.setSubject("Merci pour votre commande");
		mail.setText("Très cher "+r.getPrenom()+",\n\nJe vous remercie chaleureusement pour votre commande.\nVive la république, vive la France\n\nLe Président,\nEmmanuel Macron");
		mailSender.send(mail);
	
	}
	

}
