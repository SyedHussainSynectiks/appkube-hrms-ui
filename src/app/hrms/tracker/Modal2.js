
'use client';
import React, { useState } from 'react';
import { Button, Modal, Radio, Input } from 'antd';

const Modal2 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showInput, setShowInput] = useState(false);
  
    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleContinue = () => {
      setIsModalOpen(false);
    };
  
    const handleModalClick = (e) => {
      e.stopPropagation();
    };
  
    const handleModalClose = () => {
      setIsModalOpen(false);
    };
  
    const handleRadioChange = (e) => {
      setSelectedOption(e.target.value);
      if (e.target.value === 1) {
        setShowInput(true);
      } else {
        setShowInput(false);
      }
    };
  
    return (
      <>
        <Button type="primary" onClick={showModal} className="bg-[#1890FF] hover:text-[#1890FF] border hover:bg-white hover:border-[#1890FF] text-white flex p-4 gap-3 justify-center items-center ml-12 rounded-none mt-6">
          Manage invite
        </Button>
        <Modal
          open={isModalOpen}
          onCancel={handleModalClose}
          footer={null}
          closable={false}
          maskClosable={true}
          onClick={handleModalClick}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center', 
          }}
        >
          <div style={{ textAlign: 'left', padding: '20px'}} className='h-96 w-96'>
            
            <div><h2 className='text-2xl font-semibold justify-center text-center'>Send invite</h2></div>
            {/* <div><p className='font-semibold mt-4 text-base justify-center text-center'>Select Method</p></div> */}
            <p className='mt-6'>Your employee has not signed up to deel yet. You can resend them the invitation email.</p>
            <div className='mt-6'>
              <div className='bg-slate-50 h-14 rounded-lg'>
                <Radio value={1} className='font-semibold mt-3 ml-2' onChange={handleRadioChange}> <p>Send Now</p></Radio>
                <p className='text-xs ml-8'>Employee will receive an invitation email now.</p>
                {showInput && (
                  <Input className="mt-2 ml-6" placeholder="Select Date" />
                )}
              </div>
              <div className='bg-slate-50 h-14 mt-2 rounded-lg'>
                <Radio value={2} className='font-semibold mt-3 ml-2' onChange={handleRadioChange}><p>Send later</p></Radio>
                <p className='text-xs ml-8'>Schedule invites for a specific day and time.</p>
              </div>
             
            </div>
            <div style={{ textAlign: 'center' }} className='mt-6'>
              <Button type="primary" className="bg-[#1890FF] hover:text-[#1890FF] border hover:bg-white hover:border-[#1890FF] text-white flex p-4 gap-3 justify-center items-center rounded-none w-60" onClick={handleContinue}>
              Resend Invitation
            </Button></div>
          </div>
        </Modal>
      </>
    );
  };

export default Modal2
