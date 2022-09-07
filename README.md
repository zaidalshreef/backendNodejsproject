# 

## API Reference

### Endpoints

GET '/property'
POST '/property'
GET '/property/:sellingType'
GET '/property/id/:id'
PUT '/property/id/:id'
DELETE '/property/id/:id'





#### GET '/property'
- Fetches  propertys :
    - *Returns: a list of property 
- Example: ``` http://127.0.0.1:8080/property```
```
{
[
  {
        "_id": "6318df4528432599206c6689",
        "title": "Apartment for Rent",
        "price": 2450000,
        "sellingType": "rent",
        "propertyType": "Apartment",
        "propertySize": "3,122 sqft  /  290 sqm",
        "description": "the details :\r\n6 rooms\r\n1 Lounge\r\n1 kitchen\r\n1 bath\r\n\r\nApartment features:\r\nPrivet roof\r\nReady Kitchen\r\nready air conditioners\r\n\r\nBuilding features:\r\nExcellent location near the sea\r\n\r\nRent 75thousand two payments\r\nInsurance 3 thousand\r\n    ",
        "rooms": 12,
        "available": true,
        "deleted": false,
        "images": [
            {
                "url": "https://res.cloudinary.com/doh1l2ew2/image/upload/v1662574403/Property/hefliutobeqaa8qhsmvs.png",
                "filename": "Property/hefliutobeqaa8qhsmvs",
                "_id": "6318df4528432599206c668a"
            },
            {
                "url": "https://res.cloudinary.com/doh1l2ew2/image/upload/v1662574404/Property/zbimq6ucrramvlozwmhu.png",
                "filename": "Property/zbimq6ucrramvlozwmhu",
                "_id": "6318df4528432599206c668b"
            }
        ],
        "agent": "6318d31f78591ea9fc476f42",
        "createdAt": "2022-09-07T18:13:25.395Z",
        "updatedAt": "2022-09-07T18:14:51.845Z",
        "__v": 1,
        "rentType": "month"
    },
    {
        "_id": "6318d4e078591ea9fc476f62",
        "title": "for sale duplex villa ",
        "price": 3500000,
        "sellingType": "sell",
        "propertyType": "Villa",
        "propertySize": "4,316 sqft  /  401 sqm",
        "description": "for sale\r\nUsed duplex villa\r\n\r\n# Seven rooms and two sitting rooms\r\n\r\n# Ground floor\r\n# Men's guest board\r\n# Women's guest council\r\n# Spacious living room\r\n# master kitchen\r\n# Two toilets\r\n\r\n# First round\r\n# Three master bedrooms\r\n# Spacious living room\r\n# Kitchen Service\r\n# Three toilets\r\n\r\n# Supplement\r\n# two bedrooms\r\n# Kitchen Service\r\n# Laundry Room\r\n# W.C\r\n# independent surface\r\n\r\n# Advantages of the villa\r\n\r\n# Indoor elevator\r\n# swimming pool\r\n# diwaniya\r\n# car entrance\r\n# driver room\r\n# (9) Installed split air conditioners\r\n\r\n# Area (401 m)\r\n# The villa is on two streets\r\n#facade west\r\n# The property is 15 years old\r\n    ",
        "rooms": 11,
        "available": true,
        "deleted": false,
        "images": [
            {
                "url": "https://res.cloudinary.com/doh1l2ew2/image/upload/v1662571742/Property/gcft1nvwxw3rl4eewsh8.jpg",
                "filename": "Property/gcft1nvwxw3rl4eewsh8",
                "_id": "6318d4e078591ea9fc476f63"
            },
            {
                "url": "https://res.cloudinary.com/doh1l2ew2/image/upload/v1662571743/Property/rzyt7eaeg23xas5iawgd.jpg",
                "filename": "Property/rzyt7eaeg23xas5iawgd",
                "_id": "6318d4e078591ea9fc476f64"
            },
            {
                "url": "https://res.cloudinary.com/doh1l2ew2/image/upload/v1662571743/Property/vxitrkuzlelifehqy4i0.jpg",
                "filename": "Property/vxitrkuzlelifehqy4i0",
                "_id": "6318d4e078591ea9fc476f65"
            },
            {
                "url": "https://res.cloudinary.com/doh1l2ew2/image/upload/v1662571744/Property/edawauzhmvrz52v7ilol.png",
                "filename": "Property/edawauzhmvrz52v7ilol",
                "_id": "6318d4e078591ea9fc476f66"
            }
        ],
        "agent": "6318d31f78591ea9fc476f42",
        "createdAt": "2022-09-07T17:29:04.963Z",
        "updatedAt": "2022-09-07T17:30:00.664Z",
        "__v": 1
    },
    {
        "_id": "6318d3f778591ea9fc476f50",
        "title": "شقق تمليك فاخرة ",
        "price": 850000,
        "sellingType": "sell",
        "propertyType": "Apartment",
        "propertySize": "3,122 sqft  /  290 sqm",
        "description": "شقق فاخرة للتمليك بدون دفعة أولى بمخطط الراية\r\n\r\nتشطيب فاخر ومساحات كبيرة وإطلالة مميزة ،\r\n\r\nمكونة من 6 غرف\r\n\r\nصالة كبيرة و 4 دورات مياه وملحقاتها الخاصة\r\n\r\nخزان مستقل سفلي وعلوي موقف خاص وعدادات مستقله للماء والكهرباء.\r\n\r\nخدماتنا\r\n\r\n* بدون دفعه أولى\r\n\r\n* نقبل موظفي القطاعين الحكومي والخاص\r\n\r\n* برامج تمويلية للبنوك والشركات\r\n\r\n* اتحاد ملاك\r\n\r\n* ضمانات على البناء ونظام الكهرباء والسباكة",
        "rooms": 9,
        "available": true,
        "deleted": false,
        "images": [
            {
                "url": "https://res.cloudinary.com/doh1l2ew2/image/upload/v1662571510/Property/jjjruh4xbic5kg9pnmqv.png",
                "filename": "Property/jjjruh4xbic5kg9pnmqv",
                "_id": "6318d3f778591ea9fc476f51"
            }
        ],
        "agent": "6318d31f78591ea9fc476f42",
        "createdAt": "2022-09-07T17:25:11.197Z",
        "updatedAt": "2022-09-07T17:25:11.197Z",
        "__v": 0
    }
    ]
}
```
#### GET '/property/:sellingType'
- Fetches property sellingType (Sell or Rent):
    - *Request parameters: (sell or rent)
    - *Returns: a list of property with given type 
