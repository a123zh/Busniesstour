var APP_DATA = {
  "scenes": [
    {
      "id": "0-atrium",
      "name": "Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6056236636407917,
          "pitch": -0.02012720103762966,
          "rotation": 0.7853981633974483,
          "target": "1-level-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.1332430116268473,
          "pitch": 0.1711666647493182,
          "title": "Atrium",
          "text": "Welcome to faculty of business! There're many seats on level1 for students to study and relax, let's start our journey from here!"
        }
      ]
    },
    {
      "id": "1-level-2",
      "name": "Level 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.34952453023903374,
          "pitch": -0.18173975869133407,
          "rotation": 0.7853981633974483,
          "target": "2-level-3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.118425738725513,
          "pitch": 0.11131041341035441,
          "title": "Sign of Level 2",
          "text": "Now we are on the 2nd floor. Using these kinds of signs can help us find more interesting things here !"
        },
        {
          "yaw": 1.073329898479022,
          "pitch": 0.3847748863725471,
          "title": "Handwash",
          "text": "We can wash our hands here for safety."
        }
      ]
    },
    {
      "id": "2-level-3",
      "name": "Level 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7847072057328628,
          "pitch": 0.18090030368157173,
          "rotation": 3.9269908169872414,
          "target": "1-level-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.2782529689872675,
          "pitch": 0.21656073207607918,
          "title": "Room on Level 3",
          "text": "Now we arrive at 3rd floor, there're many rooms for different functions and waiting us to explore!"
        }
      ]
    }
  ],
  "name": "Faculty of Business",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
