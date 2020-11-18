package br.com.vitrine.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.vitrine.model.Colaborador;
import br.com.vitrine.model.Estabelecimento;

@Repository
public interface ColaboradorRepository extends JpaRepository<Colaborador, Long> {
	Optional<Colaborador> findByNomeAndSenha(String nome, String senha);
	Optional<Colaborador> findByNomeAndSenhaAndEstabelecimento(String nome, String senha, Estabelecimento estabelecimento);
	Optional<Colaborador> findByEstabelecimentoAndId(Estabelecimento estabelecimento, Long id);
}
