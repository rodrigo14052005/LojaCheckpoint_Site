# Base de dados — esquema (tabelas e relações)

Esta secção descreve as tabelas do projeto, os campos principais e as relações entre elas (FKs).

---

## produtos

Tabela do catálogo.

**Campos**
- `id` (bigint, PK, identity)
- `nome` (text, obrigatório)
- `plataforma` (text)
- `preco` (numeric)
- `stock` (integer)
- `vendas` (integer, default 0)
- `descricao` (text)

---

## perfil

Dados complementares do utilizador.

**Campos**
- `id` (uuid, PK, default `gen_random_uuid()`)
- `user_id` (uuid, FK → `auth.users(id)`)
- `nome` (text, obrigatório)
- `tipo` (text, obrigatório: `cliente` ou `admin`)
- `criado_em` (timestamp with time zone, default `CURRENT_TIMESTAMP`)
- `email` (text)

**Relações**
- `perfil.user_id` → `auth.users.id`

---

## carrinhos

Carrinho por utilizador (pode ser marcado como ativo/inativo).

**Campos**
- `id` (bigint, PK, identity)
- `user_id` (uuid, obrigatório, FK → `auth.users(id)`)
- `criado_em` (timestamp, default `now()`)
- `ativo` (boolean, default true)

**Relações**
- `carrinhos.user_id` → `auth.users.id`

---

## itens_carrinho

Itens do carrinho (quantidade e preço unitário).

**Campos**
- `id` (bigint, PK, identity)
- `carrinho_id` (bigint, obrigatório, FK → `carrinhos(id)`)
- `produto_id` (bigint, obrigatório, FK → `produtos(id)`)
- `quantidade` (integer, obrigatório, > 0)
- `preco_unitario` (numeric, obrigatório)

**Relações**
- `itens_carrinho.carrinho_id` → `carrinhos.id`
- `itens_carrinho.produto_id` → `produtos.id`

---

## compras

Registo de compras (no schema atual, cada linha referencia **um produto**).

**Campos**
- `id` (bigint, PK, identity)
- `user_id` (uuid, FK → `auth.users(id)`)
- `produto_id` (bigint, FK → `produtos(id)`)
- `data` (timestamp, default `now()`)

**Relações**
- `compras.user_id` → `auth.users.id`
- `compras.produto_id` → `produtos.id`

> Nota: como `compras` referencia diretamente `produto_id`, o schema atual representa compras “por produto”. Se no futuro quiserem suportar compras com múltiplos itens numa única encomenda, normalmente cria-se uma tabela `orders` + `order_items`.

---

## wishlist

Lista de desejos do utilizador.

**Campos**
- `id` (bigint, PK, identity)
- `user_id` (uuid, FK → `auth.users(id)`)
- `produto_id` (bigint, FK → `produtos(id)`)
- `adicionado_em` (timestamp, default `now()`)

**Relações**
- `wishlist.user_id` → `auth.users.id`
- `wishlist.produto_id` → `produtos.id`

---

## avaliacoes

Avaliações (1 a 5 estrelas) + comentário.

**Campos**
- `id` (bigint, PK, identity)
- `user_id` (uuid, FK → `auth.users(id)`)
- `produto_id` (bigint, FK → `produtos(id)`)
- `estrelas` (integer, 1 a 5)
- `comentario` (text)
- `criado_em` (timestamp, default `now()`)

**Relações**
- `avaliacoes.user_id` → `auth.users.id`
- `avaliacoes.produto_id` → `produtos.id`

---

## comentarios

Comentários com aprovação (moderação básica).

**Campos**
- `id` (bigint, PK, identity)
- `produto_id` (bigint, FK → `produtos(id)`)
- `user_id` (uuid, FK → `auth.users(id)`)
- `texto` (text)
- `aprovado` (boolean, default true)

**Relações**
- `comentarios.produto_id` → `produtos.id`
- `comentarios.user_id` → `auth.users.id`

---

## Resumo das relações

- Quase tudo liga a `auth.users(id)` via `user_id`.
- Quase tudo liga ao catálogo `produtos(id)` via `produto_id`.
- O carrinho é modelado em 2 níveis: `carrinhos` → `itens_carrinho`.
