# Revisão do material local

Consulta em 09/10/2026. Os arquivos originais foram preservados. As extrações e o inventário ficam em `Fontes/Locais`. A análise não autentica nenhum item como questão real de certificação.

## Guia oficial de Vulnerability Management

`Doc/User Guide - Tenable Vulnerability Management.pdf` tem 1.478 páginas e informa **Last Revised: June 20, 2024**. É uma fonte oficial histórica útil para arquitetura, scans, tags, networks, estados e interfaces. A extração de todas as páginas foi indexada, e páginas relevantes foram lidas para o confronto de versões. O guia não foi revisado visualmente em todas as 1.478 páginas.

As páginas PDF 43–46 explicam CVSS/VPR. As páginas 49–50 explicam mitigação e estados. As páginas 287–288 distinguem descoberta de avaliação, 293–294 apresentam templates, 339–340 tratam triggered scans, 1105 diferencia roles e permissões, 1193/1202 trata tags, 1300 trata networks e 1354–1355 descreve comunicação e linking keys.

A página 1010 reflete opções antigas de severidade. Para a preparação atual, ler [General Settings](https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm): a documentação consultada informa VPR como padrão e aplica a nova métrica também a findings reobservados. Conferir a configuração do tenant quando analisar cenários. A disponibilidade de VPR como severidade consta da release de 27/04/2026.

## Bancos locais

O PDF `tenable_vulnerability_management_specialist_v3.pdf` contém 41 itens em 13 páginas. O título declara atualização em 2026, mas não há data editorial comprovada nem evidência de origem oficial do exame. O Word `QUESTÕES.docx` contém 33 itens. Seus metadados indicam criação em 04/08/2026 e alteração em 05/08/2026. Essas datas comprovam metadados do arquivo, não publicação ou revisão técnica de cada questão.

Os bancos contribuem com vocabulário e diagnóstico inicial. Os simulados entregues são novos e usam fontes oficiais para os gabaritos. O mapa por tema aponta quais itens locais ajudam na revisão. As seguintes ressalvas precisam acompanhar o uso dos originais:

| Arquivo e item | Problema identificado | Leitura adotada |
|---|---|---|
| PDF Q6, Word Q25 | Pergunta sobre gestão centralizada pode admitir VM e Security Center, dependendo do modelo de implantação. | Especificar console SaaS VM ou console on-premises Security Center. Não memorizar uma resposta única sem o contexto. |
| PDF Q4/Q12 | Generalização de detecção em tempo real. | Separar atualização de inteligência, coleta, execução e envio. A cobertura depende de modalidade, configuração e disponibilidade. |
| PDF Q10 | Formulação ampla sobre zero-days. | Não interpretar como garantia de detecção de toda vulnerabilidade desconhecida. Conferir a verificação concreta e a evidência disponível. |
| PDF Q27 | Junta remoto e não autenticado como equivalentes. | Uma vulnerabilidade remota pode exigir autenticação. Tratar posição de ataque e requisito de autenticação separadamente. |
| PDF Q33 | Alternativas misturam HTTP/SSH com TCP e citam TCP como resposta suficiente para comunicação de agents. | Para o cenário VM padrão, estudar HTTPS/TLS sobre TCP 443 ao endpoint documentado. TCP sozinho não descreve a aplicação. |
| Word Q3, PDF Q41 | Descrição de execução offline sem condições. | Estudar triggered versus window, política disponível e limites de dados antigos. Envio requer reconexão adequada. |
| Word Q6 | Console SaaS apresentado como ausência de toda infraestrutura local. | A administração central é SaaS, mas redes privadas podem exigir sensores locais. |
| Word Q8–Q13 | Conteúdo de Security Center dentro de um banco usado para VM. | Revisar apenas conceitos compartilhados. Consultar o produto correto para roles, objetos, formatos e autenticação. |
| Word Q14 | Explicação garante ausência de qualquer risco pela observação passiva. | A observação evita probing ativo. Manter análise de implantação, tráfego observado e limitações de visibilidade. |
| Word Q15 | Afirmação de que um método sempre é o mais preciso e elimina falsos positivos. | Credenciais ampliam checks locais, mas não garantem perfeição. Agents e rede oferecem perspectivas complementares. |
| Word Q19 | Junta settings da política e alvos da instância como regra universal. | Conferir herança do template e configurações específicas do scan. |
| Word Q22 | Mistura criticidade e exposição como se ACR descrevesse tudo. | ACR representa criticidade do ativo. VPR e outras métricas agregam outras dimensões, conforme licença. |
| Word Q24 | Explicação sugere generalização de licença por ativo descoberto. | A documentação do Host Discovery informa exceção para ativos identificados por discovery scans. |
| Word Q27/Q29 | Integrações com AD e SIEM aparecem com efeito genérico, sem integração ou procedimento especificado. | Não assumir um recurso universal. Identificar integração, configuração e documentação que sustenta o caso. |
| Word Q30 | Resolução DNS usada como prova de host ativo. | DNS relaciona nome e endereço. Disponibilidade exige evidência adicional. |
| Word Q31 | Sugere um produto sempre correto para todo IoT. | Escolher conforme tipo de dispositivo, protocolos, exposição, impacto e cobertura requerida. |

Fontes de confronto: [Get Started](https://docs.tenable.com/vulnerability-management/Content/vulnerability-management/GetStarted.htm), [Sensor Security](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/SensorSecurity.htm), [Triggered Agent Scans](https://docs.tenable.com/vulnerability-management/Content/Scans/TriggeredAgentScans.htm), [Nessus Credentialed Checks](https://docs.tenable.com/nessus/Content/NessusCredentialedChecks.htm), [Networks](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm), [Scan Templates](https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm), [CVSS vs. VPR](https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm).

## Gravações e certificados

Os dois MP4 de Vulnerability Management e a gravação M4A entram como apoio na trilha de estudo. O conteúdo audiovisual não foi transcrito nem revisado integralmente. Nenhum timestamp temático foi inventado. As sessões do cronograma avançam na sequência de reprodução, e o candidato registra os assuntos encontrados no modelo de notas.

Os vídeos de Security Center ficam como consulta complementar para conceitos comuns, pois a prova escolhida é de VM. Certificados de treinamento foram apenas inventariados. Nomes e dados de participantes não foram incorporados aos slides ou aos simulados.
