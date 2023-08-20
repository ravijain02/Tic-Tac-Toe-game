import React, { useState } from 'react'

const Home = () => {

    const [board, setBoard] = useState(Array(9).fill(''))
    const [player, setPlayer] = useState('X')

    const turn = (n) => {
        let tempboard = [...board]
        tempboard[n] = player
        setBoard(tempboard)
        if(board[n] !== '') {
            alert("Already Fill the Box")
            return
        }
        if(player === 'X') {
            setPlayer('O')
        } else {
            setPlayer('X')
        }
        if(winner(tempboard)) {
            alert("You Are The Winner")
            tempboard.fill('')
            setBoard(tempboard)
        }

        if(draw(tempboard)) {
            alert("Match Draw")
            tempboard.fill('')
            setBoard(tempboard)
        }
    }

    const winner = (board) => {
        const conditions = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        let flag = false
        conditions.forEach(num => {
            if(board[num[0]] !== '' && board[num[1]] !== '' && board[num[2]] !== '') {
                if(board[num[0]] === board[num[1]] && board[num[1]] === board[num[2]]) {
                    flag = true
                }
            }
        })
        return flag
    }

    const draw = () => {
        let count = 0;
        board.forEach(num => {
            if(num !== '') {
                count++
            }
        })

        if(count >= 9) {
            return true
        } else {
            return false
        }
    }
    
  return (
    <div className='home'>
        <table className='border'>
            <tbody>
                <tr>
                    <td onClick={() => turn(0)}>{board[0]}</td>
                    <td onClick={() => turn(1)}>{board[1]}</td>
                    <td onClick={() => turn(2)}>{board[2]}</td>
                </tr>
                <tr>
                    <td onClick={() => turn(3)}>{board[3]}</td>
                    <td onClick={() => turn(4)}>{board[4]}</td>
                    <td onClick={() => turn(5)}>{board[5]}</td>
                </tr>
                <tr>
                    <td onClick={() => turn(6)}>{board[6]}</td>
                    <td onClick={() => turn(7)}>{board[7]}</td>
                    <td onClick={() => turn(8)}>{board[8]}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Home