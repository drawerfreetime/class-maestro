import { put } from '@vercel/blob';

export default async function handler(request, response) {
  // CORS 에러 방지를 위한 헤더 설정 (Vercel 내부에서 처리되므로 안전장치)
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }

  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // 프런트엔드에서 보낸 파일 데이터 받기
    const { filename, file } = request.body;
    
    // Vercel Blob 저장소로 파일 업로드 진행
    const blob = await put(filename, file, {
      access: 'public', // 학생들이 오디오 링크에 접근하여 들을 수 있도록 공개 설정
    });

    // 업로드가 완료되면 Vercel 저장소에 저장된 실제 오디오 주소(URL)를 리턴
    return response.status(200).json(blob);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
}
