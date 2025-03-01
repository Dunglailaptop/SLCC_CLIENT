import { useNavigate } from "react-router-dom";
import  logo_login  from "../../assets/logo_login.png";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Xử lý logic submit ở đây nếu cần

    // Chuyển hướng sang trang Menu
    navigate("/");
  };


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md w-full max-w-5xl overflow-hidden">
        {/* Left side - Login Form */}
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Đăng nhập</h1>
          <p className="text-gray-500 mb-8">Đăng nhập tài khoản của bạn.</p>
          
          <form>
            <div className="mb-4">
              <div className="flex items-center border rounded bg-gray-100">
                <div className="px-3 py-2 bg-gray-200 border-r">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input 
                  type="text" 
                  placeholder="Username" 
                  className="w-full px-4 py-2 bg-gray-100 focus:outline-none"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center border rounded bg-gray-100">
                <div className="px-3 py-2 bg-gray-200 border-r">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input 
                  type="password" 
                  placeholder="Password" 
                  className="w-full px-4 py-2 bg-gray-100 focus:outline-none"
                />
              </div>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14" />
              </svg>
              Đăng nhập
            </button>
          </form>
        </div>
        
        {/* Right side - Instructions */}
        <div className="w-full md:w-1/2 bg-green-500 p-8 text-white">
          <h2 className="text-3xl font-bold mb-6">Quản lý sàng lọc cấp cứu</h2>
        
          <p className="mb-6">Bệnh viện nhi đồng 2</p>
          {/* <p className="mb-2">Ví dụ: bạn tên Nguyễn Văn Quyết Tâm, tên tài khoản sẽ là: <span className="font-bold">tam.nguyenvq</span></p>
          <p className="mb-2">Bạn tên là: Trần Minh, tên tài khoản sẽ là: <span className="font-bold">minh.tran</span></p>
          <p className="mb-4">Cú pháp chung: <span className="font-bold">ho.ten + ABC</span> (A B C là viết tắt chữ cái đầu của chữ lót).</p>
          
          <p className="mb-6">Liên hệ bộ phận phần mềm, số EXT: <span className="font-bold">163, 185</span>.</p> */}
          
          <div className="bg-white  rounded-lg p-4 text-center">
            <div className="flex justify-center mb-2">
              <img src={logo_login} alt="Logo" className="h-50 w-100" />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;