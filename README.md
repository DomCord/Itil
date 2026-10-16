# Study — ITIL v5, AI-901 e Tenable

Após o login, o menu principal permite escolher **ITIL v5**, **AI-901**, **Tenable Vulnerability Management Specialist** ou **Tenable Security Center Specialist**, conforme os cursos liberados para a conta. Cada curso tem seu próprio menu, e os botões do cabeçalho permitem voltar ao curso ou trocar de curso. As credenciais e o progresso ITIL já salvo continuam válidos.

O curso **Tenable Security Center Specialist** está incluído no Git e no carregamento padrão do site, com 150 questões em `Tenable/Simulados/Security_Center/`. Funciona no GitHub Pages e localmente, com tradução opcional para português do Brasil, correção em inglês e retomada no índice 19. A publicação foi habilitada por solicitação explícita do usuário; a atribuição e os termos originais da fonte permanecem nos materiais. A área Vulnerability Management mantém seus 13 simulados e 260 questões.

O Security Center tem permissão própria (`tenable-sc`), configurável em **Administração → Cursos liberados**. Administradores acessam todos os cursos; para liberar o novo menu a um usuário, marque **Tenable Security Center Specialist** em seu cadastro. A liberação automática fica restrita à conta `william`, conforme descrito abaixo. Os testes `security-center-course` verificam a integração pública e as permissões; `traducao-sc` verifica as 150 questões e 600 alternativas traduzidas.

A área **ITIL v5** mantém o painel estático com três simulados, progresso, correção comentada e percentual final. Os dois primeiros possuem 40 questões cada; o terceiro reúne 114 termos e definições do Guia de Referência Rápida ITIL Foundation v5.0 em português.

O menu **Vídeos** do ITIL reúne 32 conteúdos em uma biblioteca com pastas expansíveis, navegação lateral e rolagem própria. Selecione um item da lista para reproduzi-lo no player responsivo sem sair do painel.

- **Canal Value Insights:** 31 vídeos do YouTube sobre termos essenciais, dimensões, ciclo de vida, sistema de valor, princípios, governança, práticas, melhoria contínua, atividades da cadeia de valor, fluxos de valor, IA e outras estruturas.
- **Conferência AKSolution:** um vídeo compartilhado pelo Google Drive e reproduzido pelo visualizador incorporado.

Os players devem ser abertos por HTTP ou HTTPS, como no GitHub Pages ou em um servidor local. A abertura direta do `index.html` por `file://` não fornece a origem necessária para os players incorporados e, por isso, é substituída por uma orientação de acesso.

O módulo **Slide** reúne 233 slides em resolução 2560×1440, separados em Introdução (10), Módulo 1 (20), Módulo 2 (20), Módulo 3 (10), Módulo 4 (6), Módulo 5 (36), Módulo 6 (71), Módulo 7 (10), Módulo 8 (14), Módulo 9 (28) e Módulo 10 (8). Os Módulos 1 e 2 terminam com três questões comentadas e uma PBQ própria: ordenação da cadeia de serviços no primeiro e posicionamento dos papéis de fornecedor, provedor e consumidor no segundo. O Módulo 3 termina com três questões comentadas sobre o Sistema de Valor do ITIL e SLA; o Módulo 4, com três questões comentadas sobre governança e faixa de visibilidade; o Módulo 5, com três questões comentadas sobre os Princípios Orientadores do ITIL; o Módulo 6, com três questões comentadas sobre descoberta, métricas de sucesso e suporte; o Módulo 7, com três questões comentadas sobre propósito organizacional e mapeamento de fluxos de valor; o Módulo 8, com três questões comentadas sobre melhoria contínua e práticas de gerenciamento; o Módulo 9, com três questões comentadas sobre as quatro dimensões do gerenciamento de produtos e serviços; e o Módulo 10, com três questões comentadas sobre a integração do ITIL com DevOps e PRINCE2 Agile. Em cada nova tentativa de fixação, as alternativas são reorganizadas e a resposta correta muda de posição em relação à tentativa anterior. O visualizador oferece seleção por apresentação, miniaturas, navegação contínua, atalhos de teclado, zoom e modo de tela cheia.

No Simulado 3, cada definição gera uma questão própria. Depois da resposta, o painel explica o conceito correto e também o significado de cada alternativa incorreta, com indicação da seção correspondente do guia.

Ao abrir ou refazer qualquer simulado, a sequência das questões e a posição das alternativas são embaralhadas. A última configuração é registrada no navegador para que a abertura seguinte não repita a mesma ordem nem mantenha a resposta correta na mesma posição.

Se o usuário sair antes de finalizar e tiver respondido ao menos uma questão, o navegador salva a questão atual, as respostas, as correções e a ordem sorteada. Na próxima abertura desse simulado, é possível continuar exatamente de onde parou ou descartar o progresso e recomeçar com um novo embaralhamento. Progresso em 0% é descartado sem exibir a tela de retomada.

