/* Simulado 3 — termos e definições do ITIL Foundation QRG v5.0 (PT-BR). */
const QRG_TERMS = [];
const D = (term, definition, reference, category) => QRG_TERMS.push({ term, definition, reference, category });

// 1. Principais termos e definições
D('Produto digital', 'Combinação dos recursos de uma organização baseada em tecnologia digital e projetada para oferecer valor aos consumidores.', '1.1.1', 'fundamentos');
D('Gerenciamento de produtos e serviços digitais', 'Conjunto de capacidades organizacionais especializadas para habilitar valor para os clientes na forma de produtos digitais e serviços.', '1.1.1', 'fundamentos');
D('Produto', 'Configuração de recursos de uma organização que se destina a oferecer valor para os consumidores.', '1.1.2', 'fundamentos');
D('Serviço', 'Meio de habilitar a cocriação de valor ao facilitar resultados desejados pelos consumidores, sem que eles gerenciem custos e riscos específicos.', '1.1.2', 'fundamentos');
D('Serviço digital', 'Serviço que depende total ou amplamente de produtos digitais.', '1.1.3', 'fundamentos');
D('Melhoria contínua', 'Atividade organizacional recorrente, realizada em todos os níveis, para atender continuamente às expectativas dos stakeholders.', '1.1.4', 'fundamentos');
D('Ciclo de vida', 'Conjunto completo de estágios, transições e respectivos status na vida de um serviço, produto, prática ou outra entidade.', '1.1.5', 'fundamentos');
D('Bens', 'Recursos tangíveis transferidos ou disponíveis para transferência do provedor ao consumidor, com propriedade, direitos e responsabilidades associados.', '1.1.6', 'fundamentos');
D('Utilidade', 'Funcionalidade oferecida por um produto ou serviço para atender a uma necessidade específica; representa o que o serviço faz e sua adequação ao propósito.', '1.1.7', 'fundamentos');
D('Garantia', 'Certeza de que um produto ou serviço atenderá aos requisitos acordados; representa como o serviço funciona e sua adequação ao uso.', '1.1.7', 'fundamentos');
D('Experiência do usuário (UX)', 'Soma das interações funcionais e emocionais com um serviço e seu provedor, conforme percebidas pelo usuário.', '1.1.7', 'fundamentos');
D('Sustentabilidade', 'Garantia de que um produto ou serviço atende e continuará atendendo a requisitos ambientais, sociais e econômicos.', '1.1.7', 'fundamentos');

D('Oferta de serviços', 'Descrição formal de um ou mais serviços para um grupo de consumidores-alvo, podendo incluir bens, acesso a recursos e ações de serviço.', '1.2.1', 'oferta_valor');
D('Ação de serviço', 'Ação realizada pelo provedor de serviços ou conjuntamente pelo provedor e pelo consumidor.', '1.2.2', 'oferta_valor');
D('Transferência de bens', 'Interação em que o provedor entrega bens tangíveis ao consumidor e transfere propriedade, direitos e responsabilidades.', '1.2.2', 'oferta_valor');
D('Acesso a recursos', 'Interação em que o consumidor recebe direito de usar recursos do provedor sob condições acordadas, sem transferência de propriedade.', '1.2.2', 'oferta_valor');
D('Valor', 'Benefícios, utilidade e importância percebidos em algo.', '1.3.1', 'oferta_valor');
D('Cocriação de valor', 'Processo colaborativo pelo qual provedores, consumidores e stakeholders criam valor juntos usando produtos e serviços.', '1.3.1', 'oferta_valor');
D('Custo', 'Montante de dinheiro gasto em uma atividade, recurso, produto ou serviço específico.', '1.3.2', 'oferta_valor');
D('Risco', 'Evento possível que pode causar dano ou perda, ou dificultar o alcance dos objetivos.', '1.3.2', 'oferta_valor');
D('Saída', 'Entregável tangível ou intangível de uma atividade.', '1.3.3', 'oferta_valor');
D('Resultado', 'Consequência ou efeito para um stakeholder habilitado por uma ou mais saídas.', '1.3.3', 'oferta_valor');

