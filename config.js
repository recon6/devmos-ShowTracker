{
    "siteName": "DevRecon",
    "siteRoot": "http://devrecon.herokuapp.com",
    "siteIP": "0.0.0.0",
    "log_level": "info",
    "db": {
        "type":"mongo",
        "servers": [
        "mongodb://ds051523.mongolab.com:51523/showrecon/"
        ],
        "name": "showrecon",
        "authentication": {
            "un": "recon6",
            "pw": "green1",
        },
        "writeConern": 1
    },
    "cache": {
        "fake": true,
        "host": "localhost",
        "port": 6379
    },
    "settings": {
        "use_memory": true,
        "use_cache": false
    },
    "templates": {
        "use_memory": true,
        "use_cache": false
    },
    "plugins": {
        "caching": {
            "use_memory": true,
            "use_cache": false
        }
    }
}