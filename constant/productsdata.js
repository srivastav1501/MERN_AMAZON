const products = [
    {
        id: 'product1',
        url: 'https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70',
        title: {
            shortTitle: 'Home & Kitchen',
            longTitle: 'Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)'
        },
        price: {
            mrp: 1195,
            cost: 625,
            discount: '47%'
        },
        description: 'This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.',
        discount: 'Extra 10% Off',
        tagline: 'Deal of the day'
    },
    {
        id: 'product2',
        url: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70',
        title: {
            shortTitle: 'Sandwich Makers',
            longTitle: 'Flipkart SmartBuy Sandwich 01 Grill  (Black)'
        },
        price: {
            mrp: 1499,
            cost: 899,
            discount: '40%'
        },
        description: 'This non-stick sandwich toaster .easy to use and very handy. Directly hold over flame to make tasty toasts and toasted sandwiches. Specially designed by keeping your needs in mind, the sandwich maker makes whatever youre doing simpler, smarter and better',
        discount: 'From 99+5% Off',
        tagline: 'Deal of the day'
    },
    {
        id: 'product3',
        url: 'https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70',
        title: {
            shortTitle: 'Fitness Gear',
            longTitle: 'AJRO DEAL New Adjustable Single Resistance Tube (Multicolor) Resistance Tube  (Multicolor)'
        },
        price: {
            mrp: 499,
            cost: 166,
            discount: '66%'
        },
        description: 'This unique product can tone your back muscles, reduce belly fat, improve blood circulation and also improves your body posture. It increases the stamina, energy and vitality of the body. The elastic resistance of the rubber training rope can be used to train and exercise in whichever way you want, according to your physical needs.',
        discount: 'Upto 70% Off',
        tagline: 'Deal of the Day'
    },
    {
        id: 'product4',
        url: 'https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70',
        title: {
            shortTitle: 'Smart Watches',
            longTitle: 'Molife Sense 500 Smartwatch  (Black Strap, Freesize)',
        },
        price: {
            mrp: 6999,
            cost: 4049,
            discount: '42%'
        },
        description: 'The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away.',
        discount: 'Grab Now',
        tagline: 'Deal of the day'
    },
    {
        id: 'product5',
        url: 'https://rukminim1.flixcart.com/image/416/416/kzvlua80/hair-dryer/0/r/w/professional-nhp-8220-nova-original-imagbshfar8zuhb9.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kzvlua80/hair-dryer/0/r/w/professional-nhp-8220-nova-original-imagbshfar8zuhb9.jpeg?q=70',
        title: {
            shortTitle: 'Trimmers, Dryers & more',
            longTitle: 'Nova Professional NHP 8220 Hair Dryer  (1800 W, Multicolor)'
        },
        price: {
            mrp: 1899,
            cost: 1124,
            discount: '40%'
        },
        description: 'Introducing Nova Professional Dryer with 1800 watts of powerful drying , so that you can get salon-like hair styling even at your home . This hair dryer features Advanced Ehd + Technology which ensures that only the right amount of heat is distributed on your hair and preventing any damage to your hair. The Shine and condition Techonlogy ensures that you hair is always silky and smooth. The Thermo protect temperature setting in this dryer also provides shine and conditions your hair, so that you have a Gorgeous looking hair style.',
        discount: 'From ₹499',
        tagline: 'Deal of the day'
    },
    {
        id: 'product6',
        url: 'https://m.media-amazon.com/images/I/5186QK8o0KL._SL1012_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/5186QK8o0KL._SL1012_.jpg',
        title: {
            shortTitle: 'Home Appliances',
            longTitle: 'Samsung 6.2 kg Fully Automatic Top Load Washing Machine (WA62M4100HY/TL, Imperial Silver)',
        },
        price: {
            mrp: 16990,
            cost: 14490,
            discount: '15%'
        },
        description: 'This fully automatic washing machine from Samsung features a diamond drum, eco tub clean technology, and a magic filter. It also has a digital inverter motor that ensures reliable performance and energy savings.',
        discount: 'Extra 10% Off',
        tagline: "Deal of the day"
    },
    {
        id: 'product7',
        url: 'https://m.media-amazon.com/images/I/619AI9CLXTL._SL1500_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/619AI9CLXTL._SL1500_.jpg',
        title: {
            shortTitle: 'Mobile Accessories',
            longTitle: 'Mi 10000 mAh Power Bank (2i) with 18W Fast Charging',
        },
        price: {
            mrp: 1199,
            cost: 799,
            discount: '33%'
        },
        description: 'This power bank from Mi features a 10000 mAh capacity and supports 18W fast charging. It has dual USB ports for simultaneous charging and is compatible with most smartphones and tablets.',
        discount: 'Extra 8% Off',
        tagline: "Today's Deal"
    },
    {
        id: 'product8',
        url: 'https://www.levi.in/dw/image/v2/BBRC_PRD/on/demandware.static/-/Sites-LeviMaster-Catalog/en_IN/dwceb7359d/images/hi-res/360870585/360870585_01_Front.jpg?sw=451&sh=600',
        detailUrl: 'https://www.levi.in/dw/image/v2/BBRC_PRD/on/demandware.static/-/Sites-LeviMaster-Catalog/en_IN/dwceb7359d/images/hi-res/360870585/360870585_01_Front.jpg?sw=451&sh=600',
        title: {
            shortTitle: "Men's Fashion",
            longTitle: "Levi's Men's Slim Fit Jeans",
        },
        price: {
            mrp: 2499,
            cost: 1499,
            discount: '40%'
        },
        description: "These slim fit jeans from Levi's are made from high-quality denim and feature a classic 5-pocket design. They have a mid-rise waist and a tapered leg for a modern, streamlined look",
        discount: 'Extra 7% Off',
        tagline: "Today's Deal"
    },
    {
        id: 'product9',
        url: 'https://m.media-amazon.com/images/I/51Lo8JYyejL._SX569_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/51Lo8JYyejL._SX569_.jpg',
        title: {
            shortTitle: "Home Decor",
            longTitle: "Philips 10 W LED Lamp",
        },
        price: {
            mrp: 399,
            cost: 299,
            discount: '25%'
        },
        description: "This LED lamp from Philips has a power output of 10W and provides bright, energy-efficient lighting. It has a long lifespan and is ideal for use in living rooms, bedrooms, and study rooms",
        discount: 'Extra 7% Off',
        tagline: "Today's Deal"
    },
    {
        id: 'product10',
        url: 'https://m.media-amazon.com/images/I/71bhWgQK-cL._SX679_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/71bhWgQK-cL._SX679_.jpg',
        title: {
            shortTitle: "Apple AirPods",
            longTitle: "Apple AirPods Pro",
        },
        price: {
            mrp: 24900,
            cost: 20999,
            discount: '15%'
        },
        description: 'Apple AirPods Pro are the ultimate wireless earbuds with Active Noise Cancellation and immersive sound. These earbuds are sweat and water-resistant and come with a wireless charging case.',
        discount: 'Extra 7% Off',
        tagline: "Today's Deal"
    },
    {
        id: 'product11',
        url: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSBvR9LWoSUqBQK52pxFMz1m9ENFdGV__RMtK88bKJj7OisAObUflflM7Pqu5v74YH4VcyRNxTXJawMf9W6dMvgoDFOgfHQIInOOZfZOioBR-HgVAEaa4Yd3RaF34_Qr_7XqQ&usqp=CAc',
        detailUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSBvR9LWoSUqBQK52pxFMz1m9ENFdGV__RMtK88bKJj7OisAObUflflM7Pqu5v74YH4VcyRNxTXJawMf9W6dMvgoDFOgfHQIInOOZfZOioBR-HgVAEaa4Yd3RaF34_Qr_7XqQ&usqp=CAc',
        title: {
            shortTitle: "Samsung Galaxy S21 Ultra 5G",
            longTitle: "Samsung Galaxy S21 Ultra 5G (Phantom Black, 256 GB)",
        },
        price: {
            mrp: 125000,
            cost: 99999,
            discount: '20%'
        },
        description: 'The Samsung Galaxy S21 Ultra 5G is the ultimate flagship smartphone with a 6.8-inch AMOLED display, Exynos 2100 processor, 12GB RAM, and a 5000mAh battery.',
        discount: 'Extra 7% Off',
        tagline: "Today's Deal"
    },
    {
        id: 'product12',
        url: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTjizZSxvcfsn9k-bEQlBk5cyKeOwxAsvaJzVZWfTNzvBdpwpdg0EBXa44ttV3z7S-Be0y7OiNYF_pJrAmJWzYoaHr6uIZhfPTbNma63erDW--XoCdjSlrNnBRZi79jMA_CSNM&usqp=CAc',
        detailUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTjizZSxvcfsn9k-bEQlBk5cyKeOwxAsvaJzVZWfTNzvBdpwpdg0EBXa44ttV3z7S-Be0y7OiNYF_pJrAmJWzYoaHr6uIZhfPTbNma63erDW--XoCdjSlrNnBRZi79jMA_CSNM&usqp=CAc',
        title: {
            shortTitle: 'IQOO Z6 Lite',
            longTitle: 'IQOO Z6 Lite 5G Unlocked Smartphone with 6.57" FHD+ IPS LCD Display, Qualcomm Snapdragon 765G, 8GB RAM + 128GB ROM, 5000mAh Battery, 44W Fast Charging, Dual SIM, 48MP Triple Camera System, Android 11',
        },
        price: {
            mrp: 18999,
            cost: 16999,
            discount: '10.53%'
        },
        description: 'Experience lightning-fast 5G speeds on the IQOO Z6 Lite. This unlocked smartphone features a powerful Qualcomm Snapdragon 765G processor and 8GB of RAM, providing smooth and responsive performance. The large 6.57" FHD+ IPS LCD display delivers vivid visuals, while the 48MP triple camera system captures stunning photos and videos. With a massive 5000mAh battery and 44W fast charging, you can stay connected all day long. Plus, the IQOO Z6 Lite comes with Android 11 pre-installed, offering the latest features and security updates.',
        discount: 'Extra 10% off',
        tagline: "Today's Deal"
    },
    {
        id: 'product13',
        url: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSX_yB2Stx5ctD_wfIrveV3efQ5ixSuONHdSQXnuJr2R0M2kegNomSaSx9-8arn80cQ9D2dvOtkpKqh0KRniZ9GaBjNtk71oFLZg_EeXbfZ32UdSPjWm6ZTj3gSEm3J4QBQcQ&usqp=CAc',
        detailUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSX_yB2Stx5ctD_wfIrveV3efQ5ixSuONHdSQXnuJr2R0M2kegNomSaSx9-8arn80cQ9D2dvOtkpKqh0KRniZ9GaBjNtk71oFLZg_EeXbfZ32UdSPjWm6ZTj3gSEm3J4QBQcQ&usqp=CAc',
        title: {
            shortTitle: 'Canon EOS M50 Mark II Mirrorless Camera',
            longTitle: 'Canon EOS M50 Mark II Mirrorless Camera Body with 15-45mm f/3.5-6.3 IS STM Lens'
        },
        price: {
            mrp: 72995,
            cost: 65995,
            discount: '10%',
        },
        description: 'The Canon EOS M50 Mark II is a powerful mirrorless camera with a 24.1MP APS-C CMOS sensor, 4K video recording, and a variety of shooting modes and effects.',
        discount: 'Extra 5% Off',
        tagline: "Best Seller"
    },
    {
        id: 'product14',
        url: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ6oobDt2q6jC_3okam04nS_tpBSejBUes0PVB8Rigu-VLNQnvo6GRH9gFLxGkfN_4O-knoEGZU_nK2IjkqZQFULumNWCRCsd1ugjkCPNAbU0agWokcohl7xlgNagj-uC0SPA&usqp=CAc',
        detailUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ6oobDt2q6jC_3okam04nS_tpBSejBUes0PVB8Rigu-VLNQnvo6GRH9gFLxGkfN_4O-knoEGZU_nK2IjkqZQFULumNWCRCsd1ugjkCPNAbU0agWokcohl7xlgNagj-uC0SPA&usqp=CAc',
        title: {
            shortTitle: 'Canon EOS M50 Mark II Mirrorless Camera',
            longTitle: 'Canon EOS M50 Mark II Mirrorless Camera Body with 15-45mm f/3.5-6.3 IS STM Lens'
        },
        price: {
            mrp: 72995,
            cost: 65995,
            discount: '10%',
        },
        description: 'The Canon EOS M50 Mark II is a powerful mirrorless camera with a 24.1MP APS-C CMOS sensor, 4K video recording, and a variety of shooting modes and effects.',
        discount: 'Extra 5% Off',
        tagline: "Best Seller"
    },
    {
        id: 'product15',
        url: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR2DdE-OHyzifYVjV5azw2_AIOhGMhwOCfOl2h3FLQ4nRtBZrS17DKR6hlgkBkqWJC2R2Mw3HWV4XNIn_aJN-Qhr7-gD_f4efgZb3pfQ2Gb4SSwnyOmVFNCmegQhHT18nHxe59n&usqp=CAc',
        detailUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR2DdE-OHyzifYVjV5azw2_AIOhGMhwOCfOl2h3FLQ4nRtBZrS17DKR6hlgkBkqWJC2R2Mw3HWV4XNIn_aJN-Qhr7-gD_f4efgZb3pfQ2Gb4SSwnyOmVFNCmegQhHT18nHxe59n&usqp=CAc',
        title: {
            shortTitle: 'Fitbit Charge',
            longTitle: 'Fitbit Charge 4 Fitness and Activity Tracker'
        },
        price: {
            mrp: 14999,
            cost: 11999,
            discount: '20%'
        },
        description: 'The Fitbit Charge 4 Fitness and Activity Tracker is a great way to track your workouts, monitor your heart rate, and keep track of your daily activity. It is water-resistant and has a long battery life. With the Fitbit app, you can set goals and track your progress over time.',
        discount: 'Extra 5% Off',
        tagline: "Best Seller"
    },
    {
        id: 'product16',
        url: 'https://m.media-amazon.com/images/I/61bX2AoGj2L._SL1500_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/61bX2AoGj2L._SL1500_.jpg',
        title: {
            shortTitle: 'MacBook Pro',
            longTitle: 'Apple MacBook Pro 14" with Apple M1 Max Chip, 10-core CPU, 32-core GPU, 16GB RAM, 1TB SSD, Retina Display with True Tone, Touch Bar and Touch ID, macOS Monterey'
        },
        price: {
            mrp: 2699,
            cost: 2499,
            discount: '7%'
        },
        description: 'Experience ultimate productivity on the Apple MacBook Pro. This laptop features the powerful Apple M1 Max chip with a 10-core CPU and 32-core GPU, providing lightning-fast performance for even the most demanding tasks. The 14" Retina display with True Tone delivers stunning visuals, while the Touch Bar and Touch ID provide convenient access to features and secure authentication. With 16GB of RAM and a 1TB SSD, you can easily multitask and store all your files. Plus, the MacBook Pro comes with macOS Monterey pre-installed, offering the latest features and security updates.',
        discount: 'Extra $100 off with promo code XYZ123',
        tagline: 'Best Seller'
    },
    {
        id: 'product17',
        url: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSJynGdPUvgTlnTmE3rj3-f-jSLq6YPiyJ4KA5Oj644ekkKW-PT3HEwG9DBfc8nN8h8G68C0zhqGecdLH2prabqHYzssK98l-Oqa2DVQsrJeUWthnZgRzXJ3f6x0-UdYFk3FA&usqp=CAc',
        detailUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSJynGdPUvgTlnTmE3rj3-f-jSLq6YPiyJ4KA5Oj644ekkKW-PT3HEwG9DBfc8nN8h8G68C0zhqGecdLH2prabqHYzssK98l-Oqa2DVQsrJeUWthnZgRzXJ3f6x0-UdYFk3FA&usqp=CAc',
        title: {
            shortTitle: 'iPhone 13 Pro',
            longTitle: 'iPhone 13 Pro (128GB, Graphite)',
        },
        price: {
            mrp: 999,
            cost: 899,
            discount: '10%',
        },
        description: 'The iPhone 13 Pro is the latest and greatest smartphone from Apple. With a stunning 6.1" Super Retina XDR display, A15 Bionic chip, and triple-camera system, this phone is designed to impress. Plus, with iOS 15 pre-installed, you get access to all the latest features and security updates.',
        discount: 'Free Apple Music subscription for 3 months',
        tagline: 'Best Seller',
    },
    {
        id: 'product18',
        url: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQEaCx2QfXZLyPih9O-cph5NemRhmA8BsylABrOb9B8gcDMPIlmGZAEbTseSCHdl2JRUnWNb6DjOfqG0RB9FneUw5l6RjyQkpd9M9TUHXbyop4NAr4FVCH9My5325fzqu4pgTs&usqp=CAc',
        detailUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQEaCx2QfXZLyPih9O-cph5NemRhmA8BsylABrOb9B8gcDMPIlmGZAEbTseSCHdl2JRUnWNb6DjOfqG0RB9FneUw5l6RjyQkpd9M9TUHXbyop4NAr4FVCH9My5325fzqu4pgTs&usqp=CAc',
        title: {
            shortTitle: 'Samsung Galaxy A52 5G',
            longTitle: 'Samsung Galaxy A52 5G (128GB, Awesome Black)',
        },
        price: {
            mrp: 120099,
            cost: 104486,
            discount: '13%',
        },
        description: 'The Samsung Galaxy A52 5G is a powerful smartphone with a large 6.5" Super AMOLED display, quad rear camera setup, and long-lasting 4500mAh battery. With 5G connectivity, you can download and stream content at lightning-fast speeds. Plus, with a sleek and modern design, this phone is sure to turn heads.',
        discount: 'Extra 5% off with promo code SPRINGSALE',
        tagline: 'Best Seller'
    },
    {
        id: 'product19',
        url: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR6DmD5Y8t6qRnjpTs-mAlXxr6c4CN7kHWD8SIohi6gH3mzhboteZSdZ0VqQzZzD3fHfMrVkgH1JPDiV9KevWw2YfiGk-9hSrHM1HGS-QltUcMrvt35b9BdEA&usqp=CAc',
        detailUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR6DmD5Y8t6qRnjpTs-mAlXxr6c4CN7kHWD8SIohi6gH3mzhboteZSdZ0VqQzZzD3fHfMrVkgH1JPDiV9KevWw2YfiGk-9hSrHM1HGS-QltUcMrvt35b9BdEA&usqp=CAc',
        title: {
            shortTitle: 'OnePlus 8 Pro',
            longTitle: 'OnePlus 8 Pro (128GB, Onyx Black)',
        },
        price: {
            mrp: 32999,
            cost: 28379,
            discount: '14%',
        },
        description: 'The OnePlus 8 Pro is a flagship smartphone with all the bells and whistles. With a 6.78" Fluid AMOLED display, 5G connectivity, and quad rear camera setup, this phone is designed to deliver top-notch performance. Plus, with Warp Charge 30T and a large 4510mAh battery, you can stay powered up all day long.',
        discount: 'Free OnePlus Buds Z with purchase',
        tagline: 'Upto 80% off',
    },
    {
        id: 'product20',
        url: 'https://m.media-amazon.com/images/I/61bX2AoGj2L._SL1500_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/61bX2AoGj2L._SL1500_.jpg',
        title: {
            shortTitle: 'MacBook Pro',
            longTitle: 'Apple MacBook Pro 14" with Apple M1 Max Chip, 10-core CPU, 32-core GPU, 16GB RAM, 1TB SSD, Retina Display with True Tone, Touch Bar and Touch ID, macOS Monterey'
        },
        price: {
            mrp: 2699,
            cost: 2499,
            discount: '7%'
        },
        description: 'Experience ultimate productivity on the Apple MacBook Pro. This laptop features the powerful Apple M1 Max chip with a 10-core CPU and 32-core GPU, providing lightning-fast performance for even the most demanding tasks. The 14" Retina display with True Tone delivers stunning visuals, while the Touch Bar and Touch ID provide convenient access to features and secure authentication. With 16GB of RAM and a 1TB SSD, you can easily multitask and store all your files. Plus, the MacBook Pro comes with macOS Monterey pre-installed, offering the latest features and security updates.',
        discount: 'Extra $100 off with promo code XYZ123',
        tagline: 'Upto 80% off'
    }, {
        id: 'product21',
        url: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTHgkOhE3Pp47jHksU4BIrHc6-eKIm7eCaFKCxz-HN5DbwHqUzSL0vuIdGRmDTJkDaCRMJtdqTzMTXzMY7Bm9sPt8ZmPM1PNjVIkfJCZ5pO8fcZ5A2i076Hzc-4ouRQV8E9Og&usqp=CAc',
        detailUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTHgkOhE3Pp47jHksU4BIrHc6-eKIm7eCaFKCxz-HN5DbwHqUzSL0vuIdGRmDTJkDaCRMJtdqTzMTXzMY7Bm9sPt8ZmPM1PNjVIkfJCZ5pO8fcZ5A2i076Hzc-4ouRQV8E9Og&usqp=CAc',
        title: {
            shortTitle: 'Philips BT3211/15 corded',
            longTitle: 'Philips BT3211/15 corded & cordless Stainless Steel Blade Beard Trimmer'
        },
        price: {
            mrp: 2595,
            cost: 1799,
            discount: '31%'
        },
        description: 'Philips BT3211/15 corded & cordless Stainless Steel Blade Beard Trimmer is a perfect grooming solution for men. It comes with 20 lock-in length settings, which makes it easy to trim beard hair of different lengths. The trimmer has a powerful battery that offers up to 60 minutes of runtime after a 1-hour charge.',
        discount: 'Extra 5% Off',
        tagline: 'Upto 80% off'
    },
    {
        id: 'product22',
        url: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQEhBdGDb9YPcBh7-P5WD62DtX11s06iapgTCY13SeQ9ndMSJJR3HBHlQncXJWX5fY1BwCB2nRzrirzar9lgKpg2WANpMSvYj7qeOiM1VG9RP7ljc69tmu0RHP5UpbosLIZiJ1W&usqp=CAc',
        detailUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQEhBdGDb9YPcBh7-P5WD62DtX11s06iapgTCY13SeQ9ndMSJJR3HBHlQncXJWX5fY1BwCB2nRzrirzar9lgKpg2WANpMSvYj7qeOiM1VG9RP7ljc69tmu0RHP5UpbosLIZiJ1W&usqp=CAc',
        title: {
            shortTitle: 'Syska HT3333K Corded ',
            longTitle: 'Syska HT3333K Corded & Cordless Trimmer for Men'
        },
        price: {
            mrp: 2199,
            cost: 1299,
            discount: '40%'
        },
        description: 'The Syska HT3333K is a versatile trimmer that can be used both corded and cordless. It has a self-sharpening stainless steel blade that ensures a smooth and efficient trim. The trimmer has a battery backup of up to 60 minutes on a full charge.',
        discount: 'Extra 10% Off',
        tagline: 'Upto 80% off'
    },
    {
        id: 'product23',
        url: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTVwem8Y8PmM9FpWjVPkNJHKsFOyhvCJ1FVrmetFs95_G4l8GkyF_yiS4drMwYzIMQr6QbBhbOQwDTdlUQATJxgBExnlq5v4H-abuAikb1wvBFwNT-h_zxq_ZUQzhyayQpxew&usqp=CAc',
        detailUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTVwem8Y8PmM9FpWjVPkNJHKsFOyhvCJ1FVrmetFs95_G4l8GkyF_yiS4drMwYzIMQr6QbBhbOQwDTdlUQATJxgBExnlq5v4H-abuAikb1wvBFwNT-h_zxq_ZUQzhyayQpxew&usqp=CAc',
        title: {
            shortTitle: 'IFB 25 L Convection Microwave Oven',
            longTitle: 'IFB 25 L Convection Microwave Oven (25SC4, Metallic Silver)'
        },
        price: {
            mrp: 15490,
            cost: 12490,
            discount: '19%'
        },
        description: 'This IFB 25 L convection microwave oven comes with features such as keep warm, multi-stage cooking, and more. It also comes with a steam clean feature that lets you clean the microwave oven with ease. ',
        discount: 'No cost EMI available',
        tagline: 'Upto 80% off'
    },
    {
        id: 'watch1',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0X_kcFOJb-Ne-GZrokM87-OsGnDeUlwe1WA&usqp=CAU',
        detailUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0X_kcFOJb-Ne-GZrokM87-OsGnDeUlwe1WA&usqp=CAU',
        title: {
            shortTitle: 'Rolex Pearlmaster',
            longTitle: 'Rolex Pearlmaster',
        },
        price: {
            mrp: 125000,
            cost: 100000,
            discount: '20%',
        },
        description: 'This elegant and luxurious timepiece from Rolex features an 18 ct white gold case and bracelet, set with diamonds. The watch has a silver dial with diamond hour markers and is powered by a self-winding mechanical movement.',
        discount: 'Extra 5% off with code LUXEWATCH',
        tagline: 'Upto 80% off',
    },
    {
        id: 'watch2',
        url: 'https://cdn1.ethoswatches.com/media/catalog/product/cache/5b6ffe97254a86fab5749cb594365e70/t/a/tag-heuer-carrera-day-date-cv2a10-ba0796.jpg',
        detailUrl: 'https://cdn1.ethoswatches.com/media/catalog/product/cache/5b6ffe97254a86fab5749cb594365e70/t/a/tag-heuer-carrera-day-date-cv2a10-ba0796.jpg',
        title: {
            shortTitle: 'TAG Heuer',
            longTitle: 'TAG Heuer Carrera Chronograph Day-Date Automatic Watch',
        },
        price: {
            mrp: 6000,
            cost: 4800,
            discount: '20%',
        },
        description: "This classic and stylish watch from TAG Heuer features a 44 mm stainless steel case and bracelet, with a black dial and white subdials. The watch is powered by an automatic movement and has a day-date display at 3 o'clock.",
        discount: 'Extra 10% off with code TAG10',
        tagline: 'Upto 80% off',
    }
]

module.exports = products;