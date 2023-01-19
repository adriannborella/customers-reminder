import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { onCloseForm, onNewRecord, onSetActiveRecord } from '../store';
import { deleteRecord, editRecord, fetchData, saveRecord } from '../store/customer/thunks';

export function useCustomerStore() {
  const {activeRecord, records, showModal} = useSelector(state => state.customer)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  const setActiveEvent = ( record ) => {
      dispatch( onSetActiveRecord( record ) )
  }

  const newRecord = () => {
    dispatch(onNewRecord())
  }

  const onCancelForm= () => {
    dispatch(onCloseForm())
  }

  const onSaveRecord = (record) => {
    dispatch( saveRecord(record))
  }

  const onDeleteRecord = (id) => {
    dispatch (deleteRecord(id))
  }

  const onEditRecord = (id) => {
    dispatch(editRecord(id))
  }

  return {
    activeRecord,
    records,
    showModal,

    setActiveEvent,
    newRecord,
    onCancelForm,
    onSaveRecord,
    onDeleteRecord,
    onEditRecord
  }
}
