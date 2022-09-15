# BSS_Chat

<h2>Client (front-end)</h2>
<p>. Used React.js </p>

<h2>Service (back-end) </h2>
<p>. Used ASP.NET Core 6.0 Web API <br/>
   . used SignalR <br/>
   . Swagger UI </p>
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
