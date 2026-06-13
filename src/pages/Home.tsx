import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



export default function Home() {
  const navigate = useNavigate();
  const [studentName, setStudentName] = useState<string>('');

  const handleEnterSandbox = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim()) return alert('이름을 입력해주세요!');

    // 학생 화면으로 이름 데이터 넘기며 이동
    navigate('/student', { state: { studentName } });
  };

  return (
    <div className="w-full h-screen bg-[#F9FAFB] flex flex-col justify-center items-center p-6 font-sans text-[#1F2937]">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl border border-[#D1D5DB] shadow-sm">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-[#1F2937]">Classroom Maestro</h1>
          <p className="text-sm text-gray-500 mt-2">교실 디지털 오케스트라 지휘 게임</p>
        </div>

        <form onSubmit={handleEnterSandbox} className="space-y-6">
          {/* 이름 입력 */}
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              이름 입력
            </label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="이름을 입력하세요 (예: 홍길동)"
              className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#D1D5DB] rounded-xl text-base focus:outline-none focus:border-[#1F2937] transition-all"
            />
          </div>


          {/* 입장 버튼 */}
          <button
            type="submit"
            className="w-full py-4 bg-[#1F2937] text-white font-bold rounded-xl shadow-sm hover:bg-gray-800 transition-all text-base"
          >
            오케스트라 입장하기 ➔
          </button>
        </form>

        {/* 교사용 대시보드 빠른 링크 */}
        <div className="mt-8 pt-4 border-t border-gray-100 text-center">
          <button
            onClick={() => navigate('/teacher')}
            className="text-xs text-gray-400 hover:text-[#1F2937] underline transition-all"
          >
            교사(지휘자) 통제실 대시보드 바로가기
          </button>
        </div>
      </div>
    </div>
  );
}
