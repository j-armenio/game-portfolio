function loadAssets() {
    loadSpriteAtlas('./assets/characters.png', {
        'player-down': { x: 0, y: 82, width: 16, height: 16 },
        'player-up': { x: 16, y: 82, width: 16, height: 16},
        'player-side': { x: 0, y: 98, width: 32, height: 16, sliceX: 2, sliceY: 1,
            anims: { 'walk': { from: 0, to}}}
    })
}