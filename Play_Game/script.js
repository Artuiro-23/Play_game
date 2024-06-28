function showGame(gameId) {
    document.querySelectorAll('.game').forEach(game => {
        game.style.display = 'none';
    });
    document.getElementById(gameId).style.display = 'block';
}

// Initially show the first game
showGame('game1');
