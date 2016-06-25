GAME_DIST_ZIP := ../Spawn-RPG/SpawnHeroRPG.zip
GAME_DIST_DIR := public

all: updateDist pushProduction

updateDist:
	cp ${GAME_DIST_ZIP} ${GAME_DIST_DIR}

pushProduction:
	scp -r public/* goma@gomagames.com:spawn-hero-rpg.gomagames.com/
	scp .config goma@gomagames.com:spawn-hero-rpg.gomagames.com/firebase.config.js
