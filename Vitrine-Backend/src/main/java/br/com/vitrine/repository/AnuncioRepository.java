package br.com.vitrine.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.vitrine.model.Anuncio;
import br.com.vitrine.model.Colaborador;
import br.com.vitrine.model.Estabelecimento;

public interface AnuncioRepository extends JpaRepository<Anuncio, Long> {
	Optional<Anuncio> findByTitulo(String titulo);
	Optional<Anuncio> findByEstabelecimentoAndId(Estabelecimento estabelecimento, Long idAnuncio);
	List<Anuncio> findByEstabelecimentoAndColaborador(Estabelecimento estabelecimento, Colaborador colaborador);
	List<Anuncio> findByEstabelecimento(Estabelecimento estabelecimento);
}
