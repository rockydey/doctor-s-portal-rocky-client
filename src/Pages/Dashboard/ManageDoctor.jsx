import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeletingModal from './DeletingModal';
import DoctorRow from './DoctorRow';

const ManageDoctor = () => {
    const [deletingModal, setDeletingModal] = useState(null);
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">Manage Doctor's</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorRow
                                key={doctor._id}
                                doctor={doctor}
                                index={index}
                                setDeletingModal={setDeletingModal}
                            ></DoctorRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingModal && <DeletingModal
                    deletingModal={deletingModal}
                    refetch={refetch}
                    setDeletingModal={setDeletingModal}
                ></DeletingModal>
            }
        </div>
    );
};

export default ManageDoctor;