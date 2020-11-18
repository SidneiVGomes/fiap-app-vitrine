package br.com.vitrine.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.vitrine.model.AnuncioProduto;

public interface AnuncioProdutoRepository extends JpaRepository<AnuncioProduto, Long> {
	Optional<AnuncioProduto> findByDescricao(String descricao);
}
