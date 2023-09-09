import React from "react";
import { styled } from "styled-components";

const HomeStyle = styled.div`
  width: max(400px, 70%);
  margin: 0 auto;
`;
const HomeDiv = styled.div`
  margin-bottom: 1rem;
`;
const HomeTitle = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;
const HomeContent = styled.div`
  font-size: 1rem;
  margin-bottom: 1rem;
`;
export default function Home() {
  return (
    <HomeStyle>
      <HomeDiv>
        <HomeTitle>【自我介紹與動機】</HomeTitle>
        <HomeContent>
          我在2022年畢業於國立虎尾科技大學
          光電工程系，在求學過程中有接觸過程式，但那時候只是有興趣並未開始學習，真正促使我開始學網頁設計是因為我家人喜歡做甜點，卻沒有平台可以販售就問我會不會製作網頁，從那時候開始我就立志要試著做出網站供有需要的人使用。
        </HomeContent>
      </HomeDiv>
    </HomeStyle>
  );
}
