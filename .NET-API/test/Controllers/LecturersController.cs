using Microsoft.AspNetCore.Mvc;
using test.models;

namespace test.Controllers
{

    [ApiController]
    public class LecturersController : ControllerBase
    {

       private List<Lecturers> LecturersData;

        public LecturersController()
        {
            this.LecturersData = new List<Lecturers>();
            LecturersData.Add(new Lecturers() { Id = 1, Name = "Moshe", Email = "moshe@moshe.com", Languages = new int []{1, 2} });
            LecturersData.Add(new Lecturers() { Id = 20, Name = "Avi", Email = "avi@moshe.com", Languages = new int[] { 3 } });
            LecturersData.Add(new Lecturers() { Id = 300, Name = "Gila", Email = "gila@moshe.com", Languages = new int[] { 2, 4, 7 } });
        }


        [HttpGet("Lecturers")]
        public IEnumerable<Lecturers> GetAllLecturers()
        {
            return this.LecturersData;
        }


        [HttpGet("Lecturers/{id}")]
        public ActionResult GetLecturersByLanguage(int id)
        {
            var res = this.LecturersData.FindAll(l => l.Languages.Contains(id));

            if (res != null)
            {
                return Ok(res);
            }
            return NotFound();

        }



    }
}
