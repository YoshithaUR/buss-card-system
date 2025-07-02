import React, { useState } from 'react';
import axiosInstance from '../../api/api';

const EnglishReg = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', address: '', district: '', startLocation: '', endLocation: '', category: '', hometown: '', image: null, age: '', school: '', gender: '', });

  const districts = ['Colombo', 'Gampaha', 'Kandy', 'Galle', 'Jaffna'];

  const citiesByDistrict = {
    'Colombo': ['Dehiwala', 'Nugegoda', 'Kollupitiya', 'Borella'],
    'Gampaha': ['Negombo', 'Wattala', 'Ja-Ela', 'Kiribathgoda'],
    'Kandy': ['Peradeniya', 'Katugastota', 'Nawalapitiya', 'Gampola'],
    'Galle': ['Hikkaduwa', 'Unawatuna', 'Ahangama', 'Matara'],
    'Jaffna': ['Chavakachcheri', 'Point Pedro', 'Karainagar', 'Nallur'],
  };

  const categories = ['School', 'University or College', 'Adults'];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        ...(name === 'district' ? { hometown: '' } : {}),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    postSubmit(formJson)
  };

  const postSubmit = async (e) => {
    const response = await axiosInstance.post('/register', e)
    console.log(response)
  }

  const hometownOptions = formData.district ? citiesByDistrict[formData.district] : [];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-3xl shadow-2xl relative overflow-y-auto max-h-[95vh] border-2 border-green-300">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-green-800 drop-shadow-sm">
          Register Now
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: 'Full Name', name: 'name', type: 'text' },
            { label: 'Email', name: 'email', type: 'email' },
            { label: 'Password', name: 'password', type: 'password' },
            { label: 'Home Address', name: 'address', type: 'text' },
            { label: 'Date of Birth', name: 'age', type: 'date' },
            { label: 'School', name: 'school', type: 'text' },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-semibold text-green-800 mb-1">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition text-purple-700 placeholder-purple-400"
                placeholder={`Enter ${field.label}`}
                required={field.name !== 'address'}
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-semibold text-green-800 mb-1">District</label>
            <select
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-green-400 bg-gradient-to-r from-green-100 to-green-200 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              required
            >
              <option value="">Select District</option>
              {districts.map((d, i) => (
                <option key={i} value={d}>{d}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-green-800 mb-1">City</label>
            <select
              name="hometown"
              value={formData.hometown}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-green-400 bg-gradient-to-r from-green-100 to-green-200 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              disabled={!formData.district}
              required
            >
              <option value="">{formData.district ? "Select City" : "Please select a district first"}</option>
              {hometownOptions.map((city, i) => (
                <option key={i} value={city}>{city}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-green-800 mb-1">Gender</label>
            <div className="flex gap-4">
              {['Male', 'Female', 'Other'].map((g) => (
                <label key={g} className="flex items-center space-x-2 text-green-700">
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={formData.gender === g}
                    onChange={handleChange}
                    className="text-green-600"
                    required
                  />
                  <span>{g}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-green-800 mb-1">Upload Your Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-green-400 bg-white text-green-700 file:bg-green-100 file:border file:border-green-300 file:rounded file:px-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>

          <div className="md:col-span-2 flex flex-col md:flex-row gap-4">
            {['startLocation', 'endLocation'].map((loc, idx) => (
              <div className="w-full" key={loc}>
                <label className="block text-sm font-semibold text-green-800 mb-1">
                  {idx === 0 ? 'Start Location' : 'End Location'}
                </label>
                <input
                  type="text"
                  name={loc}
                  value={formData[loc]}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-green-400 text-blue-800 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                  placeholder={`Enter ${idx === 0 ? 'start' : 'end'} location`}
                />
              </div>
            ))}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-green-800 mb-1">Select Your Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-green-400 bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              required
            >
              <option value="">Select</option>
              {categories.map((c, i) => (
                <option key={i} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnglishReg;
