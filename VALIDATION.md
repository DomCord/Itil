# Validação — ITIL v5 e AI-901

## Histórico de conclusões dos quatro cursos — 16/10/2026

As oito suítes (`accounts`, `quiz`, `tenable`, `traducao-tenable`, `william`, `security-center-course`, `traducao-sc` e `history`) passaram. O novo teste cobre o registro das conclusões de ITIL, AI-901, VM e SC; notas 0%, 50% e 100%; média e melhor resultado; datas de Brasília; tentativas repetidas; ausência de duplicatas ao reabrir o resultado; retomada e recarga; e isolamento entre usuários e cursos. Históricos ilegíveis não são sobrescritos. Falhas de gravação são informadas sem impedir a exibição da nota e da correção.

No Edge headless, passaram **27/27 verificações em desktop (1365 px)** e **27/27 em celular (390 px)**, com dados fictícios e prefixo exclusivo de QA. Foram conferidos os quatro menus, navegação pelos botões reais, estados vazio e preenchido, percentuais, resumo, ordenação, isolamento de contas, ausência de erros JavaScript e de transbordamento horizontal. As capturas dos dois tamanhos foram inspecionadas visualmente; relatórios e imagens permanecem em `.qa`, fora do Git. O histórico registra novas conclusões e é salvo por conta neste navegador.

## Security Center para William — 16/10/2026

O teste `tests/william.test.mjs` verifica VM e Security Center no cadastro inicial e a atualização única de um cadastro publicado com a migração antiga já aplicada. A nova liberação preserva senha, perfil, validade, ID, cursos anteriores, sessão ativa, auditoria e progresso; não duplica uma permissão existente nem recria William removido. Reabrir a aplicação respeita edições posteriores do administrador. Outros usuários não recebem a nova permissão.

Na integração com o motor real, William vê os dois cursos, mantém os 13 simulados VM e acessa o simulado SC de 150 questões no índice 19, com tradução, correção e retomada próprias. ITIL, AI-901 e administração continuam bloqueados. A versão de `accounts.js` no HTML foi atualizada para carregar a nova migração. As sete suítes (`accounts`, `quiz`, `tenable`, `traducao-tenable`, `william`, `security-center-course` e `traducao-sc`) passaram.

## Publicação do Security Center — 15/10/2026

Por solicitação explícita do usuário, o curso Security Center passou a integrar o carregamento padrão do site. O carregador restrito a localhost/file foi removido e `Tenable/Simulados/Security_Center/` foi liberado no Git. O manifesto registra a publicação habilitada; a atribuição e os termos originais da fonte são preservados. O workflow existente já concede `pages: write` e `id-token: write` ao deploy.

As sete suítes (`accounts`, `quiz`, `tenable`, `traducao-tenable`, `william`, `security-center-course` e `traducao-sc`) verificam a versão publicada. A integração usa a ordem real dos scripts do HTML em HTTPS de GitHub Pages e localhost, com 150 questões SC no índice 19, 600 alternativas traduzidas, correção e retomada. O menu público oferece quatro cursos ao administrador e apenas os cursos autorizados a cada usuário. A liberação de SC continua independente de VM.

## Menus e curso Security Center — 15/10/2026

As sete suítes (`accounts`, `quiz`, `tenable`, `traducao-tenable`, `william`, `security-center-course` e `traducao-sc`) passaram com o banco pessoal presente. Foram conferidos os nomes completos dos cursos, a permissão independente `tenable-sc`, cadastro e edição no painel, bloqueio de acesso cruzado, 150 questões com 600 alternativas traduzidas, correção em inglês, embaralhamento e retomada. O banco VM permanece com 260 questões e 13 simulados, e os índices existentes são preservados.

