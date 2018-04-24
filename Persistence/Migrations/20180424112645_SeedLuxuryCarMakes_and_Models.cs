using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Vega.Migrations
{
    public partial class SeedLuxuryCarMakes_and_Models : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
             migrationBuilder.Sql("INSERT INTO Makes (Name) VALUES ('Ferrari')");
            migrationBuilder.Sql("INSERT INTO Makes (Name) VALUES ('Lamborghini')");
            migrationBuilder.Sql("INSERT INTO Makes (Name) VALUES ('Jaguar')");
            migrationBuilder.Sql("INSERT INTO Makes (Name) VALUES ('Porsche')");
            migrationBuilder.Sql("INSERT INTO Makes (Name) VALUES ('Mercedes Benz')");
            migrationBuilder.Sql("INSERT INTO Makes (Name) VALUES ('BMW')");
            


            migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('LaFerrari', (SELECT ID FROM Makes WHERE Name = 'Ferrari'))");
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('Ferrari 348', (SELECT ID FROM Makes WHERE Name = 'Ferrari'))");

            migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('P250 Oldtimer', (SELECT ID FROM Makes WHERE Name = 'Lamborghini'))");
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('Gallardo P560-4', (SELECT ID FROM Makes WHERE Name = 'Lamborghini'))");

            migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('XE 20D', (SELECT ID FROM Makes WHERE Name = 'Jaguar'))");
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('XF', (SELECT ID FROM Makes WHERE Name = 'Jaguar'))");


            migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('Boxster', (SELECT ID FROM Makes WHERE Name = 'Porsche'))");
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('Cayman', (SELECT ID FROM Makes WHERE Name = 'Porsche'))");
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('Panamera', (SELECT ID FROM Makes WHERE Name = 'Porsche'))");

            migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('SLS AMG', (SELECT ID FROM Makes WHERE Name = 'Mercedes Benz'))");
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('500', (SELECT ID FROM Makes WHERE Name = 'Mercedes Benz'))");

            migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('730d', (SELECT ID FROM Makes WHERE Name = 'BMW'))");
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('X4', (SELECT ID FROM Makes WHERE Name = 'BMW'))");
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('X5 M', (SELECT ID FROM Makes WHERE Name = 'BMW'))");
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('M4 Coupe', (SELECT ID FROM Makes WHERE Name = 'BMW'))");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM Makes WHERE Name IN ('Ferrari', 'Lamborghini', 'Jaguar','Porsche','Mercedes Benz','BMW')");    
        }
    }
}
