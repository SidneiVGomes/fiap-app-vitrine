package br.com.vitrine.dto.interfac;

import java.util.List;

public interface ResponseDTO<E> {
	public List<E> toList();
}