D('Organização', 'Pessoa ou grupo de pessoas com funções, responsabilidades, autoridades e relacionamentos próprios para atingir objetivos.', '1.4.1', 'relacionamentos');
D('Provedor de serviços', 'Organização responsável pela entrega e pelo suporte de serviços.', '1.4.1', 'relacionamentos');
D('Consumidor de serviços', 'Organização responsável pela aquisição e pelo uso de serviços.', '1.4.1', 'relacionamentos');
D('Fornecedor de produtos digitais', 'Organização responsável pela criação e melhoria contínua de produtos digitais e das ofertas relacionadas.', '1.4.1', 'relacionamentos');
D('Relacionamento básico de serviços', 'Engajamento focado em suporte e eficiência, geralmente com serviços padronizados e contratos ou SLAs padrão.', '1.4.2', 'relacionamentos');
D('Relacionamento de serviços cooperativo', 'Engajamento focado em melhoria e efetividade, com configuração ou customização e envolvimento operacional e tático.', '1.4.2', 'relacionamentos');
D('Relacionamento de serviços colaborativo', 'Parceria focada em inovação e crescimento, com alinhamento estratégico, metas compartilhadas, personalização e alta confiança.', '1.4.2', 'relacionamentos');
D('Jornada de serviço', 'Soma das atividades e interações realizadas pelas organizações para cumprir seus papéis de provedor e consumidor.', '1.4.3', 'relacionamentos');
D('Patrocinador', 'Papel que autoriza o orçamento para o consumo de serviços.', '1.4.4', 'relacionamentos');
D('Cliente', 'Papel que define requisitos e assume responsabilidade pelos resultados do consumo dos serviços.', '1.4.4', 'relacionamentos');
D('Usuário', 'Papel que utiliza os serviços.', '1.4.4', 'relacionamentos');
D('Qualidade de serviço', 'Soma das características de um serviço relevantes para satisfazer necessidades declaradas e implícitas.', '1.4.5', 'relacionamentos');
D('Nível de serviço', 'Conjunto de métricas que definem a qualidade de serviço esperada ou alcançada.', '1.4.5', 'relacionamentos');
D('Acordo de Nível de Serviço (SLA)', 'Acordo documentado entre provedor e cliente que identifica serviços fornecidos e o nível acordado de cada serviço.', '1.4.6', 'relacionamentos');

// 2. Quatro dimensões e fatores externos
D('Organizações e pessoas', 'Dimensão que aborda estrutura, cultura, liderança, competências, comunicação e aspectos humanos do gerenciamento.', '2.1', 'dimensoes');
D('Informação e tecnologia', 'Dimensão que aborda dados, informações, conhecimento e tecnologias usados em produtos e serviços.', '2.1', 'dimensoes');
D('Parceiros e fornecedores', 'Dimensão que analisa relacionamentos externos, contratos, acordos e estratégias de fornecimento.', '2.1', 'dimensoes');
D('Fluxos de valor e processos', 'Dimensão que trata de como atividades, fluxos de trabalho, controles e processos se integram para criar valor.', '2.1', 'dimensoes');
D('Fatores PESTLE', 'Fatores políticos, econômicos, sociais, tecnológicos, legais e ambientais externos que influenciam as quatro dimensões.', '2.2', 'dimensoes');

// 3. Ciclo de vida de produtos e serviços
D('Descoberta', 'Atividade que explora e prioriza necessidades e oportunidades para produtos e serviços, alinhando-as à estratégia.', '3.1.1/3.2.1', 'ciclo_vida');
D('Design', 'Atividade que transforma requisitos em soluções de produtos e serviços capazes de atendê-los ou superá-los.', '3.1.1/3.2.2', 'ciclo_vida');
D('Aquisição', 'Atividade que providencia ou aloca eficientemente os recursos necessários para construir produtos e sustentar serviços.', '3.1.1/3.2.3', 'ciclo_vida');
D('Construção', 'Atividade que desenvolve, integra, configura e testa as soluções tecnológicas que constituem o produto.', '3.1.1/3.2.4', 'ciclo_vida');
D('Transição', 'Atividade que implanta produto novo ou alterado em produção com disrupção e risco controlados.', '3.1.1/3.2.5', 'ciclo_vida');
D('Operação', 'Atividade que mantém o produto funcionando com desempenho, confiabilidade e segurança acordados.', '3.1.1/3.2.6', 'ciclo_vida');
D('Entrega', 'Atividade que fornece serviços digitais aos consumidores com base nos produtos em produção.', '3.1.1/3.2.7', 'ciclo_vida');
D('Suporte', 'Atividade que restaura a operação normal de produtos e a entrega de serviços quando necessário.', '3.1.1/3.2.8', 'ciclo_vida');
D('Especificação de produto ou serviço', 'Descrição detalhada do que será construído, incluindo requisitos e características da solução.', '3.2.2', 'ciclo_vida');
D('Protótipo', 'Versão ou modelo inicial de uma solução usado para testar hipóteses e suposições de design.', '3.2.2', 'ciclo_vida');