- Example: ``` http://127.0.0.1:8080/property/sell```
```
[
    {
        "_id": "6318de5e28432599206c654a",
        "title": "Apartment for Rent",
        "price": 6542200,
        "sellingType": "sell",
        "propertyType": "Apartment",
        "propertySize": "3,122 sqft  /  290 sqm",
        "description": "he details :\r\n6 rooms\r\n1 Lounge\r\n1 kitchen\r\n1 bath\r\n\r\nApartment features:\r\nPrivet roof\r\nReady Kitchen\r\nready air conditioners\r\n\r\nBuilding features:\r\nExcellent location near the sea\r\n\r\nRent 75thousand two payments\r\nInsurance 3 thousand\r\n\r\n    \r\n    ",
        "rooms": 4,
        "available": true,
        "deleted": false,
        "images": [
            {
                "url": "https://res.cloudinary.com/doh1l2ew2/image/upload/v1662574170/Property/blh6tlwbljyj8tggmdrg.png",
                "filename": "Property/blh6tlwbljyj8tggmdrg",
                "_id": "6318de5e28432599206c654c"
            },
            {
                "url": "https://res.cloudinary.com/doh1l2ew2/image/upload/v1662574172/Property/o4a2psppslgpn2aqc8d7.png",
                "filename": "Property/o4a2psppslgpn2aqc8d7",
                "_id": "6318de5e28432599206c654d"
            },
            {
                "url": "https://res.cloudinary.com/doh1l2ew2/image/upload/v1662574173/Property/b3sqpsixj2hyc2gbmnoy.png",
                "filename": "Property/b3sqpsixj2hyc2gbmnoy",
                "_id": "6318de5e28432599206c654e"
            },
            {
                "url": "https://res.cloudinary.com/doh1l2ew2/image/upload/v1662574200/Property/dthmpy2fb23adzdi644r.jpg",
                "filename": "Property/dthmpy2fb23adzdi644r",
                "_id": "6318de7928432599206c6593"
            },
            {
                "url": "https://res.cloudinary.com/doh1l2ew2/image/upload/v1662574201/Property/tudto0gb37essgsrxmv9.jpg",
                "filename": "Property/tudto0gb37essgsrxmv9",
                "_id": "6318de7928432599206c6594"
            }
        ],
        "agent": "6318d31f78591ea9fc476f42",
        "createdAt": "2022-09-07T18:09:34.048Z",
        "updatedAt": "2022-09-07T18:10:28.604Z",
        "__v": 2
    },
    {
        "_id": "6318d9fa78591ea9fc476ff5",
        "title": "شقق فاخرة للتمليك بدون دفعة أولى",
        "price": 90000,
        "sellingType": "sell",
        "propertyType": "Apartment",
        "propertySize": "2,368 sqft  /  220 sqm",
        "description": "شقق فاخره للتمليك\r\n\r\nمكونة من خمس غرف وصالة كبيرة وغرفة خادمة\r\n\r\nتشطيب ممتاز ومساحة كبيرة خزانات مستقلة وغرفة سائق موقف خاص, المساحة٢٢٠ م,\r\n\r\n* كل الخدمات متوفرة ( الماء والصرف الصحي والانترنت)\r\n\r\n\r\n* ظهيرة شارع تجاري\r\n",
        "rooms": 9,
        "available": true,
        "deleted": false,
        "images": [
            {
                "url": "https://res.cloudinary.com/doh1l2ew2/image/upload/v1662573048/Property/wwup4epljfjjj5zme68q.jpg",
                "filename": "Property/wwup4epljfjjj5zme68q",
                "_id": "6318d9fa78591ea9fc476ff6"
            },
            {
                "url": "https://res.cloudinary.com/doh1l2ew2/image/upload/v1662573048/Property/y5o1rifiotcocoh3vz2d.jpg",
                "filename": "Property/y5o1rifiotcocoh3vz2d",
                "_id": "6318d9fa78591ea9fc476ff7"
            },
            {
                "url": "https://res.cloudinary.com/doh1l2ew2/image/upload/v1662573049/Property/yawppbvltgh8b0drsqpt.jpg",
                "filename": "Property/yawppbvltgh8b0drsqpt",
                "_id": "6318d9fa78591ea9fc476ff8"
            },
            {
                "url": "https://res.cloudinary.com/doh1l2ew2/image/upload/v1662573050/Property/kioo2nc5ejuvcukkvxp9.png",
                "filename": "Property/kioo2nc5ejuvcukkvxp9",
                "_id": "6318d9fa78591ea9fc476ff9"
            }
        ],
        "agent": "6318d31f78591ea9fc476f42",
        "createdAt": "2022-09-07T17:50:50.979Z",
        "updatedAt": "2022-09-07T17:51:32.451Z",
        "__v": 1
    },
    {
        "_id": "6318d96e78591ea9fc476fd8",
        "title": "Luxury villa for sale ",
        "price": 42000000,
        "sellingType": "sell",
        "propertyType": "Villa",
        "propertySize": "9,688 sqft  /  900 sqm",
        "description": "Luxury villa for rent in Al-Basateen neighborhood, Ahmed Al-Batrawi Street, the land area is 720 square meters\r\nFloor area 900 square meters\r\n4 master bedrooms\r\nopen salons\r\nFood Hall\r\n2 living rooms\r\n4 kitchens\r\n7 bathrooms\r\ndriver room\r\nMaid's room\r\nstorage room\r\nWashing room\r\nelevator\r\nService corridor\r\nCentral air-conditioning\r\n2 car parks\r\nSwimming pool\r\n",
        "rooms": 12,
        "available": true,
        "deleted": false,
        "images": [
            {
                "url": "https://res.cloudinary.com/doh1l2ew2/image/upload/v1662572904/Property/kh0i8bheikeifurlbhyu.png",
                "filename": "Property/kh0i8bheikeifurlbhyu",
                "_id": "6318d96e78591ea9fc476fd9"
            },
            {
                "url": "https://res.cloudinary.com/doh1l2ew2/image/upload/v1662572905/Property/zd7jzgyjnhkkzzf3hv3t.png",
                "filename": "Property/zd7jzgyjnhkkzzf3hv3t",
                "_id": "6318d96e78591ea9fc476fda"
            },
            {
                "url": "https://res.cloudinary.com/doh1l2ew2/image/upload/v1662572907/Property/k42owk9ths3gzz4c7ox3.png",
                "filename": "Property/k42owk9ths3gzz4c7ox3",
                "_id": "6318d96e78591ea9fc476fdb"
            },
            {
                "url": "https://res.cloudinary.com/doh1l2ew2/image/upload/v1662572909/Property/qliijcvivhjcg8yb0z2l.png",
                "filename": "Property/qliijcvivhjcg8yb0z2l",
                "_id": "6318d96e78591ea9fc476fdc"
            }
        ],
        "agent": "6318d31f78591ea9fc476f42",
        "createdAt": "2022-09-07T17:48:30.515Z",
        "updatedAt": "2022-09-07T17:48:30.515Z",
        "__v": 0
    },
    {
        "_id": "6318d4e078591ea9fc476f62",
        "title": "for sale duplex villa ",
        "price": 3500000,
        "sellingType": "sell",
        "propertyType": "Villa",
        "propertySize": "4,316 sqft  /  401 sqm",
        "description": "for sale\r\nUsed duplex villa\r\n\r\n# Seven rooms and two sitting rooms\r\n\r\n# Ground floor\r\n# Men's guest board\r\n# Women's guest council\r\n# Spacious living room\r\n# master kitchen\r\n# Two toilets\r\n\r\n# First round\r\n# Three master bedrooms\r\n# Spacious living room\r\n# Kitchen Service\r\n# Three toilets\r\n\r\n# Supplement\r\n# two bedrooms\r\n# Kitchen Service\r\n# Laundry Room\r\n# W.C\r\n# independent surface\r\n\r\n# Advantages of the villa\r\n\r\n# Indoor elevator\r\n# swimming pool\r\n# diwaniya\r\n# car entrance\r\n# driver room\r\n# (9) Installed split air conditioners\r\n\r\n# Area (401 m)\r\n# The villa is on two streets\r\n#facade west\r\n# The property is 15 years old\r\n    ",
        "rooms": 11,
        "available": true,
        "deleted": false,
        "images": [
            {
                "url": "https://res.cloudinary.com/doh1l2ew2/image/upload/v1662571742/Property/gcft1nvwxw3rl4eewsh8.jpg",
                "filename": "Property/gcft1nvwxw3rl4eewsh8",
                "_id": "6318d4e078591ea9fc476f63"
            },
            {
                "url": "https://res.cloudinary.com/doh1l2ew2/image/upload/v1662571743/Property/rzyt7eaeg23xas5iawgd.jpg",
                "filename": "Property/rzyt7eaeg23xas5iawgd",
                "_id": "6318d4e078591ea9fc476f64"
            },
            {
                "url": "https://res.cloudinary.com/doh1l2ew2/image/upload/v1662571743/Property/vxitrkuzlelifehqy4i0.jpg",
                "filename": "Property/vxitrkuzlelifehqy4i0",
                "_id": "6318d4e078591ea9fc476f65"
            },
            {
                "url": "https://res.cloudinary.com/doh1l2ew2/image/upload/v1662571744/Property/edawauzhmvrz52v7ilol.png",
                "filename": "Property/edawauzhmvrz52v7ilol",
                "_id": "6318d4e078591ea9fc476f66"
            }
        ],
        "agent": "6318d31f78591ea9fc476f42",
        "createdAt": "2022-09-07T17:29:04.963Z",
        "updatedAt": "2022-09-07T17:30:00.664Z",
        "__v": 1
    },
    {
        "_id": "6318d3f778591ea9fc476f50",
        "title": "شقق تمليك فاخرة ",
        "price": 850000,
        "sellingType": "sell",
        "propertyType": "Apartment",
        "propertySize": "3,122 sqft  /  290 sqm",
        "description": "شقق فاخرة للتمليك بدون دفعة أولى بمخطط الراية\r\n\r\nتشطيب فاخر ومساحات كبيرة وإطلالة مميزة ،\r\n\r\nمكونة من 6 غرف\r\n\r\nصالة كبيرة و 4 دورات مياه وملحقاتها الخاصة\r\n\r\nخزان مستقل سفلي وعلوي موقف خاص وعدادات مستقله للماء والكهرباء.\r\n\r\nخدماتنا\r\n\r\n* بدون دفعه أولى\r\n\r\n* نقبل موظفي القطاعين الحكومي والخاص\r\n\r\n* برامج تمويلية للبنوك والشركات\r\n\r\n* اتحاد ملاك\r\n\r\n* ضمانات على البناء ونظام الكهرباء والسباكة",
        "rooms": 9,
        "available": true,
        "deleted": false,
        "images": [
            {
                "url": "https://res.cloudinary.com/doh1l2ew2/image/upload/v1662571510/Property/jjjruh4xbic5kg9pnmqv.png",
                "filename": "Property/jjjruh4xbic5kg9pnmqv",
                "_id": "6318d3f778591ea9fc476f51"
            }
        ],
        "agent": "6318d31f78591ea9fc476f42",
        "createdAt": "2022-09-07T17:25:11.197Z",
        "updatedAt": "2022-09-07T17:25:11.197Z",
        "__v": 0
    }
]
```


