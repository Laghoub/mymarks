// Données des utilisateurs
var users = [
    {
     "Mention": "جيد جدا",
     "Moyenne": 17.29,
     "Sciences naturelles": 11,
     "Sciences Islamique": 18.5,
     "Anglais": 16,
     "Physique": 18,
     "Mathématiques": 18,
     "Langue Arabe": 18.5,
     "Filiere": "Matheleme",
     "Matricule": "27052006",
     "Nom et prénom": "بوالدهان محمد آدم"
    },
    {
     "Mention": "جيد جدا",
     "Moyenne": 16.92,
     "Sciences naturelles": 16.5,
     "Sciences Islamique": 15.25,
     "Anglais": 17,
     "Physique": 19.5,
     "Mathématiques": 17.25,
     "Langue Arabe": 14,
     "Filiere": "Scientifique",
     "Matricule": "16072006",
     "Nom et prénom": "بقار سيدعلي"
    },
    {
     "Mention": "جيد جدا",
     "Moyenne": 16.77,
     "Sciences naturelles": 11.5,
     "Sciences Islamique": 18,
     "Anglais": 18,
     "Physique": 18.25,
     "Mathématiques": 19,
     "Langue Arabe": 10.5,
     "Filiere": "Matheleme",
     "Matricule": "16102007",
     "Nom et prénom": "سامي آنيا"
    },
    {
     "Mention": "جيد جدا",
     "Moyenne": 16.36,
     "Sciences naturelles": 16.5,
     "Sciences Islamique": 17,
     "Anglais": 15.5,
     "Physique": 19,
     "Mathématiques": 16,
     "Langue Arabe": 12.5,
     "Filiere": "Scientifique",
     "Matricule": "26042007",
     "Nom et prénom": "قاسمي مها"
    },
    {
     "Mention": "جيد",
     "Moyenne": 15.56,
     "Sciences naturelles": 14,
     "Sciences Islamique": 19.5,
     "Anglais": 13.5,
     "Physique": 17.75,
     "Mathématiques": 14.25,
     "Langue Arabe": 16,
     "Filiere": "Scientifique",
     "Matricule": "31072006",
     "Nom et prénom": "رحموني أروى"
    },
    {
     "Mention": "حسن جدا",
     "Moyenne": 13.69,
     "Sciences naturelles": 11.5,
     "Sciences Islamique": 12,
     "Anglais": 13,
     "Physique": 16,
     "Mathématiques": 14.5,
     "Langue Arabe": 10.25,
     "Filiere": "Matheleme",
     "Matricule": "15032006",
     "Nom et prénom": "مازري أنيس"
    },
    {
     "Mention": "حسن جدا",
     "Moyenne": 13.55,
     "Sciences naturelles": 16,
     "Sciences Islamique": 15.5,
     "Anglais": 17,
     "Physique": 15.25,
     "Mathématiques": 9.25,
     "Langue Arabe": 15,
     "Filiere": "Matheleme",
     "Matricule": "21082007",
     "Nom et prénom": "سماعيلي بلقاسم"
    },
    {
     "Mention": "حسن جدا",
     "Moyenne": 12.29,
     "Sciences naturelles": 15,
     "Sciences Islamique": 18,
     "Anglais": 16,
     "Physique": 8.5,
     "Mathématiques": 9.25,
     "Langue Arabe": 12,
     "Filiere": "Scientifique",
     "Matricule": "29052007",
     "Nom et prénom": "أسامر ملاك نور الهدى"
    },
    {
     "Mention": "حسن",
     "Moyenne": 11.73,
     "Sciences naturelles": 9.5,
     "Sciences Islamique": 16.5,
     "Anglais": 15,
     "Physique": 14.5,
     "Mathématiques": 6.75,
     "Langue Arabe": 14,
     "Filiere": "Matheleme",
     "Matricule": "07062007",
     "Nom et prénom": "موفق حملاوي عماد"
    },
    {
     "Mention": "حسن",
     "Moyenne": 11.34,
     "Sciences naturelles": 12.5,
     "Sciences Islamique": 11,
     "Anglais": 13.25,
     "Physique": 11,
     "Mathématiques": 7.5,
     "Langue Arabe": 15,
     "Filiere": "Scientifique",
     "Matricule": "13092006",
     "Nom et prénom": "خدوسي هاني"
    },
    {
     "Mention": "حسن",
     "Moyenne": 11.23,
     "Sciences naturelles": 10,
     "Sciences Islamique": 14.5,
     "Anglais": 14,
     "Physique": 13.75,
     "Mathématiques": 5.25,
     "Langue Arabe": 17,
     "Filiere": "Matheleme",
     "Matricule": "10092006",
     "Nom et prénom": "برقي كوتر"
    },
    {
     "Mention": "مقبول",
     "Moyenne": 10.72,
     "Sciences naturelles": 16.5,
     "Sciences Islamique": 16,
     "Anglais": 11,
     "Physique": 9.25,
     "Mathématiques": 2,
     "Langue Arabe": 12.5,
     "Filiere": "Scientifique",
     "Matricule": "24062006",
     "Nom et prénom": "فورار العيدي سلمى"
    },
    {
     "Mention": "مقبول",
     "Moyenne": 10.51,
     "Sciences naturelles": 12.5,
     "Sciences Islamique": 12.5,
     "Anglais": 14,
     "Physique": 10.75,
     "Mathématiques": 5.25,
     "Langue Arabe": 11.25,
     "Filiere": "Scientifique",
     "Matricule": "04052007",
     "Nom et prénom": "آيت أحمد أحلام"
    },
    {
     "Mention": "مقبول",
     "Moyenne": 10.23,
     "Sciences naturelles": 13,
     "Sciences Islamique": 6.5,
     "Anglais": 17.25,
     "Physique": 10,
     "Mathématiques": 12,
     "Langue Arabe": 0,
     "Filiere": "Scientifique",
     "Matricule": "25052006",
     "Nom et prénom": "إعزوقن أيمن"
    },
    {
     "Mention": "مقبول",
     "Moyenne": 10.06,
     "Sciences naturelles": 13.5,
     "Sciences Islamique": 13,
     "Anglais": 10,
     "Physique": 9.25,
     "Mathématiques": 4.75,
     "Langue Arabe": 11.5,
     "Filiere": "Scientifique",
     "Matricule": "08082006",
     "Nom et prénom": "تواري روميسة"
    },
    {
     "Mention": "\/",
     "Moyenne": 9.39,
     "Sciences naturelles": 7.5,
     "Sciences Islamique": 14,
     "Anglais": 16,
     "Physique": 9.25,
     "Mathématiques": 5.75,
     "Langue Arabe": 12,
     "Filiere": "Matheleme",
     "Matricule": "14062006",
     "Nom et prénom": "هداج محمد سامي"
    },
    {
     "Mention": "\/",
     "Moyenne": 9.3,
     "Sciences naturelles": "غائب",
     "Sciences Islamique": 13.5,
     "Anglais": 17,
     "Physique": 12,
     "Mathématiques": 10.25,
     "Langue Arabe": "غائب",
     "Filiere": "Matheleme",
     "Matricule": "08112006",
     "Nom et prénom": "حبوش نوح"
    },
    {
     "Mention": "\/",
     "Moyenne": 9.13,
     "Sciences naturelles": 13,
     "Sciences Islamique": 9,
     "Anglais": 13,
     "Physique": 7.25,
     "Mathématiques": 3.75,
     "Langue Arabe": 11,
     "Filiere": "Scientifique",
     "Matricule": "17012007",
     "Nom et prénom": "بلخيري أيمن"
    },
    {
     "Mention": "\/",
     "Moyenne": 9.05,
     "Sciences naturelles": 12.5,
     "Sciences Islamique": 16.5,
     "Anglais": 9.25,
     "Physique": 6,
     "Mathématiques": 7.25,
     "Langue Arabe": 12,
     "Filiere": "Matheleme",
     "Matricule": "20102006",
     "Nom et prénom": "خليل سارة"
    },
    {
     "Mention": "\/",
     "Moyenne": 8.82,
     "Sciences naturelles": 10.5,
     "Sciences Islamique": 15,
     "Anglais": 13.25,
     "Physique": 10.25,
     "Mathématiques": 2.75,
     "Langue Arabe": 12,
     "Filiere": "Matheleme",
     "Matricule": "22012007",
     "Nom et prénom": "الأسود عزيزة"
    },
    {
     "Mention": "\/",
     "Moyenne": 8.78,
     "Sciences naturelles": 13.5,
     "Sciences Islamique": 12.5,
     "Anglais": 6.25,
     "Physique": 6.75,
     "Mathématiques": 2.75,
     "Langue Arabe": 12,
     "Filiere": "Scientifique",
     "Matricule": "21062006",
     "Nom et prénom": "مصفي محمد ايوب"
    },
    {
     "Mention": "\/",
     "Moyenne": 8.55,
     "Sciences naturelles": "\/",
     "Sciences Islamique": 16,
     "Anglais": 11,
     "Physique": 6.5,
     "Mathématiques": 4.5,
     "Langue Arabe": 15.5,
     "Filiere": "تقني رياضي",
     "Matricule": "25082006",
     "Nom et prénom": "فرشيشي تنسيـم"
    },
    {
     "Mention": "\/",
     "Moyenne": 8.45,
     "Sciences naturelles": 12,
     "Sciences Islamique": 11.5,
     "Anglais": 11,
     "Physique": 5.75,
     "Mathématiques": 5.5,
     "Langue Arabe": 7,
     "Filiere": "Scientifique",
     "Matricule": "04072007",
     "Nom et prénom": "أعراب نهاد"
    },
    {
     "Mention": "\/",
     "Moyenne": 6.68,
     "Sciences naturelles": 9.5,
     "Sciences Islamique": 14,
     "Anglais": 4.25,
     "Physique": 1.75,
     "Mathématiques": 4,
     "Langue Arabe": 10.5,
     "Filiere": "Scientifique",
     "Matricule": "23072006",
     "Nom et prénom": "كوميمة ريمة"
    },
    {
     "Mention": "\/",
     "Moyenne": 6.51,
     "Sciences naturelles": 9,
     "Sciences Islamique": "غائبة",
     "Anglais": 16.5,
     "Physique": 8.75,
     "Mathématiques": "غائبة",
     "Langue Arabe": 13.25,
     "Filiere": "Matheleme",
     "Matricule": "23122006",
     "Nom et prénom": "بوعافية تماني"
    },
    {
     "Mention": "\/",
     "Moyenne": 5.16,
     "Sciences naturelles": 5,
     "Sciences Islamique": 11,
     "Anglais": 14,
     "Physique": 1.5,
     "Mathématiques": 1.75,
     "Langue Arabe": 7.5,
     "Filiere": "Scientifique",
     "Matricule": "11052007",
     "Nom et prénom": "بوربعة لوناس"
    },
    {
     "Mention": "\/",
     "Moyenne": 4.45,
     "Sciences naturelles": 7.5,
     "Sciences Islamique": "غائب",
     "Anglais": 10,
     "Physique": 5,
     "Mathématiques": "غائب",
     "Langue Arabe": 11,
     "Filiere": "Matheleme",
     "Matricule": "14082006",
     "Nom et prénom": "بوجبار فارس"
    },
    {
     "Mention": "\/",
     "Moyenne": 4.31,
     "Sciences naturelles": 5.5,
     "Sciences Islamique": 12.5,
     "Anglais": 4.25,
     "Physique": "غائب",
     "Mathématiques": 1,
     "Langue Arabe": 9.25,
     "Filiere": "Scientifique",
     "Matricule": "04042005",
     "Nom et prénom": "بوسعيدي عبد النور"
    },
    {
     "Mention": "\/",
     "Moyenne": 3.68,
     "Sciences naturelles": "غائبة",
     "Sciences Islamique": 11.5,
     "Anglais": "غائبة",
     "Physique": 4.25,
     "Mathématiques": 3,
     "Langue Arabe": 8.5,
     "Filiere": "Scientifique",
     "Matricule": "17022006",
     "Nom et prénom": "تواتي زينب"
    },
    {
     "Mention": "\/",
     "Moyenne": 0.72,
     "Sciences naturelles": "غائبة",
     "Sciences Islamique": "غائبة",
     "Anglais": "غائبة",
     "Physique": "غائبة",
     "Mathématiques": 2.75,
     "Langue Arabe": 1,
     "Filiere": "Scientifique",
     "Matricule": "21042005",
     "Nom et prénom": "بلحداد شمس"
    },
    {
     "Mention": "ممتاز",
     "Moyenne": 18.06,
     "Sciences naturelles": 18.25,
     "Sciences Islamique": "\/",
     "Anglais": 16,
     "Physique": 19.5,
     "Mathématiques": 17.75,
     "Langue Arabe": 18.5,
     "Filiere": "\/",
     "Matricule": "26062009",
     "Nom et prénom": "شافع عبد الرحمان"
    },
    {
     "Mention": "جيد جدا",
     "Moyenne": 17.43,
     "Sciences naturelles": 17.75,
     "Sciences Islamique": "\/",
     "Anglais": 18.5,
     "Physique": 19.5,
     "Mathématiques": 17.5,
     "Langue Arabe": 16,
     "Filiere": "\/",
     "Matricule": "07072009",
     "Nom et prénom": "تومي جمانة"
    },
    {
     "Mention": "جيد جدا",
     "Moyenne": 17.06,
     "Sciences naturelles": 17.75,
     "Sciences Islamique": "\/",
     "Anglais": 18.25,
     "Physique": 19.5,
     "Mathématiques": 17.5,
     "Langue Arabe": 15,
     "Filiere": "\/",
     "Matricule": "09102009",
     "Nom et prénom": "خنوس محمد منصف عبد القادر"
    },
    {
     "Mention": "جيد جدا",
     "Moyenne": 16.93,
     "Sciences naturelles": 15.5,
     "Sciences Islamique": "\/",
     "Anglais": 19,
     "Physique": 20,
     "Mathématiques": 20,
     "Langue Arabe": 13,
     "Filiere": "\/",
     "Matricule": "30032010",
     "Nom et prénom": "عليلي سارة"
    },
    {
     "Mention": "جيد جدا",
     "Moyenne": 16.3,
     "Sciences naturelles": 14.75,
     "Sciences Islamique": "\/",
     "Anglais": 18,
     "Physique": 18.5,
     "Mathématiques": 13,
     "Langue Arabe": 18,
     "Filiere": "\/",
     "Matricule": "16062009",
     "Nom et prénom": "بوزازة بشرى"
    },
    {
     "Mention": "جيد",
     "Moyenne": 15.4,
     "Sciences naturelles": 13.5,
     "Sciences Islamique": "\/",
     "Anglais": 14,
     "Physique": 16.75,
     "Mathématiques": 12.5,
     "Langue Arabe": 18.5,
     "Filiere": "\/",
     "Matricule": "21072009",
     "Nom et prénom": "لغوب لينة"
    },
    {
     "Mention": "حسن جدا",
     "Moyenne": 13.56,
     "Sciences naturelles": 14.5,
     "Sciences Islamique": "\/",
     "Anglais": 17.5,
     "Physique": 18,
     "Mathématiques": 12.75,
     "Langue Arabe": 10.5,
     "Filiere": "\/",
     "Matricule": "11102009",
     "Nom et prénom": "بن عامر ريم"
    },
    {
     "Mention": "حسن جدا",
     "Moyenne": 13.36,
     "Sciences naturelles": 12.25,
     "Sciences Islamique": "\/",
     "Anglais": 16.5,
     "Physique": 18,
     "Mathématiques": 10.5,
     "Langue Arabe": 13,
     "Filiere": "\/",
     "Matricule": "20042009",
     "Nom et prénom": "بن بريكة حذيفة"
    },
    {
     "Mention": "حسن جدا",
     "Moyenne": 12.76,
     "Sciences naturelles": 12.75,
     "Sciences Islamique": "\/",
     "Anglais": 12.5,
     "Physique": 14.5,
     "Mathématiques": 13,
     "Langue Arabe": 12,
     "Filiere": "\/",
     "Matricule": "22082009",
     "Nom et prénom": "دودو جواد"
    },
    {
     "Mention": "حسن جدا",
     "Moyenne": 12.6,
     "Sciences naturelles": 13,
     "Sciences Islamique": "\/",
     "Anglais": 12.25,
     "Physique": 15.25,
     "Mathématiques": 14.5,
     "Langue Arabe": 10,
     "Filiere": "\/",
     "Matricule": "28032010",
     "Nom et prénom": "العقون منال"
    },
    {
     "Mention": "حسن جدا",
     "Moyenne": 12.1,
     "Sciences naturelles": 10.25,
     "Sciences Islamique": "\/",
     "Anglais": 15,
     "Physique": 13.25,
     "Mathématiques": 11.75,
     "Langue Arabe": 11.5,
     "Filiere": "\/",
     "Matricule": "12022010",
     "Nom et prénom": "بن جامع رياض"
    },
    {
     "Mention": "حسن",
     "Moyenne": 11.75,
     "Sciences naturelles": 16.5,
     "Sciences Islamique": "\/",
     "Anglais": 15,
     "Physique": 20,
     "Mathématiques": 9.25,
     "Langue Arabe": 7.25,
     "Filiere": "\/",
     "Matricule": "24032010",
     "Nom et prénom": "معريش ليينة مريم"
    },
    {
     "Mention": "مقبول",
     "Moyenne": 10.8,
     "Sciences naturelles": 9.5,
     "Sciences Islamique": "\/",
     "Anglais": 13.25,
     "Physique": 18,
     "Mathématiques": 10.75,
     "Langue Arabe": 7.5,
     "Filiere": "\/",
     "Matricule": "24082009",
     "Nom et prénom": "بكاي أنيس"
    },
    {
     "Mention": "مقبول",
     "Moyenne": 10.2,
     "Sciences naturelles": 10.75,
     "Sciences Islamique": "\/",
     "Anglais": 11,
     "Physique": 17.25,
     "Mathématiques": 5,
     "Langue Arabe": 11,
     "Filiere": "\/",
     "Matricule": "05072009",
     "Nom et prénom": "دهيري روان"
    },
    {
     "Mention": "\/",
     "Moyenne": 9.93,
     "Sciences naturelles": 11.75,
     "Sciences Islamique": "\/",
     "Anglais": 17,
     "Physique": 13.75,
     "Mathématiques": 7.25,
     "Langue Arabe": 7,
     "Filiere": "\/",
     "Matricule": "21012009",
     "Nom et prénom": "حدادي سارة"
    },
    {
     "Mention": "\/",
     "Moyenne": 9.8,
     "Sciences naturelles": 11.75,
     "Sciences Islamique": "\/",
     "Anglais": 9.25,
     "Physique": 15,
     "Mathématiques": 11.25,
     "Langue Arabe": 6,
     "Filiere": "\/",
     "Matricule": "23092009",
     "Nom et prénom": "اعزوڨن سامي"
    },
    {
     "Mention": "\/",
     "Moyenne": 9.26,
     "Sciences naturelles": 9.5,
     "Sciences Islamique": "\/",
     "Anglais": 5.5,
     "Physique": 14.5,
     "Mathématiques": 10,
     "Langue Arabe": 8,
     "Filiere": "\/",
     "Matricule": "12022009",
     "Nom et prénom": "العاقل وائل أمير"
    },
    {
     "Mention": "\/",
     "Moyenne": 9.25,
     "Sciences naturelles": 12.75,
     "Sciences Islamique": "\/",
     "Anglais": 7,
     "Physique": 15,
     "Mathématiques": 9.5,
     "Langue Arabe": 6.25,
     "Filiere": "\/",
     "Matricule": "28102009",
     "Nom et prénom": "خميلي فلة"
    },
    {
     "Mention": "\/",
     "Moyenne": 9.13,
     "Sciences naturelles": 12.5,
     "Sciences Islamique": "\/",
     "Anglais": 12.25,
     "Physique": 14,
     "Mathématiques": 3,
     "Langue Arabe": 9.5,
     "Filiere": "\/",
     "Matricule": "24092009",
     "Nom et prénom": "هنّي سميرة"
    },
    {
     "Mention": "\/",
     "Moyenne": 9.01,
     "Sciences naturelles": 10.75,
     "Sciences Islamique": "\/",
     "Anglais": 9.5,
     "Physique": 14.25,
     "Mathématiques": 7.5,
     "Langue Arabe": 7.25,
     "Filiere": "\/",
     "Matricule": "05072009",
     "Nom et prénom": "رميدة محمد المعتصم بالله"
    },
    {
     "Mention": "\/",
     "Moyenne": 8.53,
     "Sciences naturelles": 13.75,
     "Sciences Islamique": "\/",
     "Anglais": 10.25,
     "Physique": 14.75,
     "Mathématiques": 5.75,
     "Langue Arabe": 5.5,
     "Filiere": "\/",
     "Matricule": "12112009",
     "Nom et prénom": "بن شافعة آدم"
    },
    {
     "Mention": "\/",
     "Moyenne": 8.4,
     "Sciences naturelles": 5.5,
     "Sciences Islamique": "\/",
     "Anglais": 9.25,
     "Physique": 10.25,
     "Mathématiques": 9,
     "Langue Arabe": 8,
     "Filiere": "\/",
     "Matricule": "16032008",
     "Nom et prénom": "كوميمة وردة"
    },
    {
     "Mention": "\/",
     "Moyenne": 7.73,
     "Sciences naturelles": 8.75,
     "Sciences Islamique": "\/",
     "Anglais": 8.5,
     "Physique": 9,
     "Mathématiques": 7.75,
     "Langue Arabe": 6.5,
     "Filiere": "\/",
     "Matricule": "22072009",
     "Nom et prénom": "معريش أنس"
    },
    {
     "Mention": "\/",
     "Moyenne": 7.33,
     "Sciences naturelles": 11,
     "Sciences Islamique": "\/",
     "Anglais": 6,
     "Physique": 7,
     "Mathématiques": 8,
     "Langue Arabe": 6,
     "Filiere": "\/",
     "Matricule": "19102009",
     "Nom et prénom": "حرير أسامة"
    },
    {
     "Mention": "\/",
     "Moyenne": 7.33,
     "Sciences naturelles": 8,
     "Sciences Islamique": "\/",
     "Anglais": 6,
     "Physique": 9.5,
     "Mathématiques": 4.5,
     "Langue Arabe": 9,
     "Filiere": "\/",
     "Matricule": "05072009",
     "Nom et prénom": "شهبي رانيا"
    },
    {
     "Mention": "\/",
     "Moyenne": 5.83,
     "Sciences naturelles": 12.25,
     "Sciences Islamique": "\/",
     "Anglais": "غائب",
     "Physique": 11.5,
     "Mathématiques": "غائب",
     "Langue Arabe": 8,
     "Filiere": "\/",
     "Matricule": "19012003",
     "Nom et prénom": "تواتي وليد"
    },
    {
     "Mention": "\/",
     "Moyenne": 5.33,
     "Sciences naturelles": 7,
     "Sciences Islamique": "\/",
     "Anglais": 6,
     "Physique": 6.25,
     "Mathématiques": 1,
     "Langue Arabe": 7.5,
     "Filiere": "\/",
     "Matricule": "11082009",
     "Nom et prénom": "بورمة سهل"
    }
   ];

