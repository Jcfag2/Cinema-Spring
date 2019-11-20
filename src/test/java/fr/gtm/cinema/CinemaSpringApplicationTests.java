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
		System.out.println(" ");
		System.out.println("====================================================================================================================================");
		System.out.println(" ");
		for(Film f : films) {
			System.out.println("\u001B[33m"+"Film: "+"\u001B[34m"+f.getTitre()+"\u001B[33m"+"\nRéalisé par: "+"\u001B[34m"+f.getRealisateur()+"\u001B[33m"+"\nSortie le : "+"\u001B[34m"+f.getDateSortie()+"\u001B[33m"+"\nD'une durée de: "+"\u001B[34m"+f.getDuree()+" minutes.\u001B[0m");
			System.out.println(" ");
		}
		System.out.println("====================================================================================================================================");
		System.out.println(" ");
	}
	
	@Test
	void getFilmEtActeursbyId() {
		Film f = repo.getFilmEtActeursById(1);
		assertTrue(f.getRole().size()==2);
		System.out.println(" ");
		System.out.println("====================================================================================================================================");
		System.out.println("\u001B[33m"+"Film: "+"\u001B[34m"+f.getTitre()+"\u001B[33m"+"\nRéalisé par: "+"\u001B[34m"+f.getRealisateur()+"\u001B[33m"+"\nSortie le : "+"\u001B[34m"+f.getDateSortie()+"\u001B[33m"+"\nD'une durée de: "+"\u001B[34m"+f.getDuree()+" minutes.\u001B[0m");
		System.out.println("\u001B[36m"+f.getRole()+"\u001B[0m");
		System.out.println("====================================================================================================================================");
		System.out.println(" ");
	}

}