// 4. Sistema de Valor e princípios orientadores
D('Sistema de Valor do ITIL (ITIL VS)', 'Modelo de como componentes e atividades da organização trabalham juntos para criar valor por produtos e serviços digitais.', '4.1', 'sistema_valor');
D('Princípios Orientadores', 'Recomendações que guiam a organização em todas as circunstâncias, independentemente de mudanças em objetivos ou estrutura.', '4.1.1', 'sistema_valor');
D('Cadeia de valor', 'Elemento central do Sistema de Valor com atividades interconectadas para responder à demanda e facilitar a criação de valor.', '4.1.1/4.4.1', 'sistema_valor');
D('Práticas de gerenciamento no ITIL VS', 'Recursos e capacidades que apoiam a cadeia de valor com ferramentas, conhecimentos e métodos de trabalho.', '4.1.1', 'sistema_valor');
D('Melhoria contínua no ITIL VS', 'Mentalidade e atividade incorporada ao sistema para fazer serviços, práticas e atividades evoluírem com base em feedback.', '4.1.1', 'sistema_valor');

D('Focar no valor', 'Princípio segundo o qual tudo o que a organização faz deve estar ligado ao valor para ela, clientes ou outros stakeholders.', '4.2.2', 'principios');
D('Começar de onde você está', 'Princípio que avalia e aproveita serviços, processos, pessoas e capacidades existentes antes de decidir o que mudar.', '4.2.3', 'principios');
D('Progredir iterativamente com feedback', 'Princípio que divide o trabalho em incrementos, aprende em cada iteração e ajusta o curso com feedback.', '4.2.4', 'principios');
D('Colaborar e promover visibilidade', 'Princípio que reúne as pessoas certas e torna trabalho, progresso, riscos e decisões visíveis.', '4.2.5', 'principios');
D('Pensar e trabalhar holisticamente', 'Princípio que considera o sistema como um todo e reconhece a interação entre suas partes.', '4.2.6', 'principios');
D('Manter de forma simples e prática', 'Princípio que usa o mínimo de etapas necessário para produzir valor e elimina o que não contribui.', '4.2.7', 'principios');
D('Otimizar e automatizar', 'Princípio que melhora e simplifica o trabalho antes de automatizá-lo, preservando governança e supervisão humana.', '4.2.8', 'principios');

D('Governança', 'Sistema pelo qual uma organização é dirigida e controlada.', '4.3.1', 'governanca');
D('Governança da tecnologia digital', 'Sistema baseado em seres humanos pelo qual o uso atual e futuro da tecnologia digital é dirigido e controlado.', '4.3.1', 'governanca');
D('Engajar os stakeholders', 'Atividade de governança que identifica stakeholders e compreende necessidades, expectativas e percepções de valor.', '4.3.2', 'governanca');
D('Avaliar', 'Atividade de governança que examina desempenho, ambiente, necessidades, riscos e oportunidades.', '4.3.2', 'governanca');
D('Direção', 'Atividade de governança que define ou ajusta rumo, decisões estratégicas, políticas, responsabilidades e limites.', '4.3.2', 'governanca');
D('Monitoramento', 'Atividade de governança que acompanha desempenho e conformidade em relação à direção, políticas e resultados.', '4.3.2', 'governanca');

