# Pesquisa e critérios de uso

Pesquisa realizada em 09/10/2026 para preparação da etapa escrita em aproximadamente três meses. Janela solicitada para questões recentes: 09/10/2025 a 09/10/2026. O pacote usa 48 referências oficiais e três documentos locais, registrados em fontes.csv e fontes_comentadas.md. As fontes foram confrontadas por assunto.

## Formato e programa confirmado

O [datasheet do exame](https://static.tenable.com/ps/DS_VM_Specialist_Cert.pdf), revisado em 09/09/2026, descreve 60 questões de múltipla escolha e verdadeiro/falso, duas horas e mínimo de 80%. Os domínios amplos são Host Discovery, Vulnerability Assessment, Installation e Configuration. A prova é em inglês. A certificação completa exige escrita e prática. A [FAQ oficial](https://www.tenable.com/education?view=cert) informa que as categorias são igualmente ponderadas. Isso não significa que os oito módulos didáticos deste pacote tenham pesos oficiais iguais.

O [programa oficial do curso](https://static.tenable.com/ps/DS_VM_Specialist_Course.pdf), também revisado em 09/09/2026, orientou os assuntos: arquitetura, sensores, Core, configuração, grupos, networks, acesso e tags, exclusões, discovery, scans de rede e agents, compliance, priorização, regras de risco, dashboards, relatórios e Exposure Response. Não foi localizado nas buscas realizadas um blueprint oficial público com percentuais detalhados por assunto ou um banco público oficial de questões com publicação comprovada dentro da janela.

## Busca de questões e anúncios comerciais

Foram pesquisados o nome da certificação, variantes com Written Exam, practice questions, sample questions, exam dumps, 2025, 2026 e 2026/2027, além de Stuvia, Docsity e DocMerit. Anúncios foram examinados como evidência de disponibilidade e data. Nenhum produto foi comprado e nenhum banco pago foi baixado.

| Publicação encontrada | Data visível | Decisão |
|---|---|---|
| [Stuvia: questões e soluções práticas, anúncio de 123 páginas](https://www.stuvia.com/doc/10705608/tenable-vulnerability-management-specialist-exam-2026-practice-questions-en-practical-lab-solutions-a-graded-verified-answers) | Upload em 17/03/2026 | Dentro da janela. A data comprova o upload, sem comprovar origem oficial ou precisão. |
| [Stuvia: questões com respostas, anúncio de 37 páginas](https://www.stuvia.com/en-de/doc/10153358/tenable-vulnerability-management-specialist-exam-questions-with-answers) | Upload em 14/01/2026 | Dentro da janela. Sem autenticação como questão oficial. |
| [Docsity: practice questions](https://www.docsity.com/en/docs/tenable-vulnerability-management-specialist-exam-practice-questions-with-correct-answers/15514171/) | Sem data absoluta confirmada | Não classificado como publicação recente comprovada. |
| [Docsity: anúncio Real Exam 2026/2027](https://www.docsity.com/en/docs/tenable-vulnerability-management-specialist-real-exam-2026-2027/18845970/) | Sem data absoluta confirmada | Ano do título não comprova publicação, autenticidade ou atualidade. |
| [Stuvia: anúncio Exam 2026](https://www.stuvia.com/doc/10248873/tenable-vulnerability-management-specialist-exam-2026) | Sem data editorial confirmada | Não utilizado como referência técnica. |

Termos promocionais como “verified”, “real exam” e “graded” são alegações do vendedor. Não houve evidência de endosso pela Tenable. Os previews não serviram de autoridade para as respostas deste pacote. A análise técnica usa a documentação oficial e os documentos locais fornecidos pelo usuário. Conteúdo alegado como vazado não foi reproduzido.

As 160 questões deste estudo têm data de elaboração 09/10/2026 e identificadores T01-Q01 a T08-Q20. São originais, com referências por item. A/B e reserva são seleções desse mesmo banco, sem aumento artificial da contagem de questões únicas.

## Atualização e divergências importantes

| Assunto | Evidência atual e consequência para o estudo |
|---|---|
| Severidade | [General Settings](https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm) documenta VPR como padrão e seleção entre VPR e versões CVSS. Alterações alcançam findings novos ou reobservados; os demais mantêm a classificação anterior até nova observação. Uma afirmação antiga de que severidade é sempre CVSS precisa ser contextualizada. |
| Releases | As [release notes de 2026](https://docs.tenable.com/release-notes/Content/vulnerability-management/2026.htm) registram seleção de VPR em abril, permissões granulares de custom roles em junho, modelo unificado de risco em julho e alteração de health dos agents em outubro. Novidade de produto não comprova inclusão na prova. |
| Health de agents | A entrada de 06/10/2026 define Offline após pelo menos 72 horas sem check-in. O slide e a questão correspondentes indicam informação recente de produto. |
| Autenticação | [Nessus Credentialed Checks](https://docs.tenable.com/nessus/Content/NessusCredentialedChecks.htm) exige validar autenticação e capacidade de obter inventário de patches/pacotes. Login sozinho não comprova avaliação autenticada completa. |
| Agents | [Triggered Agent Scans](https://docs.tenable.com/vulnerability-management/Content/Scans/TriggeredAgentScans.htm) distingue janela e trigger. Para exportar vulnerabilidades de triggered scans, usa-se bulk vulnerability export API. |
| Exclusões | [Exclusions](https://docs.tenable.com/vulnerability-management/Content/Settings/Exclusions/Exclusions.htm) define aplicação a scans de rede, sem aplicar a scans locais de agents. Exclusão ativa prevalece sobre target explícito. Uma janela agendada não interrompe scan já iniciado. |
| Contexto de rede | [Networks](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm) orienta ambientes com IPs sobrepostos. Scanner e scanner group pertencem a uma network por vez. |

O material local contém guia oficial revisado em 20/06/2024, 41 questões em PDF e 33 em Word. A [revisão local](revisao_material_local.md) detalha imprecisões e itens que misturam produtos. Datas de criação/modificação não foram tratadas como publicação do banco. Gravações foram inventariadas por metadados e incorporadas ao cronograma; áudio e vídeo não receberam revisão integral.

## Método e rastreabilidade

1. Consultar datasheets e FAQ para formato, idioma, regras e domínios.
2. Consultar documentação por tema e release notes de 2026.
3. Procurar bancos públicos e anúncios, distinguindo data explícita de ano no título ou rastreamento do mecanismo de busca.
4. Extrair texto dos documentos locais e mapear páginas/itens aos módulos. Preservar originais e hashes no inventário.
5. Criar questões e explicar respostas com referências oficiais. Não atribuir autenticidade de exame aos bancos locais ou comerciais.
6. Organizar o trabalho em 65 sessões de 120 minutos, oito módulos, simulados e laboratórios.

Registro de acesso e evidência de data: fontes.json, fontes.csv e Fontes/Locais/inventario.json. Documentação viva sem data é utilizável para validar comportamento atual, mas não recebe publicação inventada. O corte limita a pesquisa e não comprova o que estará no banco oficial em janeiro de 2027.

Revalidar nas semanas 9 e 13: datasheet, FAQ, severidade, acesso, agents e instruções do agendamento. O plano contém essa atividade.
