// Questões importadas dos três HTMLs fornecidos na pasta Google AI.

// Fonte: 1-simulado-ai901.html
(() => {
const AREAS = {
  A: { name: "Conceitos e capacidades de IA", short: "Conceitos de IA", weight: "40–45%" },
  B: { name: "Soluções com Microsoft Foundry", short: "Foundry", weight: "55–60%" }
};
const TOPICS = {
  A1: { area: "A", name: "IA responsável" },
  A2: { area: "A", name: "Modelos e configuração" },
  A3: { area: "A", name: "Cargas de trabalho de IA" },
  B1: { area: "B", name: "Apps generativos e agentes" },
  B2: { area: "B", name: "Texto e fala" },
  B3: { area: "B", name: "Visão e geração de imagens" },
  B4: { area: "B", name: "Extração de informações" }
};

const Q = [
/* ---------- A1 · IA responsável ---------- */
{ id:"a1-1", t:"A1", type:"single",
  stem:"Um banco usa um modelo para pré-aprovar crédito. Uma auditoria mostra que candidatos de determinados bairros são recusados com mais frequência, mesmo com renda e histórico equivalentes aos de outros candidatos. Qual princípio de IA responsável está sendo violado?",
  opts:["Equidade (fairness)","Confiabilidade e segurança (reliability and safety)","Transparência (transparency)","Inclusão (inclusiveness)"], ans:0,
  why:"Equidade trata de sistemas que tratam todas as pessoas de forma justa. Resultados diferentes para grupos com perfis equivalentes indicam viés. A mitigação envolve avaliar o modelo por subgrupos, revisar os dados de treino e remover atributos que funcionam como substitutos de características sensíveis (como o bairro)." },
{ id:"a1-2", t:"A1", type:"single",
  stem:"Uma empresa publica um documento explicando para que seu sistema de IA foi projetado, quais são suas limitações conhecidas e quais fatores influenciam as decisões dele. Qual princípio essa prática atende principalmente?",
  opts:["Responsabilidade (accountability)","Transparência (transparency)","Privacidade e segurança (privacy and security)","Equidade (fairness)"], ans:1,
  why:"Transparência significa que as pessoas conseguem entender como o sistema funciona, o que ele faz bem e onde falha. A Microsoft publica Transparency Notes para seus serviços de IA com esse objetivo." },
{ id:"a1-3", t:"A1", type:"single",
  stem:"Ao desenvolver um assistente por voz, a equipe convida pessoas com deficiência de fala, idosos e falantes com sotaques regionais para testar o produto desde o início. Qual princípio orienta essa decisão?",
  opts:["Confiabilidade e segurança","Transparência","Inclusão","Responsabilidade"], ans:2,
  why:"Inclusão trata de projetar IA que beneficie e envolva todas as pessoas, incluindo pessoas com deficiência e grupos sub-representados. Envolver esses usuários no design e nos testes é a prática central desse princípio." },
{ id:"a1-4", t:"A1", type:"single",
  stem:"Uma organização cria um comitê que revisa sistemas de IA antes do lançamento, define quem responde por falhas e garante que humanos possam supervisionar e reverter decisões automatizadas. Qual princípio é atendido?",
  opts:["Responsabilidade (accountability)","Inclusão","Equidade","Transparência"], ans:0,
  why:"Accountability: quem projeta e implanta IA responde pelo funcionamento do sistema. Governança, papéis definidos e supervisão humana (human-in-the-loop) são as práticas típicas." },
{ id:"a1-5", t:"A1", type:"single",
  stem:"Um sistema de triagem hospitalar é testado com casos raros e extremos antes de entrar em produção. Quando a confiança da previsão é baixa, o caso é encaminhado automaticamente para um profissional. Qual princípio está sendo aplicado?",
  opts:["Privacidade e segurança","Confiabilidade e segurança (reliability and safety)","Transparência","Equidade"], ans:1,
  why:"Confiabilidade e segurança exigem que o sistema funcione de forma consistente, inclusive em condições inesperadas, e que falhe de forma segura. Testes rigorosos e limiares de confiança com revisão humana são práticas comuns." },
{ id:"a1-6", t:"A1", type:"yesno",
  stem:"Para cada afirmação, marque Sim se for verdadeira ou Não se for falsa.",
  items:[
    ["Remover dados pessoais identificáveis de logs antes de usá-los para avaliar ou ajustar um modelo é uma consideração de privacidade e segurança.", true],
    ["Informar ao usuário que ele está conversando com um agente de IA, e não com uma pessoa, é uma consideração de transparência.", true],
    ["Os filtros de conteúdo (guardrails) do Microsoft Foundry garantem que o modelo nunca gere respostas factualmente incorretas.", false]
  ],
  why:"Proteger dados pessoais é privacidade e segurança. Deixar claro que o usuário fala com uma IA é transparência. A terceira é falsa: os guardrails do Foundry detectam riscos como ódio, violência, conteúdo sexual, automutilação, ataques de prompt, material protegido e PII, e então anotam ou bloqueiam o conteúdo. Há também um controle de groundedness (em preview) que sinaliza respostas não fundamentadas nos documentos fornecidos, mas ele só reduz o risco e não garante que o modelo nunca erre. Alucinações são reduzidas com grounding (RAG), bons prompts e avaliação." },

/* ---------- A2 · Modelos e configuração ---------- */
{ id:"a2-1", t:"A2", type:"single",
  stem:"Qual afirmação descreve melhor como um modelo de linguagem generativo (LLM) produz uma resposta?",
  opts:["Ele busca a resposta exata em um banco de dados de perguntas e respostas.","Ele prevê, token a token, a continuação mais provável com base no prompt e nos tokens já gerados.","Ele executa regras escritas manualmente por especialistas para cada tipo de pergunta.","Ele copia trechos inteiros dos documentos usados no treinamento."], ans:1,
  why:"LLMs baseados na arquitetura transformer geram texto de forma probabilística, prevendo o próximo token a partir do contexto (prompt + tokens anteriores). Por isso podem produzir respostas fluentes mas incorretas (alucinações) e são sensíveis a parâmetros como `temperature`." },
{ id:"a2-2", t:"A2", type:"single",
  stem:"No contexto de IA generativa, o que são embeddings?",
  opts:["Vetores numéricos que representam o significado de um conteúdo, de modo que textos semanticamente parecidos ficam próximos no espaço vetorial.","Arquivos de configuração que definem a persona do modelo.","Regras de filtro de conteúdo aplicadas às respostas.","Imagens incorporadas dentro de um prompt."], ans:0,
  why:"Embeddings transformam texto (ou imagens) em vetores. A distância entre vetores indica similaridade semântica, o que viabiliza busca semântica e RAG. No Foundry você usaria um modelo como `text-embedding-3-small` ou `text-embedding-3-large`." },
{ id:"a2-3", t:"A2", type:"single",
  stem:"Você usa um modelo implantado para extrair dados de e-mails e precisa que a mesma entrada produza respostas o mais consistentes possível. Qual ajuste é mais adequado?",
  opts:["Aumentar temperature para perto de 1","Diminuir temperature para perto de 0","Aumentar max tokens","Remover a mensagem de sistema"], ans:1,
  why:"`temperature` controla a aleatoriedade na escolha dos tokens. Valores baixos deixam a saída mais determinística e focada, ideal para extração e classificação. Valores altos aumentam a variedade, útil em tarefas criativas. Max tokens só limita o tamanho da resposta." },
{ id:"a2-4", t:"A2", type:"multi",
  stem:"Quais DOIS parâmetros de um modelo de chat influenciam diretamente o quão variada ou criativa será a resposta?",
  opts:["Temperature","Top P","Max tokens (tamanho máximo da resposta)","Stop sequences"], ans:[0,1],
  why:"Temperature e Top P (nucleus sampling) controlam como os próximos tokens são amostrados. A recomendação comum é ajustar um ou outro, não os dois ao mesmo tempo. Max tokens limita o comprimento, e stop sequences definem onde a geração para. Atenção: modelos de raciocínio, como o `gpt-5-mini` usado nos labs da AI-901, não aceitam temperature nem top_p. Neles você controla o tamanho com `max_output_tokens` e o raciocínio com o reasoning effort." },
{ id:"a2-5", t:"A2", type:"single",
  stem:"Um app precisa receber a foto de um painel de equipamento e responder em texto a perguntas como “alguma luz de alerta está acesa?”. Qual modelo você deve implantar?",
  opts:["text-embedding-3-large","gpt-5-mini (modelo multimodal)","whisper","gpt-image-1"], ans:1,
  why:"O cenário exige entrada de imagem + texto e saída em texto, ou seja, um modelo multimodal como o `gpt-5-mini`, usado nos labs da AI-901 (gpt-4o e gpt-4.1 estão sendo aposentados). Embeddings geram vetores, whisper transcreve áudio e gpt-image-1 gera ou edita imagens (a saída é imagem, não uma resposta em texto)." },
{ id:"a2-6", t:"A2", type:"single",
  stem:"Você precisa processar milhões de documentos com um modelo GPT. O resultado pode chegar em até 24 horas e o objetivo principal é reduzir custo. Qual tipo de implantação escolher?",
  opts:["Global Standard","Provisioned (PTU)","Global Batch","Data Zone Standard"], ans:2,
  why:"Global Batch processa solicitações de forma assíncrona, com janela-alvo de 24 horas e custo menor que o Standard. Provisioned reserva capacidade dedicada para latência previsível. Standard e Global Standard cobram por token em tempo real. Data Zone mantém o processamento dentro de uma zona geográfica (por exemplo, UE)." },
{ id:"a2-7", t:"A2", type:"single",
  stem:"Uma aplicação crítica tem tráfego alto e previsível e exige latência consistente, com capacidade reservada. Qual opção de implantação é a mais adequada?",
  opts:["Provisioned throughput (PTU)","Global Batch","Standard com pagamento por token","Developer"], ans:0,
  why:"Provisioned throughput reserva unidades de capacidade (PTUs) para o modelo, com throughput e latência previsíveis. Faz sentido para cargas altas e estáveis. Para uso variável, Standard ou Global Standard (pagamento por uso) costuma ser mais econômico." },
{ id:"a2-8", t:"A2", type:"single",
  stem:"Um assistente interno responde com informações desatualizadas sobre as políticas de RH da empresa, que mudam todo mês. Qual é a abordagem mais adequada?",
  opts:["Aumentar a temperature para o modelo explorar mais respostas","Recuperar os documentos de política atuais e incluí-los no prompt (RAG / grounding)","Reduzir o valor de max tokens","Trocar o modelo de chat por um modelo de embeddings"], ans:1,
  why:"Retrieval Augmented Generation (RAG) busca conteúdo relevante e atualizado (com Azure AI Search ou a ferramenta File search de um agente, por exemplo) e o coloca no contexto do prompt. Assim o modelo fundamenta a resposta em dados atuais sem precisar ser re-treinado." },
{ id:"a2-9", t:"A2", type:"single",
  stem:"Você precisa de um modelo para classificar tickets simples, com baixo custo e baixa latência, e talvez executá-lo em hardware limitado. Qual tipo de modelo do catálogo é o mais indicado?",
  opts:["Um modelo de raciocínio grande (ex.: GPT-5)","Um modelo de linguagem pequeno (SLM), como a família Phi","Um modelo de geração de imagens","Um modelo de speech-to-text"], ans:1,
  why:"Small language models (SLMs), como Phi, têm menos parâmetros, custam menos e respondem mais rápido. Servem bem para tarefas bem delimitadas. Modelos de raciocínio são indicados para problemas complexos de várias etapas, com custo e latência maiores." },

/* ---------- A3 · Cargas de trabalho ---------- */
{ id:"a3-1", t:"A3", type:"single",
  stem:"Qual técnica de análise de texto identifica e categoriza nomes de pessoas, organizações, locais, datas e valores em um texto?",
  opts:["Análise de sentimento","Extração de frases-chave","Reconhecimento de entidades nomeadas (NER)","Detecção de idioma"], ans:2,
  why:"NER (named entity recognition) localiza entidades no texto e as classifica em categorias como Person, Organization, Location e DateTime. Sentimento avalia a opinião expressa, frases-chave listam os temas principais e detecção de idioma identifica a língua." },
{ id:"a3-2", t:"A3", type:"single",
  stem:"Você quer gerar automaticamente uma lista com os principais termos e tópicos de milhares de artigos para facilitar a indexação. Qual técnica usar?",
  opts:["Extração de frases-chave (key phrase extraction)","Síntese de fala","Análise de sentimento","Detecção de objetos"], ans:0,
  why:"Key phrase extraction retorna os termos e conceitos principais de cada documento, úteis para indexação, tags e busca. Não exige treinar modelo." },
{ id:"a3-3", t:"A3", type:"single",
  stem:"Uma loja quer saber não só se uma avaliação é positiva ou negativa, mas o que o cliente achou de aspectos específicos (“a entrega foi rápida, mas a embalagem veio amassada”). Qual recurso atende melhor?",
  opts:["Detecção de PII","Análise de sentimento com mineração de opinião (opinion mining)","Extração de frases-chave","Detecção de idioma"], ans:1,
  why:"A análise de sentimento retorna um rótulo (positivo, negativo ou neutro) com pontuações de confiança para o documento e para cada frase. O rótulo misto (mixed) só aparece no nível do documento. Um modelo generativo implantado no Foundry também faz essa análise via prompt. Com opinion mining, o serviço associa o sentimento a aspectos específicos: entrega → positivo, embalagem → negativo." },
{ id:"a3-4", t:"A3", type:"single",
  stem:"Qual afirmação descreve corretamente a sumarização abstrativa?",
  opts:["Seleciona e copia as frases mais importantes do texto original.","Gera um texto novo que condensa as ideias principais, sem necessariamente reutilizar frases do original.","Traduz o texto para outro idioma mantendo o tamanho.","Remove dados pessoais do texto."], ans:1,
  why:"Sumarização extrativa escolhe frases do próprio texto. Sumarização abstrativa escreve frases novas que resumem o conteúdo. As duas existem no Azure Language, e modelos generativos fazem sumarização abstrativa via prompt." },
{ id:"a3-5", t:"A3", type:"yesno",
  stem:"Para cada afirmação sobre recursos de fala, marque Sim se for verdadeira ou Não se for falsa.",
  items:[
    ["Gerar legendas ao vivo de uma palestra é um cenário de reconhecimento de fala (speech-to-text).", true],
    ["Um app que lê mensagens em voz alta para motoristas usa síntese de fala (text-to-speech).", true],
    ["SSML (Speech Synthesis Markup Language) é usado para transcrever áudio gravado em texto.", false]
  ],
  why:"Reconhecimento de fala converte áudio em texto. Síntese de fala converte texto em áudio com vozes neurais. SSML é uma marcação para a síntese: controla voz, pronúncia, pausas, velocidade e entonação. Não é usado para transcrever." },
{ id:"a3-6", t:"A3", type:"single",
  stem:"Um varejista quer identificar cada produto em fotos de prateleiras e saber a posição de cada um na imagem. Qual tarefa de visão computacional atende ao cenário?",
  opts:["Classificação de imagem","Detecção de objetos","OCR (reconhecimento óptico de caracteres)","Geração de imagens"], ans:1,
  why:"Detecção de objetos identifica várias instâncias na imagem e retorna uma caixa delimitadora (bounding box) com coordenadas para cada uma. Classificação atribui um único rótulo à imagem inteira, e OCR lê texto." },
{ id:"a3-7", t:"A3", type:"single",
  stem:"Uma empresa quer digitalizar o texto de placas e cupons fiscais fotografados com o celular. Qual capacidade é necessária?",
  opts:["OCR (leitura de texto em imagens)","Detecção facial","Segmentação semântica","Síntese de fala"], ans:0,
  why:"OCR detecta e extrai texto impresso ou manuscrito de imagens e documentos. Modelos multimodais e o Content Understanding também conseguem ler texto em imagens." },
{ id:"a3-8", t:"A3", type:"single",
  stem:"Qual cenário descreve melhor uma solução de IA agêntica?",
  opts:["Um chatbot que responde perguntas frequentes a partir de uma lista fixa.","Um modelo que classifica fotos de produtos em categorias.","Um assistente que recebe um objetivo (“remarcar minha viagem”), planeja as etapas, consulta sistemas por meio de ferramentas e executa ações até concluir a tarefa.","Um serviço que converte texto em fala."], ans:2,
  why:"Agentes combinam um modelo generativo com instruções, ferramentas e memória de conversa para raciocinar, decidir e agir (chamar APIs, buscar dados, executar código) em nome do usuário. Os outros cenários são cargas de trabalho de IA mais tradicionais." },
{ id:"a3-9", t:"A3", type:"single",
  stem:"Uma seguradora recebe PDFs digitalizados, fotos de sinistros e gravações de ligações, e precisa transformar tudo em campos estruturados (número da apólice, data do incidente, valor estimado). Qual carga de trabalho de IA descreve esse cenário?",
  opts:["Extração de informações (information extraction)","Geração de imagens","Síntese de fala","Tradução automática"], ans:0,
  why:"Extração de informações converte conteúdo não estruturado (documentos, imagens, áudio e vídeo) em dados estruturados. No Foundry, o serviço para isso em várias modalidades é o Azure Content Understanding." },

/* ---------- B1 · Apps generativos e agentes ---------- */
{ id:"b1-1", t:"B1", type:"single",
  stem:"Em uma aplicação de chat, onde você deve definir a persona do assistente, o tom de voz, o escopo permitido e as regras que valem para toda a conversa?",
  opts:["Na mensagem de sistema (system message)","Em cada mensagem do usuário","No parâmetro max tokens","No nome da implantação do modelo"], ans:0,
  why:"A system message (ou as instructions, no caso de agentes) define comportamento, persona, limites e formato de resposta. As mensagens de usuário trazem o pedido específico de cada turno." },
{ id:"b1-2", t:"B1", type:"single",
  stem:"Você inclui no prompt três exemplos de entrada com a saída esperada antes da solicitação real, para que o modelo siga o mesmo formato. Como se chama essa técnica?",
  opts:["Zero-shot prompting","Few-shot prompting","Fine-tuning","Grounding com RAG"], ans:1,
  why:"Few-shot prompting fornece alguns exemplos no próprio prompt para demonstrar a tarefa e o formato. Zero-shot não usa exemplos. Fine-tuning altera os pesos do modelo com um conjunto de treino, e RAG coloca dados recuperados no contexto." },
{ id:"b1-3", t:"B1", type:"multi",
  stem:"Quais DUAS práticas tendem a melhorar a qualidade das respostas de um modelo generativo?",
  opts:["Especificar o formato de saída desejado (por exemplo, JSON com campos definidos ou uma lista com no máximo 5 itens).","Escrever instruções vagas para dar liberdade criativa ao modelo.","Fornecer contexto e dados de referência relevantes para a tarefa.","Combinar várias tarefas sem relação em uma única frase ambígua."], ans:[0,2],
  why:"Prompts eficazes são específicos: dizem o que fazer, em qual formato e com qual contexto. Instruções vagas e pedidos ambíguos aumentam a variabilidade e o risco de respostas fora do esperado." },
{ id:"b1-4", t:"B1", type:"single",
  stem:"Você acabou de implantar um modelo no portal do Microsoft Foundry e quer testar prompts, ajustar a mensagem de sistema e mudar parâmetros como temperature sem escrever código. O que usar?",
  opts:["O playground do modelo no Foundry (Chat playground no portal clássico)","O Azure Monitor","Templates do Azure Resource Manager","O Azure Machine Learning designer"], ans:0,
  why:"Ao implantar um modelo no portal, você cai direto no playground dele. Lá dá para conversar com a implantação, editar as instruções (system prompt), ajustar parâmetros e ver o código equivalente na aba Code." },
{ id:"b1-5", t:"B1", type:"single",
  stem:"Antes de implantar, você quer comparar modelos do catálogo por qualidade, custo e throughput. Qual recurso do Foundry ajuda nessa escolha?",
  opts:["Os leaderboards e benchmarks do catálogo de modelos","O playground de fala","O Content Understanding","Os filtros de conteúdo"], ans:0,
  why:"O catálogo de modelos do Foundry traz leaderboards e benchmarks que comparam modelos em qualidade, segurança, custo e desempenho. É o ponto de partida para escolher o modelo pela capacidade de que você precisa." },
{ id:"b1-6", t:"B1", type:"single",
  stem:"Complete o código para conectar a um projeto do Microsoft Foundry usando o SDK para Python com autenticação do Microsoft Entra ID.",
  code:`from azure.identity import DefaultAzureCredential
from azure.ai.projects import AIProjectClient

project_client = AIProjectClient(
    endpoint="https://<recurso>.services.ai.azure.com/api/projects/<projeto>",
    credential=__________,
)`,
  opts:["DefaultAzureCredential()","\"<chave-da-api>\"","\"gpt-4o\"","os.environ[\"PROJECT_NAME\"]"], ans:0,
  why:"O `AIProjectClient` recebe o endpoint do projeto e uma credencial de token do Entra ID. `DefaultAzureCredential` tenta várias fontes (Azure CLI após `az login`, identidade gerenciada, variáveis de ambiente), então o mesmo código funciona na sua máquina e no Azure." },
{ id:"b1-7", t:"B1", type:"single",
  stem:"No código abaixo, o que deve ser informado no parâmetro `model`?",
  code:`project_client = AIProjectClient(endpoint=project_endpoint, credential=DefaultAzureCredential())
openai_client = project_client.get_openai_client()

response = openai_client.responses.create(
    model=__________,
    instructions="Você é um assistente de viagens.",
    input="Sugira um roteiro de 3 dias em Lisboa.",
)
print(response.output_text)`,
  opts:["O nome da implantação (deployment) do modelo no projeto","O ID da assinatura do Azure","O endpoint do projeto","A região do recurso"], ans:0,
  why:"O parâmetro `model` recebe o nome da implantação que você criou no projeto, que pode ser diferente do nome do modelo base. Na Responses API, usada nos labs da AI-901, `instructions` faz o papel da system message e `response.output_text` traz o texto gerado. Na Chat Completions API, o equivalente é `response.choices[0].message.content`." },
{ id:"b1-8", t:"B1", type:"single",
  stem:"Seu app de chat funciona, mas o modelo não lembra o que o usuário disse na pergunta anterior. Qual é a causa mais provável?",
  opts:["A temperature está muito baixa.","Cada chamada é independente, e o app não está enviando as mensagens anteriores (user e assistant) junto com a nova pergunta.","O modelo precisa de fine-tuning para ter memória.","A implantação é do tipo Global Standard."], ans:1,
  why:"A API de chat não guarda estado: o modelo só “vê” o que está nas mensagens da requisição. Para manter o contexto, o app acrescenta cada pergunta e resposta à lista de mensagens (respeitando a janela de contexto) ou usa um recurso de conversa gerenciado pelo serviço." },
{ id:"b1-9", t:"B1", type:"multi",
  stem:"Ao criar um agente no portal do Foundry, quais TRÊS itens você normalmente configura?",
  opts:["A implantação do modelo que o agente usará","As instruções (instructions) do agente","As ferramentas e fontes de conhecimento (ex.: File search, Code interpreter)","O tamanho do cluster de GPUs para treinar o modelo"], ans:[0,1,2],
  why:"Um agente combina modelo + instruções + ferramentas. O modelo gera as respostas, as instruções definem objetivo e comportamento, e as ferramentas dão acesso a dados e ações. Criar um agente não envolve treinar modelo." },
{ id:"b1-10", t:"B1", type:"single",
  stem:"Um agente precisa receber um arquivo CSV de vendas, calcular totais por mês e gerar um gráfico. Qual ferramenta você deve adicionar?",
  opts:["File search","Code interpreter","Web search (Grounding with Bing)","Function calling"], ans:1,
  why:"Code interpreter permite ao agente escrever e executar código Python em sandbox para análise de dados, cálculos, arquivos e gráficos. File search faz busca semântica em documentos enviados, e Web search traz informação atual da web." },
{ id:"b1-11", t:"B1", type:"single",
  stem:"Um agente de RH deve responder perguntas com base em manuais em PDF enviados pela empresa, citando o conteúdo desses documentos. Qual ferramenta é a mais adequada?",
  opts:["Code interpreter","File search","Geração de imagens","Speech to text"], ans:1,
  why:"File search indexa os arquivos enviados em um vector store e faz busca semântica, fundamentando as respostas do agente no conteúdo dos documentos. É um RAG gerenciado pelo serviço. Code interpreter serve para executar código sobre dados." },
{ id:"b1-12", t:"B1", type:"single",
  stem:"Um agente de atendimento precisa consultar o status de um pedido no sistema interno da empresa, que expõe uma API REST. Como o agente deve obter essa informação?",
  opts:["Com uma ferramenta de function calling (ou OpenAPI) que chama a API do sistema de pedidos","Aumentando a janela de contexto do modelo","Colocando todos os pedidos da empresa na mensagem de sistema","Usando a ferramenta Code interpreter"], ans:0,
  why:"Com function calling ou uma ferramenta OpenAPI, o modelo decide quando chamar a função e com quais argumentos. A chamada é executada pelo seu app (function calling) ou pelo serviço (OpenAPI), e o resultado volta para o agente. Assim ele acessa dados atualizados sem colocá-los no prompt." },
{ id:"b1-13", t:"B1", type:"single",
  stem:"Em um app cliente para um agente do Foundry, o usuário faz várias perguntas seguidas e o agente precisa manter o contexto entre elas. O que o app deve fazer?",
  opts:["Criar uma nova conversa a cada pergunta","Reutilizar a mesma conversa e enviar cada nova mensagem nela","Recriar o agente a cada pergunta","Enviar só a última mensagem, sem vínculo com a conversa"], ans:1,
  why:"A conversa guarda o histórico de mensagens entre usuário e agente. No SDK atual, o app cria a conversa com `conversations.create()` e passa o mesmo ID em cada `responses.create` que referencia o agente. Nas APIs anteriores, esse papel era do thread. O agente é criado uma vez e só é referenciado nas chamadas." },
{ id:"b1-14", t:"B1", type:"single",
  stem:"Usuários estão tentando fazer o modelo ignorar a mensagem de sistema com textos como “esqueça todas as instruções anteriores”. Qual recurso de segurança do Foundry ajuda a detectar e bloquear isso?",
  opts:["Prompt Shields (detecção de jailbreak)","Detecção de groundedness","Aumento de temperature","Extração de frases-chave"], ans:0,
  why:"Prompt Shields, parte dos filtros de conteúdo e guardrails (Azure AI Content Safety), detecta ataques de jailbreak no prompt do usuário e ataques indiretos escondidos em documentos. A detecção de groundedness verifica se a resposta está fundamentada nas fontes fornecidas." },

/* ---------- B2 · Texto e fala ---------- */
{ id:"b2-1", t:"B2", type:"single",
  stem:"Você está criando um app que processa mensagens de clientes e precisa localizar e mascarar CPF, telefones e e-mails antes de armazenar o texto. Qual recurso do Azure Language em Foundry Tools usar?",
  opts:["Detecção de PII (informações pessoais identificáveis)","Extração de frases-chave","Análise de sentimento","Detecção de idioma"], ans:0,
  why:"A detecção de PII identifica entidades sensíveis (nomes, telefones, e-mails, documentos como o CPF) e devolve o texto com esses dados mascarados, além da lista de entidades encontradas." },
{ id:"b2-2", t:"B2", type:"single",
  stem:"Uma central recebe mensagens em português, inglês e espanhol e precisa encaminhar cada uma para a equipe do idioma certo. Qual análise executar primeiro?",
  opts:["Detecção de idioma","Reconhecimento de entidades","Sumarização","Síntese de fala"], ans:0,
  why:"A detecção de idioma retorna o idioma predominante (pt, en, es…) com uma pontuação de confiança. Esse resultado pode rotear a mensagem ou definir o idioma das análises seguintes." },
{ id:"b2-3", t:"B2", type:"single",
  stem:"Complete o código para que o app fale o texto em voz alta usando o Azure Speech.",
  code:`import azure.cognitiveservices.speech as speechsdk

speech_config = speechsdk.SpeechConfig(subscription=speech_key, endpoint=speech_endpoint)
speech_config.speech_synthesis_voice_name = "pt-BR-FranciscaNeural"

synthesizer = speechsdk.__________(speech_config=speech_config)
result = synthesizer.speak_text_async("Seu pedido foi enviado.").get()`,
  opts:["SpeechRecognizer","SpeechSynthesizer","TranslationRecognizer","IntentRecognizer"], ans:1,
  why:"`SpeechSynthesizer` converte texto em fala (TTS) com a voz definida em `speech_synthesis_voice_name`. `SpeechRecognizer` faz o caminho inverso (fala → texto), e `TranslationRecognizer` reconhece e traduz fala." },
{ id:"b2-4", t:"B2", type:"single",
  stem:"Um app usa `SpeechRecognizer` com `recognize_once_async().get()`. Qual propriedade do resultado contém o texto transcrito?",
  opts:["result.text","result.audio_data","result.voice_name","result.language_model"], ans:0,
  why:"`result.text` contém a transcrição, e `result.reason` indica se a fala foi reconhecida (`RecognizedSpeech`) ou não (`NoMatch`, `Canceled`). `audio_data` aparece nos resultados de síntese, não de reconhecimento." },
{ id:"b2-5", t:"B2", type:"single",
  stem:"Você quer que usuários façam perguntas por voz e recebam respostas geradas por IA, com o menor número de componentes possível. Qual abordagem é a mais adequada?",
  opts:["Implantar um modelo multimodal com suporte a entrada de áudio e enviar o áudio diretamente no prompt","Treinar do zero um modelo de reconhecimento de fala e um modelo de linguagem","Enviar o arquivo de áudio para um modelo de embeddings","Converter o áudio em imagem e usar OCR"], ans:0,
  why:"Modelos multimodais com entrada de áudio interpretam a fala diretamente e respondem em texto ou áudio, sem uma etapa separada de speech-to-text. A alternativa em pipeline é Azure Speech (fala → texto), depois o modelo de chat, depois Azure Speech (texto → fala)." },
{ id:"b2-6", t:"B2", type:"yesno",
  stem:"Para cada afirmação sobre o Azure Speech em Foundry Tools, marque Sim ou Não.",
  items:[
    ["O Azure Speech pode traduzir fala para outro idioma em tempo real.", true],
    ["Para usar uma voz neural em pt-BR, é obrigatório treinar uma voz personalizada.", false],
    ["A transcrição em lote (batch) é indicada para processar grandes volumes de áudio já gravado.", true]
  ],
  why:"Speech translation reconhece e traduz fala em tempo real. As vozes neurais prontas (como `pt-BR-FranciscaNeural` e `pt-BR-AntonioNeural`) funcionam sem treinamento, e voz personalizada é opcional. A transcrição em lote processa arquivos gravados de forma assíncrona, e a transcrição em tempo real atende áudio ao vivo." },

/* ---------- B3 · Visão e geração de imagens ---------- */
{ id:"b3-1", t:"B3", type:"single",
  stem:"Você usa a API Chat Completions com um modelo multimodal implantado. Complete o tipo de conteúdo para enviar a foto junto com a pergunta.",
  code:`messages = [
    {"role": "user", "content": [
        {"type": "text", "text": "Quais produtos aparecem nesta foto?"},
        {"type": "__________",
         "image_url": {"url": f"data:image/jpeg;base64,{imagem_b64}"}},
    ]},
]`,
  opts:["image_url","image_file","attachment","binary"], ans:0,
  why:"Na Chat Completions API, o conteúdo da mensagem pode ser uma lista com partes de texto e de imagem. A imagem vai com `\"type\": \"image_url\"`, apontando para uma URL pública ou uma data URL em base64. Na Responses API, o tipo equivalente é `input_image`." },
{ id:"b3-2", t:"B3", type:"single",
  stem:"O time de marketing quer criar imagens de produto originais a partir de descrições em texto. Qual modelo implantar no Foundry?",
  opts:["gpt-image-1","text-embedding-3-small","whisper","gpt-4o-mini-tts"], ans:0,
  why:"Modelos da família GPT-Image, como o `gpt-image-1` e o `gpt-image-1-mini` (em preview de acesso limitado), recebem um prompt de texto e devolvem imagens novas, e também editam imagens existentes. Para vídeo, o catálogo oferece o Sora 2 (preview). Os outros são de embeddings, transcrição e síntese de fala." },
{ id:"b3-3", t:"B3", type:"yesno",
  stem:"Para cada afirmação sobre geração de imagens, marque Sim ou Não.",
  items:[
    ["Modelos de geração de imagem criam imagens novas a partir de um prompt de texto.", true],
    ["Prompts que descrevem sujeito, estilo, composição e iluminação tendem a gerar resultados mais próximos do esperado.", true],
    ["Solicitações de geração de imagem no Foundry não passam por filtros de conteúdo.", false]
  ],
  why:"Prompts de imagem detalhados dão mais controle sobre o resultado. Tanto o prompt quanto a imagem gerada passam pelos filtros de conteúdo, e uma solicitação que viole as políticas é bloqueada." },
{ id:"b3-4", t:"B3", type:"single",
  stem:"Seu app envia fotos de um canteiro de obras para um modelo multimodal e precisa processar a resposta automaticamente (por exemplo, quantas pessoas estão sem capacete). Qual é a melhor abordagem?",
  opts:["Instruir o modelo a responder somente em JSON com um esquema definido (ou usar structured outputs)","Aumentar a temperature para respostas mais completas","Pedir que o modelo “descreva livremente” a imagem e tratar o texto com expressões regulares","Enviar a imagem para um modelo de embeddings"], ans:0,
  why:"Definir o formato de saída (JSON com campos como `pessoas_sem_capacete`) torna a resposta previsível e fácil de processar no código. Quando o modelo oferece suporte, structured outputs garantem que a resposta siga o esquema JSON informado." },

/* ---------- B4 · Extração de informações ---------- */
{ id:"b4-1", t:"B4", type:"single",
  stem:"No Azure Content Understanding em Foundry Tools, o que é um analisador (analyzer)?",
  opts:["Uma configuração que define como processar um tipo de conteúdo e quais campos extrair, por meio de um esquema de campos","Um modelo de chat usado apenas para conversar com usuários","Um painel de monitoramento de custos","Uma ferramenta para gerar imagens"], ans:0,
  why:"O analisador define a modalidade (documento, imagem, áudio ou vídeo), as opções de processamento e o esquema de campos a extrair. Há analisadores prebuilt para cenários comuns e analisadores personalizados criados a partir do seu próprio esquema." },
{ id:"b4-2", t:"B4", type:"single",
  stem:"Você precisa extrair número, data, fornecedor e valor total de faturas comuns, o mais rápido possível e sem definir um esquema próprio. O que usar?",
  opts:["Um analisador prebuilt de faturas do Content Understanding","Um modelo de embeddings","Um agente apenas com Code interpreter","Síntese de fala"], ans:0,
  why:"Analisadores prebuilt já trazem esquemas para documentos comuns, como faturas e recibos, e retornam os campos prontos. Quando o documento é específico do seu negócio, você cria um analisador personalizado com seu próprio esquema." },
{ id:"b4-3", t:"B4", type:"single",
  stem:"Você está criando um analisador personalizado para gravações de atendimento. Um campo “MotivoDoContato” deve assumir apenas um valor entre Cobrança, Suporte técnico e Cancelamento. Qual método de campo usar?",
  opts:["extract","generate","classify","translate"], ans:2,
  why:"No esquema do Content Understanding, cada campo tem um método: `extract` (valor que aparece literalmente no conteúdo), `generate` (valor produzido pelo modelo, como um resumo) e `classify` (um valor de uma lista fixa de categorias). Motivo escolhido de uma lista fixa pede `classify`." },
{ id:"b4-4", t:"B4", type:"single",
  stem:"Você quer que um analisador de vídeo produza, para cada vídeo de treinamento, um campo “Resumo” com duas ou três frases sobre o conteúdo. Qual método de campo usar?",
  opts:["extract","generate","classify","redact"], ans:1,
  why:"`generate` cria um valor novo a partir do conteúdo analisado, como um resumo ou uma descrição. Em áudio, vídeo e imagens, os únicos métodos de campo disponíveis são `generate` e `classify`: `extract` (valor copiado literalmente do conteúdo) só funciona em documentos. `redact` não é um método de campo." },
{ id:"b4-5", t:"B4", type:"yesno",
  stem:"Para cada afirmação sobre o Content Understanding, marque Sim ou Não.",
  items:[
    ["O Content Understanding processa áudio e vídeo diretamente, gerando transcrição e campos personalizados.", true],
    ["O resultado da análise inclui o conteúdo em Markdown e os campos definidos no esquema.", true],
    ["Para extrair dados de uma imagem com o Content Understanding, é preciso antes treinar um modelo de visão com milhares de imagens rotuladas.", false]
  ],
  why:"O Content Understanding aceita documentos, imagens, áudio e vídeo. A saída traz uma representação do conteúdo em Markdown e os campos do esquema em JSON. Ele usa modelos generativos por trás, então um esquema bem descrito basta para começar, sem treinar modelos de visão." },
{ id:"b4-6", t:"B4", type:"single",
  stem:"Seu app chama a operação analyze do Content Understanding pela API REST. Como o app obtém o resultado?",
  opts:["A resposta do POST já traz o resultado completo, sempre de forma síncrona","A operação é assíncrona: o POST retorna o cabeçalho Operation-Location, e o app consulta essa URL até o status ser Succeeded","O resultado é enviado por e-mail ao administrador","É preciso baixar o resultado manualmente no portal"], ans:1,
  why:"A operação `analyze` é de longa duração: a requisição inicial retorna `202 Accepted` com o cabeçalho `Operation-Location`, e o app consulta essa URL até o `status` ser `Succeeded` para ler o Markdown e os campos. No SDK de Python (`azure-ai-contentunderstanding`), isso aparece como `begin_analyze`, que devolve um poller; `poller.result()` espera e retorna o resultado." }
];

/* ================= Estado ================= */

  SIMULADOS.push({
    title: "AI-901 · Simulado 1",
    course: 'ai901',
    sourceFile: "1-simulado-ai901.html",
    studyTarget: 80,
    questions: Q.map(question => ({
      id: question.id,
      course: 'ai901',
      type: question.type,
      topic: TOPICS[question.t].name,
      area: AREAS[TOPICS[question.t].area].name,
      q: question.stem,
      code: question.code || '',
      o: question.type === 'yesno' ? question.items.map(item => item[0]) : question.opts,
      a: question.type === 'yesno' ? question.items.map(item => item[1])
        : question.type === 'multi' ? question.ans.map(answer => 'ABCD'[answer])
        : 'ABCD'[question.ans],
      e: question.why
    }))
  });
})();

