
import List from '../components/List';

export const ListExample = () => {
  const names = ['Alice', 'Bob', 'Charlie'];
  return (
    <List items={names} renderItem={(name) => <strong>{name}</strong>} />
  );
};

