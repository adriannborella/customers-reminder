import { Create, Delete, getData, getOne, Update } from "../../api/pocketbase";
import { setLoading } from "../app/appSlice";
import { onFinishSave, onLoadData, onSetActiveRecord } from "./customerSlice";

export const saveRecord = (record) => {
    return async(dispatch, getState) => {
        const newRecord = {
            ...record,
            birth_date: record.birth_date.getTime(),
        };

        dispatch(setLoading(true))
        if(newRecord.id !== undefined) {
            await Update(newRecord)
        } else {
            await Create(newRecord)
        }
        dispatch(setLoading(false))

        dispatch(onFinishSave())
        dispatch(fetchData())
    }
}

export const deleteRecord = (id) => {
    return async(dispatch, getState) => {
        dispatch(setLoading(true))
        await Delete(id)
        dispatch(setLoading(false))
        dispatch(fetchData())
    }
}

export const editRecord = (record_id) => {
    return async(dispatch, getState) => {
        dispatch(setLoading(true))
        const {id, first_name, last_name, birth_date} = await getOne(record_id)

        dispatch(onSetActiveRecord({id, first_name, last_name, birth_date}))
        dispatch(setLoading(false))
    }
}

export const fetchData = () => {
    return async(dispatch) => {
        dispatch(setLoading(true))
        const { items } = await getData()
        const records = items.map(({id, first_name, last_name, birth_date}) => {
            return {id, first_name, last_name, birth_date}
        })
        dispatch(onLoadData(records))
        dispatch(setLoading(false))
    }
}