// Variable globale pour stocker les informations de l'utilisateur
var user;

// Gérer la soumission du formulaire
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le formulaire de se soumettre normalement

    // Récupère les valeurs de matricule et mot de passe
    var matricule = parseInt(document.getElementById('matricule').value);
    

    // Vérifie si les informations de connexion sont valides
    user = users.find(user => user.Matricule === String(matricule));
    if(user) {
        // Calcul de la moyenne générale
        

        // Affiche les informations de l'utilisateur
        document.getElementById('userName').innerText = user["Nom et prénom"];
        document.getElementById('filiere').innerText = user.Filiere;
        document.getElementById('userNotes').innerHTML = `
            <tr>
                <th>Matière</th>
                <th>Note</th>
            </tr>
            <tr>
                <td>Langue Arabe</td>
                <td>${user["Langue Arabe"]}</td>
            </tr>
            <tr>
                <td>Mathématiques</td>
                <td>${user.Mathématiques}</td>
            </tr>
            <tr>
                <td>Physique</td>
                <td>${user.Physique}</td>
            </tr>
            <tr>
                <td>Anglais</td>
                <td>${user.Anglais}</td>
            </tr>
            <tr>
                <td>Sciences Islamique</td>
                <td>${user["Sciences Islamique"]}</td>
            </tr>
            <tr>
                <td>Sciences naturelles</td>
                <td>${user["Sciences naturelles"]}</td>
            </tr>
            <tr>
            <th>Moyenne générale</th>
            <th>${user.Moyenne}</th>
        </tr>
        <tr>
        <th>Mention</th>
        <th>${user.Mention}</th>
    </tr>
        `;
        document.getElementById('userInfo').style.display = 'block';
        // Cache le formulaire de connexion
        document.getElementById('loginForm').style.display = 'none';

        // Afficher le bouton de téléchargement des notes
        document.getElementById('downloadButton').style.display = 'block';
        // Ajouter un écouteur d'événements pour le clic sur le bouton de téléchargement
        document.getElementById('downloadButton').addEventListener('click', downloadPDF);
    } else {
        alert('Matricule incorrect');
    }
});

