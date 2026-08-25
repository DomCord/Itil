const SlidesModule = (() => {
  const DECKS = [
    { id: 'introducao', title: 'Introdução', count: 10 },
    { id: 'modulo-1', title: 'Módulo 1', count: 20, exercise: 'module-1' },
    { id: 'modulo-2', title: 'Módulo 2', count: 20, exercise: 'module-2' },
    { id: 'modulo-3', title: 'Módulo 3', count: 10, extension: 'jpg', exercise: 'module-3' },
    { id: 'modulo-4', title: 'Módulo 4', count: 6, extension: 'jpg', exercise: 'module-4' },
    { id: 'modulo-5', title: 'Módulo 5', count: 36, extension: 'jpg', exercise: 'module-5' },
    { id: 'modulo-6', title: 'Módulo 6', count: 71, extension: 'jpg', exercise: 'module-6' },
    { id: 'modulo-7', title: 'Módulo 7', count: 10, extension: 'jpg', exercise: 'module-7' },
    { id: 'modulo-8', title: 'Módulo 8', count: 14, extension: 'jpg', exercise: 'module-8' },
    { id: 'modulo-9', title: 'Módulo 9', count: 28, extension: 'jpg', exercise: 'module-9' },
    { id: 'modulo-10', title: 'Módulo 10', count: 8, extension: 'jpg', exercise: 'module-10' }
  ];
  const MODULE_ONE_EXERCISE = [
    {
      question: 'O que é um serviço digital?',
      options: [
        'Um serviço que depende total ou amplamente de produtos digitais',
        'Uma combinação de recursos de tecnologia projetados para consumidores',
        'A transferência de bens do provedor para o consumidor',
        'Um catálogo de serviços para consumidores'
      ],
      answer: 'A',
      explanation: 'Serviço digital é um serviço que depende total ou amplamente de produtos digitais. Referência: seção 3.1.2.'
    },
    {
      question: 'O que influencia a percepção do consumidor de que um serviço é valioso?',
      options: [
        'A capacidade do provedor de serviços de minimizar seus custos operacionais',
        'O número de provedores que entregam o serviço ao consumidor',
        'A extensão em que os efeitos positivos do serviço superam os negativos',
        'A quantidade de dinheiro que o provedor de serviços investe em recursos'
      ],
      answer: 'C',
      explanation: 'Os serviços são percebidos pelos consumidores como valiosos quando seus efeitos positivos superam os efeitos negativos, incluindo custos e riscos introduzidos. Referência: seção 3.1.1.'
    },
    {
      question: 'O que é um produto digital?',
      options: [
        'Uma descrição formal de um ou mais serviços projetados para atender às necessidades do consumidor',
        'O acesso aos recursos do provedor de serviços e seu uso conforme os termos e condições acordados',
        'Uma combinação dos recursos de uma organização baseada em tecnologia digital e projetada para oferecer valor aos consumidores',
        'Ações realizadas por um provedor de serviços ou, conjuntamente, por um consumidor e um provedor de serviços'
      ],
      answer: 'C',
      explanation: 'Produto digital é uma combinação dos recursos de uma organização baseada em tecnologia digital e projetada para oferecer valor aos consumidores. Referência: seção 4.5.1.'
    }
  ];
  const MODULE_TWO_EXERCISE = [
    {
      question: 'Um provedor de serviços se compromete a usar componentes recicláveis, reduzir as emissões de carbono e manter cadeias de fornecimento transparentes. Qual conceito este compromisso representa?',
      options: [
        'Utilidade',
        'Garantia',
        'Experiência do usuário (UX)',
        'Sustentabilidade'
      ],
      answer: 'D',
      explanation: 'Sustentabilidade inclui sourcing responsável, práticas responsáveis de trabalho, uso de energia limpa, baixa pegada de carbono, materiais reciclados e recicláveis e cadeias de suprimentos transparentes. Esses requisitos podem resultar de regulamentações, normas ou da estratégia da organização. Referência: seção 3.2.4.'
    },
    {
      question: 'Qual tipo de relacionamento de serviços geralmente se concentra no suporte e na eficiência por meio de serviços padronizados?',
      options: [
        'Relacionamento básico',
        'Relacionamento cooperativo',
        'Relacionamento colaborativo',
        'Relacionamento com parceiro'
      ],
      answer: 'A',
      explanation: 'O foco típico do relacionamento básico é suporte e eficiência por meio de serviços padronizados. Referência: seção 3.2.2, Tabela 3.1.'
    },
    {
      question: 'Qual papel assume a responsabilidade pelos resultados do consumo de serviços?',
      options: [
        'Organização',
        'Patrocinador',
        'Cliente',
        'Provedor de serviços'
      ],
      answer: 'C',
      explanation: 'Cliente é o papel que define os requisitos para produtos e serviços e assume a responsabilidade pelos resultados do consumo desses serviços. Referência: seção 3.2.1.1.'
    }
  ];
  const MODULE_THREE_EXERCISE = [
    {
      question: 'Qual conceito do ITIL inclui governança, práticas e melhoria contínua?',
      options: [
        'O Sistema de Valor do ITIL',
        'As atividades “Entrega” e “Suporte” da cadeia de valor',
        'O Princípio Orientador do ITIL “Focar no valor”',
        'A dimensão “fluxos de valor e processos”'
      ],
      answer: 'A',
      explanation: 'O Sistema de Valor do ITIL (ITIL VS) representa como todos os componentes e atividades de uma organização trabalham em conjunto para facilitar a criação de valor por meio de produtos e serviços digitais. Referência: seção 5.1.'
    },
    {
      question: 'Qual conjunto lista CORRETAMENTE os componentes do Sistema de Valor do ITIL (VS)?',
      options: [
        'Fluxos de valor, projetos, releases, incidentes, mudanças',
        'Princípios orientadores, governança, descoberta, entrega',
        'Produtos, serviços, clientes, fornecedores, parceiros',
        'Princípios orientadores, governança, cadeia de valor, práticas de gerenciamento, melhoria contínua'
      ],
      answer: 'D',
      explanation: 'O Sistema de Valor do ITIL inclui cinco componentes: Princípios Orientadores, Governança, Cadeia de Valor, Práticas e Melhoria Contínua. Referência: seção 1.3.'
    },
    {
      question: 'O que MELHOR descreve um Acordo de Nível de Serviço (SLA)?',
      options: [
        'Um contrato legal entre dois fornecedores que regulamenta penalidades financeiras',
        'Um acordo documentado entre um provedor de serviços e um cliente que identifica os serviços e seus níveis acordados',
        'Uma discussão informal entre usuários e provedores de serviço sobre expectativas',
        'Um documento de diretrizes para equipes internas de TI sem envolvimento do cliente'
      ],
      answer: 'B',
      explanation: 'Acordo de Nível de Serviço (SLA) é um acordo documentado entre um provedor de serviços e um cliente que identifica os serviços fornecidos e o nível acordado de cada serviço. Referência: seção 3.2.5.'
    }
  ];
  const MODULE_FOUR_EXERCISE = [
    {
      question: 'Qual atividade de governança está focada em garantir a aderência às políticas e à direção estratégica?',
      options: [
        'Avaliação',
        'Direção',
        'Monitoramento',
        'Descoberta'
      ],
      answer: 'C',
      explanation: 'Monitoramento é a atividade que verifica se o desempenho e as atividades estão em conformidade com as políticas e a direção estratégica. O órgão de governança monitora o desempenho da organização e de suas práticas, produtos e serviços. Referência: seção 5.3.1.'
    },
    {
      question: 'Qual é o papel de um órgão de governança em uma organização?',
      options: [
        'Ele é responsável pelo desempenho e pela conformidade no mais alto nível',
        'Ele é responsável pelas operações diárias',
        'Ele gerencia diretamente os detalhes técnicos de produtos digitais',
        'Ele se concentra exclusivamente em relatórios financeiros'
      ],
      answer: 'A',
      explanation: 'Toda organização é dirigida por um órgão de governança: uma pessoa ou grupo de pessoas responsável, no mais alto nível, pelo desempenho e pela conformidade da organização. Referência: seção 5.3.1.'
    },
    {
      question: 'Qual afirmação sobre a “faixa de visibilidade” está CORRETA?',
      options: [
        'Ela inclui apenas as atividades visíveis ao provedor de serviços',
        'Ela se aplica exclusivamente a modelos de serviços digitais modernos baseados em tecnologia',
        'Ela representa todos os aspectos visíveis entre organizações provedoras e consumidoras',
        'Ela define o caminho completo da jornada de serviço do cliente'
      ],
      answer: 'C',
      explanation: 'A faixa de visibilidade é a soma dos aspectos da organização consumidora que são visíveis ao provedor e dos aspectos da organização provedora que são visíveis ao consumidor de serviços. Referência: seção 3.2.3, Figura 3.4.'
    }
  ];
  const MODULE_FIVE_EXERCISE = [
    {
      question: 'Conforme o Princípio Orientador do ITIL “Focar no valor”, a que devem estar vinculadas todas as atividades organizacionais?',
      options: [
        'Aos benefícios para a organização, seus clientes e stakeholders',
        'Somente ao aumento de receita',
        'À satisfação dos funcionários',
        'Ao domínio da participação de mercado'
      ],
      answer: 'A',
      explanation: 'O princípio “Focar no valor” estabelece que todas as atividades realizadas pela organização devem estar vinculadas, direta ou indiretamente, ao valor para a própria organização, seus clientes e outros stakeholders. Referência: seção 5.2.1.'
    },
    {
      question: 'Conforme o Princípio Orientador do ITIL “Começar de onde você está”, qual é o PRINCIPAL risco de recomeçar sem considerar o que já está disponível ao melhorar um serviço?',
      options: [
        'Perder oportunidades de colaboração e entendimento compartilhado entre equipes',
        'Tornar soluções complexas demais por ignorar abordagens práticas e simples',
        'Não conseguir coletar o feedback necessário para guiar a melhoria gradual',
        'Desperdiçar tempo e perder capacidades e recursos valiosos que já existem'
      ],
      answer: 'D',
      explanation: 'Começar do zero pode desperdiçar tempo e eliminar serviços, processos, pessoas e ferramentas existentes que poderiam contribuir significativamente para a melhoria. Antes de recomeçar, deve-se avaliar o que já está disponível para ser aproveitado. Referência: seção 5.2.2.'
    },
    {
      question: 'Por que as organizações devem considerar a interação dos Princípios Orientadores do ITIL?',
      options: [
        'Porque os princípios são interdependentes e se complementam',
        'Porque um princípio é sempre superior aos demais',
        'Porque os princípios devem ser aplicados em uma ordem rigorosa',
        'Porque um princípio geralmente é suficiente para qualquer situação'
      ],
      answer: 'A',
      explanation: 'Os Princípios Orientadores interagem e dependem uns dos outros. Feedback apoia colaboração; foco no valor ajuda a manter soluções simples e práticas; e o progresso iterativo exige pensamento holístico para que cada melhoria entregue resultados reais. Referência: seção 5.2.8.'
    }
  ];
  const MODULE_SIX_EXERCISE = [
    {
      question: 'Qual é o propósito PRINCIPAL da atividade “descoberta”?',
      options: [
        'Desenvolver e testar produtos digitais',
        'Garantir e alocar recursos de forma eficiente',
        'Alinhar as capacidades do produto às necessidades dos consumidores e à estratégia',
        'Manter e monitorar produtos digitais'
      ],
      answer: 'C',
      explanation: 'O objetivo da atividade de “descoberta” é garantir o alinhamento contínuo dos roadmaps de produtos e das ofertas de serviços relacionadas com as necessidades dos consumidores de serviços e com a estratégia organizacional. Referência: seção 4.2.1.'
    },
    {
      question: 'Qual das seguintes opções NÃO é uma métrica de sucesso da atividade “descoberta”?',
      options: [
        'Alinhamento estratégico dos produtos e das ofertas de serviços da organização',
        'Relevância de mercado dos produtos e das ofertas de serviços',
        'Desempenho do serviço em relação às metas de SLA acordadas',
        'Satisfação dos stakeholders com os produtos e as ofertas de serviços'
      ],
      answer: 'C',
      explanation: 'O desempenho do serviço em relação às metas de SLA acordadas é uma métrica-chave da atividade de “entrega”, não de “descoberta”. As métricas de descoberta abrangem adequação estratégica, relevância de mercado, satisfação dos stakeholders e, quando aplicável, sucesso comercial dos produtos. Referências: seção 4.8.2, Tabela 4.7; seção 4.2.2, Tabela 4.1.'
    },
    {
      question: 'Qual atividade de gerenciamento do ciclo de vida se concentra em minimizar o impacto de incidentes e desastres quando eles acontecem?',
      options: [
        'Transição',
        'Operação',
        'Suporte',
        'Design'
      ],
      answer: 'C',
      explanation: 'O objetivo da atividade de “suporte” é identificar e resolver incidentes, cumprir procedimentos de recuperação de desastre e coletar o feedback do consumidor. Referência: seção 4.9.1.'
    }
  ];
  const MODULE_SEVEN_EXERCISE = [
    {
      question: 'Qual opção descreve “o que uma organização faz para seus consumidores e outros stakeholders e por quê”?',
      options: [
        'Fluxo de valor',
        'Cadeia de valor',
        'Modelo operacional',
        'Propósito da organização'
      ],
      answer: 'D',
      explanation: 'O propósito da organização descreve o que uma organização faz por seus consumidores e outros stakeholders e por quê. Referência: seção 5.4.1.'
    },
    {
      question: 'Qual das seguintes opções NÃO é um dos passos do mapeamento do fluxo de valor?',
      options: [
        'Identificação do fluxo de valor',
        'Mapeamento do estado atual do fluxo de valor',
        'Mapeamento do estado desejado do fluxo de valor',
        'Gerenciamento do fluxo de valor'
      ],
      answer: 'D',
      explanation: 'Gerenciamento do fluxo de valor não é uma etapa do mapeamento. As etapas são: identificar o fluxo de valor, mapear o estado atual (“as-is”), analisar o fluxo, mapear o estado desejado (“to-be”) e planejar e implementar melhorias. Referência: seção 6.3 e Glossário.'
    },
    {
      question: 'Qual é o propósito PRINCIPAL do mapeamento do fluxo de valor em uma organização?',
      options: [
        'Automatizar o monitoramento de serviços',
        'Identificar e priorizar oportunidades de melhoria',
        'Aprimorar e apoiar práticas de gerenciamento',
        'Controlar diretamente os stakeholders externos'
      ],
      answer: 'B',
      explanation: 'O mapeamento do fluxo de valor permite que as organizações identifiquem, mapeiem e analisem seus fluxos de valor, além de identificar e priorizar oportunidades de melhoria. Referência: seção 6.4.'
    }
  ];
  const MODULE_EIGHT_EXERCISE = [
    {
      question: 'Uma empresa planeja uma iniciativa de melhoria e garante que ela esteja claramente vinculada às metas e aos objetivos organizacionais. Qual passo de melhoria contínua está sendo realizado?',
      options: [
        'Qual é a visão?',
        'Onde estamos agora?',
        'Aja!',
        'Onde queremos estar?'
      ],
      answer: 'A',
      explanation: 'Cada iniciativa de melhoria deve apoiar as metas e os objetivos da organização. O primeiro passo do modelo é definir a visão da iniciativa, fornecendo contexto para as decisões seguintes e vinculando as ações à visão futura da organização. Referência: seção 5.6.1.1.'
    },
    {
      question: 'Qual aspecto de um Guia Oficial das Práticas do ITIL descreve os papéis, competências e responsabilidades necessários para uma prática específica?',
      options: [
        'Avaliação e desenvolvimento de capacidade',
        'Informações gerais',
        'Organizações e pessoas',
        'Parceiros e fornecedores'
      ],
      answer: 'C',
      explanation: 'O aspecto “organizações e pessoas” de um Guia Oficial das Práticas do ITIL descreve funções, competências e responsabilidades, além das soluções organizacionais e equipes específicas da prática. Referência: seção 5.5.1, Tabela 5.3.'
    },
    {
      question: 'Qual das seguintes opções descreve uma prática de gerenciamento?',
      options: [
        'Uma série de etapas que uma organização usa para criar e entregar produtos',
        'Um conjunto de recursos e capacidades organizacionais projetado para realizar um trabalho ou atingir um objetivo',
        'Uma representação visual de como uma organização cocria valor com os stakeholders',
        'Um conjunto de atividades interconectadas que uma organização realiza para criar e entregar produtos'
      ],
      answer: 'B',
      explanation: 'Uma prática de gerenciamento é um conjunto de recursos e capacidades organizacionais projetados e adotados para realizar um trabalho ou atingir um objetivo. Referência: seção 5.5.'
    }
  ];
  const MODULE_NINE_EXERCISE = [
    {
      question: 'Qual dimensão do gerenciamento de produtos e serviços é diretamente influenciada pelo compromisso da liderança com a segurança psicológica e o aprendizado contínuo?',
      options: [
        'Parceiros e fornecedores',
        'Fluxos de valor e processos',
        'Informação e tecnologia',
        'Organizações e pessoas'
      ],
      answer: 'D',
      explanation: 'A dimensão “organizações e pessoas” aborda cultura, confiança e comportamentos organizacionais. O compromisso da liderança com a segurança psicológica e o aprendizado contínuo ajuda a estabelecer uma cultura de segurança que beneficia todos os stakeholders. Referência: seção 2.2.1.'
    },
    {
      question: 'Qual das seguintes dimensões de gerenciamento de produtos e serviços aborda fluxos de trabalho organizacionais e interorganizacionais?',
      options: [
        'Parceiros e fornecedores',
        'Informação e tecnologia',
        'Organizações e pessoas',
        'Fluxos de valor e processos'
      ],
      answer: 'D',
      explanation: 'A dimensão “fluxos de valor e processos” aborda os fluxos de trabalho organizacionais e interorganizacionais, concentrando-se nas atividades realizadas e em como elas são organizadas para habilitar valor de forma eficaz e eficiente. Referência: seção 2.3.'
    },
    {
      question: 'Qual dimensão do gerenciamento de produtos e serviços aborda dados e tecnologias usadas em serviços e produtos digitais?',
      options: [
        'Parceiros e fornecedores',
        'Fluxos de valor e processos',
        'Organizações e pessoas',
        'Informação e tecnologia'
      ],
      answer: 'D',
      explanation: 'A dimensão “informação e tecnologia” aborda dados, informações e tecnologias utilizados em produtos e serviços digitais, além daqueles que integram os sistemas de gerenciamento de produtos e serviços da organização. Referência: seção 2.4.'
    }
  ];
  const MODULE_TEN_EXERCISE = [
    {
      question: 'Como o ITIL colabora com as práticas DevOps para apoiar o gerenciamento de produtos e serviços digitais?',
      options: [
        'Ao fornecer a estrutura, enquanto o DevOps oferece práticas e técnicas',
        'Substituindo as práticas de DevOps por processos padronizados de gerenciamento de serviços',
        'Ao limitar o uso de DevOps às atividades de desenvolvimento de software',
        'Posicionando o DevOps como um framework de governança sobre o ITIL'
      ],
      answer: 'A',
      explanation: 'O ITIL fornece a estrutura para o gerenciamento de produtos e serviços digitais, enquanto o DevOps atua como uma abordagem complementar com práticas e técnicas detalhadas para habilitar as atividades do ciclo de vida de produtos e serviços. Referência: seção 7.3.1.'
    },
    {
      question: 'Por que o gerenciamento de projetos é importante dentro do framework ITIL?',
      options: [
        'Ele governa as operações diárias de serviço',
        'Ele substitui as práticas de gerenciamento de produtos e serviços',
        'Ele apoia a implementação e a transformação de produtos e serviços',
        'Ele define metas e métricas de nível de serviço'
      ],
      answer: 'C',
      explanation: 'O gerenciamento de projetos fornece as ferramentas necessárias para implementar ou transformar produtos e serviços. Métodos como o PRINCE2 apoiam a entrega estruturada das mudanças e a transição dos resultados dos projetos para serviços gerenciados e valiosos.'
    },
    {
      question: 'Como o ITIL e o PRINCE2 Agile podem ser usados juntos para entregar produtos e serviços?',
      options: [
        'O ITIL substitui as estruturas de governança do PRINCE2',
        'O PRINCE2 Agile define as práticas de gerenciamento de serviços',
        'O ITIL gerencia projetos, enquanto o PRINCE2 Agile gerencia a entrega diária e geral dos serviços',
        'O ITIL fornece orientação para gerenciamento de serviços, enquanto o PRINCE2 Agile gerencia a entrega de projetos'
      ],
      answer: 'D',
      explanation: 'O ITIL orienta o gerenciamento de produtos e serviços digitais, enquanto o PRINCE2 Agile fornece métodos e ferramentas para gerenciar a entrega dos projetos que implementam ou transformam esses produtos e serviços. As duas abordagens são complementares.'
    }
  ];
  const EXERCISES = {
    'module-1': { questions: MODULE_ONE_EXERCISE, pbq: 'service-chain' },
    'module-2': { questions: MODULE_TWO_EXERCISE, pbq: 'service-roles' },
    'module-3': { questions: MODULE_THREE_EXERCISE, pbq: false },
    'module-4': { questions: MODULE_FOUR_EXERCISE, pbq: false },
    'module-5': { questions: MODULE_FIVE_EXERCISE, pbq: false },
    'module-6': { questions: MODULE_SIX_EXERCISE, pbq: false },
    'module-7': { questions: MODULE_SEVEN_EXERCISE, pbq: false },
    'module-8': { questions: MODULE_EIGHT_EXERCISE, pbq: false },
    'module-9': { questions: MODULE_NINE_EXERCISE, pbq: false },
    'module-10': { questions: MODULE_TEN_EXERCISE, pbq: false }
  };
  const PBQ_ITEMS = [
    { id: 'technology-resources', label: 'Recursos tecnológicos' },
    { id: 'digital-products', label: 'Produtos digitais' },
    { id: 'service-offerings', label: 'Ofertas de serviços' },
    { id: 'digital-services', label: 'Serviços digitais' }
  ];
  const PBQ_CORRECT_ORDER = PBQ_ITEMS.map(item => item.id);
  const PBQ_RELATIONS = ['compõem', 'habilitam e apoiam', 'descrevem'];
  const ROLE_PBQ_ROLES = [
    { id: 'supplier', label: 'Fornecedor' },
    { id: 'provider', label: 'Provedor' },
    { id: 'consumer', label: 'Consumidor' }
  ];
  const ROLE_PBQ_ZONES = [
    { id: 'consumer-area', title: 'Interação com a cadeia de serviços', description: 'Acima de produtos, ofertas e serviços digitais', answer: 'consumer' },
    { id: 'supplier-area', title: 'Recursos e produtos digitais', description: 'Adquire, constrói e gerencia a base tecnológica', answer: 'supplier' },
    { id: 'provider-area', title: 'Ofertas e serviços digitais', description: 'Oferece, negocia, entrega e apoia os serviços', answer: 'provider' }
  ];
  const TOTAL_SLIDES = DECKS.reduce((total, deck) => total + deck.count, 0);
  const MIN_ZOOM = 75;
  const MAX_ZOOM = 200;
  const ZOOM_STEP = 25;
  let activeDeckIndex = 0;
  let currentSlide = 1;
  let zoom = 100;
  let exerciseAnswers = createExerciseAnswers();
  let pbqPoolOrder = shuffledPBQOrder();
  let pbqSlots = PBQ_ITEMS.map(() => null);
  let pbqSelected = null;
  let pbqChecked = false;
  let rolePbqPoolOrder = shuffledRolePBQOrder();
  let rolePbqSlots = ROLE_PBQ_ZONES.map(() => null);
  let rolePbqSelected = null;
  let rolePbqChecked = false;

  const activeDeck = () => DECKS[activeDeckIndex];
  const lastStep = deck => deck.count + (deck.exercise ? 1 : 0);
  const isExercise = () => Boolean(activeDeck().exercise && currentSlide > activeDeck().count);
  const activeExercise = () => EXERCISES[activeDeck().exercise];
  const activeExerciseAnswers = () => exerciseAnswers[activeDeck().exercise];
  const slidePath = (deck, number) => `slides/${deck.id}/slide-${String(number).padStart(3, '0')}.${deck.extension || 'webp'}`;
  const clampSlide = number => Math.min(lastStep(activeDeck()), Math.max(1, Number(number) || 1));
  const globalSlideNumber = () => DECKS.slice(0, activeDeckIndex).reduce((total, deck) => total + deck.count, 0) + currentSlide;

  function createExerciseAnswers() {
    return Object.fromEntries(Object.entries(EXERCISES).map(([exerciseId, exercise]) => [exerciseId, exercise.questions.map(() => null)]));
  }

  function shuffledPBQOrder() {
    const items = PBQ_ITEMS.map(item => item.id);
    for (let index = items.length - 1; index > 0; index--) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [items[index], items[swapIndex]] = [items[swapIndex], items[index]];
    }
    if (items.every((item, index) => item === PBQ_CORRECT_ORDER[index])) {
      [items[0], items[1]] = [items[1], items[0]];
    }
    return items;
  }

  function pbqItem(itemId) {
    return PBQ_ITEMS.find(item => item.id === itemId);
  }

  function pbqIsCorrect() {
    return pbqSlots.every((itemId, index) => itemId === PBQ_CORRECT_ORDER[index]);
  }

  function shuffledRolePBQOrder() {
    const roles = ROLE_PBQ_ROLES.map(role => role.id);
    for (let index = roles.length - 1; index > 0; index--) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [roles[index], roles[swapIndex]] = [roles[swapIndex], roles[index]];
    }
    if (roles.every((roleId, index) => roleId === ROLE_PBQ_ZONES[index].answer)) {
      [roles[0], roles[1]] = [roles[1], roles[0]];
    }
    return roles;
  }

  function rolePBQItem(roleId) {
    return ROLE_PBQ_ROLES.find(role => role.id === roleId);
  }

  function rolePBQIsCorrect() {
    return rolePbqSlots.every((roleId, index) => roleId === ROLE_PBQ_ZONES[index].answer);
  }

  function activePBQChecked() {
    if (activeExercise().pbq === 'service-chain') return pbqChecked;
    if (activeExercise().pbq === 'service-roles') return rolePbqChecked;
    return false;
  }

  function activePBQIsCorrect() {
    if (activeExercise().pbq === 'service-chain') return pbqIsCorrect();
    if (activeExercise().pbq === 'service-roles') return rolePBQIsCorrect();
    return false;
  }

  function activePBQMarkup() {
    if (activeExercise().pbq === 'service-chain') return pbqMarkup();
    if (activeExercise().pbq === 'service-roles') return rolePBQMarkup();
    return '';
  }

  function resetActivePBQ() {
    if (activeExercise().pbq === 'service-chain') resetPBQ();
    if (activeExercise().pbq === 'service-roles') resetRolePBQ();
  }

  function preload(deckIndex, number) {
    const deck = DECKS[deckIndex];
    if (!deck || number < 1 || number > deck.count) return;
    const image = new Image();
    image.src = slidePath(deck, number);
  }

  function preloadNeighbors() {
    const deck = activeDeck();
    preload(activeDeckIndex, currentSlide - 1);
    preload(activeDeckIndex, currentSlide + 1);
    if (currentSlide === lastStep(deck)) preload(activeDeckIndex + 1, 1);
    if (currentSlide === 1 && activeDeckIndex > 0) preload(activeDeckIndex - 1, DECKS[activeDeckIndex - 1].count);
  }

  function pbqMarkup() {
    const availableItems = pbqPoolOrder.filter(itemId => !pbqSlots.includes(itemId));
    const complete = pbqSlots.every(Boolean);
    const correct = pbqChecked && pbqIsCorrect();
    const itemButton = itemId => {
      const item = pbqItem(itemId);
      return `<button class="pbq-item ${pbqSelected === itemId ? 'selected' : ''}" data-slide-action="pbq-select" data-pbq-item="${itemId}" data-pbq-drag-item="${itemId}" draggable="${!pbqChecked}" ${pbqChecked ? 'disabled' : ''}><span class="pbq-grip" aria-hidden="true">⠿</span><strong>${item.label}</strong></button>`;
    };
    return `
      <section class="pbq-exercise" aria-labelledby="pbqTitle">
        <header class="pbq-head">
          <span class="pbq-label">PBQ • Performance-Based Question</span>
          <h3 id="pbqTitle">Organize a cadeia de serviços digitais</h3>
          <p>Arraste os cartões para os quadrantes na sequência correta. No celular ou pelo teclado, selecione um cartão e depois escolha o quadrante.</p>
        </header>
        <div class="pbq-bank ${pbqSelected ? 'has-selection' : ''}" data-pbq-bank aria-label="Itens disponíveis">
          <span class="pbq-bank-title">Itens para organizar</span>
          <div>${availableItems.length ? availableItems.map(itemButton).join('') : '<small>Todos os itens foram posicionados.</small>'}</div>
        </div>
        <div class="pbq-sequence" aria-label="Sequência de quatro quadrantes">
          ${pbqSlots.map((itemId, index) => {
            const slotCorrect = itemId === PBQ_CORRECT_ORDER[index];
            const state = pbqChecked ? (slotCorrect ? 'correct' : 'wrong') : itemId ? 'filled' : 'empty';
            const item = pbqItem(itemId);
            return `<button class="pbq-slot ${state}" data-slide-action="pbq-slot" data-pbq-slot="${index}" data-pbq-value="${itemId || ''}" data-pbq-drag-item="${itemId || ''}" draggable="${Boolean(itemId) && !pbqChecked}" ${pbqChecked ? 'disabled' : ''}><small>Quadrante ${index + 1}</small>${item ? `<strong>${item.label}</strong><span class="pbq-slot-action">${pbqChecked ? (slotCorrect ? '✓ Correto' : '× Fora de posição') : 'Clique para remover'}</span>` : '<strong>Solte aqui</strong><span class="pbq-slot-action">ou clique após selecionar</span>'}</button>${index < PBQ_RELATIONS.length ? `<div class="pbq-relation"><span>${PBQ_RELATIONS[index]}</span><i aria-hidden="true">→</i></div>` : ''}`;
          }).join('')}
        </div>
        <div class="pbq-actions">
          <span aria-live="polite">${pbqChecked ? 'Sequência verificada. Confira a explicação abaixo.' : pbqSelected ? `${pbqItem(pbqSelected).label} selecionado. Escolha um quadrante.` : complete ? 'Sequência preenchida. Verifique sua resposta.' : 'Posicione os quatro itens para liberar a verificação.'}</span>
          <button class="primary" data-slide-action="pbq-check" ${!complete || pbqChecked ? 'disabled' : ''}>${pbqChecked ? 'Sequência verificada' : 'Verificar sequência'}</button>
        </div>
        ${pbqChecked ? `<div class="pbq-feedback ${correct ? 'correct' : 'wrong'}" role="status"><strong>${correct ? 'Sequência correta!' : 'A sequência ainda não está correta.'}</strong><p>Recursos tecnológicos <b>compõem</b> produtos digitais; produtos digitais <b>habilitam e apoiam</b> ofertas de serviços; e ofertas de serviços <b>descrevem</b> serviços digitais.</p>${correct ? '' : '<button class="ghost" data-slide-action="pbq-retry">Tentar novamente</button>'}</div>` : ''}
      </section>`;
  }

  function rolePBQMarkup() {
    const availableRoles = rolePbqPoolOrder.filter(roleId => !rolePbqSlots.includes(roleId));
    const complete = rolePbqSlots.every(Boolean);
    const correct = rolePbqChecked && rolePBQIsCorrect();
    const figure = roleId => {
      const role = rolePBQItem(roleId);
      return `<span class="role-person role-${roleId}" aria-hidden="true"><i class="role-person-head"></i><i class="role-person-body"></i></span><strong>${role.label}</strong>`;
    };
    const roleButton = roleId => `<button class="role-pbq-item ${rolePbqSelected === roleId ? 'selected' : ''}" data-slide-action="role-pbq-select" data-role-pbq-item="${roleId}" data-role-pbq-drag-item="${roleId}" draggable="${!rolePbqChecked}" ${rolePbqChecked ? 'disabled' : ''}><span class="pbq-grip" aria-hidden="true">⠿</span>${figure(roleId)}</button>`;
    const zoneMarkup = (zoneIndex, placement) => {
      const zone = ROLE_PBQ_ZONES[zoneIndex];
      const roleId = rolePbqSlots[zoneIndex];
      const roleCorrect = roleId === zone.answer;
      const state = rolePbqChecked ? (roleCorrect ? 'correct' : 'wrong') : roleId ? 'filled' : 'empty';
      return `<button class="role-pbq-zone role-pbq-zone-${placement} ${state}" data-slide-action="role-pbq-slot" data-role-pbq-slot="${zoneIndex}" data-role-pbq-value="${roleId || ''}" data-role-pbq-drag-item="${roleId || ''}" draggable="${Boolean(roleId) && !rolePbqChecked}" ${rolePbqChecked ? 'disabled' : ''}><span class="role-zone-copy"><small>${zone.title}</small><span>${zone.description}</span></span><span class="role-zone-placement">${roleId ? figure(roleId) : '<i class="role-empty-person" aria-hidden="true">?</i><strong>Posicione o boneco</strong>'}</span><em>${rolePbqChecked ? (roleCorrect ? '✓ Local correto' : '× Local incorreto') : roleId ? 'Clique para remover' : 'Solte ou clique aqui'}</em></button>`;
    };
    return `
      <section class="role-pbq-exercise" aria-labelledby="rolePbqTitle">
        <header class="pbq-head">
          <span class="pbq-label">PBQ • Performance-Based Question</span>
          <h3 id="rolePbqTitle">Posicione os papéis na cadeia de serviços</h3>
          <p>Mova os bonecos de Fornecedor, Provedor e Consumidor para as áreas correspondentes do gerenciamento, entrega e consumo de serviços.</p>
        </header>
        <div class="role-pbq-bank" data-role-pbq-bank aria-label="Papéis disponíveis">
          <span class="pbq-bank-title">Bonecos para posicionar</span>
          <div>${availableRoles.length ? availableRoles.map(roleButton).join('') : '<small>Todos os bonecos foram posicionados.</small>'}</div>
        </div>
        <div class="role-pbq-diagram">
          ${zoneMarkup(0, 'consumer')}
          <div class="role-service-chain" aria-label="Recursos tecnológicos compõem produtos digitais, que habilitam ofertas de serviços, que descrevem serviços digitais">
            <span>Recursos<br>tecnológicos</span><i>→</i><span>Produtos<br>digitais</span><i>→</i><span>Ofertas de<br>serviços</span><i>→</i><span>Serviços<br>digitais</span>
          </div>
          <div class="role-pbq-lower-zones">
            ${zoneMarkup(1, 'supplier')}
            ${zoneMarkup(2, 'provider')}
          </div>
        </div>
        <div class="pbq-actions">
          <span aria-live="polite">${rolePbqChecked ? 'Posições verificadas. Confira a explicação abaixo.' : rolePbqSelected ? `${rolePBQItem(rolePbqSelected).label} selecionado. Escolha uma área.` : complete ? 'Todos os bonecos foram posicionados. Verifique sua resposta.' : 'Posicione os três bonecos para liberar a verificação.'}</span>
          <button class="primary" data-slide-action="role-pbq-check" ${!complete || rolePbqChecked ? 'disabled' : ''}>${rolePbqChecked ? 'Posições verificadas' : 'Verificar posições'}</button>
        </div>
        ${rolePbqChecked ? `<div class="pbq-feedback ${correct ? 'correct' : 'wrong'}" role="status"><strong>${correct ? 'Todos os papéis estão corretos!' : 'Um ou mais papéis estão fora do local correto.'}</strong><p>O <b>Fornecedor</b> adquire, constrói e gerencia recursos tecnológicos e produtos digitais. O <b>Provedor</b> oferece e negocia ofertas, além de entregar e apoiar serviços digitais. O <b>Consumidor</b> impacta produtos, negocia e aceita ofertas e consome os serviços.</p>${correct ? '' : '<button class="ghost" data-slide-action="role-pbq-retry">Tentar novamente</button>'}</div>` : ''}
      </section>`;
  }

  function slideStageMarkup(deck) {
    if (isExercise()) {
      const exercise = activeExercise();
      const questions = exercise.questions;
      const answers = activeExerciseAnswers();
      const answered = answers.filter(Boolean).length;
      const score = questions.reduce((total, question, index) => total + (answers[index] === question.answer ? 1 : 0), 0);
      const complete = answered === questions.length;
      const pbqVerified = exercise.pbq && activePBQChecked();
      const pbqCorrect = pbqVerified && activePBQIsCorrect();
      const completedActivities = answered + (pbqVerified ? 1 : 0);
      const totalActivities = questions.length + (exercise.pbq ? 1 : 0);
      const showResult = complete && (!exercise.pbq || pbqVerified);
      return `<button class="slide-edge slide-edge-left" data-slide-action="previous" aria-label="Slide anterior">‹</button><section class="module-exercise" aria-labelledby="exerciseTitle"><header class="module-exercise-head"><span class="exercise-badge">${deck.title}</span><h2 id="exerciseTitle">Exercício de fixação</h2><p>${exercise.pbq ? 'Responda às três questões e conclua a PBQ' : 'Responda às três questões'} para revisar os conceitos essenciais deste módulo.</p><div class="exercise-progress"><span style="width:${completedActivities / totalActivities * 100}%"></span></div><small>${completedActivities} de ${totalActivities} atividades concluídas</small></header><div class="exercise-questions">${questions.map((question, questionIndex) => {
        const selected = answers[questionIndex];
        const letters = 'ABCD';
        return `<article class="exercise-question ${selected ? 'answered' : ''}"><div class="exercise-question-title"><span>${String(questionIndex + 1).padStart(2, '0')}</span><h3>${question.question}</h3></div><div class="exercise-options">${question.options.map((option, optionIndex) => {
          const letter = letters[optionIndex];
          const correct = letter === question.answer;
          const chosen = letter === selected;
          const state = selected ? (correct ? 'correct' : chosen ? 'wrong' : 'dimmed') : '';
          return `<button class="exercise-option ${state}" data-slide-action="exercise-answer" data-question-index="${questionIndex}" data-answer="${letter}" ${selected ? 'disabled' : ''}><span>${letter}</span><strong>${option}</strong>${selected && correct ? '<i>✓</i>' : selected && chosen ? '<i>×</i>' : ''}</button>`;
        }).join('')}</div>${selected ? `<div class="exercise-feedback ${selected === question.answer ? 'correct' : 'wrong'}"><strong>${selected === question.answer ? 'Resposta correta!' : `Resposta incorreta. A alternativa correta é ${question.answer}.`}</strong><p>${question.explanation}</p></div>` : ''}</article>`;
      }).join('')}</div>${complete && exercise.pbq ? activePBQMarkup() : ''}${showResult ? `<div class="exercise-result"><span>Resultado da fixação</span><strong>${score}/${questions.length}${exercise.pbq ? ` + PBQ ${pbqCorrect ? '✓' : '×'}` : ''}</strong><p>${score === questions.length && (!exercise.pbq || pbqCorrect) ? `Excelente! Você consolidou os conceitos do ${deck.title}.` : `Revise as explicações e a PBQ para consolidar todo o conteúdo.`}</p><button class="primary" data-slide-action="exercise-restart">Refazer atividade completa</button></div>` : ''}</section><button class="slide-edge slide-edge-right" data-slide-action="next" aria-label="Próxima apresentação">›</button>`;
    }
    return `<button class="slide-edge slide-edge-left" data-slide-action="previous" aria-label="Slide anterior">‹</button><div class="slide-canvas"><img id="currentSlideImage" src="${slidePath(deck, currentSlide)}" alt="${deck.title}, slide ${currentSlide} de ${deck.count}" decoding="async" style="width:${zoom}%"></div><button class="slide-edge slide-edge-right" data-slide-action="next" aria-label="Próximo slide">›</button>`;
  }

  function updateControls() {
    const root = document.querySelector('.slides-module');
    if (!root) return;
    const deck = activeDeck();
    const exerciseActive = isExercise();
    const stage = root.querySelector('.slide-stage');
    stage.classList.toggle('slide-exercise-stage', exerciseActive);
    stage.innerHTML = slideStageMarkup(deck);
    const input = root.querySelector('#slideCurrent');
    input.value = Math.min(currentSlide, deck.count);
    input.disabled = exerciseActive;
    input.classList.toggle('hidden', exerciseActive);
    root.querySelector('#slideCounter').textContent = exerciseActive ? 'Fixação' : `de ${deck.count}`;
    root.querySelector('#slideStatus').textContent = exerciseActive
      ? `${deck.title}: exercício de fixação — ${activeExerciseAnswers().filter(Boolean).length} questões respondidas${activeExercise().pbq && activePBQChecked() ? ' e PBQ verificada' : ''}.`
      : `${deck.title}: slide ${currentSlide} de ${deck.count} — slide ${globalSlideNumber()} de ${TOTAL_SLIDES} no total — zoom ${zoom}%.`;
    root.querySelector('#slideZoom').textContent = `${zoom}%`;
    const atStart = activeDeckIndex === 0 && currentSlide === 1;
    const atEnd = activeDeckIndex === DECKS.length - 1 && currentSlide === lastStep(deck);
    root.querySelectorAll('[data-slide-action="previous"]').forEach(button => { button.disabled = atStart; });
    root.querySelectorAll('[data-slide-action="next"]').forEach(button => { button.disabled = atEnd; });
    root.querySelector('[data-slide-action="zoom-out"]').disabled = exerciseActive || zoom === MIN_ZOOM;
    root.querySelector('[data-slide-action="zoom-in"]').disabled = exerciseActive || zoom === MAX_ZOOM;
    root.querySelectorAll('.slide-thumbnail').forEach(button => {
      const selected = Number(button.dataset.slideNumber) === currentSlide;
      button.classList.toggle('active', selected);
      if (selected) {
        button.setAttribute('aria-current', 'true');
        button.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      } else {
        button.removeAttribute('aria-current');
      }
    });
    preloadNeighbors();
  }

  function goTo(number) {
    currentSlide = clampSlide(number);
    updateControls();
  }

  function selectDeck(deckIndex, slideNumber = 1) {
    const parsedIndex = Number(deckIndex);
    if (!Number.isInteger(parsedIndex) || parsedIndex < 0 || parsedIndex >= DECKS.length) return;
    activeDeckIndex = parsedIndex;
    currentSlide = Math.min(lastStep(DECKS[activeDeckIndex]), Math.max(1, slideNumber));
    render();
  }

  function move(direction) {
    const deck = activeDeck();
    if (direction > 0 && currentSlide === lastStep(deck) && activeDeckIndex < DECKS.length - 1) return selectDeck(activeDeckIndex + 1, 1);
    if (direction < 0 && currentSlide === 1 && activeDeckIndex > 0) return selectDeck(activeDeckIndex - 1, lastStep(DECKS[activeDeckIndex - 1]));
    goTo(currentSlide + direction);
  }

  function changeZoom(direction) {
    if (isExercise()) return;
    zoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, zoom + direction * ZOOM_STEP));
    updateControls();
  }

  function refreshExercise(scrollTop) {
    updateControls();
    if (typeof scrollTop === 'number') {
      requestAnimationFrame(() => {
        const stage = document.querySelector('.slide-stage');
        if (stage) stage.scrollTop = scrollTop;
      });
    }
  }

  function answerExercise(questionIndex, answer) {
    const parsedIndex = Number(questionIndex);
    const questions = activeExercise()?.questions;
    const answers = activeExerciseAnswers();
    if (!isExercise() || !questions?.[parsedIndex] || answers[parsedIndex]) return;
    const stage = document.querySelector('.slide-stage');
    const scrollTop = stage?.scrollTop || 0;
    answers[parsedIndex] = answer;
    refreshExercise(scrollTop);
  }

  function selectPBQItem(itemId) {
    if (!isExercise() || pbqChecked || !pbqItem(itemId) || pbqSlots.includes(itemId)) return;
    pbqSelected = pbqSelected === itemId ? null : itemId;
    refreshExercise(document.querySelector('.slide-stage')?.scrollTop || 0);
  }

  function placePBQItem(itemId, slotIndex) {
    const parsedSlot = Number(slotIndex);
    if (!isExercise() || pbqChecked || !pbqItem(itemId) || !Number.isInteger(parsedSlot) || parsedSlot < 0 || parsedSlot >= pbqSlots.length) return;
    const scrollTop = document.querySelector('.slide-stage')?.scrollTop || 0;
    const previousSlot = pbqSlots.indexOf(itemId);
    if (previousSlot >= 0) pbqSlots[previousSlot] = null;
    pbqSlots[parsedSlot] = itemId;
    pbqSelected = null;
    refreshExercise(scrollTop);
  }

  function usePBQSlot(slotIndex) {
    const parsedSlot = Number(slotIndex);
    if (pbqChecked || !Number.isInteger(parsedSlot) || parsedSlot < 0 || parsedSlot >= pbqSlots.length) return;
    if (pbqSelected) return placePBQItem(pbqSelected, parsedSlot);
    if (!pbqSlots[parsedSlot]) return;
    const scrollTop = document.querySelector('.slide-stage')?.scrollTop || 0;
    pbqSlots[parsedSlot] = null;
    refreshExercise(scrollTop);
  }

  function checkPBQ() {
    if (!pbqSlots.every(Boolean) || pbqChecked) return;
    const scrollTop = document.querySelector('.slide-stage')?.scrollTop || 0;
    pbqChecked = true;
    pbqSelected = null;
    refreshExercise(scrollTop);
  }

  function resetPBQ() {
    pbqPoolOrder = shuffledPBQOrder();
    pbqSlots = PBQ_ITEMS.map(() => null);
    pbqSelected = null;
    pbqChecked = false;
  }

  function retryPBQ() {
    const scrollTop = document.querySelector('.slide-stage')?.scrollTop || 0;
    resetPBQ();
    refreshExercise(scrollTop);
  }

  function selectRolePBQItem(roleId) {
    if (!isExercise() || activeExercise().pbq !== 'service-roles' || rolePbqChecked || !rolePBQItem(roleId) || rolePbqSlots.includes(roleId)) return;
    rolePbqSelected = rolePbqSelected === roleId ? null : roleId;
    refreshExercise(document.querySelector('.slide-stage')?.scrollTop || 0);
  }

  function placeRolePBQItem(roleId, slotIndex) {
    const parsedSlot = Number(slotIndex);
    if (!isExercise() || activeExercise().pbq !== 'service-roles' || rolePbqChecked || !rolePBQItem(roleId) || !Number.isInteger(parsedSlot) || parsedSlot < 0 || parsedSlot >= rolePbqSlots.length) return;
    const scrollTop = document.querySelector('.slide-stage')?.scrollTop || 0;
    const previousSlot = rolePbqSlots.indexOf(roleId);
    if (previousSlot >= 0) rolePbqSlots[previousSlot] = null;
    rolePbqSlots[parsedSlot] = roleId;
    rolePbqSelected = null;
    refreshExercise(scrollTop);
  }

  function useRolePBQSlot(slotIndex) {
    const parsedSlot = Number(slotIndex);
    if (rolePbqChecked || !Number.isInteger(parsedSlot) || parsedSlot < 0 || parsedSlot >= rolePbqSlots.length) return;
    if (rolePbqSelected) return placeRolePBQItem(rolePbqSelected, parsedSlot);
    if (!rolePbqSlots[parsedSlot]) return;
    const scrollTop = document.querySelector('.slide-stage')?.scrollTop || 0;
    rolePbqSlots[parsedSlot] = null;
    refreshExercise(scrollTop);
  }

  function checkRolePBQ() {
    if (!rolePbqSlots.every(Boolean) || rolePbqChecked) return;
    const scrollTop = document.querySelector('.slide-stage')?.scrollTop || 0;
    rolePbqChecked = true;
    rolePbqSelected = null;
    refreshExercise(scrollTop);
  }

  function resetRolePBQ() {
    rolePbqPoolOrder = shuffledRolePBQOrder();
    rolePbqSlots = ROLE_PBQ_ZONES.map(() => null);
    rolePbqSelected = null;
    rolePbqChecked = false;
  }

  function retryRolePBQ() {
    const scrollTop = document.querySelector('.slide-stage')?.scrollTop || 0;
    resetRolePBQ();
    refreshExercise(scrollTop);
  }

  function restartExercise() {
    exerciseAnswers[activeDeck().exercise] = activeExercise().questions.map(() => null);
    if (activeExercise().pbq) resetActivePBQ();
    updateControls();
    document.querySelector('.slide-stage')?.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function toggleFullscreen() {
    const stage = document.querySelector('.slide-stage');
    if (!stage) return;
    if (document.fullscreenElement) document.exitFullscreen();
    else stage.requestFullscreen?.();
  }

  function render() {
    const deck = activeDeck();
    document.querySelector('#homeBtn').classList.remove('hidden');
    const exerciseThumbnail = deck.exercise
      ? `<button class="slide-thumbnail exercise-thumbnail ${isExercise() ? 'active' : ''}" data-slide-action="go" data-slide-number="${deck.count + 1}" aria-label="Abrir exercício de fixação do ${deck.title}" ${isExercise() ? 'aria-current="true"' : ''}><strong>?</strong><small>Fixação</small><span>FIX</span></button>`
      : '';
    document.querySelector('#app').innerHTML = `
      <section class="slides-module">
        <header class="slides-head">
          <div>
            <span class="eyebrow">Módulo Slide</span>
            <h1>Apresentações ITIL Foundation</h1>
            <p>${TOTAL_SLIDES} slides em alta resolução, organizados por etapa do curso.</p>
          </div>
          <div class="slides-head-actions">
            <button class="slide-tool" data-slide-action="zoom-out" aria-label="Diminuir zoom">−</button>
            <strong id="slideZoom">${zoom}%</strong>
            <button class="slide-tool" data-slide-action="zoom-in" aria-label="Aumentar zoom">+</button>
            <button class="slide-tool fullscreen-tool" data-slide-action="fullscreen">Tela cheia</button>
          </div>
        </header>
        <nav class="deck-picker" aria-label="Escolha a apresentação">
          ${DECKS.map((item, index) => `<button class="deck-button ${index === activeDeckIndex ? 'active' : ''}" data-slide-action="deck" data-deck-index="${index}" ${index === activeDeckIndex ? 'aria-current="true"' : ''}><span>${item.title}</span><small>${item.count} slides${item.exercise ? ' + fixação' : ''}</small></button>`).join('')}
        </nav>
        <div class="slides-layout">
          <aside class="slides-sidebar" aria-label="Lista de slides de ${deck.title}">
            <div class="slides-sidebar-title"><strong>${deck.title}</strong><span>${deck.count} slides${deck.exercise ? ' + fixação' : ''}</span></div>
            <div class="slides-thumbnails">
              ${Array.from({ length: deck.count }, (_, index) => {
                const number = index + 1;
                return `<button class="slide-thumbnail ${number === currentSlide ? 'active' : ''}" data-slide-action="go" data-slide-number="${number}" aria-label="Abrir ${deck.title}, slide ${number}" ${number === currentSlide ? 'aria-current="true"' : ''}><img src="${slidePath(deck, number)}" alt="" loading="lazy" decoding="async"><span>${String(number).padStart(2, '0')}</span></button>`;
              }).join('')}
              ${exerciseThumbnail}
            </div>
          </aside>
          <section class="slide-viewer">
            <div class="slide-toolbar">
              <button class="slide-nav" data-slide-action="previous">← Anterior</button>
              <label class="slide-position">
                <span class="sr-only">Número do slide</span>
                <input id="slideCurrent" data-slide-jump type="number" min="1" max="${deck.count}" value="${Math.min(currentSlide, deck.count)}">
                <strong id="slideCounter">de ${deck.count}</strong>
              </label>
              <button class="slide-nav" data-slide-action="next">Próximo →</button>
            </div>
            <figure class="slide-stage"></figure>
            <p id="slideStatus" class="slide-status" aria-live="polite"></p>
          </section>
        </div>
      </section>`;
    updateControls();
  }

  function open() {
    activeDeckIndex = 0;
    currentSlide = 1;
    zoom = 100;
    exerciseAnswers = createExerciseAnswers();
    resetPBQ();
    resetRolePBQ();
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  document.addEventListener('click', event => {
    const control = event.target.closest('[data-slide-action]');
    if (!control || !document.querySelector('.slides-module')) return;
    const actions = {
      previous: () => move(-1),
      next: () => move(1),
      go: () => goTo(control.dataset.slideNumber),
      deck: () => selectDeck(control.dataset.deckIndex),
      'zoom-out': () => changeZoom(-1),
      'zoom-in': () => changeZoom(1),
      fullscreen: toggleFullscreen,
      'exercise-answer': () => answerExercise(control.dataset.questionIndex, control.dataset.answer),
      'exercise-restart': restartExercise,
      'pbq-select': () => selectPBQItem(control.dataset.pbqItem),
      'pbq-slot': () => usePBQSlot(control.dataset.pbqSlot),
      'pbq-check': checkPBQ,
      'pbq-retry': retryPBQ,
      'role-pbq-select': () => selectRolePBQItem(control.dataset.rolePbqItem),
      'role-pbq-slot': () => useRolePBQSlot(control.dataset.rolePbqSlot),
      'role-pbq-check': checkRolePBQ,
      'role-pbq-retry': retryRolePBQ
    };
    actions[control.dataset.slideAction]?.();
  });

  document.addEventListener('change', event => {
    if (event.target.matches('[data-slide-jump]') && document.querySelector('.slides-module')) goTo(event.target.value);
  });

  document.addEventListener('dragstart', event => {
    const source = event.target.closest('[data-pbq-drag-item], [data-role-pbq-drag-item]');
    if (!source) return;
    const roleType = source.hasAttribute('data-role-pbq-drag-item');
    const itemId = roleType ? source.dataset.rolePbqDragItem : source.dataset.pbqDragItem;
    const blocked = roleType ? rolePbqChecked : pbqChecked;
    const exerciseVisible = document.querySelector(roleType ? '.role-pbq-exercise' : '.pbq-exercise');
    if (!itemId || blocked || !exerciseVisible) return;
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', itemId);
    event.dataTransfer.setData('application/x-itil-pbq-type', roleType ? 'roles' : 'chain');
    source.classList.add('dragging');
  });

  document.addEventListener('dragover', event => {
    const target = event.target.closest('[data-pbq-slot], [data-pbq-bank], [data-role-pbq-slot], [data-role-pbq-bank]');
    if (!target) return;
    const roleType = target.matches('[data-role-pbq-slot], [data-role-pbq-bank]');
    if (roleType ? rolePbqChecked : pbqChecked) return;
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    target.classList.add('drag-over');
  });

  document.addEventListener('dragleave', event => {
    event.target.closest('[data-pbq-slot], [data-pbq-bank], [data-role-pbq-slot], [data-role-pbq-bank]')?.classList.remove('drag-over');
  });

  document.addEventListener('drop', event => {
    const target = event.target.closest('[data-pbq-slot], [data-pbq-bank], [data-role-pbq-slot], [data-role-pbq-bank]');
    if (!target) return;
    const roleType = target.matches('[data-role-pbq-slot], [data-role-pbq-bank]');
    if (roleType ? rolePbqChecked : pbqChecked) return;
    event.preventDefault();
    target.classList.remove('drag-over');
    const itemId = event.dataTransfer.getData('text/plain');
    if (roleType) {
      if (!rolePBQItem(itemId)) return;
      if (target.matches('[data-role-pbq-slot]')) {
        placeRolePBQItem(itemId, target.dataset.rolePbqSlot);
        return;
      }
      const previousSlot = rolePbqSlots.indexOf(itemId);
      if (previousSlot < 0) return;
      const scrollTop = document.querySelector('.slide-stage')?.scrollTop || 0;
      rolePbqSlots[previousSlot] = null;
      refreshExercise(scrollTop);
      return;
    }
    if (!pbqItem(itemId)) return;
    if (target.matches('[data-pbq-slot]')) {
      placePBQItem(itemId, target.dataset.pbqSlot);
      return;
    }
    const previousSlot = pbqSlots.indexOf(itemId);
    if (previousSlot < 0) return;
    const scrollTop = document.querySelector('.slide-stage')?.scrollTop || 0;
    pbqSlots[previousSlot] = null;
    refreshExercise(scrollTop);
  });

  document.addEventListener('dragend', event => {
    event.target.closest('[data-pbq-drag-item], [data-role-pbq-drag-item]')?.classList.remove('dragging');
    document.querySelectorAll('.drag-over').forEach(element => element.classList.remove('drag-over'));
  });

  document.addEventListener('keydown', event => {
    const isTyping = event.target instanceof Element && event.target.matches('input, textarea, select, [data-pbq-slot], [data-pbq-item], [data-role-pbq-slot], [data-role-pbq-item]');
    if (!document.querySelector('.slides-module') || isTyping) return;
    if (event.key === 'ArrowLeft') move(-1);
    if (event.key === 'ArrowRight') move(1);
    if (event.key === 'Home') selectDeck(0, 1);
    if (event.key === 'End') selectDeck(DECKS.length - 1, DECKS[DECKS.length - 1].count);
  });

  return { open, total: TOTAL_SLIDES, decks: DECKS };
})();
