const OPTION_EXPLANATIONS = [
  [
    [
      "“Garantia é a garantia de que um produto ou serviço atenderá aos requisitos acordados” e não está relacionada à concessão de permissão a um funcionário. Ref. 3.2.4",
      "A transferência de bens geralmente implica a transferência de \"bens de um provedor de serviços para um consumidor de serviços. No caso de serviços digitais, esta é uma forma rara, mas possível, de interação de serviço.\" A permissão para usar uma plataforma não é a transferência de bens. Ref. 3.1.2",
      "Utilidade \"é a funcionalidade oferecida por um produto ou serviço para atender a uma necessidade específica. Utilidade pode ser resumida como \u0027o que o serviço faz\u0027 e pode ser usada para determinar se um serviço é adequado ao propósito.” Ref. 3.2.4",
      "\"O consumidor de serviços ganha acesso aos recursos do provedor de serviços e os utiliza de acordo com os termos e condições acordados.\" Nesse caso, o funcionário recebe permissão para usar o \"recurso\" da plataforma de compartilhamento de arquivos. Ref. 3.1.2"
    ],
    [
      "Transferência de bens ocorre quando bens passam de um provedor para um consumidor de serviços, como equipamentos ou consumíveis. No caso de serviços digitais, é uma interação possível, porém rara. Ajudar a configurar um laptop é uma ação de serviço, não uma transferência de bens. Ref. 3.1.2",
      "Ações de serviço são ações \"realizadas por um provedor de serviços ou, conjuntamente, por um provedor de serviços e um consumidor de serviços. O atendimento de requisições de serviços é uma forma comum de ações de serviço. Outros exemplos incluem entrega de bens, treinamento de usuários, consultas e assim por diante.\" Nesse caso, a equipe do provedor de serviços tomou uma ação prestando assistência ao usuário. Ref. 3.1.2",
      "\"Sustentabilidade é a garantia de que um produto ou serviço atende e continuará a atender aos requisitos de gerenciamento ambiental, progresso social e crescimento econômico.\" Ref. 3.2.4",
      "\"Acesso a recursos: o consumidor de serviços ganha acesso aos recursos do provedor de serviços e os utiliza de acordo com os termos e condições acordados.\" Ref. 3.1.2"
    ],
    [
      "Os custos operacionais não são uma preocupação para o consumidor, mas os serviços prestados “podem introduzir novos custos e riscos [..] Os serviços são percebidos pelos consumidores de serviços como valiosos apenas quando têm mais efeitos positivos do que negativos.” Ref. 3.1.1",
      "\"Os provedores de serviços ajudam seus consumidores a alcançar resultados e, ao fazer isso, assumem alguns dos custos e riscos associados. Os provedores de Serviço geralmente são especializados em tipos específicos de serviços” e, portanto, o número de provedores não é significativo para o consumidor. Ref. 3.1.1",
      "\"[...] os serviços podem introduzir novos custos e riscos e, em alguns casos, podem afetar negativamente alguns dos resultados pretendidos, enquanto apoiam outros. Os serviços são percebidos pelos consumidores de serviço como valiosos apenas quando têm mais efeitos positivos do que negativos.\" Ref. 3.1.1",
      "A quantidade de dinheiro investida em recursos por um provedor de serviços não está valor para o(s) consumidor(es) de serviços [...] é definido por suas próprias necessidades; é alcançado por meio do suporte aos resultados pretendidos e da otimização dos custos e riscos do consumidor de serviços, é subjetivo e influenciado pela experiência de serviço; muda ao longo do 4 tempo e em diferentes circunstâncias.” Ref. 5.2.1.1"
    ],
    [
      "Os serviços não garantem todos os resultados; eles podem apoiar alguns e dificultar outros. \"Ao habilitar os resultados desejados para N os consumidores de serviço, os serviços também podem prevenir ou reduzir outros resultados desejados ou introduzir resultados indesejados [...]. Além do efeito positivo e negativo intencional e antecipado nos consumidores de serviços, os serviços podem ter resultados inesperados e surpreendentes, tanto positivos quanto negativos.\" Ref.3.1.1.1",
      "Serviços podem mitigar ou reduzir riscos, mas não podem eliminá-los completamente. Enquanto os riscos podem ser “reduzidos ou totalmente removidos de um consumidor pelo serviço [...]. Em muitos casos, um serviço pode apenas reduzir os riscos de um consumidor, mas o consumidor pode decidir que essa redução é suficiente para apoiar a proposta de valor” e, ao “possibilitar os resultados desejados para os consumidores de serviços, os serviços também podem prevenir ou reduzir outros resultados desejados ou introduzir resultados indesejados [...]. Além do efeito positivo e negativo intencional e antecipado nos consumidores de serviços, os serviços podem ter resultados inesperados e surpreendentes, tanto positivos quanto negativos.\" Ref. 3.1.1.3, 3.1.1.1",
      "Os serviços podem levar a efeitos “positivos e negativos”, portanto, os resultados nem sempre são positivos. \"Além do efeito positivo e negativo intencional e antecipado nos consumidores de serviços, os serviços podem ter resultados inesperados e surpreendentes, tanto positivos quanto negativos.” Ref. 3.1.1.1",
      "\"Ao habilitar os resultados desejados para os consumidores de serviço, os serviços também podem prevenir ou reduzir outros resultados desejados ou introduzir resultados indesejados [...]. Além do efeito positivo e negativo intencional e antecipado nos consumidores de serviços, os serviços podem ter resultados inesperados e surpreendentes, tanto positivos quanto negativos.\" Ref. 3.1.1.1"
    ],
    [
      "Utilidade é a funcionalidade oferecida por um produto ou serviço para atender a uma necessidade específica. \"Utilidade pode ser resumida como \u0027o que o serviço faz\u0027 e pode ser usada para determinar se um serviço é adequado ao propósito.\" Para ter utilidade, um serviço deve apoiar o desempenho do consumidor ou remover restrições do consumidor. Ref. 3.2.4",
      "Garantia é “a certeza de que um produto ou serviço atenderá aos requisitos Ea acordados. A garantia pode ser resumida como \u0027o gé modo como o serviço funciona\u0027 e pode ser usada « para determinar se ele é \"adequado ao uso\". A garantia, tipicamente, aborda áreas como disponibilidade do serviço, sua capacidade, seus níveis de segurança e sua continuidade.\" Ref. 3.2.4",
      "\"A Experiência do Usuário (UX) é a soma das interações funcionais e emocionais com um serviço e com o provedor de serviços, conforme percebidas por um usuário de serviço.\" Ref. 3.2.4",
      "\"Os requisitos de sustentabilidade podem incluir o sourcing responsável de materiais e componentes, práticas responsáveis de trabalho e emprego, uso de energia limpa, baixa pegada de carbono, incorporação de materiais reciclados e recicláveis, cadeias de suprimentos transparentes, entre outros. Esses requisitos podem ser originados de regulamentações e normas nacionais e internacionais ou ser definidos na estratégia de sustentabilidade da organização.\" Ref. 3.2.4"
    ],
    [
      "A dimensão de \"parceiros e fornecedores\" foca em relacionamentos e acordos externos, não na cultura interna de confiança. Ela \"abrange os relacionamentos de uma organização com outras organizações envolvidas na descoberta, design, construção, transição, operação, entrega, suporte e/ou melhoria contínua de produtos e serviços. Ela também incorpora contratos e outros acordos entre a organização e seus parceiros ou fornecedores.\" Ref. 2.5",
      "A dimensão de \"fluxos de valor e processos\" está relacionada com os fluxos de trabalho e a eficiência. Ela \"aborda os fluxos de trabalho organizacionais e interorganizacionais, focando nas atividades que a organização realiza e como elas são organizadas para habilitar valor para os stakeholders de forma eficaz e eficiente.\" Ref. 2.3",
      "A dimensão \"informação e tecnologia\" aborda dados, informações e tecnologias utilizados em produtos e serviços digitais, bem como aqueles utilizados como parte dos sistemas de gerenciamento de produtos e serviços da organização.\" Ref. 2.4",
      "A dimensão 'organizações e pessoas' trata de cultura, confiança, crenças, competências, comunicação e comportamentos. Por isso, segurança psicológica e aprendizado contínuo pertencem a essa dimensão. Ref. 2.2.1"
    ],
    [
      "A dimensão \"parceiros e fornecedores” N abrange os relacionamentos de uma organização com outras organizações envolvidas na descoberta, design, construção, transição, operação, entrega, suporte e/ou melhoria contínua de produtos e serviços. Ela também incorpora contratos e outros acordos entre a organização e seus parceiros ou fornecedores.\" Ref. 2.5",
      "A dimensão \"informação e tecnologia\" \"aborda dados, informações e tecnologias utilizados em produtos e serviços digitais, bem como aqueles utilizados como parte dos sistemas de gerenciamento de produtos e serviços da organização.\" Ref. 2.4",
      "A dimensão \"organizações e pessoas\" garante que os “papéis, responsabilidades e sistemas de autoridade e comunicação” de uma organização sejam bem definidos e apoiem sua estratégia geral e modelo operacional.\" Também garante \"a forma como uma organização é estruturada e gerenciada [...].” Ref. 2.2",
      "\"A dimensão \u0027fluxos de valor e processos\u0027 aborda os fluxos de trabalho organizacionais e interorganizacionais, focando nas atividades que a organização realiza e como elas são organizadas para habilitar valor para os stakeholders de forma eficaz e eficiente.\" Ref. 23"
    ],
    [
      "A dimensão \"parceiros e fornecedores\" abrange os relacionamentos de uma organização com outras organizações envolvidas na descoberta, design, construção, transição, operação, entrega, suporte e/ou melhoria contínua de produtos e serviços. Ela também incorpora contratos e outros acordos entre a organização e seus parceiros ou fornecedores.\" Ref. 2.5",
      "A dimensão \"fluxos de valor e processos\" \"aborda os fluxos de trabalho organizacionais e interorganizacionais, focando nas atividades que a organização realiza e como elas são organizadas para habilitar valor para os stakeholders de forma eficaz e eficiente.\" Ref. 2.3",
      "A dimensão \"organização e pessoas” garante que \"a forma como uma organização é estruturada e gerenciada, bem como os seus papéis, responsabilidades e sistemas de autoridade e comunicação, esteja bem definida e apoie a sua estratégia geral e modelo operacional.\" Ref. 2.2",
      "\"A dimensão \u0027informação e tecnologia\u0027 aborda dados, informações e a tecnologias utilizados em produtos e serviços digitais, bem como aqueles utilizados como parte dos sistemas de gerenciamento de o produtos e serviços da organização.\" Ref. 2.4"
    ],
    [
      "\"A dimensão \u0027fluxos de valor e processos! aborda os fluxos de trabalho organizacionais e interorganizacionais, focando nas atividades que a organização realiza e como elas são organizadas para habilitar valor para os stakeholders de forma eficaz e eficiente.\" Ref. 2.3",
      "\"A dimensão \u0027informação e tecnologia\" aborda dados, informações e tecnologias utilizados em produtos e serviços digitais, bem como aqueles utilizados como parte dos sistemas de gerenciamento de produtos e serviços da organização.\" Ref. 2.4",
      "\"A dimensão \u0027parceiros e fornecedores\u0027 abrange os relacionamentos de uma organização com outras organizações envolvidas na descoberta, design, construção, transição, operação, entrega, suporte e/ou melhoria contínua de produtos e serviços.\" Ref. 25",
      "A dimensão \"organizações e pessoas\" foca nos aspectos humanos e culturais do gerenciamento de serviços. Ela garante que \"a forma como uma organização é estruturada e gerenciada, bem como os seus papéis, responsabilidades e sistemas de autoridade e comunicação, esteja bem definida e apoie a sua estratégia geral e modelo operacional.\" Ref. 2.2"
    ],
    [
      "O princípio \"focar no valor\" estipula que todas as “atividades realizadas pela organização devem se vincular, direta ou indiretamente, ao valor para si mesma, seus clientes e outras partes interessadas.” Ref. 5.2.1",
      "Focar apenas na receita é muito restrito, pois o ganho financeiro é apenas uma dimensão de valor. \"Focar no valor\" enfatiza que o valor também inclui resultados como satisfação do cliente, lealdade, custo reduzido e oportunidades de longo prazo, não apenas lucros monetários. Diferentes partes interessadas podem ter uma definição de valor diferente. \"Esse valor pode vir de várias formas, tais como receita, fidelidade do cliente, menor custo ou oportunidades de crescimento.” Ref. 5.2.1",
      "Embora a satisfação dos funcionários seja importante para o sucesso geral, ela é um facilitador, e não o resultado final de valor. É um fator contribuinte, mas não o foco principal das atividades organizacionais. Além disso, é o papel da liderança “engajar, inspirar e motivar as pessoas, agindo com integridade para gerar respeito e empoderar os funcionários”. Ref. 2.2.2",
      "O domínio de mercado pode contribuir para o valor, mas não é uma medida universal de sucesso. 'Focar no valor' considera resultados como receita, fidelidade, redução de custos e oportunidades de crescimento para diferentes stakeholders. Ref. 5.2.1"
    ],
    [
      "O conceito de colaboração não está relacionado ao princípio de \"começar de onde você está\". \"A colaboração que leva a conquistas reais exige informação, compreensão e confiança. O trabalho e seus resultados devem estar visíveis, agendas ocultas devem ser evitadas e a informação deve ser compartilhada o máximo possível.\" Ref. 5.24",
      "A supercomplexidade das soluções é abordada no princípio \"manter de forma simples e prática\", e não no \"começar de onde você está”. \"Para evitar a \u0027armadilha da construção\u0027, onde cada vez mais funcionalidades são criadas, supercomplicando os produtos, as organizações devem manter o foco no valor e seus produtos e serviços simples e práticos.” Ref. 5.2.6",
      "Isso tem a ver com o princípio de \"progredir iterativamente com feedback”, que afirma que “buscar e usar feedback antes, durante e depois de cada iteração garantirá que as ações sejam focadas e apropriadas, mesmo em circunstâncias de mudança.” Ref. 5.2.3.1",
      "Ao aprimorar produtos ou serviços, começar do zero raramente é uma boa ideia. A abordagem de remover completamente o que foi feito \"pode ser um grande desperdício, não apenas em termos de tempo, mas também em termos da perda de serviços, processos, pessoas e ferramentas existentes que poderiam ter um valor significativo no esforço de melhoria. Não comece de novo sem primeiro considerar o que já está disponível para ser aproveitado.\" Ref. 5.2.2"
    ],
    [
      "Embora não seja necessário que todas as opiniões dos stakeholders concordem, é importante trabalhar “eficazmente com os outros, coordenando tarefas, gerindo conflitos dentro de um grupo, partilhando ideias e respeitando opiniões diversas”. Além disso, o \"feedback\", que “é a informação sobre as reações e opiniões dos stakeholders, utilizada como base para melhoria”, não pode ser uniforme. Ref. 2.2.4, 5.2.3.1",
      "Uma resposta mais rápida às necessidades do cliente é um dos benefícios de a incorporar ciclos de feedback. “Trabalhar de forma iterativa, com tempo limitado e com ciclos de feedback incorporados ao fluxo de og trabalho permite: [...] respostas mais rápidas às o k \u0027 Pega « necessidades do cliente e de negócio.” Ref. 5.2.3.2",
      "A detecção precoce de problemas é um dos benefícios da incorporação de ciclos de feedback. Trabalhar em iterações com prazos definidos e ciclos de feedback permite flexibilidade, respostas mais rápidas às necessidades, detecção precoce de falhas e melhoria da qualidade geral. \"Trabalhar de forma iterativa, com prazos definidos e ciclos de feedback incorporados ao fluxo de trabalho, permite: [...] a capacidade de detectar e responder a falhas mais cedo.\" Ref. 5.2.3.2",
      "Mudança nas prioridades é comum ao progredir iterativamente com feedback e, enquanto “a iteração está sendo realizada, as circunstâncias podem mudar, novas prioridades podem surgir e a necessidade da iteração pode ser alterada ou até mesmo eliminada. Obter e usar feedback antes, durante e após cada iteração garantirá que as ações sejam focadas e apropriadas, mesmo que as circunstâncias mudem.\" o papel da liderança “focar no valor, estando preparada para ajustar prioridades e manter-se alinhada com a visão geral”. Ref. 5.2.3.1, 2.2.2"
    ],
    [
      "Embora possa parecer que lidar com toda exceção melhora o gerenciamento de risco, \"manter de forma simples e prática\" diz que isso leva à complicação excessiva. “Tentar fornecer uma solução para cada exceção geralmente levará à supercomplicação” e isso, por sua vez, provavelmente levaria a um controle de risco mais fraco, e não mais forte. Ref. 5.2.6",
      "\"Tentar fornecer uma solução para cada exceção muitas vezes levará a complicações excessivas. Ao criar um produto ou uma prática, os designers precisam pensar nas exceções, mas não podem dar conta de todas elas. Em vez disso, devem ser criadas regras que possam ser usadas para lidar com exceções em geral.\" Ref. 5.2.6",
      "Um fluxo de trabalho não cria resultados, ele cria produtos. \"Ter um ciclo de feedback apropriado entre os participantes de uma atividade proporciona a eles uma melhor compreensão de onde seu trabalho vem e para onde seus resultados vão. Também os ajuda a ver como suas ações e saídas afetam os resultados, o que, por sua vez, os capacita a tomar melhores decisões.\" Ref. 5.2.3.2",
      "O oposto é geralmente verdadeiro: as pessoas devem ser empoderadas por confiança, autonomia e recursos. Isso tende a ser mais efetivo que procedimentos e controles excessivamente complicados, especialmente em situações complexas. Ref. 5.2.6.2"
    ],
    [
      "\"Além de estar ciente dos Princípios N Orientadores do ITIL, também é importante reconhecer que eles interagem entre si e dependem uns dos outros. Por exemplo, se uma organização está comprometida em progredir de forma iterativa com feedback, ela também deve pensar e trabalhar de maneira holística para garantir que cada iteração de uma melhoria inclua todos os elementos necessários para entregar resultados reais. Da mesma forma, fazer uso do feedback apropriado é fundamental para a colaboração e ter foco no que realmente será valioso para o cliente facilita manter as coisas simples e práticas.\" Ref. 5.2.8",
      "\"As organizações não devem utilizar apenas um ou dois dos princípios, mas devem considerar a relevância de cada um deles e como eles se complementam. Não há uma ordem ou hierarquia particular para esses princípios; eles são igualmente importantes para o ITIL VS.\" Ref. 5.2.8",
      "Os princípios não seguem uma ordem rígida. \"As organizações não devem utilizar apenas um ou dois dos princípios, mas devem considerar a relevância de cada um deles e como eles se complementam. Não há uma ordem ou hierarquia particular para esses princípios; eles são igualmente importantes para o ITIL VS.\" Ref, 5.2.8",
      "\"As organizações não devem utilizar apenas um ou dois dos princípios, mas devem considerar a relevância de cada um deles e como eles se complementam. Não há uma ordem ou hierarquia particular para esses princípios; eles são igualmente importantes para o ITIL VS.\" Ref. 5.2.8"
    ],
    [
      "\"Toda organização é dirigida por um órgão de governança, ou seja, uma pessoa ou grupo de pessoas que são responsáveis, no mais alto nível, pelo desempenho e conformidade da organização.\" Ref. 5.3.1",
      "As operações diárias são conduzidas pela administração, não pela governança. O órgão regulador fornece a direção, mas a execução é delegada. O órgão governante está preocupado com a direção estratégica, supervisão, conformidade e responsabilidade final. Além disso, são as práticas de Gerenciamento que “capacitam e apoiam as atividades da cadeia de valor.” Ref. 5.4.1",
      "Os detalhes técnicos dos produtos digitais são de responsabilidade das equipes operacionais e técnicas, e não do órgão regulador. O órgão governante está preocupado com a direção a estratégica, supervisão, conformidade e 28 responsabilidade final. \"Se o propósito de uma organização de tecnologia interna é \u0027apoiar o gé negócio principal da empresa com soluções de « tecnologia eficazes e eficientes”, e produtos e serviços digitais críticos para o negócio são desenvolvidos e entregues internamente, então a organização de tecnologia interna provavelmente assumirá a responsabilidade por todas as atividades de gerenciamento de produtos e serviços digitais.\" Ref. 5.4.2.1",
      "O foco exclusivo em relatórios financeiros é muito restrito. Embora a responsabilidade final financeira faça parte da governança, ela também abrange conformidade, risco, uso de tecnologia digital, investimento estratégico e valor para o stakeholder. \"O órgão de governança é responsável pela conformidade da organização com as políticas e quaisquer regulamentações externas. A governança do uso da tecnologia digital é uma parte importante da governança corporativa.\" Ref. 5.3.1"
    ],
    [
      "O \"ajuste estratégico” “das ofertas de produtos e serviços da organização\" é uma métrica de sucesso da atividade de “descoberta”. Ref. 4.2.1 e Tabela 4.1",
      "A relevância de mercado é uma métrica de sucesso da atividade de \"descoberta\": “relevância de mercado dos produtos e ofertas de serviços, satisfação dos stakeholders com os produtos e ofertas de serviços; sucesso comercial dos produtos (se aplicável). Ref. 4.2.2.",
      "“O desempenho do Serviço em relação às metas de SLA acordadas” é uma métrica chave da atividade de \u0027entrega”. As métricas-chave de sucesso da atividade de \"descoberta\" são: “adequação estratégica dos produtos e ofertas de serviço da organização; relevância de mercado dos produtos e ofertas de serviço; satisfação dos stakeholders com produtos e ofertas de serviço; sucesso comercial dos produtos (se aplicável).” Ref. 4.8.2, Tabela 4.7,4.2.2, Tabela 4.1",
      "\u0027Satisfação dos stakeholders\u0027 “com produtos e ofertas de serviço” é uma das métricas de sucesso da “atividade de descoberta! Ref. 4.2.1 e Tabela 4.1"
    ],
    [
      "O serviço digital é \"um serviço que depende total ou amplamente de produtos digitais.\" Ref. 3.1.2",
      "Isso se assemelha à definição de produto digital: \"produto digital é uma combinação de recursos de uma organização baseados em tecnologia digital e projetados para oferecer valor aos consumidores.\" Ref. 3.1.2",
      "A transferência de bens é uma forma 5d de interação de serviço: \"exemplos incluem entrega E ê de bens, treinamento de usuários, consultas e assim por diante. Essa forma de interação de serviço é N muito comum em diversas indústrias, como hotelaria, educação, transporte e muitas outras.\" Ref. 3.1.2",
      "Um catálogo de serviços não é um serviço. Pode fazer parte do gerenciamento de catálogo de serviço. Ref. Glossário"
    ],
    [
      "Um \"fluxo de valor\" é \"uma série de etapas que uma organização utiliza para criar e entregar produtos e serviços aos consumidores de serviços.\" Ref. 2.3.1",
      "A \"cadeia de valor” permite e apoia os fluxos de valor; além disso, \"a melhoria contínua dos fluxos de valor é alcançada indiretamente pela melhoria da cadeia de valor e das práticas de gerenciamento.\" Ref. 6.4",
      "Modelo operacional é \"uma representação conceitual e/ou visual de como uma organização cocria valor com seus clientes e outros stakeholders, bem como de como a organização se gerencia.\" Ref. 5.4.1",
      "O propósito da organização descreve \"o que uma organização faz por seus consumidores e outros stakeholders e porquê.\" Ref. 5.4.1"
    ],
    [
      "“Estratégia financeira” faz parte da atividade de \"aquisição\", que inclui \"gerenciamento, de fornecedores, gerenciamento financeiro de serviço e gerenciamento de ativos de TI\", Ref. 4.4.2",
      "Um \"modelo operacional\" é \"uma representação conceitual e/ou visual de como uma organização cocria valor com seus clientes e outros stakeholders, bem como de como a organização se gerencia.\" Ref. 5.4.1",
      "Uma \"cadeia de valor\" é um “conjunto completo de atividades que geram valor por meio do fornecimento de um produto ou serviço\", enquanto um \"modelo operacional\" \"é uma representação conceitual e/ou visual de como uma organização cocria valor com seus clientes e outras partes interessadas, bem como de como a organização se gerencia.” Ref. 2.3.1, 5.4.1",
      "Um \"modelo operacional\" é \"uma representação conceitual e/ou visual de como uma organização cocria valor com seus clientes e outros stakeholders, bem como de como a organização se gerencia.\" Ref. 5.4.1"
    ],
    [
      "Um \"fluxo de valor\" é \"uma série de etapas que uma organização utiliza para criar e entregar produtos e serviços aos consumidores de serviços.” Ref. 2.3.1",
      "Uma \"prática de gerenciamento\" é 28 \"um conjunto de recursos e capacidades organizacionais projetados e adotados para o realizar um trabalho ou atingir um objetivo.\" 4 Ref.5.5",
      "Trata-se do “modelo operacional\", que é \"uma representação conceitual e/ou visual de como uma organização cocria valor com seus clientes e outros stakeholders, bem como de como a organização se gerencia.\" Ref. 5.4.1",
      "Esta é a cadeia de valor: “um conjunto de atividades interconectadas que uma organização realiza para criar e entregar produtos ou serviços valiosos aos seus consumidores e para facilitar a realização de valor.” Ref. 5.1"
    ],
    [
      "capacidade contém uma “descrição dos níveis de capacidade de acordo com o Modelo de Maturidade ITIL; critérios de capacidade para a prática; capacidade da prática.” Ref. 5.5.1, Tabela 5.3",
      "Informações gerais\u0027 abrange “propósito e descrição; termos e conceitos-chave; escopo; fatores de sucesso da prática; métricas- chave.” Ref. 5.5.1, Tabela 5.3",
      "O aspecto de \"organizações e pessoas\" de um Guia de Prática Oficial do ITIL descreve \"funções, competências e responsabilidades”, bem como “soluções organizacionais e equipes (específicas da prática)”. Ref. 5.5.1, Tabela 5.3",
      "\"Parceiros e fornecedores\" abrange \"dependências da prática em relação a terceiros\" e \"suporte de terceiros\". Ref. 5.5.1, Tabela 5.3"
    ],
    [
      "\"Cada iniciativa de melhoria deve apoiar as metas e objetivos da organização. O primeiro passo do modelo de melhoria contínua é definir a visão da iniciativa. Isso fornece contexto para todas as decisões subsequentes e vincula as ações individuais à visão do futuro da organização.\" Ref. 5.6.1.1",
      "No \"onde estamos agora\" passo do ITIL Modelo de Melhoria Contínua, a organização avalia os produtos e serviços existentes. \"Dependendo do dos produtos e serviços existentes, incluindo a percepção do usuário sobre o valor recebido, as competências e habilidades das pessoas, os fluxos de trabalho envolvidos, as informações disponíveis e as capacidades das soluções tecnológicas disponíveis.\" Ref. 5.6.1.2",
      "No passo \"aja!\" do Modelo de Melhoria Contínua do ITIL, “o plano para a melhoria é colocado em prática. As ações e experimentos acordados podem ser conduzidos em sequência, simultaneamente ou independentemente.\" Ref. 4",
      "Na etapa “onde queremos estar” do Modelo de Melhoria Contínua do ITIL, a organização define (Ponto B) “o estado alvo para a próxima N etapa da jornada” e como ele “deve ser\". Uma etapa da jornada não pode ser planejada se o destino, ou pelo menos a direção, não estiver claro. Ref. 5.6.1.3"
    ],
    [
      "Este é um dos passos no mapeamento do fluxo de valor. O mapeamento do fluxo de valor inclui as seguintes etapas: “identificação do fluxo de valor; mapeamento do fluxo de valor \u0027como está\u0027; análise do fluxo de valor; mapeamento do fluxo de valor \u0027futuro\u0027; planejamento e implementação de melhorias.” Ref. 6.3",
      "Este é um dos passos no mapeamento do fluxo de valor. O mapeamento do fluxo de valor inclui as seguintes etapas: “identificação do fluxo de valor; mapeamento do fluxo de valor \u0027como está\u0027; análise do fluxo de valor; mapeamento do fluxo de valor futuro\u0027; planejamento e implementação de melhorias.” Ref. 6.3",
      "Este é um dos passos no mapeamento do fluxo de valor. O mapeamento do fluxo de valor inclui as seguintes etapas: “identificação do fluxo de valor; mapeamento do fluxo de valor \u0027como está\u0027; análise do fluxo de valor; mapeamento do fluxo de valor futuro”, planejamento e implementação de melhorias.” Ref. 6.3",
      "Este não é um passo no mapeamento do fluxo de valor. “O Mapeamento do fluxo de valor inclui as seguintes etapas: identificação do a fluxo de valor; mapeamento do fluxo de valor \u0027como está”; análise do fluxo de valor; mapeamento do fluxo de valor “futuro”; og planejamento e implementação de melhorias.” \u0026 O propósito da organização é um termo geral que descreve “o que uma organização faz por seus consumidores e outras partes interessadas e por quê”. Ref. 6.3 e Glossário"
    ],
    [
      "Oferta de serviços é uma descrição formal de um ou mais serviços, cujo design atende às necessidades de um grupo de consumidores- alvo. Uma oferta de serviços pode incluir bens, acesso a recursos e ações de serviço. Ref. 3.1.2",
      "Esta é a definição de acesso a recursos: \"o consumidor de serviços ganha acesso aos recursos do provedor de serviços e os utiliza de acordo com os termos e condições acordados.\" Ref. 3.122",
      "\"Produtos digitais são uma combinação dos recursos de uma organização baseada em tecnologia digital e projetada para oferecer valor aos consumidores.\" Ref. 4.5.1",
      "Esta é a definição de ações de serviço: \"ações realizadas por um provedor de serviços ou em conjunto por um provedor de serviços e um consumidor de serviços.\" Ref. 3.1.2"
    ],
    [
      "“Número e impacto de incidentes e desvios de desempenho” é uma métrica chave de sucesso na atividade de “operação”. Ref. 4.7.2, Tabela 4.6",
      "As métricas-chave da atividade de \"aquisição\" são: \"qualidade dos recursos e serviços; tempo de ciclo de aquisição; aderência ao roadmap do produto e outras diretrizes relevantes; satisfação dos stakeholders com a atividade de \u0027aquisição\u0027, prazos e recursos adquiridos.\" Ref. 4.4.2, Tabela 4.3",
      "“O desempenho do Serviço em relação às metas de SLA acordadas” é uma métrica chave de sucesso na atividade de “entrega”. Ref. 4.8.2, Tabela 47",
      "O impacto negativo dos incidentes nos usuários é processado na atividade de \u0027suporte\u0027. Ref. 4.9.3"
    ],
    [
      "O oposto é verdadeiro: \"Serviços digitais são sempre baseados em produtos digitais. Produtos oferecem capacidades, enquanto as ofertas de serviço descrevem o valor potencial que eles oferecem aos clientes.\" Ref. 3.1.2",
      "\"Serviços digitais são sempre baseados em produtos digitais. Produtos oferecem capacidades, enquanto as ofertas de serviço descrevem o valor potencial que eles oferecem aos clientes.\" Ref. 3.1.2",
      "Serviços e produtos digitais são interdependentes: serviços digitais são baseados em produtos digitais. Os produtos oferecem capacidades, enquanto as ofertas de serviço descrevem o valor potencial oferecido aos clientes. Ref. 3.1.2",
      "Ações de serviço são um conceito separado, Elas são \"uma ação realizada por um provedor de serviços ou, conjuntamente, por um provedor de serviços e um consumidor de serviços. O atendimento de requisições de serviços é uma forma comum de ações de serviço.\" Ref. 3.1.2"
    ],
    [
      "\"Organizações\" constituem uma das Quatro Dimensões do Gerenciamento de Produtos e Serviços. Ref. 2.1, Figura 1.4",
      "Patrocinador é o \"papel que autoriza o orçamento para o consumo de serviços.” Ref. 321",
      "\"Cliente\" é \"o papel que define os requisitos para produtos e serviços e assume a responsabilidade pelos resultados do consumo desses serviços.\" Ref. 3.2.1.1",
      "O provedor de serviços assume a responsabilidade pela saída dos bens e serviços, não pelos resultados. Ref. 3.1.1.1"
    ],
    [
      "O \"foco típico\" da \"relação básica\" é “suporte e eficiência”. Ref. 3.2.2, Tabela 3.1",
      "O \"foco típico\" do \"relacionamento cooperativo\" é \"melhoria e efetividade\". Ref. 3.2.2, Tabela 3.1",
      "O \u0027foco típico\u0027 do \u0027relacionamento colaborativo! é \"inovação e crescimento\", Ref. 3.2.2, Tabela 3.1",
      "Um \"relacionamento de parceiro\" é outro nome para \"colaborativo\" e seu foco é \"Inovação e crescimento\", não suporte e eficiência. Ref. 3.2.2, Tabela 3.1"
    ],
    [
      "A faixa de visibilidade é a soma dos aspectos das organizações consumidoras de serviços que são visíveis ao provedor de serviços e dos aspectos das organizações provedoras de serviços que são visíveis ao consumidor de serviços. Ref. 3.2.3, Figura 3.4",
      "A visibilidade não é exclusiva dos modelos de serviço digital baseados em tecnologia, mas é \"a soma dos aspectos das organizações de consumidor de serviços visíveis para o provedor de serviços, e os aspectos das organizações de provedor de serviços visíveis para o consumidor de serviços.” Ref. 3.2.3, Figura 3.4",
      "A \"faixa de visibilidade\" é \"a soma dos aspectos das organizações consumidoras de serviços que são visíveis ao provedor de serviços e dos aspectos das organizações provedoras de a serviços que são visíveis ao consumidor de 28 serviços.\" Ref. 3.2.3, Figura 3.4",
      "A visibilidade não está relacionada aos gé prazos do contrato. Ela é \"a soma dos aspectos das « organizações consumidoras de serviços visíveis para o provedor de serviços, e os aspectos das organizações provedoras de serviço visíveis para o consumidor de serviços.\" Ref. 3.2.3, Figura 3.4"
    ],
    [
      "Desenvolver e realizar testes faz parte da atividade de \"construção\": \"o propósito da atividade de \u0027construção\u0027 é desenvolver, integrar e realizar testes em produtos digitais, transformando designs em soluções funcionais.\" Ref. 4.5.1",
      "O objetivo da atividade de \"aquisição\" é \"garantir e alocar os recursos necessários de forma eficiente, assegurando a sustentabilidade e a escalabilidade de produtos e serviços.\" Ref. 4.4.1",
      "O objetivo da atividade de \"descoberta\" é \"garantir o alinhamento contínuo dos roadmaps de produtos e das ofertas de serviços relacionadas com as necessidades dos consumidores de serviços e com a estratégia organizacional.\" Ref. 4.2.1",
      "Manter e monitorar produtos digitais é o propósito da atividade de \u0027operação\": \"o propósito da atividade de \u0027operação\u0027 é manter e monitorar produtos digitais e sistemas de suporte, garantindo desempenho ideal e confiabilidade.\" Ref. 4.7.1"
    ],
    [
      "\"A finalidade da atividade de \u0027design\u0027 écriar protótipos e especificações para produtos e serviços, detalhando sua funcionalidade, Experiência do Usuário (UX) e framework operacional.\" Ref. 4.3.1",
      "\"O objetivo da atividade de \u0027entrega\u0027 é fornecer serviços aos usuários, gerenciar o onboarding/offboarding de usuários, manter os padrões de qualidade de serviço e coletar o feedback dos consumidores.\" Ref. 4.8.1",
      "\"O objetivo da atividade de \u0027suporte\u0027 é identificar e resolver incidentes, cumprir procedimentos de recuperação de desastre e coletar o feedback do consumidor.\" Ref. 4.9.1",
      "\"A finalidade da atividade de \u0027transição\u0027 é introduzir de forma fluida produtos novos ou atualizados em ambientes operacionais e garantir o onboarding/offboarding eficaz de fornecedores.\" Ref. 4.6.1"
    ],
    [
      "Isso descreve a atividade de \"suporte\": \"o objetivo da atividade de \u0027suporte\u0027 é identificar e resolver incidentes, cumprir procedimentos de recuperação de desastre e coletar o feedback do consumidor.” Ref. 4.9.1",
      "\"O objetivo da atividade de \"aquisição\" é garantir e alocar os recursos necessários de forma eficiente, assegurando a sustentabilidade e a escalabilidade de produtos 4 paid E) e serviços.\" Ref. 4.4.1",
      "A provisão de serviços é o objetivo ca principal da atividade \u0027entrega\u0027: \"O propósito da atividade \u0027entrega\u0027 é fornecer serviços aos usuários, N gerenciar a integração/desligamento de usuários, manter os padrões de qualidade de serviço e coletar o feedback dos consumidores.\" Ref. 4.8.1",
      "A criação de protótipos funcionais para testes é o objetivo principal da atividade de \u0027design\u0027: \"o propósito da atividade de \u0027design\u0027 é criar protótipos e especificações para produtos e serviços, detalhando sua funcionalidade, experiência do usuário e estrutura operacional.\" Ref. 4.3.1"
    ],
    [
      "\"Transição\" tem a ver com a integração e desligamento de fornecedores: \"o objetivo da atividade de \u0027transição\u0027 é introduzir novos ou atualizados produtos em ambientes operacionais de forma contínua e garantir a integração/desligamento efetivo de fornecedores.” Ref. 4.6.1",
      "A atividade “operação” mantém o desempenho do sistema: \"o objetivo da atividade de \"operação\" é manter e monitorar produtos digitais e sistemas de suporte, garantindo desempenho e confiabilidade ideais.\" Ref. 4.7.1",
      "\"O objetivo da atividade de \u0027suporte\u0027 é identificar e resolver incidentes, cumprir procedimentos de recuperação de desastre e coletar o feedback do consumidor.\" Ref. 4.9.1",
      "A finalidade da atividade de \"design\" é “criar protótipos e especificações para produtos e serviços, detalhando sua funcionalidade, Experiência do Usuário (UX) e framework operacional.\" Ref. 4.3.1"
    ],
    [
      "A \"especificação de produto/serviço\" é um \"documento detalhado que descreve aspectos críticos, requisitos e características de um produto ou serviço a ser desenvolvido. Inclui tipicamente descrições das características do produto ou serviço, funcionalidades, requisitos técnicos, critérios de desempenho e detalhes da interface do usuário.\" Ref. 4.3.1",
      "Refere-se a um “protótipo de produto”, que é uma \"criação inicial de um produto ou serviço que demonstra sua forma básica, funcionalidade e capacidades operacionais. É usado para testar e refinar o design e a funcionalidade do produto ou serviço, além de testar hipóteses.\" Ref. 4.3.1",
      "Trata-se de confiabilidade, não de especificação: \"confiabilidade é a capacidade de um produto, serviço ou outro item de configuração de desempenhar a função a que se destina durante o a período ou número de ciclos especificado.\" Ref. 4741",
      "Trata-se de integração contínua, não de especificação: \"integração contínua é um o conjunto de técnicas e ferramentas que permite aos « desenvolvedores integrar frequentemente suas alterações de código em um repositório central, seguido por builds e testes automatizados.\" Ref. 4.5.2"
    ],
    [
      "Isto é um \"evento\", não um incidente: \"evento\" é \"qualquer mudança de estado que tenha significado para o gerenciamento de um produto, serviço ou outro item de configuração.\" Ref. 4.7.2",
      "Um \"incidente\" é \"uma interrupção não planejada ou redução na qualidade de um serviço.\" Ref. 4.7.2",
      "Isso define um \"problema\" que é \"uma causa, ou causa potencial, de um ou mais incidentes.\" Ref. 4.9.1",
      "Isso define erro: \"uma falha ou vulnerabilidade que pode causar incidentes.\" Ref. 4.91"
    ],
    [
      "“DevOps é uma abordagem complementar valiosa que deve ser usada como fonte de recomendação prática detalhada, permitindo tais atividades do Produto e Ciclo de Vida do Serviço ITIL”, explicando que o ITIL fornece a estrutura enquanto o DevOps oferece práticas e técnicas. Ref. 7.3.1",
      "“DevOps é uma abordagem complementar valiosa” indica que DevOps não é substituído, mas usado em conjunto com o ITIL. Ref. 7341",
      "“As práticas de DevOps [...] possibilitam atividades do Ciclo de Vida do Produto e do Serviço ITIL, como \u0027descoberta\u0027, \u0027design, “aquisição”, \u0027construção”, \u0027transição\u0027 e \u0027operação\u0027.” mostra que o DevOps não se limita apenas ao desenvolvimento. Ref. 7.3.1",
      "\"O ITIL fornece a estrutura para um gerenciamento de produtos e serviços digitais efetivo” esclarece que a governança é fornecida pelo ITIL, não pelo DevOps. Ref. 7.3"
    ],
    [
      "O Modelo de Capacidade de IA não é um padrão de benchmarking ou norma de conformidade. \"O modelo fornece uma classificação funcional das soluções de IA.\" Ref. 2.4.1.1",
      "O Modelo de Capacidades de IA do ITIL é um modelo de classificação funcional que ajuda as organizações a entender como a IA pode ser aplicada, comunicar seu uso e melhorar a governança e a capacidade. \"O modelo fornece uma classificação funcional das soluções de IA. Ajuda a entender e comunicar a gama de possíveis aplicações da IA. Também pode aprimorar a governança de IA ao ajudar as 4 organizações a adaptar perfis de risco, controles so e contramedidas às funções específicas das soluções de IA [...]\". Ref. 2.4.1.1",
      "O modelo apoia as decisões de N governança, mas não as automatiza. “Também pode aprimorar a governança de IA, ajudando as organizações a adaptar perfis de risco, controles e contramedidas [...].” Ref. 2.4.1.1",
      "Priorização financeira ou análise de ROI não é o propósito do modelo. \"O modelo fornece uma classificação funcional das soluções de IA.\" Ref. 2.4.1.1"
    ],
    [
      "SLAs não são contratos legais focados em penalidades, são um \"acordo documentado entre um provedor de serviços e um cliente que identifica os serviços fornecidos e o nível acordado de cada serviço.\" Ref. 3.2.5",
      "\"Acordo de Nível de Serviço (SLA)\" é \"um acordo documentado entre um provedor de serviços e um cliente que identifica os serviços fornecidos e o nível acordado de cada serviço.\" Ref. 3.2.5",
      "SLAs são acordos formais documentados, não discussões informais: \"um acordo documentado entre um provedor de serviços e um cliente que identifica os serviços fornecidos e o nível acordado de cada serviço.\" Ref. 3.2.5",
      "Os SLAs envolvem tanto provedores quanto clientes, não apenas a Tl interna. Um SLA é \"um acordo documentado entre um provedor de serviços e um cliente que identifica os serviços fornecidos e o nível acordado de cada serviço.\" Ref. 3.2.5"
    ],
    [
      "\"O Sistema de Valor do ITIL (ITIL VS) é um modelo que representa como todos os a componentes e atividades de uma organização trabalham em conjunto para facilitar a criação Ea de valor por meio de produtos e serviços gé digitais.” Ref, 5.1",
      "As atividades da cadeia de valor de \"entrega\" e \"suporte\" fazem parte da cadeia de valor. Ref. 5.1, Figura 1.7",
      "O \"focar no valor\" é um princípio que afirma que todas as “atividades realizadas pela organização devem estar ligadas, direta ou indiretamente, ao valor para si mesma, seus clientes e outras partes interessadas.” Ref. 5.2.1",
      "\"Fluxos de valor e processos\" são \"fluxos de trabalho usados pela organização para estruturar suas atividades de criação de valor.\" Ref. 541"
    ],
    [
      "A automação apoia o gerenciamento do fluxo de valor, não o mapeamento: \"esse entendimento é apoiado pela automação e medição.\" Ref. 6.4",
      "O mapeamento do fluxo de valor \"permite que as organizações identifiquem, mapeiem e analisem seus fluxos de valor, bem como identifiquem e priorizem oportunidades de melhoria.\" Ref. 6.4",
      "São as práticas de gerenciamento \"que permitem e apoiam os fluxos de valor, bem como os produtos e serviços da organização. Em muitos casos, a melhoria de uma prática de gerenciamento impacta múltiplos fluxos de valor\", não o contrário. Ref. 6.4",
      "As dependências externas não podem ser controladas diretamente, mas os acordos contratuais podem ser alterados para \"incluir mudanças nos contratos com fornecedores, formas de usar serviços externos, alterando as formas de cooperação.\" Ver Apêndice E"
    ]
  ],
  [
    [
      "Um produto é uma configuração dos recursos de uma organização projetada para oferecer valor. \"O produto digital é uma combinação dos recursos de uma organização baseada em tecnologia digital e projetada para oferecer valor aos consumidores.\" Ref. 3.1.2",
      "A ênfase está na integração, não na substituição das disciplinas de gerenciamento de serviços e produtos. \"O ITIL oferece um Modelo de Ciclo de Vida de ponta a ponta para produtos e serviços digitais, onde os conceitos de produto e serviço digital são integrados.\" Ref. 1.2",
      "Esta é a definição de um serviço, não de um produto. \"O serviço é um meio de habilitar a cocriação de valor, ao facilitar resultados que os consumidores desejam alcançar, sem que o consumidor tenha que gerenciar custos e riscos específicos.\" Ref. 3.1.1",
      "Isso tem a ver com governança e gerenciamento de segurança da informação, não com o propósito de um produto. \"Governança da tecnologia digital é um sistema de governança focado no uso atual e futuro da tecnologia digital.\" Ref. 5.3.1"
    ],
    [
      "Isso descreve processos e fluxos de 28 valor, que fazem parte da dimensão \"fluxos de valor e processos\", e não o papel de um serviço digital. o \"Um fluxo de valor é uma série de etapas que uma « organização utiliza para criar e entregar produtos e serviços aos consumidores de serviços.\" Ref. 2.3.1",
      "O propósito central de um serviço (incluindo um serviço digital) é possibilitar a cocriação de valor, ajudando os consumidores a alcançar os resultados desejados, ao mesmo tempo em que os alivia da necessidade de gerenciar certos custos e riscos. \"O serviço é um meio de habilitar a cocriação de valor, ao facilitar resultados que os consumidores desejam alcançar, sem que o consumidor tenha que gerenciar custos e riscos específicos.\" Ref. 311",
      "Serviços digitais não substituem o gerenciamento de produto. O ITIL integra o gerenciamento de produtos e serviços em uma abordagem unificada. \"O ITIL oferece um Modelo de Ciclo de Vida de ponta a ponta para produtos e serviços digitais, onde os conceitos de produto e serviço digital são integrados.\" Ref. 1.2",
      "Isso descreve a governança da tecnologia digital, que supervisiona a conformidade eo controle. \"Governança é o sistema pelo qual uma organização é dirigida e controlada.\" Ref. 5.3.1"
    ],
    [
      "No ITIL, um serviço digital depende total ou amplamente de produtos digitais. Os produtos fornecem capacidades, enquanto o serviço usa essas capacidades para permitir a cocriação de valor para os consumidores. Ref. 3.1.2",
      "Produtos apoiam serviços; eles não os eliminam. \"Produtos oferecem capacidades, enquanto as ofertas de serviço descrevem o valor potencial que eles oferecem aos clientes.\" Ref. 3.1.2",
      "Serviços digitais não se limitam à TI interna. Serviços digitais são entregues a clientes externos, usuários e organizações, em diversos setores. “Hoje, o setor de serviços desempenha um papel crucial na economia moderna [...] incluindo L..] serviços digitais.” Ref. 3.1",
      "Um serviço digital não pode existir independentemente de um produto digital, pois depende de produtos digitais para a sua função. \"Serviços digitais são sempre baseados em produtos digitais.” Ref. 3.1.2"
    ],
    [
      "Acesso a recursos se aplica quando a propriedade não é transferida e o consumidor recebe direitos de uso, como em serviços de nuvem ou equipamentos alugados. O consumidor usa os recursos do provedor conforme termos e condições acordados. Ref. 3.1.2",
      "Uma oferta de serviços é uma N descrição de serviços, não uma forma de interação. \"Oferta de serviços é uma descrição formal de um ou mais serviços, cujo design atende às necessidades de um grupo de consumidores-alvo.\" Ref. 3.1.2",
      "A impressora sendo entregue é uma transferência de bens, enquanto a manutenção eo suporte contínuos fornecidos pelo fornecedor representam ações de serviço. ITIL é definido como duas formas distintas de interação de serviço, e ambas estão presentes aqui. “Transferência de bens: alguns serviços incluem a transferência de bens de um provedor de serviços para um consumidor de serviços.\" e “Ação de Serviço: uma ação realizada por um provedor de serviços ou em conjunto por um provedor de serviços e um consumidor de serviços.” Ref. 3.1.2",
      "Embora ocorra uma transferência de bens, uma jornada de serviço descreve toda a sequência de interações ao longo do tempo, e não um tipo específico de interação. \"Jornada de serviço é a soma das atividades e interações realizadas por organizações envolvidas em relacionamentos de serviços para cumprir seus papéis como provedor de serviços e consumidor de serviços.\" Ref. 3.2.3"
    ],
    [
      "No ITIL, o acesso a recursos é uma forma específica de interação de serviço em que o consumidor de serviços utiliza os recursos do provedor de serviço sob condições acordadas. Esse acesso permite a cocriação de valor porque os consumidores podem alcançar resultados sem possuir ou gerenciar esses recursos. \"Acesso a recursos: o consumidor de serviços ganha acesso aos recursos do provedor de serviços e os utiliza de acordo com os termos e condições acordados.\" Ref. 3.1.2",
      "\u0027Acesso a recursos\u0027 não transfere a responsabilidade pela gestão dos recursos para o consumidor. Os consumidores não precisam gerenciar custos e riscos específicos relacionados a esses recursos. \"O serviço é um meio de habilitar a cocriação de valor, ao facilitar resultados que os consumidores desejam alcançar, sem que o consumidor tenha que gerenciar custos e riscos específicos.\" Ref. 3.1.1",
      "Acesso a recursos refere-se especificamente a consumidores de serviço utilizando recursos de provedores. Limitar o acesso a equipes internas impediria a cocriação de valor a com os consumidores. \"Acesso a recursos: o consumidor de serviços ganha acesso aos recursos do provedor de serviços e os utiliza de acordo com og os termos e condições acordados.\" Ref. 3.1.2",
      "Automação pode apoiar o acesso a recursos, mas o acesso a recursos não substitui as ações de serviço. Múltiplas formas de interação de serviço podem coexistir. “De acordo com a definição de oferta de serviços, existem três formas de interação entre um consumidor de serviços e um serviço: Transferência de bens [...] Ação de Serviço [..] Acesso a recursos.” Ref. 3.1.2"
    ],
    [
      "O valor não é produzido unilateralmente pelo provedor e “entregue” ao consumidor. O valor depende de como o serviço é usado e vivenciado pelo consumidor. “A cocriação de valor por meio de serviços tem duas perspectivas: é sempre uma combinação de consumo de serviço (pelo consumidor de serviços) e provisão de serviços (pelo provedor de serviços).” Ref. 3.1.1.1",
      "O valor é percebido pelo consumidor de serviços, não definido ou consumido pelo provedor. Valor consiste nos benefícios, utilidade e importância percebidos em algo. Ref. 3.1.1",
      "A cocriação de valor ocorre por meio de relacionamentos de serviço. Sem um relacionamento de serviços, o valor por meio dos serviços não pode ser realizado. Relacionamentos de serviços incluem provisão de serviços, consumo de serviços e gerenciamento de relacionamento de serviços. Ref, Glossário",
      "O valor é cocriado, ele não existe a menos que ambas as partes participem. É sempre uma combinação de consumo de serviços (pelo consumidor de serviços) e provisão de serviços (pelo provedor de serviços). Ref. 3.1.1"
    ],
    [
      "Embora custos e riscos façam parte do valor de serviço, utilidade e garantia são definidos em termos de funcionalidade e garantia. \"O valor de serviço consiste nos benefícios percebidos, na utilidade e na importância de um serviço.\" Ref. 3.1.1",
      "O ITIL aplica utilidade e garantia tanto a serviços quanto a produtos. “Utilidade é a funcionalidade oferecida por um produto ou serviço para atender a uma necessidade específica.\" e “Garantia é a garantia de que um produto ou serviço atenderá aos requisitos acordados.” Ref. 3.2.4",
      "Utilidade significa adequação ao propósito e resume o que o serviço faz. Garantia significa adequação ao uso e representa como o serviço funciona. A alternativa inverte esses dois conceitos. Ref. 3.2.4",
      "Utilidade e garantia são dois aspectos complementares do valor de serviço. Utilidade descreve o que o serviço faz (adequação à finalidade), enquanto garantia descreve como o serviço funciona (adequação ao uso). “Utilidade é a funcionalidade oferecida por um produto ou serviço para atender a uma necessidade específica.” e “Garantia pode ser resumida como \u0027como o serviço funciona\u0027 e pode ser usada para determinar se um serviço é “adequado para uso\u0027.” Ref. 3.2.4"
    ],
    [
      "O ITIL explica a cocriação de valor como um equilíbrio entre resultados, custos e riscos. O valor não é criado apenas pelos resultados; ele surge quando os resultados desejados são alcançados, enquanto os custos e riscos são otimizados de forma apropriada para o consumidor de serviços. Esses três elementos devem ser considerados em conjunto para entender se um serviço é realmente valioso. O valor de serviço consiste nos benefícios percebidos, na utilidade e na importância de um serviço. Alcançar os resultados desejados exige recursos (e, portanto, custos) e está, frequentemente, associado a riscos. Os provedores de serviços ajudam seus consumidores a alcançar resultados e, ao fazer isso, assumem alguns dos custos e riscos associados. Ref. 3.1.1",
      "Os resultados não existem independentemente dos custos e riscos. \"Alcançar os resultados desejados exige recursos (e, portanto, custos) e está, frequentemente, associado a riscos.\" Ref. 3.1.1",
      "Os resultados são essenciais para a criação de valor, enquanto os custos são um dos fatores que influenciam se o valor é percebido como positivo ou negativo. Os resultados são suportados por custos e riscos aceitáveis. \"Alcançar os resultados desejados exige recursos (e, portanto, custos) e está, frequentemente, associado a riscos.\" Ref. 3.1.1",
      "Os riscos são avaliados em relação ao seu impacto na obtenção dos resultados. Os provedores de serviços ajudam seus consumidores a alcançar resultados e, ao fazer isso, assumem alguns dos custos e riscos associados. Ref. 3.1.1"
    ],
    [
      "Uma jornada de serviço é a soma das atividades e interações entre um provedor de serviços e um consumidor de serviços ao longo a de seu relacionamento. Ele se concentra nas 28 interações, não apenas no trabalho interno ou nas fases do ciclo de vida. \"Jornada de serviço é os a soma das atividades e interações realizadas \u0026 por organizações envolvidas em relacionamentos de serviços para cumprir seus papéis como provedor de serviços e consumidor de serviços.\" Ref. 3.2.3",
      "Fluxos de trabalho e processos internos fazem parte de fluxos de valor, processos e atividades da cadeia de valor, não da jornada de serviço. A jornada de serviço inclui ambas as partes no relacionamento de serviços. Ref. 2.3.1",
      "O ciclo de vida completo de um produto é descrito pelo ITIL Produto e Modelo do Ciclo de Vida do Serviço, e não pela jornada de serviço. A jornada de serviço é focada no relacionamento, não no estágio do ciclo de vida. Ref. 2.3.1",
      "As atividades da cadeia de valor descrevem como as organizações gerenciam produtos e serviços, enquanto a jornada de serviço descreve como provedores e consumidores interagem. Eles estão relacionados, mas não são o mesmo conceito. \"A cadeia de valor é um conjunto completo de atividades que habilita a criação de valor por meio da provisão de um produto ou serviço.” Ref. 4.1"
    ],
    [
      "O cliente define os requisitos e assume a responsabilidade pelos resultados, mas não autoriza o orçamento. \"Cliente é o papel que define os requisitos para produtos e serviços e assume a responsabilidade pelos resultados do consumo desses serviços.\" Ref. 3.2.1.1",
      "O usuário consome e usa o serviço; eles não aprovam o financiamento. \"Usuário é o papel que utiliza os serviços.” Ref. 3.2.1.1",
      "O papel do patrocinador é responsável por autorizar o orçamento para o consumo de serviço. Este papel aprova o financiamento e o compromisso financeiro para o serviço. \"Patrocinador é o papel que autoriza o orçamento para o consumo de serviços.\" Ref. 3.211",
      "Um fornecedor de produtos cria e aprimora produtos digitais, mas não é um papel de consumidor de serviços e não autoriza orçamentos para consumo de serviço. Ref. 3.2.1"
    ],
    [
      "Qualidade de serviço significa preocupar-se com o quão bem um serviço satisfaz as necessidades declaradas e implícitas, que são expressas por meio de requisitos e expectativas acordados. Não se limita apenas à velocidade, ao ritmo de desenvolvimento ou à ética, mas à capacidade geral do serviço de atender ao que foi acordado e esperado. 4 A i E) Qualidade de serviço é a soma das Sm» características de um serviço que são relevantes para sua capacidade de satisfazer necessidades declaradas e implícitas. Ref. 3.2.4",
      "A velocidade da resolução de incidente é apenas um aspecto do gerenciamento de serviços e não define, por si só, a qualidade de serviço. Faz parte do desempenho do suporte, não do escopo total da qualidade de serviço. Esta opção se refere às métricas de gerenciamento de incidentes e suporte operacional. \"Um incidente é uma interrupção não planejada ou redução na qualidade de um serviço.\" Ref. 4.7.2",
      "A velocidade de desenvolvimento de um serviço está relacionada ao desenvolvimento de produto, à eficiência do ciclo de vida ou à velocidade organizacional, e não diretamente à qualidade de serviço percebida pelos consumidores. Qualidade de serviço é a soma das características de um serviço que são relevantes para sua capacidade de satisfazer necessidades declaradas e implícitas. Ref. 3.2.4",
      "A responsabilidade social é abordada no âmbito da sustentabilidade, que é um componente dos níveis de serviço, mas não define a qualidade de serviço por si só. Sustentabilidade é a garantia de que um produto ou serviço atende e continuará a atender aos requisitos de gerenciamento ambiental, progresso social e crescimento econômico. Ref. 3.2.4"
    ],
    [
      "Uma especificação do produto descreve o que um produto ou serviço deve ser construído para fazer, não como a qualidade de serviço será acordada, medida ou revisada durante a entrega de serviços. Esta opção refere-se às atividades de “design” e “construção”. \"A especificação de produto/serviço é um documento detalhado que descreve aspectos críticos, requisitos e características de um produto ou serviço a ser desenvolvido.\" Ref. 4.3.1",
      "Um Acordo de Nível de Serviço (SLA) é o mecanismo comum usado para estabelecer um entendimento compartilhado entre um provedor de serviços e um cliente em relação à qualidade de serviço esperada e alcançada. Ele formaliza qual nível de serviço é esperado e como ele será medido e gerenciado. \"A forma comum de estabelecer um entendimento compartilhado da qualidade de serviço esperada e alcançada e de gerenciar a melhoria do serviço é um Acordo de Nível de Serviço (SLA).\" Ref. 3.2.5",
      "Os roadmaps descrevem a direção futura e as melhorias planejadas. Eles se relacionam a com planejamento e priorização, especialmente em atividades de \"descoberta\" e \"design\". “Os principais resultados desta atividade incluem um roadmap de og produto atualizado e iniciativas de melhoria do \u0026 serviço.” Ref. 4.2.1",
      "Os requisitos de Nível de Serviço são entradas para o design e os acordos de serviço, mas eles, por si só, não estabelecem um entendimento compartilhado, a menos que sejam formalizados em um SLA. \"Acordo de Nível de Serviço (SLA) é um acordo documentado entre um provedor de serviços e um cliente que identifica os serviços fornecidos e o nível acordado de cada serviço.\" Ref. 4841"
    ],
    [
      "A dimensão de \"informação e tecnologia\" no ITIL foca nos dados, informações e tecnologias que suportam produtos e serviços digitais e os sistemas de gerenciamento por trás deles. Esta dimensão garante que as capacidades tecnológicas e os ativos de informação certos estejam disponíveis para permitir o gerenciamento de serviços de produto efetivo. \"A dimensão \u0027informação e tecnologia\u0027 aborda dados, informações e tecnologias utilizados em produtos e serviços digitais, bem como aqueles utilizados como parte dos sistemas de gerenciamento de produtos e serviços da organização.\" Ref. 2.4",
      "A definição de papéis, responsabilidades, habilidades e estruturas pertence à dimensão de \"organizações e pessoas\". \"Ela garante que a forma como uma organização é estruturada e gerenciada, bem como os seus papéis, responsabilidades e sistemas de autoridade e comunicação, esteja bem definida e apoie a sua estratégia geral e modelo operacional.\" Ref. Glossário",
      "Fluxos de trabalho, processos e atividades são abordados na dimensão de \"fluxos de valor e processos”. Eles se referem a como o trabalho é estruturado e executado em todos os fluxos de valor. \"A dimensão \u0027fluxos de valor e processos! aborda os fluxos de trabalho organizacionais e interorganizacionais, focando nas atividades que a organização realiza e como elas são organizadas para habilitar valor para os stakeholders de forma eficaz e eficiente.\" Ref. 2.3.1",
      "Gerenciar fornecedores e parceiros externos é o foco da dimensão \"parceiros e fornecedores\". Esta opção descreve os relacionamentos e contratos com fornecedores. \"A dimensão \u0027parceiros e fornecedores\u0027 abrange os relacionamentos de uma organização com outras organizações envolvidas na descoberta, design, construção, transição, operação, entrega, suporte e/ou melhoria contínua de produtos e serviços.\" 4 Ref. 2.5"
    ],
    [
      "A dimensão \"parceiros e fornecedores\" aborda como uma organização gerencia seus relacionamentos com N organizações externas que contribuem para a descoberta, design, entrega, suporte e melhoria de produtos e serviços. \"A dimensão \u0027parceiros e fornecedores\u0027 abrange os relacionamentos de uma organização com outras organizações envolvidas na descoberta, design, construção, transição, operação, entrega, suporte e/ou melhoria contínua de produtos e serviços.\" Ref. 25",
      "A dimensão \"informação e tecnologia\" foca em dados, informações e tecnologia, e como eles dão suporte a produtos e serviços. \"A dimensão \u0027informação e tecnologia! aborda dados, informações e tecnologias utilizados em produtos e serviços digitais, bem como aqueles utilizados como parte dos sistemas de gerenciamento de produtos e serviços da organização.” Ref. 2.4",
      "\u0027Organizações e Pessoas\u0027 foca na estrutura interna, cultura, papéis e competências. Ela \"garante que a forma como uma organização é estruturada e gerenciada, bem como os seus papéis, responsabilidades e sistemas de autoridade e comunicação, esteja bem definida e apoie a sua estratégia geral e modelo operacional.\" Ref. Glossário",
      "\"A dimensão \u0027fluxos de valor e processos! aborda os fluxos de trabalho organizacionais e interorganizacionais, focando nas atividades que a organização realiza e como elas são organizadas para habilitar valor para os stakeholders de forma eficaz e eficiente.\" Ref. 2.3"
    ],
    [
      "As ferramentas para monitoramento fazem parte da dimensão de \"informação e tecnologia\" e de práticas de gerenciamento específicas, não da dimensão de \"fluxos de valor e processos\". \"A dimensão \u0027informação e tecnologia\" aborda dados, informações e tecnologias utilizados em produtos e serviços digitais, bem como aqueles utilizados como parte dos sistemas de gerenciamento de produtos e serviços da organização.\" Ref. 2.4",
      "A dimensão \"fluxos de valor e processos\" se preocupa com a forma como os fluxos de trabalho se desenvolvem nas atividades e como essas atividades são organizadas e coordenadas para gerar valor para as partes interessadas. \"Um fluxo de valor é uma série de etapas que uma organização utiliza para criar e entregar produtos e serviços a aos consumidores de serviços.\" Ref. 2.3.1",
      "Hierarquias Organizacionais e estruturas de subordinação pertencem à dimensão os de \"organizações e pessoas\", não a \"fluxos de valor \u0026 e processos\". A dimensão \"Organizações e Pessoas\" foca em como “uma organização é estruturada e gerenciada, incluindo papéis, responsabilidades e sistemas de autoridade e comunicação.” Ref. Glossário",
      "Acordos e contratos com fornecedores pertencem à dimensão de \"parceiros e fornecedores\", não à de \"fluxos de valor e processos\". \"A dimensão \u0027parceiros e fornecedores\" abrange os relacionamentos de uma organização com outras organizações envolvidas na descoberta, design, construção, transição, operação, entrega, suporte e/ou melhoria contínua de produtos e serviços.\" Ref. 2.5"
    ],
    [
      "A dimensão \"Organizações e Pessoas\" foca em garantir que a cultura, liderança, habilidades, competências e comunicação permitam que a organização trabalhe de forma eficaz e crie valor por meio de produtos e serviços. A dimensão \"Organizações e Pessoas\" foca em como “uma organização é estruturada e gerenciada, incluindo papéis, responsabilidades e sistemas de autoridade e comunicação.” Ref. Glossário",
      "Isso descreve a dimensão de \"informação e tecnologia\", “A dimensão “informação e tecnologia\u0027 aborda dados, informações e tecnologias usadas em produtos e serviços digitais.” Ref. 2.4",
      "Isso se refere à dimensão de \"parceiros e fornecedores\". \"A dimensão \u0027parceiros e fornecedores! abrange os relacionamentos de uma organização com outras organizações envolvidas na descoberta, design, construção, transição, operação, entrega, suporte e/ou melhoria contínua de produtos e serviços.\" Ref. 2.5",
      "Isso se alinha com os \"fluxos de valor e processos\". \"A dimensão de \u0027fluxos de valor e processos! aborda os fluxos de trabalho 4 E ai saia fa = organizacionais e interorganizacionais.” Ref. 2.3"
    ],
    [
      "Estes são conceitos, atividades ou práticas usadas dentro do ITIL, mas não são os componentes do Sistema de Valores do ITIL. \"O ITIL N VS inclui cinco componentes: Princípios Orientadores, Governança, Cadeia de Valor, Práticas, Melhoria Contínua.\" Ref. 1.3",
      "Embora os princípios orientadores e a governança sejam componentes do ITIL VS, \"descoberta\" e \"entrega\" são atividades da cadeia de valor, não componentes do ITIL VS. \"O Modelo de Ciclo de Vida de Produtos e Serviços ITIL inclui oito etapas do ciclo de vida: Descoberta, Design, Aquisição, Construção, Transição, Operação, Entrega e Suporte.\" Ref. 1.3",
      "Isso reflete os elementos de relacionamento entre stakeholders e serviços, não o sistema de governança e gerenciamento em si. \"O Sistema de Valor do ITIL (ITIL VS) é um modelo que representa como todos os componentes e atividades de uma organização trabalham em conjunto para facilitar a criação de valor por meio de produtos e serviços digitais.\" Ref. 5.1",
      "Isso inclui todos os cinco componentes do VS do ITIL. “O ITIL VS inclui cinco componentes: Princípios Orientadores, Governança, Cadeia de Valor, Práticas, Melhoria Contínua.” Ref. 1.3"
    ],
    [
      "Isso enfatiza a simplificação e a praticidade, não a iteração. \"Sempre procure minimizar o número de etapas para atingir um objetivo.\" Ref. 5.2.6",
      "Este princípio trata de entender quem é o consumidor de serviços e o que ele valoriza. \"Todas as atividades conduzidas pela organização devem ter, de forma direta ou indireta, um retorno de valor para si mesma, seus clientes e outros stakeholders.\" Ref. 5.2,1",
      "O cenário descreve o lançamento do trabalho em pequenos incrementos, a coleta de feedback e o ajuste de iterações futuras. \"As iterações de gerenciamento de produtos e serviços podem ser sequenciais ou simultâneas, com múltiplos ciclos de feedback entre elas.\" Ref. 5.2.3",
      "Isso foca na colaboração e visibilidade do trabalho, não na entrega incremental. \"O trabalho e seus resultados devem estar visíveis, agendas ocultas devem ser evitadas e a informação deve ser compartilhada o máximo possível.\" Ref. 5.24"
    ],
    [
      "Automação não deve acontecer por si só. \"Automação pela automação pode aumentar os custos, introduzir riscos significativos e reduzir a a resiliência organizacional.\" Ref. 5.2.7",
      "Otimização deve vir antes da Ea automação. Automatizar um trabalho o ineficiente ou mal projetado apenas aumenta o « desperdício e o risco. \"Antes que uma atividade ou prática possa ser automatizada de forma eficaz, ela deve ser otimizada no grau que for razoavelmente possível.\" Ref. 5.2.7",
      "Automação não deve ser descontrolada. \"É essencial que sejam estabelecidos limites para a otimização dos serviços e práticas, pois eles existem dentro de um conjunto de restrições, que podem incluir limitações financeiras, requisitos de conformidade, restrições de tempo e disponibilidade de recursos.\" Ref. 5.2.7",
      "Isso é o oposto do que deveria acontecer. “Simplifique e/ou otimize antes de automatizar.” Ref. 5.2.7.3"
    ],
    [
      "Nenhum elemento da organização opera isoladamente, e as decisões devem considerar todo o sistema, incluindo as interações em todo o Sistema de Valor do ITIL. Nenhum produto, serviço, prática, processo, equipe ou fornecedor atua isoladamente. As saídas que a organização entrega a si mesma, a seus clientes e a outros stakeholders se deterioram, a menos que ela trabalhe de forma integrada para lidar com suas atividades como um todo, e não como elementos separados. Ref. 5.2.5",
      "Isso contradiz o princípio holístico, que enfatiza a colaboração e a conscientização em todo o sistema, em vez de isolar a responsabilidade em uma única equipe, e reflete uma abordagem fragmentada ou em silos. \"As saídas que a organização entrega a si mesma, a seus clientes e a outros stakeholders se deterioram, a menos que ela trabalhe de forma integrada para lidar com suas atividades como um todo, e não como elementos separados.\" Ref. 5.2.5",
      "Isso descreve o princípio orientador de \"focar no valor\". \"Todas as atividades conduzidas pela organização devem ter, de forma direta ou indireta, um retorno de valor para si mesma, seus clientes e outros stakeholders.\" Ref. 5.2.1",
      "Isso se alinha com o princípio orientador de \"otimizar e automatizar\". \"Antes que uma atividade ou prática possa ser automatizada de forma eficaz, ela deve ser otimizada no grau que for razoavelmente possível.\" Ref. 5.2.7"
    ],
    [
      "Colaborar e promover visibilidade enfatiza envolver as pessoas certas, compartilhar informações e tornar o trabalho visível. Isso melhora decisões, confiança, adesão e relevância; não significa atribuir melhorias a uma única equipe. Ref. 5.2.4",
      "Isso reflete o trabalho isolado e a pouca colaboração, que o ITIL identifica como prejudiciais. \"A cooperação e a colaboração são melhores do que o trabalho isolado, que é frequentemente referido como a \u0027atividade em silo!\" Ref. 5.2.4",
      "Isso descreve o princípio orientador \"começar de onde você está”, não a colaboração. “No processo de eliminar métodos, produtos ou serviços antigos e malsucedidos e criar algo melhor [...] Não recomece sem antes considerar o que já está disponível para ser aproveitado.” Ref. 5.2.2",
      "Isso descreve o princípio de \"progredir iterativamente com feedback”. \"Obter e usar feedback antes, durante e após cada iteração garantirá que as ações sejam focadas e apropriadas, mesmo que as circunstâncias mudem.\" Ref. 5.2.3"
    ],
    [
      "Isso reflete uma abordagem linear ou prescritiva, que o ITIL afirma não se aplicar aos princípios orientadores. \"Não há uma ordem ou hierarquia particular para esses princípios; eles são igualmente importantes para o ITIL VS.\" Ref. 5.2.8",
      "Princípios orientadores apoiam e guiam a tomada de decisões, mas não substituem as práticas de governança ou gerenciamento. “Trabalhando juntos, os componentes do sistema de gerenciamento devem garantir que os produtos e serviços digitais sejam gerenciados de acordo com os objetivos da organização.” Ref. 5.1",
      "Os princípios orientadores interagem e dependem uns dos outros. Além de estar ciente dos princípios orientadores do ITIL, também é importante reconhecer que eles interagem entre si e dependem uns dos outros. Ref. 5.2.8",
      "Os princípios orientadores não são isolados, nem hierárquicos, nem sequenciais. Eles devem ser usados em conjunto, com diferentes princípios se tornando mais relevantes dependendo do contexto e da situação. \"As organizações não devem utilizar apenas um ou dois dos princípios, mas devem considerar a relevância de cada um deles e como eles se complementam.\" Ref. 5.2.8"
    ],
    [
      "\u0027Avaliar foca em analisar a organização, organização, sua estratégia, portfólios e a relacionamentos com outras partes.\" Ref. 5.3.1",
      "\u0027Dirigir é sobre definir a direção e atribuir responsabilidade. \"Dirigir: o órgão de o governança atribui responsabilidade e dirige a « preparação e implementação de políticas e estratégia organizacional.\" Ref. 5.3.1",
      "“Monitorar” é a atividade que verifica se o desempenho e as atividades estão em conformidade com as políticas e a direção estratégica. \"Monitorar: o órgão de governança monitora o desempenho da organização e suas práticas, produtos e serviços.\" O órgão de governança garante que o desempenho esteja em conformidade com as políticas e a direção estratégica. Ref. 5.3.1",
      "“Descoberta” é uma atividade de gerenciamento do ciclo de vida do serviço de produto que identifica necessidades e oportunidades para produtos e serviços. \"Descoberta: explorar e priorizar as necessidades e oportunidades para o produto e serviço.” Ref. 4.1"
    ],
    [
      "O propósito da atividade de \"entrega\" inclui gerenciar como os usuários são integrados e desintegrados, como parte da prestação de serviços e da manutenção da qualidade de serviço. \"O objetivo da atividade de \"entrega! é fornecer serviços aos usuários, gerenciar o onboarding/offboarding de usuários, manter os padrões de qualidade de serviço e coletar o feedback dos consumidores.\" Ref. 4.8.1",
      "Sistemas de Monitoramento e resposta a eventos pertencem à atividade de \"operação\", que se concentra no monitoramento e na manutenção de produtos e sistemas. \"O objetivo da atividade de \u0027operação\u0027 é manter e monitorar produtos digitais e sistemas de suporte, garantindo desempenho e confiabilidade ideais.” Ref. 4.7.1",
      "Projetar protótipos faz parte da atividade de \"design\". \"A finalidade da atividade de \u0027design\u0027 é criar protótipos e especificações para produtos e serviços, detalhando sua funcionalidade, Experiência do Usuário (UX) e framework operacional.\" Ref. 4.3.1",
      "A obtenção de recursos de fornecedores faz parte da atividade de \"aquisição\". \"O objetivo da atividade de \u0027aquisição\u0027 é garantir e alocar os recursos necessários de forma eficiente, assegurando a sustentabilidade e a escalabilidade de produtos e serviços.\" Ref. 4.4.1"
    ],
    [
      "A atividade de \"entrega\" foca em fornecer serviços aos usuários. \"O objetivo da atividade de \u0027entrega\u0027 é fornecer serviços aos usuários, gerenciar o onboarding/offboarding de usuários, manter os padrões de qualidade de serviço e coletar o feedback dos consumidores.\" 4 Ref. 4.8.1",
      "O suporte lida com incidentes, desastres e restauração de serviço. \"O objetivo da a e E) atividade de \u0027suporte\u0027 é identificar e resolver N incidentes, cumprir procedimentos de recuperação de desastre e coletar o feedback do consumidor.\" Ref. 4.9.1",
      "A atividade de \"operação\" é responsável por manter e fazer o monitoramento de produtos digitais e sistemas de suporte. \"O objetivo da atividade de \u0027operação\u0027 é manter e monitorar produtos digitais e sistemas de suporte, garantindo desempenho e confiabilidade ideais.\" Ref. 4.7.1",
      "A \"transição\" se preocupa em introduzir produtos novos ou atualizados em ambientes ativos. \"A finalidade da atividade de \u0027transição\u0027 é introduzir de forma fluida produtos novos ou atualizados em ambientes operacionais e garantir o onboarding/offboarding eficaz de fornecedores.\" Ref. 4.6.1"
    ],
    [
      "\"Construção\" foca no desenvolvimento, integração e testes de produtos. \"O objetivo da atividade de \u0027construção\u0027 é desenvolver, integrar e testar produtos digitais, transformando designs em soluções funcionais.” Ref. 4.5.1",
      "\"A atividade de \u0027transição\u0027 é responsável por introduzir de forma contínua produtos novos ou atualizados no ambiente de produção (operacional).\" “A finalidade da atividade de \u0027transição\u0027 é introduzir de forma fluida produtos novos ou atualizados em ambientes operacionais e garantir o onboarding/offboarding eficaz de fornecedores.\" Ref. 4.6.1",
      "A \"entrega\" se preocupa em fornecer serviços aos usuários depois que os produtos já estão em produção. \"O objetivo da atividade de \u0027entrega\u0027 é fornecer serviços aos usuários, gerenciar o onboarding/offboarding de usuários, manter os padrões de qualidade de serviço e coletar o feedback dos consumidores.\" Ref. 4.8.1",
      "\"Operação\" é responsável por manter e realizar o monitoramento de produtos depois que eles são transferidos para o ambiente de produção. \"O objetivo da atividade de \u0027operação\u0027 é manter e monitorar produtos digitais e sistemas de suporte, garantindo desempenho e confiabilidade ideais.\" Ref. 4.7.1"
    ],
    [
      "A atividade de \"suporte\" é responsável por lidar com incidentes e desastres, restaurar operações normais e apoiar os usuários para que o desempenho do serviço seja mantido ou restaurado quando for a interrompido. \"O objetivo da atividade de 28 \u0027suporte\u0027 é identificar e resolver incidentes, cumprir procedimentos de recuperação de o desastre e coletar o feedback do consumidor.” 4 Ref. 4.9.1",
      "Projetar arquiteturas faz parte da atividade de \"design\" no ciclo de vida do produto e do serviço. \"A finalidade da atividade de \u0027design\u0027 é criar protótipos e especificações para produtos e serviços, detalhando sua funcionalidade, Experiência do Usuário (UX) e framework operacional.\" Ref. 4.3.1",
      "A criação de componentes da solução é realizada durante a atividade de \"construção\". \"O objetivo da atividade de \u0027construção\u0027 é desenvolver, integrar e testar produtos digitais, transformando designs em soluções funcionais.” Ref. 4.5.1",
      "Descobrir oportunidades faz parte da atividade de \"descoberta\". \"Descoberta: explorar e priorizar as necessidades e oportunidades para o produto e serviço.\" Ref. 4.1"
    ],
    [
      "A Implantação Contínua permite lançamentos muito frequentes, potencialmente após cada mudança bem-sucedida. “Implantação Contínua depende da entrega contínua (CD)” e “A Entrega Contínua (CD) é um conjunto de técnicas e ferramentas que permite que as atualizações de software sejam implantadas em produção a qualquer momento. Implantações frequentes são possíveis [...].” Ref. 4.6.2",
      "A integração manual de código é contradita pela definição de integração contínua (CI) do ITIL, que sustenta a entrega contínua (CD). \"Integração contínua é um conjunto de técnicas e ferramentas que permite aos desenvolvedores integrar frequentemente suas alterações de código em um repositório central, seguido por builds e testes automatizados.\" Ref. 4.5.2",
      "O ITIL distingue claramente a implantação contínua da entrega contínua (CD) ao afirmar que a implantação contínua implementa automaticamente cada mudança que passa nos testes automatizados para produção, sem autorização adicional. \"Implantação contínua é o conjunto de técnicas e ferramentas que habilita que toda mudança aprovada nos testes automatizados seja automaticamente implantada em produção, sem necessidade de autorização adicional.\" Ref. 4.6.2",
      "Testes são essenciais tanto para entrega contínua quanto para implantação contínua. Na implantação contínua, toda mudança aprovada nos testes automatizados é implantada automaticamente em produção; portanto, ela não elimina testes. Ref. 4.6.2"
    ],
    [
      "Uma solicitação de mudança propõe N uma modificação em produtos ou serviços. \"Mudança\u0027 é a adição, modificação ou remoção de qualquer coisa que possa ter um efeito direto ou indireto sobre produtos e serviços.\" Ref. 4.7.2",
      "Uma requisição de serviço inicia uma ação de serviço predefinida e iniciada pelo usuário durante a entrega de serviços. \"Requisição de serviços é uma solicitação de um usuário, ou seu representante autorizado, que inicia uma ação de serviço acordada como parte regular da entrega de serviços.” Ref. 4.8.2",
      "Um protótipo é uma versão inicial de um produto ou serviço usada para testes e aprendizado. \"O protótipo de produto/serviço é uma criação inicial de um produto ou serviço que demonstra sua forma básica, funcionalidade e capacidades operacionais.\" Ref. 4.3.1",
      "Uma especificação de produto/serviço como um documento detalhado que descreve os requisitos e características de um produto ou serviço. \"A especificação de produto/serviço é um documento detalhado que descreve aspectos críticos, requisitos e características de um produto ou serviço a ser desenvolvido.\" Ref. 4.3.1"
    ],
    [
      "Observabilidade é a capacidade de entender o estado interno e o comportamento de um sistema analisando suas saídas externas. \"Observabilidade é a capacidade de entender o estado interno de um sistema complicado analisando suas saídas externas, como métricas, logs e traces.\" Ref. 4.7.1",
      "Garantir a aprovação de mudanças pertence à habilitação de mudança. “A Habilitação de Mudança é a prática de garantir que os riscos sejam devidamente avaliados, autorizando a continuidade das mudanças e gerenciando um calendário de mudanças...”. Ref. Glossário",
      "A observabilidade ajuda a identificar e analisar o comportamento, mas não previne incidentes automaticamente. A prevenção automática de incidentes é um resultado de operações proativas e prevenção de incidentes, apoiadas por práticas como monitoramento, gerenciamento de eventos e gerenciamento de problemas. \"Prática de observação sistemática de serviços e componentes de serviços, e de registro e relato de determinadas mudanças de estado identificadas como eventos.” Ref. Glossário",
      "Melhorar a confiabilidade por meio de 28 práticas de engenharia é o objetivo da Engenharia de Confiabilidade de Sites (SRE). “Engenharia de og Confiabilidade de Sites (SRE) é uma disciplina de \u0026 gerenciamento de tecnologia que incorpora aspectos da engenharia de software e os aplica a problemas de infraestrutura e operações com o objetivo de criar sistemas de software ultrasscaláveis e altamente confiáveis.” Ref. 4.7.1"
    ],
    [
      "Uma interrupção de serviço não planejada é um incidente. \"Um incidente é uma interrupção não planejada ou redução na qualidade de um serviço.\" Ref. 4.7.2",
      "O ITIL define: \"um problema é uma causa real ou potencial de um ou mais incidentes.\" Ref. 4.9.1",
      "Uma requisição de usuários para acesso ou uma ação de serviço de norma é uma requisição de serviço. \"Requisição de serviços é uma solicitação de um usuário, ou seu representante autorizado, que inicia uma ação de serviço acordada como parte regular da entrega de serviços.\" Ref. 4.8.2",
      "Um incidente com impacto significativo ou crítico é classificado como um incidente grave. \"Incidente grave é um incidente que provoca impacto significativo no negócio exigindo uma resolução coordenada imediata.\" Ref. Glossário"
    ],
    [
      "A atividade de \"transição\" é responsável por introduzir produtos novos ou atualizados no ambiente de produção. Seu desempenho é, portanto, melhor avaliado por métricas relacionadas a implantações/lançamentos bem-sucedidos e seu impacto. Uma alta taxa de sucesso de lançamentos implementados no ambiente de produção indica diretamente baixos erros de transição e desempenho de transição efetivo. “Quais são as métricas-chave de sucesso? (atividade de transição\") [...] Número e impacto dos erros de transição.” Ref. 4.6.2, Tabela 4.5",
      "Gerar ideias está associado à identificação de oportunidades que pertencem à atividade de \"descoberta\". \"Descoberta: explorar e priorizar as necessidades e oportunidades para o produto e serviço.\" Ref. 4.1",
      "O custo por requisição de serviço se relaciona à entrega de serviços e ao atendimento da requisição e à atividade de \"entrega\". “A atividade de \u0027entrega\u0027 inclui [...] o atendimento às solicitações de serviço dos usuários.” Ref. 4.8.1",
      "O mapeamento do fluxo de valor representa visualmente e analisa o fluxo de informações, trabalho e valor criado para o consumidor. Ele não é uma atividade de definição de controles de governança. Ref. 6.3"
    ],
    [
      "A resolução de incidentes dentro das metas acordadas está associada à atividade de N \"suporte\" e ao gerenciamento de incidentes. \"O objetivo da atividade de \u0027suporte\u0027 é identificar e resolver incidentes, cumprir procedimentos de recuperação de desastre e coletar o feedback do consumidor.\" Ref. 4.9.1",
      "A satisfação do cliente após a entrega de serviços é uma medida da atividade de \"entrega\". \"Quais são as principais métricas de sucesso? Satisfação do cliente e satisfação do. usuário com a qualidade de serviço. [...]\". Ref. 4.8.2, Tabela 4.7",
      "A resolução no primeiro contato está relacionada ao desempenho do service desk e do suporte, “A atividade de \u0027entrega\u0027 inclui... o atendimento às solicitações de serviço dos usuários.” Ref. 4.8.2",
      "A qualidade das soluções de produto é uma métrica chave de sucesso para a atividade de \"construção\". A atividade de \"construção\" foca no desenvolvimento, integração e testes de produtos, portanto, a qualidade da solução é a medida de sucesso mais apropriada. \"Quais são as principais métricas de sucesso? Qualidade das soluções de produto. [...]\" Ref. 4.5.2, Tabela 4.4"
    ],
    [
      "O propósito da organização é viabilizado por atividades da cadeia de valor que criam valor em linha com esse propósito. “As organizações existem para criar valor para clientes e outras partes interessadas. [...] Para entender e comunicar como uma organização cumpre seu propósito, um modelo operacional é frequentemente utilizado. [...] O nível mais alto da dimensão de \u0027fluxos de valor e processos\u0027 de um modelo operacional pode ser descrito como a cadeia de valor da organização.” Ref. 4.8.2",
      "Governança e conformidade são tratadas pela governança. \"Governança é o sistema pelo qual uma organização é dirigida e controlada.\" Ref. 5.3.1",
      "As atividades da cadeia de valor não são definidas por padronização ou consistência processual. As atividades da cadeia de valor são flexíveis e podem ser combinadas de diferentes maneiras dependendo do contexto. Embora a padronização possa ocorrer dentro de práticas ou processos, não é o propósito das atividades da cadeia de valor, nem como elas apoiam o propósito organizacional. \"Embora a palavra \u0027cadeia\u0027 implique a uma sequência de elos fortemente conectados, é importante lembrar que as atividades da cadeia de valor nem sempre são realizadas sequencialmente.\" Ref. 4.1",
      "Definir metas predefinidas de qualidade de serviço (por exemplo, níveis de disponibilidade, desempenho ou experiência) é o papel do gerenciamento de nível de serviço e da governança, não da cadeia de valor. \"Cadeia de valor: Um conjunto completo de atividades que habilita o valor por meio do fornecimento de um produto ou serviço.\" Ref. 5.1"
    ],
    [
      "O propósito e a estratégia são definidos pela liderança e governança organizacional. \"O propósito da organização descreve o que uma organização faz por seus consumidores e outros stakeholders e por quê.\" Ref. 5.4.1",
      "As práticas de gerenciamento permitem e apoiam as atividades da cadeia de valor, fornecendo as capacidades organizacionais necessárias para realizar essas atividades de forma eficaz. \"As práticas de gerenciamento habilitam e apoiam as atividades da cadeia de valor\". “Cada prática combina recursos das Quatro Dimensões para capacitar a capacidade de uma organização de gerenciar aspectos específicos de produtos e serviços digitais.” Ref. 1.3, Figura 1.9",
      "As atividades da cadeia de valor não são realizadas em uma sequência fixa. “As atividades da cadeia de valor nem sempre são realizadas sequencialmente.” Ref. 4.1",
      "As práticas de Gerenciamento não substituem as atividades da cadeia de valor; elas as viabilizam e apoiam. \"As práticas de gerenciamento habilitam e apoiam as atividades da cadeia de valor\". Ref. 1.3, Figura 1.9"
    ],
    [
      "Os Guias de Práticas Oficiais ITIL seguem a mesma estrutura para que os leitores possam facilmente entender, comparar e aplicar as práticas de forma consistente, independentemente da prática com a qual estejam trabalhando. Ref. 5.5",
      "As práticas são adotadas com base no contexto organizacional e nas necessidades. Elas não devem ser implementadas em uma ordem fixa ou universal. \"As atividades da cadeia de valor e as práticas do ITIL VS não formam uma estrutura fixa e rígida.\" Ref. 5.1",
      "O ITIL é independente de ferramentas e não prescreve tecnologias específicas. As atividades da cadeia de valor e as práticas podem ser combinadas de modo flexível em modelos operacionais e fluxos de valor conforme o contexto da organização. Ref. 5.1",
      "O ITIL enfatiza flexibilidade e adaptabilidade, não restrição. A estrutura padronizada apoia o aprendizado e a aplicação, não a limitação. \"A arquitetura do ITIL VS habilita especificamente flexibilidade e desestimula o trabalho em silos.\" Ref. 5.1"
    ],
    [
      "Os Guias de Prática Oficiais ITIL fornecem orientação sobre práticas e capacidades, mas não prescrevem ferramentas ou tecnologias específicas. Ref. 5.5.1",
      "O ITIL enfatiza a integração, não a separação, do gerenciamento de produtos e serviços. \"O ITIL oferece um Modelo de Ciclo de Vida de ponta a ponta para produtos e serviços digitais, onde os conceitos de produto e serviço digital são integrados.\" Ref. 1.2",
      "Os Guias de Práticas Oficiais ITIL existem para apoiar as organizações, fornecendo orientação prática sobre como adotar e adaptar as práticas de gerenciamento, o que, por sua vez, as ajuda a desenvolver capacidades para gerir produtos e serviços digitais. \"Para ter sucesso no gerenciamento de produtos e serviços digitais, as organizações desenvolvem muitas capacidades, desde as estratégicas até as operacionais. O ITIL oferece orientação prática estruturada para 34 capacidades de gerenciamento de produtos e serviços nos Guias de Práticas Oficiais do ITIL.\" Ref. 1.2.1",
      "O ITIL enfatiza a melhoria contínua e a aplicação situacional, Modelos de Maturidade são fixas. \"A Melhoria Contínua é uma atividade organizacional recorrente realizada em todos os níveis para garantir que o desempenho de uma organização atenda continuamente às expectativas das partes interessadas.” A melhoria contínua ocorre em todas as áreas da organização e em todos os níveis, do estratégico ao operacional. Ref. 5.1,5.6"
    ],
    [
      "À documentação das métricas de performance atuais pertence ao Passo 2: Onde Estamos Agora?, e não ao Passo 1. O Passo 1 não se concentra na medição ou na definição de linha de base; ele se concentra na compreensão e na tradução da visão da organização. “Passo 2: Onde Estamos Agora? [...] Um elemento-chave neste avaliações do estado atual devem ser feitas por N meio de medição objetiva sempre que possível.” 83 Ref. 5.6.1.2",
      "O Modelo de Melhoria Contínua do og ITIL começa definindo a visão para garantir que \u0026 qualquer iniciativa de melhoria esteja ligada aos objetivos, metas e prioridades da organização. \"Cada iniciativa de melhoria deve apoiar as metas e objetivos da organização. O primeiro passo do modelo de melhoria contínua é definir a visão da iniciativa. Isso fornece contexto para todas as decisões subsequentes e vincula as ações individuais à visão do futuro da organização.\" Ref. 5.6.1.1",
      "A identificação de ações de melhoria e a atribuição de responsabilidades pertencem ao Passo 4: Como Chegamos Lá? e ao Passo 5: Aja!, depois que a visão, o estado atual e o estado alvo forem compreendidos. “Passo 4: Como Chegamos Lá? [...] um plano para abordar os desafios da iniciativa pode ser criado.” Ref. 5.6.1.4 \"Passo 5: Aja! [...] o plano para a melhoria é executado.” Ref. 5.6.1.5",
      "Esta opção se refere à validação e mais tarde no modelo, parte do Passo 6: Estamos no caminho certo? \"Etapa 6: Estamos no caminho estado atual para compará-lo com as metas acordadas e com a linha de base.\" Ref. 5.6.1.6"
    ],
    [
      "Um fluxo de valor habilitador suporta atividades internas que permitem que os fluxos de valor essenciais funcionem de forma eficaz e entreguem valor aos clientes. Seu papel é viabilizar e apoiar, não substituir ou interagir diretamente com os consumidores. “Um fluxo de valor habilitador é um fluxo de valor que habilita a criação de valor para clientes internos, a fim de apoiar os fluxos de valor principais da organização.\" Ref. 6.2",
      "Os fluxos de valor habilitadores não substituem os fluxos de valor essenciais. Os fluxos de valor essenciais são fundamentais porque são eles que permitem diretamente a entrega de valor aos consumidores de serviço. Os fluxos de valor de capacitação existem apenas em relação aos fluxos de valor essenciais. \"Um fluxo de valor principal que habilita a criação de valor para os consumidores na forma pretendida pelo modelo operacional da organização.” Ref. 6.2",
      "Definir os resultados esperados pelo cliente e as expectativas de serviço refere-se a atividades focadas no cliente, que fazem parte dos fluxos de valor essenciais e do gerenciamento de relacionamento de serviços. \"Um fluxo de valor principal que habilita a criação de valor para os consumidores na forma pretendida pelo modelo \u003e operacional da organização.\" Ref. 6.2",
      "Os fluxos de valor habilitadores não interagem diretamente com os consumidores de Sa serviço. Esse papel pertence aos fluxos de valor a essenciais, que lidam com a entrega de valor de ponta a ponta aos clientes. \"Um fluxo de valor principal que habilita a criação de valor para os consumidores na forma pretendida pelo modelo operacional da organização.\" Ref. 6.2"
    ],
    [
      "O mapeamento do fluxo de valor é uma técnica para identificar, visualizar e analisar fluxos de valor, e o gerenciamento do fluxo de valor é uma atividade contínua que garante que os fluxos de valor permaneçam efetivos, adaptativos e aprimorados ao longo do tempo. O mapeamento é um ponto de partida; o gerenciamento sustenta e governa o desempenho. \"O mapeamento do fluxo de valor é uma técnica para a representação visual e análise de fluxos de valor.\" \"O mapeamento do fluxo de valor é uma técnica relativamente fácil de iniciar e que também proporciona resultados tangíveis a curto prazo. No entanto, não tem um efeito sustentável se for realizado como um exercício único. Para manter a alta qualidade dos serviços e otimizar continuamente o fluxo de trabalho, as organizações adotam o gerenciamento de fluxos de valor, o que significa tanto \u0027gerenciamento de fluxos de valor\u0027 quanto \u0027gerenciamento por meio de fluxos de valor\".\" Ref. 6.3, 6.4",
      "O mapeamento de fluxo de valor não é uma ferramenta de relatório, nem o gerenciamento de fluxo de valor não é uma atividade de auditoria. Ambos são focados em melhoria e orientados a valor, não mecanismos de conformidade. \"O mapeamento e o gerenciamento do fluxo de valor têm como objetivo: focar no valor para o cliente e otimizar o fluxo de ponta a ponta para a criação de valor.” Ref. 6.1",
      "Tanto o mapeamento do fluxo de valor quanto o gerenciamento do fluxo de valor se aplicam a produtos e serviços em conjunto, de acordo com a perspectiva integrada de produto e serviço do ITIL. “Para gerenciar o trabalho real de gerenciamento de produtos e serviços conforme realizado [...], as organizações precisam identificar e mapear seus fluxos de valor, analisá-los e aprimorá- los continuamente.” Ref. 6.1",
      "O mapeamento e o gerenciamento do fluxo de valor concentram-se na criação de valor, na otimização do fluxo e na melhoria contínua. \"O gerenciamento do fluxo de valor envolve um foco N contínuo em como o trabalho é feito, bem como a 8 8 análise e melhoria dos fluxos de valor da nei organização.\" Ref. 6.4"
    ]
  ]
];

if (OPTION_EXPLANATIONS.length !== SIMULADOS.length) throw new Error('Quantidade de simulados inválida nas explicações.');
OPTION_EXPLANATIONS.forEach((simulation, simulationIndex) => {
  if (simulation.length !== SIMULADOS[simulationIndex].questions.length) throw new Error('Quantidade de questões inválida nas explicações.');
  simulation.forEach((explanations, questionIndex) => {
    if (explanations.length !== 4 || explanations.some(text => !text || text.length < 20)) throw new Error('Explicação ausente ou inválida.');
    SIMULADOS[simulationIndex].questions[questionIndex].x = explanations;
  });
});

