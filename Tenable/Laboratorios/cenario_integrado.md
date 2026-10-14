# Cenário integrado de revisão

Dados fictícios para raciocínio, sem acesso ao ambiente produtivo. Uma organização tem 40 ativos esperados: 20 servidores internos, 12 notebooks móveis e 8 ativos em outra filial com IPs sobrepostos. A coleta observa 28 ativos e confirma checks autenticados em 20. Um serviço usa a porta 8443. Uma exclusão remove três hosts do scan de rede. O relatório mostra uma queda de 30% nos findings após a troca da conta de serviço.

1. Construir a matriz de cobertura e selecionar sensores por segmento.
2. Separar os contextos com endereços sobrepostos.
3. Calcular cobertura observada: 28/40 = 70%. A cobertura autenticada confirmada sobre o inventário é 20/40 = 50%, e sobre os observados é 20/28 ≈ 71,4%.
4. Investigar hosts ausentes, portas omitidas e efeitos de exclusões.
5. Escolher modalidade de agent scan para notebooks e justificar a exportação.
6. Determinar por que a queda de findings não comprova melhora sem comparar coleta e escopo.
7. Criar decisão de risco com escopo, responsável e prazo.
8. Redigir relatório de uma página que explicite os denominadores e a evidência necessária para comprovar correção.

Correção esperada: reconhecer as lacunas antes de declarar risco reduzido. Não há quantidade de vulnerabilidades ou pontuação VPR suficiente no cenário para calcular exposição total. Consultar F05, F16, F18, F21, F28, F32, F34, F37 e F41.
