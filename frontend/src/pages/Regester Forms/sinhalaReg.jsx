import React, { useState } from 'react';

const SinhalaReg = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    district: '',
    startLocation: '',
    endLocation: '',
    category: '',
    hometown: '',
    image: null,
    age: '',
    school: '',
    gender: '',
  });

  const districts = ['කොළඹ', 'ගම්පහ', 'මහනුවර', 'ගාල්ල', 'යාපනය'];

  const citiesByDistrict = {
    'කොළඹ': ['දෙහිවල', 'නුගේගොඩ', 'කොල්ලුපිටිය', 'බොරැල්ල'],
    'ගම්පහ': ['මීගමුව', 'වත්තල', 'ජා-ඇල', 'කිරිබත්ගොඩ'],
    'මහනුවර': ['පේරාදෙණිය', 'කටුගස්තොට', 'නාවලපිටිය', 'ගම්පොල'],
    'ගාල්ල': ['හික්කඩුව', 'උණවටුන', 'අහංගම', 'මාතර'],
    'යාපනය': ['චාවකච්චේරි', 'පොයින්ට් පේඩ්රෝ', 'කරෛනගර්', 'නල්ලූර්'],
  };

  const categories = ['පාසල', 'විශ්වවිද්‍යාලය හෝ විද්‍යාලය', 'වැඩිහිටියන්'];

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
    console.log(formData);
  };

  const hometownOptions = formData.district ? citiesByDistrict[formData.district] : [];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-3xl shadow-2xl relative overflow-y-auto max-h-[95vh] border-2 border-green-300">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-green-800 drop-shadow-sm">
          දැන් ලියාපදිංචි වන්න
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: 'සම්පූර්ණ නම', name: 'name', type: 'text' },
            { label: 'ඊ-තැපෑල', name: 'email', type: 'email' },
            { label: 'මුරපදය', name: 'password', type: 'password' },
            { label: 'නිවසේ ලිපිනය', name: 'address', type: 'text' },
            { label: 'උපන් දිනය', name: 'age', type: 'date' },
            { label: 'පාසල', name: 'school', type: 'text' },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-semibold text-green-800 mb-1">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition text-purple-700 placeholder-purple-400"
                placeholder={`${field.label} ඇතුළත් කරන්න`}
                required={field.name !== 'address'}
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-semibold text-green-800 mb-1">දිස්ත්‍රික්කය</label>
            <select
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-green-400 bg-gradient-to-r from-green-100 to-green-200 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              required
            >
              <option value="">දිස්ත්‍රික්කය තෝරන්න</option>
              {districts.map((d, i) => (
                <option key={i} value={d}>{d}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-green-800 mb-1">නගරය</label>
            <select
              name="hometown"
              value={formData.hometown}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-green-400 bg-gradient-to-r from-green-100 to-green-200 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              disabled={!formData.district}
              required
            >
              <option value="">{formData.district ? "නගරය තෝරන්න" : "පළමුව දිස්ත්‍රික්කය තෝරන්න"}</option>
              {hometownOptions.map((city, i) => (
                <option key={i} value={city}>{city}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-green-800 mb-1">ස්ත්‍රී/පුරුෂ භාවය</label>
            <div className="flex gap-4">
              {['පුරුෂ', 'ස්ත්‍රී', 'වෙනත්'].map((g) => (
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
            <label className="block text-sm font-semibold text-green-800 mb-1">ඔබේ පින්තූරය ඇතුළත් කරන්න</label>
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
                  {idx === 0 ? 'ආරම්භක ස්ථානය' : 'නිමාවන ස්ථානය'}
                </label>
                <input
                  type="text"
                  name={loc}
                  value={formData[loc]}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-green-400 text-blue-800 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                  placeholder={`ඇතුළත් කරන්න ${idx === 0 ? 'ආරම්භක' : 'නිමාවන'} ස්ථානය`}
                />
              </div>
            ))}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-green-800 mb-1">ඔබේ වර්ගය තෝරන්න</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-green-400 bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              required
            >
              <option value="">තෝරන්න</option>
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
              ඉදිරිපත් කරන්න
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SinhalaReg;
