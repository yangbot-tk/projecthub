import React from 'react'
import Board from 'react-trello'

const data = {
  lanes: [
    {
      id: 'PLANNED',
      title: 'Planned Tasks',
      label: '20/70',
      style: {
        width: 280,
      },
      cards: [
        {
          id: 'Milk',
          title: 'Buy milk',
          label: '15 mins',
          description: '2 Gallons of milk at the Deli store',
        },
        {
          id: 'Plan2',
          title: 'Dispose Garbage',
          label: '10 mins',
          description: 'Sort out recyclable and waste as needed',
        },
        {
          id: 'Plan3',
          title: 'Write Blog',
          label: '30 mins',
          description: 'Can AI make memes?',
        },
        {
          id: 'Plan4',
          title: 'Pay Rent',
          label: '5 mins',
          description: 'Transfer to bank account',
        },
      ],
    },
    {
      id: 'WIP',
      title: 'Work In Progress',
      label: '10/20',
      style: {
        width: 280,
      },
      cards: [
        {
          id: 'Wip1',
          title: 'Clean House',
          label: '30 mins',
          description:
            'Soap wash and polish floor. Polish windows and doors. Scrap all broken glasses',
        },
      ],
    },

    {
      id: 'COMPLETED',
      title: 'Completed',
      style: {
        width: 280,
      },
      label: '2/5',
      cards: [
        {
          id: 'Completed1',
          title: 'Practice Meditation',
          label: '15 mins',
          description: 'Use Headspace app',
        },
        {
          id: 'Completed2',
          title: 'Maintain Daily Journal',
          label: '15 mins',
          description: 'Use Spreadsheet for now',
        },
      ],
    },
  ],
}

function Kanban() {
  return (
    <div className="kanban-container">
      <Board data={data} draggable />
    </div>
  )
}

export default Kanban
