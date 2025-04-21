import React from "react";
import data from "../restApi.json"; // no curly braces now

const Menu = () => {
    return (
        <section className="menu" id="menu">
            <div className="container">
                <div className="heading_section">
                    <h1 className="heading">TODAY'S MENU</h1>
                </div>
                <div className="dishes_container">
                    {
                        data.data.dishes.map((element) => {
                            return (
                                <div className="card" key={element.id}>
                                    <img src={element.image} alt={element.title} />
                                    <h3>{element.title}</h3>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Menu;
