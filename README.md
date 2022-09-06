# BSS_Chat

Client (front-end)
.React 

Service (back-end)
.ASP.NET Core 6.0 Web API
.Swagger UI

How to run locally
Download and install the .NET Core SDK
If you don't have localdb available on your system, Download and install SQL Server Express

Run the following commands in BSS_Chat_API folder:
.dotnet run
Navigate to Tools > Package Manager > Manage NuGet Packages for Solution and run the below commands:
.add-migration "create initial"
.update-database
Open your browser to: https://localhost:7117/swagger/index.html.

In BSS_Chat folder and run the following npm commands:
.npm install
.npm start
The webpack dev server hosts the front-end and your browser will open to: http://localhost:3000
