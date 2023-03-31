import { Button, Dropdown } from 'antd';


import { NavLink } from 'react-router-dom';


const items = [
  {
    key: '1',
    label: (
      <div className='pb-3 pt-3 '>
        <NavLink className='mx-6 pb-10' to='/DigitalLending'> 
        
        <i class="fa-solid fa-address-card fa-lg"></i>&nbsp; <span className='text-blue-400'> Digital Lending API</span>
        </NavLink>


      </div>
   
    ),
  },
  {
    key: '2',
    label: (
      <div className='pb-3 pt-3'>
           <a className='mx-6 pb-10' target="_blank" rel="noopener noreferrer" href="">
      
           <i class="fa-solid fa-user fa-lg"></i>&nbsp; <span className='text-blue-400'> Digital Accounts API</span>
      </a>

      </div>
    ),
  },
  {
    key: '3',
    label: (
      <div className='pb-3 pt-3'>
           <a className='mx-6 pb-10' target="_blank" rel="noopener noreferrer" href="">
           <i class="fa-solid fa-scale-balanced fa-lg"></i>&nbsp;<span className='text-blue-400'> Capital by API</span>
      </a>

      </div>
    ),
  },
  {
    key: '4',
    label: (
      <div className='pb-3 pt-3'>
           <a className='mx-6 pb-10' target="_blank" rel="noopener noreferrer" href="">
           <i class="fa-sharp fa-solid fa-square-check fa-lg"></i> &nbsp;<span className='text-blue-400'> KYC</span>
      </a>

      </div>
    ),
  },
];
const Productsnavbar = () => (
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
     <span className=' hover:cursor-pointer text-white md:text-lg'>Products </span>
    </Dropdown>
   
  </>
);
export default Productsnavbar;