USE[master]
GO
/****** Object:  Database [RetroReserve]    Script Date: 27-04-2024 10:31:53 ******/
CREATE DATABASE[RetroReserve]
CONTAINMENT = NONE
 ON  PRIMARY
    (NAME = N'RetroReserve', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER03\MSSQL\DATA\RetroReserve.mdf', SIZE = 73728KB, MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB)
 LOG ON
    (NAME = N'RetroReserve_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER03\MSSQL\DATA\RetroReserve_log.ldf', SIZE = 8192KB, MAXSIZE = 2048GB, FILEGROWTH = 65536KB)
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE[RetroReserve] SET COMPATIBILITY_LEVEL = 160
GO
IF(1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC[RetroReserve].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE[RetroReserve] SET ANSI_NULL_DEFAULT OFF
GO
ALTER DATABASE[RetroReserve] SET ANSI_NULLS OFF
GO
ALTER DATABASE[RetroReserve] SET ANSI_PADDING OFF
GO
ALTER DATABASE[RetroReserve] SET ANSI_WARNINGS OFF
GO
ALTER DATABASE[RetroReserve] SET ARITHABORT OFF
GO
ALTER DATABASE[RetroReserve] SET AUTO_CLOSE OFF
GO
ALTER DATABASE[RetroReserve] SET AUTO_SHRINK OFF
GO
ALTER DATABASE[RetroReserve] SET AUTO_UPDATE_STATISTICS ON
GO
ALTER DATABASE[RetroReserve] SET CURSOR_CLOSE_ON_COMMIT OFF
GO
ALTER DATABASE[RetroReserve] SET CURSOR_DEFAULT  GLOBAL
GO
ALTER DATABASE[RetroReserve] SET CONCAT_NULL_YIELDS_NULL OFF
GO
ALTER DATABASE[RetroReserve] SET NUMERIC_ROUNDABORT OFF
GO
ALTER DATABASE[RetroReserve] SET QUOTED_IDENTIFIER OFF
GO
ALTER DATABASE[RetroReserve] SET RECURSIVE_TRIGGERS OFF
GO
ALTER DATABASE[RetroReserve] SET  ENABLE_BROKER
GO
ALTER DATABASE[RetroReserve] SET AUTO_UPDATE_STATISTICS_ASYNC OFF
GO
ALTER DATABASE[RetroReserve] SET DATE_CORRELATION_OPTIMIZATION OFF
GO
ALTER DATABASE[RetroReserve] SET TRUSTWORTHY OFF
GO
ALTER DATABASE[RetroReserve] SET ALLOW_SNAPSHOT_ISOLATION OFF
GO
ALTER DATABASE[RetroReserve] SET PARAMETERIZATION SIMPLE
GO
ALTER DATABASE[RetroReserve] SET READ_COMMITTED_SNAPSHOT OFF
GO
ALTER DATABASE[RetroReserve] SET HONOR_BROKER_PRIORITY OFF
GO
ALTER DATABASE[RetroReserve] SET RECOVERY FULL
GO
ALTER DATABASE[RetroReserve] SET  MULTI_USER
GO
ALTER DATABASE[RetroReserve] SET PAGE_VERIFY CHECKSUM
GO
ALTER DATABASE[RetroReserve] SET DB_CHAINING OFF
GO
ALTER DATABASE[RetroReserve] SET FILESTREAM(NON_TRANSACTED_ACCESS = OFF)
GO
ALTER DATABASE[RetroReserve] SET TARGET_RECOVERY_TIME = 60 SECONDS
GO
ALTER DATABASE[RetroReserve] SET DELAYED_DURABILITY = DISABLED
GO
ALTER DATABASE[RetroReserve] SET ACCELERATED_DATABASE_RECOVERY = OFF
GO
EXEC sys.sp_db_vardecimal_storage_format N'RetroReserve', N'ON'
GO
ALTER DATABASE[RetroReserve] SET QUERY_STORE = ON
GO
ALTER DATABASE[RetroReserve] SET QUERY_STORE(OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE[RetroReserve]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[__EFMigrationsHistory](
    [MigrationId][nvarchar](150) NOT NULL,
    [ProductVersion][nvarchar](32) NOT NULL,
    CONSTRAINT[PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED
    (
        [MigrationId] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetRoleClaims]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[AspNetRoleClaims](
    [Id][int] IDENTITY(1, 1) NOT NULL,
    [RoleId][nvarchar](450) NOT NULL,
    [ClaimType][nvarchar](max) NULL,
    [ClaimValue][nvarchar](max) NULL,
    CONSTRAINT[PK_AspNetRoleClaims] PRIMARY KEY CLUSTERED
    (
        [Id] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY] TEXTIMAGE_ON[PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetRoles]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[AspNetRoles](
    [Id][nvarchar](450) NOT NULL,
    [Name][nvarchar](256) NULL,
    [NormalizedName][nvarchar](256) NULL,
    [ConcurrencyStamp][nvarchar](max) NULL,
    CONSTRAINT[PK_AspNetRoles] PRIMARY KEY CLUSTERED
    (
        [Id] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY] TEXTIMAGE_ON[PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserClaims]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[AspNetUserClaims](
    [Id][int] IDENTITY(1, 1) NOT NULL,
    [UserId][nvarchar](450) NOT NULL,
    [ClaimType][nvarchar](max) NULL,
    [ClaimValue][nvarchar](max) NULL,
    CONSTRAINT[PK_AspNetUserClaims] PRIMARY KEY CLUSTERED
    (
        [Id] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY] TEXTIMAGE_ON[PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserLogins]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[AspNetUserLogins](
    [LoginProvider][nvarchar](450) NOT NULL,
    [ProviderKey][nvarchar](450) NOT NULL,
    [ProviderDisplayName][nvarchar](max) NULL,
    [UserId][nvarchar](450) NOT NULL,
    CONSTRAINT[PK_AspNetUserLogins] PRIMARY KEY CLUSTERED
    (
        [LoginProvider] ASC,
        [ProviderKey] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY] TEXTIMAGE_ON[PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserRoles]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[AspNetUserRoles](
    [UserId][nvarchar](450) NOT NULL,
    [RoleId][nvarchar](450) NOT NULL,
    CONSTRAINT[PK_AspNetUserRoles] PRIMARY KEY CLUSTERED
    (
        [UserId] ASC,
        [RoleId] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUsers]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[AspNetUsers](
    [Id][nvarchar](450) NOT NULL,
    [Name][nvarchar](max) NOT NULL,
    [Adhaar][nvarchar](max) NOT NULL,
    [UserName][nvarchar](256) NULL,
    [NormalizedUserName][nvarchar](256) NULL,
    [Email][nvarchar](256) NULL,
    [NormalizedEmail][nvarchar](256) NULL,
    [EmailConfirmed][bit] NOT NULL,
    [PasswordHash][nvarchar](max) NULL,
    [SecurityStamp][nvarchar](max) NULL,
    [ConcurrencyStamp][nvarchar](max) NULL,
    [PhoneNumber][nvarchar](max) NULL,
    [PhoneNumberConfirmed][bit] NOT NULL,
    [TwoFactorEnabled][bit] NOT NULL,
    [LockoutEnd][datetimeoffset](7) NULL,
    [LockoutEnabled][bit] NOT NULL,
    [AccessFailedCount][int] NOT NULL,
    CONSTRAINT[PK_AspNetUsers] PRIMARY KEY CLUSTERED
    (
        [Id] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY] TEXTIMAGE_ON[PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserTokens]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[AspNetUserTokens](
    [UserId][nvarchar](450) NOT NULL,
    [LoginProvider][nvarchar](450) NOT NULL,
    [Name][nvarchar](450) NOT NULL,
    [Value][nvarchar](max) NULL,
    CONSTRAINT[PK_AspNetUserTokens] PRIMARY KEY CLUSTERED
    (
        [UserId] ASC,
        [LoginProvider] ASC,
        [Name] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY] TEXTIMAGE_ON[PRIMARY]
GO
/****** Object:  Table [dbo].[Bookingtable]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[Bookingtable](
    [TableBookingId][int] IDENTITY(1, 1) NOT NULL,
    [TableId][int] NULL,
    [UserId][varchar](50) NULL,
    [People][int] NULL,
    [Email][varchar](50) NULL,
    [BookingTime][varchar](50) NULL,
    [description][varchar](255) NULL,
    [Status][int] NULL,
    [BookingOn][datetime] NULL,
    PRIMARY KEY CLUSTERED
    (
        [TableBookingId] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY]
GO
/****** Object:  Table [dbo].[Cart]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[Cart](
    [CartId][int] IDENTITY(1, 1) NOT NULL,
    [UserID][varchar](50) NULL,
    [Id][int] NULL,
    [Quantity][int] NULL,
    [CreatedAt][datetime] NULL,
    PRIMARY KEY CLUSTERED
    (
        [CartId] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY]
GO
/****** Object:  Table [dbo].[City]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[City](
    [city_id][int] IDENTITY(1, 1) NOT NULL,
    [state_id][int] NULL,
    [city_name][varchar](100) NULL,
    [status][int] NULL,
    [created_date][datetime] NULL,
    PRIMARY KEY CLUSTERED
    (
        [city_id] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY]
GO
/****** Object:  Table [dbo].[DboyReview]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[DboyReview](
    [DboyRId][int] IDENTITY(1, 1) NOT NULL,
    [DboyId][int] NULL,
    [Comment][varchar](255) NULL,
    [Rating][int] NULL,
    [Status][int] NULL,
    [ReviewOn][datetime] NULL,
    [OrderId][int] NULL,
    [Email][varchar](100) NULL,
    PRIMARY KEY CLUSTERED
    (
        [DboyRId] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY]
GO
/****** Object:  Table [dbo].[DeliveredOrder]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[DeliveredOrder](
    [DeliveredOrderId][int] IDENTITY(1000, 1) NOT NULL,
    [OrderId][int] NULL,
    [EmpId][int] NULL,
    [AssignOn][datetime] NULL,
    [DeliveredOrCancelledOn][varchar](50) NULL,
    [CommitionEarning][decimal](18, 2) NULL,
    [Status][int] NULL,
    [Email][varchar](100) NULL,
    [cancellation_Reason][varchar](100) NULL,
    [UserEmail][varchar](250) NULL,
    PRIMARY KEY CLUSTERED
    (
        [DeliveredOrderId] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY]
GO
/****** Object:  Table [dbo].[DeliveryAddress]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[DeliveryAddress](
    [AddressId][int] IDENTITY(1, 1) NOT NULL,
    [UserId][varchar](50) NULL,
    [RecipientName][varchar](255) NULL,
    [RecipientContact][varchar](255) NULL,
    [StreetAddress][varchar](255) NULL,
    [LandMark][varchar](255) NULL,
    [State][varchar](100) NULL,
    [City][varchar](100) NULL,
    [Postalcode][varchar](20) NULL,
    [CreatedAt][datetime] NULL,
    [UpdatedAt][varchar](50) NULL,
    [Status][int] NULL,
    PRIMARY KEY CLUSTERED
    (
        [AddressId] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY]
GO
/****** Object:  Table [dbo].[OrderAmount]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[OrderAmount](
    [AmountId][int] IDENTITY(1, 1) NOT NULL,
    [OrderID][int] NULL,
    [Amount][real] NULL,
    [Status][int] NULL,
    [CreatedDate][datetime] NULL,
    PRIMARY KEY CLUSTERED
    (
        [AmountId] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY]
GO
/****** Object:  Table [dbo].[PostalCode]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[PostalCode](
    [postal_id][int] IDENTITY(1, 1) NOT NULL,
    [postal_code][int] NULL,
    [city_id][int] NULL,
    [status][int] NULL,
    [created_date][datetime] NULL,
    PRIMARY KEY CLUSTERED
    (
        [postal_id] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY]
GO
/****** Object:  Table [dbo].[State]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[State](
    [state_id][int] IDENTITY(1, 1) NOT NULL,
    [state_name][varchar](100) NULL,
    [status][int] NULL,
    [created_date][datetime] NULL,
    PRIMARY KEY CLUSTERED
    (
        [state_id] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY]
GO
/****** Object:  Table [dbo].[Tabledetails]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[Tabledetails](
    [TableId][int] IDENTITY(1, 1) NOT NULL,
    [Tablename][varchar](50) NULL,
    [Status][int] NULL,
    PRIMARY KEY CLUSTERED
    (
        [TableId] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_AppReview]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[tbl_AppReview](
    [AReviewId][int] IDENTITY(1, 1) NOT NULL,
    [UserID][varchar](50) NULL,
    [Name][varchar](50) NULL,
    [Comment][varchar](255) NULL,
    [Rating][int] NULL,
    [Status][int] NULL,
    [AReviewDate][datetime] NULL,
    PRIMARY KEY CLUSTERED
    (
        [AReviewId] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_BookingTableDetail]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[tbl_BookingTableDetail](
    [BookingId][int] IDENTITY(10000, 1) NOT NULL,
    [TableId][int] NULL,
    [BookingDate][varchar](150) NULL,
    [BookingTime][varchar](150) NULL,
    [NoOfPeople][int] NULL,
    [Entryon][datetime] NULL,
    [Name][varchar](50) NULL,
    [Email][varchar](50) NULL,
    [Status][int] NULL
) ON[PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_CheckoutAddress]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[tbl_CheckoutAddress](
    [AddressId][int] IDENTITY(1, 1) NOT NULL,
    [UserId][int] NULL,
    [Address][varchar](100) NULL,
    [LandMark][varchar](50) NULL,
    [Pincode][int] NULL,
    [Status][int] NULL,
    [createdOn][datetime] NULL,
    PRIMARY KEY CLUSTERED
    (
        [AddressId] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_complaint]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[tbl_complaint](
    [ComplaintId][int] IDENTITY(1, 1) NOT NULL,
    [TableId][int] NULL,
    [CustId][int] NULL,
    [ComplaintType][varchar](50) NULL,
    [Email][varchar](100) NULL,
    [ComplaintDescription][varchar](100) NULL,
    [ComplaintDate][datetime] NULL,
    [Status][int] NULL,
    PRIMARY KEY CLUSTERED
    (
        [ComplaintId] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_contactus]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[tbl_contactus](
    [ContactId][int] IDENTITY(1, 1) NOT NULL,
    [UserName][varchar](50) NULL,
    [Email][varchar](50) NULL,
    [subject][varchar](50) NULL,
    [Comment][varchar](100) NULL,
    [ContactDate][datetime] NULL,
    [status][int] NULL,
    [ProblemSolveDate][varchar](50) NULL,
    PRIMARY KEY CLUSTERED
    (
        [ContactId] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_Coupan]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[tbl_Coupan](
    [CoupanId][int] IDENTITY(1, 1) NOT NULL,
    [CoupanName][varchar](50) NULL,
    [Description][varchar](200) NULL,
    [ValidUpto][varchar](100) NULL,
    [IsActive][bit] NULL,
    [DiscountPercentage][decimal](5, 2) NULL,
    PRIMARY KEY CLUSTERED
    (
        [CoupanId] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_Dishcategory]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[tbl_Dishcategory](
    [DishCategoryId][int] IDENTITY(1, 1) NOT NULL,
    [DishCategoryName][varchar](50) NULL,
    [Status][int] NULL,
    [CreatedOn][datetime] NULL,
    [Icon][varchar](50) NULL,
    PRIMARY KEY CLUSTERED
    (
        [DishCategoryId] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_EmployeeRoleMaster]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[tbl_EmployeeRoleMaster](
    [RoleId][int] IDENTITY(1, 1) NOT NULL,
    [RoleName][varchar](50) NULL,
    [Salary][decimal](18, 2) NULL,
    [CreateDate][datetime] NULL,
    [Status][int] NULL,
    PRIMARY KEY CLUSTERED
    (
        [RoleId] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_employees]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[tbl_employees](
    [EmpId][int] IDENTITY(1, 1) NOT NULL,
    [Name][varchar](50) NULL,
    [Email][varchar](50) NULL,
    [RoleId][int] NULL,
    [Image][varchar](100) NULL,
    [Salary][decimal](18, 2) NULL,
    [Phone][varchar](50) NULL,
    [Gender][varchar](100) NULL,
    [DOB][varchar](100) NULL,
    [AdharNo][varchar](100) NULL,
    [Address][varchar](50) NULL,
    [IsActive][int] NULL,
    [CreatedOn][datetime] NULL,
    PRIMARY KEY CLUSTERED
    (
        [EmpId] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_FAQ]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[tbl_FAQ](
    [FAQId][int] IDENTITY(1, 1) NOT NULL,
    [Quest][nvarchar](max) NULL,
    [Answers][nvarchar](max) NULL,
    [Status][int] NULL,
    [CreatedOn][datetime] NULL,
    PRIMARY KEY CLUSTERED
    (
        [FAQId] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY] TEXTIMAGE_ON[PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_feedback]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[tbl_feedback](
    [FeedbackId][int] IDENTITY(1, 1) NOT NULL,
    [TableId][int] NULL,
    [CustId][int] NULL,
    [FeedbackDescription][varchar](100) NULL,
    [FeedbackCreatedDate][datetime] NULL,
    [FeedbackStatus][int] NULL,
    PRIMARY KEY CLUSTERED
    (
        [FeedbackId] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_foodkart]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[tbl_foodkart](
    [DishId][int] IDENTITY(1, 1) NOT NULL,
    [DishCategoryId][int] NULL,
    [DishType][varchar](50) NULL,
    [DishName][varchar](50) NULL,
    [DishImage][varchar](100) NULL,
    [DishPrize][decimal](18, 2) NULL,
    [DishDescription][varchar](100) NULL,
    [DishAddDate][datetime] NULL,
    [DishStatus][int] NULL,
    [Quantity][int] NULL,
    PRIMARY KEY CLUSTERED
    (
        [DishId] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_massagebox]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[tbl_massagebox](
    [MessageId][int] IDENTITY(1, 1) NOT NULL,
    [Email][varchar](100) NULL,
    [Subject][varchar](100) NULL,
    [Description][varchar](100) NULL,
    [SentEmailDate][datetime] NULL,
    [Status][int] NULL,
    PRIMARY KEY CLUSTERED
    (
        [MessageId] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_Offer]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[tbl_Offer](
    [OfferId][int] IDENTITY(1, 1) NOT NULL,
    [OfferName][varchar](100) NULL,
    [OfferImage][varchar](255) NULL,
    [Description][varchar](255) NULL,
    [ValidUpto][varchar](100) NULL,
    [Discount][varchar](50) NULL,
    [CreatedOn][datetime] NULL,
    [Status][int] NULL,
    PRIMARY KEY CLUSTERED
    (
        [OfferId] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_OrderDetails]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[tbl_OrderDetails](
    [OrderDetailID][int] IDENTITY(1, 1) NOT NULL,
    [OrderID][int] NULL,
    [DishId][int] NULL,
    [Quantity][int] NULL,
    [TotalAmount][decimal](18, 2) NULL,
    PRIMARY KEY CLUSTERED
    (
        [OrderDetailID] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_Orders]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[tbl_Orders](
    [OrderID][int] IDENTITY(100, 1) NOT NULL,
    [UserId][varchar](50) NULL,
    [AddressId][int] NULL,
    [OrderDate][datetime] NULL,
    [DeliverDate][varchar](50) NULL,
    [Status][int] NULL,
    [OTP][int] NULL,
    [cancellation_Reason][varchar](100) NULL,
    [DboyId][int] NULL,
    PRIMARY KEY CLUSTERED
    (
        [OrderID] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_PaymentDetails]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[tbl_PaymentDetails](
    [PaymentId][int] IDENTITY(100000000, 1) NOT NULL,
    [OrderId][int] NULL,
    [UserId][varchar](100) NULL,
    [PaymentType][varchar](50) NULL,
    [Amount][float] NULL,
    [PaymentOn][datetime] NOT NULL,
    [Status][int] NULL,
    PRIMARY KEY CLUSTERED
    (
        [PaymentId] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_ProductReview]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[tbl_ProductReview](
    [ReviewId][int] IDENTITY(1, 1) NOT NULL,
    [DishId][int] NULL,
    [UserID][varchar](50) NULL,
    [Name][varchar](50) NULL,
    [Email][varchar](100) NULL,
    [Comment][varchar](255) NULL,
    [Rating][int] NULL,
    [Status][int] NULL,
    [ReviewDate][datetime] NULL,
    PRIMARY KEY CLUSTERED
    (
        [ReviewId] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_RecentView]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[tbl_RecentView](
    [RecentViewId][int] IDENTITY(1, 1) NOT NULL,
    [DishId][int] NULL,
    [UserID][varchar](50) NULL,
    [ViewDate][datetime] NULL,
    PRIMARY KEY CLUSTERED
    (
        [RecentViewId] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY]
GO
/****** Object:  Table [dbo].[TBL_TABLEBYADMIN]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[TBL_TABLEBYADMIN](
    [TableId][int] IDENTITY(1, 1) NOT NULL,
    [TableName][varchar](50) NULL,
    [Image][varchar](50) NULL,
    [Description][varchar](50) NULL,
    [IsActive][bit] NULL
) ON[PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_teakart]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[tbl_teakart](
    [TeaId][int] IDENTITY(1, 1) NOT NULL,
    [TeaType][int] NULL,
    [TeaCategoryId][int] NULL,
    [TeaName][varchar](50) NULL,
    [TeaImage][varchar](100) NULL,
    [TeaDescription][varchar](100) NULL,
    [Quantity][int] NULL,
    [TeaPrize][decimal](18, 5) NULL,
    [CreateDate][datetime] NULL,
    [Status][int] NULL,
    PRIMARY KEY CLUSTERED
    (
        [TeaId] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_UserBookingTable]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[tbl_UserBookingTable](
    [BookingId][int] IDENTITY(10000, 1) NOT NULL,
    [TableId][int] NULL,
    [BookingDate][varchar](150) NULL,
    [BookingTime][varchar](150) NULL,
    [NoOfPeople][int] NULL,
    [Entryon][datetime] NULL,
    [Name][varchar](50) NULL,
    [Email][varchar](50) NULL
) ON[PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_UserPro_Details]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[tbl_UserPro_Details](
    [UId][int] IDENTITY(1, 1) NOT NULL,
    [Name][varchar](50) NULL,
    [Email][varchar](50) NULL,
    [Image][varchar](100) NULL,
    [Password][varchar](50) NULL,
    [BirthDay][varchar](50) NULL,
    [Phone][varchar](50) NULL,
    [Createdon][datetime] NULL,
    PRIMARY KEY CLUSTERED
    (
        [UId] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_Variant]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[tbl_Variant](
    [Id][int] IDENTITY(1, 1) NOT NULL,
    [DishId][int] NULL,
    [VName][varchar](240) NULL,
    [DishImage][varchar](240) NULL,
    [MRP][numeric](18, 2) NULL,
    [SellingCost][numeric](18, 2) NULL,
    [DishDescription][varchar](500) NULL,
    [DishStatus][bit] NULL,
    [DishQuantity][varchar](50) NULL
) ON[PRIMARY]
GO
/****** Object:  Table [dbo].[tblBannner]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[tblBannner](
    [BannerId][int] IDENTITY(1, 1) NOT NULL,
    [BannerName][varchar](50) NULL,
    [BannerOfferName][varchar](50) NULL,
    [BannerImage][varchar](100) NULL,
    [Description][varchar](100) NULL,
    [Offer][varchar](50) NULL,
    [ProductLink][varchar](100) NULL,
    [Status][int] NULL,
    [AddOn][datetime] NULL,
    [UpdateOn][varchar](50) NULL,
    PRIMARY KEY CLUSTERED
    (
        [BannerId] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY]
GO
/****** Object:  Table [dbo].[tblEmployeeSalary]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[tblEmployeeSalary](
    [EmpSalaryId][int] IDENTITY(1, 1) NOT NULL,
    [EmpId][int] NULL,
    [RoleId][int] NULL,
    [CreationDate][datetime] NULL,
    [Status][int] NULL,
    PRIMARY KEY CLUSTERED
    (
        [EmpSalaryId] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY]
GO
/****** Object:  Table [dbo].[tblErrorLog]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[tblErrorLog](
    [ErrorId][int] IDENTITY(1, 1) NOT NULL,
    [ClassName][varchar](50) NULL,
    [FunctionName][varchar](100) NULL,
    [ErrorMsg][varchar](500) NULL,
    [Proc_Name][varchar](100) NULL,
    [CreatedOn][datetime] NULL,
    PRIMARY KEY CLUSTERED
    (
        [ErrorId] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY]
GO
/****** Object:  Table [dbo].[tblEvent]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[tblEvent](
    [eventID][int] IDENTITY(1, 1) NOT NULL,
    [eventName][varchar](50) NULL,
    [eventImage][varchar](100) NULL,
    [eventDescription][varchar](255) NULL,
    [eventPrice][decimal](18, 2) NULL,
    [eventOffPrice][decimal](18, 2) NULL,
    [eventLocation][varchar](255) NULL,
    [eventOrganizer][varchar](50) NULL,
    [eventStatus][int] NULL,
    [totalPeople][int] NULL,
    [CreatedDate][datetime] NULL,
    PRIMARY KEY CLUSTERED
    (
        [eventID] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY]
GO
/****** Object:  Table [dbo].[tblEventBooking]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[tblEventBooking](
    [eventBookingId][int] IDENTITY(1, 1) NOT NULL,
    [UserID][varchar](50) NULL,
    [eventID][int] NULL,
    [UserName][varchar](50) NULL,
    [PhoneNo][varchar](50) NULL,
    [TotalGuest][int] NULL,
    [BPersonName][varchar](50) NULL,
    [CoupleName][varchar](50) NULL,
    [eventDate][varchar](50) NULL,
    [eventTime][varchar](50) NULL,
    [eventPrice][decimal](18, 2) NULL,
    [eventBookingStatus][int] NULL,
    [eventCompleteDate][varchar](50) NULL,
    [eventCreateDate][datetime] NULL,
    PRIMARY KEY CLUSTERED
    (
        [eventBookingId] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY]
GO
/****** Object:  Table [dbo].[UserPaymentDetails]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[UserPaymentDetails](
    [PaymentId][int] IDENTITY(1, 1) NOT NULL,
    [PaymentRefId][varchar](100) NULL,
    [PaymentAmount][decimal](18, 2) NULL,
    [PaymentType][varchar](50) NULL,
    [PaymentStatus][bit] NULL,
    [CreditDate][datetime] NULL,
    PRIMARY KEY CLUSTERED
    (
        [PaymentId] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
) ON[PRIMARY]
GO
INSERT[dbo].[__EFMigrationsHistory]([MigrationId], [ProductVersion]) VALUES(N'20240202054826_initial', N'6.0.2')
GO
INSERT[dbo].[AspNetRoles]([Id], [Name], [NormalizedName], [ConcurrencyStamp]) VALUES(N'0542d5dd-2126-4a1a-90a9-acf18719a1a0', N'Admin', N'ADMIN', NULL)
GO
INSERT[dbo].[AspNetRoles]([Id], [Name], [NormalizedName], [ConcurrencyStamp]) VALUES(N'80ddc172-3f06-44bb-a535-cf5a377f455d', N'User', N'USER', NULL)
GO
INSERT[dbo].[AspNetRoles]([Id], [Name], [NormalizedName], [ConcurrencyStamp]) VALUES(N'8158da53-5e7d-4c0e-bf60-bbada1c3c114', N'Employee', N'EMPLOYEE', NULL)
GO
INSERT[dbo].[AspNetUserRoles]([UserId], [RoleId]) VALUES(N'7e5895a2-54c8-4b56-bd87-c78b8d7639dc', N'0542d5dd-2126-4a1a-90a9-acf18719a1a0')
GO
INSERT[dbo].[AspNetUserRoles]([UserId], [RoleId]) VALUES(N'8a113306-f583-4eba-9be1-ac23f32a6125', N'0542d5dd-2126-4a1a-90a9-acf18719a1a0')
GO
INSERT[dbo].[AspNetUserRoles]([UserId], [RoleId]) VALUES(N'ea55d7eb-4a49-45cd-8aad-01afc1343216', N'0542d5dd-2126-4a1a-90a9-acf18719a1a0')
GO
INSERT[dbo].[AspNetUserRoles]([UserId], [RoleId]) VALUES(N'0b0c8cc2-d877-4477-aff5-7100f16e6607', N'80ddc172-3f06-44bb-a535-cf5a377f455d')
GO
INSERT[dbo].[AspNetUserRoles]([UserId], [RoleId]) VALUES(N'1f2d7733-7984-4f3b-a7c3-7c50a499c7c4', N'80ddc172-3f06-44bb-a535-cf5a377f455d')
GO
INSERT[dbo].[AspNetUserRoles]([UserId], [RoleId]) VALUES(N'795f2ded-4ada-4a2f-a62e-b15f2088f1aa', N'80ddc172-3f06-44bb-a535-cf5a377f455d')
GO
INSERT[dbo].[AspNetUserRoles]([UserId], [RoleId]) VALUES(N'8f0cab3d-73c3-4170-88d4-94b50bdc4c56', N'80ddc172-3f06-44bb-a535-cf5a377f455d')
GO
INSERT[dbo].[AspNetUserRoles]([UserId], [RoleId]) VALUES(N'93cc4b62-ee6f-46c2-b0f2-e2a8c091b26a', N'80ddc172-3f06-44bb-a535-cf5a377f455d')
GO
INSERT[dbo].[AspNetUserRoles]([UserId], [RoleId]) VALUES(N'9d7d2233-4bff-4d6a-bceb-bd59cafc1cab', N'80ddc172-3f06-44bb-a535-cf5a377f455d')
GO
INSERT[dbo].[AspNetUserRoles]([UserId], [RoleId]) VALUES(N'ad133807-48a2-4573-93ed-5e43a424988c', N'80ddc172-3f06-44bb-a535-cf5a377f455d')
GO
INSERT[dbo].[AspNetUserRoles]([UserId], [RoleId]) VALUES(N'c9fee37d-dda1-4cac-a7cb-69001176da8e', N'80ddc172-3f06-44bb-a535-cf5a377f455d')
GO
INSERT[dbo].[AspNetUserRoles]([UserId], [RoleId]) VALUES(N'ed6cc060-19f7-4b2a-9f01-41ab2296de59', N'80ddc172-3f06-44bb-a535-cf5a377f455d')
GO
INSERT[dbo].[AspNetUserRoles]([UserId], [RoleId]) VALUES(N'f1a86096-399d-41cf-a6c6-9e41aee335ba', N'80ddc172-3f06-44bb-a535-cf5a377f455d')
GO
INSERT[dbo].[AspNetUserRoles]([UserId], [RoleId]) VALUES(N'f7bbf7fd-a21a-4ff7-aa98-d136550e9e70', N'80ddc172-3f06-44bb-a535-cf5a377f455d')
GO
INSERT[dbo].[AspNetUserRoles]([UserId], [RoleId]) VALUES(N'0717af6f-abdd-42ab-8bfb-02ac169ee799', N'8158da53-5e7d-4c0e-bf60-bbada1c3c114')
GO
INSERT[dbo].[AspNetUserRoles]([UserId], [RoleId]) VALUES(N'35f83a20-c34b-476e-9966-b3f71a78c8d2', N'8158da53-5e7d-4c0e-bf60-bbada1c3c114')
GO
INSERT[dbo].[AspNetUserRoles]([UserId], [RoleId]) VALUES(N'9dd89a89-8a4c-446c-ade4-30673ac3b85c', N'8158da53-5e7d-4c0e-bf60-bbada1c3c114')
GO
INSERT[dbo].[AspNetUserRoles]([UserId], [RoleId]) VALUES(N'c4e5ad74-135b-4d27-987c-6e6dcdb2823c', N'8158da53-5e7d-4c0e-bf60-bbada1c3c114')
GO
INSERT[dbo].[AspNetUserRoles]([UserId], [RoleId]) VALUES(N'd988807d-5a42-4675-99d6-4c348329773a', N'8158da53-5e7d-4c0e-bf60-bbada1c3c114')
GO
INSERT[dbo].[AspNetUsers]([Id], [Name], [Adhaar], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES(N'0717af6f-abdd-42ab-8bfb-02ac169ee799', N'faraz', N'Ii6%4zH', N'farazshaikh8d960@gmail.com', N'FARAZSHAIKH8D960@GMAIL.COM', N'farazshaikh8d960@gmail.com', N'FARAZSHAIKH8D960@GMAIL.COM', 1, N'AQAAAAIAAYagAAAAEI545TKSwdNzLdGO7oyJJXhJOBRTVzUkZSQMOi96zSwB4zrKl48JMG0RcP+3kGxpcQ==', N'IHWUGHU6YKUE3VMNILU3QS4KDNQICSY4', N'dc16c51d-6863-49bf-b56c-714fae52e846', NULL, 0, 0, NULL, 1, 0)
GO
INSERT[dbo].[AspNetUsers]([Id], [Name], [Adhaar], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES(N'0b0c8cc2-d877-4477-aff5-7100f16e6607', N'Faraz', N'Gw6&xyL', N'Farazshaikh8960@gmail.com', N'FARAZSHAIKH8960@GMAIL.COM', N'Farazshaikh8960@gmail.com', N'FARAZSHAIKH8960@GMAIL.COM', 1, N'AQAAAAIAAYagAAAAEGuK1qkMeWxl5W2iLyOuyFaLaCh5LEuErTCNujaici58y3cB7MR5Y3i9J7I39zARvg==', N'4EWTVAUFXY4KE5HCKPTE6PLY5IFJIUDB', N'aaf058ab-91d4-402f-a7e7-64414621a428', NULL, 0, 0, NULL, 1, 0)
GO
INSERT[dbo].[AspNetUsers]([Id], [Name], [Adhaar], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES(N'1f2d7733-7984-4f3b-a7c3-7c50a499c7c4', N'Naved', N'Fd6#ekv', N'Admin3@gmail.com', N'ADMIN3@GMAIL.COM', N'Admin3@gmail.com', N'ADMIN3@GMAIL.COM', 1, N'AQAAAAIAAYagAAAAEFsEyUP4WoPmaBw1+332UV0TB1n+Eq1HifnHGR6PNh9qx3Bbfxjh2tQnYYNx/BDzDA==', N'54R327AQB7EQZGKJJINSEXUUFJ2BJ4IV', N'76f6d285-a685-4def-aa22-106df385b817', NULL, 0, 0, NULL, 1, 0)
GO
INSERT[dbo].[AspNetUsers]([Id], [Name], [Adhaar], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES(N'35f83a20-c34b-476e-9966-b3f71a78c8d2', N'dfgdfgd', N'Lj8&BDQ', N'raiyyanshaikh97@gmail.com', N'RAIYYANSHAIKH97@GMAIL.COM', N'raiyyanshaikh97@gmail.com', N'RAIYYANSHAIKH97@GMAIL.COM', 1, N'AQAAAAIAAYagAAAAEBYFBgS9qt9Kw3kzutByXSuGIT3Ou3bP2af1EtyXxVapOOWjajmby4rpkBNcYnyAvQ==', N'CGIZMQKED6KFGRMOAJKDX4MTTZERP3HP', N'739f92e6-e8df-47ad-96cd-acf14a2155cc', NULL, 0, 0, NULL, 1, 0)
GO
INSERT[dbo].[AspNetUsers]([Id], [Name], [Adhaar], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES(N'795f2ded-4ada-4a2f-a62e-b15f2088f1aa', N'faraz', N'Oc4$vx3', N'Farazshaikh01@gmail.com', N'FARAZSHAIKH01@GMAIL.COM', N'Farazshaikh01@gmail.com', N'FARAZSHAIKH01@GMAIL.COM', 1, N'AQAAAAIAAYagAAAAEFNsLwEVn5OzimEqaj5mC9du5mbn163J5lrHmoRmChS7nWitCxqmMGBCWLwAd4n7sA==', N'W4BOHK6JNIRGS5PONFCRW7RRSP32SKJW', N'ccf927df-7dde-4a6a-8991-00cfc8c205e1', NULL, 0, 0, NULL, 1, 0)
GO
INSERT[dbo].[AspNetUsers]([Id], [Name], [Adhaar], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES(N'7e5895a2-54c8-4b56-bd87-c78b8d7639dc', N'string', N'dfsdsd323', N'user33@Gmail.com', N'USER33@GMAIL.COM', N'user33@Gmail.com', N'USER33@GMAIL.COM', 1, N'AQAAAAIAAYagAAAAENTi504pVSZ1TPQj+nYQO0lTUbgWTMl/gnDhTPBse9w+LVpCyrf35o1XcE+R/75wMA==', N'NZ5BFZ72R7R43YWLWTVRTUT5PUY7SV23', N'aef7e630-26c2-431c-af17-7ade955fac88', NULL, 0, 0, NULL, 1, 0)
GO
INSERT[dbo].[AspNetUsers]([Id], [Name], [Adhaar], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES(N'8a113306-f583-4eba-9be1-ac23f32a6125', N'naved', N'Hn4&S4S', N'Farazshaikh601@gmail.com', N'FARAZSHAIKH601@GMAIL.COM', N'Farazshaikh601@gmail.com', N'FARAZSHAIKH601@GMAIL.COM', 1, N'AQAAAAIAAYagAAAAEAtOq5OT9wnOdJpFK6YK4uKHDzyxoxyqKfPI6UNt5XKNCRj3bIU94wBU1uN7ufyRUA==', N'ZF6JRYFCONUAPWF4WAIFSMJRE5WSFMFI', N'38388079-2da7-4692-99fd-8db5ac7ba510', NULL, 0, 0, NULL, 1, 0)
GO
INSERT[dbo].[AspNetUsers]([Id], [Name], [Adhaar], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES(N'8f0cab3d-73c3-4170-88d4-94b50bdc4c56', N'Faraz Shaikh', N'Uu3$sA4', N'SuperAdmin@gmail.com', N'SUPERADMIN@GMAIL.COM', N'SuperAdmin@gmail.com', N'SUPERADMIN@GMAIL.COM', 1, N'AQAAAAIAAYagAAAAECT5+nI6zG96ChfmD/BVoV3sSSSSdVHj+sRCg1e6ASBKz5L16FXe98QPUw6+ITK/eg==', N'ZUV5W43W5SMIGQYOWV52WNKPOPWN3F7D', N'23308866-4230-4125-b7ab-8bd551d3214d', NULL, 0, 0, NULL, 1, 0)
GO
INSERT[dbo].[AspNetUsers]([Id], [Name], [Adhaar], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES(N'93cc4b62-ee6f-46c2-b0f2-e2a8c091b26a', N'faraz', N'986ggjhg', N'User91@gmail.com', N'USER91@GMAIL.COM', N'User91@gmail.com', N'USER91@GMAIL.COM', 1, N'AQAAAAIAAYagAAAAEJiO95EIM1KZ5w1SHkuvhnJ29BgQVChxmOn7yCXueFT6C5a8JKh48qwmo5/XKJGjNw==', N'SOCQEUI6MRSFYSYCVLJ7SSQZCCYXQYKV', N'8406c8fa-676a-4325-84c8-2a4d8deabed2', NULL, 0, 0, NULL, 1, 0)
GO
INSERT[dbo].[AspNetUsers]([Id], [Name], [Adhaar], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES(N'9d7d2233-4bff-4d6a-bceb-bd59cafc1cab', N'faraz', N'Zy5*6GG', N'Farazshaikh60@gmail.com', N'FARAZSHAIKH60@GMAIL.COM', N'Farazshaikh60@gmail.com', N'FARAZSHAIKH60@GMAIL.COM', 1, N'AQAAAAIAAYagAAAAEJ2gRJaavxJrIgb4bE+EUT80cTDDRMafetlVmqbm7yQX/eeWLyy2lVrd8nWXhK9eyA==', N'4762GQH73GJPKVAU5MFBHKZVJ6WX4ODT', N'413e074e-e211-40be-b060-82fe4186b730', NULL, 0, 0, NULL, 1, 0)
GO
INSERT[dbo].[AspNetUsers]([Id], [Name], [Adhaar], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES(N'9dd89a89-8a4c-446c-ade4-30673ac3b85c', N'faraz', N'Ap7#Se9', N'stance.farazahmad@gmail.com', N'STANCE.FARAZAHMAD@GMAIL.COM', N'stance.farazahmad@gmail.com', N'STANCE.FARAZAHMAD@GMAIL.COM', 1, N'AQAAAAIAAYagAAAAEHmr6sULbeBBe+cmYS7SY7HQO0PxH0/pOPjVARTcskGDYzGx3opDIqY+QQXfLAed1Q==', N'LC5JFKORWD7DTUXGTAUVXWIDSEOSGMEH', N'acf37821-e2d0-4cef-bebb-8624be2b1b29', NULL, 0, 0, NULL, 1, 0)
GO
INSERT[dbo].[AspNetUsers]([Id], [Name], [Adhaar], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES(N'ad133807-48a2-4573-93ed-5e43a424988c', N'faraz', N'Mz8*LVB', N'faraz08538@gmail.com', N'FARAZ08538@GMAIL.COM', N'faraz08538@gmail.com', N'FARAZ08538@GMAIL.COM', 1, N'AQAAAAIAAYagAAAAEFx5Wj6nxXcFJ4Piu/Yism0r2IlLVocyajDbTISXObTLWT4zKjOXXTU3gmKXm0S9jQ==', N'QSZDE5XQ5TS6AXCH2424GC37UM533SNS', N'20d15f91-382b-47e5-a709-8ca6cd83361c', NULL, 0, 0, NULL, 1, 0)
GO
INSERT[dbo].[AspNetUsers]([Id], [Name], [Adhaar], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES(N'c4e5ad74-135b-4d27-987c-6e6dcdb2823c', N'Faraz Ahmad', N'Rr0$IpQ', N'farazshaikh660@gmail.com', N'FARAZSHAIKH660@GMAIL.COM', N'farazshaikh660@gmail.com', N'FARAZSHAIKH660@GMAIL.COM', 1, N'AQAAAAIAAYagAAAAEBt0NCNME/r6foUyii8TSsQWRIh2qW33Q0qhwszcq4K6DHpTBZGs3NV7oU1X/SEIHg==', N'56ZYU6EO4T2K57SOAEIQCIERPSWOH4HF', N'146fa3aa-b3c4-4929-85d2-7380c86801a3', NULL, 0, 0, NULL, 1, 0)
GO
INSERT[dbo].[AspNetUsers]([Id], [Name], [Adhaar], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES(N'c9fee37d-dda1-4cac-a7cb-69001176da8e', N'Faraz Shaikh', N'Ix7*cNe', N'FarazShaikh@gmail.com', N'FARAZSHAIKH@GMAIL.COM', N'FarazShaikh@gmail.com', N'FARAZSHAIKH@GMAIL.COM', 1, N'AQAAAAIAAYagAAAAELt5wzugvGIt3JbDMUS5gtSZ0b4gblVqpCUbJ5wt5oKVWE3fJgPtMezSyyQRPD0O+A==', N'HAFC5JRF5VTFBWYFFYUBBUO2JG76NPBI', N'ab150364-8d96-4afa-a5a0-080690f7796c', NULL, 0, 0, NULL, 1, 0)
GO
INSERT[dbo].[AspNetUsers]([Id], [Name], [Adhaar], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES(N'd988807d-5a42-4675-99d6-4c348329773a', N'Faraz', N'Gf4#$Uh', N'faraz38@gmail.com', N'FARAZ38@GMAIL.COM', N'faraz38@gmail.com', N'FARAZ38@GMAIL.COM', 1, N'AQAAAAIAAYagAAAAEBJY9S8PM2yHK29ZroUlAj188YD32MRaWaY1XbNITtzQlLmzoq61OgBl+lddALjbxQ==', N'BLX5UGNFYUHGCQAGZXXWUTBZ54L7JKG3', N'4f4a9707-e9ba-4626-a881-ae28f37a2762', NULL, 0, 0, NULL, 1, 0)
GO
INSERT[dbo].[AspNetUsers]([Id], [Name], [Adhaar], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES(N'ea55d7eb-4a49-45cd-8aad-01afc1343216', N'Faraz', N'Kz1$VdD', N'farazshaikh08538@gmail.com', N'FARAZSHAIKH08538@GMAIL.COM', N'farazshaikh08538@gmail.com', N'FARAZSHAIKH08538@GMAIL.COM', 1, N'AQAAAAIAAYagAAAAEIJlqVsW/u9gcmtch1RlDVCblgtwRX10kXEJaCABRMwhyqJVSbKfDeiLmx+43sGlpQ==', N'2PNURLR6B2RTZKHIJROJ2HQ7E477DI4V', N'1604c59f-dab3-490a-b8fd-0ecda4b15abd', NULL, 0, 0, NULL, 1, 0)
GO
INSERT[dbo].[AspNetUsers]([Id], [Name], [Adhaar], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES(N'ed6cc060-19f7-4b2a-9f01-41ab2296de59', N'Shaikh Faraz', N'Uu6#EFr', N'farazshaikh91@gmail.com', N'FARAZSHAIKH91@GMAIL.COM', N'farazshaikh91@gmail.com', N'FARAZSHAIKH91@GMAIL.COM', 1, N'AQAAAAIAAYagAAAAEMUHcA1TIWlH6NuCd02O76UEl1rHnPX+bwFKz4xv3On7Z3BtJk6XFaWLlBPoCbh0EQ==', N'ULB5ZKBRL5KDPRMMZGA5PUWZ7WMH23E7', N'7abb7c78-18d5-4d67-9ee8-b3bd2ee39b08', NULL, 0, 0, NULL, 1, 0)
GO
INSERT[dbo].[AspNetUsers]([Id], [Name], [Adhaar], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES(N'f1a86096-399d-41cf-a6c6-9e41aee335ba', N'Faraz Shaikhh', N'La8*c8B', N'FarazShaikh1@gmail.com', N'FARAZSHAIKH1@GMAIL.COM', N'FarazShaikh1@gmail.com', N'FARAZSHAIKH1@GMAIL.COM', 1, N'AQAAAAIAAYagAAAAEAewHAHEJDVXRzu54AppBNkfVrP5G4GEQhkVXfPOTD/fVOhUZfHRDjupCqL0L+Z/RQ==', N'LNTHR5RNPBWOQOD5KQNYOQ7UP7PJYFQP', N'64476c15-45a3-4a03-8896-4b4f8e4cd4e4', NULL, 0, 0, NULL, 1, 0)
GO
INSERT[dbo].[AspNetUsers]([Id], [Name], [Adhaar], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES(N'f7bbf7fd-a21a-4ff7-aa98-d136550e9e70', N'naved', N'Ka7$YkB', N'Naved08538@gmail.com', N'NAVED08538@GMAIL.COM', N'Naved08538@gmail.com', N'NAVED08538@GMAIL.COM', 1, N'AQAAAAIAAYagAAAAECkn9pZclaL4Hy5Pdbv1QgqmfK2m2VqkNXO+7LHn4HFGeD2z3cTqFxZcs8RzYPRbnw==', N'CBMEZYQO5QA4QS6IKZLG4CUWD42PPBFK', N'83cab328-79c7-42ec-ae28-43fd89694d0d', NULL, 0, 0, NULL, 1, 0)
GO
SET IDENTITY_INSERT[dbo].[Bookingtable] ON
GO
INSERT[dbo].[Bookingtable]([TableBookingId], [TableId], [UserId], [People], [Email], [BookingTime], [description], [Status], [BookingOn]) VALUES(1, 2, N'1', 56, N'farazshaikh8960@gmail.com', N'2024-01-19T13:22', N'dfgdfg', 0, CAST(N'2024-01-03T13:23:01.810' AS DateTime))
GO
INSERT[dbo].[Bookingtable]([TableBookingId], [TableId], [UserId], [People], [Email], [BookingTime], [description], [Status], [BookingOn]) VALUES(2, 4, N'1', 5, N'farazshaikh8960@gmail.com', N'2024-01-27T13:52', N'dgdfgdfg', 0, CAST(N'2024-01-03T13:52:50.050' AS DateTime))
GO
INSERT[dbo].[Bookingtable]([TableBookingId], [TableId], [UserId], [People], [Email], [BookingTime], [description], [Status], [BookingOn]) VALUES(3, 2, N'1', 5, N'farazshaikh8960@gmail.com', N'2024-01-31T04:06', N'hgghgjh', 0, CAST(N'2024-01-05T19:04:04.017' AS DateTime))
GO
INSERT[dbo].[Bookingtable]([TableBookingId], [TableId], [UserId], [People], [Email], [BookingTime], [description], [Status], [BookingOn]) VALUES(4, 0, N'0', 0, N'string', N'string', N'string', 0, CAST(N'2024-01-06T17:46:50.550' AS DateTime))
GO
INSERT[dbo].[Bookingtable]([TableBookingId], [TableId], [UserId], [People], [Email], [BookingTime], [description], [Status], [BookingOn]) VALUES(5, 2, N'1', 8, N'farazshaikh8960@gmail.com', N'2024-01-26T16:43', N'sadsf', 0, CAST(N'2024-01-15T12:43:24.573' AS DateTime))
GO
INSERT[dbo].[Bookingtable]([TableBookingId], [TableId], [UserId], [People], [Email], [BookingTime], [description], [Status], [BookingOn]) VALUES(6, 4, N'1', 5, N'farazshaikh8960@gmail.com', N'2024-02-02T12:46', N'dfgfdg', 0, CAST(N'2024-01-15T12:49:18.430' AS DateTime))
GO
INSERT[dbo].[Bookingtable]([TableBookingId], [TableId], [UserId], [People], [Email], [BookingTime], [description], [Status], [BookingOn]) VALUES(7, 4, N'1', 5, N'farazshaikh8960@gmail.com', N'2024-02-02T12:46', N'dfgfdg', 0, CAST(N'2024-01-15T12:49:39.657' AS DateTime))
GO
INSERT[dbo].[Bookingtable]([TableBookingId], [TableId], [UserId], [People], [Email], [BookingTime], [description], [Status], [BookingOn]) VALUES(8, 5, N'1', 6, N'farazshaikh8960@gmail.com', N'2024-02-02T14:05', N'ghfhfgh', 0, CAST(N'2024-01-15T14:00:11.477' AS DateTime))
GO
INSERT[dbo].[Bookingtable]([TableBookingId], [TableId], [UserId], [People], [Email], [BookingTime], [description], [Status], [BookingOn]) VALUES(9, 1, N'1', 54, N'farazshaikh8960@gmail.com', N'2024-01-26T10:35', N'fgghh', 0, CAST(N'2024-01-18T10:37:34.180' AS DateTime))
GO
INSERT[dbo].[Bookingtable]([TableBookingId], [TableId], [UserId], [People], [Email], [BookingTime], [description], [Status], [BookingOn]) VALUES(10, 2, N'1', 55, N'farazshaikh8960@gmail.com', N'2023-12-26T21:37', N'gfhfgh', 0, CAST(N'2024-01-18T10:38:33.363' AS DateTime))
GO
INSERT[dbo].[Bookingtable]([TableBookingId], [TableId], [UserId], [People], [Email], [BookingTime], [description], [Status], [BookingOn]) VALUES(11, 2, N'1', 77, N'farazshaikh8960@gmail.com', N'2024-01-18T23:23', N'dfggfd', 0, CAST(N'2024-01-18T11:24:26.893' AS DateTime))
GO
INSERT[dbo].[Bookingtable]([TableBookingId], [TableId], [UserId], [People], [Email], [BookingTime], [description], [Status], [BookingOn]) VALUES(1005, 1, N'1', 4, N'farazshaikh8960@gmail.com', N'2024-02-02T18:46', N'dfsdgdfg', 0, CAST(N'2024-02-02T18:47:41.640' AS DateTime))
GO
INSERT[dbo].[Bookingtable]([TableBookingId], [TableId], [UserId], [People], [Email], [BookingTime], [description], [Status], [BookingOn]) VALUES(1006, 1, N'1', 43, N'farazshaikh8960@gmail.com', N'2024-02-03T12:26', N'sdfsdfsd', 0, CAST(N'2024-02-03T10:26:58.623' AS DateTime))
GO
INSERT[dbo].[Bookingtable]([TableBookingId], [TableId], [UserId], [People], [Email], [BookingTime], [description], [Status], [BookingOn]) VALUES(1007, 2, N'1', 4, N'farazshaikh8960@gmail.com', N'2024-02-03T14:32', N'wefsdfsf', 0, CAST(N'2024-02-03T10:34:50.557' AS DateTime))
GO
INSERT[dbo].[Bookingtable]([TableBookingId], [TableId], [UserId], [People], [Email], [BookingTime], [description], [Status], [BookingOn]) VALUES(1008, 1, N'1', 4, N'farazshaikh8960@gmail.com', N'2024-02-03T10:42', N'safsf', 0, CAST(N'2024-02-03T10:39:32.757' AS DateTime))
GO
INSERT[dbo].[Bookingtable]([TableBookingId], [TableId], [UserId], [People], [Email], [BookingTime], [description], [Status], [BookingOn]) VALUES(1009, 1, N'1', 6, N'Farazshaikh8960@gmail.com', N'2024-02-03T10:45', N'hxfd', 0, CAST(N'2024-02-03T10:42:34.833' AS DateTime))
GO
INSERT[dbo].[Bookingtable]([TableBookingId], [TableId], [UserId], [People], [Email], [BookingTime], [description], [Status], [BookingOn]) VALUES(1010, 1, N'Farazshaikh60@gmail.com', 3, N'farazshaikh08538@gmail.com', N'2024-02-03T14:38', N'sadas', 0, CAST(N'2024-02-03T11:39:47.487' AS DateTime))
GO
INSERT[dbo].[Bookingtable]([TableBookingId], [TableId], [UserId], [People], [Email], [BookingTime], [description], [Status], [BookingOn]) VALUES(1011, 1, N'Farazshaikh60@gmail.com', 3, N'Farazshaikh08538@gmail.com', N'2024-02-03T13:15', N'sadsd', 0, CAST(N'2024-02-03T13:14:09.547' AS DateTime))
GO
INSERT[dbo].[Bookingtable]([TableBookingId], [TableId], [UserId], [People], [Email], [BookingTime], [description], [Status], [BookingOn]) VALUES(1012, 2, N'Farazshaikh60@gmail.com', 4, N'farazshaikh8960@gmail.com', N'2024-02-06T14:31', N'dfgfdg', 0, CAST(N'2024-02-06T13:31:46.757' AS DateTime))
GO
INSERT[dbo].[Bookingtable]([TableBookingId], [TableId], [UserId], [People], [Email], [BookingTime], [description], [Status], [BookingOn]) VALUES(1013, 2, N'Farazshaikh60@gmail.com', 32, N'farazshaikh60@gmail.com', N'2024-02-06T18:13', N'sdfsd', 0, CAST(N'2024-02-06T16:13:52.063' AS DateTime))
GO
INSERT[dbo].[Bookingtable]([TableBookingId], [TableId], [UserId], [People], [Email], [BookingTime], [description], [Status], [BookingOn]) VALUES(1014, 2, N'Farazshaikh60@gmail.com', 8, N'farazshaikh60@gmail.com', N'2024-02-06T16:19', N',,,m', 0, CAST(N'2024-02-06T16:16:13.380' AS DateTime))
GO
INSERT[dbo].[Bookingtable]([TableBookingId], [TableId], [UserId], [People], [Email], [BookingTime], [description], [Status], [BookingOn]) VALUES(1015, 2, N'Farazshaikh60@gmail.com', 34, N'farazshaikh60@gmail.com', N'2024-02-06T18:20', N'werwe', 0, CAST(N'2024-02-06T16:20:14.840' AS DateTime))
GO
INSERT[dbo].[Bookingtable]([TableBookingId], [TableId], [UserId], [People], [Email], [BookingTime], [description], [Status], [BookingOn]) VALUES(1016, 2, N'Farazshaikh60@gmail.com', 4, N'farazshaikh60@gmail.com', N'2024-02-06T16:29', N'fdd', 0, CAST(N'2024-02-06T16:27:13.340' AS DateTime))
GO
INSERT[dbo].[Bookingtable]([TableBookingId], [TableId], [UserId], [People], [Email], [BookingTime], [description], [Status], [BookingOn]) VALUES(1017, 2, N'Farazshaikh60@gmail.com', 5, N'farazshaikh60@gmail.com', N'2024-02-06T17:33', N'gf', 0, CAST(N'2024-02-06T16:33:14.460' AS DateTime))
GO
INSERT[dbo].[Bookingtable]([TableBookingId], [TableId], [UserId], [People], [Email], [BookingTime], [description], [Status], [BookingOn]) VALUES(1018, 2, N'Farazshaikh60@gmail.com', 4, N'farazshaikh60@gmail.com', N'2024-02-06T19:34', N'dsf', 0, CAST(N'2024-02-06T16:35:18.533' AS DateTime))
GO
INSERT[dbo].[Bookingtable]([TableBookingId], [TableId], [UserId], [People], [Email], [BookingTime], [description], [Status], [BookingOn]) VALUES(1019, 2, N'Farazshaikh60@gmail.com', 3, N'farazshaikh60@gmail.com', N'2024-02-06T16:41', N'dfs', 0, CAST(N'2024-02-06T16:39:45.957' AS DateTime))
GO
INSERT[dbo].[Bookingtable]([TableBookingId], [TableId], [UserId], [People], [Email], [BookingTime], [description], [Status], [BookingOn]) VALUES(1020, 3, N'Farazshaikh60@gmail.com', 3, N'farazshaikh60@gmail.com', N'2024-02-06T16:44', N'dfsd', 0, CAST(N'2024-02-06T16:42:51.780' AS DateTime))
GO
INSERT[dbo].[Bookingtable]([TableBookingId], [TableId], [UserId], [People], [Email], [BookingTime], [description], [Status], [BookingOn]) VALUES(1021, 3, N'Farazshaikh60@gmail.com', 3, N'farazshaikh60@gmail.com', N'2024-02-06T18:53', N'sd', 0, CAST(N'2024-02-06T16:54:02.277' AS DateTime))
GO
INSERT[dbo].[Bookingtable]([TableBookingId], [TableId], [UserId], [People], [Email], [BookingTime], [description], [Status], [BookingOn]) VALUES(1022, 2, N'Farazshaikh60@gmail.com', 4, N'farazshaikh60@gmail.com', N'2024-02-06T18:58', N'sdf', 0, CAST(N'2024-02-06T16:58:32.343' AS DateTime))
GO
INSERT[dbo].[Bookingtable]([TableBookingId], [TableId], [UserId], [People], [Email], [BookingTime], [description], [Status], [BookingOn]) VALUES(1023, 3, N'Farazshaikh60@gmail.com', 3, N'farazshaikh60@gmail.com', N'2024-02-06T18:59', N'asad', 0, CAST(N'2024-02-06T16:59:25.023' AS DateTime))
GO
INSERT[dbo].[Bookingtable]([TableBookingId], [TableId], [UserId], [People], [Email], [BookingTime], [description], [Status], [BookingOn]) VALUES(1024, 1, N'Farazshaikh60@gmail.com', 3, N'farazshaikh60@gmail.com', N'2024-02-06T17:03', N'ds', 0, CAST(N'2024-02-06T17:01:34.370' AS DateTime))
GO
INSERT[dbo].[Bookingtable]([TableBookingId], [TableId], [UserId], [People], [Email], [BookingTime], [description], [Status], [BookingOn]) VALUES(1025, 2, N'Farazshaikh60@gmail.com', 2, N'farazshaikh60@gmail.com', N'2024-02-06T19:02', N'sa', 0, CAST(N'2024-02-06T17:02:34.457' AS DateTime))
GO
INSERT[dbo].[Bookingtable]([TableBookingId], [TableId], [UserId], [People], [Email], [BookingTime], [description], [Status], [BookingOn]) VALUES(1026, 2, N'Farazshaikh60@gmail.com', 3, N'farazshaikh60@gmail.com', N'2024-02-06T17:05', N'd', 0, CAST(N'2024-02-06T17:03:46.653' AS DateTime))
GO
INSERT[dbo].[Bookingtable]([TableBookingId], [TableId], [UserId], [People], [Email], [BookingTime], [description], [Status], [BookingOn]) VALUES(1027, 1, N'Farazshaikh60@gmail.com', 3, N'farazshaikh60@gmail.com', N'2024-02-06T20:06', N'sd', 0, CAST(N'2024-02-06T17:06:52.083' AS DateTime))
GO
INSERT[dbo].[Bookingtable]([TableBookingId], [TableId], [UserId], [People], [Email], [BookingTime], [description], [Status], [BookingOn]) VALUES(1028, 1, N'Farazshaikh60@gmail.com', 4, N'farazshaikh60@gmail.com', N'2024-02-07T21:23', N'asd', 0, CAST(N'2024-02-07T16:24:33.957' AS DateTime))
GO
INSERT[dbo].[Bookingtable]([TableBookingId], [TableId], [UserId], [People], [Email], [BookingTime], [description], [Status], [BookingOn]) VALUES(1029, 1, N'Farazshaikh60@gmail.com', 6, N'farazshaikh60@gmail.com', N'2024-02-12T13:54', N'fdgfdgf', 0, CAST(N'2024-02-12T11:56:14.133' AS DateTime))
GO
INSERT[dbo].[Bookingtable]([TableBookingId], [TableId], [UserId], [People], [Email], [BookingTime], [description], [Status], [BookingOn]) VALUES(1030, 3, N'Farazshaikh60@gmail.com', 5, N'farazshaikh60@gmail.com', N'2024-02-12T15:37', N'fdgfdg', 0, CAST(N'2024-02-12T12:37:28.853' AS DateTime))
GO
INSERT[dbo].[Bookingtable]([TableBookingId], [TableId], [UserId], [People], [Email], [BookingTime], [description], [Status], [BookingOn]) VALUES(1031, 0, N'Farazshaikh60@gmail.com', 0, NULL, NULL, NULL, 0, CAST(N'2024-02-19T16:11:58.780' AS DateTime))
GO
INSERT[dbo].[Bookingtable]([TableBookingId], [TableId], [UserId], [People], [Email], [BookingTime], [description], [Status], [BookingOn]) VALUES(1032, 0, N'Farazshaikh60@gmail.com', 0, NULL, NULL, NULL, 0, CAST(N'2024-02-19T16:12:29.020' AS DateTime))
GO
SET IDENTITY_INSERT[dbo].[Bookingtable] OFF
GO
SET IDENTITY_INSERT[dbo].[Cart] ON
GO
INSERT[dbo].[Cart]([CartId], [UserID], [Id], [Quantity], [CreatedAt]) VALUES(1080, N'user33@Gmail.com', 1, 1, CAST(N'2024-02-21T10:52:47.520' AS DateTime))
GO
INSERT[dbo].[Cart]([CartId], [UserID], [Id], [Quantity], [CreatedAt]) VALUES(1082, N'farazshaikh08538@gmail.com', 4, 1, CAST(N'2024-02-21T14:42:35.960' AS DateTime))
GO
INSERT[dbo].[Cart]([CartId], [UserID], [Id], [Quantity], [CreatedAt]) VALUES(1083, N'farazshaikh08538@gmail.com', 2, 1, CAST(N'2024-02-21T14:42:45.203' AS DateTime))
GO
SET IDENTITY_INSERT[dbo].[Cart] OFF
GO
SET IDENTITY_INSERT[dbo].[City] ON
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(1, 27, N'Agra', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(2, 27, N'Aligarh', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(3, 27, N'Allahabad', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(4, 27, N'Ambedkar Nagar', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(5, 27, N'Amethi', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(6, 27, N'Amroha', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(7, 27, N'Auraiya', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(8, 27, N'Azamgarh', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(9, 27, N'Baghpat', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(10, 27, N'Bahraich', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(11, 27, N'Ballia', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(12, 27, N'Balrampur', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(13, 27, N'Banda', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(14, 27, N'Barabanki', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(15, 27, N'Bareilly', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(16, 27, N'Basti', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(17, 27, N'Bhadohi', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(18, 27, N'Bijnor', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(19, 27, N'Budaun', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(20, 27, N'Bulandshahr', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(21, 27, N'Chandauli', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(22, 27, N'Chitrakoot', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(23, 27, N'Deoria', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(24, 27, N'Etah', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(25, 27, N'Etawah', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(26, 27, N'Faizabad', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(27, 27, N'Farrukhabad', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(28, 27, N'Fatehpur', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(29, 27, N'Firozabad', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(30, 27, N'Gautam Buddha Nagar', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(31, 27, N'Ghaziabad', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(32, 27, N'Ghazipur', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(33, 27, N'Gonda', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(34, 27, N'Gorakhpur', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(35, 27, N'Hamirpur', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(36, 27, N'Hapur', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(37, 27, N'Hardoi', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(38, 27, N'Hathras', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(39, 27, N'Jalaun', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(40, 27, N'Jaunpur', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(41, 27, N'Jhansi', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(42, 27, N'Kannauj', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(43, 27, N'Kanpur Dehat', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(44, 27, N'Kanpur Nagar', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(45, 27, N'Kasganj', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(46, 27, N'Kaushambi', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(47, 27, N'Kushinagar', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(48, 27, N'Lakhimpur Kheri', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(49, 27, N'Lalitpur', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(50, 27, N'Lucknow', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(51, 27, N'Maharajganj', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(52, 27, N'Mahoba', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(53, 27, N'Mainpuri', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(54, 27, N'Mathura', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(55, 27, N'Mau', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(56, 27, N'Meerut', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(57, 27, N'Mirzapur', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(58, 27, N'Moradabad', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(59, 27, N'Muzaffarnagar', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(60, 27, N'Pilibhit', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(61, 27, N'Pratapgarh', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(62, 27, N'Rae Bareli', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(63, 27, N'Rampur', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(64, 27, N'Saharanpur', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(65, 27, N'Sambhal', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(66, 27, N'Sant Kabir Nagar', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(67, 27, N'Shahjahanpur', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(68, 27, N'Shamli', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(69, 27, N'Shrawasti', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(70, 27, N'Siddharthnagar', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(71, 27, N'Sitapur', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(72, 27, N'Sonbhadra', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(73, 27, N'Sultanpur', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(74, 27, N'Unnao', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
INSERT[dbo].[City]([city_id], [state_id], [city_name], [status], [created_date]) VALUES(75, 27, N'Varanasi', 0, CAST(N'2024-02-17T14:45:55.933' AS DateTime))
GO
SET IDENTITY_INSERT[dbo].[City] OFF
GO
SET IDENTITY_INSERT[dbo].[DboyReview] ON
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(1, 1, N'nice', 3, 0, CAST(N'2024-03-06T12:40:33.270' AS DateTime), 100, N'Farazshaikh660@gmail.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(2, 1, N'Good service', 3, 0, CAST(N'2024-03-06T00:00:00.000' AS DateTime), 1001, N'user1@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(3, 1, N'Prompt delivery', 3, 0, CAST(N'2024-03-07T00:00:00.000' AS DateTime), 1002, N'user2@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(4, 1, N'Polite driver', 3, 0, CAST(N'2024-03-08T00:00:00.000' AS DateTime), 1003, N'user3@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(5, 1, N'Late delivery', 3, 0, CAST(N'2024-03-09T00:00:00.000' AS DateTime), 1004, N'user4@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(6, 1, N'Excellent service', 3, 0, CAST(N'2024-03-10T00:00:00.000' AS DateTime), 1005, N'user5@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(7, 1, N'Average experience', 3, 0, CAST(N'2024-03-11T00:00:00.000' AS DateTime), 1006, N'user6@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(8, 1, N'Problem with order', 3, 0, CAST(N'2024-03-12T00:00:00.000' AS DateTime), 1007, N'user7@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(9, 1, N'Fast delivery', 3, 0, CAST(N'2024-03-13T00:00:00.000' AS DateTime), 1008, N'user8@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(10, 1, N'Great customer service', 3, 0, CAST(N'2024-03-14T00:00:00.000' AS DateTime), 1009, N'user9@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(11, 1, N'Delivery issues', 2, 0, CAST(N'2024-03-15T00:00:00.000' AS DateTime), 1010, N'user10@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(12, 1, N'Good service', 5, 0, CAST(N'2024-03-06T00:00:00.000' AS DateTime), 1001, N'user1@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(13, 1, N'Prompt delivery', 4, 0, CAST(N'2024-03-07T00:00:00.000' AS DateTime), 1002, N'user2@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(14, 1, N'Polite driver', 5, 0, CAST(N'2024-03-08T00:00:00.000' AS DateTime), 1003, N'user3@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(15, 1, N'Late delivery', 1, 0, CAST(N'2024-03-09T00:00:00.000' AS DateTime), 1004, N'user4@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(16, 1, N'Excellent service', 5, 0, CAST(N'2024-03-10T00:00:00.000' AS DateTime), 1005, N'user5@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(17, 1, N'Average experience', 3, 0, CAST(N'2024-03-11T00:00:00.000' AS DateTime), 1006, N'user6@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(18, 1, N'Problem with order', 2, 0, CAST(N'2024-03-12T00:00:00.000' AS DateTime), 1007, N'user7@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(19, 1, N'Fast delivery', 1, 0, CAST(N'2024-03-13T00:00:00.000' AS DateTime), 1008, N'user8@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(20, 1, N'Great customer service', 5, 0, CAST(N'2024-03-14T00:00:00.000' AS DateTime), 1009, N'user9@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(21, 1, N'Delivery issues', 1, 0, CAST(N'2024-03-15T00:00:00.000' AS DateTime), 1010, N'user10@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(22, 1, N'Good service', 5, 0, CAST(N'2024-03-06T00:00:00.000' AS DateTime), 1001, N'user1@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(23, 1, N'Prompt delivery', 4, 0, CAST(N'2024-03-07T00:00:00.000' AS DateTime), 1002, N'user2@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(24, 1, N'Polite driver', 5, 0, CAST(N'2024-03-08T00:00:00.000' AS DateTime), 1003, N'user3@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(25, 1, N'Late delivery', 4, 0, CAST(N'2024-03-09T00:00:00.000' AS DateTime), 1004, N'user4@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(26, 1, N'Excellent service', 5, 0, CAST(N'2024-03-10T00:00:00.000' AS DateTime), 1005, N'user5@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(27, 1, N'Average experience', 3, 0, CAST(N'2024-03-11T00:00:00.000' AS DateTime), 1006, N'user6@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(28, 1, N'Problem with order', 2, 0, CAST(N'2024-03-12T00:00:00.000' AS DateTime), 1007, N'user7@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(29, 1, N'Fast delivery', 4, 0, CAST(N'2024-03-13T00:00:00.000' AS DateTime), 1008, N'user8@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(30, 1, N'Great customer service', 5, 0, CAST(N'2024-03-14T00:00:00.000' AS DateTime), 1009, N'user9@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(31, 1, N'Delivery issues', 1, 0, CAST(N'2024-03-15T00:00:00.000' AS DateTime), 1010, N'user10@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(32, 1, N'Good service', 1, 0, CAST(N'2024-03-06T00:00:00.000' AS DateTime), 1001, N'user1@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(33, 1, N'Prompt delivery', 4, 0, CAST(N'2024-03-07T00:00:00.000' AS DateTime), 1002, N'user2@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(34, 1, N'Polite driver', 1, 0, CAST(N'2024-03-08T00:00:00.000' AS DateTime), 1003, N'user3@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(35, 1, N'Late delivery', 4, 0, CAST(N'2024-03-09T00:00:00.000' AS DateTime), 1004, N'user4@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(36, 1, N'Excellent service', 5, 0, CAST(N'2024-03-10T00:00:00.000' AS DateTime), 1005, N'user5@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(37, 1, N'Average experience', 3, 0, CAST(N'2024-03-11T00:00:00.000' AS DateTime), 1006, N'user6@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(38, 1, N'Problem with order', 2, 0, CAST(N'2024-03-12T00:00:00.000' AS DateTime), 1007, N'user7@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(39, 1, N'Fast delivery', 1, 0, CAST(N'2024-03-13T00:00:00.000' AS DateTime), 1008, N'user8@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(40, 1, N'Great customer service', 5, 0, CAST(N'2024-03-14T00:00:00.000' AS DateTime), 1009, N'user9@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(41, 1, N'Delivery issues', 1, 0, CAST(N'2024-03-15T00:00:00.000' AS DateTime), 1010, N'user10@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(42, 1, N'Good service', 2, 0, CAST(N'2024-03-06T00:00:00.000' AS DateTime), 1001, N'user1@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(43, 1, N'Prompt delivery', 2, 0, CAST(N'2024-03-07T00:00:00.000' AS DateTime), 1002, N'user2@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(44, 1, N'Polite driver', 2, 0, CAST(N'2024-03-08T00:00:00.000' AS DateTime), 1003, N'user3@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(45, 1, N'Late delivery', 2, 0, CAST(N'2024-03-09T00:00:00.000' AS DateTime), 1004, N'user4@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(46, 1, N'Excellent service', 2, 0, CAST(N'2024-03-10T00:00:00.000' AS DateTime), 1005, N'user5@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(47, 1, N'Average experience', 2, 0, CAST(N'2024-03-11T00:00:00.000' AS DateTime), 1006, N'user6@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(48, 1, N'Problem with order', 2, 0, CAST(N'2024-03-12T00:00:00.000' AS DateTime), 1007, N'user7@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(49, 1, N'Fast delivery', 2, 0, CAST(N'2024-03-13T00:00:00.000' AS DateTime), 1008, N'user8@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(50, 1, N'Great customer service', 5, 0, CAST(N'2024-03-14T00:00:00.000' AS DateTime), 1009, N'user9@example.com')
GO
INSERT[dbo].[DboyReview]([DboyRId], [DboyId], [Comment], [Rating], [Status], [ReviewOn], [OrderId], [Email]) VALUES(51, 1, N'Delivery issues', 1, 0, CAST(N'2024-03-15T00:00:00.000' AS DateTime), 1010, N'user10@example.com')
GO
SET IDENTITY_INSERT[dbo].[DboyReview] OFF
GO
SET IDENTITY_INSERT[dbo].[DeliveredOrder] ON
GO
INSERT[dbo].[DeliveredOrder]([DeliveredOrderId], [OrderId], [EmpId], [AssignOn], [DeliveredOrCancelledOn], [CommitionEarning], [Status], [Email], [cancellation_Reason], [UserEmail]) VALUES(1000, 102, 1, CAST(N'2024-02-28T15:41:25.663' AS DateTime), N'Mar  5 2024  4:56PM', CAST(20.00 AS Decimal(18, 2)), 2, N'farazshaikh660@gmail.com', N'call not receiving ', NULL)
GO
INSERT[dbo].[DeliveredOrder]([DeliveredOrderId], [OrderId], [EmpId], [AssignOn], [DeliveredOrCancelledOn], [CommitionEarning], [Status], [Email], [cancellation_Reason], [UserEmail]) VALUES(1001, 105, 1, CAST(N'2024-03-01T16:14:27.980' AS DateTime), N'Apr 20 2024  4:41PM', CAST(5.00 AS Decimal(18, 2)), 2, N'farazshaikh660@gmail.com', N'fgfghg', NULL)
GO
INSERT[dbo].[DeliveredOrder]([DeliveredOrderId], [OrderId], [EmpId], [AssignOn], [DeliveredOrCancelledOn], [CommitionEarning], [Status], [Email], [cancellation_Reason], [UserEmail]) VALUES(1002, 105, 1, CAST(N'2024-03-05T18:35:49.527' AS DateTime), N'Apr 20 2024  4:41PM', CAST(5.00 AS Decimal(18, 2)), 2, N'farazshaikh660@gmail.com', N'fgfghg', NULL)
GO
INSERT[dbo].[DeliveredOrder]([DeliveredOrderId], [OrderId], [EmpId], [AssignOn], [DeliveredOrCancelledOn], [CommitionEarning], [Status], [Email], [cancellation_Reason], [UserEmail]) VALUES(1003, 106, 1, CAST(N'2024-03-21T15:37:24.870' AS DateTime), NULL, NULL, 2, N'farazshaikh660@gmail.com', NULL, N'farazshaikh08538@gmail.com')
GO
INSERT[dbo].[DeliveredOrder]([DeliveredOrderId], [OrderId], [EmpId], [AssignOn], [DeliveredOrCancelledOn], [CommitionEarning], [Status], [Email], [cancellation_Reason], [UserEmail]) VALUES(1004, 107, 1, CAST(N'2024-03-21T15:42:41.087' AS DateTime), NULL, NULL, 2, N'farazshaikh660@gmail.com', NULL, NULL)
GO
INSERT[dbo].[DeliveredOrder]([DeliveredOrderId], [OrderId], [EmpId], [AssignOn], [DeliveredOrCancelledOn], [CommitionEarning], [Status], [Email], [cancellation_Reason], [UserEmail]) VALUES(1005, 108, 1, CAST(N'2024-03-21T15:49:21.863' AS DateTime), N'Mar 21 2024  3:53PM', CAST(20.00 AS Decimal(18, 2)), 2, N'farazshaikh660@gmail.com', NULL, NULL)
GO
INSERT[dbo].[DeliveredOrder]([DeliveredOrderId], [OrderId], [EmpId], [AssignOn], [DeliveredOrCancelledOn], [CommitionEarning], [Status], [Email], [cancellation_Reason], [UserEmail]) VALUES(1006, 103, 1, CAST(N'2024-03-27T14:37:18.797' AS DateTime), N'Apr 20 2024  4:39PM', CAST(20.00 AS Decimal(18, 2)), 2, N'farazshaikh660@gmail.com', NULL, N'farazshaikh08538@gmail.com')
GO
INSERT[dbo].[DeliveredOrder]([DeliveredOrderId], [OrderId], [EmpId], [AssignOn], [DeliveredOrCancelledOn], [CommitionEarning], [Status], [Email], [cancellation_Reason], [UserEmail]) VALUES(1007, 101, 1, CAST(N'2024-03-27T14:38:00.370' AS DateTime), N'Apr 20 2024  4:39PM', CAST(5.00 AS Decimal(18, 2)), 2, N'farazshaikh660@gmail.com', N'moka na chahi', NULL)
GO
INSERT[dbo].[DeliveredOrder]([DeliveredOrderId], [OrderId], [EmpId], [AssignOn], [DeliveredOrCancelledOn], [CommitionEarning], [Status], [Email], [cancellation_Reason], [UserEmail]) VALUES(1008, 101, 1, CAST(N'2024-03-27T14:38:00.787' AS DateTime), N'Apr 20 2024  4:39PM', CAST(5.00 AS Decimal(18, 2)), 2, N'farazshaikh660@gmail.com', N'moka na chahi', NULL)
GO
INSERT[dbo].[DeliveredOrder]([DeliveredOrderId], [OrderId], [EmpId], [AssignOn], [DeliveredOrCancelledOn], [CommitionEarning], [Status], [Email], [cancellation_Reason], [UserEmail]) VALUES(1009, 109, 1, CAST(N'2024-03-27T14:48:46.237' AS DateTime), NULL, NULL, 2, N'farazshaikh660@gmail.com', NULL, N'Farazshaikh60@gmail.com')
GO
INSERT[dbo].[DeliveredOrder]([DeliveredOrderId], [OrderId], [EmpId], [AssignOn], [DeliveredOrCancelledOn], [CommitionEarning], [Status], [Email], [cancellation_Reason], [UserEmail]) VALUES(1010, 102, 1, CAST(N'2024-03-27T15:10:19.583' AS DateTime), NULL, NULL, 2, N'farazshaikh660@gmail.com', NULL, N'farazshaikh08538@gmail.com')
GO
INSERT[dbo].[DeliveredOrder]([DeliveredOrderId], [OrderId], [EmpId], [AssignOn], [DeliveredOrCancelledOn], [CommitionEarning], [Status], [Email], [cancellation_Reason], [UserEmail]) VALUES(1011, 115, 1, CAST(N'2024-04-20T16:44:13.780' AS DateTime), N'Apr 20 2024  5:19PM', CAST(20.00 AS Decimal(18, 2)), 4, N'farazshaikh660@gmail.com', NULL, N'Farazshaikh60@gmail.com')
GO
INSERT[dbo].[DeliveredOrder]([DeliveredOrderId], [OrderId], [EmpId], [AssignOn], [DeliveredOrCancelledOn], [CommitionEarning], [Status], [Email], [cancellation_Reason], [UserEmail]) VALUES(1012, 116, 1, CAST(N'2024-04-20T16:58:49.830' AS DateTime), N'Apr 20 2024  5:18PM', CAST(20.00 AS Decimal(18, 2)), 4, N'farazshaikh660@gmail.com', NULL, N'Farazshaikh60@gmail.com')
GO
SET IDENTITY_INSERT[dbo].[DeliveredOrder] OFF
GO
SET IDENTITY_INSERT[dbo].[DeliveryAddress] ON
GO
INSERT[dbo].[DeliveryAddress]([AddressId], [UserId], [RecipientName], [RecipientContact], [StreetAddress], [LandMark], [State], [City], [Postalcode], [CreatedAt], [UpdatedAt], [Status]) VALUES(1, NULL, N'sfsdf', N'dsfdf', N'sdfdsf', N'sdfsdf', NULL, N'dfsdf', N'45454', CAST(N'2024-02-19T11:20:50.630' AS DateTime), NULL, 1)
GO
INSERT[dbo].[DeliveryAddress]([AddressId], [UserId], [RecipientName], [RecipientContact], [StreetAddress], [LandMark], [State], [City], [Postalcode], [CreatedAt], [UpdatedAt], [Status]) VALUES(2, N'Farazshaikh60@gmail.com', N'Faraz Shaikh', N'8977667873', N'7924 Lubowitz Hollow, Turcotteshire, HI 72284', N'HUFFY ', N'up', N'lucknow''s ', N'565665', CAST(N'2024-02-19T11:47:47.047' AS DateTime), NULL, 1)
GO
INSERT[dbo].[DeliveryAddress]([AddressId], [UserId], [RecipientName], [RecipientContact], [StreetAddress], [LandMark], [State], [City], [Postalcode], [CreatedAt], [UpdatedAt], [Status]) VALUES(3, N'Farazshaikh60@gmail.com', N'fghfg', N'5676575676', N'fgfgh', N'fghfghfg', N'fhggh', N'fghgfh', N'565665', CAST(N'2024-02-19T12:05:22.830' AS DateTime), NULL, 0)
GO
INSERT[dbo].[DeliveryAddress]([AddressId], [UserId], [RecipientName], [RecipientContact], [StreetAddress], [LandMark], [State], [City], [Postalcode], [CreatedAt], [UpdatedAt], [Status]) VALUES(4, N'Farazshaikh60@gmail.com', N'fgfh', N'565464', N'hghghjgh', N'jghjhg', N'ghjhgj', N'ghjgj', N'5656', CAST(N'2024-02-19T12:43:18.617' AS DateTime), NULL, 0)
GO
INSERT[dbo].[DeliveryAddress]([AddressId], [UserId], [RecipientName], [RecipientContact], [StreetAddress], [LandMark], [State], [City], [Postalcode], [CreatedAt], [UpdatedAt], [Status]) VALUES(5, N'Farazshaikh60@gmail.com', N'sdfgdfg', N'765756', N'hgfgh', N'fghfgh', N'fghfgh', N'fghfgh', N'645654', CAST(N'2024-02-19T12:44:23.490' AS DateTime), NULL, 0)
GO
INSERT[dbo].[DeliveryAddress]([AddressId], [UserId], [RecipientName], [RecipientContact], [StreetAddress], [LandMark], [State], [City], [Postalcode], [CreatedAt], [UpdatedAt], [Status]) VALUES(6, N'Farazshaikh60@gmail.com', N'fgdgfdg', N'dfgfdg', N'dfgdfg', N'fgdgdfg', N'dfgdfg', N'dfgdfg', N'54654', CAST(N'2024-02-19T12:45:43.183' AS DateTime), NULL, 0)
GO
INSERT[dbo].[DeliveryAddress]([AddressId], [UserId], [RecipientName], [RecipientContact], [StreetAddress], [LandMark], [State], [City], [Postalcode], [CreatedAt], [UpdatedAt], [Status]) VALUES(7, N'Farazshaikh60@gmail.com', N'werwer', N'546546', N'hghg', N'fghgfhg', N'fghfgh', N'fghfgh', N'465465', CAST(N'2024-02-19T12:46:47.597' AS DateTime), NULL, 0)
GO
INSERT[dbo].[DeliveryAddress]([AddressId], [UserId], [RecipientName], [RecipientContact], [StreetAddress], [LandMark], [State], [City], [Postalcode], [CreatedAt], [UpdatedAt], [Status]) VALUES(8, N'farazshaikh08538@gmail.com', N'gfgdfg', N'4565465464', N'dfgfdgd', N'dfgfdg', N'dfgfdg', N'dfgdfg', N'565465', CAST(N'2024-02-20T18:39:33.790' AS DateTime), NULL, 1)
GO
SET IDENTITY_INSERT[dbo].[DeliveryAddress] OFF
GO
SET IDENTITY_INSERT[dbo].[PostalCode] ON
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(1, 223221, 8, 0, CAST(N'2024-02-17T14:58:55.163' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(2, 276124, 8, 0, CAST(N'2024-02-17T14:58:55.163' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(3, 276142, 8, 0, CAST(N'2024-02-17T14:58:55.163' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(4, 223222, 8, 0, CAST(N'2024-02-17T14:58:55.163' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(5, 276401, 8, 0, CAST(N'2024-02-17T14:58:55.163' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(6, 276125, 8, 0, CAST(N'2024-02-17T14:58:55.163' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(7, 276142, 8, 0, CAST(N'2024-02-17T14:58:55.163' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(8, 223223, 8, 0, CAST(N'2024-02-17T14:58:55.163' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(9, 276001, 8, 0, CAST(N'2024-02-17T14:58:55.163' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(10, 276125, 8, 0, CAST(N'2024-02-17T14:58:55.163' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(11, 276126, 8, 0, CAST(N'2024-02-17T14:58:55.163' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(12, 276301, 8, 0, CAST(N'2024-02-17T14:58:55.163' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(13, 276127, 8, 0, CAST(N'2024-02-17T14:58:55.163' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(14, 276305, 8, 0, CAST(N'2024-02-17T14:58:55.163' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(15, 276301, 8, 0, CAST(N'2024-02-17T14:58:55.163' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(16, 223221, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(17, 226008, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(18, 226004, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(19, 226001, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(20, 227308, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(21, 226005, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(22, 226017, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(23, 226024, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(24, 227005, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(25, 226024, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(26, 226009, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(27, 226003, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(28, 227125, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(29, 227107, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(30, 226018, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(31, 227105, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(32, 227115, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(33, 226002, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(34, 227202, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(35, 227101, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(36, 226017, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(37, 226025, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(38, 227305, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(39, 226026, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(40, 226021, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(41, 226016, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(42, 227111, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(43, 227116, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(44, 226006, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(45, 227111, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(46, 227105, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(47, 226012, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(48, 226023, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(49, 227116, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(50, 227308, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(51, 226016, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(52, 227305, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(53, 227202, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(54, 227305, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(55, 226022, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(56, 227125, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(57, 227116, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(58, 226013, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(59, 226007, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(60, 227309, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(61, 226023, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(62, 227007, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
INSERT[dbo].[PostalCode]([postal_id], [postal_code], [city_id], [status], [created_date]) VALUES(63, 227132, 50, 0, CAST(N'2024-02-17T15:23:25.587' AS DateTime))
GO
SET IDENTITY_INSERT[dbo].[PostalCode] OFF
GO
SET IDENTITY_INSERT[dbo].[State] ON
GO
INSERT[dbo].[State]([state_id], [state_name], [status], [created_date]) VALUES(1, N'Andhra Pradesh', 0, CAST(N'2024-02-17T13:53:34.060' AS DateTime))
GO
INSERT[dbo].[State]([state_id], [state_name], [status], [created_date]) VALUES(2, N'Arunachal Pradesh', 0, CAST(N'2024-02-17T13:53:34.060' AS DateTime))
GO
INSERT[dbo].[State]([state_id], [state_name], [status], [created_date]) VALUES(3, N'Assam', 0, CAST(N'2024-02-17T13:53:34.060' AS DateTime))
GO
INSERT[dbo].[State]([state_id], [state_name], [status], [created_date]) VALUES(4, N'Bihar', 0, CAST(N'2024-02-17T13:53:34.060' AS DateTime))
GO
INSERT[dbo].[State]([state_id], [state_name], [status], [created_date]) VALUES(5, N'Chhattisgarh', 0, CAST(N'2024-02-17T13:53:34.060' AS DateTime))
GO
INSERT[dbo].[State]([state_id], [state_name], [status], [created_date]) VALUES(6, N'Goa', 0, CAST(N'2024-02-17T13:53:34.060' AS DateTime))
GO
INSERT[dbo].[State]([state_id], [state_name], [status], [created_date]) VALUES(7, N'Gujarat', 0, CAST(N'2024-02-17T13:53:34.060' AS DateTime))
GO
INSERT[dbo].[State]([state_id], [state_name], [status], [created_date]) VALUES(8, N'Haryana', 0, CAST(N'2024-02-17T13:53:34.060' AS DateTime))
GO
INSERT[dbo].[State]([state_id], [state_name], [status], [created_date]) VALUES(9, N'Himachal Pradesh', 0, CAST(N'2024-02-17T13:53:34.060' AS DateTime))
GO
INSERT[dbo].[State]([state_id], [state_name], [status], [created_date]) VALUES(10, N'Jharkhand', 0, CAST(N'2024-02-17T13:53:34.060' AS DateTime))
GO
INSERT[dbo].[State]([state_id], [state_name], [status], [created_date]) VALUES(11, N'Karnataka', 0, CAST(N'2024-02-17T13:53:34.060' AS DateTime))
GO
INSERT[dbo].[State]([state_id], [state_name], [status], [created_date]) VALUES(12, N'Kerala', 0, CAST(N'2024-02-17T13:53:34.060' AS DateTime))
GO
INSERT[dbo].[State]([state_id], [state_name], [status], [created_date]) VALUES(13, N'Madhya Pradesh', 0, CAST(N'2024-02-17T13:53:34.060' AS DateTime))
GO
INSERT[dbo].[State]([state_id], [state_name], [status], [created_date]) VALUES(14, N'Maharashtra', 0, CAST(N'2024-02-17T13:53:34.060' AS DateTime))
GO
INSERT[dbo].[State]([state_id], [state_name], [status], [created_date]) VALUES(15, N'Manipur', 0, CAST(N'2024-02-17T13:53:34.060' AS DateTime))
GO
INSERT[dbo].[State]([state_id], [state_name], [status], [created_date]) VALUES(16, N'Meghalaya', 0, CAST(N'2024-02-17T13:53:34.060' AS DateTime))
GO
INSERT[dbo].[State]([state_id], [state_name], [status], [created_date]) VALUES(17, N'Mizoram', 0, CAST(N'2024-02-17T13:53:34.060' AS DateTime))
GO
INSERT[dbo].[State]([state_id], [state_name], [status], [created_date]) VALUES(18, N'Nagaland', 0, CAST(N'2024-02-17T13:53:34.060' AS DateTime))
GO
INSERT[dbo].[State]([state_id], [state_name], [status], [created_date]) VALUES(19, N'Odisha', 0, CAST(N'2024-02-17T13:53:34.060' AS DateTime))
GO
INSERT[dbo].[State]([state_id], [state_name], [status], [created_date]) VALUES(20, N'Punjab', 0, CAST(N'2024-02-17T13:53:34.060' AS DateTime))
GO
INSERT[dbo].[State]([state_id], [state_name], [status], [created_date]) VALUES(21, N'Rajasthan', 0, CAST(N'2024-02-17T13:53:34.060' AS DateTime))
GO
INSERT[dbo].[State]([state_id], [state_name], [status], [created_date]) VALUES(22, N'Sikkim', 0, CAST(N'2024-02-17T13:53:34.060' AS DateTime))
GO
INSERT[dbo].[State]([state_id], [state_name], [status], [created_date]) VALUES(23, N'Tamil Nadu', 0, CAST(N'2024-02-17T13:53:34.060' AS DateTime))
GO
INSERT[dbo].[State]([state_id], [state_name], [status], [created_date]) VALUES(24, N'Telangana', 0, CAST(N'2024-02-17T13:53:34.060' AS DateTime))
GO
INSERT[dbo].[State]([state_id], [state_name], [status], [created_date]) VALUES(25, N'Tripura', 0, CAST(N'2024-02-17T13:53:34.060' AS DateTime))
GO
INSERT[dbo].[State]([state_id], [state_name], [status], [created_date]) VALUES(26, N'Uttar Pradesh', 0, CAST(N'2024-02-17T13:53:34.060' AS DateTime))
GO
INSERT[dbo].[State]([state_id], [state_name], [status], [created_date]) VALUES(27, N'Uttarakhand', 0, CAST(N'2024-02-17T13:53:34.060' AS DateTime))
GO
INSERT[dbo].[State]([state_id], [state_name], [status], [created_date]) VALUES(28, N'West Bengal', 0, CAST(N'2024-02-17T13:53:34.060' AS DateTime))
GO
SET IDENTITY_INSERT[dbo].[State] OFF
GO
SET IDENTITY_INSERT[dbo].[Tabledetails] ON
GO
INSERT[dbo].[Tabledetails]([TableId], [Tablename], [Status]) VALUES(1, N'Tableno: 1', 1)
GO
INSERT[dbo].[Tabledetails]([TableId], [Tablename], [Status]) VALUES(2, N'Tableno: 2', 1)
GO
INSERT[dbo].[Tabledetails]([TableId], [Tablename], [Status]) VALUES(3, N'Tableno: 3', 1)
GO
INSERT[dbo].[Tabledetails]([TableId], [Tablename], [Status]) VALUES(4, N'Tableno: 4', 1)
GO
INSERT[dbo].[Tabledetails]([TableId], [Tablename], [Status]) VALUES(5, N'Tableno: 5', 1)
GO
SET IDENTITY_INSERT[dbo].[Tabledetails] OFF
GO
SET IDENTITY_INSERT[dbo].[tbl_AppReview] ON
GO
INSERT[dbo].[tbl_AppReview]([AReviewId], [UserID], [Name], [Comment], [Rating], [Status], [AReviewDate]) VALUES(1, N'user33@Gmail.com', N'string', N'Nice', 5, 1, CAST(N'2024-02-21T11:06:09.070' AS DateTime))
GO
INSERT[dbo].[tbl_AppReview]([AReviewId], [UserID], [Name], [Comment], [Rating], [Status], [AReviewDate]) VALUES(2, N'farazshaikh08538@gmail.com', N'Faraz', N'Nicely done ', 4, 1, CAST(N'2024-02-21T11:21:49.250' AS DateTime))
GO
INSERT[dbo].[tbl_AppReview]([AReviewId], [UserID], [Name], [Comment], [Rating], [Status], [AReviewDate]) VALUES(3, N'Farazshaikh60@gmail.com', N'faraz', N'fghfghgf', 5, 0, CAST(N'2024-02-21T12:19:28.873' AS DateTime))
GO
INSERT[dbo].[tbl_AppReview]([AReviewId], [UserID], [Name], [Comment], [Rating], [Status], [AReviewDate]) VALUES(4, N'FarazShaikh@gmail.com', N'Faraz Shaikh', N'fdfsdf', 5, 0, CAST(N'2024-02-24T16:50:32.323' AS DateTime))
GO
INSERT[dbo].[tbl_AppReview]([AReviewId], [UserID], [Name], [Comment], [Rating], [Status], [AReviewDate]) VALUES(5, N'FarazShaikh1@gmail.com', N'Faraz Shaikhh', N'good', 5, 0, CAST(N'2024-02-26T11:57:49.233' AS DateTime))
GO
INSERT[dbo].[tbl_AppReview]([AReviewId], [UserID], [Name], [Comment], [Rating], [Status], [AReviewDate]) VALUES(6, N'farazshaikh660@gmail.com', N'Faraz Ahmad', N'gfgfdg', 5, 0, CAST(N'2024-03-01T16:45:06.357' AS DateTime))
GO
SET IDENTITY_INSERT[dbo].[tbl_AppReview] OFF
GO
SET IDENTITY_INSERT[dbo].[tbl_BookingTableDetail] ON
GO
INSERT[dbo].[tbl_BookingTableDetail]([BookingId], [TableId], [BookingDate], [BookingTime], [NoOfPeople], [Entryon], [Name], [Email], [Status]) VALUES(10000, 1, N'2024-04-12', N'12:30', 3, CAST(N'2024-04-20T12:53:12.707' AS DateTime), N'Naved', N'farhanshaikh60@gmail.com', NULL)
GO
INSERT[dbo].[tbl_BookingTableDetail]([BookingId], [TableId], [BookingDate], [BookingTime], [NoOfPeople], [Entryon], [Name], [Email], [Status]) VALUES(10001, 1, N'2024-04-11', N'14:00', 2, CAST(N'2024-04-20T12:58:02.740' AS DateTime), N'Faraz', N'Farazshaikh60@gmail.com', NULL)
GO
SET IDENTITY_INSERT[dbo].[tbl_BookingTableDetail] OFF
GO
SET IDENTITY_INSERT[dbo].[tbl_contactus] ON
GO
INSERT[dbo].[tbl_contactus]([ContactId], [UserName], [Email], [subject], [Comment], [ContactDate], [status], [ProblemSolveDate]) VALUES(1, N'faraz', N'farazshaikh8960@gmail.com', N'item not selected', N'dsf', CAST(N'2023-12-28T14:53:50.053' AS DateTime), 2, N'Feb 9, 2024, 03:51 PM')
GO
INSERT[dbo].[tbl_contactus]([ContactId], [UserName], [Email], [subject], [Comment], [ContactDate], [status], [ProblemSolveDate]) VALUES(2, N'faraz', N'shreyanshsrivastava26ss@gmail.com', N'ghdsha', N'ughjkguig', CAST(N'2023-12-28T18:42:05.440' AS DateTime), 2, N'Feb 3, 2024, 05:53 PM')
GO
INSERT[dbo].[tbl_contactus]([ContactId], [UserName], [Email], [subject], [Comment], [ContactDate], [status], [ProblemSolveDate]) VALUES(3, N'faraz ahmad', N'farazshaikh8960@gmail.com', N'table not book', N'basdasjdasgda', CAST(N'2023-12-30T15:22:48.350' AS DateTime), 2, N'Apr 20, 2024, 11:58 AM')
GO
INSERT[dbo].[tbl_contactus]([ContactId], [UserName], [Email], [subject], [Comment], [ContactDate], [status], [ProblemSolveDate]) VALUES(4, N'faraz', N'farazshaikh8960@gmail.com', N'sdsfsd', N'sdfsdf', CAST(N'2024-01-02T16:14:08.830' AS DateTime), 2, N'Jan 2, 2024, 04:22 PM')
GO
INSERT[dbo].[tbl_contactus]([ContactId], [UserName], [Email], [subject], [Comment], [ContactDate], [status], [ProblemSolveDate]) VALUES(5, N'Laldhir', N'laldhirrajbhar7897@gmail.com', N'order not recieve', N'hbguiadshjsdkj', CAST(N'2024-02-03T17:30:08.980' AS DateTime), 2, N'Feb 3, 2024, 06:06 PM')
GO
INSERT[dbo].[tbl_contactus]([ContactId], [UserName], [Email], [subject], [Comment], [ContactDate], [status], [ProblemSolveDate]) VALUES(6, N'Faraz', N'Farazshaikh8960@gmail.com', N'Login Issue', N'sdfsdfsdfsdf', CAST(N'2024-02-09T15:42:57.713' AS DateTime), 2, NULL)
GO
INSERT[dbo].[tbl_contactus]([ContactId], [UserName], [Email], [subject], [Comment], [ContactDate], [status], [ProblemSolveDate]) VALUES(7, N'Naved', N'Farazshaikh08538@gmail.com', N'Check out ', N'sdsfsd', CAST(N'2024-02-09T15:56:03.260' AS DateTime), 1, NULL)
GO
INSERT[dbo].[tbl_contactus]([ContactId], [UserName], [Email], [subject], [Comment], [ContactDate], [status], [ProblemSolveDate]) VALUES(8, N'Arbaz', N'arbazahmad12345678@gmail.com', N'Testing Message ', N'jjdsfdffsd', CAST(N'2024-02-09T16:58:39.120' AS DateTime), 2, N'Apr 17, 2024, 06:56 PM')
GO
INSERT[dbo].[tbl_contactus]([ContactId], [UserName], [Email], [subject], [Comment], [ContactDate], [status], [ProblemSolveDate]) VALUES(9, N'Naved', N'farazshaikh12@gmail.com', N'dfdg', N'tfg', CAST(N'2024-02-10T18:59:02.587' AS DateTime), 1, NULL)
GO
INSERT[dbo].[tbl_contactus]([ContactId], [UserName], [Email], [subject], [Comment], [ContactDate], [status], [ProblemSolveDate]) VALUES(10, N'Naved', N'farazshaikh12@gmail.com', N'erfef', N'2343', CAST(N'2024-02-10T19:00:50.210' AS DateTime), 1, NULL)
GO
INSERT[dbo].[tbl_contactus]([ContactId], [UserName], [Email], [subject], [Comment], [ContactDate], [status], [ProblemSolveDate]) VALUES(11, N'Naved', N'farazshaikh121@gmail.com', N'iugfdfhg', N'fghfghgh', CAST(N'2024-02-10T19:02:16.320' AS DateTime), 1, NULL)
GO
INSERT[dbo].[tbl_contactus]([ContactId], [UserName], [Email], [subject], [Comment], [ContactDate], [status], [ProblemSolveDate]) VALUES(12, N'Naved', N'farazshaikh121@gmail.com', N'iugfdfhg', N'fghfghgh', CAST(N'2024-02-10T19:02:16.747' AS DateTime), 1, NULL)
GO
INSERT[dbo].[tbl_contactus]([ContactId], [UserName], [Email], [subject], [Comment], [ContactDate], [status], [ProblemSolveDate]) VALUES(13, N'Faraz', N'farazshaikh8960@gmail.com', N'Table Not Book', N'Welcome to our Romantic Corner, the perfect setting for an intimate and memorable dining experience.', CAST(N'2024-02-21T15:59:00.667' AS DateTime), 1, NULL)
GO
INSERT[dbo].[tbl_contactus]([ContactId], [UserName], [Email], [subject], [Comment], [ContactDate], [status], [ProblemSolveDate]) VALUES(14, N'Naved', N'farazshaikh8960@gmail.com', N'gghjghj', N'ghjghj', CAST(N'2024-03-01T16:23:51.423' AS DateTime), 1, NULL)
GO
INSERT[dbo].[tbl_contactus]([ContactId], [UserName], [Email], [subject], [Comment], [ContactDate], [status], [ProblemSolveDate]) VALUES(15, N'Laldhir Rajbhar', N'laldhirrajbhar7897@gmail.com', N'Bhai Paisa Bhejo', N'sjkdfjkhsjdnvbdjhvuidfjk', CAST(N'2024-04-20T11:53:44.040' AS DateTime), 1, NULL)
GO
SET IDENTITY_INSERT[dbo].[tbl_contactus] OFF
GO
SET IDENTITY_INSERT[dbo].[tbl_Coupan] ON
GO
INSERT[dbo].[tbl_Coupan]([CoupanId], [CoupanName], [Description], [ValidUpto], [IsActive], [DiscountPercentage]) VALUES(1, N'Holi50', N'dsfsdfsdf', N'26-02-2023', 1, NULL)
GO
SET IDENTITY_INSERT[dbo].[tbl_Coupan] OFF
GO
SET IDENTITY_INSERT[dbo].[tbl_Dishcategory] ON
GO
INSERT[dbo].[tbl_Dishcategory]([DishCategoryId], [DishCategoryName], [Status], [CreatedOn], [Icon]) VALUES(1, N'Meat', 1, CAST(N'2023-12-20T12:55:17.403' AS DateTime), NULL)
GO
INSERT[dbo].[tbl_Dishcategory]([DishCategoryId], [DishCategoryName], [Status], [CreatedOn], [Icon]) VALUES(2, N'Chicken', 1, CAST(N'2023-12-20T12:55:17.403' AS DateTime), N'fas fa-drumstick-bite')
GO
INSERT[dbo].[tbl_Dishcategory]([DishCategoryId], [DishCategoryName], [Status], [CreatedOn], [Icon]) VALUES(3, N'Fish', 1, CAST(N'2023-12-20T12:55:17.403' AS DateTime), N'fas fa-fish')
GO
INSERT[dbo].[tbl_Dishcategory]([DishCategoryId], [DishCategoryName], [Status], [CreatedOn], [Icon]) VALUES(4, N'EGGs', 1, CAST(N'2023-12-20T12:55:17.403' AS DateTime), N'fas fa-egg')
GO
INSERT[dbo].[tbl_Dishcategory]([DishCategoryId], [DishCategoryName], [Status], [CreatedOn], [Icon]) VALUES(5, N'VEG', 1, CAST(N'2023-12-20T12:55:17.403' AS DateTime), N'fas fa-seedling')
GO
INSERT[dbo].[tbl_Dishcategory]([DishCategoryId], [DishCategoryName], [Status], [CreatedOn], [Icon]) VALUES(6, N'Desserts', 1, CAST(N'2023-12-20T12:55:17.403' AS DateTime), N'fas fa-seedling')
GO
INSERT[dbo].[tbl_Dishcategory]([DishCategoryId], [DishCategoryName], [Status], [CreatedOn], [Icon]) VALUES(7, N'Tea', 1, CAST(N'2024-02-13T18:22:56.247' AS DateTime), N'fa fa-coffee')
GO
SET IDENTITY_INSERT[dbo].[tbl_Dishcategory] OFF
GO
SET IDENTITY_INSERT[dbo].[tbl_EmployeeRoleMaster] ON
GO
INSERT[dbo].[tbl_EmployeeRoleMaster]([RoleId], [RoleName], [Salary], [CreateDate], [Status]) VALUES(1, N'Chef''s ', CAST(15000.00 AS Decimal(18, 2)), CAST(N'2024-02-12T17:12:18.830' AS DateTime), 1)
GO
INSERT[dbo].[tbl_EmployeeRoleMaster]([RoleId], [RoleName], [Salary], [CreateDate], [Status]) VALUES(2, N'Waiter', CAST(8000.00 AS Decimal(18, 2)), CAST(N'2024-02-12T17:12:38.473' AS DateTime), 1)
GO
INSERT[dbo].[tbl_EmployeeRoleMaster]([RoleId], [RoleName], [Salary], [CreateDate], [Status]) VALUES(3, N'Cleaner''s ', CAST(6000.00 AS Decimal(18, 2)), CAST(N'2024-02-12T17:12:54.403' AS DateTime), 1)
GO
INSERT[dbo].[tbl_EmployeeRoleMaster]([RoleId], [RoleName], [Salary], [CreateDate], [Status]) VALUES(4, N'Delivery Boy', CAST(8000.00 AS Decimal(18, 2)), CAST(N'2024-02-26T18:33:05.110' AS DateTime), 1)
GO
SET IDENTITY_INSERT[dbo].[tbl_EmployeeRoleMaster] OFF
GO
SET IDENTITY_INSERT[dbo].[tbl_employees] ON
GO
INSERT[dbo].[tbl_employees]([EmpId], [Name], [Email], [RoleId], [Image], [Salary], [Phone], [Gender], [DOB], [AdharNo], [Address], [IsActive], [CreatedOn]) VALUES(1, N'Faraz Ahmad', N'farazshaikh660@gmail.com', 4, N'/img/1835df9d-03dd-4017-8e82-eb2c68d27fc7_atrimg.jpg', CAST(8000.00 AS Decimal(18, 2)), N'97765645432', N'male', N'2024-02-01', N'46546565464', N'hfghfghfghfghfgh', 1, CAST(N'2024-02-28T14:51:57.447' AS DateTime))
GO
SET IDENTITY_INSERT[dbo].[tbl_employees] OFF
GO
SET IDENTITY_INSERT[dbo].[tbl_FAQ] ON
GO
INSERT[dbo].[tbl_FAQ]([FAQId], [Quest], [Answers], [Status], [CreatedOn]) VALUES(1, N'What are Special Menus?', N'If you have a seasonal or special menu that changes every day (e.g. Chef''s Special), you can keep your customers up-to-date by uploading these menus via the RetroReserve.', 1, CAST(N'2024-03-05T11:04:39.257' AS DateTime))
GO
SET IDENTITY_INSERT[dbo].[tbl_FAQ] OFF
GO
SET IDENTITY_INSERT[dbo].[tbl_foodkart] ON
GO
INSERT[dbo].[tbl_foodkart]([DishId], [DishCategoryId], [DishType], [DishName], [DishImage], [DishPrize], [DishDescription], [DishAddDate], [DishStatus], [Quantity]) VALUES(1, 2, N'2', N'Punjabi Chicken Masala', N'/img/6222100c-fbcc-4250-9004-4371df039aeb_c1.jpg', CAST(350.00 AS Decimal(18, 2)), N'cooked in mustard oil with the tang of tomatoes to balance the flavours.', CAST(N'2024-01-06T18:38:34.630' AS DateTime), 1, 100)
GO
INSERT[dbo].[tbl_foodkart]([DishId], [DishCategoryId], [DishType], [DishName], [DishImage], [DishPrize], [DishDescription], [DishAddDate], [DishStatus], [Quantity]) VALUES(2, 2, N'1', N'Murg Malaiwala', N'/img/7cec0861-4f99-4cc4-bbde-d3a88541fffe_c4.jpg', CAST(580.00 AS Decimal(18, 2)), N'Chicken drumsticks laced with delicate flavors of cream, milk, saffron, rose petals and mild spices.', CAST(N'2024-01-06T18:39:15.333' AS DateTime), 1, 100)
GO
INSERT[dbo].[tbl_foodkart]([DishId], [DishCategoryId], [DishType], [DishName], [DishImage], [DishPrize], [DishDescription], [DishAddDate], [DishStatus], [Quantity]) VALUES(3, 2, N'1', N'Kerala Chicken Roast', N'/img/27b23da3-d988-4bc2-af40-56a33b253b55_c6.jpg', CAST(470.00 AS Decimal(18, 2)), N'Chicken drumsticks laced with delicate flavors of cream, milk, saffron, rose petals and mild spices.', CAST(N'2024-01-06T18:40:30.777' AS DateTime), 1, 100)
GO
INSERT[dbo].[tbl_foodkart]([DishId], [DishCategoryId], [DishType], [DishName], [DishImage], [DishPrize], [DishDescription], [DishAddDate], [DishStatus], [Quantity]) VALUES(4, 1, N'1', N'fdfdgdfgdfgdfgdfgdf', N'/img/a7e408e2-9f99-42d3-980e-bb3856afaf14_b3.jpg', CAST(150.00 AS Decimal(18, 2)), N'Chicken drumsticks laced with delicate flavors of cream, milk, saffron, rose petals and mild spices.', CAST(N'2024-02-15T18:11:20.133' AS DateTime), 0, 1)
GO
INSERT[dbo].[tbl_foodkart]([DishId], [DishCategoryId], [DishType], [DishName], [DishImage], [DishPrize], [DishDescription], [DishAddDate], [DishStatus], [Quantity]) VALUES(5, 1, N'1', N'tretrgdfgfhfghfg', N'/img/a1a0c468-f2d1-4ea5-ae9e-b7c65a582e78_best-product-3.jpg', CAST(200.00 AS Decimal(18, 2)), N'Chicken drumsticks laced with delicate flavors of cream, milk, saffron, rose petals and mild spices.', CAST(N'2024-02-15T18:12:19.737' AS DateTime), 1, 4)
GO
INSERT[dbo].[tbl_foodkart]([DishId], [DishCategoryId], [DishType], [DishName], [DishImage], [DishPrize], [DishDescription], [DishAddDate], [DishStatus], [Quantity]) VALUES(6, 3, N'1', N'dfvdgfghgfjghjghj', N'/img/c5fbe8e1-4c2a-4022-899d-28ce8a011b03_fruite-item-1.jpg', CAST(544.00 AS Decimal(18, 2)), N'Chicken drumsticks laced with delicate flavors of cream, milk, saffron, rose petals and mild spices.', CAST(N'2024-02-15T18:14:38.057' AS DateTime), 1, 4)
GO
INSERT[dbo].[tbl_foodkart]([DishId], [DishCategoryId], [DishType], [DishName], [DishImage], [DishPrize], [DishDescription], [DishAddDate], [DishStatus], [Quantity]) VALUES(7, 3, N'1', N'rtryrtytr', N'/img/d38dacab-03c0-442c-bdea-25c0e60961dc_featur-2.jpg', CAST(344.00 AS Decimal(18, 2)), N'Chicken drumsticks laced with delicate flavors of cream, milk, saffron, rose petals and mild spices.', CAST(N'2024-02-15T18:15:55.783' AS DateTime), 1, 44)
GO
INSERT[dbo].[tbl_foodkart]([DishId], [DishCategoryId], [DishType], [DishName], [DishImage], [DishPrize], [DishDescription], [DishAddDate], [DishStatus], [Quantity]) VALUES(8, 4, N'1', N'ertgffgdfg', N'/img/4630ceff-eab7-4229-abd7-5343847f90c4_fruite-item-5.jpg', CAST(65.00 AS Decimal(18, 2)), N'Chicken drumsticks laced with delicate flavors of cream, milk, saffron, rose petals and mild spices.', CAST(N'2024-02-15T18:16:34.953' AS DateTime), 1, 5)
GO
INSERT[dbo].[tbl_foodkart]([DishId], [DishCategoryId], [DishType], [DishName], [DishImage], [DishPrize], [DishDescription], [DishAddDate], [DishStatus], [Quantity]) VALUES(9, 2, N'2', N'dfgdfgd', N'/img/f61d68ab-dd4b-445e-bc61-ff11d3b9ebc2_menu-8.jpg', CAST(5657.00 AS Decimal(18, 2)), N'fghn vb', CAST(N'2024-03-05T11:11:57.633' AS DateTime), 1, 565)
GO
INSERT[dbo].[tbl_foodkart]([DishId], [DishCategoryId], [DishType], [DishName], [DishImage], [DishPrize], [DishDescription], [DishAddDate], [DishStatus], [Quantity]) VALUES(10, 2, N'2', N'vcgfdg', N'/img/a5240443-d8b9-4afb-9129-4245a7f27f0a_faraz3.jpg', CAST(456456.00 AS Decimal(18, 2)), N'vbcvbn', CAST(N'2024-03-05T11:13:50.590' AS DateTime), 1, 45654)
GO
INSERT[dbo].[tbl_foodkart]([DishId], [DishCategoryId], [DishType], [DishName], [DishImage], [DishPrize], [DishDescription], [DishAddDate], [DishStatus], [Quantity]) VALUES(11, 2, N'3', N'dfgdfgd', N'/img/f56f8dab-b295-46c2-87da-05b18c552c28_b3.jpg', CAST(88.00 AS Decimal(18, 2)), N'fghn vb', CAST(N'2024-03-05T11:19:43.073' AS DateTime), 1, 8)
GO
SET IDENTITY_INSERT[dbo].[tbl_foodkart] OFF
GO
SET IDENTITY_INSERT[dbo].[tbl_massagebox] ON
GO
INSERT[dbo].[tbl_massagebox]([MessageId], [Email], [Subject], [Description], [SentEmailDate], [Status]) VALUES(2, N'farazshaikh8960@gmail.com', N'fdgdf', N' 
     gdfdgfhhhhhhhhhhhhhhhhhgh
dfhfffffffffffffffffdfhgdfh
dfhfdhdfhdfh                       ', CAST(N'2024-02-07T13: 46: 54.673' AS DateTime), 1)
GO
INSERT[dbo].[tbl_massagebox]([MessageId], [Email], [Subject], [Description], [SentEmailDate], [Status]) VALUES(3, N'laldhirrajbhar7897@gmail.com', N'mujhe samaj nhi aa rha hai', N' 
                                  shdohsdiljfklsdpjfklsmdkfijskldfnsdiofjksdnfksdil', CAST(N'2024-04 - 20T11: 57: 49.317' AS DateTime), 1)
GO
SET IDENTITY_INSERT[dbo].[tbl_massagebox] OFF
GO
SET IDENTITY_INSERT[dbo].[tbl_OrderDetails] ON 
GO
INSERT[dbo].[tbl_OrderDetails]([OrderDetailID], [OrderID], [DishId], [Quantity], [TotalAmount]) VALUES(1, 100, 1, 2, CAST(700.00 AS Decimal(18, 2)))
GO
INSERT[dbo].[tbl_OrderDetails]([OrderDetailID], [OrderID], [DishId], [Quantity], [TotalAmount]) VALUES(2, 101, 1, 1, CAST(350.00 AS Decimal(18, 2)))
GO
INSERT[dbo].[tbl_OrderDetails]([OrderDetailID], [OrderID], [DishId], [Quantity], [TotalAmount]) VALUES(3, 102, 4, 1, CAST(580.00 AS Decimal(18, 2)))
GO
INSERT[dbo].[tbl_OrderDetails]([OrderDetailID], [OrderID], [DishId], [Quantity], [TotalAmount]) VALUES(4, 103, 9, 1, CAST(470.00 AS Decimal(18, 2)))
GO
INSERT[dbo].[tbl_OrderDetails]([OrderDetailID], [OrderID], [DishId], [Quantity], [TotalAmount]) VALUES(5, 104, 1, 1, CAST(350.00 AS Decimal(18, 2)))
GO
INSERT[dbo].[tbl_OrderDetails]([OrderDetailID], [OrderID], [DishId], [Quantity], [TotalAmount]) VALUES(6, 105, 1, 1, CAST(350.00 AS Decimal(18, 2)))
GO
INSERT[dbo].[tbl_OrderDetails]([OrderDetailID], [OrderID], [DishId], [Quantity], [TotalAmount]) VALUES(7, 105, 3, 1, CAST(94.00 AS Decimal(18, 2)))
GO
INSERT[dbo].[tbl_OrderDetails]([OrderDetailID], [OrderID], [DishId], [Quantity], [TotalAmount]) VALUES(1001, 106, 4, 1, CAST(580.00 AS Decimal(18, 2)))
GO
INSERT[dbo].[tbl_OrderDetails]([OrderDetailID], [OrderID], [DishId], [Quantity], [TotalAmount]) VALUES(1002, 107, 1, 1, CAST(350.00 AS Decimal(18, 2)))
GO
INSERT[dbo].[tbl_OrderDetails]([OrderDetailID], [OrderID], [DishId], [Quantity], [TotalAmount]) VALUES(1003, 108, 2, 1, CAST(150.00 AS Decimal(18, 2)))
GO
INSERT[dbo].[tbl_OrderDetails]([OrderDetailID], [OrderID], [DishId], [Quantity], [TotalAmount]) VALUES(1004, 109, 10, 1, CAST(230.00 AS Decimal(18, 2)))
GO
INSERT[dbo].[tbl_OrderDetails]([OrderDetailID], [OrderID], [DishId], [Quantity], [TotalAmount]) VALUES(1005, 110, 4, 1, CAST(580.00 AS Decimal(18, 2)))
GO
INSERT[dbo].[tbl_OrderDetails]([OrderDetailID], [OrderID], [DishId], [Quantity], [TotalAmount]) VALUES(1006, 112, 1, 1, CAST(350.00 AS Decimal(18, 2)))
GO
INSERT[dbo].[tbl_OrderDetails]([OrderDetailID], [OrderID], [DishId], [Quantity], [TotalAmount]) VALUES(1007, 113, 2, 1, CAST(150.00 AS Decimal(18, 2)))
GO
INSERT[dbo].[tbl_OrderDetails]([OrderDetailID], [OrderID], [DishId], [Quantity], [TotalAmount]) VALUES(1008, 114, 5, 1, CAST(290.00 AS Decimal(18, 2)))
GO
INSERT[dbo].[tbl_OrderDetails]([OrderDetailID], [OrderID], [DishId], [Quantity], [TotalAmount]) VALUES(1009, 115, 2, 1, CAST(150.00 AS Decimal(18, 2)))
GO
INSERT[dbo].[tbl_OrderDetails]([OrderDetailID], [OrderID], [DishId], [Quantity], [TotalAmount]) VALUES(1010, 116, 1, 1, CAST(350.00 AS Decimal(18, 2)))
GO
INSERT[dbo].[tbl_OrderDetails]([OrderDetailID], [OrderID], [DishId], [Quantity], [TotalAmount]) VALUES(1011, 117, 10, 1, CAST(230.00 AS Decimal(18, 2)))
GO
INSERT[dbo].[tbl_OrderDetails]([OrderDetailID], [OrderID], [DishId], [Quantity], [TotalAmount]) VALUES(1012, 117, 9, 1, CAST(470.00 AS Decimal(18, 2)))
GO
INSERT[dbo].[tbl_OrderDetails]([OrderDetailID], [OrderID], [DishId], [Quantity], [TotalAmount]) VALUES(1013, 117, 11, 1, CAST(120.00 AS Decimal(18, 2)))
GO
SET IDENTITY_INSERT[dbo].[tbl_OrderDetails] OFF
GO
SET IDENTITY_INSERT[dbo].[tbl_Orders] ON 
GO
INSERT[dbo].[tbl_Orders]([OrderID], [UserId], [AddressId], [OrderDate], [DeliverDate], [Status], [OTP], [cancellation_Reason], [DboyId]) VALUES(100, N'Farazshaikh60@gmail.com', 2, CAST(N'2024-02-20T15:09:54.357' AS DateTime), NULL, 1, NULL, NULL, 1)
GO
INSERT[dbo].[tbl_Orders]([OrderID], [UserId], [AddressId], [OrderDate], [DeliverDate], [Status], [OTP], [cancellation_Reason], [DboyId]) VALUES(101, N'farazshaikh08538@gmail.com', 8, CAST(N'2024-02-20T18:40:02.073' AS DateTime), N'Apr 20 2024  4:39PM', 5, 573172, N'moka na chahi', 1)
GO
INSERT[dbo].[tbl_Orders]([OrderID], [UserId], [AddressId], [OrderDate], [DeliverDate], [Status], [OTP], [cancellation_Reason], [DboyId]) VALUES(102, N'farazshaikh08538@gmail.com', 8, CAST(N'2024-02-20T18:46:26.867' AS DateTime), N'Mar  5 2024  4:56PM', 1, 628209, N'call not receiving ', 1)
GO
INSERT[dbo].[tbl_Orders]([OrderID], [UserId], [AddressId], [OrderDate], [DeliverDate], [Status], [OTP], [cancellation_Reason], [DboyId]) VALUES(103, N'farazshaikh08538@gmail.com', 8, CAST(N'2024-02-20T18:54:51.070' AS DateTime), N'Apr 20 2024  4:39PM', 4, 963610, NULL, 1)
GO
INSERT[dbo].[tbl_Orders]([OrderID], [UserId], [AddressId], [OrderDate], [DeliverDate], [Status], [OTP], [cancellation_Reason], [DboyId]) VALUES(104, N'Farazshaikh60@gmail.com', 2, CAST(N'2024-02-21T11:30:00.097' AS DateTime), NULL, 1, NULL, NULL, 1)
GO
INSERT[dbo].[tbl_Orders]([OrderID], [UserId], [AddressId], [OrderDate], [DeliverDate], [Status], [OTP], [cancellation_Reason], [DboyId]) VALUES(105, N'Farazshaikh60@gmail.com', 2, CAST(N'2024-02-24T10:47:47.767' AS DateTime), N'Apr 20 2024  4:41PM', 5, 702403, N'fgfghg', 1)
GO
INSERT[dbo].[tbl_Orders]([OrderID], [UserId], [AddressId], [OrderDate], [DeliverDate], [Status], [OTP], [cancellation_Reason], [DboyId]) VALUES(106, N'Farazshaikh60@gmail.com', 2, CAST(N'2024-03-21T15:02:49.850' AS DateTime), NULL, 1, 346213, NULL, 1)
GO
INSERT[dbo].[tbl_Orders]([OrderID], [UserId], [AddressId], [OrderDate], [DeliverDate], [Status], [OTP], [cancellation_Reason], [DboyId]) VALUES(107, N'Farazshaikh60@gmail.com', 2, CAST(N'2024-03-21T15:41:57.923' AS DateTime), NULL, 1, 717528, NULL, 1)
GO
INSERT[dbo].[tbl_Orders]([OrderID], [UserId], [AddressId], [OrderDate], [DeliverDate], [Status], [OTP], [cancellation_Reason], [DboyId]) VALUES(108, N'Farazshaikh60@gmail.com', 2, CAST(N'2024-03-21T15:47:02.200' AS DateTime), N'Mar 21 2024  3:53PM', 1, 151736, NULL, 1)
GO
INSERT[dbo].[tbl_Orders]([OrderID], [UserId], [AddressId], [OrderDate], [DeliverDate], [Status], [OTP], [cancellation_Reason], [DboyId]) VALUES(109, N'Farazshaikh60@gmail.com', 2, CAST(N'2024-03-27T14:39:03.807' AS DateTime), NULL, 1, 972320, NULL, 1)
GO
INSERT[dbo].[tbl_Orders]([OrderID], [UserId], [AddressId], [OrderDate], [DeliverDate], [Status], [OTP], [cancellation_Reason], [DboyId]) VALUES(110, N'Farazshaikh60@gmail.com', 2, CAST(N'2024-04-19T15:06:05.530' AS DateTime), NULL, 1, NULL, NULL, NULL)
GO
INSERT[dbo].[tbl_Orders]([OrderID], [UserId], [AddressId], [OrderDate], [DeliverDate], [Status], [OTP], [cancellation_Reason], [DboyId]) VALUES(111, N'Farazshaikh60@gmail.com', 2, CAST(N'2024-04-19T15:10:18.783' AS DateTime), NULL, 1, NULL, NULL, NULL)
GO
INSERT[dbo].[tbl_Orders]([OrderID], [UserId], [AddressId], [OrderDate], [DeliverDate], [Status], [OTP], [cancellation_Reason], [DboyId]) VALUES(112, N'Farazshaikh60@gmail.com', 2, CAST(N'2024-04-19T15:32:47.293' AS DateTime), NULL, 1, NULL, NULL, NULL)
GO
INSERT[dbo].[tbl_Orders]([OrderID], [UserId], [AddressId], [OrderDate], [DeliverDate], [Status], [OTP], [cancellation_Reason], [DboyId]) VALUES(113, N'Farazshaikh60@gmail.com', 2, CAST(N'2024-04-19T15:38:01.993' AS DateTime), NULL, 1, NULL, NULL, NULL)
GO
INSERT[dbo].[tbl_Orders]([OrderID], [UserId], [AddressId], [OrderDate], [DeliverDate], [Status], [OTP], [cancellation_Reason], [DboyId]) VALUES(114, N'Farazshaikh60@gmail.com', 2, CAST(N'2024-04-19T15:43:27.347' AS DateTime), NULL, 1, NULL, NULL, NULL)
GO
INSERT[dbo].[tbl_Orders]([OrderID], [UserId], [AddressId], [OrderDate], [DeliverDate], [Status], [OTP], [cancellation_Reason], [DboyId]) VALUES(115, N'Farazshaikh60@gmail.com', 2, CAST(N'2024-04-19T16:53:15.890' AS DateTime), N'Apr 20 2024  5:19PM', 4, 619999, NULL, 1)
GO
INSERT[dbo].[tbl_Orders]([OrderID], [UserId], [AddressId], [OrderDate], [DeliverDate], [Status], [OTP], [cancellation_Reason], [DboyId]) VALUES(116, N'Farazshaikh60@gmail.com', 2, CAST(N'2024-04-20T16:56:41.953' AS DateTime), N'Apr 20 2024  5:18PM', 4, 946287, NULL, 1)
GO
INSERT[dbo].[tbl_Orders]([OrderID], [UserId], [AddressId], [OrderDate], [DeliverDate], [Status], [OTP], [cancellation_Reason], [DboyId]) VALUES(117, N'Farazshaikh60@gmail.com', 2, CAST(N'2024-04-20T18:59:12.263' AS DateTime), NULL, 1, NULL, NULL, NULL)
GO
SET IDENTITY_INSERT[dbo].[tbl_Orders] OFF
GO
SET IDENTITY_INSERT[dbo].[tbl_PaymentDetails] ON 
GO
INSERT[dbo].[tbl_PaymentDetails]([PaymentId], [OrderId], [UserId], [PaymentType], [Amount], [PaymentOn], [Status]) VALUES(100000000, 114, N'Farazshaikh60@gmail.com', N'Paytm-UPI', 340, CAST(N'2024-04-19T15:43:27.350' AS DateTime), 1)
GO
INSERT[dbo].[tbl_PaymentDetails]([PaymentId], [OrderId], [UserId], [PaymentType], [Amount], [PaymentOn], [Status]) VALUES(100000001, 115, N'Farazshaikh60@gmail.com', N'COD', 200, CAST(N'2024-04-19T16:53:15.890' AS DateTime), 1)
GO
INSERT[dbo].[tbl_PaymentDetails]([PaymentId], [OrderId], [UserId], [PaymentType], [Amount], [PaymentOn], [Status]) VALUES(100000002, 116, N'Farazshaikh60@gmail.com', N'COD', 400, CAST(N'2024-04-20T16:56:42.007' AS DateTime), 1)
GO
INSERT[dbo].[tbl_PaymentDetails]([PaymentId], [OrderId], [UserId], [PaymentType], [Amount], [PaymentOn], [Status]) VALUES(100000003, 117, N'Farazshaikh60@gmail.com', N'Paytm', 820, CAST(N'2024-04-20T18:59:12.270' AS DateTime), 1)
GO
SET IDENTITY_INSERT[dbo].[tbl_PaymentDetails] OFF
GO
SET IDENTITY_INSERT[dbo].[tbl_ProductReview] ON 
GO
INSERT[dbo].[tbl_ProductReview]([ReviewId], [DishId], [UserID], [Name], [Email], [Comment], [Rating], [Status], [ReviewDate]) VALUES(1, 1, N'Farazshaikh60@gmail.com', N'Faraz shaikh', N'farazshaik60@gmail.com', N'Publishing high quality reviews can help people learn more about things they are considering, such as products, services, destinations, games, movies or other topics. For example, you could write a review as:', 3, 1, CAST(N'2024-02-19T18:48:19.710' AS DateTime))
GO
INSERT[dbo].[tbl_ProductReview]([ReviewId], [DishId], [UserID], [Name], [Email], [Comment], [Rating], [Status], [ReviewDate]) VALUES(2, 3, N'Farazshaikh60@gmail.com', N'naved', N'farazshaikh8960@gmail.com', N'Publishing high quality reviews can help people learn more about things they are considering, such as products, services, destinations, games, movies or other topics. For example, you could write a review as:', 5, 0, CAST(N'2024-02-19T18:48:59.737' AS DateTime))
GO
SET IDENTITY_INSERT[dbo].[tbl_ProductReview] OFF
GO
SET IDENTITY_INSERT[dbo].[tbl_RecentView] ON 
GO
INSERT[dbo].[tbl_RecentView]([RecentViewId], [DishId], [UserID], [ViewDate]) VALUES(1, 2, N'Farazshaikh60@gmail.com', CAST(N'2024-02-16T15:15:14.903' AS DateTime))
GO
INSERT[dbo].[tbl_RecentView]([RecentViewId], [DishId], [UserID], [ViewDate]) VALUES(2, 3, N'Farazshaikh60@gmail.com', CAST(N'2024-02-16T17:18:32.473' AS DateTime))
GO
INSERT[dbo].[tbl_RecentView]([RecentViewId], [DishId], [UserID], [ViewDate]) VALUES(3, 1, N'Farazshaikh60@gmail.com', CAST(N'2024-02-16T17:33:09.717' AS DateTime))
GO
INSERT[dbo].[tbl_RecentView]([RecentViewId], [DishId], [UserID], [ViewDate]) VALUES(4, 6, N'Farazshaikh60@gmail.com', CAST(N'2024-02-16T18:07:25.990' AS DateTime))
GO
INSERT[dbo].[tbl_RecentView]([RecentViewId], [DishId], [UserID], [ViewDate]) VALUES(5, 3, N'Farazshaikh60@gmail.com', CAST(N'2024-02-16T18:18:36.367' AS DateTime))
GO
INSERT[dbo].[tbl_RecentView]([RecentViewId], [DishId], [UserID], [ViewDate]) VALUES(6, 2, N'Farazshaikh60@gmail.com', CAST(N'2024-02-16T18:32:26.800' AS DateTime))
GO
INSERT[dbo].[tbl_RecentView]([RecentViewId], [DishId], [UserID], [ViewDate]) VALUES(7, 1, N'Farazshaikh60@gmail.com', CAST(N'2024-02-16T18:51:46.763' AS DateTime))
GO
INSERT[dbo].[tbl_RecentView]([RecentViewId], [DishId], [UserID], [ViewDate]) VALUES(8, 1, N'Farazshaikh60@gmail.com', CAST(N'2024-02-17T10:19:24.880' AS DateTime))
GO
INSERT[dbo].[tbl_RecentView]([RecentViewId], [DishId], [UserID], [ViewDate]) VALUES(9, 1, N'farazshaikh08538@gmail.com', CAST(N'2024-02-19T18:11:06.860' AS DateTime))
GO
INSERT[dbo].[tbl_RecentView]([RecentViewId], [DishId], [UserID], [ViewDate]) VALUES(10, 1, N'Farazshaikh60@gmail.com', CAST(N'2024-02-19T18:23:17.640' AS DateTime))
GO
INSERT[dbo].[tbl_RecentView]([RecentViewId], [DishId], [UserID], [ViewDate]) VALUES(11, 1, N'Farazshaikh60@gmail.com', CAST(N'2024-02-19T18:44:20.083' AS DateTime))
GO
INSERT[dbo].[tbl_RecentView]([RecentViewId], [DishId], [UserID], [ViewDate]) VALUES(12, 3, N'Farazshaikh60@gmail.com', CAST(N'2024-02-19T18:48:44.360' AS DateTime))
GO
INSERT[dbo].[tbl_RecentView]([RecentViewId], [DishId], [UserID], [ViewDate]) VALUES(13, 3, N'farazshaikh08538@gmail.com', CAST(N'2024-02-20T18:53:54.933' AS DateTime))
GO
SET IDENTITY_INSERT[dbo].[tbl_RecentView] OFF
GO
SET IDENTITY_INSERT[dbo].[TBL_TABLEBYADMIN] ON 
GO
INSERT[dbo].[TBL_TABLEBYADMIN]([TableId], [TableName], [Image], [Description], [IsActive]) VALUES(1, N'Naved', N'/img/23408285-8cfe-4e7a-ab74-0c850d7f5dfb_t1.jpg', N'Welcome to our Romantic Corner, the perfect settin', 1)
GO
SET IDENTITY_INSERT[dbo].[TBL_TABLEBYADMIN] OFF
GO
SET IDENTITY_INSERT[dbo].[tbl_teakart] ON 
GO
INSERT[dbo].[tbl_teakart]([TeaId], [TeaType], [TeaCategoryId], [TeaName], [TeaImage], [TeaDescription], [Quantity], [TeaPrize], [CreateDate], [Status]) VALUES(1, 1, 2, N'tea', N'/img/f8a1c160-a736-4f22-a200-46ad23089ad5_download (1).jpg', N'fsdfdsf', 100, CAST(50.00000 AS Decimal(18, 5)), CAST(N'2024-01-05T10:31:07.603' AS DateTime), 1)
GO
SET IDENTITY_INSERT[dbo].[tbl_teakart] OFF
GO
SET IDENTITY_INSERT[dbo].[tbl_UserBookingTable] ON 
GO
INSERT[dbo].[tbl_UserBookingTable]([BookingId], [TableId], [BookingDate], [BookingTime], [NoOfPeople], [Entryon], [Name], [Email]) VALUES(10000, 1, N'2024-02-23', N'12:30', 5, CAST(N'2024-02-21T18:46:01.103' AS DateTime), N'Naved', N'farazshaikh8960@gmail.com')
GO
INSERT[dbo].[tbl_UserBookingTable]([BookingId], [TableId], [BookingDate], [BookingTime], [NoOfPeople], [Entryon], [Name], [Email]) VALUES(11000, 1, N'2024-03-20', N'11:30', 1, CAST(N'2024-03-19T13:17:33.753' AS DateTime), N'Naved', N'farazshaikh660@gmail.com')
GO
INSERT[dbo].[tbl_UserBookingTable]([BookingId], [TableId], [BookingDate], [BookingTime], [NoOfPeople], [Entryon], [Name], [Email]) VALUES(11001, 1, N'2024-04-12', N'12:30', 3, CAST(N'2024-04-20T12:53:12.707' AS DateTime), N'Naved', N'farhanshaikh60@gmail.com')
GO
INSERT[dbo].[tbl_UserBookingTable]([BookingId], [TableId], [BookingDate], [BookingTime], [NoOfPeople], [Entryon], [Name], [Email]) VALUES(11002, 1, N'2024-04-11', N'14:00', 2, CAST(N'2024-04-20T12:58:02.740' AS DateTime), N'Faraz', N'Farazshaikh60@gmail.com')
GO
SET IDENTITY_INSERT[dbo].[tbl_UserBookingTable] OFF
GO
SET IDENTITY_INSERT[dbo].[tbl_UserPro_Details] ON 
GO
INSERT[dbo].[tbl_UserPro_Details]([UId], [Name], [Email], [Image], [Password], [BirthDay], [Phone], [Createdon]) VALUES(1, N'Faraz Shaikhh', N'FarazShaikh1@gmail.com', N'/img/4cb6727e-5f63-47c7-a3ac-9ab839023531_6b866464-7f71-48a1-982f-633fa0422d76_atrimg.jpg', N'Faraz@11', N'2024-02-22', N'989037987984', CAST(N'2024-02-24T18:00:28.640' AS DateTime))
GO
INSERT[dbo].[tbl_UserPro_Details]([UId], [Name], [Email], [Image], [Password], [BirthDay], [Phone], [Createdon]) VALUES(2, N'naved', N'Naved08538@gmail.com', NULL, N'Faraz@11', NULL, NULL, CAST(N'2024-02-26T15:04:55.577' AS DateTime))
GO
INSERT[dbo].[tbl_UserPro_Details]([UId], [Name], [Email], [Image], [Password], [BirthDay], [Phone], [Createdon]) VALUES(3, N'faraz', N'faraz08538@gmail.com', NULL, N'Faraz@11', NULL, NULL, CAST(N'2024-02-26T15:11:04.070' AS DateTime))
GO
INSERT[dbo].[tbl_UserPro_Details]([UId], [Name], [Email], [Image], [Password], [BirthDay], [Phone], [Createdon]) VALUES(4, N'Faraz', N'faraz38@gmail.com', NULL, N'Faraz@11', NULL, NULL, CAST(N'2024-02-26T15:12:00.670' AS DateTime))
GO
INSERT[dbo].[tbl_UserPro_Details]([UId], [Name], [Email], [Image], [Password], [BirthDay], [Phone], [Createdon]) VALUES(5, N'faraz', N'stance.farazahmad@gmail.com', NULL, N'Faraz@11', NULL, NULL, CAST(N'2024-02-26T16:56:16.950' AS DateTime))
GO
INSERT[dbo].[tbl_UserPro_Details]([UId], [Name], [Email], [Image], [Password], [BirthDay], [Phone], [Createdon]) VALUES(6, N'dfgdfgd', N'raiyyanshaikh97@gmail.com', NULL, N'Faraz@11', NULL, NULL, CAST(N'2024-02-26T17:01:23.203' AS DateTime))
GO
INSERT[dbo].[tbl_UserPro_Details]([UId], [Name], [Email], [Image], [Password], [BirthDay], [Phone], [Createdon]) VALUES(7, N'dfgdfgd', N'raiyyanshaikh97@gmail.com', NULL, N'Faraz@11', NULL, NULL, CAST(N'2024-02-26T17:02:12.247' AS DateTime))
GO
INSERT[dbo].[tbl_UserPro_Details]([UId], [Name], [Email], [Image], [Password], [BirthDay], [Phone], [Createdon]) VALUES(8, N'faraz', N'farazshaikh8d960@gmail.com', NULL, N'Faraz@11', NULL, NULL, CAST(N'2024-02-26T17:44:35.720' AS DateTime))
GO
INSERT[dbo].[tbl_UserPro_Details]([UId], [Name], [Email], [Image], [Password], [BirthDay], [Phone], [Createdon]) VALUES(9, N'Faraz Ahmad', N'farazshaikh660@gmail.com', NULL, N'Faraz@11', NULL, NULL, CAST(N'2024-02-28T14:51:59.187' AS DateTime))
GO
INSERT[dbo].[tbl_UserPro_Details]([UId], [Name], [Email], [Image], [Password], [BirthDay], [Phone], [Createdon]) VALUES(10, N'Shaikh Faraz', N'farazshaikh91@gmail.com', N'/img/2fd2a77b-5cfa-4665-b690-2080d9b06c5a_6b866464-7f71-48a1-982f-633fa0422d76_atrimg.jpg', N'Faraz@11', N'2024-03-14', N'654756756', CAST(N'2024-03-01T16:51:07.110' AS DateTime))
GO
SET IDENTITY_INSERT[dbo].[tbl_UserPro_Details] OFF
GO
SET IDENTITY_INSERT[dbo].[tbl_Variant] ON 
GO
INSERT[dbo].[tbl_Variant]([Id], [DishId], [VName], [DishImage], [MRP], [SellingCost], [DishDescription], [DishStatus], [DishQuantity]) VALUES(1, 1, N'Amritsari Chicken Masala', N'/img/6f20d1c3-ff62-44d3-a5ce-261f8c9e73c7_c1.jpg', CAST(380.00 AS Numeric(18, 2)), CAST(350.00 AS Numeric(18, 2)), N'cooked in mustard oil with the tang of tomatoes to balance the flavours.', 0, N'Full')
GO
INSERT[dbo].[tbl_Variant]([Id], [DishId], [VName], [DishImage], [MRP], [SellingCost], [DishDescription], [DishStatus], [DishQuantity]) VALUES(2, 1, N'Amritsari Chicken Masala', N'/img/f3dbbe43-4125-4eb6-add3-cc67d8c874b6_c1.jpg', CAST(180.00 AS Numeric(18, 2)), CAST(150.00 AS Numeric(18, 2)), N'cooked in mustard oil with the tang of tomatoes to balance the flavours.', 1, N'Half')
GO
INSERT[dbo].[tbl_Variant]([Id], [DishId], [VName], [DishImage], [MRP], [SellingCost], [DishDescription], [DishStatus], [DishQuantity]) VALUES(3, 1, N'Amritsari Chicken Masala', N'/img/a890f487-7278-4a8a-91ab-4223ecdaa8ad_c1.jpg', CAST(95.00 AS Numeric(18, 2)), CAST(94.00 AS Numeric(18, 2)), N'cooked in mustard oil with the tang of tomatoes to balance the flavours.', 1, N'Quarter ')
GO
INSERT[dbo].[tbl_Variant]([Id], [DishId], [VName], [DishImage], [MRP], [SellingCost], [DishDescription], [DishStatus], [DishQuantity]) VALUES(4, 2, N'Murg Malaiwala', N'/img/32d1962f-2f0a-4bdd-b377-05f6bcd7f448_c4.jpg', CAST(600.00 AS Numeric(18, 2)), CAST(580.00 AS Numeric(18, 2)), N'Chicken drumsticks laced with delicate flavors of cream, milk, saffron, rose petals and mild spices.', 1, N'Full')
GO
INSERT[dbo].[tbl_Variant]([Id], [DishId], [VName], [DishImage], [MRP], [SellingCost], [DishDescription], [DishStatus], [DishQuantity]) VALUES(5, 2, N'Murg Malaiwala', N'/img/5b70207b-ccbc-4e7d-8848-e390ca941dcf_c4.jpg', CAST(300.00 AS Numeric(18, 2)), CAST(290.00 AS Numeric(18, 2)), N'Chicken drumsticks laced with delicate flavors of cream, milk, saffron, rose petals and mild spices.', 1, N'Half')
GO
INSERT[dbo].[tbl_Variant]([Id], [DishId], [VName], [DishImage], [MRP], [SellingCost], [DishDescription], [DishStatus], [DishQuantity]) VALUES(6, 2, N'Murg Malaiwala', N'/img/4c2e50ac-5b12-460e-8e58-cadad0b585db_c4.jpg', CAST(180.00 AS Numeric(18, 2)), CAST(150.00 AS Numeric(18, 2)), N'Chicken drumsticks laced with delicate flavors of cream, milk, saffron, rose petals and mild spices.', 1, N'Quarter ')
GO
INSERT[dbo].[tbl_Variant]([Id], [DishId], [VName], [DishImage], [MRP], [SellingCost], [DishDescription], [DishStatus], [DishQuantity]) VALUES(10, 3, N'Kerala Chicken Roast', N'/img/5e6cfc5c-db8d-401e-94a3-ae71ca840b15_c6.jpg', CAST(250.00 AS Numeric(18, 2)), CAST(230.00 AS Numeric(18, 2)), N'35 Best Indian Chicken Recipes | Easy Chicken RecipesIndian Chicken Recipes: If your favourite meat ', 1, N'Half')
GO
INSERT[dbo].[tbl_Variant]([Id], [DishId], [VName], [DishImage], [MRP], [SellingCost], [DishDescription], [DishStatus], [DishQuantity]) VALUES(9, 3, N'Kerala Chicken Roast', N'/img/1e8c8c09-0769-4156-a723-526a9f742c08_c6.jpg', CAST(500.00 AS Numeric(18, 2)), CAST(470.00 AS Numeric(18, 2)), N'35 Best Indian Chicken Recipes | Easy Chicken RecipesIndian Chicken Recipes: If your favourite meat ', 1, N'Full')
GO
INSERT[dbo].[tbl_Variant]([Id], [DishId], [VName], [DishImage], [MRP], [SellingCost], [DishDescription], [DishStatus], [DishQuantity]) VALUES(11, 3, N'Kerala Chicken Roast', N'/img/5b7ff44e-33b3-4fca-b66d-7d9668a75ec5_c6.jpg', CAST(125.00 AS Numeric(18, 2)), CAST(120.00 AS Numeric(18, 2)), N'35 Best Indian Chicken Recipes | Easy Chicken RecipesIndian Chicken Recipes: If your favourite meat ', 1, N'Quarter ')
GO
INSERT[dbo].[tbl_Variant]([Id], [DishId], [VName], [DishImage], [MRP], [SellingCost], [DishDescription], [DishStatus], [DishQuantity]) VALUES(12, 1, N'Punjabi Chicken Masala', N'/img/13c46214-1483-461c-af6e-0fe33abcebe0_t1.jpg', CAST(110.00 AS Numeric(18, 2)), CAST(99.00 AS Numeric(18, 2)), N'cooked in mustard oil with the tang of tomatoes to balance the flavours.', 1, N'6')
GO
INSERT[dbo].[tbl_Variant]([Id], [DishId], [VName], [DishImage], [MRP], [SellingCost], [DishDescription], [DishStatus], [DishQuantity]) VALUES(13, 10, N'vcgfdg', N'/img/ad5a7484-835f-4337-88f8-a1fd33794a42_b2.jpg', CAST(0.00 AS Numeric(18, 2)), CAST(0.00 AS Numeric(18, 2)), N'vbcvbn', 1, NULL)
GO
SET IDENTITY_INSERT[dbo].[tbl_Variant] OFF
GO
SET IDENTITY_INSERT[dbo].[tblBannner] ON 
GO
INSERT[dbo].[tblBannner]([BannerId], [BannerName], [BannerOfferName], [BannerImage], [Description], [Offer], [ProductLink], [Status], [AddOn], [UpdateOn]) VALUES(1, N'BannerName1', N'NON-VEG FOOD', N'/img/2b2fdb20-a825-4013-82b5-999cb2b4fcd2_best-product-3.jpg', N'sfsdfsdfsdfsdfsd', N'54%', N'https://localhost:7173/Home', 1, CAST(N'2024-02-16T13:33:15.660' AS DateTime), NULL)
GO
INSERT[dbo].[tblBannner]([BannerId], [BannerName], [BannerOfferName], [BannerImage], [Description], [Offer], [ProductLink], [Status], [AddOn], [UpdateOn]) VALUES(2, N'BannerName1', N'VEG FOOD', N'/img/69e06d8d-3b15-4743-83f8-515f0a4aa5c8_fruite-item-1.jpg', N'dfgdgfdgdf', N'5%', N'https://localhost:7173/Home', 1, CAST(N'2024-02-16T13:51:09.097' AS DateTime), NULL)
GO
INSERT[dbo].[tblBannner]([BannerId], [BannerName], [BannerOfferName], [BannerImage], [Description], [Offer], [ProductLink], [Status], [AddOn], [UpdateOn]) VALUES(3, N'EventBanner', N'VEG FOOD', N'/img/4941ccca-e795-48f0-8634-920f8b6fa7b5_featur-2.jpg', N'hfghgfhf', N'65', N'https://localhost:7173/Event', 1, CAST(N'2024-02-16T14:56:03.390' AS DateTime), NULL)
GO
INSERT[dbo].[tblBannner]([BannerId], [BannerName], [BannerOfferName], [BannerImage], [Description], [Offer], [ProductLink], [Status], [AddOn], [UpdateOn]) VALUES(4, N'EventBanner', N'NON-VEG FOOD', N'/img/3fbc6542-0b72-4eba-81d8-4ed0430e5cf2_featur-3.jpg', N'hfghgfhf', N'65', N'https://localhost:7173/Event', 1, CAST(N'2024-02-16T14:56:27.300' AS DateTime), NULL)
GO
INSERT[dbo].[tblBannner]([BannerId], [BannerName], [BannerOfferName], [BannerImage], [Description], [Offer], [ProductLink], [Status], [AddOn], [UpdateOn]) VALUES(5, N'BannerName3', N'Delicius  Chicken biryani ', N'/img/6caaa713-c171-416a-931b-7bc598dd3299_b3.jpg', N'dfgfghfghfgh', N'40', N'https://localhost:7173/menu-card', 1, CAST(N'2024-03-05T13:25:33.313' AS DateTime), NULL)
GO
SET IDENTITY_INSERT[dbo].[tblBannner] OFF
GO
SET IDENTITY_INSERT[dbo].[tblEmployeeSalary] ON 
GO
INSERT[dbo].[tblEmployeeSalary]([EmpSalaryId], [EmpId], [RoleId], [CreationDate], [Status]) VALUES(1, 1, 4, CAST(N'2024-02-28T14:51:57.447' AS DateTime), 1)
GO
INSERT[dbo].[tblEmployeeSalary]([EmpSalaryId], [EmpId], [RoleId], [CreationDate], [Status]) VALUES(2, 1, 4, CAST(N'2024-03-18T10:38:47.460' AS DateTime), 1)
GO
INSERT[dbo].[tblEmployeeSalary]([EmpSalaryId], [EmpId], [RoleId], [CreationDate], [Status]) VALUES(3, 1, 4, CAST(N'2024-03-18T16:35:51.223' AS DateTime), 1)
GO
INSERT[dbo].[tblEmployeeSalary]([EmpSalaryId], [EmpId], [RoleId], [CreationDate], [Status]) VALUES(4, 1, 4, CAST(N'2024-03-19T09:55:00.067' AS DateTime), 1)
GO
INSERT[dbo].[tblEmployeeSalary]([EmpSalaryId], [EmpId], [RoleId], [CreationDate], [Status]) VALUES(5, 1, 4, CAST(N'2024-03-19T10:00:26.987' AS DateTime), 1)
GO
SET IDENTITY_INSERT[dbo].[tblEmployeeSalary] OFF
GO
SET IDENTITY_INSERT[dbo].[tblErrorLog] ON 
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(1, N'ReviewService', N'GetDboyReviewStatistics', N'Could not find stored procedure ''sp_GetDboyReviewStatisticsByd''.', N'-1', CAST(N'2024-03-14T12:59:57.177' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(2, N'ReviewService', N'GetDboyReviewStatistics', N'Could not find stored procedure ''sp_GetDboyReviewStatisticsByI''.', N'-1', CAST(N'2024-03-14T13:07:37.407' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(3, N'ReviewService', N'MoveNext', N'Could not find stored procedure ''sp_AddOrUpdateDboyRevie''.', N'-1', CAST(N'2024-03-14T13:19:10.157' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(4, N'ReviewService', N'sp_AddOrUpdateDboyRevie', N'Could not find stored procedure ''sp_AddOrUpdateDboyRevie''.', N'-1', CAST(N'2024-03-15T09:27:00.297' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(5, N'EmployeeService', N'GetEmployeeSalaryDetailById', N'Error parsing column 5 (CreditOn=18 Mar 2024 10:38:47:460 - String)', N'sp_GetEmpSalarydetailById', CAST(N'2024-03-18T11:38:35.500' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(6, N'EmployeeService', N'GetEmployeeSalaryDetailById', N'Error parsing column 5 (CreditOn=18 Mar 2024 10:38:47:460 - String)', N'sp_GetEmpSalarydetailById', CAST(N'2024-03-18T11:38:39.043' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(7, N'EmployeeService', N'AddEmpSalary', N'Object reference not set to an instance of an object.', N'sp_AddEmpSalary', CAST(N'2024-03-19T09:56:11.150' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(8, N'AddressService', N'RemoveAddress', N'Procedure or function sp_UpdateStatus has too many arguments specified.', N'sp_UpdateStatus', CAST(N'2024-03-19T16:53:37.093' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(9, N'OrdersService', N'ResendOTP', N'Error sending email', N'sp_ResendOTP', CAST(N'2024-03-27T14:56:19.350' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(10, N'OrdersService', N'ResendOTP', N'Error sending email', N'sp_ResendOTP', CAST(N'2024-03-27T14:57:30.060' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(11, N'OrdersService', N'ResendOTP', N'Error sending email', N'sp_ResendOTP', CAST(N'2024-03-27T14:58:50.390' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(12, N'OrdersService', N'ResendOTP', N'Error sending email', N'sp_ResendOTP', CAST(N'2024-03-27T14:59:08.873' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(13, N'OrdersService', N'ResendOTP', N'Error sending email', N'sp_ResendOTP', CAST(N'2024-03-27T15:02:29.277' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(14, N'OrdersService', N'ResendOTP', N'Error sending email', N'sp_ResendOTP', CAST(N'2024-03-27T15:02:32.307' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(15, N'CartService', N'GetCartValueList', N'Could not find stored procedure ''sp_CartValueById''.', N'sp_CartValueById', CAST(N'2024-04-01T15:36:58.813' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(16, N'CartService', N'GetCartValueList', N'Could not find stored procedure ''sp_CartValueById''.', N'sp_CartValueById', CAST(N'2024-04-01T15:36:58.813' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(17, N'OffersService', N'ChangeCoupanStatus', N'Could not find stored procedure ''Proc_ChangeCoupanStatus''.', N'Proc_ChangeCoupanStatus', CAST(N'2024-04-20T12:05:12.760' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(18, N'OffersService', N'ChangeCoupanStatus', N'Could not find stored procedure ''Proc_ChangeCoupanStatus''.', N'Proc_ChangeCoupanStatus', CAST(N'2024-04-20T12:05:16.120' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(19, N'OffersService', N'ChangeCoupanStatus', N'Could not find stored procedure ''Proc_ChangeCoupanStatus''.', N'Proc_ChangeCoupanStatus', CAST(N'2024-04-20T12:05:18.610' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(20, N'OffersService', N'ChangeCoupanStatus', N'Could not find stored procedure ''Proc_ChangeCoupanStatus''.', N'Proc_ChangeCoupanStatus', CAST(N'2024-04-20T12:05:19.550' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(21, N'OffersService', N'ChangeCoupanStatus', N'Could not find stored procedure ''Proc_ChangeCoupanStatus''.', N'Proc_ChangeCoupanStatus', CAST(N'2024-04-20T12:05:20.010' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(22, N'OffersService', N'ChangeCoupanStatus', N'Could not find stored procedure ''Proc_ChangeCoupanStatus''.', N'Proc_ChangeCoupanStatus', CAST(N'2024-04-20T12:05:20.240' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(23, N'OffersService', N'ChangeCoupanStatus', N'Could not find stored procedure ''Proc_ChangeCoupanStatus''.', N'Proc_ChangeCoupanStatus', CAST(N'2024-04-20T12:05:20.447' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(24, N'OffersService', N'ChangeCoupanStatus', N'Could not find stored procedure ''Proc_ChangeCoupanStatus''.', N'Proc_ChangeCoupanStatus', CAST(N'2024-04-20T12:05:20.633' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(25, N'OffersService', N'ChangeCoupanStatus', N'Could not find stored procedure ''Proc_ChangeCoupanStatus''.', N'Proc_ChangeCoupanStatus', CAST(N'2024-04-20T12:05:20.840' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(26, N'OffersService', N'ChangeCoupanStatus', N'Could not find stored procedure ''Proc_ChangeCoupanStatus''.', N'Proc_ChangeCoupanStatus', CAST(N'2024-04-20T12:05:21.227' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(27, N'OffersService', N'ChangeCoupanStatus', N'Could not find stored procedure ''Proc_ChangeCoupanStatus''.', N'Proc_ChangeCoupanStatus', CAST(N'2024-04-20T12:05:21.430' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(28, N'OffersService', N'ChangeCoupanStatus', N'Could not find stored procedure ''Proc_ChangeCoupanStatus''.', N'Proc_ChangeCoupanStatus', CAST(N'2024-04-20T12:05:21.647' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(29, N'OffersService', N'ChangeCoupanStatus', N'Could not find stored procedure ''Proc_ChangeCoupanStatus''.', N'Proc_ChangeCoupanStatus', CAST(N'2024-04-20T12:05:21.857' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(30, N'OffersService', N'ChangeCoupanStatus', N'Could not find stored procedure ''Proc_ChangeCoupanStatus''.', N'Proc_ChangeCoupanStatus', CAST(N'2024-04-20T12:05:22.060' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(31, N'OffersService', N'ChangeCoupanStatus', N'Could not find stored procedure ''Proc_ChangeCoupanStatus''.', N'Proc_ChangeCoupanStatus', CAST(N'2024-04-20T12:05:22.237' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(32, N'OffersService', N'ChangeCoupanStatus', N'Could not find stored procedure ''Proc_ChangeCoupanStatus''.', N'Proc_ChangeCoupanStatus', CAST(N'2024-04-20T12:05:25.737' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(33, N'OffersService', N'ChangeCoupanStatus', N'Could not find stored procedure ''Proc_ChangeCoupanStatus''.', N'Proc_ChangeCoupanStatus', CAST(N'2024-04-20T12:05:26.510' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(34, N'OffersService', N'ChangeCoupanStatus', N'Could not find stored procedure ''Proc_ChangeCoupanStatus''.', N'Proc_ChangeCoupanStatus', CAST(N'2024-04-20T12:05:26.680' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(35, N'OffersService', N'ChangeCoupanStatus', N'Could not find stored procedure ''Proc_ChangeCoupanStatus''.', N'Proc_ChangeCoupanStatus', CAST(N'2024-04-20T12:05:26.857' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(36, N'OffersService', N'ChangeCoupanStatus', N'Could not find stored procedure ''Proc_ChangeCoupanStatus''.', N'Proc_ChangeCoupanStatus', CAST(N'2024-04-20T12:05:27.037' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(37, N'OffersService', N'ChangeCoupanStatus', N'Could not find stored procedure ''Proc_ChangeCoupanStatus''.', N'Proc_ChangeCoupanStatus', CAST(N'2024-04-20T12:05:27.367' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(38, N'OrdersService', N'ResendOTP', N'Error sending email', N'sp_ResendOTP', CAST(N'2024-04-20T16:09:30.010' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(39, N'OrdersService', N'ResendOTP', N'Error sending email', N'sp_ResendOTP', CAST(N'2024-04-20T16:12:15.683' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(40, N'OrdersService', N'ResendOTP', N'Error sending email', N'sp_ResendOTP', CAST(N'2024-04-20T16:12:24.167' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(41, N'OrdersService', N'ResendOTP', N'Error sending email', N'sp_ResendOTP', CAST(N'2024-04-20T16:12:56.130' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(42, N'OrdersService', N'ResendOTP', N'Error sending email', N'sp_ResendOTP', CAST(N'2024-04-20T16:20:29.347' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(43, N'OrdersService', N'ResendOTP', N'Error sending email', N'sp_ResendOTP', CAST(N'2024-04-20T16:22:14.027' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(44, N'OrdersService', N'ResendOTP', N'Error sending email', N'sp_ResendOTP', CAST(N'2024-04-20T16:23:38.590' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(45, N'OrdersService', N'ResendOTP', N'Error sending email', N'sp_ResendOTP', CAST(N'2024-04-20T16:24:37.323' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(46, N'OrdersService', N'ResendOTP', N'Error sending email', N'sp_ResendOTP', CAST(N'2024-04-20T16:24:46.750' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(47, N'OrdersService', N'ResendOTP', N'Error sending email', N'sp_ResendOTP', CAST(N'2024-04-20T16:26:14.467' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(48, N'OrdersService', N'ResendOTP', N'Error sending email', N'sp_ResendOTP', CAST(N'2024-04-20T16:30:13.923' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(49, N'OrdersService', N'ResendOTP', N'Error sending email', N'sp_ResendOTP', CAST(N'2024-04-20T16:32:01.127' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(50, N'OrdersService', N'ResendOTP', N'Error sending email', N'sp_ResendOTP', CAST(N'2024-04-20T16:32:13.680' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(51, N'OrdersService', N'ResendOTP', N'Error sending email', N'sp_ResendOTP', CAST(N'2024-04-20T16:33:03.983' AS DateTime))
GO
INSERT[dbo].[tblErrorLog]([ErrorId], [ClassName], [FunctionName], [ErrorMsg], [Proc_Name], [CreatedOn]) VALUES(52, N'OrdersService', N'ResendOTP', N'Error sending email', N'sp_ResendOTP', CAST(N'2024-04-20T16:34:55.723' AS DateTime))
GO
SET IDENTITY_INSERT[dbo].[tblErrorLog] OFF
GO
SET IDENTITY_INSERT[dbo].[tblEvent] ON 
GO
INSERT[dbo].[tblEvent]([eventID], [eventName], [eventImage], [eventDescription], [eventPrice], [eventOffPrice], [eventLocation], [eventOrganizer], [eventStatus], [totalPeople], [CreatedDate]) VALUES(1, N'Birthday ', N'/img/3c775032-09d9-4686-8e27-7e914dfc8273_t1.jpg', N'sfdsdfsdfsdfsd', CAST(10000.00 AS Decimal(18, 2)), CAST(9000.00 AS Decimal(18, 2)), N'Lucknow''s ', N'RetroReserve ', 0, 10, CAST(N'2024-02-23T13:37:21.883' AS DateTime))
GO
SET IDENTITY_INSERT[dbo].[tblEvent] OFF
GO
SET IDENTITY_INSERT[dbo].[tblEventBooking] ON 
GO
INSERT[dbo].[tblEventBooking]([eventBookingId], [UserID], [eventID], [UserName], [PhoneNo], [TotalGuest], [BPersonName], [CoupleName], [eventDate], [eventTime], [eventPrice], [eventBookingStatus], [eventCompleteDate], [eventCreateDate]) VALUES(1, N'Farazshaikh08538@gmail.com', 1, N'Faraz', N'string', 0, N'string', N'string', N'8 February 2024', N'string', CAST(0.00 AS Decimal(18, 2)), 1, N'Feb  9 2024 10:25AM', CAST(N'2024-02-08T18:41:45.673' AS DateTime))
GO
INSERT[dbo].[tblEventBooking]([eventBookingId], [UserID], [eventID], [UserName], [PhoneNo], [TotalGuest], [BPersonName], [CoupleName], [eventDate], [eventTime], [eventPrice], [eventBookingStatus], [eventCompleteDate], [eventCreateDate]) VALUES(2, N'Farazshaikh60@gmail.com', 2, N'faraz', N'56546', 6, NULL, N'dfgdg', N'2024-02-12', N'17:21', CAST(400.00 AS Decimal(18, 2)), 1, N'Feb 23 2024  3:58PM', CAST(N'2024-02-12T17:23:15.117' AS DateTime))
GO
INSERT[dbo].[tblEventBooking]([eventBookingId], [UserID], [eventID], [UserName], [PhoneNo], [TotalGuest], [BPersonName], [CoupleName], [eventDate], [eventTime], [eventPrice], [eventBookingStatus], [eventCompleteDate], [eventCreateDate]) VALUES(3, N'farazshaikh08538@gmail.com', 1, N'Faraz', N'345435435', 10, N'dffsdf', NULL, N'2024-02-24', N'15:00', CAST(9000.00 AS Decimal(18, 2)), 1, N'1708683220298', CAST(N'2024-02-23T14:46:46.020' AS DateTime))
GO
INSERT[dbo].[tblEventBooking]([eventBookingId], [UserID], [eventID], [UserName], [PhoneNo], [TotalGuest], [BPersonName], [CoupleName], [eventDate], [eventTime], [eventPrice], [eventBookingStatus], [eventCompleteDate], [eventCreateDate]) VALUES(4, N'Farazshaikh60@gmail.com', 1, N'faraz', N'65645', 10, N'fsdfsdf', NULL, N'2024-02-24', N'15:00', CAST(9000.00 AS Decimal(18, 2)), 1, N'Feb 23 2024  3:52PM', CAST(N'2024-02-23T15:48:54.003' AS DateTime))
GO
INSERT[dbo].[tblEventBooking]([eventBookingId], [UserID], [eventID], [UserName], [PhoneNo], [TotalGuest], [BPersonName], [CoupleName], [eventDate], [eventTime], [eventPrice], [eventBookingStatus], [eventCompleteDate], [eventCreateDate]) VALUES(5, N'Farazshaikh60@gmail.com', 1, N'faraz', N'65645cvb', 10, N'bvvbcvb', NULL, N'2024-02-24', N'15:00', CAST(9000.00 AS Decimal(18, 2)), 1, N'Feb 24 2024 10:26AM', CAST(N'2024-02-23T15:54:51.580' AS DateTime))
GO
INSERT[dbo].[tblEventBooking]([eventBookingId], [UserID], [eventID], [UserName], [PhoneNo], [TotalGuest], [BPersonName], [CoupleName], [eventDate], [eventTime], [eventPrice], [eventBookingStatus], [eventCompleteDate], [eventCreateDate]) VALUES(6, N'Farazshaikh60@gmail.com', 1, N'faraz', N'65645cvb', 10, N'dffsdf', NULL, N'2024-02-25', N'11:00', CAST(9000.00 AS Decimal(18, 2)), 1, N'Feb 24 2024 10:23AM', CAST(N'2024-02-24T10:22:57.737' AS DateTime))
GO
INSERT[dbo].[tblEventBooking]([eventBookingId], [UserID], [eventID], [UserName], [PhoneNo], [TotalGuest], [BPersonName], [CoupleName], [eventDate], [eventTime], [eventPrice], [eventBookingStatus], [eventCompleteDate], [eventCreateDate]) VALUES(7, N'Farazshaikh60@gmail.com', 1, N'faraz', N'65645cvb', 10, N'dffsdf', NULL, N'2024-02-25', N'11:00', CAST(9000.00 AS Decimal(18, 2)), 1, N'Feb 24 2024 10:26AM', CAST(N'2024-02-24T10:23:33.830' AS DateTime))
GO
INSERT[dbo].[tblEventBooking]([eventBookingId], [UserID], [eventID], [UserName], [PhoneNo], [TotalGuest], [BPersonName], [CoupleName], [eventDate], [eventTime], [eventPrice], [eventBookingStatus], [eventCompleteDate], [eventCreateDate]) VALUES(8, N'Farazshaikh60@gmail.com', 1, N'faraz', N'65645', 10, N'Laldhir Rajbhar', NULL, N'2024-04-20', N'12:30', CAST(9000.00 AS Decimal(18, 2)), 0, NULL, CAST(N'2024-04-20T13:58:27.127' AS DateTime))
GO
SET IDENTITY_INSERT[dbo].[tblEventBooking] OFF
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_AspNetRoleClaims_RoleId]    Script Date: 27-04-2024 10:31:54 ******/
CREATE NONCLUSTERED INDEX[IX_AspNetRoleClaims_RoleId] ON[dbo].[AspNetRoleClaims]
    (
        [RoleId] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [RoleNameIndex]    Script Date: 27-04-2024 10:31:54 ******/
CREATE UNIQUE NONCLUSTERED INDEX[RoleNameIndex] ON[dbo].[AspNetRoles]
    (
        [NormalizedName] ASC
    )
WHERE([NormalizedName] IS NOT NULL)
WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_AspNetUserClaims_UserId]    Script Date: 27-04-2024 10:31:54 ******/
CREATE NONCLUSTERED INDEX[IX_AspNetUserClaims_UserId] ON[dbo].[AspNetUserClaims]
    (
        [UserId] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_AspNetUserLogins_UserId]    Script Date: 27-04-2024 10:31:54 ******/
CREATE NONCLUSTERED INDEX[IX_AspNetUserLogins_UserId] ON[dbo].[AspNetUserLogins]
    (
        [UserId] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_AspNetUserRoles_RoleId]    Script Date: 27-04-2024 10:31:54 ******/
CREATE NONCLUSTERED INDEX[IX_AspNetUserRoles_RoleId] ON[dbo].[AspNetUserRoles]
    (
        [RoleId] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [EmailIndex]    Script Date: 27-04-2024 10:31:54 ******/
CREATE NONCLUSTERED INDEX[EmailIndex] ON[dbo].[AspNetUsers]
    (
        [NormalizedEmail] ASC
    )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UserNameIndex]    Script Date: 27-04-2024 10:31:54 ******/
CREATE UNIQUE NONCLUSTERED INDEX[UserNameIndex] ON[dbo].[AspNetUsers]
    (
        [NormalizedUserName] ASC
    )
WHERE([NormalizedUserName] IS NOT NULL)
WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON[PRIMARY]
GO
ALTER TABLE[dbo].[Bookingtable] ADD  DEFAULT(getdate()) FOR[BookingOn]
GO
ALTER TABLE[dbo].[Cart] ADD  DEFAULT(getdate()) FOR[CreatedAt]
GO
ALTER TABLE[dbo].[City] ADD  DEFAULT(getdate()) FOR[created_date]
GO
ALTER TABLE[dbo].[DboyReview] ADD  DEFAULT(getdate()) FOR[ReviewOn]
GO
ALTER TABLE[dbo].[DeliveredOrder] ADD  DEFAULT(getdate()) FOR[AssignOn]
GO
ALTER TABLE[dbo].[DeliveryAddress] ADD  DEFAULT(getdate()) FOR[CreatedAt]
GO
ALTER TABLE[dbo].[OrderAmount] ADD  DEFAULT(getdate()) FOR[CreatedDate]
GO
ALTER TABLE[dbo].[PostalCode] ADD  DEFAULT(getdate()) FOR[created_date]
GO
ALTER TABLE[dbo].[State] ADD  DEFAULT(getdate()) FOR[created_date]
GO
ALTER TABLE[dbo].[tbl_AppReview] ADD  DEFAULT(getdate()) FOR[AReviewDate]
GO
ALTER TABLE[dbo].[tbl_CheckoutAddress] ADD  DEFAULT(getdate()) FOR[createdOn]
GO
ALTER TABLE[dbo].[tbl_complaint] ADD  DEFAULT(getdate()) FOR[ComplaintDate]
GO
ALTER TABLE[dbo].[tbl_contactus] ADD  DEFAULT(getdate()) FOR[ContactDate]
GO
ALTER TABLE[dbo].[tbl_Dishcategory] ADD  DEFAULT(getdate()) FOR[CreatedOn]
GO
ALTER TABLE[dbo].[tbl_EmployeeRoleMaster] ADD  DEFAULT(getdate()) FOR[CreateDate]
GO
ALTER TABLE[dbo].[tbl_employees] ADD  DEFAULT(getdate()) FOR[CreatedOn]
GO
ALTER TABLE[dbo].[tbl_FAQ] ADD  DEFAULT(getdate()) FOR[CreatedOn]
GO
ALTER TABLE[dbo].[tbl_feedback] ADD  DEFAULT(getdate()) FOR[FeedbackCreatedDate]
GO
ALTER TABLE[dbo].[tbl_foodkart] ADD  DEFAULT(getdate()) FOR[DishAddDate]
GO
ALTER TABLE[dbo].[tbl_massagebox] ADD  DEFAULT(getdate()) FOR[SentEmailDate]
GO
ALTER TABLE[dbo].[tbl_Offer] ADD  DEFAULT(getdate()) FOR[CreatedOn]
GO
ALTER TABLE[dbo].[tbl_Orders] ADD  DEFAULT(getdate()) FOR[OrderDate]
GO
ALTER TABLE[dbo].[tbl_PaymentDetails] ADD  DEFAULT(getdate()) FOR[PaymentOn]
GO
ALTER TABLE[dbo].[tbl_ProductReview] ADD  DEFAULT(getdate()) FOR[ReviewDate]
GO
ALTER TABLE[dbo].[tbl_RecentView] ADD  DEFAULT(getdate()) FOR[ViewDate]
GO
ALTER TABLE[dbo].[tbl_teakart] ADD  DEFAULT(getdate()) FOR[CreateDate]
GO
ALTER TABLE[dbo].[tbl_UserPro_Details] ADD  DEFAULT(getdate()) FOR[Createdon]
GO
ALTER TABLE[dbo].[tblBannner] ADD  DEFAULT(getdate()) FOR[AddOn]
GO
ALTER TABLE[dbo].[tblEmployeeSalary] ADD  DEFAULT(getdate()) FOR[CreationDate]
GO
ALTER TABLE[dbo].[tblErrorLog] ADD  DEFAULT(getdate()) FOR[CreatedOn]
GO
ALTER TABLE[dbo].[tblEvent] ADD  DEFAULT(getdate()) FOR[CreatedDate]
GO
ALTER TABLE[dbo].[tblEventBooking] ADD  DEFAULT(getdate()) FOR[eventCreateDate]
GO
ALTER TABLE[dbo].[UserPaymentDetails] ADD  DEFAULT(getdate()) FOR[CreditDate]
GO
ALTER TABLE[dbo].[AspNetRoleClaims]  WITH CHECK ADD  CONSTRAINT[FK_AspNetRoleClaims_AspNetRoles_RoleId] FOREIGN KEY([RoleId])
REFERENCES[dbo].[AspNetRoles]([Id])
ON DELETE CASCADE
GO
ALTER TABLE[dbo].[AspNetRoleClaims] CHECK CONSTRAINT[FK_AspNetRoleClaims_AspNetRoles_RoleId]
GO
ALTER TABLE[dbo].[AspNetUserClaims]  WITH CHECK ADD  CONSTRAINT[FK_AspNetUserClaims_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES[dbo].[AspNetUsers]([Id])
ON DELETE CASCADE
GO
ALTER TABLE[dbo].[AspNetUserClaims] CHECK CONSTRAINT[FK_AspNetUserClaims_AspNetUsers_UserId]
GO
ALTER TABLE[dbo].[AspNetUserLogins]  WITH CHECK ADD  CONSTRAINT[FK_AspNetUserLogins_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES[dbo].[AspNetUsers]([Id])
ON DELETE CASCADE
GO
ALTER TABLE[dbo].[AspNetUserLogins] CHECK CONSTRAINT[FK_AspNetUserLogins_AspNetUsers_UserId]
GO
ALTER TABLE[dbo].[AspNetUserRoles]  WITH CHECK ADD  CONSTRAINT[FK_AspNetUserRoles_AspNetRoles_RoleId] FOREIGN KEY([RoleId])
REFERENCES[dbo].[AspNetRoles]([Id])
ON DELETE CASCADE
GO
ALTER TABLE[dbo].[AspNetUserRoles] CHECK CONSTRAINT[FK_AspNetUserRoles_AspNetRoles_RoleId]
GO
ALTER TABLE[dbo].[AspNetUserRoles]  WITH CHECK ADD  CONSTRAINT[FK_AspNetUserRoles_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES[dbo].[AspNetUsers]([Id])
ON DELETE CASCADE
GO
ALTER TABLE[dbo].[AspNetUserRoles] CHECK CONSTRAINT[FK_AspNetUserRoles_AspNetUsers_UserId]
GO
ALTER TABLE[dbo].[AspNetUserTokens]  WITH CHECK ADD  CONSTRAINT[FK_AspNetUserTokens_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES[dbo].[AspNetUsers]([Id])
ON DELETE CASCADE
GO
ALTER TABLE[dbo].[AspNetUserTokens] CHECK CONSTRAINT[FK_AspNetUserTokens_AspNetUsers_UserId]
GO
/****** Object:  StoredProcedure [dbo].[InsertErrorLog]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE[dbo].[InsertErrorLog]
    @ClassName VARCHAR(50),
    @FunctionName VARCHAR(100),
    @ResponseText VARCHAR(500),
    @Proc_Name varchar(100)
AS
BEGIN
    SET NOCOUNT ON;

    INSERT INTO tblErrorLog(ClassName, FunctionName, ErrorMsg, Proc_Name)
VALUES(@ClassName, @FunctionName, @ResponseText, @Proc_Name);
END;
GO
/****** Object:  StoredProcedure [dbo].[InsertFAQ]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE[dbo].[InsertFAQ]
    (@FAQId int,
        @Quest NVARCHAR(MAX),
        @Answers NVARCHAR(MAX),
        @Status INT)
AS
BEGIN
IF EXISTS(select 1 from tbl_FAQ where FAQId = @FAQId)
begin    
update tbl_FAQ set
Quest = @Quest,
    Answers = @Answers         
where FAQId = @FAQId;    
SELECT 1  StatusCode, 'Updated SUCCESSFULLY' ResponseText
return
end    
else
begin    
INSERT INTO tbl_FAQ(Quest, Answers, Status)
VALUES(@Quest, @Answers, 1);    
SELECT 1  StatusCode, 'SAVED SUCCESSFULLY' ResponseText
return
end


END;
GO
/****** Object:  StoredProcedure [dbo].[Proc_AddBookingForUser]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC[dbo].[Proc_AddBookingForUser]@TableId INT,    @BookingDate VARCHAR(150),        @BookingTime VARCHAR(150),            @NoOfPeople INT,                @Name VARCHAR(50),                    @Email VARCHAR(50)ASBEGIN             IF EXISTS(    SELECT 1           FROM tbl_UserBookingTable           WHERE BookingDate = @BookingDate           AND BookingTime = @BookingTime AND TableId = @TableId)BEGINSELECT - 1 AS StatusCode, 'This time is not available Please Choose Another Time ' AS ResponseTextRETURNENDELSEBEGINdeclare @BookingId int;          INSERT INTO tbl_UserBookingTable(TableId, BookingDate, BookingTime, NoOfPeople, Entryon, Name, Email)VALUES(@TableId, @BookingDate, @BookingTime, @NoOfPeople, GETDATE(), @Name, @Email)		set @BookingId = Scope_Identity();  		INSERT INTO tbl_BookingTableDetail(TableId, BookingDate, BookingTime, NoOfPeople, Entryon, Name, Email)VALUES(@TableId, @BookingDate, @BookingTime, @NoOfPeople, GETDATE(), @Name, @Email)                  SELECT 1 AS StatusCode, 'Your booking has been successfully added' AS ResponseText, @BookingId As ResultRETURNENDEND
GO
/****** Object:  StoredProcedure [dbo].[Proc_AddEventBooking]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROC[dbo].[Proc_AddEventBooking]@eventId INT,    @BookingDate VARCHAR(150),        @BookingTime VARCHAR(150),            @Name VARCHAR(50),                @Email VARCHAR(50)ASBEGIN             IF EXISTS(    SELECT 1           FROM tbl_BookingEvent           WHERE BookingDate = @BookingDate           AND BookingTime = @BookingTime AND eventId = @eventId)BEGINSELECT - 1 AS StatusCode, 'This time is not available Please Choose Another Time ' AS ResponseTextRETURNENDELSEBEGINdeclare @BookingId int;          INSERT INTO tbl_BookingEvent(eventId, BookingDate, BookingTime, Entryon, Name, Email)VALUES(@eventId, @BookingDate, @BookingTime, GETDATE(), @Name, @Email)		set @BookingId = Scope_Identity();  		INSERT INTO tbl_BookingEventDetail(eventId, BookingDate, BookingTime, Entryon, Name, Email)VALUES(@eventId, @BookingDate, @BookingTime, GETDATE(), @Name, @Email)                  SELECT 1 AS StatusCode, 'Your booking has been successfully added' AS ResponseText, @BookingId As ResultRETURNENDEND
GO
/****** Object:  StoredProcedure [dbo].[Proc_ChangeCouponStatus]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE[dbo].[Proc_ChangeCouponStatus]
@ID INT
AS
BEGIN
    UPDATE tbl_Coupan
    SET IsActive = 1 - IsActive
    WHERE CoupanId = @ID;

SELECT
CASE 
            WHEN IsActive = 1 THEN 1
            WHEN IsActive = 0 THEN - 1
        END AS StatusCode,
    CASE 
            WHEN IsActive = 1 THEN 'Coupon activated'
            WHEN IsActive = 0 THEN 'Coupon inactivated'
        END AS ResponseText
    FROM tbl_Coupan
    WHERE CoupanId = @ID;
END
GO
/****** Object:  StoredProcedure [dbo].[Proc_CheckCoupon]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROC[dbo].[Proc_CheckCoupon]@_CouponName VARCHAR(50)ASBEGIN       DECLARE @_IsValid BIT;--Check if the coupon exists in the database and is valid      IF EXISTS(SELECT 1 FROM tbl_Coupan WHERE CoupanName = @_CouponName AND IsActive = 1 AND ValidUpto >= GETDATE())BEGIN          SET @_IsValid = 1; --Coupon is valid          SELECT 1 AS StatusCode, 'Coupon is valid' AS ResponseText, DiscountPercentage AS Result          FROM tbl_Coupan          WHERE CoupanName = @_CouponName;ENDELSEBEGIN          SET @_IsValid = 0; --Coupon is not valid          SELECT 0 AS StatusCode, 'Coupon is not valid' AS ResponseText, NULL AS DiscountPercentage;ENDEND
GO
/****** Object:  StoredProcedure [dbo].[Proc_ChnageTableStatus]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROC[dbo].[Proc_ChnageTableStatus]
@ID int
As
BEGIN 
UPDATE TBL_TABLEBYADMIN SET IsActive = IsActive ^ 1
WHERE TableId = @ID;
SELECT 1, CASE WHEN IsActive = 1 THEN 'Table activated'
ELSE 'Table inactivated' END AS ResponseText FROM TBL_TABLEBYADMIN WHERE TableId = @ID;

END
GO
/****** Object:  StoredProcedure [dbo].[proc_GetAllOffer]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create proc[dbo].[proc_GetAllOffer]
As
Begin
select * from tbl_Offer
End
GO
/****** Object:  StoredProcedure [dbo].[proc_GetOfferById]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create proc[dbo].[proc_GetOfferById]
@OfferId int
As
Begin
select * from tbl_Offer Where OfferId = @OfferId;
End
GO
/****** Object:  StoredProcedure [dbo].[Proc_SaveOrUpdateCoupan]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE[dbo].[Proc_SaveOrUpdateCoupan]@CoupanId INT,    @CoupanName VARCHAR(100),        @Description VARCHAR(100),            @ValidUpto VARCHAR(100),                @IsActive BITASBEGIN IF EXISTS(SELECT 1 FROM tbl_Coupan WHERE CoupanId = @CoupanId)BEGINUPDATE tbl_Coupan SET CoupanName = @CoupanName, Description = @Description, IsActive = @IsActive, ValidUpto = @ValidUpto WHERE  CoupanId = @CoupanId SELECT 1 StatusCode, 'COUPAN UPDATED SUCCESSFULLY' ResponseTextRETURNENDELSEBEGIN  INSERT INTO tbl_Coupan(CoupanName, Description, ValidUpto, IsActive)VALUES(@CoupanName, @Description, @ValidUpto, @IsActive);SELECT 1 StatusCode, 'Coupan Added Successfully' ResponseTextRETURNENDEND
GO
/****** Object:  StoredProcedure [dbo].[Proc_SaveOrUpdateOffer]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE[dbo].[Proc_SaveOrUpdateOffer]
@OfferId INT,
    @OfferName VARCHAR(100),
        @OfferImage VARCHAR(255),
            @Description VARCHAR(255),
                @ValidUpto VARCHAR(100),
                    @Discount VARCHAR(50)
AS
BEGIN
    BEGIN TRY
        IF EXISTS(SELECT 1 FROM tbl_Offer WHERE OfferId = @OfferId)
BEGIN
            UPDATE tbl_Offer
            SET OfferName = @OfferName,
    OfferImage = CASE WHEN @OfferImage IS NOT NULL AND @OfferImage != '' THEN @OfferImage ELSE OfferImage END,
        Description = @Description,
        ValidUpto = @ValidUpto,
        Discount = @Discount
            WHERE OfferId = @OfferId;

            SELECT 1 AS StatusCode, 'Offer updated successfully' AS ResponseText;
END
ELSE
BEGIN
            INSERT INTO tbl_Offer(OfferName, OfferImage, Description, ValidUpto, Discount)
VALUES(@OfferName, @OfferImage, @Description, @ValidUpto, @Discount);

            SELECT 1 AS StatusCode, 'Offer added successfully' AS ResponseText;
END
    END TRY
    BEGIN CATCH
SELECT - 1 AS StatusCode, 'Error: ' + ERROR_MESSAGE() AS ResponseText;
    END CATCH
END;
GO
/****** Object:  StoredProcedure [dbo].[Proc_SaveOrUpdateTable]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC[dbo].[Proc_SaveOrUpdateTable]
@TableId INT,
    @TableName VARCHAR(50),
        @Image VARCHAR(200),
            @Description VARCHAR(50),
                @IsActive BIT
AS

BEGIN   
IF EXISTS(SELECT 1 FROM TBL_TABLEBYADMIN WHERE TableId = @TableId)
BEGIN   
UPDATE TBL_TABLEBYADMIN SET  TableName = @TableName, Image = @Image, Description = @Description, IsActive = @IsActive WHERE TableId = @TableId;  
SELECT 1 StatusCode, 'UPDATED SUCCESSFULLY' ResponseText
RETURN
END
ELSE
BEGIN  
INSERT INTO TBL_TABLEBYADMIN(

    TableName,
    Image,
    Description,
    IsActive
)VALUES(

    @TableName,
    @Image,
    @Description,
    @IsActive
)  
SELECT 1 StatusCode, 'ADDED SUCCESSFULLY' ResponseText
END
END
GO
/****** Object:  StoredProcedure [dbo].[Proc_UpdateStatusBookedTable]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROC[dbo].[Proc_UpdateStatusBookedTable]
@BookingId int
AS

BEGIN 
DELETE FROM tbl_UserBookingTable WHERE BookingId = @BookingId;
SELECT 1 AS StatusCode, 'Table Status Updated Successfully' AS ResponseText
RETURN
END
GO
/****** Object:  StoredProcedure [dbo].[sp_AddEmpSalary]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE[dbo].[sp_AddEmpSalary]
@EmpId INT,
    @RoleId INT
AS
BEGIN  
    BEGIN TRY
IF(@EmpId = 0 OR @RoleId = 0)
BEGIN
SELECT - 1 AS StatusCode, 'Payment Failed' AS ResponseText;
RETURN;
END
ELSE
BEGIN  
            INSERT INTO tblEmployeeSalary(EmpId, RoleId, Status)
VALUES(@EmpId, @RoleId, 1);  
			  SELECT 1 AS StatusCode, 'Payment Done' AS ResponseText;
RETURN;
END  
    END TRY  
    BEGIN CATCH
SELECT - 1 AS StatusCode, 'An error occurred: ' + ERROR_MESSAGE() AS ResponseText;  
    END CATCH;
END;
GO
/****** Object:  StoredProcedure [dbo].[sp_AddOnlineOrders]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE[dbo].[sp_AddOnlineOrders]
    (
        @OrderID INT OUTPUT,
        @UserId INT,
        @DishId INT,
        @Quantity INT,
        @TotalAmount DECIMAL(18, 2),
        @Status INT
    )
AS
BEGIN
BEGIN
--Insert a new order    
        INSERT INTO tbl_OnlineOrders(UserId, Status)
VALUES(@UserId, 1);

--Get the ID of the newly inserted tbl_orders      
        SET @OrderID = SCOPE_IDENTITY();
END
BEGIN
--Insert order details    
        INSERT INTO tbl_OnlineOrderDetails(OrderID, DishId, Quantity, TotalAmount)
VALUES(@OrderID, @DishId, @Quantity, @TotalAmount);
END
END
GO
/****** Object:  StoredProcedure [dbo].[sp_AddOrUpdateAddress]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE[dbo].[sp_AddOrUpdateAddress]
    (@AddressId int,
        @UserId varchar(50),
        @RecipientName varchar(50),
        @RecipientContact varchar(20),
        @StreetAddress varchar(100),
        @Landmark varchar(50),
        @State varchar(50),
        @City varchar(50),
        @PostalCode varchar(20),
        @UpdatedAt varchar(50))
AS
BEGIN    
    IF EXISTS(SELECT 1 FROM DeliveryAddress WHERE AddressId = @AddressId)
BEGIN    
        UPDATE DeliveryAddress SET
RecipientName = @RecipientName,
    RecipientContact = @RecipientContact,
    StreetAddress = @StreetAddress,
    Landmark = @Landmark,
    State = @State,
    City = @City,
    PostalCode = @PostalCode,
    UpdatedAt = @UpdatedAt    
        WHERE AddressId = @AddressId;    

        SELECT 1 AS StatusCode, 'Updated SUCCESSFULLY' AS ResponseText;
RETURN;
END
ELSE
BEGIN    
        INSERT INTO DeliveryAddress(UserId, RecipientName, RecipientContact, StreetAddress, Landmark, State, City, PostalCode)
VALUES(@UserId, @RecipientName, @RecipientContact, @StreetAddress, @Landmark, @State, @City, @PostalCode);    

        SELECT 1 AS StatusCode, 'SAVED SUCCESSFULLY' AS ResponseText;
RETURN;
END
END
GO
/****** Object:  StoredProcedure [dbo].[sp_AddorUpdateAReview]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_AddorUpdateAReview]
    (@AReviewId int,
        @UserID varchar(50),
        @Name varchar(50),
        @Comment varchar(255),
        @Status int,
        @Rating int
    )
as
begin      
      
IF EXISTS(select 1 from tbl_AppReview where UserID = @UserID)
begin      
update tbl_AppReview set
Comment = @Comment,
    Rating = @Rating    
where AReviewId = @AReviewId;      
SELECT 1  StatusCode, 'Updated SUCCESSFULLY' ResponseText
return
end      
else
begin      
Insert into tbl_AppReview(UserID, Name, Comment, Rating, Status)
values(@UserID, @Name, @Comment, @Rating, 0);      
SELECT 1  StatusCode, 'SAVED SUCCESSFULLY' ResponseText
return
end

end
GO
/****** Object:  StoredProcedure [dbo].[sp_AddorUpdateBanner]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_AddorUpdateBanner]
    (@BannerId int,
        @BannerName varchar(50),
        @BannerOfferName varchar(50),
        @BannerImage varchar(100),
        @Description varchar(100),
        @Offer varchar(50),
        @ProductLink varchar(100),
        @Status int,
        @UpdateOn varchar(50))
as
begin  
  
IF EXISTS(select 1 from tblBannner where BannerId = @BannerId)
begin  
update tblBannner set
BannerName = @BannerName,
    BannerOfferName = @BannerOfferName,
    [BannerImage] = IIF(ISNULL(@BannerImage, '') = '', [BannerImage], @BannerImage),
    Description = @Description,
    Offer = @Offer,
    ProductLink = @ProductLink,
    UpdateOn = @UpdateOn  
where BannerId = @BannerId;  
SELECT 1  StatusCode, 'Updated SUCCESSFULLY' ResponseText
return
end  
else
begin  
Insert into tblBannner(BannerName, BannerOfferName, BannerImage, Description, Offer, ProductLink, Status)
values(@BannerName, @BannerOfferName, @BannerImage, @Description, @Offer, @ProductLink, 1);  
SELECT 1  StatusCode, 'SAVED SUCCESSFULLY' ResponseText
return
end

end
GO
/****** Object:  StoredProcedure [dbo].[sp_AddOrUpdateCartValue]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE[dbo].[sp_AddOrUpdateCartValue](
    @UserID         varchar(50),
    @Id          INT,
    @Quantity        INT,
    @Status          INT OUTPUT,
    @message         NVARCHAR(MAX) OUTPUT
)
AS
BEGIN        
    IF EXISTS(SELECT 1 FROM Cart WHERE Id = @Id AND UserID = @UserID)
BEGIN        
        SET @Status = 0; --You can use 0 or any other value to indicate failure        
        SET @message = 'This product is already in the cart. Please select a new Dish.';
END
ELSE
BEGIN        
        INSERT INTO Cart
    (
        UserID,
        Id,
        Quantity
    )
VALUES
    (
        @UserID,
        @Id,
        1
    );        
        
        SET @Status = 1; --You can use 1 or any other value to indicate success        
        SET @message = 'Product added to the cart successfully.';
END
END;
GO
/****** Object:  StoredProcedure [dbo].[sp_AddOrUpdateComplaint]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_AddOrUpdateComplaint](
    @ComplaintId           int,
    @TableId                int,
    @CustId                int,
    @ComplaintType         varchar(50),
    @Email                 Varchar(100),
    @ComplaintDescription  varchar(100),
    @Status                 int
)

as
begin  
   IF EXISTS(SELECT 1 FROM tbl_complaint WHERE ComplaintId = @ComplaintId)
begin  
update tbl_complaint set
TableId = @TableId,
    CustId = @CustId,
    ComplaintType = @ComplaintType,
    Email = @Email,
    ComplaintDescription = @ComplaintDescription,
    Status = @Status    
  WHERE ComplaintId = @ComplaintId
end  
else
begin  
insert into tbl_complaint(
    TableId,
    CustId,
    ComplaintType,
    Email,
    ComplaintDescription,
    Status
)
values(
    @TableId,
    @CustId,
    @ComplaintType,
    @Email,
    @ComplaintDescription,
    @Status
)
end
end
GO
/****** Object:  StoredProcedure [dbo].[sp_AddOrUpdateContactus]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_AddOrUpdateContactus](
    @ContactId  int,
    @UserName  varchar(50),
    @Email     varchar(50),
    @subject     varchar(50),
    @Comment varchar(100),
    @status int
)
as
begin    
   IF EXISTS(SELECT 1 FROM tbl_contactus WHERE ContactId = @ContactId)
begin    
update tbl_contactus set
status = @status    
where ContactId = @ContactId
end    
else
begin    
insert into tbl_contactus(UserName, Email, subject, Comment, status)
values(@UserName, @Email, @subject, @Comment, @status)
end
end
GO
/****** Object:  StoredProcedure [dbo].[sp_AddOrUpdateDboyReview]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE[dbo].[sp_AddOrUpdateDboyReview]
@DboyRId INT,
    @DboyId VARCHAR(50),
        @Comment VARCHAR(255),
            @Status INT,
                @Rating INT,
                    @OrderId INT
AS
BEGIN      
    IF EXISTS(SELECT 1 FROM DboyReview WHERE DboyRId = @DboyRId)
BEGIN      
        UPDATE DboyReview
SET
Comment = @Comment,
    Rating = @Rating      
        WHERE DboyRId = @DboyRId;      
      
        SELECT 1 AS StatusCode, 'Updated successfully' AS ResponseText;
return
END      
    ELSE if EXISTS(SELECT 1 FROM DboyReview WHERE OrderId = @OrderId and DboyId = @DboyId)     
    BEGIN      
       SELECT 1 AS StatusCode, 'Feedback Already Submitted' AS ResponseText;
return
END      
 else
BEGIN      
        INSERT INTO DboyReview(DboyId, Comment, Rating, Status, OrderId)
VALUES(@DboyId, @Comment, @Rating, 0, @OrderId);      
      
        SELECT 1 AS StatusCode, 'Saved successfully' AS ResponseText;
return
END
END;
GO
/****** Object:  StoredProcedure [dbo].[sp_AddOrUpdateDishCategory]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_AddOrUpdateDishCategory](
    @DishCategoryId  int,
    @DishCategoryName  varchar(50),
    @Icon     varchar(50),
    @Status  int

)
as
begin      
   IF EXISTS(SELECT 1 FROM tbl_Dishcategory WHERE DishCategoryId = @DishCategoryId)
begin      
update tbl_Dishcategory set
DishCategoryName = @DishCategoryName,
    Icon = @Icon
where DishCategoryId = @DishCategoryId
end      
else
begin      
insert into tbl_Dishcategory(DishCategoryName, Icon, Status)
values(@DishCategoryName, @Icon, @Status)
end
end
GO
/****** Object:  StoredProcedure [dbo].[sp_AddOrUpdateEmployeeRoleMaster]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_AddOrUpdateEmployeeRoleMaster](
    @RoleId int,
    @RoleName varchar(50),
    @Salary decimal(18, 2),
    @Status int
)
as
begin        
   IF EXISTS(SELECT 1 FROM tbl_EmployeeRoleMaster WHERE RoleId = @RoleId)
begin        
update tbl_EmployeeRoleMaster set
RoleName = @RoleName,
    Salary = @Salary      
WHERE RoleId = @RoleId
end        
else
begin        
insert into tbl_EmployeeRoleMaster(RoleName, Salary, Status)

values(@RoleName, @Salary, 1)
end
end
GO
/****** Object:  StoredProcedure [dbo].[sp_AddOrUpdateEmployees]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_AddOrUpdateEmployees]
    (
        @EmpId       int,
        @Name  varchar(50),
        @Email  varchar(50),
        @RoleId    int,
        @Image       varchar(100),
        @Salary       decimal(18, 2),
        @Phone      varchar(50),
        @Gender      varchar(100),
        @DOB      varchar(100),
        @AdharNo      varchar(100),
        @Address    varchar(50),
        @IsActive  int
    )
as
begin
if Exists(select 1 from tbl_employees where EmpId = @EmpId)        
begin        
update tbl_employees
set
[Image] = IIF(ISNULL(@Image, '') = '', [Image], @Image),
    Phone = @Phone,
    Address = @Address                
where EmpId = @EmpId       
SELECT 1 StatusCode, 'Update Successfully' ResponseText
RETURN
end        
else if Exists(select 1 from tbl_employees where Email = @Email)       
begin
SELECT - 1 StatusCode, 'email already exist' ResponseText
RETURN
end  
else
begin  
insert into tbl_employees(
    Name,
    Email,
    RoleId,
    Image,
    Salary,
    Phone,
    Gender,
    DOB,
    AdharNo,
    Address,
    IsActive
)
values(
    @Name,
    @Email,
    @RoleId,
    @Image,
    @Salary,
    @Phone,
    @Gender,
    @DOB,
    @AdharNo,
    @Address,
    1
)       
SELECT 1 StatusCode, 'Added Successfully' ResponseText
RETURN
end
end
GO
/****** Object:  StoredProcedure [dbo].[sp_AddOrUpdateEvent]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
  
        
CREATE proc[dbo].[sp_AddOrUpdateEvent]
    (
        @eventID       INT,
        @eventName        VARCHAR(50),
        @eventImage     VARCHAR(100),
        @eventDescription varchar(255),
        @eventPrice     decimal(18, 2),
        @eventOffPrice   decimal(18, 2),
        @eventLocation    VARCHAR(255),
        @eventOrganizer    VARCHAR(50),
        @eventStatus          int,
        @totalPeople int
    )
as
begin
if Exists(select 1 from tblEvent where eventID = @eventID)      
begin      
update tblEvent
set
eventName = @eventName,
    [eventImage] = IIF(ISNULL(@eventImage, '') = '', [eventImage], @eventImage),
    eventDescription = @eventDescription,
    eventPrice = @eventPrice,
    eventOffPrice = @eventOffPrice,
    eventLocation = @eventLocation,
    eventOrganizer = @eventOrganizer,
    eventStatus = @eventStatus,
    totalPeople = @totalPeople
where eventID = @eventID
end      
else
begin     
  
  
  
  
  
insert into tblEvent(
    eventName,
    eventImage,
    eventDescription,
    eventPrice,
    eventOffPrice,
    eventLocation,
    eventOrganizer,
    eventStatus,
    totalPeople
)
values(
    @eventName,
    @eventImage,
    @eventDescription,
    @eventPrice,
    @eventOffPrice,
    @eventLocation,
    @eventOrganizer,
    @eventStatus,
    @totalPeople
)

end
end
GO
/****** Object:  StoredProcedure [dbo].[sp_AddOrUpdateEventBooking]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE[dbo].[sp_AddOrUpdateEventBooking]
@eventBookingId INT = NULL,
    @UserID VARCHAR(50),
        @eventID INT,
            @UserName VARCHAR(50),
                @PhoneNo VARCHAR(50),
                    @TotalGuest INT,
                        @BPersonName VARCHAR(50),
                            @CoupleName VARCHAR(50),
                                @eventDate VARCHAR(50),
                                    @eventTime VARCHAR(50),
                                        @eventPrice DECIMAL(18, 2),
                                            @eventBookingStatus INT,
                                                @eventCompleteDate VARCHAR(50)
AS
BEGIN
--Check if the selected time for the event is already booked
    IF EXISTS(
    SELECT 1 
        FROM tblEventBooking  
        WHERE eventDate = @eventDate   
        AND eventTime = @eventTime 
        AND eventID = @eventID
		And eventBookingStatus = 0
)
BEGIN
SELECT - 1 AS StatusCode, 'This time is not available. Please choose another time.' AS ResponseText
RETURN
END
ELSE
BEGIN
--Check if the eventBookingId exists for update
        IF EXISTS(
    SELECT 1 
            FROM tblEventBooking  
            WHERE eventBookingId = @eventBookingId
)
        BEGIN
--Update existing event
            UPDATE tblEventBooking
SET
UserID = @UserID,
    eventID = @eventID,
    UserName = @UserName,
    PhoneNo = @PhoneNo,
    TotalGuest = @TotalGuest,
    BPersonName = @BPersonName,
    CoupleName = @CoupleName,
    eventDate = @eventDate,
    eventTime = @eventTime,
    eventPrice = @eventPrice,
    eventBookingStatus = @eventBookingStatus
WHERE
eventBookingId = @eventBookingId;  

            SELECT 1 AS StatusCode, 'Event has been updated.' AS ResponseText
RETURN
END
ELSE
BEGIN
--Insert new event booking
			 
            INSERT INTO tblEventBooking(
    UserID,
    eventID,
    UserName,
    PhoneNo,
    TotalGuest,
    BPersonName,
    CoupleName,
    eventDate,
    eventTime,
    eventPrice,
    eventBookingStatus,
    eventCompleteDate
)
VALUES(
    @UserID,
    @eventID,
    @UserName,
    @PhoneNo,
    @TotalGuest,
    @BPersonName,
    @CoupleName,
    @eventDate,
    @eventTime,
    @eventPrice,
    @eventBookingStatus,
    @eventCompleteDate
);    
			set @eventBookingId = Scope_Identity();  
            SELECT 1 AS StatusCode, 'New event booking has been added.' AS ResponseText, @eventBookingId As OrderID
RETURN
END
END
END;
GO
/****** Object:  StoredProcedure [dbo].[sp_AddOrUpdateFeedback]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_AddOrUpdateFeedback](
    @FeedbackId  int,
    @TableId     int,
    @CustId     int,
    @FeedbackDescription varchar(100),
    @FeedbackStatus int
)
as
begin  
   IF EXISTS(SELECT 1 FROM tbl_feedback WHERE FeedbackId = @FeedbackId)
begin  
update tbl_feedback set
FeedbackDescription = @FeedbackDescription,
    FeedbackStatus = @FeedbackStatus  
where FeedbackId = @FeedbackId
end  
else
begin  
insert into tbl_feedback(TableId, CustId, FeedbackDescription, FeedbackStatus)
values(@TableId, @CustId, @FeedbackDescription, @FeedbackStatus)
end
end
GO
/****** Object:  StoredProcedure [dbo].[sp_AddOrUpdateFoodkart]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_AddOrUpdateFoodkart](
    @DishId    int,
    @DishCategoryId   int,
    @DishType varchar(50),
    @DishName    varchar(50),
    @DishImage   varchar(100),
    @DishPrize    decimal(18, 2),
    @DishDescription varchar(100),
    @DishStatus    int,
    @Quantity int
)
as
begin        
   IF EXISTS(SELECT 1 FROM tbl_foodkart WHERE DishId = @DishId)
begin        
update tbl_foodkart set

DishCategoryId = @DishCategoryId,
    DishType = @DishType,
    DishName = @DishName,
    [DishImage] = IIF(ISNULL(@DishImage, '') = '', [DishImage], @DishImage),
    DishPrize = @DishPrize,
    DishDescription = @DishDescription,
    Quantity = @Quantity  
where DishId = @DishId
end        
else
begin        
insert into tbl_foodkart(
    DishCategoryId,
    DishType,
    DishName,
    DishImage,
    DishPrize,
    DishDescription,
    DishStatus,
    Quantity
)
values(
    @DishCategoryId,
    @DishType,
    @DishName,
    @DishImage,
    @DishPrize,
    @DishDescription,
    1,
    @Quantity
)
end
end
GO
/****** Object:  StoredProcedure [dbo].[sp_AddOrUpdateMassagebox]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_AddOrUpdateMassagebox](
    @MessageId         int,
    @Email               varchar(100),
    @Subject           varchar(100),
    @Description       varchar(100),
    @Status            int
)
as
begin
   IF EXISTS(SELECT 1 FROM tbl_massagebox WHERE MessageId = @MessageId)
begin
update tbl_massagebox set
Subject = @Subject,
    Description = @Description,
    Status = @Status    
  where MessageId = @MessageId
end
else
begin
insert into tbl_massagebox(Email, Subject, Description, Status)
values(@Email, @Subject, @Description, 1)
end
end
GO
/****** Object:  StoredProcedure [dbo].[sp_AddOrUpdateOffer]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_AddOrUpdateOffer](
    @OfferId     int,
    @OfferType    varchar(50),
    @OfferName    varchar(50),
    @OfferImage   varchar(100),
    @OfferCode    varchar(50),
    @TotalCust      int,
    @OfferStartDate    varchar(50),
    @OfferEndDate      varchar(50),
    @OfferStatus    int
)
as BEGIN 
  IF EXISTS(SELECT 1 FROM tbl_offer WHERE OfferId = @OfferId)
BEGIN 
	update tbl_offer set
OfferType = @OfferType,
    OfferName = @OfferName,
    [OfferImage] = IIF(ISNULL(@OfferImage, '') = '', [OfferImage], @OfferImage),
    OfferCode = @OfferCode,
    TotalCust = @TotalCust,
    OfferStartDate = @OfferStartDate,
    OfferEndDate = @OfferEndDate,
    OfferStatus = @OfferStatus 
	  where OfferId = OfferId
end
	else
BEGIN 
	  insert into tbl_offer(
    OfferType,
    OfferName,
    OfferImage,
    OfferCode,
    TotalCust,
    OfferStartDate,
    OfferEndDate,
    OfferStatus
)
values
    (
        @OfferType,
        @OfferName,
        @OfferImage,
        @OfferCode,
        @TotalCust,
        @OfferStartDate,
        @OfferEndDate,
        1
    )
end
end
GO
/****** Object:  StoredProcedure [dbo].[sp_AddorUpdateProductReview]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_AddorUpdateProductReview]
    (@ReviewId int,
        @DishId int,
        @UserID varchar(50),
        @Name varchar(50),
        @Email varchar(100),
        @Comment varchar(255),
        @Status int,
        @Rating int
    )
as
begin  
  
IF EXISTS(select 1 from tbl_ProductReview where DishId = @DishId and UserID = @UserID)
begin  
update tbl_ProductReview set
Comment = @Comment,
    Rating = @Rating
where ReviewId = @ReviewId;  
SELECT 1  StatusCode, 'Updated SUCCESSFULLY' ResponseText
return
end  
else
begin  
Insert into tbl_ProductReview(DishId, UserID, Name, Email, Comment, Rating, Status)
values(@DishId, @UserID, @Name, @Email, @Comment, @Rating, 0);  
SELECT 1  StatusCode, 'SAVED SUCCESSFULLY' ResponseText
return
end

end
GO
/****** Object:  StoredProcedure [dbo].[sp_AddOrUpdateTablesDetails]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_AddOrUpdateTablesDetails](
    @TableId int,
    @TableStatus int
)
as
begin
   IF EXISTS(SELECT 1 FROM tbl_AvailableTablesDetails WHERE TableId = @TableId)
begin
update tbl_AvailableTablesDetails set
TableStatus = @TableStatus
WHERE TableId = @TableId
end
else
begin
insert into tbl_AvailableTablesDetails(TableStatus)

values(1)
end
end

GO
/****** Object:  StoredProcedure [dbo].[sp_AddOrUpdateTeakart]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_AddOrUpdateTeakart](
    @TeaId    int,
    @TeaCategoryId   int,
    @TeaType varchar(50),
    @TeaName    varchar(50),
    @TeaImage   varchar(100),
    @TeaPrize    decimal(18, 2),
    @TeaDescription varchar(100),
    @Status    int,
    @Quantity int
)
as
begin        
   IF EXISTS(SELECT 1 FROM tbl_teakart WHERE TeaId = @TeaId)
begin        
update tbl_teakart set

TeaCategoryId = @TeaCategoryId,
    TeaType = @TeaType,
    TeaName = @TeaName,
    [TeaImage] = IIF(ISNULL(@TeaImage, '') = '', [TeaImage], @TeaImage),
    TeaPrize = @TeaPrize,
    TeaDescription = @TeaDescription,
    Status = @Status,
    Quantity = @Quantity  
where TeaId = @TeaId
end        
else
begin        
insert into tbl_teakart(
    TeaCategoryId,
    TeaType,
    TeaName,
    TeaImage,
    TeaPrize,
    TeaDescription,
    Status,
    Quantity
)
values(
    @TeaCategoryId,
    @TeaType,
    @TeaName,
    @TeaImage,
    @TeaPrize,
    @TeaDescription,
    1,
    @Quantity
)
end
end
GO
/****** Object:  StoredProcedure [dbo].[sp_AddOrUpdateUProfile]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_AddOrUpdateUProfile]
    (@UId int,
        @Name varchar(50),
        @Email varchar(50),
        @PassWord varchar(50))
as
begin    
    
IF EXISTS(select 1 from tbl_UserPro_Details where UId = @UId)
begin
SELECT - 1  StatusCode, 'email already exist' ResponseText
return
end    
else
begin    
Insert into tbl_UserPro_Details(Name, Email, Password)
values(@Name, @Email, @Password);    
SELECT 1  StatusCode, 'SAVED SUCCESSFULLY' ResponseText
return
end

end
GO
/****** Object:  StoredProcedure [dbo].[sp_AddOrUpdateVariant]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_AddOrUpdateVariant](
    @Id    int,
    @DishId    int,
    @VName    varchar(50),
    @DishImage   varchar(100),
    @MRP    decimal(18, 2),
    @SellingCost    decimal(18, 2),
    @DishDescription varchar(100),
    @DishStatus    int,
    @DishQuantity varchar(50)
)
as
begin          
   IF EXISTS(SELECT 1 FROM tbl_Variant WHERE Id = @Id)
begin          
update tbl_Variant set
VName = @VName,
    [DishImage] = IIF(ISNULL(@DishImage, '') = '', [DishImage], @DishImage),
    MRP = @MRP,
    SellingCost = @SellingCost,
    DishDescription = @DishDescription,
    DishStatus = @DishStatus     
where Id = @Id
end          
else
begin          
insert into tbl_Variant(
    DishId,
    VName,
    DishImage,
    MRP,
    SellingCost,
    DishDescription,
    DishStatus,
    DishQuantity
)
values(@DishId,
    @VName,
    @DishImage,
    @MRP,
    @SellingCost,
    @DishDescription,
    1,
    @DishQuantity
)
end
end
GO
/****** Object:  StoredProcedure [dbo].[sp_addPaymentDetails]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE[dbo].[sp_addPaymentDetails]
@PaymentType VARCHAR(50),
    @Amount FLOAT
AS
BEGIN
    INSERT INTO tbl_PaymentDetails(PaymentType, Amount, Status)
VALUES(@PaymentType, @Amount, 1);
END;
GO
/****** Object:  StoredProcedure [dbo].[sp_AddRecentViewdata]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE proc[dbo].[sp_AddRecentViewdata](
    @DishId int,
    @UserID     varchar(50)
)
as
begin                            
insert into tbl_RecentView(DishId, UserID)
values(@DishId, @UserID)
end
GO
/****** Object:  StoredProcedure [dbo].[sp_AddTableOrders]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE[dbo].[sp_AddTableOrders]
    (
        @OrderID INT OUTPUT,
        @TableId INT,
        @DishId INT,
        @Quantity INT,
        @TotalAmount DECIMAL(18, 2),
        @Status INT
    )
AS
BEGIN
--Insert a new order    
    INSERT INTO TableOrders(TableId, Status)
VALUES(@TableId, 1);

--Get the ID of the newly inserted tbl_orders    
    SET @OrderID = SCOPE_IDENTITY();

--Insert order details    
    INSERT INTO TableOrderDetails(OrderID, DishId, Quantity, TotalAmount)
VALUES(@OrderID, @DishId, @Quantity, @TotalAmount);
END
GO
/****** Object:  StoredProcedure [dbo].[sp_ApproveAReview]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_ApproveAReview]
    (@AReviewId int,
        @Status int)
as
begin   
update tbl_AppReview set
Status = @Status  
 where AReviewId = @AReviewId;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_ApproveProductReview]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_ApproveProductReview]
    (@ReviewId int,
        @Status int)
as
begin 
update tbl_ProductReview set
Status = @Status
 where ReviewId = @ReviewId;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_BookingDetailsById]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_BookingDetailsById]
@Email varchar(100)
As
Begin  
SELECT BookingId, TableId, NoOfPeople, CONVERT(VARCHAR(20), BookingDate, 106) AS BookingDate, BookingTime, Email, Name, Status, CONVERT(VARCHAR(20), Entryon, 106) AS Entryon
FROM tbl_BookingTableDetail where Email = @Email;
End


GO
/****** Object:  StoredProcedure [dbo].[sp_CartCheckOutById]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_CartCheckOutById]
    (@UserID varchar(50))
as
begin              
SELECT        dbo.Cart.CartId, dbo.Cart.Id, dbo.Cart.Quantity, dbo.tbl_Variant.DishQuantity, dbo.tbl_Variant.[VName] as DishName, dbo.tbl_Variant.DishImage, dbo.tbl_Variant.SellingCost          
FROM            dbo.Cart INNER JOIN
dbo.tbl_Variant ON dbo.Cart.Id = dbo.tbl_Variant.Id   where dbo.Cart.UserID = @UserID;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_CheckUserAReview]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_CheckUserAReview]
    (
        @UserID varchar(50)
    )
as
begin    
    
IF EXISTS(select 1 from tbl_AppReview where UserID = @UserID)
begin    
  SELECT 1  StatusCode, 'Already Exist' ResponseText
return

end    
    else
begin
SELECT - 1  StatusCode, 'not Exist' ResponseText
return
end
end
GO
/****** Object:  StoredProcedure [dbo].[sp_Chefs]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_Chefs]
as
begin
SELECT        tbl_employees.Name, tbl_employees.Image, tbl_EmployeeRoleMaster.RoleName
FROM            tbl_employees INNER JOIN
                         tbl_EmployeeRoleMaster ON tbl_employees.RoleId = tbl_EmployeeRoleMaster.RoleId
end
GO
/****** Object:  StoredProcedure [dbo].[sp_confirmdatashow]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_confirmdatashow]
    (@UserId varchar(50))
AS
Begin  
SELECT Orders.OrderID, Orders.OrderDate, SUM(OD.TotalAmount) as TotalAmount  
FROM tbl_Orders AS Orders  
INNER JOIN tbl_OrderDetails AS OD ON Orders.OrderID = OD.OrderID  
WHERE Orders.UserId = @UserId  
GROUP BY Orders.OrderID, Orders.OrderDate  
ORDER BY Orders.OrderID DESC  
OFFSET 0 ROWS  
FETCH NEXT 1 ROWS ONLY;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_DashboardStatus]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE[dbo].[sp_DashboardStatus]
AS
BEGIN
    DECLARE @TotalEarning DECIMAL(18, 2);
    DECLARE @TotalOrder INT;
    DECLARE @NewOrder INT;
    DECLARE @TotalEmployee INT;

--Total Earning
    SELECT @TotalEarning = SUM(od.TotalAmount)
    FROM tbl_OnlineOrderDetails AS od
    INNER JOIN tbl_OnlineOrders AS fk ON od.OrderID = fk.OrderID
    WHERE MONTH(fk.OrderDate) = MONTH(GETDATE()) AND YEAR(fk.OrderDate) = YEAR(GETDATE());

--Total Order
    SELECT @TotalOrder = COUNT(OrderID)
    FROM tbl_OnlineOrders;

--New Order
    SELECT @NewOrder = COUNT(OrderID)
    FROM tbl_OnlineOrders
    WHERE CAST(OrderDate AS DATE) = CAST(GETDATE() AS DATE);

--Total Employee
    SELECT @TotalEmployee = COUNT(EmpId)
    FROM tbl_employees
    WHERE IsActive = 1;

--Return the results
SELECT
TotalEarning = @TotalEarning,
    TotalOrder = @TotalOrder,
    NewOrder = @NewOrder,
    totalemployee = @TotalEmployee;
END
GO
/****** Object:  StoredProcedure [dbo].[sp_DboyOrderSummary]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_DboyOrderSummary]
@EmpId int
As
Begin
SELECT
    (SELECT TOP 1 Status FROM DeliveredOrder WHERE Status = 4 AND EmpId = @EmpId) AS DeliveredOrder,
        (SELECT TOP 1 Status FROM DeliveredOrder WHERE Status = 5 AND EmpId = @EmpId) AS CancelledOrder,
            (SELECT TOP 1 Status FROM DeliveredOrder WHERE Status = 2 AND EmpId = @EmpId AND CAST(AssignOn AS DATE) = CAST(GETDATE() AS DATE)) AS TodayOrder,
                (SELECT SUM(CommitionEarning) FROM DeliveredOrder WHERE EmpId = @EmpId) AS Commition;

End
GO
/****** Object:  StoredProcedure [dbo].[sp_DeleteCartValue]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_DeleteCartValue]
    (@CartId int)
as
begin
delete FROM Cart WHERE CartId = @CartId;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_DeleteComplaint]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_DeleteComplaint]
    (@ComplaintId int)
as
begin
delete from tbl_complaint WHERE ComplaintId = @ComplaintId;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_DeleteEmployee]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_DeleteEmployee]
    (@EmpId int)
as
begin
delete from tbl_employees where EmpId = @EmpId;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_DeleteFeedback]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_DeleteFeedback]
    (@FeedbackId int)
as
begin
delete from tbl_feedback where FeedbackId = @FeedbackId;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_DeleteFoodkart]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_DeleteFoodkart]
    (@DishId int)
as
begin
delete from tbl_foodkart where DishId = @DishId;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_DeleteMassage]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_DeleteMassage]
    (@MessageId int)
as
begin
delete from tbl_massagebox where MessageId = @MessageId;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_DeleteOffer]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_DeleteOffer]
    (@OfferId int)
as
begin
delete from tbl_offer where OfferId = @OfferId;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_DeleteTeakart]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_DeleteTeakart]
    (@TeaId int)
as
begin
delete from tbl_teakart WHERE TeaId = @TeaId;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_DeliverdOrderReport]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
            
CREATE proc[dbo].[sp_DeliverdOrderReport]
as
begin
SELECT
tbl_Orders.UserId,
    tbl_Orders.OrderID,
    tbl_foodkart.DishName,
    tbl_foodkart.DishImage,
    tbl_OrderDetails.Quantity,
    tbl_Orders.DeliverDate,
    tbl_Orders.Status
FROM
tbl_Orders            
INNER JOIN tbl_OrderDetails ON tbl_Orders.OrderID = tbl_OrderDetails.OrderID            
INNER JOIN tbl_foodkart ON tbl_OrderDetails.DishId = tbl_foodkart.DishId
WHERE
tbl_Orders.Status = 4       
      
 order by tbl_Orders.DeliverDate asc;

end
GO
/****** Object:  StoredProcedure [dbo].[sp_DishQtyUpdateInCartValue]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_DishQtyUpdateInCartValue]
    (@CartId int, @Quantity int)
as
begin        
update Cart set Quantity = @Quantity where CartId = @CartId;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_EmployeeRoleMasterList]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_EmployeeRoleMasterList]
as
begin
select * from tbl_EmployeeRoleMaster
end
GO
/****** Object:  StoredProcedure [dbo].[sp_EventDetailsById]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_EventDetailsById]
@UserID varchar(100)
As
Begin
SELECT Eb.*,
    CONVERT(VARCHAR(20), Eb.eventCreateDate, 106) AS BookingDate,
        E.eventName 
FROM tblEventBooking AS Eb 
INNER JOIN tblEvent AS E ON Eb.eventID = E.eventID 
WHERE Eb.UserID = @UserID;

End
GO
/****** Object:  StoredProcedure [dbo].[sp_FoodkartDisplayList]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
      CREATE proc[dbo].[sp_FoodkartDisplayList]
as
begin
select * from tbl_Variant;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_FullDetailsFoodkartList]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
      CREATE proc[dbo].[sp_FullDetailsFoodkartList]
as
begin        
SELECT        tbl_foodkart.DishId, tbl_foodkart.DishName, tbl_Dishcategory.DishCategoryName, tbl_foodkart.DishImage, tbl_foodkart.DishPrize, tbl_foodkart.DishAddDate, tbl_foodkart.DishStatus, tbl_foodkart.DishDescription    
FROM            tbl_foodkart INNER JOIN      
                         tbl_Dishcategory ON tbl_foodkart.DishCategoryId = tbl_Dishcategory.DishCategoryId;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetActiveDeliveryBoy]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_GetActiveDeliveryBoy]
as
begin  
SELECT dbo.tbl_employees.*, dbo.tbl_EmployeeRoleMaster.RoleName
FROM dbo.tbl_employees
left JOIN dbo.tbl_EmployeeRoleMaster ON dbo.tbl_employees.RoleId = dbo.tbl_EmployeeRoleMaster.RoleId
WHERE dbo.tbl_EmployeeRoleMaster.RoleName = 'Delivery Boy' AND dbo.tbl_employees.IsActive = 1;

end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetAddressById]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetAddressById]
    (@AddressId int)
as
begin
select * from DeliveryAddress where AddressId = @AddressId;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetAllAddress]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetAllAddress]
as
begin
select * from DeliveryAddress
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetAllAddressByUserId]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_GetAllAddressByUserId]
    (@UserId varchar(50))
as
begin
select * from DeliveryAddress where UserId = @UserId;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetAllDishCategoryList]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_GetAllDishCategoryList]
as
begin
select * from tbl_Dishcategory
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetAllSentMessage]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE proc[dbo].[sp_GetAllSentMessage]
as
begin
SELECT
MessageId, Email, Subject, Description,
    SentDate =
    CASE
            WHEN DATEDIFF(MINUTE, SentEmailDate, GETDATE()) < 60 THEN
CONVERT(VARCHAR, DATEDIFF(MINUTE, SentEmailDate, GETDATE())) + ' min ago'
            WHEN DATEDIFF(HOUR, SentEmailDate, GETDATE()) < 24 THEN
CONVERT(VARCHAR, DATEDIFF(HOUR, SentEmailDate, GETDATE())) + ' hours ago'
ELSE
CONVERT(VARCHAR, DATEDIFF(DAY, SentEmailDate, GETDATE())) + ' days ago'
END
FROM tbl_massagebox
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetAllSentMessageById]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetAllSentMessageById]
    (@MessageId int)
as
begin
SELECT
MessageId, Email, Subject, Description,
    SentDate =
    CASE
            WHEN DATEDIFF(MINUTE, SentEmailDate, GETDATE()) < 60 THEN
CONVERT(VARCHAR, DATEDIFF(MINUTE, SentEmailDate, GETDATE())) + ' min ago'
            WHEN DATEDIFF(HOUR, SentEmailDate, GETDATE()) < 24 THEN
CONVERT(VARCHAR, DATEDIFF(HOUR, SentEmailDate, GETDATE())) + ' hours ago'
ELSE
CONVERT(VARCHAR, DATEDIFF(DAY, SentEmailDate, GETDATE())) + ' days ago'
END
FROM tbl_massagebox where MessageId = @MessageId
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetAReviewList]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetAReviewList]
as
begin
Select * from tbl_AppReview
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetAReviewListById]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetAReviewListById]
    (@AReviewId int)
as
begin
Select * from tbl_AppReview where AReviewId = @AReviewId;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetBanner1]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_GetBanner1]
as

begin
select * from tblBannner where BannerName = 'BannerName1' and Status = 1;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetBanner2]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_GetBanner2]
as

begin
select * from tblBannner where BannerName = 'BannerName2' and Status = 1;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetBanner3]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_GetBanner3]
as

begin
select * from tblBannner where BannerName = 'BannerName3' and Status = 1;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_getBannerById]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
      
CREATE proc[dbo].[sp_getBannerById](
    @BannerId    int

)
as
begin
select * from tblBannner where BannerId = @BannerId

end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetBannerList]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetBannerList]
as
begin
Select * from tblBannner
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetBookingEventById]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetBookingEventById]
    (@eventBookingId int)
as
begin
select * from tblEventBooking where eventBookingId = @eventBookingId;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetCartValueById]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE proc[dbo].[sp_GetCartValueById]
    (@UserID varchar(50))
as
begin              
SELECT        dbo.Cart.CartId, dbo.Cart.Id, dbo.Cart.Quantity, dbo.tbl_Variant.DishQuantity, dbo.tbl_Variant.VName as DishName, dbo.tbl_Variant.DishImage, dbo.tbl_Variant.SellingCost          
FROM            dbo.Cart INNER JOIN
dbo.tbl_Variant ON dbo.Cart.Id = dbo.tbl_Variant.Id  where UserID = @UserID;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetCartValueList]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetCartValueList]
as
begin
select * from CartValue;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetCategoryById]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
    
CREATE proc[dbo].[sp_GetCategoryById](
    @DishCategoryId    int
)
as
begin
select * from tbl_Dishcategory where DishCategoryId = @DishCategoryId

end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetCityList]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetCityList]
as
begin
select * from City;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetComplaintById]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetComplaintById]
    (@ComplaintId int)
as
begin
select * from tbl_complaint WHERE ComplaintId = @ComplaintId;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetComplaintList]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetComplaintList]
as
begin
select * from tbl_complaint;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetContactUsById]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetContactUsById]
    (@ContactId int)
as
begin
select * from tbl_contactus where ContactId = @ContactId;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetContactusList]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetContactusList]
as
begin
select * from tbl_contactus;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetDBoyCommitionById]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_GetDBoyCommitionById]
@EmpId int
As
Begin
select * from DeliveredOrder where EmpId = @EmpId;
End
GO
/****** Object:  StoredProcedure [dbo].[sp_GetDboyIdByEmail]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetDboyIdByEmail]
@Email varchar(100)
As
Begin
select EmpId from tbl_employees where Email = @Email;
End
GO
/****** Object:  StoredProcedure [dbo].[sp_GetDBoyReview]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE[dbo].[sp_GetDBoyReview]
@Email VARCHAR(100)
AS
BEGIN
    SELECT DISTINCT dr.*
    FROM DboyReview dr
    INNER JOIN DeliveredOrder do ON dr.DboyId = do.EmpId
    WHERE do.Email = @Email;
END
 
GO
/****** Object:  StoredProcedure [dbo].[sp_GetDboyReviewStatisticsById]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE[dbo].[sp_GetDboyReviewStatisticsById]
@EmpId INT
AS
BEGIN
SELECT
dr.Rating,
    COUNT(dr.DboyRId) AS TotalRating,
        ROUND(COUNT(dr.DboyRId) * 100.0 / (SELECT COUNT(*) FROM DboyReview), 2) AS Percentage,
            (SELECT COUNT(*) FROM DboyReview) AS AllRecords,
                AVG(dr.Rating) AS AverageRating
FROM 
        DboyReview dr
WHERE
dr.DboyId = @EmpId
    GROUP BY
dr.Rating
    ORDER BY
dr.Rating DESC;
END
GO
/****** Object:  StoredProcedure [dbo].[sp_GetDishCategoryList]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_GetDishCategoryList]
    (@DishCategoryId int)
as
begin
select * from tbl_foodkart where DishCategoryId = @DishCategoryId and DishStatus = 1;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetDishCategoryListByPrize]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetDishCategoryListByPrize]
    (
        @MinPrize decimal(18, 2),
        @MaxPrize decimal(18, 2)
    )
as
begin
SELECT *
    FROM tbl_foodkart
WHERE DishPrize BETWEEN @MinPrize AND @MaxPrize
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetDishCategoryListByPrizeWithCategory]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create proc[dbo].[sp_GetDishCategoryListByPrizeWithCategory]
    (@DishCategoryId int,
        @MinPrize decimal(18, 2),
        @MaxPrize decimal(18, 2)
    )
as
begin
SELECT *
    FROM tbl_foodkart
WHERE DishPrize BETWEEN @MinPrize AND @MaxPrize and DishCategoryId = @DishCategoryId
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetDishDetailById]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
      CREATE proc[dbo].[sp_GetDishDetailById]
    (@DishId int)
as
begin            
SELECT        tbl_foodkart.DishId, tbl_foodkart.DishName, tbl_foodkart.DishDescription, tbl_Dishcategory.DishCategoryName, dbo.tbl_Dishcategory.DishCategoryId, tbl_foodkart.DishImage, tbl_foodkart.DishPrize, tbl_foodkart.DishAddDate, tbl_foodkart.DishStatus, tbl_foodkart.DishDescription   
  
     
FROM            tbl_foodkart INNER JOIN          
                         tbl_Dishcategory ON tbl_foodkart.DishCategoryId = tbl_Dishcategory.DishCategoryId where tbl_foodkart.DishId = @DishId;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetDishListByPrize]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_GetDishListByPrize]
    (
        @SellingCost decimal(18, 2)

    )
as
begin        
SELECT        dbo.tbl_foodkart.DishId, dbo.tbl_Variant.Id, dbo.tbl_Variant.VName, dbo.tbl_Variant.DishImage, dbo.tbl_Variant.SellingCost, dbo.tbl_Variant.MRP, dbo.tbl_Variant.DishDescription, dbo.tbl_Variant.DishStatus,
    dbo.tbl_Variant.DishQuantity, dbo.tbl_Dishcategory.DishCategoryName    
FROM            dbo.tbl_foodkart INNER JOIN
dbo.tbl_Variant ON dbo.tbl_foodkart.DishId = dbo.tbl_Variant.DishId INNER JOIN
dbo.tbl_Dishcategory ON dbo.tbl_foodkart.DishCategoryId = dbo.tbl_Dishcategory.DishCategoryId      
WHERE SellingCost BETWEEN 0 AND @SellingCost  and dbo.tbl_foodkart.DishStatus = 1;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetDishVarientList]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_GetDishVarientList]
as
begin        
        
SELECT        dbo.tbl_foodkart.DishId, dbo.tbl_Dishcategory.DishCategoryName, dbo.tbl_Variant.Id, dbo.tbl_Variant.VName, dbo.tbl_Variant.DishStatus, dbo.tbl_Variant.DishImage, dbo.tbl_Variant.MRP, dbo.tbl_Variant.SellingCost, dbo.tbl_Variant.DishDescription,
    dbo.tbl_Variant.DishQuantity        
FROM            dbo.tbl_foodkart INNER JOIN
dbo.tbl_Dishcategory ON dbo.tbl_foodkart.DishCategoryId = dbo.tbl_Dishcategory.DishCategoryId INNER JOIN
dbo.tbl_Variant ON dbo.tbl_foodkart.DishId = dbo.tbl_Variant.DishId;

end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetDishVarientListByDishId]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_GetDishVarientListByDishId]
    (@DishId int)
as
begin      
      
SELECT        dbo.tbl_foodkart.DishId, dbo.tbl_Dishcategory.DishCategoryName, dbo.tbl_Variant.Id, dbo.tbl_Variant.VName, dbo.tbl_Variant.DishImage, dbo.tbl_Variant.MRP, dbo.tbl_Variant.SellingCost, dbo.tbl_Variant.DishDescription,
    dbo.tbl_Variant.DishQuantity      
FROM            dbo.tbl_foodkart INNER JOIN
dbo.tbl_Dishcategory ON dbo.tbl_foodkart.DishCategoryId = dbo.tbl_Dishcategory.DishCategoryId INNER JOIN
dbo.tbl_Variant ON dbo.tbl_foodkart.DishId = dbo.tbl_Variant.DishId where  dbo.tbl_foodkart.DishId = @DishId;

end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetEmployeeById]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetEmployeeById]
    (@EmpId int)
as
begin
select * from tbl_employees where EmpId = @EmpId;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetEmployeeDetailsById]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetEmployeeDetailsById]
    (@EmpId int)
as
begin
SELECT        dbo.tbl_employees.*, dbo.tbl_EmployeeRoleMaster.RoleName
FROM            dbo.tbl_employees INNER JOIN
dbo.tbl_EmployeeRoleMaster ON dbo.tbl_employees.RoleId = dbo.tbl_EmployeeRoleMaster.RoleId where dbo.tbl_employees.EmpId = @EmpId;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetEmployeeList]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetEmployeeList]

as
begin
select * from tbl_employees;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetEmployeeRoleById]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetEmployeeRoleById]
    (@RoleId int)
as
begin
select * from tbl_EmployeeRoleMaster where RoleId = @RoleId;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetEmployeeRoleMasterById]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetEmployeeRoleMasterById]
    (@RoleId int)
as
begin
select * FROM tbl_EmployeeRoleMaster WHERE RoleId = @RoleId;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetEmployeeRoleMasterList]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetEmployeeRoleMasterList]
as
begin
select * from tbl_EmployeeRoleMaster;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetEmpSalary]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetEmpSalary]
    (@RoleId int)
as
begin        
select Salary from tbl_EmployeeRoleMaster  where  Roleid = @RoleId
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetEmpSalarydetailById]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_GetEmpSalarydetailById]
@EmpId int
As
Begin  
SELECT emp.Name, emp.Email, emp.Image, emp.Salary, empsalary.Status,
    CONVERT(varchar(30), empsalary.CreationDate, 106)
    + ' '
    + RIGHT(CONVERT(varchar(30), empsalary.CreationDate, 0), 7) AS CreditOn
FROM dbo.tbl_employees AS emp
inner JOIN dbo.tblEmployeeSalary AS empsalary ON emp.EmpId = empsalary.EmpId
WHERE  empsalary.EmpId = @EmpId;


--SELECT emp.Name, emp.Email, emp.Image, emp.Salary, empsalary.Status,
    --CONVERT(varchar(30), empsalary.CreationDate, 106)
--        + ' '
--        + RIGHT(CONVERT(varchar(30), empsalary.CreationDate, 0), 7) AS CreditOn
--FROM dbo.tbl_employees AS emp
--INNER JOIN dbo.tblEmployeeSalary AS empsalary ON emp.EmpId = empsalary.EmpId
--WHERE YEAR(empsalary.CreationDate) = YEAR(GETDATE())
--AND MONTH(empsalary.CreationDate) = MONTH(GETDATE())
--AND empsalary.EmpId = @EmpId;

End
GO
/****** Object:  StoredProcedure [dbo].[sp_GetEvent]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetEvent]
as
begin
select * from tblEvent
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetEventBanner]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetEventBanner]
as

begin
select * from tblBannner where BannerName = 'EventBanner' and Status = 1;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetEventBooking]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_GetEventBooking]
as
begin
select * from tblEventBooking where eventBookingStatus = 1;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetEventById]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetEventById]
    (@eventID int)
as
begin
select * from tblEvent where eventID = @eventID;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetEventPrice]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetEventPrice]
    (@eventID int)
as
begin        
select eventOffPrice from tblEvent  where  eventID = @eventID
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetFAQ]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create proc[dbo].[sp_GetFAQ]
as
begin
select * from tbl_FAQ
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetFAQById]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create proc[dbo].[sp_GetFAQById]
    (@FAQId int)
as
begin
select * from tbl_FAQ where FAQId = @FAQId;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetFAQStatusUpdate]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create proc[dbo].[sp_GetFAQStatusUpdate]
    (@FAQId int,
        @Status int)
as
begin
Update tbl_FAQ set Status = @Status where FAQId = @FAQId;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetFeedbackById]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetFeedbackById]
    (@FeedbackId int)
as
begin
select * from tbl_feedback where FeedbackId = @FeedbackId;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetFeedbackList]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetFeedbackList]
as
begin
select * from tbl_feedback;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetFoodkartById]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetFoodkartById]
    (@DishId int)
as
begin
select * from tbl_foodkart where DishId = @DishId;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetFoodkartList]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
      CREATE proc[dbo].[sp_GetFoodkartList]
as
begin          
SELECT        tbl_foodkart.DishId, tbl_foodkart.DishName, tbl_foodkart.DishDescription, tbl_Dishcategory.DishCategoryName, tbl_Dishcategory.DishCategoryId, tbl_foodkart.DishImage, tbl_foodkart.DishPrize, tbl_foodkart.DishAddDate, tbl_foodkart.DishStatus, tbl_foodkart.DishDescription   
   
FROM            tbl_foodkart INNER JOIN        
                         tbl_Dishcategory ON tbl_foodkart.DishCategoryId = tbl_Dishcategory.DishCategoryId where tbl_foodkart.DishStatus = 1;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetFoodOnSearch]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
 CREATE PROCEDURE[dbo].[sp_GetFoodOnSearch]
@DishName VARCHAR(50),
    @DishCategoryName VARCHAR(50) = NULL
AS
BEGIN  
    PRINT 'Debug: @DishName = ' + @DishName;  
    PRINT 'Debug: @DishCategoryName = ' + ISNULL(@DishCategoryName, 'NULL');

SELECT
fk.DishId,
    fk.DishName,
    fk.DishDescription,
    dc.DishCategoryName,
    fk.DishImage,
    fk.DishPrize,
    fk.DishAddDate,
    fk.DishStatus
FROM  
        tbl_foodkart fk  
    INNER JOIN  
        tbl_Dishcategory dc ON fk.DishCategoryId = dc.DishCategoryId
WHERE
    (@DishName IS NULL OR fk.DishName LIKE '%' + @DishName + '%')
AND
    (@DishCategoryName IS NULL OR dc.DishCategoryName LIKE '%' + @DishCategoryName + '%') and fk.DishStatus = 1;
END
GO
/****** Object:  StoredProcedure [dbo].[sp_GetFoodVarientById]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetFoodVarientById]
    (@Id int)
as
begin
Select * From tbl_Variant where Id = @Id;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetMassageById]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetMassageById]
    (@MessageId int)
as
begin
select * from tbl_massagebox where MessageId = @MessageId;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetMassageList]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetMassageList]
as
begin
select * from tbl_massagebox;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetNewEventBooking]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_GetNewEventBooking]
as
begin    
SELECT        dbo.tblEvent.eventName, dbo.tblEventBooking.UserName, dbo.tblEventBooking.eventBookingId, dbo.tblEventBooking.PhoneNo, dbo.tblEventBooking.TotalGuest, dbo.tblEventBooking.BPersonName,
    dbo.tblEventBooking.CoupleName, dbo.tblEventBooking.eventDate, dbo.tblEventBooking.eventTime, dbo.tblEventBooking.eventPrice, dbo.tblEventBooking.eventBookingStatus, dbo.tblEventBooking.eventCompleteDate,
    dbo.tblEventBooking.eventCreateDate
FROM            dbo.tblEvent INNER JOIN
dbo.tblEventBooking ON dbo.tblEvent.eventID = dbo.tblEventBooking.eventID
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetNumberInCartItem]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_GetNumberInCartItem]
    (@UserID varchar(50))
as
begin        
select count(*) as Quantity FROM Cart WHERE UserID = @UserID;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetOfferById]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetOfferById]
    (@OfferId int)
as
begin
select * from tbl_offer where OfferId = @OfferId;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetOfferList]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetOfferList]
as
begin
select * from tbl_offer;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetOnlineOrderById]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_GetOnlineOrderById]
    (@OrderId int)
as
begin
select * from  tbl_Orders where  OrderId = @OrderId
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetOnlineOrderList]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetOnlineOrderList]
as
begin
select * from  tbl_OnlineOrders
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetOrderInChart]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_GetOrderInChart]
as
begin        
  SELECT TOP 5 tbl_Variant.VName,
    COUNT(tbl_OrderDetails.DishId) AS Total_Orders    
FROM tbl_Variant    
INNER JOIN tbl_OrderDetails ON tbl_Variant.Id = tbl_OrderDetails.DishId    
GROUP BY tbl_Variant.VName    
ORDER BY Total_Orders DESC;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetOrderListByDboy]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_GetOrderListByDboy]
    (@Email varchar(100))
as
begin          
SELECT DeliveredOrder.*, tbl_employees.Name  
FROM dbo.DeliveredOrder  
full JOIN dbo.tbl_employees ON dbo.DeliveredOrder.EmpId = dbo.tbl_employees.EmpId  
WHERE dbo.tbl_employees.Email = @Email;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetPaymentDetail]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE[dbo].[sp_GetPaymentDetail]
AS
BEGIN
Select * from tbl_PaymentDetails;
END;
GO
/****** Object:  StoredProcedure [dbo].[sp_GetPaymentDetailById]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE[dbo].[sp_GetPaymentDetailById]
@PaymentId INT
AS
BEGIN
Select * from tbl_PaymentDetails  where PaymentId = @PaymentId;
END;
GO
/****** Object:  StoredProcedure [dbo].[sp_GetProductReviewList]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetProductReviewList]
as
begin
Select * from tbl_ProductReview
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetProductReviewListById]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetProductReviewListById]
    (@ReviewId int)
as
begin
Select * from tbl_ProductReview  where ReviewId = @ReviewId;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetRecentViewById]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_GetRecentViewById]
    (@UserID varchar(50))
as
begin
SELECT DISTINCT TOP 4
fk.DishId,
    fk.DishName,
    fk.DishDescription,
    dc.DishCategoryName,
    fk.DishImage,
    fk.DishPrize,
    fk.DishAddDate
FROM
    tbl_foodkart fk
INNER JOIN
    tbl_Dishcategory dc ON fk.DishCategoryId = dc.DishCategoryId
INNER JOIN
    tbl_RecentView ON fk.DishId = tbl_RecentView.DishId where tbl_RecentView.UserID = @UserID;

end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetRelatedProduct]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
  CREATE proc[dbo].[sp_GetRelatedProduct]
    (@DishCategoryId int)
as
begin  
SELECT        dbo.tbl_foodkart.DishId, dbo.tbl_foodkart.DishImage, dbo.tbl_foodkart.DishName, dbo.tbl_foodkart.DishPrize, dbo.tbl_Dishcategory.DishCategoryName, dbo.tbl_Dishcategory.DishCategoryId, dbo.tbl_foodkart.DishDescription           
FROM            dbo.tbl_foodkart INNER JOIN
dbo.tbl_Dishcategory ON dbo.tbl_foodkart.DishCategoryId = dbo.tbl_Dishcategory.DishCategoryId       
                          where dbo.tbl_Dishcategory.DishCategoryId = @DishCategoryId and dbo.tbl_foodkart.DishStatus = 1;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetShowBannerData]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetShowBannerData]
as
begin
Select * from tblBannner where Status = 1;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetSpecialDish]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_GetSpecialDish]
as
begin          
SELECT TOP 5
tbl_Variant.VName,
    tbl_Variant.DishImage,
    tbl_Variant.MRP,
    tbl_Variant.SellingCost,
    COUNT(tbl_OrderDetails.DishId) AS Totalbook,
        tbl_OrderDetails.DishId
FROM
tbl_Variant    
INNER JOIN     
    tbl_OrderDetails ON tbl_Variant.Id = tbl_OrderDetails.DishId    
GROUP BY
tbl_Variant.VName,
    tbl_Variant.DishImage,
    tbl_Variant.MRP,
    tbl_Variant.SellingCost,
    tbl_OrderDetails.DishId    
ORDER BY    
    Totalbook DESC;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetStateList]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetStateList]
as
begin
select * from State;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetTabledetails]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetTabledetails]
as
begin
select * from Tabledetails
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetTableOrdersById]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetTableOrdersById]
    (@OrderId int)
as
begin
select * from  TableOrders where OrderId = @OrderId
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetTableOrdersList]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetTableOrdersList]
as
begin
select * from  TableOrders
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetTablesDetails]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_GetTablesDetails]
as
begin
select * from tbl_AvailableTablesDetails
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetTeakartById]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetTeakartById]
    (@TeaId int)
as
begin
select * FROM tbl_teakart WHERE TeaId = @TeaId;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetTeakartList]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetTeakartList]
as
begin
select * from tbl_teakart;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GettotalOrderByMonth]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_GettotalOrderByMonth]
as
begin
SELECT
FORMAT(OrderDate, 'MMMM yyyy') AS Month,
    COUNT(OrderID) AS TotalOrder
FROM
tbl_Orders  
GROUP BY
FORMAT(OrderDate, 'MMMM yyyy');
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetUserProfileByemail]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetUserProfileByemail]
    (@Email varchar(100))
as
begin
select * from tbl_UserPro_Details where Email = @Email;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_GetUserProfileList]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_GetUserProfileList]
as
begin
select * from tbl_UserPro_Details
end
GO
/****** Object:  StoredProcedure [dbo].[sp_InvoiceByOrderId]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_InvoiceByOrderId]
    (@OrderID int)
as
begin
SELECT
tbl_Orders.UserId,
    tbl_Orders.OrderID,
    tbl_Orders.DboyId,
    tbl_Orders.DeliverDate as DeliverDate,
    tbl_Variant.[VName] as DishName,
    tbl_Variant.DishImage,
    tbl_Variant.DishQuantity,
    tbl_OrderDetails.Quantity,
    tbl_OrderDetails.TotalAmount,
    CONVERT(VARCHAR, tbl_Orders.OrderDate, 106) + ' ' +
    CONVERT(VARCHAR, tbl_Orders.OrderDate, 108) AS ProcessedDate,
        tbl_Orders.Status
FROM
tbl_Orders                    
right join tbl_OrderDetails ON tbl_Orders.OrderID = tbl_OrderDetails.OrderID                    
full Join tbl_Variant ON tbl_OrderDetails.DishId = tbl_Variant.Id

WHERE
tbl_OrderDetails.OrderID = @OrderID;

end
GO
/****** Object:  StoredProcedure [dbo].[sp_Listcartvalue]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create proc[dbo].[sp_Listcartvalue]
as
begin
select * from vw_cartvalue
end
GO
/****** Object:  StoredProcedure [dbo].[sp_NewMessageNotify]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

 CREATE proc[dbo].[sp_NewMessageNotify]
as
begin
SELECT
ContactId,
    UserName,
    COUNT(ContactId) OVER() AS NewMessage,
        CASE    
        WHEN DATEDIFF(MINUTE, ContactDate, GETDATE()) < 60 THEN
CONVERT(VARCHAR, DATEDIFF(MINUTE, ContactDate, GETDATE())) + ' min ago'    
        WHEN DATEDIFF(HOUR, ContactDate, GETDATE()) < 24 THEN
CONVERT(VARCHAR, DATEDIFF(HOUR, ContactDate, GETDATE())) + ' hours ago'
ELSE
CONVERT(VARCHAR, DATEDIFF(DAY, ContactDate, GETDATE())) + ' days ago'    
    END AS NewMessageDate
FROM tbl_contactus    
WHERE Status = 0 order by ContactDate desc
end
GO
/****** Object:  StoredProcedure [dbo].[sp_NewOrderStatusForDboy]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_NewOrderStatusForDboy]
    (@Email varchar(100))
as
begin
Select count(DeliveredOrderId) as NewOrderStatus from DeliveredOrder where Status = 2  and  Email = @Email;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_OnlineOrders]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE[dbo].[sp_OnlineOrders]
    (
        @OrderID INT OUTPUT,
        @UserId INT
    )
AS
BEGIN
BEGIN
--Insert a new order  
        INSERT INTO tbl_OnlineOrders(UserId, Status)
VALUES(@UserId, 1);

--Get the ID of the newly inserted tbl_orders  
        SET @OrderID = SCOPE_IDENTITY();
END

BEGIN  
   INSERT INTO tbl_OnlineOrderDetails(OrderID, DishId, Quantity, TotalAmount)
		SELECT @OrderID, cv.DishId, cv.Quantity, (fk.DishPrize * cv.Quantity) as TotalAmount
		FROM CartValue AS cv
		INNER JOIN tbl_foodkart AS fk ON cv.DishId = fk.DishId
		and cv.UserID = @UserId


END

--Remove the processed items from the cart
    DELETE FROM CartValue
    WHERE UserID = @UserId;

END

GO
/****** Object:  StoredProcedure [dbo].[sp_OrderBooking]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE[dbo].[sp_OrderBooking]
    (@OrderID INT OUTPUT,
        @AddressId int,
        @UserId VARCHAR(50),
        @PaymentType VARCHAR(50),
        @Amount float,
        @Status INT

    )
AS
BEGIN
--Insert a new order                    
        INSERT INTO tbl_Orders(AddressId, UserId, Status)
VALUES(@AddressId, @UserId, 1);

--Get the ID of the newly inserted tbl_orders                    
        SET @OrderID = SCOPE_IDENTITY();               
                
        INSERT INTO tbl_OrderDetails(OrderID, DishId, Quantity, TotalAmount)                
        SELECT @OrderID, cv.Id, cv.Quantity, (fk.SellingCost * cv.Quantity) as TotalAmount                
        FROM Cart AS cv                
        INNER JOIN tbl_Variant AS fk ON cv.Id = fk.Id                
        and cv.UserID = @UserId;
      DELETE FROM Cart                  
    WHERE UserID = @UserId;     
		INSERT INTO tbl_PaymentDetails(OrderId, UserId, PaymentType, Amount, Status)
VALUES(@OrderID, @UserId, @PaymentType, @Amount, 1);
  SELECT 1 StatusCode, 'Order Placed' ResponseText, @OrderID OrderID
Return
END
GO
/****** Object:  StoredProcedure [dbo].[sp_OrderDetailsByOrderId]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_OrderDetailsByOrderId]
    (@OrderID int)
as
begin
SELECT
tbl_Orders.UserId,
    tbl_Orders.OrderID,
    tbl_Orders.DeliverDate as DeliverDate,
    tbl_Variant.[VName] as DishName,
    tbl_Variant.DishImage,
    tbl_Variant.DishQuantity,
    tbl_OrderDetails.Quantity,
    tbl_OrderDetails.TotalAmount,
    tbl_Orders.OrderDate,
    tbl_Orders.Status
FROM
tbl_Orders                
right join tbl_OrderDetails ON tbl_Orders.OrderID = tbl_OrderDetails.OrderID                
full Join tbl_Variant ON tbl_OrderDetails.DishId = tbl_Variant.Id

WHERE
tbl_OrderDetails.OrderID = @OrderID;

end
GO
/****** Object:  StoredProcedure [dbo].[sp_OrderHistory]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
 CREATE proc[dbo].[sp_OrderHistory]
    (
        @UserId varchar(50)
    )
as
begin

SELECT
tbl_Orders.UserId,
    tbl_Orders.OrderID,
    tbl_foodkart.DishName,
    tbl_foodkart.DishImage,
    tbl_OrderDetails.Quantity,
    tbl_OrderDetails.TotalAmount,
    tbl_Orders.OrderDate,
    tbl_Orders.Status
FROM
tbl_Orders        
INNER JOIN tbl_OrderDetails ON tbl_Orders.OrderID = tbl_OrderDetails.OrderID        
INNER JOIN tbl_foodkart ON tbl_OrderDetails.DishId = tbl_foodkart.DishId
WHERE
tbl_Orders.UserId = @UserId;

end
GO
/****** Object:  StoredProcedure [dbo].[sp_OrderReport]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
                
CREATE proc[dbo].[sp_OrderReport]
as
begin
SELECT
tbl_Orders.UserId,
    tbl_Orders.OrderID,
    tbl_Variant.VName as DishName,
    tbl_Variant.DishImage,
    tbl_Variant.DishQuantity,
    tbl_Orders.OrderDate,
    tbl_Orders.Status
FROM
tbl_Orders                
INNER JOIN tbl_OrderDetails ON tbl_Orders.OrderID = tbl_OrderDetails.OrderID                
INNER JOIN tbl_Variant ON tbl_OrderDetails.DishId = tbl_Variant.Id

WHERE
tbl_Orders.Status IN(0, 1, 2)               
ORDER BY tbl_Orders.OrderDate DESC;



end
GO
/****** Object:  StoredProcedure [dbo].[sp_ResendOTP]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE[dbo].[sp_ResendOTP]
@OrderID INT,
    @OTP INT
AS
BEGIN
IF(@OTP IS NOT NULL)
BEGIN          
        UPDATE tbl_Orders               
        SET OTP = @OTP  
        WHERE OrderID = @OrderID;           
        SELECT 1 AS StatusCode, 'OTP Resend Successful' AS ResponseText;
END
ELSE
BEGIN
SELECT - 1 AS StatusCode, 'OTP not provided' AS ResponseText;
END
END
GO
/****** Object:  StoredProcedure [dbo].[sp_status]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE[dbo].[sp_status]

AS
BEGIN        
    DECLARE @TotalEarning DECIMAL(18, 2);        
    DECLARE @TotalOrder INT;        
    DECLARE @NewOrder INT;        
    DECLARE @TotalEmployee INT;       
    DECLARE @DeliveredOrder INT; --Corrected variable name      
    DECLARE @NewOrders INT; --Corrected variable name      
    DECLARE @NewMessage INT;      
 DECLARE @NewMessageDate varchar(50);

--Total Earning        
    SELECT @TotalEarning = ISNULL(SUM(od.TotalAmount), 0)-- Added ISNULL to handle NULL values      
    FROM tbl_OrderDetails AS od        
    INNER JOIN tbl_Orders AS fk ON od.OrderID = fk.OrderID        
    WHERE MONTH(fk.OrderDate) = MONTH(GETDATE()) AND YEAR(fk.OrderDate) = YEAR(GETDATE());

--Total Order        
    SELECT @TotalOrder = COUNT(OrderID)        
    FROM tbl_Orders;

--New Order        
    SELECT @NewOrder = COUNT(OrderID)        
    FROM tbl_Orders        
    WHERE CAST(OrderDate AS DATE) = CAST(GETDATE() AS DATE);

--Total Employee        
    SELECT @TotalEmployee = COUNT(EmpId)        
    FROM tbl_employees        
    WHERE IsActive = 1;

--Total Delivered Order-- Corrected comment      
    SELECT @DeliveredOrder = COUNT(OrderID)        
    FROM tbl_Orders       
    WHERE Status = 5;

--New upcoming Order-- Corrected comment      
    SELECT @NewOrders = COUNT(OrderID)        
    FROM tbl_Orders        
    WHERE Status IN(0, 1, 2, 3, 4);
--New Message
--New Message
SELECT
@NewMessage = COUNT(ContactId),
    @NewMessageDate =
    CASE      
            WHEN DATEDIFF(MINUTE, ContactDate, GETDATE()) < 60 THEN
CONVERT(VARCHAR, DATEDIFF(MINUTE, ContactDate, GETDATE())) + ' min ago'      
            WHEN DATEDIFF(HOUR, ContactDate, GETDATE()) < 24 THEN
CONVERT(VARCHAR, DATEDIFF(HOUR, ContactDate, GETDATE())) + ' hours ago'
ELSE
CONVERT(VARCHAR, DATEDIFF(DAY, ContactDate, GETDATE())) + ' days ago'
END      
FROM tbl_contactus      
WHERE Status = 0      
GROUP BY ContactDate;

--Return the results
SELECT
TotalEarning = @TotalEarning,
    TotalOrder = @TotalOrder,
    NewOrder = @NewOrder,
    TotalEmployee = @TotalEmployee,
    DeliveredOrder = @DeliveredOrder,
    NewOrders = @NewOrders,
    NewMessage = @NewMessage,
    NewMessageDate = @NewMessageDate; --Added NewMessageDate in the SELECT list
end
GO
/****** Object:  StoredProcedure [dbo].[sp_TableBooking]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE[dbo].[sp_TableBooking]
    (
        @TableBookingId INT OUTPUT,
        @TableId INT,
        @UserId INT,
        @People INT,
        @Email VARCHAR(50),
        @BookingTime VARCHAR(50),
        @description VARCHAR(50),
        @Status INT
    )
AS
BEGIN
    INSERT INTO BookingTable(TableId, UserId, People, Email, BookingTime, description, Status)
VALUES(
    @TableId,
    @UserId,
    @People,
    @Email,
    @BookingTime,
    @description,
    @Status
);
--Get the last inserted values
    SELECT @TableBookingId = SCOPE_IDENTITY();
--select * from BookingTable
--Return the Email and TableId
    SELECT Email, TableBookingId
    FROM BookingTable
    WHERE TableBookingId = @TableBookingId;

return
END
GO
/****** Object:  StoredProcedure [dbo].[sp_tableStatus]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE[dbo].[sp_tableStatus]
AS
BEGIN  
    DECLARE @deliverdOrder INT;  
    DECLARE @UpcomingOrder INT;  
    DECLARE @NewMessage INT;

--Total Order  
    SELECT @deliverdOrder = COUNT(OrderID)  
    FROM tbl_OnlineOrders where Status = 5;

--New Order  
    SELECT @UpcomingOrder = COUNT(OrderID)  
    FROM tbl_OnlineOrders  
    where Status = 0;

--Total Employee  
    SELECT @NewMessage = COUNT(ContactId)  
    FROM tbl_contactus  
    WHERE status = 0;

--Return the results
SELECT
deliverdOrder = @deliverdOrder,
    UpcomingOrder = @UpcomingOrder,
    NewMessage = @NewMessage
END
GO
/****** Object:  StoredProcedure [dbo].[sp_UpdateBannerStatus]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
      
CREATE proc[dbo].[sp_UpdateBannerStatus](
    @BannerId    int,
    @Status    int

)
as
begin                         
update tblBannner set
Status = @Status     
where BannerId = @BannerId

end
GO
/****** Object:  StoredProcedure [dbo].[sp_UpdateBookingEventStatus]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE[dbo].[sp_UpdateBookingEventStatus]
@eventBookingId INT,
    @eventBookingStatus INT,
        @eventCompleteDate VARCHAR(50)
AS
BEGIN        
    UPDATE tblEventBooking     
    SET eventBookingStatus = @eventBookingStatus, eventCompleteDate = @eventCompleteDate     
    WHERE eventBookingId = @eventBookingId;
END
GO
/****** Object:  StoredProcedure [dbo].[sp_UpdateCategoryStatus]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
    
CREATE proc[dbo].[sp_UpdateCategoryStatus](
    @DishCategoryId    int,
    @Status    int

)
as
begin                       
update tbl_Dishcategory set
Status = @Status   
where DishCategoryId = @DishCategoryId

end
GO
/****** Object:  StoredProcedure [dbo].[sp_UpdateContactUsStatus]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE[dbo].[sp_UpdateContactUsStatus]
@ContactId INT,
    @status INT,
        @ProblemSolveDate VARCHAR(50)
AS
BEGIN      
    UPDATE tbl_contactus   
    SET status = @status, ProblemSolveDate = @ProblemSolveDate   
    WHERE ContactId = @ContactId;
END
GO
/****** Object:  StoredProcedure [dbo].[sp_UpdateEmployeeStatus]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
    
CREATE proc[dbo].[sp_UpdateEmployeeStatus](
    @EmpId    int,
    @IsActive    int

)
as
begin                       
update tbl_employees set
IsActive = @IsActive 
where EmpId = @EmpId

end
GO
/****** Object:  StoredProcedure [dbo].[sp_UpdateEmpRoleMasterStatus]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_UpdateEmpRoleMasterStatus](
    @RoleId int,
    @Status int
)
as
begin               
update tbl_EmployeeRoleMaster set
Status = @Status        
WHERE RoleId = @RoleId
end
GO
/****** Object:  StoredProcedure [dbo].[sp_UpdateEventStatus]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_UpdateEventStatus](
    @eventID   int,
    @eventStatus    int

)
as
begin                         
update tblEvent set
eventStatus = @eventStatus   
where eventID = @eventID

end
GO
/****** Object:  StoredProcedure [dbo].[sp_UpdateFoodkartStatus]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
  
CREATE proc[dbo].[sp_UpdateFoodkartStatus](
    @DishId    int,
    @DishStatus    int

)
as
begin                     
update tbl_foodkart set
DishStatus = @DishStatus 
where DishId = @DishId

end
GO
/****** Object:  StoredProcedure [dbo].[sp_UpdateFoodVarientStatus]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_UpdateFoodVarientStatus](
    @Id    int,
    @DishStatus    int

)
as
begin                       
update tbl_Variant set
DishStatus = @DishStatus   
where Id = @Id

end
GO
/****** Object:  StoredProcedure [dbo].[sp_UpdateOrderStatus]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE   PROCEDURE[dbo].[sp_UpdateOrderStatus]
@OrderID INT,
    @Status INT,
        @EmpId INT,
            @Email varchar(100),
                @UserEmail varchar(100),
                    @OTP int
AS
BEGIN
IF(@Status = 2)
BEGIN          
        UPDATE tbl_Orders               
        SET Status = @Status,
    OTP = @OTP,
    DboyId = @EmpId  
        WHERE OrderID = @OrderID;           
          
        INSERT INTO DeliveredOrder(OrderId, EmpId, Email, UserEmail, Status)
VALUES(@OrderID, @EmpId, @Email, @UserEmail, @Status);        
          
        SELECT 1 AS StatusCode, 'Updated' AS ResponseText;
END
ELSE
BEGIN
SELECT - 1 AS StatusCode, 'Not Updated' AS ResponseText;
END
END
GO
/****** Object:  StoredProcedure [dbo].[sp_UpdateOrderStatusByDBoy]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE[dbo].[sp_UpdateOrderStatusByDBoy]
@OrderID INT,
    @Status INT,
        @EmpId INT,
            @cancellation_Reason varchar(100)
AS
BEGIN
IF(@Status = 4)
BEGIN    
        UPDATE tbl_Orders         
        SET Status = @Status,
    DeliverDate = GETDATE()  
        WHERE OrderID = @OrderID;     
    
        UPDATE DeliveredOrder         
        SET Status = @Status,
    DeliveredOrCancelledOn = GETDATE(),
    CommitionEarning = 20.0  
        WHERE OrderId = @OrderID and EmpId = @EmpId;   
  
        SELECT 1 AS StatusCode, 'Delivery successful' AS ResponseText;
return
END    
    ELSE IF(@Status = 5)
BEGIN   
	        UPDATE tbl_Orders         
        SET Status = @Status,
    DeliverDate = GETDATE(),
    cancellation_Reason = @cancellation_Reason
        WHERE OrderID = @OrderID; 

      UPDATE DeliveredOrder         
        SET Status = @Status,
    DeliveredOrCancelledOn = GETDATE(),
    CommitionEarning = 5.00,
    cancellation_Reason = @cancellation_Reason
        WHERE OrderId = @OrderID and EmpId = @EmpId;   
  
        SELECT 2 AS StatusCode, 'Not Delivered' AS ResponseText;
return
END
ELSE
BEGIN
SELECT - 1 AS StatusCode, 'Invalid Status' AS ResponseText;
return
END
END
GO
/****** Object:  StoredProcedure [dbo].[sp_UpdatePostalStatus]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
        
CREATE proc[dbo].[sp_UpdatePostalStatus](
    @postal_id       int,
    @Status    int

)
as
begin                           
update PostalCode set
Status = @Status       
where postal_id = @postal_id

end
GO
/****** Object:  StoredProcedure [dbo].[sp_UpdateStatus]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_UpdateStatus]
@AddressId int
As
Begin
update DeliveryAddress set Status = 0 where AddressId = @AddressId;

End
GO
/****** Object:  StoredProcedure [dbo].[sp_UpdateTeakartStatus]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
    
CREATE proc[dbo].[sp_UpdateTeakartStatus](
    @TeaId    int,
    @Status    int

)
as
begin                       
update tbl_teakart set
Status = @Status   
where TeaId = @TeaId

end
GO
/****** Object:  StoredProcedure [dbo].[sp_UpdateUserImageByEmail]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc[dbo].[sp_UpdateUserImageByEmail]
    (@Email varchar(100),
        @Image varchar(100))
as
begin
update tbl_UserPro_Details set

[Image] = IIF(ISNULL(@Image, '') = '', [Image], @Image)   
where Email = @Email;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_UpdateUserProfileById]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc[dbo].[sp_UpdateUserProfileById]
    (@UId varchar(100),
        @BirthDay varchar(50),
        @Phone varchar(50))
as
begin  
update tbl_UserPro_Details set
[BirthDay] = IIF(ISNULL(@BirthDay, '') = '', [BirthDay], @BirthDay),
    Phone = @Phone  
where UId = @UId;
end
GO
/****** Object:  StoredProcedure [dbo].[sp_VerifyOTP]    Script Date: 27-04-2024 10:31:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE[dbo].[sp_VerifyOTP]
@OrderID INT,
    @OTP INT
AS
BEGIN
    IF EXISTS(SELECT 1 FROM tbl_Orders WHERE OrderID = @OrderID AND OTP = @OTP)
BEGIN
        SELECT 1 AS StatusCode, 'Valid OTP' AS ResponseText;
END
ELSE
BEGIN
SELECT - 1 AS StatusCode, 'Invalid OTP' AS ResponseText;
END
END
GO
USE[master]
GO
ALTER DATABASE[RetroReserve] SET  READ_WRITE
GO
