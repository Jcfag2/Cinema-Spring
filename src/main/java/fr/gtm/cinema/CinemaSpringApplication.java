package fr.gtm.cinema;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;


@SpringBootApplication
@EnableAsync
@EnableSwagger2
@Controller
public class CinemaSpringApplication implements ErrorController{

	
	public static void main(String[] args) {
		SpringApplication.run(CinemaSpringApplication.class, args);
	}
	
	@Bean
	public Docket api() {
		return new Docket(DocumentationType.SWAGGER_2)
					.select()
					.apis(RequestHandlerSelectors.basePackage("fr.gtm.cinema.rest"))
					.build()
					.apiInfo(apiInfo());
	}

	private ApiInfo apiInfo() {
		return new ApiInfoBuilder()
				.title("REST API de gestion de films")
				.contact(new Contact("Erwan", "http://bovoyages.fr", "e.soubeyrand@bovoyages.fr"))
				.version("0.alpha")
				.build();
	}
	
	private static final String PATH = "/error";
	
	@RequestMapping(value = PATH)
	public String error() {
		return "forward:/index.html";
	}
	

	@Override()
	public String getErrorPath() {
		return PATH;
	}
	
	
	


}
