import { useState } from 'react';
import './App.css';

const faqs = [
  {
    title: 'Where are these chairs assembled?',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.',
  },
  {
    title: 'How long do I have to return my chair?',
    text: 'Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.',
  },
  {
    title: 'Do you ship to countries outside the EU?',
    text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!',
  },
];

const App = () => {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
};

const Accordion = ({ data }) => {
  const [curOpen, setCurOpen] = useState(1);

  return (
    <div className='accordion'>
      {data.map((item, i) => (
        <Item
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={item.title}
          num={i + 1}
          key={item.title}
        >
          {item.text}
        </Item>
      ))}
    </div>
  );
};

const Item = ({ num, title, curOpen, onOpen, children }) => {
  const handleIsOpen = () => onOpen(isOpen ? null : num);
  const isOpen = num === curOpen;

  return (
    <div className={`item ${isOpen && 'open'}`} onClick={handleIsOpen}>
      <p className='number'>{num < 9 ? `0${num}` : num}</p>
      <p className='title'>{title}</p>
      <p className='icon'>{isOpen ? '-' : '+'}</p>
      {isOpen && <p className='content-box'>{children}</p>}
    </div>
  );
};

export default App;
