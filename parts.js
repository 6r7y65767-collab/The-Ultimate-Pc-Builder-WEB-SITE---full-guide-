const parts = {
  cpu: [
    // Older and classic CPUs
    { name: "Intel Pentium G4560", price: 60, fpsBoost: 0.5 },
    { name: "Intel i3-6100 (6th Gen)", price: 70, fpsBoost: 0.6 },
    { name: "Intel i5-6400 (6th Gen)", price: 110, fpsBoost: 0.7 },
    { name: "Intel i7-6700K (6th Gen)", price: 200, fpsBoost: 0.9 },
    { name: "Intel i3-8100 (8th Gen)", price: 80, fpsBoost: 0.8 },
    { name: "Intel i5-8400 (8th Gen)", price: 130, fpsBoost: 1.0 },
    { name: "Intel i7-8700K (8th Gen)", price: 300, fpsBoost: 1.2 },
    { name: "Intel i5-9600K (9th Gen)", price: 160, fpsBoost: 1.1 },
    { name: "Intel i7-9700K (9th Gen)", price: 310, fpsBoost: 1.3 },
    { name: "Intel i9-9900K (9th Gen)", price: 500, fpsBoost: 1.5 },

    // Current Intel CPUs
    { name: "Intel i3-10100F", price: 90, fpsBoost: 0.8 },
    { name: "Intel i5-10400F", price: 150, fpsBoost: 1.0 },
    { name: "Intel i7-11700K", price: 320, fpsBoost: 1.2 },
    { name: "Intel i9-13900K", price: 650, fpsBoost: 1.5 },

    // AMD CPUs
    { name: "AMD Athlon X4 860K", price: 50, fpsBoost: 0.45 },
    { name: "AMD FX-6300", price: 60, fpsBoost: 0.5 },
    { name: "AMD Ryzen 3 3100", price: 100, fpsBoost: 0.9 },
    { name: "AMD Ryzen 5 3600", price: 200, fpsBoost: 1.2 },
    { name: "AMD Ryzen 5 3600X", price: 220, fpsBoost: 1.3 },
    { name: "AMD Ryzen 5 5500", price: 150, fpsBoost: 1.1 },
    { name: "AMD Ryzen 5 5500X", price: 180, fpsBoost: 1.2 },
    { name: "AMD Ryzen 7 5800X3D", price: 350, fpsBoost: 1.6 },
    { name: "AMD Ryzen 9 7950X", price: 700, fpsBoost: 1.8 }
  ],

  gpu: [
    { name: "NVIDIA GTX 750 Ti", price: 50, fps: 25 },
    { name: "NVIDIA GTX 960", price: 100, fps: 45 },
    { name: "NVIDIA GTX 970", price: 120, fps: 50 },
    { name: "NVIDIA GTX 1050 Ti", price: 120, fps: 40 },
    { name: "NVIDIA GTX 1060 6GB", price: 200, fps: 65 },
    { name: "NVIDIA GTX 1070", price: 350, fps: 90 },
    { name: "NVIDIA GTX 1080", price: 500, fps: 120 },
    { name: "NVIDIA RTX 2060", price: 300, fps: 90 },
    { name: "NVIDIA RTX 2070", price: 450, fps: 130 },
    { name: "NVIDIA RTX 3060", price: 350, fps: 120 },
    { name: "NVIDIA RTX 3070", price: 500, fps: 160 },
    { name: "NVIDIA RTX 3080", price: 700, fps: 200 },
    { name: "NVIDIA RTX 4090", price: 1600, fps: 300 },
    { name: "NVIDIA GTX Titan X", price: 500, fps: 150 },
    { name: "AMD RX 560", price: 60, fps: 30 },
    { name: "AMD RX 570", price: 120, fps: 50 },
    { name: "AMD RX 580", price: 180, fps: 60 },
    { name: "AMD RX 590", price: 220, fps: 75 },
    { name: "AMD RX 5700 XT", price: 400, fps: 140 },
    { name: "AMD RX 6700 XT", price: 400, fps: 130 },
    { name: "AMD RX 6800", price: 580, fps: 190 },
    { name: "AMD RX 6900 XT", price: 1000, fps: 250 },
    { name: "AMD RX 7900 XTX", price: 1000, fps: 250 },
    { name: "AMD Radeon VII", price: 700, fps: 180 }
  ],

  ram: [
    { name: "4GB DDR3 1600MHz", price: 20 },
    { name: "8GB DDR3 1600MHz", price: 30 },
    { name: "8GB DDR4 2400MHz", price: 40 },
    { name: "16GB DDR4 3200MHz", price: 70 },
    { name: "32GB DDR4 3600MHz", price: 130 },
    { name: "64GB DDR5 5200MHz", price: 300 }
  ],

  storage: [
    { name: "128GB SSD", price: 20 },
    { name: "256GB SSD", price: 30 },
    { name: "512GB SSD", price: 50 },
    { name: "1TB SSD", price: 80 },
    { name: "1TB NVMe SSD", price: 100 },
    { name: "2TB NVMe SSD", price: 180 },
    { name: "500GB HDD", price: 20 },
    { name: "1TB HDD", price: 40 },
    { name: "2TB HDD", price: 70 }
  ],

  psu: [
    { name: "400W Bronze", price: 30 },
    { name: "450W Bronze", price: 40 },
    { name: "550W Bronze", price: 50 },
    { name: "600W Gold", price: 80 },
    { name: "750W Gold", price: 100 },
    { name: "850W Platinum", price: 150 },
    { name: "1000W Platinum", price: 180 }
  ],

  case: [
    { name: "Mini Tower Basic", price: 40 },
    { name: "Mid Tower Basic", price: 50 },
    { name: "High-Airflow Mid Tower", price: 100 },
    { name: "ATX Gaming Case RGB", price: 120 },
    { name: "Full Tower Premium", price: 200 }
  ],

  motherboard: [
    { name: "H110 Chipset", price: 50 },
    { name: "H310 Chipset", price: 50 },
    { name: "B360 Chipset", price: 80 },
    { name: "B450 Chipset", price: 90 },
    { name: "B550 Chipset", price: 130 },
    { name: "Z590 Chipset", price: 200 },
    { name: "Z790 Chipset", price: 300 }
  ],

  cooler: [
    { name: "Stock Cooler Intel", price: 20 },
    { name: "Stock Cooler AMD", price: 20 },
    { name: "Air Cooler Basic", price: 30 },
    { name: "Air Cooler High-End", price: 70 },
    { name: "Liquid Cooler 240mm", price: 120 },
    { name: "Liquid Cooler 360mm", price: 180 }
  ]
};

const games = {
  "PUBG": 1.0,
  "Fortnite": 1.2,
  "Splitgate": 1.3,
  "The Witcher 3": 0.9,
  "Red Dead Redemption 2": 0.7,
  "Cyberpunk 2077": 0.6,
  "God of War Ragnarok": 0.8,
  "Call of Duty Black Ops 6": 1.0,
  "Resident Evil Village": 0.9,
  "Resident Evil 4 Remake": 1.0,
  "Silent Hill 2 Remake": 0.8,
  "Silent Hill 3 Remake": 0.85
};