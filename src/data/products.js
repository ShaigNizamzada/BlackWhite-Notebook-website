const products = [
  {
    id: 1,
    title: "Acer Swift 3 SF314",
    images: [
      "https://api.smartelectronics.az/uploads/products/9f8a9c3044054230823fe208d4054f94nxacwer005a.jpg",
      "https://api.smartelectronics.az/uploads/products/9251a1a3ae8e496a9fb30cb9e0dd6ac7nxacwer005qw.jpg",
    ],
    ram: "16 GB",
    cpu: "Intel Core i7-1165G7",
    gpu: "Intel Iris Xe",
    display: "1920x1080",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, molestiae delectus velit temporibus recusandae hic, id rerum sint consequatur ad, perferendis enim! Impedit repellat totam earum dolorum! Tenetur, expedita deleniti!",
    price: "2359",
  },
  {
    id: 2,
    title: "Acer Swift SF 314",
    images: [
      "https://api.smartelectronics.az/uploads/products/wgvludxvotoce69occgs.jpg",
      "https://api.smartelectronics.az/uploads/products/t2wgzywgm4h582zrs1ga.jpg",
      "https://api.smartelectronics.az/uploads/products/qdd4rwmv0tqwgf6mqzgc.jpg",
      "https://api.smartelectronics.az/uploads/products/roqlbfflsvsnr3z5nwrv.jpg",
      "https://api.smartelectronics.az/uploads/products/xgfyayh8pyu0dmvnhb1k.jpg",
      "https://api.smartelectronics.az/uploads/products/lkc92j7t1kt1ghfhsbuh.jpg",
    ],
    ram: "8 GB",
    cpu: "Intel Core i7-1165G7",
    gpu: "Intel Iris Xe",
    display: "1920x1080",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, molestiae delectus velit temporibus recusandae hic, id rerum sint consequatur ad, perferendis enim! Impedit repellat totam earum dolorum! Tenetur, expedita deleniti!",
    price: "2509",
  },
  {
    id: 3,
    title: "Apple 14-inch MacBook Pro",
    images: [
      "https://api.smartelectronics.az/uploads/products/39c30792ee5642949b06adf3edcca6216.png",
      "https://api.smartelectronics.az/uploads/products/e8e0d2319b1943f6a7db248ec20e62567.png",
      "https://api.smartelectronics.az/uploads/products/708f49caa00c47db85ba59f33b622d493.png",
    ],
    ram: "18 GB",
    cpu: "Apple M3 Pro",
    gpu: "Apple M3 Pro GPU 14-core",
    display: "3024×1964",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, molestiae delectus velit temporibus recusandae hic, id rerum sint consequatur ad, perferendis enim! Impedit repellat totam earum dolorum! Tenetur, expedita deleniti!",
    price: "5899",
  },
  {
    id: 4,
    title: "Apple 13-inch MacBook Air M2",
    images: [
      "https://api.smartelectronics.az/uploads/products/909e48ab58db4df8a8f96ed68bd0864410.png",
      "https://api.smartelectronics.az/uploads/products/12be3cd595a14826ac771e6b63a3c0a811.png",
      "https://api.smartelectronics.az/uploads/products/59a6bdde640a4fc3b8def3855761475f12.png",
    ],
    ram: "8 GB",
    cpu: "Apple M2",
    gpu: "Apple M2 GPU 10-core",
    display: "2560х1664",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, molestiae delectus velit temporibus recusandae hic, id rerum sint consequatur ad, perferendis enim! Impedit repellat totam earum dolorum! Tenetur, expedita deleniti!",
    price: "3999",
  },
  {
    id: 5,
    title: "ASUS ROG Zephyrus M16",
    images: [
      "https://api.smartelectronics.az/uploads/products/b6603213a4884897ad4402280b4083eezeph.jpg",
      "https://api.smartelectronics.az/uploads/products/9c8bcdd9b2574e79b1b36b725653eb42zeph1.jpg",
      "https://api.smartelectronics.az/uploads/products/f641e64cc05848bf954feeca29136cbazeph2.jpg",
      "https://api.smartelectronics.az/uploads/products/e3d8b194a8b045edb9d2a4e14c6093f1zeph3.jpg",
    ],
    ram: "16 GB",
    cpu: "Core i7-11800H",
    gpu: "Nvidia RTX 3060",
    display: "2560x1600",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, molestiae delectus velit temporibus recusandae hic, id rerum sint consequatur ad, perferendis enim! Impedit repellat totam earum dolorum! Tenetur, expedita deleniti!",
    price: "4549",
  },
  {
    id: 6,
    title: "Asus TUF GamingFA507RM",
    images: [
      "https://m.media-amazon.com/images/I/71XKl3-5UQL._AC_UF1000,1000_QL80_.jpg",
      "https://api.smartelectronics.az/uploads/products/597c8294709945159df0d887f11cb71dfe1%C3%BC65.JPG",
      "https://api.smartelectronics.az/uploads/products/d99a0ca4eee8411a8de6e6be9e9c1c282.png",
    ],
    ram: "16 GB",
    cpu: "AMD Ryzen 7-6800H",
    gpu: "Nvidia RTX 3060",
    display: "1920x1080",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, molestiae delectus velit temporibus recusandae hic, id rerum sint consequatur ad, perferendis enim! Impedit repellat totam earum dolorum! Tenetur, expedita deleniti!",
    price: "3199",
  },
  {
    id: 7,
    title: "Dell Latitude 5530",
    images: [
      "https://api.smartelectronics.az/uploads/products/32a4430d00a24f3bb68547508bdb62ab1.png",
      "https://api.smartelectronics.az/uploads/products/25968b8b1334424585378f0ef0e8b5cc3.png",
      "https://api.smartelectronics.az/uploads/products/ec38c649ce334a3188ff5074f7d7c9b22.png",
    ],
    ram: "16 GB",
    cpu: "Intel Core i7-1255U",
    gpu: "Intel Iris Xe",
    display: "1920x1080",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, molestiae delectus velit temporibus recusandae hic, id rerum sint consequatur ad, perferendis enim! Impedit repellat totam earum dolorum! Tenetur, expedita deleniti!",
    price: "2399",
  },
  {
    id: 8,
    title: "Dell Gaming G15",
    images: [
      "https://api.smartelectronics.az/uploads/products/9810aff54d914af8bfbc6f88aef11366he54.jpg",
      "https://api.smartelectronics.az/uploads/products/4c912a087f9f466093bdd32478f534b54h4h.jpg",
      "https://api.smartelectronics.az/uploads/products/5153238a218f4ef580a255728fc15ccf45g.jpg",
      "https://api.smartelectronics.az/uploads/products/f060f8c055ee478b811af99ce1cc867765e%C3%BCf.jpg",
    ],
    ram: "8 GB",
    cpu: "Core i5 10500H",
    gpu: "NVIDIA GeForce GTX 1650",
    display: "1920x1080",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, molestiae delectus velit temporibus recusandae hic, id rerum sint consequatur ad, perferendis enim! Impedit repellat totam earum dolorum! Tenetur, expedita deleniti!",
    price: "2099",
  },
  {
    id: 9,
    title: "iPhone 15 Pro Max 1TB",
    images: [
      "https://api.smartelectronics.az/uploads/products/4c4406e1acc1400f846c71a70fbe2bcfiPhone15ProMaxBlueTitaniumPDPImagePosition-1ww-EN-min.jpg",
      "https://api.smartelectronics.az/uploads/products/bfb939d1500642009a3870213f91954diPhone15ProMaxBlueTitaniumPDPImagePosition-4ww-EN-min.jpg",
      "https://api.smartelectronics.az/uploads/products/9e5b45a183114202bdca48328f3f4fdfiPhone15ProMaxBlueTitaniumPDPImagePosition-3ww-EN-min.jpg",
      "https://api.smartelectronics.az/uploads/products/061d6bba16984306b963e76c41b3194aiPhone15ProMaxBlueTitaniumPDPImagePosition-1altww-EN-min.jpg",
      "https://api.smartelectronics.az/uploads/products/01096ad6dbdf4ad0a8719db9215bb610iPhone15ProMaxBlueTitaniumPDPImagePosition-2ww-EN-min.jpg",
    ],
    ram: "8 GB",
    cpu: "Apple A17 Pro (3 nm)",
    gpu: "Apple GPU (6-core graphics)",
    display: "1290 x 2796",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, molestiae delectus velit temporibus recusandae hic, id rerum sint consequatur ad, perferendis enim! Impedit repellat totam earum dolorum! Tenetur, expedita deleniti!",
    price: "5199",
  },
  {
    id: 10,
    title: "iPhone 14 Plus 128GB",
    images: [
      "https://api.smartelectronics.az/uploads/products/969b75d6125c46858bda1c5cba918945f%C3%BCef45%C3%BCf.jpg",
      "https://api.smartelectronics.az/uploads/products/eada210a91404bdb82aa6e3c7fba80fb14plus.jpg",
    ],
    ram: "6 GB",
    cpu: "Apple A15 Bionic (5 nm)",
    gpu: "Apple GPU (5-core graphics)",
    display: "1170x2532",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, molestiae delectus velit temporibus recusandae hic, id rerum sint consequatur ad, perferendis enim! Impedit repellat totam earum dolorum! Tenetur, expedita deleniti!",
    price: "2399",
  },
  {
    id: 11,
    title: "Planşet və Elektron kitab - Tab P 10 64GB",
    images: [
      "https://api.smartelectronics.az/uploads/products/g8cxqo48mmlc5qxwud7u.jpg",
      "https://api.smartelectronics.az/uploads/products/ndvnamocnwrfjotwfzab.jpg",
    ],
    ram: "4 GB",
    cpu: "Qualcomm SM6225 Snapdragon 680 4G (6 nm)",
    gpu: "Qualcomm Adreno 506",
    display: "1920x1080",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, molestiae delectus velit temporibus recusandae hic, id rerum sint consequatur ad, perferendis enim! Impedit repellat totam earum dolorum! Tenetur, expedita deleniti!",
    price: "599",
  },
  {
    id: 12,
    title: "Planşet və Elektron kitab - Honor Pad 8 6GB/128GB",
    images: [
      "https://api.smartelectronics.az/uploads/products/77863d9e150d484da66e729873645e2eefe%C3%BC7451f.jpg",
      "https://api.smartelectronics.az/uploads/products/6ed8b5cabfd843fab908d79175334da11fe%C3%BC564f%C3%BC1e60f.jpg",
    ],
    ram: "16 GB",
    cpu: "Qualcomm SM6225 Snapdragon 680 4G (6 nm)",
    gpu: "Adreno 610",
    display: "1200x2000",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, molestiae delectus velit temporibus recusandae hic, id rerum sint consequatur ad, perferendis enim! Impedit repellat totam earum dolorum! Tenetur, expedita deleniti!",
    price: "599",
  },
];

// https://mocki.io/v1/f0be4f75-5b11-4482-9505-16fe43d6a466
