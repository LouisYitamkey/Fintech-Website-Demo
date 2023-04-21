import { Button, Dropdown } from 'antd';
const items = [
  {
    key: '1',
    label: (
        <div className='pb-3 pt-3'>
           <a className='mx-6 pb-10' target="_blank" rel="noopener noreferrer" href="">
           Business As a Service
      </a>

      </div>
    ),
  },
  {
    key: '2',
    label: (
        <div className='pb-3 pt-3'>
           <a className='mx-6 pb-10' target="_blank" rel="noopener noreferrer" href="">
      Investment As a Service
      </a>

      </div>
    ),
  },
  {
    key: '3',
    label: (
        <div className='pb-3 pt-3'>
           <a className='mx-6 pb-10' target="_blank" rel="noopener noreferrer" href="">
           Business As a Service
      </a>

      </div>
    ),
  },
];
const Industriesnavbar = () => (
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
     <span className=' hover:cursor-pointer  md:text-lg'> Solutions </span>
    </Dropdown>
   
  </>
);
export default Industriesnavbar;