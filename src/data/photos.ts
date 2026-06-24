export interface Photo {
  id: string
  src: string
  alt: string
  date: string
  location: string
  camera: string
  isLive?: boolean
  liveVideoSrc?: string
}

export interface Collection {
  id: string
  slug: string
  title: string
  description: string
  coverSrc: string
  date: string
  photoCount: number
  photos: Photo[]
}

export const featuredPhotos: Photo[] = [
  {
    id: "f1",
    src: "https://picsum.photos/seed/mountain-light/1920/1080",
    alt: "晨曦中的山脊",
    date: "2026-03-15",
    location: "四姑娘山",
    camera: "Sony A7R V",
    isLive: true,
  },
  {
    id: "f2",
    src: "https://picsum.photos/seed/ocean-sunset/1920/1080",
    alt: "日落海岸线",
    date: "2026-02-28",
    location: "三亚",
    camera: "iPhone 16 Pro",
  },
  {
    id: "f3",
    src: "https://picsum.photos/seed/forest-trail/1920/1080",
    alt: "林间小径",
    date: "2026-01-10",
    location: "神农架",
    camera: "Sony A7R V",
    isLive: true,
  },
  {
    id: "f4",
    src: "https://picsum.photos/seed/city-night/1920/1080",
    alt: "城市夜景",
    date: "2025-12-24",
    location: "上海",
    camera: "iPhone 16 Pro",
  },
  {
    id: "f5",
    src: "https://picsum.photos/seed/desert-dune/1920/1080",
    alt: "沙漠纹理",
    date: "2025-11-05",
    location: "敦煌",
    camera: "Sony A7R V",
  },
]

export const timelinePhotos: Photo[] = [
  {
    id: "t1",
    src: "https://picsum.photos/seed/spring-flower/800/1000",
    alt: "春樱",
    date: "2026-04-05",
    location: "武汉大学",
    camera: "Sony A7R V",
  },
  {
    id: "t2",
    src: "https://picsum.photos/seed/lake-morning/800/1000",
    alt: "湖面晨雾",
    date: "2026-03-20",
    location: "泸沽湖",
    camera: "Sony A7R V",
  },
  {
    id: "t3",
    src: "https://picsum.photos/seed/snow-peak/800/1000",
    alt: "雪山倒影",
    date: "2026-02-14",
    location: "梅里雪山",
    camera: "iPhone 16 Pro",
    isLive: true,
  },
  {
    id: "t4",
    src: "https://picsum.photos/seed/street-view/800/1000",
    alt: "街角光影",
    date: "2026-01-08",
    location: "厦门",
    camera: "iPhone 16 Pro",
  },
  {
    id: "t5",
    src: "https://picsum.photos/seed/waterfall/800/1000",
    alt: "瀑布",
    date: "2025-12-01",
    location: "黄果树",
    camera: "Sony A7R V",
    isLive: true,
  },
  {
    id: "t6",
    src: "https://picsum.photos/seed/autumn-leaf/800/1000",
    alt: "秋叶",
    date: "2025-10-15",
    location: "香山",
    camera: "Sony A7R V",
  },
]

export const collections: Collection[] = [
  {
    id: "c1",
    slug: "mountains",
    title: "山岳系列",
    description: "记录不同季节的山峰与高原风光，从日出到日落的每一帧。",
    coverSrc: "https://picsum.photos/seed/mountains-cover/1200/800",
    date: "2026",
    photoCount: 24,
    photos: [
      {
        id: "c1p1",
        src: "https://picsum.photos/seed/mt-01/1200/800",
        alt: "日照金山",
        date: "2026-03-15",
        location: "四姑娘山",
        camera: "Sony A7R V",
        isLive: true,
      },
      {
        id: "c1p2",
        src: "https://picsum.photos/seed/mt-02/1200/800",
        alt: "云海翻涌",
        date: "2026-02-20",
        location: "黄山",
        camera: "Sony A7R V",
      },
      {
        id: "c1p3",
        src: "https://picsum.photos/seed/mt-03/1200/800",
        alt: "星空营地",
        date: "2026-01-05",
        location: "川西",
        camera: "Sony A7R V",
      },
    ],
  },
  {
    id: "c2",
    slug: "urban",
    title: "城市漫游",
    description: "穿梭于都市之间，寻找被忽略的建筑美学与人文瞬间。",
    coverSrc: "https://picsum.photos/seed/urban-cover/1200/800",
    date: "2025-2026",
    photoCount: 36,
    photos: [
      {
        id: "c2p1",
        src: "https://picsum.photos/seed/urb-01/1200/800",
        alt: "玻璃幕墙",
        date: "2025-12-24",
        location: "上海",
        camera: "iPhone 16 Pro",
      },
      {
        id: "c2p2",
        src: "https://picsum.photos/seed/urb-02/1200/800",
        alt: "地铁站台",
        date: "2025-11-10",
        location: "北京",
        camera: "iPhone 16 Pro",
        isLive: true,
      },
      {
        id: "c2p3",
        src: "https://picsum.photos/seed/urb-03/1200/800",
        alt: "霓虹招牌",
        date: "2025-10-08",
        location: "香港",
        camera: "Sony A7R V",
      },
    ],
  },
  {
    id: "c3",
    slug: "nature",
    title: "自然笔记",
    description: "深入荒野，用镜头对话山川湖海、草木生灵。",
    coverSrc: "https://picsum.photos/seed/nature-cover/1200/800",
    date: "2025",
    photoCount: 18,
    photos: [
      {
        id: "c3p1",
        src: "https://picsum.photos/seed/nat-01/1200/800",
        alt: "湖面如镜",
        date: "2025-09-15",
        location: "泸沽湖",
        camera: "Sony A7R V",
      },
      {
        id: "c3p2",
        src: "https://picsum.photos/seed/nat-02/1200/800",
        alt: "林间光影",
        date: "2025-08-20",
        location: "神农架",
        camera: "Sony A7R V",
        isLive: true,
      },
      {
        id: "c3p3",
        src: "https://picsum.photos/seed/nat-03/1200/800",
        alt: "溪流长曝",
        date: "2025-07-12",
        location: "九寨沟",
        camera: "Sony A7R V",
      },
    ],
  },
]
