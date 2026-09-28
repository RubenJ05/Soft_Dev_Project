# Research: Add Tasks

## Decision

Use a browser-only task list with a simple in-memory array and DOM rendering. The UI will include an input field and an Add button that validates the trimmed value before appending a new task to the task list.

## Rationale

This approach matches the project constraints: no backend, no database, and no page refresh. A lightweight state array is sufficient for a course project and makes the user flow easy to validate in a browser.

## Alternatives Considered

1. Local storage-based persistence
   - Rejected because persistence is explicitly out of scope for the initial feature and adds complexity without improving the core user flow.

2. Server-backed task creation
   - Rejected because the application is described as a single-page application with no backend and no database.

3. Framework-based rendering
   - Considered but unnecessary for a small, instructional feature. Plain JavaScript keeps the implementation simpler and more transparent for students.

## Resolved Unknowns

- Input validation: Trim and reject empty strings before creating a task.
- Rendering behavior: Re-render the task list directly in the DOM after adding a task.
- Persistence: Not required for this version; tasks exist only in the current page session.
