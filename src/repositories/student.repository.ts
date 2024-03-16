import { mysqlDB } from "../adapters";
import { StudentEntity } from "../entities";

export class StudentRepository {
  create = async (student: StudentEntity): Promise<StudentEntity | null> => {
    return new Promise<StudentEntity | null>((resolve, reject) => {
      mysqlDB.query("INSERT INTO tbl_students SET ?", student, (err, res) => {
        if (err) {
          console.error("Error on query." + err);
          reject(err);
          return;
        }
        resolve({
          ...student,
          id: res.insertId,
        });
      });
    });
  };

  getAll = async (): Promise<StudentEntity[]> => {
    return new Promise((resolve, reject) => {
      mysqlDB.query("SELECT * FROM tbl_students ORDER BY name ASC", (err, res) => {
        if (err) {
          console.error("Error on query." + err);
          reject(err);
          return;
        }
        resolve(res as StudentEntity[]);
      });
    });
  };

  getAllById = async (studentId: number): Promise<StudentEntity | null> => {
    return new Promise((resolve, reject) => {
      mysqlDB.query("SELECT * FROM tbl_students WHERE id =?", [studentId], (err, res) => {
        if (err) {
          console.error("Error on query." + err);
          reject(err);
          return;
        }
        if (res.length === 0) {
          resolve(null);
        } else {
          resolve(res[0] as StudentEntity);
        }
      });
    });
  };

  update = async (studentId: number, updateStudent: StudentEntity): Promise<StudentEntity | null> => {
    return new Promise((resolve, reject) => {
      mysqlDB.query("UPDATE tbl_students SET ? WHERE id =?", [updateStudent, studentId], (err, res) => {
        if (err) {
          console.error("Error on query." + err);
          reject(err);
          return;
        }
        if (res.affectedRows === 0) {
          resolve(null);
        } else {
          resolve(updateStudent);
        }
      });
    });
  };

  delete = async (studentId: number): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      mysqlDB.query("DELETE FROM tbl_students WHERE id =?", [studentId], (err, res) => {
        if (err) {
          console.error("Error on query." + err);
          reject(err);
          return;
        }
        resolve(res.affectedRows > 0);
      });
    });
  };
}
