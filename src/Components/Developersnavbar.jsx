import { Button, Dropdown } from 'antd';
const items = [
  {
    key: '1',
    label: (
        <div className='pb-3 pt-3'>
        <a className='mx-10 pb-10' target="_blank" rel="noopener noreferrer" href="">
     1st menu item
   </a>

   </div>
    ),
  },
  {
    key: '2',
    label: (
        <div className='pb-3 pt-3'>
        <a className='mx-10 pb-10' target="_blank" rel="noopener noreferrer" href="">
     2nd menu item
   </a>

   </div>
    ),
  },
  {
    key: '3',
    label: (
        <div className='pb-3 pt-3'>
        <a className='mx-10 pb-10' target="_blank" rel="noopener noreferrer" href="">
     3rd menu item
   </a>

   </div>
    ),
  },
];
const Developersnavbar = () => (
  <>
   
    <Dropdown
      menu={{
        items,
      }}
      placement="bottom"
      arrow={{
        pointAtCenter: true,
      }}
  
    >
     <span className=' hover:cursor-pointer text-white md:text-lg'> Developers </span>
    </Dropdown>
   
  </>
);
export default Developersnavbar;