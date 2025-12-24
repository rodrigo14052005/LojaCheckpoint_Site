# Base de dados — visão geral

A Loja Checkpoint usa uma base de dados (Supabase/Postgres) para guardar informação da loja e do comportamento dos utilizadores: produtos, carrinhos, compras, wishlist, avaliações e comentários.

## Tabelas existentes

- `produtos` — catálogo de produtos/jogos
- `perfil` — dados do utilizador (nome, tipo cliente/admin, email)
- `carrinhos` — carrinho por utilizador (ativo/inativo)
- `itens_carrinho` — itens dentro de um carrinho (quantidade e preço)
- `compras` — registo de compras (por produto)
- `wishlist` — lista de desejos
- `avaliacoes` — rating (1 a 5) + comentário
- `comentarios` — comentários com aprovação (moderação simples)

## Autenticação (auth.users)

Várias tabelas referenciam `auth.users(id)` através do campo `user_id`.  
Isto significa que o utilizador “real” vem do sistema de autenticação do Supabase, e a vossa tabela `perfil` guarda informação complementar (nome, tipo e email).
