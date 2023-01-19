import { Create, Delete, getData, getOne, Update } from "../../api/pocketbase";
import { onFinishSave, onLoadData, onSetActiveRecord } from "./calendarSlice";

export const saveRecord = (record) => {
    return async(dispatch, getState) => {
        const newRecord = {
            ...record,
            birth_date: record.birth_date.getTime(),
        };

        if(newRecord.id !== undefined) {
            await Update(newRecord)
        } else {
            await Create(newRecord)
        }

        dispatch(onFinishSave())
        dispatch(fetchData())
    }
}

export const deleteRecord = (id) => {
    return async(dispatch, getState) => {
        await Delete(id)
        dispatch(fetchData())
    }
}

export const editRecord = (record_id) => {
    return async(dispatch, getState) => {
        const {id, first_name, last_name, birth_date} = await getOne(record_id)

        dispatch(onSetActiveRecord({id, first_name, last_name, birth_date}))
    }
}

export const fetchData = () => {
    return async(dispatch) => {
        const { items } = await getData()
        const records = items.map(({id, first_name, last_name, birth_date}) => {
            return {id, first_name, last_name, birth_date}
        })
        dispatch(onLoadData(records))
    }
}