import { useEffect } from "react";
import { getAllProduct } from "src/services/product.service";
import HomeCarousel from "./home-carousel";
import ProductFeature from "./product-feature";

//Các hook cần sử dụng với redux
// useSelector: lấy store từ trên redux về
// useDispatch: set lại state trên redux
import { useDispatch } from "react-redux";
import { useAppSelector } from "src/redux/config-store";
import { setListProduct } from "src/redux/slices/product.slice";

function Home() {
  //Chuyển sang dùng useAppSelector (customhook)
  // const listProduct = useSelector((state:<RootState>) => {})

  const listProduct = useAppSelector((state) => {
    return state.productReducer.listProduct;
  });
  const dispatch = useDispatch();

  // Cách 1: mong muốn sử dụng async await - Tạo function
  // useEffect(() => {
  //   const resp = getAllProduct();
    //(1.a) getAllProduct là function async nên giá trị trả về luôn là một promise nen phai dung;
    // resp.then((resp) => {
    //   console.log(resp);
    // });

    // (1.b)useEffect không cho sử dụng async trực tiếp mà nên tạo 1 hàm rồi gọi await sau đó.
    // const get = async () => {
    //   const resp = await getAllProduct();
    //   console.log(resp);
    // };
    // get();
  // }, []);

  // Cách 2: mong muốn sử dụng async await - IIFE (hàm gọi ngay lập tức)

  useEffect(() => {
    (async () => {
      const resp = await getAllProduct();

      // dispatch(action) : set lại state trên redux
      
      //1. Tự tạo:
      // const action = {
      //   type: "productSlice/setListProduct",
      //   payload: resp.content,
      // };

      //2. Chạy actionCreate do redux cung cấp:
      const action = setListProduct(resp.content);
      // console.log(action);

      dispatch(action);
    })();
  }, []);

  return (
    <div>
      <HomeCarousel />
      <ProductFeature />
    </div>
  );
}

export default Home;
