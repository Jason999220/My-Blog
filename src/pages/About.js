import React from "react";
import { styled } from "styled-components";

const AboutStyle = styled.div`
  width: max(400px, 70%);
  margin: 0 auto;
`;
const AboutDiv = styled.div`
  margin-bottom: 1rem;
`;
const AboutTitle = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;
const AboutContent = styled.div`
  font-size: 1rem;
  margin-bottom: 1rem;
`;
const Work = styled.div`
  margin-bottom: 1rem;
  background: gray;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 10px 1px rgba(150, 200, 200, 0.9);
`;
const CompanyName = styled.div`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;
const Period = styled.div`
  font-size: 0.8rem;
  margin-bottom: 1rem;
`;
const WorkContent = styled.div`
  font-size: 1rem;
  margin-bottom: 1rem;
`;
export default function About() {
  return (
    <AboutStyle>
      <AboutDiv>
        <AboutTitle>【校內社團經驗】</AboutTitle>
        <AboutContent>
          大學時期曾擔任過團康性質的幹部、系學會的活動長。
          在擔任團康性質幹部時，帶領過5人以上的小團體舉辦活動，從0到1的籌備，籌畫活動的技巧等，學習到在不同領域所帶領的方式都不盡相同
          。
          在任職於活動長一年中，得知與人溝通互動的重要性，也學會在不懂的部分要如何有效地解決問題。
          多次擔任系上活動的幹部及兩次以上的總召職位，在此過程體悟很多，並瞭解如何協調上級與下級之間的衝突。
        </AboutContent>
      </AboutDiv>
      <AboutDiv>
        <AboutTitle>【工作經驗】</AboutTitle>
        <AboutContent>
          <Work>
            <CompanyName>客美多好食股份有限公司</CompanyName>
            <Period>2022/07 - 2022/10</Period>
            <WorkContent>
              在上邊閒暇時學習如何使用POS機，並嘗試撰寫程式製作簡易POS機功能。
              前端使用React Hook
              架設畫面，並使用Route完成SPA，雖然是第一個React作品，但從中收穫到許多知識點，例如渲染、VDOM、SPA、SSR等，在技術棧中學會了useState、三元表達式、Route應用
              。
              遇到最大的難點應該是組件間資料的傳遞，此時還不會useContext，都只能用props
              一層一層地傳遞，使得明明不需要此資料的組件也要引用，才可以將資料傳遞給下一層。
            </WorkContent>
          </Work>
          <Work>
            <CompanyName>資展國際股份有限公司</CompanyName>
            <Period>2023/04 - 2023/08</Period>
            <WorkContent>
              參與資策會全端工程師養成班，擔任組長與學員職位，並且領導團隊開發外包網站
              --- Piece Of Case 。
              專案內容：建立外包平台，明瞭的提案與接案操作，雖然市面上已有許多接案平台，但很少有進度管理以及對接案者報酬的保障，這在部份我們有做客製化的進度條供案主更能了解目前案件的完成度，並在開始合作時就會將報酬轉帳給我們第三方平台，依照每次進度的完成會由我們第三方再轉帳給接案者，防止案主不匯錢的情形發生。
              技術層面： 以 React 作為前端框架的基底 ，運用
              axios技術達到前後端API整合，並利用綠界ECPay完成模擬付款的功能，美化部分則是使用了Bootstrap5
              與 Ant Design。 後端是以 Laravel
              作為前端與資料庫交互的核心，其中運用到 Socket.io
              達到即時聊天的功能。 資料庫則是選擇 MySQL
              儲存所有使用者以及案件資訊，撰寫Procedure供後端使用。
              另外我們使用了 Git 作為版本控管。
            </WorkContent>
          </Work>
        </AboutContent>
      </AboutDiv>
    </AboutStyle>
  );
}
