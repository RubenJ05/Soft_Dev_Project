# Quickstart: Delete Task Validation

## Prerequisites

- A modern browser such as Chrome, Firefox, or Edge
- A local static file server or browser preview environment

## Setup

From the project root, start a local static web server:

```bash
python3 -m http.server 8000
```

Then open the app in a browser at:

```text
http://localhost:8000
```

## Validation Scenarios

### Scenario 1: Delete a task from a populated list

1. Add at least two tasks to the task list.
2. Click the red trash can icon next to one of the items.
3. Confirm that the selected item disappears immediately.
4. Confirm the remaining tasks remain visible.

### Scenario 2: Delete the last remaining task

1. Leave only one task in the list.
2. Click its delete icon.
3. Confirm the task disappears and the empty-state message appears.

### Scenario 3: No confirmation required

1. Add a task.
2. Click the delete icon.
3. Confirm the task is removed without a confirmation dialog or refresh.

## Expected Outcome

Deletion is immediate, precise, and does not require any confirmation or page reload. The interface remains accurate and the empty state is restored when appropriate.
