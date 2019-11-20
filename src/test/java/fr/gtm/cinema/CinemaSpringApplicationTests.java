package fr.gtm.cinema;

import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import fr.gtm.cinema.dao.CinemaRepository;
import fr.gtm.cinema.entities.Acteur;
import fr.gtm.cinema.entities.Film;



@SpringBootTest
@ExtendWith(SpringExtension.class)
class CinemaSpringApplicationTests {
	@Autowired CinemaRepository repo;
	
	@Test
	void getAll() {
		List<Film> films = repo.findAll();
		assertTrue(films.size()>0);
		System.out.println("=================================");
		for(Film f : films) {
			System.out.println(f);
		}
		System.out.println("=================================");
	}
	
	@Test
	void getFilmEtActeursbyId() {
		Film film = repo.getFilmEtActeursById(1);
		assertTrue(film.getRole().size()==2);
		System.out.println("=================================");
		System.out.println(film);
		System.out.println(film.getRole());
		System.out.println("=================================");
		
	}

}
