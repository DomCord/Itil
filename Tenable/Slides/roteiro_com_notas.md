# Roteiro dos slides e notas

## 00 Planejamento

### 1. Preparação para o Written Exam

Tenable One Vulnerability Management Specialist

13 semanas de estudo, 130 horas

12 de outubro de 2026 a 8 de janeiro de 2027

Plano personalizado para duas horas diárias, de segunda a sexta. A data exata do exame permanece a definir.

Fontes: F01.

### 2. Formato e objetivo

60 questões em inglês, com múltipla escolha e verdadeiro/falso.

120 minutos e mínimo oficial de 80%.

A escrita precede a etapa prática.

Meta de estudo: 90% geral e 85% em cada tema.

Metas pedagógicas propostas, sem garantia de aprovação. O PDF permite ferramentas de tradução sem extensão por idioma. Confirmar como utilizá-las nas instruções do agendamento.

Fontes: F01, F03.

### 3. Mapa dos temas



Semanas / Conteúdo

1 e 2 / Arquitetura e instalação

3 e 4 / Configuração e Host Discovery

5 e 6 / Scans de rede, credenciais e agents

7 e 8 / Findings, risco, compliance e relatórios

9 a 13 / Integração, revisão e simulados completos

Agrupamento didático com base na ementa. Não é um blueprint oficial detalhado.

Fontes: F01, F02.

### 4. Rotina de duas horas

20 minutos de revisão por recuperação ativa.

50 minutos de leitura oficial e slides.

35 minutos de exercício ou laboratório.

15 minutos de questões e registro de erros.

Distribuição editorial. Nos dias de simulado completo, reservar os 120 minutos somente para responder. A correção ocorre na sessão seguinte.

Fontes: planejamento autoral.

### 5. Etapas e entregas

Semanas 1 a 8: um módulo e seu simulado por semana.

Semana 9: cenário integrado e auditoria de cobertura.

Semanas 10 a 12: simulados A/B e correção de lacunas.

Semana 13: revisão leve e preparação do ambiente da prova.

A/B usam questões do banco temático. Repetir itens ajuda a revisar, mas não mede prontidão independente. Explicar respostas e resolver laboratórios reduz o efeito de memorização.

Fontes: planejamento autoral.

### 6. Revisão e caderno de erros

Revisar o erro após 1, 7 e 21 dias.

Classificar causa: conceito, inglês, evidência ou leitura.

Registrar a fonte que sustenta a resposta.

Retestar o tema com questões ainda não usadas.

Método de revisão proposto. Reservar os itens finais do banco para a revisão mista. Se acertar por memória, explicar o mecanismo sem consultar o gabarito.

Fontes: planejamento autoral.

### 7. Pesquisa e atualização

Corte de questões recentes: 09/10/2025 a 09/10/2026.

Fontes sem data explícita ficam marcadas como documentação viva.

Anúncios comerciais não comprovam questões oficiais.

As 160 questões do pacote são autorais e datadas.

Revalidar fontes nas semanas 9 e 13. Não presumir que toda novidade do produto foi incorporada ao banco oficial do exame.

Fontes: F01, F44.

### 8. Critérios de prontidão

Simulados completos com pelo menos 54 acertos em 60.

Cada tema com pelo menos 17 acertos em 20.

Justificativas e vocabulário compreendidos em inglês.

Equipamento e instruções de agendamento conferidos.

Critérios pedagógicos. Um único acerto a mais ou a menos não determina habilidade. Se houver lacunas, priorizar evidência e conceitos antes de agendar. A certificação completa exige também a prática.

Fontes: F03.

### 9. Material local e confronto de versões

Guia oficial local: revisão de 20/06/2024, 1.478 páginas.

Bancos locais: 41 questões em PDF e 33 em Word.

Conceitos úteis entram na trilha com revisão de ambiguidades.

Vídeos de VM entram no calendário como material de apoio.

O guia local fundamenta leituras por páginas. Os bancos locais não têm autenticidade como exame comprovada. As gravações têm apenas inventário e metadados revisados, sem transcrição integral. As regras atuais de severidade e acesso precisam ser lidas na documentação viva.

