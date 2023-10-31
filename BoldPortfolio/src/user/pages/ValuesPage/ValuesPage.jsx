import { Value, HeaderTitle } from './../../components'; 
import styles from './ValuesPageStyle.css'

const valuesData = [
    {
      img: '',
      name: 'Integrity',
      description: 'Our commitment to honesty and ethical behavior.',
    },
    {
      img: '',
      name: 'Collaboration',
      description: 'Working together to achieve shared goals.',
    },
    {
      img: '',
      name: 'User Centered',
      description: "Putting our users' needs at the center of everything we do.",
    },
  ];

export function ValuesPage() {
    return (
      <div className='value'>
      <HeaderTitle title="Values" />
      <div className='ValuesContainer'>
        {valuesData.map((value, index) => (
          <Value
            key={index}
            img={value.img}
            name={value.name}
            description={value.description}
          />
        ))}
      </div>
      </div>
    );
  }