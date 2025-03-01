

function Statistical() {
  const handlePrintPage = () => {
    // Đường dẫn của trang bạn muốn mở và in
    const printPagePath = 'Statistical'; // Thay bằng route bạn muốn in
    
    // Tạo full URL từ base URL của trang và đường dẫn
    const fullURL = `${window.location.origin}${printPagePath}`;
    
    // Mở URL trong tab mới
    const printWindow = window.open(fullURL, '_blank');
    
    // Đợi tab mới load xong rồi gọi lệnh in
    if (printWindow) {
      printWindow.addEventListener('load', () => {
        printWindow.print();
      });
    }
  };

  return (
    <button
      onClick={handlePrintPage}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      Mở tab và in trang
    </button>
  );
}

export default Statistical;