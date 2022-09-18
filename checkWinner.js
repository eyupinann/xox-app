function checkWinner(board){
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    return lines.find(([a,b,c]) => {
        if (board[a]  !== null && board[a]  === board[b] && board[a]  === board[c] )
        {
            return true;
        }

        return false;
    });
}

export default checkWinner;
