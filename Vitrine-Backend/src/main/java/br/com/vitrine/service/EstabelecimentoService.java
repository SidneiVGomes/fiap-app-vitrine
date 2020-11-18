package br.com.vitrine.service;

import java.util.List;
 
import org.springframework.stereotype.Service;

import br.com.vitrine.model.Estabelecimento;

@Service
public interface EstabelecimentoService {
	public Estabelecimento gravar(Estabelecimento obj);
	public Estabelecimento alterar(Long id, Estabelecimento obj);
	public Estabelecimento excluir(Long id);
	public Estabelecimento consultarPorId(Long id);
	public List<Estabelecimento> consultarTodos();
//	public EstabelecimentoResponseDTO convertToDTO(Estabelecimento obj);
}
