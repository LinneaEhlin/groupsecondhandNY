package com.group5;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class ProjectApplicationTests {

	@Autowired
	private ProductRepository productRepository;

	@Autowired
	private SiteuserRepository userRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void testGetBookWithId() {
		Product product = productRepository.getProduct(1);
		Assertions.assertEquals("Tale of Sushi", product.getName());
	}

	@Test
	public void testGetUserId() {
		Siteuser user = userRepository.findUser(1);
		Assertions.assertEquals("Sushi", user.getUsername());
	}

}
