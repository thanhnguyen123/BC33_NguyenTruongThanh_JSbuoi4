/* Bài 1********************************************************
 *Input: 3 số nguyên
 *
 *Process:
 *   1. Lấy được input
 *   2. Tìm các trường hợp
 *       TH1: n1 < n2, n1 < n3, n2 < n3 ====> n1 < n2 < n3
 *
 *       TH2: n1 < n2, n1 < n3, n3 < n2 ====> n1 < n3 < n2
 *
 *       TH3: n2 < n1, n2 < n3, n1 < n3 ====> n2 < n1 < n3
 *
 *       TH4: n2 < n2, n2 < n3, n3 < n1 ====> n2 < n3 < n1
 *
 *       TH5: n3 < n1, n3 < n2, n2 < n1 ====> n3 < n2 < n1
 *
 *       TH6: n3 < n1, n3 < n2, n1 < n2 ====> n3 < n1 < n2
 *
 *   3. Xuất số theo thứ tự tăng dần lương ra màn hình
 *
 * Output: Số thứ tự tăng dần
 */
console.log("Bài tập 1");

var n1 = 45;
var n2 = 15;
var n3 = 20;
if (n1 < n2 && n1 < n3 && n2 < n3) {
  console.log("Số theo thứ tự tăng dần", n1, "<", n2, "<", n3);
} else if (n1 < n2 && n1 < n3 && n3 < n2) {
  console.log("Số theo thứ tự tăng dần", n1, "<", n3, "<", n2);
} else if (n2 < n3 && n2 < n1 && n1 < n3) {
  console.log("Số theo thứ tự tăng dần", n2, "<", n1, "<", n3);
} else if (n2 < n3 && n2 < n1 && n3 < n1) {
  console.log("Số theo thứ tự tăng dần", n2, "<", n3, "<", n1);
} else if (n3 < n1 && n3 < n2 && n2 < n1) {
  console.log("Số theo thứ tự tăng dần", n3, "<", n2, "<", n1);
} else if (n3 < n1 && n3 < n2 && n1 < n2) {
  console.log("Số theo thứ tự tăng dần", n3, "<", n1, "<", n2);
} else {
  console.log("Xin mời nhập lại");
}

/* Bài 2********************************************************
 *Input: B,M,A,E
 *
 *Process:
 *   1. Lấy được input
 *   2. So sánh các trường hợp được chọn:
 *      nhập B => Chào Bố
 *      nhập M => Chào Mẹ
 *      nhập A => Chào Anh Trai
 *      nhập E => Chào Em Gái
 *      nhập ký tự khác => Người lạ
 *   3. Xuất câu chào lương ra màn hình
 *
 * Output: Câu chào hỏi
 */
console.log("Bài tập 2");

var user = "B";
// var user = "M";
// var user = "A";
// var user = "E";
if (user === "B") {
  console.log("Chào Bố");
} else if (user === "M") {
  console.log("Chào Mẹ");
} else if (user === "A") {
  console.log("Chào Anh Trai");
} else if (user === "E") {
  console.log("Chào Em Gái");
} else {
  console.log("Ai đó ?");
}

/* Bài 3********************************************************
 *Input: 3 số nguyên
 *
 *Process:
 *   1. Lấy được input
 *   2. Xác định được số chẳn và số lẻ rồi đếm số chẳn và số lẻ
 *   3. Xuất biến đếm số chẳn và số lẻ ra màn hình
 *
 * Output: Số lượng của số chẳn vả số lượng của số lẻ
 */
console.log("Bài tập 3");

var num1 = 5;
var num2 = 10;
var num3 = 15;
var even = 0;
var odd = 0;
if (num1 % 2 == 0) {
  even = even + 1;
} else {
  odd = odd + 1;
}
if (num2 % 2 == 0) {
  even = even + 1;
} else {
  odd = odd + 1;
}
if (num3 % 2 == 0) {
  even = even + 1;
} else {
  odd = odd + 1;
}
console.log("Có", even, "số chẳn", "và", odd, "số lẻ");

/* Bài 4********************************************************
 *Input: 3 cạnh của hình tam giác
 *
 *Process:
 *   1. Lấy được input
 *   2. So sánh, áp dụng công thức để xác định đúng loại của hình tam giác
 *   3. Xuất các loại hình tam giác ra màn hình
 *
 * Output: Tam giác cân, Tam giác đều, Tam giác vuông
 */
console.log("Bài tập 4");

var a = 3;
var b = 4;
var c = 5;
if ((a == b) & (a != c) && b != c) {
  console.log("Đây là hình tam giác cân");
} else if (a == b && a == c && b == c) {
  console.log("Đây là hình tam giác đều");
} else if (Math.pow(c, 2) == Math.pow(a, 2) + Math.pow(b, 2)) {
  console.log("Đây là hình tam giác vuông");
} else {
  console.log("Đây là hình tam giác");
}
