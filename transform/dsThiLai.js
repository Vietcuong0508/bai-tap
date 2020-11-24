var dsThiLai = new Array(); // Tạo mảng dsThiLai rỗng.
var btnBienHinh = document.getElementById('btnBienHinh'); // Lấy ra phần tử có id btnBienHinh - nút biến hình.
// Kiểm tra sự tồn tại của btnBienHinh, nếu có thì mới tiếp tục xử lý.
// Cách làm này sẽ tránh lỗi xảy ra khi id btnBienHinh không tồn tại - phần tử có giá trị null.
if (btnBienHinh) {
// Bắt sự kiện onclick vào nút biến hình.
    btnBienHinh.onclick = function () {
// Lấy ra phần tử input có tên là 'full-name' nằm trong form có tên là 'thi-lai-form'
        var txtFullname = document.forms['thi-lai-form']['full-name'];
// Kiểm tra sự tồn tại của phần tử.
        if (txtFullname) {
// Lấy ra giá trị đã được nhập từ input 'full-name'.
            var fullName = txtFullname.value;
// Đưa giá trị người dùng nhập vào mảng dsThiLai
            dsThiLai.push(fullName);
// lấy ra div content theo id.
            var contentDiv = document.getElementById('content');
// Kiểm tra sự tồn tại của phần tử.
            if (contentDiv) {
// Khởi tạo biến contentOfDiv với giá trị ban đầu là thẻ mở <ul>
                var contentOfDiv = '<ul>';
// Dùng vòng lặp duyệt qua các phần tử của mảng dsThiLai.
                for (var i = 0; i < dsThiLai.length; i++) {
// Lấy ra phần tử của mảng tại vị trí i và gán ra biến element.
                    var element = dsThiLai[i];
// Nối nội dung biến contentOfDiv với thẻ li kết hợp giá trị của phần tử trong mảng
                    contentOfDiv += `<li>${element}</li>`; // Sử dụng dấu ` (shift ~) để đánh dấu chuỗi.
// Các biến được đưa vào chuỗi bằng dấu ${tenBien}.
// Có thể follow theo cách bên dưới.
// contentOfDiv += '<li>' + element + '</li>';
                }
                contentOfDiv += '</ul>';
// Gán giá trị của biến vào thuộc tính innerHTML của contentDiv
// , để thay đổi nội dung html bên trong.
                contentDiv.innerHTML = contentOfDiv;
            }
        }
    }
}
var dsThiLai = new Array(); // Tạo mảng dsThiLai rỗng.
var btnBienHinh = document.getElementById('btnBienHinh'); // Lấy ra phần tử có id btnBienHinh - nút biến hình.
// Kiểm tra sự tồn tại của btnBienHinh, nếu có thì mới tiếp tục xử lý.
// Cách làm này sẽ tránh lỗi xảy ra khi id btnBienHinh không tồn tại - phần tử có giá trị null.
if (btnBienHinh) {
// Bắt sự kiện onclick vào nút biến hình.
    btnBienHinh.onclick = function () {
// Lấy ra phần tử input có tên là 'full-name' nằm trong form có tên là 'thi-lai-form'
        var txtFullname = document.forms['thi-lai-form']['full-name'];
// Kiểm tra sự tồn tại của phần tử.
        if (txtFullname) {
// Lấy ra giá trị đã được nhập từ input 'full-name'.
            var fullName = txtFullname.value;
// Đưa giá trị người dùng nhập vào mảng dsThiLai
            dsThiLai.push(fullName);
// lấy ra div content theo id.
            var contentDiv = document.getElementById('content');
// Kiểm tra sự tồn tại của phần tử.
            if (contentDiv) {
// Khởi tạo biến contentOfDiv với giá trị ban đầu là thẻ mở <ul>
                var contentOfDiv = '<ul>';
// Dùng vòng lặp duyệt qua các phần tử của mảng dsThiLai.
                for (var i = 0; i < dsThiLai.length; i++) {
// Lấy ra phần tử của mảng tại vị trí i và gán ra biến element.
                    var element = dsThiLai[i];
// Nối nội dung biến contentOfDiv với thẻ li kết hợp giá trị của phần tử trong mảng
                    contentOfDiv += `<li>${element}</li>`; // Sử dụng dấu ` (shift ~) để đánh dấu chuỗi.
// Các biến được đưa vào chuỗi bằng dấu ${tenBien}.
// Có thể follow theo cách bên dưới.
// contentOfDiv += '<li>' + element + '</li>';
                }
                contentOfDiv += '</ul>';
// Gán giá trị của biến vào thuộc tính innerHTML của contentDiv
// , để thay đổi nội dung html bên trong.
                contentDiv.innerHTML = contentOfDiv;
            }
        }
    }
}
var dsThiLai = new Array(); // Tạo mảng dsThiLai rỗng.
var btnBienHinh = document.getElementById('btnBienHinh'); // Lấy ra phần tử có id btnBienHinh - nút biến hình.
// Kiểm tra sự tồn tại của btnBienHinh, nếu có thì mới tiếp tục xử lý.
// Cách làm này sẽ tránh lỗi xảy ra khi id btnBienHinh không tồn tại - phần tử có giá trị null.
if (btnBienHinh) {
// Bắt sự kiện onclick vào nút biến hình.
    btnBienHinh.onclick = function () {
// Lấy ra phần tử input có tên là 'full-name' nằm trong form có tên là 'thi-lai-form'
        var txtFullname = document.forms['thi-lai-form']['full-name'];
// Kiểm tra sự tồn tại của phần tử.
        if (txtFullname) {
// Lấy ra giá trị đã được nhập từ input 'full-name'.
            var fullName = txtFullname.value;
// Đưa giá trị người dùng nhập vào mảng dsThiLai
            dsThiLai.push(fullName);
// lấy ra div content theo id.
            var contentDiv = document.getElementById('content');
// Kiểm tra sự tồn tại của phần tử.
            if (contentDiv) {
// Khởi tạo biến contentOfDiv với giá trị ban đầu là thẻ mở <ul>
                var contentOfDiv = '<ul>';
// Dùng vòng lặp duyệt qua các phần tử của mảng dsThiLai.
                for (var i = 0; i < dsThiLai.length; i++) {
// Lấy ra phần tử của mảng tại vị trí i và gán ra biến element.
                    var element = dsThiLai[i];
// Nối nội dung biến contentOfDiv với thẻ li kết hợp giá trị của phần tử trong mảng
                    contentOfDiv += `<li>${element}</li>`; // Sử dụng dấu ` (shift ~) để đánh dấu chuỗi.
// Các biến được đưa vào chuỗi bằng dấu ${tenBien}.
// Có thể follow theo cách bên dưới.
// contentOfDiv += '<li>' + element + '</li>';
                }
                contentOfDiv += '</ul>';
// Gán giá trị của biến vào thuộc tính innerHTML của contentDiv
// , để thay đổi nội dung html bên trong.
                contentDiv.innerHTML = contentOfDiv;
            }
        }
    }
}
var dsThiLai = new Array(); // Tạo mảng dsThiLai rỗng.
var btnBienHinh = document.getElementById('btnBienHinh'); // Lấy ra phần tử có id btnBienHinh - nút biến hình.
// Kiểm tra sự tồn tại của btnBienHinh, nếu có thì mới tiếp tục xử lý.
// Cách làm này sẽ tránh lỗi xảy ra khi id btnBienHinh không tồn tại - phần tử có giá trị null.
if (btnBienHinh) {
// Bắt sự kiện onclick vào nút biến hình.
    btnBienHinh.onclick = function () {
// Lấy ra phần tử input có tên là 'full-name' nằm trong form có tên là 'thi-lai-form'
        var txtFullname = document.forms['thi-lai-form']['full-name'];
// Kiểm tra sự tồn tại của phần tử.
        if (txtFullname) {
// Lấy ra giá trị đã được nhập từ input 'full-name'.
            var fullName = txtFullname.value;
// Đưa giá trị người dùng nhập vào mảng dsThiLai
            dsThiLai.push(fullName);
// lấy ra div content theo id.
            var contentDiv = document.getElementById('content');
// Kiểm tra sự tồn tại của phần tử.
            if (contentDiv) {
// Khởi tạo biến contentOfDiv với giá trị ban đầu là thẻ mở <ul>
                var contentOfDiv = '<ul>';
// Dùng vòng lặp duyệt qua các phần tử của mảng dsThiLai.
                for (var i = 0; i < dsThiLai.length; i++) {
// Lấy ra phần tử của mảng tại vị trí i và gán ra biến element.
                    var element = dsThiLai[i];
// Nối nội dung biến contentOfDiv với thẻ li kết hợp giá trị của phần tử trong mảng
                    contentOfDiv += `<li>${element}</li>`; // Sử dụng dấu ` (shift ~) để đánh dấu chuỗi.
// Các biến được đưa vào chuỗi bằng dấu ${tenBien}.
// Có thể follow theo cách bên dưới.
// contentOfDiv += '<li>' + element + '</li>';
                }
                contentOfDiv += '</ul>';
// Gán giá trị của biến vào thuộc tính innerHTML của contentDiv
// , để thay đổi nội dung html bên trong.
                contentDiv.innerHTML = contentOfDiv;
            }
        }
    }
}
var dsThiLai = new Array(); // Tạo mảng dsThiLai rỗng.
var btnBienHinh = document.getElementById('btnBienHinh'); // Lấy ra phần tử có id btnBienHinh - nút biến hình.
// Kiểm tra sự tồn tại của btnBienHinh, nếu có thì mới tiếp tục xử lý.
// Cách làm này sẽ tránh lỗi xảy ra khi id btnBienHinh không tồn tại - phần tử có giá trị null.
if (btnBienHinh) {
// Bắt sự kiện onclick vào nút biến hình.
    btnBienHinh.onclick = function () {
// Lấy ra phần tử input có tên là 'full-name' nằm trong form có tên là 'thi-lai-form'
        var txtFullname = document.forms['thi-lai-form']['full-name'];
// Kiểm tra sự tồn tại của phần tử.
        if (txtFullname) {
// Lấy ra giá trị đã được nhập từ input 'full-name'.
            var fullName = txtFullname.value;
// Đưa giá trị người dùng nhập vào mảng dsThiLai
            dsThiLai.push(fullName);
// lấy ra div content theo id.
            var contentDiv = document.getElementById('content');
// Kiểm tra sự tồn tại của phần tử.
            if (contentDiv) {
// Khởi tạo biến contentOfDiv với giá trị ban đầu là thẻ mở <ul>
                var contentOfDiv = '<ul>';
// Dùng vòng lặp duyệt qua các phần tử của mảng dsThiLai.
                for (var i = 0; i < dsThiLai.length; i++) {
// Lấy ra phần tử của mảng tại vị trí i và gán ra biến element.
                    var element = dsThiLai[i];
// Nối nội dung biến contentOfDiv với thẻ li kết hợp giá trị của phần tử trong mảng
                    contentOfDiv += `<li>${element}</li>`; // Sử dụng dấu ` (shift ~) để đánh dấu chuỗi.
// Các biến được đưa vào chuỗi bằng dấu ${tenBien}.
// Có thể follow theo cách bên dưới.
// contentOfDiv += '<li>' + element + '</li>';
                }
                contentOfDiv += '</ul>';
// Gán giá trị của biến vào thuộc tính innerHTML của contentDiv
// , để thay đổi nội dung html bên trong.
                contentDiv.innerHTML = contentOfDiv;
            }
        }
    }
}
var dsThiLai = new Array(); // Tạo mảng dsThiLai rỗng.
var btnBienHinh = document.getElementById('btnBienHinh'); // Lấy ra phần tử có id btnBienHinh - nút biến hình.
// Kiểm tra sự tồn tại của btnBienHinh, nếu có thì mới tiếp tục xử lý.
// Cách làm này sẽ tránh lỗi xảy ra khi id btnBienHinh không tồn tại - phần tử có giá trị null.
if (btnBienHinh) {
// Bắt sự kiện onclick vào nút biến hình.
    btnBienHinh.onclick = function () {
// Lấy ra phần tử input có tên là 'full-name' nằm trong form có tên là 'thi-lai-form'
        var txtFullname = document.forms['thi-lai-form']['full-name'];
// Kiểm tra sự tồn tại của phần tử.
        if (txtFullname) {
// Lấy ra giá trị đã được nhập từ input 'full-name'.
            var fullName = txtFullname.value;
// Đưa giá trị người dùng nhập vào mảng dsThiLai
            dsThiLai.push(fullName);
// lấy ra div content theo id.
            var contentDiv = document.getElementById('content');
// Kiểm tra sự tồn tại của phần tử.
            if (contentDiv) {
// Khởi tạo biến contentOfDiv với giá trị ban đầu là thẻ mở <ul>
                var contentOfDiv = '<ul>';
// Dùng vòng lặp duyệt qua các phần tử của mảng dsThiLai.
                for (var i = 0; i < dsThiLai.length; i++) {
// Lấy ra phần tử của mảng tại vị trí i và gán ra biến element.
                    var element = dsThiLai[i];
// Nối nội dung biến contentOfDiv với thẻ li kết hợp giá trị của phần tử trong mảng
                    contentOfDiv += `<li>${element}</li>`; // Sử dụng dấu ` (shift ~) để đánh dấu chuỗi.
// Các biến được đưa vào chuỗi bằng dấu ${tenBien}.
// Có thể follow theo cách bên dưới.
// contentOfDiv += '<li>' + element + '</li>';
                }
                contentOfDiv += '</ul>';
// Gán giá trị của biến vào thuộc tính innerHTML của contentDiv
// , để thay đổi nội dung html bên trong.
                contentDiv.innerHTML = contentOfDiv;
            }
        }
    }
}
var dsThiLai = new Array(); // Tạo mảng dsThiLai rỗng.
var btnBienHinh = document.getElementById('btnBienHinh'); // Lấy ra phần tử có id btnBienHinh - nút biến hình.
// Kiểm tra sự tồn tại của btnBienHinh, nếu có thì mới tiếp tục xử lý.
// Cách làm này sẽ tránh lỗi xảy ra khi id btnBienHinh không tồn tại - phần tử có giá trị null.
if (btnBienHinh) {
// Bắt sự kiện onclick vào nút biến hình.
    btnBienHinh.onclick = function () {
// Lấy ra phần tử input có tên là 'full-name' nằm trong form có tên là 'thi-lai-form'
        var txtFullname = document.forms['thi-lai-form']['full-name'];
// Kiểm tra sự tồn tại của phần tử.
        if (txtFullname) {
// Lấy ra giá trị đã được nhập từ input 'full-name'.
            var fullName = txtFullname.value;
// Đưa giá trị người dùng nhập vào mảng dsThiLai
            dsThiLai.push(fullName);
// lấy ra div content theo id.
            var contentDiv = document.getElementById('content');
// Kiểm tra sự tồn tại của phần tử.
            if (contentDiv) {
// Khởi tạo biến contentOfDiv với giá trị ban đầu là thẻ mở <ul>
                var contentOfDiv = '<ul>';
// Dùng vòng lặp duyệt qua các phần tử của mảng dsThiLai.
                for (var i = 0; i < dsThiLai.length; i++) {
// Lấy ra phần tử của mảng tại vị trí i và gán ra biến element.
                    var element = dsThiLai[i];
// Nối nội dung biến contentOfDiv với thẻ li kết hợp giá trị của phần tử trong mảng
                    contentOfDiv += `<li>${element}</li>`; // Sử dụng dấu ` (shift ~) để đánh dấu chuỗi.
// Các biến được đưa vào chuỗi bằng dấu ${tenBien}.
// Có thể follow theo cách bên dưới.
// contentOfDiv += '<li>' + element + '</li>';
                }
                contentOfDiv += '</ul>';
// Gán giá trị của biến vào thuộc tính innerHTML của contentDiv
// , để thay đổi nội dung html bên trong.
                contentDiv.innerHTML = contentOfDiv;
            }
        }
    }
}