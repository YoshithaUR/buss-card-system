const ProfileCard = ({ user }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
      <h2 className="text-xl font-bold text-gray-800 mb-2">👤 {user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>NIC: {user.nic}</p>
    </div>
  );
};

export default ProfileCard;
