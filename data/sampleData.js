const sampleClasses = [
  {
    "id": "CLS001",
    "name": "Grade 6A",
    "teacher": "Ms. Emily Carter",
    "capacity": 30,
    "subject": "Mathematics"
  },
  {
    "id": "CLS002",
    "name": "Grade 6B",
    "teacher": "Mr. David Rodriguez",
    "capacity": 32,
    "subject": "Science"
  },
  {
    "id": "CLS003",
    "name": "Grade 7A",
    "teacher": "Mrs. Sarah Williams",
    "capacity": 28,
    "subject": "English"
  },
  {
    "id": "CLS004",
    "name": "Grade 7B",
    "teacher": "Mr. Michael Brown",
    "capacity": 31,
    "subject": "History"
  },
  {
    "id": "CLS005",
    "name": "Grade 8A",
    "teacher": "Ms. Jessica Davis",
    "capacity": 29,
    "subject": "Mathematics"
  },
  {
    "id": "CLS006",
    "name": "Grade 8B",
    "teacher": "Mr. Christopher Wilson",
    "capacity": 33,
    "subject": "Science"
  },
  {
    "id": "CLS007",
    "name": "Grade 9A",
    "teacher": "Mrs. Ashley Garcia",
    "capacity": 30,
    "subject": "English"
  }
];

