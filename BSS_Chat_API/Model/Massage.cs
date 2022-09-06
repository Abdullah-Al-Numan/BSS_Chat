using Microsoft.Build.Framework;

namespace BSS_Chat_API.Model
{
    public class Massage
    {
        public int id { get; set; }
        public string massage { get; set; }
        public string users { get; set; }
        public string timestamp { get; set; }
    }
}
