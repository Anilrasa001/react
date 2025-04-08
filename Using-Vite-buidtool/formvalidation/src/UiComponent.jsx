import React, { useState } from "react";

function UiComponent() {
    const [formData, setFormData] = useState({
        name: "",
        gender: "",
        subscription: "",
        country: "",
    });

    const [submittedData, setSubmittedData] = useState(null);

    // Handle input changes
    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        if (name === "gender") {
            setFormData((prevData) => ({
                ...prevData,
                gender: checked ? value : "",
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmittedData(formData);
    };

    return (
        <div>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <table>
                {/* Name Input */}
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required

                />

                {/* Gender Checkboxes */}
                <br/>
                <tr>
                <td>
                <label>Gender:</label>
                </td>
                <td>
                <div>
                    <input
                        type="checkbox"
                        name="gender"
                        value="Male"
                        onChange={handleChange}
                        checked={formData.gender === "Male"}
                        disabled={formData.gender && formData.gender !== "Male"}
                    /> Male
                    <input type="checkbox"name="gender" value="Female" onChange={handleChange}
                        checked={formData.gender === "Female"}
                        disabled={formData.gender && formData.gender !== "Female"}
                    /> Female
                    <input
                        type="checkbox"
                        name="gender"
                        value="Other"
                        onChange={handleChange}
                        checked={formData.gender === "Other"}
                        disabled={formData.gender && formData.gender !== "Other"}
                    /> Other
                </div>
                </td>
                </tr>   

                {/* Subscription Radio Buttons */}
                <tr>
                    <td>
                <label>Subscription:</label>
                </td>
                <td>
                <div>
                    <input
                        type="radio"
                        name="subscription"
                        value="Yes"
                        onChange={handleChange}
                        checked={formData.subscription === "Yes"}
                    /> Yes
                    <input
                        type="radio"
                        name="subscription"
                        value="No"
                        onChange={handleChange}
                        checked={formData.subscription === "No"}
                    /> No
                </div>
                </td>
                </tr>

                {/* Country Dropdown */}
                <tr>
                <td>
                <label>Country:</label>
                </td>
                <td>
                <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Country</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Canada">Canada</option>
                </select>
                </td>
                </tr>

                {/* Submit Button */}
                <button type="submit">Submit</button>
                </table>
            </form>

            {/* Display Submitted Data */}
            {submittedData && (
                <div>
                    <h3>Submitted Data:</h3>
                    <p><strong>Name:</strong> {submittedData.name}</p>
                    <p><strong>Gender:</strong> {submittedData.gender}</p>
                    <p><strong>Subscription:</strong> {submittedData.subscription}</p>
                    <p><strong>Country:</strong> {submittedData.country}</p>
                </div>
            )}
        </div>
    );
}
export default UiComponent;

