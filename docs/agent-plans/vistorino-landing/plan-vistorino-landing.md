# Plano — landing temporária do Vistorino

## Objetivo

Publicar uma apresentação temporária, convincente e compreensível do Vistorino em `vistorino.com`, demonstrando o fluxo de coleta de um relato de avaliação até a lista de peças.

## Direção visual

Público: compradores cuidadosos e profissionais que avaliam carros usados.

Tese da página: “um áudio confuso vira uma decisão de compra mais clara”.

Paleta: azul petróleo `#12333B`, amarelo sinalização `#F4B942`, papel `#F5F1E8`, tinta `#1C2426`, verde confirmação `#A7D6A0`.

Tipografia: Fraunces para títulos expressivos, DM Sans para leitura, IBM Plex Mono para metadados de oficina.

Wireframe:

```text
┌ navegação ───────────────────────────────┐
│ hero: promessa + cartão de evidência      │
├ prova curta / como funciona ─────────────┤
│ três estados: fale → confirme → decida   │
├ demonstração com prints de WhatsApp      │
├ benefícios + nota de transparência       │
├ CTA final                                │
└ rodapé / domínio                         ┘
```

O risco visual é tratar a saída da IA como uma ficha de oficina, com linhas, etiquetas e waveform — evitando o cartão SaaS genérico.

## Implementação

- Criar `index.html`, `styles.css` e `script.js`.
- Criar mockups acessíveis de conversa WhatsApp e lista de peças em HTML/SVG/CSS.
- Adicionar navegação âncora, CTA, menu mobile e microinteração de revelação.
- Respeitar `prefers-reduced-motion`, foco visível e contraste.

## Publicação

- Adicionar `CNAME` com `vistorino.com`.
- Adicionar workflow `.github/workflows/pages.yml` para publicar a raiz no GitHub Pages.
- Documentar no README o caminho do domínio: Squarespace mantém o registro/DNS; GitHub Pages hospeda os arquivos; configurar CNAME e registros A conforme a documentação atual do GitHub.

## Validação

- Verificar estrutura HTML e links internos.
- Rodar servidor estático local e inspecionar com navegador quando disponível.
- Testar viewport mobile, teclado e reduced motion.
- Confirmar que a página não depende de build ou segredo.

## Encerramento

- Atualizar MEMORY/TODO e `docs/implementation-progress.md`.
- Entregar branch para revisão; commit/PR somente quando solicitado pelo usuário ou pelo comando operacional correspondente.
