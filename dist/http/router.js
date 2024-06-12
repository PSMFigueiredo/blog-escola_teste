"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const HomeRoute_1 = require("./routes/HomeRoute");
const StudentRoute_1 = require("./routes/StudentRoute");
const ProfessorRoute_1 = require("./routes/ProfessorRoute");
const UserRoute_1 = require("./routes/UserRoute");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", HomeRoute_1.home.paginaInicial);
router.get("/students", StudentRoute_1.student.getAll);
router.get("/students/:id", StudentRoute_1.student.get);
router.delete("/students/:id", StudentRoute_1.student.delete);
router.put("/students/:id", StudentRoute_1.student.update);
router.post("/students", StudentRoute_1.student.create);
router.get("/users", UserRoute_1.user.getAll);
router.get("/users/:id", UserRoute_1.user.get);
router.delete("/users/:id", UserRoute_1.user.delete);
router.put("/users/:id", UserRoute_1.user.update);
router.post("/users", UserRoute_1.user.create);
router.get("/professors", ProfessorRoute_1.professor.getAll);
router.get("/professors/:id", ProfessorRoute_1.professor.get);
router.delete("/professors/:id", ProfessorRoute_1.professor.delete);
router.put("/professors/:id", ProfessorRoute_1.professor.update);
router.post("/professors", ProfessorRoute_1.professor.create);