#### POST '/property'
- create  new propertys and add it to the database:
- You must be logged in
    - *Request body:* form-data {
        property[title],
        property[price],
        property[sellingType],
        property[rooms],
        property[propertyType],
        property[propertySize],
        property[description],
        "images":{type="file"}
    }
}
    - *Returns : "success": true
```
{
  "success": true,
}
```

#### GET '/property/id/:id'
- information property :
    - *Returns :  property of a given id
- Example: ```http://127.0.0.1:5000/movies//property/id/6318f4b8b955139092bf4116 ''```
```
{
  
    "_id": "6318f4b8b955139092bf4116",
    "title": "sad",
    "price": 21,
    "sellingType": "sell",
    "propertyType": "dsfds",
    "propertySize": "dfdsf",
    "description": "212",
    "rooms": 2,
    "available": true,
    "deleted": false,
    "images": [],
    "createdAt": "2022-09-07T19:44:56.531Z",
    "updatedAt": "2022-09-07T19:44:56.531Z",
    "__v": 0

}
```

#### PUT '/property/id/:id'
- update a property with a given id:
- You must be logged in and the auther of the property page
    - *Request body:* form-data {
        property[title],
        property[price],
        property[sellingType],
        property[rooms],
        property[propertyType],
        property[propertySize],
        property[description],
        "images":{type="file"},
        "deleteImages[]":,

    }
}
    - *Returns : "success": true
```
{
  "success": true,
}
```

#### DELETE '/property/id/:id'

- flag property by id as deleted:
    - *Request arguments: property id  
    - *Returns : success true  
```
{
  "success": true
}
```

