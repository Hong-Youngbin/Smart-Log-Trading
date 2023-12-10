import axios from "axios";
import { error } from "console";
import { NextApiRequest, NextApiResponse } from "next";

export default function Direction(req: NextApiRequest, res: NextApiResponse) {
  axios
    .get("https://naveropenapi.apigw.ntruss.com/map-direction/v1/driving", {
      params: {
        start: "126.9483908,37.4812141",
        goal: "127.0166045,37.5128085",
        cartype: "4",
      },
      headers: {
        "X-NCP-APIGW-API-KEY-ID": process.env.NEXT_PUBLIC_NAVER_ID,
        "X-NCP-APIGW-API-KEY": process.env.NEXT_PUBLIC_NAVER_PW,
      },
    })
    .then((response) => {
      const result = {
        distance: response.data.route.traoptimal[0].summary.distance,
        // fare: response.data.route.traoptimal[0].summary.taxiFare
      }
      res.status(200).send(result.distance);
      console.log(result);
    })
    .catch((error) => {
      console.log("error");
    });
}

//우리집 - 126.9483908,37.4812141
//잠원월드메르디앙 - 127.0166045,37.5128085