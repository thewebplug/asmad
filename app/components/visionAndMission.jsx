import Mission from "@/public/assets/mission.png";
import Vision from "@/public/assets/icons/vision.svg";
import Values from "@/public/assets/icons/values.svg";
import Image from "next/image";

export default function VisionAndMission() {
    return (
        <div className="vm">
            <div className="vm__inner">
            <div className="vm__inner__v" id="vision">
                <div className="vm__inner__v__card">
                <Image alt="" width={400} height={400}  src={Vision} />

                </div>
                <div>
                <div className="vm__inner__title">
                    Our Vision: <br />
                    <span> Offering </span> Solutions
                </div>
                <div className="vm__inner__subtitle">
                To offer solutions that brings visible, quantifiable and verifiable
result to our clients first time, every time.

                </div>


                </div>
            </div>
            <div className="vm__inner__v" id="mission">
            <div>
                <div className="vm__inner__title">
                    Our Mission: <br />
                    <span>Provide</span> business <br /> with the <span>positive</span> <br /> incentives
                    
                </div>
                <div className="vm__inner__subtitle">
                Our mission is to provide business with the positive incentive they
                need to compete responsibly, profitably and deliver value in an everevolving business environment.

                </div>


                </div>

                            <div className="vm__inner__v__card">
                                            <Image alt="" width={400} height={351}  src={Mission} />
                                
                            </div>

            </div>

            <div className="vm__inner__v" id="values">
                <div className="vm__inner__v__card">
                <Image alt="" width={400} height={400}  src={Values} />
                </div>
                <div>
                <div className="vm__inner__title">
                    Our Values: <br />
                    Continuously <span>achieve</span> <br /> <span>superior</span> financial & <br /> operating results
                </div>
                <div className="vm__inner__subtitle">
                To continuously achieve superior financial and operating results
while simultaneously adhering to high business and ethical
standards.
ASMAD Continuously seeks high performance standards; maintaining
a strong and growing long-term leadership position in the ever
changing, competitive environments in which we operate.

                </div>


                </div>
            </div>
            </div>
        </div>
    )
} 