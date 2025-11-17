import { render, screen } from '@testing-library/react';
import BugList from '../../components/BugList';

test('renders list of bugs', () => {
  const bugs = [{_id:'1',title:'Bug1',status:'open',description:''}];
  render(<BugList bugs={bugs} onUpdate={()=>{}} onDelete={()=>{}} />);
  expect(screen.getByText(/Bug1/i)).toBeInTheDocument();
});
