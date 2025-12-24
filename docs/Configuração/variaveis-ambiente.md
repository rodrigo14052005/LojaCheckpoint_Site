# Variáveis de ambiente

Para proteger dados sensíveis, a Loja Checkpoint utiliza variáveis de ambiente.

## O que são variáveis de ambiente

São valores definidos fora do código-fonte, usados para:
- chaves de API
- URLs
- tokens secretos

---

## Variáveis utilizadas

Exemplo de variáveis comuns no projeto:

- SUPABASE_URL
- SUPABASE_ANON_KEY
- SENDGRID_API_KEY

---

## Ficheiro .env (opcional)

Podes criar um ficheiro `.env` na raiz do projeto:

- SUPABASE_URL=https://xxxx.supabase.co
- SUPABASE_ANON_KEY=public-anon-key
- SENDGRID_API_KEY=xxxx

---

## Carregar variáveis

O projeto usa bibliotecas como `python-dotenv` para carregar estas variáveis automaticamente.

---

## Segurança

- Nunca faças commit do ficheiro `.env`
- Usa `.gitignore` para garantir que ele não é versionado
- Cada ambiente deve ter as suas próprias chaves