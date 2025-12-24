---
authors: [eduardo]
tags: [loja, tecnologia, projetos]
---

# Loja Checkpoint

A **Loja Checkpoint** é uma aplicação de loja digital em terminal (**CLI**) desenvolvida em **Python**, com base de dados no **Supabase**.

O projeto simula uma loja de videojogos onde os utilizadores podem autenticar-se, comprar jogos, avaliar produtos, deixar comentários e muito mais — tudo diretamente no terminal. 

## Objetivos do projeto

- Criar uma experiência de loja completa no terminal
- Praticar integração com base de dados e autenticação (Supabase)
- Implementar funcionalidades comuns de e-commerce (carrinho, wishlist, histórico, avaliações)

## Tecnologias usadas

- Python 3.10+ 
- Supabase (autenticação + base de dados) 
- Tabulate (comparação de jogos/tabelas no terminal) 
- Colorama (cores/estilo no terminal) 
- Dotenv (variáveis de ambiente) 
- SendGrid (emails/alertas) 

## Como executar (rápido)

```bash
git clone https://github.com/Deni-jpg/Loja-Checkpoint.git
cd Loja-Checkpoint
pip install -r requirements.txt
python main.py
