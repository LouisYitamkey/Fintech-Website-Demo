import { Button, Dropdown } from 'antd';


import { NavLink } from 'react-router-dom';


const items = [
  {
    key: '1',
    label: (
      <div className='pb-3 pt-3 '>
        <NavLink className='mx-6 pb-10' to='/digitalLending'> 
        
        <i class="fa-solid  fa-address-card fa-sm "></i>&nbsp; <span className=' '> Digital Lending API</span>
        </NavLink>


      </div>
   
    ),
  },
  {
    key: '2',
    label: (
      <div className='pb-3 pt-3'>
           <a className='mx-6 pb-10' target="_blank" rel="noopener noreferrer" href="">
      
           <i class="fa-solid  fa-user fa-sm"></i>&nbsp;&nbsp; <span className='   '> Digital Accounts API</span>
      </a>

      </div>
    ),
  },
  {
    key: '3',
    label: (
      <div className='pb-3 pt-3'>
           <a className='mx-6 pb-10' target="_blank" rel="noopener noreferrer" href="">
           <i class="fa-solid  fa-scale-balanced fa-sm"></i>&nbsp; <span className=' '> Capital by API</span>
      </a>

      </div>
    ),
  },
  {
    key: '4',
    label: (
      <div className='pb-3 pt-3'>
          
        <NavLink className='mx-6 pb-10' to='/kyc'> 
        
        <i class="fa-sharp   fa-solid fa-square-check fa-sm"></i> &nbsp; <span className=' '> KYC</span>
        </NavLink>

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
     <span className=' hover:cursor-pointer  md:text-lg'>Products </span>
    </Dropdown>
   
  </>
);
export default Productsnavbar;