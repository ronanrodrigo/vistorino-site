# Vistorino landing — memória

## Contexto

Criar uma landing page temporária, estática e responsiva para apresentar o Vistorino em `vistorino.com`. O produto recebe relatos de avaliação de um carro por WhatsApp e transforma o áudio em uma lista de peças necessárias.

## Escopo definido

- Página estática hospedável no GitHub Pages.
- Identidade visual própria, com prints/mockups do fluxo.
- CTA de demonstração/contato sem backend.
- Preparar suporte a domínio customizado e documentar a ligação com Squarespace/DNS.
- Não alterar o app de produção nem configurar credenciais externas automaticamente.

## Decisões

- Direção visual: “bancada de oficina digital”: azul petróleo, amarelo sinalização, papel claro e tipografia editorial condensada.
- Assinatura: um “cartão de evidência” com waveform e peças identificadas, usado no hero e na seção de demonstração.
- Implementação: HTML/CSS/JS estáticos, sem dependências obrigatórias.
- Prints: mockups construídos em CSS/SVG para permanecerem nítidos, leves e reproduzíveis.
- Deploy: GitHub Pages via workflow; Squarespace documentado como provedor de domínio/DNS, não como runtime da página.

## Estado

- Planejamento criado.
- Worktree: `/Users/ronan/Developer/vistorino-landing`.
- Branch: `feat/vistorino-landing`.
- A landing foi isolada no repositório público `ronanrodrigo/vistorino-site`, para não expor o repositório privado do produto.
- Publicação ativa no Vercel: `https://vistorino-site.vercel.app` (projeto `rohones/vistorino-site`).
- GitHub Pages está configurado no repositório público, mas o DNS de `vistorino.com` continua no Squarespace e aguarda autenticação para ser alterado.
- A direção visual foi revisada usando os padrões de sites automotivos como referência: carro como protagonista, asfalto escuro, laranja de sinalização e elementos de oficina. A voz foi ajustada para posicionar o Vistorino como um amigo no WhatsApp que recebe áudios e ajuda a entender o carro.
- Validação concluída: `npm run build`, `npm run typecheck` e revisão visual no deployment passaram.
- Correção mobile publicada no commit `42bffb8`: o cartão de ajuda não usa mais posicionamento absoluto abaixo de 780 px e agora fica no fluxo da página, depois da hero.
- Mockup do WhatsApp atualizado no commit `6e194e1`: resposta do Vistorino exibe três peças, preços de referência claramente marcados como exemplos, estimativa e links para pesquisar cada item.
- Simplificação publicada no commit `d28858e`: lista reduzida a nome, preço e ação “Pesquisar” por peça; tipografia revisada para Barlow Condensed + Manrope, ambas sem serifa.
- Landing compactada no commit `e3ad739`: removida a seção intermediária redundante e reduzidos os espaçamentos do fluxo desktop/mobile.
- Hero redesenhada no commit `efc4f85`: a conversa do WhatsApp virou o elemento principal, com simulação de áudio gravado, waveform, duração e resposta com peças/preços; a demonstração duplicada foi removida.
- Fluxo mobile compactado no commit `8322b1c`: os três passos agora aparecem em uma faixa de três colunas curtas, evitando cartões verticais extensos.
- Domínio `vistorino.com` movido no Vercel para o projeto público `vistorino-site` com `--force`; o DNS ainda está incorreto no Squarespace. Vercel recomenda A `216.198.79.1` e `64.29.17.1` para o domínio raiz.
