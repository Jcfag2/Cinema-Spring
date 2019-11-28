package fr.gtm.album.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="utilisateurs")
public class Utilisateur {
	
@Id @GeneratedValue(strategy = GenerationType.IDENTITY)	
private long id;
private String nom;
private String password;

public Utilisateur() {}

public Utilisateur(long id, String nom, String password) {

	this.id = id;
	this.nom = nom;
	this.password = password;
}

public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public String getNom() {
	return nom;
}
public void setNom(String nom) {
	this.nom = nom;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}



}
