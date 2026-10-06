import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json({ limit: '10mb' }));

const PORT = process.env.PORT || 3000;

// Initialize Google Gen AI
const apiKey = process.env.GEMINI_API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// API endpoint for ECO AI Chemistry Tutor
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    if (!apiKey) {
      return res.json({
        reply: "Xin chào! Mình là ECO AI – gia sư Hóa học KHTN THCS của bạn. Hiện tại chưa có khóa GEMINI_API_KEY trong .env.local, nhưng bạn vẫn có thể sử dụng tất cả các chức năng: Bảng tuần hoàn, Thí nghiệm ống nghiệm ảo, Cân bằng phương trình & Tính mol, Dãy hoạt động kim loại và Đo pH camera trên ứng dụng nhé!"
      });
    }

    const systemInstruction = `Bạn là ECO AI - một trợ lý gia sư Hóa học và STEM thông thái, truyền cảm hứng và thân thiện dành riêng cho học sinh Trung học Cơ sở (lớp 6, 7, 8, 9 theo Chương trình Giáo dục phổ thông 2018 môn Khoa học tự nhiên - Hóa học) và quý thầy cô giáo.
Nhiệm vụ của bạn:
1. Giải thích cặn kẽ và sinh động các khái niệm Hóa học THCS:
   - Nguyên tử, nguyên tố hóa học, bảng tuần hoàn, mô hình Rutherford - Bohr, liên kết hóa học (KHTN 7).
   - Phản ứng hóa học, bảo toàn khối lượng, cân bằng phương trình hóa học, mol, tỉ khối, nồng độ dung dịch C% và CM (KHTN 8).
   - Các hợp chất vô cơ: Acid, Base, Oxide, Muối, thang đo pH từ 0-14 và các chất chỉ thị màu (quỳ tím, phenolphthalein, bắp cải tím...) (KHTN 8).
   - Kim loại, dãy hoạt động hóa học, bảng tính tan, phi kim, và hợp chất hữu cơ (hydrocarbon, rượu ethylic, axit axetic, tinh bột, protein...) (KHTN 9).
2. Quy tắc phản hồi:
   - Sử dụng tiếng Việt chuẩn mực, thân thiện, dễ hiểu, luôn động viên học sinh.
   - Sử dụng danh pháp IUPAC kết hợp tên gọi tiếng Việt truyền thống (ví dụ: iron (sắt), copper (đồng), hydrochloric acid (axit clohidric)...).
   - Đưa ra ví dụ thực tế gần gũi trong đời sống hàng ngày (nước chanh, giấm ăn, xà phòng, baking soda, rỉ sét sắt, pháo hoa...).
   - Hướng dẫn phương pháp tư duy và các mẹo nhớ nhanh (như câu vè dãy kim loại: "Khi Nào Cần May Áo Giáp Sắt...").
   - Nhắc nhở quy tắc an toàn phòng thí nghiệm khi thực hiện các phản ứng tỏa nhiệt hoặc sinh khí.`;

    // Format chat history if any
    const contents = [];
    if (history && Array.isArray(history)) {
      for (const h of history) {
        contents.push({
          role: h.role === 'user' ? 'user' : 'model',
          parts: [{ text: h.text }]
        });
      }
    }
    contents.push({ role: 'user', parts: [{ text: message }] });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    const reply = response.text || "Xin lỗi, mình chưa thể đưa ra câu trả lời lúc này. Bạn hãy thử hỏi lại nhé!";
    res.json({ reply });
  } catch (error: any) {
    console.error('Gemini API Error:', error);
    res.status(500).json({ 
      error: 'Failed to generate AI response', 
      details: error.message || String(error),
      reply: "ECO AI đang bận một chút. Bạn có thể kiểm tra lại câu hỏi hoặc thử lại sau nhé!"
    });
  }
});

// Vite integration in development
if (process.env.NODE_ENV !== 'production') {
  const { createServer: createViteServer } = await import('vite');
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa'
  });
  app.use(vite.middlewares);
} else {
  const distPath = path.resolve(__dirname, 'dist');
  app.use(express.static(distPath));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(distPath, 'index.html'));
  });
}

app.listen(Number(PORT), '0.0.0.0', () => {
  console.log(`ECO pH server running on port ${PORT}`);
});
