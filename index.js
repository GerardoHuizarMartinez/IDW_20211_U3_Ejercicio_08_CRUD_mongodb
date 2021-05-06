var mongoose = require('mongoose');

var schema = require('./student-schema');

mongoose.connect('mongodb://localhost:27017/Eje04')

// Parametros: nombre del modelo, nombre de la colección
var Student = mongoose.model("Students", schema, "students");

var student = new Student({
  name: "Gerardo Huizar",
  email: "lugehuizarma@ittepic.edu.mx",
  grade: 90,
});

student.save(function (error) {
  if (error) {
    console.log(console.error());
    process.exit(1);
  }
  console.log("Creación exitosa");
  Student.find({}, function (error, docs) {
    if (error) {
      console.log(error);
      process.exit(1);
    }
    console.log("---- Consulta general 1 ----");
    console.log(docs);
    Student.update(
      {
        _id: "609380cf7cb561351497fe66",
      },
      {
        $set: {
          name: "Aura Avila",
        },
      },
      function (error, docs) {
        if (error) {
          console.log(error);
          process.exit(1);
        }
        console.log("---- Actualización ----");
        console.log(docs);
        Student.find({}, function (error, docs) {
          if (error) {
            console.log(error);
            process.exit(1);
          }
          console.log("---- Consulta general 2 ----");
          console.log(docs);
          Student.find({}, function (error, docs) {
            if (error) {
              console.log(error);
              process.exit(1);
            }
            console.log("---- Consulta general 3 ----");
            console.log(docs);
            Student.find({}, function (error, docs) {
              if (error) {
                console.log(error);
                process.exit(1);
              }
              console.log("---- Consulta general 4 ----");
              console.log(docs);
              Student.findByIdAndRemove(
                { _id: "60915e5aa3973a48ccd9347d" },
                function (error, docs) {
                  if (error) {
                    console.log(error);
                    process.exit(1);
                  }
                  console.log("---- Eliminación ----");
                  console.log(docs);
                  Student.find({}, function (error, docs) {
                    if (error) {
                      console.log(error);
                      process.exit(1);
                    }
                    console.log("---- Consulta general 5 ----");
                    console.log(docs);
                    process.exit(0);
                  });
                }
              );
            });
          });
        });
      }
    );
  });
});
