# CLBX – Quản lý dữ liệu từng CLB (Phật Quang Quyền)

Bộ trang xem và quản lý dữ liệu võ sinh theo từng CLB, thay cho việc sửa trực tiếp Google Sheets.

| Trang | Dùng cho |
|---|---|
| `clb.html?id=<STT CLB>` | Mọi người xem danh sách (không cần mật khẩu) |
| `clb-admin.html?id=<STT CLB>` | Quản lý CLB: thêm, sửa, xóa, chấm tiến độ, thùng rác (cần mật khẩu của CLB) |
| `quantri-tong.html` | Chủ hệ thống: cấp mật khẩu từng CLB, xem nhật ký |

Cài đặt và cách hoạt động: xem [HUONG_DAN_CLB.md](HUONG_DAN_CLB.md).
Mã máy chủ (Google Apps Script): [apps-script/clb-api/Code.gs](apps-script/clb-api/Code.gs).
Việc đầu tiên cần làm sau khi cài Apps Script: dán link `/exec` vào [clb-config.js](clb-config.js).
