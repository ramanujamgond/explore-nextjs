"use client";

const HydrationTest = () => {
    let randomValue = Math.random();

    console.log("randomValue", randomValue);
    return (
        <div>{randomValue}</div>
    )
}
export default HydrationTest;