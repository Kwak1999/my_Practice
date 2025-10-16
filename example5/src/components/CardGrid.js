import React from 'react';
import '../styles/CardGrid.css'

const CardGrid = () => {
    return (
        <div>
            <div className="grid-container">
                <div className="card">
                    <img src="https://via.placeholder.com/100" alt="card1" />
                    <div className="card-content">
                        <h3>Card 1</h3>
                        <p>이것은 카드 1의 설명입니다.</p>
                        <button>자세히 보기</button>
                    </div>
                </div>

                <div className="card">
                    <img src="https://via.placeholder.com/100" alt="card2" />
                    <div className="card-content">
                        <h3>Card 2</h3>
                        <p>이것은 카드 2의 설명입니다.</p>
                        <button>자세히 보기</button>
                    </div>
                </div>

                <div className="card">
                    <img src="https://via.placeholder.com/100" alt="card3" />
                    <div className="card-content">
                        <h3>Card 3</h3>
                        <p>이것은 카드 3의 설명입니다.</p>
                        <button>자세히 보기</button>
                    </div>
                </div>

                <div className="card">
                    <img src="https://via.placeholder.com/100" alt="card4" />
                    <div className="card-content">
                        <h3>Card 4</h3>
                        <p>이것은 카드 4의 설명입니다.</p>
                        <button>자세히 보기</button>
                    </div>
                </div>

                <div className="card">
                    <img src="https://via.placeholder.com/100" alt="card5" />
                    <div className="card-content">
                        <h3>Card 5</h3>
                        <p>이것은 카드 5의 설명입니다.</p>
                        <button>자세히 보기</button>
                    </div>
                </div>

                <div className="card">
                    <img src="https://via.placeholder.com/100" alt="card6" />
                    <div className="card-content">
                        <h3>Card 6</h3>
                        <p>이것은 카드 6의 설명입니다.</p>
                        <button>자세히 보기</button>
                    </div>
                </div>
            </div>
            <div className="left"> 광고 </div>
        </div>
    );
};

export default CardGrid;