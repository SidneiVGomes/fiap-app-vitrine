package br.com.vitrine.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.vitrine.model.Endereco;

@Repository
public interface EnderecoRepository extends JpaRepository<Endereco, Long> {
	Optional<Endereco> findByLogradouroAndNumeroAndBairroAndCidadeAndUF(String logradouro, String numero, String bairro, String cidade, String uf);
	Optional<Endereco> findByCep(String CEP);
}
