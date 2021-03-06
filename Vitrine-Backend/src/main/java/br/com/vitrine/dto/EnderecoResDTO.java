package br.com.vitrine.dto;

import br.com.vitrine.model.Endereco;

public class EnderecoResDTO {
	private String logradouro;
	private String numero;
	private String bairro;
	private String cidade;
	private String UF;
	private String pais;
	private String cep;
	private Double latitude;
	private Double longitude;
	
	public EnderecoResDTO(Endereco endereco) {
		this.setLogradouro(endereco.getLogradouro());
		this.setNumero(endereco.getNumero());
		this.setBairro(endereco.getBairro());
		this.setCidade(endereco.getCidade());
		this.setUF(endereco.getUF());
		this.setPais(endereco.getPais());
		this.setCep(endereco.getCep());
		this.setLatitude(endereco.getLatitude());
		this.setLongitude(endereco.getLongitude());
	}

	public EnderecoResDTO(String logradouro, String numero, String bairro, String cidade, String uF, String pais,
			String cep, Double latitude, Double longitude) {
		super();
		this.logradouro = logradouro;
		this.numero = numero;
		this.bairro = bairro;
		this.cidade = cidade;
		UF = uF;
		this.pais = pais;
		this.cep = cep;
		this.latitude = latitude;
		this.longitude = longitude;
	}

	public String getLogradouro() {
		return logradouro;
	}

	public void setLogradouro(String logradouro) {
		this.logradouro = logradouro;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getUF() {
		return UF;
	}

	public void setUF(String uF) {
		UF = uF;
	}

	public String getPais() {
		return pais;
	}

	public void setPais(String pais) {
		this.pais = pais;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public Double getLatitude() {
		return latitude;
	}

	public void setLatitude(Double latitude) {
		this.latitude = latitude;
	}

	public Double getLongitude() {
		return longitude;
	}

	public void setLongitude(Double longitude) {
		this.longitude = longitude;
	}
}
