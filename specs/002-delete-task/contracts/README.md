# UI Contract: Delete Task

This project does not expose a backend API or external service contract. The relevant contract is the browser-side interaction between the task list and the delete action.

## User Interaction Contract

### Event: Delete task

**Trigger**: User clicks the red trash can icon associated with a task.

**Input**:
- `taskId`: unique identifier for the selected task

**Validation**:
- Confirm the task exists in the current list.
- Remove only the matching item.
- Do not prompt for confirmation.

**Result**:
- Remove the task from the in-memory list.
- Re-render the list without reloading the page.
- Show the empty-state message if no tasks remain.

### Failure Case

**Trigger**: The selected task cannot be found or the event targets no valid task.

**Result**:
- Ignore the action without altering the list.
- Keep the UI in a consistent state.

## Scope

This contract applies only to the front-end behavior of the to-do app. No API endpoints, persistence layer, or database integration are required for this feature.
