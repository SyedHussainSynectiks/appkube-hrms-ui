import React, { useEffect, useState } from 'react';
import { FiEye } from "react-icons/fi";
import { CiSaveDown1 } from "react-icons/ci";

import axios from '@/api/axios';
import {useSelector } from 'react-redux'
import getAccessTokenFromCookie from '@/utils/getAccessToken';



const DocumentCard = () => {
    
    const accessToken = getAccessTokenFromCookie();

    const [organizationDocuments, setOrganizationDocuments] = useState([]);
    const id = useSelector((state)=>state.Details.ParticularempId)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const empId = typeof window !== "undefined" ? localStorage.getItem("empId") : null;
                const response = await axios.get(`/employee/${empId}`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                setOrganizationDocuments(response.data.documents);
            } catch(error) {
                console.log('Error fetching organization details:', error);
            }
        };

        fetchData();
    }, []);

  return (
    <>
    {organizationDocuments && organizationDocuments.length > 0 && organizationDocuments.map((data, index) => (

    <div key={index} className='flex items-center justify-between w-[22%] p-3 rounded-lg border border-gray-400'>
        <p className='text-md font-medium'>{data.name}</p>
        <span className='flex gap-2'>
           <a href={data.url} target='_blank'><FiEye className='text-lg '/></a>
            {/* <CiSaveDown1 className='text-lg font-bold'/> */}
        </span>
    </div>  )
    )}
</>
)}
export default DocumentCard