O teste de integração também verifica o carregador em `file://`, localhost, loopback IPv4/IPv6 e endereços públicos. O banco SC não é carregado em hospedagem pública. Sem ele, o menu oferece os três cursos publicados e orienta uma conta com acesso exclusivo ao SC sobre a disponibilidade local; contas sem permissão de curso continuam recebendo a mensagem de solicitação de acesso. O painel administrativo informa essa limitação. Os arquivos pessoais de `Tenable/Simulados/Security_Center/` permanecem ignorados pelo Git.

## Conta inicial William — 15/10/2026

O teste `node tests/william.test.mjs` passou com a senha inicial solicitada, perfil **Usuário**, apenas o curso Tenable, nenhuma expiração, registro de login na auditoria e bloqueio das operações administrativas. A integração com o motor real verifica que o menu mostra somente Tenable, com 13 simulados; ITIL e AI-901 são recusados, enquanto uma questão do banco complementar pode ser respondida com correção comentada e progresso próprio.

A migração foi verificada sobre dados da versão anterior: adiciona William uma vez, preserva contas, senhas, histórico e progresso, e mantém integralmente um cadastro William preexistente. Reabrir o portal não desfaz uma edição ou remoção posterior dessa conta. As quatro suítes de regressão (`accounts`, `quiz`, `tenable` e `traducao-tenable`) também passaram. A versão do script `accounts.js` no HTML foi atualizada para carregar a migração publicada.

## Contas e administração local — 15/10/2026

O teste `node tests/accounts.test.mjs` valida as contas iniciais (`admin` e `hasleane`), a preservação da credencial anterior, login com PBKDF2 real, perfis, inclusão/edição/remoção, rejeição de duplicatas e dados inválidos, permissões por curso e isolamento do progresso. Também verifica a validade até 23h59 de Brasília e a expiração a partir da meia-noite, sessões revogadas após troca de senha ou remoção, auditoria preservada, ausência de senhas em texto puro no armazenamento e recusa de sobrescrever dados corrompidos.

No Edge headless, com autenticação real e perfis isolados, passaram **9/9 cenários em desktop** e **9/9 em iframe com viewport real de 390 px**: contas iniciais, cadastro pela interface, auditoria com data/hora/perfil, usuário limitado ao Tenable, bloqueio do painel e de outros cursos, resolução e correção de questões com tradução, vídeo Tenable, edição da validade, recusa de login expirado, renovação com os três cursos e remoção com confirmação e retenção do histórico. Não foram registrados erros JavaScript nem transbordamento horizontal da página. A tela de Usuários também foi inspecionada por captura visual.

As regressões `tests/quiz.test.mjs`, `tests/tenable.test.mjs` e `tests/traducao-tenable.test.mjs` passaram: gabaritos e explicações, embaralhamento, formatos de questão, retomada, tradução e resultados continuam funcionando. Os testes do painel usam apenas dados de QA, sem modificar cadastros de uma origem já publicada.

**Escopo:** esta validação cobre o modo local do portal estático. Os cadastros e registros ficam no navegador; não há backend ou sincronização de usuários e auditoria entre dispositivos. A senha antiga de `hasleane` foi preservada por comparação dos parâmetros e do hash, sem precisar conhecê-la ou alterá-la.

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

## Integração Tenable — 14/10/2026

- Os testes anteriores passaram: 295 questões, comentários AI-901, 180 sessões embaralhadas, progresso legado, três formatos, retomada e resultado.
- O teste preserva os 260 enunciados, alternativas, gabaritos e explicações; confere 13 opções padrão, A/B sem sobreposição, verdadeiro/falso com duas opções, 65 sessões embaralhadas, correção, resultado e retomada do conjunto aleatório de 60 itens.
- Os nove PPTX revisados e 73 PNG estão acessíveis. Foram preservadas também as versões originais e incorporadas notas e fontes ao visualizador.
- No navegador, uma fixture de QA independente foi usada para testar o conteúdo sem alterar ou resolver a autenticação real. Foram conferidos o terceiro curso, os 13 cards de simulado, o visualizador, a navegação até o slide 73, zoom, notas, fontes, links de PPTX, a correção em inglês do Banco complementar e sua retomada após uma resposta.
- A biblioteca exibe nove links de apresentações e 29 links Markdown. A tela real de login foi conferida, com os três cursos no texto e campos originais. Não foi realizado login com credenciais reais.
- O menu e o visualizador não têm rolagem horizontal em viewport de 390 px. Foi corrigida a largura mínima da barra de miniaturas que expandia o layout móvel. O desktop foi conferido em 1280 px, com os três cursos na mesma linha.
- O botão de tela cheia existente foi acionado, e a árvore de acessibilidade passou a exibir apenas o visualizador. Não houve teste de download; os arquivos e destinos dos links foram conferidos estruturalmente.
- Na integração inicial, o banco complementar ficou restrito ao acesso local. Essa configuração foi substituída pela integração padrão descrita abaixo; os arquivos combinados antigos continuam ignorados pelo Git.