const sampleStudents = [
  {
    "id": "STU00101",
    "name": "Alice Johnson",
    "grade": 6,
    "age": 11,
    "parentContact": "john.j@example.com"
  },
  {
    "id": "STU00102",
    "name": "Bob Williams",
    "grade": 6,
    "age": 12,
    "parentContact": "mary.w@example.com"
  },
  {
    "id": "STU00103",
    "name": "Charlie Brown",
    "grade": 6,
    "age": 11,
    "parentContact": "peter.b@example.com"
  },
  {
    "id": "STU00104",
    "name": "Diana Miller",
    "grade": 6,
    "age": 12,
    "parentContact": "susan.m@example.com"
  },
  {
    "id": "STU00105",
    "name": "Ethan Davis",
    "grade": 6,
    "age": 11,
    "parentContact": "robert.d@example.com"
  },
  {
    "id": "STU00106",
    "name": "Fiona Garcia",
    "grade": 6,
    "age": 12,
    "parentContact": "linda.g@example.com"
  },
  {
    "id": "STU00107",
    "name": "George Rodriguez",
    "grade": 6,
    "age": 11,
    "parentContact": "charles.r@example.com"
  },
  {
    "id": "STU00201",
    "name": "Isabella Perez",
    "grade": 6,
    "age": 11,
    "parentContact": "jose.p@example.com"
  },
  {
    "id": "STU00202",
    "name": "Jack Taylor",
    "grade": 6,
    "age": 12,
    "parentContact": "margaret.t@example.com"
  },
  {
    "id": "STU00203",
    "name": "Kelly Moore",
    "grade": 6,
    "age": 11,
    "parentContact": "william.m@example.com"
  },
  {
    "id": "STU00204",
    "name": "Liam Jackson",
    "grade": 6,
    "age": 12,
    "parentContact": "dorothy.j@example.com"
  },
  {
    "id": "STU00205",
    "name": "Mia White",
    "grade": 6,
    "age": 11,
    "parentContact": "richard.w@example.com"
  },
  {
    "id": "STU00206",
    "name": "Noah Hall",
    "grade": 6,
    "age": 12,
    "parentContact": "sandra.h@example.com"
  },
  {
    "id": "STU00207",
    "name": "Olivia Green",
    "grade": 6,
    "age": 11,
    "parentContact": "paul.g@example.com"
  },
  {
    "id": "STU00208",
    "name": "Owen Adams",
    "grade": 6,
    "age": 12,
    "parentContact": "barbara.a@example.com"
  },
  {
    "id": "STU00301",
    "name": "Hannah Wilson",
    "grade": 7,
    "age": 12,
    "parentContact": "thomas.w@example.com"
  },
  {
    "id": "STU00302",
    "name": "Ian Martinez",
    "grade": 7,
    "age": 13,
    "parentContact": "patricia.m@example.com"
  },
  {
    "id": "STU00303",
    "name": "Judy Lopez",
    "grade": 7,
    "age": 12,
    "parentContact": "james.l@example.com"
  },
  {
    "id": "STU00304",
    "name": "Kevin Harris",
    "grade": 7,
    "age": 13,
    "parentContact": "deborah.h@example.com"
  },
  {
    "id": "STU00305",
    "name": "Laura Young",
    "grade": 7,
    "age": 12,
    "parentContact": "william.y@example.com"
  },
  {
    "id": "STU00306",
    "name": "Michael Allen",
    "grade": 7,
    "age": 13,
    "parentContact": "elizabeth.a@example.com"
  },
  {
    "id": "STU00307",
    "name": "Nancy King",
    "grade": 7,
    "age": 12,
    "parentContact": "richard.k@example.com"
  },
  {
    "id": "STU00308",
    "name": "Oliver Wright",
    "grade": 7,
    "age": 13,
    "parentContact": "karen.w@example.com"
  },
  {
    "id": "STU00401",
    "name": "Penelope Scott",
    "grade": 7,
    "age": 12,
    "parentContact": "mark.s@example.com"
  },
  {
    "id": "STU00402",
    "name": "Quinn Baker",
    "grade": 7,
    "age": 13,
    "parentContact": "lisa.b@example.com"
  },
  {
    "id": "STU00403",
    "name": "Ryan Lewis",
    "grade": 7,
    "age": 12,
    "parentContact": "kenneth.l@example.com"
  },
  {
    "id": "STU00404",
    "name": "Sophia Walker",
    "grade": 7,
    "age": 13,
    "parentContact": "michelle.w@example.com"
  },
  {
    "id": "STU00405",
    "name": "Tyler Green",
    "grade": 7,
    "age": 12,
    "parentContact": "donald.g@example.com"
  },
  {
    "id": "STU00406",
    "name": "Victoria Nelson",
    "grade": 7,
    "age": 13,
    "parentContact": "donna.n@example.com"
  },
  {
    "id": "STU00407",
    "name": "Wesley Carter",
    "grade": 7,
    "age": 12,
    "parentContact": "gerald.c@example.com"
  },
  {
    "id": "STU00408",
    "name": "Xavier Murphy",
    "grade": 7,
    "age": 13,
    "parentContact": "sharon.m@example.com"
  },
  {
    "id": "STU00409",
    "name": "Yara Bennett",
    "grade": 7,
    "age": 12,
    "parentContact": "steven.b@example.com"
  },
  {
    "id": "STU00501",
    "name": "Zoe Wood",
    "grade": 8,
    "age": 13,
    "parentContact": "cynthia.w@example.com"
  },
  {
    "id": "STU00502",
    "name": "Aaron Hill",
    "grade": 8,
    "age": 14,
    "parentContact": "raymond.h@example.com"
  },
  {
    "id": "STU00503",
    "name": "Bella Sanders",
    "grade": 8,
    "age": 13,
    "parentContact": "angela.s@example.com"
  },
  {
    "id": "STU00504",
    "name": "Caleb Ross",
    "grade": 8,
    "age": 14,
    "parentContact": "brian.r@example.com"
  },
  {
    "id": "STU00505",
    "name": "Daisy Powell",
    "grade": 8,
    "age": 13,
    "parentContact": "judith.p@example.com"
  },
  {
    "id": "STU00506",
    "name": "Evan Long",
    "grade": 8,
    "age": 14,
    "parentContact": "scott.l@example.com"
  },
  {
    "id": "STU00507",
    "name": "Faith Jenkins",
    "grade": 8,
    "age": 13,
    "parentContact": "carol.j@example.com"
  },
  {
    "id": "STU00508",
    "name": "Gabriel Perry",
    "grade": 8,
    "age": 14,
    "parentContact": "kevin.p@example.com"
  },
  {
    "id": "STU00601",
    "name": "Ivy Butler",
    "grade": 8,
    "age": 13,
    "parentContact": "edward.b@example.com"
  },
  {
    "id": "STU00602",
    "name": "Jasper Barnes",
    "grade": 8,
    "age": 14,
    "parentContact": "ruth.b@example.com"
  },
  {
    "id": "STU00603",
    "name": "Kaylee Fisher",
    "grade": 8,
    "age": 13,
    "parentContact": "stephen.f@example.com"
  },
  {
    "id": "STU00604",
    "name": "Lucas Gray",
    "grade": 8,
    "age": 14,
    "parentContact": "beverly.g@example.com"
  },
  {
    "id": "STU00605",
    "name": "Maya Coleman",
    "grade": 8,
    "age": 13,
    "parentContact": "jerry.c@example.com"
  },
  {
    "id": "STU00606",
    "name": "Nathan Hayes",
    "grade": 8,
    "age": 14,
    "parentContact": "jean.h@example.com"
  },
  {
    "id": "STU00607",
    "name": "Olive Price",
    "grade": 8,
    "age": 13,
    "parentContact": "howard.p@example.com"
  },
  {
    "id": "STU00608",
    "name": "Preston Sanders",
    "grade": 8,
    "age": 14,
    "parentContact": "gloria.s@example.com"
  },
  {
    "id": "STU00609",
    "name": "Riley Bennett",
    "grade": 8,
    "age": 13,
    "parentContact": "martin.b@example.com"
  },
  {
    "id": "STU00701",
    "name": "Scarlett Howard",
    "grade": 9,
    "age": 14,
    "parentContact": "george.h@example.com"
  },
  {
    "id": "STU00702",
    "name": "Sebastian Ward",
    "grade": 9,
    "age": 15,
    "parentContact": "brenda.w@example.com"
  },
  {
    "id": "STU00703",
    "name": "Stella Diaz",
    "grade": 9,
    "age": 14,
    "parentContact": "larry.d@example.com"
  },
  {
    "id": "STU00704",
    "name": "Theodore Murphy",
    "grade": 9,
    "age": 15,
    "parentContact": "lois.m@example.com"
  },
  {
    "id": "STU00705",
    "name": "Violet Reed",
    "grade": 9,
    "age": 14,
    "parentContact": "frank.r@example.com"
  },
  {
    "id": "STU00706",
    "name": "Wyatt Coleman",
    "grade": 9,
    "age": 15,
    "parentContact": "theresa.c@example.com"
  },
  {
    "id": "STU00707",
    "name": "Zara Bell",
    "grade": 9,
    "age": 14,
    "parentContact": "samuel.b@example.com"
  },
  {
    "id": "STU00708",
    "name": "Adam Cook",
    "grade": 9,
    "age": 15,
    "parentContact": "diana.c@example.com"
  },
  {
    "id": "STU00709",
    "name": "Brooke Torres",
    "grade": 9,
    "age": 14,
    "parentContact": "phillip.t@example.com"
  },
  {
    "id": "STU00710",
    "name": "Caleb Rivera",
    "grade": 9,
    "age": 15,
    "parentContact": "evelyn.r@example.com"
  }
];