Fontes: L01, L02, L03, F19.

## 01 Arquitetura e fundamentos

### 1. Escopo da etapa escrita

60 questões de múltipla escolha e verdadeiro/falso.

120 minutos e mínimo oficial de 80%.

Quatro domínios amplos. Oito temas organizam este estudo.

Os simulados deste pacote são autorais. A certificação completa exige escrita e prática. O número 48/60 é referência para simulados com itens de mesmo peso, sem presumir a metodologia interna de pontuação.

Fontes: F01.

### 2. Produtos e responsabilidades

Tenable One Vulnerability Management centraliza a gestão na nuvem.

Nessus executa avaliações ativas nos alvos acessíveis.

Tenable Agents executam verificações locais no host.

Tenable Network Monitor observa tráfego.

O Security Center é um produto diferente. Não transportar regras de repositórios e scan zones para VM sem conferir a documentação do produto.

Fontes: F05, F06, F07.

### 3. Comparação de sensores



Sensor / Boa aplicação / Limitação a verificar

Cloud scanner / Superfície pública acessível / Rotas para redes privadas

Linked Nessus / Rede interna e serviços / Acesso de rede e credenciais

Agent / Hosts móveis e locais / Visão dos serviços remotamente

Network Monitor / Descoberta por tráfego / Dependência de SPAN/TAP

A cobertura depende da posição e da conectividade de cada sensor. Um agente não reproduz automaticamente a visão de um scanner remoto.

Fontes: F06, F07, F31.

### 4. Planejamento de implantação

Inventário esperado e segmentos definem o escopo.

Sensores precisam alcançar seus alvos e a plataforma.

Grupos, networks e janelas traduzem a topologia.

Uma amostra piloto comprova a cobertura.

Exercício: descreva uma matriz segmento, quantidade esperada, sensor, janela, credencial e responsável. Compare esperado versus observado antes de expandir.

Fontes: F05, F16, F17.

### 5. Descoberta e identidade do ativo

Um IP pode mudar ou existir em ambientes diferentes.

Atributos de identidade ajudam a correlacionar evidências.

Networks distinguem ambientes com IPs sobrepostos.

Discovery e avaliação de vulnerabilidades têm finalidades diferentes.

A documentação do template Host Discovery informa que ativos identificados por discovery scans não contam para a licença. Não generalizar essa regra para todo ativo importado ou avaliado.

Fontes: F16, F20, F23.

### 6. Caso: matriz de cobertura

Filial isolada, notebooks móveis e aplicação pública.

Scanner interno atende o segmento roteável da filial.

Agents atendem a avaliação local dos notebooks.

Cloud scanner atende a exposição pública acessível.

Cenário autoral. Complementar com Network Monitor onde o tráfego observado agregue inventário. Relacionar escolhas à evidência coletada, não ao nome comercial do sensor.

Fontes: F05, F07, F31.

### 7. Laboratório e revisão do tema

Entrega: desenho textual da topologia e matriz de cobertura.

Sem console: resolver o caso e justificar cada sensor.

Com console: conferir sensores, grupos e ativos de uma amostra.

Simulado 01: 20 questões, 40 minutos.

Laboratório L01. Trabalhar somente no ambiente de estudo autorizado. Ao revisar, explicar por que cada sensor atende seu caso de uso. Questões e gabarito ficam separados na pasta Simulados.
Material local de apoio: L02 páginas PDF 32, 34, 37, 287, 288. L03 itens 1, 2, 6, 7, 20, 23, 25. L01 itens 3, 5, 6, 7, 8, 34, 35, 39. Arquitetura SaaS e cobertura, sem transportar regras específicas de Security Center. Consultar Fontes/revisao_material_local.md.

Fontes: F05, F06, L02, L03, L01.

## 02 Instalação e sensores

### 1. Tenable Core e Nessus

Tenable Core oferece o sistema e a administração da appliance.

Nessus fornece o mecanismo de avaliação.