Na tela de cada um dos quatro cursos, abaixo dos botões **Começar agora**, a seção **Estatísticas dos simulados** lista cada conclusão com nome do simulado, data e hora de Brasília, quantidade de acertos e porcentagem, em ordem da mais recente para a mais antiga. O resumo mostra o total de conclusões, a média dos percentuais das tentativas e o melhor resultado. Refazer um simulado acrescenta uma nova linha; tentativas incompletas não entram no histórico. Os resultados são separados por usuário e curso e ficam salvos neste navegador. O registro começa com as conclusões feitas a partir desta atualização; resultados anteriores não eram armazenados. Teste: `node tests/history.test.mjs`.

O acesso possui autenticação no navegador, CAPTCHA matemático e bloqueio de 30 segundos depois de três tentativas consecutivas inválidas.

## Administração e contas locais

O botão **Administração** aparece no cabeçalho para o perfil administrador. Na primeira abertura desta versão são criadas a conta `admin`, com a senha inicial solicitada pelo responsável pelo projeto, e a conta `hasleane`, com perfil **Usuário**, a mesma senha anterior e os três cursos liberados. As duas começam sem expiração. A senha do administrador pode ser alterada em **Usuários → admin → Editar**.

A conta inicial `william` tem perfil **Usuário**, acesso ao **Tenable Vulnerability Management Specialist** e ao **Tenable Security Center Specialist**, sem expiração. A inclusão ocorre uma única vez, também em navegadores que já possuíam cadastros. Cadastros William existentes recebem `tenable-sc` uma única vez ao abrir a versão atualizada, mantendo seus cursos anteriores, senha, perfil, validade, ID, sessão, auditoria e progresso. Uma conta removida não é recriada por essa liberação; alterações posteriores do administrador, inclusive a remoção da permissão SC, continuam valendo. A senha inicial solicitada é armazenada apenas como hash PBKDF2 no cadastro.

- **Usuários:** adicionar, editar e remover contas, selecionar ITIL v5, AI-901 e Tenable, definir o perfil e a data de expiração. A remoção exige confirmação e não permite excluir a própria conta em uso.
- **Validade:** a data informada inclui o dia inteiro, até 23h59 no horário de Brasília. Um campo vazio significa acesso sem expiração. Contas expiradas não entram no portal; sessões abertas são revalidadas durante a navegação, ao voltar à janela, em alterações feitas por outra aba e a cada 15 segundos.
- **Permissões:** usuários comuns veem somente os cursos liberados e não acessam os controles administrativos. Administradores gerenciam as contas e acessam todos os cursos. Uma conta sem cursos pode entrar, mas recebe a orientação de solicitar liberação.
- **Auditoria:** registra cada login concluído, com usuário, perfil no momento da entrada e data/hora em Brasília. Reabrir uma sessão existente não duplica o evento. A remoção de uma conta preserva seu histórico.
- **Progresso:** os simulados e o sorteio aleatório Tenable usam chaves por usuário. O progresso anterior de `hasleane` permanece nas chaves originais. Alterar uma senha encerra as outras sessões dessa conta.

**Esta implementação mantém o GitHub Pages estático: cadastros e auditoria ficam no `localStorage` deste navegador e desta origem, sem sincronização entre computadores.** Os dados criados no endereço local não aparecem automaticamente no domínio publicado. Eles não são enviados ao GitHub e serão perdidos se o armazenamento do site for apagado. O painel informa essa condição. A senha usa PBKDF2-SHA-256 com 210.000 iterações e salt individual para novos cadastros; a sessão fica na aba, em `sessionStorage`.

Para que o administrador cadastre uma conta em seu computador e outra pessoa use essa conta em outro dispositivo, é necessário integrar um backend ou provedor de identidade, com banco e auditoria compartilhados e autorização no servidor. O modo local não fornece esse controle central nem proteção contra alterações feitas pelo próprio visitante no navegador.

Arquivos: `accounts.js` (contas e persistência), `auth.js` (login e sessão), `admin.js` / `admin.css` (painel). Verificação automatizada: `node tests/accounts.test.mjs`.

> **Limitação de segurança:** por ser hospedado apenas como arquivos estáticos no GitHub Pages, o login funciona como controle de acesso casual. Ele não substitui autenticação no servidor e não deve proteger dados sensíveis. A senha não é armazenada em texto puro, mas o navegador precisa receber todo o código e conteúdo da aplicação.


## AI-901

A área **AI-901** reúne os três simulados fornecidos na pasta `Google AI`, com **101 questões** organizadas em sete tópicos: IA responsável; modelos e configuração; cargas de trabalho de IA; apps generativos e agentes; texto e fala; visão e geração de imagens; extração de informações.

| Simulado | Arquivo de origem | Questões |
| --- | --- | ---: |
| Simulado 1 | `1-simulado-ai901.html` | 54 |
| Simulado 2 — Na prática | `2-ai901-na-pratica.html` | 23 |
| Simulado 3 — Rodada 3 | `3-ai901-rodada-3.html` | 24 |

O conteúdo foi importado em `ai901.js`, mantendo os arquivos originais. Foram preservados os enunciados, as alternativas, os gabaritos, as explicações e os **16 exemplos de código**.