// Add class associations to students
const studentAssociations = [
  { id: "STU00101", classIds: ["CLS001"] },
  { id: "STU00102", classIds: ["CLS001"] },
  { id: "STU00103", classIds: ["CLS001"] },
  { id: "STU00104", classIds: ["CLS001"] },
  { id: "STU00105", classIds: ["CLS001"] },
  { id: "STU00106", classIds: ["CLS001"] },
  { id: "STU00107", classIds: ["CLS001"] },
  { id: "STU00201", classIds: ["CLS002"] },
  { id: "STU00202", classIds: ["CLS002"] },
  { id: "STU00203", classIds: ["CLS002"] },
  { id: "STU00204", classIds: ["CLS002"] },
  { id: "STU00205", classIds: ["CLS002"] },
  { id: "STU00206", classIds: ["CLS002"] },
  { id: "STU00207", classIds: ["CLS002"] },
  { id: "STU00208", classIds: ["CLS002"] },
  { id: "STU00301", classIds: ["CLS003"] },
  { id: "STU00302", classIds: ["CLS003"] },
  { id: "STU00303", classIds: ["CLS003"] },
  { id: "STU00304", classIds: ["CLS003"] },
  { id: "STU00305", classIds: ["CLS003"] },
  { id: "STU00306", classIds: ["CLS003"] },
  { id: "STU00307", classIds: ["CLS003"] },
  { id: "STU00308", classIds: ["CLS003"] },
  { id: "STU00401", classIds: ["CLS004"] },
  { id: "STU00402", classIds: ["CLS004"] },
  { id: "STU00403", classIds: ["CLS004"] },
  { id: "STU00404", classIds: ["CLS004"] },
  { id: "STU00405", classIds: ["CLS004"] },
  { id: "STU00406", classIds: ["CLS004"] },
  { id: "STU00407", classIds: ["CLS004"] },
  { id: "STU00408", classIds: ["CLS004"] },
  { id: "STU00409", classIds: ["CLS004"] },
  { id: "STU00501", classIds: ["CLS005"] },
  { id: "STU00502", classIds: ["CLS005"] },
  { id: "STU00503", classIds: ["CLS005"] },
  { id: "STU00504", classIds: ["CLS005"] },
  { id: "STU00505", classIds: ["CLS005"] },
  { id: "STU00506", classIds: ["CLS005"] },
  { id: "STU00507", classIds: ["CLS005"] },
  { id: "STU00508", classIds: ["CLS005"] },
  { id: "STU00601", classIds: ["CLS006"] },
  { id: "STU00602", classIds: ["CLS006"] },
  { id: "STU00603", classIds: ["CLS006"] },
  { id: "STU00604", classIds: ["CLS006"] },
  { id: "STU00605", classIds: ["CLS006"] },
  { id: "STU00606", classIds: ["CLS006"] },
  { id: "STU00607", classIds: ["CLS006"] },
  { id: "STU00608", classIds: ["CLS006"] },
  { id: "STU00609", classIds: ["CLS006"] },
  { id: "STU00701", classIds: ["CLS007"] },
  { id: "STU00702", classIds: ["CLS007"] },
  { id: "STU00703", classIds: ["CLS007"] },
  { id: "STU00704", classIds: ["CLS007"] },
  { id: "STU00705", classIds: ["CLS007"] },
  { id: "STU00706", classIds: ["CLS007"] },
  { id: "STU00707", classIds: ["CLS007"] },
  { id: "STU00708", classIds: ["CLS007"] },
  { id: "STU00709", classIds: ["CLS007"] },
  { id: "STU00710", classIds: ["CLS007"] }
];

// Add class associations to each student
const studentsWithClasses = sampleStudents.map(student => {
  const association = studentAssociations.find(assoc => assoc.id === student.id);
  return {
    ...student,
    classIds: association ? association.classIds : []
  };
});

module.exports = {
  classes: sampleClasses,
  students: studentsWithClasses
}; 