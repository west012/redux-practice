import { createSlice } from '@reduxjs/toolkit'

// const [eventItemList, setEventItemList] = useState([])
// setEventItemList(action)
const initialState = {
    eventItemList: [] 
}

const addToAgendaSlice  = createSlice({
    name: 'eventItems',
    initialState,
    reducers: {
        saveItem :(state, action) => {
            state.eventItemList.push(action.payload)
    }
}});

export const {

} = addToAgendaSlice.actions
export const {saveItem} =addToAgendaSlice.actions
export default addToAgendaSlice.reducer