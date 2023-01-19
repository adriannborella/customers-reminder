import { useEffect, useState } from "react"
import { Create, Delete, getData, getOne, Update } from "../api/pocketbase"

const newRecord = {
  first_name: "",
  last_name: "",
  birth_date: new Date(),
};

export function usePocketBase() {
    const [data, setData] = useState([])
    const [activeRecord, setActiveRecord] = useState({})
    const GetAll = async () => {
        const { items } = await getData()
        setData(items)
    }

    const GetOne = async (id) => {
        const result = await getOne(id)

        setActiveRecord({...result, birth_date: new Date(result.birth_date)})
    }

    const UpdateRecord = async(values) => {
        await Update(values)
        GetAll()
    }
    const InsertRecord = async (values) => {
        await Create(values)
        GetAll()
    }
    const DeleteRecord = async (id) => {
        await Delete(id)
        GetAll()
    }
    const NewRecord = (id) => {
        setActiveRecord({...newRecord})
    }

    useEffect(() => {
     GetAll()
    }, [])

    return {
        data,
        activeRecord,

        GetAll,
        GetOne,
        UpdateRecord,
        DeleteRecord,
        InsertRecord,
        NewRecord
    }
}
