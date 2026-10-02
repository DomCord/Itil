# Validação — ITIL v5 e AI-901

Data: 2 de outubro de 2026.

## Resultado

- **23/23 testes funcionais** aprovados no Microsoft Edge em modo headless, usando um servidor HTTP local e um perfil de navegador exclusivo para testes.
- **10/10 testes de autenticação** aprovados em ambiente isolado com credenciais de fixture e as implementações reais de SHA-256 e PBKDF2. Os hashes e as credenciais do projeto foram preservados.
- **64/64 verificações de layout** aprovadas: menu principal, áreas ITIL e AI-901, correções de questões com código, múltipla seleção, Sim/Não, fontes expandidas e login, nas larguras de 320, 390, 768 e 1365 pixels, sem transbordamento horizontal.
- Sintaxe dos scripts JavaScript validada; `git diff --check` aprovado.

## Cobertura funcional

Resolução completa das **295 questões** dos seis simulados (40 + 40 + 114 + 54 + 23 + 24), com comparação dos gabaritos e explicações antes e depois do embaralhamento. Resultados de 100% e pontuação mista conferidos.

Foram verificadas respostas erradas nos três formatos, confirmação obrigatória, limite de alternativas selecionadas, bloqueio de edição após correção, navegação numerada, anterior/próxima, busca de questões pendentes, finalização, revisão comentada e desempenho por tópico.

A navegação entre cursos, a volta ao menu, o logout, o salvamento independente dos simulados, a retomada com o mesmo layout e seleções parciais, o descarte de progresso inválido, a ausência de retomada em 0% e o recomeço com novo embaralhamento foram aprovados. Um simulado finalizado não recria progresso ao retornar ao menu.

No material ITIL, foram conferidos os **233 arquivos de slides**, as 11 apresentações, navegação entre apresentações, teclado, seleção direta e zoom. Foram resolvidas as **30 questões de fixação** e as **duas PBQs**, incluindo correção e nova tentativa. O botão de tela cheia foi testado com uma fixture da API do navegador; a entrada nativa em tela cheia depende de interação real do usuário.

Na biblioteca de vídeos, foram verificados os **32 itens**, a seleção dos títulos e estados ativos, a construção dos players HTTPS e o retorno ao menu ITIL. A reprodução audiovisual nos serviços externos YouTube e Google Drive não foi verificada.

Os testes de autenticação cobriram tela inicial protegida, exibição da senha, CAPTCHA entre 2 e 9, credenciais inválidas, três tentativas e bloqueio de 30 segundos, persistência e encerramento do bloqueio, login válido com fixture, sessão existente e logout.

## Importação

Os três HTMLs atuais fornecidos em `Google AI` são bancos distintos. Foram importados os **três simulados**, com **101 questões** (54, 23 e 24), preservando enunciados, gabaritos, explicações e 16 exemplos de código. Os originais foram mantidos. As explicações gerais originais continuam disponíveis no banco; a interface usa os comentários revisados por alternativa.

## Revisão das explicações

Foram elaborados **394 comentários AI-901**: 211 no primeiro simulado, 90 no segundo e 93 no terceiro. Cada alternativa contém sua definição e a justificativa contextual; cada afirmação de Sim/Não explica sua veracidade. A revisão consultou documentação primária, principalmente Microsoft Learn, além dos artigos originais de Transformer, ViT e difusão e das referências PyTorch/TorchAudio para esses fundamentos. As referências estão associadas à questão em `ai901-explanations.js` e acessíveis na correção e na revisão final.

Foram esclarecidos limites relevantes: filtros não garantem veracidade, menor temperatura não garante determinismo absoluto, Batch tem meta de 24 horas, credenciais de projetos diferem das chaves de APIs de modelos, e propriedades de Chat Completions diferem das de Responses. Os gabaritos recebidos foram mantidos, com condições e ressalvas explicadas nos comentários.

A conferência estrutural dos **1.170 comentários dos seis simulados** não encontrou comentários ausentes nem idênticos entre as alternativas de uma mesma questão. Foram corrigidas as duas questões ITIL com repetições, sobre interação dos princípios orientadores (questão 14 do primeiro banco) e propósito/modelo operacional (questão 19), usando as referências já presentes no material.

No navegador, os textos exibidos foram comparados com os comentários correspondentes às alternativas embaralhadas de todas as 295 questões. Também foram resolvidas incorretamente as **101 questões AI-901**, conferindo feedback, comentários completos e gabaritos. Foram verificados abertura das referências e conteúdo da revisão final. Os links de referência apontam para sites externos; seu carregamento pelo navegador do usuário não faz parte do teste offline da aplicação.

A questão de transparência mostrada no chat foi conferida visualmente: equidade, responsabilidade e privacidade apresentam definições e razões próprias, sem repetir a justificativa da transparência.

## Reexecutar as verificações do motor

Com Node.js instalado, execute na raiz do projeto:

```sh
node tests/quiz.test.mjs
```

Esse teste usa apenas módulos nativos do Node.js e cobre 180 sessões embaralhadas, gabaritos, os 394 comentários AI-901 e suas referências, ausência de repetições nos seis bancos, feedback de respostas certas/erradas, compatibilidade do progresso antigo do ITIL, os três formatos de resposta, retomada, resultado, armazenamento indisponível e referências locais do HTML. Nesta sessão, ele foi executado no runtime Node disponível à ferramenta, com adaptação somente da entrada dos imports e do diretório raiz.

Os relatórios HTML/JSON e capturas utilizados na validação de navegador estão na pasta local `.qa`, ignorada pelo Git.
