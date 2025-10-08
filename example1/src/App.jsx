import { useState } from 'react';
import './App.css';
import ProfileCard from "./components/ProfileCard.jsx";
import LayoutExample from "./components/LayoutExample.jsx";
import NoticeCard from "./components/NoticeCard.jsx";


// 앱 루트: 데모용 문구 + ProfileCard 출력
function App() {
    const [count, setCount] = useState(0); // 오늘은 미사용 상태값 (나중에 인터랙션에 활용 가능)


    return (
        <div className="card-container">
            <div className="top-section">
                <ProfileCard />
                <LayoutExample />
            </div>
            <div className="notice-wrap">
                <NoticeCard
                    title="서비스 점검 안내"
                    message="10월 12일(일) 02:00~04:00 점검 예정입니다."
                    accent="#FF7A00"
                />
                <NoticeCard
                    title="신규 기능 출시"
                    message="프로필 커버 이미지를 설정할 수 있어요."
                    accent="#2ECC71"
                />
            </div>
        </div>

    );
}


export default App;