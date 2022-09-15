# BSS_Chat

<h3>Client (front-end)</h3> <br/>
<p>. React </p> <br/>

Service (back-end) <br/>
. ASP.NET Core 6.0 Web API <br/>
. Swagger UI <br/>

How to run locally<br/>

Download and install the .NET Core SDK <br/>
If you don't have localdb available on your system, Download and install SQL Server Express <br/>

Run the following commands in BSS_Chat_API folder: <br/>
. dotnet run <br/>
Navigate to Tools > Package Manager > Manage NuGet Packages for Solution and run the below commands: <br/>
. add-migration "create initial" <br/>
. update-database <br/>
Open your browser to: https://localhost:7117/swagger/index.html. <br/>

In BSS_Chat folder and run the following npm commands: <br/>
. npm install <br/>
. npm start <br/>
The webpack dev server hosts the front-end and your browser will open to: http://localhost:3000 <br/>
