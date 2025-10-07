import { useState } from 'react';
import './App.css';
import ProfileCard from './components/ProfileCard.jsx';


// 앱 루트: 데모용 문구 + ProfileCard 출력
function App() {
    const [count, setCount] = useState(0); // 오늘은 미사용 상태값 (나중에 인터랙션에 활용 가능)


    return (
        <>
            <div className="container">
                <h1>Hello React!</h1>
                <p>This is my first styled component.</p>
            </div>


            {/* 프로필 카드 컴포넌트 */}
            <ProfileCard />
        </>
    );
}


export default App;