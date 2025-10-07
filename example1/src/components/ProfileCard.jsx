import React from 'react';
import '../styles/ProfileCard.css';


// 단순 정적 카드 컴포넌트
// - 오늘은 props 없이 정적인 텍스트로 구성
// - 다음 단계에서 이미지/버튼/반응형 등을 추가할 예정
const ProfileCard = () => {
    return (
// 카드의 루트 요소: 시멘틱하게는 section/article도 고려 가능하지만
// 오늘은 단순한 데모이므로 div 사용
        <div className="ProfileCard">
            {/* 이름: 가장 중요한 정보이므로 h1 사용 */}
            <h1 className="name">Kwak Hui Beom</h1>


            {/* 직무/역할: 이름 다음 중요도이므로 h2 사용 */}
            <h2 className="job">시스템 관제</h2>


            {/* 상세 설명: 문장 단위 정보이므로 p로 구분 */}
            <p className="phrase"><strong>이름:</strong> 곽희범</p>
            <p className="phrase"><strong>나이:</strong> 28세</p>
            <p className="phrase"><strong>자기소개:</strong> ...</p>
        </div>
    );
};


export default ProfileCard;