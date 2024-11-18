import Select from '../components/Select';

interface Person {
  name: string;
  id: number;
}

export const SelectExample = () => {
  const people: Person[] = [
    { name: 'Alice', id: 1 },
    { name: 'Bob', id: 2 },
    { name: 'Charlie', id: 3 },
  ];

  const handleSelect = (person: Person) => {
    console.log('Selected:', person);
  };

  return (
    <Select options={people} labelKey="name" valueKey="id" onSelect={handleSelect} />
  );
};
