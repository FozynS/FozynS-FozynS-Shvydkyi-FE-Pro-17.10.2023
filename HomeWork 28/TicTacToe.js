class TicTacToe {
    field = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ];

    static playersMove = [1, 2];

    playerMove(playerIndex, x, y) {
        if (this.field[y][x]) {
            console.log('already set');
            return;
        }

        this.field[y][x] = TicTacToe.playersMove[playerIndex];
        this.getWinner();
    }

    getWinner() {
        // 1 row
        for (const row of this.field) {
            const win = this.rowHasWinner(row);
            if (win) {
                return win;
            }
        }

        // 2 column
        for (let i = 0; i < 3; i++) {
            const column = this.field.map(row => row[i]);
            const win = this.rowHasWinner(column);
            if (win) {
                return win;
            }
        }

        // 3 diagonal
        for (let i = 0; i < 3; i++) {
            const diagonal = this.field[i][i];

            const win = this.rowHasWinner(diagonal);
            if (win) {
                return win;
            }
        }

        //4 reverse diagonal 
        for (let i = 0; i < 3; i++) {
            const diagonal = this.field[i][3 - i - 1];

            const win = this.rowHasWinner(diagonal);
            if (win) {
                return win;
            }
        }
    }

    rowHasWinner(row) {
        let firstNumber = row[0];
        for (let i = 1; i < row.length; i++) {
            if (firstNumber !== row[i]) {
                return false;
            }

            return row[0];
        }
    }
}

const game = new TicTacToe();
game.playerMove(1, 0, 0);
game.playerMove(1, 1, 1);
game.playerMove(1, 2, 2);

/*
HW
    finish ticTacToe with diagonal
*/