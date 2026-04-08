# Entity Relationship Diagram - Todo App

```
┌─────────────────────────┐
│         User            │
├─────────────────────────┤
│ _id (PK)                │
│ username (String)       │
│ password (String)       │
│ createdAt (Date)        │
└──────────┬──────────────┘
           │
           │ One-to-Many
           │
           ▼
┌─────────────────────────┐
│         Todo            │
├─────────────────────────┤
│ _id (PK)                │
│ user (FK → User._id)    │
│ title (String)          │
│ completed (Boolean)     │
│ createdAt (Date)        │
└─────────────────────────┘
```

## Relationships

- **User → Todo**: One-to-Many
  - One user can have multiple todos
  - Each todo belongs to only one user
  - Foreign key: `Todo.user` references `User._id`
  - Cascade delete: When a user is deleted, their todos should be deleted

## Database Schema

### User Collection
| Field | Type | Constraints |
|-------|------|-------------|
| _id | ObjectId | Primary Key |
| username | String | Required, Unique |
| password | String | Required, Hashed |
| createdAt | Date | Default: now |

### Todo Collection
| Field | Type | Constraints |
|-------|------|-------------|
| _id | ObjectId | Primary Key |
| user | ObjectId | Required, Foreign Key |
| title | String | Required |
| completed | Boolean | Default: false |
| createdAt | Date | Default: now |
