USE [master]
GO
/****** Object:  Database [NiceHouse]    Script Date: 7/30/2024 12:44:38 PM ******/
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
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 7/30/2024 12:44:38 PM ******/
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
/****** Object:  Table [dbo].[Dormitories]    Script Date: 7/30/2024 12:44:38 PM ******/
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
/****** Object:  Table [dbo].[DormitoryImages]    Script Date: 7/30/2024 12:44:38 PM ******/
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
/****** Object:  Table [dbo].[DormitoryType]    Script Date: 7/30/2024 12:44:38 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DormitoryType](
	[Id] [int] NULL,
	[DormitoryType] [nvarchar](50) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[HotelImages]    Script Date: 7/30/2024 12:44:38 PM ******/
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
/****** Object:  Table [dbo].[Hotels]    Script Date: 7/30/2024 12:44:38 PM ******/
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
/****** Object:  Table [dbo].[Rooms]    Script Date: 7/30/2024 12:44:38 PM ******/
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
/****** Object:  Table [dbo].[RoomTypeImages]    Script Date: 7/30/2024 12:44:38 PM ******/
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
/****** Object:  Table [dbo].[RoomTypes]    Script Date: 7/30/2024 12:44:38 PM ******/
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

INSERT [dbo].[Dormitories] ([Id], [Name], [Type], [Address], [Description], [MaxRoomPrice], [MinRoomPrice], [NumberOfPeople]) VALUES (3, N'Urban Loft', 1, N'10 Main Street', N'Elegant loft with high-end amenities in the city center.', CAST(3000.00 AS Decimal(18, 2)), CAST(2200.00 AS Decimal(18, 2)), 2)
INSERT [dbo].[Dormitories] ([Id], [Name], [Type], [Address], [Description], [MaxRoomPrice], [MinRoomPrice], [NumberOfPeople]) VALUES (4, N'Green Village', 2, N'20 Elm Street', N'Affordable housing in a green, communal setting.', CAST(1200.00 AS Decimal(18, 2)), CAST(800.00 AS Decimal(18, 2)), 5)
INSERT [dbo].[Dormitories] ([Id], [Name], [Type], [Address], [Description], [MaxRoomPrice], [MinRoomPrice], [NumberOfPeople]) VALUES (5, N'Budget Stay', 0, N'30 Oak Street', N'Basic accommodations with essential services for budget travelers.', CAST(600.00 AS Decimal(18, 2)), CAST(350.00 AS Decimal(18, 2)), 6)
INSERT [dbo].[Dormitories] ([Id], [Name], [Type], [Address], [Description], [MaxRoomPrice], [MinRoomPrice], [NumberOfPeople]) VALUES (6, N'Skyline Residences', 1, N'40 Pine Avenue', N'Luxury apartments with stunning skyline views.', CAST(4000.00 AS Decimal(18, 2)), CAST(2900.00 AS Decimal(18, 2)), 3)
INSERT [dbo].[Dormitories] ([Id], [Name], [Type], [Address], [Description], [MaxRoomPrice], [MinRoomPrice], [NumberOfPeople]) VALUES (7, N'Community Haven', 2, N'50 Maple Lane', N'Spacious and affordable housing with community support services.', CAST(1500.00 AS Decimal(18, 2)), CAST(900.00 AS Decimal(18, 2)), 4)
INSERT [dbo].[Dormitories] ([Id], [Name], [Type], [Address], [Description], [MaxRoomPrice], [MinRoomPrice], [NumberOfPeople]) VALUES (8, N'Urban Loft', 0, N'10 Main Street', N'Elegant loft with high-end amenities in the city center.', CAST(3000.00 AS Decimal(18, 2)), CAST(2200.00 AS Decimal(18, 2)), 2)
INSERT [dbo].[Dormitories] ([Id], [Name], [Type], [Address], [Description], [MaxRoomPrice], [MinRoomPrice], [NumberOfPeople]) VALUES (9, N'Green Village', 1, N'20 Elm Street', N'Affordable housing in a green, communal setting.', CAST(1200.00 AS Decimal(18, 2)), CAST(800.00 AS Decimal(18, 2)), 5)
INSERT [dbo].[Dormitories] ([Id], [Name], [Type], [Address], [Description], [MaxRoomPrice], [MinRoomPrice], [NumberOfPeople]) VALUES (10, N'Budget Stay', 2, N'30 Oak Street', N'Basic accommodations with essential services for budget travelers.', CAST(600.00 AS Decimal(18, 2)), CAST(350.00 AS Decimal(18, 2)), 6)
INSERT [dbo].[Dormitories] ([Id], [Name], [Type], [Address], [Description], [MaxRoomPrice], [MinRoomPrice], [NumberOfPeople]) VALUES (11, N'Skyline Residences', 0, N'40 Pine Avenue', N'Luxury apartments with stunning skyline views.', CAST(4000.00 AS Decimal(18, 2)), CAST(2900.00 AS Decimal(18, 2)), 3)
INSERT [dbo].[Dormitories] ([Id], [Name], [Type], [Address], [Description], [MaxRoomPrice], [MinRoomPrice], [NumberOfPeople]) VALUES (12, N'Community Haven', 1, N'50 Maple Lane', N'Spacious and affordable housing with community support services.', CAST(1500.00 AS Decimal(18, 2)), CAST(900.00 AS Decimal(18, 2)), 4)
SET IDENTITY_INSERT [dbo].[Dormitories] OFF
GO
SET IDENTITY_INSERT [dbo].[DormitoryImages] ON 

