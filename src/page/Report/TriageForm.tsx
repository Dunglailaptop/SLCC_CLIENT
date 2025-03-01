import React from 'react';
import logobv from '../../assets/logo_login.png'
// Định nghĩa kiểu dữ liệu cho phiếu nhận định
interface PatientData {
  hospital: string;
  patientName: string;
  dob: string;
  gender: 'Nam' | 'Nữ';
  room: string;
  bed: string;
  visitDate: string;
  visitTime: string;
  symptoms: string;
  triageLevel: string;
  doctor: string;
  patientId?: string;
  hospitalId?: string;
  temperature?: string;
  pulse?: string;
  bloodPressure?: string;
  respiratoryRate?: string;
  spO2?: string;
  weight?: string;
  consciousness?: string;
  generalCondition?: 'Tốt' | 'Trung bình' | 'Xấu';
  glucoseLevel?: string;
  hematocrit?: string;
  allergies?: { has: boolean; details?: string };
}

const TriageForm: React.FC<{ data: PatientData }> = ({ data }) => {
  return (
    <div className="p-4 max-w-4xl mx-auto bg-white">
      <div className="border-2 border-black">
        <table className="w-full border-collapse">
          <tbody>
            <tr>
              <td className="border-r-2 border-b-2 border-black p-2 w-1/6">
                <div className="w-100 h-20 flex items-center justify-center">
                  <span className="text-xs"><img src={logobv}></img></span>
                </div>
              </td>
              <td className="border-r-2 border-b-2 border-black p-2 w-1/2 text-center">
                <p className="font-bold">PHIẾU NHẬN ĐỊNH - PHÂN LOẠI NGƯỜI BỆNH TẠI KHOA CẤP CỨU</p>
              </td>

            </tr>
          </tbody>
        </table>
      </div>
      {/* Tiêu đề */}
      <div className="">
        <table className="w-full border-collapse">
          <tbody>
            <tr>
              <td className="p-2 w-1/3">
                <p className="font-bold ml-[20px]">SỞ Y TẾ TPHCM</p>
                <p className="font-bold">BỆNH VIỆN NHI ĐỒNG 2</p>
              </td>
              <td className=" p-2 w-1/3 text-center">
                <p className="font-bold">PHIẾU NHẬN ĐỊNH - PHÂN LOẠI NGƯỜI BỆNH TẠI KHOA CẤP CỨU</p>
              </td>
              <td className=" p-2 w-1/3">
                <p>MS: 39/BV2</p>
                <p>Số vào viện: .................</p>
                <p>Mã người bệnh: ................</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Logo */}
      <div className="flex mt-4 items-center">
        <div className="hidden w-24 h-20 bg-gray-200 flex items-center justify-center">
          <span className="text-xs text-gray-500">[Logo]</span>
        </div>
        <h2 className="ml-4 font-bold text-lg">A. THÔNG TIN NGƯỜI BỆNH</h2>
      </div>

      {/* Thông tin bệnh nhân */}
      <div className="mt-2 ml-8">
        <p>Họ và tên: {data.patientName || "....................................."}</p>
        <div className="flex items-center mt-1">
          <p>Ngày sinh: {data.dob || "......................"}</p>
          <div className="flex items-center ml-4">
            <div className={`w-4 h-4 border border-black ${data.gender === 'Nam' ? 'bg-black' : ''}`}></div>
            <span className="ml-1">Nam</span>
            <div className={`w-4 h-4 border border-black ml-4 ${data.gender === 'Nữ' ? 'bg-black' : ''}`}></div>
            <span className="ml-1">Nữ</span>
          </div>
        </div>
        <div className="flex mt-1">
          <p>Phòng: {data.room || "................................."}</p>
          <p className="ml-8">Giường: {data.bed || "................................."}</p>
        </div>
      </div>

      {/* Phần nhận định - phân loại */}
      <h2 className="font-bold text-lg mt-6">B. PHẦN NHẬN ĐỊNH -- PHÂN LOẠI</h2>

      {/* Ngày đến khám */}
      <div className="mt-2">
        <p className="font-bold">1. Ngày đến khám: {data.visitTime || "............"} giờ ngày {data.visitDate || "............"}</p>
      </div>

      {/* Lý do đến khám */}
      <div className="mt-2">
        <p className="font-bold">2. Lý do đến khám: {data.symptoms || "............................................................................"}</p>
      </div>

      {/* Kết quả đánh giá */}
      <div className="mt-4">
        <p className="font-bold">3. Kết quả đánh giá:</p>
        <p className="font-bold ml-4 mt-1">Dấu hiệu sinh tồn, cơ thể:</p>

        {/* Bảng đánh giá */}
        <table className="w-full border border-black mt-2">
          <thead>
            <tr>
              <th className="border border-black p-2">Thời gian thực hiện</th>
              <th className="border border-black p-2">Nhiệt độ (°C)</th>
              <th className="border border-black p-2">Mạch (lần/phút)</th>
              <th className="border border-black p-2">Huyết áp (mmHg)</th>
              <th className="border border-black p-2">Nhịp thở (lần/phút)</th>
              <th className="border border-black p-2">SpO₂ (%)</th>
              <th className="border border-black p-2">Cân nặng (kg)</th>
              <th className="border border-black p-2">GCS/AVPU*</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black p-2">Lần 1: ... giờ ... phút</td>
              <td className="border border-black p-2">{data.temperature || ""}</td>
              <td className="border border-black p-2">{data.pulse || ""}</td>
              <td className="border border-black p-2">{data.bloodPressure || ""}</td>
              <td className="border border-black p-2">{data.respiratoryRate || ""}</td>
              <td className="border border-black p-2">{data.spO2 || ""}</td>
              <td className="border border-black p-2">{data.weight || ""}</td>
              <td className="border border-black p-2">{data.consciousness || ""}</td>
            </tr>
            <tr>
              <td className="border border-black p-2">Lần 2: ... giờ ... phút (nếu có)</td>
              <td className="border border-black p-2"></td>
              <td className="border border-black p-2"></td>
              <td className="border border-black p-2"></td>
              <td className="border border-black p-2"></td>
              <td className="border border-black p-2"></td>
              <td className="border border-black p-2"></td>
              <td className="border border-black p-2"></td>
            </tr>
          </tbody>
        </table>

        {/* Ghi chú GCS */}
        <p className="mt-2 ml-4">GCS ≤ 10 điểm: hôn mê</p>

        {/* Toàn trạng */}
        <div className="flex items-center mt-2 ml-4">
          <p>Toàn trạng:</p>
          <div className="flex items-center ml-2">
            <div className={`w-4 h-4 border border-black ${data.generalCondition === 'Tốt' ? 'bg-black' : ''}`}></div>
            <span className="ml-1">Tốt</span>
            <div className={`w-4 h-4 border border-black ml-4 ${data.generalCondition === 'Trung bình' ? 'bg-black' : ''}`}></div>
            <span className="ml-1">Trung bình</span>
            <div className={`w-4 h-4 border border-black ml-4 ${data.generalCondition === 'Xấu' ? 'bg-black' : ''}`}></div>
            <span className="ml-1">Xấu</span>
          </div>
        </div>

        {/* Đường huyết và HCT */}
        <p className="mt-2 ml-4">Nồng độ đường huyết: {data.glucoseLevel || "..........................."} (đo đường huyết nếu cần thiết)</p>
        <p className="mt-1 ml-4">Hct - Dung tích hồng cầu (nếu cần): {data.hematocrit || "..........................."}</p>

        {/* Dị ứng */}
        <div className="flex items-center mt-2 ml-4">
          <p>Dị ứng:</p>
          <div className="flex items-center ml-2">
            <div className={`w-4 h-4 border border-black ${!data.allergies?.has ? 'bg-black' : ''}`}></div>
            <span className="ml-1">Không</span>
            <div className={`w-4 h-4 border border-black ml-4 ${data.allergies?.has ? 'bg-black' : ''}`}></div>
            <span className="ml-1">Có: {data.allergies?.details || "..........................."}</span>
          </div>
        </div>
      </div>

      {/* Phân loại */}
      <div className="mt-6">
        <p className="font-bold">4. Phân loại:</p>

        {/* Loại 1 */}
        <div className="mt-2">
          <p className="font-bold">I. LOẠI 1 (Đánh giá và điều trị cùng lúc và ngay lập tức): Không ☐ Có ☐. Nếu có:</p>
          <table className="w-full border border-black mt-1">
            <tbody>
              <tr>
                <td className="border border-black p-2">Ngưng tim, ngưng thở</td>
              </tr>
              <tr>
                <td className="border border-black p-2">Sốc: Mạch=0, HA=0</td>
              </tr>
              <tr>
                <td className="border border-black p-2">Đang co giật</td>
              </tr>
              <tr>
                <td className="border border-black p-2">Hôn mê (Không đáp ứng kích thích đau)<br />Khác: ...........</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Loại 2 */}
        <div className="mt-4">
          <p className="font-bold">II. LOẠI 2 (Đánh giá và điều trị trong 10 phút): Không ☐ Có ☐. Nếu có:</p>
          <table className="w-full border border-black mt-1">
            <tbody>
              <tr>
                <td className="border border-black p-2 w-4/5">Suy hô hấp: thở nhanh, thở chậm, cơn ngưng thở, co lõm ngực nặng<br />Sốc: Mạch nhanh nhẹ, HA tụt, HA kẹp, tay chân lạnh, CRT kéo dài</td>
                <td className="border border-black p-2"></td>
              </tr>
              <tr>
                <td className="border border-black p-2">Mất nước nặng</td>
                <td className="border border-black p-2"></td>
              </tr>
              <tr>
                <td className="border border-black p-2">Rối loạn tri giác (GCS 8 -- 10 điểm)</td>
                <td className="border border-black p-2"></td>
              </tr>
              <tr>
                <td className="border border-black p-2">Bỏng hô hấp, diện tích  20% hoặc diện tích bỏng  10% kèm bỏng vùng đầu cổ</td>
                <td className="border border-black p-2"></td>
              </tr>
              <tr>
                <td className="border border-black p-2">Khác: .............................</td>
                <td className="border border-black p-2"></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Loại 3 */}
        <div className="mt-4">
          <p className="font-bold">III. LOẠI 3 (Đánh giá và điều trị trong 30 phút): Không ☐ Có ☐. Nếu có:</p>
          <table className="w-full border border-black mt-1">
            <tbody>
              <tr>
                <td className="border border-black p-2">Trẻ sơ sinh<br />Sốt cao ≥ 39,5°C</td>
              </tr>
              <tr>
                <td className="border border-black p-2">Co giật (hiện đã qua cơn co giật)</td>
              </tr>
              <tr>
                <td className="border border-black p-2">Thiếu máu nặng (Hct  12%, Hb  4 g/dl)</td>
              </tr>
              <tr>
                <td className="border border-black p-2">Có mất nước</td>
              </tr>
              <tr>
                <td className="border border-black p-2">Khác: ....................................</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Loại 4 */}
        <div className="mt-4">
          <p className="font-bold">IV. LOẠI 4 (Đánh giá và điều trị trong 45 phút): Không ☐ Có ☐. Nếu có:</p>
          <table className="w-full border border-black mt-1">
            <tbody>
              <tr>
                <td className="border border-black p-2">Hít dị vật vào đường hô hấp, không suy hô hấp</td>
                <td className="border border-black p-2"></td>
              </tr>
              <tr>
                <td className="border border-black p-2">Khó nuốt, không suy hô hấp</td>
                <td className="border border-black p-2"></td>
              </tr>
              <tr>
                <td className="border border-black p-2">Chấn thương đầu nhẹ, không mất ý thức</td>
                <td className="border border-black p-2"></td>
              </tr>
              <tr>
                <td className="border border-black p-2">Chấn thương ngực mà không đau xương sườn hoặc không suy hô hấp</td>
                <td className="border border-black p-2"></td>
              </tr>
              <tr>
                <td className="border border-black p-2">Chấn thương nhẹ ở chi, gãy xương, vết rách không phức tạp</td>
                <td className="border border-black p-2"></td>
              </tr>
              <tr>
                <td className="border border-black p-2">Đau bụng không đặc hiệu</td>
                <td className="border border-black p-2"></td>
              </tr>
              <tr>
                <td className="border border-black p-2">Nôn hoặc tiêu chảy nhưng không mất nước</td>
                <td className="border border-black p-2"></td>
              </tr>
              <tr>
                <td className="border border-black p-2">Khác: ...................................</td>
                <td className="border border-black p-2"></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Loại 5 */}
        <div className="mt-4">
          <p className="font-bold">V. LOẠI 5 (Đánh giá và điều trị trong 60 phút): Không ☐ Có ☐. Nếu có:</p>
          <table className="w-full border border-black mt-1">
            <tbody>
              <tr>
                <td className="border border-black p-2">Đau rất nhẹ, không có đặc điểm nguy cơ cao</td>
              </tr>
              <tr>
                <td className="border border-black p-2">Triệu chứng nhẹ của bệnh có nguy cơ thấp</td>
              </tr>
              <tr>
                <td className="border border-black p-2">Triệu chứng nhẹ của bệnh ổn định hiện tại</td>
              </tr>
              <tr>
                <td className="border border-black p-2">Các vết thương nhỏ, trầy xước nhỏ, vết rách nhỏ (không cần khâu)</td>
              </tr>
              <tr>
                <td className="border border-black p-2">Khác: .............................................</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Đánh giá lần 2 */}
        <div className="mt-4">
          <p className="font-bold">VI. ĐÁNH GIÁ LẦN 2 (nếu có)</p>
          <table className="w-full border border-black mt-1">
            <tbody>
              <tr>
                <td className="border border-black p-2">Loại 1 ☐ Loại 2 ☐ Loại 3 ☐ Loại 4 ☐ Loại 5 ☐</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Chỉ định */}
      <div className="mt-6">
        <p className="font-bold">C. CHỈ ĐỊNH</p>
        <table className="w-full border border-black mt-1">
          <tbody>
            <tr>
              <td className="border border-black p-2 w-1/2">
                <p className="font-bold">* Lần 1</p>
                <p className="font-bold mt-2">Người bệnh được chuyển đến:</p>
                <div className="mt-1">
                  <div className="flex items-center">
                    <div className="w-4 h-4 border border-black"></div>
                    <span className="ml-1">Phòng hồi sức</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <div className="w-4 h-4 border border-black"></div>
                    <span className="ml-1">Phòng cấp cứu</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <div className="w-4 h-4 border border-black"></div>
                    <span className="ml-1">Phòng khám</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <span>Theo dõi, đánh giá lại lần 2 sau: ........ phút</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <span>Khác: ..........................................</span>
                  </div>
                </div>
              </td>
              <td className="border border-black p-2 w-1/2">
                <p className="font-bold">* Lần 2 (nếu có):</p>
                <p className="font-bold mt-2">Người bệnh được chuyển đến:</p>
                <div className="mt-1">
                  <div className="flex items-center">
                    <div className="w-4 h-4 border border-black"></div>
                    <span className="ml-1">Phòng hồi sức</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <div className="w-4 h-4 border border-black"></div>
                    <span className="ml-1">Phòng cấp cứu</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <div className="w-4 h-4 border border-black"></div>
                    <span className="ml-1">Phòng khám</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <span>Khác: ..........................................</span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Phần ký tên */}
        <table className="w-full mt-4">
          <tbody>
            <tr>
              <td className="w-1/2 text-center">
                <p className="font-bold">Bác sĩ sàng lọc</p>
                <p>(Ký và ghi rõ họ tên)</p>
                <div className="h-20"></div>
                <p>{data.doctor || ""}</p>
              </td>
              <td className="w-1/2 text-center">
                <p className="font-bold">Bác sĩ sàng lọc</p>
                <p>(Ký và ghi rõ họ tên)</p>
                <div className="h-20"></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TriageForm;