A interface de Core é distinta da interface do scanner.

O curso inclui Tenable Core. Revisar instalação e administração sem presumir que Core substitui o console SaaS.

Fontes: F08, F09.

### 2. Portas e interfaces



Uso / Porta padrão / Destino

Comunicação do sensor / TCP 443 / sensor.cloud.tenable.com

Interface Nessus / TCP 8834 / IP do scanner

Interface Network Monitor / TCP 8835 / IP do monitor

Interface Tenable Core / TCP 8000 / IP da appliance

Portas padrão no guia Sensor Security. Regras de acesso aos alvos variam conforme o serviço avaliado. Conferir exceções regionais e de ambiente.

Fontes: F09.

### 3. Dimensionamento

CPU, memória e disco dependem do escopo e da política.

Scans autenticados e complexos podem exigir mais recursos.

Logs e plugins consomem espaço ao longo do tempo.

Recursos reservados da VM precisam suportar o piloto.

Revisar a tabela atual de hardware, evitando memorizar um número universal. O guia alerta para efeitos de NAT em operações de rede de baixo nível.

Fontes: F10.

### 4. Vinculação do sensor

A linking key inicia a associação com a plataforma.

Após o vínculo, o sensor utiliza credenciais próprias.

DNS, TLS, proxy e saída HTTPS precisam funcionar.

O console deve mostrar o sensor esperado e sua comunicação.

Uma linking key não equivale a access key e secret key de API. Manter segredos fora do caderno de estudo.

Fontes: F09, F11.

### 5. Instalação do Agent

O endpoint e a porta precisam corresponder ao ambiente.

agent link associa o host ao gerenciador.

agent status mostra vínculo, comunicação e plugin set.

Nome de agent group diferencia maiúsculas e minúsculas.

Exemplo didático: nessuscli agent link --key=<LINKING_KEY> --host=sensor.cloud.tenable.com --port=443 --groups="Lab". Não executar com dados fictícios em ambiente produtivo. No FedRAMP, usar o endpoint documentado.

Fontes: F12.

### 6. Instalação do monitor passivo

SPAN ou TAP deve fornecer visão bidirecional do tráfego.

A posição do monitor determina o que ele observa.

Hosts silenciosos podem não aparecer imediatamente.

Resultados passivos complementam a avaliação ativa.

O guia atualizado em 27/08/2026 ressalta que atributos de identidade podem demorar ou não ser observáveis no tráfego.

Fontes: F07.

### 7. Laboratório de conectividade

Entrega: tabela de interfaces e evidências de comunicação.

Falha simulada: DNS ou proxy impede o vínculo.

Diagnóstico: serviço local, resolução, TLS, endpoint e vínculo.

Simulado 02: 20 questões, 40 minutos.

Laboratório L02. No modo sem console, ordenar hipóteses e evidências. Com console, consultar status e logs sem expor tokens. Não executar comandos de reset para tentar corrigir uma falha não diagnosticada.
Material local de apoio: L02 páginas PDF 41, 42, 1354, 1355, 1357. L03 itens 6, 7, 14. L01 itens 5, 7, 33. Interfaces, linking keys e comunicação HTTPS. Corrigir a confusão entre protocolo de aplicação e transporte. Consultar Fontes/revisao_material_local.md.

Fontes: F09, F11, F12, L02, L03, L01.

## 03 Configuração e acesso

### 1. Roles e permissões

Roles definem ações e funções acessíveis.

Permissões definem o acesso aos dados e recursos.

Tags permitem organizar o escopo de ativos.

Um usuário de teste valida o acesso efetivo.

A documentação atual contempla custom roles. Diferenciar capacidade de criar scans de acesso aos dados da equipe.

Fontes: F13, F14.

### 2. Tags manuais e automáticas

Tags usam pares Category:Value.

Atribuição manual depende de uma escolha explícita.

Regras automáticas acompanham atributos dos ativos.

Uma mudança de atributos pode alterar a associação.

Exemplos autorais: Ambiente:Lab, Local:Filial, Equipe:Infra. Reavaliar as regras quando o ativo muda de função ou endereço.

