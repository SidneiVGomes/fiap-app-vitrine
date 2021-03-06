package br.com.vitrine.dto;

import java.util.ArrayList;
import java.util.List;

import br.com.vitrine.dto.interfac.RequestDTO;
import br.com.vitrine.model.Anuncio;
import br.com.vitrine.model.AnuncioProduto;
import br.com.vitrine.model.Colaborador;
import br.com.vitrine.model.Estabelecimento;

public class AnuncioReqDTO implements RequestDTO<Anuncio> {
	private Long idEstabelecimento;
	private Long idColaborador;
	private String titulo;
	private String descricao;
	private List<AnuncioProdutoReqDTO> produtos;
	
	@Override
	public Anuncio toEntity() {
		Estabelecimento estabelecimento = new Estabelecimento();
		estabelecimento.setId(this.idEstabelecimento);

		Colaborador colaborador = new Colaborador();
		colaborador.setId(this.idColaborador);
		
		Anuncio anuncio = new Anuncio();

		anuncio.setColaborador(colaborador);
		anuncio.setEstabelecimento(estabelecimento);
		anuncio.setTitulo(this.titulo);
		anuncio.setDescricao(this.descricao);

		AnuncioProduto anuncioProduto = new AnuncioProduto();
		List<AnuncioProduto> anuncioProdutos = new ArrayList<AnuncioProduto>();

		for (AnuncioProdutoReqDTO produtoDTO : produtos) {
			anuncioProduto.setAnuncio(anuncio);
			anuncioProduto.setDescricao(produtoDTO.getDescricao());
			anuncioProduto.setPreco(produtoDTO.getPreco());
			anuncioProduto.setImagem_byte(produtoDTO.getImagem_byte());
			
			anuncioProdutos.add(anuncioProduto);
		}
		
		anuncio.setProdutos(anuncioProdutos);

		return anuncio;
	}

	public AnuncioReqDTO(Long idEstabelecimento, Long idColaborador, String titulo, String descricao,
			List<AnuncioProdutoReqDTO> produtos) {
		super();
		this.setIdEstabelecimento(idEstabelecimento);
		this.setIdColaborador(idColaborador);
		this.setTitulo(titulo);
		this.setDescricao(descricao);
		this.setProdutos(produtos);
	}

	public AnuncioReqDTO() {
		super();
	}

	public Long getIdEstabelecimento() {
		return idEstabelecimento;
	}

	public void setIdEstabelecimento(Long idEstabelecimento) {
		this.idEstabelecimento = idEstabelecimento;
	}

	public Long getIdColaborador() {
		return idColaborador;
	}

	public void setIdColaborador(Long idColaborador) {
		this.idColaborador = idColaborador;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public List<AnuncioProdutoReqDTO> getProdutos() {
		return produtos;
	}

	public void setProdutos(List<AnuncioProdutoReqDTO> produtos) {
		this.produtos = produtos;
	}
}
