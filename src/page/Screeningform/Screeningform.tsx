

const Screeningform = () => {
  return (
    <div className=" m-3">
      {/* <div className="flex justify-between bg-white p-3 m-3 h-[50px] rounded shadow-md font-bold font-semibold">
        <h1 className="">
          Nhập thông tin phiếu sàng lọc cấp cứu
        </h1>

      </div> */}


      <div className="bg-white p-6 max-w-5xl mx-auto shadow-md rounded-lg">
        <div className="text-center mb-6">
          {/* <h1 className="text-xl font-bold">SỞ Y TẾ TPHCM</h1>
          <h1 className="text-xl font-bold">BỆNH VIỆN NHI ĐỒNG 2</h1> */}
          <h2 className="text-2xl font-bold mt-4">
            PHIẾU NHẬN ĐỊNH - PHÂN LOẠI NGƯỜI BỆNH TẠI KHOA CẤP CỨU
          </h2>
          {/* <div className="flex justify-end mt-2">
            <div className="text-right">
              <p>MS: 39/BV2</p>
              <p>
                Số vào viện:{" "}
                <input
                  type="text"
                  className="border border-gray-300 px-2 py-1 rounded"
                />
              </p>
              <p>
                Mã người bệnh:{" "}
                <input
                  type="text"
                  className="border border-gray-300 px-2 py-1 rounded"
                />
              </p>
            </div>
          </div> */}
        </div>

        {/* A. THÔNG TIN NGƯỜI BỆNH */}
        <div className="mb-6">
          <h3 className="text-lg font-bold bg-gray-100 p-2 mb-4">
            A. THÔNG TIN NGƯỜI BỆNH
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-2 md:col-span-1">
              <label className="block mb-1">Họ và tên:</label>
              <input
                type="text"
                className="w-full border border-gray-300 px-3 py-2 rounded"
              />
            </div>
            <div className="col-span-2 md:col-span-1 flex items-center space-x-4">
              <div className="flex-1">
                <label className="block mb-1">Ngày sinh:</label>
                <input
                  type="date"
                  className="w-full border border-gray-300 px-3 py-2 rounded"
                />
              </div>
              <div className="flex items-center space-x-2 mt-6">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  className="h-4 w-4"
                />
                <label htmlFor="male">Nam</label>
              </div>
              <div className="flex items-center space-x-2 mt-6">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  className="h-4 w-4"
                />
                <label htmlFor="female">Nữ</label>
              </div>
            </div>
            <div>
              <label className="block mb-1">Phòng:</label>
              <input
                type="text"
                className="w-full border border-gray-300 px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block mb-1">Giường:</label>
              <input
                type="text"
                className="w-full border border-gray-300 px-3 py-2 rounded"
              />
            </div>
          </div>
        </div>

        {/* B. PHẦN NHẬN ĐỊNH -- PHÂN LOẠI */}
        <div className="mb-6">
          <h3 className="text-lg font-bold bg-gray-100 p-2 mb-4">
            B. PHẦN NHẬN ĐỊNH -- PHÂN LOẠI
          </h3>

          <div className="mb-4">
            <label className="block mb-1">1. Ngày đến khám:</label>
            <div className="flex space-x-2">
              <input
                type="time"
                className="border border-gray-300 px-3 py-2 rounded"
              />
              <span className="my-auto">giờ ngày</span>
              <input
                type="date"
                className="border border-gray-300 px-3 py-2 rounded"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-1">2. Lý do đến khám:</label>
            <input
              type="text"
              className="w-full border border-gray-300 px-3 py-2 rounded"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1">3. Kết quả đánh giá:</label>
            <p className="font-medium mb-2">Dấu hiệu sinh tồn, cơ thể:</p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-2 py-2">
                      Thời gian thực hiện
                    </th>
                    <th className="border border-gray-300 px-2 py-2">
                      Nhiệt độ (°C)
                    </th>
                    <th className="border border-gray-300 px-2 py-2">
                      Mạch (lần/phút)
                    </th>
                    <th className="border border-gray-300 px-2 py-2">
                      Huyết áp (mmHg)
                    </th>
                    <th className="border border-gray-300 px-2 py-2">
                      Nhịp thở (lần/phút)
                    </th>
                    <th className="border border-gray-300 px-2 py-2">
                      SpO₂ (%)
                    </th>
                    <th className="border border-gray-300 px-2 py-2">
                      Cân nặng (kg)
                    </th>
                    <th className="border border-gray-300 px-2 py-2">
                      GCS/AVPU*
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-2 py-2">
                      <div className="flex">
                        <span>Lần 1: </span>
                        <input
                          type="time"
                          className="w-20 border border-gray-300 ml-1"
                        />
                      </div>
                    </td>
                    <td className="border border-gray-300 px-2 py-2">
                      <input
                        type="text"
                        className="w-full border border-gray-300 px-1 py-1"
                      />
                    </td>
                    <td className="border border-gray-300 px-2 py-2">
                      <input
                        type="text"
                        className="w-full border border-gray-300 px-1 py-1"
                      />
                    </td>
                    <td className="border border-gray-300 px-2 py-2">
                      <input
                        type="text"
                        className="w-full border border-gray-300 px-1 py-1"
                      />
                    </td>
                    <td className="border border-gray-300 px-2 py-2">
                      <input
                        type="text"
                        className="w-full border border-gray-300 px-1 py-1"
                      />
                    </td>
                    <td className="border border-gray-300 px-2 py-2">
                      <input
                        type="text"
                        className="w-full border border-gray-300 px-1 py-1"
                      />
                    </td>
                    <td className="border border-gray-300 px-2 py-2">
                      <input
                        type="text"
                        className="w-full border border-gray-300 px-1 py-1"
                      />
                    </td>
                    <td className="border border-gray-300 px-2 py-2">
                      <input
                        type="text"
                        className="w-full border border-gray-300 px-1 py-1"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-2">
                      <div className="flex">
                        <span>Lần 2: </span>
                        <input
                          type="time"
                          className="w-20 border border-gray-300 ml-1"
                        />
                      </div>
                    </td>
                    <td className="border border-gray-300 px-2 py-2">
                      <input
                        type="text"
                        className="w-full border border-gray-300 px-1 py-1"
                      />
                    </td>
                    <td className="border border-gray-300 px-2 py-2">
                      <input
                        type="text"
                        className="w-full border border-gray-300 px-1 py-1"
                      />
                    </td>
                    <td className="border border-gray-300 px-2 py-2">
                      <input
                        type="text"
                        className="w-full border border-gray-300 px-1 py-1"
                      />
                    </td>
                    <td className="border border-gray-300 px-2 py-2">
                      <input
                        type="text"
                        className="w-full border border-gray-300 px-1 py-1"
                      />
                    </td>
                    <td className="border border-gray-300 px-2 py-2">
                      <input
                        type="text"
                        className="w-full border border-gray-300 px-1 py-1"
                      />
                    </td>
                    <td className="border border-gray-300 px-2 py-2">
                      <input
                        type="text"
                        className="w-full border border-gray-300 px-1 py-1"
                      />
                    </td>
                    <td className="border border-gray-300 px-2 py-2">
                      <input
                        type="text"
                        className="w-full border border-gray-300 px-1 py-1"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm mt-1">GCS ≤ 10 điểm: hôn mê</p>

            <div className="mt-4">
              <p className="mb-2">Toàn trạng:</p>
              <div className="flex space-x-6">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="good"
                    name="condition"
                    className="h-4 w-4 mr-2"
                  />
                  <label htmlFor="good">Tốt</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="medium"
                    name="condition"
                    className="h-4 w-4 mr-2"
                  />
                  <label htmlFor="medium">Trung bình</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="bad"
                    name="condition"
                    className="h-4 w-4 mr-2"
                  />
                  <label htmlFor="bad">Xấu</label>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <label className="block mb-1">
                Nồng độ đường huyết (nếu cần thiết):
              </label>
              <input
                type="text"
                className="border border-gray-300 px-3 py-2 rounded"
              />
            </div>

            <div className="mt-4">
              <label className="block mb-1">
                Hct - Dung tích hồng cầu (nếu cần):
              </label>
              <input
                type="text"
                className="border border-gray-300 px-3 py-2 rounded"
              />
            </div>

            <div className="mt-4">
              <p className="mb-2">Dị ứng:</p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="no-allergy"
                    name="allergy"
                    className="h-4 w-4 mr-2"
                  />
                  <label htmlFor="no-allergy">Không</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="has-allergy"
                    name="allergy"
                    className="h-4 w-4 mr-2"
                  />
                  <label htmlFor="has-allergy">Có:</label>
                  <input
                    type="text"
                    className="ml-2 border border-gray-300 px-3 py-1 rounded"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-bold mb-3">4. Phân loại:</h4>

            {/* Loại 1 */}
            <div className="mb-4 p-3 border border-gray-200 rounded">
              <div className="flex items-center mb-2">
                <input type="checkbox" id="type1" className="h-4 w-4 mr-2" />
                <label htmlFor="type1" className="font-medium">
                  I. LOẠI 1 (Đánh giá và điều trị cùng lúc và ngay lập tức)
                </label>
              </div>
              <div className="ml-6 grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cardiac-arrest"
                    className="h-4 w-4 mr-2"
                  />
                  <label htmlFor="cardiac-arrest">Ngưng tim, ngưng thở</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="shock" className="h-4 w-4 mr-2" />
                  <label htmlFor="shock">Sốc: Mạch=0, HA=0</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="seizure"
                    className="h-4 w-4 mr-2"
                  />
                  <label htmlFor="seizure">Đang co giật</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="coma" className="h-4 w-4 mr-2" />
                  <label htmlFor="coma">
                    Hôn mê (Không đáp ứng kích thích đau)
                  </label>
                </div>
                <div className="flex items-center col-span-2">
                  <input type="checkbox" id="other1" className="h-4 w-4 mr-2" />
                  <label htmlFor="other1">Khác:</label>
                  <input
                    type="text"
                    className="ml-2 border border-gray-300 px-3 py-1 rounded flex-1"
                  />
                </div>
              </div>
            </div>

            {/* Loại 2 */}
            <div className="mb-4 p-3 border border-gray-200 rounded">
              <div className="flex items-center mb-2">
                <input type="checkbox" id="type2" className="h-4 w-4 mr-2" />
                <label htmlFor="type2" className="font-medium">
                  II. LOẠI 2 (Đánh giá và điều trị trong 10 phút)
                </label>
              </div>
              <div className="ml-6 grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="respiratory-failure"
                    className="h-4 w-4 mr-2"
                  />
                  <label htmlFor="respiratory-failure">
                    Suy hô hấp: thở nhanh, thở chậm, cơn ngưng thở, co lõm ngực
                    nặng
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="shock-2"
                    className="h-4 w-4 mr-2"
                  />
                  <label htmlFor="shock-2">
                    Sốc: Mạch nhanh nhẹ, HA tụt, HA kẹp, tay chân lạnh, CRT kéo
                    dài
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="dehydration"
                    className="h-4 w-4 mr-2"
                  />
                  <label htmlFor="dehydration">Mất nước nặng</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="altered-consciousness"
                    className="h-4 w-4 mr-2"
                  />
                  <label htmlFor="altered-consciousness">
                    Rối loạn tri giác (GCS 8 -- 10 điểm)
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="burns" className="h-4 w-4 mr-2" />
                  <label htmlFor="burns">
                    Bỏng hô hấp, diện tích 20% hoặc diện tích bỏng 10% kèm bỏng
                    vùng đầu cổ
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="other2" className="h-4 w-4 mr-2" />
                  <label htmlFor="other2">Khác:</label>
                  <input
                    type="text"
                    className="ml-2 border border-gray-300 px-3 py-1 rounded flex-1"
                  />
                </div>
              </div>
            </div>

            {/* Loại 3 */}
            <div className="mb-4 p-3 border border-gray-200 rounded">
              <div className="flex items-center mb-2">
                <input type="checkbox" id="type3" className="h-4 w-4 mr-2" />
                <label htmlFor="type3" className="font-medium">
                  III. LOẠI 3 (Đánh giá và điều trị trong 30 phút)
                </label>
              </div>
              <div className="ml-6 grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="newborn"
                    className="h-4 w-4 mr-2"
                  />
                  <label htmlFor="newborn">Trẻ sơ sinh</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="high-fever"
                    className="h-4 w-4 mr-2"
                  />
                  <label htmlFor="high-fever">Sốt cao ≥ 39,5°C</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="post-seizure"
                    className="h-4 w-4 mr-2"
                  />
                  <label htmlFor="post-seizure">
                    Co giật (hiện đã qua cơn co giật)
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="severe-anemia"
                    className="h-4 w-4 mr-2"
                  />
                  <label htmlFor="severe-anemia">
                    Thiếu máu nặng (Hct 12%, Hb 4 g/dl)
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="has-dehydration"
                    className="h-4 w-4 mr-2"
                  />
                  <label htmlFor="has-dehydration">Có mất nước</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="other3" className="h-4 w-4 mr-2" />
                  <label htmlFor="other3">Khác:</label>
                  <input
                    type="text"
                    className="ml-2 border border-gray-300 px-3 py-1 rounded flex-1"
                  />
                </div>
              </div>
            </div>

            {/* Loại 4 */}
            <div className="mb-4 p-3 border border-gray-200 rounded">
              <div className="flex items-center mb-2">
                <input type="checkbox" id="type4" className="h-4 w-4 mr-2" />
                <label htmlFor="type4" className="font-medium">
                  IV. LOẠI 4 (Đánh giá và điều trị trong 45 phút)
                </label>
              </div>
              <div className="ml-6 grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="foreign-body"
                    className="h-4 w-4 mr-2"
                  />
                  <label htmlFor="foreign-body">
                    Hít dị vật vào đường hô hấp, không suy hô hấp
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="dysphagia"
                    className="h-4 w-4 mr-2"
                  />
                  <label htmlFor="dysphagia">Khó nuốt, không suy hô hấp</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="minor-head-trauma"
                    className="h-4 w-4 mr-2"
                  />
                  <label htmlFor="minor-head-trauma">
                    Chấn thương đầu nhẹ, không mất ý thức
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="chest-trauma"
                    className="h-4 w-4 mr-2"
                  />
                  <label htmlFor="chest-trauma">
                    Chấn thương ngực mà không đau xương sườn hoặc không suy hô
                    hấp
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="minor-limb-trauma"
                    className="h-4 w-4 mr-2"
                  />
                  <label htmlFor="minor-limb-trauma">
                    Chấn thương nhẹ ở chi, gãy xương, vết rách không phức tạp
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="abdominal-pain"
                    className="h-4 w-4 mr-2"
                  />
                  <label htmlFor="abdominal-pain">
                    Đau bụng không đặc hiệu
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="vomit-diarrhea"
                    className="h-4 w-4 mr-2"
                  />
                  <label htmlFor="vomit-diarrhea">
                    Nôn hoặc tiêu chảy nhưng không mất nước
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="other4" className="h-4 w-4 mr-2" />
                  <label htmlFor="other4">Khác:</label>
                  <input
                    type="text"
                    className="ml-2 border border-gray-300 px-3 py-1 rounded flex-1"
                  />
                </div>
              </div>
            </div>

            {/* Loại 5 */}
            <div className="mb-4 p-3 border border-gray-200 rounded">
              <div className="flex items-center mb-2">
                <input type="checkbox" id="type5" className="h-4 w-4 mr-2" />
                <label htmlFor="type5" className="font-medium">
                  V. LOẠI 5 (Đánh giá và điều trị trong 60 phút)
                </label>
              </div>
              <div className="ml-6 grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="mild-pain"
                    className="h-4 w-4 mr-2"
                  />
                  <label htmlFor="mild-pain">
                    Đau rất nhẹ, không có đặc điểm nguy cơ cao
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="mild-symptoms-low-risk"
                    className="h-4 w-4 mr-2"
                  />
                  <label htmlFor="mild-symptoms-low-risk">
                    Triệu chứng nhẹ của bệnh có nguy cơ thấp
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="mild-symptoms-stable"
                    className="h-4 w-4 mr-2"
                  />
                  <label htmlFor="mild-symptoms-stable">
                    Triệu chứng nhẹ của bệnh ổn định hiện tại
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="minor-wounds"
                    className="h-4 w-4 mr-2"
                  />
                  <label htmlFor="minor-wounds">
                    Các vết thương nhỏ, trầy xước nhỏ, vết rách nhỏ (không cần
                    khâu)
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="other5" className="h-4 w-4 mr-2" />
                  <label htmlFor="other5">Khác:</label>
                  <input
                    type="text"
                    className="ml-2 border border-gray-300 px-3 py-1 rounded flex-1"
                  />
                </div>
              </div>
            </div>

            {/* Đánh giá lần 2 */}
            <div className="mb-4 p-3 border border-gray-200 rounded">
              <h4 className="font-medium mb-2">VI. ĐÁNH GIÁ LẦN 2 (nếu có)</h4>
              <div className="flex space-x-6 flex-wrap">
                <div className="flex items-center m-1">
                  <input
                    type="radio"
                    id="second-type1"
                    name="second-evaluation"
                    className="h-4 w-4 mr-2"
                  />
                  <label htmlFor="second-type1">Loại 1</label>
                </div>
                <div className="flex items-center m-1">
                  <input
                    type="radio"
                    id="second-type2"
                    name="second-evaluation"
                    className="h-4 w-4 mr-2"
                  />
                  <label htmlFor="second-type2">Loại 2</label>
                </div>
                <div className="flex items-center m-1">
                  <input
                    type="radio"
                    id="second-type3"
                    name="second-evaluation"
                    className="h-4 w-4 mr-2"
                  />
                  <label htmlFor="second-type3">Loại 3</label>
                </div>
                <div className="flex items-center m-1">
                  <input
                    type="radio"
                    id="second-type4"
                    name="second-evaluation"
                    className="h-4 w-4 mr-2"
                  />
                  <label htmlFor="second-type4">Loại 4</label>
                </div>
                <div className="flex items-center m-1">
                  <input
                    type="radio"
                    id="second-type5"
                    name="second-evaluation"
                    className="h-4 w-4 mr-2"
                  />
                  <label htmlFor="second-type5">Loại 5</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* C. CHỈ ĐỊNH */}
        <div className="mb-6">
          <h3 className="text-lg font-bold bg-gray-100 p-2 mb-4">
            C. CHỈ ĐỊNH
          </h3>

          {/* Lần 1 */}
          <div className="mb-4">
            <h4 className="font-medium mb-2">* Lần 1</h4>
            <p className="mb-2">Người bệnh được chuyển đến:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ml-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="resuscitation"
                  className="h-4 w-4 mr-2"
                />
                <label htmlFor="resuscitation">Phòng hồi sức</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="emergency"
                  className="h-4 w-4 mr-2"
                />
                <label htmlFor="emergency">Phòng cấp cứu</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="examination"
                  className="h-4 w-4 mr-2"
                />
                <label htmlFor="examination">Phòng khám</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="monitor" className="h-4 w-4 mr-2" />
                <label htmlFor="monitor">
                  Theo dõi, đánh giá lại lần 2 sau:
                </label>
                <input
                  type="text"
                  className="w-16 ml-2 border border-gray-300 px-2 py-1 rounded"
                />{" "}
                phút
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="other-direction1"
                  className="h-4 w-4 mr-2"
                />
                <label htmlFor="other-direction1">Khác:</label>
                <input
                  type="text"
                  className="ml-2 border border-gray-300 px-3 py-1 rounded flex-1"
                />
              </div>
            </div>
          </div>
          {/* Lần 2 */}
          <div className="mb-4">
            <h4 className="font-medium mb-2">* Lần 2 (nếu có)</h4>
            <p className="mb-2">Người bệnh được chuyển đến:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ml-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="resuscitation"
                  className="h-4 w-4 mr-2"
                />
                <label htmlFor="resuscitation">Phòng hồi sức</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="emergency"
                  className="h-4 w-4 mr-2"
                />
                <label htmlFor="emergency">Phòng cấp cứu</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="examination"
                  className="h-4 w-4 mr-2"
                />
                <label htmlFor="examination">Phòng khám</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="other-direction1"
                  className="h-4 w-4 mr-2"
                />
                <label htmlFor="other-direction1">Khác:</label>
                <input
                  type="text"
                  className="ml-2 border border-gray-300 px-3 py-1 rounded flex-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="barScreenform"  className="">
        <button className="w-[200px] h-[60px] bg-blue-700 text-white m-3 rounded font-[800] font-bold"><h1>(F11)LƯU PHIẾU</h1></button>
      </div>
    </div>
  );
};

export default Screeningform;
