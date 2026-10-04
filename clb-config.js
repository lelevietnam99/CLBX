/**
 * CẤU HÌNH CÁC TRANG CLB
 * Dán đường link /exec của dự án Apps Script "CLB API" (file apps-script/clb-api/Code.gs) vào giữa hai dấu nháy.
 * Ví dụ: "https://script.google.com/macros/s/AKfycb.../exec"
 * Đây là link công khai nên có thể để trong mã nguồn; mật khẩu thì KHÔNG bao giờ để ở đây.
 */
window.CLB_API_URL = "https://script.google.com/macros/s/AKfycbyrQbxDEf5R7oZYSicJ2bmz3vOCn90IBBbkA7CHPR2Pns71IjdBBWdoJPgwqScZfi2KtQ/exec";

/**
 * Địa chỉ trang Dashboard tổng (nút logo "PQQ Dashboard" và nút "Về Dashboard" sẽ dẫn về đây).
 * Để trống ("") nếu chưa có.
 */
window.CLB_DASHBOARD_URL = "https://lelevietnam99.github.io/TONGHOPX/";

/**
 * File dữ liệu dựng sẵn của Dashboard (data.json trong repo TONGHOPX). Trang xem CLB dùng nó để HIỆN NGAY danh sách
 * trong lúc chờ dữ liệu trực tiếp từ Google Sheets. Để trống ("") nếu không muốn dùng.
 * (Hai trang cùng nằm trên github.io nên đọc được trực tiếp, không bị chặn.)
 */
window.CLB_DATA_URL = "https://lelevietnam99.github.io/TONGHOPX/data.json";
