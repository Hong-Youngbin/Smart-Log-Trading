import axios from "axios";
import { error } from "console";
import { NextApiRequest, NextApiResponse } from "next";


const Geocoding = (req: NextApiRequest, res: NextApiResponse) => {
  axios
    .get("https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode", {
      params: {
        query: "서울시 관악구 청룡1길 37",
      },
      headers: {
        "X-NCP-APIGW-API-KEY-ID": process.env.NEXT_PUBLIC_NAVER_ID,
        "X-NCP-APIGW-API-KEY": process.env.NEXT_PUBLIC_NAVER_PW,
      },
    })
    .then((response) => {
      const geocoding = {
        x: response.data.addresses[0].x,
        y: response.data.addresses[0].y
      }
      res.status(200).send(geocoding);
      console.log(geocoding);
      const xValue = geocoding.x;
      const yValue = geocoding.y;
    })
    .catch((error) => {
      console.log("error");
    });

}

export default Geocoding;
