export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}


export const MOCK_USERS: User[] = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Administrator' },
  { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com', role: 'User' },
  { id: 3, name: 'Jim Beam', email: 'jim.beam@example.com', role: 'User' },
  { id: 4, name: 'Jack Daniels', email: 'jack.daniels@example.com', role: 'Editor' },
  { id: 5, name: 'Josie Wales', email: 'josie.wales@example.com', role: 'Contributor' },
  { id: 6, name: 'Jill Valentine', email: 'jill.valentine@example.com', role: 'Moderator' },
  { id: 7, name: 'Leon Kennedy', email: 'leon.kennedy@example.com', role: 'Viewer' },
];