Fontes: F15.

### 3. Networks e IPs sobrepostos

Networks distinguem ambientes que repetem endereços.

Um scanner ou scanner group pertence a uma network por vez.

Sensores na network correta reduzem duplicações.

A tag de network pode ajudar no filtro e no escopo.

Caso autoral: filial A e B utilizam 10.0.0.10. Criar contextos separados. Evitar mover sensores entre networks sem conferir o efeito nos ativos existentes.

Fontes: F16.

### 4. Scanner groups e distribuição

O grupo distribui tarefas entre scanners disponíveis.

A capacidade do scanner influencia a execução paralela.

Todos os scanners do grupo precisam alcançar os alvos.

Uma falha de rota pode produzir cobertura parcial.

O guia descreve round robin por tasks. Não pressupor que todo o scan é atribuído integralmente a um único scanner do grupo.

Fontes: F17.

### 5. Exclusions

Uma exclusão ativa prevalece sobre o alvo explícito do scan.

Ela afeta scans de rede. Agents executam localmente.

Exclusões podem ser permanentes ou agendadas.

Uma janela agendada não interrompe um scan já iniciado.

Exercício: distinguir exclusão preventiva de aceitação de risco. Registrar quem aprova, alvo, duração e alternativa de cobertura como prática de gestão.

Fontes: F18.

### 6. Severidade e SLA

General Settings permite escolher VPR ou versões de CVSS.

A documentação atual informa VPR como padrão.

Achados reobservados recebem a nova configuração.

O widget de SLA tem configuração própria.

Existe uma nota antiga em CVSS vs. VPR afirmando severidade baseada em CVSS. General Settings e a release de 27/04/2026 documentam VPR. Conferir a configuração real do tenant e manter explícita a métrica do cenário.

Fontes: F19.

### 7. Laboratório de organização

Entrega: duas tags, uma network e uma matriz de acesso.

Caso: analista da filial deve visualizar apenas seu escopo.

Validação: checar ações permitidas e dados visíveis.

Simulado 03: 20 questões, 40 minutos.

Laboratório L03. Sem console, montar uma tabela usuário, role, tag e permissão. Com console de estudo, validar com usuário de teste. Descrever o efeito de uma exclusão sobre a cobertura.
Material local de apoio: L02 páginas PDF 1105, 1193, 1202, 1300. L03 itens 12, 19, 25. L01 itens 36, 40. Roles, permissões, tags e networks. Diferenciar objetos de produtos distintos. Consultar Fontes/revisao_material_local.md.

Fontes: F14, F15, F16, L02, L03, L01.

## 04 Host Discovery e inventário

### 1. Host Discovery

O template identifica hosts vivos e informações disponíveis.

Portas e identificação de sistema ajudam o inventário.

A lista descoberta orienta uma avaliação posterior.

O resultado precisa ser comparado ao inventário esperado.

Um scan de discovery não equivale a uma avaliação completa de vulnerabilidades. Estabelecer quantos hosts eram esperados, como foram detectados e quais ficaram sem evidência.

Fontes: F20, F23.

### 2. Alvos e escopo

IPs, hostnames, listas e CIDR expressam conjuntos de alvos.

DNS e rotas podem alterar o conjunto efetivamente alcançado.

Exclusions reduzem o conjunto que o scanner pode avaliar.

O scanner escolhido deve alcançar todo o escopo.

Exemplo autoral em laboratório: 192.0.2.0/28 como notação didática. Conferir targets antes de lançar. O bloco de documentação não é um alvo real de laboratório.

Fontes: F21, F18, F05.

### 3. Métodos de descoberta



Método / Evidência / Ponto de atenção

ICMP / Resposta a echo / Filtros podem bloquear

TCP / Resposta em porta testada / Porta pode estar filtrada

ARP / Presença no segmento local / Limite de camada 2

Passivo / Tráfego observado / Host pode permanecer silencioso

