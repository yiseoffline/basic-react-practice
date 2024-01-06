import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// [마지막 단계 : 코드 챌린지]
// - Home에서 해줬던 loading을 Detail에 해주기
// - movie가 State에 없음. 현재 API에서 json을 받아와서 아무것도 안 하고 있는 상태.
// -> 힌트: json을 state에 넣어보기

function Detail() {
    const {id} = useParams(); // id값 찾아오기

    const getMovie = async () =>{
        const json = await ( //api로부터 정보 fetch
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
        console.log(json);
    };

    useEffect(()=>{
        getMovie();
    },[]);

    return (
      <div>
        <h1>Detail</h1>
      </div>
    );
}
export default Detail;