---
sidebar_position: 4
title: Estrutura do Projeto
---

# Estrutura do Projeto

Abaixo está a organização dos ficheiros e módulos principais:

```plaintext
Loja-Checkpoint/
├─ main.py                    # Ponto de entrada e menu global
├─ auth.py                    # Autenticação (login/registo)
├─ produtos.py                # Gestão de produtos (CRUD)
├─ produtos_utils.py          # Funções auxiliares (filtros, ordenação)
├─ carrinho.py                # Operações do carrinho
├─ compras.py                 # Finalização de compras
├─ historico_compras.py       # Histórico detalhado
├─ avaliacoes.py              # Avaliações (1 a 5 estrelas)
├─ comentarios.py             # Comentários e moderação
├─ comparar_jogos.py          # Comparação de jogos
├─ ui.py                      # Interface do terminal (menus, prompts)
├─ db.py                      # Camada de acesso a dados
├─ db.sql                     # Script SQL (se aplicável)
├├─ config.json                # Configurações (tema, idioma)
