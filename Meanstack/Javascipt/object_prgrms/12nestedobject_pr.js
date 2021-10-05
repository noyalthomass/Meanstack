var countries=[
    {
    "name": "United Kingdom of Great Britain and Northern Ireland",
    "topLevelDomain": [
    ".uk"
    ],
    "alpha2Code": "GB",
    "alpha3Code": "GBR",
    "callingCodes": [
    "44"
    ],
    "capital": "London",
    "altSpellings": [
    "GB",
    "UK",
    "Great Britain"
    ],
    "subregion": "Northern Europe",
    "region": "Europe",
    "population": 67215293,
    "latlng": [
    54,
    -2
    ],
    "demonym": "British",
    "area": 242900,
    "gini": 35.1,
    "timezones": [
    "UTC-08:00",
    "UTC-05:00",
    "UTC-04:00",
    "UTC-03:00",
    "UTC-02:00",
    "UTC",
    "UTC+01:00",
    "UTC+02:00",
    "UTC+06:00"
    ],
    "borders": [
    "IRL"
    ],
    "nativeName": "United Kingdom",
    "numericCode": "826",
    "flags": {
    "svg": "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
    "png": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/320px-Flag_of_the_United_Kingdom.svg.png"
    },
    "currencies": [
    {
    "code": "GBP",
    "name": "British pound",
    "symbol": "£"
    }
    ],
    "languages": [
    {
    "iso639_1": "en",
    "iso639_2": "eng",
    "name": "English",
    "nativeName": "English"
    }
    ],
    "translations": {
    "br": "Reino Unido",
    "pt": "Reino Unido",
    "nl": "Verenigd Koninkrijk",
    "hr": "Ujedinjeno Kraljevstvo",
    "fa": "بریتانیای کبیر و ایرلند شمالی",
    "de": "Vereinigtes Königreich",
    "es": "Reino Unido",
    "fr": "Royaume-Uni",
    "ja": "イギリス",
    "it": "Regno Unito",
    "hu": "Nagy-Britannia"
    },
    "flag": "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
    "cioc": "GBR",
    "independent": true
    }
    ]

var symbol_ind=countries.map(country=>country.currencies[0].symbol)
console.log(symbol_ind);