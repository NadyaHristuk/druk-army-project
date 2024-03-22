import NewsListItem from '../NewsListItem/NewsListItem';
import Paginator from '../Paginator/Paginator';
import s from './NewsList.module.css';

const newsList = [
  {
    id: 1,
    imageUrl: '',
    author: 'Євген',
    date: '23.10.2023',
    time: '5',
    title: 'Армія друкарів: як Україна застосовує 3D-технології у війні',
    descr:
      'Через рік Swat (що українською означає «посередник») допомагає керувати мережею під назвою Druk («Друкарська») армія, яка координує виробництво понад 300 3d-принтерів по всій країні.',
    views: 20421,
  },
  {
    id: 2,
    imageUrl: '',
    author: 'Євген',
    date: '23.10.2023',
    time: '5',
    title: 'Армія друкарів: як Україна застосовує 3D-технології у війні',
    descr:
      'Через рік Swat (що українською означає «посередник») допомагає керувати мережею під назвою Druk («Друкарська») армія, яка координує виробництво понад 300 3d-принтерів по всій країні.',
    views: 20421,
  },
  {
    id: 3,
    imageUrl: '',
    author: 'Євген',
    date: '23.10.2023',
    time: '5',
    title: 'Армія друкарів: як Україна застосовує 3D-технології у війні',
    descr:
      'Через рік Swat (що українською означає «посередник») допомагає керувати мережею під назвою Druk («Друкарська») армія, яка координує виробництво понад 300 3d-принтерів по всій країні.',
    views: 20421,
  },
  {
    id: 4,
    imageUrl: '',
    author: 'Євген',
    date: '23.10.2023',
    time: '5',
    title: 'Армія друкарів: як Україна застосовує 3D-технології у війні',
    descr:
      'Через рік Swat (що українською означає «посередник») допомагає керувати мережею під назвою Druk («Друкарська») армія, яка координує виробництво понад 300 3d-принтерів по всій країні.',
    views: 20421,
  },
  {
    id: 5,
    imageUrl: '',
    author: 'Євген',
    date: '23.10.2023',
    time: '5',
    title: 'Армія друкарів: як Україна застосовує 3D-технології у війні',
    descr:
      'Через рік Swat (що українською означає «посередник») допомагає керувати мережею під назвою Druk («Друкарська») армія, яка координує виробництво понад 300 3d-принтерів по всій країні.',
    views: 20421,
  },
  {
    id: 6,
    imageUrl: '',
    author: 'Євген',
    date: '23.10.2023',
    time: '5',
    title: 'Армія друкарів: як Україна застосовує 3D-технології у війні',
    descr:
      'Через рік Swat (що українською означає «посередник») допомагає керувати мережею під назвою Druk («Друкарська») армія, яка координує виробництво понад 300 3d-принтерів по всій країні.',
    views: 20421,
  },
  {
    id: 7,
    imageUrl: '',
    author: 'Євген',
    date: '23.10.2023',
    time: '5',
    title: 'Армія друкарів: як Україна застосовує 3D-технології у війні',
    descr:
      'Через рік Swat (що українською означає «посередник») допомагає керувати мережею під назвою Druk («Друкарська») армія, яка координує виробництво понад 300 3d-принтерів по всій країні.',
    views: 20421,
  },
  {
    id: 8,
    imageUrl: '',
    author: 'Євген',
    date: '23.10.2023',
    time: '5',
    title: 'Армія друкарів: як Україна застосовує 3D-технології у війні',
    descr:
      'Через рік Swat (що українською означає «посередник») допомагає керувати мережею під назвою Druk («Друкарська») армія, яка координує виробництво понад 300 3d-принтерів по всій країні.',
    views: 20421,
  },
];

const NewsList = () => {
  return (
    <div className={s.newsWrapper}>
      <ul className={s.list}>
        {newsList.map((el) => (
          <NewsListItem key={el.id} {...el} />
        ))}
      </ul>
      <Paginator />
    </div>
  );
};

export default NewsList;