// Fonction pour télécharger les notes au format PDF
// Fonction pour télécharger les notes au format PDF
// Fonction pour télécharger les notes au format PDF
// Fonction pour télécharger les notes au format PDF
function downloadPDF() {
    // Création d'une nouvelle instance de jsPDF
    var doc = new jsPDF();

    // Ajouter le logo (120 px de largeur)
     // Ajouter le logo à la position (10, 10) avec une largeur de 120 px

    // Autres éléments du PDF
    doc.setFont("Lateef");
    doc.setFontSize(16);
    doc.text('République algérienne démocratique et populaire',55 , 20);
    doc.text('Association Soummam pour l\'enfance et la jeunesse', 55, 30);
    doc.setFontSize(22);
    doc.setFontStyle('bold');
    doc.text('Relevé de notes', 100, 45);
    doc.setFontSize(16);
    // Récupération des informations de l'utilisateur
    var userName = document.getElementById('userName').innerText;
    var userFiliere = "Filière: "+ user.Filiere.toString(); // Vous pouvez remplacer par la vraie filière

    // Tableau des notes
    var userNotes = [
        ["Matière", "Note"],
        ["Langue Arabe", user["Langue Arabe"].toString()],
        ["Mathématique ", user.Mathématiques.toString()],
        ["Physique", user.Physique.toString()],
        ["Anglais", user.Anglais.toString()],
        ["Sciences Islamiques", user["Sciences Islamique"].toString()],
        ["Sciences Naturelles", user["Sciences naturelles"].toString()],
        ["Moyenne Générale", user.Moyenne.toString()],
        ["Mention", user.Mention.toString()],
     
    ];

    // Ajouter le nom de l'utilisateur et sa filière
    doc.setFontStyle('normal');
    doc.text('Nom de l\'étudiant: ' + userName, 10, 75);
    doc.text(userFiliere, 10, 85);

    // Définir la position initiale du tableau
    var startX = 10;
    var startY = 120;

    // Dessiner les lignes du tableau
    for (var i = 0; i < userNotes.length; i++) {
        var row = userNotes[i];
        for (var j = 0; j < row.length; j++) {
            doc.text(row[j], startX + j * 50, startY + i * 10); // Ajouter chaque élément du tableau à la position appropriée
        }
    }

    // Ajouter une signature
    doc.text('Signature:', 160, 240);
    doc.text('Gue de Constantine le 06/04/2024:', 80, 220);

    // Téléchargement du PDF avec le nom "notes_utilisateur.pdf"
    doc.save('relevé_de_notes_' + userName + '.pdf');
}

