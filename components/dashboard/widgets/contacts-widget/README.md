# Contacts Widget

The Contacts widget displays a list of recent contacts for the sales agent, including clients, investors, and leads. It provides quick access to contact information and communication options.

## Features

- Displays recent contacts with name, type, and status
- Shows contact type with color-coded badges
- Quick access to call, email, or message contacts
- Responsive design for all screen sizes

## Usage

```tsx
import ContactsWidget from './widgets/contacts-widget';

<ContactsWidget 
  contacts={contactsData}
  className="w-full h-80"
/>
```

## Props

- `contacts`: Array of contact objects with id, name, email, phone, type, and status
- `className`: Additional CSS classes to apply to the widget

## Structure

- `ContactsWidget.tsx`: Main component that composes the header and content
- `ContactsHeader.tsx`: Header section with title and view all button
- `ContactsContent.tsx`: Main content area with contact list
- `index.ts`: Export file for easy importing
- `README.md`: Documentation file