A escolha depende do segmento, filtros e objetivos. ARP utiliza a vizinhança de camada 2. Ausência de resposta a ICMP isoladamente não prova que o host esteja desligado.

Fontes: F21, F07.

### 4. Portas e serviços

O intervalo de portas determina a superfície testada.

Uma porta fora do intervalo pode ocultar um serviço.

Identificação de serviço complementa o número da porta.

Um scan amplo exige tempo e capacidade adequados.

Cenário autoral: serviço HTTPS na porta 8443 não aparece em um intervalo que a exclui. Ajustar uma política de teste e comparar o resultado.

Fontes: F21, F22.

### 5. Ativos frágeis e impacto

Safe Checks reduz a execução de testes potencialmente danosos.

A política ainda precisa respeitar o tipo de dispositivo.

Equipamentos frágeis podem exigir exclusão e cobertura alternativa.

Um piloto mede impacto e qualidade de descoberta.

Safe Checks não garante ausência de impacto. O guia de tuning recomenda acompanhar desempenho dos alvos ao ajustar concorrência e timeouts.

Fontes: F22, F18.

### 6. Caso: hosts ausentes

Inventário esperado: 40 hosts. Discovery observa 28.

Hipóteses: filtros, rota, alvo, exclusão ou host silencioso.

TCP e evidências alternativas ajudam a testar hipóteses.

O total observado precisa vir acompanhado do denominador.

Cenário e números autorais. 28/40 corresponde a 70% de cobertura observada, não a 70% de segurança. A evidência disponível não permite declarar os 12 hosts seguros.

Fontes: F21, F23.

### 7. Laboratório de descoberta

Entrega: esperado, observado e justificativa dos ausentes.

Comparação: métodos de discovery e intervalos de portas.

Sem console: analisar o caso dos 40 hosts.

Simulado 04: 20 questões, 40 minutos.

Laboratório L04. Registrar a posição do sensor, método, escopo e horário. Separar alcance do host, identificação do serviço e presença de vulnerabilidades.
Material local de apoio: L02 páginas PDF 287, 288, 293, 294. L03 itens 23, 24, 26, 30, 31, 32. L01 itens 11, 31, 39. Escopo, discovery e inventário. Resolução DNS sozinha não comprova host ativo. Consultar Fontes/revisao_material_local.md.

Fontes: F20, F21, F23, L02, L03, L01.

## 05 Scans de rede e credenciais

### 1. Templates e políticas

Basic Network Scan atende avaliações usuais de rede.

Advanced Network Scan oferece opções adicionais.

Credentialed Patch Audit enumera atualizações ausentes.

Templates customizados padronizam configurações compartilhadas.

A documentação descreve herança de settings do user-defined template. Localizar o objeto que controla a configuração antes de alterá-la.

Fontes: F20, F46.

### 2. Plugins e atualizações

Plugins executam verificações específicas.

Famílias agrupam plugins relacionados.

Uma família totalmente habilitada inclui novos plugins recebidos.

Seleção parcial exige atenção à cobertura futura.

A seleção de plugins deve acompanhar o objetivo da avaliação. Um tactical scan direcionado a uma CVE não cobre automaticamente todas as vulnerabilidades do host.

Fontes: F24.

### 3. Credenciais Windows

A conta precisa de privilégios adequados para checks locais.

SMB, WMI e políticas do host afetam o acesso.

Remote Registry e shares administrativos fazem parte da revisão.

Credenciais corretas podem falhar por bloqueios de acesso.

No laboratório, restringir acesso ao scanner de estudo e registrar a configuração. Evitar seguir instruções antigas de desativação ampla de controles sem avaliar sua aplicação.

Fontes: F26, F25.

### 4. Credenciais Linux

SSH fornece acesso às verificações locais.

Chave ou senha deve corresponder ao usuário do alvo.

Verificações completas exigem privilégios adequados.

Elevação e inventário de pacotes precisam funcionar.

Distinguir login SSH bem-sucedido de checks completos. Um usuário sem elevação pode permitir algumas verificações, mas não todos os controles de configuração.

Fontes: F27, F28.