INSERT [dbo].[DormitoryImages] ([Id], [Url], [DormitoryId]) VALUES (2, N'https://example.com/images/dormitory1.jpg', 3)
INSERT [dbo].[DormitoryImages] ([Id], [Url], [DormitoryId]) VALUES (3, N'https://example.com/images/dormitory2.jpg', 3)
INSERT [dbo].[DormitoryImages] ([Id], [Url], [DormitoryId]) VALUES (4, N'https://example.com/images/dormitory3.jpg', 4)
INSERT [dbo].[DormitoryImages] ([Id], [Url], [DormitoryId]) VALUES (5, N'https://example.com/images/dormitory4.jpg', 5)
INSERT [dbo].[DormitoryImages] ([Id], [Url], [DormitoryId]) VALUES (6, N'https://example.com/images/dormitory5.jpg', 6)
SET IDENTITY_INSERT [dbo].[DormitoryImages] OFF
GO
INSERT [dbo].[DormitoryType] ([Id], [DormitoryType]) VALUES (1, N'HighEndApartment')
INSERT [dbo].[DormitoryType] ([Id], [DormitoryType]) VALUES (2, N'SocialHousing')
INSERT [dbo].[DormitoryType] ([Id], [DormitoryType]) VALUES (3, N'AffordableDormitory')
GO
SET IDENTITY_INSERT [dbo].[HotelImages] ON 

INSERT [dbo].[HotelImages] ([Id], [HotelId], [ImageUrl]) VALUES (1, 1, N'https://example.com/images/hotel1.jpg')
INSERT [dbo].[HotelImages] ([Id], [HotelId], [ImageUrl]) VALUES (2, 2, N'https://example.com/images/hotel2.jpg')
INSERT [dbo].[HotelImages] ([Id], [HotelId], [ImageUrl]) VALUES (3, 3, N'https://example.com/images/hotel3.jpg')
INSERT [dbo].[HotelImages] ([Id], [HotelId], [ImageUrl]) VALUES (4, 4, N'https://example.com/images/hotel4.jpg')
INSERT [dbo].[HotelImages] ([Id], [HotelId], [ImageUrl]) VALUES (5, 5, N'https://example.com/images/hotel5.jpg')
SET IDENTITY_INSERT [dbo].[HotelImages] OFF
GO
SET IDENTITY_INSERT [dbo].[Hotels] ON 

INSERT [dbo].[Hotels] ([Id], [Name], [Location], [Address], [MinRoomPrice], [MaxRoomPrice]) VALUES (1, N'Grand Palace Hotel', N'Downtown', N'123 Main St, Downtown', CAST(100.00 AS Decimal(18, 2)), CAST(500.00 AS Decimal(18, 2)))
INSERT [dbo].[Hotels] ([Id], [Name], [Location], [Address], [MinRoomPrice], [MaxRoomPrice]) VALUES (2, N'Ocean View Resort', N'Beachfront', N'456 Ocean Blvd, Beachfront', CAST(150.00 AS Decimal(18, 2)), CAST(600.00 AS Decimal(18, 2)))
INSERT [dbo].[Hotels] ([Id], [Name], [Location], [Address], [MinRoomPrice], [MaxRoomPrice]) VALUES (3, N'Mountain Retreat', N'Highlands', N'789 Mountain Rd, Highlands', CAST(80.00 AS Decimal(18, 2)), CAST(350.00 AS Decimal(18, 2)))
INSERT [dbo].[Hotels] ([Id], [Name], [Location], [Address], [MinRoomPrice], [MaxRoomPrice]) VALUES (4, N'City Center Inn', N'Midtown', N'101 City Ave, Midtown', CAST(120.00 AS Decimal(18, 2)), CAST(400.00 AS Decimal(18, 2)))
INSERT [dbo].[Hotels] ([Id], [Name], [Location], [Address], [MinRoomPrice], [MaxRoomPrice]) VALUES (5, N'Country Lodge', N'Countryside', N'202 Country Ln, Countryside', CAST(90.00 AS Decimal(18, 2)), CAST(300.00 AS Decimal(18, 2)))
SET IDENTITY_INSERT [dbo].[Hotels] OFF
GO
SET IDENTITY_INSERT [dbo].[Rooms] ON 

INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (9, 1, 2, 1, 3)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (10, 1, 3, 1, 4)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (11, 2, 4, 0, 5)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (12, 2, 5, 1, 6)
INSERT [dbo].[Rooms] ([Id], [HotelId], [RoomTypeId], [IsAvailable], [DormitoryId]) VALUES (13, 3, 2, 1, 7)
SET IDENTITY_INSERT [dbo].[Rooms] OFF
GO
SET IDENTITY_INSERT [dbo].[RoomTypeImages] ON 

INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (2, 2, N'http://example.com/images/standard_room1.jpg')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (3, 3, N'http://example.com/images/standard_room2.jpg')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (4, 2, N'http://example.com/images/deluxe_room1.jpg')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (5, 3, N'http://example.com/images/suite_room1.jpg')
INSERT [dbo].[RoomTypeImages] ([Id], [RoomTypeId], [ImageUrl]) VALUES (6, 4, N'http://example.com/images/executive_room1.jpg')
SET IDENTITY_INSERT [dbo].[RoomTypeImages] OFF
GO
SET IDENTITY_INSERT [dbo].[RoomTypes] ON 

INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (2, N'Standard Room', 1, CAST(50.00 AS Decimal(18, 2)), 2, 3)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (3, N'Deluxe Room', 1, CAST(75.00 AS Decimal(18, 2)), 2, 4)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (4, N'Suite Room', 1, CAST(120.00 AS Decimal(18, 2)), 3, 5)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (5, N'Executive Room', 2, CAST(150.00 AS Decimal(18, 2)), 2, 6)
INSERT [dbo].[RoomTypes] ([Id], [Name], [HotelId], [Price], [NumberOfBeds], [DormitoryId]) VALUES (6, N'Presidential Suite', 2, CAST(250.00 AS Decimal(18, 2)), 4, 7)
SET IDENTITY_INSERT [dbo].[RoomTypes] OFF
GO
/****** Object:  Index [IX_DormitoryImages_DormitoryId]    Script Date: 7/30/2024 12:44:38 PM ******/
CREATE NONCLUSTERED INDEX [IX_DormitoryImages_DormitoryId] ON [dbo].[DormitoryImages]
(
	[DormitoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_HotelImages_HotelId]    Script Date: 7/30/2024 12:44:38 PM ******/
CREATE NONCLUSTERED INDEX [IX_HotelImages_HotelId] ON [dbo].[HotelImages]
(
	[HotelId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Rooms_DormitoryId]    Script Date: 7/30/2024 12:44:38 PM ******/
CREATE NONCLUSTERED INDEX [IX_Rooms_DormitoryId] ON [dbo].[Rooms]
(
	[DormitoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Rooms_HotelId]    Script Date: 7/30/2024 12:44:38 PM ******/
CREATE NONCLUSTERED INDEX [IX_Rooms_HotelId] ON [dbo].[Rooms]
(
	[HotelId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Rooms_RoomTypeId]    Script Date: 7/30/2024 12:44:38 PM ******/
CREATE NONCLUSTERED INDEX [IX_Rooms_RoomTypeId] ON [dbo].[Rooms]
(
	[RoomTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_RoomTypeImages_RoomTypeId]    Script Date: 7/30/2024 12:44:38 PM ******/
CREATE NONCLUSTERED INDEX [IX_RoomTypeImages_RoomTypeId] ON [dbo].[RoomTypeImages]
(
	[RoomTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_RoomTypes_DormitoryId]    Script Date: 7/30/2024 12:44:38 PM ******/
CREATE NONCLUSTERED INDEX [IX_RoomTypes_DormitoryId] ON [dbo].[RoomTypes]
(
	[DormitoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_RoomTypes_HotelId]    Script Date: 7/30/2024 12:44:38 PM ******/
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