Reexecutar: `node tests/quiz.test.mjs` e `node tests/tenable.test.mjs`.


## Correção comentada por alternativa — 14/10/2026

As 260 questões recebem 976 justificativas individuais em inglês, usando o mesmo painel de alternativas corretas/incorretas dos demais cursos. As justificativas acompanham suas opções durante o embaralhamento e aparecem tanto após responder quanto na revisão final e nos gabaritos para download. Os 32 itens verdadeiro/falso recebem duas justificativas cada. Os enunciados, opções e respostas da base permanecem iguais; notas técnicas identificam itens complementares ambíguos ou imprecisos sem alterar silenciosamente sua pontuação. A origem e os termos do banco complementar permanecem registrados nos materiais.

## Banco complementar na integração padrão — 14/10/2026

Por solicitação expressa do responsável pelo projeto, os arquivos do Banco complementar foram incluídos no versionamento e no carregamento padrão do site. O `index.html` carrega diretamente a integração e suas explicações, sem restrição de hostname ou protocolo. O carregador local anterior foi removido. O curso passa a oferecer 13 opções e 260 questões únicas também em hospedagem pública.

O teste `tests/tenable.test.mjs` usa a ordem real dos scripts do HTML em contextos HTTPS de `domcord.github.io` e `localhost`. Foram conferidas as 100 questões e suas 400 justificativas, respostas corretas e incorretas, retomada do mesmo embaralhamento, revisão final, resultado misto de 50% e remoção do progresso concluído. O índice do banco permanece 18, preservando a compatibilidade do progresso local anterior. Caderno, gabarito, revisão técnica e demais links da biblioteca foram verificados. As regressões ITIL/AI-901 e os 65 embaralhamentos Tenable passaram.

## Vídeos Tenable — 14/10/2026

O curso Tenable recebeu um menu de Vídeos com o mesmo visualizador responsivo do ITIL. Foi incluído o vídeo “Gerenciamento de Vulnerabilidades Tenable | Criação de Varreduras de Agente Nessus”, com URL de incorporação `https://www.youtube.com/embed/kj1EfweEEgM` e link para o vídeo original. As bibliotecas são selecionadas por curso: 32 itens no ITIL e um no Tenable.

As regressões `tests/quiz.test.mjs` e `tests/tenable.test.mjs` passaram. O teste Tenable carrega o módulo real de vídeos e confere a presença do menu, as contagens por curso e a ausência de menu de vídeos no AI-901.

No Microsoft Edge headless, foram aprovadas **6/6 verificações em desktop (1280 px)** e **6/6 em viewport móvel de 390 px**: abertura do menu, título/URL/origem/permissões do iframe, seleção ativa, retorno ao curso, alternância com os 32 vídeos ITIL, retorno ao vídeo Tenable sem resíduos da biblioteca anterior, índice inválido, layout e ausência de erros JavaScript. A largura móvel medida foi de 390 px, sem transbordamento horizontal. A fixture de autenticação existe apenas no ambiente local de QA; a autenticação do site não foi alterada. A reprodução audiovisual no serviço YouTube não foi verificada.