// Fonte: 2-ai901-na-pratica.html
(() => {
const AREAS = {
  A: { name: "Conceitos e capacidades de IA", short: "Conceitos de IA", weight: "40–45%" },
  B: { name: "Soluções com Microsoft Foundry", short: "Foundry", weight: "55–60%" }
};
const TOPICS = {
  A1: { area: "A", name: "IA responsável" },
  A2: { area: "A", name: "Modelos e configuração" },
  A3: { area: "A", name: "Cargas de trabalho de IA" },
  B1: { area: "B", name: "Apps generativos e agentes" },
  B2: { area: "B", name: "Texto e fala" },
  B3: { area: "B", name: "Visão e geração de imagens" },
  B4: { area: "B", name: "Extração de informações" }
};

const Q = [
/* ---------- A2 · Modelos e configuração, no portal ---------- */
{ id:"p-a2-1", t:"A2", type:"single",
  stem:"No portal do Foundry, você vai implantar o gpt-5-mini para um app com tráfego variável. Quer pagar só pelo que usar e ter a maior disponibilidade de cota. Qual tipo de implantação selecionar?",
  opts:["Global Standard","Provisioned (PTU)","Global Batch","Developer"], ans:0,
  why:"Global Standard cobra por token (pagamento por uso) e distribui o tráfego pela infraestrutura global da Microsoft, com a maior cota padrão. Provisioned reserva capacidade fixa, Global Batch é assíncrono (até 24h) e Developer serve para avaliar modelos com fine-tuning." },
{ id:"p-a2-2", t:"A2", type:"multi",
  stem:"Ao implantar um modelo a partir do catálogo do Foundry, quais DUAS informações você define na própria implantação?",
  opts:["O nome da implantação","O tipo de implantação (ex.: Global Standard)","A mensagem de sistema do chat","O valor de temperature"], ans:[0,1],
  why:"Na implantação você escolhe o nome, o tipo (e a cota/limite de tokens por minuto). A mensagem de sistema e a temperature são definidas depois, no playground ou em cada chamada do código." },
{ id:"p-a2-3", t:"A2", type:"single",
  stem:"No playground de chat, as respostas do modelo estão sendo cortadas no meio da frase. Qual parâmetro você deve aumentar?",
  opts:["Max tokens (tamanho máximo da resposta)","Temperature","Top P","Frequency penalty"], ans:0,
  why:"Max tokens (`max_completion_tokens` na Chat Completions, `max_output_tokens` na Responses API) limita quantos tokens a resposta pode ter. Quando o limite é atingido, o texto para no meio. Temperature e Top P mudam a aleatoriedade, e frequency penalty reduz repetição." },
{ id:"p-a2-4", t:"A2", type:"single",
  stem:"Você quer que o modelo pare de gerar texto assim que escrever a sequência \"###\". Qual parâmetro configurar?",
  opts:["Stop sequences","Max tokens","Presence penalty","Top P"], ans:0,
  why:"Stop sequences definem uma ou mais sequências que, quando geradas, encerram a resposta. É útil para controlar o formato da saída." },
{ id:"p-a2-5", t:"A2", type:"single",
  stem:"As respostas do modelo repetem as mesmas palavras e expressões várias vezes. Qual parâmetro ajuda a reduzir isso?",
  opts:["Frequency penalty","Stop sequences","Max tokens","O tipo de implantação"], ans:0,
  why:"Frequency penalty penaliza tokens de acordo com quantas vezes já apareceram, reduzindo repetição. Presence penalty incentiva o modelo a trazer assuntos novos. Modelos de raciocínio, como o `gpt-5-mini`, não aceitam esses parâmetros nem temperature." },

/* ---------- B1 · SDK, playground e agentes ---------- */
{ id:"p-b1-1", t:"B1", type:"yesno",
  stem:"Sobre ler a resposta de um modelo no código Python, marque Sim ou Não.",
  items:[
    ["Na Chat Completions API, o texto da resposta fica em `response.choices[0].message.content`.", true],
    ["Na Responses API, `response.output_text` retorna o texto gerado.", true],
    ["O parâmetro `model` das duas APIs recebe a região do recurso do Azure.", false]
  ],
  why:"Chat Completions devolve uma lista de choices, e o texto fica em `choices[0].message.content`. A Responses API, usada pelo SDK do Foundry mais recente, oferece o atalho `output_text`. Nas duas, `model` recebe o nome da implantação." },
{ id:"p-b1-2", t:"B1", type:"single",
  stem:"Seu código usa `DefaultAzureCredential()` para se conectar ao projeto do Foundry. O que é necessário para ele funcionar quando você roda o app na sua máquina?",
  opts:["Estar autenticado na Azure CLI (az login) com uma conta que tenha permissão no projeto","Colar a chave da API diretamente no código","Criar um agente antes de rodar o código","Implantar o modelo como Provisioned"], ans:0,
  why:"DefaultAzureCredential tenta várias fontes de identidade do Microsoft Entra ID. Na máquina do desenvolvedor, normalmente usa o login da Azure CLI (`az login`). A conta também precisa de uma função (role) com acesso ao projeto." },
{ id:"p-b1-3", t:"B1", type:"single",
  stem:"No playground de chat, você chegou a um bom resultado e quer levar essa configuração para um app Python. Qual é o caminho mais rápido?",
  opts:["Abrir a aba Code do playground (View code no portal clássico), que mostra o código com o endpoint, a implantação e os parâmetros","Exportar o modelo como arquivo e copiá-lo para o app","Criar um novo recurso de Speech","Treinar o modelo com fine-tuning"], ans:0,
  why:"O playground mostra o código equivalente à sessão (endpoint, nome da implantação, mensagens e parâmetros) em Python e outras linguagens. É o ponto de partida recomendado para o chat client." },
{ id:"p-b1-4", t:"B1", type:"single",
  stem:"Você quer que um agente responda sempre em português e recuse assuntos que não sejam de RH. Onde configurar isso no portal do Foundry?",
  opts:["Nas instruções (instructions) do agente","Na ferramenta Code interpreter","No tipo de implantação do modelo","No nome do agente"], ans:0,
  why:"As instruções funcionam como a system message do agente: definem objetivo, tom, idioma, limites e regras. Ferramentas dão acesso a dados e ações, mas não definem comportamento." },
{ id:"p-b1-5", t:"B1", type:"single",
  stem:"Um agente precisa responder perguntas sobre notícias e cotações do dia. Qual ferramenta adicionar?",
  opts:["Web search (pesquisa na web com Bing)","File search","Code interpreter","Content Understanding"], ans:0,
  why:"A ferramenta Web search (baseada no Grounding with Bing Search) traz informações públicas e atuais, com citações. File search consulta apenas documentos enviados, e Code interpreter executa código." },
{ id:"p-b1-6", t:"B1", type:"single",
  stem:"Você testou um agente no playground e agora vai criar um app cliente para ele. Quais informações o app precisa?",
  opts:["O endpoint do projeto, uma credencial e o nome (ou ID) do agente","Somente a chave do recurso de Speech","O arquivo de pesos do modelo","A string de conexão de um banco de dados"], ans:0,
  why:"O app se conecta ao projeto com o endpoint e uma credencial (como DefaultAzureCredential) e referencia o agente já criado pelo nome ou ID. O modelo, as instruções e as ferramentas continuam configurados no agente." },
{ id:"p-b1-7", t:"B1", type:"single",
  stem:"Qual é a sequência correta para um app cliente conversar com um agente que já existe?",
  opts:["Criar (ou reutilizar) uma conversa, enviar a mensagem do usuário, executar o agente e ler a resposta","Treinar o agente, implantar o agente e chamar o endpoint de embeddings","Criar um novo agente a cada mensagem e ler a resposta","Enviar a mensagem para o playground e copiar a resposta"], ans:0,
  why:"A conversa (thread nas versões anteriores da API) guarda o histórico. O app adiciona a mensagem do usuário, pede a execução do agente e lê a resposta. Para manter o contexto, reutiliza a mesma conversa nas próximas perguntas." },
{ id:"p-b1-8", t:"B1", type:"single",
  stem:"Você quer bloquear respostas com violência de severidade média ou alta em uma implantação. Onde configurar isso no Foundry?",
  opts:["Nos guardrails / filtros de conteúdo associados à implantação","Na temperature do playground","Nas instruções do agente","No tipo de implantação"], ans:0,
  why:"Os filtros de conteúdo (guardrails) avaliam prompts e respostas nas categorias ódio, sexual, violência e automutilação, com limites de severidade configuráveis. Eles também incluem Prompt Shields contra jailbreak." },

/* ---------- B2 · Language e Speech ---------- */
{ id:"p-b2-1", t:"B2", type:"single",
  stem:"Complete o código para obter o sentimento de cada aspecto mencionado na avaliação.",
  code:`from azure.ai.textanalytics import TextAnalyticsClient
from azure.core.credentials import AzureKeyCredential

client = TextAnalyticsClient(endpoint=endpoint, credential=AzureKeyCredential(key))
docs = ["O atendimento foi ótimo, mas a entrega atrasou."]

result = client.__________(docs, show_opinion_mining=True)`,
  opts:["analyze_sentiment","extract_key_phrases","recognize_entities","detect_language"], ans:0,
  why:"`analyze_sentiment` retorna o sentimento do documento e de cada frase. Com `show_opinion_mining=True`, também associa opiniões a aspectos (atendimento → positivo, entrega → negativo)." },
{ id:"p-b2-2", t:"B2", type:"single",
  stem:"Depois de chamar `recognize_pii_entities`, qual propriedade de cada resultado traz o texto com os dados pessoais mascarados?",
  opts:["redacted_text","entities","key_phrases","sentiment"], ans:0,
  why:"`redacted_text` devolve o texto com as entidades sensíveis substituídas por asteriscos. `entities` lista cada item encontrado (tipo, texto e confiança)." },
{ id:"p-b2-3", t:"B2", type:"single",
  stem:"Seu app usa o Azure Speech para transcrever áudio falado em português do Brasil. Qual propriedade do `SpeechConfig` você deve definir?",
  opts:["speech_recognition_language = \"pt-BR\"","speech_synthesis_voice_name = \"pt-BR-FranciscaNeural\"","output_format = \"pt-BR\"","endpoint_id = \"pt-BR\""], ans:0,
  why:"`speech_recognition_language` define o idioma do reconhecimento (fala → texto). `speech_synthesis_voice_name` é para síntese (texto → fala)." },
{ id:"p-b2-4", t:"B2", type:"single",
  stem:"Você quer que a voz sintetizada faça uma pausa de meio segundo e fale mais devagar em um trecho. Como fazer com o Azure Speech?",
  opts:["Enviar SSML com os elementos break e prosody usando speak_ssml_async","Aumentar a temperature do modelo","Usar speech_recognition_language","Trocar SpeechSynthesizer por SpeechRecognizer"], ans:0,
  why:"SSML controla a síntese: `<break time=\"500ms\"/>` insere pausas e `<prosody rate=\"slow\">` muda a velocidade. O método `speak_ssml_async` envia o SSML, e `speak_text_async` envia texto simples." },
{ id:"p-b2-5", t:"B2", type:"single",
  stem:"Você envia um arquivo de áudio para um modelo multimodal com entrada de áudio pela Chat Completions API. Qual tipo de parte de conteúdo usar?",
  code:`{"role": "user", "content": [
    {"type": "text", "text": "Responda à pergunta do áudio."},
    {"type": "__________",
     "input_audio": {"data": audio_b64, "format": "wav"}},
]}`,
  opts:["input_audio","image_url","audio_file","speech"], ans:0,
  why:"Modelos com entrada de áudio recebem uma parte `input_audio` com o áudio em base64 e o formato (wav, mp3). O modelo interpreta a fala diretamente, sem uma etapa separada de speech-to-text. Nos módulos da AI-901, a opção para conversa por voz em tempo real é o Voice Live (Voice mode em um agente)." },

/* ---------- B3 · Visão e geração de imagens ---------- */
{ id:"p-b3-1", t:"B3", type:"single",
  stem:"Complete o código para gerar uma imagem com um modelo da família GPT-Image (ex.: gpt-image-1-mini) implantado no Foundry.",
  code:`result = openai_client.__________(
    model="minha-gpt-image",
    prompt="Garrafa de café em fundo azul, estilo fotografia de produto",
    size="1024x1024",
    n=1,
)`,
  opts:["images.generate","chat.completions.create","embeddings.create","audio.speech.create"], ans:0,
  why:"`images.generate` cria imagens a partir do prompt, com parâmetros como `size` e `n`. Com os modelos GPT-Image, a imagem volta em base64 (`result.data[0].b64_json`). Os outros métodos são de chat, embeddings e síntese de fala." },
{ id:"p-b3-2", t:"B3", type:"single",
  stem:"O modelo multimodal está errando ao ler números pequenos em fotos de etiquetas. Qual ajuste na parte `image_url` da mensagem pode ajudar?",
  opts:["Definir \"detail\": \"high\"","Aumentar max tokens para 10","Trocar o modelo por um de embeddings","Remover a pergunta em texto"], ans:0,
  why:"O campo `detail` (low, high ou auto) controla a resolução com que o modelo processa a imagem. `high` analisa mais detalhes, com mais tokens e custo. `low` é mais barato e rápido." },

/* ---------- B4 · Content Understanding ---------- */
{ id:"p-b4-1", t:"B4", type:"single",
  stem:"Na chamada REST de análise do Content Understanding, como você indica qual esquema de campos usar?",
  code:`POST {endpoint}/contentunderstanding/analyzers/__________:analyze?api-version=...`,
  opts:["O ID do analyzer","O nome da implantação do GPT","O ID da assinatura","O nome do arquivo"], ans:0,
  why:"Cada analyzer (prebuilt ou personalizado) tem um ID. A URL de análise usa esse ID, e o serviço aplica o esquema de campos e as configurações daquele analyzer. A resposta é assíncrona: você acompanha o resultado pelo `Operation-Location`." },
{ id:"p-b4-2", t:"B4", type:"single",
  stem:"Ao criar um analyzer personalizado no portal, o que mais ajuda o Content Understanding a extrair corretamente cada campo?",
  opts:["Dar a cada campo um nome e uma descrição claros, com o tipo e o método certos","Enviar milhares de documentos rotulados para treinar","Aumentar a temperature","Usar sempre o método generate"], ans:0,
  why:"O Content Understanding usa modelos generativos guiados pelo esquema. A descrição do campo diz ao modelo o que procurar, e o tipo e o método (extract, generate ou classify) definem o formato do valor. Não é preciso treinar com grandes volumes rotulados." },
{ id:"p-b4-3", t:"B4", type:"yesno",
  stem:"Sobre analyzers personalizados do Content Understanding, marque Sim ou Não.",
  items:[
    ["Depois de criado, o analyzer pode ser chamado por vários apps pelo seu ID.", true],
    ["Um campo com o método classify recebe uma lista fixa de categorias possíveis.", true],
    ["O Content Understanding só aceita arquivos PDF.", false]
  ],
  why:"O analyzer é um recurso reutilizável, chamado pelo ID. Campos classify usam uma lista (enum) de categorias. O serviço aceita documentos, imagens, áudio e vídeo." }
];

/* ================= Estado ================= */

  SIMULADOS.push({
    title: "AI-901 · Simulado 2 — Na prática",
    course: 'ai901',
    sourceFile: "2-ai901-na-pratica.html",
    studyTarget: 80,
    questions: Q.map(question => ({
      id: question.id,
      course: 'ai901',
      type: question.type,
      topic: TOPICS[question.t].name,
      area: AREAS[TOPICS[question.t].area].name,
      q: question.stem,
      code: question.code || '',
      o: question.type === 'yesno' ? question.items.map(item => item[0]) : question.opts,
      a: question.type === 'yesno' ? question.items.map(item => item[1])
        : question.type === 'multi' ? question.ans.map(answer => 'ABCD'[answer])
        : 'ABCD'[question.ans],
      e: question.why
    }))
  });
})();

