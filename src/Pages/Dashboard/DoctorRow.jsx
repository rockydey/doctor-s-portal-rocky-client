import React from 'react';

const DoctorRow = ({ doctor, index, setDeletingModal }) => {
    const { name, specialty, img } = doctor;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>
                <label onClick={() => setDeletingModal(doctor)} htmlFor="delete-modal" class="btn btn-sm text-white btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default DoctorRow;