As correções exibidas usam `ai901-explanations.js`: **394 comentários individuais** para as alternativas e afirmações das 101 questões. Cada comentário explica o conceito e por que ele atende ou não ao enunciado. As fontes primárias, principalmente a documentação Microsoft Learn, aparecem em **Fontes e documentação** abaixo da correção. Questões Sim/Não também recebem uma justificativa por afirmação, e a revisão final apresenta todas as alternativas.

- 82 questões de alternativa única.
- 9 questões de múltipla seleção: selecione a quantidade solicitada antes de confirmar. A questão conta como correta quando todas as alternativas corretas forem selecionadas.
- 10 questões de Sim/Não, com três afirmações cada: responda todas antes de confirmar. A questão conta como correta quando as três respostas estiverem corretas.

Os simulados utilizam o mesmo painel de questões, embaralhamento, feedback, progresso salvo, retomada e revisão final do ITIL. Cada um salva seu próprio progresso, e o resultado também mostra o desempenho por tópico. A meta de **80%** é uma referência de estudo do material fornecido, não uma conversão da pontuação oficial do exame.

O progresso dos simulados AI-901 usa as posições 3, 4 e 5 no banco; as posições e chaves existentes do ITIL (0, 1 e 2) foram mantidas. Os comentários foram revisados em 2 de outubro de 2026, incluindo distinções entre APIs, autenticação, modelos e recursos. Parâmetros e modalidades dependem do modelo e da versão: os comentários indicam essas condições quando relevantes. O embaralhamento mantém cada explicação vinculada à alternativa original.

Os testes e seus resultados estão documentados em [VALIDATION.md](VALIDATION.md). O teste reutilizável do motor pode ser executado com `node tests/quiz.test.mjs`.

## Publicar no GitHub Pages

Em **Settings → Pages**, selecione **Deploy from a branch**, escolha a branch `main` e a pasta `/ (root)`.

Abra `index.html` diretamente para testar localmente. Nenhuma instalação é necessária.

## Tenable

O terceiro curso usa o mesmo tema, cabeçalho, cards, motor de questões e visualizador dos cursos existentes. A pasta `Tenable` reúne 9 apresentações revisadas (73 slides PNG para leitura no navegador e PPTX editáveis), versões originais, notas, fontes, planejamento, cadernos e gabaritos.

O menu **Tenable → Vídeos** usa o mesmo player responsivo e a navegação por pastas do ITIL. Inclui [Gerenciamento de Vulnerabilidades Tenable | Criação de Varreduras de Agente Nessus](https://www.youtube.com/watch?v=kj1EfweEEgM), com reprodução incorporada, tela cheia e link para abrir no YouTube. Cada curso mostra sua própria biblioteca, e o cabeçalho permite voltar ao menu Tenable ou trocar de curso.

- 8 simulados temáticos de 20 questões.
- Completos A/B de 60 questões cada, sem itens comuns entre eles.
- Reserva de 40 questões e seleção aleatória de 60 do banco autoral de 160.
- Banco complementar: 100 questões em inglês, incluídas na integração padrão do site.

O total é de 260 questões únicas; os cadernos, completos e aleatório reutilizam os mesmos itens. Os tempos de 40, 80, 120 e 200 minutos aparecem como referência de treino. O motor mantém o padrão do site de correção após cada resposta; as versões originais dos simuladores cronometrados também estão arquivadas na pasta `Tenable/Simulados`.

As questões mantêm enunciado, alternativas, resposta e explicação originais. Verdadeiro/falso usa duas opções em inglês. Os novos índices são anexados depois dos seis simulados existentes, preservando suas chaves de progresso. O aleatório salva os 60 IDs escolhidos para retomar a mesma tentativa após recarregar a página.

### Banco complementar e publicação

O banco complementar é carregado diretamente pelo `index.html`, tanto localmente quanto no GitHub Pages. O curso Tenable oferece **260 questões únicas, 13 opções de simulado e 73 slides**. O simulado “Banco complementar — 100 questions (English)” inclui 400 justificativas, notas técnicas, caderno e gabarito para download. Seus arquivos são versionados em `Tenable/Simulados/Banco_complementar`; a atribuição e os termos originais da fonte permanecem no manifesto e nos materiais. Os arquivos combinados antigos e as capturas locais continuam fora da integração padrão.

Validação adicional: `node tests/tenable.test.mjs`. Os testes antigos continuam em `node tests/quiz.test.mjs`.


## Correção comentada por alternativa — 14/10/2026

As 260 questões recebem 976 justificativas individuais em inglês, usando o mesmo painel de alternativas corretas/incorretas dos demais cursos. As justificativas acompanham suas opções durante o embaralhamento e aparecem tanto após responder quanto na revisão final e nos gabaritos para download. Os 32 itens verdadeiro/falso recebem duas justificativas cada. Os enunciados, opções e respostas da base permanecem iguais; notas técnicas identificam itens complementares ambíguos ou imprecisos sem alterar silenciosamente sua pontuação. O nome do banco complementar foi padronizado nos menus, arquivos e materiais. O banco complementar integra o site padrão, com sua origem e seus termos registrados nos materiais.
