# Issue tracker: GitHub

Issues and specs for this repo live in [ronanrodrigo/caudio](https://github.com/ronanrodrigo/caudio) GitHub Issues. Use the `gh` CLI or the connected GitHub app.

## Conventions

- Create: `gh issue create --title "..." --body "..."`.
- Read: `gh issue view <number> --comments`.
- List: `gh issue list --state open --json number,title,body,labels,comments`.
- Comment: `gh issue comment <number> --body "..."`.
- Apply/remove labels: `gh issue edit <number> --add-label "..."` / `--remove-label "..."`.
- Close: `gh issue close <number> --comment "..."`.

PRs are not a triage request surface for this repository.

## Wayfinding

Use one GitHub issue labelled `wayfinder:map` as the map. Child tickets use `wayfinder:research`, `wayfinder:prototype`, `wayfinder:grilling`, or `wayfinder:task`. Prefer GitHub native issue dependencies for blocking edges; fall back to `Blocked by: #<n>` when necessary.
