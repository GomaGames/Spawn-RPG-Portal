GAME_DIST_ZIP := ../Spawn-RPG/SpawnHeroRPG.zip
GAME_DIST_DIR := public
REMOTE_DIST_PATH := spawn-hero-rpg.gomagames.com/
SITE_DIST_ZIP := upload.tar.bz2
SSH_TARGET := goma@gomagames.com

all: updateDist pushProduction

updateDist:
	cp ${GAME_DIST_ZIP} ${GAME_DIST_DIR}

pushProduction:
	tar -C public/ -cvjf ${SITE_DIST_ZIP} .
	scp ${SITE_DIST_ZIP} ${SSH_TARGET}:${REMOTE_DIST_PATH}${SITE_DIST_ZIP}
	ssh ${SSH_TARGET} tar -C ${REMOTE_DIST_PATH} -xvjf ${REMOTE_DIST_PATH}${SITE_DIST_ZIP}
	scp .config ${SSH_TARGET}:${REMOTE_DIST_PATH}firebase.config.js
	ssh ${SSH_TARGET} rm ${REMOTE_DIST_PATH}${SITE_DIST_ZIP}
	rm ${SITE_DIST_ZIP}
