/* Tradução de apoio ao estudo. Fonte editável: traducoes_pt_br.json.
 * Funciona localmente, sem serviço de tradução durante o simulado.
 */
(() => {
  const translations = {
  "SC-Q001": {
    "q": "Qual é a diferença arquitetônica fundamental entre Tenable.sc e Tenable.io?",
    "o": [
      "Tenable.sc oferece suporte apenas a destinos Windows; Tenable.io oferece suporte a ambientes multiplataforma",
      "O Tenable.sc armazena todos os dados de vulnerabilidade no local, sob controle do cliente; Tenable.io armazena dados na nuvem da Tenable",
      "Tenable.sc usa agentes para todas as verificações; Tenable.io usa apenas verificação baseada em rede",
      "Tenable.sc requer hardware físico; O Tenable.io só pode ser implantado como uma máquina virtual"
    ]
  },
  "SC-Q002": {
    "q": "No Tenable.sc, qual é a função de uma 'zona de varredura'?",
    "o": [
      "Uma zona de varredura define a janela de tempo durante a qual as varreduras podem ser executadas",
      "Uma Zona de Verificação é uma política de conformidade aplicada a um conjunto de ativos",
      "Uma zona de varredura é uma partição de repositório para armazenar dados de varredura de diferentes segmentos de rede",
      "Uma zona de varredura define quais scanners Nessus estão disponíveis para verificar intervalos de IP específicos e podem ser alocados para organizações"
    ]
  },
  "SC-Q003": {
    "q": "No Tenable.sc, o que é um 'Repositório' e quais tipos estão disponíveis?",
    "o": [
      "Uma pasta compartilhada para exportar relatórios para unidades de rede",
      "Uma pasta do sistema de arquivos que armazena arquivos XML da política de varredura do Nessus",
      "Um arquivo de backup das definições de configuração do Tenable.sc",
      "Um banco de dados que armazena dados de varredura; os tipos incluem repositórios IPv4, IPv6, Agente e Universais"
    ]
  },
  "SC-Q004": {
    "q": "Qual é a finalidade de um 'Repositório Universal' no Tenable.sc?",
    "o": [
      "Para armazenar dados de varredura de todas as organizações em uma única visualização unificada",
      "Para armazenar dados de vulnerabilidade baseados e sem agente (varredura de rede) em um único repositório",
      "Para armazenar resultados de benchmark de conformidade separadamente dos dados de vulnerabilidade",
      "Para arquivar dados de varredura permanentemente sem limites de retenção"
    ]
  },
  "SC-Q005": {
    "q": "Qual função de usuário do Tenable.sc pode gerenciar usuários em uma organização, mas não pode definir configurações em todo o sistema, como a criação de novas organizações?",
    "o": [
      "Administrator (Administrador)",
      "Security Manager (Gerente de Segurança)",
      "Security Analyst (Analista de Segurança)",
      "Auditor (Auditor)"
    ]
  },
  "SC-Q006": {
    "q": "No Tenable.sc, qual é a diferença entre uma 'Lista de ativos estática' e uma 'Lista de ativos dinâmica'?",
    "o": [
      "Uma lista de ativos estática contém IPs externos; uma lista de ativos dinâmica contém IPs internos",
      "Uma lista de ativos estática não pode ser modificada depois de criada; uma lista de ativos dinâmica muda automaticamente com base na programação de verificação",
      "Uma lista de ativos estática contém endereços IP definidos manualmente; uma lista de ativos dinâmica inclui automaticamente IPs que correspondem aos critérios de consulta",
      "Uma lista estática de ativos é usada para verificação de conformidade; uma lista dinâmica de ativos é usada apenas para verificação de vulnerabilidades"
    ]
  },
  "SC-Q007": {
    "q": "Como um administrador emparelha um scanner Nessus remoto com o Tenable Security Center?",
    "o": [
      "Criar um túnel SSH entre o scanner Nessus e o servidor Tenable Security Center",
      "Adicione o scanner em Recursos > Scanners Nessus usando o nome de host/IP do scanner, porta 8834 e um nome de usuário e senha de administrador (ou autenticação de certificado SSL)",
      "Gere uma chave de vinculação no Tenable Security Center e cole-a no campo Nessus Linking Key durante a configuração do scanner",
      "Fazer upload do certificado SSL do scanner Nessus para a lista de permissões DNS do Tenable Security Center"
    ]
  },
  "SC-Q008": {
    "q": "Qual é o recurso principal da função de usuário 'Auditor' do Tenable.sc?",
    "o": [
      "Gerenciar contas de usuários dentro da organização atribuída",
      "Execução de varreduras sob demanda em listas de ativos específicas",
      "Criar políticas de auditoria de conformidade e atribuí-las a zonas de varredura",
      "Acesso somente leitura a relatórios, painéis e resultados de verificação sem a capacidade de criar ou modificar nada"
    ]
  },
  "SC-Q009": {
    "q": "No Tenable.sc, o que acontece com os dados de varredura quando o período de retenção de dados configurado para um repositório expira?",
    "o": [
      "Os dados de vulnerabilidade mais antigos são eliminados do repositório com base nas configurações de retenção",
      "O repositório fica bloqueado até que um administrador limpe manualmente os dados antigos",
      "Todos os dados de varredura são retidos permanentemente, independentemente das configurações de retenção",
      "Os dados são arquivados automaticamente em um repositório remoto externo"
    ]
  },
  "SC-Q010": {
    "q": "Qual filtro de consulta Tenable.sc você usaria para criar uma lista dinâmica de ativos contendo todos os ativos com pelo menos uma vulnerabilidade Crítica (CVSS 10.0)?",
    "o": [
      "Filtro CVSS maior que 9,0 no construtor Static Asset List",
      "Filtro ACR maior que 8 na consulta do repositório",
      "Filtro de gravidade definido como 'Crítico' na consulta da lista de ativos dinâmicos",
      "Filtro da família de plug-ins definido como 'Windows: Microsoft Bulletins'"
    ]
  },
  "SC-Q011": {
    "q": "No Tenable.sc, o que é uma 'Organização' e qual é sua finalidade?",
    "o": [
      "Um agrupamento de políticas de varredura que compartilham o mesmo benchmark de conformidade",
      "Uma empresa parceira externa com a qual Tenable.sc pode compartilhar dados de vulnerabilidade automaticamente",
      "Uma convenção de nomenclatura para agrupar scanners Nessus por localização física",
      "Um limite lógico agrupando usuários, repositórios, zonas de varredura e ativos para fornecer separação multilocatário em uma única instância do Tenable.sc"
    ]
  },
  "SC-Q012": {
    "q": "Uma implantação do Tenable.sc possui um segmento de rede DMZ sem acesso de entrada ao scanner corporativo. Qual é a abordagem correta para verificar os ativos da DMZ?",
    "o": [
      "Use apenas monitoramento passivo, pois a varredura ativa é impossível em uma DMZ",
      "Exportar a política de varredura Tenable.sc para um Nessus independente e importar manualmente os resultados",
      "Implante um scanner Nessus adicional na DMZ, emparelhe-o com Tenable.sc e configure uma zona de varredura para a sub-rede DMZ",
      "Estender a zona de varredura do scanner corporativo para incluir a faixa de IP DMZ"
    ]
  },
  "SC-Q013": {
    "q": "Qual recurso do Tenable.sc permite que os administradores rastreiem tendências de vulnerabilidade ao longo do tempo sem precisar de uma ferramenta de relatório separada?",
    "o": [
      "Exportação do histórico de varredura para CSV para análise de tendências em planilhas",
      "Componentes do painel que usam fontes de dados habilitadas para tendências que registram contagens de vulnerabilidades ao longo do tempo",
      "O rastreador de melhoria de benchmark de conformidade em políticas de varredura",
      "Comparação de repositório entre dois tipos diferentes de repositório"
    ]
  },
  "SC-Q014": {
    "q": "No Tenable.sc, o que é necessário para permitir que uma organização use um repositório específico?",
    "o": [
      "O Administrador deve atribuir acesso ao repositório à organização na configuração do repositório",
      "O Gerente de Segurança deve criar o repositório dentro de sua organização",
      "Os usuários devem ter função de Auditor ou superior para acessar os dados do repositório",
      "O repositório deve ser mapeado para a zona de varredura da organização"
    ]
  },
  "SC-Q015": {
    "q": "Qual é a finalidade das 'Listas de ativos combinadas' no Tenable.sc?",
    "o": [
      "Para criar uma nova lista de ativos realizando operações de união, interseção ou diferença em listas de ativos existentes",
      "Para compartilhar listas de ativos entre várias organizações simultaneamente",
      "Para mesclar dados do repositório de dois ciclos de varredura diferentes",
      "Para combinar dados de lista de ativos estáticos e dinâmicos em um único arquivo de exportação IP"
    ]
  },
  "SC-Q016": {
    "q": "Em uma implantação do Tenable.sc com várias organizações, como os dados de varredura são separados entre as organizações?",
    "o": [
      "Cada organização tem uma instância de banco de dados Tenable.sc completamente separada",
      "A separação de dados é imposta pelo scanner Nessus, atribuindo resultados a organizações específicas",
      "Cada organização recebe acesso a repositórios específicos; os resultados da varredura são armazenados nesses repositórios e os usuários só veem os dados dos repositórios atribuídos",
      "Os resultados da varredura são marcados com um ID da organização e filtrados no momento da consulta para cada usuário"
    ]
  },
  "SC-Q017": {
    "q": "Qual componente do painel Tenable.sc é mais adequado para rastrear o número de vulnerabilidades críticas em uma lista de ativos específica nos últimos 30 dias?",
    "o": [
      "Um componente de gráfico de pizza mostrando a distribuição de gravidade atual na lista de ativos",
      "Um componente gráfico de tendências filtrado para a lista de ativos com gravidade definida como Crítica e um intervalo de tempo de 30 dias",
      "Um componente de tabela listando os 10 principais hosts por contagem de vulnerabilidades",
      "Um componente de resumo mostrando a contagem total atual de vulnerabilidades"
    ]
  },
  "SC-Q018": {
    "q": "Para que é usado o recurso de sincronização de 'repositório externo' do Tenable.sc?",
    "o": [
      "Para replicar dados de vulnerabilidade de uma instância Tenable.sc para outra para recuperação de desastres ou relatórios consolidados",
      "Para sincronizar feeds do plug-in Nessus entre servidores Tenable.sc primários e secundários",
      "Para fazer backup automático da configuração do Tenable.sc em um bucket de armazenamento em nuvem",
      "Para compartilhar resultados de verificação com Tenable.io para análise baseada em nuvem"
    ]
  },
  "SC-Q019": {
    "q": "No Tenable Security Center, qual abordagem fornece filtragem interativa e dinâmica de dados de vulnerabilidade sem exportar um arquivo de relatório estático?",
    "o": [
      "Agende um relatório CSV e abra-o somente em um editor de texto",
      "Exporte um relatório HTML e conte com filtros de visualização de impressão do navegador",
      "Gere um relatório PDF com JavaScript incorporado para filtragem dinâmica",
      "Use a interface de consulta de análise de vulnerabilidade ou um componente de painel interativo"
    ]
  },
  "SC-Q020": {
    "q": "Qual é a configuração de 'Normalização de IP' em um repositório Tenable.sc e por que ela é importante?",
    "o": [
      "Padroniza a numeração de portas em diferentes configurações de política de varredura",
      "Normaliza as pontuações CVSS em diferentes versões do plugin Nessus",
      "Converte endereços IPv6 para formato IPv4 para armazenamento em repositórios IPv4",
      "Ele mapeia diferentes nomes DNS ou IDs de agente resolvendo o mesmo endereço IP para um único registro de ativo, evitando rastreamento duplicado de vulnerabilidades"
    ]
  },
  "SC-Q021": {
    "q": "No Tenable Security Center, qual função organizacional integrada pode criar políticas de varredura e executar verificações, mas não pode gerenciar grupos ou usuários?",
    "o": [
      "Administrator (Administrador)",
      "Security Analyst (Analista de Segurança)",
      "Security Manager (Gerente de Segurança)",
      "Auditor (Auditor)"
    ]
  },
  "SC-Q022": {
    "q": "O que diferencia uma configuração de 'verificação ativa' do Tenable.sc de uma configuração de 'verificação passiva'?",
    "o": [
      "Varreduras ativas enviam pacotes de sondagem para alvos; varreduras passivas monitoram o tráfego de rede sem enviar sondagens",
      "As varreduras ativas são executadas continuamente; verificações passivas são executadas em uma programação fixa",
      "As varreduras ativas requerem aprovação do Administrador; varreduras passivas podem ser executadas por analistas de segurança",
      "As verificações ativas são realizadas por agentes Nessus; varreduras passivas são executadas pelo scanner de rede"
    ]
  },
  "SC-Q023": {
    "q": "No Tenable.sc, qual tipo de credencial normalmente é usado para realizar varreduras autenticadas de servidores Windows ingressados em um domínio do Active Directory?",
    "o": [
      "Autenticação baseada em chave SSH para instalações do Windows Server Core",
      "Sequência de comunidade SNMP para acesso ao Windows Management Instrumentation (WMI)",
      "Credenciais do Windows com administrador de domínio ou conta de varredura dedicada no grupo Administradores de Domínio ou Administradores locais",
      "Autenticação de token de API por meio da API REST do Windows"
    ]
  },
  "SC-Q024": {
    "q": "Um administrador do Tenable.sc deseja gerar um relatório mostrando todas as vulnerabilidades nos ativos do ambiente de dados do titular do cartão PCI (CDE) com pontuação CVSS 7,0 ou superior. Quais elementos são necessários?",
    "o": [
      "Uma organização dedicada ao PCI CDE com relatórios de propriedade do administrador",
      "Uma nova política de varredura configurada com verificações de conformidade PCI direcionadas à sub-rede CDE",
      "Um repositório externo contendo apenas dados de vulnerabilidade CDE",
      "Uma lista de ativos estática ou dinâmica para ativos CDE, um relatório configurado com um filtro CVSS para 7.0+ e acesso ao repositório CDE"
    ]
  },
  "SC-Q025": {
    "q": "No Tenable.sc, qual componente do sistema gerencia a interface do usuário baseada na Web e serve o console de gerenciamento?",
    "o": [
      "A interface web do scanner Nessus encaminhada por meio de um proxy reverso",
      "O servidor web Tenable.sc (baseado em Apache) em execução no dispositivo Tenable.sc",
      "Um servidor de gerenciamento separado adquirido juntamente com a licença Tenable.sc",
      "O servidor de banco de dados Tenable.sc que também atende conexões HTTP"
    ]
  },
  "SC-Q026": {
    "q": "Ao configurar uma política de varredura Tenable.sc para auditoria de conformidade, que tipo de arquivo deve ser carregado para ativar as verificações do CIS Benchmark?",
    "o": [
      "Arquivo de auditoria (.audit) fornecido pela Tenable ou baixado do portal Tenable Audit Files",
      "Arquivo XML de política exportado do DISA STIG Viewer",
      "Esquema de configuração JSON do site do CIS",
      "Pacote de plug-ins Nessus (.tar.gz) para plug-ins de conformidade"
    ]
  },
  "SC-Q027": {
    "q": "Qual é a porta HTTPS padrão para acessar o console de gerenciamento Tenable.sc?",
    "o": [
      "443",
      "8834",
      "8080",
      "3000"
    ]
  },
  "SC-Q028": {
    "q": "No Tenable.sc, um gerente de segurança deseja garantir que um novo analista só possa visualizar dados de vulnerabilidade de servidores na sub-rede '10.10.0.0/16'. Qual é a abordagem correta?",
    "o": [
      "Configure o scanner Nessus do analista para examinar apenas 10.10.0.0/16",
      "Criar uma instância separada do Tenable.sc para o analista com apenas 10.10.0.0/16 na zona de varredura",
      "Criar uma lista de ativos para 10.10.0.0/16, atribuir o repositório que contém esses dados à organização e garantir que as permissões do usuário os restrinjam a esse escopo de ativo",
      "Aplicar um filtro CVSS na conta do analista para mostrar apenas os resultados 10.10.0.0/16"
    ]
  },
  "SC-Q029": {
    "q": "Qual tipo de capítulo de relatório Tenable.sc exibe uma contagem de vulnerabilidades por nível de gravidade como um gráfico de barras?",
    "o": [
      "Capítulo Resumo de ativos com detalhamento de gravidade",
      "Capítulo da tabela classificado por gravidade",
      "Capítulo de texto com estatísticas de gravidade incorporadas",
      "Capítulo do gráfico usando uma fonte de dados de distribuição de gravidade de vulnerabilidade"
    ]
  },
  "SC-Q030": {
    "q": "No Tenable.sc, qual é a ordem correta de operações ao configurar uma nova organização para uma empresa subsidiária?",
    "o": [
      "Criar a organização, atribuir repositórios, criar a conta do Security Manager e permitir que o Security Manager crie analistas e configure varreduras",
      "Importe primeiro as políticas de varredura Nessus existentes da subsidiária e, em seguida, crie a organização em torno delas",
      "Primeiro crie o Security Manager, depois crie a organização e depois atribua repositórios",
      "Crie repositórios primeiro, depois crie zonas de varredura e, em seguida, crie a organização com zona de varredura e atribuições de repositório"
    ]
  },
  "SC-Q031": {
    "q": "Qual é o objetivo principal da função 'Consulta' do Tenable.sc na análise de vulnerabilidades?",
    "o": [
      "Para criar expressões de filtro salvas que recuperam dados de vulnerabilidade específicos de repositórios para análise ou componentes do painel",
      "Para enviar consultas de API para feeds externos de inteligência contra ameaças",
      "Para consultar o banco de dados do plugin Nessus para obter informações sobre CVEs específicos",
      "Para agendar relatórios de vulnerabilidade automatizados de forma recorrente"
    ]
  },
  "SC-Q032": {
    "q": "Qual protocolo de rede o console web Tenable.sc usa para comunicação entre o navegador do administrador e o servidor Tenable.sc?",
    "o": [
      "SNMP na porta 161",
      "SSH na porta 22",
      "HTTP na porta 8080",
      "HTTPS (HTTP criptografado por TLS na porta 443)"
    ]
  },
  "SC-Q033": {
    "q": "No Tenable.sc, que tipo de lista de ativos capturaria automaticamente todos os ativos com um tipo de sistema operacional específico detectado durante a verificação, sem exigir atualizações manuais?",
    "o": [
      "Tipo de lista de ativos da lista de observação para rastreamento específico do sistema operacional",
      "Lista de ativos estática importada de uma planilha de inventário de sistema operacional",
      "Lista de ativos combinados cruzando todos os repositórios",
      "Lista de ativos dinâmica com filtro de consulta do tipo SO"
    ]
  },
  "SC-Q034": {
    "q": "Qual recurso do Tenable.sc permite que um administrador veja quais scanners Nessus estão ativos no momento e seu último horário de check-in?",
    "o": [
      "A página de status de integridade do Repositório",
      "Recursos > Scanners Nessus no menu Administração",
      "O registro de auditoria da organização",
      "O componente do painel de resumo da zona de varredura"
    ]
  },
  "SC-Q035": {
    "q": "No Tenable.sc, qual é a consequência de atribuir o mesmo intervalo de IP a duas zonas de varredura diferentes, cada uma com scanners diferentes?",
    "o": [
      "O intervalo de IP será verificado duas vezes simultaneamente por ambos os scanners, duplicando a carga da rede",
      "Tenable.sc rejeitará a configuração e exigirá intervalos de IP exclusivos por zona de varredura",
      "As varreduras direcionadas a esse intervalo de IP podem usar qualquer um dos scanners, fornecendo redundância e flexibilidade",
      "Somente a zona de varredura criada primeiro será utilizada; a segunda atribuição é ignorada"
    ]
  },
  "SC-Q036": {
    "q": "Qual é a configuração 'Dias de tendência' em um componente do painel Tenable.sc?",
    "o": [
      "Define a frequência com que o painel atualiza automaticamente os dados de vulnerabilidade",
      "Determina quantos dias antes que uma vulnerabilidade seja considerada obsoleta",
      "Limita o número de dias que um relatório pode ser agendado com antecedência",
      "Define quantos dias de dados históricos serão incluídos no gráfico de tendência de série temporal"
    ]
  },
  "SC-Q037": {
    "q": "Qual recurso do Tenable.sc permite a exportação automática programada de um relatório de vulnerabilidade para um local de rede compartilhado ou destinatário de e-mail?",
    "o": [
      "Exportação automática dos resultados da varredura via webhook",
      "Exportações de instantâneos do painel em uma programação cron",
      "Sincronização de repositório com notificação por e-mail",
      "Agendamento de relatórios com configurações de distribuição (e-mail ou caminho de rede)"
    ]
  },
  "SC-Q038": {
    "q": "No Tenable.sc, qual tipo de verificação é apropriado para detectar vulnerabilidades em aplicativos Web executados em servidores internos?",
    "o": [
      "Verificação de conformidade usando um arquivo de auditoria de benchmark do servidor web CIS",
      "Verificação de aplicativos da Web usando uma política de varredura com plug-ins de teste de aplicativos da Web ativados",
      "Discovery Scan visando os endereços IP do servidor web",
      "Varredura básica de rede com a porta 443 como único alvo de varredura"
    ]
  },
  "SC-Q039": {
    "q": "Um repositório Tenable.sc é configurado com dados IPv4. Um analista também precisa rastrear vulnerabilidades de hosts IPv6 no mesmo ambiente. O que deveria ser feito?",
    "o": [
      "Converta o repositório IPv4 para Universal alterando a configuração do tipo de repositório",
      "Configure o scanner Nessus para traduzir endereços IPv6 para IPv4 antes do armazenamento",
      "Crie um repositório IPv6 separado e configure varreduras para armazenar resultados IPv6 nele ou use um repositório universal para ambos",
      "Criar uma lista de ativos estática para os hosts IPv6 e associá-la ao repositório IPv4"
    ]
  },
  "SC-Q040": {
    "q": "Para que é usado o 'SecurityCenter Director' do Tenable.sc (ou 'Diretor do Tenable.sc')?",
    "o": [
      "Para agregar dados do Tenable.sc com dados do Tenable.io para implantações híbridas",
      "Para fornecer um único painel de gerenciamento em vários consoles Tenable.sc distribuídos em uma implantação hierárquica",
      "Para gerenciar atualizações de firmware do scanner Nessus em todos os scanners emparelhados",
      "Para servir como um substituto local do Tenable.io para organizações que necessitam de armazenamento de dados local"
    ]
  },
  "SC-Q041": {
    "q": "No Tenable.sc, qual elemento deve ser configurado antes que um analista de segurança possa executar sua primeira verificação ativa?",
    "o": [
      "Um repositório universal contendo dados históricos de verificação existentes",
      "No mínimo uma política de varredura ativa, uma zona de varredura com um scanner atribuído e ativos de destino definidos",
      "Uma conta de função de Auditor para revisar os resultados antes que o analista possa executar varreduras",
      "Um repositório externo para backup dos resultados da varredura"
    ]
  },
  "SC-Q042": {
    "q": "Qual recurso do Tenable.sc permite a exibição de dados de vulnerabilidade de vários repositórios em uma única visualização de painel?",
    "o": [
      "Os componentes do painel podem ser configurados para consultar vários repositórios simultaneamente",
      "O recurso de sincronização externa mescla dados do repositório em um único repositório consolidado",
      "Apenas um repositório pode ser exibido por dashboard; vários painéis são necessários",
      "O modo de federação de repositório permite consultas transparentes entre repositórios"
    ]
  },
  "SC-Q043": {
    "q": "No Tenable.sc, como os resultados da varredura do Nessus Agent são armazenados de maneira diferente dos resultados da varredura de rede tradicional?",
    "o": [
      "Os resultados do agente são armazenados apenas no armazenamento em nuvem e não localmente no Tenable.sc",
      "Os resultados do Agente devem ser armazenados em um repositório do Agente ou repositório Universal; eles não podem ser armazenados em repositórios IPv4/IPv6",
      "Os resultados do agente são armazenados no mesmo repositório IPv4 que os resultados da varredura de rede, sem diferenciação",
      "Os resultados do agente são descartados automaticamente após 24 horas para cumprir os regulamentos de privacidade do endpoint"
    ]
  },
  "SC-Q044": {
    "q": "Qual é a melhor maneira de verificar se uma varredura autenticada do Tenable.sc conseguiu se autenticar nos hosts Windows de destino?",
    "o": [
      "Verifique a saída do plugin 19506 (Nessus Scan Information) para o host verificado para confirmar se as credenciais foram usadas",
      "Execute uma varredura de ping separada para confirmar que o host estava acessível durante a janela de varredura",
      "Revise o log de progresso da verificação para respostas de autenticação '200 OK'",
      "Verifique o repositório para resultados de plugins específicos do WMI no destino"
    ]
  },
  "SC-Q045": {
    "q": "Um painel Tenable.sc está sendo criado para mostrar os 10 servidores mais vulneráveis classificados por contagem de vulnerabilidades críticas. Qual tipo de componente deve ser usado?",
    "o": [
      "Componente do gráfico de barras mostrando a distribuição de gravidade em todos os ativos",
      "Componente da tabela configurado com uma fonte de dados de vulnerabilidade classificada por contagem de gravidade crítica, limite 10",
      "Componente gráfico de pizza com segmentação por gravidade, limitado a 10 fatias",
      "Componente de texto com resultados de consulta incorporados da análise de vulnerabilidade"
    ]
  },
  "SC-Q046": {
    "q": "No Tenable.sc, qual modelo de licença determina quantos IPs podem ser verificados ativamente?",
    "o": [
      "Licenciamento por scanner onde cada instância Nessus emparelhada adiciona um número fixo de IPs escaneáveis",
      "Licenciamento baseado em IP onde a licença especifica o número máximo de endereços IP exclusivos simultâneos que podem ser verificados",
      "Varredura IP ilimitada incluída; o licenciamento apenas limita o número de repositórios",
      "Licenciamento por usuário onde cada conta do Analista de Segurança adiciona capacidade de varredura"
    ]
  },
  "SC-Q047": {
    "q": "Qual é a vantagem de usar uma política de varredura de 'Importação' do Tenable.sc em vez de criar uma nova política de varredura do zero?",
    "o": [
      "Importa descobertas de vulnerabilidade diretamente para o repositório sem executar uma nova verificação",
      "Cria uma cópia da política somente leitura que não pode ser modificada acidentalmente",
      "Extrai automaticamente os arquivos de auditoria de benchmark CIS mais recentes do armazenamento de políticas da Tenable",
      "Permite reutilizar uma política de varredura Nessus (arquivo .nessus) exportada de outra instância Nessus ou Tenable.sc, economizando tempo de configuração"
    ]
  },
  "SC-Q048": {
    "q": "Em uma varredura de conformidade do Tenable.sc, o que indica um resultado WARNING (aviso), em comparação com PASSED (aprovado) ou FAILED (reprovado)?",
    "o": [
      "A verificação de conformidade requer uma aprovação administrativa antes de ser considerada aprovada",
      "A verificação de auditoria não pôde determinar definitivamente a aprovação ou a reprovação — normalmente devido a uma configuração que atende parcialmente ao requisito ou requer julgamento humano",
      "O host alvo estava inacessível durante a verificação de conformidade",
      "A vulnerabilidade associada à verificação de conformidade foi corrigida, mas a configuração ainda precisa de revisão"
    ]
  },
  "SC-Q049": {
    "q": "Qual recurso do Tenable.sc permite rastrear dados de vulnerabilidade de agentes Nessus e verificações de rede para o mesmo ativo em uma visualização unificada?",
    "o": [
      "Dois repositórios separados exibidos lado a lado em um painel de tela dividida",
      "Uma consulta que mescla os resultados do agente e da rede no tempo de execução da consulta",
      "Uma política de varredura combinada que executa verificações de agente e de rede simultaneamente",
      "Repositório universal que aceita dados de varredura de rede e de agente, combinado com normalização de IP"
    ]
  },
  "SC-Q050": {
    "q": "No Tenable.sc, qual porta deve estar aberta entre um scanner Nessus e o servidor Tenable.sc para comunicação de gerenciamento do scanner?",
    "o": [
      "TCP 8834",
      "TCP 22",
      "TCP 443",
      "UDP 161"
    ]
  },
  "SC-Q051": {
    "q": "O que significa 'Cumulativo' versus 'Mitigado' no contexto das visualizações de vulnerabilidade do Tenable.sc?",
    "o": [
      "Cumulativo inclui todos os dados históricos de vulnerabilidade; Mitigado mostra apenas novas descobertas da última verificação",
      "Cumulativo aplica-se a vulnerabilidades Críticas e Altas; Mitigado se aplica a Médio e Baixo",
      "Cumulativo inclui todos os dados das organizações; Mitigado é filtrado para uma única organização",
      "Cumulativo mostra todas as vulnerabilidades atualmente ativas; Mitigado mostra vulnerabilidades que foram detectadas anteriormente, mas não estão mais presentes na verificação mais recente"
    ]
  },
  "SC-Q052": {
    "q": "Um administrador do Tenable.sc precisa garantir que o feed do plug-in Nessus esteja atualizado em todos os scanners emparelhados. Qual é o mecanismo de atualização correto?",
    "o": [
      "Tenable.sc envia atualizações de plug-in para scanners emparelhados automaticamente quando baixa novas atualizações de feed",
      "Cada scanner Nessus deve ser atualizado manualmente fazendo login em seu console web individual",
      "As atualizações do plug-in exigem uma reinicialização do Tenable.sc para serem distribuídas aos scanners",
      "Os scanners atualizam plug-ins independentemente do Tenable.com, sem envolvimento do Tenable.sc"
    ]
  },
  "SC-Q053": {
    "q": "No Tenable.sc, qual tipo de credencial de verificação é usado para servidores Linux/Unix em um ambiente corporativo com gerenciamento centralizado de chaves?",
    "o": [
      "Autenticação básica HTTP para verificação de credenciais baseada em API",
      "Autenticação SNMP v3 com criptografia AES",
      "Credenciais de conta de domínio do Windows configuradas com protocolo SMB",
      "Autenticação de chave pública SSH com uma chave privada carregada no gerenciamento de credenciais Tenable.sc"
    ]
  },
  "SC-Q054": {
    "q": "O que o fluxo de trabalho \"Aceitar risco\" do Tenable.sc permite que uma equipe de segurança faça?",
    "o": [
      "Documentar que uma vulnerabilidade específica em um ativo específico é reconhecida e o risco é formalmente aceito, removendo-o do rastreamento de remediação ativa",
      "Escalar uma vulnerabilidade ao CISO para aprovação antes que ela apareça nos painéis",
      "Aplicar patches automaticamente às vulnerabilidades aceitas durante a próxima janela de manutenção",
      "Transferir a propriedade da vulnerabilidade para um fornecedor terceirizado para correção externa"
    ]
  },
  "SC-Q055": {
    "q": "No Tenable.sc, qual recurso permite controle detalhado sobre quais vulnerabilidades específicas aparecem em um relatório além dos filtros de gravidade e de ativos?",
    "o": [
      "Os scripts de filtro personalizados devem ser escritos usando a API Tenable",
      "Os filtros de relatórios são limitados aos repositórios atribuídos à organização",
      "Somente filtros de gravidade e intervalo de IP estão disponíveis nos relatórios Tenable.sc",
      "Filtros de relatório incluindo CVE, ID do plugin, família do plugin, porta, protocolo e pesquisa de texto do plugin"
    ]
  },
  "SC-Q056": {
    "q": "O que acontece no Tenable.sc quando uma verificação é configurada para armazenar resultados em um repositório que atingiu seu limite de licença IP?",
    "o": [
      "Os resultados da varredura podem falhar na importação ou o sistema pode gerar um aviso de licença e novos IPs além do limite podem não ser rastreados",
      "A verificação é concluída normalmente e os resultados são armazenados em um buffer temporário até que as licenças sejam adicionadas",
      "O Tenable.sc arquiva automaticamente os dados IP mais antigos para criar espaço para novos resultados de verificação",
      "O scanner pausa a varredura até que o administrador adicione capacidade de licença adicional"
    ]
  },
  "SC-Q057": {
    "q": "No Tenable.sc, qual configuração permite que analistas de segurança de diferentes organizações compartilhem acesso de leitura aos mesmos dados do repositório?",
    "o": [
      "Isso não é possível no Tenable.sc; repositórios são estritamente de organização única",
      "Concedendo a ambas as organizações acesso ao repositório compartilhado em sua configuração, combinado com permissões de nível de analista",
      "Usando sincronização externa para replicar o repositório para o repositório dedicado de cada organização",
      "Criação de cópias duplicadas do repositório para cada organização"
    ]
  },
  "SC-Q058": {
    "q": "Qual protocolo de rede o Nessus usa para realizar a varredura autenticada de hosts Windows no Tenable.sc?",
    "o": [
      "SSH para execução de comandos criptografados no Windows",
      "SMB (Server Message Block) para registro, WMI e acesso ao sistema de arquivos",
      "SNMP para enumeração de informações do sistema Windows",
      "RDP para verificação interativa baseada em sessão do Windows"
    ]
  },
  "SC-Q059": {
    "q": "No Tenable.sc, qual tipo de componente do painel deve ser usado quando um gerente deseja ver um único número — a contagem total de vulnerabilidades críticas em todos os ativos?",
    "o": [
      "Componente de tabela com uma linha mostrando a contagem total",
      "Componente do gráfico de barras com uma única barra para gravidade Crítica",
      "Componente de resumo (estatística única) configurado com filtro de gravidade crítica",
      "Um componente de texto com a contagem de vulnerabilidades incorporada em uma narrativa"
    ]
  },
  "SC-Q060": {
    "q": "No Tenable.sc, qual é a finalidade do recurso 'Recast Risk' disponível para gerentes de segurança?",
    "o": [
      "Para aceitar automaticamente todas as instâncias de uma vulnerabilidade em toda a organização",
      "Para escalar uma vulnerabilidade ao Administrador para reclassificação de gravidade em todo o sistema",
      "Para alterar a classificação de gravidade de uma vulnerabilidade específica em ativos específicos dentro da organização para refletir melhor o contexto de risco real",
      "Para executar novamente a verificação de vulnerabilidades específicas suspeitas de serem falsos positivos"
    ]
  },
  "SC-Q061": {
    "q": "Um candidato está planejando o caminho de certificação do Tenable Security Center. Qual ordem de exames corresponde ao processo de certificação da Tenable?",
    "o": [
      "Conclua qualquer um dos exames primeiro porque os dois exames são independentes",
      "Realizar apenas o exame prático porque o exame escrito é opcional",
      "Faça primeiro o exame prático e depois o exame escrito",
      "Conclua primeiro o exame de qualificação escrito e depois o exame prático"
    ]
  },
  "SC-Q062": {
    "q": "Por que um administrador deve configurar zonas de varredura antes de executar verificações ativas no Tenable Security Center?",
    "o": [
      "As zonas de varredura criptografam as credenciais antes de serem enviadas aos scanners Nessus",
      "As zonas de varredura definem quais modelos de painel os usuários organizacionais podem importar",
      "As zonas de varredura associam intervalos de IP alvo a um ou mais scanners que podem alcançar esses intervalos",
      "As zonas de varredura armazenam resultados de vulnerabilidade após a conclusão das verificações"
    ]
  },
  "SC-Q063": {
    "q": "Qual é a finalidade principal de um repositório no Tenable Security Center?",
    "o": [
      "Para armazenar políticas de varredura antes de serem exportadas para scanners Nessus",
      "Para armazenar apenas layouts de painel e modelos de relatório",
      "Para armazenar dados de vulnerabilidade coletados de scanners e disponibilizar esses dados para organizações designadas",
      "Para armazenar senhas de usuários para autenticação LDAP e SAML"
    ]
  },
  "SC-Q064": {
    "q": "Qual função integrada foi projetada para alguém que mantém credenciais de varredura e as compartilha sem revelar seus valores aos operadores de varredura?",
    "o": [
      "Credential Manager (Gerenciador de credenciais)",
      "Executive (Executivo)",
      "No Role (Sem função)",
      "Auditor (Auditor)"
    ]
  },
  "SC-Q065": {
    "q": "Um analista aplica repetidamente os mesmos filtros de vulnerabilidade para ID e gravidade do CVE. O que eles deveriam criar para reutilizar esse conjunto de filtros?",
    "o": [
      "Uma consulta",
      "Uma conta de usuário vinculada",
      "Um repositório",
      "Uma zona de varredura"
    ]
  },
  "SC-Q066": {
    "q": "Qual tipo de lista de ativos pode ser usado imediatamente após a configuração porque é simplesmente uma lista definida de endereços IP?",
    "o": [
      "Lista de ativos estáticos",
      "Lista de ativos combinados",
      "Lista de ativos de consulta LDAP",
      "Lista dinâmica de ativos"
    ]
  },
  "SC-Q067": {
    "q": "Uma equipe corrigiu uma vulnerabilidade e deseja que o Tenable Security Center verifique a correção nos hosts afetados. Qual recurso se destina a essa verificação de acompanhamento?",
    "o": [
      "Troca de conta vinculada",
      "Verificação de remediação",
      "Atualização do painel",
      "Importação de repositório offline"
    ]
  },
  "SC-Q068": {
    "q": "Como o Tenable Security Center normalmente mantém os dados do painel atualizados para usuários organizacionais?",
    "o": [
      "Atualiza os dados do painel somente quando o administrador reinicia o serviço Security Center",
      "Atualiza os dados do painel automaticamente uma vez por dia, com uma opção manual Atualizar tudo disponível",
      "Nunca atualiza os dados do painel após a criação do painel",
      "Atualiza os dados do painel somente quando uma nova política de varredura é criada"
    ]
  },
  "SC-Q069": {
    "q": "Quais formatos de saída de relatório são explicitamente suportados pelo recurso de relatórios integrado do Tenable Security Center?",
    "o": [
      "DOCX e PPTX",
      "OVF e VMDK",
      "PDF e CSV",
      "MP4 e WAV"
    ]
  },
  "SC-Q070": {
    "q": "Um analista inicia uma varredura ativa com o agendamento definido como Agora. O que eles devem esperar na página Active Scans depois?",
    "o": [
      "A verificação é convertida em uma verificação recorrente mensal",
      "A verificação é salva como uma verificação sob demanda reutilizável e aparece na página Verificações Ativas",
      "A varredura é iniciada imediatamente, mas a configuração da varredura não é salva para exibição posterior na página Varreduras ativas",
      "A verificação permanece pendente até que um administrador a salve manualmente"
    ]
  },
  "SC-Q071": {
    "q": "Qual afirmação melhor descreve os usuários administradores no Tenable Security Center?",
    "o": [
      "Eles são usuários organizacionais limitados a um repositório atribuído",
      "Eles gerenciam o Security Center como um todo e não pertencem a organizações",
      "Eles são criados somente através da sincronização LDAP",
      "Eles podem visualizar painéis, mas não podem configurar scanners ou organizações"
    ]
  },
  "SC-Q072": {
    "q": "O que uma política de varredura define principalmente para verificações ativas no Tenable Security Center?",
    "o": [
      "A chave de criptografia do repositório para todos os dados de vulnerabilidade",
      "Configurações de plug-in e diretivas avançadas usadas pela verificação ativa",
      "A lista de destinatários do relatório final para cada organização",
      "O método de autenticação para fazer login na interface web"
    ]
  },
  "SC-Q073": {
    "q": "Uma varredura contém vários objetos de credenciais do Windows, e uma credencial mais antiga de baixo privilégio pode fazer login com êxito antes que uma credencial de administrador mais recente seja tentada. O que acontece?",
    "o": [
      "O Tenable Security Center falha na verificação porque múltiplas credenciais do mesmo tipo não são permitidas",
      "O Tenable Security Center usa a primeira credencial que faz login com sucesso e para de tentar outras credenciais desse tipo",
      "O Tenable Security Center tenta as credenciais na ordem em que foram anexadas à verificação e sempre ignora os IDs dos objetos",
      "O Tenable Security Center continua tentando todas as credenciais e alterna automaticamente para a conta com privilégio mais alto"
    ]
  },
  "SC-Q074": {
    "q": "Um analista criou uma lista de ativos dinâmica baseada em hosts Linux escutando na porta TCP 80, mas ainda não possui membros em um novo repositório. Qual é a etapa que falta mais provavelmente?",
    "o": [
      "Converter a lista de ativos dinâmica em uma lista de ativos de watchlist",
      "Desativar dados de tendência do repositório para que listas dinâmicas de ativos possam calcular",
      "Execute uma verificação inicial de descoberta ou avaliação para que o Security Center tenha dados para calcular a lista dinâmica de ativos",
      "Atribuir a lista de ativos dinâmicos à conta de usuário Administrador"
    ]
  },
  "SC-Q075": {
    "q": "Uma varredura é configurada com uma única zona de varredura selecionada e uma lista de alvos que inclui apenas 10.10.50.25. O intervalo da zona de varredura selecionada é 10.10.0.0/16. O que o Tenable Security Center verifica?",
    "o": [
      "Nenhum host, porque os intervalos de destino devem corresponder exatamente ao intervalo de zona",
      "Somente os alvos especificados na configuração de varredura, usando a atribuição de scanner da zona selecionada",
      "Cada endereço no intervalo da zona de varredura porque o intervalo da zona substitui os alvos da varredura",
      "Somente hosts já presentes no repositório de importação"
    ]
  },
  "SC-Q076": {
    "q": "Uma organização usa o método de distribuição de varreduras Automatic Distribution Only (somente distribuição automática). Qual mudança os criadores de varreduras devem esperar na configuração de varreduras ativas?",
    "o": [
      "Os usuários podem escolher qualquer scanner diretamente, sem zonas de varredura",
      "O Tenable Security Center escolhe uma ou mais zonas de varredura automaticamente e oculta a seleção manual da zona de varredura",
      "Todas as verificações são bloqueadas até que um administrador habilite repositórios externos",
      "Os usuários devem sempre escolher exatamente uma zona de varredura antes que uma varredura possa ser iniciada"
    ]
  },
  "SC-Q077": {
    "q": "Um gráfico de tendências do painel está em branco para um repositório, mesmo que existam dados de vulnerabilidade atuais. Qual configuração de repositório está mais diretamente relacionada à geração dos instantâneos históricos necessários para exibições de tendências?",
    "o": [
      "Contas de usuário vinculadas",
      "Modo escuro",
      "Restricted Scan Ranges (Intervalos de varredura restritos)",
      "Gerar dados de tendências"
    ]
  },
  "SC-Q078": {
    "q": "Qual configuração de tempo de retenção de dados do repositório tem um valor padrão documentado menor que os tempos de retenção dos dados ativos, de conformidade e mitigados?",
    "o": [
      "Dados de vulnerabilidade mitigados",
      "Dados de vulnerabilidade passiva do Tenable Network Monitor",
      "Dados de vulnerabilidade de verificação de agente ativo",
      "Dados de auditoria de conformidade"
    ]
  },
  "SC-Q079": {
    "q": "Uma implantação central do Tenable Security Center precisa de dados de relatórios estáticos de um Security Center isolado que só pode transferir arquivos manualmente. Qual tipo de repositório se adapta melhor?",
    "o": [
      "Repositório off-line",
      "Repositório universal",
      "Repositório do agente",
      "Repositório remoto"
    ]
  },
  "SC-Q080": {
    "q": "Um usuário organizacional não pode gerar um relatório DISA ASR, mesmo que possa criar relatórios personalizados comuns. Qual pré-requisito provavelmente está faltando?",
    "o": [
      "A varredura foi agendada como Sob Demanda em vez de Diária",
      "Um administrador não ativou a opção especializada de geração de relatórios DISA",
      "O painel não foi atualizado antes da criação do relatório",
      "O usuário não converteu o repositório em um repositório offline"
    ]
  },
  "SC-Q081": {
    "q": "Um analista deseja analisar apenas vulnerabilidades da família de plug-ins do Windows e, em seguida, restringir ainda mais a um intervalo de ID de plug-in específico. Quais componentes de filtro eles devem usar?",
    "o": [
      "Zona de varredura e zonas disponíveis",
      "Família de plug-ins e ID do plug-in",
      "Função do usuário e relacionamento do grupo",
      "Repositório e layout do painel"
    ]
  },
  "SC-Q082": {
    "q": "Uma vulnerabilidade não aparece mais nos resultados cumulativos atuais, mas deve ser revisada conforme corrigido anteriormente. Qual visualização do Tenable Security Center se destina a esses dados?",
    "o": [
      "Visualização detalhada da zona de varredura",
      "Visualização de detalhes da credencial",
      "Visão de vulnerabilidade mitigada",
      "Visualização atual da vulnerabilidade cumulativa"
    ]
  },
  "SC-Q083": {
    "q": "Uma varredura ativa longa atinge o tempo limite configurado e alguns hosts não foram examinados. Qual opção de Scan Timeout Action preserva os resultados concluídos e cria uma varredura de acompanhamento para os hosts pendentes?",
    "o": [
      "Import Completed Results With Rollover (Importar resultados concluídos com rollover)",
      "Discard Results (Descartar resultados)",
      "Import Completed Results (Importar resultados concluídos)",
      "Scan Virtual Hosts (Verificar hosts virtuais)"
    ]
  },
  "SC-Q084": {
    "q": "Um laptop recebe um novo endereço DHCP entre as varreduras. Qual ordem de rastreamento o Tenable Security Center usa quando a opção de rastreamento DHCP está habilitada?",
    "o": [
      "UUID do repositório primeiro, depois zona de varredura e, em seguida, ID do componente do painel",
      "Primeiro endereço MAC, depois endereço IP, depois ID CVE e depois nome do repositório",
      "Primeiro ID do agente para todos os hosts, depois ID do plugin e depois nome DNS",
      "Nome DNS, nome NetBIOS, ID do agente e endereço MAC, se conhecido"
    ]
  },
  "SC-Q085": {
    "q": "Um servidor web hospeda vários sites no mesmo endereço IP com nomes DNS diferentes. Qual é o efeito de ativar a verificação de hosts virtuais em uma política de varredura ativa?",
    "o": [
      "A varredura converte cada descoberta da web em um plug-in baseado em host com porta 0",
      "A verificação desativa os resultados do aplicativo Web, a menos que uma licença separada seja instalada",
      "A varredura ignora nomes DNS e verifica apenas o primeiro endereço IP resolvido",
      "Novos nomes DNS para o mesmo IP podem aparecer como entradas de dados de vulnerabilidade separadas, em vez de serem mesclados em uma entrada de IP"
    ]
  },
  "SC-Q086": {
    "q": "Um usuário precisa de amplos recursos de varredura e de gerenciamento de políticas na organização, mas não deve gerenciar grupos ou usuários. Qual função integrada corresponde melhor a essa necessidade?",
    "o": [
      "Security Analyst (Analista de Segurança)",
      "Executive (Executivo)",
      "Auditor (Auditor)",
      "No Role (Sem função)"
    ]
  },
  "SC-Q087": {
    "q": "Uma equipe importa uma política de varredura exportada de outra instância do Tenable Security Center e descobre que a verificação não inclui credenciais ou arquivos de auditoria esperados. Qual é a interpretação correta?",
    "o": [
      "Os arquivos de política de varredura exportados ou importados não incluem credenciais ou arquivos de auditoria, portanto, eles devem ser configurados separadamente",
      "A importação falhou porque credenciais e arquivos de auditoria são obrigatórios dentro de cada arquivo de política",
      "A política só poderá usar credenciais se for convertida em uma verificação de correção",
      "Credenciais e arquivos de auditoria são incluídos somente quando o repositório de destino é universal"
    ]
  },
  "SC-Q088": {
    "q": "Um painel contém dezenas de componentes não relacionados e os usuários lutam para analisar os dados de varredura ativa separadamente dos dados de eventos passivos. Que mudança de design está alinhada com as orientações do painel da Tenable?",
    "o": [
      "Substitua os componentes do painel por blocos de texto estáticos que resumem as descobertas de ontem",
      "Crie painéis separados que agrupem componentes semelhantes, como um para dados de varredura ativa e outro para dados passivos",
      "Coloque todos os componentes em um único painel para que os usuários nunca mudem de página",
      "Desativar todos os modelos de painel e exigir apenas relatórios em PDF personalizados"
    ]
  },
  "SC-Q089": {
    "q": "Uma verificação de agente no Tenable Security Center mostra resultados incompletos porque o Security Center buscou dados antes que os agentes terminassem o upload. Qual configuração deve ser revisada?",
    "o": [
      "Relatório PDF sobre dependência de Java",
      "Duração da janela de verificação para a verificação do agente",
      "Layout da coluna do painel",
      "Acesso à organização do repositório"
    ]
  },
  "SC-Q090": {
    "q": "Um analista deseja que a análise de vulnerabilidade mostre apenas os resultados do Tenable Web App Scanning. Qual condição deve ser considerada ao usar o filtro Web App Scanning?",
    "o": [
      "Requer que todas as descobertas sejam verificações baseadas em host na porta 0",
      "Está disponível apenas para usuários Administradores fora das organizações",
      "Funciona apenas na visão mitigada e nunca na visão cumulativa",
      "Requer a licença adicional do Web App Scanning e uma versão compatível do Nessus"
    ]
  },
  "SC-Q091": {
    "q": "Um gerente pergunta por que uma varredura de descoberta de host não aumentou a contagem de ativos licenciados da organização. Qual é a melhor resposta?",
    "o": [
      "Todas as verificações ativas contam para a licença, independentemente de encontrarem vulnerabilidades",
      "Somente varreduras não autenticadas contam para a licença",
      "Somente varreduras iniciadas a partir de painéis contam para a licença",
      "As varreduras de descoberta identificam ativos e não contam para a licença, enquanto as varreduras de avaliação geralmente contam"
    ]
  },
  "SC-Q092": {
    "q": "Uma organização deve poder examinar somente intervalos aprovados, embora os usuários possam criar suas próprias varreduras ativas. Qual configuração da organização define os intervalos que os usuários não podem examinar?",
    "o": [
      "Restricted Scan Ranges (Intervalos de varredura restritos)",
      "Accessible Repositories (Repositórios Acessíveis)",
      "Modo escuro",
      "Imagens do relatório"
    ]
  },
  "SC-Q093": {
    "q": "Um analista inicia uma verificação de correção no Resumo de Vulnerabilidade e descobre que o repositório, o endereço IP de destino e os campos de porta não estão pré-preenchidos conforme o esperado. Por que esse comportamento é válido?",
    "o": [
      "As verificações de remediação nunca preenchem os campos de repositório, destino ou porta das visualizações de análise",
      "Os campos são preenchidos somente após a conclusão da verificação de correção",
      "O Resumo de Vulnerabilidade pode agregar vários repositórios, IPs e portas, portanto esses campos podem ser padrão ou vazios",
      "Somente as descobertas do repositório do agente podem preencher previamente os campos de verificação de correção"
    ]
  },
  "SC-Q094": {
    "q": "Uma vulnerabilidade encontrada por uma verificação de agente precisa de validação após correção. Qual limitação a equipe deve considerar antes de usar uma verificação de correção do Tenable Security Center?",
    "o": [
      "As verificações de remediação devem sempre verificar todas as portas no host de destino",
      "As verificações de remediação podem ser realizadas apenas para resultados de verificação ativa, não para repositório de agente ou resultados de verificação de segurança OT",
      "As verificações de remediação só podem ser executadas contra vulnerabilidades sem plug-ins dependentes",
      "As verificações de remediação exigem uma política de varredura agendada antes de serem iniciadas"
    ]
  },
  "SC-Q095": {
    "q": "Uma empresa possui zonas de varredura sobrepostas para redundância de cobertura. Que comportamento de roteamento do scanner eles deveriam esperar para um alvo que corresponda a múltiplas zonas?",
    "o": [
      "O Tenable Security Center tenta primeiro a verificação usando a zona de varredura correspondente mais estreita e específica",
      "O Tenable Security Center escolhe aleatoriamente qualquer zona correspondente para distribuir a carga uniformemente",
      "O Tenable Security Center se recusa a executar qualquer verificação que corresponda a zonas sobrepostas",
      "O Tenable Security Center sempre escolhe a zona de varredura mais antiga por data de criação"
    ]
  },
  "SC-Q096": {
    "q": "Um repositório universal contém dados de varreduras ativas do Nessus, agentes e segurança OT. Por que o Tenable Security Center atribui UUIDs a ativos em repositórios de ativos?",
    "o": [
      "Porque os UUIDs são necessários apenas para geração de relatórios em PDF",
      "Porque nem todos os ativos têm endereços IP estáveis ou UUIDs da Tenable, e diferentes fontes de dados identificam os ativos de maneira diferente",
      "Porque os UUIDs substituem a necessidade de configurar o acesso da organização aos repositórios",
      "Porque os UUIDs evitam que os dados de vulnerabilidade passiva expirem"
    ]
  },
  "SC-Q097": {
    "q": "Após uma importação de varredura muito grande, a próxima importação é atrasada enquanto o Security Center recalcula listas de ativos dinâmicas e combinadas. Qual explicação corresponde ao comportamento documentado?",
    "o": [
      "Listas de ativos dinâmicas e combinadas são recalculadas somente quando um usuário atualiza manualmente um painel",
      "Os cálculos da lista de ativos são globais em todos os repositórios e sempre bloqueiam todos os repositórios igualmente",
      "Uma importação de verificação enfileira um trabalho de cálculo de ativos por repositório de importação e a próxima importação de verificação aguarda até que o trabalho de cálculo de ativos seja concluído",
      "Listas de ativos estáticos acionam o mesmo atraso de cálculo de importação de varredura porque dependem da saída do plugin"
    ]
  },
  "SC-Q098": {
    "q": "Uma política de varredura de produção possui uma família inteira de plugins habilitada. Posteriormente, a Tenable adiciona novos plug-ins a essa família por meio do feed. Qual é o comportamento esperado?",
    "o": [
      "Os novos plugins serão habilitados automaticamente se toda a família de plugins estiver habilitada no modelo de política",
      "Os novos plugins são importados somente após exportar e reimportar a política",
      "Os novos plug-ins estão habilitados apenas para políticas de varredura criadas pelo administrador",
      "Os novos plugins permanecem desabilitados até que cada plugin seja selecionado individualmente"
    ]
  },
  "SC-Q099": {
    "q": "Um usuário organizacional com função personalizada pode criar políticas, mas não pode atualizar feeds. Ele tenta criar uma função que inclua a permissão Update Feeds. O que o Tenable Security Center deve permitir?",
    "o": [
      "Deve criar a função silenciosamente, mas remover todas as permissões de varredura",
      "Deve permitir a função porque as funções personalizadas podem incluir qualquer permissão do sistema",
      "Deve permitir a função somente se o usuário também pertencer a dois grupos",
      "Deve evitar que o usuário crie uma função com permissões maiores que as suas"
    ]
  },
  "SC-Q100": {
    "q": "Uma varredura tem a opção Max scan duration definida. Ela atinge essa duração, embora Scan Timeout Action esteja configurada como Import Completed Results, sem rollover (continuação em outra varredura). O que o administrador deve esperar?",
    "o": [
      "O Tenable Security Center converte a verificação em uma verificação de correção e a inicia automaticamente",
      "O Tenable Security Center descarta todos os resultados porque a duração máxima da verificação substitui as configurações de importação",
      "O Tenable Security Center cria uma varredura de continuação (rollover) quando Max scan duration é atingida, independentemente da configuração de Scan Timeout Action",
      "O Tenable Security Center nunca cria uma varredura de continuação (rollover), a menos que Scan Timeout Action esteja definida como Import Completed Results With Rollover"
    ]
  },
  "SC-Q101": {
    "q": "Qual é o objetivo principal de um Assurance Report Card (ARC) no Tenable Security Center?",
    "o": [
      "Substituir todos os relatórios PDF por uma única exportação de planilha executiva",
      "Fornece uma visão geral de aprovação/reprovação da postura de segurança usando declarações de política configuráveis avaliadas em relação aos dados do repositório",
      "Armazenar atualizações de feed do plugin Nessus off-line para scanners air-gapped",
      "Definir quais zonas de varredura os usuários organizacionais podem selecionar"
    ]
  },
  "SC-Q102": {
    "q": "Quem pode adicionar um Assurance Report Card personalizado ou baseado em modelo no Tenable Security Center?",
    "o": [
      "Usuários organizacionais com permissões apropriadas",
      "Somente usuários administradores fora de qualquer organização",
      "Somente usuários do Credential Manager",
      "Somente usuários Auditores com acesso somente leitura"
    ]
  },
  "SC-Q103": {
    "q": "Como um Assurance Report Card (ARC) comunica os resultados de cada declaração de política?",
    "o": [
      "Usar apenas contagens de licença IP do repositório",
      "Usando uma metodologia de aprovação ou reprovação para cada declaração de política",
      "Usando apenas médias numéricas CVSS sem aprovação/reprovação",
      "Usando o scanner Somente ícones de status Funcionando/Indisponível"
    ]
  },
  "SC-Q104": {
    "q": "Onde os usuários organizacionais gerenciam os Assurance Report Cards (ARCs) existentes na IU do Tenable Security Center?",
    "o": [
      "Repositórios > Sincronização offline > Gerenciar ARCs",
      "Recursos > Zonas de Verificação > Gerenciar ARCs",
      "Painel > Assurance Report Cards (ARCs) e, em seguida, Opções > Gerenciar ARCs",
      "Sistema > Configuração > Licença > Gerenciar ARCs"
    ]
  },
  "SC-Q105": {
    "q": "O que um usuário organizacional pode fazer ao compartilhar um Assurance Report Card (ARC) com um grupo?",
    "o": [
      "Conceder privilégios de administrador a cada membro do grupo automaticamente",
      "Forçar todos os usuários compartilhados a se tornarem Gerentes de Segurança",
      "Dê aos usuários do grupo a capacidade de visualizar o ARC, sujeito à função de cada usuário e às permissões para detalhamento",
      "Desabilitar o acesso ao repositório para qualquer pessoa que não esteja no grupo de compartilhamento"
    ]
  },
  "SC-Q106": {
    "q": "Qual afirmação distingue melhor um Assurance Report Card (ARC) de um componente de painel padrão?",
    "o": [
      "Um ARC substitui a necessidade de repositórios em implantações multiorganizacionais",
      "Um ARC avalia declarações de políticas nomeadas como verificações de postura de aprovação/reprovação, enquanto os componentes do painel visualizam métricas, gráficos e tabelas",
      "Um ARC só pode exibir vulnerabilidades mitigadas, enquanto os painéis só podem exibir vulnerabilidades cumulativas",
      "Um ARC armazena políticas de varredura, enquanto os painéis armazenam credenciais"
    ]
  },
  "SC-Q107": {
    "q": "Um CISO deseja uma visão executiva recorrente que responda: 'Todas as vulnerabilidades críticas são corrigidas em 30 dias?' Qual recurso do Tenable Security Center foi desenvolvido especificamente para esse estilo de declaração de política?",
    "o": [
      "Verificador do nome do host do scanner Nessus",
      "Nome do arquivo do repositório offline",
      "Declaração de política do Assurance Report Card (ARC)",
      "Faixas de varredura restritas da zona de varredura"
    ]
  },
  "SC-Q108": {
    "q": "Ao criar um Assurance Report Card (ARC) personalizado, o que o usuário deve configurar para que o ARC avalie a postura de segurança?",
    "o": [
      "Somente o token do conector de nuvem Tenable.io",
      "Opções de ARC, incluindo declarações de política (e agendamento se a atualização automática for necessária)",
      "Somente a string de conexão do banco de dados PostgreSQL",
      "Somente uma chave de link para cada scanner Nessus"
    ]
  },
  "SC-Q109": {
    "q": "O que os alertas do Tenable Security Center podem ser configurados para fazer quando ocorrem condições de vulnerabilidade ou de evento?",
    "o": [
      "Aumentar automaticamente a contagem de licenças IP",
      "Acionar ações como notificações por e-mail, notificações de UI, tickets, verificações de correção, relatórios ou alertas de syslog",
      "Converter repositórios IPv4 em repositórios universais",
      "Desativar todas as janelas de bloqueio em toda a organização"
    ]
  },
  "SC-Q110": {
    "q": "Qual permissão de função permite especificamente que um usuário crie alertas que acionam ações quando ocorrem vulnerabilidades específicas ou condições de eventos?",
    "o": [
      "Criar alertas",
      "Criar ativos de consulta LDAP",
      "Gerenciar imagens",
      "Update Feeds (Atualizar feeds)"
    ]
  },
  "SC-Q111": {
    "q": "Qual afirmação sobre ações de alerta no Tenable Security Center está correta?",
    "o": [
      "Apenas uma ação é permitida por alerta e deve ser por e-mail",
      "Alertas substituem a necessidade de painéis e relatórios",
      "Alertas só podem notificar usuários Administradores",
      "Múltiplas ações podem ser atribuídas para cada alerta"
    ]
  },
  "SC-Q112": {
    "q": "Uma equipe deseja que o Security Center abra um ticket e envie um e-mail às partes interessadas quando uma nova vulnerabilidade crítica aparecer em ativos PCI. Qual recurso eles devem configurar?",
    "o": [
      "Uma zona de varredura apenas com intervalos de IP sobrepostos",
      "Um repositório offline com Gerar dados de tendência desabilitado",
      "Um alerta com ações de ticket e e-mail filtradas para gravidade crítica e lista de ativos PCI",
      "Uma conta do Credential Manager sem função"
    ]
  },
  "SC-Q113": {
    "q": "Em qual local é configurado o endereço web do Tenable Security Center usado nas notificações geradas por alertas e tickets?",
    "o": [
      "Dentro de cada política de varredura em Avançado > Famílias de plug-ins",
      "Dentro de cada repositório em Intervalos de Verificação Restritos",
      "Dentro de cada scanner Nessus em Verify Hostname",
      "Configuration Settings > Notifications, na opção Tenable Security Center Location"
    ]
  },
  "SC-Q114": {
    "q": "Qual destino de alerta é explicitamente compatível com notificações por e-mail e interface de usuário no Tenable Security Center?",
    "o": [
      "SMS direto para operadoras de celular sem gateway",
      "Criação automática de novas organizações",
      "Exclusão automática de repositórios",
      "Alerta de syslog"
    ]
  },
  "SC-Q115": {
    "q": "Qual permissão permite que um usuário carregue arquivos de auditoria usados para verificações de auditoria de configuração no Tenable Security Center?",
    "o": [
      "Manage Freeze Windows (Gerenciar janelas de bloqueio)",
      "Update Feeds (Atualizar feeds)",
      "Gerenciar conjuntos de atributos",
      "Criar arquivos de auditoria"
    ]
  },
  "SC-Q116": {
    "q": "Qual conteúdo os arquivos .audit da Tenable definem principalmente para verificação de conformidade?",
    "o": [
      "A ordem de rastreamento DHCP para alteração de endereços IP",
      "O comportamento de continuação (rollover) associado à duração máxima da varredura",
      "Verificações de configuração com valores esperados e lógica de aprovação/reprovação para benchmarks como CIS e DISA STIG",
      "A lista de organizações autorizadas a usar repositórios universais"
    ]
  },
  "SC-Q117": {
    "q": "Depois de importar uma política de varredura de outro Security Center, por que as verificações de conformidade podem estar faltando mesmo que a política tenha sido importada com sucesso?",
    "o": [
      "As verificações de conformidade são desativadas até que uma função de Auditor seja atribuída",
      "Os arquivos de política de varredura exportados não incluem arquivos de auditoria, portanto, os arquivos de auditoria devem ser configurados separadamente após a importação",
      "As verificações de conformidade exigem exclusivamente repositórios universais",
      "As verificações de conformidade são executadas apenas quando a programação está definida como Agora"
    ]
  },
  "SC-Q118": {
    "q": "Quais status de resultados são comumente associados às verificações de auditoria de conformidade do Tenable Security Center?",
    "o": [
      "PASSADO, FALHADO e AVISO (com condições de ERRO/tempo limite para verificações inacessíveis ou com falha)",
      "Somente cumulativo, mitigado e reformulado",
      "Funcionando, atualização de plug-ins e apenas indisponível",
      "Somente Estático, Dinâmico e Combinado"
    ]
  },
  "SC-Q119": {
    "q": "Um analista de segurança precisa executar verificações de benchmark CIS em servidores Linux. O que deve ser anexado à configuração de verificação além das credenciais e dos destinos?",
    "o": [
      "Uma chave de licença do Security Center Director",
      "Um arquivo de auditoria (.audit) para o benchmark CIS relevante",
      "Apenas um conector Tenable Lumin",
      "Um agendamento de sincronização de repositório offline"
    ]
  },
  "SC-Q120": {
    "q": "Como os resultados da avaliação de conformidade se relacionam com os resultados da avaliação de vulnerabilidade nos repositórios do Tenable Security Center?",
    "o": [
      "As descobertas de conformidade só podem ser armazenadas nos repositórios do Agente",
      "As descobertas de conformidade sempre substituem as descobertas de vulnerabilidade para o mesmo IP",
      "As descobertas de conformidade e de vulnerabilidade são tipos de resultados distintos que podem ser retidos com configurações separadas de vida útil dos dados",
      "As descobertas de conformidade nunca são armazenadas em repositórios e existem apenas em relatórios em PDF"
    ]
  },
  "SC-Q121": {
    "q": "Qual afirmação sobre relatórios especializados DISA ASR/ARF ou CyberScope no Tenable Security Center está correta?",
    "o": [
      "Relatórios especializados estão disponíveis somente quando a duração máxima da verificação não está definida",
      "Relatórios DISA especializados exigem a conversão de todos os repositórios para offline",
      "Qualquer auditor pode ativar relatórios do CyberScope sem envolvimento do administrador",
      "Um administrador deve ativar as opções especializadas de geração de relatórios antes que os usuários organizacionais possam gerar esses tipos de relatórios"
    ]
  },
  "SC-Q122": {
    "q": "Qual é a diferença entre uma verificação de avaliação de vulnerabilidade e uma verificação de avaliação de conformidade no Tenable Security Center?",
    "o": [
      "A avaliação de vulnerabilidade utiliza apenas agentes; a avaliação de conformidade usa apenas o Network Monitor",
      "A avaliação de vulnerabilidade armazena dados em painéis; a avaliação de conformidade armazena dados apenas em ARCs",
      "A avaliação de vulnerabilidades encontra pontos fracos de software/configuração por meio de plug-ins; a avaliação de conformidade avalia os hosts em relação aos benchmarks de arquivos de auditoria, como CIS/STIG",
      "Não há diferença; A Tenable usa os termos de forma intercambiável"
    ]
  },
  "SC-Q123": {
    "q": "Qual é a porta padrão para acessar a interface web do Tenable Security Center?",
    "o": [
      "TCP 8835",
      "TCP 8834",
      "TCP 443",
      "TCP 22"
    ]
  },
  "SC-Q124": {
    "q": "Qual porta o Tenable Security Center deve usar para se comunicar com os scanners Tenable Nessus?",
    "o": [
      "TCP 8834",
      "Somente TCP 443",
      "TCP 25",
      "UDP 161"
    ]
  },
  "SC-Q125": {
    "q": "Qual porta é usada para sincronização de repositório remoto entre instâncias do Tenable Security Center?",
    "o": [
      "TCP 3389",
      "UDP 53",
      "TCP 22",
      "TCP 8834"
    ]
  },
  "SC-Q126": {
    "q": "Qual função de usuário do Tenable Security Center é necessária para adicionar um scanner Nessus em Recursos > Tenable Nessus Scanners?",
    "o": [
      "Auditor (Auditor)",
      "Administrator (Administrador)",
      "Executive (Executivo)",
      "Analista de Vulnerabilidade"
    ]
  },
  "SC-Q127": {
    "q": "Durante a configuração inicial do Nessus, um scanner pode ser vinculado ao Tenable Security Center selecionando qual opção Gerenciado por?",
    "o": [
      "Somente chave de vinculação do Tenable Vulnerability Management",
      "Diretor de Segurança OT da Tenable",
      "Tenable.sc (Centro de Segurança Tenable)",
      "Gerente de Assurance Report Card (ARC) Tenable"
    ]
  },
  "SC-Q128": {
    "q": "Qual componente de comunicação usa TCP 8835 em uma implantação do Tenable Security Center?",
    "o": [
      "Comunicação com Tenable Network Monitor",
      "Entrega de e-mail SMTP para relatórios programados",
      "Sincronização de repositório remoto",
      "Acessando a interface web do Security Center"
    ]
  },
  "SC-Q129": {
    "q": "O que um administrador deve confirmar antes de adicionar um Nessus Manager em vez de um scanner Nessus independente ao Security Center?",
    "o": [
      "Se o tipo de repositório é Offline, porque somente repositórios Offline podem receber dados do agente",
      "Se a instância remota é um scanner independente ou um Nessus Manager que gerencia agentes, porque as opções de conexão/credencial são diferentes",
      "Se Trend Days está definido como 0 em todos os painéis",
      "Se todos os usuários têm a atribuição Sem Função"
    ]
  },
  "SC-Q130": {
    "q": "Na análise de vulnerabilidade do Tenable Security Center, o que mostra a visualização Cumulativa?",
    "o": [
      "Somente histórico de aprovação/reprovação do Assurance Report Card (ARC)",
      "Vulnerabilidades atualmente presentes (ativas) em ativos verificados",
      "Somente vulnerabilidades que foram corrigidas nas últimas 24 horas",
      "Somente eventos de conectividade do scanner"
    ]
  },
  "SC-Q131": {
    "q": "Qual permissão de análise permite que um usuário altere a gravidade das vulnerabilidades no Tenable Security Center?",
    "o": [
      "Criar arquivos de auditoria",
      "Recast Risks (Riscos de reformulação)",
      "Verifique o nome do host",
      "Manage Freeze Windows (Gerenciar janelas de bloqueio)"
    ]
  },
  "SC-Q132": {
    "q": "O que o fluxo de trabalho Aceitar Risco faz na análise de vulnerabilidade?",
    "o": [
      "Aceitar formalmente o risco de vulnerabilidades para que sejam removidas da visualização padrão para análises, painéis e relatórios",
      "Aumentar a gravidade da vulnerabilidade em um nível",
      "Mover permanentemente a descoberta para um repositório off-line",
      "Corrigir automaticamente o CVE aceito em todos os hosts"
    ]
  },
  "SC-Q133": {
    "q": "Um analista precisa revisar apenas as vulnerabilidades de uma família específica de plug-ins Nessus e, em seguida, um intervalo de IDs de plug-in. Quais filtros eles devem aplicar?",
    "o": [
      "Zona de varredura e intervalos de varredura restritos",
      "Família de plug-ins e ID do plug-in",
      "Janela de bloqueio e notificações de campainha",
      "Função do usuário e relacionamento do grupo"
    ]
  },
  "SC-Q134": {
    "q": "Qual afirmação descreve corretamente a permissão Manage Risks quando Accept Risks ou Recast Risks está habilitada?",
    "o": [
      "Permite ao usuário modificar regras de aceitação e reformulação de risco criadas por outros usuários",
      "Permite ao usuário deletar todos os repositórios da organização",
      "Permite ao usuário criar novas contas de Administrador",
      "Permite ao usuário alterar a porta HTTPS do Security Center"
    ]
  },
  "SC-Q135": {
    "q": "Uma vulnerabilidade não aparece mais nos resultados cumulativos após a correção. Onde um analista deve procurar para revisar a descoberta previamente corrigida?",
    "o": [
      "Visão de vulnerabilidade mitigada",
      "Somente visualização de detalhes da zona de varredura",
      "Visualização secreta da credencial do Credential Manager",
      "Scanner Nessus Verifique apenas o log do nome do host"
    ]
  },
  "SC-Q136": {
    "q": "Qual permissão é necessária para criar ativos de consulta LDAP que atualizam listas de hosts a partir de consultas de diretório?",
    "o": [
      "Criar alertas",
      "Gerenciar imagens",
      "Criar ativos de consulta LDAP",
      "Update Feeds (Atualizar feeds)"
    ]
  },
  "SC-Q137": {
    "q": "Para que é usada uma lista de ativos de consulta LDAP no Tenable Security Center?",
    "o": [
      "Autenticação do Security Center para Nessus na porta 8834",
      "Atualizar dinamicamente uma lista de hosts com base em uma consulta LDAP definida pelo usuário",
      "Armazenar arquivos .audit para benchmarks CIS",
      "Habilitar geração de relatórios CyberScope"
    ]
  },
  "SC-Q138": {
    "q": "Qual operação de conjunto uma lista de ativos combinada usaria para incluir apenas hosts presentes na Lista A e na Lista B?",
    "o": [
      "Interseção",
      "União",
      "Diferença de A menos B somente quando A está vazio",
      "Normalização de DNS"
    ]
  },
  "SC-Q139": {
    "q": "Por que um gerente de segurança pode criar listas de ativos estáticos separadas para PCI CDE e intervalos de estações de trabalho corporativas?",
    "o": [
      "Para definir o escopo de verificações, painéis, relatórios, alertas e filtros de análise para o contexto de negócios correto",
      "Porque as listas dinâmicas de ativos não podem usar endereços IP",
      "Porque os repositórios só podem armazenar uma lista de ativos por vez",
      "Porque os administradores não podem atribuir repositórios sem listas de ativos"
    ]
  },
  "SC-Q140": {
    "q": "Qual tipo de lista de ativos requer dados de repositório/verificação existentes antes de normalmente mostrar membros?",
    "o": [
      "Uma lista de espaços reservados vazia apenas com endereços codificados",
      "Lista de ativos estáticos de intervalos CIDR inseridos manualmente",
      "Uma lista de IP recém-digitada sem condições de consulta",
      "Lista dinâmica de ativos"
    ]
  },
  "SC-Q141": {
    "q": "Qual função integrada é destinada a usuários que navegam principalmente em painéis e relatórios e podem atribuir tarefas com tickets, mas não estão focados no gerenciamento de verificações ou usuários?",
    "o": [
      "Administrator (Administrador)",
      "Executive (Executivo)",
      "Credential Manager (Gerenciador de credenciais)",
      "No Role (Sem função)"
    ]
  },
  "SC-Q142": {
    "q": "Qual função integrada pode executar tarefas básicas, como visualizar dados de segurança, realizar verificações, compartilhar objetos, visualizar logs e trabalhar com tickets?",
    "o": [
      "Administrator (Administrador)",
      "Vinculado a SM",
      "No Role (Sem função)",
      "Analista de Vulnerabilidade"
    ]
  },
  "SC-Q143": {
    "q": "O que há de único na conta inicial do Security Manager criada com uma nova organização?",
    "o": [
      "Não pode iniciar varreduras até que um Auditor aprove cada varredura",
      "Não pode ser excluído sem excluir toda a organização",
      "Torna-se automaticamente Administrador após o primeiro login",
      "É a única conta que pode acessar TCP 8834"
    ]
  },
  "SC-Q144": {
    "q": "Por que os usuários administradores não veem os painéis de vulnerabilidade organizacional por padrão?",
    "o": [
      "Os administradores devem usar a função de Auditor simultaneamente",
      "Os administradores não pertencem a uma organização e não têm acesso aos dados coletados pelo Tenable Security Center",
      "Os administradores só podem usar relatórios em PDF, nunca painéis",
      "Os administradores estão limitados apenas aos repositórios do Agente"
    ]
  },
  "SC-Q145": {
    "q": "O que a permissão Gerenciar Grupos permite que um usuário organizacional faça?",
    "o": [
      "Habilitar relatórios do CyberScope em todo o sistema",
      "Adicionar, editar e excluir grupos, incluindo a criação de grupos com acesso a vulnerabilidades e dados de eventos disponíveis para a organização",
      "Registrar scanners Nessus na porta 8834",
      "Alterar a contagem de IP da licença do Security Center"
    ]
  },
  "SC-Q146": {
    "q": "Qual afirmação descreve melhor o Tenable Security Center em relação ao Tenable Vulnerability Management?",
    "o": [
      "Security Center é a plataforma de análise de vulnerabilidade local da Tenable; Gerenciamento de vulnerabilidades é a plataforma em nuvem",
      "Security Center é apenas na nuvem; O gerenciamento de vulnerabilidades é apenas local",
      "Ambos os produtos armazenam todos os dados de varredura do cliente exclusivamente na nuvem SaaS da Tenable",
      "O Security Center não pode usar scanners Nessus"
    ]
  },
  "SC-Q147": {
    "q": "Para que é usado o Tenable Security Center Director?",
    "o": [
      "Substituir scanners Nessus por varredura somente de agente",
      "Fornece visão e gerenciamento unificados em vários consoles distribuídos do Security Center",
      "Converter todos os repositórios para offline automaticamente",
      "Emitir chaves de vinculação para o Tenable Vulnerability Management"
    ]
  },
  "SC-Q148": {
    "q": "Qual sensor fornece dados de vulnerabilidade passiva que o Security Center pode analisar junto com os resultados ativos do Nessus?",
    "o": [
      "Agendador de relatórios em PDF",
      "Função de gerente de credenciais",
      "Galeria de modelos de Assurance Report Card (ARC)",
      "Monitor de rede sustentável"
    ]
  },
  "SC-Q149": {
    "q": "Em termos de certificação de Especialista, o que o candidato deve realizar antes de realizar o exame prático?",
    "o": [
      "É obrigatório apenas o exame prático; o exame escrito é opcional",
      "Um exame de implantação em grande escala do Tenable Expert deve ser concluído primeiro",
      "Uma certificação GIAC deve ser concluída primeiro",
      "O exame escrito (60 questões, 2 horas, 80% de aprovação) deve ser concluído primeiro"
    ]
  },
  "SC-Q150": {
    "q": "Qual comportamento das janelas de bloqueio de varreduras (freeze windows) está correto no Tenable Security Center?",
    "o": [
      "As janelas de bloqueio são somente globais e não podem ser definidas por organização",
      "As janelas de bloqueio são definidas por organização e impedem varreduras dos destinos afetados durante o período configurado",
      "As janelas de bloqueio excluem permanentemente as vulnerabilidades mitigadas",
      "As janelas de bloqueio atualizam automaticamente todos os scanners para a versão mais recente do Nessus"
    ]
  }
};
  const exam = SIMULADOS.find(s => s.id === 'tenable-sc150');
  if (!exam) return;
  for (const question of exam.questions) {
    const translation = translations[question.id];
    if (translation && translation.o.length === question.o.length) question.ptBR = translation;
  }
})();
