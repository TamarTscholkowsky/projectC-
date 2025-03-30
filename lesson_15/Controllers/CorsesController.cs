using lesson_15.Entites;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Xml.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace lesson_15.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CorsesController : ControllerBase
    {

        //static List<Corses> listCorses = new List<Corses>()
        //{
        //    new Corses() {Id=1 ,Name="cook", dateOfCorse=new DateOnly(2025,01,01) },
        //    new Corses() {Id=2 ,Name="drow", dateOfCorse=new DateOnly(2025,01,01) },
        //    new Corses() {Id=3 ,Name="bake", dateOfCorse=new DateOnly(2025,01,01) }
        //};

        private readonly DataContext _Context;

       public CorsesController()
        {
            _Context = new DataContext();
        }
        // GET: api/<CorsesController>
        [HttpGet]
        //[EnableCors("AllowSpecificOrigin")]
        [EnableCors("MyPolicy")]
        public List<Corses> Get()
        {
            return _Context.Corses.ToList();
        }

        // GET api/<CorsesController>/5
        //שליפה לפי ID
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try {
               Corses c= _Context.Corses.First(s => s.Id == id);
                return Ok(c);

            }
            catch(Exception ex)
            {
                return NotFound("is not found");
            }

        }
        //[HttpGet("find")]
        //public Corses find(string query)
        //{
        //    Console.WriteLine(query);

        //    return null;
        //}


        // POST api/<CorsesController>
        //הוספה
        [HttpPost]
        public void Post([FromBody] Corses c)
        {
            _Context.Corses.Add(c);  
        }

        //public DataContext Get_Context()
        //{
        //    return _Context.Corses;
        //}
        //כתיבה לקובץ
        [HttpPost("createDataSave/{path}")]
        public IActionResult Post(string path, DataContext _Context)
        {
            if (path.Contains(".txt"))
            {
                return BadRequest("You sholuld provide a txt file");
            }
                using (StreamWriter writer = new StreamWriter(path))
                {
                    foreach (Corses c in _Context.Corses.ToList())
                    {
                        writer.WriteLine();
                        writer.Write(c.Name + ":");
                        writer.Write(c.dateOfCorse.ToString());
                    }
                    return Ok("success"); 
                }
               
        }
        //  לפי ID עידכון
        // PUT api/<CorsesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Corses c)
        {
            int index= _Context.Corses.ToList().FindIndex(s=>s.Id==id);
            _Context.Corses.ToList()[index].Name = c.Name;
            _Context.Corses.ToList()[index].dateOfCorse = c.dateOfCorse;
            //////////
        }


        //מחיקה
        // DELETE api/<CorsesController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            try { 
            int index = _Context.Corses.ToList().FindIndex(c => c.Id == id);
                _Context.Corses.ToList().RemoveAt(index);
                return Ok("succest");

            }
            catch
            {
                return NotFound("is not found");
            }
            
        }
    }
}
