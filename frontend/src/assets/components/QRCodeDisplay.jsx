import QRCode from "react-qr-code";

const QRCodeDisplay = ({ qrData }) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow w-fit">
      <h3 className="text-lg font-semibold mb-2">🎟️ Your Bus Pass QR</h3>
      <QRCode value={qrData} />
    </div>
  );
};

export default QRCodeDisplay;
