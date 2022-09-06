using BSS_Chat_API.Model;
using Microsoft.AspNetCore.SignalR;

namespace BSS_Chat_API.Hubs
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(Massage message)
        {
            await Clients.All.SendAsync("ReceiveMessage", message);
        }
    }
}
