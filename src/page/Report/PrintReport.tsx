import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import TriageForm from "./TriageForm";

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

// Dữ liệu mẫu
const samplePatientData: PatientData = {
  hospital: "BỆNH VIỆN NHI ĐỒNG 2",
  patientName: "Nguyễn Văn A",
  dob: "12/05/2015",
  gender: "Nam",
  room: "Phòng 101",
  bed: "Giường 12",
  visitDate: "27/02/2025",
  visitTime: "14:30",
  symptoms: "Sốt cao, khó thở",
  triageLevel: "Loại 2 - Điều trị trong 10 phút",
  doctor: "BS. Trần Văn B",
  temperature: "38.5",
  pulse: "110",
  bloodPressure: "90/60",
  respiratoryRate: "28",
  spO2: "95",
  weight: "25",
  consciousness: "15",
  generalCondition: "Trung bình",
  allergies: { has: false }
};

const PrintReport: React.FC = () => {
  const reportRef = useRef<HTMLDivElement>(null);

  const print = useReactToPrint({
    documentTitle: "Phieu-Nhan-Dinh",
    contentRef: reportRef
  });
  const handlePrint = () => {
    if (print) print(); // 👈 Gọi `print()` khi bấm nút
  };


  return (
    <div className="flex flex-col items-center p-6">
      <div ref={reportRef} className="w-full">
        <TriageForm data={samplePatientData} />
      </div>
      <button
        onClick={handlePrint}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        In phiếu
      </button>
    </div>
  );
};

export default PrintReport;