// 4.4 Cadeia de valor e operação
D('Incidente', 'Interrupção não planejada ou redução na qualidade de um serviço.', '4.4.3', 'operacao');
D('Evento', 'Mudança de estado que tenha significado para o gerenciamento de produto, serviço ou item de configuração.', '4.4.3', 'operacao');
D('Release', 'Versão de produto, serviço, item de configuração ou coleção de itens disponibilizada para uso.', '4.4.4', 'operacao');
D('Teste', 'Atividade em que sistema ou componente é executado sob condições especificadas, os resultados são observados e um aspecto é avaliado.', '4.4.4', 'operacao');
D('Integração contínua (CI)', 'Técnicas e ferramentas para integrar frequentemente mudanças de código em repositório central, seguidas por builds e testes automatizados.', '4.4.5', 'entrega_software');
D('Entrega contínua (CD)', 'Técnicas e ferramentas que mantêm atualizações prontas para produção, com a decisão de implantar tomada caso a caso.', '4.4.5', 'entrega_software');
D('Implantação contínua', 'Técnicas e ferramentas que implantam automaticamente em produção toda mudança aprovada nos testes, sem autorização adicional.', '4.4.5', 'entrega_software');
D('Confiabilidade', 'Capacidade de produto, serviço ou item de configuração realizar sua função pretendida pelo período ou número de ciclos acordado.', '4.4.6', 'entrega_software');
D('Engenharia de Confiabilidade de Sites (SRE)', 'Disciplina que aplica engenharia de software a infraestrutura e operações para criar sistemas escaláveis e confiáveis.', '4.4.6', 'entrega_software');
D('Observabilidade', 'Capacidade de compreender o estado interno de sistema complexo com base em dados externos, como métricas, logs e rastreamentos.', '4.4.6', 'entrega_software');
D('Requisição de serviço', 'Solicitação de usuário ou representante autorizado que inicia uma ação acordada como parte normal da entrega.', '4.4.7', 'operacao');
D('Desastre', 'Evento súbito e imprevisto que causa grandes danos ou perdas graves e exige resposta coordenada.', '4.4.8', 'operacao');
D('Problema', 'Causa real ou potencial de um ou mais incidentes.', '4.4.8', 'operacao');
D('Erro', 'Falha ou vulnerabilidade que pode causar incidentes.', '4.4.8', 'operacao');
D('Erro conhecido', 'Problema que foi analisado, mas ainda não foi resolvido.', '4.4.8', 'operacao');
D('Modelo operacional', 'Representação conceitual ou visual de como a organização configura capacidades e recursos para atingir objetivos.', '4.4.9', 'operacao');

// 4.5, 4.6 e 5. Práticas, melhoria e fluxos de valor
D('Prática de gerenciamento', 'Conjunto de recursos e capacidades organizacionais projetados para executar trabalho ou alcançar objetivo.', '4.5.1', 'praticas');
D('Práticas de gerenciamento de produtos e serviços digitais', 'Práticas específicas para gerenciar produtos e serviços digitais ao longo do ciclo de vida.', '4.5.2', 'praticas');
D('Práticas de gerenciamento geral', 'Práticas aplicáveis a qualquer produto, serviço ou organização, além do contexto digital.', '4.5.2', 'praticas');
D('Métrica', 'Medição ou cálculo monitorado ou reportado para gerenciamento e melhoria.', '4.5.6', 'praticas');
D('Fator crítico de sucesso (CSF)', 'Condição prévia necessária para alcançar os resultados pretendidos de prática, atividade ou iniciativa.', '4.5.6', 'praticas');

D('Qual é a visão?', 'Passo que relaciona a melhoria à visão, missão, metas e objetivos da organização.', '4.6', 'melhoria_modelo');
D('Onde estamos agora?', 'Passo que avalia o estado atual com dados objetivos e estabelece uma linha de base.', '4.6', 'melhoria_modelo');
D('Onde queremos estar?', 'Passo que define estado-alvo, resultados desejados e critérios mensuráveis de sucesso.', '4.6', 'melhoria_modelo');
D('Como chegamos lá?', 'Passo que cria o plano e seleciona a abordagem para alcançar o estado-alvo.', '4.6', 'melhoria_modelo');
D('Aja!', 'Passo em que o plano de melhoria é executado iterativamente, com feedback e gerenciamento de mudanças.', '4.6', 'melhoria_modelo');
D('Chegamos lá?', 'Passo que mede resultados e os compara com metas, linha de base e critérios de sucesso.', '4.6', 'melhoria_modelo');
D('Como mantemos o ritmo?', 'Passo que sustenta ganhos, incorpora a melhoria ao trabalho e identifica novas oportunidades.', '4.6', 'melhoria_modelo');

D('Fluxo de valor', 'Série de etapas usada por uma organização para criar e entregar produtos e serviços aos consumidores.', '5.1.1', 'fluxos');
D('Fluxo de valor principal', 'Fluxo que habilita diretamente a criação de valor para consumidores externos.', '5.1.1', 'fluxos');
D('Fluxo de valor habilitador', 'Fluxo que cria valor para clientes internos e sustenta um ou mais fluxos principais.', '5.1.1', 'fluxos');
D('Mapeamento do fluxo de valor', 'Técnica para representar visualmente e analisar fluxos, etapas, tempos, transferências e desperdícios.', '5.1.2', 'fluxos');
D('Gerenciamento de fluxo de valor', 'Prática contínua de supervisionar fluxos de ponta a ponta para melhorar fluxo, resultados e criação de valor.', '5.1.2', 'fluxos');
D('Pensamento complexo', 'Abordagem baseada no reconhecimento de interações, incerteza, emergência e comportamento não linear dos sistemas.', '5.1.3', 'fluxos');

