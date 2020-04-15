export const deleteFeature = item => {
    return{
        type: "DELETE_FEATURE",
        payload: item
    }
}
export default deleteFeature