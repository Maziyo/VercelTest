import fs from "fs";
import path from "path";

export default async function handler(req, res) {


  // POST 요청 처리
  if (req.method === "POST") {
    const filePath = path.resolve("src/utils/dataSave.json"); // JSON 파일 위치
    const newData = { memory: req.body.text }; // 요청 본문에서 받은 데이터

    let data = [];
    if (fs.existsSync(filePath)) {
      data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    }

    data.push(newData);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");

    return res.status(200).json({ success: true, message: "데이터 저장 성공!" });
  }

  // 다른 메서드는 허용하지 않음
  res.status(405).json({ error: "Method not allowed" });
}
