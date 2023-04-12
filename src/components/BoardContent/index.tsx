import { initialData } from '@/common/data'
import { isEmpty } from 'lodash'
import React, {useEffect, useState} from 'react'
import BoardColumn from '../Columns'
import { mapOrder } from '@/utilities/sorts'

function BoardContent() {
    const [board, setBoard] = useState({})
    const [columns, setColumns] = useState<any>([])

    useEffect(()=>{
        const boardFromDB = initialData.boards.find(board => board.id === 'board-1')
        if(boardFromDB){
            setBoard(boardFromDB)
            setColumns(mapOrder(boardFromDB.columns, boardFromDB.columnOrder, 'id'))
        }
    }, [])
    if(isEmpty(board)) {
      return <div className='w-full rounded-md bg-white text-black flex items-center justify-center'>Board not found!</div>
    }
  return (
    <div className='flex gap-4 p-6 w-full overflow-x-auto'>
        {
          columns?.map((item: any, index: number) => {
            return <BoardColumn key={index} column={item}/>
          })
        }
    </div>
  )
}

export default BoardContent 