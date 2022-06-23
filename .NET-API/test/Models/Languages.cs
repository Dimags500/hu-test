namespace test.models
{
    public class Languages
    {
        public Languages()
        {
                
        }
        public Languages( int Id , string Name)
        {
            this.Name = Name;
            this.Id = Id;
        }
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
