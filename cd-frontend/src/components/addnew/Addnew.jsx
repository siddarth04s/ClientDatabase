import React, { useState } from 'react';
import './Addnew.css';

const MultiTextFieldForm = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        designation: '',
        phoneNumber: '',
        email: '',
        emailSentOn: '',
        clientRepliedOn: '',
        followUp: '',
        status: 'Active'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="form-container">
            <h2>Add Client</h2>
            <form onSubmit={handleSubmit} className="form-inline">
                <div className="form-group">
                    <div className='label-input'>
                    <label htmlFor="companyName">Company Name  </label><input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                    />
                    </div>
                </div>

                <div className="form-group">
                <div className='label-input'>
                    <label htmlFor="designation">Designation </label>
                    <input
                        type="text"
                        id="designation"
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                    />
                    </div>
                </div>

                <div className="form-group">
                <div className='label-input'>
                    <label htmlFor="phoneNumber">Phone Number </label>
                    <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                    </div>
                </div>

                <div className="form-group">
                <div className='label-input'>
                    <label htmlFor="email">Email </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    </div>
                </div>

                <div className="form-group">
                <div className='label-input'>
                    <label htmlFor="emailSentOn">Email Sent On </label>
                    <input
                        type="date"
                        id="emailSentOn"
                        name="emailSentOn"
                        value={formData.emailSentOn}
                        onChange={handleChange}
                    />
                    </div>
                </div>

                <div className="form-group">
                <div className='label-input'>
                    <label htmlFor="clientRepliedOn">Client Replied On </label>
                    <input
                        type="date"
                        id="clientRepliedOn"
                        name="clientRepliedOn"
                        value={formData.clientRepliedOn}
                        onChange={handleChange}
                    />
                    </div>
                </div>

                <div className="form-group">
                <div className='label-input'>
                    <label htmlFor="followUp">Follow Up </label><input
                        type="date"
                        id="followUp"
                        name="followUp"
                        value={formData.followUp}
                        onChange={handleChange}
                    />
                    </div>
                </div>

                <div className="form-group">
                <div className='label-input'>
                    <label htmlFor="status">Status </label>
                    <select
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                    >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select></div>
                </div>
                <div className="form-group">
                <div className='label-input'>
                    <label htmlFor="MeetingHeldOn">Meeting Held On </label>
                    <input
                        type="date"
                        id="SelectDate"
                        name="Select Date"
                        value={formData.MeetingheldOn}
                        onChange={handleChange}
                    /></div>
                </div>
                <div className="form-group">
                <div className='label-input'>
                    <label htmlFor="Enquiry"> Enquiry Received </label>
                    <select
                        id="Select Status"
                        name="Select Status"
                        value={formData.status}
                        onChange={handleChange}
                    >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select></div>
                </div>
                <div className="form-group">
                <div className='label-input'>
                    <label htmlFor="status">Proposal Given </label>
                    <select
                        id="Select status"
                        name="Select status"
                        value={formData.status}
                        onChange={handleChange}
                    >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select></div>
                </div>

                {/* <div className='buttons'>
                    <button type="submit">Create</button>
                    <button type="submit">Cancel</button>
                </div> */}
                <div className="buttons">
                    <button type="submit" className="create-button">Create</button>
                    <button type="button" className="cancel-button">Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default MultiTextFieldForm;
