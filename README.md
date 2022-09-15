# BSS_Chat

<h2>Client (front-end)</h2>
<p>. Used React.js </p>
<h3>Login Page</h3>
<img src="https://user-images.githubusercontent.com/60642006/190406459-07e18bc2-dff7-4aa2-88a6-d73c8df137eb.png" alt="login" />
<h3>Register Page</h3>
<img src="https://user-images.githubusercontent.com/60642006/190408379-e963976e-3775-4bdc-a14a-d1a2a102530b.png" alt="Register" />
<h3>Set avatar Page</h3>
<img src="https://user-images.githubusercontent.com/60642006/190411548-25a3312b-f3b1-4d95-b442-c47ec229138c.png" alt="Avarar" />
<h3>Home Page</h3>
<img src="https://user-images.githubusercontent.com/60642006/190411896-c58bf54d-fff1-4c08-a4dd-b507e71e9b42.png" alt="Home" />
<h3>Chat Room</h3>
<img src = "https://user-images.githubusercontent.com/60642006/190412326-7ecb2e07-29be-483b-b78c-50e87c42b598.png" alt="chatroom" />

<h2>Service (back-end) </h2>
<p>. Used ASP.NET Core 6.0 Web API <br/>
   . used SignalR <br/>
   . Swagger UI </p>
<h3>User Model</h3>
<img src="https://user-images.githubusercontent.com/60642006/190418884-cbbbdf5b-6a69-4210-a044-3131c1859a98.png" alt="usermodel" />
<h3>Massage Model</h3>
<p>users string contains "senderId,RecieverId" </p>
<img src="https://user-images.githubusercontent.com/60642006/190420404-8760ec68-8d2e-4595-a9a7-426b57e54c6e.png" alt="Messagemodel" />

<h2>How to run locally</h2>
<p>. Download and install the .NET Core SDK <br/>. If you don't have localdb available on your system, Download and install SQL Server Express </p>

<h3>in BSS_Chat_API folder:</h3>
<p>. Open the solution using Visula Studio and press ctrl + F5 <br/>
. Navigate to Tools > Package Manager > Manage NuGet Packages for Solution and run the below commands: <br/>
. add-migration "create initial" <br/>
. update-database <br/>
. Open your browser to: https://localhost:7117/swagger/index.html. </p>

<h3>In BSS_Chat folder and run the following npm commands: </h3>
<p>. npm install <br/>
. npm start <br/>
. The webpack dev server hosts the front-end and your browser will open to: http://localhost:3000 <p/>
