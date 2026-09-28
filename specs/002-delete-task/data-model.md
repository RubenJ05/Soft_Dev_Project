# Data Model: Delete Task

## Entities

### Task

Represents a single task item shown in the to-do list.

| Field | Type | Description | Validation |
|-------|------|-------------|------------|
| id | string or number | Unique identifier for the task | Must be unique within the current session |
| text | string | User-visible task description | Must remain a non-empty string after creation |

### TaskList

Represents the collection of tasks currently visible to the user.

| Field | Type | Description | Validation |
|-------|------|-------------|------------|
| tasks | array<Task> | The current list of tasks | Must update correctly after each delete action |

## Relationships

- A `TaskList` contains zero or more `Task` items.
- Each `Task` belongs to exactly one `TaskList` in the current page state.

## State Transitions

1. Idle: the task list is visible and may be empty or populated.
2. User clicks the delete icon next to a task.
3. The application identifies the selected task by its unique ID.
4. The matching task is removed from the array.
5. The list is re-rendered immediately.
6. If no tasks remain, the empty-state message is shown.

## Validation Rules

- Delete actions must target a valid task ID.
- Only one task should be removed at a time.
- The remaining tasks must remain visible and ordered consistently.
- The empty-state message must appear only when the list is empty.
- No confirmation flow is required or allowed for this feature.
