/* Revisão editorial das alternativas AI-901, com fontes primárias.
 * Cada posição de x corresponde à mesma posição de o no banco original.
 * O motor embaralha enunciados, gabaritos e comentários em conjunto.
 * Enunciados, exemplos e explicações originais permanecem em ai901.js.
 */
(() => {
  const learn = 'https://learn.microsoft.com/en-us/';
  const sources = {
    responsible: ['Microsoft: princípios de IA responsável', 'azure/machine-learning/concept-responsible-ai?view=azureml-api-2'],
    transparency: ['Microsoft: Transparency Note do Azure OpenAI', 'legal/cognitive-services/openai/transparency-note'],
    agents: ['Microsoft Foundry: agentes e ferramentas', 'azure/foundry/agents/overview'],
    tools: ['Microsoft Agent Framework: ferramentas', 'agent-framework/agents/tools/'],
    projects: ['SDK Python: Azure AI Projects e autenticação', 'python/api/overview/azure/ai-projects-readme?view=azure-python'],
    quickstart: ['Microsoft Foundry: modelos, agentes e conversas', 'azure/foundry/quickstarts/get-started-code'],
    runtime: ['Foundry Agent Service: execução e referência ao agente', 'azure/foundry/agents/concepts/runtime-components'],
    playground: ['Microsoft Foundry: playgrounds e exportação de código', 'azure/foundry/concepts/concept-playgrounds'],
    chat: ['Azure OpenAI: Chat Completions e histórico', 'azure/foundry/openai/how-to/chatgpt'],
    parameters: ['Azure OpenAI: referência de Chat Completions', 'rest/api/aifoundry/azureopenai/chat'],
    responses: ['Azure OpenAI: Responses API', 'azure/foundry/openai/how-to/responses'],
    embeddings: ['Azure OpenAI: embeddings', 'azure/foundry/openai/how-to/embeddings'],
    deployments: ['Microsoft Foundry: tipos de implantação', 'azure/foundry/foundry-models/concepts/deployment-types'],
    reasoning: ['Azure OpenAI: modelos de raciocínio e modalidades', 'azure/foundry/openai/how-to/reasoning'],
    phi: ['Microsoft: SLMs e família Phi no Foundry Local', 'azure/azure-sovereign-clouds/private/foundry-local/concept-models'],
    rag: ['Azure AI Search: RAG e recuperação de documentos', 'azure/search/retrieval-augmented-generation-overview'],
    quota: ['Azure OpenAI: cotas e limites de taxa', 'azure/foundry/openai/how-to/quota'],
    benchmarks: ['Microsoft Foundry: benchmarks de modelos', 'azure/foundry/concepts/model-benchmarks'],
    guardrails: ['Microsoft Foundry: guardrails e controles', 'azure/foundry/guardrails/guardrails-overview'],
    shields: ['Azure AI Content Safety: Prompt Shields', 'azure/ai-services/content-safety/concepts/jailbreak-detection'],
    evaluators: ['Microsoft Foundry: avaliadores de risco e segurança', 'azure/foundry/concepts/evaluation-evaluators/risk-safety-evaluators'],
    iq: ['Foundry IQ: modos de saída e recuperação', 'azure/foundry/agents/concepts/foundry-iq-faq'],
    language: ['Azure Language: recursos de análise de texto', 'azure/ai-services/language-service/overview'],
    sentiment: ['Azure Language: sentimento e mineração de opinião', 'azure/ai-services/language-service/sentiment-opinion-mining/overview'],
    summary: ['Azure Language: sumarização de documentos', 'azure/ai-services/language-service/summarization/how-to/document-summarization'],
    textsdk: ['SDK Python: Azure Text Analytics', 'python/api/overview/azure/ai-textanalytics-readme'],
    detected: ['SDK Python: DetectedLanguage', 'python/api/azure-ai-textanalytics/azure.ai.textanalytics.detectedlanguage?view=azure-python'],
    speech: ['Azure Speech: reconhecimento de fala', 'azure/ai-services/speech-service/speech-to-text'],
    tts: ['Azure Speech: síntese de fala', 'azure/ai-services/speech-service/text-to-speech'],
    ssml: ['Azure Speech: SSML, pausas e prosódia', 'azure/ai-services/speech-service/speech-synthesis-markup'],
    speechsdk: ['SDK Python: Speech e classes de áudio', 'python/api/azure-cognitiveservices-speech/azure.cognitiveservices.speech?view=azure-python'],
    outputaudio: ['SDK Python: AudioOutputConfig', 'python/api/azure-cognitiveservices-speech/azure.cognitiveservices.speech.audio.audiooutputconfig?view=azure-python'],
    recognized: ['SDK Python: SpeechRecognizer e eventos', 'python/api/azure-cognitiveservices-speech/azure.cognitiveservices.speech.speechrecognizer?view=azure-python'],
    voice: ['Azure Speech: Voice Live', 'azure/ai-services/speech-service/voice-live'],
    audio: ['Azure OpenAI: entrada e geração de áudio', 'azure/foundry/openai/audio-completions-quickstart'],
    vision: ['Azure OpenAI: imagens em Chat Completions', 'azure/ai-services/openai/how-to/gpt-with-vision'],
    objects: ['Azure Vision: detecção de objetos', 'azure/ai-services/computer-vision/concept-object-detection'],
    ocr: ['Azure Vision: reconhecimento óptico de caracteres', 'azure/ai-services/computer-vision/overview-ocr'],
    images: ['Azure OpenAI: geração de imagens', 'azure/foundry/openai/dall-e-quickstart'],
    structured: ['Azure OpenAI: saídas estruturadas', 'azure/foundry/openai/how-to/structured-outputs'],
    video: ['Microsoft Foundry: geração de vídeo com Sora', 'azure/foundry/openai/concepts/video-generation'],
    content: ['Content Understanding: modalidades e campos', 'azure/ai-services/content-understanding/overview'],
    analyzer: ['Content Understanding: referência de analyzers', 'azure/ai-services/content-understanding/concepts/analyzer-reference'],
    prebuilt: ['Content Understanding: analyzers prebuilt', 'azure/ai-services/content-understanding/concepts/prebuilt-analyzers'],
    fields: ['Content Understanding: boas práticas de campos', 'azure/ai-services/content-understanding/concepts/best-practices'],
    contentsdk: ['SDK Python: Content Understanding e operações assíncronas', 'python/api/overview/azure/ai-contentunderstanding-readme?view=azure-python'],
    contentrest: ['Content Understanding: análise pela API REST', 'azure/ai-services/content-understanding/quickstart/use-rest-api'],
    identity: ['Azure Identity: autenticação local em Python', 'azure/developer/python/sdk/authentication/local-development-dev-accounts'],
    secrets: ['Azure Key Vault: autenticação e identidades gerenciadas', 'azure/key-vault/general/authentication'],
    ngrams: ['Azure Machine Learning: n-grams e TF-IDF', 'azure/machine-learning/component-reference/extract-n-gram-features-from-text?view=azureml-api-2'],
    preprocess: ['Azure Machine Learning: pré-processamento de texto', 'azure/machine-learning/component-reference/preprocess-text?view=azureml-api-2'],
    transformer: ['Artigo original: Attention Is All You Need', 'https://arxiv.org/abs/1706.03762'],
    vit: ['Artigo original: Vision Transformer', 'https://arxiv.org/abs/2010.11929'],
    diffusion: ['Artigo original: Denoising Diffusion Probabilistic Models', 'https://arxiv.org/abs/2006.11239'],
    cnn: ['PyTorch: convolução e pesos aprendidos', 'https://docs.pytorch.org/docs/stable/generated/torch.nn.Conv2d.html'],
    mfcc: ['TorchAudio: coeficientes MFCC', 'https://docs.pytorch.org/audio/stable/generated/torchaudio.transforms.MFCC.html']
  };
  const concepts = {
    fairness: 'Equidade busca evitar discriminação e diferenças injustificadas entre pessoas ou grupos.',
    reliability: 'Confiabilidade e segurança tratam de operação robusta, falhas previsíveis e redução de danos.',
    transparency: 'Transparência permite compreender a finalidade, o funcionamento e as limitações da IA.',
    inclusion: 'Inclusão considera necessidades diversas e acessibilidade para que mais pessoas possam usar a solução.',
    accountability: 'Responsabilidade atribui a pessoas e organizações a prestação de contas e a supervisão das decisões de IA.',
    privacy: 'Privacidade e segurança protegem dados pessoais e restringem acesso e uso indevidos.',
    temperature: '`temperature` ajusta a aleatoriedade da escolha de tokens nos modelos que aceitam esse parâmetro.',
    topp: '`top_p` limita a seleção ao conjunto de tokens cuja probabilidade acumulada atinge o limiar informado.',
    maxtokens: 'O limite de tokens determina o orçamento máximo de geração; o nome do parâmetro varia por modelo e API.',
    stop: 'Stop sequences encerram a geração quando uma das sequências configuradas aparece, nas APIs e modelos compatíveis.',
    frequency: '`frequency_penalty` positiva penaliza tokens conforme a frequência com que já apareceram.',
    presence: '`presence_penalty` positiva penaliza tokens que já apareceram e favorece a introdução de novos temas.',
    embeddings: 'Embeddings transformam conteúdo em vetores numéricos, úteis para comparação semântica e busca por similaridade.',
    rag: 'RAG recupera conteúdo externo relevante e o fornece como contexto para a geração da resposta.',
    standard: 'Global Standard oferece inferência síncrona com pagamento por uso e roteamento pela infraestrutura global.',
    ptu: 'Provisioned reserva capacidade de inferência medida em PTUs para throughput mais previsível.',
    batch: 'Global Batch processa requisições de forma assíncrona em lotes, com desconto e meta de conclusão em 24 horas.',
    developer: 'Developer é uma modalidade de avaliação de modelos ajustados, com duração limitada e sem SLA de produção.',
    system: 'A mensagem de sistema define orientações persistentes de comportamento, escopo e formato para o chat.',
    deployment: 'O nome da implantação identifica o modelo disponibilizado para inferência no recurso.',
    sentiment: 'Análise de sentimento identifica polaridade positiva, negativa ou neutra no texto.',
    opinion: 'Mineração de opinião relaciona um alvo ou aspecto do texto à avaliação expressa sobre ele.',
    keyphrases: 'Extração de frases-chave identifica os principais conceitos e expressões de um texto.',
    ner: 'NER reconhece e categoriza entidades, como pessoas, organizações, locais, datas e valores.',
    language: 'Detecção de idioma identifica a língua predominante no texto e fornece um índice de confiança.',
    pii: 'Detecção de PII localiza informações pessoais e pode produzir texto com essas informações mascaradas.',
    stt: 'Speech-to-text reconhece fala em áudio e a converte em texto.',
    tts: 'Text-to-speech transforma texto em áudio de fala sintetizada.',
    ssml: 'SSML é uma marcação para controlar a síntese de voz, incluindo pausas, pronúncia, velocidade e entonação.',
    objects: 'Detecção de objetos identifica instâncias e informa suas posições, normalmente com caixas delimitadoras.',
    classification: 'Classificação de imagem atribui categorias à imagem, sem necessariamente localizar cada instância.',
    ocr: 'OCR reconhece caracteres e palavras presentes em imagens ou documentos digitalizados.',
    segmentation: 'Segmentação semântica atribui uma categoria a cada pixel, separando regiões por classe.',
    imagegen: 'Geração de imagens produz conteúdo visual a partir de instruções e, quando suportado, imagens de referência.',
    agent: 'Um agente usa um modelo, instruções e ferramentas para conduzir tarefas e agir em direção a um objetivo.',
    files: 'File search recupera passagens relevantes dos arquivos fornecidos ao agente para fundamentar respostas.',
    code: 'Code interpreter executa código em um ambiente isolado para cálculos, análise de arquivos e criação de artefatos.',
    web: 'Web search busca informações na web que podem ser usadas para fundamentar respostas com fontes.',
    functions: 'Function calling permite ao modelo solicitar funções definidas pela aplicação; a integração executa a operação externa.',
    instructions: 'As instruções do agente definem sua finalidade, suas regras e o comportamento esperado.',
    conversation: 'Uma conversa persistente associa mensagens e respostas ao mesmo histórico de interação.',
    shields: 'Prompt Shields detectam tentativas de manipular instruções, inclusive ataques inseridos em conteúdo externo.',
    groundedness: 'Groundedness avalia se as afirmações da resposta encontram apoio no material de referência fornecido.',
    filters: 'Guardrails aplicam controles para detectar e mitigar riscos, como conteúdo nocivo e ataques a prompts.',
    analyzer: 'Um analyzer configura o processamento de conteúdo e o esquema dos campos desejados.',
    extract: '`extract` recupera um valor expresso no documento, com suporte a evidências de sua origem.',
    generate: '`generate` infere ou sintetiza um valor a partir do conteúdo, como um resumo.',
    classify: '`classify` escolhe o valor de um campo entre categorias previamente definidas.',
    content: 'Content Understanding converte documentos, imagens, áudio e vídeo em conteúdo e campos estruturados.',
    credential: '`DefaultAzureCredential()` tenta fontes de credenciais do Azure Identity e obtém tokens do Microsoft Entra ID.',
    structured: 'Structured outputs restringem a saída a um esquema JSON compatível para facilitar o processamento automático.'
  };
  const d = (key, reason) => {
    if (!concepts[key]) throw new Error(`Conceito AI-901 ausente: ${key}`);
    return `${concepts[key]} ${reason}`;
  };
  const reviews = {
    'a1-1': [['responsible'], [
      d('fairness', 'É a resposta correta: candidatos equivalentes recebem tratamentos diferentes por bairro, sinal de possível viés discriminatório.'),
      d('reliability', 'Seria o foco de erros de operação ou comportamentos perigosos; o problema destacado é a desigualdade entre grupos equivalentes.'),
      d('transparency', 'Explicar uma decisão não elimina o tratamento desigual. O enunciado relata discriminação, e não falta de informação sobre o sistema.'),
      d('inclusion', 'Ampliar participação e acesso é importante, mas aqui os candidatos já usam o serviço e sofrem diferenças injustificadas na aprovação.')
    ]],
    'a1-2': [['responsible', 'transparency'], [
      d('accountability', 'Envolveria definir responsáveis e mecanismos de supervisão. Publicar finalidade e limitações evidencia principalmente a compreensão do sistema pelo público.'),
      d('transparency', 'É a resposta correta: o documento torna visíveis os usos pretendidos, limites e fatores das decisões, como fazem as Transparency Notes da Microsoft.'),
      d('privacy', 'Envolveria proteção de informações, controles de acesso ou tratamento de dados pessoais. O documento descrito explica a IA, sem mencionar esses controles.'),
      d('fairness', 'Envolveria avaliar e corrigir diferenças injustificadas entre grupos. Informar limitações não demonstra, por si só, que as decisões são equitativas.')
    ]],
    'a1-3': [['responsible'], [
      d('reliability', 'Os testes podem melhorar a robustez, mas o aspecto central é incluir necessidades e perfis diversos desde o desenvolvimento.'),
      d('transparency', 'Seria demonstrada por explicações sobre o assistente. Convidar usuários com necessidades distintas caracteriza participação e acessibilidade.'),
      d('inclusion', 'É a resposta correta: pessoas com deficiência de fala, idosos e falantes com sotaques participam para orientar uma solução acessível.'),
      d('accountability', 'Trata de quem supervisiona e responde pela IA. O enunciado não define responsáveis; descreve diversidade de participantes nos testes.')
    ]],
    'a1-4': [['responsible'], [
      d('accountability', 'É a resposta correta: o comitê estabelece responsáveis, revisa lançamentos e permite supervisão e intervenção humanas.'),
      d('inclusion', 'Seria evidenciada por acessibilidade ou participação de públicos diversos. O comitê descrito estabelece governança e prestação de contas.'),
      d('fairness', 'Seria o foco de decisões não discriminatórias. O cenário trata de responsáveis e controle humano, sem comparação de resultados entre grupos.'),
      d('transparency', 'Explicar decisões favorece transparência, mas definir quem responde por falhas e pode revertê-las demonstra principalmente responsabilidade.')
    ]],
    'a1-5': [['responsible'], [
      d('privacy', 'Mascarar prontuários ou restringir seu acesso atenderia esse princípio. O cenário prioriza prevenir decisões clínicas inseguras.'),
      d('reliability', 'É a resposta correta: testar situações extremas e encaminhar previsões pouco confiáveis a profissionais reduz o risco de dano.'),
      d('transparency', 'Explicações sobre previsões seriam uma medida de transparência. O encaminhamento humano descrito funciona como proteção diante de possíveis falhas.'),
      d('fairness', 'Exigiria examinar diferenças injustificadas entre grupos de pacientes. Casos raros e baixa confiança destacam robustez e segurança operacional.')
    ]],
    'a1-6': [['responsible', 'guardrails'], [
      d('privacy', 'Sim: retirar dados pessoais dos logs reduz a exposição desses dados durante avaliações ou ajustes. A medida deve integrar outros controles de proteção.'),
      d('transparency', 'Sim: avisar que o interlocutor é uma IA ajuda o usuário a compreender a natureza e os limites da interação.'),
      d('filters', 'Não: filtros de segurança não garantem veracidade factual. Ainda são necessárias fontes, avaliação de groundedness e validação das respostas.')
    ]],
    'a2-1': [['chat', 'transformer'], [
      'Uma busca em um banco de perguntas e respostas recupera registros existentes. Um LLM pode usar resultados de busca como contexto, mas esse não é o mecanismo que gera seu texto.',
      'É a resposta correta: um LLM autorregressivo estima uma distribuição de probabilidades para o próximo token a partir do contexto e repete esse processo. A amostragem pode escolher um token diferente do mais provável.',
      'Regras manuais caracterizam sistemas baseados em regras. O LLM aprende parâmetros durante o treinamento e usa esses parâmetros na previsão de tokens; não exige uma regra escrita para cada pergunta.',
      'Memorização de trechos pode ocorrer, mas não define a geração de linguagem. A resposta resulta da previsão de tokens, e não de uma obrigação de copiar documentos inteiros do treinamento.'
    ]],
    'a2-2': [['embeddings', 'chat', 'guardrails'], [
      d('embeddings', 'É a resposta correta: conteúdos com significados semelhantes podem ter vetores próximos, permitindo recuperar textos relacionados mesmo sem palavras idênticas.'),
      d('system', 'A persona é orientada por instruções de sistema ou do agente. Isso configura comportamento, enquanto embeddings são representações numéricas do conteúdo.'),
      d('filters', 'Filtros controlam riscos nas entradas e saídas. Eles não são os vetores usados para comparar significados.'),
      'Imagens em um prompt são entradas multimodais. O termo embedding designa a representação vetorial de conteúdo, e não simplesmente uma imagem anexada ao pedido.'
    ]],
    'a2-3': [['parameters'], [
      d('temperature', 'Aumentá-la amplia a variedade de tokens e pode variar a extração entre execuções; esse efeito contraria a consistência pedida.'),
      d('temperature', 'É a resposta correta: valores próximos de zero favorecem escolhas mais concentradas e respostas mais estáveis. Isso não garante determinismo absoluto.'),
      d('maxtokens', 'Aumentá-lo permite respostas mais longas, mas não controla diretamente a variabilidade entre extrações da mesma entrada.'),
      d('system', 'Removê-la retira orientações comuns de extração e formato, o que pode prejudicar a consistência em vez de melhorá-la.')
    ]],
    'a2-4': [['parameters'], [
      d('temperature', 'É uma das respostas corretas porque modifica a distribuição usada na amostragem e influencia a diversidade do texto.'),
      d('topp', 'É a outra resposta correta porque altera o conjunto de candidatos à amostragem. Em geral, ajusta-se top_p ou temperature, evitando mudar ambos ao mesmo tempo.'),
      d('maxtokens', 'Controla a extensão máxima da geração, e não diretamente a criatividade ou diversidade de tokens.'),
      d('stop', 'Controla onde a geração termina. Não ajusta a distribuição de probabilidades usada para escolher tokens.')
    ]],
    'a2-5': [['reasoning', 'embeddings', 'audio', 'images'], [
      d('embeddings', '`text-embedding-3-large` produz vetores de texto; não é um modelo de chat com visão para responder sobre luzes em uma foto.'),
      'É a resposta correta: gpt-5-mini aceita texto e imagens como entrada e produz texto. Essa combinação permite interpretar o painel e responder à pergunta, sujeita às limitações de percepção visual.',
      d('stt', 'Whisper foi desenvolvido para tarefas de fala, como transcrição. Uma fotografia de um painel não é entrada de áudio a ser reconhecida.'),
      d('imagegen', 'gpt-image-1 serve para criar ou editar imagens. O pedido é interpretar uma fotografia e responder em texto, não gerar conteúdo visual.')
    ]],
    'a2-6': [['deployments'], [
      d('standard', 'Atende chamadas em tempo real, mas não oferece o perfil de processamento em lote com desconto pedido para milhões de documentos.'),
      d('ptu', 'Pode atender volume previsível, mas a reserva de capacidade não é a opção de lote com desconto para uma tarefa sem urgência.'),
      d('batch', 'É a resposta correta para o volume elevado e a tolerância à espera. As 24 horas são uma meta de processamento documentada, não uma garantia absoluta de prazo.'),
      'Data Zone Standard mantém o processamento na zona de dados escolhida e atende chamadas síncronas por uso. Seu foco é a localização do processamento, não o desconto e a execução assíncrona em lote.'
    ]],
    'a2-7': [['deployments'], [
      d('ptu', 'É a resposta correta para tráfego alto e estável com capacidade reservada. É necessário dimensionar a capacidade; PTUs não prometem ausência de qualquer variação de latência.'),
      d('batch', 'A execução assíncrona não atende o requisito de respostas interativas com latência consistente.'),
      'Standard por token atende demanda variável usando capacidade compartilhada. Não oferece a mesma reserva de throughput que uma implantação Provisioned.',
      d('developer', 'Uma modalidade temporária de avaliação não é adequada para uma aplicação crítica de produção.')
    ]],
    'a2-8': [['rag', 'parameters', 'embeddings'], [
      d('temperature', 'Aumentar a aleatoriedade não fornece ao modelo as novas políticas de RH; pode ampliar a variação de respostas sem resolver a desatualização.'),
      d('rag', 'É a resposta correta: recuperar as políticas vigentes traz informação atual ao prompt sem exigir novo treinamento a cada mudança mensal.'),
      d('maxtokens', 'Reduzir a extensão da resposta não atualiza o conhecimento sobre as políticas e pode cortar orientações relevantes.'),
      d('embeddings', 'Eles podem ajudar a localizar políticas em um fluxo RAG, mas não substituem o modelo que redige a resposta do assistente.')
    ]],
    'a2-9': [['phi', 'reasoning', 'images', 'speech'], [
      'Um modelo grande de raciocínio atende problemas complexos, mas pode exigir mais custo e recursos do que uma classificação simples de tickets necessita.',
      'É a resposta correta: um SLM, como um modelo Phi adequado à tarefa, tem porte menor e pode favorecer execução com menos recursos e latência reduzida. A escolha final deve ser validada com tickets representativos.',
      d('imagegen', 'Criar imagens não é a capacidade necessária para atribuir categorias a tickets textuais.'),
      d('stt', 'Transcrever áudio seria útil para tickets falados, mas não executa, por si só, a classificação textual pedida.')
    ]],
    'a3-1': [['language'], [
      d('sentiment', 'Determina a polaridade do texto; não identifica as categorias de pessoas, organizações e datas solicitadas.'),
      d('keyphrases', 'Lista expressões relevantes, mas não substitui a classificação de menções em tipos de entidades.'),
      d('ner', 'É a resposta correta: localiza menções e associa categorias, como pessoa, organização e data, às entidades encontradas.'),
      d('language', 'Informa se o texto está, por exemplo, em português ou inglês; não categoriza seus nomes e datas.')
    ]],
    'a3-2': [['language', 'tts', 'objects'], [
      d('keyphrases', 'É a resposta correta: os principais conceitos dos artigos podem compor termos de indexação e facilitar sua descoberta.'),
      d('tts', 'Ler os artigos em voz alta não produz uma lista de termos para indexação.'),
      d('sentiment', 'A polaridade dos artigos não corresponde aos principais termos e tópicos pedidos.'),
      d('objects', 'Localiza elementos em imagens, enquanto o material a indexar são artigos em texto.')
    ]],
    'a3-3': [['language', 'sentiment'], [
      d('pii', 'Detecta dados pessoais, como telefones ou identificadores. Não informa a opinião do cliente sobre entrega e embalagem.'),
      d('opinion', 'É a resposta correta: em conjunto com sentimento, associa avaliação positiva à entrega e negativa à embalagem.'),
      d('keyphrases', 'Pode destacar entrega e embalagem, mas não determina, por si só, a polaridade de cada aspecto.'),
      d('language', 'Saber o idioma da avaliação não revela o que o cliente aprovou ou desaprovou em cada aspecto.')
    ]],
    'a3-4': [['summary', 'language'], [
      'Selecionar frases importantes do original caracteriza sumarização extrativa. A abstrativa pode reformular e combinar ideias em novas frases.',
      'É a resposta correta: a sumarização abstrativa gera uma síntese reformulada das ideias centrais. Como há geração, a fidelidade ao texto original deve ser avaliada.',
      'Tradução converte conteúdo para outro idioma. Isso não implica condensar as ideias, que é o objetivo da sumarização.',
      d('pii', 'Mascarar informações pessoais protege o conteúdo sensível, mas não gera uma síntese das ideias centrais.')
    ]],
    'a3-5': [['speech', 'tts', 'ssml'], [
      d('stt', 'Sim: legendas ao vivo são texto reconhecido a partir do áudio da palestra, com resultados enviados durante a fala.'),
      d('tts', 'Sim: ler mensagens para motoristas exige gerar fala audível a partir do texto das mensagens.'),
      d('ssml', 'Não: SSML orienta como falar um texto. A transcrição de áudio gravado é uma tarefa de speech-to-text.')
    ]],
    'a3-6': [['objects', 'ocr', 'images'], [
      d('classification', 'Uma categoria para a foto, como prateleira de alimentos, não fornece a posição de cada produto.'),
      d('objects', 'É a resposta correta: cada produto detectado pode receber uma classe e coordenadas, permitindo identificar e localizar suas instâncias.'),
      d('ocr', 'Ler rótulos pode complementar a análise, mas não equivale a localizar e classificar cada produto na prateleira.'),
      d('imagegen', 'Produz novas imagens; não é a tarefa de inventariar os produtos existentes em uma fotografia.')
    ]],
    'a3-7': [['ocr', 'objects', 'tts'], [
      d('ocr', 'É a resposta correta: converte o texto visual de placas e cupons fotografados em conteúdo que pode ser armazenado e pesquisado.'),
      'Detecção facial identifica a presença e, conforme o recurso, a posição de rostos. Não transcreve caracteres de placas ou cupons.',
      d('segmentation', 'Separar pixels por classe não transforma caracteres em texto digital, que é a capacidade exigida.'),
      d('tts', 'Ler texto já digitalizado em voz alta é uma etapa possível depois do OCR; não extrai texto da fotografia.')
    ]],
    'a3-8': [['agents', 'tools', 'tts'], [
      'Um chatbot de respostas fixas recupera respostas predefinidas. Sem planejamento e uso de ferramentas para agir, o cenário não demonstra a solução agêntica descrita.',
      d('classification', 'Classificar fotografias é uma tarefa isolada de percepção; não descreve um assistente que planeja e executa etapas de uma viagem.'),
      d('agent', 'É a resposta correta: remarcar a viagem exige organizar etapas, consultar sistemas e executar ações por ferramentas, respeitando permissões e supervisão.'),
      d('tts', 'Converter texto em fala é uma capacidade específica e pode ser uma ferramenta do agente; isoladamente, não planeja nem conclui a viagem.')
    ]],
    'a3-9': [['content', 'images', 'tts', 'language'], [
      d('content', 'É a resposta correta: a carga de extração de informações transforma materiais heterogêneos em campos como apólice, data e valor.'),
      d('imagegen', 'Produzir imagens novas não extrai os campos dos PDFs, fotografias e gravações recebidos pela seguradora.'),
      d('tts', 'Gerar áudio a partir de texto não estrutura dados dos documentos e ligações de sinistro.'),
      'Tradução automática converte idiomas. A necessidade descrita é identificar valores e organizá-los em campos, mesmo quando o conteúdo já está no idioma desejado.'
    ]]
  };
  Object.assign(reviews, {
    'b1-1': [['chat'], [
      d('system', 'É a resposta correta: centraliza a persona, o tom e as regras aplicáveis aos turnos da conversa.'),
      'Mensagens de usuário contêm solicitações e dados de cada turno. Repetir nelas as regras da aplicação não é o lugar adequado para definir as orientações globais do assistente.',
      d('maxtokens', 'Controla quanto o modelo pode gerar, e não sua persona, seu tom ou o escopo autorizado.'),
      d('deployment', 'Seleciona um modelo disponível, mas o texto do nome não funciona como instrução de comportamento.')
    ]],
    'b1-2': [['chat', 'rag'], [
      'Zero-shot prompting solicita a tarefa sem demonstrações de entrada e saída. Como o prompt contém três exemplos, ele não é zero-shot.',
      'É a resposta correta: few-shot prompting fornece algumas demonstrações no contexto para orientar o padrão de saída, sem alterar os pesos do modelo.',
      'Fine-tuning ajusta os parâmetros do modelo usando um conjunto de treinamento. Colocar exemplos no prompt é orientação durante a inferência, e não treinamento.',
      d('rag', 'Recuperar referências externas é diferente de demonstrar formatos com pares de entrada e saída. O enunciado descreve exemplos, não uma etapa de busca.')
    ]],
    'b1-3': [['chat', 'structured', 'rag'], [
      'É uma resposta correta: declarar campos, estrutura e limites reduz a ambiguidade do resultado esperado. Quando disponível, um esquema de structured outputs reforça a estrutura exigida.',
      'Instruções vagas deixam objetivo e critérios de sucesso indefinidos. Essa liberdade não favorece uma tarefa que precisa de respostas consistentes e verificáveis.',
      d('rag', 'É outra resposta correta: contexto pertinente e referências ajudam o modelo a responder sobre a tarefa concreta. Os dados devem ser delimitados como conteúdo, não como novas instruções.'),
      'Misturar tarefas sem relação em uma frase ambígua dificulta identificar prioridades e formato esperado. Separar objetivos e explicitar etapas oferece orientações mais claras.'
    ]],
    'b1-4': [['playground'], [
      'É a resposta correta: o playground permite experimentar mensagens, instruções e parâmetros suportados pelo modelo sem implementar um cliente.',
      'Azure Monitor coleta métricas, logs e alertas dos recursos. Ele observa a operação, mas não é a interface de experimentação interativa de prompts.',
      'Templates ARM descrevem recursos Azure para implantação de infraestrutura. Não são uma interface de chat para ajustar prompts e observar respostas.',
      'O designer do Azure Machine Learning monta pipelines de aprendizagem de máquina. Para testar uma implantação generativa no Foundry, usa-se o playground apropriado.'
    ]],
    'b1-5': [['benchmarks', 'playground', 'content', 'guardrails'], [
      'É a resposta correta: benchmarks e comparações do catálogo ajudam a avaliar qualidade e desempenho dos modelos. Custos e resultados no seu próprio cenário também precisam ser comparados.',
      'O playground de fala experimenta reconhecimento e síntese de áudio. Não é o recurso para comparar os modelos gerais do catálogo por benchmarks.',
      d('content', 'Sua finalidade é analisar conteúdo e extrair campos, não apresentar um ranking de qualidade, custo e throughput dos modelos.'),
      d('filters', 'Controlam riscos durante o uso da IA, mas não substituem benchmarks para escolher entre modelos.')
    ]],
    'b1-6': [['projects', 'identity'], [
      d('credential', 'É a resposta correta: fornece o objeto de credencial exigido pelo AIProjectClient para autenticação Entra ID.'),
      'Uma chave de API em string não é uma credencial de token Entra ID. O AIProjectClient do SDK de projetos exige TokenCredential, e não essa chave literal.',
      '"gpt-4o" é um identificador de modelo, não um mecanismo de autenticação. Informá-lo no campo de credencial não obtém um token de acesso.',
      'PROJECT_NAME identifica o projeto em uma variável de ambiente. O nome não comprova a identidade do aplicativo nem substitui uma credencial Entra ID.'
    ]],
    'b1-7': [['quickstart', 'responses'], [
      d('deployment', 'É a resposta correta no contexto do código com modelo implantado: model aponta para a implantação usada na inferência, inclusive quando seu nome coincide com o modelo-base.'),
      'O ID da assinatura identifica o escopo de cobrança e gestão dos recursos Azure. Não seleciona um modelo para gerar a resposta.',
      'O endpoint informa ao cliente para onde enviar requisições. Ele é configurado na conexão, enquanto model identifica a implantação a chamar.',
      'A região indica a localização do recurso. Não é o identificador da implantação esperado pelo parâmetro model.'
    ]],
    'b1-8': [['chat', 'responses'], [
      d('temperature', 'Um valor baixo não apaga o histórico. A existência de contexto depende de enviar mensagens anteriores ou usar os mecanismos de estado da API.'),
      'É a resposta correta para Chat Completions sem histórico: cada chamada só vê as mensagens enviadas. Inclua os turnos user e assistant; na Responses API, também existem conversation e previous_response_id.',
      'Fine-tuning adapta o comportamento do modelo com treinamento. Não fornece automaticamente as mensagens anteriores de uma conversa do usuário.',
      d('standard', 'O tipo de implantação define processamento e cobrança. A perda de contexto decorre de como a aplicação gerencia o histórico, não desse tipo.')
    ]],
    'b1-9': [['agents', 'tools'], [
      d('deployment', 'É uma resposta correta: o agente precisa de um modelo para interpretar a solicitação e produzir respostas ou chamadas de ferramentas.'),
      d('instructions', 'É uma resposta correta: elas orientam a finalidade, as restrições e o modo de atuação do agente.'),
      'É uma resposta correta: ferramentas e fontes de conhecimento estendem o agente com recuperação de documentos, execução de código ou acesso a serviços externos.',
      'O tamanho de um cluster de GPUs é uma decisão de infraestrutura de treinamento. Criar um agente sobre um modelo implantado não exige dimensionar um cluster para treinar esse modelo.'
    ]],
    'b1-10': [['tools'], [
      d('files', 'Recupera informações textuais, mas não é a ferramenta dedicada a executar agregações do CSV e gerar um gráfico.'),
      d('code', 'É a resposta correta: pode ler o CSV, calcular totais por mês e produzir o gráfico por código.'),
      d('web', 'Consultar páginas públicas não calcula os totais do arquivo de vendas fornecido ao agente.'),
      d('functions', 'Seria possível implementar um serviço externo de análise, mas a ferramenta integrada para cálculos e gráficos de arquivos é Code interpreter.')
    ]],
    'b1-11': [['tools', 'speech', 'images'], [
      d('code', 'É apropriado para cálculos e transformação de arquivos. Para recuperação de passagens e respostas fundamentadas nos manuais, File search é a opção específica.'),
      d('files', 'É a resposta correta: busca passagens dos PDFs enviados e permite usar esse material como conhecimento para as respostas.'),
      d('imagegen', 'Criar ilustrações não localiza informações nos manuais de RH nem fornece evidências documentais para as respostas.'),
      d('stt', 'Transcreve gravações, mas os materiais fornecidos são PDFs a consultar por recuperação de conteúdo.')
    ]],
    'b1-12': [['tools'], [
      d('functions', 'É a resposta correta: uma função ou ferramenta OpenAPI expõe a consulta à API de pedidos, com autenticação e execução controladas pela integração.'),
      'A janela de contexto é a quantidade de conteúdo que o modelo pode considerar. Aumentá-la não cria conexão com a API nem traz o status atual do pedido.',
      d('system', 'Usá-la como cadastro de todos os pedidos desperdiça contexto e deixa dados desatualizados. Uma consulta à API recupera o registro relevante no momento necessário.'),
      d('code', 'Executa análises em um sandbox. Uma integração autenticada com a API interna deve ser exposta por ferramenta específica, em vez de presumir que o sandbox tenha esse acesso.')
    ]],
    'b1-13': [['quickstart', 'responses'], [
      d('conversation', 'Criar outra a cada pergunta separa os turnos em históricos diferentes e perde o vínculo necessário para lembrar a interação anterior.'),
      d('conversation', 'É a resposta correta: reutilizar seu identificador mantém os turnos vinculados e permite continuar o mesmo contexto.'),
      d('agent', 'Recriar sua definição a cada pergunta não reaproveita automaticamente o histórico; a definição e o estado da conversa são elementos distintos.'),
      'Enviar apenas a pergunta atual, sem histórico ou referência à conversa, omite as informações dos turnos anteriores e impede a continuidade pretendida.'
    ]],
    'b1-14': [['shields', 'guardrails', 'language', 'parameters'], [
      d('shields', 'É a resposta correta: textos que mandam ignorar instruções anteriores são exemplos de ataques ao prompt que esse controle procura detectar.'),
      d('groundedness', 'Verifica apoio factual no material fornecido. Isso é diferente de identificar uma tentativa de substituir as instruções da aplicação.'),
      d('temperature', 'Aumentar a aleatoriedade não constitui proteção contra ataques nem define uma política de bloqueio de jailbreaks.'),
      d('keyphrases', 'Identifica conceitos do texto, mas não é um classificador de ataques às instruções do modelo.')
    ]],
    'b2-1': [['language', 'textsdk'], [
      d('pii', 'É a resposta correta: o recurso localiza entidades sensíveis suportadas e pode retornar redacted_text. Para CPF, confira categorias, idioma e versão, e complemente a cobertura quando necessário.'),
      d('keyphrases', 'Identificar tópicos relevantes não garante localizar ou mascarar identificadores pessoais.'),
      d('sentiment', 'A polaridade de uma mensagem não identifica os telefones, e-mails e números que precisam de proteção.'),
      d('language', 'Reconhecer português ou outro idioma pode orientar o processamento, mas não remove os dados pessoais do texto.')
    ]],
    'b2-2': [['language', 'tts'], [
      d('language', 'É a resposta correta: identificar português, inglês ou espanhol permite encaminhar a mensagem à equipe adequada.'),
      d('ner', 'Reconhecer pessoas, lugares e organizações não é a análise que determina a língua para o encaminhamento.'),
      'Sumarização condensa o conteúdo da mensagem. O problema de roteamento depende do idioma, não de uma versão mais curta do texto.',
      d('tts', 'Transformar a mensagem em áudio não retorna a classificação de idioma necessária à central.')
    ]],
    'b2-3': [['speechsdk', 'tts', 'speech'], [
      d('stt', 'SpeechRecognizer recebe áudio para reconhecimento; ele não produz fala a partir do texto do aplicativo.'),
      d('tts', 'É a resposta correta: SpeechSynthesizer gera a fala e expõe métodos como speak_text_async para ler o texto.'),
      'TranslationRecognizer reconhece fala e a traduz. Sua finalidade não é realizar a síntese simples do texto já disponível no aplicativo.',
      'IntentRecognizer reconhece fala para identificar intenções do usuário. Ele não é a classe de síntese de voz exigida pelo código.'
    ]],
    'b2-4': [['speechsdk'], [
      'É a resposta correta: SpeechRecognitionResult.text contém o texto reconhecido. Antes de usá-lo, confira se reason indica reconhecimento bem-sucedido.',
      'audio_data contém bytes em resultados de síntese de fala. Não é a propriedade de texto do SpeechRecognitionResult retornado pelo reconhecedor.',
      'A voz é configurada na síntese, por exemplo em speech_synthesis_voice_name. result.voice_name não é a propriedade que retorna a transcrição.',
      'language_model não é a propriedade documentada para o texto de SpeechRecognitionResult. A transcrição está em text, com estado e metadados em propriedades próprias.'
    ]],
    'b2-5': [['audio', 'speech', 'embeddings', 'ocr'], [
      'É a resposta correta entre as opções: um modelo que aceite áudio diretamente pode interpretar a pergunta e gerar resposta, evitando montar uma etapa separada de transcrição. O modelo e a API precisam suportar áudio.',
      'Treinar reconhecimento e linguagem do zero demanda dados, infraestrutura e manutenção de dois componentes. Isso contraria o objetivo de montar o menor número de componentes.',
      d('embeddings', 'Um endpoint de embeddings textuais não aceita automaticamente arquivos de áudio nem responde à pergunta falada como um modelo multimodal de chat.'),
      d('ocr', 'Converter som em uma imagem não transforma os caracteres reconhecidos em compreensão da pergunta. Áudio deve ser tratado por reconhecimento de fala ou modelo que suporte essa modalidade.')
    ]],
    'b2-6': [['speech', 'tts', 'speechsdk'], [
      'Sim: o reconhecimento e a tradução de fala do Azure Speech podem traduzir conteúdo falado durante uma sessão em tempo real, conforme os idiomas e recursos suportados.',
      d('tts', 'Não: há vozes neurais predefinidas para pt-BR. Treinar uma voz personalizada é uma opção específica, não uma exigência para sintetizar português brasileiro.'),
      'Sim: transcrição em lote processa arquivos de áudio já gravados de forma assíncrona. É adequada a grandes conjuntos de gravações que não exigem legendas em tempo real.'
    ]],
    'b3-1': [['vision', 'responses'], [
      'É a resposta correta: em Chat Completions, a parte visual usa type="image_url" e um objeto image_url com URL acessível ou data URL base64.',
      'image_file não é o tipo da parte visual de Chat Completions mostrada. Esse nome aparece em outros contratos, mas não substitui image_url nessa mensagem.',
      'attachment é um termo genérico para anexos, não um valor válido para type nessa parte visual de Chat Completions.',
      'binary descreve bytes de arquivo, mas não é um tipo de conteúdo desse contrato. Os bytes da imagem podem ser codificados em base64 dentro de uma data URL.'
    ]],
    'b3-2': [['images', 'embeddings', 'audio', 'tts'], [
      d('imagegen', 'É a resposta correta: gpt-image-1 é um modelo de geração e edição visual capaz de criar imagens de produto a partir do prompt.'),
      d('embeddings', 'text-embedding-3-small produz vetores de texto. Não gera a imagem de marketing desejada.'),
      d('stt', 'Whisper trabalha com áudio e transcrição. Descrições de produtos para criação visual exigem um modelo de geração de imagens.'),
      d('tts', 'gpt-4o-mini-tts gera fala a partir de texto, e não uma imagem original de produto.')
    ]],
    'b3-3': [['images', 'guardrails'], [
      d('imagegen', 'Sim: modelos dessa categoria geram novos conteúdos visuais condicionados pelas instruções textuais do prompt.'),
      'Sim: detalhar sujeito, estilo, composição e iluminação reduz a ambiguidade e orienta atributos do resultado. A aderência deve ser conferida; detalhamento não garante uma imagem perfeita.',
      d('filters', 'Não: a geração de imagens está sujeita a políticas e controles de segurança. Pedidos ou resultados podem ser bloqueados por conteúdo não permitido.')
    ]],
    'b3-4': [['structured', 'vision', 'parameters', 'embeddings'], [
      d('structured', 'É a resposta correta: campos como contagem e observações podem ser validados e consumidos pelo programa. Apenas pedir JSON é menos forte que um esquema suportado; ambos ainda exigem validar a análise visual.'),
      d('temperature', 'Elevar a variedade do texto não impõe campos nem estrutura para o processamento automático de contagens.'),
      'Descrição livre produz texto sem contrato estável. Expressões regulares podem falhar quando a redação muda; um esquema explícito atende melhor a integração automática.',
      d('embeddings', 'Vetores ajudam em busca e similaridade, mas não são uma saída estruturada com a contagem visual pedida.')
    ]],
    'b4-1': [['analyzer', 'content'], [
      d('analyzer', 'É a resposta correta: descreve quais conteúdos analisar e quais campos devem compor a saída.'),
      'Um modelo de chat gera respostas de linguagem. Um analyzer é uma configuração de análise e esquema, não apenas um modelo para conversar.',
      'Um painel de custos apresenta consumo e cobrança. Não determina modalidades de entrada nem campos a extrair de conteúdo.',
      d('imagegen', 'Criar imagens é outra carga de trabalho. O analyzer define como compreender conteúdo recebido e organizar os resultados.')
    ]],
    'b4-2': [['prebuilt', 'content', 'embeddings', 'tools', 'tts'], [
      'É a resposta correta: um analyzer prebuilt de faturas já possui campos apropriados para esse documento, como fornecedor, datas, itens e total, reduzindo o trabalho inicial de configuração.',
      d('embeddings', 'Representar a fatura como vetor não retorna, por si só, os campos estruturados de fornecedor, data e valores.'),
      d('code', 'Pode transformar dados ou calcular valores, mas apenas essa ferramenta não oferece um esquema especializado de compreensão de faturas como o analyzer prebuilt.'),
      d('tts', 'Ler conteúdo em voz alta não extrai os dados estruturados de uma fatura.')
    ]],
    'b4-3': [['analyzer'], [
      d('extract', 'Busca um valor presente no documento. A tarefa pede escolher um motivo entre categorias fixas, o que caracteriza classify.'),
      d('generate', 'Permite sintetizar ou inferir valores, mas não é o método específico de escolha entre rótulos enumerados.'),
      d('classify', 'É a resposta correta: o campo define categorias possíveis, e a análise seleciona a que corresponde ao conteúdo da chamada.'),
      'translate descreve tradução entre idiomas, mas não integra os três métodos de campo extract, generate e classify documentados para esse esquema.'
    ]],
    'b4-4': [['analyzer', 'fields'], [
      d('extract', 'Um resumo precisa de síntese, não apenas de um valor literal. Além disso, extract não é o método de campo suportado para áudio e vídeo nessa configuração.'),
      d('generate', 'É a resposta correta: resume o significado do conteúdo do vídeo em um novo texto no campo definido.'),
      d('classify', 'Escolhe uma categoria, como o tipo de ocorrência, em vez de produzir o texto de resumo solicitado.'),
      'redact significa ocultar conteúdo sensível. Não é um método de campo desse analyzer e não representa a geração de um resumo de vídeo.'
    ]],
    'b4-5': [['content', 'analyzer'], [
      d('content', 'Sim: o serviço recebe áudio e vídeo nas modalidades suportadas e pode produzir transcrições e valores de campos definidos pelo analyzer.'),
      'Sim: a análise pode retornar representação do conteúdo em Markdown e os campos do esquema. A estrutura e os detalhes disponíveis dependem da modalidade e da configuração do analyzer.',
      d('analyzer', 'Não: analyzers prebuilt ou personalizados por esquema permitem analisar imagens sem exigir antes um treinamento supervisionado com milhares de imagens rotuladas.')
    ]],
    'b4-6': [['contentrest', 'contentsdk'], [
      'Uma resposta síncrona já conteria o resultado concluído. A análise descrita é uma operação de longa duração; receber o POST não significa que o processamento terminou.',
      'É a resposta correta: o POST inicia a análise e retorna Operation-Location. Consulte essa URL até um estado final; em Succeeded, leia os resultados, e trate falhas e cancelamentos.',
      'E-mail ao administrador não é o mecanismo documentado de entrega de resultados da API de análise. O cliente acompanha a operação pelo endereço retornado.',
      'O portal pode ser usado para experimentar o serviço, mas o resultado pode ser obtido programaticamente por polling REST ou pelo SDK, sem download manual.'
    ]]
  });

  Object.assign(reviews, {
    'p-a2-1': [['deployments'], [
      d('standard', 'É a resposta correta: atende demanda variável em chamadas síncronas, cobradas por uso, sem reservar capacidade Provisioned.'),
      d('ptu', 'A reserva e o compromisso de capacidade fazem sentido para carga previsível, mas não correspondem à modalidade por token sem reserva pedida.'),
      d('batch', 'É indicado quando a resposta pode esperar. O chat do enunciado precisa de inferência em tempo real, não de um lote assíncrono.'),
      d('developer', 'Não é a opção de produção com pagamento por uso e cotas elevadas para o chat de demanda variável.')
    ]],
    'p-a2-2': [['deployments', 'chat', 'parameters'], [
      d('deployment', 'É uma resposta correta: o nome é definido ao disponibilizar o modelo e depois identifica a implantação nas chamadas.'),
      'É outra resposta correta: o tipo de implantação define o modo de processamento e cobrança, como Global Standard ou Provisioned, e é escolhido na implantação.',
      d('system', 'É uma orientação enviada durante o uso do chat ou salva no agente; não define o tipo nem a identidade da implantação do modelo.'),
      d('temperature', 'É um parâmetro de inferência, quando suportado. Sua configuração no playground não cria nem caracteriza o recurso de implantação.')
    ]],
    'p-a2-3': [['parameters', 'responses'], [
      d('maxtokens', 'É a resposta correta: atingir o limite pode cortar a geração. Aumente o orçamento apropriado à API e confira o motivo de término; contexto e tokens de raciocínio também podem limitar a saída.'),
      d('temperature', 'Mudar a aleatoriedade não aumenta o orçamento de geração que encerrou a resposta antes do fim.'),
      d('topp', 'A seleção de candidatos à amostragem não remove um limite de tokens de saída atingido.'),
      d('frequency', 'Reduzir repetição não substitui o ajuste do orçamento de saída quando o texto é interrompido pelo limite.')
    ]],
    'p-a2-4': [['parameters'], [
      d('stop', 'É a resposta correta: configurar ### como sequência de parada atende o requisito de encerrar nesse marcador, se o modelo aceitar stop.'),
      d('maxtokens', 'Encerra pela quantidade de tokens, não pela presença do marcador ###; pode parar antes ou depois dele.'),
      d('presence', 'Altera a tendência a repetir temas, mas não define um delimitador de encerramento.'),
      d('topp', 'Muda o conjunto de tokens candidatos, sem declarar que ### deve finalizar a geração.')
    ]],
    'p-a2-5': [['parameters', 'deployments'], [
      d('frequency', 'É a resposta correta: uma penalidade positiva reduz a tendência de repetir tokens e linhas, nos modelos que a suportam.'),
      d('stop', 'Interrompe a geração em marcadores determinados. Não penaliza repetições ao longo de uma resposta.'),
      d('maxtokens', 'Pode cortar uma resposta longa, mas não modifica o mecanismo que favorece ou penaliza repetição.'),
      'O tipo de implantação define capacidade, localização do processamento e cobrança. Trocar Standard por Provisioned não equivale a aplicar uma penalidade de repetição.'
    ]],
    'p-b1-1': [['chat', 'responses'], [
      'Sim: para uma resposta textual comum de Chat Completions, o conteúdo da primeira escolha fica em choices[0].message.content. Chamadas de ferramentas podem exigir tratar outros campos.',
      'Sim: output_text é um auxiliar do SDK que reúne as partes textuais da saída de Responses. Ele simplifica a leitura sem presumir que o primeiro item de output seja texto.',
      d('deployment', 'Não: no contexto dos modelos implantados, model recebe a identificação da implantação usada na chamada. A região é parte da configuração do recurso, não o valor desse parâmetro.')
    ]],
    'p-b1-2': [['identity', 'projects'], [
      d('credential', 'É a resposta correta: no desenvolvimento local, ela pode usar a sessão da Azure CLI obtida por az login. A conta também precisa das permissões do projeto; autenticação não concede autorização automaticamente.'),
      'Colar uma chave no código não autentica DefaultAzureCredential. Essa classe obtém tokens por fontes de identidade, e chaves devem ser protegidas quando uma API as aceitar.',
      d('agent', 'Criar uma definição de agente não autentica o cliente. A credencial e as permissões precisam existir independentemente dessa criação.'),
      d('ptu', 'Reservar capacidade altera a oferta de inferência, não a forma de obter o token Entra ID para acessar o projeto.')
    ]],
    'p-b1-3': [['playground'], [
      'É a resposta correta: a aba Code ou View code mostra um exemplo de integração com endpoint, identificação do modelo e configuração da chamada. Credenciais do exemplo devem ser tratadas como segredos.',
      'Exportar pesos transfere os parâmetros de um modelo, quando esse recurso existe. Isso não é como se integra uma implantação hospedada no Foundry a um aplicativo cliente.',
      'Um recurso Speech oferece reconhecimento e síntese de fala. Criá-lo não exporta as configurações de uma sessão do playground de chat.',
      'Fine-tuning é treinamento adicional do modelo. Para levar os parâmetros de uma chamada testada ao aplicativo, basta usar o exemplo de código e a configuração correspondente.'
    ]],
    'p-b1-4': [['agents', 'tools', 'deployments'], [
      d('instructions', 'É a resposta correta: nelas se declara que o agente atende RH, usa português brasileiro e respeita o escopo definido.'),
      d('code', 'É uma ferramenta de execução, não o lugar para estabelecer persona, idioma e escopo globais do agente.'),
      'O tipo de implantação define como o modelo é servido e cobrado. Não instrui o agente a falar pt-BR ou restringir respostas a RH.',
      'O nome do agente o identifica. Chamá-lo de RH não aplica automaticamente regras de idioma, escopo e comportamento; essas regras precisam de instruções.'
    ]],
    'p-b1-5': [['tools', 'content'], [
      d('web', 'É a resposta correta: consulta fontes externas atualizadas, adequadas a notícias recentes que não estão nos arquivos privados fornecidos.'),
      d('files', 'Consulta documentos enviados ao agente; sem novas notícias nesses arquivos, não substitui uma pesquisa atual na web.'),
      d('code', 'Executa cálculos e manipulação de arquivos, mas não é a ferramenta dedicada a recuperar notícias da web com fontes.'),
      d('content', 'Estrutura conteúdo recebido. Não é, por si só, uma ferramenta de busca por notícias atuais na internet.')
    ]],
    'p-b1-6': [['projects', 'quickstart'], [
      'É a resposta correta: o endpoint localiza o projeto, a credencial autentica o cliente e o nome ou identificador referencia o agente a executar. A identidade também precisa de autorização.',
      'Uma chave de Speech autentica recursos de fala que a aceitam. Ela não fornece endpoint, identidade Entra ID nem referência ao agente do projeto Foundry.',
      'Pesos contêm parâmetros de um modelo. Um cliente de agente hospedado se conecta ao serviço, sem precisar baixar esses pesos para executar a conversa.',
      'Uma string de conexão de banco localiza e autentica um banco de dados. Não identifica o projeto Foundry nem o agente que deve responder.'
    ]],
    'p-b1-7': [['quickstart', 'responses'], [
      'É a resposta correta: mantenha uma conversa, envie a entrada, execute o agente e leia sua saída. Na API atual, responses.create com a referência ao agente pode realizar esses passos de envio e execução juntos.',
      d('embeddings', 'Treinar e chamar embeddings não corresponde ao ciclo de conversa com um agente hospedado; vetores não são as respostas do agente.'),
      d('agent', 'Sua definição pode ser reutilizada. Recriá-la por mensagem é desnecessário e não substitui manter o histórico da conversa.'),
      'O playground é uma interface de experimentação. Um cliente automatizado chama a API do agente; não depende de enviar mensagens à interface e copiar respostas manualmente.'
    ]],
    'p-b1-8': [['guardrails', 'parameters', 'agents', 'deployments'], [
      d('filters', 'É a resposta correta: a política associada à implantação define limiares de severidade para violência e outras categorias, separando entrada e saída conforme a configuração.'),
      d('temperature', 'Controla amostragem, não o limiar de bloqueio de conteúdo violento.'),
      d('instructions', 'Podem orientar respostas seguras, mas não substituem a configuração dos classificadores e limiares de severidade dos filtros.'),
      'O tipo de implantação escolhe processamento e cobrança. Não determina, por si só, a política que bloqueia violência de severidade média ou alta.'
    ]],
    'p-b2-1': [['sentiment', 'textsdk'], [
      'É a resposta correta: analyze_sentiment com show_opinion_mining=True inclui a análise de opiniões por aspecto, além da polaridade geral e por sentença.',
      d('keyphrases', 'extract_key_phrases retorna conceitos relevantes, sem associar automaticamente cada aspecto ao sentimento do cliente.'),
      d('ner', 'recognize_entities retorna entidades categorizadas, não opiniões positivas ou negativas sobre características avaliadas.'),
      d('language', 'detect_language retorna a língua do texto, não a avaliação de cada aspecto do produto.')
    ]],
    'p-b2-2': [['textsdk'], [
      'É a resposta correta: redacted_text contém o texto com as entidades pessoais detectadas substituídas pela máscara configurada. Verifique erros e cobertura antes de armazená-lo.',
      'entities é a coleção de entidades pessoais encontradas, com informações como categoria e posição. A coleção não é o texto inteiro já mascarado.',
      d('keyphrases', 'key_phrases pertence à extração de conceitos relevantes. Não é a propriedade que retorna o texto com PII ocultada.'),
      d('sentiment', 'sentiment indica polaridade. Não contém a versão protegida da mensagem produzida pela detecção de PII.')
    ]],
    'p-b2-3': [['speechsdk', 'speech', 'tts'], [
      'É a resposta correta: speech_recognition_language="pt-BR" configura o idioma de reconhecimento de fala como português brasileiro.',
      d('tts', 'speech_synthesis_voice_name escolhe a voz de saída. FranciscaNeural é uma voz de síntese, não a configuração do idioma a transcrever.'),
      'output_format seleciona o formato dos resultados de reconhecimento, como simples ou detalhado, por uma enumeração. "pt-BR" é uma localidade, não um formato válido.',
      'endpoint_id identifica um endpoint específico, por exemplo de reconhecimento personalizado. Não recebe o código de idioma "pt-BR" para configurar a língua da fala.'
    ]],
    'p-b2-4': [['ssml', 'speechsdk'], [
      d('ssml', 'É a resposta correta: break insere pausas, prosody ajusta parâmetros como velocidade, e speak_ssml_async sintetiza o texto marcado.'),
      d('temperature', 'É uma configuração da geração de linguagem, quando suportada, e não o controle de pausas e velocidade do sintetizador Speech.'),
      'speech_recognition_language configura o idioma de áudio recebido pelo reconhecedor. Não modifica a prosódia da voz sintetizada.',
      d('stt', 'SpeechRecognizer converte áudio em texto. Substituir o sintetizador por essa classe elimina a etapa que deveria gerar a voz com pausas.')
    ]],
    'p-b2-5': [['audio', 'vision'], [
      'É a resposta correta: em Chat Completions de um modelo compatível com áudio, type="input_audio" indica a entrada codificada em base64 com seu formato, como wav.',
      'image_url é a parte visual de Chat Completions. Ela representa uma imagem, e não o conteúdo de um arquivo de áudio.',
      'audio_file não é o valor documentado para type na mensagem do código. Um arquivo deve ser lido e enviado no formato input_audio aceito pela API.',
      'speech descreve genericamente fala, mas não é o discriminador dessa parte de conteúdo. O contrato exige input_audio com data e format.'
    ]],
    'p-b3-1': [['images', 'chat', 'embeddings', 'audio'], [
      'É a resposta correta: images.generate chama a operação de geração de imagens para uma implantação compatível, recebendo o prompt e parâmetros visuais.',
      'chat.completions.create solicita uma conclusão de conversa. Nesse exemplo de GPT Image, a geração visual usa a operação images.generate, não o endpoint de chat.',
      d('embeddings', 'embeddings.create retorna vetores para busca e similaridade; não cria pixels de uma imagem nova.'),
      d('tts', 'audio.speech.create produz áudio falado, e não a imagem que o código deve gerar.')
    ]],
    'p-b3-2': [['vision', 'parameters', 'embeddings'], [
      'É a resposta correta: detail="high" permite processamento visual em maior detalhe nos modelos compatíveis, útil para texto pequeno. Resolução, legibilidade e custo também devem ser considerados.',
      d('maxtokens', 'Um limite de 10 é pequeno para muitas respostas e não aumenta a resolução da análise visual; pode truncar a leitura do rótulo.'),
      d('embeddings', 'Trocar por um modelo de embeddings textuais retira a capacidade de interpretar a fotografia em uma conversa visual.'),
      'A pergunta textual indica qual informação extrair da imagem. Removê-la torna o objetivo menos claro e não melhora a legibilidade dos caracteres pequenos.'
    ]],
    'p-b4-1': [['analyzer', 'contentrest'], [
      d('analyzer', 'É a resposta correta: seu ID na rota analyzers/{analyzerId}:analyze seleciona a configuração e o esquema de campos da análise.'),
      d('deployment', 'O nome do GPT identifica o modelo de inferência, mas não substitui o ID do analyzer na operação de análise de conteúdo.'),
      'O ID da assinatura define um escopo de administração e cobrança Azure. Não identifica o esquema que a API deve aplicar ao arquivo.',
      'O nome do arquivo identifica a entrada ou sua origem. O esquema de saída é escolhido pelo analyzer referenciado na chamada.'
    ]],
    'p-b4-2': [['fields', 'analyzer'], [
      'É a resposta correta: nome e descrição explicam o significado do campo; tipo, estrutura e método orientam o formato e a forma de obter o valor.',
      'Treinamento com milhares de exemplos rotulados é uma abordagem de outros fluxos supervisionados. Configurar campos no Content Understanding não exige esse treinamento prévio.',
      d('temperature', 'Alterar a aleatoriedade de um chat não substitui a definição clara de campos no analyzer nem é a principal orientação de extração.'),
      d('generate', 'Nem todo campo deve ser inferido: use extract para valores literais de documentos e classify para categorias fixas, conforme a modalidade e o objetivo.')
    ]],
    'p-b4-3': [['analyzer', 'content'], [
      d('analyzer', 'Sim: depois de criado, seu ID permite reutilizar a configuração em várias chamadas e aplicativos que tenham acesso autorizado ao recurso.'),
      d('classify', 'Sim: o esquema fornece as categorias possíveis e orienta a análise a selecionar um desses valores.'),
      d('content', 'Não: além de PDF, há formatos e modalidades de imagem, áudio e vídeo suportados. Confira a lista e os limites aplicáveis ao analyzer usado.')
    ]]
  });
  Object.assign(reviews, {
    'n-a1-1': [['responsible'], [
      d('fairness', 'É uma resposta correta: taxas de erro maiores para pessoas de pele escura exigem investigar e reduzir disparidades injustificadas entre grupos.'),
      d('reliability', 'É outra resposta correta: rejeitar acessos legítimos com frequência compromete a operação. É preciso testar condições e públicos relevantes e tratar falhas com segurança.'),
      d('transparency', 'Explicar os limites do reconhecimento ajuda os usuários, mas não corrige as disparidades nem melhora, por si só, a precisão exigida.'),
      d('privacy', 'Proteger dados biométricos é necessário, porém o problema relatado é a diferença de erros entre grupos e a confiabilidade do acesso.')
    ]],
    'n-a1-2': [['responsible'], [
      d('transparency', 'É a resposta correta: informar a participação da IA e caracterizar os dados de treinamento ajuda clientes a compreender o processo. A descrição deve respeitar privacidade e segredos legítimos.'),
      d('privacy', 'Criptografia e restrição de acesso protegem os dados dos clientes; não são a medida que explica a participação e o funcionamento da IA.'),
      d('inclusion', 'Leitores de tela e legendas tornam o pedido acessível a mais pessoas. Essa medida atende inclusão, não principalmente transparência do modelo.'),
      d('reliability', 'Encaminhar casos pouco confiáveis a um analista reduz o risco de decisões inadequadas, mas não explica ao cliente como a IA é utilizada.')
    ]],
    'n-a1-3': [['guardrails', 'evaluators', 'shields'], [
      'Sim: a configuração padrão Microsoft.DefaultV2 aplica bloqueio a conteúdo detectado como médio ou alto nas quatro categorias de dano, em prompts e respostas dos modelos aos quais se aplica. Políticas personalizadas podem alterar os controles.',
      'Não: safety evaluators detectam, medem e pontuam riscos para orientar avaliação e monitoramento. Essa avaliação não reescreve automaticamente respostas problemáticas; a aplicação precisa definir como agir sobre os resultados.',
      d('shields', 'Sim: delimitar documentos recuperados como dados reduz a chance de que instruções maliciosas neles sejam seguidas. Essa separação pode ser combinada com detecção de ataques indiretos.')
    ]],
    'n-a2-1': [['transformer'], [
      'É a resposta correta: atenção pondera relações entre tokens no contexto. Assim, palavras como praça e conta ajudam a representar sentidos diferentes de banco.',
      'Tokenização divide o texto em unidades e identificadores para o modelo. Ela prepara a entrada, mas não é o mecanismo que pondera as relações contextuais entre os tokens.',
      'Codificação posicional acrescenta informação sobre a ordem dos tokens. Ordem é importante, mas a ponderação das palavras relacionadas é feita pelo mecanismo de atenção.',
      'A janela de contexto é o limite de conteúdo considerado em uma requisição. Ela permite disponibilizar palavras ao modelo, mas não é o mecanismo que relaciona seus significados.'
    ]],
    'n-a2-2': [['quota', 'deployments', 'parameters'], [
      'É uma resposta correta quando o gargalo é a cota: mais TPM alocados aumentam o limite de taxa da implantação, dentro da cota autorizada. Confira mensagens e cabeçalhos; nem todo 429 é causado por falta de cota.',
      d('maxtokens', 'É outra resposta correta: a estimativa de limitação de taxa pode incluir o máximo de saída solicitado. Aproximá-lo do uso esperado reduz superestimativa; isso não equivale a cobrar todos os tokens máximos.'),
      d('batch', 'A espera assíncrona é incompatível com atendimento de chat em tempo real. Não resolve esse requisito de resposta imediata aos clientes.'),
      d('temperature', 'Reduzi-la não define o tamanho máximo da resposta nem aumenta TPM. Ela não é o ajuste específico para o orçamento de taxa superestimado.')
    ]],
    'n-a2-3': [['benchmarks', 'evaluators', 'rag'], [
      d('groundedness', 'É a resposta correta: perguntas representativas e referências recuperadas permitem medir a fundamentação no cenário real. Combine o avaliador com revisão e critérios de aceitação; sua pontuação não é uma garantia absoluta.'),
      'Benchmarks públicos comparam modelos em conjuntos padronizados. Um bom índice geral não comprova que respostas sobre os manuais internos estejam apoiadas nos trechos recuperados.',
      'Fluência mede clareza e naturalidade da redação. Um texto pode ser bem escrito e conter informações inventadas, portanto fluência não substitui a avaliação de fundamentação.',
      'Custo e latência medem eficiência e tempo de resposta. São critérios úteis de seleção, mas não verificam se a resposta possui evidências nos documentos internos.'
    ]],
    'n-a3-1': [['ngrams', 'preprocess'], [
      'É a resposta correta: TF-IDF combina a frequência do termo no documento com sua raridade na coleção. Termos presentes em quase todos os relatórios tendem a receber menor peso distintivo.',
      'Remoção de stop words elimina palavras de uma lista, frequentemente termos funcionais comuns. Não calcula o peso relativo de um termo conforme sua distribuição entre os relatórios.',
      'Stemming reduz variantes de palavras a uma raiz aproximada. Ajuda a normalizar vocabulário, mas não mede frequência local e raridade na coleção.',
      'N-gramas são sequências de n unidades consecutivas, como pares de palavras. Sua extração define características textuais; a ponderação por frequência e raridade é feita por TF-IDF.'
    ]],
    'n-a3-2': [['ssml', 'mfcc'], [
      'É a resposta correta: prosódia organiza ritmo, entonação, duração, pausas e ênfase. Uma voz com pronúncia correta pode soar monótona quando esses elementos estão inadequados.',
      'Normalização converte a forma escrita para uma forma apropriada à fala, por exemplo expandindo datas e abreviações. O problema descrito é monotonia, não a interpretação desses elementos.',
      'G2P transforma grafemas em fonemas para orientar a pronúncia. Como as palavras já são pronunciadas corretamente, o principal problema está no ritmo e na entonação.',
      'MFCCs são coeficientes extraídos do sinal de áudio para representar características acústicas. Não são a etapa que determina pausas e ênfase a partir do texto no cenário descrito.'
    ]],
    'n-a3-3': [['objects', 'diffusion', 'images', 'cnn', 'vit'], [
      d('segmentation', 'É uma resposta correta: a classificação por pixel delineia a região da classe com mais detalhe que uma caixa. Ela não distingue necessariamente duas instâncias da mesma classe; isso seria segmentação de instâncias.'),
      'É outra resposta correta para geração por difusão condicionada: o processo parte de ruído e aprende a removê-lo em etapas, orientado pelo prompt. Alguns modelos trabalham em espaço latente, não diretamente em pixels em cada etapa.',
      'Em uma CNN treinável, os pesos dos kernels são parâmetros aprendidos e atualizados pela otimização. O desenvolvedor define a arquitetura e o tamanho dos filtros, mas os valores não precisam permanecer fixos.',
      'O ViT original divide a imagem em patches e usa autoatenção para relacioná-los. A projeção inicial pode ter implementação convolucional e existem modelos híbridos, mas a alternativa erra ao substituir atenção por filtros como mecanismo central.'
    ]],
    'n-a3-4': [['rag', 'embeddings'], [
      d('rag', 'É a resposta correta no fluxo vetorial: indexe chunks, represente a pergunta no mesmo espaço de embeddings, recupere evidências e só então gere a resposta. As citações devem apontar para os trechos realmente usados.'),
      'Treinar o modelo com os documentos caracteriza adaptação por treinamento, não a recuperação em tempo de consulta que define esse fluxo RAG. Também não fornece automaticamente citações verificáveis.',
      'Buscar evidências somente depois de gerar a resposta não fundamenta a geração inicial e pode criar citações que não sustentam as afirmações. A recuperação deve preceder a resposta nesse fluxo.',
      d('embeddings', 'Vetores de modelos diferentes não são automaticamente comparáveis, mesmo com igual dimensão. Consulta e índice precisam de um espaço compatível, normalmente usando o mesmo modelo e configuração.')
    ]],
    'n-b1-1': [['responses', 'chat'], [
      'É a resposta correta: response.output_text reúne o texto gerado na Responses API pelo auxiliar do SDK, incluindo a segunda resposta do exemplo.',
      'choices[0].message.content é a estrutura comum de Chat Completions. Responses organiza sua saída em output e disponibiliza output_text no SDK.',
      'output[0] é o primeiro item estruturado da saída, que pode conter raciocínio, mensagem ou chamada de ferramenta. Não equivale sempre ao texto final agregado.',
      'content pode existir dentro de itens específicos da saída. Não é o auxiliar de texto no objeto Response usado pela última linha do exemplo.'
    ]],
    'n-b1-2': [['projects', 'runtime', 'responses'], [
      d('agent', 'Sim, no contrato mostrado: extra_body referencia uma definição de agente com modelo, instruções e ferramentas. Ao executar esse agente, não é necessário repetir model como em uma chamada direta de modelo.'),
      'Não: AIProjectClient exige uma credencial de token Entra ID. AzureKeyCredential envolve uma chave para APIs que a aceitam e não substitui DefaultAzureCredential nesse cliente de projetos.',
      d('conversation', 'Sim: conversations.create cria o estado, e conversation=<id> vincula as chamadas de Responses ao mesmo histórico. Reutilize esse ID para os turnos que devem compartilhar contexto.')
    ]],
    'n-b1-3': [['projects', 'responses', 'secrets', 'textsdk'], [
      'É uma resposta correta para autenticação por chave no endpoint de modelos: o cliente OpenAI pode usar a base URL do recurso com /openai/v1/ e sua chave. Isso é diferente do cliente do endpoint de projetos.',
      'AIProjectClient no endpoint /api/projects/<projeto> usa autenticação Entra ID com TokenCredential. Uma AzureKeyCredential não é o tipo de credencial aceito por esse cliente.',
      'É outra resposta correta: Key Vault guarda a chave como segredo, e uma identidade gerenciada autorizada pode recuperá-la em execução. Assim, o segredo não precisa ficar embutido no código.',
      'TextAnalyticsClient usa o endpoint do serviço Language, normalmente em cognitiveservices.azure.com, e uma credencial compatível. O endpoint de projetos Foundry não substitui o contrato da API Language.'
    ]],
    'n-b1-4': [['playground', 'agents', 'quickstart'], [
      d('agent', 'É a resposta correta: Save as agent persiste uma configuração reutilizável de modelo, instruções e ferramentas, que os clientes podem referenciar no projeto.'),
      'New chat inicia um histórico limpo para testar. Não publica por si só uma definição reutilizável de agente para aplicativos clientes.',
      'Comparar modelos permite experimentar configurações lado a lado e avaliar respostas. Essa comparação não salva automaticamente um agente que encapsule a configuração.',
      d('deployment', 'Implantar um modelo-base disponibiliza inferência. Essa operação não incorpora automaticamente as instruções e ferramentas escolhidas no playground à definição de um agente.')
    ]],
    'n-b1-5': [['iq', 'rag'], [
      'É a resposta correta: Extractive data entrega os trechos recuperados e referências sem a etapa de síntese de uma nova resposta pelo modelo de recuperação. A atuação posterior do agente deve respeitar a exigência de literalidade.',
      'Answer synthesis gera uma resposta a partir do conteúdo recuperado. Como pode reescrever e combinar passagens, não atende o requisito de receber apenas trechos literais antes do agente.',
      'Retrieval reasoning effort controla o esforço de planejamento da recuperação. Medium não determina se a saída será literal ou sintetizada; isso é função do Output mode.',
      'Fine-tuning adapta os parâmetros de um modelo com exemplos. Não configura o modo de saída da knowledge base nem garante trechos literais com fontes recuperadas em cada consulta.'
    ]],
    'n-b2-1': [['outputaudio', 'speechsdk'], [
      'É a resposta correta: AudioOutputConfig(filename=...) direciona a fala sintetizada a um arquivo, sem selecionar o alto-falante como destino.',
      'AudioConfig configura áudio de entrada para reconhecimento, como microfone ou arquivo. No código, é necessária a classe de configuração do destino da síntese.',
      'SpeechConfig guarda configurações do serviço e da fala, como credenciais e voz. O destino de áudio em arquivo é especificado em AudioOutputConfig.',
      'AudioDataStream representa um fluxo de dados de áudio de um resultado e também pode salvá-lo depois da síntese. Não é a classe de configuração de saída esperada nessa linha do construtor.'
    ]],
    'n-b2-2': [['recognized'], [
      'É a resposta correta: recognized entrega o resultado final do trecho reconhecido. Confira o reason antes de gravar o texto, pois o evento também pode indicar ausência de correspondência.',
      'recognizing entrega hipóteses parciais durante a fala. O texto ainda pode mudar, portanto não atende a exigência de gravar apenas frases finais.',
      'session_started sinaliza o início da sessão de reconhecimento. Não é o evento que transporta a transcrição final de cada frase.',
      'canceled informa interrupção ou cancelamento, incluindo detalhes de erro. Não deve ser usado como fonte das frases transcritas com sucesso.'
    ]],
    'n-b2-3': [['voice', 'speech', 'tts'], [
      'É a resposta correta: Voice Live oferece uma integração de conversa por voz com componentes gerenciados e recursos como interrupções, detecção de turnos e tratamento de ruído, reduzindo a montagem do pipeline pelo aplicativo.',
      'Conectar STT, chat e TTS em tempo real pode atender a conversa, mas exige orquestração própria de turnos, interrupções e áudio. Isso traz mais componentes a manter que a opção Voice Live.',
      'Batch transcription analisa gravações de forma assíncrona. A espera pelo lote não atende a interação rápida e interrompível de um quiosque.',
      d('tts', 'Uma voz neural HD melhora a saída falada, mas sozinha não recebe a pergunta nem gera uma resposta de linguagem para o passageiro.')
    ]],
    'n-b2-4': [['detected', 'textsdk'], [
      'É a resposta correta: primary_language.iso6391_name retorna a representação ISO 639-1, como pt ou es, no formato solicitado.',
      'name retorna o nome extenso do idioma, como Portuguese ou Spanish. Não é o código de duas letras exigido pelo banco de dados.',
      'confidence_score expressa a confiança da detecção, normalmente entre 0 e 1. É um número, não a identificação ISO do idioma.',
      'language_code não é a propriedade documentada de DetectedLanguage nesse SDK. O código ISO 639-1 está em iso6391_name.'
    ]],
    'n-b3-1': [['responses', 'vision'], [
      'É a resposta correta: Responses usa type="input_image" para a parte visual. A data URL base64 é informada no campo image_url dessa parte.',
      'image_url é o nome de um campo dentro da parte input_image em Responses. Usá-lo como type confundiria esse contrato com o de Chat Completions.',
      'image_file não é o discriminador da imagem enviada por data URL no exemplo de Responses. O tipo requerido é input_image.',
      'image é um nome genérico de modalidade, mas não o valor documentado para type dessa entrada na Responses API.'
    ]],
    'n-b3-2': [['images'], [
      'É a resposta correta: b64_json contém a imagem codificada em base64. base64.b64decode transforma esse valor nos bytes que podem ser gravados no PNG.',
      'url é um endereço de download utilizado por alguns modelos e formatos de resposta. No resultado GPT Image do exemplo, os dados da imagem são lidos de b64_json.',
      'revised_prompt, quando fornecido, descreve uma versão revisada da instrução textual. Não contém os bytes da imagem e não pode ser decodificado como PNG.',
      'content é usado em outros objetos de mensagens, mas não é o campo de dados base64 do item retornado por images.generate nesse exemplo.'
    ]],
    'n-b3-3': [['video'], [
      'Sim: a geração por API é assíncrona; crie o job, acompanhe seu estado e baixe o MP4 após conclusão bem-sucedida. Também é necessário tratar estados de falha.',
      'Não: o Sora 2 documentado no Foundry restringe a geração de pessoas reais, incluindo figuras públicas. Informar o nome de uma celebridade não dispensa essas restrições.',
      'Sim: o playground de vídeo permite selecionar parâmetros suportados, como dimensões e duração. Valores disponíveis dependem do modelo e de sua versão.'
    ]],
    'n-b4-1': [['contentsdk'], [
      'É a resposta correta: result() do LROPoller síncrono aguarda a operação e devolve o resultado da análise, do qual se leem os campos da fatura.',
      'status() informa o estado da operação, como InProgress ou Succeeded. Não retorna o objeto de análise com conteúdos e campos.',
      'done() verifica se a operação terminou e retorna um booleano. Saber que terminou não equivale a obter o valor total extraído.',
      'wait() aguarda a conclusão, mas não é o método que devolve o resultado estruturado. Use result() para aguardar e obter os campos.'
    ]],
    'n-b4-2': [['prebuilt', 'analyzer', 'content', 'ocr'], [
      'É uma resposta correta: o analyzer de recibos associa valores a campos pelo contexto e pelo esquema, em vez de depender apenas de um rótulo literal. Rótulos diferentes ou ausentes exigem validar a confiança da extração.',
      'É outra resposta correta: um esquema de recibo organiza itens e seus atributos em estruturas relacionadas. Isso permite processar descrição, quantidade e preço sem reconstruí-los apenas de linhas OCR.',
      d('ocr', 'Read também processa imagens e documentos digitalizados nos formatos suportados. A vantagem do analyzer de recibos é a compreensão dos campos, não uma exclusividade de leitura de fotos.'),
      'A extração semântica de campos usa modelos, e não somente OCR e regras fixas. Conforme a versão e a configuração, é necessário configurar implantações e seus vínculos ao serviço; a alternativa generaliza incorretamente a dispensa desses modelos.'
    ]]
  });

  const questions = SIMULADOS.filter(s => s.course === 'ai901').flatMap(s => s.questions);
  const ids = new Set(questions.map(q => q.id));
  if (ids.size !== questions.length || Object.keys(reviews).some(id => !ids.has(id))) {
    throw new Error('A revisão AI-901 não corresponde ao banco de questões.');
  }
  questions.forEach(q => {
    const review = reviews[q.id];
    if (!review || review[1].length !== q.o.length || review[1].some(x => typeof x !== 'string' || !x.trim()) || new Set(review[1]).size !== q.o.length) {
      throw new Error(`Comentários incompletos ou repetidos em AI-901: ${q.id}`);
    }
    q.x = review[1];
    q.references = review[0].map(key => {
      if (!sources[key]) throw new Error(`Fonte AI-901 ausente: ${key}`);
      const [title, path] = sources[key];
      return { title, url: path.startsWith('https://') ? path : learn + path };
    });
    q.reviewedAt = '2026-10-02';
  });
})();
