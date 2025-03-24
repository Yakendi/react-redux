import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getSingleProductByIDAsyncThunk from "../redux/getSingleProduct/getSingleProductAsyncThunk";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../redux/store";
import { clearProduct } from "../redux/getSingleProduct/singleProductSlice";

const useSingleProduct = () => {
    const dispatch = useDispatch<AppDispatch>();
    const item = useSelector((state: RootState) => state.singleProduct.item);
    const { id } = useParams();

    useEffect(() => {
        
        if (!id) {
            return;
        }
        
        dispatch(getSingleProductByIDAsyncThunk(Number(id)));

        return () => {
            dispatch(clearProduct());
        }

    }, [id, dispatch]);

    console.log(item)

    return { item };
};

export default useSingleProduct;