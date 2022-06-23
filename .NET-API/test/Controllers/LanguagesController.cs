using Microsoft.AspNetCore.Mvc;
using test.models;

namespace test.Controllers
{
    [ApiController]
    public class LanguagesController :ControllerBase 
    {
        private List<Languages> LanguagesData;

        public LanguagesController()
        {
            this.LanguagesData = new List<Languages>();

            LanguagesData.Add(new Languages(1, "Java"));
            LanguagesData.Add(new Languages(2, "NET"));
            LanguagesData.Add(new Languages(3, "NodeJS"));
            LanguagesData.Add(new Languages(4, "Advanced Vanilla JS"));
            LanguagesData.Add(new Languages(5, "React"));
            LanguagesData.Add(new Languages(6, "Angular"));
            LanguagesData.Add(new Languages(7, "Kotlin"));
            LanguagesData.Add(new Languages(7, "Dart"));
            LanguagesData.Add(new Languages(8, "Flutter"));
        }



        [HttpGet("Languages")]
        public IEnumerable<Languages> GetAllLanguages()
        {
            return this.LanguagesData;
        }

        [HttpGet("Languages/{id}")]
        public ActionResult GetLanguageById(int id)
        {
            var res = this.LanguagesData.Find(x => x.Id == id);

            if (res != null) {
                return Ok(res);
            }
            return NotFound(); 
        }
    }
}
