import { useState } from 'react';
import Header from '../../component/header'
import Sidemenu from '../../component/sidemenu'
import EditFieldModal from '../../component/form';
function Acount() {
 const [modalOpen, setModalOpen] = useState(false);
  const [activeField, setActiveField] = useState("");
  const [fieldValues, setFieldValues] = useState({
    "Full name": "Jimmy Smith",
    "E-mail Address": "Jimmy.smith1996@gmail.com",
    "Phone number": "+12345678910",
    "Password": "**********",
    "Address": "HubSpot, 25 First Street, Cambridge",
    "Postal code": "",
  });
  

  const openModal = (field) => {
    setActiveField(field);
    setModalOpen(true);
  };

  const handleSave = (newValue) => {
    setFieldValues((prev) => ({ ...prev, [activeField]: newValue }));
  };

  return (
    <>
    <Header/>
       <section>
        <span className='block bg-gray-300 w-full h-0.5' ></span>
            <div className='container flex items-center'>
                <p>Home</p>
                <img src="../../../public/images/icons/arrow-down.svg" alt="" />
                <p>Account</p>
                <img src="../../../public/images/icons/arrow-down.svg" alt="" />
                <p className="text-[#0C68F4] underline">Personal Data</p>
                
            </div>
            
        </section>
        <main className='container'>
            <div className='flex  gap-6'>
                <Sidemenu/>
            <div className="flex flex-wrap gap-6">
  {Object.entries(fieldValues).map(([label, value]) => (
    <div key={label} className="w-[392px] h-[72px]">
      <p className="ml-3 mb-1">{label}</p>
      <div className="h-[72px] bg-[#F6F6F6] rounded-xl px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/images/icons/user.svg" alt="" />
          <p className="text-[#717171]">{value}</p>
        </div>
        <button onClick={() => {
            openModal(label)
          }
          
          } className="cursor-pointer">
          <img src="/images/icons/edit.svg" alt="" />
        </button>
      </div>
    </div>
  ))}
</div>
                
            </div>
        </main>
        <EditFieldModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
       fieldLabel={activeField}
       fieldValue={fieldValues[activeField]}
       onSave={handleSave}
      />
    </>
  )
}
export default Acount