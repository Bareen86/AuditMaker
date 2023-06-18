import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers";
import { useDispatch } from "react-redux";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector