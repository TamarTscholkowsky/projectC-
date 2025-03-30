using lesson_15.Entites;
using Microsoft.EntityFrameworkCore;


namespace lesson_15
{
    public class DataContext:DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        
            optionsBuilder.UseSqlServer("Server=DESKTOP-7PLBN0T\\SQLEXPRESS;Database=CoursesDb;User Id=DESKTOP-7PLBN0T\\משתמש;Integrated Security=True;TrustServerCertificate=True");
                                                                                  

        }

        public DbSet<Corses> Corses { get; set; }
   
    
    
    
    }
}
