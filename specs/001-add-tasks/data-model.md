# Data Model: Add Tasks

## Entities

### Task

Represents a single task item shown in the to-do list.

| Field | Type | Description | Validation |
|-------|------|-------------|------------|
| id | string or number | Unique identifier for the task | Must be unique within the current session |
| description | string | User-entered text shown in the list | Must be non-empty after trimming whitespace |
| createdAt | timestamp | Moment the task was created | Automatically assigned when added |

### TaskList

Represents the collection of tasks currently displayed to the user.

| Field | Type | Description | Validation |
|-------|------|-------------|------------|
| tasks | array<Task> | The current list of task items | Must remain valid after each add operation |

## Relationships

- A `TaskList` contains zero or more `Task` records.
- Each `Task` belongs to exactly one `TaskList` in the current page state.

## State Transitions

1. Idle: the list is visible and empty or contains existing tasks.
2. User enters text in the input field.
3. User clicks Add.
4. Validation checks the trimmed description.
5. If valid, the task is appended to the list and rendered immediately.
6. If invalid, the task is not added and the user sees an error or blocked action.

## Validation Rules

- A task description is valid only if it contains at least one non-whitespace character.
- Leading and trailing whitespace are ignored for validation and display.
- Empty submissions must not create a list item.
- Duplicate entries are allowed unless product requirements say otherwise; the initial feature does not forbid duplicates.
