import axios from 'axios';

const CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_ID;
const CLIENT_PW = process.env.NEXT_PUBLIC_NAVER_PW;
const basepath = '/map-geocode/v2/geocode';

async function Geocode() {
  return axios
    .get(`${basepath}`,{
      params: {
        query: "서울시 관악구 청룡1길 37",
      },
      headers: {
        "X-NCP-APIGW-API-KEY-ID": "CLIENT_ID",
        "X-NCP-APIGW-API-KEY": "CLIENT_PW",
      },
    })
    .then((response)=>response.data)
    .catch((error)=>{
      console.log(error);
    });
}

export default Geocode();
