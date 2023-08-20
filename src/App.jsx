import QR_CODE_PNG from "../src/assets/image-qr-code.png";

const App = () => {
    return (
        <div className="page">
            <main className="qr-code">
                <img src={QR_CODE_PNG} alt="" />
                <h2>Improve your front-end skills by building projects</h2>
                <p>
                    Scan the QR code to visit Frontend Mentor and take your
                    coding skills to the next level
                </p>
            </main>
        </div>
    );
};

export default App;
