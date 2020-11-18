package br.com.vitrine.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.vitrine.model.Estabelecimento;

public interface EstabelecimentoRepository extends JpaRepository<Estabelecimento, Long> {
	Optional<Estabelecimento> findByCnpj(String cnpj);
}
