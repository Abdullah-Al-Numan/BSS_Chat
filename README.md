# BSS_Chat

<h3>Client (front-end)</h3> <br/>
<p>.Used React.js </p> <br/>

<h3>Service (back-end) </h3>
<p>.Used ASP.NET Core 6.0 Web API <br/>
   . used SignalR <br/>
   . Swagger UI </p>
<<h3>How to run locally</h3>
<p>.Download and install the .NET Core SDK <br/>
If you don't have localdb available on your system, Download and install SQL Server Express </p>

<h4>in BSS_Chat_API folder:</h4>
<p>. Open the solution using Visula Studio and press ctrl + F5 <br/>
Navigate to Tools > Package Manager > Manage NuGet Packages for Solution and run the below commands: <br/>
. add-migration "create initial" <br/>
. update-database <br/>
Open your browser to: https://localhost:7117/swagger/index.html. </p>

<h4>In BSS_Chat folder and run the following npm commands: </h4>
<p>. npm install <br/>
. npm start <br/>
The webpack dev server hosts the front-end and your browser will open to: http://localhost:3000 <p/>