### 5. Evidência de scan autenticado

O status final do scan não comprova autenticação completa.

Plugin 19506 registra informações da execução.

Plugin 21745 apoia o diagnóstico de avaliação de patches.

Inventário e permissões completam a análise.

A regra atual de Credentialed checks: yes requer autenticação e inventário nativo de pacotes/patches. No Windows, acesso ao registro e shares ou privilégios SMB adequados também importam. Não concluir sucesso apenas pela ausência de um erro.

Fontes: F28, F29, F30.

### 6. Tuning e diagnóstico

Concorrência, timeouts e alcance afetam duração e cobertura.

Uma alteração por vez permite comparar o efeito.

CPU, memória, rede e alvo podem limitar desempenho.

Menos findings pode indicar perda de cobertura.

Prática de diagnóstico: manter alvo e política comparáveis entre execuções. Antes de interpretar melhora, confirmar credenciais, portas e plugins.

Fontes: F22, F10.

### 7. Laboratório de credenciais

Entrega: comparação autenticado versus não autenticado.

Falha: senha correta com inventário de pacotes inacessível.

Evidência: output, configuração e hipótese confirmada.

Simulado 05: 20 questões, 40 minutos.

Laboratório L05. Sem console, analisar uma evidência textual fictícia. Com console de estudo, usar um Windows e um Linux autorizados. Registrar os resultados do plugin 19506 quando disponíveis.
Material local de apoio: L02 páginas PDF 287, 288, 293, 294. L03 itens 4, 15, 16, 18, 19. L01 itens 9, 29, 30, 32. Plugins, credenciais e qualidade da coleta. Evitar a ideia de precisão perfeita ou política como lista universal de alvos. Consultar Fontes/revisao_material_local.md.

Fontes: F26, F27, F28, L02, L03, L01.

## 06 Agents e cobertura móvel

### 1. Avaliação local do host

O agent utiliza CPU e memória do próprio host.

O host envia os resultados à plataforma.

A avaliação local amplia cobertura de endpoints móveis.

A visão remota de serviços continua relevante.

Um notebook fora da rede corporativa pode executar checks locais conforme a modalidade configurada. O envio depende da comunicação posterior com o gerenciador.

Fontes: F31, F07.

### 2. Link, grupos e status

Linking key e endpoint associam o agent ao gerenciador.

Agent groups organizam os participantes do scan.

Status local ajuda a confirmar serviço e vínculo.

Última comunicação e plugin set ajudam no diagnóstico.

Distinguir instalado, vinculado, comunicado, executado e enviado. Esses estados não são equivalentes.

Fontes: F12, F06.

### 3. Scan Window

A janela define o período para o grupo reportar.

A plataforma ou o usuário inicia a janela.

Endpoints indisponíveis podem criar lacunas.

A disponibilidade do grupo orienta duração e horário.

Não confundir a duração da janela com a garantia de participação de todos os agents. Validar quais hosts efetivamente forneceram dados.

Fontes: F32.

### 4. Triggered Scan

O agent inicia a execução a partir de um trigger.

Triggers podem usar intervalo, arquivo ou nessuscli.

Mobilidade e múltiplos fusos favorecem esse modelo.

A plataforma aceita os dados conforme as regras documentadas.

Triggered scans oferecem independência em relação ao lançamento de uma janela pela plataforma. O guia limita a aceitação de dados antigos. Conferir o valor atual antes de memorizar limites.

Fontes: F32.

### 5. Comparação de modalidades



Aspecto / Scan Window / Triggered Scan

Início / Plataforma ou usuário / Trigger no agent

Participação / Período definido / Conforme ocorrência do trigger

Mobilidade / Exige atenção à janela / Maior flexibilidade

Exportação / Resultados individuais / Bulk vulnerability export API

A documentação recomenda window scans quando é necessário exportar resultados individuais. Para triggered scans, a exportação de vulnerabilidades utiliza a API de bulk export.

Fontes: F32.

### 6. Saúde e evolução do produto

Check-in recente ajuda a avaliar comunicação.

