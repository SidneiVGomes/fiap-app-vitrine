package br.com.vitrine.service;
 
import org.springframework.stereotype.Service;
 
import br.com.vitrine.model.Estabelecimento;

@Service
public interface LoginService {
	public Estabelecimento conectar(String email, String senha, EstabelecimentoService service);
	public void desconectar(Estabelecimento e);
}
