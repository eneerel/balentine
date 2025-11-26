import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faStar } from "@fortawesome/free-regular-svg-icons"; // Free icons import

export default function Tandy() {
  return (
    <main className="home-container">
      {/* Зүүн тал */}
      <section className="left">
        <div className="intro">
          <FontAwesomeIcon className="icon" icon={faFlag} />
          <h1 className="title">Эрхэм зорилго</h1>
          <p className="subtitle">
            Залууст сурч хөгжих боломж олгон мэргэжлийн promotion охид залуусыг  бэлтгэж сертификат олгох, байгууллагуудад үр дүнтэй борлуулалт өсөлтийн шийдэл хүргэх, компанийнхаа хамт олныг халуун дулаан, хариуцлагатай, хамтын хүчээр хөгжин дэвших орчноор хангах
          </p>
        </div>
      </section>

      {/* Баруун тал */}
      <div className="right">
        <FontAwesomeIcon className="icon" icon={faStar} />  
        <h1 className="title">Давуу тал</h1>
        <p className="subtitle">
          Мэргэжлийн сургалт + сертификаттай баг
<br/>
Борлуулалт бодитоор өсгөдөг үр дүнтэй кампанит ажил
<br/>
Оюутан залуусыг уян хатан ажлын байраар хангадаг
<br/>
Хариуцлагатай, дүр төрх сайтай туршлагатай охидын баг
<br/>
Дулаан уур амьсгал, найдвартай менежменттэй байгууллага
        </p>
      </div>
    </main>
  );
}
