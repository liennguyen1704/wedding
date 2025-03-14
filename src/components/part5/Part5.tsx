import { useEffect, useState } from "react";

export default function Part5() {
  const endTime = new Date("2025-03-24T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = Date.now();
      const distance = endTime - now;

      if (distance < 0) {
        clearInterval(intervalId);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const intervalId = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(intervalId);
  }, [endTime]);

  return (
    <div id="SECTION24" className="ladi-section">
      <div
        className="ladi-section-background"
        style={{
          backgroundImage: "url(/part5/bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "0% 26%",
        }}
      ></div>
      <div className="ladi-container">
        <div id="PARAGRAPH97" className="ladi-element">
          <div className="ladi-paragraph">We will become a family in</div>
        </div>
        <div id="GROUP119" className="ladi-element">
          <div className="ladi-group">
            <div id="GROUP120" className="ladi-element">
              <div className="ladi-group">
                <div id="BOX73" className="ladi-element">
                  <div
                    className="ladi-box ladi-transition"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span
                      className="time-interval"
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        letterSpacing: "-0.05em",
                        lineHeight: "1em",
                        margin: "0",
                        padding: "0",
                      }}
                    >
                      {timeLeft.days}
                    </span>
                  </div>
                </div>
                <div id="BOX74" className="ladi-element">
                  <div
                    className="ladi-box ladi-transition"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span
                      className="time-interval"
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        letterSpacing: "-0.05em",
                        lineHeight: "1em",
                        margin: "0",
                        padding: "0",
                      }}
                    >
                      {timeLeft.hours}
                    </span>
                  </div>
                </div>
                <div id="BOX75" className="ladi-element">
                  <div
                    className="ladi-box ladi-transition"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span
                      className="time-interval"
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        letterSpacing: "-0.05em",
                        lineHeight: "1em",
                        margin: "0",
                        padding: "0",
                      }}
                    >
                      {timeLeft.minutes}
                    </span>
                  </div>
                </div>
                <div id="BOX76" className="ladi-element">
                  <div
                    className="ladi-box ladi-transition"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span
                      className="time-interval"
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        letterSpacing: "-0.05em",
                        lineHeight: "1em",
                        margin: "0",
                        padding: "0",
                      }}
                    >
                      {timeLeft.seconds}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div id="GROUP121" className="ladi-element">
              <div className="ladi-group">
                <div id="HEADLINE189" className="ladi-element">
                  <h3 className="ladi-headline">Ngày</h3>
                </div>
                <div id="HEADLINE190" className="ladi-element">
                  <h3 className="ladi-headline">Giờ</h3>
                </div>
                <div id="HEADLINE191" className="ladi-element">
                  <h3 className="ladi-headline">Phút</h3>
                </div>
                <div id="HEADLINE192" className="ladi-element">
                  <h3 className="ladi-headline">Giây</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
