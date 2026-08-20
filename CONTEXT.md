# Avaliação de carros

Este contexto descreve o fluxo em que compradores registram, por áudio, problemas encontrados em um carro que estão avaliando para compra. O sistema transforma a transcrição em uma lista de peças necessárias para reparo.

## Participantes

**Comprador**:
Pessoa que avalia um carro e envia ao bot um relato em áudio sobre os reparos necessários.
_Avoid_: Cliente, usuário final (quando o papel de comprador for relevante)

**Bot**:
Interface de WhatsApp que recebe o áudio, conduz a coleta de dados e apresenta o resultado estruturado.
_Avoid_: Atendente (o bot pode encaminhar uma dúvida, mas não é uma pessoa)

## Avaliação

**Carro em avaliação**:
Veículo que o comprador está analisando antes de decidir pela compra.
_Avoid_: Veículo (genérico demais neste contexto)

**Relato de avaliação**:
Mensagem livre, enviada em áudio pelo comprador, descrevendo defeitos ou reparos identificados no carro em avaliação.
_Avoid_: Análise (pode significar o processo inteiro), laudo (implica um documento formal)

**Modelo do carro**:
Identificação do veículo necessária para interpretar corretamente as peças e, na versão final, localizar ofertas compatíveis.
_Avoid_: Carro (não identifica marca, modelo, versão ou ano)

**Peça necessária**:
Item que precisa ser comprado para reparar um problema identificado no relato de avaliação.
_Avoid_: Problema, reparo (descrevem a necessidade ou ação, não o item comprado)

**Lista de peças**:
Resultado estruturado contendo as peças necessárias extraídas de um ou mais relatos de avaliação.
_Avoid_: Lista de compras (pode incluir itens que não são peças)

## Processamento

**Transcrição**:
Texto produzido a partir do áudio enviado pelo comprador e armazenado como o único conteúdo persistente do relato.
_Avoid_: Gravação, áudio salvo

**Estruturação**:
Interpretação da transcrição para identificar e organizar as peças necessárias.
_Avoid_: Extração de problemas (o resultado do MVP é a peça, não apenas o problema)

**Dado faltante**:
Informação necessária para confirmar o modelo do carro ou estruturar com segurança uma peça necessária.
_Avoid_: Erro (a ausência pode ser resolvida perguntando ao comprador)
