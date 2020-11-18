package br.com.vitrine.service;
 
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import br.com.vitrine.model.Colaborador;
import br.com.vitrine.model.Estabelecimento;

@Service
public interface ColaboradorService {
	public Colaborador gravar(Colaborador obj);
	public Colaborador alterar(Long id, Colaborador obj);
	public Colaborador excluir(Long id);
	public Optional<Colaborador> consultarPorId(Long id);
	public Optional<Colaborador> consultarPorColaborador(Estabelecimento estabelecimento, Long idColaborador);
	public List<Colaborador> consultarTodos();
	public Optional<Colaborador> consultarPorNomeSenha(String nome, String senha);
}
