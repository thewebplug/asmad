export default function ContactUs() {
    return (
        <div className="contactUs" id="contact">
            <div className="contactUs__title">
                Got some questions?
                <span>Reach out</span> to us
            </div>
            <div className="contactUs__subtitle">
                Don't hesitate to reach you to us with any questions you might have. Don't hesitate to reach you to us with any questions you might have
            </div>
            <form className="contactUs__form">
                <input type="text" placeholder="Enter email" />
                <textarea name="" id="" placeholder="Enter message" ></textarea>
                <button>Contact us</button>
            </form>
        </div>
    )
}