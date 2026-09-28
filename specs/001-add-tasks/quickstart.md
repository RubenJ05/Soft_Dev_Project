# Quickstart: Add Tasks Validation

## Prerequisites

- A modern browser such as Chrome, Firefox, or Edge
- A local static file server or a simple browser preview environment

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

### Scenario 1: Add a valid task

1. Enter a task description such as "Review project notes".
2. Click the Add button.
3. Confirm the new task appears in the list immediately.
4. Confirm the page does not reload.

### Scenario 2: Reject an empty task

1. Leave the input empty.
2. Click the Add button.
3. Confirm no task is added and the user receives a validation message or blocking behavior.

### Scenario 3: Reject whitespace-only input

1. Enter only spaces or tabs in the input.
2. Click the Add button.
3. Confirm the submission is blocked and no task is created.

## Expected Outcome

The task list updates immediately with valid user input, while invalid submissions are prevented without a page refresh.
