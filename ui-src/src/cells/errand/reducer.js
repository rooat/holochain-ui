import * as actions from './actions';
import { combineReducers } from 'redux';
import data from './data';

const errandApp = ( state = initialState, action) => {
  // console.log("ACTIONS:: ",action)
  const {meta, type , payload} = action;
  switch (type) {
    case actions.GET_BOARD_STATE:
      return {...state}
      break;
    //   const {board}=payload;
    //   return Object.assign({...state},board);
    case actions.ADD_CARD:
      return {...state}
      break;
    case actions.MOVE_CARD:
      return {...state}
      break;
    case actions.DELETE_CARD:
      return {...state}
      break;
    default:
      //console.log("default")
    return state
  }
}



const initialState =  {
  "lanes": [
    {
      "id": "TASK",
      "title": "Planned Tasks",
      "label": "20/70",
      "style": {"width": 280},
      "cards": [
        {
        "id": "Plan1",
          "title": "Buy milk",
          "label": "15 mins",
          "cardStyle": { "width": 270, "maxWidth": 270, "margin": "auto", "marginBottom": 5 },
          "description": "2 Gallons of milk at the Deli store"
        },
        {
          "id": "Plan2",
          "title": "Dispose Garbage",
          "label": "10 mins",
          "cardStyle": { "width": 270, "maxWidth": 270, "margin": "auto", "marginBottom": 5 },
          "description": "Sort out recyclable and waste as needed"
        },
        {
          "id": "Plan3",
          "title": "Write Blog",
          "label": "30 mins",
          "cardStyle": { "width": 270, "maxWidth": 270, "margin": "auto", "marginBottom": 5 },
          "description": "Can AI make memes?"
        },
        {
          "id": "Plan4",
          "title": "Pay Rent",
          "label": "5 mins",
          "cardStyle": { "width": 270, "maxWidth": 270, "margin": "auto", "marginBottom": 5 },
          "description": "Transfer to bank account"
        }
      ]
    },
    {
      "id": "WIP",
      "title": "Work In Progress",
      "label": "10/20",
      "style": {"width": 280},
      "cards": [
        {
          "id": "Wip1",
          "title": "Clean House",
          "label": "30 mins",
          "cardStyle": { "width": 270, "maxWidth": 270, "margin": "auto", "marginBottom": 5 },
          "description": "Soap wash and polish floor. Polish windows and doors. Scrap all broken glasses"
        }
      ]
    },
    {
      "id": "BLOCKED",
      "title": "Blocked",
      "label": "0/0",
      "style": {"width": 280},
      "cards": []
    },
    {
      "id": "COMPLETED",
      "title": "Completed",
      "style": {"width": 280},
      "label": "2/5",
      "cards": [
        {
          "id": "Completed1",
          "title": "Practice Meditation",
          "label": "15 mins",
          "cardStyle": { "width": 270, "maxWidth": 270, "margin": "auto", "marginBottom": 5 },
          "description": "Use Headspace app"
        },
        {
          "id": "Completed2",
          "title": "Maintain Daily Journal",
          "label": "15 mins",
          "cardStyle": { "width": 270, "maxWidth": 270, "margin": "auto", "marginBottom": 5 },
          "description": "Use Spreadsheet for now"
        }
      ]
    },
    {
      "id": "REPEAT",
      "title": "Repeat",
      "style": {"width": 280},
      "label": "1/1",
      "cards": [
        {
          "id": "Repeat1",
          "title": "Morning Jog",
          "label": "30 mins",
          "cardStyle": { "width": 270, "maxWidth": 270, "margin": "auto", "marginBottom": 5 },
          "description": "Track using fitbit"
        }
      ]
    },
    {
      "id": "ARCHIVED",
      "title": "Archived",
      "style": {"width": 280},
      "label": "1/1",
      "cards": [
        {
          "id": "Archived1",
          "title": "Go Trekking",
          "label": "300 mins",
          "cardStyle": { "width": 270, "maxWidth": 270, "margin": "auto", "marginBottom": 5 },
          "description": "Completed 10km on cycle"
        }
      ]
    },
    {
      "id": "ARCHIVED2",
      "title": "Archived2",
      "style": {"width": 280},
      "label": "1/1",
      "cards": [
        {
          "id": "Archived1",
          "title": "Go Trekking",
          "label": "300 mins",
          "cardStyle": { "width": 270, "maxWidth": 270, "margin": "auto", "marginBottom": 5 },
          "description": "Completed 10km on cycle"
        }
      ]
    },
    {
      "id": "ARCHIVED3",
      "title": "Archived3",
      "style": {"width": 280},
      "label": "1/1",
      "cards": [
        {
          "id": "Archived1",
          "title": "Go Trekking",
          "label": "300 mins",
          "cardStyle": { "width": 270, "maxWidth": 270, "margin": "auto", "marginBottom": 5 },
          "description": "Completed 10km on cycle"
        }
      ]
    }
  ]
}

export default errandApp;
