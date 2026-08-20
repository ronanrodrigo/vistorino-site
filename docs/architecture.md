# caudio architecture rules

## Purpose

caudio receives free-form Portuguese text or audio from a WhatsApp buyer describing a car under evaluation. It identifies the car, transcribes audio, and eventually structures the required parts for repair.

## Non-negotiable principles

### Domain-driven design

Use the project's ubiquitous language from `CONTEXT.md`. Keep domain concepts explicit: Buyer, Car Under Evaluation, Evaluation Report, Car Model, Required Part, Parts List, Transcription, and Missing Data.

### Clean Architecture

Dependencies point inward:

```text
Infrastructure adapters -> Interface adapters -> Application -> Domain
```

The domain must not import WhatsApp SDKs, Vercel APIs, Supabase clients, OpenAI clients, HTTP types, or framework modules.

### Gateways and services

External capabilities are represented by small gateway interfaces. Application services orchestrate a use case through constructor-injected gateways and expose a clear `execute(...)` method. Gateway interfaces contain behavior contracts, not provider details.

The prompt supplied by the user was written for ZipLab iOS. Its durable rules are translated here:

- `${Domain}Gateway` becomes a TypeScript gateway interface.
- `${Operation}Service` becomes an application service with `execute(...)`.
- `Sample${Domain}Gateway` becomes a deterministic in-memory adapter for local development and tests.
- Swift Testing becomes the repository's TypeScript test framework and Arrange/Act/Assert structure.
- `AppContainer` becomes the composition root where concrete adapters are wired.
- Localization remains an application concern, with PT-BR as the base language.
- Verification is mandatory at the end of every vertical slice.

### Provider abstraction

Keep separate gateways for:

- WhatsApp inbound/outbound messaging;
- WhatsApp media retrieval;
- audio transcription;
- language-model structuring;
- conversation/evaluation persistence.

OpenAI is the initial adapter, not the domain contract. Model identifiers must be configuration, not literals scattered through use cases.

### Vertical slices

Build in this order:

1. WhatsApp Hello World for text and audio webhook events.
2. Audio retrieval and transcription returned to WhatsApp.
3. Car identification and missing-data conversation state.
4. Parts extraction from the confirmed car evaluation.
5. Affiliate links and purchase total only after the MVP is validated.

Each slice must be independently testable and observable.

### Persistence and privacy

Supabase stores conversation state, active evaluation, message idempotency records, and transcription. Audio files are transient and are not persisted. Exposed Supabase tables require RLS and least-privilege policies.

### Runtime

Vercel hosts the webhook and server-side application. The webhook acknowledges quickly; asynchronous processing owns the longer workflow and records status transitions in Supabase. Use the Node.js runtime for database and provider SDK compatibility.
