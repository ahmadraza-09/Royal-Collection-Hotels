import React from "react";
import "../css/states-we-covered.css";

const statesData = [
    { name: "Himachal Pradesh", hotels: 20 },
    { name: "Madhya Pradesh", hotels: 1 },
    { name: "New Delhi", hotels: 1 },
    { name: "Punjab", hotels: 5 },
    { name: "Uttarakhand", hotels: 16 },
];

const StatesWeCovered = () => {
    
    return (
        <section className="states-we-covered-section">
            <h1>States We Covered In India</h1>
            <div className="states-we-covered-container">
                {statesData.map((state, index) => (
                    <div
                        key={index}
                        className={`state-card state-card${index + 1} swipe`}
                    >
                        <div className="state-card-content">
                            <h2>{state.name}</h2>
                            <span>
                                {state.hotels} Hotel{state.hotels > 1 ? "s" : ""}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatesWeCovered;