// Fonte: 3-ai901-rodada-3.html
(() => {
const AREAS = {
  A: { name: "Conceitos e capacidades de IA", short: "Conceitos de IA", weight: "40–45%" },
  B: { name: "Soluções com Microsoft Foundry", short: "Foundry", weight: "55–60%" }
};
const TOPICS = {
  A1: { area: "A", name: "IA responsável" },
  A2: { area: "A", name: "Modelos e configuração" },
  A3: { area: "A", name: "Cargas de trabalho de IA" },
  B1: { area: "B", name: "Apps generativos e agentes" },
  B2: { area: "B", name: "Texto e fala" },
  B3: { area: "B", name: "Visão e geração de imagens" },
  B4: { area: "B", name: "Extração de informações" }
};

const Q = [
{ id:"n-a1-1", t:"A1", type:"multi",
  stem:"Um sistema de reconhecimento facial libera a entrada de funcionários em um prédio. Os testes mostram que ele erra com muito mais frequência para pessoas de pele mais escura, que acabam barradas na porta. Quais DOIS princípios de IA responsável esse problema afeta mais diretamente?",
  opts:["Equidade (fairness)", "Confiabilidade e segurança (reliability and safety)", "Transparência (transparency)", "Privacidade e segurança (privacy and security)"], ans:[0, 1],
  why:"Há um problema de equidade porque um grupo de pessoas recebe um serviço pior que os outros, em geral por viés ou pouca representatividade nos dados de treino. Também há um problema de confiabilidade e segurança, porque o sistema não funciona de forma consistente para todas as pessoas e condições que precisa atender. A documentação de IA responsável da Microsoft cita, dentro desse princípio, a análise de erros para achar grupos (inclusive demográficos) em que o modelo erra mais que a média. A Microsoft recomenda avaliar o sistema com dados que representem essa diversidade e verificar se os erros se concentram em algum grupo antes de implantar. Transparência (explicar como o sistema funciona) e privacidade e segurança (proteger as imagens) importam, mas não são a causa do erro descrito." },
{ id:"n-a1-2", t:"A1", type:"single",
  stem:"Um banco usa um modelo de IA para ajudar a aprovar pedidos de empréstimo e quer aplicar o princípio de transparência. Qual medida atende a esse princípio?",
  opts:["Avisar os clientes que a IA participa da análise e descrever, em linhas gerais, os dados usados no treino do modelo", "Criptografar os dados dos clientes em trânsito e em repouso e restringir quem pode acessá-los", "Oferecer o formulário de pedido compatível com leitores de tela e vídeos explicativos com legendas", "Enviar para um analista humano os pedidos em que a confiança do modelo fica abaixo de um limite"], ans:0,
  why:"Transparência significa deixar claro que a IA está sendo usada, como o sistema funciona e quais são seus limites. O próprio material da Microsoft usa este exemplo: um banco que usa IA para aprovar empréstimos deve divulgar o uso de IA e descrever características dos dados de treino, sem revelar informações confidenciais. Criptografia e controle de acesso são uma pegadinha comum: eles protegem os dados, então atendem a privacidade e segurança. Leitor de tela e legendas atendem a inclusão. Encaminhar casos de baixa confiança para revisão humana é uma prática de confiabilidade e segurança, com supervisão humana." },
{ id:"n-a1-3", t:"A1", type:"yesno",
  stem:"Para cada afirmação sobre guardrails e segurança de conteúdo no Microsoft Foundry, marque Sim se for verdadeira ou Não se for falsa.",
  items:[["Por padrão (guardrail `Microsoft.DefaultV2`), conteúdo classificado com severidade média ou alta nas categorias ódio e equidade, sexual, violência e automutilação é bloqueado, tanto no prompt do usuário quanto na resposta do modelo.", true], ["Os avaliadores de segurança (safety evaluators) do Foundry detectam e pontuam conteúdo nocivo nas respostas e também corrigem automaticamente as respostas problemáticas.", false], ["Em uma solução RAG, o texto dos documentos recuperados deve ser tratado como dados, e não como instruções, para reduzir o risco de prompt injection indireto.", true]],
  why:"A política padrão `Microsoft.DefaultV2` usa o limiar Medium nas quatro categorias de dano e vale para prompts e respostas, então o que for classificado como médio ou alto é bloqueado. Um guardrail é um conjunto de controles, e cada controle define um risco, os pontos de intervenção e a ação. Os pontos de intervenção são a entrada do usuário e a saída; em agentes (cujos guardrails estão em preview), há também a chamada e a resposta de ferramenta, em preview. As ações são annotate (só para modelos) ou annotate and block. Os avaliadores apenas detectam, escaneiam e pontuam problemas; corrigir exige outras medidas, como ajustar prompts, guardrails ou dados. Um documento recuperado pode conter texto que tenta redirecionar o modelo (ataque indireto), por isso o app separa as instruções confiáveis do conteúdo recuperado, e o Prompt Shields ajuda a detectar esses ataques." },
{ id:"n-a2-1", t:"A2", type:"single",
  stem:"Um modelo de linguagem recebe duas frases: “Sentei no banco da praça” e “Abri uma conta no banco”. Qual mecanismo do transformer permite que o modelo represente “banco” de forma diferente em cada frase, levando em conta as palavras ao redor?",
  opts:["Atenção (attention)", "Tokenização", "Codificação posicional (positional encoding)", "Janela de contexto (context window)"], ans:0,
  why:"A camada de atenção avalia cada token no contexto da sequência e dá mais peso aos tokens que mais influenciam seu significado, como “praça” ou “conta”. O resultado é um embedding contextual diferente para “banco” em cada frase. A tokenização só divide o texto em tokens (palavras, subpalavras e pontuação) com IDs inteiros, e “banco” recebe o mesmo ID nas duas frases. A codificação posicional informa a posição de cada token na sequência, e a janela de contexto é o número máximo de tokens que o modelo considera de uma vez." },
{ id:"n-a2-2", t:"A2", type:"multi",
  stem:"Um app de atendimento chama uma implantação Global Standard de um modelo de chat no Foundry. Nos horários de pico, muitas chamadas falham com HTTP 429 (Too Many Requests). As respostas reais raramente passam de 500 tokens, mas o código define o limite de tokens de saída em 8.000. Quais DUAS ações ajudam a reduzir esses erros?",
  opts:["Aumentar a alocação de TPM (tokens por minuto) da implantação dentro da cota disponível, ou pedir aumento de cota", "Reduzir o limite de tokens de saída para um valor próximo do tamanho real das respostas", "Mudar a implantação para Global Batch para atender os clientes do chat em tempo real", "Diminuir a temperature para que o modelo gere respostas mais curtas"], ans:[0, 1],
  why:"O TPM atribuído à implantação define o limite de tokens por minuto e, proporcionalmente, o de requisições por minuto (RPM). Ao receber cada chamada, o serviço estima os tokens pelo tamanho do prompt mais o limite máximo de saída, e não pelo que a resposta realmente usa. Por isso, um limite de 8.000 tokens consome cota à toa. Ajudam aumentar o TPM (ou pedir mais cota) e reduzir o limite de saída (`max_output_tokens` na Responses API), além de diminuir requisições simultâneas e usar retry com backoff. Global Batch processa de forma assíncrona, com janela-alvo de 24 horas, então não serve para um chat em tempo real. A temperature controla a aleatoriedade, não o tamanho da resposta nem a cota." },
{ id:"n-a2-3", t:"A2", type:"single",
  stem:"Os leaderboards do catálogo de modelos mostram que um modelo tem ótimo índice de qualidade em benchmarks públicos. Você vai usá-lo em um assistente RAG que responde com base nos manuais internos da empresa e precisa verificar se as respostas se apoiam nos trechos recuperados, sem inventar informação. O que fazer antes de ir para produção?",
  opts:["Rodar uma avaliação com perguntas do seu próprio cenário e medir groundedness (fundamentação) com um avaliador assistido por IA", "Confiar no índice de qualidade do leaderboard, já que ele foi medido em benchmarks padronizados", "Medir apenas fluency (fluência), porque um texto bem escrito indica que a resposta está correta", "Comparar apenas custo e latência dos modelos no leaderboard de desempenho"], ans:0,
  why:"Os leaderboards de modelos (em preview no portal do Foundry) comparam modelos usando conjuntos de dados públicos e padronizados. Eles ajudam a escolher candidatos, mas não mostram como o modelo se comporta com os seus documentos. Até o cenário 'Groundedness' do leaderboard usa um dataset público (TruthfulQA), e não o seu conteúdo. Por isso, o próximo passo é avaliar com dados do seu cenário, por exemplo pela opção Benchmarks → Try with your own data no catálogo ou por uma evaluation no Foundry. Groundedness é um avaliador assistido por IA (LLM como juiz) que verifica se a resposta se apoia no contexto fornecido, sem conteúdo inventado; relevance verifica se ela responde à pergunta. Fluency e coherence medem a qualidade da escrita, independentemente de o conteúdo estar correto, e custo e latência não dizem nada sobre qualidade. Métricas clássicas de NLP, como o F1 (que combina precision e recall), exigem respostas de referência (ground truth)." },
{ id:"n-a3-1", t:"A3", type:"single",
  stem:"Uma empresa tem 2.000 relatórios técnicos. Palavras como “sistema” e “projeto” aparecem em quase todos eles. A equipe quer descobrir quais termos caracterizam cada relatório, dando peso alto a termos frequentes naquele relatório e raros no restante da coleção. Qual técnica usar?",
  opts:["TF-IDF (term frequency-inverse document frequency)", "Remoção de stop words", "Stemming", "Extração de n-gramas"], ans:0,
  why:"O TF-IDF multiplica a frequência do termo no documento (TF) por log(N/df), em que N é o total de documentos e df é quantos deles contêm o termo. Um termo presente em todos os relatórios fica com IDF igual a zero, e um termo presente em quase todos (como “sistema” e “projeto”) fica com IDF perto de zero; já um termo frequente em um relatório e raro nos demais recebe peso alto. A remoção de stop words só exclui palavras de uma lista (como “de”, “o”, “que”) que acrescentam pouco significado, sem calcular a importância dos termos entre documentos. O stemming corta terminações para agrupar variações de uma palavra (a lematização faz o mesmo usando regras e vocabulário para chegar a uma forma válida), e a extração de n-gramas agrupa sequências de palavras como “nuvem pública”. Nenhuma dessas técnicas dá peso aos termos conforme a raridade na coleção." },
{ id:"n-a3-2", t:"A3", type:"single",
  stem:"Um sistema antigo de text-to-speech pronuncia todas as palavras corretamente, mas soa robótico: as frases saem no mesmo tom, sem pausas naturais e sem ênfase. Qual etapa do pipeline de síntese de fala é a principal responsável por esse problema?",
  opts:["Geração de prosódia (prosody)", "Normalização do texto", "Conversão de grafemas em fonemas (G2P)", "Extração de características MFCC"], ans:0,
  why:"A prosódia define ritmo, entonação, duração, intensidade e pausas, ou seja, como as palavras são ditas. Fala robótica costuma vir de prosódia plana, e não de erros de pronúncia; vozes neurais usam transformers para prever uma prosódia natural. A normalização expande números, datas e abreviações (“R$ 10” vira “dez reais”), e o G2P converte letras em fonemas, as menores unidades de som. A extração de MFCC é pré-processamento do reconhecimento de fala (speech-to-text), não da síntese." },
{ id:"n-a3-3", t:"A3", type:"multi",
  stem:"Quais DUAS afirmações sobre conceitos de visão computacional são verdadeiras?",
  opts:["A segmentação semântica classifica cada pixel da imagem de acordo com o objeto a que ele pertence, localizando o objeto com mais precisão que uma caixa delimitadora.", "Modelos de difusão geram uma imagem partindo de pixels aleatórios (ruído) e removendo esse ruído aos poucos, em várias iterações comparadas ao prompt.", "Em uma rede neural convolucional (CNN), os valores dos filtros (kernels) são definidos pelo desenvolvedor, como em um editor de imagens, e permanecem fixos durante o treinamento.", "Um Vision Transformer (ViT) relaciona as regiões da imagem por meio de filtros de convolução, em vez do mecanismo de atenção usado nos modelos de linguagem."], ans:[0, 1],
  why:"Na segmentação semântica cada pixel recebe uma classe, o que localiza o objeto com mais precisão que a caixa delimitadora da detecção de objetos. A difusão, usada pela maioria dos geradores de imagem, parte de ruído aleatório e remove o ruído em várias iterações, comparando o resultado com o prompt a cada passo. Filtros definidos à mão (como um de detecção de bordas) são usados no processamento de imagens tradicional. Em uma CNN, os kernels começam com pesos aleatórios e são ajustados durante o treinamento, junto com os pesos da rede, para extrair as características mais úteis para a previsão. O ViT divide a imagem em patches, transforma cada um em embedding e usa o mesmo mecanismo de atenção dos modelos de linguagem para relacionar os patches, como um LLM faz com tokens." },
{ id:"n-a3-4", t:"A3", type:"single",
  stem:"Qual sequência descreve corretamente uma solução RAG, desde a preparação dos dados até a resposta ao usuário?",
  opts:["Dividir os documentos em chunks → gerar embeddings dos chunks e armazená-los em um índice → converter a pergunta em embedding com o mesmo modelo e buscar os chunks mais parecidos → incluir esses chunks no prompt e gerar a resposta com citações", "Dividir os documentos em chunks → re-treinar o modelo de chat com os chunks → enviar a pergunta ao modelo → gerar a resposta com citações", "Enviar a pergunta ao modelo e gerar a resposta → buscar no índice os chunks parecidos com a resposta gerada → anexar esses chunks como citações", "Dividir os documentos em chunks → gerar embeddings dos chunks com um modelo de embeddings → converter a pergunta em embedding com outro modelo, diferente do usado na indexação → incluir os chunks no prompt e gerar a resposta"], ans:0,
  why:"Na indexação, o texto é extraído, dividido em chunks (equilibrando tamanho e sobreposição) e convertido em embeddings guardados em um índice. Na execução, a pergunta vira vetor com o mesmo modelo de embeddings usado na indexação, porque vetores de modelos diferentes não são comparáveis; o Azure AI Search exige o mesmo modelo na indexação e na consulta. Depois, os chunks recuperados entram no prompt para gerar uma resposta fundamentada e com citações. RAG não re-treina o modelo nem altera seus parâmetros: para atualizar o conhecimento, você atualiza os documentos e o índice. Gerar a resposta primeiro e buscar fontes depois não fundamenta nada; só procura justificativas para uma resposta que pode estar errada." },
{ id:"n-b1-1", t:"B1", type:"single",
  stem:"Um app Python chama um modelo implantado no Foundry pela Responses API e mantém o contexto entre dois turnos. Complete a última linha para exibir apenas o texto gerado na segunda resposta.",
  code:"import os\nfrom dotenv import load_dotenv\nfrom openai import OpenAI\n\nload_dotenv()  # lê o arquivo .env\nclient = OpenAI(\n    base_url=os.getenv(\"AZURE_OPENAI_ENDPOINT\"),  # https://<recurso>.openai.azure.com/openai/v1/\n    api_key=os.getenv(\"AZURE_OPENAI_API_KEY\"),\n)\ninstrucoes = \"Você é um tutor de IA. Responda em até 3 frases.\"\n\nprimeira = client.responses.create(\n    model=os.getenv(\"MODEL_DEPLOYMENT_NAME\"),\n    instructions=instrucoes,\n    input=\"O que é um token?\",\n    max_output_tokens=1000,\n)\nsegunda = client.responses.create(\n    model=os.getenv(\"MODEL_DEPLOYMENT_NAME\"),\n    instructions=instrucoes,  # não é herdado via previous_response_id\n    previous_response_id=primeira.id,\n    input=\"Dê um exemplo em português.\",\n)\nprint(segunda.__________)",
  opts:["output_text", "choices[0].message.content", "output[0]", "content"], ans:0,
  why:"Na Responses API, a propriedade `output_text` junta em uma única string todo o texto gerado pelo modelo. `choices[0].message.content` pertence à Chat Completions API (`chat.completions.create`). `output` é uma lista de itens (objetos com tipo, papel e conteúdo), então `output[0]` não é uma string, e em modelos de raciocínio o primeiro item pode nem ser a mensagem. O objeto de resposta não tem um atributo `content` no nível superior. O `previous_response_id` encadeia o histórico no serviço, então o app envia só a nova pergunta. Já o `instructions`, que faz o papel do system prompt, não é herdado da resposta anterior e precisa ser reenviado a cada chamada." },
{ id:"n-b1-2", t:"B1", type:"yesno",
  stem:"Um app cliente usa o código abaixo, gerado pelo botão Continue in code do playground de agentes, para conversar com o agente `computing-historian`. Para cada afirmação, marque Sim ou Não.",
  code:"from azure.identity import DefaultAzureCredential\nfrom azure.ai.projects import AIProjectClient\n\nproject_client = AIProjectClient(\n    endpoint=\"https://<recurso>.services.ai.azure.com/api/projects/<projeto>\",\n    credential=DefaultAzureCredential(),\n)\nopenai_client = project_client.get_openai_client()\n\nresponse = openai_client.responses.create(\n    input=[{\"role\": \"user\", \"content\": \"Quem criou o ENIAC?\"}],\n    extra_body={\"agent_reference\": {\"name\": \"computing-historian\",\n                                    \"version\": \"1\",\n                                    \"type\": \"agent_reference\"}},\n)\nprint(response.output_text)",
  items:[["A chamada não informa `model` porque o modelo, as instruções e as ferramentas já estão na definição do agente referenciado em `extra_body`.", true], ["Como o projeto tem uma chave de API, basta trocar `DefaultAzureCredential()` por `AzureKeyCredential(chave)` no `AIProjectClient`.", false], ["Para manter o contexto entre perguntas, o app pode criar uma conversa com `openai_client.conversations.create()` e passar `conversation=<id da conversa>` em cada chamada a `responses.create`.", true]],
  why:"O `agent_reference` em `extra_body` direciona a requisição para o agente do projeto, que já carrega modelo, instruções e ferramentas. Por isso não se passa `model`. O `AIProjectClient` se conecta ao endpoint do projeto e aceita apenas Microsoft Entra ID (por exemplo, `DefaultAzureCredential` após `az login`), porque o projeto pode conter recursos privilegiados. A chave de API funciona no endpoint compatível com OpenAI do recurso (`/openai/v1/`), não nesse cliente. Para várias perguntas, o app cria uma conversa (as conversations substituem os antigos threads) e passa o mesmo id a cada `responses.create`. Assim o serviço guarda o histórico." },
{ id:"n-b1-3", t:"B1", type:"multi",
  stem:"Você está configurando apps que acessam recursos do Microsoft Foundry. Quais DUAS afirmações sobre endpoints e autenticação estão corretas?",
  opts:["Para chamar um modelo implantado com `OpenAI(base_url=..., api_key=...)`, use o endpoint `https://<recurso>.openai.azure.com/openai/v1/` e a chave do recurso.", "O `AIProjectClient`, conectado ao endpoint `https://<recurso>.services.ai.azure.com/api/projects/<projeto>`, aceita a chave do recurso por meio de `AzureKeyCredential`.", "Uma boa prática é guardar a chave como segredo no Azure Key Vault e fazer o app lê-la em tempo de execução com uma identidade gerenciada, em vez de deixá-la no código.", "O `TextAnalyticsClient` do Azure Language deve usar o endpoint do projeto (`.../api/projects/<projeto>`) no lugar de `https://<recurso>.cognitiveservices.azure.com/`."], ans:[0, 2],
  why:"O cliente OpenAI usa o endpoint v1 do Azure OpenAI (`/openai/v1/`) com chave de API ou token do Microsoft Entra ID. O endpoint do projeto é usado pelo `AIProjectClient`, que só aceita Entra ID (por exemplo, `DefaultAzureCredential`), e não chaves. Ferramentas como o Azure Language usam o endpoint `cognitiveservices.azure.com` do recurso, com `AzureKeyCredential` ou Entra ID. Chaves não devem ficar no código: o Key Vault guarda o segredo e o app o recupera com uma identidade gerenciada, o que reduz o risco de vazamento." },
{ id:"n-b1-4", t:"B1", type:"single",
  stem:"No playground de um modelo no novo portal do Foundry, você escreveu as Instructions, adicionou a ferramenta Web search e anexou um arquivo como conhecimento. Agora quer que apps clientes usem essa configuração pelo projeto, sem repetir o system prompt no código nem implementar a própria lógica de RAG. Qual ação do portal usar?",
  opts:["Save as agent, para encapsular modelo, instruções e ferramentas em um agente", "New chat, para iniciar uma conversa limpa com a configuração atual", "Comparar modelos, para testar a mesma configuração com outros modelos lado a lado", "Deploy a base model, para criar uma nova implantação com a configuração embutida"], ans:0,
  why:"Save as agent transforma a configuração do playground em um agente versionado no projeto, e a aba YAML mostra modelo, instruções e ferramentas. Os apps passam a chamar o agente (por exemplo, com `agent_reference`) sem enviar system prompt nem montar RAG. New chat só limpa o histórico da conversa. A comparação serve para avaliar até três modelos lado a lado. Uma nova implantação traz apenas o modelo, sem instruções nem ferramentas. No modelo atual de agentes do Foundry, cada agente já recebe um endpoint estável ao ser criado, e publicar passou a significar distribuí-lo em canais como Microsoft 365 e Teams." },
{ id:"n-b1-5", t:"B1", type:"single",
  stem:"Você cria uma knowledge base no Foundry IQ com as políticas de despesas da empresa e a conecta a um agente. O time jurídico exige que o agente receba trechos literais das políticas, com citação da fonte, sem que um modelo reescreva o conteúdo antes. Qual configuração atende?",
  opts:["Definir o Output mode como Extractive data", "Definir o Output mode como Answer synthesis", "Aumentar o Retrieval reasoning effort para Medium", "Fazer fine-tuning do modelo do agente com os documentos de política"], ans:0,
  why:"Com Extractive data, o Foundry IQ devolve ao agente o texto original recuperado das fontes, com citações. É também o comportamento padrão e o único disponível na versão estável (GA) da API de recuperação agêntica. Answer synthesis usa um modelo generativo para redigir uma resposta a partir do que foi recuperado. O Retrieval reasoning effort define quanto processamento com LLM a recuperação agêntica usa para planejar a busca, não o formato da saída. A knowledge base fundamenta as respostas sem alterar os pesos do modelo, então fine-tuning não é necessário. Observação: Answer synthesis e os níveis de reasoning effort acima de minimal continuam em preview, e o portal do Foundry os oferece em modo preview." },
{ id:"n-b2-1", t:"B2", type:"single",
  stem:"Um serviço de backend precisa gerar avisos falados e salvá-los em arquivos WAV, sem tocar o áudio no alto-falante. Complete o código.",
  code:"import azure.cognitiveservices.speech as speechsdk\n\nspeech_config = speechsdk.SpeechConfig(subscription=speech_key, endpoint=speech_endpoint)\nspeech_config.speech_synthesis_voice_name = \"pt-BR-FranciscaNeural\"\n\nfile_config = speechsdk.audio.__________(filename=\"aviso.wav\")\nsynthesizer = speechsdk.SpeechSynthesizer(speech_config=speech_config, audio_config=file_config)\n\nresult = synthesizer.speak_text_async(\"O embarque começa em dez minutos.\").get()\nif result.reason == speechsdk.ResultReason.SynthesizingAudioCompleted:\n    print(\"Áudio salvo.\")",
  opts:["AudioOutputConfig", "AudioConfig", "SpeechConfig", "AudioDataStream"], ans:0,
  why:"No SDK de Python do Azure Speech, `AudioOutputConfig` define o destino do áudio sintetizado: o alto-falante padrão (`use_default_speaker=True`) ou um arquivo WAV (`filename=`). `AudioConfig` configura a entrada de áudio (microfone ou arquivo) do `SpeechRecognizer`, e `SpeechConfig` guarda a conexão (chave e endpoint) e a voz. `AudioDataStream` é criado a partir de um resultado já sintetizado e não recebe `filename`. Se `audio_config` for omitido, o áudio toca no alto-falante padrão; com `audio_config=None`, ele fica só em memória." },
{ id:"n-b2-2", t:"B2", type:"single",
  stem:"Um app de legendas usa reconhecimento contínuo com o Azure Speech. Ele deve gravar no arquivo de legendas somente o texto final de cada frase, ignorando os resultados parciais que chegam enquanto a pessoa ainda fala. Qual evento conectar?",
  code:"speech_config.speech_recognition_language = \"pt-BR\"\naudio_config = speechsdk.audio.AudioConfig(use_default_microphone=True)\nrecognizer = speechsdk.SpeechRecognizer(speech_config=speech_config, audio_config=audio_config)\n\ndef salvar_legenda(evt):\n    legendas.write(evt.result.text + \"\\n\")\n\nrecognizer.__________.connect(salvar_legenda)\nrecognizer.start_continuous_recognition()",
  opts:["recognized", "recognizing", "session_started", "canceled"], ans:0,
  why:"No reconhecimento contínuo, o evento `recognizing` dispara várias vezes com hipóteses parciais, e `recognized` dispara uma vez por frase com o resultado final, lido em `evt.result.text`. `session_started` indica só o início da sessão, e `canceled` sinaliza erro ou cancelamento. O reconhecimento contínuo segue até o app chamar `stop_continuous_recognition()`, ao contrário de `recognize_once_async()`, que captura uma única frase." },
{ id:"n-b2-3", t:"B2", type:"single",
  stem:"Um quiosque de aeroporto terá um assistente de voz. Os passageiros falam, ouvem a resposta em poucos instantes e podem interromper o assistente no meio da fala. O ambiente é barulhento, e você quer a solução com menos componentes para montar e manter. O que usar?",
  opts:["Azure Speech Voice Live, por exemplo ativando o Voice mode em um agente do Foundry", "Speech to text em tempo real, um modelo de chat e text to speech, conectados pelo código do próprio app", "Batch transcription do Azure Speech, seguida de um modelo de chat e de síntese de fala", "Apenas text to speech com uma voz neural HD"], ans:0,
  why:"Voice Live é um serviço gerenciado de speech-to-speech em tempo real: une reconhecimento de fala, o modelo generativo e a síntese de voz em uma única sessão, com supressão de ruído, cancelamento de eco e detecção de interrupções e de fim de turno. Ativar o Voice mode em um agente do Foundry integra o Voice Live à definição do agente, o que reduz o código do cliente. Montar você mesmo o pipeline speech to text → modelo → text to speech funciona, mas exige integrar e manter cada peça e não traz esses recursos de conversa prontos. Batch transcription é assíncrona e agendada por melhor esforço, então não serve para diálogo ao vivo. Text to speech sozinho cuida só da saída de voz." },
{ id:"n-b2-4", t:"B2", type:"single",
  stem:"Um pipeline grava no banco de dados o código de duas letras do idioma de cada mensagem (por exemplo, “pt” ou “es”). Como o valor precisa sair sempre no mesmo formato, você usou o Azure Language em vez de pedir essa informação a um modelo generativo. Complete o código.",
  code:"from azure.ai.textanalytics import TextAnalyticsClient\nfrom azure.core.credentials import AzureKeyCredential\n\nclient = TextAnalyticsClient(\n    endpoint=\"https://<recurso>.cognitiveservices.azure.com/\",\n    credential=AzureKeyCredential(key),\n)\nresult = client.detect_language([mensagem])[0]\ncodigo = result.primary_language.__________",
  opts:["iso6391_name", "name", "confidence_score", "language_code"], ans:0,
  why:"`detect_language` recebe uma lista de documentos e devolve um resultado por item. Em `primary_language`, `iso6391_name` traz o código ISO 639-1 (“pt”), `name` traz o nome do idioma (“Portuguese”) e `confidence_score` traz a confiança de 0 a 1. O Azure Language devolve valores estruturados e consistentes a cada chamada, enquanto a resposta de um modelo generativo pode variar entre execuções." },
{ id:"n-b3-1", t:"B3", type:"single",
  stem:"Seu app lê do disco a foto de um computador antigo, codifica em base64 e envia a imagem junto com uma pergunta para um modelo multimodal pela Responses API. Complete o tipo da parte de imagem.",
  code:"response = client.responses.create(\n    model=deployment_name,  # ex.: gpt-5-mini\n    input=[{\n        \"role\": \"user\",\n        \"content\": [\n            {\"type\": \"input_text\", \"text\": \"Que computador é este?\"},\n            {\"type\": \"__________\",\n             \"image_url\": f\"data:image/jpeg;base64,{imagem_b64}\"},\n        ],\n    }],\n)\nprint(response.output_text)",
  opts:["input_image", "image_url", "image_file", "image"], ans:0,
  why:"Na Responses API, cada parte do conteúdo tem um tipo: `input_text` para texto e `input_image` para imagem. O campo `image_url` aceita uma URL pública ou uma data URL (`data:image/jpeg;base64,...`) com a imagem codificada. Também é possível passar um `file_id` de um arquivo já enviado. Usar `image_url` como valor de `type` é o formato da Chat Completions API, e `image_file` não é um tipo de entrada da Responses API. No portal, o mesmo teste é feito com o botão Upload image do playground." },
{ id:"n-b3-2", t:"B3", type:"single",
  stem:"O código abaixo gera uma imagem com uma implantação de gpt-image-1-mini (em preview de acesso limitado) e salva o resultado como PNG. Complete a linha que obtém os bytes da imagem.",
  code:"import base64\nfrom openai import OpenAI\n\nclient = OpenAI(base_url=\"https://<recurso>.openai.azure.com/openai/v1/\", api_key=api_key)\n\nimg = client.images.generate(\n    model=deployment_name,  # nome da implantação\n    prompt=\"Um PC antigo com monitor CRT, estilo fotografia\",\n    n=1,\n    size=\"1024x1024\",\n)\nimage_bytes = base64.b64decode(img.data[0].__________)\nwith open(\"pc.png\", \"wb\") as f:\n    f.write(image_bytes)",
  opts:["b64_json", "url", "revised_prompt", "content"], ans:0,
  why:"Os modelos da série gpt-image-1 sempre devolvem a imagem em base64 no campo `b64_json`. Eles não oferecem opção de URL. O código decodifica esse texto para bytes e grava o arquivo. Base64 converte dados binários em texto para que possam viajar dentro de JSON. Com esses modelos, `url` e `revised_prompt` não vêm preenchidos (`revised_prompt` era só do DALL-E 3, já aposentado), e `content` não é atributo do objeto de imagem. O parâmetro `model` recebe o nome da implantação, não o nome do modelo base. Observação: gpt-image-1 e gpt-image-1-mini estão em preview de acesso limitado, e é preciso solicitar acesso. Outra forma é a Responses API: chamar `responses.create` com um modelo de chat compatível em `model` e `tools=[{\"type\": \"image_generation\"}]`, informando a implantação de imagem no cabeçalho `x-ms-oai-image-generation-deployment`. A imagem vem em base64 no `result` do item `image_generation_call`." },
{ id:"n-b3-3", t:"B3", type:"yesno",
  stem:"Para cada afirmação sobre geração de vídeo com Sora 2 (preview) no Microsoft Foundry, marque Sim ou Não.",
  items:[["Pela API, o app cria um job de geração, consulta o status até ele ser concluído e só então baixa o arquivo MP4.", true], ["O Sora 2 pode gerar um vídeo com uma celebridade real, desde que o prompt informe o nome dela.", false], ["No playground de vídeo, você pode ajustar parâmetros como dimensões e duração antes de gerar o vídeo.", true]],
  why:"Gerar vídeo exige muito processamento e costuma levar de 1 a 5 minutos, por isso a API trabalha com jobs assíncronos. O app cria o job, consulta o status até ele terminar e só então baixa o MP4. Na API v1 `/videos` do Sora 2, o status final é `completed`. O endpoint mais antigo `video/generations/jobs`, mostrado no exercício, informa `succeeded`. O Sora 2 tem restrições de IA responsável: não gera pessoas reais, incluindo figuras públicas, e rejeita personagens e músicas protegidos por direitos autorais. Por enquanto, também recusa imagens de entrada com rostos humanos. O playground de vídeo permite testar prompts e ajustar dimensões e duração sem escrever código. Ele também mostra código de exemplo. O Sora 2 está em preview." },
{ id:"n-b4-1", t:"B4", type:"single",
  stem:"Complete o código que usa o SDK do Content Understanding para analisar uma fatura e ler o campo com o valor total.",
  code:"from azure.ai.contentunderstanding import ContentUnderstandingClient\nfrom azure.ai.contentunderstanding.models import AnalysisInput\nfrom azure.core.credentials import AzureKeyCredential\n\nclient = ContentUnderstandingClient(\n    endpoint=\"https://<recurso>.services.ai.azure.com/\",\n    credential=AzureKeyCredential(key),\n    api_version=\"2025-11-01\",\n)\npoller = client.begin_analyze(\n    analyzer_id=\"prebuilt-invoice\",\n    inputs=[AnalysisInput(url=file_url)],\n)\nresult = poller.__________()\n\ncontent = result.contents[0]\ntotal = content.fields.get(\"TotalAmount\")  # campo objeto: Amount + CurrencyCode\namount = total.value.get(\"Amount\") if total else None\nprint(amount.value if amount else \"não encontrado\")",
  opts:["result", "status", "done", "wait"], ans:0,
  why:"A análise é uma operação de longa duração: `begin_analyze` inicia o job e devolve um poller. `poller.result()` espera a conclusão, com o SDK fazendo o polling, e devolve o `AnalysisResult`. O `contents` desse resultado traz o Markdown e os campos. `status()` e `done()` só informam o andamento, e `wait()` espera sem devolver o resultado. No `prebuilt-invoice`, o total fica no campo objeto `TotalAmount`, com os subcampos `Amount` e `CurrencyCode`. (`InvoiceTotal` é o nome do campo no Document Intelligence.) Analisadores de domínio, como o de faturas, exigem que o recurso tenha implantações padrão de um modelo de chat e de um modelo de embeddings. Na API REST, o mesmo fluxo aparece como `202 Accepted` com o cabeçalho `Operation-Location`. O app consulta essa URL até o status ser Succeeded." },
{ id:"n-b4-2", t:"B4", type:"multi",
  stem:"Uma empresa quer automatizar o reembolso de despesas a partir de fotos de recibos. Em comparação com usar apenas o analisador OCR/Read, quais DUAS vantagens o analisador de recibos (prebuilt-receipt) do Content Understanding oferece?",
  opts:["Associa os valores aos campos do esquema pelo significado, mesmo quando o rótulo muda (por exemplo, “Total a pagar” em vez de “Total”) ou quando o valor aparece sem rótulo.", "Devolve os itens comprados como uma lista estruturada, relacionando descrição, quantidade e preço de cada item, em vez de apenas linhas de texto soltas.", "Consegue ler o texto de fotos e de imagens escaneadas, enquanto o analisador OCR/Read só aceita PDFs digitais.", "Dispensa implantações de modelos no recurso, porque a associação dos valores aos campos é feita só com OCR e regras fixas."], ans:[0, 1],
  why:"O OCR/Read transcreve o texto (palavras, linhas e parágrafos, com confiança e posição), mas não diz qual valor é o total, a data ou o estabelecimento. O analisador de recibos aplica um esquema de forma semântica: associa valores aos campos mesmo quando o rótulo muda ou falta. Ele também entende a relação entre os valores e devolve campos aninhados, como a lista de itens com descrição, quantidade e preço. No portal, esses campos aparecem na aba Fields e no JSON da aba Result. Fotos e imagens escaneadas também são entradas normais para o Read. Diferente do prebuilt-read e do prebuilt-layout, os analisadores que extraem campos precisam de modelos implantados no recurso: um modelo de chat e um de embeddings." }
];

/* ================= Estado ================= */

  SIMULADOS.push({
    title: "AI-901 · Simulado 3 — Rodada 3",
    course: 'ai901',
    sourceFile: "3-ai901-rodada-3.html",
    studyTarget: 80,
    questions: Q.map(question => ({
      id: question.id,
      course: 'ai901',
      type: question.type,
      topic: TOPICS[question.t].name,
      area: AREAS[TOPICS[question.t].area].name,
      q: question.stem,
      code: question.code || '',
      o: question.type === 'yesno' ? question.items.map(item => item[0]) : question.opts,
      a: question.type === 'yesno' ? question.items.map(item => item[1])
        : question.type === 'multi' ? question.ans.map(answer => 'ABCD'[answer])
        : 'ABCD'[question.ans],
      e: question.why
    }))
  });
})();
