# Study — ITIL v5 e AI-901

Após o login, o menu principal permite escolher **ITIL v5** ou **AI-901**. Cada curso tem seu próprio menu, e os botões do cabeçalho permitem voltar ao curso ou trocar de curso. As credenciais e o progresso ITIL já salvo continuam válidos.

A área **ITIL v5** mantém o painel estático com três simulados, progresso, correção comentada e percentual final. Os dois primeiros possuem 40 questões cada; o terceiro reúne 114 termos e definições do Guia de Referência Rápida ITIL Foundation v5.0 em português.

O menu **Vídeos** reúne 32 conteúdos em uma biblioteca com pastas expansíveis, navegação lateral e rolagem própria. Selecione um item da lista para reproduzi-lo no player responsivo sem sair do painel.

- **Canal Value Insights:** 31 vídeos do YouTube sobre termos essenciais, dimensões, ciclo de vida, sistema de valor, princípios, governança, práticas, melhoria contínua, atividades da cadeia de valor, fluxos de valor, IA e outras estruturas.
- **Conferência AKSolution:** um vídeo compartilhado pelo Google Drive e reproduzido pelo visualizador incorporado.

Os players devem ser abertos por HTTP ou HTTPS, como no GitHub Pages ou em um servidor local. A abertura direta do `index.html` por `file://` não fornece a origem necessária para os players incorporados e, por isso, é substituída por uma orientação de acesso.

O módulo **Slide** reúne 233 slides em resolução 2560×1440, separados em Introdução (10), Módulo 1 (20), Módulo 2 (20), Módulo 3 (10), Módulo 4 (6), Módulo 5 (36), Módulo 6 (71), Módulo 7 (10), Módulo 8 (14), Módulo 9 (28) e Módulo 10 (8). Os Módulos 1 e 2 terminam com três questões comentadas e uma PBQ própria: ordenação da cadeia de serviços no primeiro e posicionamento dos papéis de fornecedor, provedor e consumidor no segundo. O Módulo 3 termina com três questões comentadas sobre o Sistema de Valor do ITIL e SLA; o Módulo 4, com três questões comentadas sobre governança e faixa de visibilidade; o Módulo 5, com três questões comentadas sobre os Princípios Orientadores do ITIL; o Módulo 6, com três questões comentadas sobre descoberta, métricas de sucesso e suporte; o Módulo 7, com três questões comentadas sobre propósito organizacional e mapeamento de fluxos de valor; o Módulo 8, com três questões comentadas sobre melhoria contínua e práticas de gerenciamento; o Módulo 9, com três questões comentadas sobre as quatro dimensões do gerenciamento de produtos e serviços; e o Módulo 10, com três questões comentadas sobre a integração do ITIL com DevOps e PRINCE2 Agile. Em cada nova tentativa de fixação, as alternativas são reorganizadas e a resposta correta muda de posição em relação à tentativa anterior. O visualizador oferece seleção por apresentação, miniaturas, navegação contínua, atalhos de teclado, zoom e modo de tela cheia.

No Simulado 3, cada definição gera uma questão própria. Depois da resposta, o painel explica o conceito correto e também o significado de cada alternativa incorreta, com indicação da seção correspondente do guia.

Ao abrir ou refazer qualquer simulado, a sequência das questões e a posição das alternativas são embaralhadas. A última configuração é registrada no navegador para que a abertura seguinte não repita a mesma ordem nem mantenha a resposta correta na mesma posição.

Se o usuário sair antes de finalizar e tiver respondido ao menos uma questão, o navegador salva a questão atual, as respostas, as correções e a ordem sorteada. Na próxima abertura desse simulado, é possível continuar exatamente de onde parou ou descartar o progresso e recomeçar com um novo embaralhamento. Progresso em 0% é descartado sem exibir a tela de retomada.

O acesso possui autenticação no navegador, CAPTCHA matemático e bloqueio de 30 segundos depois de três tentativas consecutivas inválidas.

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
