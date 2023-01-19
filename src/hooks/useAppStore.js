import { useSelector } from "react-redux"

export function useAppStore() {
    const { loading } = useSelector(state => state.app)

    return {
        loading,
    }
}
