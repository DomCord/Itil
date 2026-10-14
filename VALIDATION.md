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
