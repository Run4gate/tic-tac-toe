class TicTacToe {
    player = 'x'
    i = 0
    field = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]
    getCurrentPlayerSymbol() {
        return this.player
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] === null) {
        this.field[rowIndex][columnIndex] = this.player
        this.player = this.player === 'x' ? 'o' : 'x'
        this.i++
        } else {
            return
        }
    }

    isFinished() {
        if (this.isDraw() === true || this.getWinner() !== null) {
            return true
        } else {
            return false
        }
    }

    getWinner() {
        if (this.field[0][0] === this.field[0][1] && this.field[0][0] === this.field[0][2]) {
            return this.field[0][0]
        } else if (this.field[1][0] === this.field[1][1] && this.field[1][0] === this.field[1][2]) {
            return this.field[1][0]
        } else if (this.field[2][0] === this.field[2][1] && this.field[2][0] === this.field[2][2]) {
            return this.field[2][0]
        } else if (this.field[0][0] === this.field[1][0] && this.field[0][0] === this.field[2][0]) {
            return this.field[0][0]
        } else if (this.field[0][1] === this.field[1][1] && this.field[0][1] === this.field[2][1]) {
            return this.field[0][1] 
        } else if (this.field[0][2] === this.field[1][2] && this.field[0][2] === this.field[2][2]) {
            return this.field[0][2]
        } else if (this.field[0][0] === this.field[1][1] && this.field[0][0] === this.field[2][2]) {
            return this.field[0][0]
        } else if (this.field[0][2] === this.field[1][1] && this.field[0][2] === this.field[2][0]) {
            return this.field[0][2]
        } else {
            return null
        }
    }

    noMoreTurns() {
        if (this.i >= 9) {
            return true
        } else {
            return false
        }
    }

    isDraw() {
        if (this.getWinner() === null && this.noMoreTurns() === true) {
            return true
        } else {
            return false
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex]
    }
}
game = new TicTacToe
console.log(game.getFieldValue(1,3))
module.exports = TicTacToe;