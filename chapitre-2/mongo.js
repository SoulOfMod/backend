use school

db.students.insertMany([
    { id: 1, name: "Veronique", city: "Paris" },
    { id: 2, name: "Steeven", city: "Lyon" },
    { id: 3, name: "Marc", city: "Marseille" },
    { id: 4, name: "Nour", city: "Lyon" },
    { id: 5, name: "Romain", city: "Paris" },
    { id: 6, name: "Sophie", city: "Paris" },
]);

db.languages.insertMany([
    { id: 1, name: "french" },
    { id: 2, name: "english" },
    { id: 3, name: "german" },
    { id: 4, name: "spanish" },
    { id: 5, name: "mandarin" },
]);

db.favorites.insertMany([
    { class: "Maths", sport: "Cricket", student_id: "2" },
    { class: "Music", sport: "Hip-hop", student_id: "6" },
    { class: "Arts", sport: "Boxing", student_id: "1" },
    { class: "Literature", sport: "Tennis", student_id: "3" },
    { class: "Computer-Science", sport: "Tennis", student_id: "5" },
    { class: "Arts", sport: "Baseball", student_id: "4" },
]);

db.students_languages.insertMany([
    { id: 1, student_id: 1, language_id: 1 },
    { id: 2, student_id: 1, language_id: 2 },
    { id: 3, student_id: 2, language_id: 1 },
    { id: 4, student_id: 2, language_id: 3 },
    { id: 5, student_id: 3, language_id: 1 },
    { id: 6, student_id: 4, language_id: 1 },
    { id: 7, student_id: 4, language_id: 2 },
    { id: 8, student_id: 4, language_id: 4 },
    { id: 9, student_id: 4, language_id: 5 },
    { id: 10, student_id: 5, language_id: 1 },
    { id: 11, student_id: 5, language_id: 5 },
    { id: 12, student_id: 6, language_id: 1 },
    { id: 13, student_id: 6, language_id: 2 },
    { id: 14, student_id: 6, language_id: 3 }
]);


//rapport1
db.students.find({id:3})
db.students.find({id:6})
db.students.find({id:5},{name:1,city:1})
db.students.find({id:2},{name:1})
db.students.find({city:"Paris"})
db.students.find({city:"Lyon"},{name:1})

//rapport2
