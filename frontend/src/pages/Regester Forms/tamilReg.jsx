import React, { useState } from 'react';

const TamilReg = ({ onClose }) => {
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

  const districts = ['கொழும்பு', 'கம்பஹா', 'கண்டி', 'காலி', 'யாழ்ப்பாணம்'];

  const citiesByDistrict = {
    'கொழும்பு': ['தேஹிவளை', 'நுகேகொடை', 'கொல்லுபிடிய', 'பொறளளை'],
    'கம்பஹா': ['நெகும்பு', 'வத்தளை', 'ஜா-எல', 'கிரிபத்கொடை'],
    'கண்டி': ['பேராதெனிய', 'கட்டுகஸ்தோட்ட', 'நாவலபிட்டிய', 'கம்பொல'],
    'காலி': ['ஹிக்கடுவா', 'உணவதுன', 'அஹங்கம', 'மாத்தறை'],
    'யாழ்ப்பாணம்': ['சாவகச்சேரி', 'பாயிண்ட் பெட்ரோ', 'கரைநகர்', 'நல்லூர்'],
  };

  const categories = ['பள்ளி', 'பல்கலைக்கழகம் அல்லது கல்லூரி', 'முதிர்ந்தவர்கள்'];

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
          இப்போது பதிவு செய்யுங்கள்
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: 'முழுப்பெயர்', name: 'name', type: 'text' },
            { label: 'மின்னஞ்சல்', name: 'email', type: 'email' },
            { label: 'கடவுச்சொல்', name: 'password', type: 'password' },
            { label: 'வீட்டு முகவரி', name: 'address', type: 'text' },
            { label: 'பிறந்த தேதி', name: 'age', type: 'date' },
            { label: 'பள்ளி', name: 'school', type: 'text' },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-semibold text-green-800 mb-1">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition text-purple-700 placeholder-purple-400"
                placeholder={`${field.label} உள்ளிடவும்`}
                required={field.name !== 'address'}
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-semibold text-green-800 mb-1">மாவட்டம்</label>
            <select
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-green-400 bg-gradient-to-r from-green-100 to-green-200 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              required
            >
              <option value="">மாவட்டத்தைத் தேர்ந்தெடுக்கவும்</option>
              {districts.map((d, i) => (
                <option key={i} value={d}>{d}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-green-800 mb-1">நகரம்</label>
            <select
              name="hometown"
              value={formData.hometown}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-green-400 bg-gradient-to-r from-green-100 to-green-200 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              disabled={!formData.district}
              required
            >
              <option value="">{formData.district ? "நகரத்தைத் தேர்ந்தெடுக்கவும்" : "முதலில் மாவட்டத்தைத் தேர்ந்தெடுக்கவும்"}</option>
              {hometownOptions.map((city, i) => (
                <option key={i} value={city}>{city}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-green-800 mb-1">பாலினம்</label>
            <div className="flex gap-4">
              {['ஆண்', 'பெண்', 'மற்றவை'].map((g) => (
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
            <label className="block text-sm font-semibold text-green-800 mb-1">உங்கள் புகைப்படத்தை இணைக்கவும்</label>
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
                  {idx === 0 ? 'தொடக்க இடம்' : 'முடிவிடம்'}
                </label>
                <input
                  type="text"
                  name={loc}
                  value={formData[loc]}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-green-400 text-blue-800 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                  placeholder={`${idx === 0 ? 'தொடக்க இடத்தை' : 'முடிவிடத்தை'} உள்ளிடவும்`}
                />
              </div>
            ))}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-green-800 mb-1">உங்கள் வகையைத் தேர்ந்தெடுக்கவும்</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-green-400 bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              required
            >
              <option value="">தேர்ந்தெடுக்கவும்</option>
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
              சமர்ப்பிக்கவும்
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TamilReg;
