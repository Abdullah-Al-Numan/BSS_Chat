using Microsoft.AspNetCore.Identity;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace BSS_Chat_API.Model
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string firstname { get; set; }
        public string lastname { get; set; }
        [Required]
        public string email { get; set; }

        [DefaultValue(false)]
        public bool isAvatar { get; set; }
        public string? avatar { get; set; }
    }
}
