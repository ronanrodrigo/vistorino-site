# Implementation progress

This is the chronological execution log for the caudio setup and implementation. Durable design decisions belong in `docs/adr/`; domain vocabulary belongs in `CONTEXT.md`.

## 2026-08-15

- Installed 35 Matt Pocock engineering skills under `.agents/skills/`.
- Defined the initial domain model in `CONTEXT.md`.
- Confirmed MVP scope: WhatsApp text/audio intake, PT-BR transcription, car identification, and later parts extraction.
- Selected TypeScript/Next.js, Vercel, Supabase, Meta WhatsApp Cloud API, and OpenAI adapters.
- Created Supabase project `caudio` in `sa-east-1` on the free plan.
- Read the supplied ZipLab iOS feature prompt. Its gateway/service/sample/mocking/composition/localization/verification principles are now recorded in `docs/architecture.md` and `AGENTS.md` as platform-agnostic rules.
- Created private GitHub repository `ronanrodrigo/caudio` and connected the local `main` branch.
- Scaffolded a minimal Next.js/TypeScript application and verified `npm run build`.
- Created Vercel project `caudio` and production deployment `dpl_H1BXWCCHW3GJau8dwpaWHLAdtx18`.
- Connected the Vercel project to `git@github.com:ronanrodrigo/caudio.git` for Git deployments.
- Configured GitHub Issues as the issue tracker in `docs/agents/`.
- Pending: configure Vercel/Supabase environment variables, configure Meta/OpenAI credentials, and implement the first vertical slice.

## 2026-08-15 — Vistorino landing

- Created isolated worktree/branch `feat/vistorino-landing` for the temporary public presentation.
- Built a responsive static-export landing with a deliberate “digital workshop bench” visual direction: petrol blue, signal yellow, paper background, Fraunces/DM Sans/DM Mono typography.
- Added CSS mockups showing the WhatsApp conversation and the structured parts-evidence card; no production data or backend dependency.
- Added GitHub Pages workflow, `CNAME` for `vistorino.com`, and README documenting Squarespace as DNS/domain layer.
- Verified `npm run build` and `npm run typecheck` successfully.
- Moved the public landing to the standalone repository `ronanrodrigo/vistorino-site` so the private application repository remains private; deployed it to `https://vistorino-site.vercel.app`.
- Refined the landing into a car-native, friendly WhatsApp companion: the buyer sends an audio describing concerns and Vistorino helps clarify what to ask before buying.
- Fixed the mobile hero overlap by placing the inspection card in normal document flow below the hero at the mobile breakpoint; deployed commit `42bffb8` to Vercel.
- Expanded the WhatsApp demonstration with a usable parts response: references, illustrative prices, total estimate, and purchase-search links (`6e194e1`).
- Simplified the parts response and switched display/body typography to sans-serif families for clearer scanning (`d28858e`).
- Shortened the landing by removing a redundant decision section and tightening vertical rhythm across breakpoints (`e3ad739`).
- Compacted the mobile process section into three small side-by-side steps (`8322b1c`).
