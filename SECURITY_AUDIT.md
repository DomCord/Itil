# Verificação de segurança

Data da revisão: 13 de agosto de 2026.

## Escopo

Revisão estática dos arquivos HTML, CSS e JavaScript, busca por segredos e padrões perigosos, validação da Política de Segurança de Conteúdo e testes funcionais da autenticação e do bloqueio temporário.

O projeto não usa gerenciador de pacotes nem dependências JavaScript de terceiros; portanto, não existe uma árvore de dependências para auditoria de CVEs.

## Controles implementados

- A senha não é armazenada em texto puro. A verificação usa PBKDF2-SHA-256, salt público e 210.000 iterações.
- O nome de usuário também não aparece em texto puro no código publicado; é comparado por resumo SHA-256.
- A sessão é mantida em `sessionStorage` e termina ao fechar a aba ou selecionar **Sair**.
- O CAPTCHA usa valores gerados pela Web Crypto API e sempre resulta em um número de 2 a 9.
- Depois de três envios inválidos consecutivos, o formulário é bloqueado por 30 segundos. O prazo fica em `localStorage` e resiste a recarregamentos.
- A Política de Segurança de Conteúdo restringe scripts à própria origem, bloqueia plugins, conexões de rede realizadas por scripts e URLs HTTP inseguras.
- Não há `eval`, `new Function`, `document.write`, manipuladores de eventos HTML embutidos, chaves de API, tokens ou chaves privadas no repositório.
- Os campos possuem limites de tamanho, tipos adequados e atributos de preenchimento automático.

## Resultado dos testes

- Login válido: aprovado.
- CAPTCHA válido com resultado entre 2 e 9: aprovado.
- Três tentativas inválidas consecutivas: bloqueio imediato por 30 segundos aprovado.
- Botão de saída e encerramento da sessão: aprovado.
- Busca por padrões conhecidos de tokens e chaves privadas: nenhum resultado.
- Verificação de whitespace do Git: sem erros.

## Limitação conhecida do GitHub Pages

Este é um site estático. Todo HTML, JavaScript e conteúdo dos simulados precisa ser enviado ao navegador antes da autenticação. Um visitante com conhecimento técnico pode inspecionar ou alterar o código, limpar o armazenamento local, reproduzir a derivação da senha ou marcar manualmente a sessão como autenticada.

Consequentemente, esta tela é adequada como barreira contra acesso casual, mas **não constitui autenticação segura para conteúdo confidencial**. Para controle de acesso real, use um backend ou provedor de identidade que valide credenciais no servidor, emita sessões assinadas e aplique limitação de tentativas no servidor.

## Risco residual

- **Alto, aceito pela arquitetura:** autenticação e bloqueio são executados no cliente e podem ser contornados.
- **Baixo:** o conteúdo local é renderizado com `innerHTML`. Atualmente ele é estático e controlado pelo próprio repositório. Caso futuramente passe a receber dados externos ou enviados por usuários, esses valores deverão ser sanitizados ou inseridos com `textContent`.
- **Baixo:** as fontes vêm do Google Fonts. Removê-las ou hospedá-las localmente elimina essa dependência externa e possíveis considerações de privacidade.
