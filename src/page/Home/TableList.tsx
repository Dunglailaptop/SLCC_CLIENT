
import ModalPopUp from "../../components/Modal/ModalPopUp";
import PrintReport from "../Report/PrintReport";
import BarSreach from "./BarSreach";
import Paginationbar from "./Paginationbar";



const array = [1, 2, 3, 4,5,6,7,8,9];

const TableList = () => {
  return (
    <div className="overflow-auto rounded-lg drop-shadow-md">
      <BarSreach></BarSreach>
      <table className="w-full place-content-center">
        <thead className="bg-gray-50 border-b-2 border-gray-200">
          <th className="p-3 text-sm tracking-wide text-left">STT</th>
          <th className="p-3 text-sm tracking-wide text-left">Họ và tên</th>
          <th className="p-3 text-sm tracking-wide text-left">Ngày sinh</th>
          <th className="p-3 text-sm tracking-wide text-left">Giói tính</th>
          <th className="p-3 text-sm tracking-wide text-left">Lý do khám</th>
          <th className="p-3 text-sm tracking-wide text-left">Ngày khám</th>
          <th className="p-3 text-sm tracking-wide text-left">Phòng-Giường</th>
          <th className="p-3 text-sm tracking-wide text-left">Thao tác</th>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {array.map((item) => (
            <tr className="bg-white hover:bg-gray-200">
              <td className="w-24 p-3 text-sm text-gray-700  whitespace-nowrap">
                 {item}
              </td>
              <td className="w-24 p-3 text-sm text-gray-700  whitespace-nowrap">
                Nguyễn Xuân Tiến Dũng
              </td>
              <td className=" w-24 p-3 text-sm text-gray-700  whitespace-nowrap">
                27/09/2001
              </td>
              <td className="w-24  p-3 text-sm text-gray-700 whitespace-nowrap">
                Nam
              </td>
              <td className="w-24 p-3 text-sm text-gray-700  whitespace-nowrap">
                27/02/2025
              </td>
              <td className="w-24 p-3 text-sm text-gray-700  whitespace-nowrap">
                \Không có
              </td>
              <td className="w-24 p-3 text-sm text-gray-700 whitespace-nowrap">
                Phòng 300 giường 23
              </td>
              <td className="w-24 p-3 text-sm text-gray-700 whitespace-nowrap">
                
              <ModalPopUp></ModalPopUp>
                {/* <button className="bg-blue-500 text-white p-3 rounded">Xem chi tiết</button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="my-5">
        <Paginationbar></Paginationbar>
      </div>
    </div>
  );
};

export default TableList;
