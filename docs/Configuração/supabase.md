# Configuração do Supabase

A Loja Checkpoint utiliza o **Supabase** para:
- autenticação de utilizadores
- armazenamento de dados
- gestão de compras, avaliações e comentários

---

## Criar um projeto no Supabase

1. Acede a https://supabase.com
2. Cria uma conta ou faz login
3. Cria um novo projeto
4. Guarda:
   - Project URL
   - anon public key

---

## Onde usar estas credenciais

As credenciais do Supabase **não devem ser escritas diretamente no código**.

Elas são usadas através de variáveis de ambiente ou ficheiro de configuração seguro.

---

## Estrutura usada no projeto

O projeto comunica com o Supabase através do módulo responsável pela base de dados e autenticação.

Essas ligações são inicializadas no arranque da aplicação e reutilizadas pelos restantes módulos.

---

## Testar ligação

Depois de configurar corretamente:
- inicia a aplicação
- tenta efetuar registo ou login
- se não ocorrer erro, a ligação está funcional
