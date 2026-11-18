// Demo page that uses all five daily challenge components together.
import { useState } from 'react';
import Greeting from './Greeting';
import Card from './Card';
import UserList from './UserList';
import Button from './Button';
import PageLayout from './PageLayout';

const users = [
  { id: 1, name: 'Amina Otieno', role: 'Frontend' },
  { id: 2, name: 'Brian Kamau', role: 'Backend' },
  { id: 3, name: 'Wanjiru Mwangi', role: 'Design' },
];

function DailyChallenges() {
  const [loading, setLoading] = useState(false);

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <PageLayout sidebar={<Card title="Sidebar" variant="outlined">Optional sidebar content</Card>}>
      <Greeting name="Catherine" timeOfDay="morning" />
      <Greeting timeOfDay="evening" />

      <Card title="Primary card">Primary variant</Card>
      <Card title="Secondary card" variant="secondary">Secondary variant</Card>

      <UserList users={users} />
      <UserList users={[]} />

      <div className="dc-row">
        <Button text="Save" onClick={handleSave} loading={loading} />
        <Button text="Cancel" variant="secondary" size="small" />
        <Button text="Delete" variant="danger" size="large" />
        <Button text="Disabled" disabled />
      </div>
    </PageLayout>
  );
}

export default DailyChallenges;