Profiles controlam configurações aplicáveis aos agents.

Release notes registram mudanças de saúde e avaliação.

A função disponível depende da versão e do ambiente.

Atualização datada de 06/10/2026: health Offline para agents sem check-in por 72 horas. Estudar como atualização de produto. A publicação não comprova que o assunto será cobrado no exame.

Fontes: F44, F12.

### 7. Laboratório de agents

Entrega: trilha instalado, vinculado, executado e enviado.

Caso: notebooks deixam de participar de uma janela curta.

Análise: modalidade, comunicação, grupos e resultado.

Simulado 06: 20 questões, 40 minutos.

Laboratório L06. Sem console, escolher modalidade para três perfis de disponibilidade. Com console, conferir um agent do laboratório e seu histórico. Nunca usar reset como primeiro passo sem diagnóstico.
Material local de apoio: L02 páginas PDF 339, 340, 1300. L03 itens 3. L01 itens 33, 41. Triggered versus window e execução local. Offline exige condições documentadas e envio posterior. Consultar Fontes/revisao_material_local.md.

Fontes: F12, F31, F32, L02, L03, L01.

## 07 Findings, risco e exceções

### 1. Granularidade e filtros

Um finding corresponde a uma ocorrência em um ativo.

Plugin, porta e protocolo distinguem ocorrências.

Agrupar por plugin responde uma pergunta diferente de agrupar por ativo.

Escopo, estado e datas alteram a lista analisada.

Exemplo autoral: a mesma falha em dois hosts não equivale a um único host exposto. Diferenciar contagem de ativos, plugins e ocorrências.

Fontes: F33, F36.

### 2. Estados das vulnerabilidades



Estado / Interpretação

New / Detecção uma vez

Active / Detecção mais de uma vez

Fixed / A avaliação já não detecta a falha

Resurfaced / Nova detecção após Fixed

A UI filtra New junto com Active. Na API, new e active aparecem como open, e resurfaced aparece como reopened.

Fontes: F34.

### 3. CVSS, VPR e contexto

CVSS descreve características técnicas da vulnerabilidade.

VPR utiliza informações dinâmicas de ameaça.

ACR descreve criticidade de negócio do ativo, quando licenciado.

A prioridade combina a evidência com o contexto do ambiente.

A documentação de General Settings prevalece para configuração de severidade. Especificar a métrica adotada quando comparar severidades de findings.

Fontes: F35, F45.

### 4. Drivers de VPR

Maturidade de exploit e probabilidade ajudam a explicar o score.

Presença no CISA KEV indica contexto de exploração.

O score pode mudar quando muda a informação de ameaça.

O usuário não edita diretamente o valor calculado.

Drivers refletem o panorama global da vulnerabilidade. A criticidade de um servidor específico precisa de contexto separado.

Fontes: F35.

### 5. Severidade e decisão de correção

Um score alto exige avaliação do alcance e da evidência.

Hosts de negócio crítico podem exigir prioridade adicional.

Uma mudança de métrica pode deixar severidades distintas temporariamente.

Uma nova avaliação comprova o resultado da correção.

Caso autoral: comparar falha com exploração ativa num servidor crítico e falha técnica grave num host de laboratório. Não criar uma fórmula universal sem política de risco.

Fontes: F19, F45, F34.

### 6. Recast, Accept e Change Result

Recast ajusta a severidade exibida para o escopo da regra.

Accept registra aceitação e oculta findings na tabela.

Change Result altera o resultado de host audits.

Critério, justificativa e expiração delimitam a exceção.

Essas ações não aplicam patches. A regra pode levar tempo para refletir nas views. Usar evidências e escopo estreito em exercícios de governança.

Fontes: F37.

### 7. Laboratório de risco

Entrega: lista de prioridades com justificativas e evidências.

Caso: uma regra ampla esconde findings fora do objetivo.

Revisão: filtros, critério, prazo e condição de reavaliação.

Simulado 07: 20 questões, 40 minutos.

