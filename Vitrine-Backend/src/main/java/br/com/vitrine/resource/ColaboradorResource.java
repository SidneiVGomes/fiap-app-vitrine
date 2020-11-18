package br.com.vitrine.resource;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.vitrine.dto.ColaboradorReqDTO;
import br.com.vitrine.dto.ColaboradorResDTO;
import br.com.vitrine.model.Colaborador;
import br.com.vitrine.service.ColaboradorService;

@RestController
@RequestMapping("API/colaboradores")
@CrossOrigin(origins = "http://localhost:4200")
public class ColaboradorResource {
	@Autowired
	ColaboradorService colaboradorService;

	@ResponseStatus(HttpStatus.CREATED)
	@RequestMapping(method = RequestMethod.POST)
	public ColaboradorResDTO cadastrar(@RequestBody @Valid ColaboradorReqDTO colaboradorReqDTO) {
		return new ColaboradorResDTO(this.colaboradorService.gravar((Colaborador) colaboradorReqDTO.toEntity()));
	}

	@ResponseStatus(HttpStatus.OK)
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ColaboradorResDTO consultar(@PathVariable Long id) {
		return new ColaboradorResDTO(this.colaboradorService.consultarPorId(id).get());
	}

	@ResponseStatus(HttpStatus.OK)
	@RequestMapping(method = RequestMethod.GET)
	public List<ColaboradorResDTO> consultarTodos() {
		return new ColaboradorResDTO(this.colaboradorService.consultarTodos()).toList();
	}

	@ResponseStatus(HttpStatus.OK)
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public ColaboradorResDTO consultarPorNomeSenha(@RequestParam Optional<String> eMail,
			@RequestParam Optional<String> senha) {
		return new ColaboradorResDTO(
				this.colaboradorService.consultarPorNomeSenha(eMail.orElse(String.valueOf("")), senha.orElse(String.valueOf(""))
			).get() );
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ColaboradorResDTO alterar(@PathVariable Long id, @RequestBody ColaboradorReqDTO colaboradorReq) {
		return new ColaboradorResDTO(this.colaboradorService.alterar(id, colaboradorReq.toEntity()));
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ColaboradorResDTO excluir(@PathVariable Long id) {
		return new ColaboradorResDTO(this.colaboradorService.excluir(id));
	}
}
