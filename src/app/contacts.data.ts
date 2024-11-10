import { Contact, Season } from './contact.model';

export const MOCK_CONTACTS: Contact[] = [
    {
      name: 'Alice Smith',
      phone: '+1-123-456-7890',
      email: 'alice.smith@example.com',
      favoriteSeason: Season.Spring,
    },
    {
      name: 'Bob Johnson',
      phone: '+1-987-654-3210',
      email: 'bob.johnson@example.com',
      favoriteSeason: Season.Summer,
    },
    {
      name: 'Charlie Brown',
      phone: '+44-20-1234-5678',
      email: 'charlie.brown@example.co.uk',
      favoriteSeason: Season.Autumn,
    },
    {
      name: 'Diana Miller',
      phone: '+49-30-9876-5432',
      email: 'diana.miller@example.de',
      favoriteSeason: Season.Winter,
    },
  ]