Laboratório L07. Sem console, criar uma decisão de risco para três achados fictícios. Com console, apenas visualizar regras reais ou criar uma regra em tenant de estudo autorizado.
Material local de apoio: L02 páginas PDF 43, 44, 45, 46, 49, 50, 1010. L03 itens 5, 8, 20, 21, 22, 28. L01 itens 16, 17, 18, 19, 20, 21, 28. CVSS, VPR, contexto e estados. Atualizar severidade com General Settings de 2026. Consultar Fontes/revisao_material_local.md.

Fontes: F33, F34, F37, L02, L03, L01.

## 08 Compliance, relatórios e resposta

### 1. Vulnerabilidades e compliance

Uma avaliação de patches mede uma parte da segurança.

Compliance compara a configuração com requisitos de um benchmark.

Ausência de CVEs detectadas não comprova conformidade.

Credenciais e audit correto determinam o que pode ser verificado.

Escolher benchmark compatível com sistema, versão e perfil. Revisar controles não aplicáveis antes de interpretar percentuais.

Fontes: F38, F39.

### 2. Audit files e customização

O arquivo .audit define verificações de configuração.

O benchmark e sua versão precisam corresponder ao alvo.

Condições podem controlar a aplicação de uma verificação.

Uma customização exige validação de lógica e resultado.

Exercício autoral: comparar um requisito de serviço com a evidência retornada. Testar caminhos then e else em um exemplo textual. Não fornecer um audit de produção não validado.

Fontes: F38, F48.

### 3. Resultados de audits



Resultado / Leitura prática / Próximo passo

Passed / Atende ao parâmetro testado / Preservar evidência

Failed / Não atende ao parâmetro / Validar e corrigir

Warning / Revisão ou conclusão pendente / Investigar contexto

Distinguir falha comprovada de resultado inconclusivo. Falta de privilégio ou coleta insuficiente requer investigação antes de classificar conformidade.

Fontes: F39.

### 4. Dashboards e relatórios

Dashboards permitem visão agregada e drill-down.

Filtros e escopo precisam acompanhar cada indicador.

Relatórios PDF comunicam resultados definidos por template.

Cobertura e data da coleta dão contexto ao risco.

Para a gestão, apresentar tendência, ativos afetados e responsáveis. Para operação, apresentar ativo, plugin, evidência e solução. Manter a mesma definição ao comparar períodos.

Fontes: F40, F42.

### 5. Exports e evidência

CSV e JSON favorecem análise estruturada.

Exportações podem ser imediatas ou agendadas.

O resultado reflete filtros e acesso do usuário.

Dados exportados precisam de data e escopo registrados.

Um total de relatório só pode ser reconciliado com outra view usando unidade de contagem, filtros, datas e permissões comparáveis.

Fontes: F41, F42.

### 6. Exposure Response e acompanhamento

Initiatives organizam ações de correção.

Report Cards apresentam andamento por responsável ou iniciativa.

A visão de progresso precisa se apoiar em novos resultados.

Aceitar risco e corrigir vulnerabilidade produzem efeitos diferentes.

O curso oficial inclui Exposure Response. Estudar conceitos e fluxo do produto. Recursos e nomes podem mudar. Evitar ampliar a preparação para automação avançada fora do escopo Specialist.

Fontes: F43, F34, F37.

### 7. Laboratório de comunicação

Entrega: relatório de uma página e export de exemplo.

Conteúdo: escopo, coleta, evidência, responsável e prazo.

Caso: queda de findings causada por perda de autenticação.

Simulado 08: 20 questões, 40 minutos.

Laboratório L08. Dados fictícios: 40 ativos esperados, 28 observados e 20 com coleta autenticada confirmada. O relatório deve separar os denominadores e explicar a lacuna.
Material local de apoio: L02 páginas PDF 98, 293, 294, 340. L03 itens 11, 17, 28, 33. L01 itens 13, 14, 22, 23, 26, 37. Audits e relatórios, com formatos e regras conferidos no produto VM. Consultar Fontes/revisao_material_local.md.

Fontes: F38, F41, F43, L02, L03, L01.
