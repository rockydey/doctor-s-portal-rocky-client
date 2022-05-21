import React from 'react';
import { toast } from 'react-toastify';

const DeletingModal = ({ deletingModal, refetch, setDeletingModal }) => {
    const { name, email } = deletingModal;
    const handleDelete = email => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`Dr. ${name} is deleted.`)
                    setDeletingModal(null);
                    refetch();
                }
            })
    };
    return (
        <div>
            <input type="checkbox" id="delete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete {name}!</h3>
                    <div class="modal-action">
                        <button onClick={() => handleDelete(email)} class="btn btn-sm text-white btn-error">Delete</button>
                        <label htmlFor="delete-modal" class="btn btn-sm text-white">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeletingModal;