// Bài 1

// const student = {
//   name: "hoang",
//   parent: {
//     name: "bo hoang",
//   },
// };

// const mentor = { ...student };

// mentor.name = "bang";
// mentor.parent.name = "bo bang";

// console.log(student);
// console.log(mentor);
/*
Câu hỏi:

1.student.name có bị đổi không? không bị đổi 

2.student.parent.name có bị đổi không? có bị đổi 

3.Giải thích vì sao?
    Vì cú pháp { ...student } là copy nông (shallow copy)
        - thuộc tính ở lớp ngoài cùng nó sẽ copy thành 1 giá trị độc lập
            -> thay đổi metor.name sẽ không ảnh hưởng đến student.name
        - còn với thuộc tính là 1 object lồng bên trong thì nó sẽ chỉ copy nông 
          địa chỉ tham chiếucủa object đó
            -> thay đổi mentor.parent.name cũng làm thay đổi student.parent.name 
*/

// Bài 2

// const student = {
//   name: 'hoang',
//   parent: {
//     name: 'bo hoang'
//   }
// }

// const mentor = JSON.parse(JSON.stringify(student))

// mentor.parent.name = 'bo bang'

// console.log(student)
// console.log(mentor)
// JSON.stringify()
// JSON.parse()

/*
Câu hỏi:

1. student.parent.name có bị ảnh hưởng không? không bị ảnh hưởng 

2. Vì sao cách này khác spread (const mentor = { ...student })
    vì đây là copy sâu (deep copy), nó sẽ copy tất cả thành các giá trị độc lập 
    cách hoạt động:
        - JSON.stringify() sẽ biến toàn bộ object thành chuỗi string, 
        mọi địa chỉ ô nhớ đều được xóa sạch 
        - JSON.parse() sẽ đóng gói chuỗi string trên thành 1 object hoàn toàn mới 
*/

// Bài 3

// const students = [{ name: "a" }, { name: "b" }];

// const newStudents = [...students];

// newStudents[0].name = "z";

// console.log(students);
// console.log(newStudents);

/*
Câu hỏi:

1.Mảng có bị thay đổi không? 
    - Về mặt cấu trúc mảng (số lượng phần tử): Không bị thay đổi
    -Về mặt dữ liệu khi in ra: có bị thay đổi

2.Phần tử bên trong có bị không? có bị thay đổi
*/

// Bài 4:

const user = {
  name: "hoang",
  address: {
    city: "HN",
    location: {
      lat: 123,
    },
  },
};

const newUser = { ...user };

newUser.address.location.lat = 999;

console.log(user.address.location.lat);

/*
Câu hỏi: Kết quả là bao nhiêu? Vì sao?
    - Kết quả là 999. 
    - Vì cú pháp { ...user } chỉ là copy nông(shallow copy). 

*/
