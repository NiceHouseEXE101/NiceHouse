USE [master]
GO
/****** Object:  Database [NiceHouse]    Script Date: 7/31/2024 12:46:44 AM ******/
CREATE DATABASE [NiceHouse]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'NiceHouse', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\NiceHouse.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'NiceHouse_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\NiceHouse_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [NiceHouse] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [NiceHouse].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [NiceHouse] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [NiceHouse] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [NiceHouse] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [NiceHouse] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [NiceHouse] SET ARITHABORT OFF 
GO
ALTER DATABASE [NiceHouse] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [NiceHouse] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [NiceHouse] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [NiceHouse] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [NiceHouse] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [NiceHouse] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [NiceHouse] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [NiceHouse] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [NiceHouse] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [NiceHouse] SET  ENABLE_BROKER 
GO
ALTER DATABASE [NiceHouse] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [NiceHouse] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [NiceHouse] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [NiceHouse] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [NiceHouse] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [NiceHouse] SET READ_COMMITTED_SNAPSHOT ON 
GO
ALTER DATABASE [NiceHouse] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [NiceHouse] SET RECOVERY FULL 
GO
ALTER DATABASE [NiceHouse] SET  MULTI_USER 
GO
ALTER DATABASE [NiceHouse] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [NiceHouse] SET DB_CHAINING OFF 
GO
ALTER DATABASE [NiceHouse] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [NiceHouse] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [NiceHouse] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [NiceHouse] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'NiceHouse', N'ON'
GO
ALTER DATABASE [NiceHouse] SET QUERY_STORE = ON
GO
ALTER DATABASE [NiceHouse] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [NiceHouse]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 7/31/2024 12:46:44 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Dormitories]    Script Date: 7/31/2024 12:46:44 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Dormitories](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](100) NOT NULL,
	[Type] [int] NULL,
	[Address] [nvarchar](200) NOT NULL,
	[Description] [nvarchar](500) NOT NULL,
	[MaxRoomPrice] [decimal](18, 2) NOT NULL,
	[MinRoomPrice] [decimal](18, 2) NOT NULL,
	[NumberOfPeople] [int] NOT NULL,
 CONSTRAINT [PK_Dormitories] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DormitoryImages]    Script Date: 7/31/2024 12:46:44 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DormitoryImages](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Url] [nvarchar](max) NOT NULL,
	[DormitoryId] [int] NOT NULL,
 CONSTRAINT [PK_DormitoryImages] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DormitoryType]    Script Date: 7/31/2024 12:46:44 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DormitoryType](
	[Id] [int] NULL,
	[DormitoryType] [nvarchar](50) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[HotelImages]    Script Date: 7/31/2024 12:46:44 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[HotelImages](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[HotelId] [int] NOT NULL,
	[ImageUrl] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_HotelImages] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Hotels]    Script Date: 7/31/2024 12:46:44 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Hotels](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[Location] [nvarchar](max) NOT NULL,
	[Address] [nvarchar](max) NOT NULL,
	[MinRoomPrice] [decimal](18, 2) NULL,
	[MaxRoomPrice] [decimal](18, 2) NULL,
 CONSTRAINT [PK_Hotels] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Rooms]    Script Date: 7/31/2024 12:46:44 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Rooms](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[HotelId] [int] NOT NULL,
	[RoomTypeId] [int] NOT NULL,
	[IsAvailable] [bit] NOT NULL,
	[DormitoryId] [int] NULL,
 CONSTRAINT [PK_Rooms] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RoomTypeImages]    Script Date: 7/31/2024 12:46:44 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RoomTypeImages](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[RoomTypeId] [int] NOT NULL,
	[ImageUrl] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_RoomTypeImages] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RoomTypes]    Script Date: 7/31/2024 12:46:44 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RoomTypes](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[HotelId] [int] NOT NULL,
	[Price] [decimal](18, 2) NOT NULL,
	[NumberOfBeds] [int] NOT NULL,
	[DormitoryId] [int] NULL,
 CONSTRAINT [PK_RoomTypes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240729093510_InitialCreate', N'7.0.20')
GO
SET IDENTITY_INSERT [dbo].[Dormitories] ON 

INSERT [dbo].[Dormitories] ([Id], [Name], [Type], [Address], [Description], [MaxRoomPrice], [MinRoomPrice], [NumberOfPeople]) VALUES (1, N'Nhà trọ Hà Nội', 0, N'Số 1 Đường Láng, Hà Nội', N'Ký túc xá cho sinh viên', CAST(3000000.00 AS Decimal(18, 2)), CAST(1500000.00 AS Decimal(18, 2)), 80)
INSERT [dbo].[Dormitories] ([Id], [Name], [Type], [Address], [Description], [MaxRoomPrice], [MinRoomPrice], [NumberOfPeople]) VALUES (2, N'Nhà trọ Sài Gòn', 1, N'Số 2 Nguyễn Trãi, TP.HCM', N'Ký túc xá cho công nhân', CAST(3500000.00 AS Decimal(18, 2)), CAST(2000000.00 AS Decimal(18, 2)), 100)
INSERT [dbo].[Dormitories] ([Id], [Name], [Type], [Address], [Description], [MaxRoomPrice], [MinRoomPrice], [NumberOfPeople]) VALUES (3, N'Nhà trọ Đà Nẵng', 2, N'Số 3 Nguyễn Văn Linh, Đà Nẵng', N'Ký túc xá cao cấp', CAST(5000000.00 AS Decimal(18, 2)), CAST(2500000.00 AS Decimal(18, 2)), 70)
INSERT [dbo].[Dormitories] ([Id], [Name], [Type], [Address], [Description], [MaxRoomPrice], [MinRoomPrice], [NumberOfPeople]) VALUES (4, N'Nhà trọ Hải Phòng', 0, N'Số 4 Lạch Tray, Hải Phòng', N'Ký túc xá cho sinh viên', CAST(3200000.00 AS Decimal(18, 2)), CAST(1600000.00 AS Decimal(18, 2)), 75)
INSERT [dbo].[Dormitories] ([Id], [Name], [Type], [Address], [Description], [MaxRoomPrice], [MinRoomPrice], [NumberOfPeople]) VALUES (5, N'Nhà trọ Cần Thơ', 1, N'Số 5 Nguyễn Văn Cừ, Cần Thơ', N'Ký túc xá cho công nhân', CAST(3400000.00 AS Decimal(18, 2)), CAST(1800000.00 AS Decimal(18, 2)), 85)
INSERT [dbo].[Dormitories] ([Id], [Name], [Type], [Address], [Description], [MaxRoomPrice], [MinRoomPrice], [NumberOfPeople]) VALUES (6, N'Nhà trọ Nha Trang', 2, N'Số 6 Trần Phú, Nha Trang', N'Ký túc xá cao cấp', CAST(5200000.00 AS Decimal(18, 2)), CAST(2600000.00 AS Decimal(18, 2)), 65)
INSERT [dbo].[Dormitories] ([Id], [Name], [Type], [Address], [Description], [MaxRoomPrice], [MinRoomPrice], [NumberOfPeople]) VALUES (7, N'Nhà trọ Vinh', 0, N'Số 7 Nguyễn Văn Cừ, Vinh', N'Ký túc xá cho sinh viên', CAST(3100000.00 AS Decimal(18, 2)), CAST(1700000.00 AS Decimal(18, 2)), 90)
INSERT [dbo].[Dormitories] ([Id], [Name], [Type], [Address], [Description], [MaxRoomPrice], [MinRoomPrice], [NumberOfPeople]) VALUES (8, N'Nhà trọ Quy Nhơn', 1, N'Số 8 Nguyễn Huệ, Quy Nhơn', N'Ký túc xá cho công nhân', CAST(3300000.00 AS Decimal(18, 2)), CAST(1900000.00 AS Decimal(18, 2)), 95)
INSERT [dbo].[Dormitories] ([Id], [Name], [Type], [Address], [Description], [MaxRoomPrice], [MinRoomPrice], [NumberOfPeople]) VALUES (9, N'Nhà trọ Huế', 2, N'Số 9 Trường Chinh, Huế', N'Ký túc xá cao cấp', CAST(5300000.00 AS Decimal(18, 2)), CAST(2700000.00 AS Decimal(18, 2)), 60)
INSERT [dbo].[Dormitories] ([Id], [Name], [Type], [Address], [Description], [MaxRoomPrice], [MinRoomPrice], [NumberOfPeople]) VALUES (10, N'Nhà trọ Đồng Nai', 0, N'Số 10 Nguyễn Ái Quốc, Đồng Nai', N'Ký túc xá cho sinh viên', CAST(3200000.00 AS Decimal(18, 2)), CAST(1600000.00 AS Decimal(18, 2)), 80)
INSERT [dbo].[Dormitories] ([Id], [Name], [Type], [Address], [Description], [MaxRoomPrice], [MinRoomPrice], [NumberOfPeople]) VALUES (11, N'Nhà trọ Long An', 1, N'Số 11 QL1A, Long An', N'Ký túc xá cho công nhân', CAST(3400000.00 AS Decimal(18, 2)), CAST(1800000.00 AS Decimal(18, 2)), 85)
INSERT [dbo].[Dormitories] ([Id], [Name], [Type], [Address], [Description], [MaxRoomPrice], [MinRoomPrice], [NumberOfPeople]) VALUES (12, N'Nhà trọ Bà Rịa', 2, N'Số 12 Hạ Long, Bà Rịa', N'Ký túc xá cao cấp', CAST(5400000.00 AS Decimal(18, 2)), CAST(2800000.00 AS Decimal(18, 2)), 55)
INSERT [dbo].[Dormitories] ([Id], [Name], [Type], [Address], [Description], [MaxRoomPrice], [MinRoomPrice], [NumberOfPeople]) VALUES (13, N'Nhà trọ Quảng Ngãi', 0, N'Số 13 Nguyễn Thị Minh Khai, Quảng Ngãi', N'Ký túc xá cho sinh viên', CAST(3100000.00 AS Decimal(18, 2)), CAST(1500000.00 AS Decimal(18, 2)), 70)
INSERT [dbo].[Dormitories] ([Id], [Name], [Type], [Address], [Description], [MaxRoomPrice], [MinRoomPrice], [NumberOfPeople]) VALUES (14, N'Nhà trọ Tây Ninh', 1, N'Số 14 Cách Mạng Tháng Tám, Tây Ninh', N'Ký túc xá cho công nhân', CAST(3300000.00 AS Decimal(18, 2)), CAST(1700000.00 AS Decimal(18, 2)), 85)
INSERT [dbo].[Dormitories] ([Id], [Name], [Type], [Address], [Description], [MaxRoomPrice], [MinRoomPrice], [NumberOfPeople]) VALUES (15, N'Nhà trọ Phan Thiết', 2, N'Số 15 Đường 1/4, Phan Thiết', N'Ký túc xá cao cấp', CAST(5500000.00 AS Decimal(18, 2)), CAST(2900000.00 AS Decimal(18, 2)), 50)
INSERT [dbo].[Dormitories] ([Id], [Name], [Type], [Address], [Description], [MaxRoomPrice], [MinRoomPrice], [NumberOfPeople]) VALUES (16, N'Nhà trọ Pleiku', 0, N'Số 16 Hùng Vương, Pleiku', N'Ký túc xá cho sinh viên', CAST(3200000.00 AS Decimal(18, 2)), CAST(1600000.00 AS Decimal(18, 2)), 75)
INSERT [dbo].[Dormitories] ([Id], [Name], [Type], [Address], [Description], [MaxRoomPrice], [MinRoomPrice], [NumberOfPeople]) VALUES (17, N'Nhà trọ Đắk Lắk', 1, N'Số 17 Phan Bội Châu, Đắk Lắk', N'Ký túc xá cho công nhân', CAST(3400000.00 AS Decimal(18, 2)), CAST(1800000.00 AS Decimal(18, 2)), 90)
INSERT [dbo].[Dormitories] ([Id], [Name], [Type], [Address], [Description], [MaxRoomPrice], [MinRoomPrice], [NumberOfPeople]) VALUES (18, N'Nhà trọ Bến Tre', 2, N'Số 18 Nguyễn Trãi, Bến Tre', N'Ký túc xá cao cấp', CAST(5300000.00 AS Decimal(18, 2)), CAST(2600000.00 AS Decimal(18, 2)), 65)
INSERT [dbo].[Dormitories] ([Id], [Name], [Type], [Address], [Description], [MaxRoomPrice], [MinRoomPrice], [NumberOfPeople]) VALUES (19, N'Nhà trọ Ninh Thuận', 0, N'Số 19 Nguyễn Tất Thành, Ninh Thuận', N'Ký túc xá cho sinh viên', CAST(3100000.00 AS Decimal(18, 2)), CAST(1500000.00 AS Decimal(18, 2)), 80)
INSERT [dbo].[Dormitories] ([Id], [Name], [Type], [Address], [Description], [MaxRoomPrice], [MinRoomPrice], [NumberOfPeople]) VALUES (20, N'Nhà trọ Gia Lai', 1, N'Số 20 Đinh Tiên Hoàng, Gia Lai', N'Ký túc xá cho công nhân', CAST(3300000.00 AS Decimal(18, 2)), CAST(1700000.00 AS Decimal(18, 2)), 85)
SET IDENTITY_INSERT [dbo].[Dormitories] OFF
GO
SET IDENTITY_INSERT [dbo].[DormitoryImages] ON 

INSERT [dbo].[DormitoryImages] ([Id], [Url], [DormitoryId]) VALUES (1, N'https://movic.vn/wp-content/uploads/2021/12/thiet-ke-phong-tro-15m2-dep-1.jpg', 1)
INSERT [dbo].[DormitoryImages] ([Id], [Url], [DormitoryId]) VALUES (2, N'https://movic.vn/wp-content/uploads/2021/12/thiet-ke-phong-tro-15m2-dep-2.jpg', 2)
INSERT [dbo].[DormitoryImages] ([Id], [Url], [DormitoryId]) VALUES (3, N'https://movic.vn/wp-content/uploads/2021/12/thiet-ke-phong-tro-15m2-dep-4.jpg', 3)
INSERT [dbo].[DormitoryImages] ([Id], [Url], [DormitoryId]) VALUES (4, N'https://movic.vn/wp-content/uploads/2021/12/thiet-ke-phong-tro-15m2-dep-5.jpg', 4)
INSERT [dbo].[DormitoryImages] ([Id], [Url], [DormitoryId]) VALUES (5, N'https://movic.vn/wp-content/uploads/2021/12/thiet-ke-phong-tro-15m2-dep-6.jpg', 5)
INSERT [dbo].[DormitoryImages] ([Id], [Url], [DormitoryId]) VALUES (6, N'https://movic.vn/wp-content/uploads/2021/12/thiet-ke-phong-tro-15m2-dep-8.jpg', 6)
INSERT [dbo].[DormitoryImages] ([Id], [Url], [DormitoryId]) VALUES (7, N'https://spacet-release.s3.ap-southeast-1.amazonaws.com/img/blog/2023-10-04/mau-thiet-ke-toi-gian-651cda65c9649b0ef5c6f426.webp', 7)
INSERT [dbo].[DormitoryImages] ([Id], [Url], [DormitoryId]) VALUES (8, N'https://spacet-release.s3.ap-southeast-1.amazonaws.com/img/blog/2023-10-04/guong-duoc-van-dung-giup-an-gian-dien-tich-651cda66c9649b0ef5c6f441.webp', 8)
INSERT [dbo].[DormitoryImages] ([Id], [Url], [DormitoryId]) VALUES (9, N'https://spacet-release.s3.ap-southeast-1.amazonaws.com/img/blog/2023-10-04/mau-thiet-ke-phong-tro-dep-duoc-bo-tri-noi-that-hop-ly-651cda67c9649b0ef5c6f498.webp', 9)
INSERT [dbo].[DormitoryImages] ([Id], [Url], [DormitoryId]) VALUES (10, N'https://i-connect.com.vn/data/news/7046/anh-2-phong-tro-rong.jpg', 10)
INSERT [dbo].[DormitoryImages] ([Id], [Url], [DormitoryId]) VALUES (11, N'https://i-connect.com.vn/data/news/7046/anh-3-phan-loai-theo-cong-nang.jpg', 11)
INSERT [dbo].[DormitoryImages] ([Id], [Url], [DormitoryId]) VALUES (12, N'https://i-connect.com.vn/data/news/7046/anh-15-thiet-ke-phong-tro-phu-hop-doi-tuong.jpg', 12)
INSERT [dbo].[DormitoryImages] ([Id], [Url], [DormitoryId]) VALUES (13, N'https://i-connect.com.vn/data/news/7046/anh-17-mau-phong-tro-dep-hop-ly.jpg', 13)
INSERT [dbo].[DormitoryImages] ([Id], [Url], [DormitoryId]) VALUES (14, N'https://i-connect.com.vn/data/news/7046/anh-19-bo-tri-khong-gian-thiet-ke-phong-tro-hop-ly.jpg', 14)
INSERT [dbo].[DormitoryImages] ([Id], [Url], [DormitoryId]) VALUES (15, N'https://i-connect.com.vn/data/news/7046/anh-21-do-noi-that-dep-phong-tro.png', 15)
INSERT [dbo].[DormitoryImages] ([Id], [Url], [DormitoryId]) VALUES (16, N'https://i-connect.com.vn/data/news/7046/anh-23-mot-thiet-ke-phong-tro-dep-chi-phi-hop-ly.jpg', 16)
INSERT [dbo].[DormitoryImages] ([Id], [Url], [DormitoryId]) VALUES (17, N'https://i-connect.com.vn/data/news/7046/anh-25-mau-phong-tro-thiet-ke-hien-dai.jpg', 17)
INSERT [dbo].[DormitoryImages] ([Id], [Url], [DormitoryId]) VALUES (18, N'https://i-connect.com.vn/data/news/7046/anh-26-thiet-ke-phong-tro-toi-gian.jpg', 18)
INSERT [dbo].[DormitoryImages] ([Id], [Url], [DormitoryId]) VALUES (19, N'https://i-connect.com.vn/data/news/7046/anh-30-phong-tro-khong-gian-am-cung.jpg', 19)
INSERT [dbo].[DormitoryImages] ([Id], [Url], [DormitoryId]) VALUES (20, N'https://i-connect.com.vn/data/news/7046/anh-31-khong-gian-am-cung-trong-phong-tro.jpg', 20)
SET IDENTITY_INSERT [dbo].[DormitoryImages] OFF
GO
INSERT [dbo].[DormitoryType] ([Id], [DormitoryType]) VALUES (1, N'High End Apartment')
INSERT [dbo].[DormitoryType] ([Id], [DormitoryType]) VALUES (2, N'Social Housing')
INSERT [dbo].[DormitoryType] ([Id], [DormitoryType]) VALUES (3, N'Affordable Dormitory')
GO
SET IDENTITY_INSERT [dbo].[HotelImages] ON 

INSERT [dbo].[HotelImages] ([Id], [HotelId], [ImageUrl]) VALUES (1, 1, N'https://leisure-travel.vn/wp-content/uploads/2023/11/Festive-14.jpg')
INSERT [dbo].[HotelImages] ([Id], [HotelId], [ImageUrl]) VALUES (2, 2, N'https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20006811-db21ad1f1548f64243c4bd116d03932b.jpeg')
INSERT [dbo].[HotelImages] ([Id], [HotelId], [ImageUrl]) VALUES (3, 3, N'https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20021604-ed41fa94310cc6d114190331e975a4b4.jpeg')
INSERT [dbo].[HotelImages] ([Id], [HotelId], [ImageUrl]) VALUES (4, 4, N'https://ik.imagekit.io/tvlk/blog/2023/09/review-khach-san-o-hue-acc-3.webp?tr=dpr-2,w-675')
INSERT [dbo].[HotelImages] ([Id], [HotelId], [ImageUrl]) VALUES (5, 5, N'https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/20062798-6a8882468412beb2a07c719ba4c44c60.jpeg')
INSERT [dbo].[HotelImages] ([Id], [HotelId], [ImageUrl]) VALUES (6, 6, N'https://ik.imagekit.io/tvlk/blog/2023/10/Rc1zYwNa-1.jpg?tr=dpr-2,w-675')
INSERT [dbo].[HotelImages] ([Id], [HotelId], [ImageUrl]) VALUES (7, 7, N'https://pix10.agoda.net/hotelImages/17242876/-1/77f13db2325ef043d92a740cc551e1f8.jpg?ca=19&ce=1&s=702x392')
INSERT [dbo].[HotelImages] ([Id], [HotelId], [ImageUrl]) VALUES (8, 8, N'https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10021101-2048x1365-FIT_AND_TRIM-b2e4f7737aa95223da9ed6a63383fd92.jpeg')
INSERT [dbo].[HotelImages] ([Id], [HotelId], [ImageUrl]) VALUES (9, 9, N'https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10024305-1000x667-FIT_AND_TRIM-5ff92e7024771bfdd7f819b31218c054.png')
INSERT [dbo].[HotelImages] ([Id], [HotelId], [ImageUrl]) VALUES (10, 10, N'https://ik.imagekit.io/tvlk/blog/2022/06/khach-san-trung-tam-Hai-Phong-12-1024x683.jpg?tr=dpr-2,w-675')
INSERT [dbo].[HotelImages] ([Id], [HotelId], [ImageUrl]) VALUES (11, 11, N'https://ik.imagekit.io/tvlk/blog/2023/09/khach-san-view-bien-quy-nhon-56.jpeg?tr=dpr-2,w-675')
INSERT [dbo].[HotelImages] ([Id], [HotelId], [ImageUrl]) VALUES (12, 12, N'https://ik.imagekit.io/tvlk/apr-asset/rvN7CENfvyT2YVqT-7R6UjRIibYDnsWI+-nAv8mJ7GI=/150204/photos/75591749_XL.jpg')
INSERT [dbo].[HotelImages] ([Id], [HotelId], [ImageUrl]) VALUES (13, 13, N'https://ik.imagekit.io/tvlk/blog/2023/10/review-khach-san-sapa-acc-4.webp?tr=dpr-2,w-675')
INSERT [dbo].[HotelImages] ([Id], [HotelId], [ImageUrl]) VALUES (14, 14, N'https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10029847-57f02d73505fb2a055c750bb914c7a38.jpeg')
INSERT [dbo].[HotelImages] ([Id], [HotelId], [ImageUrl]) VALUES (15, 15, N'https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20017322-7df0eae126f2c232a0c07ee77dff0ef9.jpeg')
INSERT [dbo].[HotelImages] ([Id], [HotelId], [ImageUrl]) VALUES (16, 16, N'https://pix10.agoda.net/hotelImages/38722254/-1/426d0b3518e10b8b23d6ff3e7093a4ea.jpg?ce=0&s=414x232&ar=16x9')
INSERT [dbo].[HotelImages] ([Id], [HotelId], [ImageUrl]) VALUES (17, 17, N'https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10038931-28e2cd6f219d6aa43d850fc8631ab25c.jpeg')
INSERT [dbo].[HotelImages] ([Id], [HotelId], [ImageUrl]) VALUES (18, 18, N'https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/10041068-f05db037f06933a0eb1cf9ded2a81bb6.jpeg?tr=q-40,c-at_max,w-740,h-500&_src=imagekit')
INSERT [dbo].[HotelImages] ([Id], [HotelId], [ImageUrl]) VALUES (19, 19, N'https://ik.imagekit.io/tvlk/image/imageResource/2024/06/10/1718007977382-65f9218ae4739fa23ec4b642728e92c9.png')
INSERT [dbo].[HotelImages] ([Id], [HotelId], [ImageUrl]) VALUES (20, 20, N'https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/20067960-d05ed937f2b8214302ed1f670dae1405.jpeg')
SET IDENTITY_INSERT [dbo].[HotelImages] OFF
GO
SET IDENTITY_INSERT [dbo].[Hotels] ON 

INSERT [dbo].[Hotels] ([Id], [Name], [Location], [Address], [MinRoomPrice], [MaxRoomPrice]) VALUES (1, N'Khách sạn Hà Nội', N'Hà Nội', N'123, Trần Duy Hưng', CAST(500000.00 AS Decimal(18, 2)), CAST(1500000.00 AS Decimal(18, 2)))
INSERT [dbo].[Hotels] ([Id], [Name], [Location], [Address], [MinRoomPrice], [MaxRoomPrice]) VALUES (2, N'Khách sạn Sài Gòn', N'TP. Hồ Chí Minh', N'456, Nguyễn Huệ', CAST(700000.00 AS Decimal(18, 2)), CAST(2000000.00 AS Decimal(18, 2)))
INSERT [dbo].[Hotels] ([Id], [Name], [Location], [Address], [MinRoomPrice], [MaxRoomPrice]) VALUES (3, N'Khách sạn Đà Nẵng', N'Đà Nẵng', N'789, Bạch Đằng', CAST(600000.00 AS Decimal(18, 2)), CAST(1800000.00 AS Decimal(18, 2)))
INSERT [dbo].[Hotels] ([Id], [Name], [Location], [Address], [MinRoomPrice], [MaxRoomPrice]) VALUES (4, N'Khách sạn Huế', N'Huế', N'101, Hùng Vương', CAST(400000.00 AS Decimal(18, 2)), CAST(1200000.00 AS Decimal(18, 2)))
INSERT [dbo].[Hotels] ([Id], [Name], [Location], [Address], [MinRoomPrice], [MaxRoomPrice]) VALUES (5, N'Khách sạn Hội An', N'Hội An', N'202, Trần Phú', CAST(500000.00 AS Decimal(18, 2)), CAST(1500000.00 AS Decimal(18, 2)))
INSERT [dbo].[Hotels] ([Id], [Name], [Location], [Address], [MinRoomPrice], [MaxRoomPrice]) VALUES (6, N'Khách sạn Nha Trang', N'Nha Trang', N'303, Trần Phú', CAST(800000.00 AS Decimal(18, 2)), CAST(2500000.00 AS Decimal(18, 2)))
INSERT [dbo].[Hotels] ([Id], [Name], [Location], [Address], [MinRoomPrice], [MaxRoomPrice]) VALUES (7, N'Khách sạn Phú Quốc', N'Phú Quốc', N'404, Trần Hưng Đạo', CAST(1000000.00 AS Decimal(18, 2)), CAST(3000000.00 AS Decimal(18, 2)))
INSERT [dbo].[Hotels] ([Id], [Name], [Location], [Address], [MinRoomPrice], [MaxRoomPrice]) VALUES (8, N'Khách sạn Vũng Tàu', N'Vũng Tàu', N'505, Thùy Vân', CAST(700000.00 AS Decimal(18, 2)), CAST(2000000.00 AS Decimal(18, 2)))
INSERT [dbo].[Hotels] ([Id], [Name], [Location], [Address], [MinRoomPrice], [MaxRoomPrice]) VALUES (9, N'Khách sạn Cần Thơ', N'Cần Thơ', N'606, Hai Bà Trưng', CAST(600000.00 AS Decimal(18, 2)), CAST(1800000.00 AS Decimal(18, 2)))
INSERT [dbo].[Hotels] ([Id], [Name], [Location], [Address], [MinRoomPrice], [MaxRoomPrice]) VALUES (10, N'Khách sạn Hải Phòng', N'Hải Phòng', N'707, Điện Biên Phủ', CAST(500000.00 AS Decimal(18, 2)), CAST(1500000.00 AS Decimal(18, 2)))
INSERT [dbo].[Hotels] ([Id], [Name], [Location], [Address], [MinRoomPrice], [MaxRoomPrice]) VALUES (11, N'Khách sạn Quy Nhơn', N'Quy Nhơn', N'808, An Dương Vương', CAST(700000.00 AS Decimal(18, 2)), CAST(2000000.00 AS Decimal(18, 2)))
INSERT [dbo].[Hotels] ([Id], [Name], [Location], [Address], [MinRoomPrice], [MaxRoomPrice]) VALUES (12, N'Khách sạn Bình Thuận', N'Bình Thuận', N'909, Nguyễn Đình Chiểu', CAST(600000.00 AS Decimal(18, 2)), CAST(1800000.00 AS Decimal(18, 2)))
INSERT [dbo].[Hotels] ([Id], [Name], [Location], [Address], [MinRoomPrice], [MaxRoomPrice]) VALUES (13, N'Khách sạn Sapa', N'Sapa', N'1010, Fansipan', CAST(800000.00 AS Decimal(18, 2)), CAST(2500000.00 AS Decimal(18, 2)))
INSERT [dbo].[Hotels] ([Id], [Name], [Location], [Address], [MinRoomPrice], [MaxRoomPrice]) VALUES (14, N'Khách sạn Mộc Châu', N'Mộc Châu', N'1111, Nguyễn Hoàng', CAST(400000.00 AS Decimal(18, 2)), CAST(1200000.00 AS Decimal(18, 2)))
INSERT [dbo].[Hotels] ([Id], [Name], [Location], [Address], [MinRoomPrice], [MaxRoomPrice]) VALUES (15, N'Khách sạn Bắc Ninh', N'Bắc Ninh', N'1212, Lý Thái Tổ', CAST(500000.00 AS Decimal(18, 2)), CAST(1500000.00 AS Decimal(18, 2)))
INSERT [dbo].[Hotels] ([Id], [Name], [Location], [Address], [MinRoomPrice], [MaxRoomPrice]) VALUES (16, N'Khách sạn Hạ Long', N'Hạ Long', N'1313, Hạ Long', CAST(1000000.00 AS Decimal(18, 2)), CAST(3000000.00 AS Decimal(18, 2)))
INSERT [dbo].[Hotels] ([Id], [Name], [Location], [Address], [MinRoomPrice], [MaxRoomPrice]) VALUES (17, N'Khách sạn Quảng Bình', N'Quảng Bình', N'1414, Lý Thường Kiệt', CAST(600000.00 AS Decimal(18, 2)), CAST(1800000.00 AS Decimal(18, 2)))
INSERT [dbo].[Hotels] ([Id], [Name], [Location], [Address], [MinRoomPrice], [MaxRoomPrice]) VALUES (18, N'Khách sạn Pleiku', N'Pleiku', N'1515, Trần Hưng Đạo', CAST(500000.00 AS Decimal(18, 2)), CAST(1500000.00 AS Decimal(18, 2)))
INSERT [dbo].[Hotels] ([Id], [Name], [Location], [Address], [MinRoomPrice], [MaxRoomPrice]) VALUES (19, N'Khách sạn Thanh Hóa', N'Thanh Hóa', N'1616, Lê Lợi', CAST(700000.00 AS Decimal(18, 2)), CAST(2000000.00 AS Decimal(18, 2)))
INSERT [dbo].[Hotels] ([Id], [Name], [Location], [Address], [MinRoomPrice], [MaxRoomPrice]) VALUES (20, N'Khách sạn Vinh', N'Vinh', N'1717, Quang Trung', CAST(600000.00 AS Decimal(18, 2)), CAST(1800000.00 AS Decimal(18, 2)))
SET IDENTITY_INSERT [dbo].[Hotels] OFF
GO
SET IDENTITY_INSERT [dbo].[Rooms] ON 

INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (1, 1, 1, 1, 1)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (2, 1, 2, 1, 1)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (3, 2, 3, 1, 2)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (4, 2, 4, 1, 2)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (5, 3, 5, 1, 3)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (6, 3, 6, 1, 3)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (7, 4, 7, 1, 4)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (8, 4, 8, 1, 4)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (9, 5, 9, 1, 5)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (10, 5, 10, 1, 5)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (11, 6, 1, 1, 6)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (12, 6, 2, 1, 6)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (13, 7, 3, 1, 7)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (14, 7, 4, 1, 7)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (15, 8, 5, 1, 8)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (16, 8, 6, 1, 8)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (17, 9, 7, 1, 9)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (18, 9, 8, 1, 9)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (19, 10, 9, 1, 10)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (20, 10, 10, 1, 10)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (21, 11, 11, 1, 11)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (22, 11, 12, 1, 11)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (23, 12, 13, 1, 12)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (24, 12, 14, 1, 12)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (25, 13, 15, 1, 13)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (26, 13, 16, 1, 13)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (27, 14, 17, 1, 14)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (28, 14, 18, 1, 14)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (29, 15, 19, 1, 15)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (30, 15, 20, 1, 15)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (31, 16, 21, 1, 16)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (32, 16, 22, 1, 16)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (33, 17, 23, 1, 17)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (34, 17, 24, 1, 17)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (35, 18, 25, 1, 18)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (36, 18, 26, 1, 18)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (37, 19, 27, 1, 19)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (38, 19, 28, 1, 19)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (39, 20, 29, 1, 20)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (40, 20, 30, 1, 20)
SET IDENTITY_INSERT [dbo].[Rooms] OFF
GO
SET IDENTITY_INSERT [dbo].[RoomTypeImages] ON 

INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (1, 1, N'https://dyf.vn/wp-content/uploads/2021/10/phong-don-la-gi-tieu-chuan-cach-phan-loai-va-goi-ten_6172694cf3073.jpeg')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (2, 2, N'data:image/jpeg;base64,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')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (3, 3, N'data:image/jpeg;base64,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')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (4, 4, N'data:image/jpeg;base64,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')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (5, 5, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmphnmXhkGuEzKDRombi_g-x36_Sj4Pz5bBg&s')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (6, 6, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeGDZC14z7yfdi3fI2IplrHiVEpTgnXawBOQ&s')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (7, 7, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTGpIViCCa1ZKejE6oZaV5gmzT1QNdqbHgTA&s')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (8, 8, N'https://vinapad.com/wp-content/uploads/2019/04/phong-studio-suite-la-gi-6.jpg')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (9, 9, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToJoBru77nGgpmzYqElL6QVyrJYAud5kSCCA&s')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (10, 10, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXF74FTEMaL7hbp5e8eZlrwGxnDMHty1kQqw&s')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (11, 11, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbJJL5WX9fLMPtdctkcc-lGLv2VyZXt9gMhQ&s')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (12, 12, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3cmu-uYYzxYeP8txtCbu9-F57bvvY3SIomg&s')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (13, 13, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE32e4yyPR50HYqbFMVH1DUmrTkTJgJoaTFg&s')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (14, 14, N'https://cdn3.ivivu.com/2017/12/ben-trong-phong-khach-san-dat-nhat-the-gioi-ivivu-2.jpg')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (15, 15, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeL31YKBtfqMPDNzC9OFVGTiwZ_N1CXklW7A&s')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (16, 16, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlKMCvkPEPFwvxu-QLbgiTJ6z4CzvxeW8Cpg&s')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (17, 17, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRO4ssP-fSS4FYHNSK9eLrF_yKRFEAmuxaQQ&s')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (18, 18, N'https://landmark72.intercontinental.com/uploads/landmark72/Accommodation/Royal_suite/room_23%20v2.jpg')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (19, 19, N'https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/283/2022/11/15060710/Grand-Deluxe-Room.-370x276.jpg')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (20, 20, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREPqRJ3k6O-cIzLlMwS9YoLdAIXs6nbJWNPQ&s')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (21, 21, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5lJa3aFKkRzCCpGvrtBRu3OJx7PylkElvjw&s')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (22, 22, N'https://static1.cafeland.vn/cafelandnew/hinh-anh/2022/09/26/153/khacsan5sao1.jpg')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (23, 23, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsymBD1ahZs5zC3sAzNJnhzMNqr-qdbItNkQ&s')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (24, 24, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-v0Mht3raJJZSjhS03RIF3HZBlHbZPm3OWg&s')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (25, 25, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3cmu-uYYzxYeP8txtCbu9-F57bvvY3SIomg&s')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (26, 26, N'https://cdn3.ivivu.com/2017/12/ben-trong-phong-khach-san-dat-nhat-the-gioi-ivivu-2.jpg')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (27, 27, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTGpIViCCa1ZKejE6oZaV5gmzT1QNdqbHgTA&s')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (28, 28, N'https://vinapad.com/wp-content/uploads/2019/04/phong-studio-suite-la-gi-6.jpg')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (29, 29, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2mkcNGgZIesdMTDWpMRBcIykjogp7Sc3gAA&s')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (30, 30, N'https://potiquehotel.com/uploads/files/2022/10/12/potique-hotel-nha-trang-classic-room.JPG')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (31, 31, N'https://www.thereveriesaigon.com/wp-content/uploads/2021/11/The-Grand-Deluxe-Header-Top-of-page-1920x1080-1.jpg')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (32, 32, N'https://saigonninhchuhotel.com.vn/wp-content/uploads/2020/03/R5_8274-1170x600.jpg')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (33, 33, N'https://cf.bstatic.com/xdata/images/hotel/max1024x768/266338754.jpg?k=5306d2a5a9f12adc85c74227dc0d035401521561a635cdf8e1c53ee06a1b5565&o=&hp=1')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (34, 34, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYnEqyyIJpxoOo3MXLMNA-ZTVPwtkcXb9BuQ&s')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (35, 35, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLqE343Xr2fFobD5Ch7E7tbk52jm50TfLvjA&s')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (36, 36, N'https://ezcloud.vn/wp-content/uploads/2023/10/family-suite-la-gi.webp')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (37, 37, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiDSIbcBFHyBclOWx5wphLXSu2XX8tucUHuA&s')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (38, 38, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlMnuIW3iZS6LeiaA723iKOmahnB7nMcZr1A&s')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (39, 39, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTGpIViCCa1ZKejE6oZaV5gmzT1QNdqbHgTA&s')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (40, 40, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCjpIuYo990xeQzRwFpMlLoAFSzft1dgdzmA&s')
SET IDENTITY_INSERT [dbo].[RoomTypeImages] OFF
GO
SET IDENTITY_INSERT [dbo].[RoomTypes] ON 

INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (1, N'Phòng đơn', 1, CAST(500000.00 AS Decimal(18, 2)), 1, 1)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (2, N'Phòng đôi', 1, CAST(700000.00 AS Decimal(18, 2)), 2, 1)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (3, N'Phòng gia đình', 2, CAST(1200000.00 AS Decimal(18, 2)), 3, 2)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (4, N'Phòng VIP', 2, CAST(2000000.00 AS Decimal(18, 2)), 2, 2)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (5, N'Phòng Superior', 3, CAST(900000.00 AS Decimal(18, 2)), 2, 3)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (6, N'Phòng Deluxe', 3, CAST(1500000.00 AS Decimal(18, 2)), 2, 3)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (7, N'Phòng Suite', 4, CAST(2500000.00 AS Decimal(18, 2)), 3, 4)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (8, N'Phòng Studio', 4, CAST(800000.00 AS Decimal(18, 2)), 1, 4)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (9, N'Phòng Executive', 5, CAST(1800000.00 AS Decimal(18, 2)), 2, 5)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (10, N'Phòng Economy', 5, CAST(400000.00 AS Decimal(18, 2)), 1, 5)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (11, N'Phòng Standard', 6, CAST(600000.00 AS Decimal(18, 2)), 1, 6)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (12, N'Phòng Comfort', 6, CAST(850000.00 AS Decimal(18, 2)), 2, 6)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (13, N'Phòng Luxury', 7, CAST(1700000.00 AS Decimal(18, 2)), 2, 7)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (14, N'Phòng Penthouse', 7, CAST(3000000.00 AS Decimal(18, 2)), 3, 7)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (15, N'Phòng Grand', 8, CAST(1300000.00 AS Decimal(18, 2)), 2, 8)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (16, N'Phòng Classic', 8, CAST(750000.00 AS Decimal(18, 2)), 1, 8)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (17, N'Phòng Premier', 9, CAST(1900000.00 AS Decimal(18, 2)), 2, 9)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (18, N'Phòng Royal', 9, CAST(2200000.00 AS Decimal(18, 2)), 3, 9)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (19, N'Phòng Executive Deluxe', 10, CAST(1500000.00 AS Decimal(18, 2)), 2, 10)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (20, N'Phòng Family Suite', 10, CAST(2500000.00 AS Decimal(18, 2)), 3, 10)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (21, N'Phòng Tiêu Chuẩn', 11, CAST(650000.00 AS Decimal(18, 2)), 1, 11)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (22, N'Phòng Cao Cấp', 11, CAST(950000.00 AS Decimal(18, 2)), 2, 11)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (23, N'Phòng Superior', 12, CAST(800000.00 AS Decimal(18, 2)), 2, 12)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (24, N'Phòng Executive', 12, CAST(1200000.00 AS Decimal(18, 2)), 3, 12)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (25, N'Phòng Comfort', 13, CAST(700000.00 AS Decimal(18, 2)), 2, 13)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (26, N'Phòng Penthouse', 13, CAST(2200000.00 AS Decimal(18, 2)), 3, 13)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (27, N'Phòng Suite', 14, CAST(2500000.00 AS Decimal(18, 2)), 3, 14)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (28, N'Phòng Studio', 14, CAST(900000.00 AS Decimal(18, 2)), 1, 14)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (29, N'Phòng Premier', 15, CAST(2000000.00 AS Decimal(18, 2)), 2, 15)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (30, N'Phòng Classic', 15, CAST(750000.00 AS Decimal(18, 2)), 1, 15)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (31, N'Phòng Grand', 16, CAST(1300000.00 AS Decimal(18, 2)), 2, 16)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (32, N'Phòng Economy', 16, CAST(400000.00 AS Decimal(18, 2)), 1, 16)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (33, N'Phòng Luxury', 17, CAST(1700000.00 AS Decimal(18, 2)), 2, 17)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (34, N'Phòng Royal', 17, CAST(2200000.00 AS Decimal(18, 2)), 3, 17)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (35, N'Phòng Executive Deluxe', 18, CAST(1500000.00 AS Decimal(18, 2)), 2, 18)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (36, N'Phòng Family Suite', 18, CAST(2500000.00 AS Decimal(18, 2)), 3, 18)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (37, N'Phòng Tiêu Chuẩn', 19, CAST(700000.00 AS Decimal(18, 2)), 1, 19)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (38, N'Phòng Cao Cấp', 19, CAST(1000000.00 AS Decimal(18, 2)), 2, 19)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (39, N'Phòng Suite', 20, CAST(2500000.00 AS Decimal(18, 2)), 3, 20)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (40, N'Phòng Studio', 20, CAST(850000.00 AS Decimal(18, 2)), 1, 20)
SET IDENTITY_INSERT [dbo].[RoomTypes] OFF
GO
/****** Object:  Index [IX_DormitoryImages_DormitoryId]    Script Date: 7/31/2024 12:46:44 AM ******/
CREATE NONCLUSTERED INDEX [IX_DormitoryImages_DormitoryId] ON [dbo].[DormitoryImages]
(
	[DormitoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_HotelImages_HotelId]    Script Date: 7/31/2024 12:46:44 AM ******/
CREATE NONCLUSTERED INDEX [IX_HotelImages_HotelId] ON [dbo].[HotelImages]
(
	[HotelId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Rooms_DormitoryId]    Script Date: 7/31/2024 12:46:44 AM ******/
CREATE NONCLUSTERED INDEX [IX_Rooms_DormitoryId] ON [dbo].[Rooms]
(
	[DormitoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Rooms_HotelId]    Script Date: 7/31/2024 12:46:44 AM ******/
CREATE NONCLUSTERED INDEX [IX_Rooms_HotelId] ON [dbo].[Rooms]
(
	[HotelId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Rooms_RoomTypeId]    Script Date: 7/31/2024 12:46:44 AM ******/
CREATE NONCLUSTERED INDEX [IX_Rooms_RoomTypeId] ON [dbo].[Rooms]
(
	[RoomTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_RoomTypeImages_RoomTypeId]    Script Date: 7/31/2024 12:46:44 AM ******/
CREATE NONCLUSTERED INDEX [IX_RoomTypeImages_RoomTypeId] ON [dbo].[RoomTypeImages]
(
	[RoomTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_RoomTypes_DormitoryId]    Script Date: 7/31/2024 12:46:44 AM ******/
CREATE NONCLUSTERED INDEX [IX_RoomTypes_DormitoryId] ON [dbo].[RoomTypes]
(
	[DormitoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_RoomTypes_HotelId]    Script Date: 7/31/2024 12:46:44 AM ******/
CREATE NONCLUSTERED INDEX [IX_RoomTypes_HotelId] ON [dbo].[RoomTypes]
(
	[HotelId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[DormitoryImages]  WITH CHECK ADD  CONSTRAINT [FK_DormitoryImages_Dormitories_DormitoryId] FOREIGN KEY([DormitoryId])
REFERENCES [dbo].[Dormitories] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[DormitoryImages] CHECK CONSTRAINT [FK_DormitoryImages_Dormitories_DormitoryId]
GO
ALTER TABLE [dbo].[HotelImages]  WITH CHECK ADD  CONSTRAINT [FK_HotelImages_Hotels_HotelId] FOREIGN KEY([HotelId])
REFERENCES [dbo].[Hotels] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[HotelImages] CHECK CONSTRAINT [FK_HotelImages_Hotels_HotelId]
GO
ALTER TABLE [dbo].[Rooms]  WITH CHECK ADD  CONSTRAINT [FK_Rooms_Dormitories_DormitoryId] FOREIGN KEY([DormitoryId])
REFERENCES [dbo].[Dormitories] ([Id])
GO
ALTER TABLE [dbo].[Rooms] CHECK CONSTRAINT [FK_Rooms_Dormitories_DormitoryId]
GO
ALTER TABLE [dbo].[Rooms]  WITH CHECK ADD  CONSTRAINT [FK_Rooms_Hotels_HotelId] FOREIGN KEY([HotelId])
REFERENCES [dbo].[Hotels] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Rooms] CHECK CONSTRAINT [FK_Rooms_Hotels_HotelId]
GO
ALTER TABLE [dbo].[Rooms]  WITH CHECK ADD  CONSTRAINT [FK_Rooms_RoomTypes_RoomTypeId] FOREIGN KEY([RoomTypeId])
REFERENCES [dbo].[RoomTypes] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Rooms] CHECK CONSTRAINT [FK_Rooms_RoomTypes_RoomTypeId]
GO
ALTER TABLE [dbo].[RoomTypeImages]  WITH CHECK ADD  CONSTRAINT [FK_RoomTypeImages_RoomTypes_RoomTypeId] FOREIGN KEY([RoomTypeId])
REFERENCES [dbo].[RoomTypes] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[RoomTypeImages] CHECK CONSTRAINT [FK_RoomTypeImages_RoomTypes_RoomTypeId]
GO
ALTER TABLE [dbo].[RoomTypes]  WITH CHECK ADD  CONSTRAINT [FK_RoomTypes_Dormitories_DormitoryId] FOREIGN KEY([DormitoryId])
REFERENCES [dbo].[Dormitories] ([Id])
GO
ALTER TABLE [dbo].[RoomTypes] CHECK CONSTRAINT [FK_RoomTypes_Dormitories_DormitoryId]
GO
ALTER TABLE [dbo].[RoomTypes]  WITH CHECK ADD  CONSTRAINT [FK_RoomTypes_Hotels_HotelId] FOREIGN KEY([HotelId])
REFERENCES [dbo].[Hotels] ([Id])
GO
ALTER TABLE [dbo].[RoomTypes] CHECK CONSTRAINT [FK_RoomTypes_Hotels_HotelId]
GO
USE [master]
GO
ALTER DATABASE [NiceHouse] SET  READ_WRITE 
GO
