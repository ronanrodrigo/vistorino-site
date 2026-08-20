# Vistorino — landing temporária

Landing estática do Vistorino: uma interface de apresentação do projeto que transforma relatos de avaliação de carros em uma lista organizada de peças necessárias.

## Desenvolvimento

```bash
npm install
npm run dev
```

O build produz `out/` sem servidor ou segredo: `npm run build`.

## Publicação

O workflow `.github/workflows/pages.yml` publica `out/` no GitHub Pages a cada push em `main`. Em **Settings → Pages**, selecione **GitHub Actions** como fonte.

O arquivo `CNAME` aponta para `vistorino.com`. O Squarespace pode continuar como registrador e provedor de DNS: mantenha o domínio nele e configure o domínio raiz com os registros A do GitHub Pages e `www` como CNAME para `<usuário>.github.io`, seguindo os valores atuais exibidos pelo GitHub. Depois, ative o domínio customizado no Pages e aguarde a propagação/HTTPS.

Esta página não usa a aplicação de produção nem coleta dados: os prints são demonstrações visuais construídas em HTML/CSS.
