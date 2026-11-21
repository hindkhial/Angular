# Angular class exercises

TaskFlow exercises completed during Angular classes.

## Run the project

Use Node.js 24.22 or a newer release in the Node.js 24 series.

```bash
npm ci
npm start
```

Open http://localhost:4200. Compile with `npm run build`.

## Class progress

| Session | Topics | Main files |
| --- | --- | --- |
| November 14, 2026 | Interpolation, property and event binding, three tasks, empty state, uppercase and date pipes | `src/app/header.ts`, `src/app/header.html`, `src/app/task-list/` |
| November 20, 2026 | Component composition and custom titleColor pipe | `src/app/task-list/`, `src/app/pipes/title-color-pipe.ts` |

The first Git commit records the accumulated work through November 20. Git tracking started afterward.

## Behavior

- Renommer changes TaskFlow to Mes tâches.
- Supprimer demonstrates disabled property binding.
- TaskList displays three sample tasks with uppercase titles and formatted dates.
- titleColor returns red for titles longer than 10 characters and green otherwise.
- Vider la liste clears the tasks and displays the empty-state message.

## Save each future class session

Review your changes, commit them with the session date and topic, then push.

```bash
git status
git add .
git commit -m "Class YYYY-MM-DD - lesson topic"
git push
```
