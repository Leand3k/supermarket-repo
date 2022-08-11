using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SuperMarket.Infraestructure.Migrations
{
    public partial class InitialCreate3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProductsType");

            migrationBuilder.DropColumn(
                name: "ProductTypeID",
                table: "Products");

            migrationBuilder.RenameColumn(
                name: "ImagePath",
                table: "Products",
                newName: "Type");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Type",
                table: "Products",
                newName: "ImagePath");

            migrationBuilder.AddColumn<int>(
                name: "ProductTypeID",
                table: "Products",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "ProductsType",
                columns: table => new
                {
                    ProductTypeID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductsType", x => x.ProductTypeID);
                });
        }
    }
}