// 6. Inteligência Artificial
D('Inteligência Artificial (IA)', 'Capacidade de sistemas digitais executarem tarefas que normalmente exigem inteligência humana, como aprender, reconhecer padrões ou decidir.', '6.1.1', 'ia_conceitos');
D('Maturidade de IA', 'Extensão em que uma organização usa IA de forma eficaz, responsável e consistente, incluindo governança, dados, habilidades, processos e ética.', '6.1.1', 'ia_conceitos');
D('IA Generativa (GenAI)', 'Sistemas de IA que criam novos conteúdos com base em padrões aprendidos de dados existentes.', '6.1.1', 'ia_conceitos');
D('Agente de IA', 'Sistema de IA que age em nome dos usuários e executa tarefas autonomamente dentro de limites acordados e sob supervisão humana.', '6.1.1', 'ia_conceitos');
D('Governança de IA', 'Sistema para direcionar, controlar e monitorar o uso da IA, garantindo valor, ética, segurança, conformidade e alinhamento.', '6.2.1', 'ia_conceitos');
D('Criação (capacidade de IA)', 'Capacidade em que a IA gera saídas totalmente novas em resposta a prompts ou gatilhos.', '6.2.2', 'ia_capacidades');
D('Curadoria (capacidade de IA)', 'Capacidade em que a IA melhora qualidade, organização e relevância de dados ou conhecimentos existentes.', '6.2.2', 'ia_capacidades');
D('Esclarecimento (capacidade de IA)', 'Capacidade em que a IA ajuda a encontrar e entender conteúdo ao resumir, reformular, reestruturar ou traduzir.', '6.2.2', 'ia_capacidades');
D('Cognição (capacidade de IA)', 'Capacidade em que a IA identifica padrões, anomalias ou insights ocultos para detecção, previsão e análise.', '6.2.2', 'ia_capacidades');
D('Comunicação (capacidade de IA)', 'Capacidade em que a IA funciona como interface comunicativa para interação natural com serviços e sistemas.', '6.2.2', 'ia_capacidades');
D('Coordenação (capacidade de IA)', 'Capacidade em que a IA executa, orquestra ou aciona ações autonomamente em resposta a eventos, requisições ou padrões.', '6.2.2', 'ia_capacidades');

function buildQrgQuestion(term, questionIndex) {
  const sameCategory = QRG_TERMS.filter(item => item.category === term.category && item !== term);
  const candidates = [...sameCategory, ...QRG_TERMS.filter(item => item.category !== term.category)];
  const distractors = [];
  for (let step = 0; distractors.length < 3; step += 1) {
    const candidate = candidates[(questionIndex * 3 + step * 5) % candidates.length];
    if (!distractors.includes(candidate)) distractors.push(candidate);
  }
  const correctPosition = questionIndex % 4;
  const options = distractors.slice();
  options.splice(correctPosition, 0, term);
  return {
    q: `Qual termo do ITIL corresponde à definição a seguir? “${term.definition}”`,
    o: options.map(option => option.term),
    a: 'ABCD'[correctPosition],
    e: `${term.term}: ${term.definition} Referência: seção ${term.reference} do guia.`,
    x: options.map(option => option === term
      ? `Esta é a definição correta de ${term.term}. Referência: seção ${term.reference} do guia.`
      : `${option.term} significa: ${option.definition} Por isso, não corresponde ao enunciado. Esse conteúdo pertence à seção ${option.reference} do guia.`)
  };
}

const SIMULADO_3 = {
  title: 'Simulado 3 — Termos e Definições',
  questions: QRG_TERMS.map(buildQrgQuestion)
};

if (SIMULADO_3.questions.length !== QRG_TERMS.length || SIMULADO_3.questions.some(q => q.o.length !== 4 || q.x.length !== 4)) {
  throw new Error('Falha na cobertura das definições do Simulado 3.');
}

SIMULADOS.push(SIMULADO_3);
